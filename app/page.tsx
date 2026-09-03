"use client";

import { useMemo, useState } from "react";

/* =========================================================
   TYPES
   ========================================================= */

type PubType =
  | "Journal"
  | "Conference Proceedings"
  | "Conference Presentation"
  | "Book Chapter"
  | "Patent";

type Publication = {
  year: number;
  title: string;
  authors: string;
  venue: string;
  details: string;
  doi?: string;
  type: PubType;
  status?: string;
  image?: string;
  sourceLink?: string;
};

/* =========================================================
   PUBLICATIONS DATA
   Edit publication information here.
   ========================================================= */

const publications: Publication[] = [
  {
    year: 2026,
    title:
      "MULTIMODAL MACHINE LEARNING FOR PREDICTING DISEASE PROGRESSION USING CLINICAL AND MEDICAL IMAGING DATA",
    authors:
      "Govinda Patil, Hemant Pal, Sanjeev Gour, Karuna Nidhi Pandagre, Prachi Tiwari, and Rajendra Randa",
    venue: "IJCISIM",
    details: "Vol. 18, No. 7s, pp. 760–771, July 2026",
    type: "Journal",
    image: "/papers/journals/J_8.jpg",
    sourceLink:
      "https://cspub-ijcisim.org/index.php/ijcisim/article/view/3149",
  },
  {
    year: 2026,
    title:
      "Exploring Machine Learning and Deep Learning Technologies in Healthcare: Current Trends, Challenges and Future Directions",
    authors: "Randa, R.; Gour, S.",
    venue: "SPARK-2026 Conference",
    details: "Presented; process under publication",
    type: "Conference Proceedings",
    status: "Presented / Under publication",
  },
  {
    year: 2025,
    title:
      "Radiomics Meets Deep Learning: A Hybrid Approach for Breast Cancer Prediction from Mammographic Data",
    authors:
      "Rajendra Randa, Sanjeev Gour, Priyanka Parmar, Chhaya Moghe, Priyanka Jain, & Shiv Shakti Shrivastava",
    venue:
      "International Journal of Computational and Experimental Science and Engineering",
    details: "Vol. 11, No. 3",
    doi: "https://doi.org/10.22399/ijcesen.3137",
    type: "Journal",
    image: "/papers/journals/J_5.jpg",
    sourceLink:
      "https://www.ijcesen.com/index.php/ijcesen/article/view/3137",
  },
  {
    year: 2025,
    title:
      "Clinical Intelligence for Parkinson’s Disease with Fully Trained ML Models on Medical Records",
    authors:
      "Rajendra Randa, Sanjeev Gour, Kuber Datt Gautam, Karuna Nidhi Pandagre, Shiv Shakati Shrivastava, Akansha Sharma",
    venue: "Journal of Carcinogenesis",
    details: "Vol. 24, No. 4s, pp. 558–568",
    type: "Journal",
    image: "/papers/journals/J_6.jpg",
    sourceLink:
      "https://carcinogenesis.com/index.php/JOC/article/view/543/1899",
  },
  {
    year: 2025,
    title:
      "A Comparative Study of Supervised Learning Models for Breast Cancer Tissue Classification",
    authors: "Randa, R.; Gour, S.",
    venue: "Cuestiones de Fisioterapia",
    details: "54(2), pp. 1812–1821",
    type: "Journal",
    image: "/papers/journals/J_1.jpg",
    sourceLink:
      "https://cuestionesdefisioterapia.com/index.php/es/article/view/919",
  },
  {
    year: 2025,
    title:
      "Integrated Machine Learning and CNN Approaches for Breast Cancer Prediction Using Mammography Images",
    authors: "Randa, R.; Gour, S.",
    venue: "SEEJPH",
    details: "26(S1), pp. 1–9",
    type: "Journal",
    image: "/papers/journals/J_2.jpg",
    sourceLink: "https://doi.org/10.70135/seejph.vi.4582",
  },
  {
    year: 2025,
    title:
      "A comprehensive review on predicting heart failure with ensemble learning",
    authors:
      "Gour, S., Randa, R., Pandagre, K. N., Neema, A., Jat, S., & Malakar, D.",
    venue: "International Journal of Engineering Sciences",
    details: "11(4s), pp. 959–973",
    type: "Journal",
    image: "/papers/journals/J_4.jpg",
    sourceLink: "https://theaspd.com/index.php/ijes/article/view/645",
  },
  {
    year: 2025,
    title:
      "Impact and use of AI tools in teaching and learning in higher education: A case study in perspective to the new education policy of India",
    authors:
      "Gour, S., Joshi, A., Sharma, A. K., Solanki, R. S., Shrivastava, S. S., & Randa, R.",
    venue: "Eksplorium",
    details: "46(1), pp. 516–525",
    type: "Journal",
    image: "/papers/journals/J_3.jpg",
    sourceLink: "link1.html",
  },
  {
    year: 2025,
    title:
      "Towards Precision Cardiology through Computational Modeling: Comparative Analysis of ML-Based Predictive Models",
    authors:
      "Sanjeev Gour, Hemant Pal, Rajdeep Singh Solanki, Karunanidhi Pandagre, Rajendra Randa, Shiv Shakti Shrivastava",
    venue: "Vascular and Endovascular Review",
    details: "Vol. 8, No. 11s, pp. 27–3",
    type: "Journal",
    image: "/papers/journals/J_7.jpg",
    sourceLink: "link1.html",
  },
  {
    year: 2025,
    title: "Early Detection of Cardiovascular Diseases using ML",
    authors: "Rajendra Randa",
    venue: "ICMRLTLLAI-2025, Pune, India",
    details: "Conference presentation",
    type: "Conference Presentation",
    image: "/papers/conferences/p_2.jpg",
    sourceLink: "link1.html",
  },
  {
    year: 2024,
    title: "Role of ML in Higher Education under NEP 2020",
    authors: "Rajendra Randa",
    venue: "UGC ETICS-2024, Bhopal, India",
    details: "Conference presentation",
    type: "Conference Presentation",
    image: "/papers/conferences/p_1.jpg",
    sourceLink: "link1.html",
  },
  {
    year: 2024,
    title:
      "Applications of Emerging Machine Learning Models in Healthcare Industry: A Comprehensive Review",
    authors: "Gour, Sanjeev, and Rajendra Randa",
    venue:
      "Proceedings of the International Conference on Deep Learning and Visual Artificial Intelligence (ICDLAI-2024)",
    details:
      "16–17 March 2024, Bikaner Technical University, Bikaner; Springer",
    type: "Conference Proceedings",
    image: "/papers/conferences/conf_2.jpg",
    sourceLink:
      "https://link.springer.com/chapter/10.1007/978-981-97-4533-3_22",
  },
  {
    year: 2023,
    title:
      "Digital Health Revolution 2023: Navigating the Growing Landscape of Machine Learning in Medical Application",
    authors: "Gour, Sanjeev, and Rajendra Randa",
    venue:
      "International Journal of Artificial Intelligence, Internet of Things and Cloud Computing (IJAIC-2023)",
    details: "Vol. 2, pp. 7–14; published online December 2023",
    type: "Conference Proceedings",
    image: "/papers/conferences/conf_1.jpg",
    sourceLink: "https://sdbc.ac.in/ijaic/",
  },
  {
    year: 2024,
    title:
      "Data-Driven Approaches to Cancer Incidence Classification: Mining Health Data from Bhopal Gas Tragedy",
    authors: "Gour, Sanjeev, and Rajendra Randa",
    venue:
      "Mathematics and Computer Science: Contemporary Developments, Vol. 10, BP International",
    details: "2024, pp. 102–104",
    type: "Book Chapter",
    image: "/papers/book-chapters/ch_1.jpg",
    sourceLink:
      "https://stm.bookpi.org/MCSCD-V10/article/view/16554",
  },
  {
    year: 2025,
    title:
      "Machine Learning in Medical Imaging: A Comparative Review of Agglomerative and K-Means Clustering Techniques",
    authors: "Gour, S.; Randa, R.",
    venue: "Medical Science: Recent Advances and Applications, Vol. 2",
    details: "April 2025, pp. 135–4",
    doi: "https://doi.org/10.9734/bpi/msraa/v2/5195",
    type: "Book Chapter",
    image: "/papers/book-chapters/ch_2.jpg",
    sourceLink: "https://hal.science/hal-05054935/",
  },
  {
    year: 2024,
    title:
      "Advanced Machine Learning Approaches for Early Detection of Breast Cancer and Associated Therapeutic Challenges",
    authors: "Rajendra Randa and co-inventors",
    venue: "Indian Patent Service",
    details: "Application No. 202421103014 · 2nd Inventor",
    type: "Patent",
    image: "/papers/patents/P_1.jpg"
  },
  {
    year: 2025,
    title:
      "Intelligent System for Early Detection and Diagnosis of Breast Cancer Using Deep Learning",
    authors: "Rajendra Randa and co-inventors",
    venue: "Indian Patent Service",
    details: "Application No. 202521085383 · 1st Inventor",
    type: "Patent",
    image: "/papers/patents/P_2.jpg"
  },
  {
    year: 2025,
    title:
      "Machine Learning-Driven Framework for Early Detection and Risk Stratification of Cardiovascular Disease",
    authors: "Rajendra Randa and co-inventors",
    venue: "Indian Patent Service",
    details: "Application No. 202511080276 · 3rd Inventor",
    type: "Patent",
    image: "/papers/patents/P_3.jpg"
  },
];

