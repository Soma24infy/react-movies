export interface movieDTO
{
    id:number;
    title:string;
    poster:string;
}

export interface landingPageDTO
{
    inTheatres?: movieDTO[];
    upcomingReleases?: movieDTO[];
}