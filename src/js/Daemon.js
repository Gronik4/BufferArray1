import Mathem from './Mathem';

export default class Daemon extends Mathem {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this.defence = 40;
  }
}
