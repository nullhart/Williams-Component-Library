import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { storiesOf } from '@storybook/vue';
import centered from '@storybook/addon-centered/vue';
import figmaDecorator from 'storybook-addon-figma';


import TextBox from '../src/components/TextBox.vue';


storiesOf('TextBox', module)
  .addDecorator(centered).addDecorator(figmaDecorator({
    url: 'https://www.figma.com/file/oyd1EvHlecC1D0lcbC5gzi/Offline-Forms?node-id=4%3A11',
  }))
  .add('Basic', () => ({
    components: { TextBox },
    template: '<TextBox style="width: 300px;"  :data="{label: `Name`,required: `true`}" />',
  }))


