import type { HeroCTA } from "@/components/Hero";

const heroCTAs = [
  { label: "Plan Your Visit", href: "/plan", variant: "primary" },
  { label: "Contact / Enquire", href: "/contact", variant: "ghost" },
] satisfies HeroCTA[];

const home = {
  heroHeadline: "Nokomis Trail on the Bruce Peninsula",
  heroSubtext: "A gentle, guided approach to the peninsula’s cedar-lined ridges, limestone bays, and calm lake horizons.",
  heroCTAs,
  highlights: [
    {
      title: "Slow, Trusted Guidance",
      text: "Nokomis Trail storytellers tune into the land, sharing seasonal knowledge without spectacle.",
    },
    {
      title: "Nature-First Comfort",
      text: "Minimal trailside infrastructure and soft-edge gathering points let nature lead each pause.",
    },
    {
      title: "Respectful Presence",
      text: "Guests are invited to witness without imposing, honoring the lake and its rhythms.",
    },
  ],
  sectionsOrder: ["highlights", "story", "cta"],
  story: {
    title: "Walking with Nokomis",
    description:
      "The Grandmother trail is a layered route—ancient cedar groves, cleared sand flats, and quiet cliffs—that rewards mindful arrival.",
    details:
      "Each day begins with listening: the ripple of water, the whisper of pines, the stories that shaped the place.",
  },
  issue: {
    title: "The Issue",
    bullets: [
      "Tourism often highlights scenery without the Indigenous story.",
      "SON leadership and benefits must be centered.",
      "Visitors should understand whose land they are on and how to travel respectfully.",
    ],
  },
  supportingTagline: "A calm, dignified invitation to the Nokomis Trail and the Bruce Peninsula’s sheltered coastlines.",
  carousel: {
    title: "The Peninsula, in quiet motion",
    images: [
      { src: "/images/peninsula-1.jpeg", alt: "Sunset light spilling across the northern shoreline" },
      { src: "/images/peninsula-2.jpeg", alt: "Overlook of lakes, forest, and gentle limestone ridges" },
      { src: "/images/peninsula-3.jpeg", alt: "Cave mouth framing turquoise waters and rugged ledges" },
      { src: "/images/peninsula-4.jpeg", alt: "Natural stone arch peering over the calm sea" },
    ],
  },
  ctaBanner: {
    headline: "Ready to plan a respectful journey?",
    subtext:
      "We coordinate small groups, custom itineraries, and quiet departures so you can focus on the moment.",
    cta: { label: "Plan Your Visit", href: "/plan", variant: "primary" },
  },
};

export default home;
