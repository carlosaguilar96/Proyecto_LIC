let titulo = document.getElementById("titulo");
let intro = document.getElementById("intro");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
let p6 = document.getElementById("p6");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let dImg1 = document.getElementById("descripcionIMG1");
let dImg2 = document.getElementById("descripcionIMG2");
const navbar = document.getElementById("navbarSupportedContent")
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn10 = document.getElementById("btn10");
const btn11 = document.getElementById("btn11");
const btn12 = document.getElementById("btn12");
btn1.addEventListener("click", destino1);
btn2.addEventListener("click", destino2);
btn3.addEventListener("click", destino3);
btn4.addEventListener("click", destino4);
btn5.addEventListener("click", destino5);
btn6.addEventListener("click", destino6);
btn7.addEventListener("click", destino7);
btn8.addEventListener("click", destino8);
btn9.addEventListener("click", destino9);
btn10.addEventListener("click", destino10);
btn11.addEventListener("click", destino11);
btn12.addEventListener("click", destino12);

function destino1(){
    btn1.className = "list-group-item list-group-item-action active";
    btn2.className = "list-group-item list-group-item-action";
    btn3.className = "list-group-item list-group-item-action";
    btn4.className = "list-group-item list-group-item-action";
    btn5.className = "list-group-item list-group-item-action";
    btn6.className = "list-group-item list-group-item-action";
    btn7.className = "list-group-item list-group-item-action";
    btn8.className = "list-group-item list-group-item-action";
    btn9.className = "list-group-item list-group-item-action";
    btn10.className = "list-group-item list-group-item-action";
    btn11.className = "list-group-item list-group-item-action";
    btn12.className = "list-group-item list-group-item-action";
    navbar.className = "collapse navbar-collapse";

    titulo.innerHTML = "Parque Montecristo";
    intro.innerHTML = "Con m??s de 1900 hect??reas, ubicado en el departamento de Santa Ana, el <b>Parque Nacional Montecristo</b> es una maravilla de la naturaleza salvadore??a, en la que podemos disfrutar de hacer acampada y senderismo, para poder ver la <b>Reserva de la Biosfera del Trifinio</b>; desde la cual podemos ver Guatemala, Honduras y El Salvador.";
    p1.innerHTML = "Como parte de los atractivos destacan sus paisajes, haciendo inevitable aprovechar la oportunidad de tomar impresionantes fotograf??as. Adem??s de observar la vida silvestre y cualquier cantidad de especies en su entorno.";
    img1.src = "../img/montecristo1.jpg";
    dImg1.innerHTML = "Senderismo en el Parque Nacional Montecristo";
    p2.innerHTML = "El ambiente, su forma, el olor y hasta el m??s m??nimo detalle, hace de este parque el destino perfecto para compartir con familiares y amigos. Donde las actividades recreativas son el reflejo de las diversas formas que existen para disfrutar de la naturaleza.";
    p3.innerHTML = "El parque cuenta con tres cerros que puedes visitar sin problemas. Hablamos de <b>Miramundo</b> a 2.393 m.s.n.m, <b>El Brujo</b> con 2.140 m.s.n.m y <b>Montecristo</b> con 2.418 m.s.n.m. Desde las diferentes alturas podr??s disfrutar de una vista de los alrededores maravillosa. Pero, si llegas al punto m??s alto, estar??s exactamente en el <b>Punto Trifinio</b>. Se le ha dado este nombre porque es donde se encuentra la frontera entre El Salvador, Honduras y Guatemala.";
    p4.innerHTML = "El parque cuenta con gu??as que te ofrecen un recorrido completo por el bosque, llev??ndote por aquellos senderos en los que podr??s ver a la fauna m??s emblem??tica del lugar en su h??bitat. Desde all?? podr??s tomar las fotograf??as que gustes mientras que descubres toda la magia que abunda en este bosque.";
    img2.src = "../img/montecristo2.jpg";
    dImg2.innerHTML = "Hacienda en Montecristo";
    p5.innerHTML = "No tendr??s que realizar un recorrido de un d??a, sino que puedes acampar dentro del parque. Para ello, los guardaparques han destinado algunos lugares para esta actividad. Pero, adem??s, podr??s alquilar alguna de las caba??as disponibles para el hospedaje de turistas. Todas cuentan con servicios b??sicos como luz, agua, duchas, cocina, entre otros.";
    p6.innerHTML = "Dada la cantidad de turistas que vienen al <b>Parque Nacional Montecristo</b>, el acceso diario es limitado. Recuerda realizar la reservaci??n para acceder al parque con antelaci??n. Para ello debe llenar el formulario de solicitud disponible en la p??gina oficial de <a href='https://marn.gob.sv/wp-content/uploads/2021/01/form-Montecristo_.pdf' target='_blank'>MARN.gob.sv</a>. O bien, llamando a los tel??fonos +503 2123-6220 / 2123-6239 / 7850-9056.";
}

