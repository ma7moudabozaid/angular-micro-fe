import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-amazing-library',
  template: `
    <h1>
    Angular shared amazing library
    </h1>
  `,
  styles: [
  ]
})
export class AmazingLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
