export interface actorCreationDTO{
    name:string;
    dateofBirth?:Date;
    picture?:File;
    pictureURL?:string;
    biography?:string;
}

export interface actorDTO{
    id:number;
    name:string;
    dateofBirth:Date;
    picture:string; 
    biography?:string;
}

export interface actorMovieDTO{
    id:number;
    name:string;
    character:string;
    picture:string;
}