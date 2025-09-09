import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./dashboard/header/header";
import { SideNav } from "./dashboard/side-nav/side-nav";
import { Main } from "./dashboard/main/main";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, SideNav, Main,FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('marketplace-app');
}
