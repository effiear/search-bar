import * as testkit from 'wix-bootstrap-testkit';
import * as configEmitter from 'wix-config-emitter';
import * as greynodeTestkit from 'wix-greynode-testkit';
import * as rpcTestkit from 'wix-rpc-testkit';
import * as TOPICS from '../lib/topics';

const PORT = 3100;
const MANAGEMENT_PORT = 3104;

const app = bootstrapServer();
const greynode = greynodeTestkit(TOPICS.external);
const rpcServer = rpcTestkit.server();

function beforeAndAfter() {
  before(async () => {
    await greynode.start();
    await greynode.emitConfig();

    await emitConfigs();
    await rpcServer.start();
    await app.start();
  });

  beforeEach(() => rpcServer.reset());

  after(async () => {
    await rpcServer.stop();
    await app.stop();
    await greynode.stop();
  });
}

function emitConfigs() {
  return configEmitter({
    sourceFolders: ['./templates'],
    targetFolder: './target/configs',
    clearTargetFolder: false
  })
    .fn('scripts_domain', 'static.parastorage.com')
    .fn('static_url', 'com.wixpress.search-bar', 'http://localhost:3200/')
    .fn(
      'service_url',
      'com.wixpress.search.srs.srs-documents-feeder-service',
      rpcServer.getUrl()
    )
    .emit();
}

function bootstrapServer() {
  return testkit.server('./index', {
    env: {
      PORT,
      MANAGEMENT_PORT,
      NEW_RELIC_LOG_LEVEL: 'warn',
      DEBUG: ''
    }
  });
}

export { app, greynode, rpcServer, beforeAndAfter, emitConfigs };
