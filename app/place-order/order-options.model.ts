export class OrderOptions {
	public category: string;
	public promo: string;
	public sortBy: string;

	constructor(category: string, promo: string, sortBy: string) {
		this.category = category;
		this.promo = promo;
		this.sortBy = sortBy;
	}
}