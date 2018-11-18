import * as React from "react";

import { css, StyleSheet } from "aphrodite";

import {
  backgroundGradient,
  boxShadowWithColor,
  textColorWithGradient
} from "./config";
import "./materialize.css";
import "./materialize.js";

interface IProps {
  hasUser?: boolean;
  name?: string;
  description?: string;
  children?: any;
  logo?: string;
  onClickLogo?: () => void;
  renderRight?: any;
}

export class Loading extends React.Component<IProps> {
  public componentDidMount() {
    const elems = document.querySelectorAll(".sidenav");

    // @ts-ignore
    const instances = M.Sidenav.init(elems, { closeOnClick: true });
  }

  public render() {
    const {
      children,
      hasUser,
      logo,
      name,
      description,
      renderRight,
      onClickLogo
    } = this.props;

    return (
      <>
        <nav className={css(styles.navbar)}>
          <div className="nav-wrapper">
            {logo && (
              <img
                className={css(styles.logo)}
                src={logo}
                onClick={onClickLogo}
              />
            )}
            <a
              href="#"
              data-target="mobile-demo"
              className={`${css(styles.menu)} sidenav-trigger`}
            >
              <i className="material-icons">menu</i>
            </a>
            {renderRight}
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          {hasUser && (
            <>
              <li>
                <div className={css(styles.userView)}>
                  <i className={`${css(styles.user)} material-icons large`}>
                    account_circle
                  </i>
                  <span className={`${css(styles.userText)} name`}>
                    {name}
                    <br />
                    {description}
                  </span>
                </div>
              </li>
              {children}
            </>
          )}
        </ul>
      </>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    "@media only screen and (max-width: 600px)": {
      height: 40
    },
    cursor: "pointer",
    height: 46,
    marginTop: 10
  },
  menu: {
    display: "inherit"
  },
  navbar: {
    background: backgroundGradient,
    boxShadow: boxShadowWithColor
  },
  user: {
    color: textColorWithGradient
  },
  userText: {
    color: textColorWithGradient,
    display: "block",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "24px"
  },
  userView: {
    background: backgroundGradient,
    marginBottom: 8,
    padding: "32px 32px 0 ",
    paddingBottom: 10,
    position: "relative"
  }
});

export default Loading;
