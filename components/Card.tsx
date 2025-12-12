import Image from "next/image";
import Link from "next/link";

export function Card({
  title,
  text,
  href,
  imageSrc = "/images/trail-card.svg",
}: {
  title: string;
  text: string;
  href?: string;
  imageSrc?: string;
}) {
  return (
    <article className="flex flex-col gap-4 rounded-[2rem] border border-border bg-surface p-6 shadow-[0_20px_40px_rgba(15,31,27,0.15)] transition hover:-translate-y-0.5 hover:shadow-[0_25px_45px_rgba(15,31,27,0.2)]">
      <div className="relative h-40 w-full overflow-hidden rounded-[1.5rem]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>
      <div className="space-y-2">
        <h3 className="type-h3 text-text">{title}</h3>
        <p className="type-body text-muted">{text}</p>
      </div>
      {href && (
        <Link
          href={href}
          className="text-sm font-semibold text-forest underline-offset-4 transition hover:underline"
        >
          Learn more
        </Link>
      )}
    </article>
  );
}
