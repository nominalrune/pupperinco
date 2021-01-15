export default abstract class UrlGenerator {
	abstract next(): IteratorResult<string, "">
	abstract hasNext(): boolean
}
