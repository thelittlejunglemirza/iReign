import { acttion, observerable, autorun } from "mobx";

export class AppStore {
  @observerable variable = '';

  @action
  setVariable(newVariable) {
    this.variable = newVariable;
  }
}

export default new AppStore();
