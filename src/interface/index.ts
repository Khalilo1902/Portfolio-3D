export interface IServices{
    index?:number,
    title:string,
    icon:string

}

export  interface IExperienceCardProps {
    experience: IExperience;
  }

export interface IExperience{
    title:string,
    company_name:string,
    icon:string,
    iconBg:string,
    date:string,
    points:string[],
}


export interface ITag {
  id:string;
    name: string;
    color: string;
  }
  
  export interface IProject {
    id:string;
    name: string;
    description: string;
    tags: ITag[];
    image: string; 
    source_code_link: string;
    link:string
  }
  
  export interface ITestimonials {
    _id: string;
    testimonial: string; 
    name: string;       
    designation: string; 
    company: string;      
    image: string;       
  }

 export interface IContact {
    name:string,
    email:string,
    message:string
  }