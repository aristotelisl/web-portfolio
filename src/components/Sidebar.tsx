import { glance, skillGroups } from '../data/cv';

function Sidebar() {
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
          Click a skill to see exactly where I've used it. Click any entry or timeline bar to open it.
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
