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
        <div>
          Code Craft <span className="square101">101</span>
        </div>
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
  return (
    <main>
      <div className="searchbtn">
        <label htmlFor="search">Search</label>
        <input id="search" type="search" pattern=".*\S.*" required />
        <span className="caret"></span>
      </div>

      <section className="cards">
        <div className="card">
          <h2>Code Craft 101</h2>
          <p>Developed an SEO-friendly website</p>
          <img
            className="imgs"
            src="/public/img/CodeCraft101.jpg"
            alt="CodeCraft101"
          />
          <div className="btns">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/naleilan/CodeCraft101"
              className="code"
            >
              <button>Code</button>
            </a>
            <a target="_blank" rel="noreferrer" href="#" className="preview">
              <button>Preview</button>
            </a>
          </div>
        </div>

        <div className="card">
          <h2>Forkify</h2>
          <p>Developed an SEO-friendly website</p>
          <img className="imgs" src="public/img/forkify.jpg" alt="Forkify" />
          <div className="btns">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/naleilan/forkify"
              className="code"
            >
              <button>Code</button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://forkifydine.netlify.app/"
              className="preview"
            >
              <button>Preview</button>
            </a>
          </div>
        </div>

        <div className="card">
          <h2>Mapify</h2>
          <p>Developed an SEO-friendly website</p>
          <img className="imgs" src="public/img/mapify.jpg" alt="mapify" />
          <div className="btns">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/naleilan/mapify"
              className="code"
            >
              <button>Code</button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://naleilan.github.io/mapify/"
              className="preview"
            >
              <button>Preview</button>
            </a>
          </div>
        </div>

        <div className="card">
          <h2>Steps Slider</h2>
          <p>Developed an SEO-friendly website</p>
          <img
            className="imgs"
            src="public/img/steps-slider.jpg"
            alt="CodeCraft101"
          />
          <div className="btns">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/naleilan/steps-slider"
              className="code"
            >
              <button>Code</button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://steps-slider.netlify.app/"
              className="preview"
            >
              <button>Preview</button>
            </a>
          </div>
        </div>

        <div className="card">
          <h2>Check List</h2>
          <p>Developed an SEO-friendly website</p>
          <img
            className="imgs"
            src="public/img/checklist.jpg"
            alt="checklist"
          />
          <div className="btns">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/naleilan/travel-list"
              className="code"
            >
              <button>Code</button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://traveler-list.netlify.app/"
              className="preview"
            >
              <button>Preview</button>
            </a>
          </div>
        </div>

        <div className="card">
          <h2>Profile Card</h2>
          <p>Developed an SEO-friendly website</p>
          <img
            className="imgs"
            src="public/img/profilecard.jpg"
            alt="ProfileCard"
          />
          <div className="btns">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/naleilan/javascriptAssignments/blob/main/ProfileCard"
              className="code"
            >
              <button>Code</button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://profilecard101.netlify.app/"
              className="preview"
            >
              <button>Preview</button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-div">
        <a href="https://github.com/naleilan" target="-blank">
          <svg
            className="icons"
            stroke="currentColor"
            fill="#fff"
            strokeWidth="0"
            viewBox="0 0 496 512"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
          </svg>
        </a>

        <a href="https://twitter.com/NaLeilan" target="-blank">
          <svg
            className="icons"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 45 45"
          >
            <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
          </svg>
        </a>
      </div>
      <p className="copyright">
        &copy; {currentYear} <span className="footer-name">Leilan Na</span>
      </p>
      <p></p>
    </footer>
  );
}

export default App;
