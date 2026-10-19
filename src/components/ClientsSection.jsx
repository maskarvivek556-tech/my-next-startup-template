import SectionHeading from "./SectionHeading";
import { clientLogos } from "./startupData";

export default function ClientsSection() {
  return (
    <section className="section section-light" id="clients">
      <div className="container clients-grid">
        <div className="clients-copy">
          <span className="eyebrow">Our Awesome Clients</span>
          <h2>We built Best solutions for your company</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="client-logos">
          {clientLogos.map(([name, image]) => (
            <div className="client-logo" key={name}>
              <img src={image} alt={`${name} logo`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
