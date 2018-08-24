import { Component, OnDestroy, OnInit } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { ReportsService } from "./reports.service";
import { ListViewEventData } from "nativescript-ui-listview";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";
import { RouterExtensions } from "nativescript-angular/router";
import { ListPicker } from "ui/list-picker";

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
    private picked: string;
    private _timePeriods: string[];
    private _statuses: string[];
    private _sortBys: string[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private _reportsService: ReportsService,
        private _routerExtensions: RouterExtensions
    ) {
        this._timePeriods = ["Any", "This week",
            "This month", "This quarter", "Last 24 hours",
            "Last 7 days", "Last 30 days"];

        this._statuses = ["Any", "Open", "In Progress", "Completed"];

        this._sortBys = ["Last updated", "Last created"];
    }

    get reports(): ObservableArray<any> {
        return this._reports;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    get timePeriods(): string[] {
        return this._timePeriods;
    }

    get statuses(): string[] {
        return this._statuses;
    }

    get sortBys(): string[] {
        return this._sortBys;
    }

    public selectedIndexChanged(args) {
        let picker = <ListPicker>args.object;
        this.picked = this.timePeriods[picker.selectedIndex];
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
    }

    ngOnDestroy(): void {
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
    }
}
