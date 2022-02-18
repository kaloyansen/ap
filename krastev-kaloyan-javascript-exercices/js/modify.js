/************************************ */
/* javascript code by Kaloyan KRASTEV */
/*       kaloyansen@gmail.com         */
/*   https://github.com/kaloyansen    */
/************************************ */

const CIRCLE_RETARD = 210;//ms
const CIRCLE_SPEED_OF_SIZE_CHANGE = 0.022;//px
const SPANCollection = window.document.getElementsByTagName('span');
const IMAGECollection = window.document.getElementsByTagName('img');
const LI = window.document.getElementsByTagName('li');

const SPAN = SPANCollection[0];
const IMAGE = IMAGECollection[0];
const BODY = window.document.getElementsByTagName('body')[0];
const CONTAINER = window.document.getElementById('app');

if (SPAN) SPAN.style.display = "block";
if (IMAGE) IMAGE.style.display = "block";

const GOBACK = window.document.createElement("button");
GOBACK.onclick = function() { window.history.back(); };
GOBACK.style.display = "block";
//window.document.
BODY.appendChild(GOBACK);
const TITLE = window.document.title;
GOBACK.innerHTML = `${TITLE}`;
console.log(GOBACK.innerHTML);

const GRIDX = 3;
const GRIDY = 2;

let size = 2;
const CIRCLE = window.document.createElement("div");
CIRCLE.style.width = size + "rem";
CIRCLE.style.height = size + "rem";
CIRCLE.style.borderStyle = "solid";
CIRCLE.style.borderColor = "gray";
CIRCLE.style.borderWidth = "0.2rem";
CIRCLE.style.borderRadius = "100%";

//window.onLoad = function(event) { Korrection(event, CIRCLE, 13, 11); 
if (TITLE === "Ex 01") {
    SPAN.onclick = function(event) { event.target.textContent = 'X'; };
}

if (TITLE === "Ex 02") {
    SPAN.onclick = function(event) { 
	if (event.target.innerHTML == 'X') event.target.innerHTML = 'O';
	else if (event.target.innerHTML == 'O') event.target.innerHTML = 'X';
	else event.target.innerHTML = 'E';		
    };
}

if (TITLE === "Ex 03") {
    SPAN.onmouseover = function(event) { event.target.style.backgroundColor = "magenta"; };
    SPAN.onmouseout = function(event) { event.target.style.backgroundColor = "cyan"; };
}

if (TITLE === "Ex 04") {
    LI[2].style.display = "none";
    LI[1].style.display = "none";
    LI[0].onclick = function() {
	if (LI[1].style.display == "none") {
	    LI[1].style.display = "block";
	    LI[2].style.display = "block";
	} else {
	    LI[1].style.display = "none";
	    LI[2].style.display = "none";
	}
    }
}

if (TITLE === "Ex 05") {
    LI[5].style.display = "none";
    LI[4].style.display = "none";
    LI[2].style.display = "none";
    LI[1].style.display = "none";
    LI[0].onclick = function() {
  	LI[4].style.display = "none";
 	LI[5].style.display = "none";
	if (LI[1].style.display == "none") {
	    LI[1].style.display = "block";
  	    LI[2].style.display = "block";
  	} else {
	    LI[1].style.display = "none";
  	    LI[2].style.display = "none";	
	}
    };
    LI[3].onclick = function() {
	LI[1].style.display = "none";
	LI[2].style.display = "none";	
	if (LI[4].style.display == "none") {
	    LI[4].style.display = "block";
  	    LI[5].style.display = "block";
  	} else {
	    LI[4].style.display = "none";
  	    LI[5].style.display = "none";
  	}
    };
}

if (TITLE === "Ex 06") {
    let i = 0;
    while (i++ < GRIDY) {
	const ROW = window.document.createElement("div");
	ROW.style.display = "block";
	let k = 0;
	while (k++ < GRIDX) {
	    const CELL = window.document.createElement("div");
	    CELL.style.left = k * 6 + "rem";
	    CELL.style.top = i * 6 + "rem";
	    CELL.style.height = "6rem";			
	    CELL.style.width = "6rem";
	    CELL.style.display = "inline-block";
	    CELL.style.borderColor = "gray";
	    CELL.style.borderStyle = "solid";
	    CELL.style.borderWidth = "0.1rem";
	    CELL.style.margin = "-0.2rem 0";
	    
	    ROW.appendChild(CELL);
	}
	CONTAINER.appendChild(ROW);      
    }
}

if (TITLE === "Ex 06b") {
    let gridiv = window.document.createElement("div");
    for (var k in grid) gridiv[k] = grid[k];//from file ex-06b.js
    for (var k in grid.style) gridiv.style[k] = grid.style[k];//from file ex-06b.js
    
    let imax = 6;
    let boxdiv = [imax];
    while (imax > 0) {
	imax --;
	boxdiv[imax] = window.document.createElement("div");
	for(var k in box) boxdiv[imax][k] = box[k];//from file ex-06b.js
	for(var k in box.style) boxdiv[imax].style[k] = box.style[k];//from file ex-06b.js
	gridiv.appendChild(boxdiv[imax]);
    }
    
    CONTAINER.appendChild(gridiv);
}

if (TITLE === "Ex 07") {
    LI[0].onclick = function() { BODY.style.backgroundColor = "white"; };
    LI[1].onclick = function() { BODY.style.backgroundColor = "red"; };
    LI[2].onclick = function() { BODY.style.backgroundColor = "green"; };
    LI[3].onclick = function() { BODY.style.backgroundColor = "blue"; };
}

if (TITLE !== "Ex 08") {
    if (IMAGE) IMAGE.remove();
} else {
    IMAGE.onclick = function(event) {
	event.target.setAttribute("src", "https://picsum.photos/id/1020/600/400");
    };
}

let timeOut = 0;

if (TITLE === "Ex 09" || TITLE === "Ex 10") {
    GOBACK.remove();
    CIRCLE.style.display = "none";
    //window.document.
    BODY.appendChild(CIRCLE);
    window.document.onmousemove = function(event) {
	if (size > 2) size -= CIRCLE_SPEED_OF_SIZE_CHANGE;
	else size += CIRCLE_SPEED_OF_SIZE_CHANGE * 22;
	timeOut = Korrection(event, CIRCLE, 20, 13);
        CIRCLE.style.display = "block";
        CIRCLE.innerHTML = ``;//`(${event.clientX}x${event.clientY})px`;
    }
}

if (TITLE === "Ex 10") {
    window.document.onclick = function(event) {
	size += CIRCLE_SPEED_OF_SIZE_CHANGE * 22;
	timeOut = Korrection(event, CIRCLE, 13, 11);
        CIRCLE.innerHTML = `${~~size}rem`;
    }
}

window.clearTimeout(timeOut);

//functions
function Korrection(event, item, x, y) {
    item.style.width = size + "rem";
    item.style.height = size + "rem";
    let w = getJustNumber(item.style.width);
    let h = getJustNumber(item.style.height);
    let timeo = window.setTimeout(() => {
        item.style.marginLeft = event.clientX - x * w + "px";
        item.style.marginTop = event.clientY - y * h + "px";
    }, CIRCLE_RETARD);
    return timeo;
}

function getJustNumber(eleparam, unit = 'px', base = 10) {
    return parseInt(eleparam.replace(unit, ''), base);
}

function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
