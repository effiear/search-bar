import * as React from 'react';
import { translate, InjectedTranslateProps } from 'react-i18next';
import * as s from './App.scss';
import SearchBar from '../Search/SearchBar';

interface AppProps extends InjectedTranslateProps {}

interface AppState {
  value: any;
  selectedId: number;
}

class App extends React.Component<AppProps, AppState> {
  render() {
    const { t } = this.props;

    return (
      <div className={s.root}>
        {/*<div className={s.header}>*/}
        <h2>{t('app.title')}</h2>
        {/*</div>*/}
        {/*<p className={s.intro}>{t('app.intro')}</p>*/}
        <SearchBar />
      </div>
    );
  }
}

export default translate(null, { wait: true })(App);
