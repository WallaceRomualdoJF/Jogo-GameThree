import {entity} from './entity.js';


export const ui_controller = (() => {

  class UIController extends entity.Component {
    constructor(params) {
      super();
      this._params = params;
    }

    InitComponent() {
      this._iconBar = {
        stats: document.getElementById("icon-bar-stats"),
        inventory: document.getElementById("icon-bar-inventory"),
      };

      this._ui = {
        inventory: document.getElementById("inventory"),
        stats: document.getElementById("stats"),
      };

      this._iconBar.inventory.onclick = (m) => {
        this._OnInventoryClicked(m);
      };
      this._iconBar.stats.onclick = (m) => {
        this._OnStatsClicked(m);
      };
      this._HideUI();
    }

    _HideUI() {
      this._ui.inventory.style.visibility = "hidden";
      this._ui.stats.style.visibility = "hidden";
    }

    _OnStatsClicked(msg) {
      const visibility = this._ui.stats.style.visibility;
      this._HideUI();
      this._ui.stats.style.visibility = visibility ? "" : "hidden";
    }

    _OnInventoryClicked(msg) {
      const visibility = this._ui.inventory.style.visibility;
      this._HideUI();
      this._ui.inventory.style.visibility = visibility ? "" : "hidden";
    }

    Update(timeInSeconds) {}
  };

  return {
    UIController: UIController,
  };

})();