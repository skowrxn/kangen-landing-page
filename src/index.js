/* kangenpolska.pl nie może służyć jako landing page (wymóg Enagic z 07.2026) —
   cała domena przekierowuje na stronę producenta (EWS) dystrybutora.
   Wdrożenie: npx wrangler deploy */

const EWS = "https://kangenpolska.ecokangen.com/pl_PL/";

export default {
    fetch() {
        return Response.redirect(EWS, 301);
    },
};