/* =========================================================
   EDUCATION DATA
   Edit academic qualifications here.
   ========================================================= */

const education = [
  [
    "PhD in Computer Science",
    "Medicaps University, Indore",
    "Aug 2023 – Present",
    "CGPA 8.17 (Coursework)",
    "ML in Healthcare",
  ],
  [
    "M.Sc. Computer Science",
    "Govt. Holkar Science College, DAVV, Indore",
    "July 2020 – Sept 2022",
    "CGPA 7.74",
    "",
  ],
  [
    "B.Sc. Computer Science, Mathematics, Physics",
    "Govt. Holkar Science College, DAVV, Indore",
    "July 2016 – Oct 2019",
    "54.86%",
    "",
  ],
  [
    "12th — Mathematics, Physics, Chemistry",
    "MP Board Bhopal",
    "2015 – 2016",
    "78.60%",
    "",
  ],
  [
    "10th — All General Subjects",
    "MP Board Bhopal",
    "2013 – 2014",
    "90%",
    "",
  ],
];

/* =========================================================
   RESEARCH AREAS
   Edit research-area cards here.
   ========================================================= */

const researchAreas = [
  [
    "01",
    "Machine Learning for Healthcare",
    "Predictive modelling and data-centric machine learning approaches for healthcare and early disease detection.",
  ],
  [
    "02",
    "Breast Cancer AI",
    "Machine learning, CNNs, radiomics, and mammographic-image analysis for breast cancer prediction and classification.",
  ],
  [
    "03",
    "Clinical AI",
    "AI methods for cardiovascular disease, Parkinson’s disease, disease progression, and clinical decision support.",
  ],
  [
    "04",
    "AI in Education",
    "Investigating the role and impact of AI and machine learning tools in teaching, learning, and higher education.",
  ],
];

