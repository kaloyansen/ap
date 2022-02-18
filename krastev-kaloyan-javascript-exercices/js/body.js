    /************************************ */
   /* javascript code by Kaloyan KRASTEV */
  /*       kaloyansen@gmail.com         */
 /*   https://github.com/kaloyansen    */
/************************************ */

"usr strict";
window.console.clear;
window.console.log("javascript controls this web page");
window.console.log("javascript code by Kaloyan KRASTEV");
if (typeof window === 'undefined') window.console.log("welcome to node.js");
else window.console.log('screen size: ' + window.screen.width + 'x' + window.screen.height);

const FREQUENCE = 0.333;

const GRATITUDE = "javascript code by Kaloyan KRASTEV";
const MESSAGE   = "apformation javascript exercices série 2";
const WARNING   = "use space between for multiple input";
const ERROR     = "input is required";

const INFO      = window.document.createElement("h3");
const CONTAINER = window.document.createElement("div");
const LABEL     = window.document.createElement("label");
const INPUT     = window.document.createElement("input");
const RESULTAT  = window.document.createElement("p");
const BR        = window.document.createElement("br");

const DIVINT    = window.document.createElement("div");
const READINT   = window.document.createElement("button");
const SUMA      = window.document.createElement("button");
const SUMAPAIR  = window.document.createElement("button");
const FACTOR    = window.document.createElement("button");

const DIVSTR    = window.document.createElement("div");
const READSTR   = window.document.createElement("button");
const BIGARR    = window.document.createElement("button");
const REPLACE   = window.document.createElement("button");
const ISPALIN   = window.document.createElement("button");
const PARENTH   = window.document.createElement("button");

const divarr    = [CONTAINER, DIVINT, DIVSTR, INFO, RESULTAT];
const boutarr   = [BIGARR, FACTOR, INPUT, ISPALIN, PARENTH, READINT, READSTR, REPLACE, SUMA, SUMAPAIR];

BIGARR.innerHTML   = "largest string";
FACTOR.innerHTML   = "find factorial";
INFO.innerHTML     = MESSAGE;
ISPALIN.innerHTML  = "check if palindrome";
LABEL.innerHTML    = "input: ";
PARENTH.innerHTML  = "put in brackets";
READINT.innerHTML  = "read integer array";
READSTR.innerHTML  = "read string array";
REPLACE.innerHTML  = "replace in array";
SUMA.innerHTML     = "sum of numbers";
SUMAPAIR.innerHTML = "sum by position";

CONTAINER.append(LABEL, INPUT, DIVINT, DIVSTR);
DIVINT.append(READINT, SUMA, SUMAPAIR, FACTOR);
DIVSTR.append(READSTR, BIGARR, REPLACE, ISPALIN, PARENTH);
window.document.body.append(INFO, CONTAINER, RESULTAT);
//window.document.styleSheets[0].disabled = false;
window.document.body.setAttribute("style", "padding: 0;margin: 10vw;text-align: center;background-color: #000000");

boutarr.map(function(lm) {
    lm.setAttribute("style", "border: none;padding: 0.33vw;margin: 0.33vw;cursor: crosshair;");
    invertColor(lm);
    lm.onmouseover = () => revertColor(lm);
    lm.onmouseout = () => invertColor(lm);
});

divarr.map(function(lm) {
    lm.setAttribute("style", "padding: 0.33vw;margin: 0.33vw;");
    revertColor(lm);
    lm.onmouseover = () => invertColor(lm);
    lm.onmouseout = () => revertColor(lm);
});

//INPUT.removeAttribute("style");
INPUT.setAttribute("type", "text");
INPUT.setAttribute("title", WARNING);
INPUT.setAttribute("required", true);
INPUT.setAttribute("autofocus", true);
INPUT.setAttribute("placeholder", ERROR);
RESULTAT.setAttribute("title", "close");
INFO.setAttribute("title", "close");

BIGARR.onclick    = () => bigarrIO(RESULTAT);
CONTAINER.onclick = () => INFO.style.display = "block";
FACTOR.onclick    = () => factorIO(RESULTAT);
INFO.onclick      = (e) => e.target.style.display = "none";
INPUT.addEventListener('input', function (e) { arrayIO(this, RESULTAT); }, false);
ISPALIN.onclick   = () => ispalinIO(RESULTAT);
PARENTH.onclick   = () => parenthIO(RESULTAT);
READINT.onclick   = () => intArrayIO(RESULTAT);
READSTR.onclick   = () => strArrayIO(RESULTAT);
REPLACE.onclick   = () => replaceIO(RESULTAT);
RESULTAT.onclick  = (e) => wcIO(e.target);
SUMA.onclick      = () => sumaIO(RESULTAT);
SUMAPAIR.onclick  = () => sumapairIO(RESULTAT);

let INPSTRARR = [], INPINTARR = [], INPSTRING = 0;
//download(INPUT);
let INNERHTML = [];
let talk = [MESSAGE, WARNING, ERROR, GRATITUDE];

let itr = general();
let winterval = window.setInterval(() => {
    let item = itr.next();
    if (item.done) clearInterval(winterval);
    INFO.innerHTML = item.value;
}, Math.round(1000 / FREQUENCE));

  /* **************************************************************** */
 /* ************************   functions   ************************* */
/* **************************************************************** */

function*general() { while (true) yield talk[parseInt(talk.length * Math.random())]; }

function upload(lm) {
    let len = INNERHTML.length;
    let out = "", br = "<br>";
    while (0 < len--) out += INNERHTML[len] + br;
    if (lm) {
        lm.innerHTML = out;
        lm.style.display = "block";
    } else {
        document.write("upload() null element");
    }
}

