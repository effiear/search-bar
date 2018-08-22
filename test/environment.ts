import * as testkit from 'wix-bootstrap-testkit';
import * as configEmitter from 'wix-config-emitter';
import * as greynodeTestkit from 'wix-greynode-testkit';
import * as TOPICS from '../lib/topics';

export const app = bootstrapServer();
export const greynode = greynodeTestkit(TOPICS.external);

export function beforeAndAfter() {
  // greynode.beforeAndAfter();

  before(async () => {
    await greynode.start();
    await greynode.emitConfig();

    await emitConfigs();
    await app.start();
  });

  after(async () => {
    await app.stop();
    await greynode.stop();
  });

  // stop all before greynode (do not use before and after but "before' and "after")
  // app.beforeAndAfter();
}

export function emitConfigs() {
  return configEmitter({
    sourceFolders: ['./templates'],
    targetFolder: './target/configs',
    clearTargetFolder: false
  })
    .fn('scripts_domain', 'static.parastorage.com')
    .fn('static_url', 'com.wixpress.search-bar', 'http://localhost:3200/')
    .emit();
}

function bootstrapServer() {
  return testkit.server('./index', {
    env: {
      PORT: 3100,
      MANAGEMENT_PORT: 3104,
      NEW_RELIC_LOG_LEVEL: 'warn',
      DEBUG: ''
    }
  });
}
