import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authSelectors } from "../redux/auth/index";

const PrivateRoute = ({
  component: Component,
  redirectTo,
  token,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  token: authSelectors.getToken(state),
});

export default connect(mapStateToProps, null)(PrivateRoute);
