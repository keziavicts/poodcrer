import { Carro } from "./carro";

class Adapter {
    carro: Carro;
    constructor() {
        this.carro = new Carro();
    }

    enter(): void {
        this.carro.enter();
    }

    leave(): void {
        this.carro.sair();

    }

    fuel(gas: number): void {
        this.carro.abastecer(gas);
    }

    drive(km: number): void {
        this.carro.dirigir(km);
    }

    toString(): string {
        return this.carro.toString();
    }
}
export {Adapter};

if (require.main === module) {
    console.log("Rodando o arquivo do estudante");
}