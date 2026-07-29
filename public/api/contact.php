<?php
// Aplos Logix - Production Contact Form PHP Mailer
// Compatible with Hostinger, cPanel, and Apache Shared Hosting

// Set Timezone to Indian Standard Time (IST - Asia/Kolkata)
date_default_timezone_set('Asia/Kolkata');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);
    exit();
}

// Get JSON input
$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true);

if (!$data) {
    // Fallback to $_POST if sent as form-data
    $data = $_POST;
}

$name = isset($data['name']) ? trim($data['name']) : '';
$company = isset($data['company']) ? trim($data['company']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$phone = isset($data['phone']) ? trim($data['phone']) : '';
$subject = isset($data['subject']) ? trim($data['subject']) : 'Website Inquiry';
$service = isset($data['service']) ? trim($data['service']) : 'Industrial IIoT Solution';
$message = isset($data['message']) ? trim($data['message']) : '';
$pageUrl = isset($data['pageUrl']) ? trim($data['pageUrl']) : 'https://aploslogix.com';
$website = isset($data['website']) ? trim($data['website']) : ''; // Honeypot

// Honeypot check for spam bots
if (!empty($website)) {
    echo json_encode(["success" => true, "message" => "Thank you. Your enquiry has been submitted successfully."]);
    exit();
}

// Validation
if (empty($name) || empty($email) || empty($phone) || empty($message)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please fill in all required fields (Name, Email, Phone, and Message)."]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please enter a valid email address."]);
    exit();
}

$refId = 'REQ-' . strtoupper(dechex(time())) . '-' . rand(1000, 9999);
$to = "info@aploslogix.com";
$cc = "sales@aploslogix.com";
$from = "marketing@aploslogix.in";

$cleanName = htmlspecialchars($name);
$cleanCompany = htmlspecialchars($company ?: 'N/A');
$cleanEmail = htmlspecialchars($email);
$cleanPhone = htmlspecialchars($phone);
$cleanService = htmlspecialchars($service);
$cleanSubject = htmlspecialchars($subject);
$cleanMessage = nl2br(htmlspecialchars($message));
$cleanPageUrl = htmlspecialchars($pageUrl);
$dateStr = date("F j, Y, g:i a") . " (IST)";

$emailSubject = "[Aplos Logix Enquiry] " . $cleanSubject . " - " . $cleanName;

// HTML Email Body
$htmlBody = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <title>New Website Enquiry</title>
</head>
<body style='font-family: Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 20px;'>
  <table width='100%' cellpadding='0' cellspacing='0' style='max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;'>
    <tr>
      <td style='background-color: #04264c; padding: 24px; text-align: center; color: #ffffff;'>
        <h2 style='margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.5px;'>APLOS LOGIX — WEBSITE ENQUIRY</h2>
        <p style='margin: 4px 0 0 0; font-size: 12px; color: #fb923c;'>Ref: {$refId}</p>
      </td>
    </tr>
    <tr>
      <td style='padding: 24px;'>
        <table width='100%' cellpadding='8' cellspacing='0' style='font-size: 14px; color: #334155; line-height: 1.6;'>
          <tr><td width='35%' style='font-weight: bold; background-color: #f1f5f9;'>Customer Name:</td><td style='background-color: #f8fafc;'>{$cleanName}</td></tr>
          <tr><td style='font-weight: bold; background-color: #f1f5f9;'>Company Name:</td><td style='background-color: #f8fafc;'>{$cleanCompany}</td></tr>
          <tr><td style='font-weight: bold; background-color: #f1f5f9;'>Email Address:</td><td style='background-color: #f8fafc;'><a href='mailto:{$cleanEmail}' style='color: #ea580c; font-weight: bold;'>{$cleanEmail}</a></td></tr>
          <tr><td style='font-weight: bold; background-color: #f1f5f9;'>Phone Number:</td><td style='background-color: #f8fafc;'><a href='tel:{$cleanPhone}' style='color: #0284c7; font-weight: bold;'>{$cleanPhone}</a></td></tr>
          <tr><td style='font-weight: bold; background-color: #f1f5f9;'>Requirement:</td><td style='background-color: #f8fafc;'><strong>{$cleanService}</strong></td></tr>
          <tr><td style='font-weight: bold; background-color: #f1f5f9;'>Page URL:</td><td style='background-color: #f8fafc;'>{$cleanPageUrl}</td></tr>
          <tr><td style='font-weight: bold; background-color: #f1f5f9;'>Time:</td><td style='background-color: #f8fafc;'>{$dateStr}</td></tr>
        </table>
        <h4 style='margin: 20px 0 8px 0; color: #04264c;'>Customer Message:</h4>
        <div style='background-color: #f8fafc; border-left: 4px solid #ea580c; padding: 16px; font-size: 14px;'>{$cleanMessage}</div>
      </td>
    </tr>
  </table>
</body>
</html>
";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = "From: Aplos Logix Website <{$from}>";
$headers[] = "Reply-To: {$cleanName} <{$cleanEmail}>";
$headers[] = "Cc: {$cc}";
$headers[] = 'X-Mailer: PHP/' . phpversion();

$sent = @mail($to, $emailSubject, $htmlBody, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(["success" => true, "message" => "Thank you. Your enquiry has been submitted successfully."]);
} else {
    // If native mail failed, return fallback success response and log
    error_log("[Aplos Mail Failure] Ref: {$refId} - Native mail function failed.");
    // Return friendly error response
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Could not send email directly from server. Please email us at info@aploslogix.com."]);
}
