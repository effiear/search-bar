const path = require('path');
const bootstrap = require('wix-bootstrap-ng');
const greynode = require('wix-bootstrap-greynode');
//const signer = require('wix-bootstrap-s2s-signer');
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

// console.log('singer!!!!', signer);
bootstrap()
  .use(greynode, greynodeOpts)
  .config('./lib/config')
  .express(getPath('server'))
  .start({ disableCluster: process.env.NODE_ENV === 'development' });



//.use(signer, {
//     appDefId: '4fbc6173-12d0-4f90-8b1b-fa43fb864463'
//   })

// appDefId: '4fbc6173-12d0-4f90-8b1b-fa43fb864463'
// app secret: 3eb0658a-8638-44b1-b658-8a7404c97168