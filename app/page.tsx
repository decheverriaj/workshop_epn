import Image from "next/image";
import {
  getDictionary,
  langHref,
  resolveLang,
  type Lang,
} from "@/lib/i18n";

type HomeProps = {
  searchParams?: Promise<{ lang?: string | string[] }>;
};

function LanguageSwitch({ lang, label }: { lang: Lang; label: string }) {
  return (
    <div
      className="lang-switch inline-flex items-center rounded-md border border-line bg-panel/80 p-0.5 text-sm shadow-sm backdrop-blur"
      role="group"
      aria-label={label}
    >
      <a
        href={langHref("en")}
        className="inline-flex items-center gap-1.5 rounded-[5px] px-2.5 py-1.5 font-medium text-ink-soft transition-colors hover:text-ink"
        aria-current={lang === "en" ? "true" : undefined}
        hrefLang="en"
      >
        <span aria-hidden>🇺🇸</span>
        <span>English</span>
      </a>
      <a
        href={langHref("es")}
        className="inline-flex items-center gap-1.5 rounded-[5px] px-2.5 py-1.5 font-medium text-ink-soft transition-colors hover:text-ink"
        aria-current={lang === "es" ? "true" : undefined}
        hrefLang="es"
      >
        <span aria-hidden>🇪🇸</span>
        <span>Español</span>
      </a>
    </div>
  );
}

