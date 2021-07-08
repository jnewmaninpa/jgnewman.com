export default function Projects() {
  return (
    <div className="about-container">
      <div className="project-card">
        <h1>Personal Projects</h1>
        <p>Follow the provided links to checkout my work</p>
      </div>
      <div className="project-card">
        <h1>
          <a
            href="http://todo.newm.hns.to"
            target="_blank"
            rel="noopener noreferrer"
          >
            Todo Skynet App
          </a>
        </h1>
        <p>
          A simple todo application hosted on&nbsp;
          <a
            href="https://siasky.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Skynet
          </a>
          . Built using React. View the source on&nbsp;
          <a
            href="https://github.com/jnewmaninpa/jgnewman.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>

      <div className="project-card">
        <h1>
          <a
            href="https://jgnewman.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Personal Website
          </a>
          &nbsp;(this site)
        </h1>
        <p>
          My personal portfolio website hosted using Apps on&nbsp;
          <a
            href="https://www.digitalocean.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            DigitalOcean
          </a>
          . Built using React. View the source on&nbsp;
          <a
            href="https://github.com/jnewmaninpa/jgnewman.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
