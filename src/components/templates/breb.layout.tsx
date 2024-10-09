import BreBNavbar from "../molecules/bre-b-navbar/bre-b.navbar";

function BreBLayout({children}: any) {
  return (
    <main style={{width: '100%', maxWidth: '480px', margin: 'auto'}}>
      <BreBNavbar />
      <section className="container">
        {children}
      </section>
    </main>
  );
}

export default BreBLayout;
