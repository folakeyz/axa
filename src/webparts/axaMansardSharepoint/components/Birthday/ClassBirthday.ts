import { IBirthday } from "./IBirthday";
export class ClassBirthday{
    public Title:string;
    public Date:string;
    public Picture:string;
    public CelebrationType:string;
  
    
    constructor(item: IBirthday){
        this.Title = item.Title;
        this.Date = item.Date;
        this.Picture = item.Picture;
        this.CelebrationType = item.CelebrationType;
       
    }
}