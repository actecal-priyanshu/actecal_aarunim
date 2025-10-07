import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Community Section */}
      <section className="footer-community-section">
        <div className="footer-community-container">
          <div className="footer-community-avatars">
            <div className="footer-avatar-grid">
              {[...Array(40)].map((_, index) => {
                const hasImage = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35].includes(index);
                const avatarEmojis = ['👨‍💼', '👩‍💼', '👨‍💻', '👩‍💻', '👨‍🔬', '👩‍🔬', '👨‍🎨', '👩‍🎨', '👨‍🏫', '👩‍🏫', '👨‍⚕️', '👩‍⚕️'];
                return (
                  <div key={index} className={`footer-avatar-item ${hasImage ? 'has-image' : ''}`}>
                    {hasImage && (
                      <div className="footer-avatar-placeholder">
                        <span className="footer-avatar-emoji">{avatarEmojis[index % avatarEmojis.length]}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="footer-community-text">
              <h2 className="footer-community-title">
                Join <span className="footer-highlight-happy">15 million</span> users
              </h2>
              <p className="footer-community-subtitle">who grow their business with BizSuite</p>
            </div>
          </div>

          <div className="footer-testimonial-card">
            <div className="footer-quote-icon">💬</div>
            <div className="footer-testimonial-content">
              <p className="footer-testimonial-text">
                The processing time for accounting documents has been noticeably reduced, in certain cases even from 2 days to only 5 hours. As a result we can now focus on what matters: reporting and advising the client.
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
