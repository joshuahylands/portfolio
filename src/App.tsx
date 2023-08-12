import { useEffect, useState } from 'react';
import Project from './Project';
import projects from './projects';

import styles from './app.module.scss';

function App() {
  const [projectIndex, setProjectIndex] = useState(0);

  // Attach a callback to the 'onwheel' event to change the projectIndex on scroll
  useEffect(() => {
    window.onwheel = e => {
      if (e.deltaY > 0 && projectIndex < projects.length - 1) { // Scroll Up
        setProjectIndex(projectIndex + 1);
      } else if (e.deltaY < 0 && projectIndex != 0) { // Scroll Down
        setProjectIndex(projectIndex - 1);
      }
    };

    return () => {
      window.onwheel = null;
    };
  }, [projectIndex]);

  return (
    <>
      <header className={styles.header}>
        <h1>JoshuaHylands</h1>
        <a href="https://github.com/joshuahylands" target="_blank"><img src="/github.svg"/></a>
      </header>
      <main className={styles.projects} style={{ transform: `translateY(-${projectIndex * 100}vh)` }}>
        {
          projects.map(project => (<Project key={project.name} {...project}/>))
        }
      </main>
      <footer className={styles.pageIndicator}>
        {
          [...new Array(projects.length)].map((_, i) => (
            <div
              key={i}
              className={i == projectIndex ? styles.pageIndicatorSelected : ''}
              onClick={() => setProjectIndex(i)}/>
          ))
        }
      </footer>
    </>
  );
}

export default App;
