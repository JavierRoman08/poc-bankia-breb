import BreBNavbar from "../molecules/bre-b-navbar/bre-b.navbar";
import styles from './breb.layout.module.scss';

interface BreBLayoutProps {
  title?: string;
  children: any;
}

const BreBLayout = ({title, children}: BreBLayoutProps) => {
  return (
    <main className={styles.container}>
      <BreBNavbar title={title}/>
      <section className="container" style={{flex: 1 }}>
        {children}
      </section>
    </main>
  );
}

export default BreBLayout;
