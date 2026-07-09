import Image from "next/image";
import {
  getDictionary,
  langHref,
  resolveLang,
  type Lang,
} from "@/lib/i18n";
import { RevealOnScroll } from "./reveal";

type HomeProps = {
  searchParams?: Promise<{ lang?: string | string[] }>;
};

function LanguageSwitch({ lang, label }: { lang: Lang; label: string }) {
  return (
    <div
      className="lang-switch inline-flex items-center rounded-sm border border-line bg-panel/90 p-0.5 text-sm shadow-sm backdrop-blur"
      role="group"
      aria-label={label}
    >
      <a
        href={langHref("en")}
        className="inline-flex min-h-10 items-center rounded-[2px] px-3 py-1.5 font-medium text-ink-soft transition-colors hover:text-ink"
        aria-current={lang === "en" ? "true" : undefined}
        hrefLang="en"
      >
        EN
      </a>
      <a
        href={langHref("es")}
        className="inline-flex min-h-10 items-center rounded-[2px] px-3 py-1.5 font-medium text-ink-soft transition-colors hover:text-ink"
        aria-current={lang === "es" ? "true" : undefined}
        hrefLang="es"
      >
        ES
      </a>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono-label text-[0.7rem] font-medium text-signal-deep">
      {children}
    </p>
  );
}

function OscillationRibbon({
  className = "",
  animated = false,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <svg
      className={`oscillation-ribbon ${className}`}
      viewBox="0 0 256 32"
      aria-hidden
    >
      <path
        className={animated ? "oscillation-draw" : undefined}
        d="M0 16 C16 6 28 26 44 16 S72 6 88 16 116 26 132 16 160 6 176 16 204 26 220 16 244 6 256 16"
      />
      <path
        d="M0 16 C20 22 36 10 52 16 S84 22 100 16 132 10 148 16 180 22 196 16 228 10 256 16"
        opacity="0.35"
      />
    </svg>
  );
}

