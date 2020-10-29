import { IMarquee } from "./IMarquee";
export class ClassMarquee{
    public Title:string;
    public Url:string;
   
  
    
    constructor(item: IMarquee){
        this.Title = item.Title;
        this.Url = item.Url;
    }
}