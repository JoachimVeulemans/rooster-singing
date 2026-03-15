import {
    booleanOrDefault,
    numberOrDefault,
    stringOrDefault
} from "../extension/default-value";

export class Player {
    private _id: number;
    private _name: string;
    private _underVpl: boolean;
    private _underPerFive: boolean;
    private _underVw: boolean;
    private _underZero: boolean;
    private _underMinusOne: boolean;
    private _underMinusTwo: boolean;
    private _underMinusThree: boolean;
    private _underBuffet: boolean;
    private _overVpl: boolean;
    private _overPerFive: boolean;
    private _overVw: boolean;
    private _overPlusOne: boolean;
    private _overPlusTwo: boolean;
    private _overPlusThree: boolean;
    private _overBuffet: boolean;
    private _goal: number;
    private _result: number;

    constructor(obj: Partial<Player> = {}) {
        this._id = numberOrDefault(obj.id);
        this._name = stringOrDefault(obj.name);
        this._underVpl = booleanOrDefault(obj.underVpl);
        this._underPerFive = booleanOrDefault(obj.underPerFive);
        this._underVw = booleanOrDefault(obj.underVw);
        this._underZero = booleanOrDefault(obj.underZero);
        this._underMinusOne = booleanOrDefault(obj.underMinusOne);
        this._underMinusTwo = booleanOrDefault(obj.underMinusTwo);
        this._underMinusThree = booleanOrDefault(obj.underMinusThree);
        this._underBuffet = booleanOrDefault(obj.underBuffet);
        this._overVpl = booleanOrDefault(obj.overVpl);
        this._overPerFive = booleanOrDefault(obj.overPerFive);
        this._overVw = booleanOrDefault(obj.overVw);
        this._overPlusOne = booleanOrDefault(obj.overPlusOne);
        this._overPlusTwo = booleanOrDefault(obj.overPlusTwo);
        this._overPlusThree = booleanOrDefault(obj.overPlusThree);
        this._overBuffet = booleanOrDefault(obj.overBuffet);
        this._goal = numberOrDefault(obj.goal);
        this._result = numberOrDefault(obj.result);
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get underVpl(): boolean {
        return this._underVpl;
    }

    set underVpl(value: boolean) {
        this._underVpl = value;
    }

    get underPerFive(): boolean {
        return this._underPerFive;
    }

    set underPerFive(value: boolean) {
        this._underPerFive = value;
    }

    get underVw(): boolean {
        return this._underVw;
    }

    set underVw(value: boolean) {
        this._underVw = value;
    }

    get underZero(): boolean {
        return this._underZero;
    }

    set underZero(value: boolean) {
        this._underZero = value;
    }

    get underMinusOne(): boolean {
        return this._underMinusOne;
    }

    set underMinusOne(value: boolean) {
        this._underMinusOne = value;
    }

    get underMinusTwo(): boolean {
        return this._underMinusTwo;
    }

    set underMinusTwo(value: boolean) {
        this._underMinusTwo = value;
    }

    get underMinusThree(): boolean {
        return this._underMinusThree;
    }

    set underMinusThree(value: boolean) {
        this._underMinusThree = value;
    }

    get underBuffet(): boolean {
        return this._underBuffet;
    }

    set underBuffet(value: boolean) {
        this._underBuffet = value;
    }

    get overVpl(): boolean {
        return this._overVpl;
    }

    set overVpl(value: boolean) {
        this._overVpl = value;
    }

    get overPerFive(): boolean {
        return this._overPerFive;
    }

    set overPerFive(value: boolean) {
        this._overPerFive = value;
    }

    get overVw(): boolean {
        return this._overVw;
    }

    set overVw(value: boolean) {
        this._overVw = value;
    }

    get overPlusOne(): boolean {
        return this._overPlusOne;
    }

    set overPlusOne(value: boolean) {
        this._overPlusOne = value;
    }

    get overPlusTwo(): boolean {
        return this._overPlusTwo;
    }

    set overPlusTwo(value: boolean) {
        this._overPlusTwo = value;
    }

    get overPlusThree(): boolean {
        return this._overPlusThree;
    }

    set overPlusThree(value: boolean) {
        this._overPlusThree = value;
    }

    get overBuffet(): boolean {
        return this._overBuffet;
    }

    set overBuffet(value: boolean) {
        this._overBuffet = value;
    }

    get goal(): number {
        return this._goal;
    }

    set goal(value: number) {
        this._goal = value;
    }

    get result(): number {
        return this._result;
    }

    set result(value: number) {
        this._result = value;
    }

    toDocument() {
        return {
            id: this.id,
            name: this.name,
            underVpl: this.underVpl,
            underPerFive: this.underPerFive,
            underVw: this.underVw,
            underZero: this.underZero,
            underMinusOne: this.underMinusOne,
            underMinusTwo: this.underMinusTwo,
            underMinusThree: this.underMinusThree,
            underBuffet: this.underBuffet,
            overVpl: this.overVpl,
            overPerFive: this.overPerFive,
            overVw: this.overVw,
            overPlusOne: this.overPlusOne,
            overPlusTwo: this.overPlusTwo,
            overPlusThree: this.overPlusThree,
            overBuffet: this.overBuffet,
            goal: this.goal,
            result: this.result
        }
    }
}
