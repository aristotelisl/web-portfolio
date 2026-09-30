import { glance, pinsLeft, pinsRight, skillGroups, type Skill } from '../data/cv';

interface Props {
  skill: Skill | null;
  onSkill: (skill: Skill | null) => void;
}

type Pin = (typeof pinsLeft)[number];

function PinRow({ pin, side, active, onClick }: { pin: Pin; side: 'left' | 'right'; active: boolean; onClick: () => void }) {
  const lead = <span className={`h-3 w-6 shrink-0 sm:w-9 ${active ? 'bg-accent' : 'bg-chip'}`} />;
  const num = <span className="text-muted">{pin.n}</span>;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      title={`Filter by ${pin.skill}`}
      className={`flex h-6.5 items-center gap-2 font-mono text-[12px] sm:text-[13px] ${
        side === 'left' ? 'justify-end' : 'justify-start'
      } ${active ? 'font-semibold' : 'hover:text-accent'}`}
    >
      {side === 'left' ? (
        <>
          <span>{pin.label}</span>
          {num}
          {lead}
        </>
      ) : (
        <>
          {lead}
          {num}
          <span>{pin.label}</span>
        </>
      )}
    </button>
  );
}

function Sidebar({ skill, onSkill }: Props) {
  const pick = (s: Skill) => onSkill(skill === s ? null : s);
  const pinActive = (p: Pin) => skill === p.skill;

  return (
    <aside className="grid gap-7 sm:grid-cols-2 xl:flex xl:flex-col xl:border-l xl:border-rule xl:pl-8">
      <div className="flex flex-col gap-2.5">
        <span className="font-mono text-[13px] font-semibold">AT A GLANCE</span>
        <dl className="m-0 grid grid-cols-2 gap-4">
          {glance.map((g) => (
            <div key={g.label} className="flex flex-col-reverse gap-0.5">
              <dt className="text-[14px] text-muted">{g.label}</dt>
              <dd className="m-0 font-condensed text-5xl leading-none font-bold">{g.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <figure className="m-0 flex flex-col items-center gap-4 border border-rule px-2 py-6 sm:col-span-2 xl:col-span-1">
        <div className="flex items-center">
          <div className="flex flex-col gap-4">
            {pinsLeft.map((p) => (
              <PinRow key={p.n} pin={p} side="left" active={pinActive(p)} onClick={() => pick(p.skill)} />
            ))}
          </div>
          <div className="relative flex h-58 w-22 items-center justify-center bg-[var(--chip-body)] sm:w-26">
            <span className="absolute -top-px left-1/2 h-4 w-8 -translate-x-1/2 rounded-b-full bg-paper" />
            <span className="absolute top-6 left-3 size-2.5 rounded-full bg-[#3a3a38]" />
          </div>
          <div className="flex flex-col gap-4">
            {pinsRight.map((p) => (
              <PinRow key={p.n} pin={p} side="right" active={pinActive(p)} onClick={() => pick(p.skill)} />
            ))}
          </div>
        </div>
        <figcaption className="text-center text-[14px] text-muted">
          <b className="text-ink">Figure 1.</b> Pin configuration (top view). Click a pin to filter.
        </figcaption>
      </figure>

      {skillGroups.map((g) => (
        <div key={g.title} className="flex flex-col gap-2.5">
          <span className="font-mono text-[13px] font-semibold uppercase">{g.title}</span>
          <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
            {g.items.map((s) => (
              <li key={s} className="border border-chip bg-card px-2.25 py-1 text-[14px]">
                {s}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="flex flex-col gap-2 bg-ink p-4.5 text-paper">
        <span className="font-mono text-[12px] opacity-70">TRY IT</span>
        <p className="m-0 text-[15px] leading-normal">
          Click a skill or a pin to see exactly where I've used it. Click any entry or timeline bar to open it.
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
