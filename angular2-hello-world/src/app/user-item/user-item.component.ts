import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() name: string;

  // 构造函数会在创建这个UserItemComponent的实例时自动调用
  constructor() {
    
  }

  ngOnInit() {
  }

}
