const TOPICS = require('./topics');
const { Signer } = require('wix-server-to-server-signer');

global.consumedData = {};

module.exports = context => {
  context.greynode.aConsumer(
    { topic: TOPICS.CX_OX_TEST_TOPIC, groupId: context.app.name },
    (data, aspects) => {
      global.consumedData = {
        timestamp: new Date().toLocaleString(),
        data
      };
      console.log('Consumed!!!!', global.consumedData);
    }
  );
  const producer = context.greynode.aProducer(TOPICS.CX_OX_TEST_TOPIC);
  const produceSearchData = (searchData, aspects) =>
    producer.produce(searchData, aspects);

  // init signer for server-to-server authorization
  const secret = '3eb0658a-8638-44b1-b658-8a7404c97168';
  const appDefId = '4fbc6173-12d0-4f90-8b1b-fa43fb864463';
  const signer = new Signer(appDefId, secret);

  return { produceSearchData, config: context.config, signer };
};
