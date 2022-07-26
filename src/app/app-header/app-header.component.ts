import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  menuBar: MenuItem[] = [];

  ngOnInit(): void {

      this.menuBar = [
        
        {label: 'Interest', icon: 'pi pi-fw pi-percentage'},
        {label: 'Mortgage', icon: 'pi pi-fw pi-money-bill'},
        {label: 'Loan', icon: 'pi pi-fw pi-chart-bar'},
        {label: 'Investment', icon: 'pi pi-fw pi-chart-line'}
        
    ];
  }

}
