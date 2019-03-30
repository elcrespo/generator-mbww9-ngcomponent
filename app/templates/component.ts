import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'atv-<%= selector %>',
  templateUrl: './<%= selector %>.component.html',
  styleUrls: ['./<%= selector %>.component.scss']
})

export class <%= className %> implements OnInit {
  constructor() { }

  ngOnInit() { }
}
