import { CourseOffering } from "./CourseOffering";
import { ILocation } from "./ILocation";
import { Timeslot } from "./Timeslot";

export interface ClassSession {
    id: number;
    timeslot: Timeslot;
    date: Date;
    offering: CourseOffering;
    location: ILocation;
}