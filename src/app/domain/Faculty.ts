import { CourseOffering } from "./CourseOffering";
import { Person } from "./Person";

export interface Faculty extends Person {
	title: string;
	offering: CourseOffering[]
}
