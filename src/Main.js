import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Potfolio";
import Proizvostvo from "./components/Proizvodstvo";
import Service from "./components/Service"

export default function Main() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/service" component={Service}/>
           <Route exact path='/about' component={About}/>
           <Route exact path='/contacts' component={Contacts}/> 
           <Route exact path='/portfolio' component={Portfolio}/>
           <Route exact path='/proizvodstvo' component={Proizvostvo}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
