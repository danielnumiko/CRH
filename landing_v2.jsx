// Landing page — V2 (reworked)
// KEPT: What we offer (typographic stats), numbered feature rows.
// REWORKED: hero (3 options via prop), subnav→section rail, intro rich-text,
//           CTA banner. Still navy + white + cyan only.

const LandingPageV2 = ({ onNav, heroStyle = 'fullbleed', tone = 'quiet' }) => {
  return (
    <div className={`site v2 tone-${tone}`} data-screen-label="V2 01 Landing">
      <Header page="landing" onNav={onNav} />

      {/* ── HERO ── one of four variants ── */}
      {heroStyle === 'fullbleed' && (
        <section className="v2h-full">
          <div className="v2h-full__bg" style={{ backgroundImage: "url('assets/hero.jpg')" }} />
          <div className="v2h-full__body">
            <div className="v2h-full__kicker">Cancer Therapeutic Accelerator</div>
            <h1 className="v2h-full__title">Accelerate your pathway from researcher to founder.</h1>
            <p className="v2h-full__sub">A four-month, oncology-specific programme helping UK researchers turn early therapeutic concepts into investable venture packages.</p>
          </div>
        </section>
      )}

      {heroStyle === 'split' && (
        <section className="v2h-split">
          <div className="v2h-split__body">
            <div className="v2h-split__kicker">Cancer Therapeutic Accelerator</div>
            <h1 className="v2h-split__title">Accelerate your pathway from researcher to founder.</h1>
            <p className="v2h-split__sub">A four-month, oncology-specific programme helping UK researchers turn early therapeutic concepts into investable venture packages.</p>
            <dl className="v2h-split__meta">
              <div><dt>Applications</dt><dd>Open XX March 2026</dd></div>
              <div><dt>Deadline</dt><dd>30 June 2026</dd></div>
              <div><dt>Cohort starts</dt><dd>September 2026</dd></div>
            </dl>
          </div>
          <div className="v2h-split__img" style={{ backgroundImage: "url('assets/hero.jpg')" }} />
        </section>
      )}

      {heroStyle === 'type' && (
        <section className="v2h-type">
          <div className="v2h-type__kicker">Cancer Therapeutic Accelerator · Pilot cohort 2026</div>
          <h1 className="v2h-type__title">Accelerate your pathway from researcher <em>to founder.</em></h1>
          <dl className="v2h-type__row">
            <div className="col"><dt>Programme</dt><dd>Four-month, oncology-specific founder programme.</dd></div>
            <div className="col"><dt>Applications</dt><dd>Open XX March — close 30 June 2026.</dd></div>
            <div className="col"><dt>Eligibility</dt><dd>UK late-stage PhDs, post-docs, early PIs.</dd></div>
            <div className="col" style={{ textAlign: 'right' }}>
              <button className="btn" onClick={() => onNav && onNav('programme')}>Apply now</button>
            </div>
          </dl>
        </section>
      )}

      {heroStyle === 'offset' && (
        <section className="v2h-offset">
          <div className="v2h-offset__bg" style={{ backgroundImage: "url('assets/hero.jpg')" }} />
          <div className="v2h-offset__card">
            <div className="v2h-offset__kicker">Cancer Therapeutic Accelerator</div>
            <h1 className="v2h-offset__title">Accelerate your pathway from researcher to founder.</h1>
            <p className="v2h-offset__sub">A four-month, oncology-specific programme. UK teams. £40k non-dilutive. Apply by 30 June 2026.</p>
          </div>
        </section>
      )}

      {/* ── SUB NAV (restored from V1) ── */}
      <SubNav page="landing" onNav={onNav} showLabel />

      {/* ── INTRO RICH-TEXT ── reworked as editorial label + lead + body ── */}
      <section className="v2-rt" id="overview">
        <div className="v2-rt__left">
          <div className="v2-rt__label">Overview</div>
          <h2 className="v2-rt__lead">Transform your early-stage therapeutic concept into an investable venture package.</h2>
        </div>
        <div className="v2-rt__main">
          <div className="v2-rt__body">
            <p>Oncology start-ups face unique challenges — lengthy development timelines, complex regulation and a lack of specialised support. Our Therapeutics Accelerator combines deep expertise with a pathway to capital.</p>
            <p>You'll access targeted mentorship, oncology-specific expertise and support to explore the routes that progress your start-up from idea to commercialisation.</p>
            <p>This is not just an accelerator. It's a bridge — from discovery to investment readiness, from researcher to founder, from promising science to patient impact.</p>
            <button className="btn" onClick={() => onNav && onNav('programme')}>Learn more about eligibility and how to apply</button>
          </div>
        </div>
      </section>

      {/* ── KEPT: typographic stats band ── */}
      <section className="v2-stats" id="offer">
        <div className="v2-stats__head">
          <h2 className="v2-stats__title">What we offer</h2>
          <span className="v2-stats__kicker">Programme in numbers</span>
        </div>
        <div className="v2-stats__grid">
          <div className="v2-stat">
            <div className="v2-stat__num">4<span className="sup">mo</span></div>
            <div className="v2-stat__k">Programme length</div>
            <div className="v2-stat__body">Four-month founder-centric programme covering mentorship, wet-lab access, regulatory guidance and business development.</div>
          </div>
          <div className="v2-stat">
            <div className="v2-stat__num">£40<span className="sup">k</span></div>
            <div className="v2-stat__k">Non-dilutive grant</div>
            <div className="v2-stat__body">Per successful team — to fund the training period and progression of your research project.</div>
          </div>
          <div className="v2-stat">
            <div className="v2-stat__num">£250<span className="sup">k</span></div>
            <div className="v2-stat__k">Top prize</div>
            <div className="v2-stat__body">Opportunity to compete for a £250k award and route to our Seed Fund and portfolio.</div>
          </div>
          <div className="v2-stat">
            <div className="v2-stat__num">1:1</div>
            <div className="v2-stat__k">Mentor match</div>
            <div className="v2-stat__body">Oncology-specific mentor network of pharma leaders, investors, and experienced founders.</div>
          </div>
        </div>
      </section>

      {/* ── KEPT: numbered feature rows ── */}
      <section id="apart" />
      <section className="v2-feature">
        <div className="v2-feature__img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1400&q=80')" }} />
        <div className="v2-feature__body">
          <div className="v2-feature__num">01 · What sets us apart</div>
          <h3 className="v2-feature__h">Oncology specific, end-to-end</h3>
          <p className="v2-feature__p">A practical programme built around oncology first: specialised mentors, diverse modality expertise, and a challenger culture in a collaborative space.</p>
          <p className="v2-feature__p">Modality agnostic — small molecules, biologics, cell and gene therapies, radiopharmaceuticals — as long as the focus is cancer.</p>
          <div><button className="btn">Learn more</button></div>
        </div>
      </section>

      <section className="v2-feature v2-feature--reverse">
        <div className="v2-feature__body">
          <div className="v2-feature__num">02 · Founder development</div>
          <h3 className="v2-feature__h">Therapeutic advancement, founder mindset</h3>
          <p className="v2-feature__p">Finish with the confidence and communication of a founder, an investor-ready package including a bespoke commercialisation roadmap, and an active peer and mentor support network.</p>
          <div><button className="btn">Learn more</button></div>
        </div>
        <div className="v2-feature__img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=80')" }} />
      </section>

      <section className="v2-feature">
        <div className="v2-feature__img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1400&q=80')" }} />
        <div className="v2-feature__body">
          <div className="v2-feature__num">03 · Multiple pathways</div>
          <h3 className="v2-feature__h">Not just start-ups — paths that fit</h3>
          <p className="v2-feature__p">As well as building founder-led start-ups, successful teams are considered for partnership, licensing, and other commercialisation routes — finding the right path for the right project.</p>
          <div><button className="btn">Learn more</button></div>
        </div>
      </section>

      <section className="v2-feature v2-feature--reverse">
        <div className="v2-feature__body">
          <div className="v2-feature__num">04 · Non-dilutive at entry</div>
          <h3 className="v2-feature__h">£40k up-front, no equity taken</h3>
          <p className="v2-feature__p">Each team receives a £40k grant to participate in the training and support the progression of their research — giving you room to focus on the science.</p>
          <div><button className="btn">Learn more</button></div>
        </div>
        <div className="v2-feature__img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1400&q=80')" }} />
      </section>

      <section className="v2-feature">
        <div className="v2-feature__img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1400&q=80')" }} />
        <div className="v2-feature__body">
          <div className="v2-feature__num">05 · Infrastructure</div>
          <h3 className="v2-feature__h">Cancer Research UK, behind you</h3>
          <p className="v2-feature__p">Access the network of research centres, instrumentation, infrastructure and mentor expertise — to build additional momentum for your early pre-clinical programmes.</p>
          <div><button className="btn">Learn more</button></div>
        </div>
      </section>

      {/* ── CTA (reworked: navy band, cyan rule, cyan button) ── */}
      <section className="v2-cta">
        <h2 className="v2-cta__title">Let us help you make an impact.</h2>
        <div className="v2-cta__body">
          <p>We're here with support and advice for researchers at all stages of the translational journey.</p>
          <button className="btn">Get in touch today</button>
        </div>
      </section>

      <Teasers />
      <Footer />
    </div>
  );
};

window.LandingPageV2 = LandingPageV2;
