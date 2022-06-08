import './App.css';
import Login from "./components/Login"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://staging.api.wissenwirkt.com/api/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <div className="App">
       <ApolloProvider client={client}>
      <Login />
      </ApolloProvider>
    </div>
  );
}

export default App;
