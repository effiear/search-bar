const {
  app,
  greynode,
  emitConfigs,
  rpcServer
} = require('./dist/test/environment');

const { com } = require('./dist/src/assets/proto-generated/service-api');
const { when } = require('wix-rpc-testkit');

const documentFeeder = rpcServer.stub(
  com.wixpress.search.srs.api.DocumentFeeder
);

when(documentFeeder.putSiteAppDocs)
  .withAny()
  .thenResolveWith({});

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
    console.log('step4 - Starting rpc server...');
    return rpcServer.start();
  })
  .then(() => {
    console.log('step5 - Starting App...');
    return app.start();
  })
  .then(() => {
    console.log('Up and running!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  });
