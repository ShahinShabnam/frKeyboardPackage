import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
export declare class FrKeyboardService {
    subject: Subject<any>;
    inputTypeT: any;
    constructor();
    getParams(passvalue: string): void;
    filterOn(id: string): Observable<any>;
    emit(id: string, options?: any): void;
}
