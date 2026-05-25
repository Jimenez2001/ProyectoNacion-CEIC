"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect } from "react";

const projectInfo = {
  name: "Corrupción en el Sistema de Salud y Vulneración al Derecho a la Vida",
  shortName: "Proyecto de Nación",
  school: "Centro Educativo Integral Cristiano -CEIC-",
  career: "Bachillerato en Ciencias y Letras con Orientación en Computación",
  advisor: "Waleska Fabiola Martínez Oxon",
  community: "Comunidad No. 16",
  date: "Guatemala, mayo de 2026",
  members: [
    { name: "Joel Fernando Contreras Cabrera", instagram: "joel__contr" },
    { name: "Astrid Marielos Cerón Duarte", instagram: "astrid_ceron09" },
    {
      name: "Deredic José Luis Erfidio Martínez Córdova",
      instagram: "dmm__mc",
    },
    { name: "Hillary Dayanara Pérez Vásquez", instagram: "hillaryy_pv" },
    { name: "Jeisy Regina Hernández Herrera", instagram: "jjey.h" },
    { name: "Doris Maybelí Martínez Ortiz", instagram: "maybeli.mx" },
    { name: "Juan Julio Chacón Castellanos", instagram: "_jrchacon" },
    { name: "Mariana Castañeda Villanueva", instagram: "marianacastanedav" },
    { name: "Raúl Alexander Ochaeta Orantes", instagram: "r_ochaetarm" },
    { name: "Marvin Marino Veliz Cárcamo" },
  ],
};

const navItems = [
  ["Inicio", "inicio"],
  ["Introducción", "introduccion"],
  ["Objetivos", "objetivos"],
  ["Plan", "plan"],
  ["Metas", "metas"],
  ["Valores", "valores"],
  ["Galería", "galeria"],
];

const objectives = [
  "Determinar las consecuencias de la corrupción en el acceso equitativo a la atención médica y en la gestión de los recursos sanitarios.",
  "Desarrollar un plan de acción para contrarrestar y detener la corrupción en el sistema de salud.",
];

const goals = [
  {
    period: "Corto plazo",
    title: "Analizar las causas principales",
    text: "Analizar en un lapso de 3 meses cuáles son las principales causas de la corrupción en el sistema de salud del país.",
    strategy:
      "Recolectar información de fuentes confiables para comprender cómo la corrupción afecta los insumos y equipos del sistema de salud.",
  },
  {
    period: "Mediano plazo",
    title: "Fortalecer la ética en el sector salud",
    text: "Capacitar a médicos y enfermeros para evitar malos tratos hacia los ciudadanos y establecer comités de ética independientes.",
    strategy:
      "Capacitar al personal administrativo en normativas anticorrupción y mejorar progresivamente las condiciones del personal médico.",
  },
  {
    period: "Largo plazo",
    title: "Consolidar reformas transparentes",
    text: "Impulsar una reforma legal que sancione con severidad a empresas y funcionarios corruptos.",
    strategy:
      "Introducir educación cívica y ética médica desde la formación universitaria, promoviendo la salud como derecho humano fundamental.",
  },
];

const actionPlan = [
  {
    meta: "Analizar las causas de corrupción en salud",
    action: "Recolectar información en fuentes confiables, sitios web, libros y bibliotecas.",
    resources: "Dispositivos electrónicos, internet y libros.",
    place: "Sitios web y bibliotecas.",
    budget: "Gratis",
  },
  {
    meta: "Capacitar al personal médico y administrativo",
    action: "Impulsar capacitaciones sobre normativas anticorrupción, ética profesional y trato digno.",
    resources: "Personas calificadas para impartir capacitaciones.",
    place: "Centros médicos.",
    budget: "Varía según salarios y capacitadores.",
  },
  {
    meta: "Fortalecer la educación cívica y ética",
    action: "Introducir programas de ética médica y educación ciudadana en la formación profesional.",
    resources: "Profesores y material educativo.",
    place: "Universidades e instituciones educativas.",
    budget: "Salario de profesores y recursos académicos.",
  },
];

