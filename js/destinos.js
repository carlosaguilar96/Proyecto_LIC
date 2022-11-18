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
    intro.innerHTML = "Con más de 1900 hectáreas, ubicado en el departamento de Santa Ana, el <b>Parque Nacional Montecristo</b> es una maravilla de la naturaleza salvadoreña, en la que podemos disfrutar de hacer acampada y senderismo, para poder ver la <b>Reserva de la Biosfera del Trifinio</b>; desde la cual podemos ver Guatemala, Honduras y El Salvador.";
    p1.innerHTML = "Como parte de los atractivos destacan sus paisajes, haciendo inevitable aprovechar la oportunidad de tomar impresionantes fotografías. Además de observar la vida silvestre y cualquier cantidad de especies en su entorno.";
    img1.src = "../img/montecristo1.jpg";
    dImg1.innerHTML = "Senderismo en el Parque Nacional Montecristo";
    p2.innerHTML = "El ambiente, su forma, el olor y hasta el más mínimo detalle, hace de este parque el destino perfecto para compartir con familiares y amigos. Donde las actividades recreativas son el reflejo de las diversas formas que existen para disfrutar de la naturaleza.";
    p3.innerHTML = "El parque cuenta con tres cerros que puedes visitar sin problemas. Hablamos de <b>Miramundo</b> a 2.393 m.s.n.m, <b>El Brujo</b> con 2.140 m.s.n.m y <b>Montecristo</b> con 2.418 m.s.n.m. Desde las diferentes alturas podrás disfrutar de una vista de los alrededores maravillosa. Pero, si llegas al punto más alto, estarás exactamente en el <b>Punto Trifinio</b>. Se le ha dado este nombre porque es donde se encuentra la frontera entre El Salvador, Honduras y Guatemala.";
    p4.innerHTML = "El parque cuenta con guías que te ofrecen un recorrido completo por el bosque, llevándote por aquellos senderos en los que podrás ver a la fauna más emblemática del lugar en su hábitat. Desde allí podrás tomar las fotografías que gustes mientras que descubres toda la magia que abunda en este bosque.";
    img2.src = "../img/montecristo2.jpg";
    dImg2.innerHTML = "Hacienda en Montecristo";
    p5.innerHTML = "No tendrás que realizar un recorrido de un día, sino que puedes acampar dentro del parque. Para ello, los guardaparques han destinado algunos lugares para esta actividad. Pero, además, podrás alquilar alguna de las cabañas disponibles para el hospedaje de turistas. Todas cuentan con servicios básicos como luz, agua, duchas, cocina, entre otros.";
    p6.innerHTML = "Dada la cantidad de turistas que vienen al <b>Parque Nacional Montecristo</b>, el acceso diario es limitado. Recuerda realizar la reservación para acceder al parque con antelación. Para ello debe llenar el formulario de solicitud disponible en la página oficial de <a href='https://marn.gob.sv/wp-content/uploads/2021/01/form-Montecristo_.pdf' target='_blank'>MARN.gob.sv</a>. O bien, llamando a los teléfonos +503 2123-6220 / 2123-6239 / 7850-9056.";
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
    intro.innerHTML = "El <b>Parque Nacional El Imposible</b> es una maravilla natural de El Salvador ubicado en el departamento de Ahuachapán. Es el parque nacional más grande del país, que con más de 5 mil hectáreas, nos enamorará con sus vegetación verde, animales y riachuelos.";
    p1.innerHTML = "La extensión del <b>Parque Nacional El Imposible</b>, permite ofrecer numerables servicios a quienes lo visitan. Aunque sin duda, las caminatas forman parte esencial del programa turístico del parque.";
    img1.src = "../img/imposible1.jpg";
    dImg1.innerHTML = "Vistas del Bosque El Imposible";
    p2.innerHTML = "Dirigidos normalmente por guías especializados, estos paseos se realizan a través de los caminos que atraviesan todo el parque, donde se disfruta del paisaje y la fauna de este bosque fascinante, así como de sus miradores, ríos, manantiales y cascadas.";
    p3.innerHTML = "Dentro de las áreas permitidas del <b>Parque Nacional El Imposible</b> se puede acampar en tiendas, para complacer a los amantes del contacto directo con la naturaleza a cualquier hora, pasando una o más de una noche alumbrados por una cálida fogata. Incluso, existen hospedajes bastantes cercanos al parque para alojarse, como un hostal ubicado a solo 1Km del mismo, o algunos hoteles y posadas en las comunidades vecinas.";
    p4.innerHTML = "Entre tanto, los aficionados al avistaje de aves no pueden olvidar sus binoculares, y los cazadores de imágenes deben llevar preparadas sus cámaras, para obtener fotografías y videos irrepetibles de esta impresionante reliquia natural. La fauna del parque <b>El Imposible</b> está favorecida como santuario para animales que se encuentran en peligro de extinción.";
    img2.src = "../img/imposible2.jpg";
    dImg2.innerHTML = "Ríos del Parque Nacional El Imposible";
    p5.innerHTML = "A quienes les agrada el deporte extremo, pueden practicar senderismo entre picos y hondonadas, hacer rapel y hasta darse un buen baño en cualquiera de las pozas de los 7 ríos que cruzan todo el parque. También, dentro del amplia área de este enclave turístico natural, se encuentran atractivos espacios arqueológicos, ocho en total, que corresponden a diferentes períodos prehispánicos. El más conocido es la famosa <b>Piedra Sellada</b>, donde se pueden observar los dibujos y grabados elaborados sobre las piedras, petroglifos que se encuentran en la barranca del afluente <b>Guayapa</b>.";
    p6.innerHTML = "La mejor época para recorrer <b>El Imposible</b> es durante el período de estación seca o verano, comprendida entre los meses de noviembre y abril. Antes de la visita al parque, se debe obtener un permiso de ingreso en las oficinas de la <b>Fundación Ecológica SALVANATURA</b>.";
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

    titulo.innerHTML = "Parque El Boquerón";
    intro.innerHTML = "El <b>Parque Nacional El Boquerón</b>, entre los departamentos de San Salvador y La Libertad, nos ofrece un hermoso paisaje en el que podrás hacer un recorrido a través de senderos y una gran variedad de miradores. Todos repartidos en la ruta hasta los picos que llevan por nombre <b>El Picacho</b>, <b>El Jabalí</b> y por supuesto, <b>El Boquerón</b>.";
    p1.innerHTML = "<b>El Boquerón</b> no es más que el mejor destino turístico para realizar senderismo alrededor de su increíble cráter volcánico. El cual consta de 3 cumbres adornadas por una maravillosa y colorida vegetación.";
    img1.src = "../img/boqueron1.jpg";
    dImg1.innerHTML = "Vistas del Parque El Boquerón";
    p2.innerHTML = "No te preocupes por llevar comida, pues aquí encontrarás restaurantes en los que podrás disfrutar de los platos tradicionales de la región y del país. Ya dentro del <b>Parque Nacional</b>, puedes conocer más sobre su historia en el <b>Museo</b>.";
    p3.innerHTML = "Incluso, hay una exposición de trajes típicos que podrás colocarte para tomarte fotografías temáticas maravillosas. Una de las atracciones más importantes, es la caminata hasta el corazón del cráter <b>El Boquerón</b> por senderos de dificultad media. Un dato interesante, es que en algunos miradores podrás encontrar sitios que ofrecen café. Todo elaborado y producido de forma artesanal en sus inmediaciones.";
    p4.innerHTML = "Por otra parte, la formación del cráter tuvo lugar durante el año 1917 a raíz de una erupción que destruyó parcialmente zonas de San Salvador, Quezaltepeque y Nejapa. Dando como resultado una gran extensión de lava sobre el campo, recibiendo el nombre de <b>El Playón</b>. Uno de los puntos emblemáticos en los recorridos que se realizan dentro de las instalaciones del parque.";
    img2.src = "../img/boqueron2.jpg";
    dImg2.innerHTML = "Cráter del Boquerón";
    p5.innerHTML = "El clima en el <b>Parque Nacional El Boquerón</b> se ubica en los 21°C aproximadamente. La misma hace posible la conservación y el desarrollo de una gran diversidad en flora y fauna. En el caso de la flora, destacan cientos de especies arbóreas, arbustos y plantas ornamentales. Entre los cuales tenemos cedros, amate, pepetos y ceibas. Al igual que hortensias, begonias, cartuchos y más. Por último, su fauna cuenta con especies de tipo reptil, mamíferos, roedores y aves. Los más comunes son los venados, zorros, mapaches, serpientes arborícolas, entre otros.";
    p6.innerHTML = "Si al final de todo tu recorrido por <b>El Boquerón</b> aún te queda tiempo para una aventura más, puedes acercarte hasta la <b>Finca El Espino</b>. En la misma encontrarás un ecoparque de más de 500 km<sup>2</sup> que también forma parte de la zona natural protegida. Cabe destacar, que forma parte del pulmón de la capital y se encuentra justo al sureste del <b>Volcán San Salvador</b>.";
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

    titulo.innerHTML = "Peñón de Comasagua";
    intro.innerHTML = "El <b>Peñón de Comasagua</b> tiene una belleza natural impresionante, pero además, ha servido como punto de referencia para barcos en alta mar, y cuenta con espectaculares vistas a diferentes cerros y volcanes de El Salvador, su magnitud es tal que, tiene la capacidad de ofrecer una vista completa de los alrededores.";
    p1.innerHTML = "En el <b>Peñón de Comasagua</b> puedes hacer ecoturismo con plena libertad, donde destaca el senderismo, contacto con la naturaleza y por qué no, hacer fotografía de naturaleza e inmortalizar los colores más impresionantes que adornan el paisaje.";
    img1.src = "../img/comasagua1.jpg";
    dImg1.innerHTML = "Senderismo en el Peñon de Comasagua";
    p2.innerHTML = "La ruta consta de 1.5 km, su sendero es moderado por lo que es un recorrido ideal para toda la familia. El punto de acceso al peñón se encuentra en el cantón <b>La Shila</b> en el municipio de Comasagua y justo en una zona destinada al cultivo de diferentes granos.";
    p3.innerHTML = "Desde allí, se debe pasar por las gradas aseguradas que fueron construidas hasta llegar al punto exacto donde se encuentra la base del <b>Peñón de Comasagua</b>. Cabe destacar que el recorrido puede tardar entre 45 minutos y 1 hora hasta llegar a la cima. En el área donde se encuentran las gradas, se puede ver casi todo el día como el camino se despeja en medio de la neblina. Por lo que, aunque es una zona segura, hay que tomar precauciones durante la escalada.";
    p4.innerHTML = "Después de este tramo, no existe ninguna protección, de modo que, será necesario mantenerse dentro del sendero en la montaña hasta llegar a la cima del peñón. Una vez allí, la vista de 360° te permitirá observar a lo lejos gran parte de las costas salvadoreñas, montañas y algunos volcanes. Tal es el caso del <b>Volcán de San Vicente</b> o <b>Chinchontepec</b>, <b>Volcán de San Miguel</b>, <b>cerro Las Pavas</b> y <b>Guazapa</b>, y el Océano Pacífico.";
    img2.src = "../img/comasagua2.jpg";
    dImg2.innerHTML = "Áreas verdes del Peñón de Comasagua";
    p5.innerHTML = "En el <b>Peñón de Comasagua</b> podrás disfrutar de un clima tropical con temperaturas promedio entre 20 °C por la noche y 33 °C máximo durante el día. Para esta región montañosa existe una gran probabilidad de precipitación durante todo el año de forma esporádica. Por otra parte, la flora característica del lugar es completamente silvestre, se puede llegar a observar helechos, musgo, flores y árboles en diversas partes del recorrido. En cuanto a la fauna, es el hábitat natural para diversas especies de aves, reptiles, roedores y por supuesto, el venado de cola blanca.";
    p6.innerHTML = "Si quieres conocer este impresionante peñón, el mejor momento para conquistar su cúspide es a muy temprana hora de la mañana o antes del atardecer. Ya que durante este momento, el cambio de la posición del sol hace que el paisaje destaque en color y hermosura.";
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
    intro.innerHTML = "El <b>Parque Nacional Cerro Verde</b>, en el departamento de Santa Ana, es un volcán extinto a 2,030 metros sobre el nivel del mar. Ofrece a quienes lo visitan, un hermoso sendero, miradores que atrapan por su vista y un maravilloso orquideario. Conocido además por los habitantes del pueblo salvadoreño como <b>Cuntetepeque</b>.";
    p1.innerHTML = "<b>Cerro Verde</b> forma parte del conjunto o <b>Ruta de los volcanes</b> que posee El Salvador, lo que lo ha convertido en el área principal para la conservación del medio ambiente en el país. Cuenta con una extensión de tierras que abarca 54 manzanas.";
    img1.src = "../img/cerroverde1.jpg";
    dImg1.innerHTML = "Vistas del Cerro Verde";
    p2.innerHTML = "Gracias al apoyo del <b>Instituto Salvadoreño de Turismo</b> cuenta con un cuerpo de guías turísticos que ofrecen a sus visitantes, una dinámica y educativa explicación sobre la naturaleza que ahí se encuentra.";
    p3.innerHTML = "<b>Cerro Verde</b> destaca por mucho por sus senderos interpretativos, sus flores místicas y el antiguo <b>Hotel de Montaña</b>. Sus volcanes <b>Izalco</b> e <b>Ilamatepec</b> se encuentran ubicados a 1980 y 2381 metros de altura sobre el nivel del mar, respectivamente. Además de sus servicios sanitarios modernos, su variada cafetería, y mucho más.";
    p4.innerHTML = "El clima que te ofrece <b>Cerro Verde</b> es sin duda alguna, uno de sus más fuertes atractivos. En un día de abundante sol, el clima puede oscilar entre los 16 y los 22 grados centígrados. Pero al caer la noche este puede bajar hasta los 6 grados centígrados, es por ellos que muchas personas deciden acampar en esta zona tan fresca del país.";
    img2.src = "../img/cerroverde2.jpg";
    dImg2.innerHTML = "Ruta de los volcanes";
    p5.innerHTML = "En cuanto a la flora, posee una extensa formación vegetal constituida por bosques nublados. Son por demás exuberantes, de un verde llamativo y con abundante neblina. Por su parte, la fauna nos más de 217 especies de aves, entre las que podemos encontrar al <b>Guardabarranco</b>, hermosa ave que destaca por su inusual canto. Asimismo, observaremos la presencia de números anfibios y reptiles, una gran variedad de insectos entre los que no podemos dejar de ver a la extraña mariposa gigante.";
    p6.innerHTML = "Este paraíso natural además nos regala otros lugares cercanos, que no puedes perderte como sus hermosos restaurantes: <ul><li><b>La Octava Maravilla Restaurant & Bar</b></li><li><b>Rancho Alegre</b></li><li><b>Solsticio</b></li></ul>En definitiva, el <b>Parque Nacional Cerro Verde</b> es de los sitios turísticos más exuberantes y hermosos que posee El Salvador. Si buscas respirar un poco de paz, encontrar armonía y un ambiente saludable, <b>Cerro Verde</b> es ideal para ti.";
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
    intro.innerHTML = "El <b>Cerro El Pital</b> es una montaña transnacional y la más alta de El Salvador. Ubicada en Chalatenango, está rodeada de gran vegetación, 2,730 metros sobre el nivel del mar y con un clima frío incomparable. Desde sus alturas podemos ver El Salvador y Honduras.";
    p1.innerHTML = "<b>El Pital</b> es de un clima muy fresco ideal para quienes disfrutan del frio al acampar con familia o amigos. Siendo la zona recomendada su parte más alta. Específicamente en la zona central de los picos de la montaña.";
    img1.src = "../img/pital1.jpg";
    dImg1.innerHTML = "Mirador en Cerro El Pital";
    p2.innerHTML = "<b>El Pital</b> es acreedor de un bosque húmedo donde la temperatura oscilas entre los 8 y 10 grados centígrados. Este cerro está constituido por árboles de encino, pino, ciprés y roble.";
    p3.innerHTML = "Asimismo, podemos disfrutar de la belleza de los cartuchos que son sin lugar a dudas, la flor que decora el cerro. Al igual que las hortensias de variados colores entre los que destacan el blanco, el rosa y el celeste. Los girasoles, tigrillas, sembradíos de durazno y una hermosa flor silvestre de nombre <b>Carló Santo</b> son también parte de la gran diversidad de este monumento natural.";
    p4.innerHTML = "Por otra parte, la fauna que podemos encontrar en <b>El Pital</b> es muy variada y solo pueden observarse en las zonas más altas del cerro. Dicho esto, entre los animales que hacen vida en esta zona boscosa tenemos el <b>Momoto Gorjiazul</b>, el <b>Tecolote-abetero Sureño</b> y el <b>Quetzal</b>. Pero también, la <b>Chara de Niebla</b> y la <b>Pava Negra</b>. Incluso se han confirmado la presencia de más de 10 especies como la <b>Bolitoglossa synoria</b> (salamandras).";
    img2.src = "../img/pital2.jpg";
    dImg2.innerHTML = "Vistas del Cerro El Pital";
    p5.innerHTML = "Si eres de los que disfruta del ecoturismo, <b>el Pital</b> es ideal para ti. En él podrás disfrutar de un maravilloso paisaje escalando a la parte más alta para disfrutar de una vista magistral. El mirador natural de <b>La Peña Rajada</b> te permitirá admirar la belleza de las zonas de San Ignacio y La Palma. Además de algunas partes de Guatemala y Honduras entre otras áreas del oriente salvadoreño.";
    p6.innerHTML = "Ahora bien, si disfrutas de acampar en la naturaleza, en el <b>Cerro el Pital</b> podrás hacerlo sin problemas. También puedes elegir practicar el senderismo y dejarte llevar por recorridos a través de los bellos senderos de <b>El Pital</b> con su majestuosa vegetación silvestre. Estamos seguros que si visitas <b>El Pital</b> será una experiencia inolvidable de la que nunca te arrepentirás. Aquí encontrarás paz, bellos paisajes y una sensación de plenitud que solo existe en este monumento natural.";
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
    intro.innerHTML = "<b>Cerro Eramon</b>, en el departamento de Chalatenango, cuenta con una altura aproximada de 996 metros sobre el nivel del mar, con una extensión que no ha sido explorada en totalidad. En la cima tendrás vistas de los ríos <b>Lempa</b> y <b>Sumpul</b>, además del volcán <b>Chinchontepec</b>.";
    p1.innerHTML = "Desde hace algunos años, el <b>Cerro Eramon</b> se ha convertido en uno de los destinos más destacados de El Salvador para hacer turismo de montaña. El motivo principal es la adrenalina que genera, la vista y sus rutas en medio de un bosque maravilloso.";
    img1.src = "../img/eramon1.jpg";
    dImg1.innerHTML = "Cerro Eramon en Chalatenango";
    p2.innerHTML = "Por si esto fuera poco, es un cerro que guarda grandes historias sobre sus primeros pobladores, al igual que aventuras extremas y gran misticismo.";
    p3.innerHTML = "En el <b>Cerro Eramon</b> el turismo de montaña es inigualable. Las rutas de senderismo se encuentran divididos en tres puntos de salida, repartidos entre los caseríos y cantones del municipio de Nombre de Jesús. Por otra parte, entre las actividades que también puede realizar es acampar. En <b>Cerro Eramon</b> se han colocado terrazas en las que se pueden instalar las tiendas de campañas. Y si esto no era suficiente, también puede dar un salto en parapente sin problemas.";
    p4.innerHTML = "El <b>Cerro Eramon</b> presenta gran diversidad en flora. Las especies que más abundan son las orquídeas, grama de conejo, y árboles de chaparro. Por su parte, la fauna del lugar está compuesta por conejos, garrobos, serpientes y coyotes. Se pueden llegar a encontrar zorrillos, venados y diversos tipos de aves como búhos, golondrinas y torogoz. Las especies más amigables se pueden divisar en las rutas y los senderos que llegan hasta la cima.";
    img2.src = "../img/eramon2.jpg";
    dImg2.innerHTML = "Vistas del Cerro Eramon";
    p5.innerHTML = "El <b>Cerro Eramon</b> o <b>Iramón</b> como también se le conoce, fue el lugar donde habitaron la comunidad de los <b>Aguacao</b>. Su nombre en náhuatl quiere decir “Sierra de los conejos” y desde sus orígenes ha guardado un legado histórico. En las áreas que colindan, se han hallado restos arqueológicos que han servido para reafirmar la presencia de habitantes indígenas. Entre los hallazgos destaca una terraza donde fueron encontrados un gran número de objetos y figuras talladas en piedra y elaboradas en cerámica.";
    p6.innerHTML = "Subir el <b>Cerro Eramon</b> no tiene costo alguno, sin embargo, es necesario contratar a un guía para hacer el recorrido. El precio puede oscilar entre los $10 y $20 por persona y dependiendo del número que compone el grupo. Cabe destacar que los guías lugareños son los más recomendados, ya que conocen la zona a la perfección. Se pueden contratar en la terminal de bus o a través de la alcaldía de Chalatenango.";
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
    intro.innerHTML = "<b>La Puerta del Diablo</b>, un lugar rodeado de belleza incomparable, misticismo y una singular leyenda que data de hace poco más de 100 años, se trata de una formación rocosa en una de las cimas más altas de este país, el Cerro Chulo, en el departamento de San Salvador.";
    p1.innerHTML = "Se trata de un mirador natural desde el que se puede apreciar el Volcán de San Vicente hasta el Océano Pacífico. Si quieres aventurarte y realizar actividades extremas al aire libre, la <b>Puerta del Diablo</b> es el destino ideal para ello.";
    img1.src = "../img/diablo1.jpg";
    dImg1.innerHTML = "Parque Natural Puerta del Diablo";
    p2.innerHTML = "Según <b>Jorge Lardé y Larín</b>, historiador de renombre, la <b>Puerta del Diablo</b> se formó el 8 de octubre de 1762 a consecuencia de las fuertes lluvias que cayeron aquel día.";
    p3.innerHTML = "Por otra parte, los lugareños le dan un origen diferente a esta formación rocosa. Historia que se ha convertido en leyenda y que aún es contada a turistas que desean conocer qué esconde este enigmático lugar. De acuerdo con la mitología, la hija de Rosendo Renderos, María de La Paz, había enamorado al mismo Satanás con su belleza. Este al no ver que su amor era correspondido, decidió raptar a la joven. Durante la búsqueda sólo se encontró un escapulario que llevaba en su cuello. Pero, el padre no quiso dejar todo así y junto a otros terratenientes, salió en busca de su hija. Cuando estuvo a punto de atrapar a Satanás, salió huyendo por temor y de un golpe, derrumbó una roca partiéndola en tres. Nunca se supo si la joven mujer había sido encontrada, sin embargo, desde entonces a la formación se le conoce como la <b>Puerta del Diablo</b>.";
    p4.innerHTML = "Al estar ubicado a más de 1.000 msnm, el clima en la <b>Puerta del Diablo</b> es muy fresco. Por ende, posee una diversidad en flora constituida por más de 70 especies vegetales de increíble belleza, propio de un bosque tropical. Entre los cuales se encuentran árboles de sombra y frutales. Abundan las plantas medicinales, rosas, orquídeas, ceiba, ciprés, bambú y mucho más.";
    img2.src = "../img/diablo2.jpg";
    dImg2.innerHTML = "Mirador en la Puerta del Diablo";
    p5.innerHTML = "Gracias al clima y la flora, el entorno natural es óptimo para albergar gran cantidad de especies animales. En este sentido, la fauna está compuesta en su mayoría por aves, cotuzas, mariposas, ardillas, conejos y reptiles. Lamentablemente, en vista de las actividades de caza que antiguamente se llevaban a cabo en el lugar, muchas especies dejaron de habitar en la zona. Como por ejemplo los cuervos, venado, gato montés, entre otros.";
    p6.innerHTML = "Las actividades que se pueden realizar en la <b>Puerta del Diablo</b> son ideales para quienes aman el eco-turismo y el turismo de aventura. Siendo la primera de ellas, el senderismo, observatorio desde el mirador y escaladas. En las inmediaciones, hay zonas destinadas para el rapel, parapente, canopy y tirolesa. Sin lugar a dudas, podrás tener una experiencia llena de adrenalina y no necesitas llevar equipos porque allí los puedes alquilar.";
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
    intro.innerHTML = "Las <b>Cascadas de Tamanique</b>, en el departamento de La Libertad, son sin duda, una de las cascadas más impresionantes de El Salvador. Una belleza natural incomparable. Disfruta de 3 cascadas, caminos llenos de paisajes monumentales y agua fresca y cristalina.";
    p1.innerHTML = "Las <b>Cascadas de Tamanique</b> ofrece a los amantes del senderismo, caminos minados de la diversa fauna y flora de sus bosques tropicales, e igualmente para los más arriesgados y aventureros, la ocasión de vivir una experiencia fascinante en las rocas salientes, como plataformas para efectuar sus impactantes clavados.";
    img1.src = "../img/tamanique1.jpg";
    dImg1.innerHTML = "Cascadas de Tamanique en El Salvador";
    p2.innerHTML = "Visitarla es conectarse a la naturaleza, liberarse de lo cotidiano y llenarse de todo el atractivo de sus aguas cristalinas, disfrutando el momento a placer.";
    p3.innerHTML = "En las <b>Cascadas de Tamanique</b> hay un clima fresco que oscila entre los 19° a 27° centígrados, por su altura sobre el nivel del mar, de unos 500 metros, recibiendo la brisa costera del mismo municipio.";
    p4.innerHTML = "Su vegetación no es tan densa, pero sí boscosa, encontrándose matorrales y algunos árboles de buen tamaño que cubren todo el trayecto, dando sombra. La flora mantiene su verdor la mayor parte del año, gracias al riego constante del río en la zona, por lo que se puede observar algunas épocas de flor en todo tipo de plantas.";
    img2.src = "../img/tamanique2.jpg";
    dImg2.innerHTML = "Senderos en las Cascadas de Tamanique";
    p5.innerHTML = "La fauna en los alrededores de las <b>Cascadas de Tamanique</b> es la habitual para una zona tropical: aves, insectos, reptiles y pequeños mamíferos. Al ser una territorio con pocas variedades de plantas, no hay especies tan exóticas, algo positivo para los que temen encontrarse con algún tipo de animal peligroso.";
    p6.innerHTML = "Las <b>Cascadas de Tamanique</b> es principalmente un balneario, sus pozas son ideales para clavados a buena altura, así que aparte de refrescarte, a la vez puedes subir la adrenalina, incluso poder desplazarte en el tobogán de piedra natural que se encuentra en una de sus magníficas piscinas. Además, debido a la distancia, hay mucho trayecto que recorrer, pero esta actividad también se puede disfrutar al estilo senderismo, si se tiene un buen guía que sepa mostrarte las mejores vistas en la ruta.";
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

    titulo.innerHTML = "Salto de Malacatiupán";
    intro.innerHTML = "El <b>Salto de Malacatiupán</b>, en el departamento de Ahuachapán, una de las áreas naturales más importantes de El Salvador. Sin lugar a dudas, su maravillosa vista junto a sus paisajes son un claro ejemplo de la majestuosidad que rodea a este país. <b>Malacatiupán</b> quiere decir en lengua náhuatl “El Templo Redondo”";
    p1.innerHTML = "Lo más impresionante de este salto además de la vegetación y los sonidos que rodean a este imponente lugar, es su caída de agua termal de poco más de 12 metros de altura.";
    img1.src = "../img/malacatiupan1.jpg";
    dImg1.innerHTML = "Salto de Malacatiupán en El Salvador";
    p2.innerHTML = "Consta de una altura mayor a los 12 metros y 3 cascadas en total, que dan vida a la poza de aguas termales de color turquesa. Esta caída de agua es la más importante de la región y se alimenta de los ríos <b>Quiroz</b> y <b>Agua Caliente</b>.";
    p3.innerHTML = "Según los datos históricos de la región, revelan que el <b>Salto de Malacatiupán</b> era utilizado por el pueblo <b>Poqomam</b>. Allí se realizaban diversos rituales curativos, costumbres que fueron desapareciendo con la llegada de los españoles.";
    p4.innerHTML = "La mayoría de la zona consta de una flora característica de los bosques, enfatizando en la diversa variedad de matorrales y arbustos, y por supuesto sus árboles. Como por ejemplo el ámate, jícaro, maquilishuat y guachimol. Al igual que la sincuya, zunza, chapín y zapotilla en peligro de extinción. La fauna es realmente abundante, dada a la vegetación de montaña y bosque es el hábitat perfecto para aves de diversas especies. Pero también, para venados, gatos de montaña, cosuco o armadillo gigante y conejos.";
    img2.src = "../img/malacatiupan2.jpg";
    dImg2.innerHTML = "Cascadas en el Salto de Malacatiupán";
    p5.innerHTML = "El <b>Salto de Malacatiupán</b> es el lugar perfecto para hacer un poco de ecoturismo y disfrutar de todo el paisaje a su alrededor. Así que las actividades que puedes realizar son: <ul><li>Natación en las pozas que se forman al pie de la cascada.</li><li>Senderismo de montaña.</li><li>Ciclismo de montaña por las rutas señaladas.</li></ul>";
    p6.innerHTML = "Visitar y conocer el <b>Salto de Malacatiupán</b> te dejará con ganas de volver. Sus lugareños te pueden contar las historias que rodean a esta caída de agua y sus increíbles leyendas. Es por ello, que no puedes dejar pasar la oportunidad de dar un recorrido completo por su pintoresco pueblo.";
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
    intro.innerHTML = "La <b>Cascada El Escuco</b>, también conocido como <b>Salto El Escuco</b>, es una cascada de 80 metros de altura, en el departamento de Sonsonate, con un entorno verde y pacífico que te enamorará. Ideal para hacer un picnic y darse un chapuzón, disfrutando de sus frías y refrescantes aguas, en un espacio paradisíaco rodeado de exuberante vegetación.";
    p1.innerHTML = "En la <b>Cascada El Escuco</b>, entrarás en contacto con la naturaleza disfrutando de sus frías y refrescantes aguas, en un espacio paradisíaco rodeado de exuberante vegetación.";
    img1.src = "../img/escuco1.jpg";
    dImg1.innerHTML = "Cascada El Escuco en Sonsonate";
    p2.innerHTML = "Te asombrarás ante la imponente caída de sus aguas desde casi 80 metros de altura, donde practicar el descenso en cuerda se hace un deporte habitual, entre los cientos de locales y turistas que acuden a recrearse en ella durante todo el año.";
    p3.innerHTML = "El fresco clima y pintoresco paisaje del entorno, en el sendero que se recorre hasta llegar a su encuentro, es toda una experiencia que te invita a continuar la caminata, con el interés de descubrir este espléndido escenario que bien vale la pena conocer. La caída de sus aguas proviene del río que lleva el mismo nombre y se alimenta de una bifurcación de la corriente principal, lo cual le permite extenderse varios kilómetros, casi como un río independiente.";
    p4.innerHTML = "Este hermoso enclave está lleno de leyendas, que hablan entre tantas, de las ceremonias celebradas en las rocas de la cascada por los pipiles, los primeros pobladores de este pueblo ancestral. Sin embargo, lo cierto es que aún el náhuat, su lengua nativa, es utilizada por sus fundadores, con el fin de mantener sus raíces y contribuir a en el rescate de la cultura salvadoreña.";
    img2.src = "../img/escuco2.jpg";
    dImg2.innerHTML = "Camino hacia la Cascada El Escuco";
    p5.innerHTML = "La <b>Cascada El Escuco</b> se sitúan en una zona de clima tropical, de hecho, en el costero departamento de Sonsonate encontramos una variedad de playas importantes, de manera que hay mucha humedad en el trayecto hacia la caída de agua; pero al llegar, el intenso frío de sus aguas transforma el ambiente, logrando que la atmósfera sea más fresca y agradable.";
    p6.innerHTML = "La vegetación es tan densa que solo se puede transitar por los caminos ya creados, aparte de que muchos animales habitan la zona, así que en el recorrido, es posible que veamos insectos, mamíferos y, principalmente aves. Aunque no hay registro de especies exóticas o poco conocidas en la zona de la cascada, las que habitan el lugar son igualmente llamativas e interesantes.";
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
    intro.innerHTML = "La <b>Cascada los Tercios</b> es sin duda una maravilla de la naturaleza. Ubicada en Suchitoto, esta cascada tiene una caída de 10 metros, con piedras que forman figuras hexagonales que parecen una obra de arte hecha por el humano. Disfruta de sus aguas frescas y su rica vegetación.";
    p1.innerHTML = "Su cristalina cortina de agua que corre desde una altura de 10mt, a través de sus rocas de forma hexagonal y apiladas verticalmente, crea un escenario digno de admirar.";
    img1.src = "../img/tercios1.jpg";
    dImg1.innerHTML = "Detalles de las piedras en la Cascada Los Tercios";
    p2.innerHTML = "La <b>Cascada Los Tercios</b> suele ser más visitada durante el periodo de lluvia, cuando su caída de agua es totalmente apreciable, así como su extraordinario entorno natural, sin embargo, el tiempo de sequía resulta interesante para los viajeros y lugareños, que disfrutan al escalar sus geométricas rocas.";
    p3.innerHTML = "Igualmente, muchos turistas se acercan sintiéndose atraídos por la historia sobre la formación de esta cascada, rodeada de cuentos y leyendas populares que se han perpetuado en el tiempo. La historia más difundida cuenta que la hija de una familia adinerada se enamoró de un indígena local, quien lleno de rabia por no ser consentida esta relación, lanzó una maldición sobre la familia y su almacén, donde guardaban rollos de tela, convirtiéndose en piedra y terminando en la pobreza; así que los rollos permanecieron apilados y con el tiempo se convirtieron en parte del río.";
    p4.innerHTML = "La otra historia cuenta que una pececita encantada con cuerpo de oro creó la cascada y que es quien la protege; además, es ella quien hace crecer la caída de agua durante el invierno, y si alguien la mira, entonces puede perder la razón o hasta la vida. Todas estas historias son solo leyendas, por supuesto. Hasta el momento no se han hecho estudios que determinen, o al menos den una idea, de cómo se formó esta asombrosa cascada.";
    img2.src = "../img/tercios2.jpg";
    dImg2.innerHTML = "Vistas desde la Cascada Los Tercios";
    p5.innerHTML = "Darse un baño en las aguas refrescantes de la <b>Cascada Los Tercios</b> es lo primordial. El lugar es ideal para nadar un poco en su poza de poca profundidad o simplemente colocarse bajo la cortina de agua y relajarse.";
    p6.innerHTML = "En la zona hay abundante vegetación, de manera que hay sombra suficiente donde descansar un buen rato bajo algún árbol o disfrutar de una rica comida. Para los más osados hay la posibilidad de subir por la empinada pared de unos 10 metros de altura y llegar hasta la cima. Y por supuesto, contemplar las espléndidas panorámicas que se tienen hacia el lago <b>Suchitlán</b>, desde sus variados miradores, que además brindan al recinto un mayor encanto.";
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