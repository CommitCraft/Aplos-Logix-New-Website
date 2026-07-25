import { createTransporter } from "../config/smtp.js";

// Helper to escape HTML characters in visitor input
function sanitizeInput(str = "") {
  if (typeof str !== "string") return "";
  return str
    .trim()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactForm(req, res) {
  const referenceId = `REQ-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

  try {
    const {
      name,
      company,
      email,
      phone,
      subject,
      service,
      requirement,
      message,
      pageUrl,
      website, // Honeypot field
    } = req.body || {};

    // 1. Bot Honeypot Check: Silent drop if bot filled hidden field
    if (website && website.trim() !== "") {
      console.warn(`[Contact Form] Honeypot triggered. Ref: ${referenceId}`);
      return res.status(200).json({
        success: true,
        message: "Thank you. Your enquiry has been submitted successfully.",
      });
    }

    // 2. Trim inputs
    const rawName = (name || "").trim();
    const rawCompany = (company || "").trim();
    const rawEmail = (email || "").trim();
    const rawPhone = (phone || "").trim();
    const rawSubject = (subject || service || requirement || "Website Inquiry").trim();
    const rawService = (service || requirement || subject || "Industrial IIoT & Automation").trim();
    const rawMessage = (message || "").trim();
    const rawPageUrl = (pageUrl || "https://aploslogix.com").trim();

    // 3. Validation - Required fields
    if (!rawName || !rawEmail || !rawPhone || !rawMessage) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields (Name, Email, Phone, and Message).",
      });
    }

    // 4. Validation - Oversized message check (max 5000 chars)
    if (rawMessage.length > 5000) {
      return res.status(400).json({
        success: false,
        message: "Message length exceeds the maximum allowed limit of 5000 characters.",
      });
    }

    // 5. Format Validations - Email Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(rawEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // 6. Format Validations - Phone Regex
    const phoneRegex = /^[\+\d\s\-\(\)]{7,25}$/;
    if (!phoneRegex.test(rawPhone)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid phone number.",
      });
    }

    // 7. Sanitize inputs for HTML email body
    const cleanName = sanitizeInput(rawName);
    const cleanCompany = sanitizeInput(rawCompany) || "N/A";
    const cleanEmail = sanitizeInput(rawEmail);
    const cleanPhone = sanitizeInput(rawPhone);
    const cleanSubject = sanitizeInput(rawSubject);
    const cleanService = sanitizeInput(rawService);
    const cleanMessage = sanitizeInput(rawMessage).replace(/\n/g, "<br />");
    const cleanPageUrl = sanitizeInput(rawPageUrl);

    const submissionDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const smtpPass = (process.env.SMTP_PASS || "").trim();

    // 8. Graceful Dev Fallback if SMTP Password is not yet filled in .env
    if (!smtpPass) {
      console.log(`[Contact Form NOTICE] Enquiry recorded locally (SMTP_PASS is empty in .env). Ref: ${referenceId}, From: ${rawEmail}`);
      return res.status(200).json({
        success: true,
        message: "Thank you. Your enquiry has been submitted successfully.",
      });
    }

    // 9. SMTP Transport Configuration
    const transporter = createTransporter();
    const fromUser = process.env.SMTP_USER || "marketing@aploslogix.in";
    const toEmail = process.env.CONTACT_TO_EMAIL || "info@aploslogix.com";
    const ccEmail = process.env.CONTACT_CC_EMAIL || "sales@aploslogix.com";

    // 10. HTML Email Template
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Website Enquiry</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 20px;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <!-- Header -->
    <tr>
      <td style="background-color: #04264c; padding: 24px; text-align: center; color: #ffffff;">
        <h2 style="margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.5px;">APLOS LOGIX — WEBSITE ENQUIRY</h2>
        <p style="margin: 4px 0 0 0; font-size: 12px; color: #fb923c;">Ref: ${referenceId}</p>
      </td>
    </tr>

    <!-- Body Content -->
    <tr>
      <td style="padding: 24px;">
        <h3 style="margin-top: 0; color: #04264c; font-size: 16px; border-b: 2px solid #ea580c; padding-bottom: 8px;">Inquiry Details</h3>
        
        <table width="100%" cellpadding="8" cellspacing="0" style="font-size: 14px; color: #334155; line-height: 1.6;">
          <tr>
            <td width="35%" style="font-weight: bold; color: #04264c; background-color: #f1f5f9;">Customer Name:</td>
            <td style="background-color: #f8fafc;">${cleanName}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #04264c; background-color: #f1f5f9;">Company Name:</td>
            <td style="background-color: #f8fafc;">${cleanCompany}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #04264c; background-color: #f1f5f9;">Email Address:</td>
            <td style="background-color: #f8fafc;"><a href="mailto:${cleanEmail}" style="color: #ea580c; text-decoration: none; font-weight: bold;">${cleanEmail}</a></td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #04264c; background-color: #f1f5f9;">Phone Number:</td>
            <td style="background-color: #f8fafc;"><a href="tel:${cleanPhone.replace(/\s/g, "")}" style="color: #0284c7; text-decoration: none; font-weight: bold;">${cleanPhone}</a></td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #04264c; background-color: #f1f5f9;">Selected Requirement:</td>
            <td style="background-color: #f8fafc;"><strong>${cleanService}</strong></td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #04264c; background-color: #f1f5f9;">Subject:</td>
            <td style="background-color: #f8fafc;">${cleanSubject}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #04264c; background-color: #f1f5f9;">Submitted Page URL:</td>
            <td style="background-color: #f8fafc;"><a href="${cleanPageUrl}" style="color: #64748b; font-size: 12px;">${cleanPageUrl}</a></td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #04264c; background-color: #f1f5f9;">Submission Time:</td>
            <td style="background-color: #f8fafc; font-size: 12px;">${submissionDate} (IST)</td>
          </tr>
        </table>

        <!-- Message Box -->
        <h4 style="margin: 20px 0 8px 0; color: #04264c; font-size: 14px;">Customer Message:</h4>
        <div style="background-color: #f8fafc; border-left: 4px solid #ea580c; padding: 16px; font-size: 14px; color: #1e293b; border-radius: 4px; line-height: 1.6;">
          ${cleanMessage}
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 11px; color: #64748b; border-t: 1px solid #e2e8f0;">
        This email was sent automatically from the Aplos Logix website contact form.<br />
        To reply directly to the visitor, simply click "Reply" in your email client.
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // 11. Plain Text Fallback Template
    const textContent = `
APLOS LOGIX — NEW WEBSITE ENQUIRY
=================================
Ref: ${referenceId}
Date: ${submissionDate} (IST)

Customer Name: ${rawName}
Company: ${rawCompany || "N/A"}
Email: ${rawEmail}
Phone: ${rawPhone}
Selected Service / Requirement: ${rawService}
Subject: ${rawSubject}
Page URL: ${rawPageUrl}

MESSAGE:
---------------------------------
${rawMessage}
---------------------------------
    `.trim();

    // 12. Mail Options
    const mailOptions = {
      from: `"Aplos Logix Website" <${fromUser}>`,
      to: toEmail,
      replyTo: rawEmail,
      subject: `[Aplos Logix Enquiry] ${rawSubject} - ${rawName}`,
      html: htmlContent,
      text: textContent,
    };

    if (ccEmail && ccEmail.trim() !== "") {
      mailOptions.cc = ccEmail.trim();
    }

    // 13. Send Email
    await transporter.sendMail(mailOptions);

    console.log(`[Contact Form] Email sent successfully. Ref: ${referenceId}, To: ${toEmail}`);

    return res.status(200).json({
      success: true,
      message: "Thank you. Your enquiry has been submitted successfully.",
    });
  } catch (err) {
    // Log safe error message with reference ID (no passwords, SMTP auth or credentials logged)
    console.error(`[Contact Form ERROR] Ref: ${referenceId} - Failed to send email. Error:`, err?.message || err);

    return res.status(500).json({
      success: false,
      message: "An error occurred while submitting your request. Please try again later or contact us directly at info@aploslogix.com.",
    });
  }
}
