import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { storiesOf } from '@storybook/vue';
import centered from '@storybook/addon-centered/vue';


import DropDown from '../src/components/DropDown.vue';

export default {
    title: 'DropDown',
    component: DropDown,
    viewport: {
        viewports: INITIAL_VIEWPORTS
    },
};



storiesOf('DropDown', module)
    .addDecorator(centered)
    .add('Basic', () => ({
        components: { DropDown },
        template: '<DropDown style="width: 500px;" :data="{label: `Select Option`,options: [{label: `1`, value: `1`},{label: `2`, value: `2`}]}" />',
        methods: { action: action('clicked') },

    }))




