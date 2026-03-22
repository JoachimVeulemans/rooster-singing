import {Component, OnInit} from '@angular/core';
import {Player} from "../../data/model/player.model";
import {FormsModule} from "@angular/forms";
import {Result} from "../../data/model/result.model";

@Component({
    selector: 'app-home',
    imports: [
        FormsModule
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
    protected players: Player[] = [];
    protected selectedPlayerId = 1;
    protected numberOfPlayersWanted = 50;
    public static prices = {
        underVpl: 1,
        underPerFive: 1,
        underVw: 1,
        underZero: 1,
        underMinusOne: 1,
        underMinusTwo: 1,
        underMinusThree: 1,
        underBuffet: 3,
        overVpl: 0.5,
        overPerFive: 0.5,
        overVw: 0.5,
        overPlusOne: 1,
        overPlusTwo: 1,
        overPlusThree: 1,
        overBuffet: 1.5
    }
    public standardPrices = {
        underVpl: 1,
        underPerFive: 1,
        underVw: 1,
        underZero: 1,
        underMinusOne: 1,
        underMinusTwo: 1,
        underMinusThree: 1,
        underBuffet: 3,
        overVpl: 0.5,
        overPerFive: 0.5,
        overVw: 0.5,
        overPlusOne: 1,
        overPlusTwo: 1,
        overPlusThree: 1,
        overBuffet: 1.5
    }
    public tax = {
        underVpl: 0.1,
        underPerFive: 0.1,
        underVw: 0.1,
        underZero: 0.1,
        underMinusOne: 0.1,
        underMinusTwo: 0.1,
        underMinusThree: 0.1,
        underBuffet: 0,
        overVpl: 0.1,
        overPerFive: 0.1,
        overVw: 0.1,
        overPlusOne: 0.1,
        overPlusTwo: 0.1,
        overPlusThree: 0.1,
        overBuffet: 0
    }
    public standardTax = {
        underVpl: 0.1,
        underPerFive: 0.1,
        underVw: 0.1,
        underZero: 0.1,
        underMinusOne: 0.1,
        underMinusTwo: 0.1,
        underMinusThree: 0.1,
        underBuffet: 0,
        overVpl: 0.1,
        overPerFive: 0.1,
        overVw: 0.1,
        overPlusOne: 0.1,
        overPlusTwo: 0.1,
        overPlusThree: 0.1,
        overBuffet: 0
    }
    public totals = {
        underVpl: 0,
        underPerFive: 0,
        underVw: 0,
        underZero: 0,
        underMinusOne: 0,
        underMinusTwo: 0,
        underMinusThree: 0,
        underBuffet: 0,
        overVpl: 0,
        overPerFive: 0,
        overVw: 0,
        overPlusOne: 0,
        overPlusTwo: 0,
        overPlusThree: 0,
        overBuffet: 0
    }
    public totalsTaxed = {
        underVpl: 0,
        underPerFive: 0,
        underVw: 0,
        underZero: 0,
        underMinusOne: 0,
        underMinusTwo: 0,
        underMinusThree: 0,
        underBuffet: 0,
        overVpl: 0,
        overPerFive: 0,
        overVw: 0,
        overPlusOne: 0,
        overPlusTwo: 0,
        overPlusThree: 0,
        overBuffet: 0
    }
    protected underResults: Result[] = [];
    protected overResults: Result[] = [];

    ngOnInit() {
        this.setPlayers();
        const backup = localStorage.getItem('data');
        if (backup) {
            this.loadData(JSON.parse(backup));
        }
    }

    protected removePlayer() {
        if (!this.players.length) return;

        this.players.pop();
    }

    protected addPlayer() {
        this.players.push(new Player({
            id: this.players.length + 1,
            underVpl: true
        }));
    }

    protected copyPreviousName(player: Player) {
        player.name = this.players.find(p => p.id === player.id - 1)?.name ?? '';
    }

    get prices() {
        return HomeComponent.prices;
    }

    protected getTotalAmount(player: Player) {
        const matcher = [
            { price: HomeComponent.prices.underVpl, check: player.underVpl },
            { price: HomeComponent.prices.underPerFive, check: player.underPerFive },
            { price: HomeComponent.prices.underVw, check: player.underVw },
            { price: HomeComponent.prices.underZero, check: player.underZero },
            { price: HomeComponent.prices.underMinusOne, check: player.underMinusOne },
            { price: HomeComponent.prices.underMinusTwo, check: player.underMinusTwo },
            { price: HomeComponent.prices.underMinusThree, check: player.underMinusThree },
            { price: HomeComponent.prices.underBuffet, check: player.underBuffet },
            { price: HomeComponent.prices.overVpl, check: player.overVpl },
            { price: HomeComponent.prices.overPerFive, check: player.overPerFive },
            { price: HomeComponent.prices.overVw, check: player.overVw },
            { price: HomeComponent.prices.overPlusOne, check: player.overPlusOne },
            { price: HomeComponent.prices.overPlusTwo, check: player.overPlusTwo },
            { price: HomeComponent.prices.overPlusThree, check: player.overPlusThree },
            { price: HomeComponent.prices.overBuffet, check: player.overBuffet }
        ];

        return matcher.reduce(
            (sum, e) => sum + e.price * (e.check ? 1 : 0),
            0
        );
    }

    protected setPlayers() {
        if (this.numberOfPlayersWanted < 0) this.numberOfPlayersWanted = 0;

        while (this.numberOfPlayersWanted !== this.players.length) {
            if (this.players.length < this.numberOfPlayersWanted) this.addPlayer();
            else this.removePlayer();
        }
    }

    calculateTotals() {
        this.totals.underVpl = this.players.reduce((sum, p) => sum + (p.underVpl ? 1 : 0) * HomeComponent.prices.underVpl, 0);
        this.totals.underPerFive = this.players.reduce((sum, p) => sum + (p.underPerFive ? 1 : 0) * HomeComponent.prices.underPerFive, 0);
        this.totals.underVw = this.players.reduce((sum, p) => sum + (p.underVw ? 1 : 0) * HomeComponent.prices.underVw, 0);
        this.totals.underZero = this.players.reduce((sum, p) => sum + (p.underZero ? 1 : 0) * HomeComponent.prices.underZero, 0);
        this.totals.underMinusOne = this.players.reduce((sum, p) => sum + (p.underMinusOne ? 1 : 0) * HomeComponent.prices.underMinusOne, 0);
        this.totals.underMinusTwo = this.players.reduce((sum, p) => sum + (p.underMinusTwo ? 1 : 0) * HomeComponent.prices.underMinusTwo, 0);
        this.totals.underMinusThree = this.players.reduce((sum, p) => sum + (p.underMinusThree ? 1 : 0) * HomeComponent.prices.underMinusThree, 0);
        this.totals.underBuffet = this.players.reduce((sum, p) => sum + (p.underBuffet ? 1 : 0) * HomeComponent.prices.underBuffet, 0);
        this.totals.overVpl = this.players.reduce((sum, p) => sum + (p.overVpl ? 1 : 0) * HomeComponent.prices.overVpl, 0);
        this.totals.overPerFive = this.players.reduce((sum, p) => sum + (p.overPerFive ? 1 : 0) * HomeComponent.prices.overPerFive, 0);
        this.totals.overVw = this.players.reduce((sum, p) => sum + (p.overVw ? 1 : 0) * HomeComponent.prices.overVw, 0);
        this.totals.overPlusOne = this.players.reduce((sum, p) => sum + (p.overPlusOne ? 1 : 0) * HomeComponent.prices.overPlusOne, 0);
        this.totals.overPlusTwo = this.players.reduce((sum, p) => sum + (p.overPlusTwo ? 1 : 0) * HomeComponent.prices.overPlusTwo, 0);
        this.totals.overPlusThree = this.players.reduce((sum, p) => sum + (p.overPlusThree ? 1 : 0) * HomeComponent.prices.overPlusThree, 0);
        this.totals.overBuffet = this.players.reduce((sum, p) => sum + (p.overBuffet ? 1 : 0) * HomeComponent.prices.overBuffet, 0);

        this.totalsTaxed.underVpl = Math.round(this.totals.underVpl * (1 - this.tax.underVpl) * 100) / 100;
        this.totalsTaxed.underPerFive = Math.round(this.totals.underPerFive * (1 - this.tax.underPerFive) * 100) / 100;
        this.totalsTaxed.underVw = Math.round(this.totals.underVw * (1 - this.tax.underVw) * 100) / 100;
        this.totalsTaxed.underZero = Math.round(this.totals.underZero * (1 - this.tax.underZero) * 100) / 100;
        this.totalsTaxed.underMinusOne = Math.round(this.totals.underMinusOne * (1 - this.tax.underMinusOne) * 100) / 100;
        this.totalsTaxed.underMinusTwo = Math.round(this.totals.underMinusTwo * (1 - this.tax.underMinusTwo) * 100) / 100;
        this.totalsTaxed.underMinusThree = Math.round(this.totals.underMinusThree * (1 - this.tax.underMinusThree) * 100) / 100;
        this.totalsTaxed.underBuffet = Math.round(this.totals.underBuffet * (1 - this.tax.underBuffet) * 100) / 100;
        this.totalsTaxed.overVpl = Math.round(this.totals.overVpl * (1 - this.tax.overVpl) * 100) / 100;
        this.totalsTaxed.overPerFive = Math.round(this.totals.overPerFive * (1 - this.tax.overPerFive) * 100) / 100;
        this.totalsTaxed.overVw = Math.round(this.totals.overVw * (1 - this.tax.overVw) * 100) / 100;
        this.totalsTaxed.overPlusOne = Math.round(this.totals.overPlusOne * (1 - this.tax.overPlusOne) * 100) / 100;
        this.totalsTaxed.overPlusTwo = Math.round(this.totals.overPlusTwo * (1 - this.tax.overPlusTwo) * 100) / 100;
        this.totalsTaxed.overPlusThree = Math.round(this.totals.overPlusThree * (1 - this.tax.overPlusThree) * 100) / 100;
        this.totalsTaxed.overBuffet = Math.round(this.totals.overBuffet * (1 - this.tax.overBuffet) * 100) / 100;
    }

    private calculateUnderResults() {
        this.underResults = [];
        const underPlayers = this.players.filter(p => p.result - p.goal <= 0 && p.result !== 0).sortBy(p => p.result - p.goal).groupBy(p => p.result - p.goal);

        let underVpl = this.totals.underVpl;
        let underPerFive = this.totals.underPerFive;
        let underVw = this.totals.underVw;
        let underZero = this.totals.underZero;
        let underMinusOne = this.totals.underMinusOne;
        let underMinusTwo = this.totals.underMinusTwo;
        let underMinusThree = this.totals.underMinusThree;
        let underBuffet = this.totals.underBuffet;
        let underBuffetRunCycle = 0;

        Object.keys(underPlayers).sort((a, b) => parseInt(b) - parseInt(a)).forEach((k) => {
            const players = underPlayers[k];
            let underVplPP = 0;
            let underPerFivePP = 0;
            let underVwPP = 0;
            let underZeroPP = 0;
            let underMinusOnePP = 0;
            let underMinusTwoPP = 0;
            let underMinusThreePP = 0;
            let underBuffetPP = 0;

            if (underVpl > 0) {
                const participatingPlayers = players.filter(p => p.underVpl).length;
                underVplPP = (underVpl - (this.prices.underVpl * 5 * participatingPlayers) >= 0) ? this.prices.underVpl * 5 : underVpl / participatingPlayers
                underVpl -= underVplPP * participatingPlayers;
            }
            if (underPerFive > 0) {
                const participatingPlayers = players.filter(p => p.underPerFive).length;
                underPerFivePP = (underPerFive - (this.prices.underPerFive * 5 * participatingPlayers) >= 0) ? this.prices.underPerFive * 5 : underPerFive / participatingPlayers;
                underPerFive -= underPerFivePP * participatingPlayers;
            }
            if (underVw > 0) {
                const participatingPlayers = players.filter(p => p.underVw).length;
                if (participatingPlayers > 0) {
                    underVwPP = this.totals.underVw / participatingPlayers;
                    underVw -= this.totals.underVw;
                }
            }
            if (underZero > 0) {
                const participatingPlayers = players.filter(p => p.underZero).length;
                if (participatingPlayers > 0) {
                    underZeroPP = this.totals.underZero / participatingPlayers;
                    underZero -= this.totals.underZero;
                }
            }
            if (underMinusOne > 0 && parseInt(k) < 0) {
                const participatingPlayers = players.filter(p => p.underMinusOne).length;
                if (participatingPlayers > 0) {
                    underMinusOnePP = this.totals.underMinusOne / participatingPlayers;
                    underMinusOne -= this.totals.underMinusOne;
                }
            }
            if (underMinusTwo > 0 && parseInt(k) < -1) {
                const participatingPlayers = players.filter(p => p.underMinusTwo).length;
                if (participatingPlayers > 0 && underMinusOnePP === 0) {
                    underMinusTwoPP = this.totals.underMinusTwo / participatingPlayers;
                    underMinusTwo -= this.totals.underMinusTwo;
                }
            }
            if (underMinusThree > 0 && parseInt(k) < -2) {
                const participatingPlayers = players.filter(p => p.underMinusThree).length;
                if (participatingPlayers > 0 && underMinusOnePP === 0 && underMinusTwoPP === 0) {
                    underMinusThreePP = this.totals.underMinusThree / participatingPlayers;
                    underMinusThree -= this.totals.underMinusThree;
                }
            }
            if (underBuffet > 0) {
                const participatingPlayers = players.filter(p => p.underBuffet).length;
                if (participatingPlayers > 0) {
                    let division = 2;
                    if (underBuffetRunCycle === 1) division = 3;
                    if (underBuffetRunCycle === 2) division = 6;
                    underBuffetRunCycle++;
                    underBuffetPP = (this.totals.underBuffet / division) / participatingPlayers;
                    underBuffet -= underBuffetPP * participatingPlayers;
                }
            }

            players.forEach((p) => {
                if (underVplPP > 0 || underPerFivePP > 0 || underVwPP > 0 || underZeroPP > 0 || underMinusOnePP > 0 || underMinusTwoPP > 0 || underMinusThreePP > 0 || underBuffetPP > 0)
                    this.underResults.push(new Result({
                        player: p,
                        underVpl: p.underVpl ? Math.round(underVplPP * 100) / 100 : 0,
                        underPerFive: p.underPerFive ? Math.round(underPerFivePP * 100) / 100 : 0,
                        underVw: p.underVw ? Math.round(underVwPP * 100) / 100 : 0,
                        underZero: p.underZero ? Math.round(underZeroPP * 100) / 100 : 0,
                        underMinusOne: p.underMinusOne ? Math.round(underMinusOnePP * 100) / 100 : 0,
                        underMinusTwo: p.underMinusTwo ? Math.round(underMinusTwoPP * 100) / 100 : 0,
                        underMinusThree: p.underMinusThree ? Math.round(underMinusThreePP * 100) / 100 : 0,
                        underBuffet: p.underBuffet ? Math.round(underBuffetPP * 100) / 100 : 0,
                    }));
            });
        });
    }

        private calculateOverResults() {
        this.overResults = [];
        const overPlayers = this.players.filter(p => p.result - p.goal > 0 && p.result !== 0).sortBy(p => p.result - p.goal).groupBy(p => p.result - p.goal);

        let overVpl = this.totals.overVpl;
        let overPerFive = this.totals.overPerFive;
        let overVw = this.totals.overVw;
        let overPlusOne = this.totals.overPlusOne;
        let overPlusTwo = this.totals.overPlusTwo;
        let overPlusThree = this.totals.overPlusThree;
        let overBuffet = this.totals.overBuffet;
        let overBuffetRunCycle = 0;

        Object.keys(overPlayers).sort((a, b) => parseInt(a) - parseInt(b)).forEach((k) => {
            const players = overPlayers[k];
            let overVplPP = 0;
            let overPerFivePP = 0;
            let overVwPP = 0;
            let overZeroPP = 0;
            let overPlusOnePP = 0;
            let overPlusTwoPP = 0;
            let overPlusThreePP = 0;
            let overBuffetPP = 0;

            if (overVpl > 0) {
                const participatingPlayers = players.filter(p => p.overVpl).length;
                overVplPP = (overVpl - (this.prices.overVpl * 5 * participatingPlayers) >= 0) ? this.prices.overVpl * 5 : overVpl / participatingPlayers
                overVpl -= overVplPP * participatingPlayers;
            }
            if (overPerFive > 0) {
                const participatingPlayers = players.filter(p => p.overPerFive).length;
                overPerFivePP = (overPerFive - (this.prices.overPerFive * 5 * participatingPlayers) >= 0) ? this.prices.overPerFive * 5 : overPerFive / participatingPlayers;
                overPerFive -= overPerFivePP * participatingPlayers;
            }
            if (overVw > 0 && parseInt(k) > 0) {
                const participatingPlayers = players.filter(p => p.overVw).length;
                if (participatingPlayers > 0) {
                    overVwPP = this.totals.overVw / participatingPlayers;
                    overVw -= this.totals.overVw;
                }
            }
            if (overPlusOne > 0 && parseInt(k) > 0) {
                const participatingPlayers = players.filter(p => p.overPlusOne).length;
                if (participatingPlayers > 0) {
                    overPlusOnePP = this.totals.overPlusOne / participatingPlayers;
                    overPlusOne -= this.totals.overPlusOne;
                }
            }
            if (overPlusTwo > 0 && parseInt(k) > 1) {
                const participatingPlayers = players.filter(p => p.overPlusTwo).length;
                if (participatingPlayers > 0 && overPlusOnePP === 0) {
                    overPlusTwoPP = this.totals.overPlusTwo / participatingPlayers;
                    overPlusTwo -= this.totals.overPlusTwo;
                }
            }
            if (overPlusThree > 0 && parseInt(k) > 2) {
                const participatingPlayers = players.filter(p => p.overPlusThree).length;
                if (participatingPlayers > 0 && overPlusOnePP === 0 && overPlusTwoPP === 0) {
                    overPlusThreePP = this.totals.overPlusThree / participatingPlayers;
                    overPlusThree -= this.totals.overPlusThree;
                }
            }
            if (overBuffet > 0) {
                const participatingPlayers = players.filter(p => p.overBuffet).length;
                if (participatingPlayers > 0) {
                    let division = 1.5;
                    if (overBuffetRunCycle === 1) division = 3;
                    overBuffetRunCycle++;
                    overBuffetPP = (this.totals.overBuffet / division) / participatingPlayers;
                    overBuffet -= overBuffetPP * participatingPlayers;
                }
            }

            players.forEach((p) => {
                if (overVplPP > 0 || overPerFivePP > 0 || overVwPP > 0 || overZeroPP > 0 || overPlusOnePP > 0 || overPlusTwoPP > 0 || overPlusThreePP > 0 || overBuffetPP > 0)
                    this.overResults.push(new Result({
                        player: p,
                        overVpl: p.overVpl ? Math.round(overVplPP * 100) / 100 : 0,
                        overPerFive: p.overPerFive ? Math.round(overPerFivePP * 100) / 100 : 0,
                        overVw: p.overVw ? Math.round(overVwPP * 100) / 100 : 0,
                        overPlusOne: p.overPlusOne ? Math.round(overPlusOnePP * 100) / 100 : 0,
                        overPlusTwo: p.overPlusTwo ? Math.round(overPlusTwoPP * 100) / 100 : 0,
                        overPlusThree: p.overPlusThree ? Math.round(overPlusThreePP * 100) / 100 : 0,
                        overBuffet: p.overBuffet ? Math.round(overBuffetPP * 100) / 100 : 0,
                    }));
            });
        });
    }

    protected calculateResults() {
        setTimeout(() => {
            this.calculateTotals();
            this.calculateUnderResults();
            this.calculateOverResults();
        }, 500);
    }

    importData(event: Event) {
        const input = event.target as HTMLInputElement;

        if (!input.files || input.files.length === 0) return;

        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const content = reader.result as string;
            this.loadData(JSON.parse(content));
        };

        reader.readAsText(file);
    }

    private loadData(data: any) {
        HomeComponent.prices = data.prices;
        this.tax = data.tax;
        this.players = data.players.map((p: any) => new Player(p));
        this.numberOfPlayersWanted = this.players.length;
        this.calculateResults();
    }

    saveData() {
        const data = {
            prices: this.prices,
            tax: this.tax,
            players: this.players.map(p => p.toDocument())
        };

        localStorage.setItem('data', JSON.stringify(data));

        return data;
    }

    downloadData() {
        const data = this.saveData();

        const jsonStr = JSON.stringify(data, null, 2); // pretty print
        const blob = new Blob([jsonStr], { type: 'application/json' });

        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Puntentelling.json';
        a.click();

        window.URL.revokeObjectURL(url);
    }

    getResultTotal(result: Result): string {
        let total = 0;
        let totalTaxed = 0;

        total += result.underVpl;
        totalTaxed += result.underVpl * (1 - this.tax.underVpl);
        total += result.underPerFive;
        totalTaxed += result.underPerFive * (1 - this.tax.underPerFive);
        total += result.underVw;
        totalTaxed += result.underVw * (1 - this.tax.underVw);
        total += result.underZero;
        totalTaxed += result.underZero * (1 - this.tax.underZero);
        total += result.underMinusOne;
        totalTaxed += result.underMinusOne * (1 - this.tax.underMinusOne);
        total += result.underMinusTwo;
        totalTaxed += result.underMinusTwo * (1 - this.tax.underMinusTwo);
        total += result.underMinusThree;
        totalTaxed += result.underMinusThree * (1 - this.tax.underMinusThree);

        total += result.overVpl;
        totalTaxed += result.overVpl * (1 - this.tax.overVpl);
        total += result.overPerFive;
        totalTaxed += result.overPerFive * (1 - this.tax.overPerFive);
        total += result.overVw;
        totalTaxed += result.overVw * (1 - this.tax.overVw);
        total += result.overPlusOne;
        totalTaxed += result.overPlusOne * (1 - this.tax.overPlusOne);
        total += result.overPlusTwo;
        totalTaxed += result.overPlusTwo * (1 - this.tax.overPlusTwo);
        total += result.overPlusThree;
        totalTaxed += result.overPlusThree * (1 - this.tax.overPlusThree);
        
        return `€${total} (€${totalTaxed})`;
    }

    print() {
        window.print();
    }

    reset() {
        this.players = [];
        this.numberOfPlayersWanted = 50;
        HomeComponent.prices = this.standardPrices;
        this.tax = this.standardTax;
        this.setPlayers();
        this.calculateResults();
    }
}
