

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
              Tập trung kiến tạo các giải pháp an ninh mạng bền vững thông qua tư duy thiết kế hệ thống, đồng thời tối ưu hóa và bảo vệ giá trị tài sản trí tuệ từ các giải pháp công nghệ và sáng tạo kỹ thuật.
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

              {/* GitHub */}
              <a href="https://github.com/dzokha" target="_blank" rel="noreferrer" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://facebook.com/dzokha" target="_blank" rel="noreferrer" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com/@dzokha-vn" target="_blank" rel="noreferrer" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                </svg>
              </a>

            </div>

            <div className="copyright-text">
              © {new Date().getFullYear()} Dzokha.vn · Secure by Design
            </div>
          </div>

        </div> {/* Đóng sidebar-inner */}
      </aside>

      <main className="main-content">
         <div id="projects" className="section-title">01 // FEATURED WORK</div>

        {/* Project 1 */}
        <div className="project-card" onClick={() => window.open("https://github.com/dzokha/SDN-FlexShield-Sentinel", "_blank")}>
          <div className="card-top">
            <span className="project-year">2026 — PRESENT</span>
            <span style={{color: '#2563EB', fontSize: '0.75rem', fontWeight: 700}}>SECURE SYSTEM</span>
          </div>
          <h2 className="card-title">
            SDN-FlexShield Sentinel
            <span className="arrow-icon">→</span>
          </h2>
          <p className="card-desc">
            Một tiện ích mở rộng trình duyệt mã nguồn mở giúp nâng cao nhận thức an ninh mạng của người dùng thông qua cơ chế phát hiện lừa đảo (phishing) phía máy khách có khả năng giải thích được.
          </p>
          <div className="tags">
            <span className="tag">Phishing Detection</span>
            <span className="tag">Explainable Security</span>
            <span className="tag">Browser Extension</span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card" onClick={() => navigate('/geneai')}>
          <div className="card-top">
             <span className="project-year">2025</span>
          </div>
          <h2 className="card-title">
            SOAP
            <span className="arrow-icon">→</span>
          </h2>
          <p className="card-desc">
            Công cụ tự động chú giải gen sinh học. Thiết kế tối giản (Minimalism) tập trung tuyệt đối vào hiển thị dữ liệu phức tạp, giúp các nhà nghiên cứu thao tác nhanh hơn.
          </p>
          <div className="tags">
            <span className="tag">Genome Annotation</span>
            <span className="tag">Bioinformatics</span>
            <span className="tag">Spring</span>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card" onClick={() => window.open("https://github.com/dzokha/IDS-AC", "_blank")}>
          <div className="card-top">
             <span className="project-year">2021</span>
          </div>
          <h2 className="card-title">
            IDS-AC
            <span className="arrow-icon">→</span>
          </h2>
          <p className="card-desc">
            Một hệ thống phát hiện xâm nhập thích ứng được phát triển dành cho người dùng kỹ thuật và sinh viên nhằm nghiên cứu, thử nghiệm và cải tiến các kỹ thuật phát hiện tấn công hiện đại.          </p>
          <div className="tags">
            <span className="tag">Intrusion Detection</span>
            <span className="tag">Adaptive Security</span>
            <span className="tag">Snort</span>
          </div>
        </div>



        {/* ABOUT SECTION */}
        <div id="about" className="about-section">

          <div className="section-title">02 // ABOUT & PHILOSOPHY</div>

          <div className="about-content">

            <p>
              Công việc của tôi là sự giao thoa giữa <strong>an ninh mạng, kiến trúc hệ thống và sở hữu công nghiệp</strong>. 
              Thay vì chạy theo các biện pháp khắc phục bề mặt, tôi dành nhiều thời gian để nghiên cứu cách xây dựng sự an toàn 
              ngay từ nền tảng cốt lõi (Secure by Design).
            </p>

            <p>
              Cách học và làm việc quen thuộc của tôi là trực tiếp xây dựng các bản thực nghiệm (Proof of Concept) 
              và môi trường mô phỏng. Thông qua đó, tôi từng bước kiểm chứng các giả thuyết về phát hiện xâm nhập, 
              nhận diện rủi ro lừa đảo và tối ưu hóa kiến trúc bảo mật.
            </p>

            <p>
              Bên cạnh những dòng code, một góc nhìn khác mà tôi luôn tâm niệm là giá trị pháp lý của công nghệ. 
              Đằng sau mỗi giải pháp kỹ thuật tinh gọn đều là một tài sản cần được bảo vệ, đóng gói và phát huy giá trị 
              thông qua lăng kính của <strong>sở hữu trí tuệ và quyền sở hữu công nghiệp</strong>.
            </p>
          </div>

          <div className="about-skills">

            <div className="skill-group">
              <div className="skill-title">Research Focus</div>
              <div className="tags">
                <span className="tag">Cybersecurity Architecture</span>
                <span className="tag">Threat Detection</span>
                <span className="tag">Phishing Defense</span>
                <span className="tag">Explainable Security</span>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-title">Technology</div>
              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">Spring</span>
                <span className="tag">React</span>
                <span className="tag">Network Protocols</span>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-title">Interests & Philosophy</div>
              <div className="tags">
                <span className="tag">Secure by Design</span>
                <span className="tag">Tech Patents & IP</span>
                <span className="tag">Open Source Culture</span>
              </div>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}

export default App;