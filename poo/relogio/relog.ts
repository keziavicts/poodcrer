class Relogio {
  private hora: number;
  private minuto: number;
  private segundo: number;

  public constructor(hora: number = 0, minuto: number = 0, segundo: number = 0) {
    this.setHora(hora);
    this.setMinuto(minuto);
    this.setSegundo(segundo);
  }

  setHora(value: number) {
    if (value < 24 && value >= 0) {
      this.hora = value;
    } else {
      if(this.hora == undefined) {
        this.hora = 0;
      }
      console.log("fail: hora invalida");
    }
  }

  setMinuto(value: number) {
    if (value >= 0 && value < 60) {
      this.minuto = value;
    } else {
      if (this.minuto == undefined) {
        this.minuto = 0;
      }
      console.log("fail: minuto invalido");
    }
  }

  setSegundo(value: number) {
    if (value >= 0 && value < 60) {
      this.segundo = value;
    } else {
      if (this.segundo == undefined) {
        this.segundo = 0;
      }
      console.log("fail: segundo invalido");
    }
  }

  getHora(): number {
    return this.hora;
  }

  getMinuto(): number {
    return this.minuto;
  }

  getSegundo(): number {
    return this.segundo;
  }

  proxSegundo(): void {
    this.segundo += 1;
    if (this.segundo > 59) {
      this.segundo = 0;
      this.minuto += 1;
    } if (this.minuto > 59) {
      this.minuto = 0;
      this.hora += 1;
    } if (this.hora > 23) {
      this.hora = 0;
    }
  }

  toString(): string {
    return `${String(this.hora).padStart(2, "0")}:${String(this.minuto).padStart(2, "0")}:${String(this.segundo).padStart(2, "0")}`;
  }
}
export { Relogio };
