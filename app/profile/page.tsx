"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  BookOpen,
  Bookmark,
  Coffee,
  Heart,
  History,
  HomeIcon,
  LayoutDashboard,
  Library,
  LogOut,
  Search,
  ShieldAlert,
  ShieldCheck,
  UserCircle,
} from "lucide-react";
import { seriesCatalog } from "@/lib/series-data";

const activity = [
  {
    series: seriesCatalog[0],
    chapter: "Chapter 33",
    label: "Continue reading",
    progress: 72,
    time: "Today",
  },
  {
    series: seriesCatalog[7],
    chapter: "Chapter 3 - Flow",
    label: "Recently opened",
    progress: 48,
    time: "Yesterday",
  },
  {
    series: seriesCatalog[1],
    chapter: "Chapter 24",
    label: "Bookmarked",
    progress: 91,
    time: "2 days ago",
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

function IconButton({ label, children, href }: { label: string; children: React.ReactNode; href?: string }) {
  const className =
    "grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-zinc-400 transition duration-300 hover:border-[#b11219]/45 hover:bg-[#b11219]/10 hover:text-[#f3f3f3] hover:shadow-[0_0_20px_rgba(177,18,25,0.24)]";

  if (href) {
    return (
      <Link href={href} aria-label={label} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button aria-label={label} className={className}>
      {children}
    </button>
  );
}

function MobileBottomNav() {
  const items = [
    { label: "Series", href: "/series", icon: BookOpen },
    { label: "Library", href: "/#library", icon: Library },
    { label: "Home", href: "/", icon: HomeIcon },
    { label: "Alerts", href: "#", icon: Bell },
    { label: "Profile", href: "/profile", icon: UserCircle, active: true },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="grid w-full max-w-[390px] grid-cols-5 items-end rounded-[2rem] border border-white/10 bg-black/72 px-3 py-2 shadow-2xl shadow-black/55 backdrop-blur-2xl">
        {items.map(({ label, href, icon: Icon, active }) => (
          <Link
            key={label}
            href={href}
            className={`flex flex-col items-center justify-end gap-1 rounded-2xl py-1.5 text-[10px] font-semibold transition ${
              active ? "text-[#f3f3f3]" : "text-zinc-500 hover:text-[#f3f3f3]"
            }`}
          >
            <span
              className={`grid place-items-center rounded-2xl transition ${
                active
                  ? "-mt-6 size-14 border border-[#b11219]/60 bg-[#b11219] shadow-[0_0_24px_rgba(177,18,25,0.35)]"
                  : "size-9 bg-white/[0.045]"
              }`}
            >
              <Icon className={active ? "size-6" : "size-4"} />
            </span>
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <article className="group min-w-[170px] rounded-3xl border border-white/10 bg-[#111111]/95 p-4 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#b11219]/35 hover:bg-[#151515] hover:shadow-[0_0_28px_rgba(177,18,25,0.1)] sm:min-w-0 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <span className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.055] text-zinc-300 transition group-hover:border-[#b11219]/35 group-hover:bg-[#b11219]/10 group-hover:text-[#f3f3f3]">
          <Icon className="size-5" />
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-[#b11219] opacity-40 transition group-hover:opacity-100" />
      </div>
      <div className="mt-4 text-3xl font-bold tracking-tight text-[#f3f3f3]">{value}</div>
      <div className="mt-1 text-sm font-medium text-zinc-500">{label}</div>
    </article>
  );
}

export default function ProfilePage() {
  const [navHidden, setNavHidden] = useState(false);

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

  return (
    <main className="min-h-screen bg-[#050505] pb-28 font-sans text-[#ededed] md:pb-0">
      <nav
        className={`fixed left-0 right-0 top-0 z-50 px-3 pt-3 transition-transform duration-500 ${
          navHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_50%_0%,rgba(177,18,25,0.14),transparent_58%)]" />
        <div className="relative mx-auto flex h-16 max-w-[1800px] items-center justify-between rounded-3xl border border-white/10 bg-black/62 px-4 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:px-6 lg:px-7">
          <Link href="/" className="flex items-center gap-4">
            <LogoMark />
            <span className="text-[17px] font-bold tracking-[-0.02em] text-[#f3f3f3]">Zeitlos Scans</span>
          </Link>

          <div className="hidden rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
            <Link href="/series" className="inline-flex items-center gap-2 rounded-full px-7 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/10 hover:text-[#f3f3f3]">
              <BookOpen className="size-4" />
              Series
            </Link>
            <Link href="/#library" className="inline-flex items-center gap-2 rounded-full px-7 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/10 hover:text-[#f3f3f3]">
              <Library className="size-4" />
              Library
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <IconButton label="Search"><Search className="size-4" /></IconButton>
            <IconButton label="Notifications"><Bell className="size-4" /></IconButton>
            <IconButton label="Profile" href="/profile"><UserCircle className="size-5" /></IconButton>
          </div>
        </div>
      </nav>
      <MobileBottomNav />

      <section className="relative overflow-hidden pt-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_50%_0%,rgba(177,18,25,0.18),transparent_58%)]" />
        <div className="pointer-events-none absolute right-[-12%] top-24 h-80 w-80 rounded-full bg-[#b11219]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] shadow-2xl shadow-black/35">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(177,18,25,0.28),transparent_34%)]" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-[#b11219]/10" />
            <div className="relative flex flex-col gap-6 p-5 sm:p-7 lg:min-h-[300px] lg:flex-row lg:items-center lg:justify-between lg:p-9">
              <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
                <div className="relative grid size-28 shrink-0 place-items-center rounded-full border border-[#b11219]/35 bg-black/45 shadow-[0_0_34px_rgba(177,18,25,0.18)] sm:size-32">
                  <span className="absolute inset-[-10px] rounded-full bg-[#b11219]/15 blur-2xl" />
                  <span className="absolute inset-2 rounded-full border border-white/10 bg-gradient-to-br from-[#b11219]/25 to-white/[0.04]" />
                  <span className="relative text-4xl font-black tracking-tight text-[#f3f3f3] sm:text-5xl">A</span>
                </div>

                <div className="min-w-0">
                  <div className="flex flex-col items-center gap-2 sm:flex-row">
                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#f3f3f3] sm:text-5xl">
                      Arken
                    </h1>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#b11219]/35 bg-[#b11219]/12 px-3 py-1 text-xs font-semibold uppercase text-[#f3f3f3]">
                      <ShieldCheck className="size-3.5" />
                      Admin
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-zinc-400 sm:text-base">arken@zeitlos.local · @arken</p>
                  <p className="mt-1 text-sm font-medium text-zinc-500">Member since 2026</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:self-end">
                <Link href="#" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#b11219] px-5 text-sm font-semibold text-[#f3f3f3] transition hover:bg-[#c91f2f]">
                  <LayoutDashboard className="size-4" />
                  Admin Dashboard
                </Link>
                <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-5 text-sm font-semibold text-zinc-200 transition hover:border-[#b11219]/40 hover:bg-[#b11219]/10 hover:text-[#f3f3f3]">
                  <LogOut className="size-4" />
                  Sign Out
                </button>
              </div>
            </div>
          </article>

          <section className="mt-5">
            <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0">
              <StatCard label="Bookmarks" value="28" icon={Bookmark} />
              <StatCard label="History" value="143" icon={History} />
              <StatCard label="Likes" value="96" icon={Heart} />
            </div>
          </section>

          <section className="py-8 sm:py-10">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-[22px] font-semibold tracking-tight text-[#f3f3f3]">Continue Reading</h2>
                <p className="mt-1 text-sm font-medium text-zinc-500">Recent chapters and bookmarked series</p>
              </div>
              <Link href="/series" className="hidden text-sm font-semibold text-zinc-400 transition hover:text-[#c91f2f] sm:inline">
                View library
              </Link>
            </div>

            <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0">
              {activity.map(({ series, chapter, label, progress, time }) => (
                <Link
                  key={series.slug}
                  href={`/series/${series.slug}`}
                  className="group grid w-[86vw] shrink-0 snap-center grid-cols-[116px_1fr] gap-3 rounded-3xl border border-white/10 bg-[#111111] p-3 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#b11219]/30 hover:bg-[#151515] hover:shadow-[0_0_28px_rgba(177,18,25,0.1)] sm:w-[420px] lg:w-auto"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
                    <Image
                      src={series.image}
                      alt={`${series.title} cover`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 116px, 140px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex min-w-0 flex-col justify-center">
                    <div className="mb-2 flex flex-wrap gap-1.5">
                      <span className="rounded-full bg-[#b11219] px-2.5 py-1 text-[10px] font-semibold uppercase text-[#f3f3f3]">
                        {label}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[10px] font-semibold uppercase text-zinc-400">
                        {series.type}
                      </span>
                    </div>
                    <h3 className="line-clamp-2 text-sm font-semibold leading-tight tracking-tight text-zinc-100 sm:text-base">
                      {series.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-between gap-2 text-xs font-medium text-zinc-500">
                      <span className="line-clamp-1">{chapter}</span>
                      <span className="shrink-0">{time}</span>
                    </div>
                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-[#b11219]" style={{ width: `${progress}%` }} />
                    </div>
                    <div className="mt-1.5 text-[11px] font-medium text-zinc-500">{progress}% read</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/95">
        <div className="mx-auto max-w-[1800px] px-6 pb-32 pt-10 md:py-10 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <LogoMark footer />
              <div>
                <div className="text-lg font-bold tracking-[-0.02em] text-[#f3f3f3]">Zeitlos Scans</div>
                <p className="mt-1 text-sm font-normal text-zinc-500">A small fan-driven group dedicated to translating manga we&apos;re passionate about.</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
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
        </div>
      </footer>
    </main>
  );
}
