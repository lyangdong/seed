import { Component, OnInit } from '@angular/core';
declare let $:any;

@Component({
  selector: 'app-menu-aside',
  templateUrl: './menu-aside.component.html',
  styleUrls: ['./menu-aside.component.css']
})
export class MenuAsideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.addActive();
  }
addActive=()=>{
  $('.second-tab').click(function () {
    $('li').removeClass('active');
    $(this).addClass("active");
    // console.log(this)
  })
}
}
