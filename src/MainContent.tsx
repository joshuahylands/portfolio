import { Route, Routes } from 'react-router-dom';

import NavBar from './NavBar';
import Projects from './pages/Projects';

import styles from './main.module.scss';

function Main() {
  return (
    <div className={styles.main}>
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Projects/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default Main;
