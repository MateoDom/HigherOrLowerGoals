const players = [{  
    player_id: 1,
    name: 'Cristiano Ronaldo',
    age:37,
    goals: 813,
    picture: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/4UYO6HTLFWRQ7DQDPUHNZ6DIRI.jpg"
    },
    {
        player_id: 2,
        name: 'Lionel Messi',
    age:34,
    goals: 764  ,
    picture: "https://atalayar.com/sites/default/files/styles/foto_/public/noticias/Atalayar_Leo%20Messi%20Barcelona_0.jpg?itok=moY7JlzF",
    },
    {
        player_id: 3,
        name: 'Neymar',
        age: 30,
        goals: 409,
        picture:"https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/08/113689.jpg"
    },
    {
        player_id: 4,
        name: 'Luis Suarez',
        age: 35,
        goals: 512,
        picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Luis_Su%C3%A1rez_Atl%C3%A9tico_Madrid.jpg/330px-Luis_Su%C3%A1rez_Atl%C3%A9tico_Madrid.jpg"
    },
    {player_id: 5 ,
     name: 'Josef Bican',
     age: "dead",
     goals: 805 ,
     picture: "https://www.clarin.com/img/2013/03/11/bican-mantuvo-un-promedio-de___Sk1T8cT7l_340x340.jpg"
    },
    {player_id:6 ,
        name: "Romario",
        age: 56,
        goals: 772,
        picture: "http://www.jotdown.es/wp-content/uploads/2012/03/Romario-1.jpg"
       },
       {player_id:7 ,
        name: "Pelé" ,
        age: 81,
        goals: 767,
        picture: "https://cdnb.20m.es/que-paso-en-el-mundial/files/2014/07/pel0002.jpg"
       },
       {player_id:8 ,
        name: "Ferenc Puskás" ,
        goals: 741, 
        picture: "https://museodefutbol.com/wp-content/uploads/2021/02/lossy-page1-1200px-Puskas_1971.jpg"
       },
       {player_id: 9,
        name: "Robert Lewandowski",
        goals: 584 ,
        picture: "https://img.fcbayern.com/image/upload/t_cms-1x1-seo/v1617116548/cms/public/images/fcbayern-com/homepage/saison-20-21/profis/lewandowski/210330_Lewandowski.jpg"
       },
       {player_id: 10 ,
        name: "Zlatan Ibrahimovic",
        goals: 572,
        picture: "https://assets-es.imgfoot.com/media/cache/1200x1200/zlatan-ibrahimovic-ac-milan-fm.jpg"
       },
       {player_id: 11,
        name: "Gerd Muller",
        goals: 735,
        picture: "https://static.dw.com/image/53217886_303.jpg"
       },
       {player_id:12 ,
        name: "Eusébio" ,
        goals: 547,
        picture: "https://s.hs-data.com/bilder/spieler/gross/1820.jpg?fallback=png"
       },
       {player_id:13 ,
        name: "Hugo Sánchez",
        goals: 516,
        picture: "https://s.hs-data.com/bilder/spieler/gross/1841.jpg"
       },
       {player_id: 14,
        name: "Maradona" ,
        goals:346 ,
        picture: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2015%2F10%2Fgettyimages-1923724_master.jpg&w=400&h=532&c=sc&poi=face&q=60"
       },
       {player_id: 15,
        name: "Ronaldo" ,  
        goals: 414,
        picture: "https://tmssl.akamaized.net/images/foto/galerie/ronaldo-luis-nazario-de-lima-1472042256-5977.jpg?lm=1483606131",
        },{
            player_id: 16,
            name: "Ronaldinho",
            goals: 301,
            picture: "https://e.rpp-noticias.io/normal/2021/11/25/531453_1179777.jpg"
        },
        {
            player_id: 17,
            name: "Jimmy Jones",
            goals: 647,
            picture: "http://www.belfastceltic.org/images/jjonesball.jpg"
        },
        {
            player_id: 18,
            name: "Zico",
            goals: 522,
            picture: "https://tmssl.akamaized.net/images/foto/galerie/zico-brazil-1630324243-69988.jpg?lm=1630324292",
        },{
            player_id: 19,
            name: "Di Estefano",
            goals: 509,
            picture: "http://personajeshistoricos.com/wp-content/uploads/2018/06/alfredo-di-stefano-1.jpg"
        },
        {
            player_id: 20,
            name: "Rooney",
            goals: 366,
            picture: "https://phantom-marca.unidadeditorial.es/d8a0667384ea366bad5daed3d9ddda7f/resize/1320/f/jpg/assets/multimedia/imagenes/2022/02/10/16444851258946.jpg"
        },{
            player_id: 21,
            name: "Kaka",
            goals: 161,
            picture: "https://football-italia.net/wp-content/uploads/2022/04/h_51116120.jpg"
        },
        {
            player_id: 22,
            name: "Benzema",
            goals: 400,
            picture: "https://assets-es.imgfoot.com/media/cache/1200x1200/champions-league-real-madrid-shakhtar-donetsk-karim-benzema.jpg" 
        },
        {
            player_id: 23,
            name: "Agüero",
            goals: 427,
            picture: "https://as01.epimg.net/futbol/imagenes/2021/01/19/internacional/1611062598_838744_1611062669_noticia_normal_recorte1.jpg"
        },
        {
            player_id: 24,
            name: "Mbappé",
            goals: 221,
            picture: "https://assets-es.imgfoot.com/media/cache/642x382/mbappebordeaux.jpg"
        },
        {
            player_id: 25,
            name: "Griezmann",
            goals: 270,
            picture: "https://assets-es.imgfoot.com/media/cache/1200x1200/griezmann-atleti-gol.jpg"
        }

]
export default players