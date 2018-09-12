const { app, greynode, emitConfigs } = require('./dist/test/environment');

console.log('index-dev.js --> Starting app...');
console.log('step1 - Starting greynode...');
greynode
  .start()
  .then(() => {
    console.log('step2 - Greynode started, emitting config...');
    return greynode.emitConfig();
  })
  .then(() => {
    console.log('step3 - Config emitted...');
    return emitConfigs();
  })
  .then(() => {
    console.log('step4 - Starting App...');
    return app.start();
  })
  .then(() => {
    console.log('Up and running!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  });