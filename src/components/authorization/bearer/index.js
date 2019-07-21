import React, { useContext } from "react";
import { RestyContext } from "../../../context/restyContext";

/**
 * Bearer class/component
 * @description input field with info being passed via props
 */
const Bearer = () => {
  const state = useContext(RestyContext);
    return(
      <input
      onChange={state.onChange}
      type="text"
      className="wide"
      name="token"
      placeholder="Token"
      value={state.token}
    />
    )
}

export default Bearer;