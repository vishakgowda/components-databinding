import { Component,Input,Output } from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.scss']
})
export class ServerElementsComponent{

  @Input ('myElement') element: { type: string, name: string, content: string};

}
