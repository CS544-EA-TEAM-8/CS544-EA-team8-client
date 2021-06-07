import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Util } from "../utility/Util";

@Injectable({ providedIn: 'root' })
export class EntityService {

    constructor(private http: HttpClient) {
    }

    create(apiRoute: string, entity: any) {
        return this.http.post(Util.getUrl(apiRoute), entity);
    }

    get(apiRoute: string, args?: { [key: string]: any }) {

        return this.http.get(Util.getUrl(apiRoute), this.generateUriParams(args));
    }

    update(apiRoute: string, entity: any) {
        return this.http.patch(Util.getUrl(apiRoute), entity);
    }

    delete(apiRoute: string, args?: { [key: string]: any }) {
        return this.http.delete(Util.getUrl(apiRoute), this.generateUriParams(args));
    }

    deleteById(apiRoute: string, id: any) {
        return this.delete(apiRoute, { id });
    }

    private generateUriParams(args?: { [key: string]: any }): any {
        const options = !!args ? { params: new HttpParams() } : {};
        if (!args) {
            Object.entries(args).forEach(([k, v]) => options.params = options.params.set(k, v));
        }
        return options;
    }

}