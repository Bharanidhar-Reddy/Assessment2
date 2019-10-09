import { Component, OnInit } from '@angular/core';
import { Personal} from '../personal';
import { Educational} from '../educational';
import { DataService } from '../data.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  p:Personal[];
  e:Educational[];
  id:number=0;
  show:boolean=false;
  constructor(private svc:DataService) { }
  ngOnInit() {
    this.p=this.svc.pdata;
  }
view(ps:Personal){
 this.show=true;
  this.id=ps.id;
}
ok(){
  this.show=false;
}

delete(d:Personal) {
  if(confirm("Are you sure to delete "+d.name + "\tData")) {
    this.svc.delid(d.id);
  }
}
}
