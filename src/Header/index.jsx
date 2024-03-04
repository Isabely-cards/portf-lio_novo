import './style.css';

export default function Header() {
  return (
    <header className='header'>
      <a href="#" className="logo">
        Isabely
      </a>
      <div className="icon-menu" id="menu-icon">
        <span></span>
        <i></i>
      </div>
      <nav className='navBar'>
        <a href="#home" id="NavBar" className="active">
          Home
        </a>
        <a href="#about">Sobre</a>
        <a href="#education">Educação</a>
        <a href="#skills">Habilidades</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}
