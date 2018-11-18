import * as React from "react";

import { css, StyleSheet } from "aphrodite";
import "./materialize.css";
import "./materialize.js";

interface IProps {
  title?: string;
  onClick?: () => void;
  children?: any;
}

export class Card extends React.Component<IProps> {
  public render() {
    const { children, onClick, title } = this.props;

    return (
      <div className={`${css(styles.card)} card`} onClick={onClick}>
        <div className="card-content">
          {title && (
            <span className={`${css(styles.cardTitle)} card-title`}>
              {title}
            </span>
          )}
          {children}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    "-webkit-box-shadow": "0 6px 20px 0 rgba(82,82,82,.1)",
    boxShadow: "0 6px 20px 0 rgba(82,82,82,.1)"
  },
  cardTitle: {
    fontSize: 20
  }
});

export default Card;
