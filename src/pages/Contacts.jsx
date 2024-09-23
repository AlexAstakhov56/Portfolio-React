export default function Contacts() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p className="contact__text">Voronezh, Russia</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p className="contact__text">
              <a href="tel:+79051234567">+7 (905) 123-45-67</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p className="contact__text">
              <a href="mailto:aleks.astakhov.2015@mail.ru">
                aleks.astakhov.2015@mail.ru
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
