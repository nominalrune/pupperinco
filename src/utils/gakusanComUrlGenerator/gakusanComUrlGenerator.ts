import { UrlGenerator } from '..'
import searchSetting from '../../searchEngines.json';
import { SEARCH_ENGINE } from '../../../search.settings.json';
const { baseurl, query, OFFSET_STEP } = searchSetting[SEARCH_ENGINE].url;

export default class gakusanComUrlGenerator extends UrlGenerator {

	protected offsetCount: number;
	private results: number;
	private publisher: string;
	private publicationYear: number;
	/**
	 * Creates an instance of gakusanComUrlGenerator.
	 * @param {string} publisher
	 * @param {number} publicationYear
	 * @memberof gakusanComUrlGenerator
	 */
	constructor(publisher: string, publicationYear: number) {
		super();
		this.publisher = publisher;
		this.publicationYear = publicationYear;
		this.offsetCount = 0;
	};
	setResults(count: number) {
		this.results = count;
		return this
	};
	/**
	 * forms a Url with query,
	 * accourding to Json setting file and
	 * offset number.
	 * @private
	 * @param {number} offset
	 * @return {string} Url string
	 * @memberof gakusanUrlGen
	 */
	private requestUrl(offset: number): string {
		return (baseurl
			+ "?" + query.publisher + this.publisher
			+ "&" + query.minYear + this.publicationYear
			+ "&" + query.maxYear + this.publicationYear
			+ "&" + query.offset + offset
		)
	};

	private *generator(offset: number): Generator<string, '', string> {
		while (this.offsetCount === 0) {
			yield this.requestUrl(this.offsetCount);
		}
		while (this.offsetCount < this.results) {
			yield this.requestUrl(this.offsetCount);
		}
		return '';
	};

	public next() {
		const result = this.generator(this.offsetCount).next();
		this.offsetCount += OFFSET_STEP;
		return result;
	};
	public hasNext(): boolean {
		return (this.offsetCount < this.results)
	}
}

///** gets publisher name and published year; returns Generator, which generates corresponding Url
// * @param {string} publisher name of publisher to search 検索する出版社の名前
// * @param {number} publicationYear
// * @return {(offset: number, amount: number) => Generator<string, false, string>}
// */
//export default function gakusanComUrlGen(publisher: string, publicationYear: number): (offset: number, amount: number) => Generator<string, false, string> {
//	let count = 0;
//	/**
//	 * gets offset, returns url
//	 * @param {number} count offset-count
//	 * @return {string} `url` with search query
//	 */
//	const requestUrl = (count: number): string => (
//		baseurl
//		+ "?" + query.publisher + publisher
//		+ "&" + query.minYear + publicationYear
//		+ "&" + query.maxYear + publicationYear
//		+ "&" + query.offset + count
//	);
//
//	return function* (offset: number, amount: number): Generator<string, false, string> {
//		count += offset;
//		while (count < amount) {
//			yield requestUrl(count);
//		}
//		return false;
//	};
//};
//