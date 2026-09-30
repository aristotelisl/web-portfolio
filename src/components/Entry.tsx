import type { Entry as EntryData, Skill } from '../data/cv';
import WorkflowFigure from './WorkflowFigure';

interface Props {
  entry: EntryData;
  tags: Skill[];
  open: boolean;
  dimmed: boolean;
  selected: boolean;
  skill: Skill | null;
  onToggle: () => void;
}

function BulletText({ bullet }: { bullet: EntryData['bullets'][number] }) {
  if (!bullet.link) return <>{bullet.text}</>;
  const [before, after] = bullet.text.split('{link}');
  return (
    <>
      {before}
      <a href={bullet.link.href} target="_blank" rel="noopener noreferrer" className="underline decoration-accent decoration-2 underline-offset-2 hover:text-accent">
        {bullet.link.label}
      </a>
      {after}
    </>
  );
}

function Entry({ entry, tags, open, dimmed, selected, skill, onToggle }: Props) {
  const bodyId = `entry-${entry.id}-body`;

  return (
    <article
      id={`entry-${entry.id}`}
      className={`scroll-mt-6 border-t-2 border-ink px-2 pt-4.5 pb-5 transition-opacity sm:px-4 ${
        dimmed ? 'opacity-30' : ''
      } ${selected ? 'bg-accent-tint' : ''}`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={bodyId}
        className="grid w-full grid-cols-[minmax(0,1fr)_28px] items-baseline gap-x-5 gap-y-1 text-left sm:grid-cols-[150px_minmax(0,1fr)_28px]"
      >
        <span className="col-start-1 font-mono text-[13px] text-muted sm:text-[14px]">{entry.dates}</span>
        <span className="col-start-1 flex flex-col gap-1 sm:col-start-2 sm:row-start-1">
          <span className="text-[21px] leading-tight font-bold sm:text-2xl">{entry.title}</span>
          <span className="text-base sm:text-[17px]">
            {entry.org} <span className="text-muted">· {entry.place}</span>
          </span>
        </span>
        <span aria-hidden="true" className="col-start-2 row-start-1 text-right font-mono text-[22px] sm:col-start-3">
          {open ? '−' : '+'}
        </span>
      </button>

      <div id={bodyId} className="mt-3 flex flex-col gap-2 sm:ml-[170px]">
        {open ? (
          <ul className="m-0 flex list-none flex-col gap-2 p-0">
            {entry.bullets.map((b, i) => {
              const hit = skill !== null && b.skills.includes(skill);
              return (
                <li key={i} className="flex items-baseline gap-3 text-base leading-normal">
                  <span aria-hidden="true" className="size-1.5 shrink-0 -translate-y-0.75 bg-ink" />
                  <span className={`px-0.75 ${hit ? 'bg-accent text-on-accent' : 'text-body'}`}>
                    <BulletText bullet={b} />
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="m-0 text-base leading-normal text-body">{entry.summary}</p>
        )}

        {open && entry.figure && <WorkflowFigure />}

        <div className="mt-1 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className={`border px-2 py-0.5 font-mono text-[12px] ${
                t === skill ? 'border-accent bg-accent text-on-accent' : 'border-chip bg-card'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default Entry;
