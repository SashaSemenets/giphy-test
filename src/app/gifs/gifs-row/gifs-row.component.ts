import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gifs-row',
  templateUrl: './gifs-row.component.html',
  styleUrls: ['./gifs-row.component.sass']
})
export class GifsRowComponent implements OnInit {
  @Input() rowGifs: any;

  constructor() { }

  ngOnInit(): void {
  }

}
