// CRH Design System — Styles reference page
// Visualises every token defined in tokens.css

function StylesPage() {
  return (
    <article className="styles-doc">
      <header className="styles-hero">
        <div className="container">
          <div className="styles-hero__kicker">Reference</div>
          <h1 className="styles-hero__title">Design tokens</h1>
          <p className="styles-hero__lede">
            The canonical token set powering every CRH page. Type, colour, spacing and layout values
            referenced here in <code>tokens.css</code> are consumed throughout the prototype — change a
            value once and every component follows.
          </p>
        </div>
      </header>

      {/* ── Fonts ──────────────────────────────────── */}
      <section className="styles-section">
        <div className="container">
          <h2 className="styles-h2">Fonts</h2>
          <div className="styles-grid">
            <div className="styles-card">
              <div className="styles-card__label">Serif — H1, H2, hero display</div>
              <div className="styles-card__sample" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-h2)', fontWeight: 500, lineHeight: 1.05 }}>Progress</div>
              <dl className="styles-meta">
                <dt>Family</dt><dd>Progress</dd>
                <dt>Weights</dt><dd>300 light · 400 regular · 500 medium · 600 semibold</dd>
                <dt>Usage</dt><dd>Hero titles (H1), section headings (H2, H3), large editorial</dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Sans — body, UI, H3–H5</div>
              <div className="styles-card__sample" style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-h2)', fontWeight: 500 }}>Poppins</div>
              <dl className="styles-meta">
                <dt>Family</dt><dd>Poppins</dd>
                <dt>Weights</dt><dd>300 light · 400 regular · 500 medium · 600 semibold · 700 bold</dd>
                <dt>Usage</dt><dd>Card titles (H4–H5), body copy, kickers, UI</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── Heading scale ──────────────────────────── */}
      <section className="styles-section styles-section--paper">
        <div className="container">
          <h2 className="styles-h2">Heading scale</h2>
          <p className="styles-intro">Sizes step at 768px and 1280px breakpoints — driving the Mobile / Tablet / Desktop toggle in the prototype shell.</p>

          {[
            { token: 'H1', spec: 'Progress 500', sizes: '36 → 40 → 50 px', lh: 'LH 1.1', sample: 'Therapeutics Accelerator', tag: 'h1' },
            { token: 'H2', spec: 'Progress 500', sizes: '30 → 36 → 40 px', lh: 'LH 1.15', sample: 'Four phases over four months.', tag: 'h2' },
            { token: 'H3', spec: 'Progress 500', sizes: '24 → 28 → 30 px', lh: 'LH 1.25', sample: 'Pre-accelerator', tag: 'h3' },
            { token: 'H4', spec: 'Poppins 500',  sizes: '20 → 22 → 24 px', lh: 'LH 1.3',  sample: 'Card or list-item title', tag: 'h4' },
            { token: 'H5', spec: 'Poppins 500',  sizes: '18 → 20 → 22 px', lh: 'LH 1.4',  sample: 'Compact card / utility title', tag: 'h5' },
          ].map((r) => (
            <div className="scale-row" key={r.token}>
              <div className="scale-row__meta">
                <span className="scale-row__token">{r.token}</span>
                <span className="scale-row__spec">{r.spec}</span>
                <span className="scale-row__sizes">{r.sizes} · {r.lh}</span>
              </div>
              <div className="scale-row__sample">
                {r.tag === 'h1' && <h1 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 500, color: 'var(--navy)', fontSize: 'var(--text-h1)', lineHeight: 'var(--lh-h1)' }}>{r.sample}</h1>}
                {r.tag === 'h2' && <h2 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 500, color: 'var(--navy)', fontSize: 'var(--text-h2)', lineHeight: 'var(--lh-h2)' }}>{r.sample}</h2>}
                {r.tag === 'h3' && <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 500, color: 'var(--navy)', fontSize: 'var(--text-h3)', lineHeight: 'var(--lh-h3)' }}>{r.sample}</h3>}
                {r.tag === 'h4' && <h4 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 500, color: 'var(--navy)', fontSize: 'var(--text-h4)', lineHeight: 'var(--lh-h4)' }}>{r.sample}</h4>}
                {r.tag === 'h5' && <h5 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 500, color: 'var(--navy)', fontSize: 'var(--text-h5)', lineHeight: 'var(--lh-h5)' }}>{r.sample}</h5>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Body & UI ──────────────────────────────── */}
      <section className="styles-section">
        <div className="container">
          <h2 className="styles-h2">Body & UI</h2>
          <div className="styles-grid">
            <div className="styles-card">
              <div className="styles-card__label">Body — long-form</div>
              <p style={{ fontSize: 'var(--text-body-lg)', lineHeight: 'var(--lh-body-lg)', margin: 0, color: 'var(--ink-2)' }}>
                A four-month programme for therapeutic founders — pre-accelerator, acceleration, Demo Day and alumni conference.
              </p>
              <dl className="styles-meta">
                <dt>Token</dt><dd><code>--text-body-lg</code></dd>
                <dt>Size</dt><dd>17 px</dd>
                <dt>Line height</dt><dd>1.65</dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Body — card / default</div>
              <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--lh-body)', margin: 0, color: 'var(--ink-2)' }}>
                Structured programme with tailored mentorship, technical support and monthly in-person days.
              </p>
              <dl className="styles-meta">
                <dt>Token</dt><dd><code>--text-body</code></dd>
                <dt>Size</dt><dd>15 px</dd>
                <dt>Line height</dt><dd>1.55</dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Kicker / eyebrow</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-micro)', fontWeight: 600, letterSpacing: '2.4px', textTransform: 'uppercase', color: 'var(--navy)', borderTop: '2px solid var(--cyan)', paddingTop: 10, width: 'fit-content' }}>
                Programme details
              </div>
              <dl className="styles-meta">
                <dt>Token</dt><dd><code>--text-micro</code></dd>
                <dt>Size</dt><dd>11 px · 600 · uppercase</dd>
                <dt>Treatment</dt><dd>Cyan rule above</dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Date / meta</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-meta)', fontWeight: 600, letterSpacing: '2.4px', textTransform: 'uppercase', color: 'var(--navy)' }}>XX MARCH 2026</div>
              <dl className="styles-meta">
                <dt>Token</dt><dd><code>--text-meta</code></dd>
                <dt>Size</dt><dd>13 px · 600</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── Colour ─────────────────────────────────── */}
      <section className="styles-section styles-section--paper">
        <div className="container">
          <h2 className="styles-h2">Colour — Global</h2>
          <p className="styles-intro">Dominant brand neutrals: dark blues, white and greys. These appear on every page across every theme treatment.</p>
          <div className="swatches">
            {[
              { name: 'Ink',          token: '--ink',       hex: '#0E0F24' },
              { name: 'Ink 2 (body)', token: '--ink-2',     hex: '#000026' },
              { name: 'Navy',         token: '--navy',      hex: '#00007E' },
              { name: 'Off-white',    token: '--off',       hex: '#FAFAFA' },
              { name: 'White',        token: '--white',     hex: '#FFFFFF', border: true },
              { name: 'Grey bg',      token: '--grey-bg',   hex: '#E7E7E9' },
              { name: 'Grey text',    token: '--grey-txt',  hex: '#CBCBDF' },
              { name: 'Grey mid',     token: '--grey-mid',  hex: '#4D4D67' },
              { name: 'Grey dark',    token: '--grey-dark', hex: '#3E3F50' },
            ].map((c) => (
              <div className="swatch" key={c.token}>
                <div className="swatch__chip" style={{ background: c.hex, border: c.border ? '1px solid var(--rule)' : undefined }} />
                <div className="swatch__label">
                  <span className="swatch__name">{c.name}</span>
                  <span className="swatch__hex">{c.hex}</span>
                  <code className="swatch__token">{c.token}</code>
                </div>
              </div>
            ))}
          </div>

          <h2 className="styles-h2" style={{ marginTop: 'var(--space-14)' }}>Colour — Theme</h2>
          <p className="styles-intro">Accent palette applied per section or theme treatment. Use <code>--cyan</code> on light surfaces and <code>--cyan-on-dark</code> on dark surfaces.</p>
          <div className="swatches">
            {[
              { name: 'Purple on light', token: '--purple-on-light', hex: '#9333EA' },
              { name: 'Purple on dark',  token: '--purple-on-dark',  hex: '#A78BFA' },
              { name: 'Cyan on light',   token: '--cyan-on-light',   hex: '#0097A7' },
              { name: 'Cyan on dark',    token: '--cyan-on-dark',    hex: '#00D8F0' },
              { name: 'Teal on light',   token: '--teal-on-light',   hex: '#0097A7' },
              { name: 'Teal on dark',    token: '--teal-on-dark',    hex: '#4DD0E1' },
              { name: 'Lime',            token: '--lime',            hex: '#C0E846' },
              { name: 'Lime pale',       token: '--lime-pale',       hex: '#E3EA6C' },
              { name: 'Blue',            token: '--blue',            hex: '#365397' },
              { name: 'Error',           token: '--error',           hex: '#C21212' },
            ].map((c) => (
              <div className="swatch" key={c.token}>
                <div className="swatch__chip" style={{ background: c.hex }} />
                <div className="swatch__label">
                  <span className="swatch__name">{c.name}</span>
                  <span className="swatch__hex">{c.hex}</span>
                  <code className="swatch__token">{c.token}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Spacing ────────────────────────────────── */}
      <section className="styles-section">
        <div className="container">
          <h2 className="styles-h2">Spacing scale</h2>
          <p className="styles-intro">4 px base unit. Use these tokens for padding, margin, and gap — keep vertical rhythm consistent across components.</p>
          <div className="space-grid">
            {[
              { tok: '--space-1', px: 4 },
              { tok: '--space-2', px: 8 },
              { tok: '--space-3', px: 12 },
              { tok: '--space-4', px: 16 },
              { tok: '--space-5', px: 20 },
              { tok: '--space-6', px: 24 },
              { tok: '--space-7', px: 28 },
              { tok: '--space-8', px: 32 },
              { tok: '--space-10', px: 40 },
              { tok: '--space-12', px: 48 },
              { tok: '--space-14', px: 56 },
              { tok: '--space-16', px: 64 },
              { tok: '--space-18', px: 72 },
              { tok: '--space-20', px: 80 },
              { tok: '--space-24', px: 96 },
              { tok: '--space-32', px: 128 },
            ].map((s) => (
              <div className="space-row" key={s.tok}>
                <code className="space-row__token">{s.tok}</code>
                <span className="space-row__bar"><span style={{ width: s.px }} /></span>
                <span className="space-row__px">{s.px} px</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Layout ─────────────────────────────────── */}
      <section className="styles-section styles-section--paper">
        <div className="container">
          <h2 className="styles-h2">Layout & containers</h2>
          <div className="styles-grid">
            <div className="styles-card">
              <div className="styles-card__label">Container & gutters</div>
              <dl className="styles-meta">
                <dt>Max width</dt><dd><code>--container-max</code> · 1440 px</dd>
                <dt>Desktop gutter</dt><dd><code>--gutter-desktop</code> · 50 px</dd>
                <dt>Tablet gutter</dt><dd><code>--gutter-tablet</code> · 32 px</dd>
                <dt>Mobile gutter</dt><dd><code>--gutter-mobile</code> · 20 px</dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Section padding (vertical)</div>
              <dl className="styles-meta">
                <dt>Default desktop</dt><dd><code>--section-py</code> · 96 px</dd>
                <dt>Compact</dt><dd><code>--section-py-compact</code> · 64 px</dd>
                <dt>Generous</dt><dd><code>--section-py-generous</code> · 128 px</dd>
                <dt>Mobile default</dt><dd>64 px</dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Breakpoints</div>
              <dl className="styles-meta">
                <dt>Mobile</dt><dd>&lt; 768 px (frame 375 px)</dd>
                <dt>Tablet</dt><dd>768 – 1279 px (frame 768 px)</dd>
                <dt>Desktop</dt><dd>≥ 1280 px (frame 1440 px)</dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Radius</div>
              <dl className="styles-meta">
                <dt>None</dt><dd><code>--radius-none</code> · 0 — default cards / images</dd>
                <dt>Card</dt><dd><code>--radius-xs</code> · 2 px</dd>
                <dt>Pill</dt><dd><code>--radius-pill</code> · 999 px</dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Rules & borders</div>
              <dl className="styles-meta">
                <dt>Hairline</dt><dd>1 px <code>rgba(14,15,36,0.1)</code></dd>
                <dt>Strong</dt><dd>2 px solid ink</dd>
                <dt>Cyan accent</dt><dd>2 px solid <code>--cyan</code></dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Shadows</div>
              <dl className="styles-meta">
                <dt>Card</dt><dd><code>--shadow-card</code> · subtle 1px lift</dd>
                <dt>Lift</dt><dd><code>--shadow-lift</code> · hover lift</dd>
                <dt>Frame</dt><dd><code>--shadow-frame</code> · prototype frame</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── Components inventory ───────────────────── */}
      <section className="styles-section">
        <div className="container">
          <h2 className="styles-h2">Components inventory</h2>
          <p className="styles-intro">Where each token is consumed across the live pages.</p>
          <div className="styles-grid">
            <div className="styles-card">
              <div className="styles-card__label">Hero — poster</div>
              <dl className="styles-meta">
                <dt>Title</dt><dd>H1 / Progress 500</dd>
                <dt>Lede</dt><dd>Body lg / 18 px</dd>
                <dt>Background</dt><dd><code>--ink</code></dd>
                <dt>Accent</dt><dd><code>--cyan-on-dark</code></dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Section heading</div>
              <dl className="styles-meta">
                <dt>Title</dt><dd>H2 / 40 px desktop</dd>
                <dt>Lede</dt><dd><code>--text-body-lg</code></dd>
                <dt>Spacing below</dt><dd><code>--space-12</code></dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Card grid (eligibility / phases)</div>
              <dl className="styles-meta">
                <dt>Card padding</dt><dd><code>--space-7</code> × <code>--space-6</code></dd>
                <dt>Title</dt><dd>H4 / 22 px</dd>
                <dt>Body</dt><dd><code>--text-body</code></dd>
                <dt>Grid gap</dt><dd><code>--space-6</code></dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">FAQ accordion</div>
              <dl className="styles-meta">
                <dt>Question</dt><dd>26 px / Poppins 600 / navy</dd>
                <dt>Disc</dt><dd>32 px / <code>--navy</code></dd>
                <dt>Answer</dt><dd><code>--text-body</code> / Progress</dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Footer</div>
              <dl className="styles-meta">
                <dt>Background</dt><dd><code>--ink</code></dd>
                <dt>Heading</dt><dd>Progress 500 / 30 px</dd>
                <dt>Link</dt><dd><code>--cyan-on-dark</code> · underline on hover</dd>
              </dl>
            </div>
            <div className="styles-card">
              <div className="styles-card__label">Subnav</div>
              <dl className="styles-meta">
                <dt>Background</dt><dd><code>--ink</code></dd>
                <dt>Label kicker</dt><dd><code>--text-xs</code> / 700 / cyan-on-dark</dd>
                <dt>Link</dt><dd>16 px / 500</dd>
                <dt>Top border</dt><dd>2 px <code>--cyan-on-dark</code></dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

window.StylesPage = StylesPage;
