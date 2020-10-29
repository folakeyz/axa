import { IMedia } from "./IMedia";
export class ClassMedia{
    public Title:string;
    public Date:string;
    public Image:string;
    public Content:string;
    public Url:string;
  
  
    
    constructor(item: IMedia){
        this.Title = item.Title;
        this.Date = item.Date;
        this.Image = item.Image;
        this.Content = item.Content;
        this.Url = item.Url;
      
       
    }
}