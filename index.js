const path = require('path');
const bootstrap = require('wix-bootstrap-ng');
const greynode = require('wix-bootstrap-greynode');
const TOPICS = require('./lib/topics');

const rootDir = process.env.SRC_PATH || './dist/src';
const getPath = filename => path.join(rootDir, filename);

const greynodeOpts = {
  createTopics: [{ name: TOPICS.CX_OX_TEST_TOPIC }]
};

if (process.env.NODE_ENV !== 'production') {
  require('ts-node/register');
}

console.log('starting app...');

bootstrap()
  .use(greynode, greynodeOpts)
  .config('./lib/config')
  .express(getPath('server'))
  .start({ disableCluster: process.env.NODE_ENV === 'development' });
