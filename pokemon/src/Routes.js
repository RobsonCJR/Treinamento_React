import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Pokedex from "./views/Pokedex";

const Routes = () => {
	return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/pokedex" component={Pokedex} />
    </Switch>
    </BrowserRouter>
    );
};

export default Routes;