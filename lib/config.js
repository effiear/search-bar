const TOPICS = require('./topics');

module.exports = context => {
  context.greynode.aConsumer(
    { topic: TOPICS.EFFIE_TEST_TOPIC1, groupId: context.app.name },
    (data, aspects) => console.log('Consumed!!!!', data),
  );
  const producer = context.greynode.aProducer(TOPICS.EFFIE_TEST_TOPIC1);
  const produceSearchData = (searchData, aspects) =>
    producer.produce(searchData, aspects);

  return { produceSearchData, config: context.config };
};
