import { obserable } from 'mobx';

class AppStore {
  @obserable date = 'YYYY-MM-DD';

  setDate (date) {
    this.date = date;
  }


}
const appStore = new AppStore();
export default appStore;
