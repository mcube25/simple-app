import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
info1: string[] = ['adam taylor','234', 'staff']
info2: string[] = ["smith b", "456", "dre@b.com"]

  constructor() { }
}
