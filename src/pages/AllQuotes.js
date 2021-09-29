import QuoteList from "../components/quotes/QuoteList";

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

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};

export default AllQuotes;
