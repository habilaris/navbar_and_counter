import Counter from "./components/Counter";
import Home from "./pages/Home";
import About from "./pages/About";
import MouseHoverCounter from "./components/MouseHoverCounter";
import ErrorPage from "./pages/404";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Visible components will be mounted inside browser router */}
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mouse-counter" element={<MouseHoverCounter />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
