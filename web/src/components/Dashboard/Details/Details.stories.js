import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {links} from '../../../mockData/links';
import {DetailsDumb as Details} from './Details';
import {stats} from '../../../mockData/stats';

storiesOf('Details', module).add('default', () => (
  <div style={{width: '1000px', margin: '2%'}}>
    <Details link={links[0]} stats={stats} onCopy={action('Copy click')} />
  </div>
));
