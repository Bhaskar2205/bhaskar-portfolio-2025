import { FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight, FiDownload, FiMail } from "react-icons/fi";
import { PrintButton, Reveal } from "./components/Reveal";
import { CountUp, Roadmap, ScrollProgress } from "./components/Animated";
import {
  caseStudies,
  certifications,
  education,
  engineering,
  languages,
  playbook,
  profile,
  type Role,
  roadmap,
  skills,
  snapshot,
  stats,
  strengths,
  ventures,
} from "./data/resume";

const navLinks = [
  { href: "#roadmap", label: "Roadmap" },
  { href: "#strengths", label: "Strengths" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Case studies" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];

const container = "mx-auto w-full max-w-6xl px-5 md:px-8";
const eyebrow = "text-xs font-semibold uppercase tracking-[0.18em]";
const primaryBtn =
  "inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition hover:opacity-85";
const secondaryBtn =
  "inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium text-ink transition hover:border-ink/40";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressCountry: "IN",
  },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: [
    "Product strategy",
    "Product management",
    "Product marketing",
    "Go-to-market strategy",
    "B2B SaaS",
    "Generative AI",
  ],
};

function SectionHeading({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="mb-10 max-w-2xl md:mb-14 print:mb-3">
      <p className={`${eyebrow} text-accent`}>{kicker}</p>
      <h2 className="mt-3 font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl print:mt-1 print:text-3xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-muted print:hidden">{intro}</p>
      )}
    </Reveal>
  );
}

