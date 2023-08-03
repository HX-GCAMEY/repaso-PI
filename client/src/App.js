import {Route, BrowserRouter, Switch} from "react-router-dom";

import Create from "./views/create/create.component";
import Detail from "./views/detail/detail.component";
import Home from "./views/home/home.component";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/home/:id" component={Detail} />
          <Route path="/create" component={Create} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
