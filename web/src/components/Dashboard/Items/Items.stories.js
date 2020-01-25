import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { links } from '../../../mockData/links';
import { Items } from './Items';

storiesOf('Items', module).add('default', () => (
  <div style={{ width: '400px', margin: '2%' }}>
    <Items
      links={links}
      activeLink={links[0]}
      onDetails={action('Details click')}
    />
  </div>
));
