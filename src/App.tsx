import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Main from './MainContent';
import TechStack from './TechStack';

import styles from './app.module.scss';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header/>
        <Main/>
        <TechStack/>
      </div>
    </BrowserRouter>
  );
}

export default App;
