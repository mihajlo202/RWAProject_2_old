export interface ILoggedUser {
    id:string;
    email: string;
    password: string;
    role: string;
}

export class LoggedUser implements ILoggedUser{
    id:string;
    email: string;
    password: string;
    role: string;

    constructor(email, password, role) {
        this.email=email;
        this.password=password;
        this.role=role;
    }
  
}