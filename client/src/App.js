import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./Pages/Books";
import Detail from "./Pages/Detail";
import NoMatch from "./Pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/saved" component={Detail} />
      </div>
    </Router>
  );
}

export default App;
