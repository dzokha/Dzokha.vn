

import './styles/App.css';
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="layout-wrapper">
      <aside className="sidebar">
        {/* Nội dung Sidebar */}
        <div className="sidebar-inner">
          
          <div className="identity-group">
            <h1 className="brand-alias">Dzokha</h1>
            <div className="brand-fullname">NGUYỄN VĂN KHA</div> 
            
            <div className="role-container">
              <span className="role-en">Cybersecurity & IP Researcher</span>
              <span className="role-vn">Nghiên cứu An ninh mạng & Sở hữu trí tuệ</span>
            </div>

            <div className="separator"></div>

            <p className="intro-text">
              Kiến tạo các giải pháp an ninh bền vững và tối ưu hóa giá trị tài sản trí tuệ thông qua tư duy 
              thiết kế hệ thống chuyên sâu.
            </p>
          </div>

          <nav className="nav-menu">
            <a href="#projects" className="nav-link active">
              <span className="nav-indicator"></span>
              <div className="nav-content">
                <span className="nav-en">Selected Projects</span>
                <span className="nav-vn">Dự án tiêu biểu</span>
              </div>
            </a>
            <a href="#about" className="nav-link">
              <span className="nav-indicator"></span>
              <div className="nav-content">
                <span className="nav-en">About & Philosophy</span>
                <span className="nav-vn">Giới thiệu & Triết lý</span>
              </div>
            </a>
          </nav>

          {/* CHỈ CÓ 1 FOOTER DUY NHẤT Ở ĐÂY */}
          <div className="sidebar-footer">
            <div className="social-links">
              <a href="https://github.com/dzokha" target="_blank" rel="noreferrer" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://linkedin.com/in/dzokha" target="_blank" rel="noreferrer" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="mailto:contact@dzokha.vn" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
            <div className="copyright-text">
               © 2026 Dzokha.vn · Secure by Design
            </div>
          </div>
        </div> {/* Đóng sidebar-inner */}
      </aside>

      <main className="main-content">
         <div className="section-title">01 // FEATURED WORK</div>

        {/* Project 1 */}
        <div className="project-card">
          <div className="card-top">
            <span className="project-year">2024 — PRESENT</span>
            <span style={{color: '#2563EB', fontSize: '0.75rem', fontWeight: 700}}>SECURE SYSTEM</span>
          </div>
          <h2 className="card-title">
            SDN-FlexShield Security
            <span className="arrow-icon">→</span>
          </h2>
          <p className="card-desc">
            Nền tảng giám sát an ninh mạng thời gian thực dành cho SOC. 
            Tối ưu hóa giao diện Dark Mode để giảm tải thị giác, tích hợp module phân tích luồng dữ liệu thông minh giúp ngăn chặn xâm nhập trái phép.
          </p>
          <div className="tags">
            <span className="tag">Cybersecurity UI</span>
            <span className="tag">React Dashboard</span>
            <span className="tag">Data Viz</span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card" onClick={() => navigate('/geneai')}>
          <div className="card-top">
             <span className="project-year">2024</span>
          </div>
          <h2 className="card-title">
            GeneAI Analytics
            <span className="arrow-icon">→</span>
          </h2>
          <p className="card-desc">
            Công cụ AI tự động chú giải gen sinh học. Thiết kế tối giản (Minimalism) tập trung tuyệt đối vào hiển thị dữ liệu phức tạp, giúp các nhà nghiên cứu thao tác nhanh hơn 40%.
          </p>
          <div className="tags">
            <span className="tag">AI Interface</span>
            <span className="tag">Bioinformatics</span>
            <span className="tag">Python</span>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <div className="card-top">
             <span className="project-year">2023</span>
          </div>
          <h2 className="card-title">
            Shop Fish E-commerce
            <span className="arrow-icon">→</span>
          </h2>
          <p className="card-desc">
            Sàn thương mại điện tử chuyên biệt. Xây dựng trải nghiệm người dùng (UX) liền mạch từ khâu tìm kiếm đến thanh toán, tối ưu tỷ lệ chuyển đổi đơn hàng.
          </p>
          <div className="tags">
            <span className="tag">E-commerce</span>
            <span className="tag">Fullstack</span>
            <span className="tag">UX Research</span>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;