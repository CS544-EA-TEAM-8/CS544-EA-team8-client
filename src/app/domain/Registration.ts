import { CourseOffering } from "./CourseOffering";
import { Student } from "./Student";

export interface Registration {
	id: number;
	date: Date;
	offering: CourseOffering;
	student: Student;
}