import styles from './project.module.scss';

export type ProjectProps = {
  image?: string;
  name: string;
  description: string;
  link?: string;
  repoLink: string;
  techStackLogos: string[];
};

function Project(props: ProjectProps) {
  return (
    <div className={styles.project}>
      { props.image && <img src={props.image}/> }
      <main>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <div>
          { props.link && <a href={props.link} target="_blank">Live App</a> }
          <a href={props.repoLink} target="_blank">Source Code</a>
        </div>
      </main>
      <footer>
        {
          props.techStackLogos.map(logo => (
            <img key={logo} src={logo}/>
          ))
        }
      </footer>
    </div>
  );
}

export default Project;
