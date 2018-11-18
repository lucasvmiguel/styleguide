import * as React from "react";

import { css, StyleSheet } from "aphrodite";
import "./materialize.css";
import "./materialize.js";

interface IProps {
  text: string;
  onClick: () => void;
  icon?: string;
}

export class Button extends React.Component<IProps> {
  public render() {
    const { icon, onClick, text } = this.props;

    return (
      <button
        className={`${css(styles.button)} waves-effect waves-light btn`}
        onClick={onClick}
      >
        {icon && <i className="material-icons left">{icon}</i>}
        {text}
      </button>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    background: "linear-gradient(45deg,#1e88e5,#64b5f6)"
  }
});

export default Button;
