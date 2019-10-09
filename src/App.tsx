import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Routes } from "./Routes";
import { Home } from "./routes/Home";
import { VoucherRequestGForm } from "./routes/VoucherRequestGForm";
import { initializeAppEffect } from "./state/effects";
import { useStateValue, StateProvider } from "./state/state";

const Initializer: React.FC = () => {
  const [{ initialized }, dispatch] = useStateValue();
  useEffect(() => {
    if (initialized === false) {
      initializeAppEffect(dispatch);
    }
  });
  return null;
};

const App: React.FC = () => {
  return (
    <StateProvider>
      <Initializer />
      <BrowserRouter>
        <Switch>
          <Route path={Routes.VoucherRequestGForm}>
            <VoucherRequestGForm />
          </Route>
          <Route path={Routes.Home}>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </StateProvider>
  );
};

export default App;
