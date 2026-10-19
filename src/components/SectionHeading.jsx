export default function SectionHeading({ eyebrow, title, description, centered = true, descriptionClassName = "" }) {
  return (
    <div className={`section-heading ${centered ? "centered" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p className={descriptionClassName}>{description}</p>
    </div>
  );
}
