export interface IJob {
    id:string;
    name: string;
    description: string;
    employerId: string;
    type: number;
    cratedOn: Date;
}

export class Job implements IJob{
    id:string;
    name: string;
    description: string;
    employerId: string;
    type: number;
    cratedOn: Date;

    constructor(name, description, type, employerId, date) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.employerId = employerId;
        this.cratedOn = date;
    }
  
}