import "./app.css";

// === Import the main layout sections of the portfolio. === //

// Header: top navigation / intro section.
import Header from "./components/header/Header";

// Main: main content area (about, projects, skills, etc.).
import Main from "./components/main/Main";

// Footer: bottom section (copyright).
import Footer from "./components/footer/Footer";

// Root App component – this is the main layout wrapper
// that stitches together the header, main content, and footer.
export default function App() {
  return (
    // Top-level container for the entire page.
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
