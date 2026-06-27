type Project = {
  name: string;
  desc: string;
  stack: string[];
  url: string;
};

const projects: Project[] = [
  {
    name: "Studra",
    desc: "App de révision intelligente qui génère et adapte les sessions d'apprentissage à partir du contenu de l'utilisateur.",
    stack: ["Next.js", "Tailwind", "OpenAI API"],
    url: "https://studra.fr",
  },
  {
    name: "GL Code",
    desc: "App de chat IA multi-agents avec intégration Git, pensée pour assister le travail sur du code au quotidien.",
    stack: ["Electron", "TypeScript", "React"],
    url: "https://code.goune.dev",
  },
  {
    name: "RankingComparator",
    desc: "Outil permettant de comparer le palmarès de deux clubs de football, côte à côte.",
    stack: ["Next.js", "Tailwind"],
    url: "https://ranking.goune.dev",
  },
];

const stack = ["Next.js / React", "Tailwind", "Intégration IA", "Git", "TypeScript"];

const underlineLink =
  "text-[#56564f] no-underline border-b border-[#d8d8d2] pb-[2px] transition-colors duration-150 hover:text-[#7c4dde] hover:border-[#7c4dde]";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full justify-center bg-[#fbfbfa] px-7 text-[#1a1a18]">
      <main className="w-full max-w-[680px] py-[120px] pb-20">
        {/* HEADER */}
        <header className="mb-[140px]">
          <h1 className="mb-[18px] text-[clamp(40px,8vw,68px)] font-medium leading-[0.98] tracking-[-0.035em]">
            Gaël
          </h1>
          <p className="mb-[30px] text-lg font-normal tracking-[-0.01em] text-[#56564f]">
            Développeur web, Bordeaux
          </p>
          <div className="flex gap-6 font-mono text-[13px] tracking-[-0.01em]">
            <a
              href="https://github.com/goune1"
              target="_blank"
              rel="noopener noreferrer"
              className={underlineLink}
            >
              github.com/goune1
            </a>
            <a href="mailto:gael.ledreo@gmail.com" className={underlineLink}>
              gael.ledreo@gmail.com
            </a>
          </div>
        </header>

        {/* PROJETS */}
        <section className="mb-[140px]">
          <h2 className="mb-12 font-mono text-xs font-medium uppercase tracking-[0.12em] text-[#9a9a90]">
            Projets
          </h2>
          <div className="flex flex-col">
            {projects.map((p) => (
              <div
                key={p.name}
                className="flex flex-col gap-3.5 border-t border-[#ececE6] py-[34px]"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-5">
                  <h3 className="text-[23px] font-medium tracking-[-0.02em]">
                    {p.name}
                  </h3>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap font-mono text-[12.5px] tracking-[-0.01em] text-[#7c4dde] no-underline opacity-85 transition-opacity duration-150 hover:opacity-100"
                  >
                    démo ↗
                  </a>
                </div>
                <p className="max-w-[52ch] text-base leading-[1.55] text-[#56564f] [text-wrap:pretty]">
                  {p.desc}
                </p>
                <div className="mt-0.5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-[4px] bg-[#f1f1ec] px-[9px] py-1 font-mono text-[11.5px] tracking-[-0.01em] text-[#7a7a72]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="border-t border-[#ececE6]" />
          </div>
        </section>

        {/* STACK */}
        <section className="mb-[140px]">
          <h2 className="mb-12 font-mono text-xs font-medium uppercase tracking-[0.12em] text-[#9a9a90]">
            Stack
          </h2>
          <div className="flex flex-wrap gap-x-3 gap-y-2.5">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-[#e2e2db] px-[15px] py-[9px] font-mono text-sm tracking-[-0.01em] text-[#1a1a18]"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="flex flex-wrap gap-6 border-t border-[#ececE6] pt-10 font-mono text-[13px] tracking-[-0.01em]">
          <a href="mailto:gael.ledreo@gmail.com" className={underlineLink}>
            gael.ledreo@gmail.com
          </a>
          <a
            href="https://github.com/goune1"
            target="_blank"
            rel="noopener noreferrer"
            className={underlineLink}
          >
            github.com/goune1
          </a>
        </footer>
      </main>
    </div>
  );
}
