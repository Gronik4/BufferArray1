import Mathem from './Mathem';

export default class Magician extends Mathem {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.defence = 40;
  }
}
