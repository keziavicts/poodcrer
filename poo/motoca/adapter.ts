import { Motoca } from "./motoca";
import { Pessoa } from './pessoa';

class Adapter {
  motoca: Motoca;

  constructor(potencia: number) {
    this.motoca = new Motoca(potencia); 
  }

  enter(idade: number, nome: string): boolean {
    let pessoa = new Pessoa(idade, nome);
    return this.motoca.inserirPessoa(pessoa); 
  }

  leave(): Pessoa | null {
    return this.motoca.removerPessoa(); 
  }

  honk(): string {
    return this.motoca.buzinar(); 
  }

  drive(time: number): void {
    return this.motoca.dirigir(time); 
  }

  buy(time: number): void {
    return this.motoca.comprarTempo(time); 
  }

  toString(): string {
    return this.motoca.toString(); 
  }
}

export { Adapter };
