import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Component from '../src/Component';
import CardNumber from '../src/CardNumber';
import CardIcon from '../src/CardIcon';
import BadgeIcon from '../src/BadgeIcon';

storiesOf('Card', module)
  .add('CardNumber', () => (
    <Component>
      <CardNumber metric={23} title='Avg Completion' icon='play_arrow' onClick={action  ('clickable')} />
    </Component>))
  .add('CardIcon', () => (
    <Component>
      <CardIcon message='Some message' title='Avg Completion' icon='play_arrow' onClick={action ('clickable')} />
    </Component>));

storiesOf('Badge', module)
  .add('BadgeIcon', () => (
    <Component>
      <BadgeIcon tooltop='whatever' message='99%' icon='play_arrow' />
    </Component>));

