import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent {

  serverElements = [];

// using ng Model
  onaddServeradded(serverData:{serveName:string;serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serveName,
      content: serverData.serverContent
    })
  }

  onaddBlueprintadded(bluprintData: { serveName: string; serverContent: string }) {
    this.serverElements.push(
      {
        type: 'bluprint',
        name: bluprintData.serveName,
        content: bluprintData.serverContent
      }
    )
  }
  // using ng Model

  // Using Local Variable references

}
