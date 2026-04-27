// Programme details page
const ProgrammePage = ({ heroStyle = 'photo', statsStyle = 'icons', onNav }) => {
  return (
    <div className="site" data-screen-label="02 Programme">
      <Header page="programme" onNav={onNav} />
      <section className="hero hero--programme" style={{ background: heroStyle === 'photo' ? 'linear-gradient(rgba(14,15,36,0.85), rgba(14,15,36,0.85)), url(assets/hero.jpg) center/cover' : heroStyle === 'gradient' ? 'linear-gradient(135deg, #00007E 0%, #0E0F24 100%)' : 'var(--ink)' }}>
        <div className="hero__inner">
          <div>
            <h1 className="hero__title" style={{ fontSize: 60 }}>Programme details</h1>
            <p className="hero__sub">Apply to be part of our pilot programme</p>
          </div>
          <div className="hero__badge">Cancer Therapeutic Accelerator</div>
        </div>
      </section>

      <nav className="crumbs">
        <a href="#">Cancer Research Horizons</a>
        <span className="sep"><CrumbChevron /></span>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav && onNav('landing'); }}>Therapeutics Accelerator</a>
        <span className="sep"><CrumbChevron /></span>
        <span className="current">Programme details</span>
      </nav>

      <section className="rt">
        <h2 className="rt__title">About the programme</h2>
        <div className="rt__body">
          <p className="rt__lede">Our Therapeutics Accelerator is a founder centric, translational programme aiming to develop high potential scientific innovators into compelling leaders.</p>
          <p>You'll finish the programme with the confidence and communication of a founder, an investor-ready package including a bespoke commercialisation roadmap and an active peer and mentor support network.</p>
        </div>
      </section>

      <section className="rt" id="whats-included">
        <h2 className="rt__title">What's included in the programme</h2>
        <div className="rt__body">
          <div className="phases">
            <p className="phases__lede">The pilot will support three to five teams over a four-month period starting in September 2026.</p>
            <div className="phase">
              <h3>Pre-accelerator phase</h3>
              <p>You'll have the chance to attend a three-day bootcamp offering entrepreneurial and business training, followed by market exploration.</p>
            </div>
            <div className="phase">
              <h3>Acceleration phase</h3>
              <p>As part of our 2026 cohort, you'll follow a structured programme with tailored mentorship, technical support, and networking opportunities. There will be an in-person day each month in London covering core topics, mentor clinics and networking dinners. Online follow-up meetings will support you in applying the learning from these sessions to your project.</p>
            </div>
            <div className="phase">
              <h3>High-profile demo day</h3>
              <p>This will be the culmination of the programme and allow you to showcase your start-up to investors and collaborators.</p>
            </div>
            <div className="phase">
              <h3>Yearly conference</h3>
              <p>You'll also be invited to attend an annual conference aimed at uniting start-ups and founders from our accelerators, fostering ongoing collaboration and showcasing your innovations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="split">
        <div className="split__grid">
          <div className="split__image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1000&q=80')" }} />
          <div className="split__body">
            <h3 className="split__h" style={{ fontSize: 30 }}>Eligibility</h3>
            <p className="split__p" style={{ fontSize: 16 }}>Later stages of the Therapeutics Accelerator will be available internationally but for our pilot, we're seeking UK-based teams ready to explore company creation and other commercialisation opportunities.</p>
            <p className="split__p" style={{ fontSize: 16 }}>We're looking for:</p>
            <ul style={{ fontSize: 16, lineHeight: 1.5, color: 'var(--ink-2)', margin: 0, paddingLeft: 20 }}>
              <li>late-stage PhD students, post-docs and early principal investigators</li>
              <li>do not have to be Cancer Research UK funded</li>
              <li>early therapeutic concepts</li>
              <li>small molecules, biologics, cell and gene therapies, radiopharmaceuticals; modality agnostic, with a clear oncology focus</li>
            </ul>
            <div><button className="btn" style={{ marginTop: 8 }}>Apply now</button></div>
          </div>
        </div>
      </section>

      <section className="steps-section">
        <h2>How to apply</h2>
        <div className="steps">
          {[
            { n: 1, body: "Submit your application by 30 June 2026. Applications open for the pilot cohort.", date: "XX March 2026" },
            { n: 2, body: "You'll be invited to submit a simple application through our online platform. This will include a non-confidential slide deck, short form and a 7-10 min video pitch.", date: "XX April 2026" },
            { n: 3, body: "Your application will go through a two-stage triage and external diligence process. Applications will be reviewed by our internal committee and an External Advisory Group.", date: "XX May 2026" },
            { n: 4, body: "Successful teams will receive £40k to support their project as they participate in the four-month programme.", date: "XX June 2026" },
            { n: 5, body: "Teams will participate in our Demo Day to showcase your start-up to investors and collaborators. You'll also have the chance to compete for two Prize Awards of £250k.", date: "XX Dec 2026" },
          ].map(s => (
            <div key={s.n} className="step">
              <div className="step__head">
                <div className="step__circle">{s.n}</div>
                <div className="step__line" />
              </div>
              <div className="step__body">
                <p>{s.body}</p>
                <div className="step__date">{s.date}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="steps-section__foot">Applications that are not selected will receive third-party due diligence and transparent feedback. You're also welcome to re-apply again for future cohorts.</p>
      </section>

      <section className="curriculum">
        <h2>Curriculum</h2>
        <p className="curriculum__lede">The programme consists of a virtual curriculum, in-person days, regular online office hours and mentor clinics. Our curriculum focuses on four pillars essential to progress therapeutic concepts to investible propositions.</p>
        <div className="table">
          <div className="table__h">Pillar</div>
          <div className="table__h">Learning outcomes</div>
          <div className="table__h">Core modules</div>

          <div className="table__cell table__cell--alt">
            <h4>Scientific excellence</h4>
            <div style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--ink-2)' }}>Delivered through:</div>
            <ul>
              <li>Interactive workshops</li>
              <li>Case study-based learning</li>
              <li>In-person days with scientific founders</li>
              <li>Mentor-led 1:1 technical discussions</li>
            </ul>
          </div>
          <div className="table__cell">
            <ul>
              <li>Understand and articulate the therapeutic rationale – 'Why this target'</li>
              <li>Identify and design the critical experiments required for preclinical validation</li>
              <li>Map disease biology to indications and patient populations</li>
              <li>Grounding of therapeutic strategy in human biology</li>
            </ul>
          </div>
          <div className="table__cell table__cell--alt">
            <div className="module">
              <h4>Disease Biology &amp; Target Validation (Foundation)</h4>
              <ul>
                <li>Human biology vs. model-driven evidence</li>
                <li>Unbiased screens and genetic/omics approaches</li>
                <li>What defines a "good" target?</li>
                <li>Case examples (e.g., oncology PDX use, genetic drivers)</li>
              </ul>
            </div>
            <div className="module">
              <h4>Critical Experiments for Investability</h4>
              <ul>
                <li>Essential in vitro studies</li>
                <li>Essential in vivo models</li>
                <li>Linking mechanism → activity → investable story</li>
                <li>Identifying the minimum dataset for investor traction</li>
              </ul>
            </div>
            <div className="module">
              <h4>Preclinical Development Planning</h4>
              <ul>
                <li>Designing a preclinical package</li>
                <li>Avoiding unnecessary complexity</li>
                <li>What investors expect at first cheque</li>
              </ul>
            </div>
            <div className="module">
              <h4>Translation Strategy</h4>
              <ul>
                <li>Mapping preclinical rationale to the first-in-human study</li>
                <li>Patient selection and biomarker thinking</li>
                <li>Clinical relevance of disease biology</li>
                <li>Connecting in vitro → in vivo → phase I endpoints</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="split" id="faqs">
        <div className="split__grid">
          <div className="split__image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80')" }} />
          <div className="split__body">
            <h3 className="split__h" style={{ fontSize: 30 }}>Frequently asked questions</h3>
            <p className="split__p" style={{ fontSize: 16 }}>Check out our frequently asked questions for more detail on the programme, governance and how to apply.</p>
            <div><button className="btn" style={{ marginTop: 8 }}>Read the FAQs</button></div>
          </div>
        </div>
      </section>

      <CTAImpact />
      <Teasers />
      <Footer />
    </div>
  );
};

window.ProgrammePage = ProgrammePage;
