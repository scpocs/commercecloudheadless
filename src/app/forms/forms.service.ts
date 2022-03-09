import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ServiceService } from '../service/service.service';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  formsList: Array<ComponentRef<any>> = [];
  container: ViewContainerRef | undefined;

  opened: boolean = false;

  form_template = {
    title: "form 1 test dasd asd asd asdas das d",
    fields: [
      {
        name: "name",
        label: "Name",
        type: "textBox",
        icon: "fas fa-users",
        action: "create, update",
        validation: [Validators.required, Validators.minLength(3)]
      },

      {
        name: "age",
        label: "Age",
        type: "number",
        icon: "fas fa-chevron-circle-right",
        action: "create, update",
        validation: [Validators.required]
      },
      {
        name: "favoritebook",
        label: "Favorite Book",
        type: "select",
        icon: "fas fa-users",
        action: "create",
        options: ["Jane Eyre", "Pride and Prejudice", "Wuthering Heights"],
        validation: [Validators.required]
      },

    ],
    clearLabel: "Limpar",
    submitLabel: "Salvar",
    service: this.service,
    onSubmit: "new1"
  }

  constructor(
    private resolver: ComponentFactoryResolver,
    private service: ServiceService,
  ) { }

  setContainer(ref: any) {
    this.container = ref;
  }

  open1(action: string) {
    this.generateForm(DynamicFormComponent, this.form_template, action);
  }

  funcF(action: string) {
    this.generateForm(DynamicFormComponent, this.form_template, action);
  }

  generateForm(comp: any, form_template?: any, action?: string) {
    this.destroyAll();

    const factory: ComponentFactory<typeof comp> = this.resolver.resolveComponentFactory(comp);

    console.log(this.container);
    if (this.container) {
      // const form = this.container.createComponent(factory);
      const form = this.container.createComponent(factory);


      form.instance.formTemplate = form_template;
      // form.instance.val = Math.ceil(Math.random() * Math.floor(20));
      form.instance.action = action;
      // form.instance.onSubmit = () => form_template.onSubmit(gauge.instance.dynamicFormGroup)
      form.instance.onBtnClicked.subscribe((values: any) => {
        this.opened = false;
        return this.createProject(values, form_template.service, form_template.onSubmit);
      });
      // form.instance.onBtnClicked.subscribe((v: any) => console.log(v));
      form.changeDetectorRef.detectChanges();

      this.formsList.push(form);
    }
    // }
    this.opened = true;
  }

  destroyAll() {
    this.formsList.forEach(element => {
      element.destroy();
    });
  }

  createProject(values: any, service: any, onSubmit: string) {
    console.log("createProject()");
    console.log(values);

    (service as any)[onSubmit](values.name).subscribe(
      (data: any) => {
        console.log("created:");
        console.log(data);
        this.destroyAll();
      },
      (error: any) => {
        console.log("error created:");
        return;
      }
    )

  }
}
