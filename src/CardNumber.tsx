import * as React from "react";

import { css, StyleSheet } from "aphrodite";
import './materialize.css'
import './materialize.js'

interface IProps {
  title?: string;
  icon?: string;
  metric: string | number;
  tooltip?: string;
  onClick?: () => void;
}

export class CardNumber extends React.Component<IProps> {
  public componentDidMount() {
      const elems = document.querySelectorAll('.tooltipped');
      // @ts-ignore
      const instances = M.Tooltip.init(elems, {});
  }

  public render() {
    const { icon, metric, onClick, title, tooltip } = this.props;

    return (
      <div className={`${css(styles.gradient)} card`}>
        <div className="card-content">
          {title && (
            <span className={`${css(styles.cardTitle)} card-title`}>
              {title}
            </span>
          )}
          <p className={css(styles.cardNumber)}>
            {icon && (
              <span className="left" onClick={onClick}>
                <i
                  className={`${css(
                    styles.icon
                  )} tooltipped material-icons small`}
                  data-tooltip={tooltip || title}
                >
                  {icon}
                </i>
              </span>
            )}
            <span>{metric}</span>
          </p>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  cardNumber: {
    color: "white",
    fontSize: 54,
    fontWeight: 200,
    textAlign: "right"
  },
  cardTitle: {
    color: "white",
    fontSize: 20
  },
  gradient: {
    background: "linear-gradient(45deg, #1e88e5 0%, #64b5f6 100%)",
    boxShadow: "0 6px 20px 0 rgba(30, 136, 229, 0.5)"
  },
  icon: {
    backgroundColor: "rgba(100, 181, 246, 0.5)",
    borderRadius: "1.75rem",
    cursor: "pointer",
    height: "3.5rem",
    paddingRight: "0.75rem",
    paddingTop: "0.75rem",
    width: "3.5rem"
  }
});

export default CardNumber;