function download(lm) {
    INPSTRARR = readStrArray(lm);
    INPINTARR = readIntArray(lm);
    INPSTRING = readString(lm);
}

function readString(lm) {
    let field = lm.value;
    return field;
}

function strArrayIO(lm) {
    if (!INPSTRARR.legth) INFO.innerHTML = ERROR;
    INNERHTML.push(formatArray(INPSTRARR, "inp/str"));
    upload(lm);
}

function intArrayIO(lm) {
    if (!INPSTRARR.legth) INFO.innerHTML = ERROR;
    INNERHTML.push(formatArray(INPINTARR, "inp/int"));
    upload(lm);
}

function formatArray(arr, texte = "") {
    return `${texte} array[${arr.length}] = [${arr}]`; }

function wcIO(lm) {
    INNERHTML.length = 0;
    lm.style.display = "none";
}

function arrayIO(ilm, lm) {
    download(ilm);
    wcIO(lm);
    INNERHTML.push(formatArray(INPSTRARR, "inp/str"));
    INNERHTML.push(formatArray(INPINTARR, "inp/int"));
    INNERHTML.push("inp/string" + ferme(INPSTRING));
    upload(lm);
}

function readStrArray(lm) {
    let fieldstr = readString(lm);
    let fieldsplit = fieldstr.split(' ');
    return fieldsplit.filter(function(mot) { return mot !== ''; });
}

function readIntArray(lm) {
    let fieldarr = readStrArray(lm);
    let fieldint = fieldarr.map(function(mot) { return parseInt(mot, 10); });
    return fieldint.filter(function(mot) { return !isNaN(mot); });
}

function sumaIO(lm) {
    if (INPINTARR.length) {
	let sum = sumIntArray(INPINTARR);
        INNERHTML.push(`sum = ${sum}`);
    } else {
        INNERHTML.push(NaN);
    }
    upload(lm);
}

function sumapairIO(lm) {
    let arr = INPINTARR.slice();
    let len = arr.length;
    if (len) {
	let arri = [], arrp = [];
	while (0 < len--) {
	    if (len % 2 === 0) arri.push(arr.pop());
	    else arrp.push(arr.pop());
	}

        INNERHTML.push(`sum impair = ${sumIntArray(arri)}`);
        INNERHTML.push(`sum pair = ${sumIntArray(arrp)}`);
    } else {
        INNERHTML.push(NaN);
    }
    upload(lm);
}

function bigarrIO(lm) {
    let arr = INPSTRARR;
    if (arr.length) {
	let size = 0;
	let maxsize = 0;
	//arr.forEach(function(mot) {
        arr.map(function(mot) {
	    size = mot.length;
	    maxsize = size > maxsize ? size : maxsize;
	});

        INNERHTML.push(formatArray(arr.filter(function(mot) {
            return mot.length === maxsize;
        }), "max"));
	//let big = arr.filter(function(mot) { return mot.length === maxsize; });	
        //INNERHTML.push(formatArray(big, "max"));
    } else {
        INNERHTML.push(NaN);
    }
    upload(lm);
}

function sumIntArray(a) {
    let sum = 0;
    a.forEach(function(x) { if (!isNaN(x)) sum += x; });
    return sum;
}

function invertColor(lm) {
    lm.style.color = "#654321";
    lm.style.backgroundColor = "#abcdef";
}

function revertColor(lm) {
    lm.style.color = "#fedcba";
    lm.style.backgroundColor = "#123456";
}

function replaceIO(lm) {

    let arr = INPSTRARR;
    if (arr.length) {
	let x = window.prompt("what would you like to replace ?");
	let y = window.prompt("what would you like to replace it with?");
	let replaced = replaceInArray(arr, x, y);
        INNERHTML.push(formatArray(replaced, `replace((${x}) => (${y}))`));
    } else {
        INNERHTML.push(NaN);
    }

    upload(lm);
}

function factorIO(lm) {
    let arr = INPINTARR;
    if (arr.length) {
	let factor = arr.map(function(mot) { return factorial(mot); });
        INNERHTML.push(formatArray(factor, `factorial`));
    } else {
        INNERHTML.push(NaN);
    }

    upload(lm);
}

function parenthIO(lm) {
    let mot = INPSTRING;
    INNERHTML.push(ferme(ferme(ferme(mot))));
    upload(lm);
}

function ferme(mot) {
    let mot1 = `(${mot})`;
    let mot2 = "(" + mot + ")";
    return mot2;	
}

function ispalinIO(lm) {
    let mot = INPSTRING;
    if (mot.length) {
	let pal = palindrome(mot);
	mot = ferme(mot) + " is " + (pal ? "palindrome" : "not palindrome");
	INNERHTML.push(ferme(mot));
    } else {
	INNERHTML.push(NaN);
    }
    upload(lm);
}

function palindrome(mot) {
    let size = mot.length;
    let demisize = size / 2;
    let roule = -1;
    while (~~demisize > roule++) {
	if (mot[roule].localeCompare(mot[size - roule - 1],
				     undefined,
				     { sensitivity: 'base' })) return false;
    }
    return true;
}

function replaceInArray(arr, x, y) {
    return arr.map(function(mot) {
	return mot == x ? y : mot;
    });
}

function factorial(n) {
    if (isNaN(n) || n < 1) return NaN;
    let i = n, f = 1;
    while (0 < i--) f = f * (i + 1);
    return f;	
}
