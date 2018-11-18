import * as React from "react";

import { css, StyleSheet } from "aphrodite";

import { color } from "./config";
import "./materialize.css";
import "./materialize.js";

export class Loading extends React.Component {
  public render() {
    return (
      <div className={`${css(styles.loading)} preloader-wrapper small active`}>
        <div className={`${css(styles.color)} spinner-layer`}>
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  color: {
    borderColor: color
  },
  loading: {
    left: "calc(50% - 1.2rem)",
    position: "fixed",
    top: "50%",
    zIndex: 1000
  }
});

export default Loading;
