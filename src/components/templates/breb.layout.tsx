import BreBNavbar from "../molecules/bre-b-navbar/bre-b.navbar";

const styles = {
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  maxWidth: '480px',
  margin: 'auto',
  display: 'flex', 
  flexDirection: 'column'
}

function BreBLayout({children}: any) {
  return (
    <main style={styles}>
      <BreBNavbar />
      <section className="container" style={{flex: 1 }}>
        {children}
      </section>
    </main>
  );
}

export default BreBLayout;
