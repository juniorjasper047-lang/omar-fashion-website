import Image from "next/image";
import { story } from "@/lib/content";

export function Story() {
  return (
    <section id="story" className="py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src={story.image}
            alt="The Omar Fashion atelier in Accra"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="eyebrow mb-3">{story.eyebrow}</p>
          <h2 className="font-serif text-4xl sm:text-5xl">{story.title}</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-foreground/75">
            {story.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
