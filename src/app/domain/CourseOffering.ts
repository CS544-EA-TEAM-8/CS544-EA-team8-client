import { ClassSession } from "./ClassSession";
import { Course } from "./Course";
import { Faculty } from "./Faculty";
import { Registration } from "./Registration";

export interface CourseOffering {
    id: number;
    course: Course;
    period: string;
    beginDate: Date;
    endDate: Date;
    registrations: Registration[];
    capacity: number;
    faculty: Faculty;
    session: ClassSession;
}