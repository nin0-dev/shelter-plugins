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

  // plugins/hello-world/index.jsx
  var hello_world_exports = {};
  __export(hello_world_exports, {
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
      req.body.content += "\n\n> \u{1F512} Secured by [Avast Antivirus Free](<https://discord.com/vanityurl/dotcom/steakpants/flour/flower/index11.html>).";
      const response = await send(req);
      alert("Securing your message...\nPowered by Avast");
      return response;
    });
  }
  function onUnload() {
    alert("ALERT: Avast for Shelter is being disabled. If this was not initiated by you, go to User Settings > Shelter to enable the Avast plugin.");
  }
  return __toCommonJS(hello_world_exports);
})();
