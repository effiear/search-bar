import { TranslationFunction } from 'i18next';
const clonedeep = require('lodash.clonedeep');
const fulltextsearchlight = require('full-text-search-light');
const fullTextSearch = new fulltextsearchlight();

export class SearchUtil {
  translate: TranslationFunction;
  searchDb: object;

  constructor(searchConfig: object, t: TranslationFunction) {
    this.translate = t;
    this.searchDb = searchConfig;

    this.loadSearchConfig(searchConfig);
  }

  loadSearchConfig(searchConfig: object) {
    if (searchConfig == null) {
      return;
    }

    const searchConfigTranslated = clonedeep(searchConfig);

    // tslint:disable-next-line:no-string-literal
    for (const searchableItem of searchConfigTranslated['searchableItems']) {
      for (const k of Object.keys(searchableItem)) {
        if (Array.isArray(searchableItem[k])) {
          searchableItem[k] = searchableItem[k].map(elem => {
            if (elem.startsWith('{{')) {
              return this.translate(elem.match('{{(.*)}}')[1]);
            }
            return elem;
          });
        } else if (searchableItem[k].startsWith('{{')) {
          const translatedValue = searchableItem[k].match('{{(.*)}}')[1];
          searchableItem[k] = this.translate(translatedValue);
        }
      }
    }

    // tslint:disable-next-line:no-string-literal
    console.log('searchableItems', searchConfigTranslated['searchableItems']);

    // ---------------------------
    // full text search light
    // ---------------------------
    // tslint:disable-next-line:no-string-literal
    for (const searchItem of searchConfigTranslated['searchableItems']) {
      fullTextSearch.add(searchItem);
    }
  }

  search(searchTerm: string) {
    return fullTextSearch.search(searchTerm);
  }
}
