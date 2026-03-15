import {Player} from "./player.model";
import {numberOrDefault} from "../extension/default-value";

export class Result {
    private _player: Player;
    private _underVpl: number;
    private _underPerFive: number;
    private _underVw: number;
    private _underZero: number;
    private _underMinusOne: number;
    private _underMinusTwo: number;
    private _underMinusThree: number;
    private _underBuffet: number;
    private _overVpl: number;
    private _overPerFive: number;
    private _overVw: number;
    private _overPlusOne: number;
    private _overPlusTwo: number;
    private _overPlusThree: number;
    private _overBuffet: number;

    constructor(obj: Partial<Result> = {}) {
        this._player = new Player(obj.player);
        this._underVpl = numberOrDefault(obj.underVpl);
        this._underPerFive = numberOrDefault(obj.underPerFive);
        this._underVw = numberOrDefault(obj.underVw);
        this._underZero = numberOrDefault(obj.underZero);
        this._underMinusOne = numberOrDefault(obj.underMinusOne);
        this._underMinusTwo = numberOrDefault(obj.underMinusTwo);
        this._underMinusThree = numberOrDefault(obj.underMinusThree);
        this._underBuffet = numberOrDefault(obj.underBuffet);
        this._overVpl = numberOrDefault(obj.overVpl);
        this._overPerFive = numberOrDefault(obj.overPerFive);
        this._overVw = numberOrDefault(obj.overVw);
        this._overPlusOne = numberOrDefault(obj.overPlusOne);
        this._overPlusTwo = numberOrDefault(obj.overPlusTwo);
        this._overPlusThree = numberOrDefault(obj.overPlusThree);
        this._overBuffet = numberOrDefault(obj.overBuffet);
    }

    get player(): Player {
        return this._player;
    }

    set player(value: Player) {
        this._player = value;
    }

    get underVpl(): number {
        return this._underVpl;
    }

    set underVpl(value: number) {
        this._underVpl = value;
    }

    get underPerFive(): number {
        return this._underPerFive;
    }

    set underPerFive(value: number) {
        this._underPerFive = value;
    }

    get underVw(): number {
        return this._underVw;
    }

    set underVw(value: number) {
        this._underVw = value;
    }

    get underZero(): number {
        return this._underZero;
    }

    set underZero(value: number) {
        this._underZero = value;
    }

    get underMinusOne(): number {
        return this._underMinusOne;
    }

    set underMinusOne(value: number) {
        this._underMinusOne = value;
    }

    get underMinusTwo(): number {
        return this._underMinusTwo;
    }

    set underMinusTwo(value: number) {
        this._underMinusTwo = value;
    }

    get underMinusThree(): number {
        return this._underMinusThree;
    }

    set underMinusThree(value: number) {
        this._underMinusThree = value;
    }

    get underBuffet(): number {
        return this._underBuffet;
    }

    set underBuffet(value: number) {
        this._underBuffet = value;
    }

    get overVpl(): number {
        return this._overVpl;
    }

    set overVpl(value: number) {
        this._overVpl = value;
    }

    get overPerFive(): number {
        return this._overPerFive;
    }

    set overPerFive(value: number) {
        this._overPerFive = value;
    }

    get overVw(): number {
        return this._overVw;
    }

    set overVw(value: number) {
        this._overVw = value;
    }

    get overPlusOne(): number {
        return this._overPlusOne;
    }

    set overPlusOne(value: number) {
        this._overPlusOne = value;
    }

    get overPlusTwo(): number {
        return this._overPlusTwo;
    }

    set overPlusTwo(value: number) {
        this._overPlusTwo = value;
    }

    get overPlusThree(): number {
        return this._overPlusThree;
    }

    set overPlusThree(value: number) {
        this._overPlusThree = value;
    }

    get overBuffet(): number {
        return this._overBuffet;
    }

    set overBuffet(value: number) {
        this._overBuffet = value;
    }
}
