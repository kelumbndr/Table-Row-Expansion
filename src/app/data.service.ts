import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataElement } from './table/table.component';

@Injectable()
export class DataService {
  private ELEMENT_DATA: DataElement[] = [
    {
      document: 'Document_1',
      creationDate: '2023-03-12',
      operator: 'T-Bag',
      requester: 'Break',
    },
    {
      document: 'Document_2',
      creationDate: '2023-04-12',
      operator: 'donJoe',
      requester: 'nasa',
    },
    {
      document: 'Document_3',
      creationDate: '2023-03-05',
      operator: 'Redig',
      requester: 'Com.',
    },
    {
      document: 'Document_4',
      creationDate: '2023-01-12',
      operator: 'Alpga',
      requester: 'Beta',
    },
    {
      document: 'Document_5',
      creationDate: '2023-02-12',
      operator: 'Mai',
      requester: 'THIO',
    },
  ];

  private SUB_ELEMENT_DATA: DataElement[] = [
    {
      document: 'Document_1',
      creationDate: '2022-03-12',
      operator: 'T-Bag and Joe',
      requester: 'Break Version 1',
    },
    {
      document: 'Document_1',
      creationDate: '2021-03-12',
      operator: 'T-Bag Only',
      requester: 'Break',
    },
    {
      document: 'Document_1',
      creationDate: '2015-03-12',
      operator: 'T-Bag Only',
      requester: 'Break',
    },
    {
      document: 'Document_2',
      creationDate: '2020-03-12',
      operator: 'DonJoe Version 1',
      requester: 'Break justice',
    },
    {
      document: 'Document_2',
      creationDate: '2019-03-12',
      operator: 'Last season',
      requester: 'Break',
    },
    ,
    {
      document: 'Document_3',
      creationDate: '2020-03-12',
      operator: 'DonJoe Version 1',
      requester: 'Break justice',
    },
    {
      document: 'Document_3',
      creationDate: '2019-03-12',
      operator: 'Last season',
      requester: 'Break',
    },
  ];

  constructor() {}

  public getList(): Promise<DataElement[]> {
    return Promise.resolve(this.ELEMENT_DATA);
  }

  public getDataByDocument(document: string): Promise<DataElement[]> {
    let datas = this.SUB_ELEMENT_DATA.filter((x) => x.document === document);
    return Promise.resolve(datas);
  }
}
