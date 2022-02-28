 //TODO:Lista de productos
 const elements=[
    {
        id:1 ,
        idCategory:2,
        title:"Whitesnake" ,
        pictureUrl:"https://i.postimg.cc/6yJR9DyX/ws2.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:2 ,
        idCategory:2,
        title:"Van Halen" ,
        pictureUrl:"https://i.postimg.cc/f32mDy02/vanhalen2.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:3 ,
        idCategory:2,
        title:"AC DC" ,
        pictureUrl:"https://i.postimg.cc/WDWNyvcP/acdc1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:4 ,
        idCategory:5,
        title:"Among US" ,
        pictureUrl:"https://i.postimg.cc/tsvJKppz/amoongus2.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:5 ,
        title:"Resident Evil" ,
        idCategory:3,
        pictureUrl:"https://i.postimg.cc/5QvCBmKT/umbrella1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:6 ,
        title:"Naruto" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/G9pgFTQ2/naruto8.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:7 ,
        title:"Looney Toones" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/gLYWszgp/looneytoones1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:8 ,
        title:"Tom y Jerry" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/R62tJYdw/tyj2.png" ,
       description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:9 ,
        title:"Nirvana" ,
        idCategory:2,
        pictureUrl:"https://i.postimg.cc/G4vXLFcM/nirvana2.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:10 ,
        title:"Snoopy" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/Z9VFnjXL/snoopy1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ", 
        price:"2700",
        stock:"5"
    },
    {
        id:11 ,
        title:"Tortugas ninjas" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/K4gBhZcf/turtles1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:12 ,
        title:"Star wars" ,
        idCategory:3,
        pictureUrl:"https://i.postimg.cc/jDTzhGbX/trooper1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:13 ,
        title:"Star wars" ,
        idCategory:3,
        pictureUrl:"https://i.postimg.cc/cghjsQcq/mandalorian1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:14 ,
        title:"He-man" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/9RP2yRt1/heman1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:15 ,
        title:"Counter Strike" ,
        idCategory:5,
        pictureUrl:"https://i.postimg.cc/pyZBmcvn/counterstrike1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    }
    ,
    {
        id:16 ,
        title:"Star wars" ,
        idCategory:3,
        pictureUrl:"https://i.postimg.cc/9zvPDDgs/stromtroopers2.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:17,
        title:"Chicas super poderosas" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/r0wjN75b/pg1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:18,
        title:"Popeye" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/SjjV2FSY/popeye3.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:19,
        title:"Snoopy" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/zbvwgKrY/snoopy2.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:20,
        title:"Red Hot Chili Peppers" ,
        idCategory:2,
        pictureUrl:"https://i.postimg.cc/GHyQKFsc/redhot1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:21,
        title:"Naruto" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/64THtF3R/naruto7.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:22,
        title:"Los Simpsons" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/GHGFGbZt/simpson3.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        stock:"5"
    },
    {
        id:23,
        title:"Los Simpsons" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/8JYRBcpJ/simpson2.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:24,
        title:"Naruto" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/mhdqJyDC/naruto3.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:25,
        title:"Rick and Morty" ,
        idCategory:5,
        pictureUrl:"https://i.postimg.cc/p92JP3cT/rm2.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:26,
        title:"Naruto" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/S2gT0myk/naruto6.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:27,
        title:"Naruto" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/cKN5wD9y/naruto5.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:28,
        title:"Motley Crue" ,
        idCategory:2,
        pictureUrl:"https://i.postimg.cc/N5SnfGR0/motleycrue1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        stock:"5"
    },
    {
        id:29,
        title:"One Piece" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/QH96PLvZ/onepiece1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:30,
        title:"Patán" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/sBywvMx3/patan1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
        id:31,
        title:"He-Man" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/F1Qs1mgD/heman4.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:32,
        title:"One Piece" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/yJPn973c/onepiece2.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:33,
        title:"He-Man" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/8F6NPn72/heman2.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:34,
        title:"Anthrax" ,
        idCategory:2,
        pictureUrl:"https://i.postimg.cc/cK12Ptdv/anthrax1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:35,
        title:"Apple" ,
        idCategory:5,
        pictureUrl:"https://i.postimg.cc/LYtyXH9c/apple1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",       
        price:"2700",
        stock:"5"
    },
 {
        id:36,
        title:"Donkey Kong" ,
        idCategory:5,
        pictureUrl:"https://i.postimg.cc/PLqVSGMZ/arnold1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:37,
        title:"The Beatles" ,
        idCategory:2,
        pictureUrl:"https://i.postimg.cc/ygxd6Nyd/beatles1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:38,
        title:"Bloodsport" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/1nwdqGHY/bloodsport1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:39,
        title:"Bob Marley" ,
        idCategory:2,
        pictureUrl:"https://i.postimg.cc/v1NzZ4w2/bobm1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:40,
        title:"Bloodsport" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/94J5ftLP/bloodsport2.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:41,
        title:"Bob Marley" ,
        idCategory:2,
        pictureUrl:"https://i.postimg.cc/Vr9WBDbp/bobmarley1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:42,
        title:"Black Sabbath" ,
        idCategory:2,
        pictureUrl:"https://i.postimg.cc/nCb3m9j6/bs1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:43,
        title:"Caballeros del zodiaco" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/tsDk8rSj/caballerosdelzodiaco1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:44,
        title:"Smile" ,
        idCategory:5,
        pictureUrl:"https://i.postimg.cc/z3Rd3FBC/carafeliz1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:45,
        title:"Rubix" ,
        idCategory:5,
        pictureUrl:"https://i.postimg.cc/mtpNwctL/cuborubix1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:46,
        title:"Dragon ball" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/vgX6ZjnY/db1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:47,
        title:"Eric Clapton" ,
        idCategory:2,
        pictureUrl:"https://i.postimg.cc/hfbDVxjw/ericclapton1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:48,
        title:"Dragon ball" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/Wd5sHv0w/db5.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:49,
        title:"Death Note" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/t1qq4gN6/deadthnote.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:50,
        title:"Dragon ball" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/PNptx9YS/db3.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:51,
        title:"Guns Roses" ,
        idCategory:2,
        pictureUrl:"https://i.postimg.cc/yD3JqjyG/gunsoroses1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:52,
        title:"Dragon ball" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/wy7MVBPN/dbz2.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:53,
        title:"He-Man" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/TptRkb84/himan1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:54,
        title:"Dragon ball" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/JsMhFxvM/dragonball2.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:55,
        title:"Evangelion" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/MvyTtNs9/eva2.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:56,
        title:"Guns Roses" ,
        idCategory:2,
        pictureUrl:"https://i.postimg.cc/XrXntv47/gunsroses2.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:57,
        title:"Edición limitada" ,
        idCategory:5,
        pictureUrl:"https://i.postimg.cc/t7tRxfBy/limitededition1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:58,
        title:"Joker" ,
        idCategory:3,
        pictureUrl:"https://i.postimg.cc/QH88kbz7/joker1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:59,
        title:"Gorilaz" ,
        idCategory:2,
        pictureUrl:"https://i.postimg.cc/nsVCX2G0/gori1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:60,
        title:"Kiss" ,
        idCategory:2,
        pictureUrl:"https://i.postimg.cc/R6x93QfN/kiss1.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:61,
        title:"Manowar" ,
        idCategory:2,
        pictureUrl:"https://i.postimg.cc/hzc6WCTb/manowar2.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:62,
        title:"Metallica" ,
        idCategory:2,
        pictureUrl:"https://i.postimg.cc/kVFYcxzV/metallica2.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:63,
        title:"Marvin" ,
        idCategory:4,
        pictureUrl:"https://i.postimg.cc/p9D4SNhL/marvin2.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:64,
        title:"Naruto" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/MnBFckYm/naruto4.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:65,
        title:"Eastwood" ,
        idCategory:3,
        pictureUrl:"https://i.postimg.cc/LnTq2Gzn/eastwood.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
 {
        id:66,
        title:"Mazinger Z" ,
        idCategory:1,
        pictureUrl:"https://i.postimg.cc/YvvxJLmp/mazinger.png" ,
        description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
        price:"2700",
        stock:"5"
    },
    {
           id:67,
           title:"Sailoor moon" ,
           idCategory:1,
           pictureUrl:"https://i.postimg.cc/N9qb8GFQ/sailormoon1.png" ,
           description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
           price:"2700",
           stock:"5"
       },
       {
              id:68,
              title:"Mazinger Z" ,
              idCategory:1,
              pictureUrl:"https://i.postimg.cc/Yj7bhST3/mazinger2.png" ,
              description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
              price:"2700",
              stock:"5"
          },
          {
                 id:69,
                 title:"Sailor moon" ,
                 idCategory:1,
                 pictureUrl:"https://i.postimg.cc/hJ7p7QSC/sailormoon3.png" ,
                 description:"Remeras 100% algodón. Trabajamos remeras unisex, mujer y niño. Talles adulto(unisex o mujer):2 al 3xl, niño:2 al 14. Achican aproximadamente 1 cm. ",
                 price:"2700",
                 stock:"5"
             }
];
module.exports={
    elements
}