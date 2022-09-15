import { Pipe, PipeTransform } from "@angular/core";
import { Globals } from "../app.globals";

@Pipe({
  name: "numberToMonth",
})
export class NumberToMonthPipe implements PipeTransform {
  constructor(private globals: Globals) {}

  transform(value: number): string {
    if (!isNaN(value)) return this.globals.toMonthName(value);

    return null;
  }
}
