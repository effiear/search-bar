const testkit = require('wix-bootstrap-testkit');
const eventually = require('wix-eventually');
const TOPICS = require('../../lib/topics');
const axios = require('axios');
const { expect } = require('chai');
const { greynode, beforeAndAfter, app } = require('../environment');

describe('produce consume tests', () => {
  beforeAndAfter();

  const consumer = greynode.consume(TOPICS.CX_OX_TEST_TOPIC);

  // it('consumes message via greynode', async () => {
  // const searchData = {
  //   a: 'aa',
  //   b: 'bb'
  // };

  //   await greynode.produce(TOPICS.CREATED_SITES, searchData);
  //   return eventually(async () => {
  //     const res = await axios.get(app.getUrl('/dodasearch'));
  //     expect(res.data).to.deep.include(searchData);
  //   });
  // });

  it('produces message via greynode', async () => {
    await consumer.start();
    await axios.get(app.getUrl('/produce'));
    return eventually(() =>
      expect(consumer.messages[0]).to.deep.include({ a: 'aa' })
    );
  });
});