function destino2(){
    btn1.className = "list-group-item list-group-item-action";
    btn2.className = "list-group-item list-group-item-action active";
    btn3.className = "list-group-item list-group-item-action";
    btn4.className = "list-group-item list-group-item-action";
    btn5.className = "list-group-item list-group-item-action";
    btn6.className = "list-group-item list-group-item-action";
    btn7.className = "list-group-item list-group-item-action";
    btn8.className = "list-group-item list-group-item-action";
    btn9.className = "list-group-item list-group-item-action";
    btn10.className = "list-group-item list-group-item-action";
    btn11.className = "list-group-item list-group-item-action";
    btn12.className = "list-group-item list-group-item-action";
    navbar.className = "collapse navbar-collapse";

    titulo.innerHTML = "Parque El Imposible";
    intro.innerHTML = "El <b>Parque Nacional El Imposible</b> es una maravilla natural de El Salvador ubicado en el departamento de Ahuachap??n. Es el parque nacional m??s grande del pa??s, que con m??s de 5 mil hect??reas, nos enamorar?? con sus vegetaci??n verde, animales y riachuelos.";
    p1.innerHTML = "La extensi??n del <b>Parque Nacional El Imposible</b>, permite ofrecer numerables servicios a quienes lo visitan. Aunque sin duda, las caminatas forman parte esencial del programa tur??stico del parque.";
    img1.src = "../img/imposible1.jpg";
    dImg1.innerHTML = "Vistas del Bosque El Imposible";
    p2.innerHTML = "Dirigidos normalmente por gu??as especializados, estos paseos se realizan a trav??s de los caminos que atraviesan todo el parque, donde se disfruta del paisaje y la fauna de este bosque fascinante, as?? como de sus miradores, r??os, manantiales y cascadas.";
    p3.innerHTML = "Dentro de las ??reas permitidas del <b>Parque Nacional El Imposible</b> se puede acampar en tiendas, para complacer a los amantes del contacto directo con la naturaleza a cualquier hora, pasando una o m??s de una noche alumbrados por una c??lida fogata. Incluso, existen hospedajes bastantes cercanos al parque para alojarse, como un hostal ubicado a solo 1Km del mismo, o algunos hoteles y posadas en las comunidades vecinas.";
    p4.innerHTML = "Entre tanto, los aficionados al avistaje de aves no pueden olvidar sus binoculares, y los cazadores de im??genes deben llevar preparadas sus c??maras, para obtener fotograf??as y videos irrepetibles de esta impresionante reliquia natural. La fauna del parque <b>El Imposible</b> est?? favorecida como santuario para animales que se encuentran en peligro de extinci??n.";
    img2.src = "../img/imposible2.jpg";
    dImg2.innerHTML = "R??os del Parque Nacional El Imposible";
    p5.innerHTML = "A quienes les agrada el deporte extremo, pueden practicar senderismo entre picos y hondonadas, hacer rapel y hasta darse un buen ba??o en cualquiera de las pozas de los 7 r??os que cruzan todo el parque. Tambi??n, dentro del amplia ??rea de este enclave tur??stico natural, se encuentran atractivos espacios arqueol??gicos, ocho en total, que corresponden a diferentes per??odos prehisp??nicos. El m??s conocido es la famosa <b>Piedra Sellada</b>, donde se pueden observar los dibujos y grabados elaborados sobre las piedras, petroglifos que se encuentran en la barranca del afluente <b>Guayapa</b>.";
    p6.innerHTML = "La mejor ??poca para recorrer <b>El Imposible</b> es durante el per??odo de estaci??n seca o verano, comprendida entre los meses de noviembre y abril. Antes de la visita al parque, se debe obtener un permiso de ingreso en las oficinas de la <b>Fundaci??n Ecol??gica SALVANATURA</b>.";
}

function destino3(){
    btn1.className = "list-group-item list-group-item-action";
    btn2.className = "list-group-item list-group-item-action";
    btn3.className = "list-group-item list-group-item-action active";
    btn4.className = "list-group-item list-group-item-action";
    btn5.className = "list-group-item list-group-item-action";
    btn6.className = "list-group-item list-group-item-action";
    btn7.className = "list-group-item list-group-item-action";
    btn8.className = "list-group-item list-group-item-action";
    btn9.className = "list-group-item list-group-item-action";
    btn10.className = "list-group-item list-group-item-action";
    btn11.className = "list-group-item list-group-item-action";
    btn12.className = "list-group-item list-group-item-action";
    navbar.className = "collapse navbar-collapse";

    titulo.innerHTML = "Parque El Boquer??n";
    intro.innerHTML = "El <b>Parque Nacional El Boquer??n</b>, entre los departamentos de San Salvador y La Libertad, nos ofrece un hermoso paisaje en el que podr??s hacer un recorrido a trav??s de senderos y una gran variedad de miradores. Todos repartidos en la ruta hasta los picos que llevan por nombre <b>El Picacho</b>, <b>El Jabal??</b> y por supuesto, <b>El Boquer??n</b>.";
    p1.innerHTML = "<b>El Boquer??n</b> no es m??s que el mejor destino tur??stico para realizar senderismo alrededor de su incre??ble cr??ter volc??nico. El cual consta de 3 cumbres adornadas por una maravillosa y colorida vegetaci??n.";
    img1.src = "../img/boqueron1.jpg";
    dImg1.innerHTML = "Vistas del Parque El Boquer??n";
    p2.innerHTML = "No te preocupes por llevar comida, pues aqu?? encontrar??s restaurantes en los que podr??s disfrutar de los platos tradicionales de la regi??n y del pa??s. Ya dentro del <b>Parque Nacional</b>, puedes conocer m??s sobre su historia en el <b>Museo</b>.";
    p3.innerHTML = "Incluso, hay una exposici??n de trajes t??picos que podr??s colocarte para tomarte fotograf??as tem??ticas maravillosas. Una de las atracciones m??s importantes, es la caminata hasta el coraz??n del cr??ter <b>El Boquer??n</b> por senderos de dificultad media. Un dato interesante, es que en algunos miradores podr??s encontrar sitios que ofrecen caf??. Todo elaborado y producido de forma artesanal en sus inmediaciones.";
    p4.innerHTML = "Por otra parte, la formaci??n del cr??ter tuvo lugar durante el a??o 1917 a ra??z de una erupci??n que destruy?? parcialmente zonas de San Salvador, Quezaltepeque y Nejapa. Dando como resultado una gran extensi??n de lava sobre el campo, recibiendo el nombre de <b>El Play??n</b>. Uno de los puntos emblem??ticos en los recorridos que se realizan dentro de las instalaciones del parque.";
    img2.src = "../img/boqueron2.jpg";
    dImg2.innerHTML = "Cr??ter del Boquer??n";
    p5.innerHTML = "El clima en el <b>Parque Nacional El Boquer??n</b> se ubica en los 21??C aproximadamente. La misma hace posible la conservaci??n y el desarrollo de una gran diversidad en flora y fauna. En el caso de la flora, destacan cientos de especies arb??reas, arbustos y plantas ornamentales. Entre los cuales tenemos cedros, amate, pepetos y ceibas. Al igual que hortensias, begonias, cartuchos y m??s. Por ??ltimo, su fauna cuenta con especies de tipo reptil, mam??feros, roedores y aves. Los m??s comunes son los venados, zorros, mapaches, serpientes arbor??colas, entre otros.";
    p6.innerHTML = "Si al final de todo tu recorrido por <b>El Boquer??n</b> a??n te queda tiempo para una aventura m??s, puedes acercarte hasta la <b>Finca El Espino</b>. En la misma encontrar??s un ecoparque de m??s de 500 km<sup>2</sup> que tambi??n forma parte de la zona natural protegida. Cabe destacar, que forma parte del pulm??n de la capital y se encuentra justo al sureste del <b>Volc??n San Salvador</b>.";
}

