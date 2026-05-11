"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Bell,
  BookOpen,
  Bookmark,
  ChevronRight,
  Coffee,
  Library,
  MessageSquareText,
  Search,
  ShieldAlert,
  Sparkles,
  Star,
  UserCircle,
} from "lucide-react";
import type { SeriesDetail } from "@/lib/series-data";

function LogoMark({ footer = false }: { footer?: boolean }) {
  return (
    <span
      className={`relative grid shrink-0 place-items-center rounded-full border border-white/10 bg-[#090909] shadow-[0_0_22px_rgba(177,18,25,0.22)] ${
        footer ? "size-14" : "size-11"
      }`}
    >
      <span className="absolute inset-[-7px] -z-10 rounded-full bg-[#8f1016]/30 blur-xl" />
      <span className="absolute inset-1 rounded-full border border-[#8f1016]/25 bg-gradient-to-br from-white/[0.08] to-transparent" />
      <img
        src="/logo.png"
        alt="Zeitlos Scans logo"
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

function MetadataRow({ label, children }: { label: string; children?: React.ReactNode }) {
  if (!children) {
    return null;
  }

  return (
    <div className="flex min-w-0 items-baseline gap-2 text-sm leading-6">
      <dt className="shrink-0 font-medium text-zinc-500">{label}</dt>
      <dd className="min-w-0 font-medium text-zinc-200">{children}</dd>
    </div>
  );
}

export default function SeriesDetailClient({ series }: { series: SeriesDetail }) {
  const [navHidden, setNavHidden] = useState(false);
  const [query, setQuery] = useState("");
  const [sortNewest, setSortNewest] = useState(true);

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

  const chapters = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const filtered = series.chapters.filter((chapter) =>
      `${chapter.number ?? ""} ${chapter.title} ${chapter.date}`.toLowerCase().includes(normalizedQuery),
    );

    return sortNewest ? filtered : [...filtered].reverse();
  }, [query, series.chapters, sortNewest]);

  const firstChapter = series.chapters[series.chapters.length - 1];
  const latestChapter = series.chapters[0];

  return (
    <main className="min-h-screen bg-[#050505] font-sans text-[#ededed]">
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
            <Link href="/series" className="inline-flex items-center gap-2 rounded-full bg-[#b11219] px-7 py-2 text-sm font-medium text-[#f3f3f3] shadow-[0_0_18px_rgba(177,18,25,0.22)]">
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
            <IconButton label="Profile"><UserCircle className="size-5" /></IconButton>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden pt-24">
        <img
          src={series.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-28 blur-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-[#050505]/90 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(177,18,25,0.22),transparent_32%)]" />

        <div className="relative mx-auto grid max-w-[1800px] gap-7 px-4 pb-9 pt-8 sm:px-6 lg:grid-cols-[300px_1fr] lg:px-8 lg:pb-12">
          <div className="mx-auto w-full max-w-[285px] lg:mx-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl shadow-black/55">
              <img src={series.image} alt={`${series.title} cover`} className="h-full w-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </div>

          <div className="flex min-w-0 flex-col justify-end pb-1">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Chip red>{series.type}</Chip>
              <Chip>{series.status}</Chip>
              {series.year && <Chip>{series.year}</Chip>}
            </div>
            <h1 className="max-w-5xl text-3xl font-bold leading-tight tracking-tight text-[#f3f3f3] sm:text-5xl">
              {series.title}
            </h1>
            {series.alternativeTitles && series.alternativeTitles.length > 0 && (
              <p className="mt-2 max-w-3xl truncate text-sm font-medium text-zinc-500">
                {series.alternativeTitles.join(" • ")}
              </p>
            )}
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium text-zinc-300">
              <span className="rounded-2xl border border-white/10 bg-black/35 px-4 py-2">
                {series.rating} rating
              </span>
              <span className="rounded-2xl border border-white/10 bg-black/35 px-4 py-2">
                {series.views} views
              </span>
              <span className="rounded-2xl border border-white/10 bg-black/35 px-4 py-2">
                {series.bookmarks} bookmarks
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {series.genres.map((genre) => (
                <span key={genre} className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs font-medium text-zinc-300">
                  {genre}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#" className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-[#b11219] px-5 text-sm font-semibold text-[#f3f3f3] transition hover:bg-[#c91f2f]">
                <BookOpen className="size-4" />
                Start from {firstChapter?.title ?? "Ch. 1"}
              </a>
              <a href="#" className="inline-flex min-h-12 items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-5 text-sm font-semibold text-zinc-200 transition hover:border-[#b11219]/40 hover:bg-[#b11219]/10 hover:text-[#f3f3f3]">
                <Sparkles className="size-4" />
                Latest
                <span className="text-zinc-500">{latestChapter?.title}</span>
              </a>
              <button className="inline-flex min-h-12 items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-5 text-sm font-semibold text-zinc-200 transition hover:border-[#b11219]/40 hover:bg-[#b11219]/10 hover:text-[#f3f3f3]">
                <Bookmark className="size-4" />
                Bookmark
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1800px] gap-5 px-4 pb-10 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
        <div className="space-y-5">
          <article className="border-b border-white/10 py-5">
            <h2 className="text-[22px] font-semibold tracking-tight text-[#f3f3f3]">Synopsis</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-300">{series.description}</p>
            <dl className="mt-5 flex flex-col gap-1.5">
              <MetadataRow label="Author ·">{series.author}</MetadataRow>
              <MetadataRow label="Artist ·">{series.artist}</MetadataRow>
              <MetadataRow label="Translated by ·">
                {series.translatedBy && series.translatorUrl ? (
                  <a href={series.translatorUrl} className="text-[#f3f3f3] underline decoration-[#b11219]/60 underline-offset-4 transition hover:text-[#c91f2f]">
                    {series.translatedBy}
                  </a>
                ) : (
                  series.translatedBy
                )}
              </MetadataRow>
            </dl>
          </article>

          <a href="#" className="group flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-[#111111] p-4 shadow-xl shadow-black/20 transition hover:border-[#b11219]/35 hover:bg-[#151515] hover:shadow-[0_0_24px_rgba(177,18,25,0.1)]">
            <span className="flex min-w-0 items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-[#b11219]/30 bg-[#b11219]/10 text-[#c91f2f]">
                <MessageSquareText className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-base font-bold tracking-tight text-[#f3f3f3]">Reviews</span>
                <span className="mt-1 block truncate text-sm font-medium text-zinc-500">Share thoughts and reader impressions</span>
              </span>
            </span>
            <ChevronRight className="size-5 shrink-0 text-zinc-600 transition group-hover:text-[#c91f2f]" />
          </a>

          <article className="rounded-[2rem] border border-white/10 bg-[#111111] p-5 shadow-xl shadow-black/20 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-[22px] font-semibold tracking-tight text-[#f3f3f3]">Chapters</h2>
                <p className="mt-1 text-sm font-medium text-zinc-500">{series.chapters.length} entries</p>
              </div>
              <div className="flex gap-2">
                <label className="flex min-h-11 min-w-0 flex-1 items-center gap-2 rounded-2xl border border-white/10 bg-black/25 px-3 text-zinc-400 transition focus-within:border-[#b11219]/45 focus-within:bg-black/35 sm:w-64">
                  <Search className="size-4 shrink-0" />
                  <input
                    aria-label="Search chapters"
                    placeholder="Search chapters..."
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    className="w-full bg-transparent text-sm font-medium text-[#f3f3f3] outline-none placeholder:text-zinc-600"
                  />
                </label>
                <button
                  onClick={() => setSortNewest((current) => !current)}
                  className="min-h-11 rounded-2xl border border-white/10 bg-white/[0.055] px-4 text-sm font-semibold text-zinc-300 transition hover:border-[#b11219]/35 hover:bg-[#b11219]/10 hover:text-[#f3f3f3]"
                >
                  {sortNewest ? "Newest" : "Oldest"}
                </button>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              {chapters.map((chapter) => (
                <a
                  key={`${chapter.number ?? "oneshot"}-${chapter.title}`}
                  href="#"
                  className="group flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-white/0 bg-black/22 px-4 py-3 transition hover:border-[#b11219]/30 hover:bg-white/[0.055]"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-sm font-semibold text-zinc-300">
                      {series.type === "Oneshot" ? "OS" : chapter.number ?? "P"}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-zinc-100">
                        {series.type === "Oneshot" ? "Oneshot" : chapter.title}
                      </span>
                      <span className="mt-1 block text-xs font-medium text-zinc-500">{chapter.date}</span>
                    </span>
                  </span>
                  <ChevronRight className="size-5 shrink-0 text-zinc-600 transition group-hover:text-[#c91f2f]" />
                </a>
              ))}
            </div>
          </article>
        </div>

        <aside className="space-y-5">
          <div className="rounded-[2rem] border border-[#b11219]/20 bg-[#111111] p-5 shadow-[0_0_28px_rgba(177,18,25,0.08)]">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="text-xs font-medium uppercase tracking-wide text-zinc-500">Reader rating</div>
                <div className="mt-2 text-4xl font-bold tracking-tight text-[#f3f3f3]">{series.rating}</div>
              </div>
              <div className="flex text-[#c91f2f]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-zinc-500">Sign in to rate this series and keep your reading list synced.</p>
          </div>
        </aside>
      </section>

      <footer className="border-t border-white/10 bg-black/95">
        <div className="mx-auto max-w-[1800px] px-6 py-11 lg:px-8">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <LogoMark footer />
              <div>
                <div className="text-lg font-bold tracking-[-0.02em] text-[#f3f3f3]">Zeitlos Scans</div>
                <p className="mt-1 text-sm font-normal text-zinc-500"> Zeitlos Scans is a small fan-driven group dedicated to translating manga we&apos;re passionate about.</p>
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
