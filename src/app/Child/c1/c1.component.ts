import { Component } from '@angular/core';
import { UserDataService } from 'src/app/myServices/user-data.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {

  users:any
    constructor(private userdata:UserDataService){
        this.userdata.users().subscribe((data)=>{
          this.users = data;
          console.log(this.users);
          
        })
    }

    sortby:any
    sortMethod(sortbywhat:any){
      
      this.sortby = sortbywhat;
      console.log(this.sortby);

      if(this.sortby == "sortByName"){
        this.users.sort((a: { Name: string; }, b: { Name: any; }) => a.Name.localeCompare(b.Name));
        
      }
      else{
        this.users.sort(function(c: { Dob: string | number | Date; },d: { Dob: string | number | Date; }){
          return new Date(c.Dob).getFullYear() - new Date(d.Dob).getFullYear();
        })
      }

    }


}