function destino4(){
    btn1.className = "list-group-item list-group-item-action";
    btn2.className = "list-group-item list-group-item-action";
    btn3.className = "list-group-item list-group-item-action";
    btn4.className = "list-group-item list-group-item-action active";
    btn5.className = "list-group-item list-group-item-action";
    btn6.className = "list-group-item list-group-item-action";
    btn7.className = "list-group-item list-group-item-action";
    btn8.className = "list-group-item list-group-item-action";
    btn9.className = "list-group-item list-group-item-action";
    btn10.className = "list-group-item list-group-item-action";
    btn11.className = "list-group-item list-group-item-action";
    btn12.className = "list-group-item list-group-item-action";
    navbar.className = "collapse navbar-collapse";

    titulo.innerHTML = "Pe????n de Comasagua";
    intro.innerHTML = "El <b>Pe????n de Comasagua</b> tiene una belleza natural impresionante, pero adem??s, ha servido como punto de referencia para barcos en alta mar, y cuenta con espectaculares vistas a diferentes cerros y volcanes de El Salvador, su magnitud es tal que, tiene la capacidad de ofrecer una vista completa de los alrededores.";
    p1.innerHTML = "En el <b>Pe????n de Comasagua</b> puedes hacer ecoturismo con plena libertad, donde destaca el senderismo, contacto con la naturaleza y por qu?? no, hacer fotograf??a de naturaleza e inmortalizar los colores m??s impresionantes que adornan el paisaje.";
    img1.src = "../img/comasagua1.jpg";
    dImg1.innerHTML = "Senderismo en el Pe??on de Comasagua";
    p2.innerHTML = "La ruta consta de 1.5 km, su sendero es moderado por lo que es un recorrido ideal para toda la familia. El punto de acceso al pe????n se encuentra en el cant??n <b>La Shila</b> en el municipio de Comasagua y justo en una zona destinada al cultivo de diferentes granos.";
    p3.innerHTML = "Desde all??, se debe pasar por las gradas aseguradas que fueron construidas hasta llegar al punto exacto donde se encuentra la base del <b>Pe????n de Comasagua</b>. Cabe destacar que el recorrido puede tardar entre 45 minutos y 1 hora hasta llegar a la cima. En el ??rea donde se encuentran las gradas, se puede ver casi todo el d??a como el camino se despeja en medio de la neblina. Por lo que, aunque es una zona segura, hay que tomar precauciones durante la escalada.";
    p4.innerHTML = "Despu??s de este tramo, no existe ninguna protecci??n, de modo que, ser?? necesario mantenerse dentro del sendero en la monta??a hasta llegar a la cima del pe????n. Una vez all??, la vista de 360?? te permitir?? observar a lo lejos gran parte de las costas salvadore??as, monta??as y algunos volcanes. Tal es el caso del <b>Volc??n de San Vicente</b> o <b>Chinchontepec</b>, <b>Volc??n de San Miguel</b>, <b>cerro Las Pavas</b> y <b>Guazapa</b>, y el Oc??ano Pac??fico.";
    img2.src = "../img/comasagua2.jpg";
    dImg2.innerHTML = "??reas verdes del Pe????n de Comasagua";
    p5.innerHTML = "En el <b>Pe????n de Comasagua</b> podr??s disfrutar de un clima tropical con temperaturas promedio entre 20 ??C por la noche y 33 ??C m??ximo durante el d??a. Para esta regi??n monta??osa existe una gran probabilidad de precipitaci??n durante todo el a??o de forma espor??dica. Por otra parte, la flora caracter??stica del lugar es completamente silvestre, se puede llegar a observar helechos, musgo, flores y ??rboles en diversas partes del recorrido. En cuanto a la fauna, es el h??bitat natural para diversas especies de aves, reptiles, roedores y por supuesto, el venado de cola blanca.";
    p6.innerHTML = "Si quieres conocer este impresionante pe????n, el mejor momento para conquistar su c??spide es a muy temprana hora de la ma??ana o antes del atardecer. Ya que durante este momento, el cambio de la posici??n del sol hace que el paisaje destaque en color y hermosura.";
}