export default async function Home({ searchParams }: HomeProps) {
  const params = searchParams ? await searchParams : {};
  const lang = resolveLang(params.lang);
  const t = getDictionary(lang);

  return (
    <div className="site-shell min-h-dvh text-ink">
      <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <a
            href="#inicio"
            className="font-display text-sm font-semibold tracking-tight text-teal-deep sm:text-base"
          >
            {t.hero.name}
          </a>
          <nav
            className="hidden items-center gap-5 text-sm text-ink-soft md:flex"
            aria-label="Primary"
          >
            <a className="hover:text-ink" href="#sobre">
              {t.nav.about}
            </a>
            <a className="hover:text-ink" href="#investigacion">
              {t.nav.research}
            </a>
            <a className="hover:text-ink" href="#publicaciones">
              {t.nav.publications}
            </a>
            <a className="hover:text-ink" href="#docencia">
              {t.nav.teaching}
            </a>
            <a className="hover:text-ink" href="#contacto">
              {t.nav.contact}
            </a>
          </nav>
          <LanguageSwitch lang={lang} label={t.nav.langSwitchLabel} />
        </div>
      </header>

      <main>
        <section
          id="inicio"
          aria-labelledby="hero-name"
          className="relative isolate min-h-[calc(100svh-3.5rem)] overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src="/diego-echeverria.jpg"
              alt={t.hero.photoAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_20%]"
            />
            <div className="hero-plane absolute inset-0" aria-hidden />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-6xl flex-col justify-end px-5 pb-14 pt-20 sm:px-8 sm:pb-20">
            <div className="max-w-2xl text-white">
              <p className="motion-fade-up text-sm font-medium tracking-[0.14em] text-white/75 uppercase">
                {t.hero.affiliation}
              </p>
              <h1
                id="hero-name"
                className="motion-fade-up motion-fade-up-delay mt-3 font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl md:text-6xl"
              >
                {t.hero.name}
              </h1>
              <div
                className="motion-underline mt-4 h-0.5 w-24 bg-signal-soft"
                aria-hidden
              />
              <p className="motion-fade-up motion-fade-up-delay mt-5 text-lg text-white/90 sm:text-xl">
                {t.hero.role}
              </p>
              <p className="motion-fade-up motion-fade-up-delay-2 mt-2 text-base text-white/75 sm:text-lg">
                {t.hero.focus}
              </p>
              <p className="motion-fade-up motion-fade-up-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/85">
                {t.hero.summary}
              </p>
              <div className="motion-fade-up motion-fade-up-delay-2 mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center rounded-md bg-signal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-signal-soft"
                >
                  {t.hero.cta}
                </a>
                <a
                  href="#publicaciones"
                  className="inline-flex items-center rounded-md border border-white/35 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  {t.hero.secondaryCta}
                </a>
              </div>
              <p className="mt-6 text-xs text-white/55">{t.hero.photoCredit}</p>
            </div>
          </div>
        </section>

        <section
          id="sobre"
          aria-labelledby="about-title"
          className="mx-auto max-w-6xl px-5 py-20 sm:px-8"
        >
          <p className="text-sm font-semibold tracking-[0.12em] text-teal uppercase">
            {t.nav.about}
          </p>
          <h2
            id="about-title"
            className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            {t.about.title}
          </h2>
          <div className="section-rule mt-6 max-w-xl" />
          <div className="mt-8 grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
              <p className="text-ink">{t.about.lead}</p>
              <p>{t.about.body}</p>
            </div>
            <aside className="border-l border-line pl-6">
              <h3 className="font-display text-lg font-semibold text-teal-deep">
                {t.about.rolesTitle}
              </h3>
              <ul className="mt-4 space-y-3 text-base text-ink-soft">
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
          id="investigacion"
          aria-labelledby="research-title"
          className="border-y border-line/80 bg-paper-deep/55"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <p className="text-sm font-semibold tracking-[0.12em] text-teal uppercase">
              {t.nav.research}
            </p>
            <h2
              id="research-title"
              className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              {t.research.title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-ink-soft">
              {t.research.lead}
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {t.research.items.map((item) => (
                <article
                  key={item.title}
                  className="research-card rounded-xl border border-line bg-panel/80 p-6"
                >
                  <h3 className="font-display text-xl font-semibold text-teal-deep">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="publicaciones"
          aria-labelledby="publications-title"
          className="mx-auto max-w-6xl px-5 py-20 sm:px-8"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold tracking-[0.12em] text-teal uppercase">
                {t.nav.publications}
              </p>
              <h2
                id="publications-title"
                className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
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
              className="text-sm font-semibold text-teal underline-offset-4 hover:underline"
            >
              {t.publications.scholarLabel}
            </a>
          </div>

          <ol className="mt-10 divide-y divide-line border-y border-line">
            {t.publications.items.map((pub) => (
              <li
                key={`${pub.year}-${pub.title}`}
                className="grid gap-2 py-6 sm:grid-cols-[4.5rem_1fr] sm:gap-6"
              >
                <span className="font-display text-lg font-semibold text-signal">
                  {pub.year}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{pub.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{pub.venue}</p>
                  <p className="mt-2 text-sm text-ink-soft/90">{pub.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="docencia"
          aria-labelledby="teaching-title"
          className="border-y border-line/80 bg-[#eef3f2]"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <p className="text-sm font-semibold tracking-[0.12em] text-teal uppercase">
              {t.nav.teaching}
            </p>
            <h2
              id="teaching-title"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              {t.teaching.title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-ink-soft">
              {t.teaching.lead}
            </p>
            <ul className="mt-10 space-y-5">
              {t.teaching.items.map((course) => (
                <li
                  key={course.title}
                  className="grid gap-1 border-l-2 border-teal/40 pl-5 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] sm:gap-8"
                >
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {course.title}
                  </h3>
                  <p className="text-base leading-relaxed text-ink-soft">
                    {course.detail}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-10 max-w-3xl text-base text-ink-soft">
              {t.teaching.note}
            </p>
          </div>
        </section>

        <section
          id="contacto"
          aria-labelledby="contact-title"
          className="mx-auto max-w-6xl px-5 py-20 sm:px-8"
        >
          <p className="text-sm font-semibold tracking-[0.12em] text-teal uppercase">
            {t.nav.contact}
          </p>
          <h2
            id="contact-title"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            {t.contact.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{t.contact.lead}</p>

          <div className="mt-10 grid gap-8 rounded-2xl border border-line bg-panel/70 p-7 sm:grid-cols-[1.2fr_0.8fr] sm:p-10">
            <div>
              <p className="text-sm font-semibold tracking-wide text-ink-soft uppercase">
                {t.contact.emailLabel}
              </p>
              <a
                href={`mailto:${t.contact.email}`}
                className="mt-2 inline-block font-display text-2xl font-semibold text-teal-deep underline-offset-4 hover:underline"
              >
                {t.contact.email}
              </a>
              <p className="mt-4 text-base text-ink-soft">{t.contact.location}</p>
              <a
                href={`mailto:${t.contact.email}`}
                className="mt-8 inline-flex items-center rounded-md bg-teal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-deep"
              >
                {t.contact.cta}
              </a>
            </div>
            <div className="space-y-4 border-t border-line pt-6 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8">
              <a
                href={t.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base font-semibold text-ink hover:text-teal"
              >
                {t.contact.linkedinLabel}
              </a>
              <a
                href={t.contact.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base font-semibold text-ink hover:text-teal"
              >
                {t.contact.scholarLabel}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-paper-deep/70">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-sm text-ink-soft sm:px-8">
          <p>{t.footer.rights}</p>
          <LanguageSwitch lang={lang} label={t.nav.langSwitchLabel} />
        </div>
      </footer>
    </div>
  );
}
