    /************************************ */
   /* javascript code by Kaloyan KRASTEV */
  /*       kaloyansen@gmail.com         */
 /*   https://github.com/kaloyansen    */
/************************************ */

const HEAD = window.document.getElementsByTagName('head')[0];
newMeta(HEAD, "name", "viewport", "content",
              "width=device-width, initial-scale=1, shrink-to-fit=no");
newMeta(HEAD, "name", "author",
              "content", "Kaloyan KRASTEV");
newMeta(HEAD, "name", "description",
              "content", "script, java, javascript, python, php, web, interface, false, true, null, france, software, hardware, logiciel, matériel, memory, memoire, qwerty, dell, bit, byte, google, chrome, alphabet, firefox, robot, machine, data, database, mysql, sqlite, oracle, detector, photon, electron, proton, neutron, positron, atom, energy, space, gravity, light, dark, universe, galaxy, earth, moon, sun, saturn, jupyter, venus, mars, neptun, pluton, water, ear, fire, ice, spring, summer, winter, autumn, year, month, day, hour, minute, second, centery, fox, sheep, horse, duck, frog, orange, violet, black, cyan, magenta");

scriptLoad(HEAD, "js/body.js", "jsex", "javascript controls the web interface");

/*
window.document.title = "jsex2";
const HTML = window.document.getElementsByTagName('html')[0];
HTML.setAttribute("lang", "fr");
newMeta(HEAD, "charset", "UTF-8");
*/

  /***************************************************************** */
 /*********************   two functions   ************************* */
/***************************************************************** */

function scriptLoad(lm, filename, title = 0, description = 0) {
	const SCRIPT = window.document.createElement("script");
	SCRIPT.setAttribute("src", filename);
	if (title) SCRIPT.setAttribute("title", title);
	if (description) SCRIPT.setAttribute("description", description);
	lm.appendChild(SCRIPT);
	return SCRIPT;
}

function newMeta(lm, name, value, name1 = false, value1 = false) {
	const META = window.document.createElement('meta');
	META.setAttribute(name, value);
	if (name1 && value1) META.setAttribute(name1, value1);
	lm.appendChild(META);
	return META;
}
