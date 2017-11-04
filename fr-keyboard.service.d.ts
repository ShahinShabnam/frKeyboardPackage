import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import { Subject } from 'rxjs/Subject';
export declare class FrKeyboardService {
    subject: Subject<any>;
    inputTypeT: any;
    constructor();
    getParams(passvalue: string): void;
    filterOn(id: string): Observable<any>;
    emit(id: string, options?: any): void;
}
