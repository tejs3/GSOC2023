import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Tags from "./pages/Tags";
import KateAusten from "./pages/KateAusten";
import People from "./pages/People";
import Dashboard from "./pages/Dashboard";
import Event1 from "./pages/Event1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/tags":
        title = "";
        metaDescription = "";
        break;
      case "/kate-austen":
        title = "";
        metaDescription = "";
        break;
      case "/people":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/event":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tags" element={<Tags />} />
      <Route path="/kate-austen" element={<KateAusten />} />
      <Route path="/people" element={<People />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/event" element={<Event1 />} />
    </Routes>
  );
}
export default App;
