import { Route, Routes } from 'react-router-dom';

import NavBar from './NavBar';

import styles from './main.module.scss';

function Main() {
  return (
    <div className={styles.main}>
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<span>Home</span>}/>
          <Route path="/projects" element={<span>Projects</span>}/>
          <Route path="/projects/radar" element={<span>Radar</span>}/>
        </Routes>
      </main>
    </div>
  );
}

export default Main;
