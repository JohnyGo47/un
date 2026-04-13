import { NewsItem as NewsItemType } from "@/types";

type NewsItemProps = {
  item: NewsItemType;
};

export default function NewsItem({ item }: NewsItemProps) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
      <p className="text-sm font-medium text-cyan-300">{item.date}</p>
      <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.excerpt}</p>
    </article>
  );
}
