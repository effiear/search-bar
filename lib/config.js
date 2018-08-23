const TOPICS = require('./topics');

global.consumedData = {};

module.exports = context => {
  context.greynode.aConsumer(
    { topic: TOPICS.CX_OX_TEST_TOPIC, groupId: context.app.name },
    (data, aspects) => {
      global.consumedData = {
        timestamp: new Date().toLocaleString(),
        data: data
      };
      console.log('Consumed!!!!', global.consumedData);
    }
  );
  const producer = context.greynode.aProducer(TOPICS.CX_OX_TEST_TOPIC);
  const produceSearchData = (searchData, aspects) =>
    producer.produce(searchData, aspects);

  return { produceSearchData, config: context.config };
};
