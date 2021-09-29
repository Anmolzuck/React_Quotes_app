import { Fragment } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
  {
    id: "q1",
    author: "John",
    text: "Learnig react is fun!",
  },
  {
    id: "q2",
    author: "Max",
    text: "Learnig javascript is fun!",
  },
];

const QuotesDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  console.log(match);

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return "No quotes found!";
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuotesDetail;
