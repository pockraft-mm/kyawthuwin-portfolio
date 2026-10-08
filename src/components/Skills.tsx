import type { Portfolio } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export function Skills({ skills }: { skills: Portfolio['skills'] }) {
  return (
    <section className="services section-border" id="skills" aria-labelledby="skills-title" data-reveal>
      <div className="container">
        <SectionHeading label="Skills" title="Areas of experience" id="skills-title" />
        <div className="service-list">
          {skills.map((skill, index) => (
            <div className="service" key={skill.label} data-reveal>
              <span className="service-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <h3>{skill.label}</h3>
              <p>{skill.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
