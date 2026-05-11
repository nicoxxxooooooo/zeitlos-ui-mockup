"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bell,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Flame,
  Library,
  Search,
  ShieldAlert,
  UserCircle,
} from "lucide-react";
import { seriesCatalog } from "@/lib/series-data";

const heroSeries = [
  {
    title: "Usuzumi No Hate",
    status: "Ongoing",
    type: "Manga",
    description: "A girl walks alone in a world without humans. Her mission is to search for survivors and cleanse the land. Will humans be found? A story of loneliness and beautiful ruins.",
    image: "/covers/usuzumi.png",
    gradient: "from-slate-950 via-zinc-900 to-black",
  },
  {
    title: "I'll Become a Villainess Who Goes Down in History",
    status: "Ongoing",
    type: "Manga",
    description: "I was reincarnated as my favorite otome-game villainess. To become the number one villainess who will go down in history, I need to be strong and intelligent. But the more villainous I become, the more the prince seems to like me.",
    image: "/covers/villainess.png",
    gradient: "from-rose-950 via-zinc-900 to-black",
  },
  {
    title: "Since My Fiance Seems to Hate Me, I Tried to Leave, Only to Be Objected",
    status: "Ongoing",
    type: "Manga",
    description: "Clarissa, the daughter of the Marquis of Merriam, is scorned in high society and called Cinderella. Lacking confidence and feeling she has no place at home, she meets a young man at a party before being summoned to the royal castle by Prince Lucas.",
    image: "/covers/fiance.png",
    gradient: "from-blue-950 via-zinc-900 to-black",
  },
];

const popularSeries = [
  ["Usuzumi No Hate", "Manga", "/covers/usuzumi.png"],
  ["I'll Become a Villainess Who Goes Down in History", "Manga", "/covers/villainess.png"],
  ["Since My Fiance Seems to Hate Me, I Tried to Leave, Only to Be Objected", "Manga", "/covers/fiance.png"],
  ["Oitekebori", "Oneshot", "/covers/oitekebori.png"],
  ["The Colour of Sunrise", "Oneshot", "/covers/sunrise.png"],
  ["Dominant", "Manga", "/covers/dominant.jpg"],
  ["Puppet", "Oneshot", "/covers/puppet.jpg"],
  ["Phenomeno", "Novel", "/covers/phenomeno.jpg"],
  ["Ryusa No Ori", "Novel", "/covers/ryusa.png"],
];

const novels = [
  {
    title: "Phenomeno",
    status: "Completed",
    format: "Novel",
    seriesCredit: "Zeitlos TL",
    genres: ["Gore", "Psychological", "Mystery", "Horror", "Sci-Fi"],
    description: "Nagito Yamada is a university student searching for a cheap place to live. He finds a mysterious house that grants wishes listed for an unbelievably low rent and moves in. Soon, strange creaking noises begin tormenting him each night, and a number carved into the wall starts counting down.",
    image: "/covers/phenomeno.jpg",
    gradient: "from-neutral-950 via-zinc-900 to-black",
  },
  {
    title: "Ryusa No Ori",
    status: "Completed",
    format: "Novel",
    seriesCredit: "Zeitlos TL",
    genres: ["Action", "Adventure", "Drama", "Fantasy", "Romance", "School Life"],
    description: "Solminati Academy is a place for youngsters with dreams, hopes, and ambitions. A boy enters the academy to support his beloved's dream, but his ability never improves, he is mocked, isolated, and separated from the one he loves. Then an encounter with an old woman begins to change him.",
    image: "/covers/ryusa.png",
    gradient: "from-indigo-950 via-zinc-900 to-black",
  },
];

