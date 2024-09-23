import "./BtnGitHub.css";
import gitHubBlack from "../../Images/icons/gitHub-black.svg";

export default function BtnGitHub({ link }) {
  return (
    <a href={link} target="_blank" className="btn-outline">
      <img src={gitHubBlack} />
      GitHub repos
    </a>
  );
}
