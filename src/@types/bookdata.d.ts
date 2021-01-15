interface book{
	title: string;
	isbn: string;
	author?: string;
	publisher?: string;
	publishedYear?: number;
	image?:string;
	pages?:number;
	price?:number;
}
interface pastPaperBook extends book{
	publisher: string;
	publishedYear?: number;
	containingYears: number;
}
