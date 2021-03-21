export interface IWorker {
    id:string;
    name: string;
    surname: string;
    email: string;
    type: number;
    status: number;
}

export class Worker implements IWorker{
    id:string;
    name: string;
    surname: string;
    email: string;
    type: number;
    status: number;

    constructor(name, surname, email, type, status) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.type = type;
        this.status = status;
    }
  
}