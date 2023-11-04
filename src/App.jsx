import AnimateRoute from "./Components/AnimateRoute";
import Header from "./Components/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <AnimateRoute />
      </Router>
    </div>
  );
}

export default App;