function destino5(){
    btn1.className = "list-group-item list-group-item-action";
    btn2.className = "list-group-item list-group-item-action";
    btn3.className = "list-group-item list-group-item-action";
    btn4.className = "list-group-item list-group-item-action";
    btn5.className = "list-group-item list-group-item-action active";
    btn6.className = "list-group-item list-group-item-action";
    btn7.className = "list-group-item list-group-item-action";
    btn8.className = "list-group-item list-group-item-action";
    btn9.className = "list-group-item list-group-item-action";
    btn10.className = "list-group-item list-group-item-action";
    btn11.className = "list-group-item list-group-item-action";
    btn12.className = "list-group-item list-group-item-action";
    navbar.className = "collapse navbar-collapse";

    titulo.innerHTML = "Cerro Verde";
    intro.innerHTML = "El <b>Parque Nacional Cerro Verde</b>, en el departamento de Santa Ana, es un volc??n extinto a 2,030 metros sobre el nivel del mar. Ofrece a quienes lo visitan, un hermoso sendero, miradores que atrapan por su vista y un maravilloso orquideario. Conocido adem??s por los habitantes del pueblo salvadore??o como <b>Cuntetepeque</b>.";
    p1.innerHTML = "<b>Cerro Verde</b> forma parte del conjunto o <b>Ruta de los volcanes</b> que posee El Salvador, lo que lo ha convertido en el ??rea principal para la conservaci??n del medio ambiente en el pa??s. Cuenta con una extensi??n de tierras que abarca 54 manzanas.";
    img1.src = "../img/cerroverde1.jpg";
    dImg1.innerHTML = "Vistas del Cerro Verde";
    p2.innerHTML = "Gracias al apoyo del <b>Instituto Salvadore??o de Turismo</b> cuenta con un cuerpo de gu??as tur??sticos que ofrecen a sus visitantes, una din??mica y educativa explicaci??n sobre la naturaleza que ah?? se encuentra.";
    p3.innerHTML = "<b>Cerro Verde</b> destaca por mucho por sus senderos interpretativos, sus flores m??sticas y el antiguo <b>Hotel de Monta??a</b>. Sus volcanes <b>Izalco</b> e <b>Ilamatepec</b> se encuentran ubicados a 1980 y 2381 metros de altura sobre el nivel del mar, respectivamente. Adem??s de sus servicios sanitarios modernos, su variada cafeter??a, y mucho m??s.";
    p4.innerHTML = "El clima que te ofrece <b>Cerro Verde</b> es sin duda alguna, uno de sus m??s fuertes atractivos. En un d??a de abundante sol, el clima puede oscilar entre los 16 y los 22 grados cent??grados. Pero al caer la noche este puede bajar hasta los 6 grados cent??grados, es por ellos que muchas personas deciden acampar en esta zona tan fresca del pa??s.";
    img2.src = "../img/cerroverde2.jpg";
    dImg2.innerHTML = "Ruta de los volcanes";
    p5.innerHTML = "En cuanto a la flora, posee una extensa formaci??n vegetal constituida por bosques nublados. Son por dem??s exuberantes, de un verde llamativo y con abundante neblina. Por su parte, la fauna nos m??s de 217 especies de aves, entre las que podemos encontrar al <b>Guardabarranco</b>, hermosa ave que destaca por su inusual canto. Asimismo, observaremos la presencia de n??meros anfibios y reptiles, una gran variedad de insectos entre los que no podemos dejar de ver a la extra??a mariposa gigante.";
    p6.innerHTML = "Este para??so natural adem??s nos regala otros lugares cercanos, que no puedes perderte como sus hermosos restaurantes: <ul><li><b>La Octava Maravilla Restaurant & Bar</b></li><li><b>Rancho Alegre</b></li><li><b>Solsticio</b></li></ul>En definitiva, el <b>Parque Nacional Cerro Verde</b> es de los sitios tur??sticos m??s exuberantes y hermosos que posee El Salvador. Si buscas respirar un poco de paz, encontrar armon??a y un ambiente saludable, <b>Cerro Verde</b> es ideal para ti.";
}

function destino6(){
    btn1.className = "list-group-item list-group-item-action";
    btn2.className = "list-group-item list-group-item-action";
    btn3.className = "list-group-item list-group-item-action";
    btn4.className = "list-group-item list-group-item-action";
    btn5.className = "list-group-item list-group-item-action";
    btn6.className = "list-group-item list-group-item-action active";
    btn7.className = "list-group-item list-group-item-action";
    btn8.className = "list-group-item list-group-item-action";
    btn9.className = "list-group-item list-group-item-action";
    btn10.className = "list-group-item list-group-item-action";
    btn11.className = "list-group-item list-group-item-action";
    btn12.className = "list-group-item list-group-item-action";
    navbar.className = "collapse navbar-collapse";

    titulo.innerHTML = "Cerro El Pital";
    intro.innerHTML = "El <b>Cerro El Pital</b> es una monta??a transnacional y la m??s alta de El Salvador. Ubicada en Chalatenango, est?? rodeada de gran vegetaci??n, 2,730 metros sobre el nivel del mar y con un clima fr??o incomparable. Desde sus alturas podemos ver El Salvador y Honduras.";
    p1.innerHTML = "<b>El Pital</b> es de un clima muy fresco ideal para quienes disfrutan del frio al acampar con familia o amigos. Siendo la zona recomendada su parte m??s alta. Espec??ficamente en la zona central de los picos de la monta??a.";
    img1.src = "../img/pital1.jpg";
    dImg1.innerHTML = "Mirador en Cerro El Pital";
    p2.innerHTML = "<b>El Pital</b> es acreedor de un bosque h??medo donde la temperatura oscilas entre los 8 y 10 grados cent??grados. Este cerro est?? constituido por ??rboles de encino, pino, cipr??s y roble.";
    p3.innerHTML = "Asimismo, podemos disfrutar de la belleza de los cartuchos que son sin lugar a dudas, la flor que decora el cerro. Al igual que las hortensias de variados colores entre los que destacan el blanco, el rosa y el celeste. Los girasoles, tigrillas, sembrad??os de durazno y una hermosa flor silvestre de nombre <b>Carl?? Santo</b> son tambi??n parte de la gran diversidad de este monumento natural.";
    p4.innerHTML = "Por otra parte, la fauna que podemos encontrar en <b>El Pital</b> es muy variada y solo pueden observarse en las zonas m??s altas del cerro. Dicho esto, entre los animales que hacen vida en esta zona boscosa tenemos el <b>Momoto Gorjiazul</b>, el <b>Tecolote-abetero Sure??o</b> y el <b>Quetzal</b>. Pero tambi??n, la <b>Chara de Niebla</b> y la <b>Pava Negra</b>. Incluso se han confirmado la presencia de m??s de 10 especies como la <b>Bolitoglossa synoria</b> (salamandras).";
    img2.src = "../img/pital2.jpg";
    dImg2.innerHTML = "Vistas del Cerro El Pital";
    p5.innerHTML = "Si eres de los que disfruta del ecoturismo, <b>el Pital</b> es ideal para ti. En ??l podr??s disfrutar de un maravilloso paisaje escalando a la parte m??s alta para disfrutar de una vista magistral. El mirador natural de <b>La Pe??a Rajada</b> te permitir?? admirar la belleza de las zonas de San Ignacio y La Palma. Adem??s de algunas partes de Guatemala y Honduras entre otras ??reas del oriente salvadore??o.";
    p6.innerHTML = "Ahora bien, si disfrutas de acampar en la naturaleza, en el <b>Cerro el Pital</b> podr??s hacerlo sin problemas. Tambi??n puedes elegir practicar el senderismo y dejarte llevar por recorridos a trav??s de los bellos senderos de <b>El Pital</b> con su majestuosa vegetaci??n silvestre. Estamos seguros que si visitas <b>El Pital</b> ser?? una experiencia inolvidable de la que nunca te arrepentir??s. Aqu?? encontrar??s paz, bellos paisajes y una sensaci??n de plenitud que solo existe en este monumento natural.";
}

