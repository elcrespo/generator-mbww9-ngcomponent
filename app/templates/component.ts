import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  template: require('./<%= selector %>.component.html'),
  styles: [require('./<%= selector %>.component.scss')]
})

export class <%= className %> implements OnInit {
  constructor() { }

  ngOnInit() { }
}