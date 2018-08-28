import { Injectable, NgZone } from "@angular/core";
import { Observable, throwError } from "rxjs";
const Kinvey = require("kinvey-nativescript-sdk").Kinvey;

Kinvey.init();

@Injectable()
export class ProductsService {
    private _products: any[] = [];

    constructor() { }

    load(): Observable<any> {
        const products = Kinvey.DataStore.collection('products').find();
        products.subscribe(products => {
            this._products = products;
        });

        return products;
    }
}
