
/**
 *
 *
 * @export
 * @class HtmlHandle
 * @param { Element|Element[] } html
 * @param { string|RegExp|null} reg
 * @param { string|null} alt 
 */
export default class HtmlHandle {
	private html: Element | Element[];
	private reg: RegExp;
	private alt: string;
	constructor(html: Element | Element[], reg?: string | RegExp, alt?: string) {
		this.html = html;
		if (reg) { this.reg = new RegExp(reg); }
		if (alt) { this.alt = alt; }
	};
	setReg(_reg: string | RegExp) {
		this.reg = new RegExp(_reg);
		return this;
	};
	setAlt(_alt: string) {
		if (typeof _alt == "string") {
			this.alt = _alt;
		}
		return this;
	};
	/**
	 * gets text from an Element
	 *
	 * @private
	 * @param {Element} elm
	 * @return {string} possibly `''`
	 * @memberof HtmlHandle
	 */
	private extractTextFromSingleElement(elm: Element) {
		if (this.reg && this.alt) {
			return elm.textContent?.replace(this.reg, this.alt) || '';
		} else {
			return elm.textContent || '';
		}
	};
	/**
	 * gets text from Element or Elements
	 *
	 * @return {string|string[]} 
	 * @memberof HtmlHandle
	 */
	public extractText() {
		if (this.html instanceof Element) {
			return this.extractTextFromSingleElement(this.html);
		} else {
			return this.html.map(elm => this.extractTextFromSingleElement(elm))
		}
	};

}
