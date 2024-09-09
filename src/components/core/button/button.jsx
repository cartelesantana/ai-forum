import React from "react";

// type propsType = {
//   text?: String,
//   children: React.ReactNode
// };

const Button = (props) => {
  return (
    <button className="px-6 py-3 rounded-md bg-primary_dl font-semibold duration-300 hover:bg-orange-500" onClick={props?.onClick} >{props?.text || props?.children}</button>
  );
};

export default Button;
