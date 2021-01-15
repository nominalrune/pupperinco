export default class ElementHandler {
	private html: Element|Element[];
	private reg: RegExp;
	private alt: string;
	constructor(html: Element|Element[], reg?: string | RegExp, alt?: string) {
		this.html = html;
		if (reg) { this.reg = new RegExp(reg); }
		if (alt) { this.alt = alt; }
	}
	public getTargetContent() {

	}
	private _extractText(elm:Element) {
		if(this.reg&&this.alt){
			return elm.textContent?.replace(this.reg, this.alt)||'';
		} else {
			return elm.textContent||'';
		}
	}
	public extractText() {
		if(this.html instanceof Element){
			return this._extractText(this.html);
		}else{
			return this.html.map(elm=>this._extractText(elm))
		}
	}
	
}
