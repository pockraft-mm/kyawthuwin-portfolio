import { About } from './components/About';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Skills } from './components/Skills';
import { portfolio } from './data/portfolio';
import { usePortfolioMotion } from './hooks/usePortfolioMotion';

function App() {
  usePortfolioMotion();

  return (
    <>
      <div className="cursor-follower" aria-hidden="true"><span /></div>
      <Header name={portfolio.profile.name} />
      <main id="top">
        <Hero profile={portfolio.profile} cv={portfolio.contact.cv} />
        <SelectedWork projects={portfolio.projects} />
        <About about={portfolio.about} />
        <Skills skills={portfolio.skills} />
        <Contact name={portfolio.profile.name} contact={portfolio.contact} />
      </main>
    </>
  );
}

export default App;
