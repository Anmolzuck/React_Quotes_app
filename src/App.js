import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
// import QuotesDetail from "./pages/QuotesDetail";
// import NewQuotes from "./pages/NewQuotes";
// import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

//Lazy loading
const NewQuotes = React.lazy(() => import("./pages/NewQuotes"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const QuotesDetail = React.lazy(() => import("./pages/QuotesDetail"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centerd">
            <LoadingSpinner />
          </div>
        }
      >
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
      </Suspense>
    </Layout>
  );
}

export default App;
