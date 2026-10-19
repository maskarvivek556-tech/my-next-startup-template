import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { services } from "./startupData";

export default function ServicesSection() {
  return (
    <section className="section section-light" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Our Services"
          title="Services We Provide"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
          descriptionClassName="section-description-large"
        />

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span className="service-number">{service.number}</span>
                  <span className="service-icon"><Icon size={25} /></span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a className="text-link" href="#contact">
                  Read More <ArrowRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
