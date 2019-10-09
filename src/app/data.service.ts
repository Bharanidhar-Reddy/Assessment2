import { Injectable } from '@angular/core';
import { Educational} from './educational';
import { Personal} from './personal';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 /*  degree:string;
  marks:string;
  stream:string;
  college:string;
  name:string;
  dob:string;
  address:string;
  phone:number; */
  e:Educational;
  p:Personal;
  id:number=1111;
  i:number=0;
  g:number=0;
  edata:Educational[]=[];
  // etemp:Educational=new Educational(this.id,this.degree,this.marks,this.stream,this.college);
  // ptemp:Personal= new Personal(this.id,this.name,this.dob,this.address,this.phone);
  pdata:Personal[]=[];
  viewid:Personal;
  constructor() { }
  add(e,p){
    e.id=this.id;
    p.id=this.id;
    ++this.id;
    this.edata.push(e);
    this.pdata.push(p);
    console.log(this.edata);
    console.log(this.pdata);
  }
  delid(num){
    this.edata.forEach(gg => {
      if(gg.id==num){this.edata.splice(this.i,1);}
      this.i+=1;
    });
    this.pdata.forEach(gge => {
      if(gge.id==num){this.pdata.splice(this.g,1);}
      this.g+=1;
    });
    this.i=0;
    this.g=0;
  }
}
