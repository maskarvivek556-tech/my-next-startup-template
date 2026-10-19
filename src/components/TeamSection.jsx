import { Globe, Send, Sparkles, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { team } from "./startupData";

export default function TeamSection() {
  return (
    <section className="section" id="team">
      <div className="container">
        <SectionHeading
          eyebrow="Meet Our Team"
          title="Our Creative Team"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
          descriptionClassName="section-description-large"
        />

        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="team-image">
                <img src={member.image} alt={member.name} loading="lazy" />
                <div className="team-overlay">
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label={`${member.name} Facebook`}><Users /></a>
                  <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" aria-label={`${member.name} Twitter`}><Send /></a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label={`${member.name} Instagram`}><Sparkles /></a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label={`${member.name} LinkedIn`}><Globe /></a>
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
