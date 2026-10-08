interface SectionHeadingProps {
  label: string;
  title: string;
  id: string;
}

export function SectionHeading({ label, title, id }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}
