
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css'; 

const Navigation = () => {
  return (
    <header>
      <nav>
        <NavLink className={styles.main_link} to="/" end>
          Home
        </NavLink>
        <NavLink className={styles.main_link} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
