import { ILocation } from "./ILocation";
import { Student } from "./Student";

export interface BarCodeRecord {
    id: number;
    barcode: string;
    timeStamp: Date;
    location: ILocation;
    student: Student;
}