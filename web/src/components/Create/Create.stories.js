import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {CreateDumb as Create} from './Create';

storiesOf('Create', module).add('default', () => (
  <div style={{width: '400px', margin: '2%', backgroundColor: '#f5f5f5'}}>
    <Create onDismiss={action('Dismiss click')} onCreate={action('Create click')} />
  </div>
));
