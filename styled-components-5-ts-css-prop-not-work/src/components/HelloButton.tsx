import React from "react";

interface ButtonProps {
  size?: string;
  color?: string;
}

// export const HelloButton = (props: HelloButtonProps) => <button>Hello {props.bthTitle} </button>;

export class HelloButton extends React.Component<ButtonProps, {}> {
  render() {
    let paddingSize = "10px 30px";
    const btnStyle = {
      backgroundColor: "mediumseagreen",
      color: this.props.color || "grey",
      border: "none",
      borderRadius: "3px",
      padding: paddingSize
    };
    if (this.props.size === "sm") {
      paddingSize = "5px 20px";
    }
    if (this.props.size === "lg") {
      paddingSize = "15px 40px";
    }
    btnStyle.padding = paddingSize;
    return <button style={btnStyle}> {this.props.children} </button>;
  }
}
