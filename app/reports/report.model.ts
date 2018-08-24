export class Report {
	public timePeriod: string;
	public status: string;
	public sortBy: string;

	constructor(timePeriod: string, status: string, sortBy: string) {
		this.timePeriod = timePeriod;
		this.status = status;
		this.sortBy = sortBy;
	}
}