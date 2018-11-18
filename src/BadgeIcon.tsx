import * as React from "react";

import { css, StyleSheet } from "aphrodite";
import './materialize.css'
import './materialize.js'

interface IProps {
  message?: string | number;
  icon: string;
  tooltip?: string;
}

export class BadgeIcon extends React.Component<IProps> {
  public componentDidMount() {
    const elems = document.querySelectorAll('.tooltipped');
    // @ts-ignore
    const instances = M.Tooltip.init(elems, {});
  }

  public render() {
    const { icon, message, tooltip } = this.props;

    return (
      <span
        data-tooltip={tooltip}
        className={`${css(styles.badge)} ${tooltip &&
          "tooltipped"} right white-text`}
      >
        {message}
        <i className={`${css(styles.icon)} material-icons white-text left`}>
          {icon}
        </i>
      </span>
    );
  }
}

const styles = StyleSheet.create({
  badge: {
    "@media only screen and (max-width: 600px)": {
      fontSize: 12,
      marginTop: 5,
      width: 55
    },
    background: "linear-gradient(45deg, #1e88e5 0%, #64b5f6 100%)",
    borderRadius: 2,
    color: "white",
    fontSize: 14,
    height: 32,
    lineHeight: "33px",
    marginLeft: 5,
    marginTop: 6,
    textAlign: "center",
    width: 80
  },
  icon: {
    "@media only screen and (max-width: 600px)": {
      fontSize: "1.1rem",
      paddingLeft: 0,
      width: "1.2rem"
    },
    fontSize: "1.3rem",
    lineHeight: "33px",
    marginRight: 0,
    paddingLeft: 15
  }
});

export default BadgeIcon;