function destino7(){
    btn1.className = "list-group-item list-group-item-action";
    btn2.className = "list-group-item list-group-item-action";
    btn3.className = "list-group-item list-group-item-action";
    btn4.className = "list-group-item list-group-item-action";
    btn5.className = "list-group-item list-group-item-action";
    btn6.className = "list-group-item list-group-item-action";
    btn7.className = "list-group-item list-group-item-action active";
    btn8.className = "list-group-item list-group-item-action";
    btn9.className = "list-group-item list-group-item-action";
    btn10.className = "list-group-item list-group-item-action";
    btn11.className = "list-group-item list-group-item-action";
    btn12.className = "list-group-item list-group-item-action";
    navbar.className = "collapse navbar-collapse";

    titulo.innerHTML = "Cerro Eramon";
    intro.innerHTML = "<b>Cerro Eramon</b>, en el departamento de Chalatenango, cuenta con una altura aproximada de 996 metros sobre el nivel del mar, con una extensi??n que no ha sido explorada en totalidad. En la cima tendr??s vistas de los r??os <b>Lempa</b> y <b>Sumpul</b>, adem??s del volc??n <b>Chinchontepec</b>.";
    p1.innerHTML = "Desde hace algunos a??os, el <b>Cerro Eramon</b> se ha convertido en uno de los destinos m??s destacados de El Salvador para hacer turismo de monta??a. El motivo principal es la adrenalina que genera, la vista y sus rutas en medio de un bosque maravilloso.";
    img1.src = "../img/eramon1.jpg";
    dImg1.innerHTML = "Cerro Eramon en Chalatenango";
    p2.innerHTML = "Por si esto fuera poco, es un cerro que guarda grandes historias sobre sus primeros pobladores, al igual que aventuras extremas y gran misticismo.";
    p3.innerHTML = "En el <b>Cerro Eramon</b> el turismo de monta??a es inigualable. Las rutas de senderismo se encuentran divididos en tres puntos de salida, repartidos entre los caser??os y cantones del municipio de Nombre de Jes??s. Por otra parte, entre las actividades que tambi??n puede realizar es acampar. En <b>Cerro Eramon</b> se han colocado terrazas en las que se pueden instalar las tiendas de campa??as. Y si esto no era suficiente, tambi??n puede dar un salto en parapente sin problemas.";
    p4.innerHTML = "El <b>Cerro Eramon</b> presenta gran diversidad en flora. Las especies que m??s abundan son las orqu??deas, grama de conejo, y ??rboles de chaparro. Por su parte, la fauna del lugar est?? compuesta por conejos, garrobos, serpientes y coyotes. Se pueden llegar a encontrar zorrillos, venados y diversos tipos de aves como b??hos, golondrinas y torogoz. Las especies m??s amigables se pueden divisar en las rutas y los senderos que llegan hasta la cima.";
    img2.src = "../img/eramon2.jpg";
    dImg2.innerHTML = "Vistas del Cerro Eramon";
    p5.innerHTML = "El <b>Cerro Eramon</b> o <b>Iram??n</b> como tambi??n se le conoce, fue el lugar donde habitaron la comunidad de los <b>Aguacao</b>. Su nombre en n??huatl quiere decir ???Sierra de los conejos??? y desde sus or??genes ha guardado un legado hist??rico. En las ??reas que colindan, se han hallado restos arqueol??gicos que han servido para reafirmar la presencia de habitantes ind??genas. Entre los hallazgos destaca una terraza donde fueron encontrados un gran n??mero de objetos y figuras talladas en piedra y elaboradas en cer??mica.";
    p6.innerHTML = "Subir el <b>Cerro Eramon</b> no tiene costo alguno, sin embargo, es necesario contratar a un gu??a para hacer el recorrido. El precio puede oscilar entre los $10 y $20 por persona y dependiendo del n??mero que compone el grupo. Cabe destacar que los gu??as lugare??os son los m??s recomendados, ya que conocen la zona a la perfecci??n. Se pueden contratar en la terminal de bus o a trav??s de la alcald??a de Chalatenango.";
}

