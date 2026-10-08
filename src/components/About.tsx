import type { Portfolio } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export function About({ about }: { about: Portfolio['about'] }) {
  return (
    <section className="about section-border" id="about" aria-labelledby="about-title" data-reveal>
      <div className="container about-grid" data-reveal>
        <SectionHeading label="About" title="A little about me" id="about-title" />
        <div>
          <div className="about-description">
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <dl className="facts">
            {about.facts.map((fact) => (
              <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
