import Badge from '../components/Badge';

import styles from './projects.module.scss';

const TYPESCRIPT_COLOR = '#3178C6';
const REACT_COLOR = '#61DBFB';
const SASS_COLOR = '#c69';

function Projects() {
  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
      <ul>
        <li>
          <div>
            <a href="https://radar.hylands.dev/" target="_blank">Radar</a>
            <a href="https://github.com/joshuahylands/radar" target="_blank"><img src="/github.svg"/></a>
          </div>
          <div>
            <Badge color={TYPESCRIPT_COLOR}>Typescript</Badge>
            <Badge color={REACT_COLOR}>React</Badge>
            <Badge color={SASS_COLOR}>Sass</Badge>
          </div>
          <span>A flight tracking app</span>
        </li>
        <li>
          <div>
            <span>Portfolio</span>
            <a href="https://github.com/joshuahylands/portfolio" target="_blank"><img src="/github.svg"/></a>
          </div>
          <div>
            <Badge color={TYPESCRIPT_COLOR}>Typescript</Badge>
            <Badge color={REACT_COLOR}>React</Badge>
            <Badge color={SASS_COLOR}>Sass</Badge>
          </div>
          <span>This site!</span>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
