import * as React from "react";

import { css, StyleSheet } from "aphrodite";

import { backgroundGradient, boxShadowWithColor } from "./config";
import "./materialize.css";
import "./materialize.js";

interface IProps {
  onClick: () => void;
  icon: string;
}

export class ButtonFixed extends React.Component<IProps> {
  public render() {
    const { icon, onClick } = this.props;

    return (
      <div className={css(styles.fixed)}>
        <a
          className={`${css(styles.button)} btn-floating btn-large`}
          onClick={onClick}
        >
          <i className="large material-icons">{icon}</i>
        </a>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    background: backgroundGradient,
    boxShadow: boxShadowWithColor
  },
  fixed: {
    bottom: 23,
    marginBottom: 0,
    paddingTop: 15,
    position: "fixed",
    right: 23,
    zIndex: 998
  }
});

export default ButtonFixed;
