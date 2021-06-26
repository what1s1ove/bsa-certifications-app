import styles from './styles.module.css';

const NotFound = () => (
  <section className={styles.wrapper}>
    <h2 className="sr-only">Page not found</h2>
    <p className={styles.placeholder}>Oops... page not found</p>
  </section>
);

export default NotFound;
