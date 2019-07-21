import React, { useContext } from "react";
import { RestyContext } from "../../../context/restyContext";

/**
 * Basic Input Password class/component
 * @description input field for password with info being passed via useContext
 */
const BasicInputPass = () => {
  const state = useContext(RestyContext);
    return(
      <input
      onChange={state.onChange}
      name="password"
      type="password"
      placeholder="Password"
      value={state.password}
    />
    )
}

export default BasicInputPass;