import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { VcardComponent } from './vcard/vcard.component';
import { RouterModule } from '@angular/router';
import { DashHighlightComponent } from './dash-highlight/dash-highlight.component';
import { CardInputsComponent } from './card-inputs/card-inputs.component';
// import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogComponent } from './dialog/dialog.component';
import { DynamicFormComponent } from '../forms/dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { OptionComponent } from './option/option.component';



@NgModule({
  declarations: [
    ProjectCardComponent,
    VcardComponent,
    DashHighlightComponent,
    CardInputsComponent,

    // ConfirmDialogComponent,
    DialogComponent,
    DynamicFormComponent,
    InputComponent,
    OptionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ProjectCardComponent,
    VcardComponent,
    DashHighlightComponent,
    CardInputsComponent,
    // ConfirmDialogComponent,
    DialogComponent,
    DynamicFormComponent,
    OptionComponent,
    InputComponent
  ]
})
export class ComponentsModule { }
