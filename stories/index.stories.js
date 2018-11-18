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

storiesOf("Card", module)
  .add("default", () => (
    <Component>
      <Card title="Avg Completion" onClick={action("clickable")}>
        <table className="striped">
          <tbody>
            <tr>
              <td>Geopolitics</td>
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
        title="Avg Completion"
        icon="play_arrow"
        onClick={action("clickable")}
      />
    </Component>
  ))
  .add("CardIcon", () => (
    <Component>
      <CardIcon
        message="Some message"
        title="Avg Completion"
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
