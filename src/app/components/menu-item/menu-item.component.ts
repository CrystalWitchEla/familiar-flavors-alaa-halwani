import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() name: string;
  @Input() price: number;
  @Input() img: string;
  @Input() desc : string;

  constructor() {}

  ngOnInit() {}
}
