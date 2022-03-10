import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SeducService } from './service/seduc.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	@ViewChild('scrollMe')
	private myScrollContainer!: ElementRef;

	title = 'seduc';

	constructor(public service: SeducService) { }

	items: MenuItem[] = [
		{
			label: 'File',
			icon: 'pi pi-fw pi-file',
			items: [
				{
					label: 'New',
					icon: 'pi pi-fw pi-plus',
					items: [
						{
							label: 'Bookmark',
							icon: 'pi pi-fw pi-bookmark'
						},
						{
							label: 'Video',
							icon: 'pi pi-fw pi-video'
						},

					]
				},
				{
					label: 'Delete',
					icon: 'pi pi-fw pi-trash'
				},
				{
					separator: true
				},
				{
					label: 'Export',
					icon: 'pi pi-fw pi-external-link'
				}
			]
		}
	];

	

	scrollToBottom(): void {
		try {
			this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
		} catch (err) { }
	}

}
