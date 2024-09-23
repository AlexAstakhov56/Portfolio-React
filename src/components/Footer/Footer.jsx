import vk from "../../Images/icons/vk.svg";
import instagram from "../../Images/icons/instagram.svg";
import twitter from "../../Images/icons/twitter.svg";
import gitHub from "../../Images/icons/gitHub.svg";
import linkedIn from "../../Images/icons/linkedIn.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={twitter} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/AlexAstakhov56" target="_blank">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