/* =========================================================
   CERTIFICATES / TRAINING DATA
   Edit certificate categories here.
   ========================================================= */

const certificates = [
  "Faculty Development Programme and research-oriented training",
  "AI, machine learning and data science training",
  "Research methodology and scientific writing training",
  "Higher-education and emerging-technology training",
];

/* =========================================================
   RESEARCH / WORK SECTION DATA
   ========================================================= */

const workSections: {
  title: string;
  description: string;
  items: string[];
}[] = [
  {
    title: "Journal Papers",
    description:
      "Peer-reviewed journal work applying machine learning, deep learning, medical imaging, and AI to healthcare and education.",
    items: publications
      .filter((p) => p.type === "Journal")
      .map(
        (p) =>
          `${p.authors} (${p.year}). ${p.title}. ${p.venue}, ${p.details}.`
      ),
  },
  {
    title: "Conference Papers",
    description:
      "Conference and proceedings contributions covering healthcare AI, machine learning, deep learning, and emerging applications.",
    items: publications
      .filter((p) => p.type === "Conference Proceedings")
      .map(
        (p) =>
          `${p.authors} (${p.year}). ${p.title}. ${p.venue}. ${p.details}.`
      ),
  },
  {
    title: "Conference Presentations",
    description:
      "Research presented at academic conferences and scholarly events.",
    items: publications
      .filter((p) => p.type === "Conference Presentation")
      .map(
        (p) => `${p.title} — ${p.venue} (${p.year}); ${p.details}.`
      ),
  },
  {
    title: "Book Chapters",
    description:
      "Book-chapter contributions focused on computational methods, healthcare AI, and machine learning applications.",
    items: publications
      .filter((p) => p.type === "Book Chapter")
      .map(
        (p) =>
          `${p.authors} (${p.year}). ${p.title}. ${p.venue}, ${p.details}.`
      ),
  },
  {
    title: "Patents",
    description:
      "Patent applications reflecting applied research in early disease detection, diagnosis, and clinical risk stratification.",
    items: publications
      .filter((p) => p.type === "Patent")
      .map((p) => `${p.title} — ${p.details}.`),
  },
  {
    title: "Certificates",
    description:
      "Selected academic, research, AI, data science, and faculty-development training areas.",
    items: certificates,
  },
];

