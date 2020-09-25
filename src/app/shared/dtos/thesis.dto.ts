export interface ThesisDto {
    thesisNumber: string;
    topic: string;
    issueDateTime: string;
    state: string;
    student: string;
    supervisor: string;
}

export class ThesisDtoImpl implements ThesisDto {

    thesisNumber: string;
    topic: string;
    issueDateTime: string;
    state: string;
    student: string;
    supervisor: string;

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