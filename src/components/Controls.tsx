import { skillFilters, type Skill } from '../data/cv';

export type Mode = 'quick' | 'full';

interface Props {
  mode: Mode;
  onMode: (mode: Mode) => void;
  skill: Skill | null;
  onSkill: (skill: Skill | null) => void;
  status: string;
}

function Controls({ mode, onMode, skill, onSkill, status }: Props) {
  const modes: { id: Mode; label: string }[] = [
    { id: 'quick', label: 'Quick scan · 30 sec' },
    { id: 'full', label: 'Full detail' },
  ];

  return (
    <section aria-label="View options" className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[13px] font-semibold">VIEW</span>
          <div role="group" aria-label="Detail level" className="flex border-2 border-ink">
            {modes.map((m) => (
              <button
                key={m.id}
                type="button"
                aria-pressed={mode === m.id}
                onClick={() => onMode(m.id)}
                className={`px-3 py-2 text-[14px] font-semibold sm:px-4.5 sm:py-2.5 sm:text-[15px] ${
                  mode === m.id ? 'bg-ink text-paper' : 'bg-paper text-ink hover:bg-accent-tint'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
        <span aria-live="polite" className="font-mono text-[13px] text-muted">
          {status}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        <span className="mr-1.5 w-full font-mono text-[13px] font-semibold sm:w-auto">FILTER BY SKILL</span>
        {skillFilters.map((s) => (
          <button
            key={s}
            type="button"
            aria-pressed={skill === s}
            onClick={() => onSkill(skill === s ? null : s)}
            className={`border-[1.5px] border-ink px-3 py-1.5 text-[14px] font-medium ${
              skill === s ? 'bg-accent text-on-accent' : 'bg-card text-ink hover:bg-accent-tint'
            }`}
          >
            {s}
          </button>
        ))}
        {skill && (
          <button
            type="button"
            onClick={() => onSkill(null)}
            className="px-2.5 py-1.5 text-[14px] text-muted underline hover:text-ink"
          >
            clear ×
          </button>
        )}
      </div>
    </section>
  );
}

export default Controls;
