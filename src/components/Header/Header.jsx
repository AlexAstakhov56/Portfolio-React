import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Alexey</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and coding.</p>
        </div>
        <a href="#" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
}
