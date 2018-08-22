const { app, greynode, emitConfigs } = require('./dist/test/environment');

console.log('step1');
greynode
  .start()
  .then(() => {
    console.log('step2');
    return greynode.emitConfig();
  })
  .then(() => {
    console.log('step3');
    return emitConfigs();
  })
  .then(() => {
    console.log('step4');
    return app.start();
  })
  .then(() => {
    console.log('Up and running!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  });
