(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugins/avast/index.jsx
  var avast_exports = {};
  __export(avast_exports, {
    onLoad: () => onLoad,
    onUnload: () => onUnload
  });
  var {} = shelter.flux.storesFlat;
  var {
    util: {
      log
    }
  } = shelter;
  function onLoad() {
    shelter.http.intercept("POST", /\/channels\/\d+\/messages/, async (req, send) => {
      if (req.body.content == null)
        return;
      alert("Avast for Shelter has been discontinued. Please stop using it, its annoying");
      const response = await send(req);
      return response;
    });
  }
  function onUnload() {
    alert("ALERT: Avast for Shelter is being disabled. If this was not initiated by you, go to User Settings > Shelter to enable the Avast plugin.");
  }
  return __toCommonJS(avast_exports);
})();
