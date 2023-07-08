import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <h1>JoshuaHylands</h1>
      <nav>
        <a href="https://github.com/joshuahylands" target="_blank"><img src="/github.svg"/></a>
      </nav>
    </header>
  );
}

export default Header;
