import { Component, OnDestroy, OnInit } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { ReportsService } from "./reports.service";;
import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";
import { Report } from "./report.model";

let pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
    "Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];

@Component({
    selector: "ReportsList",
    moduleId: module.id,
    templateUrl: "./reports-list.component.html"
})
export class ReportsListComponent implements OnInit, OnDestroy {
    private _dataSubscription: Subscription;
    private _reports: ObservableArray<any> = new ObservableArray<any>([]);
    private _isLoading: boolean = false;
    private _report: Report;

    constructor(private _reportsService: ReportsService) {
        this._report = new Report("", "", "");
    }

    get reports(): ObservableArray<any> {
        return this._reports;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    get timePeriods(): string[] {
        return ["Any", "This week",
            "This month", "This quarter", "Last 24 hours",
            "Last 7 days", "Last 30 days"];
    }

    get statuses(): string[] {
        return ["Any", "Open", "In Progress", "Completed"];
    }

    get sortBys(): string[] {
        return ["Last updated", "Last created"];
    }

    ngOnInit(): void {
        if (!this._dataSubscription) {
            this._isLoading = true;

            this._dataSubscription = this._reportsService.load()
                .pipe(finalize(() => this._isLoading = false))
                .subscribe(reports => {
                    this._reports = new ObservableArray(reports);
                    this._isLoading = false;
                });
        }

        this._report = new Report("Tap...", "Tap...", "Tap...");
    }

    get report(): Report {
        return this._report;
    }

    ngOnDestroy(): void {
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
    }
}