function destino8(){
    btn1.className = "list-group-item list-group-item-action";
    btn2.className = "list-group-item list-group-item-action";
    btn3.className = "list-group-item list-group-item-action";
    btn4.className = "list-group-item list-group-item-action";
    btn5.className = "list-group-item list-group-item-action";
    btn6.className = "list-group-item list-group-item-action";
    btn7.className = "list-group-item list-group-item-action";
    btn8.className = "list-group-item list-group-item-action active";
    btn9.className = "list-group-item list-group-item-action";
    btn10.className = "list-group-item list-group-item-action";
    btn11.className = "list-group-item list-group-item-action";
    btn12.className = "list-group-item list-group-item-action";
    navbar.className = "collapse navbar-collapse";

    titulo.innerHTML = "Puerta del Diablo";
    intro.innerHTML = "<b>La Puerta del Diablo</b>, un lugar rodeado de belleza incomparable, misticismo y una singular leyenda que data de hace poco m??s de 100 a??os, se trata de una formaci??n rocosa en una de las cimas m??s altas de este pa??s, el Cerro Chulo, en el departamento de San Salvador.";
    p1.innerHTML = "Se trata de un mirador natural desde el que se puede apreciar el Volc??n de San Vicente hasta el Oc??ano Pac??fico. Si quieres aventurarte y realizar actividades extremas al aire libre, la <b>Puerta del Diablo</b> es el destino ideal para ello.";
    img1.src = "../img/diablo1.jpg";
    dImg1.innerHTML = "Parque Natural Puerta del Diablo";
    p2.innerHTML = "Seg??n <b>Jorge Lard?? y Lar??n</b>, historiador de renombre, la <b>Puerta del Diablo</b> se form?? el 8 de octubre de 1762 a consecuencia de las fuertes lluvias que cayeron aquel d??a.";
    p3.innerHTML = "Por otra parte, los lugare??os le dan un origen diferente a esta formaci??n rocosa. Historia que se ha convertido en leyenda y que a??n es contada a turistas que desean conocer qu?? esconde este enigm??tico lugar. De acuerdo con la mitolog??a, la hija de Rosendo Renderos, Mar??a de La Paz, hab??a enamorado al mismo Satan??s con su belleza. Este al no ver que su amor era correspondido, decidi?? raptar a la joven. Durante la b??squeda s??lo se encontr?? un escapulario que llevaba en su cuello. Pero, el padre no quiso dejar todo as?? y junto a otros terratenientes, sali?? en busca de su hija. Cuando estuvo a punto de atrapar a Satan??s, sali?? huyendo por temor y de un golpe, derrumb?? una roca parti??ndola en tres. Nunca se supo si la joven mujer hab??a sido encontrada, sin embargo, desde entonces a la formaci??n se le conoce como la <b>Puerta del Diablo</b>.";
    p4.innerHTML = "Al estar ubicado a m??s de 1.000 msnm, el clima en la <b>Puerta del Diablo</b> es muy fresco. Por ende, posee una diversidad en flora constituida por m??s de 70 especies vegetales de incre??ble belleza, propio de un bosque tropical. Entre los cuales se encuentran ??rboles de sombra y frutales. Abundan las plantas medicinales, rosas, orqu??deas, ceiba, cipr??s, bamb?? y mucho m??s.";
    img2.src = "../img/diablo2.jpg";
    dImg2.innerHTML = "Mirador en la Puerta del Diablo";
    p5.innerHTML = "Gracias al clima y la flora, el entorno natural es ??ptimo para albergar gran cantidad de especies animales. En este sentido, la fauna est?? compuesta en su mayor??a por aves, cotuzas, mariposas, ardillas, conejos y reptiles. Lamentablemente, en vista de las actividades de caza que antiguamente se llevaban a cabo en el lugar, muchas especies dejaron de habitar en la zona. Como por ejemplo los cuervos, venado, gato mont??s, entre otros.";
    p6.innerHTML = "Las actividades que se pueden realizar en la <b>Puerta del Diablo</b> son ideales para quienes aman el eco-turismo y el turismo de aventura. Siendo la primera de ellas, el senderismo, observatorio desde el mirador y escaladas. En las inmediaciones, hay zonas destinadas para el rapel, parapente, canopy y tirolesa. Sin lugar a dudas, podr??s tener una experiencia llena de adrenalina y no necesitas llevar equipos porque all?? los puedes alquilar.";
}

function destino9(){
    btn1.className = "list-group-item list-group-item-action";
    btn2.className = "list-group-item list-group-item-action";
    btn3.className = "list-group-item list-group-item-action";
    btn4.className = "list-group-item list-group-item-action";
    btn5.className = "list-group-item list-group-item-action";
    btn6.className = "list-group-item list-group-item-action";
    btn7.className = "list-group-item list-group-item-action";
    btn8.className = "list-group-item list-group-item-action";
    btn9.className = "list-group-item list-group-item-action active";
    btn10.className = "list-group-item list-group-item-action";
    btn11.className = "list-group-item list-group-item-action";
    btn12.className = "list-group-item list-group-item-action";
    navbar.className = "collapse navbar-collapse";

    titulo.innerHTML = "Cascadas de Tamanique";
    intro.innerHTML = "Las <b>Cascadas de Tamanique</b>, en el departamento de La Libertad, son sin duda, una de las cascadas m??s impresionantes de El Salvador. Una belleza natural incomparable. Disfruta de 3 cascadas, caminos llenos de paisajes monumentales y agua fresca y cristalina.";
    p1.innerHTML = "Las <b>Cascadas de Tamanique</b> ofrece a los amantes del senderismo, caminos minados de la diversa fauna y flora de sus bosques tropicales, e igualmente para los m??s arriesgados y aventureros, la ocasi??n de vivir una experiencia fascinante en las rocas salientes, como plataformas para efectuar sus impactantes clavados.";
    img1.src = "../img/tamanique1.jpg";
    dImg1.innerHTML = "Cascadas de Tamanique en El Salvador";
    p2.innerHTML = "Visitarla es conectarse a la naturaleza, liberarse de lo cotidiano y llenarse de todo el atractivo de sus aguas cristalinas, disfrutando el momento a placer.";
    p3.innerHTML = "En las <b>Cascadas de Tamanique</b> hay un clima fresco que oscila entre los 19?? a 27?? cent??grados, por su altura sobre el nivel del mar, de unos 500 metros, recibiendo la brisa costera del mismo municipio.";
    p4.innerHTML = "Su vegetaci??n no es tan densa, pero s?? boscosa, encontr??ndose matorrales y algunos ??rboles de buen tama??o que cubren todo el trayecto, dando sombra. La flora mantiene su verdor la mayor parte del a??o, gracias al riego constante del r??o en la zona, por lo que se puede observar algunas ??pocas de flor en todo tipo de plantas.";
    img2.src = "../img/tamanique2.jpg";
    dImg2.innerHTML = "Senderos en las Cascadas de Tamanique";
    p5.innerHTML = "La fauna en los alrededores de las <b>Cascadas de Tamanique</b> es la habitual para una zona tropical: aves, insectos, reptiles y peque??os mam??feros. Al ser una territorio con pocas variedades de plantas, no hay especies tan ex??ticas, algo positivo para los que temen encontrarse con alg??n tipo de animal peligroso.";
    p6.innerHTML = "Las <b>Cascadas de Tamanique</b> es principalmente un balneario, sus pozas son ideales para clavados a buena altura, as?? que aparte de refrescarte, a la vez puedes subir la adrenalina, incluso poder desplazarte en el tobog??n de piedra natural que se encuentra en una de sus magn??ficas piscinas. Adem??s, debido a la distancia, hay mucho trayecto que recorrer, pero esta actividad tambi??n se puede disfrutar al estilo senderismo, si se tiene un buen gu??a que sepa mostrarte las mejores vistas en la ruta.";
}

