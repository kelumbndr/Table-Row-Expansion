import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  datas: DataElement[];

  show: boolean[] = [];

  subDatas: Map<number, DataElement[]> = new Map();
  visibleRrowIndex: number [] = [];

  public selectedData: any;


  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getList().then((list) => {
      this.datas = list;
    });
  }

  onRowClick(data: DataElement, i: number){
    if(this.visibleRrowIndex.includes(i)){
      // this block executed if row is clicked while open
      this.visibleRrowIndex.splice(this.visibleRrowIndex.indexOf(i));
    } else {
      // this block is execured if row is newly opening
      this.visibleRrowIndex.push(i);
      if(!this.subDatas.has(i)){
        this.loadSubData(data, i);
      }
    }
  }

  loadSubData(data: DataElement, i: number) {
    this.dataService.getDataByDocument(data.document).then((result) => {
      this.subDatas.set(i, result);
      console.log(result);
    });
  }

  toggle(index) {
    this.show[index] = !this.show[index];
  }
}

export interface DataElement {
  document: string;
  creationDate: string;
  operator: string;
  requester: string;
}
