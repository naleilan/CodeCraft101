function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <p>
          Code Craft <span>101</span>
        </p>
        <div className="navbar">
          <h4>Home</h4>
          <h4>About</h4>
          <h4>Projects</h4>
        </div>
      </nav>
    </header>
  );
}

function Main() {
  return <main>Main</main>;
}

function Footer() {
  return <footer>Footer</footer>;
}

export default App;
