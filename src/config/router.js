//ROUTER

//IMPORTING
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUsPage from "../components/AboutUsPage"
import Home from "../components/Home"
import ProductsPage from "../components/ProductsPage"
import CareersPage from "../components/CareersPage"
import ContactUsPage from "../components/ContactUsPage"
import ServicesPage from "../components/ServicesPage"

//APP ROUTER
class AppRouter extends React.Component {
    render() {
        return (
                  <Router>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/about" component={AboutUsPage} />
                      <Route exact path="/products" component={ProductsPage} />
                      <Route exact path="/career" component={CareersPage} />
                      <Route exact path="/contact" component={ContactUsPage} />
                      <Route exact path="/services" component={ServicesPage} />
                  </Router>
        )
    }
}

export default AppRouter;