const latestReleases = [
  {
    title: "Usuzumi No Hate",
    type: "Manga",
    status: "Ongoing",
    rating: "ZS",
    image: "/covers/usuzumi.png",
    gradient: "from-slate-950 via-zinc-900 to-black",
    chapters: [["Chapter 33", "New"], ["Chapter 32", "1 week ago"], ["Chapter 31", "2 weeks ago"]],
  },
  {
    title: "Ryusa No Ori",
    type: "Novel",
    status: "Completed",
    rating: "ZS",
    image: "/covers/ryusa.png",
    gradient: "from-indigo-950 via-zinc-900 to-black",
    chapters: [["Chapter 14", "New"], ["Chapter 13", "4 days ago"], ["Chapter 12", "1 week ago"]],
  },
  {
    title: "I'll Become a Villainess Who Goes Down in History",
    type: "Manga",
    status: "Ongoing",
    rating: "ZS",
    image: "/covers/villainess.png",
    gradient: "from-rose-950 via-zinc-900 to-black",
    chapters: [["Chapter 24", "New"], ["Chapter 23", "1 week ago"], ["Chapter 22", "2 weeks ago"]],
  },
  {
    title: "Phenomeno",
    type: "Novel",
    status: "Completed",
    rating: "ZS",
    image: "/covers/phenomeno.jpg",
    gradient: "from-neutral-950 via-zinc-900 to-black",
    chapters: [["Chapter 3 - Flow", "New"], ["Chapter 2 - Flow", "3 days ago"], ["Chapter 1 - Flow", "1 week ago"]],
  },
  {
    title: "Since My Fiance Seems to Hate Me, I Tried to Leave, Only to Be Objected",
    type: "Manga",
    status: "Ongoing",
    rating: "ZS",
    image: "/covers/fiance.png",
    gradient: "from-blue-950 via-zinc-900 to-black",
    chapters: [["Chapter 4", "New"], ["Chapter 3", "1 week ago"], ["Chapter 2", "2 weeks ago"]],
  },
  {
    title: "Oitekebori",
    type: "Oneshot",
    status: "Completed",
    rating: "ZS",
    image: "/covers/oitekebori.png",
    gradient: "from-amber-950 via-zinc-900 to-black",
    chapters: [["Oneshot", "Complete"]],
  },
];

function LogoMark({ footer = false }: { footer?: boolean }) {
  return (
    <span
      className={`relative grid shrink-0 place-items-center rounded-full border border-white/10 bg-[#090909] shadow-[0_0_22px_rgba(177,18,25,0.22)] ${
        footer ? "size-14" : "size-11"
      }`}
    >
      <span className="absolute inset-[-7px] -z-10 rounded-full bg-[#8f1016]/30 blur-xl" />
      <span className="absolute inset-1 rounded-full border border-[#8f1016]/25 bg-gradient-to-br from-white/[0.08] to-transparent" />
      <Image
        src="/logo.png"
        alt="Zeitlos Scans logo"
        width={footer ? 36 : 28}
        height={footer ? 36 : 28}
        loading={footer ? "lazy" : undefined}
        className={`relative w-auto object-contain drop-shadow-[0_0_12px_rgba(177,18,25,0.35)] ${
          footer ? "h-9" : "h-7"
        }`}
      />
    </span>
  );
}

function DiscordIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M19.54 5.23a16.9 16.9 0 0 0-4.18-1.3.06.06 0 0 0-.07.03c-.18.33-.39.76-.53 1.1a15.7 15.7 0 0 0-4.72 0c-.14-.35-.35-.77-.54-1.1a.07.07 0 0 0-.07-.03 16.8 16.8 0 0 0-4.18 1.3.06.06 0 0 0-.03.02C2.57 9.22 1.85 13.1 2.2 16.93c0 .02.02.04.03.05a16.96 16.96 0 0 0 5.13 2.59c.03 0 .06 0 .08-.03.4-.54.75-1.12 1.05-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08 0-.1l.33-.26c.02-.02.05-.02.07-.01a12.14 12.14 0 0 0 10.39 0c.02-.01.05 0 .07.01l.33.26c.04.03.04.08 0 .1-.52.3-1.07.56-1.64.78-.04.01-.06.06-.04.09.3.62.65 1.2 1.05 1.74.02.03.05.04.08.03A16.9 16.9 0 0 0 22.58 17c.02-.02.03-.03.04-.06.42-4.42-.7-8.27-3.05-11.67a.05.05 0 0 0-.03-.03ZM9.35 14.6c-1 0-1.82-.92-1.82-2.04 0-1.13.8-2.04 1.82-2.04 1.01 0 1.83.92 1.82 2.04 0 1.12-.8 2.04-1.82 2.04Zm6.12 0c-1 0-1.82-.92-1.82-2.04 0-1.13.8-2.04 1.82-2.04 1.01 0 1.83.92 1.82 2.04 0 1.12-.8 2.04-1.82 2.04Z" />
    </svg>
  );
}

