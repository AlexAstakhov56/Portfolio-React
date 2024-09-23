import Project from "../components/Project/Project";
import { projects } from "../helpers/projectsList";

export default function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((proj, index) => (
            <Project
              key={proj.title}
              title={proj.title}
              img={proj.img}
              index={index}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
