
const skills = [
  {
    title: "Python",
    category: "PROGRAMMING",
    description: "Building programming logic, functions, OOP and problem-solving skills.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=500&q=80",
    alt: "Programming code on a computer screen",
  },
  {
    title: "Database",
    category: "DATA MANAGEMENT",
    description: "Learning SQL, relational databases, ER diagrams and database design.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=500&q=80",
    alt: "Digital data and database visualisation",
  },
  {
    title: "Web Development",
    category: "FRONTEND",
    description: "Creating modern responsive websites using Next.js, React and CSS.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80",
    alt: "Laptop and web development workspace",
  },
  {
    title: "AI & Automation",
    category: "EMERGING TECHNOLOGY",
    description: "Exploring AI tools, intelligent agents and automation workflows.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=500&q=80",
    alt: "Artificial intelligence concept",
  },
];

const projects = [
  {
    title: "Smart Choice Hub",
    description:
      "A website concept focused on helping users explore products, compare options and make more informed choices.",
    tech: "WEB DEVELOPMENT",
    category: "FEATURED WEBSITE",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
    alt: "Online shopping and digital commerce",
    link: "",
    status: "Website project",
  },
  {
    title: "E-commerce Store",
    description:
      "A modern online shopping experience with product showcases, category browsing and a user-friendly interface.",
    tech: "NEXT.JS · WEB DESIGN",
    category: "ONLINE COMMERCE",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=85",
    alt: "Customer shopping online",
    link: "",
    status: "Development concept",
  },
  {
    title: "AI Agents & Automation",
    description:
      "Exploring AI-powered assistants that can help automate repetitive tasks and support smarter digital workflows.",
    tech: "AI · AUTOMATION",
    category: "AI PROJECT",
    image:
      "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=1000&q=85",
    alt: "Artificial intelligence and technology",
    link: "",
    status: "Learning and exploration",
  },
  {
    title: "Library Management System",
    description:
      "A library website concept for organising books, presenting information and making library resources easier to access.",
    tech: "NEXT.JS · TYPESCRIPT",
    category: "WEB APPLICATION",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=85",
    alt: "Bookshelves in a library",
    link: "",
    status: "University project",
  },
  {
    title: "Student Database",
    description:
      "A database learning project exploring student records, structured information and relationships between data.",
    tech: "SQL · DATABASE",
    category: "DATABASE PROJECT",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85",
    alt: "Professional workspace with documents",
    link: "",
    status: "Learning project",
  },
  {
    title: "Personal Portfolio",
    description:
      "My personal space on the web to present my learning journey, skills, project ideas and development goals.",
    tech: "NEXT.JS · CSS",
    category: "PERSONAL WEBSITE",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    alt: "Website analytics on a computer",
    link: "",
    status: "Portfolio website",
  },
];

