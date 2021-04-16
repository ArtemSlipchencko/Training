import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authSelectors } from "../redux/auth/index";

const PublicRoute = ({
  component: Component,
  redirectTo,
  token,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        token && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  token: authSelectors.getToken(state),
});

export default connect(mapStateToProps, null)(PublicRoute);