export default async function Home({ searchParams }: HomeProps) {
  const params = searchParams ? await searchParams : {};
  const lang = resolveLang(params.lang);
  const t = getDictionary(lang);
  const featuredPubs = t.publications.items.filter((p) => p.featured);
  const otherPubs = t.publications.items.filter((p) => !p.featured);

  return (
    <div className="site-shell min-h-dvh text-ink">
      <RevealOnScroll />

      <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/88 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <a
            href="#inicio"
            className="font-display text-sm font-semibold tracking-tight text-slate-deep sm:text-base"
          >
            {t.hero.name}
          </a>
          <nav
            className="hidden items-center gap-5 text-sm text-ink-soft lg:flex"
            aria-label="Primary"
          >
            <a className="nav-link link-quiet" href="#sobre">
              {t.nav.about}
            </a>
            <a className="nav-link link-quiet" href="#trayectoria">
              {t.nav.trajectory}
            </a>
            <a className="nav-link link-quiet" href="#investigacion">
              {t.nav.research}
            </a>
            <a className="nav-link link-quiet" href="#publicaciones">
              {t.nav.publications}
            </a>
            <a className="nav-link link-quiet" href="#docencia">
              {t.nav.teaching}
            </a>
            <a className="nav-link link-quiet" href="#contacto">
              {t.nav.contact}
            </a>
          </nav>
          <LanguageSwitch lang={lang} label={t.nav.langSwitchLabel} />
        </div>
        <nav
          className="flex gap-4 overflow-x-auto border-t border-line/50 px-5 py-2.5 text-sm text-ink-soft sm:px-8 lg:hidden"
          aria-label="Mobile"
        >
          <a className="link-quiet whitespace-nowrap" href="#sobre">
            {t.nav.about}
          </a>
          <a className="link-quiet whitespace-nowrap" href="#trayectoria">
            {t.nav.trajectory}
          </a>
          <a className="link-quiet whitespace-nowrap" href="#investigacion">
            {t.nav.research}
          </a>
          <a className="link-quiet whitespace-nowrap" href="#publicaciones">
            {t.nav.publications}
          </a>
          <a className="link-quiet whitespace-nowrap" href="#docencia">
            {t.nav.teaching}
          </a>
          <a className="link-quiet whitespace-nowrap" href="#contacto">
            {t.nav.contact}
          </a>
        </nav>
      </header>

      <main>
        <section
          id="inicio"
          aria-labelledby="hero-name"
          className="relative isolate min-h-[calc(100svh-6.5rem)] overflow-hidden lg:min-h-[calc(100svh-3.75rem)]"
        >
          <div className="absolute inset-0">
            <Image
              src="/diego-echeverria.jpg"
              alt={t.hero.photoAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_18%] lg:object-[68%_18%]"
            />
            <div className="hero-atmosphere absolute inset-0" aria-hidden />
            <div className="hero-portrait-veil absolute inset-0" aria-hidden />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6.5rem)] max-w-6xl items-end px-5 pb-12 pt-14 sm:px-8 sm:pb-16 lg:min-h-[calc(100svh-3.75rem)] lg:items-end lg:pb-16">
            <div className="max-w-xl text-white">
              <p className="motion-fade-up font-mono-label text-[0.7rem] text-signal-soft">
                {t.hero.affiliation}
              </p>
              <h1
                id="hero-name"
                className="motion-fade-up motion-fade-up-delay mt-4 font-display text-[2.55rem] leading-[1.02] font-bold tracking-tight sm:text-5xl md:text-[3.45rem]"
              >
                {t.hero.name}
              </h1>
              <p className="motion-fade-up motion-fade-up-delay mt-3 font-mono-label text-[0.72rem] text-white/65">
                {t.hero.credential} · {t.hero.focus}
              </p>
              <div className="motion-fade-up motion-fade-up-delay mt-5">
                <OscillationRibbon className="hero-ribbon" animated />
                <p className="sr-only">{t.hero.motifLabel}</p>
              </div>
              <p className="motion-fade-up motion-fade-up-delay-2 mt-5 text-lg text-white/90 sm:text-xl">
                {t.hero.role}
              </p>
              <p className="motion-fade-up motion-fade-up-delay-2 mt-3 max-w-lg text-base leading-relaxed text-white/78 sm:text-lg">
                {t.hero.summary}
              </p>
              <div className="motion-fade-up motion-fade-up-delay-2 mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contacto"
                  className="btn-primary inline-flex min-h-11 items-center rounded-sm bg-signal px-5 py-2.5 text-sm font-semibold text-white"
                >
                  {t.hero.cta}
                </a>
                <a
                  href="#publicaciones"
                  className="btn-ghost inline-flex min-h-11 items-center rounded-sm border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur"
                >
                  {t.hero.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="sobre"
          aria-labelledby="about-title"
          className="reveal-on-scroll mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24"
        >
          <SectionLabel>{t.nav.about}</SectionLabel>
          <h2
            id="about-title"
            className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-slate-deep sm:text-4xl"
          >
            {t.about.title}
          </h2>
          <div className="section-rule mt-6" />
          <div className="mt-10 grid gap-12 md:grid-cols-[1.25fr_0.75fr]">
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
              <p className="text-ink">{t.about.lead}</p>
              <p>{t.about.body}</p>
            </div>
            <aside className="border-l-2 border-signal/45 pl-6">
              <h3 className="font-display text-lg font-semibold text-slate-deep">
                {t.about.rolesTitle}
              </h3>
              <ul className="mt-5 space-y-4 text-base text-ink-soft">
                {t.about.roles.map((role) => (
                  <li key={role} className="leading-snug">
                    {role}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section
          id="trayectoria"
          aria-labelledby="trajectory-title"
          className="border-y border-line/70 bg-paper-deep/55"
        >
          <div className="reveal-on-scroll mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <SectionLabel>{t.nav.trajectory}</SectionLabel>
            <h2
              id="trajectory-title"
              className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-slate-deep sm:text-4xl"
            >
              {t.trajectory.title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-ink-soft">
              {t.trajectory.lead}
            </p>
            <div className="timeline relative mt-14 max-w-3xl">
              <div className="timeline-track" aria-hidden />
              <div className="timeline-wave" aria-hidden>
                <svg viewBox="0 0 40 480" preserveAspectRatio="none">
                  <path
                    d="M20 0 C28 30 12 60 20 90 S28 150 20 180 12 240 20 270 28 330 20 360 12 420 20 450 28 480 20 480"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                  />
                </svg>
              </div>
              <ol className="relative">
                {t.trajectory.items.map((item) => (
                  <li
                    key={`${item.year}-${item.title}`}
                    className="timeline-item"
                  >
                    <p className="font-mono-label text-[0.7rem] text-signal-deep">
                      {item.year}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-slate-deep">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-base leading-relaxed text-ink-soft">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          id="investigacion"
          aria-labelledby="research-title"
          className="reveal-on-scroll mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24"
        >
          <SectionLabel>{t.nav.research}</SectionLabel>
          <h2
            id="research-title"
            className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-slate-deep sm:text-4xl"
          >
            {t.research.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{t.research.lead}</p>
          <div className="mt-12 grid gap-0 border-t border-line sm:grid-cols-2">
            {t.research.items.map((item, index) => (
              <article
                key={item.title}
                className={`research-row border-b border-line px-0 py-9 sm:px-7 ${
                  index % 2 === 0 ? "sm:border-r" : ""
                }`}
              >
                <h3 className="font-display text-xl font-semibold text-slate-deep">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="publicaciones"
          aria-labelledby="publications-title"
          className="border-y border-line/70 bg-paper-deep/65"
        >
          <div className="reveal-on-scroll mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <SectionLabel>{t.nav.publications}</SectionLabel>
                <h2
                  id="publications-title"
                  className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-deep sm:text-4xl"
                >
                  {t.publications.title}
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-ink-soft">
                  {t.publications.lead}
                </p>
              </div>
              <a
                href={t.contact.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet inline-flex min-h-11 items-center text-sm font-semibold text-signal-deep underline-offset-4 hover:underline"
              >
                {t.publications.scholarLabel}
              </a>
            </div>

            {featuredPubs.map((pub) => (
              <article
                key={`featured-${pub.title}`}
                className="featured-pub mt-12 px-6 py-8 sm:px-8"
              >
                <p className="font-mono-label text-[0.68rem] text-signal-deep">
                  {t.publications.featuredLabel} · {pub.year}
                </p>
                <h3 className="mt-3 max-w-3xl font-display text-2xl font-semibold leading-snug text-slate-deep">
                  {pub.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-ink-soft">
                  {pub.venue}
                </p>
                <p className="mt-2 text-sm text-ink-soft/90">{pub.note}</p>
              </article>
            ))}

            <ol className="mt-10 divide-y divide-line border-y border-line">
              {otherPubs.map((pub) => (
                <li
                  key={`${pub.year}-${pub.title}`}
                  className="pub-row grid gap-2 py-7 sm:grid-cols-[4.5rem_1fr] sm:gap-8"
                >
                  <span className="font-mono-label text-sm font-medium text-signal-deep">
                    {pub.year}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold leading-snug text-ink">
                      {pub.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-soft">{pub.venue}</p>
                    <p className="mt-2 text-sm text-ink-soft/90">{pub.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="docencia"
          aria-labelledby="teaching-title"
          className="reveal-on-scroll mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24"
        >
          <SectionLabel>{t.nav.teaching}</SectionLabel>
          <h2
            id="teaching-title"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-deep sm:text-4xl"
          >
            {t.teaching.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{t.teaching.lead}</p>
          <ul className="mt-12 space-y-8">
            {t.teaching.items.map((course) => (
              <li
                key={course.title}
                className="grid gap-2 border-l-2 border-signal/30 pl-5 sm:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] sm:gap-10"
              >
                <h3 className="font-display text-xl font-semibold text-slate-deep">
                  {course.title}
                </h3>
                <p className="text-base leading-relaxed text-ink-soft">
                  {course.detail}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-12 max-w-3xl text-base text-ink-soft">
            {t.teaching.note}
          </p>
        </section>

        <section
          id="charlas"
          aria-labelledby="talks-title"
          className="border-y border-line/70 bg-paper-deep/45"
        >
          <div className="reveal-on-scroll mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="flex flex-wrap items-center gap-3">
              <SectionLabel>{t.nav.talks}</SectionLabel>
              <span className="example-tag">{t.talks.exampleNote}</span>
            </div>
            <h2
              id="talks-title"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-deep sm:text-4xl"
            >
              {t.talks.title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-ink-soft">{t.talks.lead}</p>
            <ul className="mt-12 space-y-0 divide-y divide-line border-y border-line">
              {t.talks.items.map((talk) => (
                <li
                  key={talk.title}
                  className="grid gap-2 py-7 sm:grid-cols-[5rem_1fr_auto] sm:items-baseline sm:gap-8"
                >
                  <span className="font-mono-label text-sm text-signal-deep">
                    {talk.year}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{talk.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{talk.venue}</p>
                  </div>
                  <p className="font-mono-label text-[0.68rem] text-ink-soft">
                    {talk.kind}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="voces"
          aria-labelledby="quotes-title"
          className="reveal-on-scroll mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24"
        >
          <div className="flex flex-wrap items-center gap-3">
            <SectionLabel>{t.quotes.label}</SectionLabel>
            <span className="example-tag">{t.quotes.exampleNote}</span>
          </div>
          <h2
            id="quotes-title"
            className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-slate-deep sm:text-4xl"
          >
            {t.quotes.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{t.quotes.lead}</p>
          <div className="mt-12 grid gap-14 md:grid-cols-2">
            {t.quotes.items.map((item) => (
              <blockquote key={item.attribution} className="quote-frame">
                <p className="font-display text-xl leading-relaxed text-slate-deep sm:text-2xl">
                  {item.quote}
                </p>
                <footer className="mt-5 font-mono-label text-[0.7rem] text-ink-soft">
                  {item.attribution}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section
          id="estudiantes"
          aria-labelledby="faq-title"
          className="border-y border-line/70 bg-paper-deep/65"
        >
          <div className="reveal-on-scroll mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <SectionLabel>{t.nav.faq}</SectionLabel>
            <h2
              id="faq-title"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-deep sm:text-4xl"
            >
              {t.faq.title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-ink-soft">{t.faq.lead}</p>
            <dl className="mt-12 max-w-3xl space-y-10">
              {t.faq.items.map((item) => (
                <div key={item.question}>
                  <dt className="font-display text-xl font-semibold text-slate-deep">
                    {item.question}
                  </dt>
                  <dd className="mt-3 text-base leading-relaxed text-ink-soft">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          id="contacto"
          aria-labelledby="contact-title"
          className="reveal-on-scroll mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24"
        >
          <SectionLabel>{t.nav.contact}</SectionLabel>
          <h2
            id="contact-title"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-deep sm:text-4xl"
          >
            {t.contact.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{t.contact.lead}</p>

          <div className="mt-10">
            <OscillationRibbon />
          </div>

          <div className="mt-10 grid gap-10 border-t-2 border-signal/45 pt-10 sm:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="font-mono-label text-[0.7rem] text-ink-soft">
                {t.contact.emailLabel}
              </p>
              <a
                href={`mailto:${t.contact.email}`}
                className="link-quiet mt-3 inline-block font-display text-2xl font-semibold text-slate-deep underline-offset-4 hover:underline sm:text-3xl"
              >
                {t.contact.email}
              </a>
              <p className="mt-4 text-base text-ink-soft">{t.contact.location}</p>
              <a
                href={`mailto:${t.contact.email}`}
                className="btn-primary mt-8 inline-flex min-h-11 items-center rounded-sm bg-signal px-5 py-2.5 text-sm font-semibold text-white"
              >
                {t.contact.cta}
              </a>
            </div>
            <div className="flex flex-col justify-end gap-4 border-t border-line pt-6 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-10">
              <a
                href={t.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet inline-flex min-h-11 items-center text-base font-semibold text-ink"
              >
                {t.contact.linkedinLabel}
              </a>
              <a
                href={t.contact.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet inline-flex min-h-11 items-center text-base font-semibold text-ink"
              >
                {t.contact.scholarLabel}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-slate-deep text-white/75">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-7 text-sm sm:px-8">
          <p>{t.footer.rights}</p>
          <LanguageSwitch lang={lang} label={t.nav.langSwitchLabel} />
        </div>
      </footer>
    </div>
  );
}
