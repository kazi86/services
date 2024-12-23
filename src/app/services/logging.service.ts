import { Injectable } from "@angular/core";

// @Injectable({
//     providedIn:'root'
// })

export class LoggingService{
     
    constructor(){}

    public log(message: string){

        const timeStamp = new Date().toLocaleTimeString();

        console.log(`${message} ${timeStamp}`);

    }

}