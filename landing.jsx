// Landing page
const { useState: useStateL } = React;

const LandingPage = ({ heroStyle = 'photo', statsStyle = 'icons', onNav }) => {
  const heroContent = (
    <>
      <div className="hero__badge">Cancer Therapeutic Accelerator</div>
      <h1 className="hero__title">Accelerate your pathway from researcher to founder.</h1>
    </>
  );

  let heroClass = 'hero hero--photo';
  let heroBg = null, heroScrim = null;
  if (heroStyle === 'photo') {
    heroBg = <div className="hero__bg" style={{ backgroundImage: "url('assets/hero.jpg')" }} />;
    heroScrim = <div className="hero__scrim" />;
  } else if (heroStyle === 'solid') {
    heroClass = 'hero';
    heroBg = <div className="hero__bg" style={{ background: 'var(--ink)' }} />;
  } else if (heroStyle === 'gradient') {
    heroClass = 'hero';
    heroBg = <div className="hero__bg" style={{ background: 'linear-gradient(135deg, #00007E 0%, #0E0F24 70%, #14148f 100%)' }} />;
  } else if (heroStyle === 'fullbleed') {
    heroBg = <div className="hero__bg" style={{ backgroundImage: "url('assets/hero.jpg')" }} />;
    heroScrim = <div className="hero__scrim" style={{ background: 'linear-gradient(90deg, rgba(0,0,126,0.85) 0%, rgba(14,15,36,0.35) 100%)' }} />;
  } else if (heroStyle === 'boxed') {
    heroBg = <div className="hero__bg" style={{ backgroundImage: "url('assets/hero.jpg')", backgroundSize: 'cover' }} />;
    heroScrim = <div className="hero__scrim" style={{ background: 'rgba(14,15,36,0.55)' }} />;
  }

  return (
    <div className="site" data-screen-label="01 Landing">
      <Header page="landing" onNav={onNav} />
      <section className={heroClass} style={{ height: 598 }}>
        {heroBg}
        {heroScrim}
        <div className="hero__inner">
          {heroContent}
        </div>
      </section>
      <SubNav page="landing" onNav={onNav} showLabel />

      <section className="rt">
        <h2 className="rt__title">Apply by 30 June 2026 and transform your early-stage therapeutic concept into an investable venture package.</h2>
        <div className="rt__body">
          <p>Oncology start-ups face unique challenges, including lengthy development timelines, complex regulatory requirements, and a lack of specialised support. Our Therapeutics Accelerator will help you tackle these challenges by combining deep expertise with a pathway to capital.</p>
          <p>You'll have access to targeted mentorship, oncology-specific expertise, and support to explore the various routes to progress your start-up from idea to commercialisation.</p>
          <p>This is not just an accelerator—it's a bridge. From discovery to investment readiness. From researcher to founder. From promising science to patient impact.</p>
          <button className="btn" onClick={() => onNav && onNav('programme')}>Learn more about eligibility and how to apply</button>
        </div>
      </section>

      <section className={`stats ${statsStyle === 'numbers' ? 'stats--numbers' : statsStyle === 'large' ? 'stats--large' : ''}`}>
        <h2 className="stats__title">What we offer</h2>
        <div className="stats__grid">
          <div className="stat">
            <div className="stat__icon"><DrugsIcon size={60} /></div>
            <div className="stat__label">Four-month programme providing integrated venture-building support including mentorship, wet-lab access, regulatory guidance, and business development expertise</div>
          </div>
          <div className="stat">
            <div className="stat__icon"><NetworkIcon size={60} /></div>
            <div className="stat__label">Networking opportunities with a range of investors, pharmaceutical leaders, academic collaborators and other founders</div>
          </div>
          <div className="stat">
            <div className="stat__icon"><HandshakeIcon size={60} /></div>
            <div className="stat__label">Non-dilutive grant awarded per successful team</div>
          </div>
          <div className="stat">
            <div className="stat__icon"><SeedIcon size={60} /></div>
            <div className="stat__label">Opportunity to compete for a £250k prize award and potential access to our Seed Fund, further commercialisation opportunities as part of our portfolio or through external investment and partnership.</div>
          </div>
        </div>
      </section>

      <section className="split">
        <h2 className="split__title-row">What sets us apart?</h2>
        <div className="split__grid">
          <div className="split__image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1000&q=80')" }} />
          <div className="split__body">
            <div className="split__eyebrow">What sets us apart</div>
            <h3 className="split__h">Oncology specific</h3>
            <p className="split__p">Delivering a practical and dedicated programme aimed at oncology first: an oncology-specific mentor network, diverse modality expertise, and a unique challenger culture in an innovative space.</p>
            <div><button className="btn">Learn more</button></div>
          </div>
        </div>
      </section>

      <section className="split">
        <div className="split__grid split__grid--reversed">
          <div className="split__body">
            <div className="split__eyebrow">CTA banner</div>
            <h3 className="split__h">Founder development and therapeutic advancement</h3>
            <p className="split__p">While some are viable as investable companies, a few can be advanced with focused capital. Your team inputs to the channel with our industry partnerships, ideally together with mentorship.</p>
            <div><button className="btn">Learn more</button></div>
          </div>
          <div className="split__image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80')" }} />
        </div>
      </section>

      <section className="split">
        <div className="split__grid">
          <div className="split__image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1000&q=80')" }} />
          <div className="split__body">
            <div className="split__eyebrow">Seed Fund</div>
            <h3 className="split__h">Multiple pathways, not just start-ups</h3>
            <p className="split__p">As well as building strong founder-led start-ups, most successful throughout the programme will be considered for partnership, licensing, and further commercialisation opportunities that best fit the right path to the right project.</p>
            <div><button className="btn">Learn more</button></div>
          </div>
        </div>
      </section>

      <section className="split">
        <div className="split__grid split__grid--reversed">
          <div className="split__body">
            <div className="split__eyebrow">CTA banner</div>
            <h3 className="split__h">Non-dilutive at entry</h3>
            <p className="split__p">Each team will receive a £40k grant to participate in the twelve-week training, support the progression of your research project, and the 2026 cohort is the first portfolio from which we'll identify our ongoing portfolio.</p>
            <div><button className="btn">Learn more</button></div>
          </div>
          <div className="split__image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1000&q=80'), linear-gradient(135deg, #00007E, #6a5acd)" }} />
        </div>
      </section>

      <section className="split">
        <div className="split__grid">
          <div className="split__image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80')" }} />
          <div className="split__body">
            <div className="split__eyebrow">Infrastructure</div>
            <h3 className="split__h">Access to Cancer Research UK infrastructure</h3>
            <p className="split__p">As participants in this accelerator, you'll be able to utilise the programme network of research centres, instrumentation, infrastructure, mentor expertise and more to build additional momentum for your early pre-clinical programmes.</p>
            <div><button className="btn">Learn more</button></div>
          </div>
        </div>
      </section>

      <CTAImpact />
      <Teasers />
      <Footer />
    </div>
  );
};

window.LandingPage = LandingPage;
