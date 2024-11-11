import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/Home";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

function App() {

  const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache()
  });




  return (

    <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
    </ApolloProvider>
  );
}

export default App;
