//higher order component - A component{HOC} that renders other component

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>Info is : {props.info}</p>
  </div>
);

const widthAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private Info plz dont share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

//sbi.61112@sbi.co.in mail - status of subsidy
//loan account number:38071427461

//require authentication
const requireAuthentication = WrappedComponent => {
  return props => (
    <diV>
      <WrappedComponent {...props} />
    </diV>
  );
};

const AdminInfo = widthAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(
  <AdminInfo isAdmin={true} info="this is the data" />,
  document.getElementById("app")
);
