import * as React from 'react';
import * as s from './SearchBar.scss';
import { InjectedTranslateProps, translate } from 'react-i18next';
import InputWithOptions from 'wix-style-react/InputWithOptions';

// import searchConfig from './search-config.json';
import { searchConfig } from './search-config';
import { SearchUtil } from './SearchUtil';

interface InputWithOptionsOption {
  id: number;
  value: string;
}

interface SearchBarProps extends InjectedTranslateProps {}

interface SearchBarState {
  value: any;
  selectedId: number;
  searchResultsInputOptions: InputWithOptionsOption[];
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  searchUtil: SearchUtil;

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      selectedId: -1,
      searchResultsInputOptions: []
    };
  }

  componentWillMount() {
    console.log('searchConfig before translate', searchConfig);
    this.searchUtil = new SearchUtil(searchConfig, this.props.t);
  }

  onChange = event => {
    const searchResults = this.searchUtil.search(event.target.value);
    console.log('results:', searchResults);

    const newOptions = [];
    searchResults.forEach((searchableItem, i) => {
      newOptions.push({
        id: i,
        value: `${searchableItem.title} - ${searchableItem.description}`
      });
    });

    this.setState({
      value: event.target.value,
      searchResultsInputOptions: newOptions
    });
  };

  onSelect = option => {
    const value = option.value;
    this.setState({
      value,
      selectedId: option.id
    });

    console.log(`Selected option id=${JSON.stringify(option)}, value=${value}`);
  };

  onManuallyInput = value => {
    this.setState({
      selectedId: -1
    });
    console.log(`Manually selected ${value}`);
  };

  render() {
    // const { t } = this.props;

    // const options = [
    //   { id: 0, value: 'First option' },
    //   { id: 1, value: 'Unselectable option', unselectable: true },
    //   { id: 2, value: 'Third option' }
    // ];

    const options = this.state.searchResultsInputOptions;

    // const predicate = element => {
    //   return this.state.value
    //     ? element.value
    //         .toLowerCase()
    //         .indexOf(this.state.value.toLowerCase()) !== -1
    //     : true;
    // };

    const predicate = element => true;

    return (
      <div className={s.root}>
        <InputWithOptions
          options={options.filter(predicate)}
          selectedId={this.state.selectedId}
          value={this.state.value}
          onChange={this.onChange}
          onSelect={this.onSelect}
          onManuallyInput={this.onManuallyInput}
          highlight
        />
      </div>
    );
  }
}

export default translate()(SearchBar);
