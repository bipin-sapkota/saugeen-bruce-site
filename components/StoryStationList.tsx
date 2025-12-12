import Image from "next/image";

export type StoryStation = {
  title: string;
  description: string;
  listenLabel: string;
};

const storyStationImages: Record<string, string> = {
  "Lakewatch Knoll": "/images/Lakewatch-Knoll.jpeg",
  "Cedar Throat": "/images/Cedar-Throat.jpeg",
  "Sandbar Rill": "/images/Sandbar-Rill.jpeg",
};

function getStoryStationImage(title: string) {
  return storyStationImages[title] ?? "/images/story-station.svg";
}

export function StoryStationList({
  stations,
}: {
  stations: StoryStation[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {stations.map((station) => (
        <article
          key={station.title}
          className="flex h-full flex-col justify-between rounded-3xl border soft-border-lake bg-white/70 p-6 shadow-[0_15px_35px_rgba(15,26,24,0.15)]"
        >
          <div className="space-y-4">
            <div className="relative h-36 w-full overflow-hidden rounded-2xl">
              <Image
                src={getStoryStationImage(station.title)}
                alt={`${station.title} view`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-text">{station.title}</h3>
              <p className="text-sm text-muted">{station.description}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.5em] text-muted">
            <span className="h-1 w-10 rounded-full bg-lake" aria-hidden />
            {station.listenLabel}
          </div>
        </article>
      ))}
    </div>
  );
}
