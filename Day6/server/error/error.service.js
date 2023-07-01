import {ResponseCreator} from "../util/helpers.js"

export const HandleErr = (err) => {
    if( err instanceof Error){
        switch(err.name) {
            case "NotFoundError":
                console.log("hello"); 
                return ErrorCreator(err)
            case "UnauthorizedError":
                return ErrorCreator(err)
            case "ConflictError": 
                return ErrorCreator(err)
            case "ValidationError": 
                return ErrorCreator(err)
        }
    }
}

const ErrorCreator = (err) => {
    return ResponseCreator(err,false,err.message || "An error Occurred",err.status || 500)
}