export default function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-9 max-w-[640px]">
      {eyebrow && <span className="eyebrow mb-3.5">{eyebrow}</span>}
      <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold leading-tight">{title}</h2>
      {desc && <p className="mt-3 text-ink-2">{desc}</p>}
    </div>
  );
}
