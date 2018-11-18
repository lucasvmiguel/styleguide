import * as React from "react";

import { css, StyleSheet } from "aphrodite";

interface IProps {
  children?: any;
}

export class CardNumber extends React.Component<IProps> {
  public render() {
    return <div className={css(styles.component)}>{this.props.children}</div>;
  }
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: "#f5f5f5",
    padding: 50
  }
});

export default CardNumber;
