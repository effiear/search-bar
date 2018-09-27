import { Router } from 'express';
import * as wixRunMode from 'wix-run-mode';
import * as ejs from 'ejs';
import * as wixExpressCsrf from 'wix-express-csrf';
import * as wixExpressRequireHttps from 'wix-express-require-https';
import { readFileSync } from 'fs';
const Authorization = require('wix-authorization');

module.exports = (app: Router, context) => {
  const config = context.config.load('search-bar');
  const templatePath = './src/index.ejs';
  const templateFile = readFileSync(templatePath, 'utf8');
  const isProduction = wixRunMode.isProduction();

  app.use(wixExpressCsrf());
  app.use(wixExpressRequireHttps);

  app.get('/', (req, res) => {
    const renderModel = getRenderModel(req);
    const html = ejs.render(templateFile, renderModel, {
      cache: isProduction,
      filename: templatePath
    });
    res.send(html);
  });

  app.get('/produce', (req, res) => {
    console.log('Sending data with Producer!');
    context.produceSearchData({ a: 'aa', b: 'bb' }, req['aspects']).then(() => {
      console.log('Data sent!!');
      res.sendStatus(201);
    });
  });

  app.get('/produce-data', (req, res) => {
    console.log('Sending request query data with Producer!');
    context.produceSearchData(req.query, req['aspects']).then(() => {
      console.log('Data sent!!');
      res.json(req.query);
    });
  });

  app.get('/consume', (req, res) => {
    res.json(global['consumedData']);
  });

  app.get('/sign', (req, res) => {
    console.log('Signing...');
    // const token = context.s2sAuth.sign(
    //   req.query.instanceId,
    //   10 /* expiryInSeconds */
    // );

    const token = Authorization.getToken(req['aspects']);
    console.log('token:', token);
    console.log('req.query.instanceId:', req.query.instanceId);
    const newToken = context.signer.sign('my-instance-id');
    Authorization.setToken(req['aspects'], newToken);

    res.json({ token: newToken });
  });

  function getRenderModel(req) {
    return {
      locale: req.aspects['web-context'].language,
      basename: req.aspects['web-context'].basename,
      debug:
        req.aspects['web-context'].debug ||
        process.env.NODE_ENV === 'development',
      clientTopology: config.clientTopology,
      title: 'Wix Full Stack Project Boilerplate'
    };
  }

  return app;
};
