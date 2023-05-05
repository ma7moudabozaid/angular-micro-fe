import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-amazing-library',
  template: ` <h1>Angular Micro Front End</h1> `,
  styles: ['h1 { text-align: center; }'],
})
export class AmazingLibraryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
