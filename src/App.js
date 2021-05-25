import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import AddPorto from './api_addPortofolio';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={About}></Route>
          <Route path="/add-portofolio" component={AddPorto}></Route>
        </Switch>
      </Router>
  );
}

export default App;
