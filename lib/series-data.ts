export type SeriesChapter = {
  number?: string;
  title: string;
  date: string;
};

export type SeriesDetail = {
  slug: string;
  title: string;
  alternativeTitles?: string[];
  type: "Manga" | "Novel" | "Oneshot";
  status: "Ongoing" | "Completed" | "Hiatus";
  year?: string;
  image: string;
  latest: string;
  updated: string;
  rating: string;
  views: string;
  bookmarks: string;
  author?: string;
  artist?: string;
  translatedBy?: string;
  translatorUrl?: string;
  format?: string;
  theme?: string;
  contentWarning?: string;
  description: string;
  genres: string[];
  chapters: SeriesChapter[];
};

export const seriesCatalog: SeriesDetail[] = [
  {
    slug: "usuzumi-no-hate",
    title: "Usuzumi No Hate",
    alternativeTitles: ["The Faint Gray World"],
    type: "Manga",
    status: "Ongoing",
    year: "2022",
    image: "/covers/usuzumi.png",
    latest: "Chapter 33",
    updated: "New",
    rating: "4.8",
    views: "128K",
    bookmarks: "9.4K",
    author: "Satoshi Mizukami",
    artist: "Satoshi Mizukami",
    translatedBy: "Zeitlos Scans",
    format: "Serial manga",
    theme: "Post-apocalyptic journey",
    description:
      "A girl walks alone in a world without humans. Her mission is to search for survivors and cleanse the land. Will humans be found? A story of loneliness and beautiful ruins.",
    genres: ["Sci-Fi", "Adventure", "Post-Apocalyptic", "Mystery", "Tragedy"],
    chapters: [
      { number: "33", title: "Chapter 33", date: "New" },
      { number: "32", title: "Chapter 32", date: "1 week ago" },
      { number: "31", title: "Chapter 31", date: "2 weeks ago" },
      { number: "30", title: "Chapter 30", date: "3 weeks ago" },
      { number: "1", title: "Chapter 1", date: "Mar 12, 2026" },
    ],
  },
  {
    slug: "ill-become-a-villainess-who-goes-down-in-history",
    title: "I'll Become a Villainess Who Goes Down in History",
    alternativeTitles: ["Rekishi ni Nokoru Akujo ni Naruzo"],
    type: "Manga",
    status: "Ongoing",
    year: "2020",
    image: "/covers/villainess.png",
    latest: "Chapter 24",
    updated: "New",
    rating: "4.7",
    views: "212K",
    bookmarks: "15.8K",
    author: "Izumi Okido",
    artist: "Akari Hoshi",
    translatedBy: "Zeitlos Scans",
    format: "Serial manga",
    theme: "Villainess fantasy",
    description:
      "I was reincarnated as my favorite otome-game villainess. To become the number one villainess who will go down in history, I need to be strong and intelligent. But the more villainous I become, the more the prince seems to like me.",
    genres: ["Reincarnation", "Romance", "Magic", "Isekai", "Fantasy", "Villainess"],
    chapters: [
      { number: "24", title: "Chapter 24", date: "New" },
      { number: "23", title: "Chapter 23", date: "1 week ago" },
      { number: "22", title: "Chapter 22", date: "2 weeks ago" },
      { number: "21", title: "Chapter 21", date: "3 weeks ago" },
      { number: "1", title: "Chapter 1", date: "Feb 18, 2026" },
    ],
  },
  {
    slug: "since-my-fiance-seems-to-hate-me-i-tried-to-leave-only-to-be-objected",
    title: "Since My Fiance Seems to Hate Me, I Tried to Leave, Only to Be Objected",
    alternativeTitles: ["Since My Fiancé Seems to Hate Me, I Tried to Leave, Only to Be Objected"],
    type: "Manga",
    status: "Ongoing",
    year: "2024",
    image: "/covers/fiance.png",
    latest: "Chapter 4",
    updated: "New",
    rating: "4.6",
    views: "74K",
    bookmarks: "5.1K",
    author: "Miyako Tsukahara",
    artist: "Miyako Tsukahara",
    translatedBy: "Zeitlos Scans",
    format: "Serial manga",
    theme: "Royal romance",
    description:
      "Clarissa, the daughter of the Marquis of Merriam, is scorned in high society and called Cinderella. Lacking confidence and feeling she has no place at home, she meets a young man at a party before being summoned to the royal castle by Prince Lucas.",
    genres: ["Romance", "Drama", "Fantasy", "Slice of Life"],
    chapters: [
      { number: "4", title: "Chapter 4", date: "New" },
      { number: "3", title: "Chapter 3", date: "1 week ago" },
      { number: "2", title: "Chapter 2", date: "2 weeks ago" },
      { number: "1", title: "Chapter 1", date: "Apr 6, 2026" },
    ],
  },
  {
    slug: "oitekebori",
    title: "Oitekebori",
    type: "Oneshot",
    status: "Completed",
    year: "2023",
    image: "/covers/oitekebori.png",
    latest: "Oneshot",
    updated: "Complete",
    rating: "4.4",
    views: "31K",
    bookmarks: "2.3K",
    author: "Zeitlos Scans",
    artist: "Zeitlos Scans",
    translatedBy: "Zeitlos Scans",
    format: "Oneshot",
    theme: "Bittersweet fantasy",
    description:
      "A compact fantasy romance about an encounter that lingers after its final page, carrying the quiet ache and strange beauty of a folktale.",
    genres: ["Romance", "Fantasy", "Tragedy"],
    chapters: [{ title: "Oneshot", date: "Complete" }],
  },
  {
    slug: "the-colour-of-sunrise",
    title: "The Colour of Sunrise",
    type: "Oneshot",
    status: "Completed",
    year: "2024",
    image: "/covers/sunrise.png",
    latest: "Oneshot",
    updated: "Complete",
    rating: "4.5",
    views: "28K",
    bookmarks: "1.9K",
    author: "Zeitlos Scans",
    artist: "Zeitlos Scans",
    translatedBy: "Zeitlos Scans",
    format: "Oneshot",
    theme: "Quiet human drama",
    description:
      "A gentle slice-of-life oneshot about small moments, morning light, and the kind of feeling that is easiest to recognize after it has passed.",
    genres: ["Slice of Life"],
    chapters: [{ title: "Oneshot", date: "Complete" }],
  },
  {
    slug: "dominant",
    title: "Dominant",
    type: "Manga",
    status: "Ongoing",
    year: "2025",
    image: "/covers/dominant.jpg",
    latest: "Chapter 1",
    updated: "Ongoing",
    rating: "4.3",
    views: "19K",
    bookmarks: "1.4K",
    author: "Zeitlos Scans",
    artist: "Zeitlos Scans",
    translatedBy: "Zeitlos Scans",
    format: "Serial manga",
    theme: "Suspense and music",
    description:
      "A tense school-life mystery with threads of music, romance, and psychological pressure winding through its opening act.",
    genres: ["Thriller", "Romance", "Drama", "School Life", "Mystery", "Music"],
    chapters: [{ number: "1", title: "Chapter 1", date: "Ongoing" }],
  },
  {
    slug: "puppet",
    title: "Puppet",
    type: "Oneshot",
    status: "Completed",
    year: "2023",
    image: "/covers/puppet.jpg",
    latest: "Oneshot",
    updated: "Complete",
    rating: "4.2",
    views: "25K",
    bookmarks: "1.7K",
    author: "Zeitlos Scans",
    artist: "Zeitlos Scans",
    translatedBy: "Zeitlos Scans",
    format: "Oneshot",
    theme: "Psychological horror",
    contentWarning: "Horror and tragic themes",
    description:
      "A psychological horror oneshot about control, identity, and the unnerving feeling of being moved by invisible hands.",
    genres: ["Psychological", "Drama", "Horror", "Tragedy"],
    chapters: [{ title: "Oneshot", date: "Complete" }],
  },
  {
    slug: "phenomeno",
    title: "Phenomeno",
    type: "Novel",
    status: "Completed",
    year: "2012",
    image: "/covers/phenomeno.jpg",
    latest: "Chapter 3 - Flow",
    updated: "New",
    rating: "4.9",
    views: "96K",
    bookmarks: "7.6K",
    author: "Ninomae Hajime",
    artist: "Yasuda Suzuhito",
    translatedBy: "Zeitlos TL",
    translatorUrl: "https://zeitlosscans.com",
    format: "Light novel",
    theme: "Urban supernatural mystery",
    contentWarning: "Gore and horror imagery",
    description:
      "Nagito Yamada is a university student searching for a cheap place to live. He finds a mysterious house that grants wishes listed for an unbelievably low rent and moves in. Soon, strange creaking noises begin tormenting him each night, and a number carved into the wall starts counting down.",
    genres: ["Gore", "Psychological", "Mystery", "Horror", "Sci-Fi"],
    chapters: [
      { number: "3", title: "Chapter 3 - Flow", date: "New" },
      { number: "2", title: "Chapter 2 - Flow", date: "3 days ago" },
      { number: "1", title: "Chapter 1 - Flow", date: "1 week ago" },
      { title: "Prologue", date: "Feb 27, 2026" },
    ],
  },
  {
    slug: "ryusa-no-ori",
    title: "Ryusa No Ori",
    alternativeTitles: ["Ori of the Dragon Chain"],
    type: "Novel",
    status: "Completed",
    year: "2019",
    image: "/covers/ryusa.png",
    latest: "Chapter 14",
    updated: "New",
    rating: "4.8",
    views: "141K",
    bookmarks: "10.9K",
    author: "Cadet",
    artist: "Sime",
    translatedBy: "Zeitlos TL",
    translatorUrl: "https://zeitlosscans.com",
    format: "Web novel",
    theme: "Academy fantasy",
    description:
      "Solminati Academy is a place for youngsters with dreams, hopes, and ambitions. A boy enters the academy to support his beloved's dream, but his ability never improves, he is mocked, isolated, and separated from the one he loves. Then an encounter with an old woman begins to change him.",
    genres: ["Action", "Adventure", "Drama", "Fantasy", "Romance", "School Life"],
    chapters: [
      { number: "14", title: "Chapter 14", date: "New" },
      { number: "13", title: "Chapter 13", date: "4 days ago" },
      { number: "12", title: "Chapter 12", date: "1 week ago" },
      { number: "1", title: "Case 01: The Wish-fulfilling House (1)", date: "Mar 4, 2026" },
      { title: "Prologue", date: "Feb 28, 2026" },
    ],
  },
];

export function getSeriesBySlug(slug: string) {
  return seriesCatalog.find((series) => series.slug === slug);
}
