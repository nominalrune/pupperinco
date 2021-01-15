abstract class Adapter<T, U> extends T implements U {
	abstract constructor<T>(param: ConstructorParameters<T>) {
		super(param);
	};
	abstract [key: keyof U]: U[key];
}
