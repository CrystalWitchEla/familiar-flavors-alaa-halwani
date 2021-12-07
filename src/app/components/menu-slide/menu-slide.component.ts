import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-slide',
  templateUrl: './menu-slide.component.html',
  styleUrls: ['./menu-slide.component.scss'],
})
export class MenuSlideComponent implements OnInit {
  @Input() name: string;
  @Input() price: number;
  @Input() img: string;

  constructor() {}

  ngOnInit() {}
}
