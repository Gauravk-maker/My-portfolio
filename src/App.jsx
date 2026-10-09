import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, Menu, X,
  Code2, BrainCircuit, Database, Server, Cpu, ExternalLink,
  ChevronDown, Terminal, Sparkles, MapPin, GraduationCap,
  Award, Send, CheckCircle2
} from "lucide-react";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Education", "education"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Achievements", "achievements"],
  ["Contact", "contact"]
];

const skills = {
  Programming: ["C", "C++", "Python", "JavaScript"],
  "Web Development": ["HTML", "CSS", "JavaScript", "React", "Next.js", "REST APIs"],
  "AI / Machine Learning": ["Artificial Intelligence", "Machine Learning", "Generative AI", "LLM Applications", "RAG", "Google Gemini API"],
  Backend: ["Python", "Flask", "FastAPI", "REST API", "SQLAlchemy"],
  Databases: ["SQLite", "ChromaDB", "Vector Databases"],
  "Core CS": ["Data Structures", "Algorithms", "OOP", "Problem Solving", "Database Concepts"],
  Tools: ["Git", "GitHub", "VS Code", "Jupyter", "Postman"]
};

const projects = [
  {
    title: "AI Legal Policy Simplifier",
    category: "AI / Full Stack",
    description: "An AI-powered application for transforming complex legal and policy documents into clearer, understandable information.",
    stack: ["Python", "FastAPI", "React", "Gemini", "LangChain", "ChromaDB", "SQLAlchemy", "RAG"],
    features: ["PDF processing", "AI analysis", "Semantic search", "RAG responses", "Authentication"],
    github: "https://github.com/Gauravk-maker",
    icon: BrainCircuit
  },
  {
    title: "Smart AI Chatbot",
    category: "AI Application",
    description: "A conversational AI application designed to provide intelligent responses through a clean web interface and Python backend.",
    stack: ["Python", "Flask", "SQLite", "Gemini API", "HTML", "CSS", "JavaScript"],
    features: ["Chat interface", "AI responses", "REST API", "Persistent data"],
    github: "https://github.com/Gauravk-maker",
    icon: Terminal
  },
  {
    title: "Smart Attendance System",
    category: "Computer Vision",
    description: "A smart attendance monitoring concept combining face recognition, computer vision and structured data handling.",
    stack: ["Python", "Computer Vision", "Face Recognition", "DSA", "Database"],
    features: ["Face recognition", "Attendance records", "Automated workflow"],
    github: "https://github.com/Gauravk-maker",
    icon: Cpu
  },
  {
    title: "Non-Contact Glucometer Prototype",
    category: "Electronics / IoT",
    description: "An electronics prototype exploring non-contact glucose measurement concepts using sensors and embedded hardware.",
    stack: ["Arduino", "Sensors", "Electronics", "Embedded Systems"],
    features: ["Sensor integration", "Embedded control", "Prototype development"],
    github: "https://github.com/Gauravk-maker",
    icon: Cpu
  }
];

