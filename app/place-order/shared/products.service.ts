import { Injectable, NgZone } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { BackendService } from "../../shared/services/backend.service";

@Injectable()
export class ProductsService {
    private _products: any[] = [];

    constructor(private backendService: BackendService) { }

    load(): Observable<any> {
        const products = this.backendService.getAllElements('products');
        products.subscribe(products => {
            this._products = products;
        });

        return products;
    }
}
