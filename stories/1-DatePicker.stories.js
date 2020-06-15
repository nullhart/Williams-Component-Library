import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';



import { storiesOf } from '@storybook/vue';
import centered from '@storybook/addon-centered/vue';


export default {
    title: 'DatePicker',
    component: DatePicker,
    viewport: {
        viewports: INITIAL_VIEWPORTS
    },
};


import DatePicker from '../src/components/DatePicker.vue';

storiesOf('DatePicker', module)
    .addDecorator(centered)
    .add('IOS DatePicker', () => ({
        components: { DatePicker },
        template: '<DatePicker style="width: 300px;"  :data="{label: `Pick A Date`}" />',

    }))




