import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getWithExpiry } from "../helpers";

/* 
  this HOC checks login page and if user is already logged in,
  then redirects user to homepage
*/

export const CheckLogin = WrappedComponent => {
  const MyComponent = props => {
    const navigate = useNavigate();
    const [access, setAccess] = useState(false);

    useEffect(() => {
      if (getWithExpiry("token")) navigate("/home");
      else setAccess(true);
    }, [navigate]);

    return access && <WrappedComponent {...props} />;
  };

  return MyComponent;
};
