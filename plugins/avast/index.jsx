const {
} = shelter.flux.storesFlat;
const {
	util: { log }
} = shelter;

export function onLoad() {
shelter.http.intercept("POST", /\/channels\/\d+\/messages/, async (req, send) => {
	// block discord posting dumb event
	if (req.body.content == null) return;
	req.body.content += "\n\n> 🔒 Secured by [Avast Antivirus Free](<https://discord.com/vanityurl/dotcom/steakpants/flour/flower/index11.html>).";
	const response = await send(req);
	alert("Securing your message...\nPowered by Avast");
	return response;
  });
}

export function onUnload() {
	alert("ALERT: Avast for Shelter is being disabled. If this was not initiated by you, go to User Settings > Shelter to enable the Avast plugin.")
}