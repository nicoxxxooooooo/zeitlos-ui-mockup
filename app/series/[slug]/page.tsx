import { notFound } from "next/navigation";
import { getSeriesBySlug, seriesCatalog } from "@/lib/series-data";
import SeriesDetailClient from "./SeriesDetailClient";

export function generateStaticParams() {
  return seriesCatalog.map((series) => ({
    slug: series.slug,
  }));
}

export default async function SeriesDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const series = getSeriesBySlug(slug);

  if (!series) {
    notFound();
  }

  return <SeriesDetailClient series={series} />;
}
