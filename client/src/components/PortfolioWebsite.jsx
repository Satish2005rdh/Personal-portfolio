import React, { useState, useEffect, useRef } from 'react';
import SKDs from '../assets/SKDs.png';
import nw from '../assets/nw.png';
import mooc from '../assets/mooc.png';
import Exam from '../assets/Exam.png';
import bidding from '../assets/bidding.png';

const Icons = {
  moon: () => <span>🌙</span>,
  sun: () => <span>☀️</span>,
  github: () => <span>📱</span>,
  linkedin: () => <span>💼</span>,
  twitter: () => <span>🐦</span>,
  envelope: () => <span>✉️</span>,
  html5: () => <span>🏗️</span>,
  css3: () => <span>🎨</span>,
  js: () => <span>⚡</span>,
  react: () => <span>⚛️</span>,
  node: () => <span>🟢</span>,
  python: () => <span>🐍</span>,
  database: () => <span>🗄️</span>,
  php: () => <span>🐘</span>,
  git: () => <span>📝</span>
};
const PortfolioWebsite = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const observerRef = useRef(null);
  const sectionsRef = useRef([]);
  const aboutTextRef = useRef([]);

  const fullText = "I am a front-end developer with a strong foundation in HTML, CSS, and JavaScript, and experience working with modern frameworks like React.js and Next.js.";

  // Theme toggle effect
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  // Typing effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypingText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 75);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.5 }
    );

    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('test');
          } else {
            entry.target.classList.remove('test');
          }
        });
      }
    );

    // Observe sections
    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    // Observe about text elements
    aboutTextRef.current.forEach(text => {
      if (text) aboutObserver.observe(text);
    });

    return () => {
      observer.disconnect();
      aboutObserver.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <style>{`
        :root {
          --primary: #5C62EC;
          --primary-light: #8A8FFF;
          --bg-light: #F5F5F5;
          --text-light: #333;
          --bg-dark: #121212;
          --text-dark: #E0E0E0;
          --card-light: #FFFFFF;
          --card-dark: #1E1E1E;
          --shadow-light: 0 4px 20px rgba(0, 0, 0, 0.1);
          --shadow-dark: 0 4px 20px rgba(0, 0, 0, 0.25);
          --transition: all 0.3s ease;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          transition: var(--transition);
        }

        body {
          font-family: 'Inter', 'Segoe UI', sans-serif;
          line-height: 1.6;
          background-color: var(--bg-light);
          color: var(--text-light);
        }

        .dark-mode {
          background-color: var(--bg-dark);
          color: var(--text-dark);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;

        }

        header {
          padding: 20px 0;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 100;
          background-color: var(--bg-light);
          box-shadow: var(--shadow-light);
        }

        .dark-mode header {
          background-color: var(--bg-dark);
          box-shadow: var(--shadow-dark);
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: var(--primary);
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 30px;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--text-light);
          font-weight: 500;
          position: relative;
          cursor: pointer;
        }

        .dark-mode .nav-links a {
          color: var(--text-dark);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary);
          transition: var(--transition);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .theme-toggle {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 20px;
          color: var(--text-light);
        }

        .dark-mode .theme-toggle {
          color: var(--text-dark);
        }

        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 130px;
          margin-bottom: 50px;
        }

        .hero-content {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .hero-text {
          flex: 1;
          
        }

        .hero-text h1 {
          font-size: 64px;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .hero-text p {
          font-size: 20px;
          margin-bottom: 30px;
          color: var(--text-light);
          opacity: 0.8;
        }

        .dark-mode .hero-text p {
          color: var(--text-dark);
        }

        .hero-image {
          flex: 1;
          text-align: center;
          animation: qwerty-slide 2s alternate;
          justify-content: top;
          transform: rotateY(30deg) scale(1);
          filter: drop-shadow(1px 1px 20px rgb(0, 0, 0));
          
        }

        @keyframes qwerty-slide {
          0% {
            margin-top: 70px;
            opacity: 0;
          }
          100% {
            margin-top: 0px;
            opacity: 1;
          }
        }

        .hero-image img {
          width: 300px;
          height: 300px;
        }

        .btn {
          display: inline-block;
          padding: 12px 30px;
          background-color: var(--primary);
          color: white;
          text-decoration: none;
          border-radius: 30px;
          font-weight: 500;
          box-shadow: 0 4px 15px rgba(92, 98, 236, 0.3);
          cursor: pointer;
          border: none;
        }

        .btn:hover {
          background-color: var(--primary-light);
          transform: translateY(-2px);
        }

        section {
          padding: 100px 0;
        }

        .section-title {
          font-size: 36px;
          margin-bottom: 50px;
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 70%;
          height: 3px;
          background-color: var(--primary);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .about-text p {
          margin-bottom: 20px;
          font-size: 18px;
        }

        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 30px;
        }

        .skill-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          background-color: var(--card-light);
          border-radius: 10px;
          box-shadow: var(--shadow-light);
        }

        .dark-mode .skill-card {
          background-color: var(--card-dark);
          box-shadow: var(--shadow-dark);
        }

        .skill-card span {
          font-size: 48px;
          margin-bottom: 15px;
          color: var(--primary);
        }

        .skill-card h3 {
          font-size: 16px;
          font-weight: 500;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .project-card {
          background-color: var(--card-light);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: var(--shadow-light);
          transition: var(--transition);
        }

        .dark-mode .project-card {
          background-color: var(--card-dark);
          box-shadow: var(--shadow-dark);
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
        }

        .dark-mode .project-card:hover {
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
        }

        .project-image {
          height: 200px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }

        .project-card:hover .project-image img {
          transform: scale(1.05);
        }

        .project-info {
          padding: 20px;
        }

        .project-info h3 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .project-info p {
          margin-bottom: 15px;
          opacity: 0.8;
        }

        .project-links {
          display: flex;
          gap: 15px;
        }

        .project-links a {
          text-decoration: none;
          color: var(--primary);
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .project-links a:hover {
          color: var(--primary-light);
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: var(--card-light);
          color: var(--text-light);
        }

        .dark-mode .form-group input,
        .dark-mode .form-group textarea {
          background-color: var(--card-dark);
          border-color: #444;
          color: var(--text-dark);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .social-links {
          // display: flex;
          gap: 30px;
          margin-top: 30px;
          display:block;


        }

        .social-links a {
          font-size: 24px;
          margin-right: 10px;
          color: var(--primary);
          transition: var(--transition);
        }

        .social-links a:hover {
          color: var(--primary-light);
          transform: translateY(-3px);
        }

        footer {
          padding: 30px 0;
          text-align: center;
          background-color: var(--bg-light);
          margin-top: 50px;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .dark-mode footer {
          background-color: var(--bg-dark);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .wave-text span {
          display: inline-block;
          font-size: 4rem;
          animation: wave 2s ease-in-out 2;
        }

        .wave-text span:nth-child(1) {
          animation-delay: 0s;
        }

        .wave-text span:nth-child(2) {
          animation-delay: 0.1s;
        }

        .wave-text span:nth-child(3) {
          animation-delay: 0.2s;
        }

        .wave-text span:nth-child(4) {
          animation-delay: 0.3s;
        }

        .wave-text span:nth-child(5) {
          animation-delay: 0.4s;
        }

        .wave-text span:nth-child(6) {
          animation-delay: 0.5s;
        }

        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        .test::after {
          content: "|";
          animation: cursorBlink 1s ease-out infinite;
        }

        @keyframes cursorBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column-reverse;
            text-align: center;
            gap: 30px;
          }

          .hero-text h1 {
            font-size: 48px;
          }

          .about-content,
          .contact-content {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .nav-links {
            display: none;
          }
        }
      `}</style>

      <header>
        <div className="container">
          <nav>
            <ul className="nav-links">
              <li><a onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a onClick={() => scrollToSection('about')}>About</a></li>
              <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
              <li><a onClick={() => scrollToSection('work')}>Work & Experience</a></li>
              <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? <Icons.sun /> : <Icons.moon />}
            </button>
          </nav>
        </div>
      </header>

      <section className="hero" id="home" ref={el => sectionsRef.current[0] = el}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Hi, I'm </h1>
              <h1>
                <div className="wave-container">
                  <h1 className="wave-text">
                    <span>S</span><span>a</span><span>t</span><span>i</span><span>s</span><span>h</span>
                  </h1>
                </div>
              </h1>
              <p>I am a front-end developer who enjoys creating clean and effective websites and web applications.</p>
              <div className="social-links">
                <a href="https://github.com/Satish2005rdh"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/satish-kumar-dhurve-283a40256/"><i className="fab fa-linkedin"></i></a>
                <a href="https://x.com/RockyDh343707"><i className="fab fa-twitter"></i></a>
                <a href="mailto:satish.k.dhurve@gmail.com?subject=Hello&body=I wanted to reach out to you."><i className="fas fa-envelope"></i></a>
              </div>
              <br />
              <a onClick={() => scrollToSection('projects')} className="btn">View My Work</a>
            </div>
            <div className="hero-image">
              <img src={SKDs} alt="Satish Kumar Dhurve" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" ref={el => sectionsRef.current[1] = el}>
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image" style={{ width: '100%', height: '100%' }}>
              <img src={nw} alt="About Satish Kumar Dhurve"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="about-text">
              <p className="test" ref={el => aboutTextRef.current[0] = el}>
                I am a front-end developer with a strong foundation in HTML, CSS, and JavaScript,
                and experience working with modern frameworks like React.js and Next.js.
              </p>
              <p className="test" ref={el => aboutTextRef.current[1] = el}>
                I focus on building responsive, user-friendly websites that follow good design and usability practices.
              </p>
              <p className="test" ref={el => aboutTextRef.current[2] = el}>
                I am familiar with basic SEO principles and use version control tools such as Git and GitHub to manage and track code changes.
              </p>
              <p className="test" ref={el => aboutTextRef.current[3] = el}>
                I enjoy working in team environments and aim to contribute to creating high-quality web experiences
                through both technical skills and creative thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" ref={el => sectionsRef.current[2] = el}>
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-container">
            <div className="skill-card">
              <Icons.html5 />
              <h3>HTML5</h3>
            </div>
            <div className="skill-card">
              <Icons.css3 />
              <h3>CSS3</h3>
            </div>
            <div className="skill-card">
              <Icons.js />
              <h3>JavaScript</h3>
            </div>
            <div className="skill-card">
              <Icons.react />
              <h3>React</h3>
            </div>
            <div className="skill-card">
              <Icons.node />
              <h3>Node.js</h3>
            </div>
            <div className="skill-card">
              <Icons.python />
              <h3>Python</h3>
            </div>
            <div className="skill-card">
              <Icons.database />
              <h3>MongoDB</h3>
            </div>
            <div className="skill-card">
              <Icons.php />
              <h3>PHP</h3>
            </div>
            <div className="skill-card">
              <Icons.git />
              <h3>Git</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="work" ref={el => sectionsRef.current[3] = el}>
        <div className="container">
          <div className="work-text">
            <h2 className="section-title">Work & Experience</h2>
            <h3><u>My Work</u></h3>
            <br />
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-info">
                  <h3>1. E-commerce Auction Platform - "Biddy"</h3>
                  <p><b>Description:</b> A custom-built e-commerce platform for a small business, featuring a shopping cart,
                    product catalog, and order management system.</p>
                  <p><b>Technologies:</b> JavaScript, PHP, MYSQL</p>
                </div>
              </div>
              <div className="project-card">
                <div className="project-info">
                  <h3>2. Portfolio Website</h3>
                  <p><b>Description:</b> A personal portfolio website showcasing my web development skills and previous
                    projects.</p>
                  <p><b>Technologies:</b> HTML, CSS, JavaScript, React</p>
                </div>
              </div>
              <div className="project-card">
                <div className="project-info">
                  <h3>Examination Portal</h3>
                  <p><b>Description:</b> A Online Exam Portal Using HTML, CSS and PHP, student modules and login interfaces were designed.</p>
                  <p><b>Technologies:</b> JavaScript, OpenWeather API, CSS</p>
                </div>
              </div>
            </div>
            <br />
            <h3><u>Experience</u></h3>
            <br />
            <p className="test">
              During my academic journey, I've worked on multiple web development projects, building interactive
              and scalable applications using technologies like React, Node.js, and MongoDB. I also completed an internship
              where I collaborated with a team to develop a real-world application, enhancing my skills in front-end and
              back-end development.
            </p>
            <p className="test">
              Through these experiences, I've gained hands-on knowledge of writing clean, efficient code, optimizing
              performance, and following best development practices. I'm always eager to learn new technologies and take on
              challenging projects.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" ref={el => sectionsRef.current[4] = el}>
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src={bidding} alt="Project 1" />
              </div>
              <div className="project-info">
                <h3>E-Commerce Bidding Platform</h3>
                <p>A custom-built e-commerce platform for a small business, featuring a shopping cart,
                  product catalog, and order management system.</p>
                <div className="project-links">
                  <a href="https://github.com/Satish2005rdh/Auction-Platform-Biddy-"><Icons.github /> GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src={Exam} alt="Project 2" />
              </div>
              <div className="project-info">
                <h3>Examination Portal</h3>
                <p>A Online Exam Portal Using HTML, CSS and PHP, student modules and login interfaces were designed.</p>
                <div className="project-links">
                  <a href="https://github.com/Satish2005rdh/Online-Examination-portal"><Icons.github /> GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src={mooc} alt="Project 3" />
              </div>
              <div className="project-info">
                <h3>Mooc Course Progress Tracking Dashboard</h3>
                <p>A Mooc-Registration-Course-Progress-Report-Tracking-Dashboard is a system that allows institutions to monitor
                  student registration and progress in Massive Open Online Courses (MOOCs).</p>
                <div className="project-links">
                  <a href="https://github.com/Satish2005rdh/Mooc-Registration-Course-Progress-Report-Tracking-Dashboard"><Icons.github /> GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" ref={el => sectionsRef.current[5] = el}>
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                vision.</p>
              <div className="social-links">
                <a href="https://github.com/Satish2005rdh"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/satish-kumar-dhurve-283a40256/"><i className="fab fa-linkedin"></i></a>
                <a href="https://x.com/RockyDh343707"><i className="fab fa-twitter"></i></a>
                <a href="mailto:satish.k.dhurve@gmail.com?subject=Hello&body=I wanted to reach out to you."><i className="fas fa-envelope"></i></a>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" name="subject" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" required></textarea>
                  <br />
                </div>
                <button type="submit" className="btn">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025 Satish Kumar Dhurve. All rights reserved.</p>
        </div>
      </footer>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </div>
  );
};
const handleFormSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const subject = form.subject.value;
  const message = form.message.value;

  try {
    const res = await fetch('https://personal-portfolio-98vx6dga9-satish-kumar-dhurves-projects.vercel.app/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    const data = await res.json();

    if (data.success) {
      alert('✅ Thank you For Your Message!');
      form.reset();
    } else {
      alert('❌ Failed to save message.');
    }
  } catch (err) {
    console.error('Fetch error:', err);
    alert('❌ Server error');
  }
};


export default PortfolioWebsite;
