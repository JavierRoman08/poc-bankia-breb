import BreBNavbar from "../molecules/bre-b-navbar/bre-b.navbar";
import styles from './breb.layout.module.scss';

function BreBLayout({children}: any) {
  return (
    <main className={styles.container}>
      <BreBNavbar />
      <section className="container" style={{flex: 1 }}>
        {children}
      </section>
    </main>
  );
}

export default BreBLayout;
