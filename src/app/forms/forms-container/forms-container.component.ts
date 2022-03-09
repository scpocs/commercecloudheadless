import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-forms-container',
  templateUrl: './forms-container.component.html',
  styleUrls: ['./forms-container.component.scss']
})
export class FormsContainerComponent implements AfterViewInit {

  @ViewChild('formsContainer', { read: ViewContainerRef }) formsContainer: ViewContainerRef | undefined;

  constructor(
    public formsService: FormsService,
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.formsService.destroyAll();
  }

  ngAfterViewInit() {
    this.formsService.setContainer(this.formsContainer);
  }


}
