/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react';

// TODO: story generator? scrape demo pages from MUI docs? pages and their demos separately?

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