export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="logo">
          M SHAFIQ<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Learning</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero container" id="home">
        <div className="hero-content">
          <p className="eyebrow">
            INFORMATION TECHNOLOGY · ASPIRING DEVELOPER
          </p>

          <h1>
            Learning today.
            <br />
            Creating
            <br />
            <em>what&apos;s next.</em>
          </h1>

          <p className="hero-description">
            Hello, I&apos;m <strong>M Shafiq Kakar</strong>, an
            Information Technology student exploring programming,
            web development, databases and artificial intelligence.
            I&apos;m focused on turning what I learn into practical
            projects and useful digital experiences.
          </p>

          <div className="actions">
            <a href="#projects" className="button button-gold">
              Explore My Projects <span>↗</span>
            </a>

            <a href="#contact" className="button button-outline">
              Let&apos;s Connect <span>→</span>
            </a>
          </div>

          <div className="quick-stats">
            <div>
              <strong>06+</strong>
              <span>Project Concepts</span>
            </div>
            <div>
              <strong>04</strong>
              <span>Learning Areas</span>
            </div>
            <div>
              <strong>01</strong>
              <span>Goal: Keep Building</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait">
            <div className="portrait-inner">
              <img
                className="profile-image"
                src="/shafiqprj2.jpeg"
                alt="M Shafiq Kakar"
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="floating-card">
            <span>MY DEVELOPMENT JOURNEY</span>
            <h2>M Shafiq Kakar</h2>
            <p>Learn. Create. Improve.</p>
          </div>

          <span className="vertical-text">
            CURIOSITY · CONSISTENCY
          </span>
        </div>
      </section>

      {/* ABOUT AND JOURNEY */}
      <section className="section container" id="about">
        <p className="eyebrow">MY JOURNEY &amp; VISION</p>

        <div className="section-heading">
          <h2>Building my next chapter.</h2>
          <p>
            Every skill begins with curiosity. Every project begins
            with an idea. Every step creates an opportunity to grow.
          </p>
        </div>

        <div className="journey-grid">
          <div className="journey-image-wrap">
            <img
              className="journey-image"
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
              alt="Bright modern professional workspace"
              loading="lazy"
            />

            <div className="journey-image-caption">
              <span className="journey-caption-icon">✳</span>
              <div>
                <strong>A mindset for growth</strong>
                <p>Learn something. Build something.</p>
              </div>
            </div>

            <span className="journey-image-tag">
              STUDENT TO DEVELOPER
            </span>
          </div>

          <div className="journey-content">
            <p className="journey-kicker">
              A LITTLE ABOUT ME
            </p>

            <h3>
              Turning curiosity
              <br />
              into <em>real skills.</em>
            </h3>

            <p className="journey-description">
              I&apos;m an Information Technology student with a
              growing interest in software development and modern
              digital technologies. My journey is about understanding
              how things work, experimenting with ideas and learning
              how to create useful solutions.
            </p>

            <p className="journey-description">
              Through Python and database studies, I&apos;m building
              a strong foundation in programming and data management.
              Alongside university, I&apos;m exploring web development,
              e-commerce and AI-powered tools to understand how
              technology can be used in real-world projects.
            </p>

            <p className="journey-description">
              I don&apos;t believe growth happens overnight. I believe
              in consistent practice, learning from mistakes and
              improving one project at a time. My long-term aim is to
              develop practical IT skills and become capable of
              building digital products independently.
            </p>

            <div className="journey-highlights">
              <div className="journey-highlight">
                <span className="journey-highlight-icon">⌘</span>
                <div>
                  <strong>Learn by doing</strong>
                  <p>Turn concepts into hands-on practice.</p>
                </div>
              </div>

              <div className="journey-highlight">
                <span className="journey-highlight-icon">↗</span>
                <div>
                  <strong>Create with purpose</strong>
                  <p>Explore ideas that solve practical problems.</p>
                </div>
              </div>

              <div className="journey-highlight">
                <span className="journey-highlight-icon">✳</span>
                <div>
                  <strong>Keep moving forward</strong>
                  <p>Build consistency, confidence and experience.</p>
                </div>
              </div>
            </div>

            <a href="#skills" className="journey-link">
              Explore my learning journey <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* LEARNING WITH IMAGES */}
      <section className="section container" id="skills">
        <p className="eyebrow">CURRENTLY EXPLORING</p>

        <div className="section-heading">
          <h2>Skills in progress.</h2>
          <p>
            Small steps, practical learning and a stronger foundation
            for the opportunities ahead.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.title}>
              <div className="skill-image-wrap">
                <img
                  className="skill-image"
                  src={skill.image}
                  alt={skill.alt}
                  loading="lazy"
                />
                <span className="skill-status">
                  IN PROGRESS
                </span>
              </div>

              <div className="skill-card-content">
                <span className="skill-category">
                  {skill.category}
                </span>

                <h3>{skill.title}</h3>
                <p>{skill.description}</p>

                <div className="skill-bottom">
                  <span>Learning &amp; practice</span>
                  <span className="skill-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section className="section container" id="projects">
        <p className="eyebrow">PROJECTS &amp; EXPLORATIONS</p>

        <div className="section-heading">
          <h2>Ideas into digital experiences.</h2>
          <p>
            A collection of websites, project concepts and
            technologies I&apos;m learning to build with.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image-wrap">
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                />

                <span className="project-image-label">
                  {project.category}
                </span>
              </div>

              <div className="project-content">
                <span className="project-status">
                  {project.status}
                </span>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-footer">
                  <span>{project.tech}</span>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-arrow"
                      aria-label={`View ${project.title}`}
                    >
                      ↗
                    </a>
                  ) : (
                    <span
                      className="project-arrow"
                      aria-label="Project preview"
                    >
                      ↗
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="projects-note">
          Some visuals are illustrative previews. Project descriptions
          and links can be updated as each project becomes available.
        </p>
      </section>

      {/* CONTACT */}
      <section className="contact-section container" id="contact">
        <div>
          <p className="eyebrow">LET&apos;S CONNECT</p>

          <h2>
            The next idea could
            <br />
            start <em>with a hello.</em>
          </h2>

          <p>
            Interested in technology, creative ideas or collaborating
            on a project? Feel free to reach out.
          </p>
        </div>

        <div className="contact-links">
          <a href="mailto:YOUR_EMAIL@example.com">
            Email <span>↗</span>
          </a>

          <a
            href="https://wa.me/YOUR_PHONE_NUMBER"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp <span>↗</span>
          </a>

          <a
            href="https://www.instagram.com/YOUR_USERNAME/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram <span>↗</span>
          </a>

          <a
            href="https://www.facebook.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            Facebook <span>↗</span>
          </a>

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR_USERNAME/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span>↗</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer container">
        <p>
          © {new Date().getFullYear()} M Shafiq Kakar.
          Built with Next.js.
        </p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
