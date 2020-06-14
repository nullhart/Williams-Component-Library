import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import DarkTheme from './DarkTheme.js'

addons.setConfig({
    theme: DarkTheme,
});