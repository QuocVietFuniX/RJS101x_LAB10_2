import React, { Component } from "react";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";

import Home from "./HomeComponent";
import { Route, Switch, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    console.log("Constructor");
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    const HomePage = (props) => {
      return <Home />;
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;
