import Main from './MainContent';
import TechStack from './TechStack';
import Header from './Header';
import styles from './app.module.scss';
import { BrowserRouter } from 'react-router-dom';

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
