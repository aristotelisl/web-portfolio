import { contact } from '../data/cv';
import type { Theme } from '../hooks/useTheme';

const nav = [
  { n: 1, label: 'Experience', href: '#experience' },
  { n: 2, label: 'Education', href: '#education' },
  { n: 3, label: 'Awards', href: '#awards' },
  { n: 4, label: 'Contact', href: '#contact' },
];

interface Props {
  theme: Theme;
  onToggleTheme: () => void;
}

function Header({ theme, onToggleTheme }: Props) {
  return (
    <header className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4 font-mono text-[13px]">
        <nav aria-label="Sections" className="flex flex-wrap gap-x-6 gap-y-1">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="no-underline hover:text-accent">
              <span className="text-muted">{item.n}</span> {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          className="shrink-0 border border-ink px-2.5 py-1 hover:bg-ink hover:text-paper"
        >
          {theme === 'dark' ? '○ Light' : '● Dark'}
        </button>
      </div>

      <div className="h-1.5 bg-ink" />

      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="flex flex-col gap-2.5">
          <span className="font-mono text-[12px] text-muted sm:text-[13px]">
            CURRICULUM VITAE - INTERACTIVE EDITION · {new Date().getFullYear()}
          </span>
          <h1 className="m-0 font-condensed text-[56px] font-bold leading-[0.88] tracking-[-0.03em] sm:text-[88px] xl:text-[112px]">
            Aristotelis Loucaides
          </h1>
          <p className="m-0 text-xl font-medium sm:text-[26px]">
            Software engineer - agentic AI, LLM pipelines and the web.
          </p>
        </div>

        <div className="flex flex-col gap-1.5 font-mono text-[14px] lg:items-end lg:text-right">
          <a href={`mailto:${contact.email}`} className="no-underline hover:text-accent">
            {contact.email}
          </a>
          <a
            href={`https://linkedin.com/in/${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-accent"
          >
            linkedin.com/in/{contact.linkedin} ↗
          </a>
          <a
            href={`https://github.com/${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-accent"
          >
            github.com/{contact.github} ↗
          </a>
          <span className="text-muted">Right to work: UK (Pre-Settled Status)</span>
          <div className="mt-2.5 flex gap-2 lg:justify-end">
            <a
              href={contact.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-ink px-3.5 py-2 font-semibold no-underline hover:bg-ink hover:text-paper"
            >
              View CV ↗
            </a>
            <a
              href={contact.cv}
              download
              className="border-2 border-ink bg-ink px-3.5 py-2 font-semibold text-paper no-underline hover:border-accent hover:bg-accent hover:text-on-accent"
            >
              Download PDF ↓
            </a>
          </div>
        </div>
      </div>

      <div className="h-0.5 bg-ink" />
    </header>
  );
}

export default Header;
