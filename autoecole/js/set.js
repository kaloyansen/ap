/* 
   javascript code by Kaloyan KRASTEV
   kaloyansen@gmail.com
   https://github.com/kaloyansen
*/

console.clear;
console.log("js fonction controlle la page web");
console.log("javascript code by Kaloyan KRASTEV");
if (typeof window === 'undefined') console.log("welcome to node.js");
else console.log('screen size: ' + screen.width + 'x' + screen.height);

function setter(key, graphtag, textetag) {
    
    const graph = document.getElementById(graphtag);
	const texte = document.getElementById(textetag);        
    const choix = ["ACCEUIL", "AUTO", "MOTO", "BATEAU", "CONTACT"];
    let bgimg, inner;

    console.clear();
    console.log(key, graphtag, textetag);    
    switch (key) {/* key controls the content */
    case 'ACCEUIL':
        bgimg = "img/examen.jpg";
        inner = "<h2>Prêt(e) pour une expérience de conduit complète ?</h2><h5>Pour apprendre à conduir ou naviguer notre auto-bateau école vous reçoit du lundi au samedi. Notre professionnels vous acompagne	et vous conseille tout le long de la formation pour que le jour de l'examen vous soyez au point.</h5><h5>Pour plus d'information contactez nous !</h5>";
        break;
    case 'AUTO':
        bgimg = "img/auto.jpg";
        inner = "<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2><h5>Iste molestiae obcaecati vero tempore optio veniam fuga quas velit ipsum eum laborum eos hic molestias dolores reprehenderit magnam ad deserunt provident atque at rem.</h5>";
        break;
    case 'MOTO':
        bgimg = "img/moto.jpg";
        inner = "<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2><h5>Labore tempora necessitatibus dicta esse asperiores deleniti sed at eveniet ad beatae atque voluptatem amet iure facere nemo nobis quos quidem laboriosam magni fugiat autem.</h5>";
        break;
    case 'BATEAU':
        bgimg = "img/bateau.jpg";
        inner = "<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2><h5>Officia sit vel voluptate qui commodi perferendis nostrum temporibus tenetur corrupti necessitatibus voluptatem excepturi voluptatibus sunt eius earum rerum vero ratione consectetur illum quia quod.</h5>";
        break;
    case 'CONTACT':
        bgimg = "img/conduire.jpg";
        inner = "<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2><h5>Ipsum delectus minus quam ea vel ullam iure assumenda deserunt dignissimos hic reiciendis explicabo perferendis doloribus expedita voluptates repellat id. Nulla reiciendis labore fuga atque?</h5>";
        break;
    default:
        bgimg = "img/permis.jpg";
        inner = "très étrange";
    }
    
    graph.style.backgroundImage = "url('" + bgimg + "')";
    texte.innerHTML = inner;

    choix.forEach(function (k) {// display inactive keys
        const but = document.getElementById(k);
        if (k == key) but.style.display = "none";
        else but.style.display = "inline"; 
    });
}