function destino10(){
    btn1.className = "list-group-item list-group-item-action";
    btn2.className = "list-group-item list-group-item-action";
    btn3.className = "list-group-item list-group-item-action";
    btn4.className = "list-group-item list-group-item-action";
    btn5.className = "list-group-item list-group-item-action";
    btn6.className = "list-group-item list-group-item-action";
    btn7.className = "list-group-item list-group-item-action";
    btn8.className = "list-group-item list-group-item-action";
    btn9.className = "list-group-item list-group-item-action";
    btn10.className = "list-group-item list-group-item-action active";
    btn11.className = "list-group-item list-group-item-action";
    btn12.className = "list-group-item list-group-item-action";
    navbar.className = "collapse navbar-collapse";

    titulo.innerHTML = "Salto de Malacatiup??n";
    intro.innerHTML = "El <b>Salto de Malacatiup??n</b>, en el departamento de Ahuachap??n, una de las ??reas naturales m??s importantes de El Salvador. Sin lugar a dudas, su maravillosa vista junto a sus paisajes son un claro ejemplo de la majestuosidad que rodea a este pa??s. <b>Malacatiup??n</b> quiere decir en lengua n??huatl ???El Templo Redondo???";
    p1.innerHTML = "Lo m??s impresionante de este salto adem??s de la vegetaci??n y los sonidos que rodean a este imponente lugar, es su ca??da de agua termal de poco m??s de 12 metros de altura.";
    img1.src = "../img/malacatiupan1.jpg";
    dImg1.innerHTML = "Salto de Malacatiup??n en El Salvador";
    p2.innerHTML = "Consta de una altura mayor a los 12 metros y 3 cascadas en total, que dan vida a la poza de aguas termales de color turquesa. Esta ca??da de agua es la m??s importante de la regi??n y se alimenta de los r??os <b>Quiroz</b> y <b>Agua Caliente</b>.";
    p3.innerHTML = "Seg??n los datos hist??ricos de la regi??n, revelan que el <b>Salto de Malacatiup??n</b> era utilizado por el pueblo <b>Poqomam</b>. All?? se realizaban diversos rituales curativos, costumbres que fueron desapareciendo con la llegada de los espa??oles.";
    p4.innerHTML = "La mayor??a de la zona consta de una flora caracter??stica de los bosques, enfatizando en la diversa variedad de matorrales y arbustos, y por supuesto sus ??rboles. Como por ejemplo el ??mate, j??caro, maquilishuat y guachimol. Al igual que la sincuya, zunza, chap??n y zapotilla en peligro de extinci??n. La fauna es realmente abundante, dada a la vegetaci??n de monta??a y bosque es el h??bitat perfecto para aves de diversas especies. Pero tambi??n, para venados, gatos de monta??a, cosuco o armadillo gigante y conejos.";
    img2.src = "../img/malacatiupan2.jpg";
    dImg2.innerHTML = "Cascadas en el Salto de Malacatiup??n";
    p5.innerHTML = "El <b>Salto de Malacatiup??n</b> es el lugar perfecto para hacer un poco de ecoturismo y disfrutar de todo el paisaje a su alrededor. As?? que las actividades que puedes realizar son: <ul><li>Nataci??n en las pozas que se forman al pie de la cascada.</li><li>Senderismo de monta??a.</li><li>Ciclismo de monta??a por las rutas se??aladas.</li></ul>";
    p6.innerHTML = "Visitar y conocer el <b>Salto de Malacatiup??n</b> te dejar?? con ganas de volver. Sus lugare??os te pueden contar las historias que rodean a esta ca??da de agua y sus incre??bles leyendas. Es por ello, que no puedes dejar pasar la oportunidad de dar un recorrido completo por su pintoresco pueblo.";
}

