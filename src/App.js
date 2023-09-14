import "./App.css";
import Navbar from "./components/Navbar.jsx";
import News from "./components/News.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];
  return (
    <div className="App">
      <Router>
        <Navbar categories={categories} />
        <Routes>
          <Route
            key="/"
            exact
            path="/"
            element={<News country="in" category="general" />}
          />
          {categories.map((category) => (
            <Route
              key={category}
              exact
              path={`/${category.toLowerCase()}`}
              element={<News country="in" category={category.toLowerCase()} />}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// 01c4556a49ba4b1983b2b56fb4dd6492