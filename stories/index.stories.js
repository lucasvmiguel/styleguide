import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Component from "styleguid/Component";
import CardNumber from "styleguid/CardNumber";
import CardIcon from "styleguid/CardIcon";
import Card from "styleguid/Card";
import Button from "styleguid/Button";
import ButtonFixed from "styleguid/ButtonFixed";
import BadgeIcon from "styleguid/BadgeIcon";
import Loading from "styleguid/Loading";
import Navbar from "styleguid/Navbar";

storiesOf("Card", module)
  .add("default", () => (
    <Component>
      <Card title="Title" onClick={action("clickable")}>
        <table className="striped">
          <tbody>
            <tr>
              <td>
                Geopolitics
                <BadgeIcon tooltop="whatever" message="99%" icon="play_arrow" />
              </td>
            </tr>
            <tr>
              <td>Aviation</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </Component>
  ))
  .add("CardNumber", () => (
    <Component>
      <CardNumber
        metric={23}
        title="Title"
        icon="play_arrow"
        onClick={action("clickable")}
      />
    </Component>
  ))
  .add("CardIcon", () => (
    <Component>
      <CardIcon
        message="Some message"
        title="Title"
        icon="play_arrow"
        onClick={action("clickable")}
      />
    </Component>
  ));

storiesOf("Badge", module).add("BadgeIcon", () => (
  <Component>
    <BadgeIcon tooltop="whatever" message="99%" icon="play_arrow" />
  </Component>
));

storiesOf("Loading", module).add("default", () => (
  <Component>
    <Loading />
  </Component>
));

storiesOf("Navbar", module).add("default", () => (
  <Component>
    <Navbar
      hasUser={true}
      name="Lucas"
      description="Whatever"
      logo="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png"
      onClickLogo={action("clickable")}
      renderRight={
        <ul className="right">
          <li>
            <a>
              <span className="left">Sign Out</span>
              <i className="material-icons right">exit_to_app</i>
            </a>
          </li>
        </ul>
      }
    >
      <li>
        <a>
          <i className="material-icons">dashboard</i>
          Dashboard
        </a>
      </li>
    </Navbar>
  </Component>
));

storiesOf("Button", module)
  .add("default", () => (
    <Component>
      <Button text="submit" icon="send" onClick={action("clickable")} />
    </Component>
  ))
  .add("ButtonFixed", () => (
    <Component>
      <ButtonFixed tooltip="submit" icon="send" onClick={action("clickable")} />
    </Component>
  ));
