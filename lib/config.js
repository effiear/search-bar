const TOPICS = require('./topics');

module.exports = context => {
  context.greynode.aConsumer(
    { topic: TOPICS.CX_OX_TEST_TOPIC, groupId: context.app.name },
    (data, aspects) => console.log('Consumed!!!!', data),
  );
  const producer = context.greynode.aProducer(TOPICS.CX_OX_TEST_TOPIC);
  const produceSearchData = (searchData, aspects) =>
    producer.produce(searchData, aspects);

  return { produceSearchData, config: context.config };
};