function destino11(){
    btn1.className = "list-group-item list-group-item-action";
    btn2.className = "list-group-item list-group-item-action";
    btn3.className = "list-group-item list-group-item-action";
    btn4.className = "list-group-item list-group-item-action";
    btn5.className = "list-group-item list-group-item-action";
    btn6.className = "list-group-item list-group-item-action";
    btn7.className = "list-group-item list-group-item-action";
    btn8.className = "list-group-item list-group-item-action";
    btn9.className = "list-group-item list-group-item-action";
    btn10.className = "list-group-item list-group-item-action";
    btn11.className = "list-group-item list-group-item-action active";
    btn12.className = "list-group-item list-group-item-action";
    navbar.className = "collapse navbar-collapse";

    titulo.innerHTML = "Cascada El Escuco";
    intro.innerHTML = "La <b>Cascada El Escuco</b>, tambi??n conocido como <b>Salto El Escuco</b>, es una cascada de 80 metros de altura, en el departamento de Sonsonate, con un entorno verde y pac??fico que te enamorar??. Ideal para hacer un picnic y darse un chapuz??n, disfrutando de sus fr??as y refrescantes aguas, en un espacio paradis??aco rodeado de exuberante vegetaci??n.";
    p1.innerHTML = "En la <b>Cascada El Escuco</b>, entrar??s en contacto con la naturaleza disfrutando de sus fr??as y refrescantes aguas, en un espacio paradis??aco rodeado de exuberante vegetaci??n.";
    img1.src = "../img/escuco1.jpg";
    dImg1.innerHTML = "Cascada El Escuco en Sonsonate";
    p2.innerHTML = "Te asombrar??s ante la imponente ca??da de sus aguas desde casi 80 metros de altura, donde practicar el descenso en cuerda se hace un deporte habitual, entre los cientos de locales y turistas que acuden a recrearse en ella durante todo el a??o.";
    p3.innerHTML = "El fresco clima y pintoresco paisaje del entorno, en el sendero que se recorre hasta llegar a su encuentro, es toda una experiencia que te invita a continuar la caminata, con el inter??s de descubrir este espl??ndido escenario que bien vale la pena conocer. La ca??da de sus aguas proviene del r??o que lleva el mismo nombre y se alimenta de una bifurcaci??n de la corriente principal, lo cual le permite extenderse varios kil??metros, casi como un r??o independiente.";
    p4.innerHTML = "Este hermoso enclave est?? lleno de leyendas, que hablan entre tantas, de las ceremonias celebradas en las rocas de la cascada por los pipiles, los primeros pobladores de este pueblo ancestral. Sin embargo, lo cierto es que a??n el n??huat, su lengua nativa, es utilizada por sus fundadores, con el fin de mantener sus ra??ces y contribuir a en el rescate de la cultura salvadore??a.";
    img2.src = "../img/escuco2.jpg";
    dImg2.innerHTML = "Camino hacia la Cascada El Escuco";
    p5.innerHTML = "La <b>Cascada El Escuco</b> se sit??an en una zona de clima tropical, de hecho, en el costero departamento de Sonsonate encontramos una variedad de playas importantes, de manera que hay mucha humedad en el trayecto hacia la ca??da de agua; pero al llegar, el intenso fr??o de sus aguas transforma el ambiente, logrando que la atm??sfera sea m??s fresca y agradable.";
    p6.innerHTML = "La vegetaci??n es tan densa que solo se puede transitar por los caminos ya creados, aparte de que muchos animales habitan la zona, as?? que en el recorrido, es posible que veamos insectos, mam??feros y, principalmente aves. Aunque no hay registro de especies ex??ticas o poco conocidas en la zona de la cascada, las que habitan el lugar son igualmente llamativas e interesantes.";
}

function destino12(){
    btn1.className = "list-group-item list-group-item-action";
    btn2.className = "list-group-item list-group-item-action";
    btn3.className = "list-group-item list-group-item-action";
    btn4.className = "list-group-item list-group-item-action";
    btn5.className = "list-group-item list-group-item-action";
    btn6.className = "list-group-item list-group-item-action";
    btn7.className = "list-group-item list-group-item-action";
    btn8.className = "list-group-item list-group-item-action";
    btn9.className = "list-group-item list-group-item-action";
    btn10.className = "list-group-item list-group-item-action";
    btn11.className = "list-group-item list-group-item-action";
    btn12.className = "list-group-item list-group-item-action active";
    navbar.className = "collapse navbar-collapse";

    titulo.innerHTML = "Cascada Los Tercios";
    intro.innerHTML = "La <b>Cascada los Tercios</b> es sin duda una maravilla de la naturaleza. Ubicada en Suchitoto, esta cascada tiene una ca??da de 10 metros, con piedras que forman figuras hexagonales que parecen una obra de arte hecha por el humano. Disfruta de sus aguas frescas y su rica vegetaci??n.";
    p1.innerHTML = "Su cristalina cortina de agua que corre desde una altura de 10mt, a trav??s de sus rocas de forma hexagonal y apiladas verticalmente, crea un escenario digno de admirar.";
    img1.src = "../img/tercios1.jpg";
    dImg1.innerHTML = "Detalles de las piedras en la Cascada Los Tercios";
    p2.innerHTML = "La <b>Cascada Los Tercios</b> suele ser m??s visitada durante el periodo de lluvia, cuando su ca??da de agua es totalmente apreciable, as?? como su extraordinario entorno natural, sin embargo, el tiempo de sequ??a resulta interesante para los viajeros y lugare??os, que disfrutan al escalar sus geom??tricas rocas.";
    p3.innerHTML = "Igualmente, muchos turistas se acercan sinti??ndose atra??dos por la historia sobre la formaci??n de esta cascada, rodeada de cuentos y leyendas populares que se han perpetuado en el tiempo. La historia m??s difundida cuenta que la hija de una familia adinerada se enamor?? de un ind??gena local, quien lleno de rabia por no ser consentida esta relaci??n, lanz?? una maldici??n sobre la familia y su almac??n, donde guardaban rollos de tela, convirti??ndose en piedra y terminando en la pobreza; as?? que los rollos permanecieron apilados y con el tiempo se convirtieron en parte del r??o.";
    p4.innerHTML = "La otra historia cuenta que una pececita encantada con cuerpo de oro cre?? la cascada y que es quien la protege; adem??s, es ella quien hace crecer la ca??da de agua durante el invierno, y si alguien la mira, entonces puede perder la raz??n o hasta la vida. Todas estas historias son solo leyendas, por supuesto. Hasta el momento no se han hecho estudios que determinen, o al menos den una idea, de c??mo se form?? esta asombrosa cascada.";
    img2.src = "../img/tercios2.jpg";
    dImg2.innerHTML = "Vistas desde la Cascada Los Tercios";
    p5.innerHTML = "Darse un ba??o en las aguas refrescantes de la <b>Cascada Los Tercios</b> es lo primordial. El lugar es ideal para nadar un poco en su poza de poca profundidad o simplemente colocarse bajo la cortina de agua y relajarse.";
    p6.innerHTML = "En la zona hay abundante vegetaci??n, de manera que hay sombra suficiente donde descansar un buen rato bajo alg??n ??rbol o disfrutar de una rica comida. Para los m??s osados hay la posibilidad de subir por la empinada pared de unos 10 metros de altura y llegar hasta la cima. Y por supuesto, contemplar las espl??ndidas panor??micas que se tienen hacia el lago <b>Suchitl??n</b>, desde sus variados miradores, que adem??s brindan al recinto un mayor encanto.";
}

window.onscroll = function(){
    if(document.documentElement.scrollTop >100){
        document.querySelector('.subir-contenedor').classList.add('Mostrar');
    }else{
        document.querySelector('.subir-contenedor').classList.remove('Mostrar');
    }
}

document.querySelector('.subir-contenedor').addEventListener('click',() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});