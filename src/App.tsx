import { useEffect, useMemo, useState } from 'react';
import Contact from './components/Contact';
import Controls, { type Mode } from './components/Controls';
import Entry from './components/Entry';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';
import { entries, type Section, type Skill } from './data/cv';
import { useTheme } from './hooks/useTheme';

const sections: { id: string; title: Section }[] = [
  { id: 'experience', title: 'Experience' },
  { id: 'education', title: 'Education' },
  { id: 'awards', title: 'Awards' },
];

function App() {
  const { theme, toggle } = useTheme();
  const [mode, setMode] = useState<Mode>('full');
  // Per-entry open/closed overrides on top of the current mode's default.
  const [overrides, setOverrides] = useState<Record<string, boolean>>({});
  const [skill, setSkill] = useState<Skill | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const items = useMemo(
    () =>
      entries.map((e) => {
        const tags = Array.from(new Set(e.bullets.flatMap((b) => b.skills)));
        const matches = skill !== null && tags.includes(skill);
        const open = overrides[e.id] ?? (matches || selected === e.id || mode === 'full');
        return { entry: e, tags, matches, open, dimmed: skill !== null && !matches };
      }),
    [mode, overrides, skill, selected],
  );

  // Bring the entry into view when it is picked from the timeline.
  useEffect(() => {
    if (selected) document.getElementById(`entry-${selected}`)?.scrollIntoView({ block: 'nearest' });
  }, [selected]);

  const changeMode = (next: Mode) => {
    setMode(next);
    setOverrides({});
    setSelected(null);
  };

  const changeSkill = (next: Skill | null) => {
    setSkill(next);
    setOverrides({});
    setSelected(null);
  };

  const selectEntry = (id: string) => {
    setSelected((cur) => (cur === id ? null : id));
    setOverrides((o) => {
      const rest = { ...o };
      delete rest[id];
      return rest;
    });
  };

  const toggleEntry = (id: string, open: boolean) => {
    setOverrides((o) => ({ ...o, [id]: !open }));
    if (open && selected === id) setSelected(null);
  };

  const matchCount = items.filter((i) => i.matches).length;
  const status = skill
    ? `${skill} - used in ${matchCount} of ${items.length} entries (highlighted)`
    : mode === 'full'
      ? 'Showing everything'
      : 'Showing one-line summaries';

  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col gap-8 px-4 py-8 sm:px-8 sm:py-12 xl:px-16">
      <Header theme={theme} onToggleTheme={toggle} />

      <main className="flex flex-col gap-8">
        <Controls mode={mode} onMode={changeMode} skill={skill} onSkill={changeSkill} status={status} />

        <Timeline
          selected={selected}
          dimmed={(id) => items.find((i) => i.entry.id === id)?.dimmed ?? false}
          onSelect={selectEntry}
        />

        <div className="grid items-start gap-14 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-9">
            {sections.map((sec, i) => {
              const its = items.filter((it) => it.entry.section === sec.title);
              return (
                <section key={sec.id} id={sec.id} aria-labelledby={`${sec.id}-title`} className="flex flex-col">
                  <div className="flex items-baseline justify-between pb-2.5">
                    <h2 id={`${sec.id}-title`} className="m-0 text-[22px] font-bold">
                      <span className="text-muted">{i + 1}</span>&nbsp; {sec.title}
                    </h2>
                    <span className="font-mono text-[13px] text-muted">({String(its.length).padStart(2, '0')})</span>
                  </div>
                  {its.map((it) => (
                    <Entry
                      key={it.entry.id}
                      entry={it.entry}
                      tags={it.tags}
                      open={it.open}
                      dimmed={it.dimmed}
                      selected={selected === it.entry.id}
                      skill={skill}
                      onToggle={() => toggleEntry(it.entry.id, it.open)}
                    />
                  ))}
                </section>
              );
            })}
          </div>

          <Sidebar />
        </div>
      </main>

      <Contact />
    </div>
  );
}

export default App;