const achievements = [
  {
    title: "Deloitte Data Analytics Virtual Experience Program",
    organization: "Deloitte",
    description: "Virtual experience focused on data analytics and practical business problem solving.",
    icon: Award
  },
  {
    title: "AI / ML Learning Journey",
    organization: "Self Learning",
    description: "Continuously exploring artificial intelligence, machine learning, generative AI, LLMs and RAG applications.",
    icon: BrainCircuit
  },
  {
    title: "Hackathon & Project Building",
    organization: "College / Independent",
    description: "Building practical technology projects focused on AI, software development and real-world problems.",
    icon: Sparkles
  }
];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navItems.map(([, id]) => document.getElementById(id));
      const current = sections
        .filter(Boolean)
        .map((el) => ({ id: el.id, top: Math.abs(el.getBoundingClientRect().top - 140) }))
        .sort((a, b) => a.top - b.top)[0];
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <Background />

      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <button className="brand" onClick={() => goTo("home")} aria-label="Go to home">
          <span className="brand-mark">GK</span>
          <span>Gaurav Kumar</span>
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navItems.map(([label, id]) => (
            <button
              key={id}
              className={active === id ? "active" : ""}
              onClick={() => goTo(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="https://github.com/Gauravk-maker" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={19} />
          </a>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <motion.div
              className="availability"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="pulse-dot" />
              Open to learning, collaboration & opportunities
            </motion.div>

            <motion.p
              className="hero-kicker"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              COMPUTER SCIENCE × ARTIFICIAL INTELLIGENCE
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              Hi, I'm <span>Gaurav Kumar.</span>
              <br />
              I build intelligent digital experiences.
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              Computer Science student at IIIT Vadodara, passionate about
              AI/ML, software engineering, problem solving and turning ideas
              into practical technology.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <button className="btn btn-primary" onClick={() => goTo("projects")}>
                View Projects <ArrowUpRight size={18} />
              </button>
              <a className="btn btn-secondary" href="/resume.pdf" download>
                Download Resume <Download size={18} />
              </a>
            </motion.div>

            <div className="social-row">
              <a href="https://github.com/Gauravk-maker" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              <a href="mailto:your-email@example.com"><Mail size={18} /> Email</a>
            </div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <motion.div
              className="profile-orb"
              animate={{
                y: [0, -8, 0],
                rotate: [0, 1, 0, -1, 0]
  }}
              transition={{
                duration: 6,
                repeat: Infinity,
    ease: "easeInOut"
  }}
>
            <div className="profile-ring">
              <img
      src="/My Photo.png"
      alt="Gaurav Kumar"
    />
  </div>

            <div className="profile-badge">
              <BrainCircuit size={15} />
              <span>AI / Developer</span>
         </div>
      </motion.div>

            <FloatingCard className="card-python" icon={<Code2 />} title="Python" subtitle="AI / Backend" />
            <FloatingCard className="card-react" icon={<Sparkles />} title="React" subtitle="Frontend" />
            <FloatingCard className="card-rag" icon={<Database />} title="RAG" subtitle="LLM Apps" />

            <div className="code-window">
              <div className="window-top"><span /><span /><span /></div>
              <pre>{`const developer = {
  name: "Gaurav Kumar",
  focus: ["AI", "ML", "Software"],
  mindset: "Build • Learn • Improve"
};`}</pre>
            </div>
          </motion.div>
        </section>

        <section id="about" className="section">
          <SectionTitle eyebrow="01 / ABOUT" title="A developer who loves building." text="A concise snapshot of who I am, what I care about and where I'm heading." />
          <div className="about-grid">
            <motion.div 
              className="glass-card about-main" 
              whileHover={{ y: -5 }}
              >
                <div className="about-profile-row">

                  <div className="about-profile-photo">

                    <img
                      src="/My Photo.png"
                      alt="Gaurav Kumar"
                    />

                  </div>

                  <div>
                    <div className="about-icon">
                      <BrainCircuit />
                   </div>
               </div>

            </div>
              
              <div className="about-icon"><BrainCircuit /></div>
              <h3>Computer Science + AI</h3>
              <p>
                I'm Gaurav Kumar, a Computer Science student with an Honours
                focus in Artificial Intelligence. I enjoy understanding how
                systems work, solving algorithmic problems and building
                applications that use modern AI capabilities.
              </p>
              <p>
                My current interests include Generative AI, LLM applications,
                RAG, backend engineering, full-stack development and
                continuously improving my Data Structures & Algorithms skills.
              </p>
              <div className="mini-stats">
                <div><strong>CSE</strong><span>Core</span></div>
                <div><strong>AI</strong><span>Honours</span></div>
                <div><strong>Build</strong><span>Projects</span></div>
              </div>
            </motion.div>

            <div className="about-side">
              <InfoCard icon={<GraduationCap />} label="Education" value="B.Tech CSE + Hons. AI" />
              <InfoCard icon={<MapPin />} label="Institute" value="IIIT Vadodara – ICD" />
              <InfoCard icon={<Terminal />} label="Focus" value="AI/ML + Software Development" />
              <InfoCard icon={<Sparkles />} label="Mindset" value="Learn • Build • Iterate" />
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <SectionTitle eyebrow="02 / EDUCATION" title="My academic foundation." text="Building strong fundamentals in computer science while exploring artificial intelligence." />
          <div className="timeline">
            <div className="timeline-line" />
            <TimelineItem
              year="Current"
              title="B.Tech in Computer Science & Engineering"
              subtitle="Honours in Artificial Intelligence"
              organization="IIIT Vadodara – International Campus Diu"
              description="Studying computer science fundamentals, programming, algorithms, software engineering and artificial intelligence."
            />
            <TimelineItem
              year="Focus"
              title="Core Computer Science"
              subtitle="Algorithms • OOP • Databases"
              organization="Academic & Self Learning"
              description="Strengthening programming, Data Structures & Algorithms, object-oriented programming, database concepts and problem solving."
            />
            <TimelineItem
              year="Exploring"
              title="Artificial Intelligence"
              subtitle="ML • GenAI • LLM • RAG"
              organization="Projects & Continuous Learning"
              description="Experimenting with practical AI applications and modern LLM-based systems."
            />
          </div>
        </section>

        <section id="skills" className="section">
          <SectionTitle eyebrow="03 / SKILLS" title="Tools I use to build." text="A growing technical toolkit across programming, web development, AI and backend engineering." />
          <div className="skills-grid">
            {Object.entries(skills).map(([category, list], index) => (
              <motion.div
                className="skill-card glass-card"
                key={category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: -6 }}
              >
                <div className="skill-heading">
                  <SkillIcon category={category} />
                  <h3>{category}</h3>
                </div>
                <div className="tag-list">
                  {list.map(item => <span key={item}>{item}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionTitle eyebrow="04 / PROJECTS" title="Things I've built." text="Selected projects combining software engineering, AI and practical problem solving." />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} onOpen={() => setSelectedProject(project)} />
            ))}
          </div>
        </section>

        <section id="achievements" className="section">
          <SectionTitle eyebrow="05 / ACHIEVEMENTS" title="Learning beyond the classroom." text="Programs, experimentation and project-driven learning that shape my development journey." />
          <div className="achievement-grid">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  className="achievement-card glass-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="achievement-icon"><Icon /></div>
                  <span>{item.organization}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="section journey-section">
          <SectionTitle eyebrow="06 / JOURNEY" title="Learn. Build. Experiment. Repeat." text="My path is driven by curiosity and hands-on work." />
          <div className="journey">
            {[
              ["01", "Learn", "Build strong CS and programming fundamentals."],
              ["02", "Build", "Turn concepts into real applications and prototypes."],
              ["03", "Experiment", "Explore AI, GenAI, LLMs and new technologies."],
              ["04", "Improve", "Solve problems, iterate and become a better engineer."]
            ].map(([number, title, text], i) => (
              <motion.div
                className="journey-item"
                key={number}
                initial={{ opacity: 0, x: i % 2 ? 25 : -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="resume-cta section">
          <div className="cta-glow" />
          <Sparkles className="cta-sparkle" />
          <h2>Let's build something meaningful.</h2>
          <p>Interested in my work, collaboration or an opportunity? Explore my resume or get in touch.</p>
          <div className="hero-buttons center">
            <a className="btn btn-primary" href="/resume.pdf" download>Download Resume <Download size={18} /></a>
            <button className="btn btn-secondary" onClick={() => goTo("contact")}>Contact Me <ArrowUpRight size={18} /></button>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <SectionTitle eyebrow="07 / CONTACT" title="Let's connect." text="Have an idea, project, collaboration or opportunity? Send me a message." />
          <div className="contact-grid">
            <div className="contact-info">
              <ContactItem icon={<Mail />} label="Email" value="g75031620@gmail.com" href="g75031620@gmail.com" />
              <ContactItem icon={<Github />} label="GitHub" value="github.com/Gauravk-maker" href="https://github.com/Gauravk-maker" />
              <ContactItem icon={<Linkedin />} label="LinkedIn" value="https://www.linkedin.com/in/gaurav-kumar-022364384/" href="https://www.linkedin.com/in/gaurav-kumar-022364384/" />
              <div className="contact-note glass-card">
                <CheckCircle2 />
                <div>
                  <strong>Currently learning & building</strong>
                  <p>AI/ML, full-stack development and practical software projects.</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Gaurav Kumar</strong>
          <p>Computer Science Student · AI/ML Enthusiast · Developer</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Gauravk-maker" target="_blank" rel="noreferrer"><Github size={17} /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
          <a href="mailto:your-email@example.com"><Mail size={17} /></a>
        </div>
        <p>© 2026 Gaurav Kumar. All rights reserved.</p>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function Background() {
  return (
    <div className="background" aria-hidden="true">
      <div className="gradient-orb orb-a" />
      <div className="gradient-orb orb-b" />
      <div className="grid-bg" />
      {Array.from({ length: 22 }).map((_, i) => (
        <span
          className="particle"
          key={i}
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 61) % 100}%`,
            animationDelay: `${(i % 7) * 0.6}s`,
            animationDuration: `${5 + (i % 5)}s`
          }}
        />
      ))}
    </div>
  );
}

function FloatingCard({ icon, title, subtitle, className }) {
  return (
    <motion.div className={`floating-card ${className}`} animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
      <span>{icon}</span>
      <div><strong>{title}</strong><small>{subtitle}</small></div>
    </motion.div>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <motion.div className="info-card glass-card" whileHover={{ x: 5 }}>
      <div>{icon}</div>
      <span>{label}</span>
      <strong>{value}</strong>
    </motion.div>
  );
}

function TimelineItem({ year, title, subtitle, organization, description }) {
  return (
    <motion.article
      className="timeline-item"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="timeline-dot" />
      <div className="timeline-year">{year}</div>
      <div className="timeline-card glass-card">
        <span>{organization}</span>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{description}</p>
      </div>
    </motion.article>
  );
}

function SkillIcon({ category }) {
  if (category.includes("AI")) return <BrainCircuit />;
  if (category.includes("Database")) return <Database />;
  if (category.includes("Backend")) return <Server />;
  if (category.includes("Web")) return <Code2 />;
  if (category.includes("Core")) return <Cpu />;
  return <Terminal />;
}

function ProjectCard({ project, index, onOpen }) {
  const Icon = project.icon;
  return (
    <motion.article
      className="project-card glass-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.07 }}
      whileHover={{ y: -8 }}
    >
      <div className="project-top">
        <div className="project-icon"><Icon /></div>
        <span>{project.category}</span>
      </div>
      <div className="project-visual">
        <div className="project-lines" />
        <Icon size={55} strokeWidth={1} />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tag-list">
        {project.stack.slice(0, 5).map(s => <span key={s}>{s}</span>)}
      </div>
      <div className="project-actions">
        <button onClick={onOpen}>View Details <ArrowUpRight size={16} /></button>
        <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
          <Github size={18} />
        </a>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }) {
  const Icon = project.icon;
  return (
    <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="project-modal glass-card"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}><X /></button>
        <div className="modal-icon"><Icon /></div>
        <span className="eyebrow">{project.category}</span>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <h4>Key Features</h4>
        <div className="feature-list">
          {project.features.map(feature => <div key={feature}><CheckCircle2 size={17} /> {feature}</div>)}
        </div>
        <h4>Technology Stack</h4>
        <div className="tag-list">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
        <div className="modal-actions">
          <a className="btn btn-primary" href={project.github} target="_blank" rel="noreferrer">GitHub <Github size={17} /></a>
          <button className="btn btn-secondary" onClick={onClose}>Close</button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ContactItem({ icon, label, value, href }) {
  return (
    <a className="contact-item glass-card" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      <div>{icon}</div>
      <span>{label}</span>
      <strong>{value}</strong>
      <ExternalLink size={16} />
    </a>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <form className="contact-form glass-card" onSubmit={submit}>
      <div className="form-row">
        <label>Name<input required name="name" placeholder="Your name" /></label>
        <label>Email<input required type="email" name="email" placeholder="you@example.com" /></label>
      </div>
      <label>Subject<input required name="subject" placeholder="Let's build something..." /></label>
      <label>Message<textarea required name="message" rows="6" placeholder="Tell me about your idea or opportunity..." /></label>
      <button className="btn btn-primary" type="submit">
        {sent ? <>Message Ready <CheckCircle2 size={18} /></> : <>Send Message <Send size={18} /></>}
      </button>
      {sent && <p className="form-success">Thanks! Connect this form to Formspree, EmailJS or your backend to send real emails.</p>}
    </form>
  );
}

export default App;