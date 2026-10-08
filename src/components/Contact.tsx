import { ArrowUpRight } from 'lucide-react';
import type { Portfolio } from '../data/portfolio';

interface ContactProps {
  name: string;
  contact: Portfolio['contact'];
}

export function Contact({ name, contact }: ContactProps) {
  return (
    <footer className="contact" id="contact" aria-labelledby="contact-title" data-reveal>
      <div className="container contact-panel" data-reveal>
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">{name}</h2>
        <p className="contact-details">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span className="contact-separator" aria-hidden="true"> · </span>
          <a href={contact.phone.href}>{contact.phone.label}</a>
        </p>
        <div className="contact-bottom">
          <div className="social-links">
            {contact.socialLinks.map((link) => (
              <a href={link.url} key={link.url} target="_blank" rel="noreferrer">
                {link.label} <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            ))}
            {contact.cv ? <a href={contact.cv} download>Download CV <ArrowUpRight size={13} aria-hidden="true" /></a> : null}
          </div>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
