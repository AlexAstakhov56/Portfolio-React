import Header from "../components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p className="home__skills">
                HTML, SCSS, JavaScript, Bootstrap, Git, JSON API, Axios,
                npm&yarn, ReactJS
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p className="home__skills">In process...</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