/* =========================================================
   ANIMATED NETWORK
   Hero background animation.
   ========================================================= */

function AnimatedNetwork() {
  const nodes = useMemo(
    () =>
      Array.from({ length: 34 }, (_, i) => ({
        left: `${5 + ((i * 31) % 90)}%`,
        top: `${8 + ((i * 47) % 82)}%`,
      })),
    []
  );

  return (
    <div className="network" aria-hidden="true">
      <div className="network-grid" />

      {nodes.map((node, index) => (
        <span
          key={index}
          className="node"
          style={{
            left: node.left,
            top: node.top,
          }}
        />
      ))}

      <div className="orb orb-a" />
      <div className="orb orb-b" />
    </div>
  );
}

/* =========================================================
   PUBLICATION COMPONENT
   Displays individual publication records.
   ========================================================= */

function PublicationPanel({
  title,
  items,
}: {
  title: string;
  items: Publication[];
}) {
  return (
    <section className="pub-section">
      <div className="section-kicker">
        {title} <span className="count">{items.length}</span>
      </div>

      <div className="pub-panel">
        {items.map((publication, index) => (
          <article
            className="publication"
            key={`${publication.title}-${index}`}
          >
            <div className="pub-year">{publication.year}</div>

            {publication.image && (
              <div className="pub-image">
                <img
                  src={publication.image}
                  alt={`Front page of ${publication.title}`}
                />
              </div>
            )}

            <div className="pub-main">
              <h3>{publication.title}</h3>

              <p className="authors">{publication.authors}</p>

              <p className="venue">{publication.venue}</p>

              <p className="details">
                {publication.details}
                {publication.status ? ` · ${publication.status}` : ""}
              </p>

              <div className="pub-actions">
                {publication.doi && (
                  <a
                    href={publication.doi}
                    target="_blank"
                    rel="noreferrer"
                  >
                    DOI
                  </a>
                )}

                <button
                  onClick={() =>
                    navigator.clipboard?.writeText(
                      `${publication.title}. ${publication.authors}. ${publication.venue}. ${publication.details}`
                    )
                  }
                >
                  CITE
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   MAIN PAGE
   ========================================================= */

export default function Page() {
  /* =======================================================
     NAVIGATION & PUBLICATION FILTER STATE
     ======================================================= */

  const [menuOpen, setMenuOpen] = useState(false);

  const [filter, setFilter] = useState<"All" | PubType>("All");

  const filteredPublications =
    filter === "All"
      ? publications
      : publications.filter((publication) => publication.type === filter);

  const filters: ("All" | PubType)[] = [
    "All",
    "Journal",
    "Conference Proceedings",
    "Conference Presentation",
    "Book Chapter",
    "Patent",
  ];

  return (
    <main>

      {/* ===================================================
          00. NAVIGATION
          =================================================== */}

      <header className="nav">
        <a
        className="brand"
        href="#home"
        onClick={() => setMenuOpen(false)}
        >
      <img
        src="/favicon.png"
        alt="Rajendra Randa"
        className="brand-mark"
      />

       <h1>
          <i>The_Way_Of_Life</i>...
        </h1>
      </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            "HOME",
            "BASIC INFO",
            "PUBLICATIONS",
            "RESEARCH",
            "WORK",
            "CONTACT",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* ===================================================
          01. HERO / HOME SECTION
          Main landing section.
          =================================================== */}

      <section id="home" className="hero">
        <AnimatedNetwork />

        <div className="hero-inner">
          <p className="eyebrow">
            AI / ML RESEARCHER · EDUCATOR · COMPUTER SCIENCE
          </p>

          <h1>
            Artificial intelligence
            <br />
            <em>for advancing humanity.</em>
          </h1>

          <blockquote>
            “Artificial Intelligence and Human Intelligence are not just about
            comparison or competition. They are about saving lives and
            advancing humanity by making the impossible possible with
            motivating to explore the secrets of life.”
            <cite>— Rajendra Kumar R. · March 2023</cite>
          </blockquote>

          <div className="hero-sub">
            PhD in Computer Science (Ongoing) · Machine Learning for Healthcare
            · Medicaps University, Indore
          </div>

          <div className="hero-actions">
            <a className="button primary" href="#research">
              Explore research
            </a>

            <a className="button ghost" href="#publications">
              View publications
            </a>

            <a className="button ghost" href="/resume.pdf" download>
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-footer">
          MACHINE LEARNING · DEEP LEARNING · NLP · COMPUTER VISION ·
          HEALTHCARE AI
        </div>
      </section>

      {/* ===================================================
          02. BASIC INFORMATION SECTION
          Profile, education, skills and teaching philosophy.
          =================================================== */}

      <section id="basic-info" className="section">

        {/* ---------- Profile ---------- */}

        <div className="section-heading">
          <span className="section-number">01</span>

          <div>
            <p className="section-kicker">PROFILE</p>
            <h2>Basic information</h2>
          </div>
        </div>

        <div className="info-grid">
          <aside className="profile-card">
            <div className="portrait-placeholder">
              <img src="/profile.png" alt="RR" />
            </div>

            <h3>Rajendra Randa</h3>

            <p>PhD Scholar · AI / ML Researcher</p>
            <p>Machine Learning for Healthcare</p>
            <p>Medicaps University, Indore</p>

            <div className="badge">
              UGC-NET Qualified · Assistant Professor
            </div>
          </aside>

          <div className="bio">
            <p className="lead">
              Dedicated and research-driven Computer Science PhD scholar
              specializing in Machine Learning for Healthcare, committed to
              advancing AI-driven research and fostering student engagement.
            </p>

            <p>
              I work on predictive modelling, deep learning, healthcare AI,
              scientific writing, and research methodology, with particular
              interest in early disease detection and clinically relevant
              machine learning systems.
            </p>

            <div className="facts">
              <div>
                <span>Research domain</span>
                <strong>ML for Healthcare</strong>
              </div>

              <div>
                <span>Qualification</span>
                <strong>PhD · Ongoing</strong>
              </div>

              <div>
                <span>NET</span>
                <strong>Qualified · Dec 2024</strong>
              </div>
            </div>

            <a className="button primary" href="/resume.pdf" download>
              Download CV / Resume (PDF)
            </a>
          </div>
        </div>

        {/* ---------- Academic Qualifications ---------- */}

        <div className="subsection">
          <p className="section-kicker">ACADEMIC QUALIFICATIONS</p>

          <div className="education-table">
            {education.map((item, index) => (
              <div className="edu-row" key={index}>
                <div>
                  <strong>{item[0]}</strong>
                  <small>{item[4]}</small>
                </div>

                <div>{item[1]}</div>
                <div>{item[2]}</div>
                <div>{item[3]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Technical Skills & Teaching Philosophy ---------- */}

        <div className="subsection two-col">
          <div>
            <p className="section-kicker">TECHNICAL SKILLS</p>

            <p>
              <strong>Languages:</strong> Python, R, C, C++, SQL, Java
            </p>

            <p>
              <strong>Tools:</strong> Jupyter Notebook, VS Code, RStudio,
              Power BI, Tableau, Oracle SQL, WEKA, KNIME, AI tools
            </p>

            <p>
              <strong>Domains:</strong> Machine Learning, Deep Learning, NLP,
              Computer Vision, Data Analysis & Visualization
            </p>

            <p>
              <strong>Research:</strong> LaTeX, SPSS, SAS, Scientific &
              Technical Writing
            </p>
          </div>

          <div>
            <p className="section-kicker">TEACHING PHILOSOPHY</p>

            <p>
              I believe in cultivating an{" "}
              <strong>
                interactive, inquiry-driven, and research-oriented learning
                environment
              </strong>
              . My teaching approach integrates real-world datasets,
              problem-based learning, and hands-on projects to bridge theory
              and practice.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================
          03. PUBLICATIONS SECTION
          Publication filters and publication cards.
          =================================================== */}

      <section id="publications" className="section alt">
        <div className="section-heading">
          <span className="section-number">02</span>

          <div>
            <p className="section-kicker">SCHOLARLY OUTPUT</p>
            <h2>Research & publications</h2>
          </div>
        </div>

        {/* ---------- Publication Filters ---------- */}

        <div className="filters">
          {filters.map((item) => (
            <button
              key={item}
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* ---------- Publication List ---------- */}

        <PublicationPanel
          title="Scrollable publication record"
          items={filteredPublications}
        />
      </section>

      {/* ===================================================
          04. RESEARCH SECTION
          Research focus and publication categories.
          =================================================== */}

      <section id="research" className="section">
        <div className="section-heading">
          <span className="section-number">03</span>

          <div>
            <p className="section-kicker">RESEARCH CONTRIBUTIONS</p>
            <h2>Research and publications</h2>
          </div>
        </div>

        <p className="research-intro">
          Research focuses on leveraging advanced machine learning and
          artificial intelligence techniques to address critical challenges
          in healthcare, particularly early disease detection and predictive
          diagnostics. The work also explores medical imaging, clinical
          intelligence, and the integration of AI in educational settings.
        </p>

        <div className="research-work-grid">
          {workSections.map((section, index) => (
            <article
              className="research-work-card"
              key={section.title}
            >
              <div className="research-work-head">
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{section.title}</h3>

                <b>{section.items.length}</b>
              </div>

              <p className="description">
                {section.description}
              </p>

              <ul>
                {section.items.map((item, itemIndex) => (
                  <li key={`${section.title}-${itemIndex}`}>
                    {item}
                  </li>
                ))}
              </ul>

              {section.title !== "Certificates" && (
                <a className="research-link" href="#publications">
                  View full publication record →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ===================================================
          05. WORK & CONTRIBUTIONS SECTION
          Academic development, timeline, recognition and training.
          =================================================== */}

      <section id="work" className="section alt">
        <div className="section-heading">
          <span className="section-number">04</span>

          <div>
            <p className="section-kicker">ACADEMIC DEVELOPMENT</p>
            <h2>Work & contributions</h2>
          </div>
        </div>

        {/* ---------- Academic Timeline ---------- */}

        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-date">
              Aug 2023 — Present
            </div>

            <div>
              <h3>Research Scholar</h3>

              <strong>Medicaps University, Indore</strong>

              <p>
                Advanced research on machine learning algorithms for
                predictive modelling in healthcare, with emphasis on early
                disease detection using clinical data.
              </p>

              <p>
                Research contributions include healthcare ML, breast cancer
                prediction, cardiovascular disease modelling, Parkinson’s
                disease analysis, and AI in education.
              </p>
            </div>
          </article>

          <article className="timeline-item">
            <div className="timeline-date">
              Research contributions
            </div>

            <div>
              <h3>Publications & interdisciplinary research</h3>

              <p>
                Published and presented work across healthcare AI, medical
                imaging, machine learning, deep learning, cardiovascular
                prediction, and educational applications of AI. Contributions
                include Springer conference proceedings and book chapters with
                BP International.
              </p>
            </div>
          </article>

          <article className="timeline-item">
            <div className="timeline-date">Teaching</div>

            <div>
              <h3>Teaching philosophy</h3>

              <p>
                Research-oriented teaching with real-world datasets,
                problem-based learning, hands-on projects, and emerging AI
                research integrated into coursework. Teaching experience is
                currently developing.
              </p>
            </div>
          </article>

          <article className="timeline-item">
            <div className="timeline-date">2024 — 2025</div>

            <div>
              <h3>Faculty Development & training</h3>

              <p>
                International and national FDP participation covering
                management & innovation, research paper writing, AI & cloud
                security, emerging trends in higher education, and AI tools
                for teaching and research.
              </p>
            </div>
          </article>
        </div>

        {/* ---------- Recognition & Training ---------- */}

        <div className="credentials">
          <div>
            <p className="section-kicker">
              RECOGNITION & MEMBERSHIPS
            </p>

            <ul>
              <li>
                UGC-NET Qualified for Assistant Professor — December 2024
              </li>
              <li>
                Member, International Association of Engineers — Since June
                2025
              </li>
              <li>
                Member, Chendur Research Foundation — Since August 2025
              </li>
              <li>
                Reviewer, Advances in Artificial Intelligence and Machine
                Learning
              </li>
            </ul>
          </div>

          <div>
            <p className="section-kicker">TRAINING HIGHLIGHTS</p>

            <ul>
              <li>
                AI Internship Program — Pantech APSSDC, Chennai (2025)
              </li>
              <li>
                Data Science 2.0 — Pantech APSSDC, Chennai (2023)
              </li>
              <li>AI in Clinical Trials — Cumind (2025)</li>
              <li>Statistics for Data Science — Great Learning</li>
              <li>
                Agile Methodology Virtual Experience — Cognizant
              </li>
              <li>
                AI and Google Tools in Education — Dynamic Mind Group Solution
                & Google
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===================================================
          06. CONTACT SECTION
          Contact form and academic/social links.
          =================================================== */}

      <section id="contact" className="section contact-section">
        <div className="section-heading">
          <span className="section-number">05</span>

          <div>
            <p className="section-kicker">GET IN TOUCH</p>
            <h2>Contact</h2>
          </div>
        </div>

        <div className="contact-form">
          <p className="contact-line">
            For research collaboration, academic discussion, or professional
            enquiries, feel free to send a query.
          </p>

          {/* ---------- Contact Form ---------- */}
          <form
  onSubmit={async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value;

    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value;

    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send query.");
      }

      alert("Your query has been sent successfully.");

      form.reset();
    } catch (error) {
      console.error(error);

      alert("Unable to send your query. Please try again.");
    }
  }}
>
  <input
    type="text"
    name="name"
    placeholder="Your name"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Your email"
    required
  />

  <textarea
    name="message"
    placeholder="Your query"
    rows={5}
    required
  />

  <button type="submit" className="button primary">
    Send Query
  </button>
</form>
          {/* ---------- Academic Links ---------- */}

          <div className="contact-links">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rajen-r"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.9c0-3.76-2-5.51-4.67-5.51-2.15 0-3.11 1.18-3.65 2.01V8.5H9.2V21h3.48v-6.18c0-1.63.31-3.21 2.33-3.21 1.99 0 2.01 1.86 2.01 3.32V21H21v-7.1Z" />
              </svg>

              <span>LinkedIn</span>
            </a>

            {/* Google Scholar */}
            <a
              href="https://scholar.google.com/citations?user=zd5R-SIAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Google Scholar"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3 2.5 9 12 15l7.5-4.74V16h2V9L12 3Z" />
                <path d="M6 13.2V17c0 2.2 2.7 4 6 4s6-1.8 6-4v-3.8l-6 3.8-6-3.8Z" />
              </svg>

              <span>Google Scholar</span>
            </a>

            {/* ResearchGate */}
            <a
              href="https://www.researchgate.net/profile/Rajendra-Randa"
              target="_blank"
              rel="noreferrer"
              aria-label="ResearchGate"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 4h6.2c3.3 0 5.3 1.8 5.3 4.7 0 2.1-1.1 3.6-3 4.3L18 20h-3.4l-4.1-6.2H8.3V20H5V4Zm3.3 2.8v4.2h2.5c1.5 0 2.4-.8 2.4-2.1 0-1.4-.9-2.1-2.4-2.1H8.3Z" />
              </svg>

              <span>ResearchGate</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/rajendra-randa"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.33 6.84 9.68.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.2-3.37-1.2-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1.01.07 1.54 1.07 1.54 1.07.9 1.57 2.35 1.12 2.93.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.03 0-1.11.39-2.01 1.03-2.72-.1-.26-.45-1.29.1-2.69 0 0 .84-.27 2.75 1.04A9.2 9.2 0 0 1 12 7.21c.85 0 1.7.12 2.5.36 1.91-1.31 2.75-1.04 2.75-1.04.55 1.4.2 2.43.1 2.69.64.71 1.03 1.61 1.03 2.72 0 3.89-2.35 4.77-4.58 5.02.36.32.68.94.68 1.9v2.55c0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
              </svg>

              <span>GitHub</span>
            </a>

          </div>
        </div>
      </section>

      {/* ===================================================
          07. FOOTER
          =================================================== */}

      <footer>
        <div>
          <strong>RAJENDRA RANDA</strong>

          <span>
            AI / ML Researcher · Machine Learning for Healthcare · Educator
          </span>
        </div>

        <a href="#home">Back to top ↑</a>
      </footer>

    </main>
  );
}
