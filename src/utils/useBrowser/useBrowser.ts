import puppeteer from 'puppeteer'
export default async function useBrowser ():Promise<[puppeteer.Browser,puppeteer.Page]> {
	const pup = await puppeteer.launch({ headless: false })
	return [pup,await pup.newPage()];
}
