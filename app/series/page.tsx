"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bell,
  BookOpen,
  Coffee,
  Grid3X3,
  Library,
  List,
  Search,
  ShieldAlert,
  SlidersHorizontal,
  UserCircle,
} from "lucide-react";

const allSeries = [
  {
    slug: "usuzumi-no-hate",
    title: "Usuzumi No Hate",
    type: "Manga",
    status: "Ongoing",
    image: "/covers/usuzumi.png",
    latest: "Chapter 33",
    updated: "New",
    genres: ["Sci-Fi", "Adventure", "Post-Apocalyptic", "Mystery", "Tragedy"],
  },
  {
    slug: "ill-become-a-villainess-who-goes-down-in-history",
    title: "I'll Become a Villainess Who Goes Down in History",
    type: "Manga",
    status: "Ongoing",
    image: "/covers/villainess.png",
    latest: "Chapter 24",
    updated: "New",
    genres: ["Reincarnation", "Romance", "Magic", "Isekai", "Fantasy", "Villainess"],
  },
  {
    slug: "since-my-fiance-seems-to-hate-me-i-tried-to-leave-only-to-be-objected",
    title: "Since My Fiance Seems to Hate Me, I Tried to Leave, Only to Be Objected",
    type: "Manga",
    status: "Ongoing",
    image: "/covers/fiance.png",
    latest: "Chapter 4",
    updated: "New",
    genres: ["Romance", "Drama", "Fantasy", "Slice of Life"],
  },
  {
    slug: "oitekebori",
    title: "Oitekebori",
    type: "Oneshot",
    status: "Completed",
    image: "/covers/oitekebori.png",
    latest: "Oneshot",
    updated: "Complete",
    genres: ["Romance", "Fantasy", "Tragedy"],
  },
  {
    slug: "the-colour-of-sunrise",
    title: "The Colour of Sunrise",
    type: "Oneshot",
    status: "Completed",
    image: "/covers/sunrise.png",
    latest: "Oneshot",
    updated: "Complete",
    genres: ["Slice of Life"],
  },
  {
    slug: "dominant",
    title: "Dominant",
    type: "Manga",
    status: "Ongoing",
    image: "/covers/dominant.jpg",
    latest: "Chapter 1",
    updated: "Ongoing",
    genres: ["Thriller", "Romance", "Drama", "School Life", "Mystery", "Music"],
  },
  {
    slug: "puppet",
    title: "Puppet",
    type: "Oneshot",
    status: "Completed",
    image: "/covers/puppet.jpg",
    latest: "Oneshot",
    updated: "Complete",
    genres: ["Psychological", "Drama", "Horror", "Tragedy"],
  },
  {
    slug: "phenomeno",
    title: "Phenomeno",
    type: "Novel",
    status: "Completed",
    image: "/covers/phenomeno.jpg",
    latest: "Chapter 3 - Flow",
    updated: "New",
    genres: ["Gore", "Psychological", "Mystery", "Horror", "Sci-Fi"],
  },
  {
    slug: "ryusa-no-ori",
    title: "Ryusa No Ori",
    type: "Novel",
    status: "Completed",
    image: "/covers/ryusa.png",
    latest: "Chapter 14",
    updated: "New",
    genres: ["Action", "Adventure", "Drama", "Fantasy", "Romance", "School Life"],
  },
];

const typeFilters = ["Manga", "Novel", "Oneshot"];
const statusFilters = ["Completed", "Hiatus", "Ongoing"];
const sortOptions = ["Latest", "Popular", "A-Z", "Updated"];

type Series = (typeof allSeries)[number];
type ViewMode = "grid" | "list";

