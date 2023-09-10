import { BrowserRouter, Route } from "react-router-dom";

// Routing (components to show)
const logPage = () => <h2>Login</h2>;
const mainPage = () => <h2>Main</h2>;

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <div>
            {/* Associate url path with component */}
            <Route exact={true} path="/" component={mainPage} />
            <Route exact={true} path="/login" component={logPage} />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
