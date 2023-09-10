import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import myUrl from "./MyUrl.tsx";

// Routing (components to show)
const logPage = () => <h2>Login</h2>;
const mainPage = () => <h2>Main</h2>;

function App() {
  // Set state, then set routing after since uses state variable
  const [message, setMessage] = useState("this");
  const messageTest = () => <h2>Message: {message}</h2>;

  // "useEffect" makes it so we only process this after page/html has rendered.
  useEffect(() => {
    fetch(myUrl.defaults.baseURL + "/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.note));
  }, []);

  return (
    <>
      <div>
        <BrowserRouter>
          <div>
            {/* Associate url path with component */}
            <Route exact={true} path="/" component={mainPage} />
            <Route exact={true} path="/login" component={logPage} />
            <Route exact={true} path="/message" component={messageTest} />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
