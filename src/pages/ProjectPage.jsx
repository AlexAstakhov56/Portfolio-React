import { useParams } from "react-router-dom";
import BtnGitHub from "../components/BtnGitHub/BtnGitHub";
import { projects } from "../helpers/projectsList";

export default function ProjectPage() {
  const { id } = useParams();
  const curProj = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{curProj.title}</h1>

          <img
            src={curProj.imgBig}
            alt={curProj.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {curProj.skills}</p>
          </div>

          {curProj.gitHubLink && <BtnGitHub link={curProj.gitHubLink} />}
        </div>
      </div>
    </main>
  );
}
