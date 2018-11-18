import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Component from "../src/Component";
import CardNumber from "../src/CardNumber";
import CardIcon from "../src/CardIcon";
import Card from "../src/Card";
import Button from "../src/Button";
import ButtonFixed from "../src/ButtonFixed";
import BadgeIcon from "../src/BadgeIcon";
import Loading from "../src/Loading";
import Navbar from "../src/Navbar";

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
