import { useNavigate } from 'react-router-dom';
import trLogo from './assets/images/timerent.png';
import scLogo from './assets/images/sangche.jpg';
import fishLogo from './assets/images/shopfish.png';
import sdnImage from './assets/images/sfssentinal.png'; 
import geneLogo from './assets/images/geneai.png'; // Giả sử bạn có ảnh dashboard geneai
import './styles/App.css';

function App() {
  const navigate = useNavigate();

  return (
    <div className="layout-wrapper">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div>
          <h1 className="brand-name">Dzokha</h1>
          <div className="brand-role">Product Designer & Security Specialist</div>
          <p className="intro-text">
            Nhóm kiến tạo các sản phẩm số với tiêu chuẩn an ninh cao nhất. 
            Kết hợp tư duy thẩm mỹ thương mại và kiến trúc bảo mật bền vững.
          </p>
        </div>

        <nav className="nav-menu">
          <a href="#projects" className="nav-link active">Selected Works</a>
          <a href="#about" className="nav-link">About Me</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div style={{ marginTop: '40px', display: 'flex', gap: '15px', opacity: 0.6 }}>
           {/* Logo đối tác nhỏ gọn */}
           <img src={trLogo} style={{height: 24, filter: 'grayscale(100%)'}} alt="Partner" />
           <img src={scLogo} style={{height: 24, filter: 'grayscale(100%)'}} alt="Partner" />
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        
        {/* Project 1: SDN-FLEXSHIELD */}
        <div className="project-card" id="projects">
          <div className="project-meta">
            <span className="project-year">2024 — PRESENT</span>
            <span style={{color: '#2563EB', fontWeight: 'bold'}}>FEATURED</span>
          </div>
          <h2 className="project-title">SDN-FlexShield Security</h2>
          <p className="project-desc">
            Nền tảng giám sát an ninh mạng thời gian thực. Giao diện Dark Mode chuyên sâu giúp các chuyên gia SOC giảm mỏi mắt và tập trung vào các cảnh báo nguy hiểm.
          </p>
          
          {/* KHUNG SẢN PHẨM: Điểm nhấn quan trọng nhất */}
          <div className="product-frame">
            {/* Ảnh sản phẩm tối màu của bạn đặt vào đây sẽ cực kỳ nổi bật nhờ viền bóng đổ xung quanh */}
            <img src={sdnImage} className="product-image" alt="SDN Dashboard Interface" />
          </div>

          <div className="tags">
            <span className="tag">Cybersecurity UI</span>
            <span className="tag">React</span>
            <span className="tag">Data Viz</span>
          </div>
        </div>

        {/* Project 2: GeneAI */}
        <div className="project-card" onClick={() => navigate('/geneai')} style={{cursor: 'pointer'}}>
          <div className="project-meta">
            <span className="project-year">2024</span>
          </div>
          <h2 className="project-title">GeneAI Analytics ↗</h2>
          <p className="project-desc">
            Công cụ AI phân tích gen sinh học. Thiết kế tối giản tập trung vào hiển thị dữ liệu phức tạp.
          </p>
          
          <div className="product-frame">
             {/* Thay bằng ảnh dashboard thật của GeneAI để đẹp nhất */}
             <img src={geneLogo} className="product-image" style={{objectFit: 'cover', height: '300px', width: '100%'}} alt="GeneAI Dashboard" />
          </div>

          <div className="tags">
            <span className="tag">AI Interface</span>
            <span className="tag">Bioinformatics</span>
          </div>
        </div>

        {/* Project 3: ShopFish */}
        <div className="project-card">
          <div className="project-meta">
            <span className="project-year">2023</span>
          </div>
          <h2 className="project-title">Shop Fish E-commerce</h2>
          <p className="project-desc">
            Sàn thương mại điện tử thủy hải sản với trải nghiệm mua sắm liền mạch.
          </p>
          
          <div className="product-frame">
             <img src={fishLogo} className="product-image" style={{objectFit: 'cover', height: '300px', width: '100%'}} alt="E-commerce Interface" />
          </div>
          
          <div className="tags">
            <span className="tag">E-commerce</span>
            <span className="tag">Fullstack</span>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;