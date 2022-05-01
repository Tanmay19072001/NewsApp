import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const pageSize = 20;
  const apiKey = "d5e9a2c83ef94a9c8e4149286f466b2b";

  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <News
              // setProgress={this.setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              // setProgress={this.setProgress}
              apiKey={apiKey}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              // setProgress={this.setProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/health">
            <News
              // setProgress={this.setProgress}
              apiKey={apiKey}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              // setProgress={this.setProgress}
              apiKey={apiKey}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              // setProgress={this.setProgress}
              apiKey={apiKey}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              // setProgress={this.setProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
