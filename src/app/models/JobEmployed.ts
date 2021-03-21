export interface IJobSignedUp {
    id:string;
    jobId:string;
    workerId:string;
}

export class JobSignedUp implements IJobSignedUp{
    id:string;
    jobId:string;
    workerId:string;

    constructor(jobId, workerId) {
        this.jobId = jobId;
        this.workerId = workerId;
    }
}