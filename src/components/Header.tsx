export function Header({ name }: { name: string }) {
  return (
    <header className="site-header">
      <a className="logo" href="#top" aria-label={`${name} home`}>{name}</a>
      <nav className="nav" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
