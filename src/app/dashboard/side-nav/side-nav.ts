import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-side-nav',
  imports: [FontAwesomeModule],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss'
})
export class SideNav {
faDashboard: any;
faLocation: any;
faShop: any;
faBox: any;
faMoneyBill: any;
faChartBar: any;
faContactBook: any;
faHand: any;

}
