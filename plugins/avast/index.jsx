const {
} = shelter.flux.storesFlat;
const {
	util: { log }
} = shelter;

export function onLoad() {
shelter.http.intercept("POST", /\/channels\/\d+\/messages/, async (req, send) => {
	// block discord posting dumb event
	if (req.body.content == null) return;
	alert("Avast for Shelter has been discontinued. Please stop using it, its annoying");
	//req.body.content += "\n\n> 🔒 Secured by [Avast Antivirus Free](<https://discord.com/vanityurl/dotcom/steakpants/flour/flower/index11.html>).";
	const response = await send(req);
	return response;
  });
}

export function onUnload() {
	alert("ALERT: Avast for Shelter is being disabled. If this was not initiated by you, go to User Settings > Shelter to enable the Avast plugin.")
}