const values = [
  {
    title: "Respeto",
    text: "Reconocer la dignidad, los derechos y las cualidades de cada persona para convivir de manera sana y armoniosa.",
  },
  {
    title: "Responsabilidad",
    text: "Actuar correctamente, pensar en las consecuencias de las decisiones y responder por los actos propios.",
  },
  {
    title: "Honestidad",
    text: "Comportarse con sinceridad, justicia y rectitud, rechazando el engaño y la corrupción.",
  },
  {
    title: "Solidaridad",
    text: "Colaborar, apoyar y unirse a las necesidades de otras personas, especialmente en situaciones difíciles.",
  },
  {
    title: "Autodeterminación",
    text: "Decidir con responsabilidad sobre los temas que afectan el futuro personal, comunitario y nacional.",
  },
];

const concepts = [
  {
    title: "Corrupción",
    definition:
      "Fenómeno que toma recursos colectivos para beneficiar intereses particulares, debilita la confianza en las instituciones y afecta con mayor fuerza a quienes menos tienen.",
  },
  {
    title: "Sistema de salud",
    definition:
      "Organización de instituciones, servicios y personas encargadas de proteger y mejorar la salud de la población mediante hospitales, centros de salud, personal médico y programas de prevención.",
  },
  {
    title: "Derecho a la vida",
    definition:
      "Derecho fundamental reconocido por la Constitución de Guatemala, que obliga al Estado a proteger la vida, la seguridad, la integridad física y los derechos esenciales de cada persona.",
  },
  {
    title: "Servicio público",
    definition:
      "Servicio que debe satisfacer necesidades básicas de la población, como salud, educación, seguridad, agua y energía, garantizando acceso eficiente, continuo e igualitario.",
  },
  {
    title: "Ética profesional",
    definition:
      "Conjunto de principios, valores y normas que orientan a los profesionales para actuar con responsabilidad, honestidad, respeto y buen servicio hacia la sociedad.",
  },
  {
    title: "Participación ciudadana",
    definition:
      "Acción de la población para supervisar, exigir rendición de cuentas y contribuir a decisiones públicas que protejan el bien común y reduzcan prácticas corruptas.",
  },
];

const suggestions = [
  {
    audience: "Autoridades",
    text: "Fortalecer la transparencia en compras, auditorías y distribución de medicamentos.",
  },
  {
    audience: "Comunidad",
    text: "Participar, denunciar abusos y exigir rendición de cuentas a las instituciones.",
  },
  {
    audience: "Jóvenes",
    text: "Practicar valores ciudadanos y promover una cultura contra la corrupción.",
  },
  {
    audience: "Instituciones educativas",
    text: "Formar estudiantes con ética, pensamiento crítico y compromiso social.",
  },
];