function RoleItem({ r }: { r: Role }) {
  return (
    <Reveal className="print-avoid-break">
      <article className="grid gap-3 border-t border-line py-8 md:grid-cols-[13rem_1fr] md:gap-10 print:grid-cols-[9rem_1fr] print:gap-6 print:py-3">
        <div className="text-sm text-muted">
          <p className="whitespace-nowrap font-medium tabular-nums text-ink">{r.period}</p>
          <p className="mt-1">{r.place}</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold tracking-tight">
            {r.role} <span className="font-normal text-muted">·</span>{" "}
            <span className="text-accent">{r.company}</span>
          </h4>
          <p className="mt-1 text-muted">{r.context}</p>
          <ul className="mt-4 space-y-2.5 print:mt-2 print:space-y-1">
            {r.points.map((p) => (
              <li
                key={p}
                className="relative pl-5 leading-relaxed before:absolute before:left-0 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
              >
                {p}
              </li>
            ))}
          </ul>
          {r.link && (
            <a
              href={r.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline print:hidden"
            >
              {r.link.label} <FiArrowUpRight aria-hidden />
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md print:hidden">
        <div className={`${container} flex h-16 items-center justify-between gap-4`}>
          <a href="#top" className="font-serif text-2xl leading-none">
            Bhaskar<span className="text-accent">.</span>
          </a>
          <nav aria-label="Sections" className="hidden items-center gap-7 text-sm text-muted lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition hover:text-ink">
                {l.label}
              </a>
            ))}
          </nav>
          <PrintButton className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium transition hover:border-ink/40">
            <FiDownload aria-hidden /> Download résumé
          </PrintButton>
        </div>
      </header>

      <main id="top" className="relative isolate overflow-x-clip">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(55%_60%_at_15%_0%,var(--accent-soft),transparent_70%)] print:hidden"
        />

        {/* HERO */}
        <section className={`${container} pb-16 pt-14 md:pb-24 md:pt-24 print:pb-4 print:pt-0`}>
          <div className="grid items-end gap-12 lg:grid-cols-[1.45fr_1fr] print:gap-6">
            <div className="hero-in">
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm text-muted print:hidden">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Open to product roles
              </p>

              <h1 className="mt-6 font-serif text-6xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl print:mt-0 print:text-5xl">
                Bhaskar <span className="italic">Mamoria</span>
              </h1>

              <p className="mt-5 text-xl font-semibold tracking-tight md:text-2xl print:mt-2">
                {profile.title}{" "}
                <span className="font-normal text-muted">· {profile.focus}</span>
              </p>

              <p className="mt-2 hidden text-sm text-muted print:block">
                {profile.email} · {profile.linkedinLabel} · {profile.location}
              </p>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted print:mt-3 print:max-w-none print:text-ink">
                {profile.pitch}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 print:hidden">
                <a href={`mailto:${profile.email}`} className={primaryBtn}>
                  <FiMail aria-hidden /> Email me
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={secondaryBtn}
                >
                  <FaLinkedin aria-hidden /> LinkedIn
                </a>
              </div>
            </div>

            <div className="hero-in print:hidden" style={{ animationDelay: "100ms" }}>
              <aside className="rounded-2xl border border-line bg-surface p-6 shadow-[0_24px_60px_-36px_rgba(22,20,28,0.35)] md:p-7">
                <p className={`${eyebrow} text-muted`}>At a glance</p>
                <dl className="mt-4 divide-y divide-line">
                  {snapshot.map((s) => (
                    <div key={s.label} className="flex items-baseline justify-between gap-6 py-3">
                      <dt className="text-sm text-muted">{s.label}</dt>
                      <dd className="text-right font-medium">{s.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className={`${eyebrow} mt-6 text-muted`}>Open to</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {profile.openTo.map((r) => (
                    <li
                      key={r}
                      className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>

          {/* IMPACT STATS */}
          <div className="hero-in" style={{ animationDelay: "180ms" }}>
            <ul className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4 print:mt-4 print:grid-cols-4">
              {stats.map((s) => (
                <li key={s.label} className="bg-surface p-5 md:p-7 print:p-3">
                  <p className="font-serif text-5xl leading-none tracking-tight md:text-6xl print:text-3xl">
                    <CountUp value={s.value} />
                  </p>
                  <p className="mt-3 text-sm leading-snug text-muted print:mt-1">{s.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CAREER ROADMAP */}
        <section id="roadmap" className={`${container} py-16 md:py-24 print:hidden`}>
          <SectionHeading
            kicker="Career roadmap"
            title="My career, shipped in releases."
            intro="Each version added a new capability. The next one ships with your team."
          />
          <Roadmap items={roadmap} />
        </section>

        {/* STRENGTHS */}
        <section id="strengths" className={`${container} py-16 md:py-24 print:py-3`}>
          <SectionHeading
            kicker="What I bring"
            title="Strategy, story and the technical depth to ship it."
            intro="Each strength is backed by something I've actually done."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 print:grid-cols-4 print:gap-2">
            {strengths.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06} className="print-avoid-break">
                <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 print:p-3">
                  <p className="font-serif text-2xl italic text-accent">0{i + 1}</p>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
                  <p className="mt-auto border-t border-line pt-4 text-sm font-medium print:pt-2">
                    <span className="text-accent">Proof · </span>
                    {s.proof}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-6 print:hidden">
            <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold tracking-tight">How I run a product</h3>
                <p className="text-sm text-muted">The same loop, every time.</p>
              </div>
              <ol className="mt-6 grid gap-5 md:grid-cols-5 md:gap-4">
                {playbook.map((s, i) => (
                  <li key={s.step}>
                    <div className="flex items-center gap-3">
                      <span
                        className="stage-dot grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-bg text-sm font-semibold"
                        style={{ animationDelay: `${i * 1.6}s` }}
                      >
                        {i + 1}
                      </span>
                      <span className="font-semibold">{s.step}</span>
                      {i < playbook.length - 1 && (
                        <span aria-hidden className="hidden h-px flex-1 bg-line md:block" />
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted md:pr-3">{s.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className={`${container} py-16 md:py-24 print:py-3`}>
          <SectionHeading
            kicker="Experience"
            title="From building products to leading them."
            intro="Two products I led end to end, backed by four years of engineering inside enterprise product teams."
          />

          <h3 className={`${eyebrow} mb-2 text-muted`}>Product ventures</h3>
          <div className="mb-14 border-b border-line print:mb-4">
            {ventures.map((r) => (
              <RoleItem key={r.company} r={r} />
            ))}
          </div>

          <h3 className={`${eyebrow} mb-2 text-muted`}>Product engineering</h3>
          <div className="border-b border-line">
            {engineering.map((r) => (
              <RoleItem key={r.company} r={r} />
            ))}
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="work" className={`${container} py-16 md:py-24 print:hidden`}>
          <SectionHeading
            kicker="Case studies"
            title="Problems I've taken on."
            intro="Each one starts with the user problem, then what I did about it."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {caseStudies.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.06}>
                <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7">
                  <p className={`${eyebrow} text-accent`}>{c.tag}</p>
                  <h3 className="mt-3 font-serif text-3xl tracking-tight">{c.name}</h3>
                  <dl className="mt-5 space-y-4 text-[15px] leading-relaxed">
                    <div>
                      <dt className="font-semibold">Problem</dt>
                      <dd className="mt-1 text-muted">{c.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">What I did</dt>
                      <dd className="mt-1 text-muted">{c.approach}</dd>
                    </div>
                  </dl>
                  <div className="mt-auto pt-6">
                    <p className="text-sm font-semibold">{c.resultLabel}</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {c.result.map((r) => (
                        <li
                          key={r}
                          className="rounded-full border border-line px-3 py-1 text-sm text-muted"
                        >
                          {r}
                        </li>
                      ))}
                    </ul>
                    {c.link && (
                      <a
                        href={c.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                      >
                        {c.link.label} <FiArrowUpRight aria-hidden />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className={`${container} py-16 md:py-24 print:py-3`}>
          <SectionHeading
            kicker="Skills"
            title="A product toolkit with technical depth."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 print:gap-2">
            {skills.map((g, i) => (
              <Reveal key={g.group} delay={i * 0.06} className="print-avoid-break">
                <div className="h-full rounded-2xl border border-line bg-surface p-6 print:p-3">
                  <h3 className="font-semibold tracking-tight">{g.group}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2 print:mt-2 print:gap-1">
                    {g.items.map((s) => (
                      <li
                        key={s}
                        className="rounded-full bg-bg px-3 py-1 text-sm text-muted ring-1 ring-line print:px-2 print:py-0.5"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className={`${container} py-16 md:py-24 print:py-3`}>
          <SectionHeading kicker="Education" title="Business and engineering, formally." />
          <div className="grid gap-10 md:grid-cols-3 print:grid-cols-3 print:gap-6">
            <Reveal className="md:col-span-1">
              <h3 className={`${eyebrow} text-muted`}>Degrees</h3>
              <ul className="mt-4 space-y-5 print:mt-2 print:space-y-2">
                {education.map((e) => (
                  <li key={e.title}>
                    <p className="font-semibold">{e.title}</p>
                    <p className="text-muted">{e.school}</p>
                    <p className="mt-1 text-sm tabular-nums text-muted">
                      {e.period} · {e.note}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.06}>
              <h3 className={`${eyebrow} text-muted`}>Certification</h3>
              <ul className="mt-4 space-y-5 print:mt-2">
                {certifications.map((c) => (
                  <li key={c.title}>
                    <p className="font-semibold">{c.title}</p>
                    <p className="text-muted">{c.school}</p>
                    <p className="mt-1 text-sm tabular-nums text-muted">{c.period}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.12}>
              <h3 className={`${eyebrow} text-muted`}>Languages</h3>
              <ul className="mt-4 space-y-3 print:mt-2 print:space-y-1">
                {languages.map((l) => (
                  <li key={l.name} className="flex justify-between gap-4 border-b border-line pb-3 print:pb-1">
                    <span className="font-semibold">{l.name}</span>
                    <span className="text-muted">{l.level}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className={`${container} pb-20 pt-8 md:pb-28 print:hidden`}>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-bg md:px-14 md:py-20">
              <p className={`${eyebrow} text-accent-soft`}>Let&apos;s talk</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
                Have a product problem <span className="italic">worth solving?</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-bg/70">
                I&apos;m open to Product Consultant, Product Manager, Product Marketing
                and Product Strategy roles.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-bg px-5 py-3 text-sm font-medium text-ink transition hover:opacity-90"
                >
                  <FiMail aria-hidden /> {profile.email}
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-bg/25 px-5 py-3 text-sm font-medium transition hover:border-bg/60"
                >
                  <FaLinkedin aria-hidden /> Connect on LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-line print:hidden">
        <div className={`${container} flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between`}>
          <p>© {new Date().getFullYear()} {profile.name} · Product Consultant · Jaipur, India</p>
          <div className="flex gap-5">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              GitHub
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-ink">
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
