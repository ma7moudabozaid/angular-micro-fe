import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-adv',
  template: `
    <div class="adv">
      <h2>Library For Advs Here</h2>
    </div>
  `,
  styles: [
    '.adv { background: #7ea5a2;margin: 15px 10%; text-align: center; padding: 30px; border-radius: 12px; color: #fff; font-size: 26px;}',
  ],
})
export class AdvComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
