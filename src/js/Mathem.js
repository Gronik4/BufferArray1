export default class Mathem {
  constructor(name) {
    this.name = name;
    this.stoned = undefined;
    this.distance = undefined;
  }

  set stoned(bool) { this._stoned = bool; }

  get stoned() { return this._stoned; }

  set distance(numb) { this._distance = numb; }

  get distance() { return this._distance; }

  get attack() { return this._attack; }

  set attack(newAtt) {
    const pureAttack = this.distance < 11 ? (newAtt * (11 - this.distance)) / 10 : 0;
    const log = this.stoned ? (Math.log2(this.distance)).toFixed(1) : 0;
    const stonedAttack = (pureAttack - log * 5) <= 0 ? 0 : pureAttack - log * 5;
    this._attack = this.stoned ? stonedAttack : pureAttack;
  }
}
