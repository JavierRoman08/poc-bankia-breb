import Spacer from "../atoms/spacer/spacer";
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
      <section className="container flex">
        {children}
      </section>
      <Spacer />
    </main>
  );
}

export default BreBLayout;
