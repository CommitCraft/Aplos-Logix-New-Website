import React from "react";

/**
 * Reusable Aplos wordmark.
 * Use `light` when the logo is placed on a dark background.
 */
export default function AplosLogo({ light = false, showTagline = true }) {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      lineHeight: 1,
    },
    logoText: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      whiteSpace: "nowrap",
    },
    brace: {
      fontSize: "clamp(20px, 2.2vw, 28px)",
      fontWeight: 800,
      color: "#1d9bf0",
      lineHeight: 1,
    },
    aplos: {
      fontSize: "clamp(20px, 2.2vw, 28px)",
      fontFamily: "Georgia, 'Times New Roman', serif",
      fontWeight: 700,
      color: "#ff8c1bff",
      letterSpacing: "2px",
      lineHeight: 1,


    },
    tagline: {
      fontSize: "clamp(7px, 0.9vw, 11px)",
      fontWeight: 400,
      color: light ? "#ffffff" : "#17365d",
      margin: "4px 0 0",
      letterSpacing: "0.02em",
      opacity: light ? 0.9 : 0.8,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoText}>
        <span style={styles.brace}>{"{"}</span>
        <span style={styles.aplos}>APLÓS</span>
        <span style={styles.brace}>{"}"}</span>
      </div>
      {showTagline ? <p style={styles.tagline}>Let’s keep it simple.</p> : null}
    </div>
  );
}
