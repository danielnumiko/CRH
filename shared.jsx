// Shared components for CRUK Accelerator pages
const { useState, useEffect, useRef } = React;

// Breadcrumb chevron (thin solid triangle) — matches Figma Path-3 exactly
const CrumbChevron = () => (
  <svg width="4" height="8" viewBox="0 0 4 8.007" fill="none" aria-hidden="true">
    <path d="M 0 0 L 0 8.007 L 4 4.007 L 0 0 Z" fill="currentColor"/>
  </svg>
);

// ——— Icons ———
const ChevronIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={{ color }}>
    <path d="M 10.675 10 L 7.6 13.075 L 9 14.5 L 13.5 10 L 9 5.5 L 7.6 6.925 L 10.675 10 Z M 10 20 C 8.617 20 7.317 19.738 6.1 19.212 C 4.883 18.688 3.825 17.975 2.925 17.075 C 2.025 16.175 1.313 15.117 0.788 13.9 C 0.263 12.683 0 11.383 0 10 C 0 8.617 0.263 7.317 0.788 6.1 C 1.313 4.883 2.025 3.825 2.925 2.925 C 3.825 2.025 4.883 1.313 6.1 0.788 C 7.317 0.263 8.617 0 10 0 C 11.383 0 12.683 0.263 13.9 0.788 C 15.117 1.313 16.175 2.025 17.075 2.925 C 17.975 3.825 18.688 4.883 19.212 6.1 C 19.738 7.317 20 8.617 20 10 C 20 11.383 19.738 12.683 19.212 13.9 C 18.688 15.117 17.975 16.175 17.075 17.075 C 16.175 17.975 15.117 18.688 13.9 19.212 C 12.683 19.738 11.383 20 10 20 Z M 10 18 C 12.233 18 14.125 17.225 15.675 15.675 C 17.225 14.125 18 12.233 18 10 C 18 7.767 17.225 5.875 15.675 4.325 C 14.125 2.775 12.233 2 10 2 C 7.767 2 5.875 2.775 4.325 4.325 C 2.775 5.875 2 7.767 2 10 C 2 12.233 2.775 14.125 4.325 15.675 C 5.875 17.225 7.767 18 10 18 Z" fill="currentColor"/>
  </svg>
);

const SearchIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    <path d="M 16.6 18 L 10.3 11.7 C 9.8 12.1 9.225 12.417 8.575 12.65 C 7.925 12.883 7.233 13 6.5 13 C 4.683 13 3.146 12.371 1.888 11.113 C 0.629 9.854 0 8.317 0 6.5 C 0 4.683 0.629 3.146 1.888 1.888 C 3.146 0.629 4.683 0 6.5 0 C 8.317 0 9.854 0.629 11.113 1.888 C 12.371 3.146 13 4.683 13 6.5 C 13 7.233 12.883 7.925 12.65 8.575 C 12.417 9.225 12.1 9.8 11.7 10.3 L 18 16.6 L 16.6 18 Z M 6.5 11 C 7.75 11 8.813 10.563 9.688 9.688 C 10.563 8.813 11 7.75 11 6.5 C 11 5.25 10.563 4.188 9.688 3.313 C 8.813 2.438 7.75 2 6.5 2 C 5.25 2 4.188 2.438 3.313 3.313 C 2.438 4.188 2 5.25 2 6.5 C 2 7.75 2.438 8.813 3.313 9.688 C 4.188 10.563 5.25 11 6.5 11 Z" fill="currentColor"/>
  </svg>
);

// Drug capsule — outlined style to match other stat icons
const DrugsIcon = ({ size = 60 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Capsule 1 — rotated -30°, horizontal pill */}
    <g transform="rotate(-30 22 30)">
      <rect x="6" y="22" width="32" height="16" rx="8"/>
      <line x1="22" y1="22" x2="22" y2="38"/>
    </g>
    {/* Capsule 2 — rotated 30°, crossing over */}
    <g transform="rotate(30 38 30)">
      <rect x="22" y="22" width="32" height="16" rx="8"/>
      <line x1="38" y1="22" x2="38" y2="38"/>
    </g>
  </svg>
);

