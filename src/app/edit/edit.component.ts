/* import { Component, OnInit } from '@angular/core';
import { Educational} from '../educational';
import { Personal} from '../personal';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:number=0;
  degree:string;
  marks:string;
  stream:string;
  college:string;
  name:string;
  dob:string;
  address:string;
  phone:number;
  e:Educational;
  p:Personal;
  constructor(private svc:DataService) { }

  ngOnInit() {
    console.log(this.svc.ptemp);
    this.e=this.svc.etemp;
    this.p=this.svc.ptemp;
    
  }
  submitData(){
    this.e= new Educational(this.id,this.degree,this.marks,this.stream,this.college);
    this.p= new Personal(this.id,this.name,this.dob,this.address,this.phone);
    this.svc.add(this.e,this.p);
  }
}
 */