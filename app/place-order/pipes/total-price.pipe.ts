import { Pipe, PipeTransform } from '@angular/core';

import { Utils } from "~/place-order/shared/utils";

@Pipe({ name: 'totalPrice' })
export class TotalPricePipe implements PipeTransform {
  constructor(private _utils: Utils) { }

  transform(quantity: number, price: string): string {
    return this._utils.toFixed(quantity * this._utils.parseCurrency(price))
  }
}
