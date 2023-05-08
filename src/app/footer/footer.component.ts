import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() menu:any[] =[];
  @Output() event = new EventEmitter<any[]>();

  activeMenu(label:string){
    this.menu.map((m) => { m.active = m.label === label;
      console.log(m)
      return m;
    })
    this.event.emit(this.menu);
  }
}
