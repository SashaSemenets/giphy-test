import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../../shared/gif';

@Component({
  selector: 'app-gifs-row',
  templateUrl: './gifs-row.component.html',
  styleUrls: ['./gifs-row.component.sass']
})
export class GifsRowComponent implements OnInit {
  @Input() rowGifs: Array<Data>;

  constructor() { }

  ngOnInit(): void {
  }

}
