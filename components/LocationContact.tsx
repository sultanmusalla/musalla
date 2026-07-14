export default function LocationContact() {
  return (
    <section id="locationContact" style={{ backgroundColor: "#ffffff" }}>
      <div className="wrap loc-grid">
        <div className="map-frame">
          <iframe
            title="Map location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-121.8300%2C47.8500%2C-121.8000%2C47.8750&layer=mapnik&marker=47.8626%2C-121.8157"
            loading="lazy"
          />
        </div>
        <div >
          <div className="section-head" style={{ textAlign: "left", marginBottom: "24px" }}>
            <div className="kicker">Visit Us</div>
            <h2>Location &amp; Contact</h2>
          </div>
          <ul className="contact-list">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <div>
                <div className="lbl">Address</div>
                <div className="val">Sultan, Washington</div>
                <div className="val" style={{color: "#d81b60", fontWeight: 500, fontSize: "0.85rem", marginTop: "4px"}}>*For exact address, please join the WhatsApp group</div>
              </div>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.99.36 1.96.68 2.9a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.18-1.18a2 2 0 012.11-.45c.94.32 1.91.55 2.9.68A2 2 0 0122 16.92z" />
              </svg>
              <div>
                <div className="lbl">Phone</div>
                <div className="val">General Inquiry: +1 (253) 266-5978</div>
                <div className="val">Website Issue: +1 (425) 370-7128</div>
              </div>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              <div>
                <div className="lbl">Email</div>
                <div className="val">contactsultanmusalla@gmail.com</div>
              </div>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <div>
                <div className="lbl">WhatsApp Group</div>
                <div className="val">
                  <a href="https://chat.whatsapp.com/D7T6lnH0SrXEyYhbffr16t?s=cl&p=i&ilr=0" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal-mid)', fontWeight: 600 }}>Join Group</a>
                </div>
              </div>
            </li>
          </ul>

          <div style={{ marginTop: "32px", display: "flex", gap: "16px", alignItems: "center" }}>
            <div style={{ width: "100px", height: "100px", background: "#fff", padding: "8px", borderRadius: "8px", border: "1px solid var(--line)", flexShrink: 0 }}>
              <img src="/musallaWhatsappQRCode.jpg" alt="WhatsApp QR Code" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--ink-soft)" }}>
              Scan the QR code to easily join our official WhatsApp group from your phone.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
