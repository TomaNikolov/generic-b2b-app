import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BackendService } from "~/core/services/backend.service";

@Injectable()
export class ProductsService {
    private _products: any[] = [];

    constructor(private backendService: BackendService) { }

    load(): Observable<any> {
        const products = this.backendService.find('products');
        products.subscribe(products => {
            this._products = products;
        });

        return products;
    }
}
