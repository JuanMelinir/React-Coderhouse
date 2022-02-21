 //TODO:Lista de productos
 const elements=[
    {
        id:1 ,
        idCategory:3,
        title:"StormTroopers" ,
        pictureUrl:"https://i.postimg.cc/PLVjFgQQ/sw001.png" ,
        description:"En el universo ficticio de Star Wars, los Stormtroopers o Tropas de Asalto son las tropas de asalto del Imperio Galáctico.Su nombre se deriva del término alemán Sturmtruppen, que era el nombre de las tropas de choque o de asalto en la Primera Guerra Mundial.",
        price:"2700",
        stock:"5"
    },
    {
        id:2 ,
        idCategory:1,
        title:"Ataque de titanes" ,
        pictureUrl:"https://i.postimg.cc/RJ6VRSrt/aot001.png" ,
        description:"El adolescente Eren Jaeger, tras sufrir la destrucción de su ciudad y la pérdida de su madre a manos de los Titanes, dedicará su tiempo a destruirlos y acabar con esa amenaza que pone en peligro la supervivencia de la humanidad. Serie creada por Hajime Isayama. Producida por Will Studio y MAPPA.",
        price:"2700",
        stock:"5"
    },
    {
        id:3 ,
        idCategory:1,
        title:"Caballeros del Zodiaco" ,
        pictureUrl:"https://i.postimg.cc/XXpJ38Zv/cz001.png" ,
        description:"Los Caballeros del Zodiaco, es una serie de manga escrita e ilustrada por Masami Kurumada.Se publicaron 108 capítulos del manga junto con una edición especial, haciendo un total de 109 en formato tankoubon, dividido en 28 volúmenes con tres sagas (arcos argumentales) principales: Santuario, Poseidón y Hades. Ha sido reimpreso y reeditado en formato Wideban, Bunkoban y Kanzenban y también el llamado , la producción en tres ediciones (2002, 2007 y 2012",
        price:"2700",
        stock:"5"
    },
    {
        id:4 ,
        idCategory:4,
        title:"Popeye" ,
        pictureUrl:"https://i.postimg.cc/bStpnmbH/popeye001.png" ,
        description:"Popeye el marino es un personaje de tiras cómicas y de cortometrajes de dibujos animados. Fue creado por Elzie Crisler Segar​ y apareció por primera vez en la tira cómica Timble Theatre de King Features Syndicate, en la edición del The New York Evening Journal del 17 de enero de 1929.",
        price:"2700",
        stock:"5"
    },
    {
        id:5 ,
        title:"Van Halen" ,
        idCategory:2,
        pictureUrl:"https://i.postimg.cc/zbLrmxdZ/vh001.png" ,
        description:"Van Halen fue una banda de hard rock estadounidense, inicialmente nombrada Mammoth por los fundadores de la banda (Eddie Van Halen, Alex Van Halen y Mark Stone), formada en 1972 en Pasadena, California y disuelta en 2020. Luego se unirían al grupo el cantante David Lee Roth y el bajista Michael Anthony.",
        price:"2700",
        stock:"5"
    },
    {
        id:6 ,
        title:"Dragon Ball" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/BjWtmKnn/dbz001.png" ,
        description:"Es un manga escrito e ilustrado por Akira Toriyama. Fue publicado originalmente en la revista Shōnen Jump, de la editorial japonesa Shūeisha, entre 1984 y 1995.​ Su trama describe las aventuras de Gokū, un guerrero saiyajin, cuyo fin es proteger a la Tierra de otros seres que quieren conquistarla y exterminar a la humanidad. Conforme transcurre la trama, conoce a otros personajes que le ayudan en este propósito. El nombre de la serie proviene de unas esferas mágicas que al ser reunidas invocan a un dragón que concede deseos.",
        price:"2700",
        stock:"5"
    },
    {
        id:7 ,
        title:"Evangelion" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/F18KKLcV/ev001.png" ,
        description:"Es una serie de anime creada por el estudio Gainax7​ y dirigida por Hideaki Annon.La historia de la obra se da lugar en un mundo futurista en el que una organización paramilitar llamada NERV protege a la humanidad de los ataques de seres de origen y naturaleza desconocidos, los «Ángeles», utilizando para ello bio mechas humanoides llamados Evangelion ",
        price:"2700",
        stock:"5"
    },
    {
        id:8 ,
        title:"It" ,
        idCategory:3,
        pictureUrl:"https://i.postimg.cc/5Hg09KqX/it001.png" ,
        description:"It, conocida en español como Eso, es una miniserie televisiva de terror de 1990 basada en la novela homónima de Stephen King. Se hizo una adaptación cinematográfica de la novela de terror de Stephen King, estrenada en septiempre del 2017.",
        price:"2700",
        stock:"5"
    },
    {
        id:9 ,
        title:"Looney tunes" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/9DG0KQDt/mart001.png" ,
        description:"Marvin el Marciano es un extraterrestre personaje de los dibujos animados de Warner Bros.: Looney Tunes y Merrie Melodies. Con frecuencia aparece como un villano en dibujos animados y videojuegos, y usa casco y falda. El personaje fue interpretado por Mel Blanc, Joe Alaskey, Bob Bergen y Eric Bauza, entre otros.",
        price:"2700",
        stock:"5"
    },
    {
        id:10 ,
        title:"Mortal Kombat" ,
        idCategory:3,
        pictureUrl:"https://i.postimg.cc/YGyCY4Pk/mk001.png" ,
        description:"Mortal Kombat (comúnmente abreviado MK) es una franquicia de videojuegos de lucha creada por Ed Boon y John Tobias en 1992. Las cuatro primeras entregas fueron distribuidas por Midway Games y lanzadas principalmente en máquinas arcade; posteriormente estuvieron disponibles en consolas domésticas.",
        price:"2700",
        stock:"5"
    },
    {
        id:11 ,
        title:"Naruto" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/hzGGX8pp/nt001.png" ,
        description:"Es una serie de manga escrita e ilustrada por Masashi Kishimoto. La obra narra la historia de un ninja huérfano adolescente, cuyos padres murieron en Ataque del Zorro Demonio de Nueve Colas, llamado Naruto Uzumaki, quien aspira a convertirse en Hokage, líder de su aldea, con el propósito de ser reconocido como alguien importante dentro de la aldea y entre sus compañeros.",
        price:"2700",
        stock:"5"
    },
    {
        id:12 ,
        title:"Ramones" ,
        idCategory:2,
        pictureUrl:"https://i.postimg.cc/wyP93Ctj/ramones001.png" ,
        description:"Ramones fue una banda de punk formada en Forest Hills, en el distrito de Queens (Nueva York, Estados Unidos) en 1974, y disuelta veintidós años más tarde, en 1996.",
        price:"2700",
        stock:"5"
    },
    {
        id:13 ,
        title:"Sailor moon" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/87DNFBCM/sm001.png" ,
        description:"Es una serie de manga escrita e ilustrada por Naoko Takeuchi en diciembre de 1991. El manga se hizo particularmente famoso por volver a popularizar con gran éxito el subgénero de las chicas mágicas, y sus elementos sentai consiguieron que la aceptación también fuese masiva entre el sector masculino, generalmente menos interesado en este tipo de historias",
        price:"2700",
        stock:"5"
    },
    {
        id:14 ,
        title:"Thundercats" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/xqw0QSDs/thc001.png" ,
        description:"Es una serie animada estadounidense de televisión que fue producida por Rankin/Bass Productions —misma que creó a los Halcones Galácticos, Los Tigres del Mar, esta última fue creada como parte de la serie de libros de historietas—. Fue estrenada el 23 de enero de 1985 y está basada en los personajes creados por Theodore Walter «Tobin» Wolf; dirigida por el japonés Katsuhito Akiyama. El escritor fue Leonard Starr. La serie sigue las aventuras de un grupo de felinos humanoides extraterrestres.",
        price:"2700",
        stock:"5"
    },
    {
        id:15 ,
        title:"Tom y jerry" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/TK9GnLyS/tyj.png" ,
        description:"Son dos personajes animados, un gato (Tom) y un ratón (Jerry), que protagonizaron un gran número de cortometrajes creados, escritos y dirigidos por William Hanna y Joseph Barbera (anterior a la fama de su empresa Hanna-Barbera).",
        price:"2700",
        stock:"5"
    }
    ,
    {
        id:16 ,
        title:"AC DC" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/bZS3GSQn/acdc1.png" ,
        description:"Son dos personajes animados, un gato (Tom) y un ratón (Jerry), que protagonizaron un gran número de cortometrajes creados, escritos y dirigidos por William Hanna y Joseph Barbera (anterior a la fama de su empresa Hanna-Barbera).",
        price:"2700",
        stock:"5"
    },
    {
        id:17,
        title:"Anthrax" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/1VRv4WHR/anthrax1.png" ,
        description:"Son dos personajes animados, un gato (Tom) y un ratón (Jerry), que protagonizaron un gran número de cortometrajes creados, escritos y dirigidos por William Hanna y Joseph Barbera (anterior a la fama de su empresa Hanna-Barbera).",
        price:"2700",
        stock:"5"
    },
    {
        id:18,
        title:"Arnold" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/yWnf2H1D/arnold1.png" ,
        description:"Son dos personajes animados, un gato (Tom) y un ratón (Jerry), que protagonizaron un gran número de cortometrajes creados, escritos y dirigidos por William Hanna y Joseph Barbera (anterior a la fama de su empresa Hanna-Barbera).",
        price:"2700",
        stock:"5"
    },
    {
        id:19,
        title:"Beatles" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/fJr8Tf0Z/beatles1.png" ,
        description:"Son dos personajes animados, un gato (Tom) y un ratón (Jerry), que protagonizaron un gran número de cortometrajes creados, escritos y dirigidos por William Hanna y Joseph Barbera (anterior a la fama de su empresa Hanna-Barbera).",
        price:"2700",
        stock:"5"
    },
    {
        id:20,
        title:"Bloodsport" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/2VVxJL9t/bloodsport1.png" ,
        description:"Son dos personajes animados, un gato (Tom) y un ratón (Jerry), que protagonizaron un gran número de cortometrajes creados, escritos y dirigidos por William Hanna y Joseph Barbera (anterior a la fama de su empresa Hanna-Barbera).",
        price:"2700",
        stock:"5"
    },
    {
        id:21,
        title:"Bod Marley" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/svDL226P/bobm1.png" ,
        description:"Son dos personajes animados, un gato (Tom) y un ratón (Jerry), que protagonizaron un gran número de cortometrajes creados, escritos y dirigidos por William Hanna y Joseph Barbera (anterior a la fama de su empresa Hanna-Barbera).",
        price:"2700",
        stock:"5"
    },
    {
        id:22,
        title:"Bod Marley" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/vgbzSPC7/bobmarley1.png" ,
        description:"Son dos personajes animados, un gato (Tom) y un ratón (Jerry), que protagonizaron un gran número de cortometrajes creados, escritos y dirigidos por William Hanna y Joseph Barbera (anterior a la fama de su empresa Hanna-Barbera).",
        price:"2700",
        stock:"5"
    },
    {
        id:23,
        title:"Black Sabbath" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/WtsW93vR/bs1.png" ,
        description:"Son dos personajes animados, un gato (Tom) y un ratón (Jerry), que protagonizaron un gran número de cortometrajes creados, escritos y dirigidos por William Hanna y Joseph Barbera (anterior a la fama de su empresa Hanna-Barbera).",
        price:"2700",
        stock:"5"
    },
    {
        id:24,
        title:"Dragon ball" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/v4vDt3Lw/dbz2.png" ,
        description:"Son dos personajes animados, un gato (Tom) y un ratón (Jerry), que protagonizaron un gran número de cortometrajes creados, escritos y dirigidos por William Hanna y Joseph Barbera (anterior a la fama de su empresa Hanna-Barbera).",
        price:"2700",
        stock:"5"
    },
    {
        id:25,
        title:"Eric Clapton" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/QKqvy96C/ericclapton1.png" ,
        description:"Son dos personajes animados, un gato (Tom) y un ratón (Jerry), que protagonizaron un gran número de cortometrajes creados, escritos y dirigidos por William Hanna y Joseph Barbera (anterior a la fama de su empresa Hanna-Barbera).",
        price:"2700",
        stock:"5"
    },
    {
        id:26,
        title:"Nirvana" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/dZDS4HTH/gunsoroses1.png" ,
        description:"Son dos personajes animados, un gato (Tom) y un ratón (Jerry), que protagonizaron un gran número de cortometrajes creados, escritos y dirigidos por William Hanna y Joseph Barbera (anterior a la fama de su empresa Hanna-Barbera).",
        price:"2700",
        stock:"5"
    },
    {
        id:27,
        title:"Guns Roses" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/gwq5J6WD/gunsroses2.png" ,
        description:"Son dos personajes animados, un gato (Tom) y un ratón (Jerry), que protagonizaron un gran número de cortometrajes creados, escritos y dirigidos por William Hanna y Joseph Barbera (anterior a la fama de su empresa Hanna-Barbera).",
        price:"2700",
        stock:"5"
    },
    {
        id:28,
        title:"One Piece" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/tsLyP68G/onepiece1.png" ,
        description:"Son dos personajes animados, un gato (Tom) y un ratón (Jerry), que protagonizaron un gran número de cortometrajes creados, escritos y dirigidos por William Hanna y Joseph Barbera (anterior a la fama de su empresa Hanna-Barbera).",
        price:"2700",
        stock:"5"
    },
    {
        id:29,
        title:"One Piece" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/t1Cd316D/rm2.png" ,
        description:"Son dos personajes animados, un gato (Tom) y un ratón (Jerry), que protagonizaron un gran número de cortometrajes creados, escritos y dirigidos por William Hanna y Joseph Barbera (anterior a la fama de su empresa Hanna-Barbera).",
        price:"2700",
        stock:"5"
    },
    {
        id:30,
        title:"Tortugas ninjas" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/Hr3XkpNM/turtles1.png" ,
        description:"Son dos personajes animados, un gato (Tom) y un ratón (Jerry), que protagonizaron un gran número de cortometrajes creados, escritos y dirigidos por William Hanna y Joseph Barbera (anterior a la fama de su empresa Hanna-Barbera).",
        price:"2700",
        stock:"5"
    },
    {
        id:31,
        title:"Whitesnake" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/RWTQJ1WN/ws2.png" ,
        description:"Son dos personajes animados, un gato (Tom) y un ratón (Jerry), que protagonizaron un gran número de cortometrajes creados, escritos y dirigidos por William Hanna y Joseph Barbera (anterior a la fama de su empresa Hanna-Barbera).",
        price:"2700",
        stock:"5"
    }
];
module.exports={
    elements
}
