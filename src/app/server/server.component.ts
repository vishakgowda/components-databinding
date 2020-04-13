import { Component, OnInit, EventEmitter,Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  newserverName = '';
  newserverContent = '';
  @Output() serverCreated = new EventEmitter<{ serveName: string; serverContent: string }>();
  @Output() bluprintCreatd = new EventEmitter<{ serveName: string; serverContent: string }>();
  @ViewChild('viewChildref', { static: true }) viewChildref:ElementRef;

// Using two wat databinding
  onaddServer() {
  this.serverCreated.emit(
    { serveName: this.newserverName,
    serverContent: this.newserverContent}
  )
  }

  onaddBlueprint() {
  this.bluprintCreatd.emit(
    {
      serveName: this.newserverName,
      serverContent: this.newserverContent
    }
  )
  }
// Using two wat databinding


// Using two locar Ref and Viewchild
  onaddServerref(serverRef) {
    this.serverCreated.emit(
      {
        serveName:serverRef.value,
        serverContent:this.viewChildref.nativeElement.value
      }
    )
  }

  onaddBlueprintref(bluRef) {
    this.bluprintCreatd.emit(
      {
        serveName: bluRef.value,
        serverContent: this.viewChildref.nativeElement.value
      }
    )
  }
  // Using two locar Ref and Viewchild


}
