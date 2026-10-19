import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { plans } from "./startupData";

export default function PricingSection() {
  return (
    <section className="section section-light" id="pricing">
      <div className="container">
        <SectionHeading
          eyebrow="Pricing Plan"
          title="Our Best Pricing"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
          descriptionClassName="section-description-large"
        />

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className="pricing-card" key={plan.name}>
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <div className="price">
                <span>$</span>{plan.price}<small>/mo</small>
              </div>
              <a className="btn btn-outline" href="#contact">
                Buy {plan.name}
              </a>
              <div className="included">
                <h4>What&apos;s Included</h4>
                {["Cras justo odio.", "Dapibus ac facilisis in.", "Morbi leo risus.", "Potenti felis, in cras."].map((item) => (
                  <div className="included-item" key={item}>
                    <Check size={17} /> <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