function IconButton({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <button
      aria-label={label}
      className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-zinc-400 transition duration-300 hover:border-[#b11219]/45 hover:bg-[#b11219]/10 hover:text-[#f3f3f3] hover:shadow-[0_0_20px_rgba(177,18,25,0.24)]"
    >
      {children}
    </button>
  );
}

function Chip({ children, red = false }: { children: React.ReactNode; red?: boolean }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-[11px] font-medium uppercase ${
        red ? "bg-[#b11219] text-[#f3f3f3]" : "border border-white/10 bg-white/10 text-zinc-300"
      }`}
    >
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[22px] font-semibold tracking-tight text-[#f3f3f3]">{children}</h2>;
}

function seriesHref(title: string) {
  const series = seriesCatalog.find((item) => item.title === title);
  return series ? `/series/${series.slug}` : "/series";
}

export default function Home() {
  const [activeHero, setActiveHero] = useState(1);
  const [heroPaused, setHeroPaused] = useState(false);
  const [navHidden, setNavHidden] = useState(false);

  const heroSlides = useMemo(() => {
    const previous = (activeHero + heroSeries.length - 1) % heroSeries.length;
    const next = (activeHero + 1) % heroSeries.length;

    return [heroSeries[previous], heroSeries[activeHero], heroSeries[next]];
  }, [activeHero]);

  useEffect(() => {
    if (heroPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroSeries.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [heroPaused]);

  useEffect(() => {
    let previousY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setNavHidden(currentY > previousY && currentY > 96);
      previousY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const moveHero = (direction: -1 | 1) => {
    setActiveHero((current) => (current + direction + heroSeries.length) % heroSeries.length);
  };

  return (
    <main className="min-h-screen bg-[#050505] font-sans text-[#ededed]">
      <style>
        {`
          @keyframes cover-breathe {
            0%, 100% { transform: scale(1.03); }
            50% { transform: scale(1.075); }
          }
          @keyframes popular-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 px-3 pt-3 transition-transform duration-500 ${
          navHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_50%_0%,rgba(177,18,25,0.14),transparent_58%)]" />
        <div className="relative mx-auto flex h-16 max-w-[1800px] items-center justify-between rounded-3xl border border-white/10 bg-black/62 px-4 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:px-6 lg:px-7">
          <a href="#" className="flex items-center gap-4">
            <LogoMark />
            <span className="text-[17px] font-bold tracking-[-0.02em] text-[#f3f3f3]">
              Zeitlos Scans
            </span>
          </a>

          <div className="hidden rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
            <Link href="/series" className="inline-flex items-center gap-2 rounded-full px-7 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/10 hover:text-[#f3f3f3]">
              <BookOpen className="size-4" />
              Series
            </Link>
            <a href="#library" className="inline-flex items-center gap-2 rounded-full px-7 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/10 hover:text-[#f3f3f3]">
              <Library className="size-4" />
              Library
            </a>
          </div>

          <div className="flex items-center gap-2">
            <IconButton label="Search"><Search className="size-4" /></IconButton>
            <IconButton label="Notifications"><Bell className="size-4" /></IconButton>
            <IconButton label="Profile"><UserCircle className="size-5" /></IconButton>
          </div>
        </div>
      </nav>

      <section
        className="mx-auto max-w-[1800px] px-4 pt-24 sm:px-6 lg:px-8"
        onMouseEnter={() => setHeroPaused(true)}
        onMouseLeave={() => setHeroPaused(false)}
      >
        <div className="relative">
          <button
            aria-label="Previous hero"
            onClick={() => moveHero(-1)}
            className="absolute left-4 top-1/2 z-20 hidden size-11 -translate-y-1/2 place-items-center rounded-2xl border border-white/10 bg-black/60 text-[#f3f3f3] backdrop-blur transition hover:bg-[#c91f2f] lg:grid"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            aria-label="Next hero"
            onClick={() => moveHero(1)}
            className="absolute right-4 top-1/2 z-20 hidden size-11 -translate-y-1/2 place-items-center rounded-2xl border border-white/10 bg-black/60 text-[#f3f3f3] backdrop-blur transition hover:bg-[#c91f2f] lg:grid"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="grid gap-4 lg:grid-cols-[1fr_1.16fr_1fr]">
            {heroSlides.map((series, index) => (
              <Link
                key={series.title}
                href={seriesHref(series.title)}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${series.gradient} shadow-2xl shadow-black/40 transition duration-300 hover:-translate-y-1 hover:border-[#b11219]/30 ${
                  index === 1 ? "h-[470px] lg:h-[520px]" : "hidden h-[470px] opacity-75 lg:mt-6 lg:block"
                }`}
              >
                <Image
                  src={series.image}
                  alt={`${series.title} cover`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 34vw"
                  className="absolute inset-0 h-full w-full scale-[1.03] object-cover transition duration-500 motion-safe:animate-[cover-breathe_18s_ease-in-out_infinite] motion-safe:group-hover:animate-none group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex min-h-[216px] flex-col justify-end p-5 sm:p-6 lg:min-h-[232px] lg:p-8">
                  <div className="mb-2.5 flex flex-wrap gap-2">
                    <Chip red>{series.type}</Chip>
                    <Chip>{series.status}</Chip>
                  </div>
                  <h1 className="line-clamp-2 max-w-xl text-[28px] font-bold leading-[1.08] tracking-tight text-[#f3f3f3] sm:text-3xl lg:text-[38px]">{series.title}</h1>
                  <p className="mt-1.5 line-clamp-2 min-h-[48px] max-w-2xl text-sm font-normal leading-6 text-zinc-300 lg:text-[15px]">{series.description}</p>
                  <span className="mt-5 w-fit rounded-2xl bg-[#b11219] px-5 py-2.5 text-sm font-semibold text-[#f3f3f3] transition group-hover:bg-[#c91f2f]">
                    Read Now
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {heroSeries.map((series, index) => (
            <button
              key={series.title}
              aria-label={`Show ${series.title}`}
              onClick={() => setActiveHero(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeHero ? "w-8 bg-[#b11219]" : "w-2 bg-white/25 hover:bg-white/45"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1800px] px-6 py-7 lg:px-8">
        <div className="mb-4 flex items-center gap-2">
          <Flame className="size-5 text-[#b11219]" />
          <SectionTitle>Popular Today</SectionTitle>
        </div>
        <div className="overflow-hidden pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-4 [animation:popular-marquee_68s_linear_infinite] hover:[animation-play-state:paused]">
            {[...popularSeries, ...popularSeries].map(([title, status, image], index) => (
              <Link
                key={`${title}-${index}`}
                href={seriesHref(title)}
                className={`group relative aspect-[3/4] w-[230px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#b11219]/30 ${
                  index % popularSeries.length > 6 ? "lg:hidden 2xl:block" : ""
                }`}
              >
                <Image
                  src={image}
                  alt={`${title} cover`}
                  fill
                  loading="lazy"
                  sizes="230px"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent transition duration-500 group-hover:from-black group-hover:via-black/60" />
                <div className="absolute inset-x-0 bottom-0 flex min-h-[118px] translate-y-2 flex-col items-center justify-end px-5 pb-6 text-center transition duration-300 group-hover:translate-y-0">
                  <div className="mb-1.5 flex h-7 items-center justify-center">
                    <Chip>{status}</Chip>
                  </div>
                  <div className="flex h-[46px] items-center justify-center">
                    <h3 className="line-clamp-2 text-center text-lg font-semibold leading-[1.12] tracking-tight text-[#f3f3f3]">{title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1800px] gap-4 px-6 pb-9 md:grid-cols-3 lg:px-8">
        {[
          { title: "Report Issue", text: "Broken pages or missing chapters", icon: ShieldAlert, tone: "border-[#b11219]/30 bg-[#b11219]/10 text-[#c91f2f]", glow: "hover:shadow-[0_0_24px_rgba(177,18,25,0.18)]" },
          { title: "Discord", text: "Release pings and community chat", icon: DiscordIcon, tone: "border-indigo-500/25 bg-indigo-500/10 text-indigo-300", glow: "hover:shadow-[0_0_24px_rgba(99,102,241,0.16)]" },
          { title: "Ko-fi", text: "Support cleaner, faster releases", icon: Coffee, tone: "border-emerald-500/25 bg-emerald-500/10 text-emerald-300", glow: "hover:shadow-[0_0_24px_rgba(16,185,129,0.14)]" },
        ].map(({ title, text, icon: Icon, tone, glow }) => (
          <a key={title} href="#" className={`group flex h-[108px] items-center gap-4 rounded-3xl border border-white/10 bg-[#111111] px-5 transition hover:border-white/20 hover:bg-[#161616] ${glow}`}>
            <span className="flex min-w-0 items-center gap-4">
              <span className={`grid size-12 shrink-0 place-items-center rounded-2xl border ${tone}`}>
                <Icon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-base font-bold tracking-tight">{title}</span>
                <span className="mt-1 block truncate text-sm font-medium text-zinc-500">{text}</span>
              </span>
            </span>
          </a>
        ))}
      </section>

      <section id="library" className="mx-auto max-w-[1800px] px-6 pb-10 lg:px-8">
        <div className="mb-4 flex items-center gap-2">
          <BookOpen className="size-5 text-[#b11219]" />
          <SectionTitle>Novels</SectionTitle>
        </div>
        <div className="grid gap-5 xl:grid-cols-2">
          {novels.map((novel) => (
            <Link
              key={novel.title}
              href={seriesHref(novel.title)}
              className="group relative min-h-[350px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] shadow-2xl shadow-black/30 transition duration-300 hover:border-[#b11219]/25 hover:shadow-[0_0_34px_rgba(177,18,25,0.11)]"
            >
              <Image
                src={novel.image}
                alt=""
                aria-hidden="true"
                fill
                loading="lazy"
                sizes="(max-width: 1280px) 100vw, 50vw"
                className="absolute inset-0 h-full w-full scale-110 object-cover opacity-24 blur-2xl transition duration-500 group-hover:scale-115"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${novel.gradient} opacity-80`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.14),transparent_26%)]" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/35 to-black/68" />

              <div className="relative grid min-h-[350px] gap-6 p-5 sm:grid-cols-[220px_1fr] sm:p-6 lg:grid-cols-[235px_1fr] lg:p-7">
                <div className="relative mx-auto aspect-[3/4] w-full max-w-[240px] overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-2xl shadow-black/45 sm:mx-0 sm:max-w-none">
                  <Image
                    src={novel.image}
                    alt={`${novel.title} cover`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 240px, 235px"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
                  <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/55 to-transparent" />
                </div>

                <div className="flex min-w-0 flex-col justify-center py-1">
                  <div className="mb-4 flex min-h-7 flex-wrap items-center gap-2">
                    <Chip red>{novel.status}</Chip>
                    <Chip>{novel.format}</Chip>
                  </div>
                  <h3 className="line-clamp-2 min-h-[64px] text-2xl font-bold leading-tight tracking-tight text-[#f3f3f3]">
                    {novel.title}
                  </h3>
                  <p className="mt-2 line-clamp-1 min-h-5 text-sm font-medium text-zinc-400">{novel.seriesCredit}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {novel.genres.map((genre) => (
                      <span
                        key={genre}
                        className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1 text-xs font-medium text-zinc-300"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 line-clamp-2 min-h-[48px] max-w-2xl text-sm font-normal leading-6 text-zinc-300">
                    {novel.description}
                  </p>
                  <div className="mt-7 flex items-center gap-3">
                    <span className="rounded-2xl bg-[#b11219] px-5 py-2.5 text-sm font-semibold text-[#f3f3f3] transition group-hover:bg-[#c91f2f]">
                      Read Now
                    </span>
                    <span
                      aria-label={`Bookmark ${novel.title}`}
                      className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-zinc-300 transition hover:border-white/20 hover:bg-white/10 hover:text-[#f3f3f3]"
                    >
                      <BookOpen className="size-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="series" className="mx-auto max-w-[1800px] px-6 pb-14 lg:px-8">
        <div className="mb-4 flex items-center justify-between">
          <SectionTitle>Latest Releases</SectionTitle>
          <a href="#" className="text-sm font-semibold text-zinc-400 transition hover:text-[#c91f2f]">View all</a>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {latestReleases.map((release) => (
            <Link key={release.title} href={seriesHref(release.title)} className="group grid min-h-[280px] grid-cols-[128px_1fr] gap-4 rounded-3xl border border-[#27272a] bg-[#111111] p-4 transition duration-300 hover:border-[#b11219]/30 hover:bg-[#151515] hover:shadow-[0_0_24px_rgba(177,18,25,0.08)] sm:grid-cols-[174px_1fr] sm:gap-5">
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${release.gradient}`}>
                <Image
                  src={release.image}
                  alt={`${release.title} cover`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 128px, 174px"
                  className="h-full min-h-[250px] w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex min-w-0 flex-col justify-center py-1">
                <div className="mb-3 flex min-h-7 flex-wrap items-center gap-2">
                  <Chip red>{release.type}</Chip>
                  <Chip>{release.status}</Chip>
                  <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">{release.rating}</span>
                </div>
                <h3 className="line-clamp-2 min-h-[52px] text-lg font-semibold leading-tight tracking-tight text-zinc-100 sm:text-xl">{release.title}</h3>
                <div className="mt-4 space-y-1.5">
                  {release.chapters.map(([chapter, date], index) => (
                    <span key={chapter} className="flex min-h-10 items-center justify-between gap-3 rounded-xl bg-black/25 px-3.5 py-2 transition group-hover:bg-white/[0.04]">
                      <span className="flex min-w-0 items-center gap-2">
                        {index === 0 && <span className="size-2 shrink-0 rounded-full bg-[#b11219]" />}
                        <span className="line-clamp-1 text-sm font-medium text-zinc-300">{chapter}</span>
                      </span>
                      <span className="shrink-0 text-xs font-medium text-zinc-500">{date}</span>
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/95">
        <div className="mx-auto max-w-[1800px] px-6 py-11 lg:px-8">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <LogoMark footer />
              <div>
                <div className="text-lg font-bold tracking-[-0.02em] text-[#f3f3f3]">Zeitlos Scans</div>
                <p className="mt-1 text-sm font-normal text-zinc-500"> Zeitlos Scans is a small fan-driven group dedicated to translating manga we’re passionate about.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                ["Discord", DiscordIcon],
                ["Ko-fi", Coffee],
                ["DMCA", ShieldAlert],
              ].map(([label, Icon]) => (
                <a key={label as string} href="#" aria-label={label as string} className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-zinc-400 transition hover:border-[#b11219]/35 hover:bg-[#b11219]/10 hover:text-[#f3f3f3]">
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="hidden">
            <span>© 2026 Zeitlos Scans. All rights reserved.</span>
            <span>
              Developed with ♥ By{" "}
              <span className="font-bold text-[#b11219] drop-shadow-[0_0_10px_rgba(177,18,25,0.35)]">ARKEN</span>
            </span>
          </div>
          <div className="hidden">
            <span>© 2026 Zeitlos Scans. All rights reserved.</span>
            <span>
              Developed with ❤️ by{" "}
              <span className="font-bold text-[#b11219] drop-shadow-[0_0_10px_rgba(177,18,25,0.35)]">ARKEN</span>
            </span>
          </div>
          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm font-normal text-zinc-600 md:flex-row md:items-center md:justify-between">
            <span>&copy; 2026 Zeitlos Scans. All rights reserved.</span>
            <span>
              Developed with &#10084;&#65039; by{" "}
              <span className="font-bold text-[#b11219] drop-shadow-[0_0_10px_rgba(177,18,25,0.35)]">ARKEN</span>
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
