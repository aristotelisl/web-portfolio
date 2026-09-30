import { contact } from '../data/cv';

const cells = [
  { label: 'EMAIL', value: `${contact.email} →`, href: `mailto:${contact.email}`, primary: true },
  { label: 'GITHUB', value: `${contact.github} ↗`, href: `https://github.com/${contact.github}`, external: true },
  { label: 'LINKEDIN', value: `${contact.linkedin} ↗`, href: `https://linkedin.com/in/${contact.linkedin}`, external: true },
  { label: 'FULL CV', value: 'Download PDF ↓', href: contact.cv, download: true },
];

function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-3.5">
      <section id="contact" aria-labelledby="contact-title" className="flex flex-col gap-3.5">
        <h2 id="contact-title" className="m-0 text-[22px] font-bold">
          <span className="text-muted">4</span>&nbsp; Ordering Information - Contact
        </h2>
        <div className="grid border-y-2 border-ink sm:grid-cols-2 lg:grid-cols-4">
          {cells.map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              {...(c.download ? { download: true } : {})}
              className={`flex min-w-0 flex-col gap-1.5 border-rule px-4 py-5 no-underline max-lg:border-b max-lg:last:border-b-0 ${
                c.primary ? 'bg-accent text-on-accent hover:brightness-95' : 'hover:bg-accent-tint'
              }`}
            >
              <span className="font-mono text-[13px] font-semibold">{c.label}</span>
              <span className={`text-lg break-words sm:text-xl ${c.primary ? 'font-semibold' : ''}`}>{c.value}</span>
            </a>
          ))}
        </div>
      </section>

      <div className="mt-6 flex flex-col gap-2 border-t-2 border-ink pt-4 font-mono text-[12px] text-muted sm:flex-row sm:justify-between sm:text-[13px]">
        <span>© {year} Aristotelis Loucaides · aristotelisloucaides.com</span>
        <span>Greek (native) · English (fluent)</span>
      </div>
      <span className="font-mono text-[12px] text-muted">Specifications subject to change without notice.</span>
    </footer>
  );
}

export default Contact;
