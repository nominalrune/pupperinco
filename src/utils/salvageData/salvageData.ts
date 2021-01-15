import { Page } from 'puppeteer';
import querySyntax from '../../searchEngines.json';
const { itemChunk, props } = querySyntax[0].book; // TODO 一般化する
const { title, publisher, isbn, price, containingYears } = props;

/**
 * htmlページを受け取って、Array<本の情報>を吐き出す
 *
 * @export
 * @param {string} html
 * @return {pastPaperBook[]}
 */
export default async function salvageData(html: Page): Promise<pastPaperBook[]> {
	let bookList: pastPaperBook[];
	return html.$$eval(
		itemChunk.query,
		elms => elms.map(elm => bookList.push(
			{
				title: elm.querySelector(title.query)?.textContent||"",
				publisher: elm.querySelector(publisher.query)?.textContent||"",
				isbn: elm.querySelector(isbn.query)?.textContent||"",
				containingYears: Number(elm.querySelector(containingYears.query)?.textContent?.replace(new RegExp(isbn.replace.reg, "i"), price.replace.alt))||0,
				price: Number(elm.querySelector(price.query)?.textContent?.replace(new RegExp(price.replace[0], "i"), price.replace[1])||0),
			}
		))).then((r)=>{return bookList})
}
