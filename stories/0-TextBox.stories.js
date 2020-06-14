import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { storiesOf } from '@storybook/vue';
import centered from '@storybook/addon-centered/vue';


import TextBox from '../src/components/TextBox.vue';


storiesOf('TextBox', module)
  .addDecorator(centered)
  .add('Basic', () => ({
    components: { TextBox },
    template: '<TextBox style="width: 500px;" action="action" :data="{label: `test`,required: `true`}" />',
    methods: { action: action('clicked') },
  }))


