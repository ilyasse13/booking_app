import {vespa1, vespa2, vespa3, vitaloca_vespa3, vitaloca_vespa2, vitaloca_vespa1, ov_optic1, ov_optic2, au_bon_oeil5, au_bon_oeil1, au_bon_oeil2, au_bon_oeil3, au_bon_oeil4, Restau241, Restau242, Restau243, Restau244, Restau245, jungle1, jungle2, jungle3, jungle4, jungle5, jungle6, splendido1, splendido2, splendido3, splendido4, splendido5, splendido6, latable1, latable2, latable3, latable4, leaudanslabouche1, leaudanslabouche2, leaudanslabouche3, leaudanslabouche4, barber1, barber2, barber3, barber4, barber5, rooftop1, rooftop2, rooftop3, rooftop4, rooftop5, rooftop6, rooftop7, rooftop8, sasgalerie1, sasgalerie2, sasgalerie3, sasgalerie4, basket1, basket2, basket3, basket4, basket5, basket6, OS1, OS2, OS3, OS4, newTacos1, newTacos2, newTacos3, donut1, donut2, donut3, biscuit1, biscuit2, biscuit3, marcela1, marcela2, marcela3, marcela4, marcela5, cinema1, cinema2, cinema3, sportbeach1, sportbeach2, sportbeach3,
    sportbeach4, hotels} from "../assets/data";


   const restaurants = [
    {
        id:1,
        nom:" restaurant le 24",
        slogan:"Spécialités de homard, poissons et fruits de mer",
        description:"Notre restaurant le 24 vous accueille dans un cadre agréable pour déguster des plats de haute qualité. Spécialisés en cuisine française revisitée, nous vous proposons des menus variés, remodelés de façon saisonnière, inspirés des tendances culinaires des 5 continents.",
        adresse:" 24 rue falque 13006 marseille",
        téléphone:"06.58.06.92.40",
        prix:"Prix moyen 39 €",
        horaires:"Mar-vend :12H-15H & 19H -23H Ven & Sam jusqu’à 00:00",
        images:[Restau241,Restau242,Restau243,Restau244,Restau245],
        avis:[ 
            {
                utilisateur:"LAURENT_L",
                valeur: 5 ,
                commentaire:"De passage sur Marseille envie d'un Brunch familial. Découvert par hasard sur internet. Je recommande grandement ce lieu accueil chaleureux, équipe dynamique et serviable. A essayer de toute urgence."
            },
            {
                utilisateur:"MARIO_C",
                valeur:5 ,
                commentaire:"C’était excellent, l’équipe au top la décoration c’était magnifique 🤩"
            },
            {
                utilisateur:"SABRINA_L",
                valeur:5 ,
                commentaire:"Nous avons passé un moment très agréable dans ce restaurant à la déco superbe. Les plats étaient excellents et le café merveilleux. service au top. Le seul bémol est la fumée des cuisines en salle. Je recommande fortement cette adresse à tous les épicuriens !"
            }

        ],
        siteweb:"https://www.lerestaurant24.fr",
        informations_importants:{},
        path:"Restaurants/Restaurant_Le_24",
        uri:"Restaurant_Le_24",
        category:"fruit_de_mer"



    },
    {
        id:2,
        nom:" the jungle marseille",
        slogan:"🅑🅡🅤🅝🅒🅗&🅛🅤🅝🅒🅗",
        description:"Plongez dans une oasis tropicale au cœur de Marseille avec The Jungle Restaurant. Dégustez des plats exotiques et des cocktails vibrants entourés d'une verdure luxuriante et d'une ambiance captivante. Parfait pour une expérience culinaire unique.",
        adresse:"📍68 Rue Breteuil 13006",
        téléphone:"",
        prix:"",
        horaires:"• Mardi au vendredi : 10h30-16h • Week-end : 10h-16h Fermeture cuisine 15h",
        images:[jungle1,jungle2,jungle3,jungle4,jungle5,jungle6],
        avis:[
            {
                utilisateur: "Claire_D",
                commentaire: "Une expérience culinaire exceptionnelle! Les plats sont délicieux et l'ambiance tropicale est magnifique. Je recommande fortement!",
                valeur: 5
            },
            {
                utilisateur: "Julien_M",
                commentaire: "Un cadre incroyable et une cuisine exotique savoureuse. The Jungle est le meilleur endroit pour une soirée mémorable à Marseille.",
                valeur: 5 
            },
            {
                utilisateur: "Sophie_T",
                commentaire: "Service impeccable et décoration magnifique. Les cocktails sont aussi beaux que bons. Une adresse incontournable!",
                valeur: 5 
            },
            {
                utilisateur: "Marc_R",
                commentaire: "Atmosphère unique et nourriture délicieuse. Nous avons passé une soirée fantastique. Merci à toute l'équipe de The Jungle!",
                valeur: 5 
            },
            {
                utilisateur: "Elodie_L",
                commentaire: "Une découverte surprenante! Les plats sont originaux et bien présentés, et l'ambiance est magique. À essayer absolument.",
                valeur: 5 
            }
        ], 
        siteweb:"https://vu.fr/xSlT",
        informations_importants:{},
        path:"Restaurants/the_jungle_marseille",
        uri:"the_jungle_marseille",
        category:"tropical"

    },
    {
        id:3,
        nom:" LE SPLENDIDO",
        slogan:"Tutto è fatto in casa ❤️",
        description:"Que diriez-vous d’une escapade Italienne en plein centre de Marseille ?Le Splendido est un restaurant italien, avec des décors plus surprenants les uns que les autres.Entre les pates à la truffes et les pizzas, vos papilles découvrirons le bon goût de l’Italie.",
        adresse:"📍 16-18 rue de la République, 13001 Marseille",
        téléphone:"",
        prix:"",
        horaires:"• Mardi au vendredi : 10h30-16h • Week-end : 10h-16h Fermeture cuisine 15h",
        images:[splendido1,splendido2,splendido3,splendido4,splendido5,splendido6],
        avis: [
            {
                utilisateur: "Laura_B",
                commentaire: "Une escapade italienne parfaite en plein Marseille! Les pâtes à la truffe sont à tomber et les pizzas délicieuses. Le décor est aussi magnifique.",
                valeur: 5 
            },
            {
                utilisateur: "Nicolas_V",
                commentaire: "Le Splendido offre une expérience culinaire authentique avec un décor époustouflant. Les saveurs italiennes sont au rendez-vous, je reviendrai sans hésiter.",
                valeur: 5 
            },
            {
                utilisateur: "Elodie_P",
                commentaire: "Un cadre magnifique et des plats savoureux. Les pâtes à la truffe sont un must et les pizzas sont excellentes. Une vraie découverte!",
                valeur: 5
            },
            {
                utilisateur: "Thomas_L",
                commentaire: "Ambiance chaleureuse et cuisine italienne de qualité. Le Splendido est désormais mon restaurant italien préféré à Marseille.",
                valeur: 5
            }
        ], 
        siteweb:"https://www.sevenrooms.com/reservations/bigmamma/ig?venues=pizzeriapopolarebourse%2Cmammaprimiparis%2Ceastmamma%2Cpinkmamma%2Cobermamma%2Cbigloveparis%2Clibertinoparis%2Cpalatinorestaurant%2Cgiacomomontecarlo%2CCarmelolyon%2Csplendidomarseille%2Cbellezzavieuxlille",
        informations_importants:{},
        path:"Restaurants/Le_Splendido",
        uri:"Le_Splendido",
        category:"italien"


    },
    {
        id:4,
        nom:"LA TABLE D’AUGUSTINE",
        slogan:"Cuisine traditionnelle provençale",
        description:"La Table d'Augustine à Marseille vous invite à découvrir une cuisine provençale authentique, inspirée des recettes de grand-mère Augustine. Situé sur la pittoresque place des Augustines, le restaurant propose des plats traditionnels aux saveurs méditerranéennes, préparés avec des produits locaux de qualité. Profitez d'une ambiance chaleureuse et d'un décor charmant pour une expérience culinaire mémorable.",
        adresse:"📍 12 place des Augustines, 13002 Marseille",
        téléphone:"0786271126",
        prix:"",
        horaires:"du MIDI et du SOIR",
        images:[latable1,latable2,latable3,latable4],
        avis:  [
            {
                utilisateur: "Marie_P",
                commentaire: "Une expérience culinaire exceptionnelle! Les plats sont délicieux et authentiques, avec une touche provençale. Le cadre est charmant et chaleureux.",
                valeur:5
            },
            {
                utilisateur: "Jean_L",
                commentaire: "Un restaurant incontournable à Marseille. La cuisine est savoureuse et l'ambiance est parfaite pour un dîner en famille ou entre amis.",
                valeur: 5
            },
            {
                utilisateur: "Sophie_M",
                commentaire: "Service impeccable et plats exquis. J'ai adoré la touche personnelle des recettes de grand-mère Augustine. Je reviendrai sans hésiter.",
                valeur: 5
            },
            {
                utilisateur: "Lucas_R",
                commentaire: "Un véritable voyage culinaire en Provence! Les ingrédients sont frais et locaux, et chaque plat est préparé avec soin. Très recommandé.",
                valeur: 5
            }
        ], 
        siteweb:"https://latabledaugustine.fr/fr/booking",
        informations_importants:{
            notes:"Les réservations sont possibles pour les services du MIDI et du SOIR. N’hésitez pas à nous contacter au 07 86 27 11 26. Pour les événements ou les groupes, envoyez nous votre demande par mail à latabledaugustine@gmail.com. Merci et à très vite."
        } ,
        path:"Restaurants/La_Table_D'augustine",
        uri:"La_Table_D'augustine",
        category:"traditionnelle"

    },
    {
        id:5,
        nom:"Pizzeria L’eau à la bouche",
        slogan:"🍕 Sur place ou à emporter",
        description:"C'est à Marseille, sur la promenade de la Corniche à l'entrée de l'anse de Malmousque, au carrefour d'Endoume, qu'un petit cabanon coloré, pas plus grand qu'un mouchoir de poche, dans le charme d'une habitation marseillaise a été transformée en une pizzeria qui vous séduira par son authenticité. Une terrasse, un étage et 3 tables au comptoir, mais surtout un décor qui amusera aussi bien les petits que les grands.Les pizzas sont à déguster sur place ou à emporter dans le secteur du mardi midi au dimanche soir. Les livraisons sont assurées uniquement en basse saison : du mois d'octobre au mois de mai.Les réservations et commandes sont conseillées et se font uniquement par téléphone au 04.91.52.16.16 Paiements acceptés: CB, chèque avec Carte national d'identité, espèces",
        adresse:"120 corniche kennedy, Marseille, France 13007",
        téléphone:"04.91.52.16.16",
        prix:"",
        horaires:" Du mardi au dimanche 12h-15h & 18h-23h",
        images:[leaudanslabouche1,leaudanslabouche2,leaudanslabouche3,leaudanslabouche4],
        avis: [], 
        siteweb:"https://pizzerialeaualabouche.fr",
        informations_importants:{
        notes:"Les réservations sont possibles pour les services du MIDI et du SOIR. Merci et à très vite."
        },
        path:"Restaurants/Pizzeria_Leau_à_La_Bouche",
        uri:"Pizzeria_Leau_à_La_Bouche",
        category:"pizzeria"
        

    },
    {
        id:6,
        nom:"New School Tacos Marseille",
        slogan:"🇫🇷Véritable frenchtacos à Marseille 🤙🏼Osez le goût du vrai🤙🏼",
        description:"Découvrez New School Tacos, où tradition et innovation se rencontrent pour offrir des tacos savoureux et uniques. Situé en ville, ce restaurant propose des ingrédients frais et des recettes authentiques pour une expérience culinaire inoubliable.",
        adresse:"📍Marseille 24 rue vacon 13001",
        téléphone:"04.91.72.10.80",
        prix:"",
        horaires:"",
        images:[newTacos1,newTacos2,newTacos3],
        avis:[
            {
                utilisateur: "Alice P.",
                commentaire: "New School Tacos propose les meilleurs tacos de la ville ! Les ingrédients sont toujours frais et les saveurs incroyables. Un vrai régal !",
                valeur:5
            },
            {
                utilisateur: "Marc D.",
                commentaire: "Super expérience chez New School Tacos. Les portions sont généreuses et les recettes sont innovantes. J'y retournerai sans hésiter.",
                valeur:4
            },
            {
                utilisateur: "Sophie L.",
                commentaire: "J'adore ce restaurant ! Les tacos sont délicieux et l'ambiance est conviviale. Le service est rapide et les prix sont raisonnables.",
                valeur:5
            },
            {
                utilisateur: "Lucas M.",
                commentaire: "Très satisfait de ma visite à New School Tacos. Les saveurs sont authentiques et les tacos sont bien garnis. Je recommande vivement !",
                valeur:4 
            },
            {
                utilisateur: "Emma R.",
                commentaire: "Une découverte fantastique ! Les tacos sont savoureux et variés. Le personnel est accueillant et le cadre est agréable.",
                valeur:5
            },
            {
                utilisateur: "Julien B.",
                commentaire: "New School Tacos est devenu mon endroit préféré pour les tacos. Les ingrédients de qualité et les recettes originales en font un lieu incontournable.",
                valeur:5
            }
        ],
        siteweb:"https://newschooltacos.fr",
        informations_importants:{},
        path:"Restaurants/New_School_Tacos_Marseille",
        uri:"New_School_Tacos_Marseille",
        category:"tacos"


    },
    {
        id:7,
        nom:"Marcella Trattoria",
        slogan:"Pasta Fresca 🍝, pizze 🍕, produits frais de saison , tutto è fatto a mano !",
        description:"Explore the flavors of Italy at Marcella Trattoria, where tradition meets innovation in every dish. Nestled in the heart of [location], our restaurant offers an authentic Italian dining experience with a modern twist. From freshly made pasta to artisanal pizzas and delectable desserts, each bite is a journey through the diverse regions of Italy. Whether you're enjoying a romantic dinner for two or hosting a special celebration, Marcella Trattoria promises an unforgettable culinary experience infused with passion and flavor.",
        adresse:"📍1140 rue andré ampère, place Actimart, Aix-en-Provence, France 13290",
        téléphone:"04 12 20 03 05",
        prix:"",
        horaires:"Ouvert du lundi au vendredi midi.",
        images:[marcela1,marcela2,marcela3,marcela4,marcela5],
        avis:[
            {
                utilisateur: "Albert L.",
                commentaire: "Marcella Trattoria offre une expérience culinaire italienne authentique. Les pâtes fraîches et les pizzas artisanales sont tout simplement délicieuses. Un endroit incontournable !",
                valeur: 5
            },
            {
                utilisateur: "Julien R.",
                commentaire: "J'ai adoré chaque moment passé à Marcella Trattoria. Le service est impeccable et les plats sont préparés avec soin et passion. Je reviendrai certainement.",
                valeur: 4
            }
        ],
        siteweb:"",
        informations_importants:{},
        path:"Restaurants/Marcella_Trattoria",
        uri:"Marcella_Trattoria",
        category:'italien'


    }

  ];
  const  nights_club= [
    {
      id: 1,
      nom: "LE ROOFTOP",
      slogan: "Le rooftop le plus exceptionnel d’Europe",
      description: "Nouveauté au Rooftop ! Accès gratuit de 19h à 21h. Après une longue journée de travail, relaxez-vous face à un somptueux coucher de soleil, un cocktail en main, et dégustez nos planches gourmandes pour une expérience inoubliable. Restez pour la soirée et découvrez nos différents univers…",
      prix: "à partir de 100 EUR",
      adresse: "Les Terrasses du Port, 9 Quai du Lazaret 13002 - Marseille",
      téléphone: "06 70 36 78 35",
      horaires: "19h00 - 2h00",
      images: [rooftop1, rooftop2, rooftop3, rooftop4, rooftop5, rooftop6, rooftop7, rooftop8],
      avis: [
        {
          utilisateur: "Alex R.",
          commentaire: "Rooftop est l'endroit où il faut être le samedi soir ! La musique est toujours au top, et l'ambiance est électrique. J'ai hâte d'y retourner!",
          valeur: 5 
        },
        {
          utilisateur: "Mia T.",
          commentaire: "J'ai passé un moment incroyable au Rooftop ! Les DJs sont de premier ordre et les boissons sont à un prix raisonnable. Définitivement mon nouvel endroit préféré.",
          valeur: 4
        },
        {
          utilisateur: "James L.",
          commentaire: "Super ambiance et système de son fantastique au Rooftop. La foule est vivante et amicale. Parfait pour une soirée entre amis.",
          valeur: 5
        },
        {
          utilisateur: "Sophie H.",
          commentaire: "Le Rooftop ne déçoit jamais. Le personnel est amical, la décoration est élégante et la piste de danse est toujours pleine. Je recommande fortement !",
          valeur: 5
        },
        {
          utilisateur: "Daniel M.",
          commentaire: "J'ai adoré mon expérience au Rooftop. L'éclairage et les visuels sont incroyables et l'énergie globale est contagieuse. Un endroit à visiter absolument !",
          valeur: 4
        },
        {
          utilisateur: "Lily S.",
          commentaire: "Le Rooftop est la meilleure boîte de nuit de la ville ! La sélection musicale est variée et l'ambiance est parfaite pour une nuit de danse et de fun.",
          valeur: 5
        }
      ],
      siteweb: "https://lerooftopdesterrasses.com",
      informations_importants: {},
      path: "Nights-club/LE_ROOFTOP",
      uri: "LE_ROOFTOP"
    },
    {
      id: 2,
      nom: "LE SPORT BEACH",
      slogan: "SportBEACH",
      description: "SportBeach est la destination ultime pour ceux qui cherchent à profiter d'un parfait mélange de vie nocturne vibrante et de cuisine exquise. Situé le long de la pittoresque plage, SportBeach offre des vues à couper le souffle qui créent le cadre idéal pour une nuit inoubliable.",
      prix: "",
      adresse: "📍138 avenue Pierre Mendès France, 13008 Marseille",
      téléphone: "04 91 76 12 35",
      horaires: "Lundi : 10h00 – 19h00 | Mardi : 10h00 – 02h00 | Mercredi : 10h00 – 02h00 | Jeudi : 10h00 – 02h00 | Vendredi : 10h00 – 02h00 | Samedi : 10h00 – 02h00 | Dimanche : 10h00 – 02h00",
      images: [sportbeach1, sportbeach2, sportbeach3, sportbeach4],
      avis: [
        {
          utilisateur: "Alex R.",
          commentaire: "SportBeach est l'endroit idéal pour une sortie nocturne ! La combinaison de la bonne musique, de la nourriture délicieuse et des vues à couper le souffle est imbattable. Je recommande vivement !",
          valeur: 5
        },
        {
          utilisateur: "Mia T.",
          commentaire: "J'ai passé un moment incroyable au SportBeach ! L'ambiance est fantastique, les DJs sont excellents et la nourriture est de première qualité. J'ai hâte de revenir !",
          valeur: 4
        },
        {
          utilisateur: "James L.",
          commentaire: "SportBeach offre une expérience inoubliable.",
          valeur: 5
        }
      ],
      siteweb: "https://sportbeach.fr",
      informations_importants: {},
      path: "Nights-club/LE_SPORT_BEACH",
      uri: "LE_SPORT_BEACH"
    }
  ];
  const sneakers= [
    {
      id: 1,
      nom: "SAS GALERIE SNEAKERS",
      description: "Bienvenue à SAS Galerie, la destination incontournable pour les passionnés de baskets et les adeptes de la mode. Située au cœur de la ville Marseille, SAS Galerie offre une sélection inégalée des dernières baskets les plus recherchées des grandes marques mondiales.",
      adresse: "📍14 rue Montgrand, 13006 Marseille",
      téléphone: "",
      images: [sasgalerie1, sasgalerie2, sasgalerie3, sasgalerie4],
      horaires: "•Lundi——>Samedi📌 •10H——> 19H🕖",
      siteweb: "https://sasgalerie.com",
      informations_importants: {},
      path: "Sneakers/SAS_GALERIE_SNEAKERS",
      uri: "SAS_GALERIE_SNEAKERS",
      avis: [
        {
          utilisateur: 'Mauris_H',
          commentaire: 'Le magasin est riche en modèles et moderne, j\'aime beaucoup.',
          valeur: 5
        }
      ]
    },
    {
      id: 2,
      nom: "L’Atelier de la Basket",
      description: "L'atelier de la basket est le premier service en ligne de nettoyage, restauration de chaussures de luxe et sneakers de collection & spécialiste du custom. Vous pouvez aussi nous retrouver dans nos points de vente de Marseille et Paris.",
      adresse: "📍4 rue Montgrand, Marseille, France 13006",
      téléphone: "",
      images: [basket1, basket2, basket3, basket4, basket5, basket6],
      horaires: "Du lundi au samedi 11h00-12h15 / 13h15-19h00",
      siteweb: "https://www.latelierdelabasket.com",
      informations_importants: {},
      path: "Sneakers/L'Atelier_de_la_Basket",
      uri: "L'Atelier_de_la_Basket",
      category: 'nettoyage et restauration',
      avis: [
        {
          utilisateur: 'Lilia',
          commentaire: 'J\'ai nettoyé mes espadrilles chez ce magasin, le résultat était incroyable.',
          valeur: 5
        },
        {
          utilisateur: 'Adam_B',
          commentaire: 'Très beau magasin de sneakers.',
          valeur: 4
        }
      ]
    },
    {
      id: 3,
      nom: "OS Sneakers",
      description: "Découvrez les dernières sorties et les baskets les plus exclusives chez OS Sneakers, votre destination incontournable pour tout ce qui concerne les chaussures. Restez à la pointe des tendances avec notre sélection de baskets haut de gamme et authentiques des meilleures marques mondiales.",
      adresse: "📍67 rue Francis Davso, 13001 Marseille",
      téléphone: "09.50.37.75.47 | 07.86.38.67.33",
      images: [OS1, OS2, OS3, OS4],
      horaires: "",
      siteweb: "",
      informations_importants: {},
      path: "Sneakers/OS_Sneakers",
      uri: "OS_Sneakers",
      avis: [
        {
          utilisateur: 'Ilyas_L',
          commentaire: 'J\'ai trouvé chez ce magasin les dernières sorties et mes espadrilles sneakers préférées.',
          valeur: 5
        }
      ]
    }
  ];
  const activités=[
    {
        id: 1,
        nom: "Cinéma La Joliette",
        slogan: "Cinéma",
        description: "Découvrez l'expérience vibrante et innovante du Cinéma La Joliette, situé au cœur de Marseille, France. Ce cinéma est un véritable chef-d'œuvre de design moderne, avec une disposition unique et colorée des sièges qui améliore votre expérience cinématographique. Avec son mélange ludique de poufs, de chaises rembourrées confortables et un schéma de couleurs dynamique, le Cinéma La Joliette crée une atmosphère accueillante et cosy pour tous les visiteurs. Le cinéma offre une sélection diversifiée de films, allant des derniers blockbusters aux films indépendants et internationaux. Que vous soyez un cinéphile ou que vous cherchiez simplement à passer une soirée amusante, le Cinéma La Joliette répond à tous les goûts et préférences. Sa situation stratégique à Marseille le rend facilement accessible, vous permettant d'explorer la culture vibrante et les attractions de la ville avant ou après votre film. Le Cinéma La Joliette n'est pas seulement un lieu pour regarder des films; c'est une destination où la créativité, le confort et le divertissement se rejoignent pour une expérience cinématographique inoubliable. Venez profiter de la magie des films dans un cadre aussi captivant que les films eux-mêmes au Cinéma La Joliette.",
        adresse: "54 rue de Chanterac 13002 Marseille, France",
        téléphone: "",
        prix: "",
        images: [cinema1, cinema2, cinema3],
        avis: [
            {
                utilisateur: "Joseph",
                commentaire: "Incroyable",
                valeur: 5
            },
            {
                utilisateur: "Sandy",
                commentaire: "Elle était une bonne expérience de visiter ce cinéma",
                valeur: 3
            },
        ],
        informations_importants: {},
        path: "Activités/Cinéma_La_Joliette",
        uri: "Cinéma_La_Joliette",
        category: 'cinema'
    }
];

    const locations=[
  {
      id:1,
      nom :"Vita Loca  ",
      slogan:"Location de scooters à Marseille",
      description:"Location de Vespa afin d’explorer la région Marseillaise des plus belles calanques sur la côte bleue ou vers cassis, en passant par la corniche et ses nombreuses plages!",
      adresse:"📍8 Rue de la Loge, 13002 Marseille",
      téléphone: " 07.68.62.36.83",
      prix:" 55€ EUR",
      images:[vitaloca_vespa3,vitaloca_vespa2,vitaloca_vespa1,],
      avis: [
          {
              utilisateur: "Chloe_Bordeaux",
              commentaire: "Un service fantastique de l'Agence Vespa à Marseille! Les scooters étaient impeccables et le personnel très serviable. Nous reviendrons certainement!",
              valeur: 5  
          },
          {
              "utilisateur": "Marc_Montpellier",
              "commentaire": "J'ai adoré la facilité de location et la qualité des scooters. L'équipe est très professionnelle et attentionnée. Une expérience sans faute.",
              "valeur": 4 
          },
          {
              "utilisateur": "Isabelle_Nice",
              "commentaire": "Service rapide et efficace, avec des scooters en excellent état. Le personnel a été très sympathique et accommodant. Une belle façon de découvrir Marseille.",
              "valeur": 5 
          },
          {
              "utilisateur": "Pauline_Lille",
              "commentaire": "Super expérience! Les scooters étaient parfaits et le service client incroyable. L'Agence Vespa à Marseille est de loin la meilleure location de scooters que j'ai utilisée.",
              "valeur": 5 
          }
      ],
      informations_importants :{
          tarifs:[
              "Journée :55 EUR /65 EUR",
              "24h : 75 EUR / 85 EUR",
              "48h : 95 EUR / 105 EUR"
          ],
          conditions_de_résérvation:[],
          notes:[]
      },
      path:"locations/Vita_Loca",
      uri:"Vita_Loca"
  },
  {
      id:2,
      nom :"Fais Ta Loc",
      slogan:"Location de Vespa",
      description:"Location de Vespa sur Marseille venez découvrir Marseille ses beaux endroits et ses calanques au guidon d’un vespa",
      adresse:"8 Rue Félix éboue 13002",
      téléphone: "0749289844",
      prix:"45 EUR |Journée",
      images:[vespa1,vespa2,vespa3],
      avis: [
      {
          "utilisateur": "JeanDupont92",
          "commentaire": "Service exceptionnel! L'Agence Vespa à Marseille a rendu notre voyage inoubliable. Les scooters étaient en parfait état et le personnel très accueillant.",
          "valeur": 5 
      },
      {
          "utilisateur": "Marie_Lyon",
          "commentaire": "Quelle expérience formidable! Le service client est au top et les scooters Vespa sont parfaits pour découvrir Marseille. Je recommande vivement.",
          "valeur": 5 
      },
      {
          "utilisateur": "Lucas_Toulouse",
          "commentaire": "Agence très professionnelle avec des scooters de qualité. Le personnel est sympathique et prêt à aider. Une excellente façon d'explorer la ville!",
          "valeur": 5 
      },
      {
          "utilisateur": "Sophie_Paris",
          "commentaire": "Nous avons loué deux Vespas pour le week-end et tout s'est déroulé parfaitement. Merci à l'Agence Vespa pour leur service impeccable.",
          "valeur": 5 
      },
      {
          "utilisateur": "AlexandreNice",
          "commentaire": "Un service de première classe! Les scooters étaient comme neufs et le processus de location était rapide et simple. Très satisfait.",
          "valeur": 5 
      }
      ],
      informations_importants :{
          tarifs:[
              "Journée :45 EUR",
              "24h : 50 EUR",
              "48h : 90 EUR"
          ]
          ,
          conditions_de_résérvation:[ 
             "125cc:",
             "Caution : de 800 EUR à 1000 EUR selon modéles disponibles",
             " Age Minimum : 20 ans",
             "Permis B avec nombre d`année minimum 2 ans et la carte 125 cc ou un permis moto ",
             "piéce d`identité valide ",
             "les gants, les casque, l'antivol sont fournis avec la location ",
             "50cc:",
             "Caution : de 500 EUR ",
             " Age Minimum : 20 ans",
             "Permis B  ou un permis AM equivalent (BSR)",
             "piéce d`identité valide ",
             "les gants, les casque, l'antivol sont fournis avec la location ",
          ],
          notes:[
              "Tout acompte versé at non utilise demeurera aequis au loueur et ne fera l'objet d'aucun remboursement. De même, tout scooter restitué avant l'échéance contractuelle ne donnera lieu à aucun remboursement pour les jours restants jusqva la fin du contrat convenu.",
              "En cas de dégâts constatés sur le scooter, ceux-ci serom prélevés sur la caution versée par le locataire De plus, une déduction sera appliquée pour les jours où le scooter est immobilisé, afin de compenser les pertes de reveras encourues par le loueur."
          ]
      
      },
      path:"locations/Fais_Ta_Loc",
      uri:"Fais_Ta_Loc"

  },
];
    const opticiens=[
  {
      id:1,
      nom:"ov_optic",
      description:"Bienvenue chez ov_optic, votre expert en santé visuelle, offrant des examens de la vue précis et une large sélection de lunettes et lentilles pour un confort optimal. Découvrez notre service personnalisé au cœur de Marseille.",
      adresse:"• OV OPTIC - 93 Avenue des poilus 13013 Marseille 📞 0413203026. • OV OPTIC 2- 141 chemin de château gombert 13013 📞0491707720.",
      téléphone:"0413203026 ou 049170772",
      images:[ov_optic1,ov_optic2],
      avis: [],
      résérvation :"http://wa.me/message/SXA7U3LZYWQZO1",
      path:"Opticiens/Ov_Optic",
      uri:"Ov_Optic"

  },
  {
      id:2,
      nom:"Au Bon Oeil",
      description:"💫 Votre opticien indépendant à Marseille📍 ",
      adresse:"2 Boulevard Icard, Marseille, France 13010",
      téléphone:"+33 6 23 97 24 33",
      images:[au_bon_oeil1,au_bon_oeil2,au_bon_oeil3,au_bon_oeil4,au_bon_oeil5],
      avis: [
          {
              "utilisateur": "Lucas_R",
              "commentaire": "Super expérience! Large choix de montures et un service client irréprochable. Je suis très satisfait de mes nouvelles lunettes.",
              "valeur": 5 
          },
          {
              "utilisateur": "Marie_L",
              "commentaire": "Accueil chaleureux et professionnel. Mes enfants et moi avons trouvé des lunettes qui nous plaisent à tous. Merci, Optique Visionnaire!",
              "valeur": 5 
          }
      
      ],
      horaires:" :Lun-Jeu: 9h30-19h•Ven: 9h30-14h•Dimanche sur rdv 🗓️ 📝 Examen de vue - ordonnances en 48h ",
      résérvation :"https://vu.fr/BHqde",
      path:"Opticiens/Au_Bon_Oeil",
      uri:"Au_Bon_Oeil"


  }
];
    const coiffeurs=[
    {
        id:1,
        nom:"L’ATELIER DE ZAIDI",
        slogan:"Coiffeur - Barbier - Formateur",
        description:"Bienvenue à L'Atelier Zaidi, votre destination ultime pour une expérience de coiffure exceptionnelle. Situé au cœur de la ville, notre salon offre une atmosphère élégante et accueillante où le talent rencontre la passion. Nos barbiers experts sont dédiés à fournir des coupes de cheveux impeccables, des tailles de barbe précises et des soins personnalisés, en utilisant des techniques modernes et des produits de haute qualité. Que vous recherchiez un look classique ou une touche contemporaine, L'Atelier Zaidi est là pour sublimer votre style avec une touche d'excellence et de sophistication",
        prix:" de 15 EUR à 50 EUR",
        adresse:"87 rue de rome, Marseille, France 13006",
        téléphone:"09 88 56 30 88",
        horaires:"Lundi : 12h00 - 19h00 Mardi : 9h00 - 19h00 Mercredi : 9h00 - 19h00 Jeudi: 9h00 - 19h00 Vendredi : 9h00 - 12h00 et 14h00 - 19h00 Samedi: 9h00 - 19h00 Dimanche : Fermé",
        images:[barber1,barber2,barber3,barber4,barber5],
        avis:[
            {
                utilisateur: "John_S.",
                commentaire: "Atelier Zaidi is my go-to barber shop! The atmosphere is so welcoming, and the barbers are incredibly skilled. I always leave feeling like a million bucks!",
                valeur: 5 
            },
            {
                utilisateur: "Emily_M.",
                commentaire: "I stumbled upon Atelier Zaidi and couldn't be happier! The service was impeccable, and they really take the time to understand what you want. Highly recommend!",
                valeur: 5 
            },
            {
                utilisateur: "David_B.",
                commentaire: "Great experience at Atelier Zaidi! The staff are friendly, and the haircut was spot-on. Definitely coming back for more!",
                valeur: 4 
            },
            {
                utilisateur: "Sarah_L.",
                commentaire: "Atelier Zaidi exceeded my expectations. The attention to detail and the quality of the cut are unmatched. A gem in the neighborhood!",
                valeur: 5 
            },
            {
                utilisateur: "Michael_P.",
                commentaire: "I've been going to Atelier Zaidi for years now, and they consistently deliver top-notch service. It's not just a haircut; it's an experience!",
                valeur: 5 
            },
            {
                utilisateur: "Jessica_K.",
                commentaire: "If you're looking for a barber shop that combines style and professionalism, Atelier Zaidi is the place to go. Always satisfied with their work!",
                valeur: 5 
            }
        ],
        siteweb:"https://www.latelierzaidi.com/access-contact",
        informations_importants:{},
        path:"Coiffeurs/L'atelier_de_Zaidi",
        uri:"L'atelier_de_Zaidi",



    },

  ];
    const cafées_et_biscuitrie=[
    {
        id:1,
        nom:" DONUTS COFFEE à Marseille ",
        description:"Atmosphère conviviale et personnel accueillant, idéal pour une pause café",
        adresse:"📍: 9 Quai de la Joliette, 13002 Marseille",
        téléphone:"04.91.72.10.80",
        horaires:" Ouvert 7/7 - 10h/02h",
        prix:"prix unitaire de 2 EUR à 9 EUR ",
        images:[donut1,donut2,donut3],
        avis:[
            {
                utilisateur:'Mark_R',
                commentaire:'elle étais une des Meilleurs Donuts j\'ai jamais gouter  ',
                valeur:5
            },            
            {
                utilisateur:'Linda_B',
                commentaire:'l\'espace etais trés calme et le serveurs sont trés gentils , I Love the place and the Donut <3 !  ',
                valeur:4
            }
        ],
        siteweb:"https://linktr.ee/DonutsCoffee.fr",
        informations_importants:{},
        path:"Cafées-et-biscuitrie/DONUTS_COFFEE_à_Marseille",
        uri:"DONUTS_COFFEE_à_Marseille",
        category:'Donuts'
    },
    {
        id:2,
        nom:" 𝟙𝟠𝟘 ° Biscuiterie Artisanale ",
        description:"180° Biscuiterie Artisanale 🌟 à Marseille pour une expérience authentique et gourmande! Dégustez des spécialités locales comme les navettes et les canistrelli, toutes préparées sans colorants ni conservateurs . Options sans gluten disponibles . Rendez-vous au cœur de Bompard pour découvrir des saveurs uniques et traditionnelles! ",
        adresse:"📍39 Boulevard Bompard, Marseille 7e",
        téléphone:"",
        horaires:" Du mardi au samedi :8h30-13h et 16h-19h30 Dim : 9h-13h",
        prix:"pas Identifié ",
        images:[biscuit1,biscuit2,biscuit3],
        avis:[
            {
                utilisateur:'Jean_D',
                commentaire:" ",
                valeur:4.5
            },
            {
                utilisateur:'Lukas_S',
                commentaire:' trés bon biscuits , gentils serveurs, calme espace . bien sur je vais visiteur une autres fois quand je suis à Marseille <3',
                valeur:5
            }
        ],
        siteweb:"https://le-grand-pastis.com/180-la-biscuiterie-tradition-endoume-marseille",
        informations_importants:{},
        path:"Cafées-et-biscuitrie/180_Biscuitrie_Arisanale",
        uri:"180_Biscuitrie_Arisanale",
        category:'Biscuitrie'
        

    }

  ];
  const hébergements = [];

  const CategoryParams=[
    {
        name:"Restaurants",
        element:restaurants,
        description:"Découvrez les meilleurs restaurants de Marseille et laissez-nous vous réserver les meilleures tables ! Nous avons sélectionné pour vous les établissements les plus authentiques, des rooftops spectaculaires, des cafés pittoresques, ainsi que des restaurants festifs où l'ambiance se prolonge jusqu'au bout de la nuit.",
        filter:[],
        image:'RestoCat.jpg',
        path:'Restaurants'
    },
    {
        name:"Coiffeurs",
        element:coiffeurs,
        description:"Découvrez les meilleurs coiffeurs de Marseille et laissez-nous vous aider à trouver le salon idéal pour vos besoins capillaires ! Nous avons sélectionné pour vous les salons les plus prestigieux, des barbiers traditionnels aux studios de coiffure les plus tendance, pour que vous trouviez le style qui vous correspond parfaitement.",
        filter:[],
        image:'CoiffeurCat.jpg',
        path:'Coiffeurs'
    },
    {
        name:"Cafées et biscuitrie",
        element:cafées_et_biscuitrie,
        description:"Découvrez les meilleurs cafés et biscuiteries de Marseille et laissez-nous vous guider vers les établissements les plus charmants de la ville ! Nous avons sélectionné pour vous les cafés les plus accueillants, des salons de thé traditionnels aux pâtisseries artisanales, pour que vous puissiez savourer des moments de détente gourmande.",
        filter:[],
        image:'cafeCat.jpg',
        path:'Cafées-et-biscuitrie'
    },
    {
        name:"Opticiens",
        element:opticiens,
        description:"Découvrez les meilleurs opticiens de Marseille pour des conseils personnalisés et des lunettes adaptées à votre style et à vos besoins. Que vous recherchiez des montures tendance, des verres correcteurs de haute qualité ou des lentilles de contact, nos opticiens partenaires vous offrent une expertise et un service client exceptionnels. Prenez rendez-vous en ligne et bénéficiez d'un accompagnement professionnel pour un confort visuel optimal.",
        filter:[],
        image:'sneakersCat.jpg',
        path:'Opticiens'
    },
    {
        name:"Locations",
        element:locations,
        description:"Découvrez les meilleures options de location de voitures et de Vespas à Marseille pour explorer la ville et ses environs à votre rythme. Que vous ayez besoin d'une voiture pour un road trip ou d'une Vespa pour vous faufiler dans les ruelles pittoresques, nous avons sélectionné pour vous les meilleures offres.",
        filter:[],
        image:'sneakersCat.jpg',
        path:'Locations'
    },
    {
        name:"Activités",
        element:activités,
        description:"Marseille regorge d'activités passionnantes pour tous les goûts et tous les âges. Explorez les richesses de la ville à travers des visites guidées, des randonnées en pleine nature, des activités nautiques ou encore des ateliers créatifs. Que vous soyez en famille, entre amis ou en solo, laissez-vous séduire par notre sélection d'activités incontournables pour vivre des moments mémorables et découvrir Marseille sous un nouvel angle",
        filter:[],
        image:'sneakersCat.jpg',
        path:'Activités'
    },
   
    {
        name:"Sneakers",
        element:sneakers,
        description:"Découvrez les meilleures boutiques de sneakers à Marseille et laissez-vous séduire par les dernières tendances urbaines. Que vous soyez à la recherche de modèles exclusifs, de classiques intemporels ou de créations originales, nous avons répertorié pour vous les adresses incontournables.",
        filter:[],
        image:'sneakersCat.jpg',
        path:'Sneakers'
    },
    {
        name:"Nights club",
        element:nights_club,
        description:"Plongez dans la vie nocturne animée de Marseille en découvrant les meilleurs night clubs de la ville. De l'ambiance électrisante des discothèques aux soirées intimes des bars à cocktails, Marseille offre une multitude de lieux où faire la fête jusqu'au bout de la nuit. Dansez au rythme des DJ sets, profitez des spectacles live et savourez des cocktails raffinés dans des cadres uniques. Réservez vos soirées et préparez-vous à vivre des nuits inoubliables.",
        filter:[],
        image:'nightsClubcat.jpg',
        path:'Nights-Club'
    },
    {
        name:"Hébergements",
        element:hébergements,
        description:"Marseille offre une variété d'hébergements charmants et accueillants, adaptés à tous les budgets et préférences. Découvrez une sélection d'hôtels élégants, d'auberges conviviales et de locations de vacances confortables, chacun offrant une expérience unique au cœur de cette ville dynamique. Que vous soyez en quête de luxe, de simplicité ou d'un séjour authentique, laissez-vous séduire par notre gamme d'hébergements pour profiter pleinement de votre visite à Marseille. Vivez des moments inoubliables et faites de votre séjour une véritable escapade marseillaise.",
        filter:[],
        image:'hotelMarseille.jpg',
        path:"Hébergements"
    }
    
]

  const fr = {
      image1_phrase :" Là où le soleil méditerranéen embrasse l'âme vibrante de la France.",
      image2_phrase :" Marseille, avec ses calanques majestueuses et son vieux port pittoresque, offre une beauté naturelle et culturelle incomparable.",
      image3_phrase :" Embarquez pour un voyage à travers le temps, des ruines romaines à l'art contemporain.",
      image4_phrase :"  Laissez le rythme des vagues vous guider à travers une ville aux possibilités infinies..",
  
      resultat_de_recherche:"Resultat du Recherche",
      popup_adresse_visit_btn:"visiter",
      search_input:"Chercher Destinations",
      search_message:"entrer des mot clés avant de lancer la recherche !",
      no_result:"pas de resultats !",
  
      comp2_about_us:"à Propos de Nous",
      comp2__question: "what are you looking for ?",
      comp2_title:"Découvrez la meilleure destination à Marseille",
      comp2_paragraph:"Ce site est conçu pour vous aider à trouver votre destination idéale, que vous soyez un visiteur pour la première fois ou un habitué de la ville. Grâce à nos recommandations détaillées et à nos conseils d'experts, vous pourrez explorer les trésors cachés de Marseille et profiter pleinement de votre séjour. Naviguez facilement à travers les différentes options de loisirs, Laissez-nous être votre guide dans cette magnifique ville méditerranéenne. ",
      comp2_button:" Meilleur Destination ",
  
      comp1_what_to_search :"Qu'est ce que vous cherchez ?",
      comp1_title:"Meilleurs Destinations",
      comp1_paragraph:"Explorez la culture vibrante, les paysages époustouflants et les trésors cachés de Marseille, votre escapade parfaite vous attend ! ",

      best_restaurants:"Meilleurs Restaurants De Marseille",
      slider_title:"Découvrez les restaurants les mieux notés de Marseille !",
      Restaurants:"Restaurants",
      slider_button:"Explorer plus",
      explore:"Explorer",
  
      category_filter1:"Pizzeria",
      category_filter2:"Tacos",
      category_filter3:"Fruit de mer",
      category_filter4:"Italien cuisine",
      category_filter5:"traditionnelle",
      category_filter6:"Tropical",
      category_filter7:"Donuts",
      category_filter8:"Biscuitrie",
      category_filter9:"Nettoyage et Restauration",
      category_filter10:"Cinéma",
  
      description_title:"Description",
      form_title:'Formulaire de Réservation :',
      form_name_placeholder:"Nom complet",
      form_email_placeholde:"Votre Email",
      form_phone_placeholde:"Votre Numero de Téléphone",
      form_nbre_adultes_placeholder:"Nombre d'adultes",
      form_nbre_enfants_placeholder:"Nombre d'enfants",
      date:"Date",
      hour:"heure",
      message:"Votre message",
      form_submit_default:"Envoyer",
      form_submit_loading:"Envoi...",

      alert_reservation :" pour réserver remplir le formulaire ci-dessus ",


      avis:"Avis",
      not_found:" not found",
      prix:"Prix",
      Horaires:"Horaires",
      Notation:"Horaires",
      conditions_de_résérvation:"conditions de réservation",
  
      nights_club: [
        {
          id: 1,
          nom: "LE ROOFTOP",
          slogan: "Le rooftop le plus exceptionnel d’Europe",
          description: "Nouveauté au Rooftop ! Accès gratuit de 19h à 21h. Après une longue journée de travail, relaxez-vous face à un somptueux coucher de soleil, un cocktail en main, et dégustez nos planches gourmandes pour une expérience inoubliable. Restez pour la soirée et découvrez nos différents univers…",
          prix: "à partir de 100 EUR",
          adresse: "Les Terrasses du Port, 9 Quai du Lazaret 13002 - Marseille",
          téléphone: "06 70 36 78 35",
          horaires: "19h00 - 2h00",
          images: [rooftop1, rooftop2, rooftop3, rooftop4, rooftop5, rooftop6, rooftop7, rooftop8],
          avis: [
            {
              utilisateur: "Alex R.",
              commentaire: "Rooftop est l'endroit où il faut être le samedi soir ! La musique est toujours au top, et l'ambiance est électrique. J'ai hâte d'y retourner!",
              valeur: 5 
            },
            {
              utilisateur: "Mia T.",
              commentaire: "J'ai passé un moment incroyable au Rooftop ! Les DJs sont de premier ordre et les boissons sont à un prix raisonnable. Définitivement mon nouvel endroit préféré.",
              valeur: 4
            },
            {
              utilisateur: "James L.",
              commentaire: "Super ambiance et système de son fantastique au Rooftop. La foule est vivante et amicale. Parfait pour une soirée entre amis.",
              valeur: 5
            },
            {
              utilisateur: "Sophie H.",
              commentaire: "Le Rooftop ne déçoit jamais. Le personnel est amical, la décoration est élégante et la piste de danse est toujours pleine. Je recommande fortement !",
              valeur: 5
            },
            {
              utilisateur: "Daniel M.",
              commentaire: "J'ai adoré mon expérience au Rooftop. L'éclairage et les visuels sont incroyables et l'énergie globale est contagieuse. Un endroit à visiter absolument !",
              valeur: 4
            },
            {
              utilisateur: "Lily S.",
              commentaire: "Le Rooftop est la meilleure boîte de nuit de la ville ! La sélection musicale est variée et l'ambiance est parfaite pour une nuit de danse et de fun.",
              valeur: 5
            }
          ],
          siteweb: "https://lerooftopdesterrasses.com",
          informations_importants: {},
          path: "Nights-club/LE_ROOFTOP",
          uri: "LE_ROOFTOP"
        },
        {
          id: 2,
          nom: "LE SPORT BEACH",
          slogan: "SportBEACH",
          description: "SportBeach est la destination ultime pour ceux qui cherchent à profiter d'un parfait mélange de vie nocturne vibrante et de cuisine exquise. Situé le long de la pittoresque plage, SportBeach offre des vues à couper le souffle qui créent le cadre idéal pour une nuit inoubliable.",
          prix: "",
          adresse: "📍138 avenue Pierre Mendès France, 13008 Marseille",
          téléphone: "04 91 76 12 35",
          horaires: "Lundi : 10h00 – 19h00 | Mardi : 10h00 – 02h00 | Mercredi : 10h00 – 02h00 | Jeudi : 10h00 – 02h00 | Vendredi : 10h00 – 02h00 | Samedi : 10h00 – 02h00 | Dimanche : 10h00 – 02h00",
          images: [sportbeach1, sportbeach2, sportbeach3, sportbeach4],
          avis: [
            {
              utilisateur: "Alex R.",
              commentaire: "SportBeach est l'endroit idéal pour une sortie nocturne ! La combinaison de la bonne musique, de la nourriture délicieuse et des vues à couper le souffle est imbattable. Je recommande vivement !",
              valeur: 5
            },
            {
              utilisateur: "Mia T.",
              commentaire: "J'ai passé un moment incroyable au SportBeach ! L'ambiance est fantastique, les DJs sont excellents et la nourriture est de première qualité. J'ai hâte de revenir !",
              valeur: 4
            },
            {
              utilisateur: "James L.",
              commentaire: "SportBeach offre une expérience inoubliable.",
              valeur: 5
            }
          ],
          siteweb: "https://sportbeach.fr",
          informations_importants: {},
          path: "Nights-club/LE_SPORT_BEACH",
          uri: "LE_SPORT_BEACH"
        }
      ],
      sneakers : [
        {
          id: 1,
          nom: "SAS GALERIE SNEAKERS",
          description: "Bienvenue à SAS Galerie, la destination incontournable pour les passionnés de baskets et les adeptes de la mode. Située au cœur de la ville Marseille, SAS Galerie offre une sélection inégalée des dernières baskets les plus recherchées des grandes marques mondiales.",
          adresse: "📍14 rue Montgrand, 13006 Marseille",
          téléphone: "",
          images: [sasgalerie1, sasgalerie2, sasgalerie3, sasgalerie4],
          horaires: "•Lundi——>Samedi📌 •10H——> 19H🕖",
          siteweb: "https://sasgalerie.com",
          informations_importants: {},
          path: "Sneakers/SAS_GALERIE_SNEAKERS",
          uri: "SAS_GALERIE_SNEAKERS",
          avis: [
            {
              utilisateur: 'Mauris_H',
              commentaire: 'Le magasin est riche en modèles et moderne, j\'aime beaucoup.',
              valeur: 5
            }
          ]
        },
        {
          id: 2,
          nom: "L’Atelier de la Basket",
          description: "L'atelier de la basket est le premier service en ligne de nettoyage, restauration de chaussures de luxe et sneakers de collection & spécialiste du custom. Vous pouvez aussi nous retrouver dans nos points de vente de Marseille et Paris.",
          adresse: "📍4 rue Montgrand, Marseille, France 13006",
          téléphone: "",
          images: [basket1, basket2, basket3, basket4, basket5, basket6],
          horaires: "Du lundi au samedi 11h00-12h15 / 13h15-19h00",
          siteweb: "https://www.latelierdelabasket.com",
          informations_importants: {},
          path: "Sneakers/L'Atelier_de_la_Basket",
          uri: "L'Atelier_de_la_Basket",
          category: 'nettoyage et restauration',
          avis: [
            {
              utilisateur: 'Lilia',
              commentaire: 'J\'ai nettoyé mes espadrilles chez ce magasin, le résultat était incroyable.',
              valeur: 5
            },
            {
              utilisateur: 'Adam_B',
              commentaire: 'Très beau magasin de sneakers.',
              valeur: 4
            }
          ]
        },
        {
          id: 3,
          nom: "OS Sneakers",
          description: "Découvrez les dernières sorties et les baskets les plus exclusives chez OS Sneakers, votre destination incontournable pour tout ce qui concerne les chaussures. Restez à la pointe des tendances avec notre sélection de baskets haut de gamme et authentiques des meilleures marques mondiales.",
          adresse: "📍67 rue Francis Davso, 13001 Marseille",
          téléphone: "09.50.37.75.47 | 07.86.38.67.33",
          images: [OS1, OS2, OS3, OS4],
          horaires: "",
          siteweb: "",
          informations_importants: {},
          path: "Sneakers/OS_Sneakers",
          uri: "OS_Sneakers",
          avis: [
            {
              utilisateur: 'Ilyas_L',
              commentaire: 'J\'ai trouvé chez ce magasin les dernières sorties et mes espadrilles sneakers préférées.',
              valeur: 5
            }
          ]
        }
      ],
      activités:[
        {
            id: 1,
            nom: "Cinéma La Joliette",
            slogan: "Cinéma",
            description: "Découvrez l'expérience vibrante et innovante du Cinéma La Joliette, situé au cœur de Marseille, France. Ce cinéma est un véritable chef-d'œuvre de design moderne, avec une disposition unique et colorée des sièges qui améliore votre expérience cinématographique. Avec son mélange ludique de poufs, de chaises rembourrées confortables et un schéma de couleurs dynamique, le Cinéma La Joliette crée une atmosphère accueillante et cosy pour tous les visiteurs. Le cinéma offre une sélection diversifiée de films, allant des derniers blockbusters aux films indépendants et internationaux. Que vous soyez un cinéphile ou que vous cherchiez simplement à passer une soirée amusante, le Cinéma La Joliette répond à tous les goûts et préférences. Sa situation stratégique à Marseille le rend facilement accessible, vous permettant d'explorer la culture vibrante et les attractions de la ville avant ou après votre film. Le Cinéma La Joliette n'est pas seulement un lieu pour regarder des films; c'est une destination où la créativité, le confort et le divertissement se rejoignent pour une expérience cinématographique inoubliable. Venez profiter de la magie des films dans un cadre aussi captivant que les films eux-mêmes au Cinéma La Joliette.",
            adresse: "54 rue de Chanterac 13002 Marseille, France",
            téléphone: "",
            prix: "",
            images: [cinema1, cinema2, cinema3],
            avis: [
                {
                    utilisateur: "Joseph",
                    commentaire: "Incroyable",
                    valeur: 5
                },
                {
                    utilisateur: "Sandy",
                    commentaire: "Elle était une bonne expérience de visiter ce cinéma",
                    valeur: 3
                },
            ],
            informations_importants: {},
            path: "Activités/Cinéma_La_Joliette",
            uri: "Cinéma_La_Joliette",
            category: 'cinema'
        }
    ],
    locations:[
      {
          id:1,
          nom :"Vita Loca  ",
          slogan:"Location de scooters à Marseille",
          description:"Location de Vespa afin d’explorer la région Marseillaise des plus belles calanques sur la côte bleue ou vers cassis, en passant par la corniche et ses nombreuses plages!",
          adresse:"📍8 Rue de la Loge, 13002 Marseille",
          téléphone: " 07.68.62.36.83",
          prix:" 55€ EUR",
          images:[vitaloca_vespa3,vitaloca_vespa2,vitaloca_vespa1,],
          avis: [
              {
                  utilisateur: "Chloe_Bordeaux",
                  commentaire: "Un service fantastique de l'Agence Vespa à Marseille! Les scooters étaient impeccables et le personnel très serviable. Nous reviendrons certainement!",
                  valeur: 5  
              },
              {
                  "utilisateur": "Marc_Montpellier",
                  "commentaire": "J'ai adoré la facilité de location et la qualité des scooters. L'équipe est très professionnelle et attentionnée. Une expérience sans faute.",
                  "valeur": 4 
              },
              {
                  "utilisateur": "Isabelle_Nice",
                  "commentaire": "Service rapide et efficace, avec des scooters en excellent état. Le personnel a été très sympathique et accommodant. Une belle façon de découvrir Marseille.",
                  "valeur": 5 
              },
              {
                  "utilisateur": "Pauline_Lille",
                  "commentaire": "Super expérience! Les scooters étaient parfaits et le service client incroyable. L'Agence Vespa à Marseille est de loin la meilleure location de scooters que j'ai utilisée.",
                  "valeur": 5 
              }
          ],
          informations_importants :{
              tarifs:[
                  "Journée :55 EUR /65 EUR",
                  "24h : 75 EUR / 85 EUR",
                  "48h : 95 EUR / 105 EUR"
              ],
              conditions_de_résérvation:[],
              notes:[]
          },
          path:"locations/Vita_Loca",
          uri:"Vita_Loca"
      },
      {
          id:2,
          nom :"Fais Ta Loc",
          slogan:"Location de Vespa",
          description:"Location de Vespa sur Marseille venez découvrir Marseille ses beaux endroits et ses calanques au guidon d’un vespa",
          adresse:"8 Rue Félix éboue 13002",
          téléphone: "0749289844",
          prix:"45 EUR |Journée",
          images:[vespa1,vespa2,vespa3],
          avis: [
          {
              "utilisateur": "JeanDupont92",
              "commentaire": "Service exceptionnel! L'Agence Vespa à Marseille a rendu notre voyage inoubliable. Les scooters étaient en parfait état et le personnel très accueillant.",
              "valeur": 5 
          },
          {
              "utilisateur": "Marie_Lyon",
              "commentaire": "Quelle expérience formidable! Le service client est au top et les scooters Vespa sont parfaits pour découvrir Marseille. Je recommande vivement.",
              "valeur": 5 
          },
          {
              "utilisateur": "Lucas_Toulouse",
              "commentaire": "Agence très professionnelle avec des scooters de qualité. Le personnel est sympathique et prêt à aider. Une excellente façon d'explorer la ville!",
              "valeur": 5 
          },
          {
              "utilisateur": "Sophie_Paris",
              "commentaire": "Nous avons loué deux Vespas pour le week-end et tout s'est déroulé parfaitement. Merci à l'Agence Vespa pour leur service impeccable.",
              "valeur": 5 
          },
          {
              "utilisateur": "AlexandreNice",
              "commentaire": "Un service de première classe! Les scooters étaient comme neufs et le processus de location était rapide et simple. Très satisfait.",
              "valeur": 5 
          }
          ],
          informations_importants :{
              tarifs:[
                  "Journée :45 EUR",
                  "24h : 50 EUR",
                  "48h : 90 EUR"
              ]
              ,
              conditions_de_résérvation:[ 
                 "125cc:",
                 "Caution : de 800 EUR à 1000 EUR selon modéles disponibles",
                 " Age Minimum : 20 ans",
                 "Permis B avec nombre d`année minimum 2 ans et la carte 125 cc ou un permis moto ",
                 "piéce d`identité valide ",
                 "les gants, les casque, l'antivol sont fournis avec la location ",
                 "50cc:",
                 "Caution : de 500 EUR ",
                 " Age Minimum : 20 ans",
                 "Permis B  ou un permis AM equivalent (BSR)",
                 "piéce d`identité valide ",
                 "les gants, les casque, l'antivol sont fournis avec la location ",
              ],
              notes:[
                  "Tout acompte versé at non utilise demeurera aequis au loueur et ne fera l'objet d'aucun remboursement. De même, tout scooter restitué avant l'échéance contractuelle ne donnera lieu à aucun remboursement pour les jours restants jusqva la fin du contrat convenu.",
                  "En cas de dégâts constatés sur le scooter, ceux-ci serom prélevés sur la caution versée par le locataire De plus, une déduction sera appliquée pour les jours où le scooter est immobilisé, afin de compenser les pertes de reveras encourues par le loueur."
              ]
          
          },
          path:"locations/Fais_Ta_Loc",
          uri:"Fais_Ta_Loc"
  
      },
    ],
    opticiens:[
      {
          id:1,
          nom:"ov_optic",
          description:"Bienvenue chez ov_optic, votre expert en santé visuelle, offrant des examens de la vue précis et une large sélection de lunettes et lentilles pour un confort optimal. Découvrez notre service personnalisé au cœur de Marseille.",
          adresse:"• OV OPTIC - 93 Avenue des poilus 13013 Marseille 📞 0413203026. • OV OPTIC 2- 141 chemin de château gombert 13013 📞0491707720.",
          téléphone:"0413203026 ou 049170772",
          images:[ov_optic1,ov_optic2],
          avis: [],
          résérvation :"http://wa.me/message/SXA7U3LZYWQZO1",
          path:"Opticiens/Ov_Optic",
          uri:"Ov_Optic"
  
      },
      {
          id:2,
          nom:"Au Bon Oeil",
          description:"💫 Votre opticien indépendant à Marseille📍 ",
          adresse:"2 Boulevard Icard, Marseille, France 13010",
          téléphone:"+33 6 23 97 24 33",
          images:[au_bon_oeil1,au_bon_oeil2,au_bon_oeil3,au_bon_oeil4,au_bon_oeil5],
          avis: [
              {
                  "utilisateur": "Lucas_R",
                  "commentaire": "Super expérience! Large choix de montures et un service client irréprochable. Je suis très satisfait de mes nouvelles lunettes.",
                  "valeur": 5 
              },
              {
                  "utilisateur": "Marie_L",
                  "commentaire": "Accueil chaleureux et professionnel. Mes enfants et moi avons trouvé des lunettes qui nous plaisent à tous. Merci, Optique Visionnaire!",
                  "valeur": 5 
              }
          
          ],
          horaires:" :Lun-Jeu: 9h30-19h•Ven: 9h30-14h•Dimanche sur rdv 🗓️ 📝 Examen de vue - ordonnances en 48h ",
          résérvation :"https://vu.fr/BHqde",
          path:"Opticiens/Au_Bon_Oeil",
          uri:"Au_Bon_Oeil"
  
  
      }
    ],
    restaurants :[
      {
          id:1,
          nom:" restaurant le 24",
          slogan:"Spécialités de homard, poissons et fruits de mer",
          description:"Notre restaurant le 24 vous accueille dans un cadre agréable pour déguster des plats de haute qualité. Spécialisés en cuisine française revisitée, nous vous proposons des menus variés, remodelés de façon saisonnière, inspirés des tendances culinaires des 5 continents.",
          adresse:" 24 rue falque 13006 marseille",
          téléphone:"06.58.06.92.40",
          prix:"Prix moyen 39 €",
          horaires:"Mar-vend :12H-15H & 19H -23H Ven & Sam jusqu’à 00:00",
          images:[Restau241,Restau242,Restau243,Restau244,Restau245],
          avis:[ 
              {
                  utilisateur:"LAURENT_L",
                  valeur: 5 ,
                  commentaire:"De passage sur Marseille envie d'un Brunch familial. Découvert par hasard sur internet. Je recommande grandement ce lieu accueil chaleureux, équipe dynamique et serviable. A essayer de toute urgence."
              },
              {
                  utilisateur:"MARIO_C",
                  valeur:5 ,
                  commentaire:"C’était excellent, l’équipe au top la décoration c’était magnifique 🤩"
              },
              {
                  utilisateur:"SABRINA_L",
                  valeur:5 ,
                  commentaire:"Nous avons passé un moment très agréable dans ce restaurant à la déco superbe. Les plats étaient excellents et le café merveilleux. service au top. Le seul bémol est la fumée des cuisines en salle. Je recommande fortement cette adresse à tous les épicuriens !"
              }
  
          ],
          siteweb:"https://www.lerestaurant24.fr",
          informations_importants:{},
          path:"Restaurants/Restaurant_Le_24",
          uri:"Restaurant_Le_24",
          category:"fruit_de_mer"
  
  
  
      },
      {
          id:2,
          nom:" the jungle marseille",
          slogan:"🅑🅡🅤🅝🅒🅗&🅛🅤🅝🅒🅗",
          description:"Plongez dans une oasis tropicale au cœur de Marseille avec The Jungle Restaurant. Dégustez des plats exotiques et des cocktails vibrants entourés d'une verdure luxuriante et d'une ambiance captivante. Parfait pour une expérience culinaire unique.",
          adresse:"📍68 Rue Breteuil 13006",
          téléphone:"",
          prix:"",
          horaires:"• Mardi au vendredi : 10h30-16h • Week-end : 10h-16h Fermeture cuisine 15h",
          images:[jungle1,jungle2,jungle3,jungle4,jungle5,jungle6],
          avis:[
              {
                  utilisateur: "Claire_D",
                  commentaire: "Une expérience culinaire exceptionnelle! Les plats sont délicieux et l'ambiance tropicale est magnifique. Je recommande fortement!",
                  valeur: 5
              },
              {
                  utilisateur: "Julien_M",
                  commentaire: "Un cadre incroyable et une cuisine exotique savoureuse. The Jungle est le meilleur endroit pour une soirée mémorable à Marseille.",
                  valeur: 5 
              },
              {
                  utilisateur: "Sophie_T",
                  commentaire: "Service impeccable et décoration magnifique. Les cocktails sont aussi beaux que bons. Une adresse incontournable!",
                  valeur: 5 
              },
              {
                  utilisateur: "Marc_R",
                  commentaire: "Atmosphère unique et nourriture délicieuse. Nous avons passé une soirée fantastique. Merci à toute l'équipe de The Jungle!",
                  valeur: 5 
              },
              {
                  utilisateur: "Elodie_L",
                  commentaire: "Une découverte surprenante! Les plats sont originaux et bien présentés, et l'ambiance est magique. À essayer absolument.",
                  valeur: 5 
              }
          ], 
          siteweb:"https://vu.fr/xSlT",
          informations_importants:{},
          path:"Restaurants/the_jungle_marseille",
          uri:"the_jungle_marseille",
          category:"tropical"
  
      },
      {
          id:3,
          nom:" LE SPLENDIDO",
          slogan:"Tutto è fatto in casa ❤️",
          description:"Que diriez-vous d’une escapade Italienne en plein centre de Marseille ?Le Splendido est un restaurant italien, avec des décors plus surprenants les uns que les autres.Entre les pates à la truffes et les pizzas, vos papilles découvrirons le bon goût de l’Italie.",
          adresse:"📍 16-18 rue de la République, 13001 Marseille",
          téléphone:"",
          prix:"",
          horaires:"• Mardi au vendredi : 10h30-16h • Week-end : 10h-16h Fermeture cuisine 15h",
          images:[splendido1,splendido2,splendido3,splendido4,splendido5,splendido6],
          avis: [
              {
                  utilisateur: "Laura_B",
                  commentaire: "Une escapade italienne parfaite en plein Marseille! Les pâtes à la truffe sont à tomber et les pizzas délicieuses. Le décor est aussi magnifique.",
                  valeur: 5 
              },
              {
                  utilisateur: "Nicolas_V",
                  commentaire: "Le Splendido offre une expérience culinaire authentique avec un décor époustouflant. Les saveurs italiennes sont au rendez-vous, je reviendrai sans hésiter.",
                  valeur: 5 
              },
              {
                  utilisateur: "Elodie_P",
                  commentaire: "Un cadre magnifique et des plats savoureux. Les pâtes à la truffe sont un must et les pizzas sont excellentes. Une vraie découverte!",
                  valeur: 5
              },
              {
                  utilisateur: "Thomas_L",
                  commentaire: "Ambiance chaleureuse et cuisine italienne de qualité. Le Splendido est désormais mon restaurant italien préféré à Marseille.",
                  valeur: 5
              }
          ], 
          siteweb:"https://www.sevenrooms.com/reservations/bigmamma/ig?venues=pizzeriapopolarebourse%2Cmammaprimiparis%2Ceastmamma%2Cpinkmamma%2Cobermamma%2Cbigloveparis%2Clibertinoparis%2Cpalatinorestaurant%2Cgiacomomontecarlo%2CCarmelolyon%2Csplendidomarseille%2Cbellezzavieuxlille",
          informations_importants:{},
          path:"Restaurants/Le_Splendido",
          uri:"Le_Splendido",
          category:"italien"
  
  
      },
      {
          id:4,
          nom:"LA TABLE D’AUGUSTINE",
          slogan:"Cuisine traditionnelle provençale",
          description:"La Table d'Augustine à Marseille vous invite à découvrir une cuisine provençale authentique, inspirée des recettes de grand-mère Augustine. Situé sur la pittoresque place des Augustines, le restaurant propose des plats traditionnels aux saveurs méditerranéennes, préparés avec des produits locaux de qualité. Profitez d'une ambiance chaleureuse et d'un décor charmant pour une expérience culinaire mémorable.",
          adresse:"📍 12 place des Augustines, 13002 Marseille",
          téléphone:"0786271126",
          prix:"",
          horaires:"du MIDI et du SOIR",
          images:[latable1,latable2,latable3,latable4],
          avis:  [
              {
                  utilisateur: "Marie_P",
                  commentaire: "Une expérience culinaire exceptionnelle! Les plats sont délicieux et authentiques, avec une touche provençale. Le cadre est charmant et chaleureux.",
                  valeur:5
              },
              {
                  utilisateur: "Jean_L",
                  commentaire: "Un restaurant incontournable à Marseille. La cuisine est savoureuse et l'ambiance est parfaite pour un dîner en famille ou entre amis.",
                  valeur: 5
              },
              {
                  utilisateur: "Sophie_M",
                  commentaire: "Service impeccable et plats exquis. J'ai adoré la touche personnelle des recettes de grand-mère Augustine. Je reviendrai sans hésiter.",
                  valeur: 5
              },
              {
                  utilisateur: "Lucas_R",
                  commentaire: "Un véritable voyage culinaire en Provence! Les ingrédients sont frais et locaux, et chaque plat est préparé avec soin. Très recommandé.",
                  valeur: 5
              }
          ], 
          siteweb:"https://latabledaugustine.fr/fr/booking",
          informations_importants:{
              notes:"Les réservations sont possibles pour les services du MIDI et du SOIR. N’hésitez pas à nous contacter au 07 86 27 11 26. Pour les événements ou les groupes, envoyez nous votre demande par mail à latabledaugustine@gmail.com. Merci et à très vite."
          } ,
          path:"Restaurants/La_Table_D'augustine",
          uri:"La_Table_D'augustine",
          category:"traditionnelle"
  
      },
      {
          id:5,
          nom:"Pizzeria L’eau à la bouche",
          slogan:"🍕 Sur place ou à emporter",
          description:"C'est à Marseille, sur la promenade de la Corniche à l'entrée de l'anse de Malmousque, au carrefour d'Endoume, qu'un petit cabanon coloré, pas plus grand qu'un mouchoir de poche, dans le charme d'une habitation marseillaise a été transformée en une pizzeria qui vous séduira par son authenticité. Une terrasse, un étage et 3 tables au comptoir, mais surtout un décor qui amusera aussi bien les petits que les grands.Les pizzas sont à déguster sur place ou à emporter dans le secteur du mardi midi au dimanche soir. Les livraisons sont assurées uniquement en basse saison : du mois d'octobre au mois de mai.Les réservations et commandes sont conseillées et se font uniquement par téléphone au 04.91.52.16.16 Paiements acceptés: CB, chèque avec Carte national d'identité, espèces",
          adresse:"120 corniche kennedy, Marseille, France 13007",
          téléphone:"04.91.52.16.16",
          prix:"",
          horaires:" Du mardi au dimanche 12h-15h & 18h-23h",
          images:[leaudanslabouche1,leaudanslabouche2,leaudanslabouche3,leaudanslabouche4],
          avis: [], 
          siteweb:"https://pizzerialeaualabouche.fr",
          informations_importants:{
          notes:"Les réservations sont possibles pour les services du MIDI et du SOIR. Merci et à très vite."
          },
          path:"Restaurants/Pizzeria_Leau_à_La_Bouche",
          uri:"Pizzeria_Leau_à_La_Bouche",
          category:"pizzeria"
          
  
      },
      {
          id:6,
          nom:"New School Tacos Marseille",
          slogan:"🇫🇷Véritable frenchtacos à Marseille 🤙🏼Osez le goût du vrai🤙🏼",
          description:"Découvrez New School Tacos, où tradition et innovation se rencontrent pour offrir des tacos savoureux et uniques. Situé en ville, ce restaurant propose des ingrédients frais et des recettes authentiques pour une expérience culinaire inoubliable.",
          adresse:"📍Marseille 24 rue vacon 13001",
          téléphone:"04.91.72.10.80",
          prix:"",
          horaires:"",
          images:[newTacos1,newTacos2,newTacos3],
          avis:[
              {
                  utilisateur: "Alice P.",
                  commentaire: "New School Tacos propose les meilleurs tacos de la ville ! Les ingrédients sont toujours frais et les saveurs incroyables. Un vrai régal !",
                  valeur:5
              },
              {
                  utilisateur: "Marc D.",
                  commentaire: "Super expérience chez New School Tacos. Les portions sont généreuses et les recettes sont innovantes. J'y retournerai sans hésiter.",
                  valeur:4
              },
              {
                  utilisateur: "Sophie L.",
                  commentaire: "J'adore ce restaurant ! Les tacos sont délicieux et l'ambiance est conviviale. Le service est rapide et les prix sont raisonnables.",
                  valeur:5
              },
              {
                  utilisateur: "Lucas M.",
                  commentaire: "Très satisfait de ma visite à New School Tacos. Les saveurs sont authentiques et les tacos sont bien garnis. Je recommande vivement !",
                  valeur:4 
              },
              {
                  utilisateur: "Emma R.",
                  commentaire: "Une découverte fantastique ! Les tacos sont savoureux et variés. Le personnel est accueillant et le cadre est agréable.",
                  valeur:5
              },
              {
                  utilisateur: "Julien B.",
                  commentaire: "New School Tacos est devenu mon endroit préféré pour les tacos. Les ingrédients de qualité et les recettes originales en font un lieu incontournable.",
                  valeur:5
              }
          ],
          siteweb:"https://newschooltacos.fr",
          informations_importants:{},
          path:"Restaurants/New_School_Tacos_Marseille",
          uri:"New_School_Tacos_Marseille",
          category:"tacos"
  
  
      },
      {
          id:7,
          nom:"Marcella Trattoria",
          slogan:"Pasta Fresca 🍝, pizze 🍕, produits frais de saison , tutto è fatto a mano !",
          description:"Explore the flavors of Italy at Marcella Trattoria, where tradition meets innovation in every dish. Nestled in the heart of [location], our restaurant offers an authentic Italian dining experience with a modern twist. From freshly made pasta to artisanal pizzas and delectable desserts, each bite is a journey through the diverse regions of Italy. Whether you're enjoying a romantic dinner for two or hosting a special celebration, Marcella Trattoria promises an unforgettable culinary experience infused with passion and flavor.",
          adresse:"📍1140 rue andré ampère, place Actimart, Aix-en-Provence, France 13290",
          téléphone:"04 12 20 03 05",
          prix:"",
          horaires:"Ouvert du lundi au vendredi midi.",
          images:[marcela1,marcela2,marcela3,marcela4,marcela5],
          avis:[
              {
                  utilisateur: "Albert L.",
                  commentaire: "Marcella Trattoria offre une expérience culinaire italienne authentique. Les pâtes fraîches et les pizzas artisanales sont tout simplement délicieuses. Un endroit incontournable !",
                  valeur: 5
              },
              {
                  utilisateur: "Julien R.",
                  commentaire: "J'ai adoré chaque moment passé à Marcella Trattoria. Le service est impeccable et les plats sont préparés avec soin et passion. Je reviendrai certainement.",
                  valeur: 4
              }
          ],
          siteweb:"",
          informations_importants:{},
          path:"Restaurants/Marcella_Trattoria",
          uri:"Marcella_Trattoria",
          category:'italien'
  
  
      }
  
    ],
    coiffeurs:[
      {
          id:1,
          nom:"L’ATELIER DE ZAIDI",
          slogan:"Coiffeur - Barbier - Formateur",
          description:"Bienvenue à L'Atelier Zaidi, votre destination ultime pour une expérience de coiffure exceptionnelle. Situé au cœur de la ville, notre salon offre une atmosphère élégante et accueillante où le talent rencontre la passion. Nos barbiers experts sont dédiés à fournir des coupes de cheveux impeccables, des tailles de barbe précises et des soins personnalisés, en utilisant des techniques modernes et des produits de haute qualité. Que vous recherchiez un look classique ou une touche contemporaine, L'Atelier Zaidi est là pour sublimer votre style avec une touche d'excellence et de sophistication",
          prix:" de 15 EUR à 50 EUR",
          adresse:"87 rue de rome, Marseille, France 13006",
          téléphone:"09 88 56 30 88",
          horaires:"Lundi : 12h00 - 19h00 Mardi : 9h00 - 19h00 Mercredi : 9h00 - 19h00 Jeudi: 9h00 - 19h00 Vendredi : 9h00 - 12h00 et 14h00 - 19h00 Samedi: 9h00 - 19h00 Dimanche : Fermé",
          images:[barber1,barber2,barber3,barber4,barber5],
          avis:[
              {
                  utilisateur: "John_S.",
                  commentaire: "Atelier Zaidi is my go-to barber shop! The atmosphere is so welcoming, and the barbers are incredibly skilled. I always leave feeling like a million bucks!",
                  valeur: 5 
              },
              {
                  utilisateur: "Emily_M.",
                  commentaire: "I stumbled upon Atelier Zaidi and couldn't be happier! The service was impeccable, and they really take the time to understand what you want. Highly recommend!",
                  valeur: 5 
              },
              {
                  utilisateur: "David_B.",
                  commentaire: "Great experience at Atelier Zaidi! The staff are friendly, and the haircut was spot-on. Definitely coming back for more!",
                  valeur: 4 
              },
              {
                  utilisateur: "Sarah_L.",
                  commentaire: "Atelier Zaidi exceeded my expectations. The attention to detail and the quality of the cut are unmatched. A gem in the neighborhood!",
                  valeur: 5 
              },
              {
                  utilisateur: "Michael_P.",
                  commentaire: "I've been going to Atelier Zaidi for years now, and they consistently deliver top-notch service. It's not just a haircut; it's an experience!",
                  valeur: 5 
              },
              {
                  utilisateur: "Jessica_K.",
                  commentaire: "If you're looking for a barber shop that combines style and professionalism, Atelier Zaidi is the place to go. Always satisfied with their work!",
                  valeur: 5 
              }
          ],
          siteweb:"https://www.latelierzaidi.com/access-contact",
          informations_importants:{},
          path:"Coiffeurs/L'atelier_de_Zaidi",
          uri:"L'atelier_de_Zaidi",
  
  
  
      },
  
    ],
    cafées_et_biscuitrie:[
      {
          id:1,
          nom:" DONUTS COFFEE à Marseille ",
          description:"Atmosphère conviviale et personnel accueillant, idéal pour une pause café",
          adresse:"📍: 9 Quai de la Joliette, 13002 Marseille",
          téléphone:"04.91.72.10.80",
          horaires:" Ouvert 7/7 - 10h/02h",
          prix:"prix unitaire de 2 EUR à 9 EUR ",
          images:[donut1,donut2,donut3],
          avis:[
              {
                  utilisateur:'Mark_R',
                  commentaire:'elle étais une des Meilleurs Donuts j\'ai jamais gouter  ',
                  valeur:5
              },            
              {
                  utilisateur:'Linda_B',
                  commentaire:'l\'espace etais trés calme et le serveurs sont trés gentils , I Love the place and the Donut <3 !  ',
                  valeur:4
              }
          ],
          siteweb:"https://linktr.ee/DonutsCoffee.fr",
          informations_importants:{},
          path:"Cafées-et-biscuitrie/DONUTS_COFFEE_à_Marseille",
          uri:"DONUTS_COFFEE_à_Marseille",
          category:'Donuts'
      },
      {
          id:2,
          nom:" 𝟙𝟠𝟘 ° Biscuiterie Artisanale ",
          description:"180° Biscuiterie Artisanale 🌟 à Marseille pour une expérience authentique et gourmande! Dégustez des spécialités locales comme les navettes et les canistrelli, toutes préparées sans colorants ni conservateurs . Options sans gluten disponibles . Rendez-vous au cœur de Bompard pour découvrir des saveurs uniques et traditionnelles! ",
          adresse:"📍39 Boulevard Bompard, Marseille 7e",
          téléphone:"",
          horaires:" Du mardi au samedi :8h30-13h et 16h-19h30 Dim : 9h-13h",
          prix:"pas Identifié ",
          images:[biscuit1,biscuit2,biscuit3],
          avis:[
              {
                  utilisateur:'Jean_D',
                  commentaire:" ",
                  valeur:4.5
              },
              {
                  utilisateur:'Lukas_S',
                  commentaire:' trés bon biscuits , gentils serveurs, calme espace . bien sur je vais visiteur une autres fois quand je suis à Marseille <3',
                  valeur:5
              }
          ],
          siteweb:"https://le-grand-pastis.com/180-la-biscuiterie-tradition-endoume-marseille",
          informations_importants:{},
          path:"Cafées-et-biscuitrie/180_Biscuitrie_Arisanale",
          uri:"180_Biscuitrie_Arisanale",
          category:'Biscuitrie'
          
  
      }
  
    ],
    hébergements :[],
    TopDestinations:[
      {
          name:"Restaurants",
          img:splendido4,
          URI:"Restaurants"
      },
      {
          name:"Clubs de Nuits",
          img:sportbeach3,
          URI:"Nights-Club"
      },
      {
          name:"Locations",
          img:vitaloca_vespa3,
          URI:"Locations"
      },
      {
          name:"Activités",
          img:cinema2,
          URI:"Activités"
      },
      {
          name:"Opticiens",
          img:au_bon_oeil1,
          URI:"Opticiens"
      },
      {
          name:"Cafés et Biscuitries",
          img:donut3,
          URI:"Cafées-et-biscuitrie"
      },
      {
          name:"Coiffeurs",
          img:barber3,
          URI:"/Coiffeurs"
      },
      {
          name:"Sneakers",
          img:OS3,
          URI:"Sneakers"
      },
      {
          name:"Hébergements",
          img:hotels,
          URI:"Hébergements"
      }
  
  
    ],
    CategoryParams,
  
      
    };
    
 export default fr;
    