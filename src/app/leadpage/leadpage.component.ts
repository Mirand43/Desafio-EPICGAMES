import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  standalone: true,
  imports: [RouterModule, SidebarComponent, NavbarComponent],
  templateUrl: './leadpage.component.html',
  styles: ``
})
export default class LeadpageComponent {

}
