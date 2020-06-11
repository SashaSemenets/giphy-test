import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../../shared/gif';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.sass']
})
export class GifComponent implements OnInit {
  @Input() gif: Data;

  constructor() { }

  ngOnInit(): void {
  }

}
