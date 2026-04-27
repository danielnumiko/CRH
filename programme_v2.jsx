// Programme page — V2 (reworked)
// KEPT: About the programme (label/lead/body), What's included (phases),
//       How to apply (vertical timeline).
// REWORKED: hero (3 options via prop), breadcrumb/rail, Eligibility (card grid),
//           Curriculum (pillar rows), FAQs (inline accordion), CTA (navy band).

const ProgrammePageV2 = ({ onNav, heroStyle = 'classic', tone = 'quiet' }) => {
  const [openFaq, setOpenFaq] = React.useState(-1);
  const [applyStep, setApplyStep] = React.useState(0);
  const [applyProgress, setApplyProgress] = React.useState(0);
  const [inclStep, setInclStep] = React.useState(0);
  const [inclProgress, setInclProgress] = React.useState(0);

  // Pinned scroll — generic helper
  const usePinned = (id, steps, setStep, setProgress) => {
    React.useEffect(() => {
      const section = document.getElementById(id);
      if (!section) return;
      const onScroll = () => {
        const r = section.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = section.offsetHeight - vh;
        const passed = Math.max(0, Math.min(total, -r.top));
        const p = total > 0 ? passed / total : 0;
        setProgress(p);
        const idx = Math.min(steps - 1, Math.floor(p * steps));
        setStep(idx);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      };
    }, [id, steps]);
  };
  // (Was: usePinned('included', 5, ...) — now a user-driven carousel.)

  // Apply section — Waabi pattern:
  //   Items overlap by 50vh, each occupying 50vh of scroll after the first.
  //   Active step = floor(progress * N), where progress tracks scroll
  //   from top-of-body to (bottom-of-body - viewport).
  //   Rail line height = viewport-centre − body-top, clamped to [0, body-height − 50vh].
  React.useEffect(() => {
    const section = document.getElementById('apply');
    if (!section) return;
    const body = section.querySelector('.v2-apply__body');
    if (!body) return;

    const onScroll = () => {
      const items = section.querySelectorAll('.v2-apply__item');
      if (!items.length) return;
      const vh = window.innerHeight;
      const r = body.getBoundingClientRect();
      const start = r.top;           // distance from viewport top to body top
      const travel = r.height - vh;  // scroll distance within body
      const done = Math.max(0, Math.min(travel, -start));
      const p = travel > 0 ? done / travel : 0;

      section.style.setProperty('--progress', String(p));
      setApplyProgress(p);

      // Rail line reaches from body-top down to the dot at viewport centre.
      // Capped at the last item's centre so the rail stops growing at the
      // release point — after that, the whole rail scrolls with the content.
      const mid = vh * 0.5;
      const items0 = items;
      const lastCentre = items0.length
        ? (items0[items0.length - 1].getBoundingClientRect().top
           + items0[items0.length - 1].getBoundingClientRect().height / 2
           - r.top)
        : r.height;
      const lineH = Math.max(0, Math.min(lastCentre, mid - start));
      section.style.setProperty('--rail-line-h', `${lineH}px`);

      // Step: advance to item `i` when the incoming item's top rises past
      // 75% of viewport height — earlier than waiting for the centre crossover.
      let step = 0;
      const trigger = mid + vh * 0.2; // 20vh below viewport centre
      items.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const centre = r.top + r.height / 2;
        if (centre < trigger) step = i;
      });
      setApplyStep(step);

      // Note: the sticky image + counter release NATIVELY — once the body's
      // bottom edge rises above where they're stuck, CSS sticky stops pinning
      // and they scroll up with the content. No JS release logic needed.

      // Continuous opacity — each item's text fades in as its centre approaches
      // the viewport centre and fades out as it leaves. Full opacity when centred;
      // 0 opacity when the item's centre is one viewport-height away.
      const fadeRange = vh * 0.5; // 50vh either side
      items.forEach((el) => {
        const ir = el.getBoundingClientRect();
        const centre = ir.top + ir.height / 2;
        const dist = Math.abs(centre - mid);
        let op = 1 - dist / fadeRange;
        op = Math.max(0.1, Math.min(1, op));
        el.style.setProperty('--item-opacity', op.toFixed(3));
      });

      // Counter fade — mirrors the LAST item's fade-out so the counter
      // dissolves as the final step slides past viewport centre.
      const last = items[items.length - 1];
      if (last) {
        const lr = last.getBoundingClientRect();
        const lastCentreY = lr.top + lr.height / 2;
        // Once the last item's centre has passed above viewport centre,
        // fade out over the same 50vh range used for text.
        const past = Math.max(0, mid - lastCentreY);
        let cOp = 1 - past / fadeRange;
        cOp = Math.max(0, Math.min(1, cOp));
        section.style.setProperty('--counter-opacity', cOp.toFixed(3));
        section.style.setProperty('--counter-shift', `${-past}px`);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const faqs = [
    { q: "Who is the programme for?", a: "UK-based late-stage PhDs, post-docs and early principal investigators with a therapeutic concept focused on cancer. You don't need to be Cancer Research UK funded." },
    { q: "What stage should my research be at?", a: "Early therapeutic concepts — we're looking for validated science with a clear rationale, not a fully clinic-ready asset. Modality agnostic: small molecules, biologics, cell and gene therapies, radiopharmaceuticals." },
    { q: "Do I have to be a Cancer Research UK grant holder?", a: "No. Applications are open to any UK-based eligible team. Our pilot is limited to UK applicants; later cohorts will extend internationally." },
    { q: "Is the £40k grant equity-taking?", a: "No. It is a non-dilutive grant awarded to each successful team to support the training period and the progression of your research project." },
    { q: "What happens after Demo Day?", a: "Teams are considered for our Seed Fund, portfolio, or routes to partnership, licensing and external investment. Not every team has to form a start-up — we help find the right path for the project." },
    { q: "What if my application isn't selected?", a: "You'll receive third-party due diligence and transparent feedback — and you're welcome to re-apply for future cohorts." },
  ];

  return (
    <div className={`site v2 tone-${tone}`} data-screen-label="V2 02 Programme">
      <Header page="programme" onNav={onNav} />

      {/* ── HERO ── one of four variants ── */}
      {(heroStyle === 'classic' || heroStyle === 'fullbleed') && (
        <section className="v2h-poster">
          <div className="v2h-poster__grid">
            <div className="v2h-poster__body">
              <div className="v2h-poster__kicker">
                <span className="dot" /> Programme details
              </div>
              <h1 className="v2h-poster__title">Apply to be part of our pilot programme.</h1>
              <p className="v2h-poster__sub">
                A four-month programme for therapeutic founders — pre-accelerator, acceleration, Demo Day and alumni conference. Tailored mentorship, capital and technical support, end-to-end.
              </p>
              <div className="v2h-poster__actions">
                <button className="btn btn--on-dark">Apply now</button>
                <a href="#apply" className="btn btn--ghost-on-dark">See how to apply</a>
              </div>
            </div>
            <div className="v2h-poster__media">
              <div className="v2h-poster__photo" style={{ backgroundImage: "url('assets/programme-hero.jpg')" }} />
            </div>
          </div>
        </section>
      )}
      {heroStyle === 'split' && (
        <section className="v2h-split">
          <div className="v2h-split__body">
            <div className="v2h-split__kicker">Programme details</div>
            <h1 className="v2h-split__title">A four-month programme built for therapeutic founders.</h1>
            <p className="v2h-split__sub">Pre-accelerator, acceleration, Demo Day and alumni conference — tailored mentorship and technical support end-to-end.</p>
            <dl className="v2h-split__meta">
              <div><dt>Cohort size</dt><dd>3–5 teams</dd></div>
              <div><dt>Duration</dt><dd>Four months</dd></div>
              <div><dt>Starts</dt><dd>September 2026</dd></div>
            </dl>
          </div>
          <div className="v2h-split__img" style={{ backgroundImage: "url('assets/hero.jpg')" }} />
        </section>
      )}
      {heroStyle === 'type' && (
        <section className="v2h-type">
          <div className="v2h-type__kicker">Programme details · Pilot cohort 2026</div>
          <h1 className="v2h-type__title">A four-month programme <em>for therapeutic founders.</em></h1>
          <dl className="v2h-type__row">
            <div className="col"><dt>Structure</dt><dd>Pre-accelerator, acceleration, Demo Day, alumni.</dd></div>
            <div className="col"><dt>Cohort</dt><dd>3–5 UK-based therapeutic teams.</dd></div>
            <div className="col"><dt>Delivery</dt><dd>Monthly in-person days in London + virtual.</dd></div>
            <div className="col" style={{ textAlign: 'right' }}>
              <button className="btn">Apply now</button>
            </div>
          </dl>
        </section>
      )}
      {heroStyle === 'offset' && (
        <section className="v2h-offset">
          <div className="v2h-offset__bg" style={{ backgroundImage: "url('assets/hero.jpg')" }} />
          <div className="v2h-offset__card">
            <div className="v2h-offset__kicker">Programme details</div>
            <h1 className="v2h-offset__title">A four-month programme built for therapeutic founders.</h1>
            <p className="v2h-offset__sub">Pilot cohort of 3–5 UK teams. Starts September 2026. £40k non-dilutive per team. Apply by 30 June 2026.</p>
          </div>
        </section>
      )}

      {/* ── CRUMBS (restored from V1) ── */}
      <nav className="crumbs">
        <a href="#">Cancer Research Horizons</a>
        <span className="sep"><CrumbChevron /></span>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav && onNav('landing'); }}>Therapeutics Accelerator</a>
        <span className="sep"><CrumbChevron /></span>
        <span className="current">Programme details</span>
      </nav>

      {/* ── Editorial About strip ── */}
      <section className="v2-about" id="about">
        <h2 className="v2-about__lead">About the programme</h2>
        <div className="v2-about__body">
          <p>Our Therapeutics Accelerator is a founder-centric, translational programme aiming to develop high-potential scientific innovators into compelling leaders.</p>
          <p>You'll finish the programme with the confidence and communication of a founder, an investor-ready package including a bespoke commercialisation roadmap and an active peer and mentor support network.</p>
        </div>
      </section>

      {/* ── What's included — simple 4-card grid ── */}
      <section className="v2-inc" id="included">
        <div className="v2-inc__head">
          <h2 className="v2-inc__title">Four phases over four&nbsp;months.</h2>
          <p className="v2-inc__lede">The pilot supports three to five teams from September 2026 — a structured journey from bootcamp through Demo Day and into the alumni network.</p>
        </div>
        <div className="v2-inc__grid">
          {[
            { n: '01', h: 'Pre-accelerator',   p: "Three-day bootcamp on entrepreneurial and business training, followed by market exploration.",                  meta: 'Month 1 · 3 days in London' },
            { n: '02', h: 'Acceleration',      p: "Structured programme with tailored mentorship, technical support and monthly in-person days in London.",         meta: 'Months 2–3 · Monthly, in person' },
            { n: '03', h: 'Demo Day',          p: "Showcase your start-up to investors and collaborators — compete for two Prize Awards of £250k.",                   meta: 'Month 4 · Showcase day' },
            { n: '04', h: 'Yearly conference', p: "Annual conference uniting start-ups and founders across our accelerators to foster ongoing collaboration.",         meta: 'Annual · Alumni network' },
          ].map((s) => (
            <article className="v2-inc__card" key={s.n}>
              <div className="v2-inc__num">{s.n}</div>
              <h4 className="v2-inc__ch">{s.h}</h4>
              <p className="v2-inc__cp">{s.p}</p>
              <p className="v2-inc__meta">{s.meta}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── REWORKED: Eligibility as a 4-card grid ── */}
      <section className="v2-elig" id="eligibility">
        <div className="v2-elig__head">
          <h2 className="v2-elig__title">Who we're looking for</h2>
          <p className="v2-elig__lede">Our pilot cohort is focused on UK-based teams ready to explore company creation and other commercialisation opportunities. Later stages of the Therapeutics Accelerator will be available internationally.</p>
        </div>
        <div className="v2-elig__grid">
          <div className="v2-elig__card">
            <div className="v2-elig__check">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </div>
            <h4>Researchers &amp; PIs</h4>
            <p>Late-stage PhD students, post-docs, and early principal investigators building in oncology.</p>
          </div>
          <div className="v2-elig__card">
            <div className="v2-elig__check">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 21V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M3 21h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="14" cy="13" r="1" fill="currentColor"/></svg>
            </div>
            <h4>Open funding base</h4>
            <p>You do <em>not</em> have to be Cancer Research UK funded to apply — our doors are open to all qualifying UK teams.</p>
          </div>
          <div className="v2-elig__card">
            <div className="v2-elig__check">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/></svg>
            </div>
            <h4>Early concepts</h4>
            <p>Validated science with clear therapeutic rationale — not fully clinic-ready assets.</p>
          </div>
          <div className="v2-elig__card">
            <div className="v2-elig__check">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="1.8"/><rect x="14" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.8"/><path d="M7 14l3 6h-6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M14 14h6v6h-6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>
            </div>
            <h4>Modality agnostic</h4>
            <p>Small molecules, biologics, cell &amp; gene therapies, radiopharmaceuticals — as long as the focus is cancer.</p>
          </div>
          <a href="#apply" className="v2-elig__card v2-elig__card--cta">
            <div className="v2-elig__check">
              <svg width="22" height="22" viewBox="0 0 18 18" fill="none"><path d="M4 14 L14 4 M14 4 H6 M14 4 V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h4>Ready to apply?</h4>
            <p>Start your application in under five minutes.</p>
          </a>
        </div>
      </section>

      {/* ── How to apply — Waabi-style: centred head, scrolling text L, sticky image R, growing centre line ── */}
      {(() => {
        const steps = [
          { h: 'Application opens', short: 'Apply', p: "Submit your application through our online platform. Non-confidential slide deck, short form and a 7–10 min video pitch.", date: "XX March 2026" },
          { h: 'Application window', short: 'Prepare', p: "You'll have six weeks to prepare and submit — with optional webinars and office hours to help you shape your application.", date: "XX April 2026" },
          { h: 'Two-stage triage', short: 'Triage', p: "Applications go through internal review followed by external due diligence by our External Advisory Group.", date: "XX May 2026" },
          { h: 'Cohort selected', short: 'Selected', p: "Successful teams receive £40k to support their project as they participate in the four-month programme.", date: "XX June 2026" },
          { h: 'Demo Day', short: 'Demo Day', p: "Teams pitch at Demo Day — showcase your start-up to investors and collaborators, and compete for two Prize Awards of £250k.", date: "XX Dec 2026" },
        ];
        const imgs = [
          'assets/apply-01.jpg',
          'assets/apply-02.jpg',
          'assets/apply-03.png',
          'assets/apply-04.jpg',
          'assets/apply-05.jpg',
        ];
        const total = steps.length;
        return (
          <section className="v2-apply" id="apply">
            {/* Centred head */}
            <header className="v2-apply__head">
              <p className="v2-apply__label">How to apply</p>
              <h2 className="v2-apply__title">Five steps to Demo&nbsp;Day.</h2>
              <p className="v2-apply__lede">From first application through final pitch. Applications not selected still receive third-party due diligence and feedback — and you're welcome to re-apply.</p>
            </header>

            {/* Scroll region: 2 equal columns (text · image) with rail centred between */}
            <div className="v2-apply__body">
              {/* Centre rail — line from body-top to dot (pinned at viewport centre) */}
              <div className="v2-apply__rail" aria-hidden="true">
                <div className="v2-apply__railline" />
                <div className="v2-apply__raildot" />
              </div>

              {/* Sticky step counter "NN / 05" — pinned at left edge, viewport-centre */}
              <div className="v2-apply__counter" aria-hidden="true">
                <div className="v2-apply__counterbox">
                  <span className="v2-apply__counternum">
                    <span
                      className="v2-apply__counterstrip"
                      style={{ transform: `translateY(-${applyStep * 48}px)` }}
                    >
                      {steps.map((_, i) => (
                        <span key={i}>{String(i + 1).padStart(2, '0')}</span>
                      ))}
                    </span>
                  </span>
                  <span className="v2-apply__countersep">/{String(total).padStart(2, '0')}</span>
                </div>
              </div>

              {/* Column 1 — text items with 50vh overlap, right-aligned */}
              <ol className="v2-apply__list">
                {steps.map((s, i) => (
                  <li
                    key={i}
                    className={`v2-apply__item ${i === applyStep ? 'is-active' : ''}`}
                  >
                    <div className="v2-apply__itembox">
                      <div className="v2-apply__date">{s.date}</div>
                      <h3 className="v2-apply__h">{s.h}</h3>
                      <p className="v2-apply__p">{s.p}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Column 2 — sticky image that crossfades */}
              <div className="v2-apply__sticky">
                <div className="v2-apply__media" aria-hidden="true">
                  {imgs.map((src, i) => (
                    <div
                      key={i}
                      className={`v2-apply__pane ${i === applyStep ? 'is-active' : ''}`}
                      style={{ '--pane-img': `url("${src}")` }}
                    >
                      <span className="v2-apply__mlabel">Step {String(i + 1).padStart(2, '0')}</span>
                      <h4 className="v2-apply__mtitle">{steps[i].short || steps[i].h}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* ── REWORKED: Curriculum pillar rows ── */}
      <section className="v2-curr2" id="curriculum">
        <div className="v2-curr2__head">
          <h2>Curriculum</h2>
          <p>A virtual curriculum, in-person days, regular office hours and mentor clinics — across four pillars essential to progress therapeutic concepts to investible propositions.</p>
        </div>

        <div className="v2-pillar">
          <div className="v2-pillar__num">01</div>
          <div className="v2-pillar__name">Scientific excellence</div>
          <div className="v2-pillar__out">
            <span className="v2-pillar__k">Learning outcomes</span>
            <ul>
              <li>Articulate the therapeutic rationale — "why this target"</li>
              <li>Design critical experiments for preclinical validation</li>
              <li>Map disease biology to indications and patients</li>
            </ul>
          </div>
          <div className="v2-pillar__mod">
            <span className="v2-pillar__k">Core modules</span>
            <ul>
              <li>Disease biology &amp; target validation</li>
              <li>Critical experiments for investability</li>
              <li>Translation strategy &amp; first-in-human mapping</li>
            </ul>
          </div>
        </div>

        <div className="v2-pillar">
          <div className="v2-pillar__num">02</div>
          <div className="v2-pillar__name">Commercial strategy</div>
          <div className="v2-pillar__out">
            <span className="v2-pillar__k">Learning outcomes</span>
            <ul>
              <li>Define market, competition and unmet need</li>
              <li>Build the investor-ready story</li>
              <li>Position for partnership, licensing or start-up</li>
            </ul>
          </div>
          <div className="v2-pillar__mod">
            <span className="v2-pillar__k">Core modules</span>
            <ul>
              <li>Market shaping &amp; competitive landscape</li>
              <li>Commercialisation pathways</li>
              <li>Pitching &amp; narrative</li>
            </ul>
          </div>
        </div>

        <div className="v2-pillar">
          <div className="v2-pillar__num">03</div>
          <div className="v2-pillar__name">Regulatory &amp; IP</div>
          <div className="v2-pillar__out">
            <span className="v2-pillar__k">Learning outcomes</span>
            <ul>
              <li>Plan an IND-enabling programme</li>
              <li>Build a defensible IP strategy</li>
              <li>Understand global regulatory expectations</li>
            </ul>
          </div>
          <div className="v2-pillar__mod">
            <span className="v2-pillar__k">Core modules</span>
            <ul>
              <li>Preclinical &amp; regulatory strategy</li>
              <li>IP portfolio &amp; freedom to operate</li>
              <li>CMC fundamentals</li>
            </ul>
          </div>
        </div>

        <div className="v2-pillar">
          <div className="v2-pillar__num">04</div>
          <div className="v2-pillar__name">Founder &amp; team</div>
          <div className="v2-pillar__out">
            <span className="v2-pillar__k">Learning outcomes</span>
            <ul>
              <li>Develop founder capabilities and resilience</li>
              <li>Build and lead translational teams</li>
              <li>Communicate with clarity to investors and partners</li>
            </ul>
          </div>
          <div className="v2-pillar__mod">
            <span className="v2-pillar__k">Core modules</span>
            <ul>
              <li>Founder mindset &amp; leadership</li>
              <li>Team-building &amp; governance</li>
              <li>Mentor clinics &amp; 1:1 coaching</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── REWORKED: FAQs inline accordion (CRH-style: navy chevron disc) ── */}
      <section className="v2-faq" id="faqs">
        <div className="v2-faq__head">
          <h2>Frequently asked questions</h2>
        </div>
        <div className="v2-faq__list">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={i} className={`v2-faq__row ${open ? 'is-open' : ''}`}>
                <button
                  className="v2-faq__q"
                  aria-expanded={open}
                  onClick={() => setOpenFaq(open ? -1 : i)}
                >
                  <span className="v2-faq__disc" aria-hidden="true">
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                      <path d="M1 1l5 5 5-5" stroke="#fff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="v2-faq__sr">{open ? 'Close' : 'Open'}</span>
                  <span className="v2-faq__qtext">{f.q}</span>
                </button>
                <div className="v2-faq__a"><p>{f.a}</p></div>
              </div>
            );
          })}
        </div>
        <div className="v2-faq__foot">
          <p>Can't find the answer you're looking for?</p>
          <button className="btn">Contact the team</button>
        </div>
      </section>

      {/* ── REWORKED: navy CTA band ── */}
      <section className="v2-cta">
        <h2 className="v2-cta__title">Ready to build? Apply by 30 June 2026.</h2>
        <div className="v2-cta__body">
          <p>We're here with support and advice for researchers at all stages of the translational journey.</p>
          <button className="btn">Start your application</button>
        </div>
      </section>

      <Teasers />
      <Footer />
    </div>
  );
};

window.ProgrammePageV2 = ProgrammePageV2;