const changeRoute = [
  {
    label: "Observar",
    text: "Identificar cómo se manifiesta la corrupción en el acceso a medicamentos, atención y recursos.",
  },
  {
    label: "Comprender",
    text: "Analizar causas, consecuencias y actores involucrados en el sistema de salud.",
  },
  {
    label: "Proponer",
    text: "Plantear acciones de transparencia, ética y participación ciudadana.",
  },
  {
    label: "Transformar",
    text: "Promover una cultura donde la salud sea vista como derecho humano fundamental.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  children,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  inverted?: boolean;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p
        className={`text-sm font-semibold uppercase tracking-[0.18em] ${
          inverted ? "text-amber-300" : "text-emerald-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-bold sm:text-4xl ${
          inverted ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {children ? (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${
            inverted ? "text-emerald-50" : "text-slate-600"
          }`}
        >
          {children}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.14 },
    );

    revealItems.forEach((item) => observer.observe(item));

    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        progress.toString(),
      );
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f7faf8] text-slate-900">
      <div className="fixed left-0 top-0 z-[60] h-1 w-full origin-left scale-x-[var(--scroll-progress)] bg-emerald-600" />
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/92 backdrop-blur">
        <nav className="mx-auto max-w-7xl px-5 py-4 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <a href="#inicio" className="font-bold text-slate-950">
              {projectInfo.shortName}
            </a>
            <div className="hidden items-center gap-1 lg:flex">
              {navItems.map(([label, href]) => (
                <a
                  key={href}
                  href={`#${href}`}
                  className="px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800"
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <details className="group relative lg:hidden">
                <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center border border-slate-300 bg-white text-slate-950 transition hover:border-emerald-700 hover:text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 [&::-webkit-details-marker]:hidden">
                  <span className="sr-only">Abrir menú</span>
                  <span className="flex w-5 flex-col gap-1.5">
                    <span className="h-0.5 w-full bg-current transition group-open:translate-y-2 group-open:rotate-45" />
                    <span className="h-0.5 w-full bg-current transition group-open:opacity-0" />
                    <span className="h-0.5 w-full bg-current transition group-open:-translate-y-2 group-open:-rotate-45" />
                  </span>
                </summary>
                <div
                  id="mobile-menu"
                  className="absolute right-0 top-14 w-[min(82vw,320px)] border border-slate-200 bg-white p-2 shadow-xl"
                >
                  <div className="grid gap-1">
                    {navItems.map(([label, href]) => (
                      <a
                        key={href}
                        href={`#${href}`}
                        className="block px-4 py-3 text-base font-semibold text-slate-800 transition hover:bg-emerald-50 hover:text-emerald-800"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </details>
            </div>
          </div>
        </nav>
      </header>

      <section
        id="inicio"
        className="relative min-h-[calc(100svh-76px)] overflow-hidden px-5 py-16 text-white lg:px-8"
      >
        <Image
          src="/img/proyectonacion.jpeg"
          alt="Fotografía del grupo de seminaristas del Proyecto de Nación"
          fill
          priority
          sizes="100vw"
          className="hero-photo object-cover object-[58%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/94 via-slate-950/68 to-slate-950/18" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/70 to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(100svh-260px)] max-w-7xl flex-col justify-center">
          <p className="mb-5 w-fit border border-white/30 bg-white/12 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] backdrop-blur" data-reveal>
            {projectInfo.school}
          </p>
          <h1 className="max-w-5xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl" data-reveal style={{ "--reveal-delay": "110ms" } as CSSProperties}>
            {projectInfo.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100" data-reveal style={{ "--reveal-delay": "220ms" } as CSSProperties}>
            Proyecto de Nación elaborado por seminaristas de {projectInfo.career}, orientado a analizar cómo la corrupción afecta la salud pública y vulnera el derecho a la vida en Guatemala.
          </p>
          <div className="mt-8 grid max-w-4xl gap-3 text-sm font-semibold sm:grid-cols-3" data-reveal style={{ "--reveal-delay": "330ms" } as CSSProperties}>
            <div className="interactive-card border border-white/20 bg-white/12 p-4 backdrop-blur">
              <span className="block text-slate-300">Comunidad</span>
              {projectInfo.community}
            </div>
            <div className="interactive-card border border-white/20 bg-white/12 p-4 backdrop-blur">
              <span className="block text-slate-300">Asesora</span>
              {projectInfo.advisor}
            </div>
            <div className="interactive-card border border-white/20 bg-white/12 p-4 backdrop-blur">
              <span className="block text-slate-300">Fecha</span>
              {projectInfo.date}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-5 py-6 lg:px-8" data-reveal>
        <div className="mx-auto grid max-w-7xl gap-4 text-center sm:grid-cols-3">
          {[
            ["10", "Seminaristas"],
            ["3", "Metas principales"],
            ["7", "Secciones evaluables"],
          ].map(([value, label]) => (
            <div key={label} className="interactive-card shine-surface border border-slate-200 bg-slate-50 px-5 py-4">
              <p className="text-3xl font-black text-emerald-800">{value}</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-[0.7fr_1.3fr]">
          <div data-reveal="left">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Autores
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              Integrantes del grupo
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" data-reveal="right">
            {projectInfo.members.map((member, index) => (
              <div
                key={member.name}
                className="interactive-card group/member relative flex min-h-36 flex-col overflow-hidden border border-slate-200 bg-white p-4 text-slate-800"
                style={{ "--reveal-delay": `${index * 35}ms` } as CSSProperties}
              >
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/45 to-transparent" />
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white transition group-hover/member:bg-emerald-700">
                    {member.name
                      .split(" ")
                      .slice(0, 2)
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-bold leading-6 text-slate-950">
                      {member.name}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Seminarista
                    </p>
                  </div>
                </div>
                {member.instagram ? (
                  <a
                    href={`https://www.instagram.com/${member.instagram}/`}
                    target="_blank"
                    rel="noreferrer"
                    className="group/ig mt-auto inline-flex w-full items-center justify-between gap-3 rounded-full border border-pink-200 bg-gradient-to-r from-pink-50 via-white to-amber-50 px-4 py-2.5 text-sm font-bold text-pink-700 transition hover:-translate-y-0.5 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-900/10"
                    aria-label={`Abrir Instagram de ${member.name}`}
                  >
                    <span className="inline-flex min-w-0 items-center gap-2">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600 via-pink-500 to-amber-400 text-white shadow-sm">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-4 w-4 fill-none stroke-current stroke-2"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="5" />
                          <circle cx="12" cy="12" r="4" />
                          <circle
                            cx="17.5"
                            cy="6.5"
                            r="1"
                            className="fill-current stroke-0"
                          />
                        </svg>
                      </span>
                      <span className="truncate">@{member.instagram}</span>
                    </span>
                    <span className="text-pink-400 transition group-hover/ig:translate-x-1">
                      →
                    </span>
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="introduccion" className="px-5 py-20 lg:px-8" data-reveal>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader eyebrow="01" title="Introducción">
              El sistema de salud en Guatemala enfrenta problemas que afectan a la población, especialmente cuando la corrupción impide que los recursos lleguen a quienes más los necesitan.
            </SectionHeader>
          </div>
          <div className="space-y-6" data-reveal="right">
            <article className="interactive-card border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-950">
                Problema central
              </h3>
              <p className="mt-4 leading-8 text-slate-700">
                La corrupción provoca que muchos recursos no sean utilizados correctamente y que las personas no reciban la atención médica que necesitan. Esto se refleja en la falta de medicamentos, mala atención en hospitales y centros de salud, y dificultades para acceder a tratamientos.
              </p>
            </article>
            <article className="interactive-card border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-950">
                Justificación
              </h3>
              <p className="mt-4 leading-8 text-slate-700">
                Esta investigación busca comprender cómo la corrupción afecta la calidad de vida de los guatemaltecos, provoca falta de medicamentos, mala atención médica y vulnera el derecho a la vida. También permite crear conciencia y motivar a la sociedad a preocuparse por la situación del sistema de salud.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="objetivos" className="bg-white px-5 py-20 lg:px-8" data-reveal>
        <SectionHeader eyebrow="02" title="Objetivos">
          La investigación organiza sus acciones alrededor de un objetivo general y dos objetivos específicos relacionados con la transparencia, la salud y la vida.
        </SectionHeader>
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="interactive-card shine-surface bg-emerald-800 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">
              Objetivo general
            </p>
            <h3 className="mt-4 text-3xl font-bold">
              Analizar y reflexionar acerca de las causas principales de la corrupción en el sistema de salud del país.
            </h3>
          </article>
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div key={objective} className="interactive-card border border-slate-200 border-l-sky-700 border-l-4 bg-slate-50 p-6">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-sky-800">
                  Objetivo específico {index + 1}
                </p>
                <p className="mt-3 text-lg font-semibold leading-8 text-slate-900">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white lg:px-8" data-reveal>
        <div className="float-soft absolute right-8 top-8 hidden h-24 w-24 border border-emerald-300/20 lg:block" />
        <div className="float-soft absolute bottom-10 left-10 hidden h-16 w-16 border border-amber-300/20 lg:block" style={{ animationDelay: "1.2s" }} />
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <article className="interactive-card border border-white/15 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
              Visión
            </p>
            <h2 className="mt-4 text-3xl font-bold">
              Una Guatemala con un sistema de salud confiable, seguro y transparente.
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Se aspira a una nación libre de corrupción en el sistema de salud, donde se priorice el derecho a la vida, las personas reciban atención médica digna y los centros de salud cuenten con equipo e insumos necesarios.
            </p>
          </article>
          <article className="interactive-card border border-white/15 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Misión
            </p>
            <h2 className="mt-4 text-3xl font-bold">
              Fortalecer la salud pública con prácticas transparentes, eficientes y responsables.
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              El proyecto busca promover una gestión de recursos públicos orientada al bienestar de cada guatemalteco, recuperando la confianza en el sistema de salud mediante ética, responsabilidad y servicio.
            </p>
          </article>
        </div>
      </section>

      <section id="plan" className="px-5 py-20 lg:px-8" data-reveal>
        <SectionHeader eyebrow="03" title="Plan de acción">
          El plan resume metas, acciones, recursos y lugares donde podrían ejecutarse las propuestas planteadas por el grupo.
        </SectionHeader>
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {actionPlan.map((item, index) => (
            <article key={item.meta} className="interactive-card border border-slate-200 bg-white p-7 shadow-sm">
              <span className="text-4xl font-black text-emerald-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-2xl font-bold text-slate-950">
                {item.meta}
              </h3>
              <p className="mt-4 leading-8 text-slate-700">{item.action}</p>
              <dl className="mt-6 space-y-3 text-sm">
                <div>
                  <dt className="font-bold text-slate-950">Recursos</dt>
                  <dd className="text-slate-600">{item.resources}</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-950">Lugar</dt>
                  <dd className="text-slate-600">{item.place}</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-950">Presupuesto</dt>
                  <dd className="text-slate-600">{item.budget}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section id="metas" className="bg-white px-5 py-20 lg:px-8" data-reveal>
        <SectionHeader eyebrow="04" title="Metas">
          Las metas plantean resultados alcanzables en corto, mediano y largo plazo para enfrentar la corrupción en el sistema de salud.
        </SectionHeader>
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {goals.map((goal) => (
            <article key={goal.period} className="interactive-card border border-slate-200 border-t-emerald-700 border-t-4 bg-slate-50 p-7">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-800">
                {goal.period}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">
                {goal.title}
              </h3>
              <p className="mt-4 leading-8 text-slate-700">{goal.text}</p>
              <p className="mt-5 text-sm font-semibold leading-7 text-slate-600">
                Estrategia: {goal.strategy}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-emerald-900 px-5 py-20 text-white lg:px-8" data-reveal>
        <SectionHeader eyebrow="Especial" title="Ruta del cambio" inverted>
          Una lectura visual del proceso que propone el proyecto: pasar de reconocer el problema a imaginar soluciones posibles para Guatemala.
        </SectionHeader>
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {changeRoute.map((item, index) => (
            <article
              key={item.label}
              className="interactive-card relative border border-white/15 bg-white/10 p-6 backdrop-blur"
              style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
            >
              <div className="pulse-soft mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-amber-300 font-black text-slate-950">
                {index + 1}
              </div>
              <h3 className="text-2xl font-bold">{item.label}</h3>
              <p className="mt-4 leading-7 text-emerald-50">{item.text}</p>
              {index < changeRoute.length - 1 ? (
                <div className="absolute -right-4 top-12 hidden h-0.5 w-8 bg-amber-300 md:block" />
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8" data-reveal>
        <SectionHeader eyebrow="05" title="Marco conceptual">
          Conceptos principales que ayudan a comprender el problema investigado y su relación con la ciudadanía.
        </SectionHeader>
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => (
            <article
              key={concept.title}
              tabIndex={0}
              className="group interactive-card shine-surface min-h-44 cursor-pointer border border-slate-800 bg-slate-950 px-6 py-5 text-white shadow-sm outline-none focus:border-emerald-400"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-bold">{concept.title}</h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-lg font-bold text-emerald-300 transition group-hover:rotate-45 group-hover:border-amber-300 group-hover:text-amber-300 group-focus:rotate-45 group-focus:border-amber-300 group-focus:text-amber-300">
                  +
                </span>
              </div>
              <p className="mt-5 max-h-0 overflow-hidden text-sm leading-7 text-slate-200 opacity-0 transition-all duration-300 group-hover:max-h-48 group-hover:opacity-100 group-focus:max-h-48 group-focus:opacity-100">
                {concept.definition}
              </p>
              <p className="mt-5 text-sm font-semibold text-emerald-300 transition group-hover:text-amber-300 group-focus:text-amber-300">
                Pasa el mouse o toca para leer
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="valores" className="bg-white px-5 py-20 lg:px-8" data-reveal>
        <SectionHeader eyebrow="06" title="Valores ciudadanos">
          Valores que promueve el proyecto para construir una sociedad más justa, honesta y comprometida.
        </SectionHeader>
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => (
            <article key={value.title} className="interactive-card border border-slate-200 border-t-emerald-700 border-t-4 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-slate-950">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {value.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="sugerencias" className="px-5 py-20 lg:px-8" data-reveal>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="interactive-card bg-slate-950 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
              Reflexiones
            </p>
            <h2 className="mt-4 text-3xl font-bold">
              Comentarios de los seminaristas
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Este proyecto permitió comprender la delicada situación del sistema de salud y reconocer que erradicar la corrupción requiere acciones constantes, valores ciudadanos y participación de todos los guatemaltecos.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              El grupo agradece el acompañamiento de la asesora Waleska Martínez y expresa el deseo de que Guatemala pueda avanzar hacia un sistema más justo y humano.
            </p>
          </article>
          <article className="interactive-card bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Sugerencias
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-950">
              Recomendaciones para actuar
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {suggestions.map((item) => (
                <div key={item.audience} className="interactive-card border border-slate-200 p-4">
                  <h3 className="font-bold text-slate-950">{item.audience}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="galeria" className="bg-white px-5 py-20 lg:px-8" data-reveal>
        <SectionHeader eyebrow="07" title="Galería multimedia">
          Recursos visuales para reforzar la presentación del Proyecto de Nación.
        </SectionHeader>
        <div className="mx-auto max-w-5xl">
          <figure className="interactive-card overflow-hidden bg-slate-100 shadow-sm">
            <Image
              src="/img/proyectonacion.jpeg"
              alt="Grupo de seminaristas del Centro Educativo Integral Cristiano"
              width={1200}
              height={1600}
              className="h-full max-h-[720px] w-full object-cover object-center"
            />
            <figcaption className="bg-white p-4 font-semibold text-slate-800">
              Fotografía del grupo de seminaristas
            </figcaption>
          </figure>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-10 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-bold">{projectInfo.shortName}</p>
            <p className="mt-1 text-sm text-slate-400">
              {projectInfo.school} | {projectInfo.date}
            </p>
          </div>
          <a
            href="#inicio"
            className="inline-flex w-fit bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
          >
            Volver al inicio
          </a>
        </div>
      </footer>
    </main>
  );
}
