import React, { useContext } from "react";
import { RestyContext } from "../../context/restyContext";

/**
 * JsonText class/component
 * @description text area with crucial behaviour being passed down via props
 */

// class JsonText extends React.Component{
//   render(){
//     return(
//       <textarea
//         placeholder="Raw JSON Body"
//         name="requestBody"
//         onChange={this.props.onChange}
//         value={this.props.value}
//         disabled={
//           // this.state.method.match(/GET|get|DELETE|delete/) ? true : false
//           this.props.disabled
//         }
//       />
//     )
//   }
// }

// Function
const JsonText = () => {
  const state = useContext(RestyContext);
  return (
    <textarea
      placeholder="Raw JSON Body"
      name="requestBody"
      onChange={state.handleChange}
      value={state.value}
      disabled={
        state.method.match(/GET|get|DELETE|delete/) ? true : false
        // state.disabled
      }
    />
  );
};

export default JsonText;