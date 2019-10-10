import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";
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
  // let basename = "/msnap-registration";
  // if (typeof window !== "undefined" && window.location.host.startsWith("localhost")) {
  //   basename = "/";
  // }

  console.log("process.env.PUBLIC_URL", process.env.PUBLIC_URL);

  return (
    <StateProvider>
      <Initializer />
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path={Routes.VoucherRequestGForm}>
            <VoucherRequestGForm />
          </Route>
          <Route path={Routes.Home}>
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    </StateProvider>
  );
};

export default App;
