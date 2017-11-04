import { OnInit } from '@angular/core';
import { FrKeyboardService } from '../fr-keyboard.service';
import { Subscription } from 'rxjs/Subscription';
export declare class FrKeyboardComponent implements OnInit {
    frKeyboardService: FrKeyboardService;
    subscriptions: Subscription;
    numberKeys: Array<{
        key: string;
        widthRatio: number;
    }>;
    escGroup: Array<{
        key: string;
        widthRatio: number;
    }>;
    capsGroup: Array<{
        key: string;
        widthRatio: number;
    }>;
    enterKey: string[];
    spacebarKey: string[];
    CapsLock: boolean;
    keys: {};
    inputstr: string;
    caretPos: number;
    inputTextArea: any;
    constructor(frKeyboardService: FrKeyboardService);
    ngOnInit(): void;
    keyDown(event: any): void;
    enterKeyMethod(): void;
    Caps(): void;
    click(item: any, inputTextArea: any): void;
    getCaretPos(oField: any): void;
    setSelectionRange(selectionStart: any, selectionEnd: any): void;
}
