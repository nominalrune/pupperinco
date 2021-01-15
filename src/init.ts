import { useBrowser, gakusanComUrlGenerator, HtmlHandle } from './utils';
import target from '../target.settings.json';
import searchSetting from './searchEngines.json';
import { SEARCH_ENGINE } from '../search.settings.json';
const { publisher, year } = target;
const { query, replace } = searchSetting[SEARCH_ENGINE].totalCount;


/**
 * 1. loards settings from json, including the target info and search-engine query syntax info
 * 2. calls and gets instance of puppeteer browser, (and its page)
 * 3. GET target web-page (with search queries)
 * 4. get the total amount
 * 5. iterate salvation for calculated times
 */
export default async function init() {
	const [browser, page] = await useBrowser();
	const urlGen = new gakusanComUrlGenerator(publisher, year);
	let item: Array<string>,
		itemCount: number;
	await page.goto(urlGen.next().value)
	await page.
		.then(html => )
		.then(str => urlGen.next().value)
		.then(url => {
			if (url) {

			}
		})

}
