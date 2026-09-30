import { segments, TIMELINE_START } from '../data/cv';

interface Props {
  selected: string | null;
  dimmed: (id: string) => boolean;
  onSelect: (id: string) => void;
}

const lanes = ['STUDY', 'WORK', 'AWARDS'];

function monthsSinceStart(date: Date) {
  return (date.getFullYear() - TIMELINE_START.year) * 12 + (date.getMonth() + 1 - TIMELINE_START.month);
}

// Where the NOW marker sits: part-way through the current month, but always
// clear of anything that ends this month or earlier, since those are finished.
function nowPosition() {
  const today = new Date();
  const month = monthsSinceStart(today);
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const exact = month + (today.getDate() - 1) / daysInMonth;
  const finished = segments.flatMap((s) => (s.b !== null && s.b <= month + 1 ? [s.b] : []));
  return Math.max(exact, ...finished.map((b) => b + 0.5));
}

function Timeline({ selected, dimmed, onSelect }: Props) {
  const now = nowPosition();
  const span = Math.max(60, Math.ceil(now) + 2);
  const pct = (m: number) => `${(m / span) * 100}%`;

  const years: number[] = [];
  for (let y = TIMELINE_START.year + 1; (y - TIMELINE_START.year) * 12 - TIMELINE_START.month + 1 < span; y++) {
    years.push(y);
  }
  const yearMonth = (y: number) => (y - TIMELINE_START.year) * 12 - TIMELINE_START.month + 1;

  return (
    <section aria-label="Timeline" className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <div className="flex min-w-[680px] border-y border-rule">
        <div className="flex w-18 shrink-0 flex-col pt-4 font-mono text-[12px] font-semibold">
          {lanes.map((l) => (
            <span key={l} className="flex h-12 items-start pt-2">
              {l}
            </span>
          ))}
        </div>

        <div className="relative h-44 flex-1">
          {years.map((y) => (
            <div key={y} className="absolute inset-y-0 border-l border-dashed border-rule" style={{ left: pct(yearMonth(y)) }}>
              <span className="absolute bottom-1.5 pl-1.5 font-mono text-[12px] text-muted">{y}</span>
            </div>
          ))}

          <div className="absolute inset-y-0 border-l-2 border-accent" style={{ left: pct(now) }} aria-hidden="true">
            <span className="absolute top-0 -translate-x-1/2 bg-accent px-1 font-mono text-[10px] font-semibold text-on-accent">
              NOW
            </span>
          </div>

          {segments.map((s) => {
            const end = s.b ?? now;
            const active = selected === s.id;
            const solid = s.lane !== 0;
            return (
              <button
                key={s.id}
                type="button"
                title={s.label}
                aria-pressed={active}
                onClick={() => onSelect(s.id)}
                style={
                  s.lane === 2
                    ? { right: `calc(100% - ${pct(end)})`, top: 16 + s.lane * 48 }
                    : { left: pct(s.a), width: `calc(${pct(end - s.a)} - 2px)`, top: 16 + s.lane * 48 }
                }
                className={`absolute h-8 min-w-11 overflow-hidden border-2 border-ink px-2 text-left text-[13px] font-semibold whitespace-nowrap transition-opacity ${
                  active
                    ? 'bg-accent text-on-accent'
                    : solid
                      ? 'bg-ink text-paper hover:bg-accent hover:text-on-accent'
                      : 'bg-card text-ink hover:bg-accent-tint'
                } ${dimmed(s.id) ? 'opacity-30' : ''}`}
              >
                <span className="hidden lg:inline">{s.label}</span>
                <span className="lg:hidden">{s.short}</span>
              </button>
            );
          })}
        </div>
      </div>
      <p aria-hidden="true" className="m-0 mt-1.5 font-mono text-[11px] text-muted sm:hidden">
        ← scroll timeline →
      </p>
    </section>
  );
}

export default Timeline;
