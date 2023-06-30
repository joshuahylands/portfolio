import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './navbar.module.scss';

function NavBar() {
  const { pathname } = useLocation();
  const links = useMemo<React.JSX.Element[]>(() => {
    const pathnameParts = pathname.split('/');
    let link = '';

    return pathnameParts
      .filter(part => part != '')
      .map((part) => {
        link += `/${part}`;

        return <li key={link}><Link to={link}>{part}</Link></li>;
      });
  }, [pathname]);

  return (
    <ul className={styles.navbar}>
      <li><Link to="/">~</Link></li>
      {links}
    </ul>
  );
}

export default NavBar;
