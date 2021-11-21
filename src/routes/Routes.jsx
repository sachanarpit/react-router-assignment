import { Route, Switch } from "react-router-dom";
import { Product } from "../components/SingleProduct";
import { Navbar } from "./Navbar";

export const Routes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>

        <Route exact path="/products">
          <h1>Products</h1>
        </Route>

        <Route path="/products/:id">
          <Product />
        </Route>
        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </>
  );
};
