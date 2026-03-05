import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header   from "./components/Header/Header";
import Footer   from "./components/Footer/Footer";
import Body     from "./components/Body/Body";
import About    from "./pages/About";
import Programs from "./pages/Programs";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/"         element={<Body />} />
        <Route path="/about"    element={<About />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
