export class NotFoundError extends Error{
    constructor(messsage) {
        super(messsage);
        this.name = "NotFoundError";
        this.status= 404;
    }
}
export class UnauthorizedError extends Error{
    constructor(messsage) {
        super(messsage);
        this.name = "UnauthorizedError";
        this.status= 401;
    }
}
export class Conflict extends Error{
    constructor(messsage) {
        super(messsage);
        this.name = "Entity Exists";
        this.status= 409;
    }
}
export class ValidationError extends Error{
    constructor(messsage) {
        super(messsage);
        this.name = "ValidationError";
        this.status= 422;
    }
}