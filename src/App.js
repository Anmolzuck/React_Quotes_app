import { Redirect, Route, Switch } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import QuotesDetail from "./pages/QuotesDetail";
import NewQuotes from "./pages/NewQuotes";
import NotFound from "./pages/NotFound";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuotesDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuotes />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
