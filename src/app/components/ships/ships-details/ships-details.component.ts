import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { pagereducer } from 'src/app/rdx/reducer/ships.reducer';
import { appstate } from 'src/app/rdx/ships.state';


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  @Input() dataList: any;
  config: any;
  shipId: string = '';
  url: string = '';
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';


  //rdx
  currentpage: Observable<any>

  constructor(private store:Store<any>) { 
    this.currentpage = this.store.select('pagereducter')
    
    
    
  }
  
  ngOnInit(): void {
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.dataList.length
      };
  }

  getStarshipId(url) {
    this.shipId = url.slice(0, -1)
    const urlImage = `${this.shipId}.jpg`
    return urlImage !== "";
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  openDetails(details) {
    $("#exampleModal").modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class
  }



}
