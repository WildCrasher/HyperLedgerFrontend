export interface ThesisDto {
    thesisNumber: string;
    topic: string;
    description: string;
    issueDateTime: string;
    state: string;
    student: string;
    supervisor: string;
    studentsAssigned: Array<any>;
}

export class ThesisDtoImpl implements ThesisDto {

    thesisNumber: string;
    topic: string;
    description: string;
    issueDateTime: string;
    state: string;
    student: string;
    supervisor: string;
    studentsAssigned: Array<any>;

    constructor(item?: ThesisDto) {
        if(item != undefined) {
            for(let key in item) {
                try {
                    this[key] = item[key];
                }
                catch (e) { }
            }
        }
    }
}