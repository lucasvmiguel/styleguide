import * as React from "react";

import { css, StyleSheet } from "aphrodite";
import './materialize.css'
import './materialize.js'

interface IProps {
  title: string;
  icon: string;
  message?: string;
  tooltip?: string;
  onClick?: () => void;
}

export class CardIcon extends React.Component<IProps> {
  public componentDidMount() {
      const elems = document.querySelectorAll('.tooltipped');
      // @ts-ignore
      const instances = M.Tooltip.init(elems, {});
  }

  public render() {
    const { icon, message, onClick, title, tooltip } = this.props;

    return (
      <div className={`${css(styles.gradient)} card`}>
        <div className="card-content center">
          <p className={css(styles.cardIcon)} >
          <span onClick={onClick}>
              <i
                className={`${css(
                  styles.icon
                )} tooltipped material-icons large`}
                data-tooltip={tooltip || title}
              >
                {icon}
              </i>

            </span>
              <p className={css(styles.cardTitle)}>
                {title}
              </p>
              {message && 
                <p className={css(styles.cardMessage)}>
                  {message}
                </p>}
          </p>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  cardMessage: {
    color: "white",
    fontSize: 16
  },
  cardIcon: {
    color: "white",
    fontSize: 54,
    fontWeight: 200,
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
    borderRadius: "3rem",
    cursor: "pointer",
    height: "6rem",
    paddingBottom: "1rem",
    width: "6rem"
  }
});

export default CardIcon;
