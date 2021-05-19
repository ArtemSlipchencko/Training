import { Suspense } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import routes from "./routes";
import Header from "./components/Header";

function App() {
  const routesMap = routes.map((route) => {
    return route.privated ? (
      <PrivateRoute key={route.path} {...route} />
    ) : (
      <PublicRoute key={route.path} {...route} />
    );
  });

  return (
    <>
      <div className="back"></div>
      <Header />
      <Suspense fallback="Loading">
        <Switch>{routesMap}</Switch>
      </Suspense>
    </>
  );
}

export default App;
