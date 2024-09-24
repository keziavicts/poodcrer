import { Kid } from "./kid";

class Trampoline {
    private playing: Kid[] = [];
    private waiting: Kid[] = [];

    static removeFromList(name: string, list: Kid[]): Kid | null {
        const index = list.findIndex(kid => kid.getName() === name);
        if (index !== -1) {
        return list.splice(index, 1)[0];
        }
        return null;
    }

    arrive(kid: Kid): void {
        this.waiting.unshift(kid);
    }

    enter(): void {
        if (this.waiting.length > 0) {
           
            const kid = this.waiting.pop(); 
            if (kid) {
                this.playing.unshift(kid); 
            }
        }
    }

    leave(): void {
        if (this.playing.length > 0) {
            const kid = this.playing.pop(); 
            if (kid) {
                this.waiting.unshift(kid); 
            }
        }
    }

    removeKid(name: string): Kid | null {
        const removedFromWaiting = Trampoline.removeFromList(name, this.waiting);
        if (removedFromWaiting) {
            return removedFromWaiting;
        }
        return Trampoline.removeFromList(name, this.playing);
    }

    toString(): string {
        const waitingList = this.waiting.map(kid => kid.toString()).join(', ');
        const playingList = this.playing.map(kid => kid.toString()).join(', ');
        return `[${waitingList}] => [${playingList}]`;
    }
}

export { Trampoline };