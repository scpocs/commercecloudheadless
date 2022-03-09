import { Organization } from "src/app/models";
import { UserChange } from ".";


export class User extends UserChange {

   
    email: string = '';
    token: string = '';
    role: string[] = [];
    status: string = 'A';
    userChangeId: number = 0;
    userChangeName: string = '';
    lastModified: Date = new Date();
    passwordTemporary: any;
    organization: Organization = new Organization();


    static verifyContainsRole(user: User, nameRole: string = '') {
      
      let ret:boolean  = false;
   
      user.role.forEach(r => {
     
        const authority:string = r;
        
        if (authority === nameRole) {
     
          ret = true;
     
        }
   
      });

      return ret;
    }

}
