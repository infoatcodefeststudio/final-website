import AnimatedCounter from "@/components/site/animated-counter.tsx";

const STATS = [
  { value: 6, suffix: "+", label: "Enterprise Products" },
  { value: 98, suffix: "%", label: "Inventory Accuracy" },
  { value: 24, suffix: "/7", label: "Platform Reliability" },
  { value: 100, suffix: "%", label: "Business-First Design" },
];

export default function AboutStats() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
