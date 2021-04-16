import { Suspense } from "react";
import { Switch, NavLink } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { authSelectors } from "./redux/auth/index";
import routes from "./routes";

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
      <NavLink to="/">Home</NavLink>
      <NavLink to="/auth">Auth</NavLink>
      <Suspense fallback="Loading">
        <Switch>{routesMap}</Switch>
      </Suspense>
    </>
  );
}

export default App;
