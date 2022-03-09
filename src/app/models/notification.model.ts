export class notification {
    constructor(message: string, createdOn: Date, id: number,  jsonMessage: string) {
        this.message = message;
        this.id = id;
        this.createdOn = createdOn;
        this.jsonMessage = jsonMessage;
    }
    message: string;
    createdOn: Date;
    id: number;
    jsonMessage: string;
}
