import NewsItem from "@/components/NewsItem";
import { news } from "@/data/news";

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 md:px-6">
      <h1 className="text-3xl font-bold text-white md:text-5xl">News</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Chronological updates from Mazin Lab across funding, awards, campaigns, and instrument development milestones.
      </p>

      <div className="mt-8 space-y-4">
        {news.map((item) => (
          <NewsItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
