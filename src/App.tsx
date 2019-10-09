import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Routes } from "./Routes";
import { Home } from "./routes/Home";
import { VoucherRequestForm } from "./routes/VoucherRequestForm";
import { VoucherRequestGForm } from "./routes/VoucherRequestGForm";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.VoucherRequestForm}>
          <VoucherRequestForm />
        </Route>
        <Route path={Routes.VoucherRequestGForm}>
          <VoucherRequestGForm />
        </Route>
        <Route path={Routes.Home}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
