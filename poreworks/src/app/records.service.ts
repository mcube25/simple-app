import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
info1: string[] = ['adam taylor','234', 'staff']
info2: string[] = ["smith b", "456", "dre@b.com"]
info3: string[] = ["abdul a", "786", "sbd@m.com"]

//create method to get the info
getInfo1(): string[]{
  return this.info1
}
getInfo2(): string[]{
  return this.info2
}
getInfo3(): string[]{
  return this.info3
}
  constructor() { }
}
