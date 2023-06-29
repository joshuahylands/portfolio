import Main from './MainContent';
import TechStack from './TechStack';
import Header from './Header';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <Main/>
      <TechStack/>
    </div>
  );
}

export default App;
