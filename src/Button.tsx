import * as React from "react";

import { css, StyleSheet } from "aphrodite";

import { backgroundGradient } from "./config";
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
    background: backgroundGradient
  }
});

export default Button;
