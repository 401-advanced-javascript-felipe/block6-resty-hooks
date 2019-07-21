import React, { useContext } from "react";
import { RestyContext } from "../../../context/restyContext";

/**
 * Basic Input Username class/component
 * @description input field for username with info being passed via props
 */
const BasicInputUser = () => {
  const state = useContext(RestyContext);
    return(
      <input
          onChange={state.onChange}
          name="username"
          placeholder="Username"
          value={state.username}
        />
    )
}

export default BasicInputUser;