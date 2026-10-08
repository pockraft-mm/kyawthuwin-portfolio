import { ArrowDownToLine, ArrowUpRight } from 'lucide-react';
import type { Portfolio } from '../data/portfolio';

export function Hero({ profile, cv }: { profile: Portfolio['profile']; cv?: string }) {
  return (
    <section className="portfolio-hero section-border" aria-labelledby="hero-title" data-reveal>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{profile.role}</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-role">{profile.institution}</p>
        </div>
        <div className="hero-portrait">
          <img
            className="profile-image"
            src={profile.photo}
            alt={profile.name}
            width="692"
            height="692"
            fetchPriority="high"
          />
        </div>
        <div className="hero-intro">
          <p>{profile.introduction}</p>
          <div className="hero-actions">
            <a className="button button-default" href="#work">
              View My Work <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a className="button button-outline" href="#contact">Contact</a>
            {cv ? (
              <a className="button button-outline" href={cv} download>
                Download CV <ArrowDownToLine size={14} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