function LogoMark() {
  return (
    <span className="relative grid size-11 shrink-0 place-items-center rounded-full border border-white/10 bg-[#090909] shadow-[0_0_22px_rgba(177,18,25,0.22)]">
      <span className="absolute inset-[-7px] -z-10 rounded-full bg-[#8f1016]/30 blur-xl" />
      <span className="absolute inset-1 rounded-full border border-[#8f1016]/25 bg-gradient-to-br from-white/[0.08] to-transparent" />
      <Image
        src="/logo.png"
        alt="Zeitlos Scans logo"
        width={28}
        height={28}
        className="relative h-7 w-auto object-contain drop-shadow-[0_0_12px_rgba(177,18,25,0.35)]"
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

function FilterPill({
  children,
  active = false,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
        active
          ? "border-[#b11219]/60 bg-[#b11219] text-[#f3f3f3] shadow-[0_0_18px_rgba(177,18,25,0.18)]"
          : "border-white/10 bg-white/[0.045] text-zinc-400 hover:border-white/20 hover:bg-white/[0.075] hover:text-[#f3f3f3]"
      }`}
    >
      {children}
    </button>
  );
}

function SeriesCard({ series }: { series: Series }) {
  return (
    <Link href={`/series/${series.slug}`} className="group block overflow-hidden rounded-3xl border border-white/10 bg-[#111111] shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#b11219]/30 hover:bg-[#151515] hover:shadow-[0_0_28px_rgba(177,18,25,0.1)]">
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
        <Image
          src={series.image}
          alt={`${series.title} cover`}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute left-3 top-3 rounded-full bg-[#b11219] px-3 py-1 text-[11px] font-medium uppercase text-[#f3f3f3]">
          {series.type}
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between gap-3 text-xs font-medium text-zinc-500">
          <span>{series.status}</span>
          <span>{series.updated}</span>
        </div>
        <h2 className="line-clamp-2 min-h-[48px] text-base font-semibold leading-tight tracking-tight text-[#f3f3f3]">
          {series.title}
        </h2>
        <div className="mt-3 line-clamp-1 text-sm font-medium text-zinc-400">{series.latest}</div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {series.genres.slice(0, 3).map((genre) => (
            <span
              key={genre}
              className="rounded-full border border-white/10 bg-white/[0.055] px-2.5 py-1 text-[11px] font-medium text-zinc-400"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function SeriesListRow({ series }: { series: Series }) {
  return (
    <Link href={`/series/${series.slug}`} className="group grid grid-cols-[88px_1fr] gap-4 rounded-3xl border border-white/10 bg-[#111111] p-3 shadow-xl shadow-black/20 transition duration-300 hover:border-[#b11219]/30 hover:bg-[#151515] hover:shadow-[0_0_28px_rgba(177,18,25,0.1)] sm:grid-cols-[112px_1fr]">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
        <Image
          src={series.image}
          alt={`${series.title} cover`}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 88px, 112px"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="flex min-w-0 flex-col justify-center py-1">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#b11219] px-3 py-1 text-[11px] font-medium uppercase text-[#f3f3f3]">
            {series.type}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-[11px] font-medium uppercase text-zinc-400">
            {series.status}
          </span>
        </div>
        <h2 className="line-clamp-2 text-lg font-semibold leading-tight tracking-tight text-[#f3f3f3]">
          {series.title}
        </h2>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-zinc-400">
          <span>{series.latest}</span>
          <span className="text-zinc-600">/</span>
          <span>{series.updated}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {series.genres.slice(0, 5).map((genre) => (
            <span
              key={genre}
              className="rounded-full border border-white/10 bg-white/[0.055] px-2.5 py-1 text-[11px] font-medium text-zinc-400"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function SeriesPage() {
  const [navHidden, setNavHidden] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Latest");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

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

  const toggleType = (type: string) => {
    setSelectedTypes((current) =>
      current.includes(type) ? current.filter((item) => item !== type) : [...current, type],
    );
  };

  const toggleStatus = (status: string) => {
    setSelectedStatuses((current) =>
      current.includes(status) ? current.filter((item) => item !== status) : [...current, status],
    );
  };

  const filteredSeries = allSeries
    .filter((series) => {
      const normalizedQuery = query.trim().toLowerCase();
      const matchesSearch =
        normalizedQuery.length === 0 ||
        series.title.toLowerCase().includes(normalizedQuery) ||
        series.type.toLowerCase().includes(normalizedQuery) ||
        series.genres.some((genre) => genre.toLowerCase().includes(normalizedQuery));

      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(series.type);
      const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(series.status);

      return matchesSearch && matchesType && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === "A-Z") {
        return a.title.localeCompare(b.title);
      }

      if (sortBy === "Updated") {
        return a.updated.localeCompare(b.updated);
      }

      if (sortBy === "Popular") {
        return a.type.localeCompare(b.type) || a.title.localeCompare(b.title);
      }

      return allSeries.indexOf(a) - allSeries.indexOf(b);
    });

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
            <span className="text-[17px] font-bold tracking-[-0.02em] text-[#f3f3f3]">
              Zeitlos Scans
            </span>
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
            <IconButton label="Search">
              <Search className="size-4" />
            </IconButton>
            <IconButton label="Notifications">
              <Bell className="size-4" />
            </IconButton>
            <IconButton label="Profile">
              <UserCircle className="size-5" />
            </IconButton>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-[1800px] px-4 pt-28 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] p-5 shadow-2xl shadow-black/30 sm:p-7 lg:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(177,18,25,0.18),transparent_34%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.055] via-transparent to-transparent" />
          <div className="relative">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tight text-[#f3f3f3] sm:text-4xl">
                Browse Series
              </h1>
              <p className="mt-3 text-sm font-normal leading-6 text-zinc-400 sm:text-base">
                Explore all manga, novels, oneshots, and ongoing releases.
              </p>
            </div>

            <div className="mt-7 grid gap-3 lg:grid-cols-[1fr_auto]">
              <label className="flex min-h-12 items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 text-zinc-400 transition focus-within:border-[#b11219]/45 focus-within:bg-black/35">
                <Search className="size-4 shrink-0" />
                <input
                  aria-label="Search series"
                  placeholder="Search by title, type, or genre..."
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-[#f3f3f3] outline-none placeholder:text-zinc-600"
                />
              </label>

              <div className="flex gap-2">
                <button
                  onClick={() => setFiltersOpen((open) => !open)}
                  className={`inline-flex min-h-12 items-center gap-2 rounded-2xl border px-4 text-sm font-medium transition ${
                    filtersOpen
                      ? "border-[#b11219]/50 bg-[#b11219]/15 text-[#f3f3f3]"
                      : "border-white/10 bg-white/[0.045] text-zinc-300 hover:border-white/20 hover:bg-white/[0.075] hover:text-[#f3f3f3]"
                  }`}
                >
                  <SlidersHorizontal className="size-4" />
                  Filters
                </button>
                <div className="flex rounded-2xl border border-white/10 bg-white/[0.045] p-1">
                  <button
                    aria-label="Grid view"
                    onClick={() => setViewMode("grid")}
                    className={`grid size-10 place-items-center rounded-xl transition ${
                      viewMode === "grid"
                        ? "bg-[#b11219] text-[#f3f3f3]"
                        : "text-zinc-400 hover:bg-white/10 hover:text-[#f3f3f3]"
                    }`}
                  >
                    <Grid3X3 className="size-4" />
                  </button>
                  <button
                    aria-label="List view"
                    onClick={() => setViewMode("list")}
                    className={`grid size-10 place-items-center rounded-xl transition ${
                      viewMode === "list"
                        ? "bg-[#b11219] text-[#f3f3f3]"
                        : "text-zinc-400 hover:bg-white/10 hover:text-[#f3f3f3]"
                    }`}
                  >
                    <List className="size-4" />
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`grid transition-all duration-300 ${
                filtersOpen ? "mt-5 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="rounded-3xl border border-white/10 bg-black/30 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl">
                  <div className="grid gap-5 lg:grid-cols-3">
                    <div>
                      <div className="mb-3 text-xs font-medium uppercase tracking-wide text-zinc-500">Type</div>
                      <div className="flex flex-wrap gap-2">
                        {typeFilters.map((type) => (
                          <FilterPill key={type} active={selectedTypes.includes(type)} onClick={() => toggleType(type)}>
                            {type}
                          </FilterPill>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="mb-3 text-xs font-medium uppercase tracking-wide text-zinc-500">Release Status</div>
                      <div className="flex flex-wrap gap-2">
                        {statusFilters.map((status) => (
                          <FilterPill key={status} active={selectedStatuses.includes(status)} onClick={() => toggleStatus(status)}>
                            {status}
                          </FilterPill>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="mb-3 text-xs font-medium uppercase tracking-wide text-zinc-500">Sort</div>
                      <div className="flex flex-wrap gap-2">
                        {sortOptions.map((sort) => (
                          <FilterPill key={sort} active={sortBy === sort} onClick={() => setSortBy(sort)}>
                            {sort}
                          </FilterPill>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1800px] px-4 py-8 sm:px-6 lg:px-8">
        {filteredSeries.length > 0 ? (
          viewMode === "grid" ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
              {filteredSeries.map((series) => (
                <SeriesCard key={series.title} series={series} />
              ))}
            </div>
          ) : (
            <div className="grid gap-4 lg:grid-cols-2">
              {filteredSeries.map((series) => (
                <SeriesListRow key={series.title} series={series} />
              ))}
            </div>
          )
        ) : (
          <div className="rounded-[2rem] border border-white/10 bg-[#111111] px-6 py-16 text-center shadow-xl shadow-black/20">
            <div className="mx-auto mb-4 grid size-12 place-items-center rounded-2xl border border-[#b11219]/30 bg-[#b11219]/10 text-[#c91f2f]">
              <Search className="size-5" />
            </div>
            <h2 className="text-xl font-semibold tracking-tight text-[#f3f3f3]">No series matched your filters.</h2>
            <p className="mt-2 text-sm font-normal text-zinc-500">Try a different search term or clear one of the active filters.</p>
          </div>
        )}
      </section>

      <footer className="border-t border-white/10 bg-black/95">
        <div className="mx-auto max-w-[1800px] px-6 py-11 lg:px-8">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <LogoMark />
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
