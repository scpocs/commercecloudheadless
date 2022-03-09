import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'primeng/sidebar';
import { FormsContainerComponent } from './forms-container/forms-container.component';

@NgModule({
  declarations: [
    FormsContainerComponent
  ],
  imports: [
    CommonModule,
    SidebarModule
  ],
  exports: [
    FormsContainerComponent
  ]
})
export class FormsControlModule { }
