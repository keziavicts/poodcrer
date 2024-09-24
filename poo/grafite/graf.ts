class Grafite { 
  private size: number; 
  private thickness: number; 
  private hardness: string; 

  constructor(size: number, thickness: number, hardness: string){
    this.size = size;
    this.thickness = thickness;
    this.hardness = hardness;
  }

  public usagePerSheet(): number {
    if(this.hardness === "HB") return 1;
    if(this.hardness === "2B") return 2;
    if(this.hardness === "4B") return 4;
    if(this.hardness === "6B") return 6;

    return 0;
  }

  public getSize(): number{ return this.size; }
  public getThickness(): number{ return this.thickness; }
  public getHardness(): string{ return this.hardness; }

  public setSize(size: number){ this.size = size; }

  public toString(){
    return `[${this.thickness}:${this.hardness}:${this.size}]`
  }
}

export { Grafite };