import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-info',
  templateUrl: './store-info.component.html',
  styleUrls: ['./store-info.component.scss'],
})
export class StoreInfoComponent implements OnInit {
  @Input() name: string;
  @Input() cuisine: string;
  @Input() logo: string;
  @Input() cover: string;

  constructor() {}

  ngOnInit() {}
}
