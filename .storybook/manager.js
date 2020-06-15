import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import DarkTheme from './DarkTheme.js'
import '@storybook/addon-actions/register'
// register the Figma addon
import 'storybook-addon-figma/register'

addons.setConfig({
    theme: DarkTheme,
});