import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ApiService{

    constructor(private _http: Http){};

    public AnyData(objeto:any, endereco: string, metodo: string){
        
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json' );
        let options = new RequestOptions({ headers: headers });


        if(metodo.toUpperCase() == 'POST'){

            
            console.log("any data")
            console.log(JSON.stringify(objeto));
                this._http.post(endereco,JSON.stringify(objeto), options  )
                .toPromise()
                .then( () => console.log("ok post"), err => console.log(err) )
        } 
        else if (metodo.toUpperCase() == 'GET'){

            if(objeto != null){
                this._http.get(endereco)
                .toPromise()
                .then( () => console.log("ok get"), err => console.log(err) )
            }            
        }        
    }

}