const NetworkIcon = ({ size = 60 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="30" cy="12" r="6"/>
    <circle cx="12" cy="46" r="6"/>
    <circle cx="48" cy="46" r="6"/>
    <circle cx="30" cy="34" r="6"/>
    <line x1="30" y1="18" x2="30" y2="28"/>
    <line x1="25" y1="38" x2="16" y2="42"/>
    <line x1="35" y1="38" x2="44" y2="42"/>
    <line x1="18" y1="46" x2="42" y2="46"/>
  </svg>
);

const HandshakeIcon = ({ size = 60 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 8 24 L 20 18 L 30 24 L 40 18 L 52 24"/>
    <path d="M 20 24 L 20 44 L 40 44 L 40 24"/>
    <path d="M 24 34 L 30 28 L 36 34"/>
    <path d="M 30 28 L 30 40"/>
  </svg>
);

const SeedIcon = ({ size = 60 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 30 52 L 30 28"/>
    <path d="M 30 28 C 22 28 16 22 16 14 C 24 14 30 20 30 28 Z"/>
    <path d="M 30 32 C 38 32 44 26 44 18 C 36 18 30 24 30 32 Z"/>
    <ellipse cx="30" cy="52" rx="10" ry="2"/>
  </svg>
);

// ——— Header ———
const Header = ({ page, onNav }) => (
  <header className="header">
    <a href="#" className="header__logo" onClick={(e) => { e.preventDefault(); onNav && onNav('landing'); }}>
      <img src="assets/logo.png" alt="Cancer Research Horizons" />
    </a>
    <nav className="header__nav">
      <a href="#">About</a>
      <a href="#">Researchers</a>
      <a
        href="#"
        className={page === 'landing' || page === 'programme' ? 'is-active' : ''}
        onClick={(e) => { e.preventDefault(); onNav && onNav('landing'); }}
      >Partnering</a>
      <a href="#">Investors</a>
      <a href="#">Our science</a>
      <a href="#">Portfolio</a>
      <a href="#">News &amp; Events</a>
      <a href="#">Contact</a>
      <span className="header__search"><SearchIcon size={20} /></span>
    </nav>
  </header>
);

// ——— Sub nav (sticky) ———
const SubNav = ({ onNav, page, showLabel }) => {
  const [active, setActive] = useState(page === 'programme' ? 'programme' : 'overview');
  useEffect(() => {
    setActive(page === 'programme' ? 'programme' : 'overview');
  }, [page]);
  // Subnav only shows CHILD pages — not the current/parent page itself.
  // On landing (the overview), we show the children: Programme details + FAQs.
  // On programme, we also show Programme details (as active) + FAQs.
  return (
    <div className="subnav">
      {showLabel && <span className="subnav__label">In this section</span>}
      <a
        className={page === 'programme' ? 'is-active' : ''}
        href="#"
        onClick={(e) => { e.preventDefault(); onNav && onNav('programme'); }}
      >Programme details</a>
      <a href="#" onClick={(e) => e.preventDefault()}>FAQs</a>
    </div>
  );
};

// ——— Footer ———
const Footer = () => (
  <footer className="footer">
    <div className="footer__top">
      <h3>Connect with us</h3>
      <div className="footer__contact">
        <a href="#" className="footer__newsletter">
          Subscribe to our newsletter
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ marginLeft: 6 }} aria-hidden="true">
            <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <div className="footer__social">
          <a href="#" aria-label="X">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div className="footer__divider" />
    <div className="footer__cols">
      <div className="footer__col">
        <h4>Key links</h4>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Researchers</a></li>
          <li><a href="#">Partners</a></li>
          <li><a href="#">Investors</a></li>
          <li><a href="#">Translational science</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">News and events</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4>Address</h4>
        <p>Cancer Research Horizons<br/>2 Redman Place<br/>London<br/>E20 1JQ<br/>UK</p>
        <a href="#" className="footer__contactbtn">Contact us</a>
      </div>
      <div className="footer__col" />
      <div className="footer__col footer__col--tag">
        <div className="footer__tag">
          FURTHER<br/>FASTER<br/>TOGETHER
          <span className="footer__tag-sub">We are beating cancer</span>
        </div>
      </div>
    </div>
    <div className="footer__divider" />
    <div className="footer__legal">
      <a href="#">Terms and conditions</a><span className="sep">|</span>
      <a href="#">Privacy policy</a><span className="sep">|</span>
      <a href="#">Modern slavery statement</a><span className="sep">|</span>
      <a href="#">Section 172</a><span className="sep">|</span>
      <a href="#">Legal status</a><span className="sep">|</span>
      <a href="#">Cookie policy</a><span className="sep">|</span>
      <a href="#">Full disclosure of interactions with industry</a>
    </div>
  </footer>
);

// ——— Shared bottom CTA + Teasers ———
const CTAImpact = () => (
  <section className="cta" id="cta-impact">
    <h2 className="cta__title">Let us help you make an impact</h2>
    <div className="cta__body">
      <p>We're here with support and advice for researchers at all stages of the translational journey.</p>
      <div><button className="btn">Get in touch today</button></div>
    </div>
  </section>
);

const Teasers = () => (
  <section className="teasers">
    <h2>Additional support and resources</h2>
    <div className="teasers__grid">
      <div className="teaser">
        <div className="teaser__img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80')" }} />
        <h3 className="teaser__title">Researchers</h3>
        <p className="teaser__body">We support innovative research that can benefit society. Let us help you turn your ideas into meaningful progress for patients.</p>
      </div>
      <div className="teaser">
        <div className="teaser__img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=80')" }} />
        <h3 className="teaser__title">Our start-up portfolio</h3>
        <p className="teaser__body">With a growing portfolio of start-ups, we're bringing together the community to spark the next breakthrough in cancer research.</p>
      </div>
      <div className="teaser">
        <div className="teaser__img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80')" }} />
        <h3 className="teaser__title">Events</h3>
        <p className="teaser__body">Through our network, you can access a range of scientific conferences, networking and other events aimed at researchers, partners and investors.</p>
      </div>
    </div>
  </section>
);

Object.assign(window, {
  ChevronIcon, CrumbChevron, SearchIcon, DrugsIcon, NetworkIcon, HandshakeIcon, SeedIcon,
  Header, SubNav, Footer, CTAImpact, Teasers,
});
