import {vespa1, vespa2, vespa3, vitaloca_vespa3, vitaloca_vespa2, vitaloca_vespa1, ov_optic1, ov_optic2, au_bon_oeil5, au_bon_oeil1, au_bon_oeil2, au_bon_oeil3, au_bon_oeil4, Restau241, Restau242, Restau243, Restau244, Restau245, jungle1, jungle2, jungle3, jungle4, jungle5, jungle6, splendido1, splendido2, splendido3, splendido4, splendido5, splendido6, latable1, latable2, latable3, latable4, leaudanslabouche1, leaudanslabouche2, leaudanslabouche3, leaudanslabouche4, barber1, barber2, barber3, barber4, barber5, rooftop1, rooftop2, rooftop3, rooftop4, rooftop5, rooftop6, rooftop7, rooftop8, sasgalerie1, sasgalerie2, sasgalerie3, sasgalerie4, basket1, basket2, basket3, basket4, basket5, basket6, OS1, OS2, OS3, OS4, newTacos1, newTacos2, newTacos3, donut1, donut2, donut3, biscuit1, biscuit2, biscuit3, marcela1, marcela2, marcela3, marcela4, marcela5, cinema1, cinema2, cinema3, sportbeach1, sportbeach2, sportbeach3,
sportbeach4, hotels} from "../assets/data";


   const restaurants = [
    {
        id: 1,
        nom: "Restaurant Le 24",
        "slogan": "Specialties of lobster, fish, and seafood",
        "description": "Our Restaurant Le 24 welcomes you in a pleasant setting to enjoy high-quality dishes. Specializing in reinvented French cuisine, we offer varied menus, seasonally revamped, inspired by culinary trends from the 5 continents.",
        "adresse": "24 rue Falque 13006 Marseille",
        "téléphone": "06.58.06.92.40",
        "prix": "Average price €39",
        "horaires": "Tue-Fri: 12 PM - 3 PM & 7 PM - 11 PM Fri & Sat until 12 AM",
        "images": [Restau241, Restau242, Restau243, Restau244, Restau245],
        "avis": [
            {
                "utilisateur": "LAURENT_L",
                "valeur": 5,
                "commentaire": "Passing through Marseille and wanting a family brunch. Discovered by chance on the internet. I highly recommend this place: warm welcome, dynamic and helpful team. Must try urgently."
            },
            {
                "utilisateur": "MARIO_C",
                "valeur": 5,
                "commentaire": "It was excellent, the team was great and the decoration was magnificent 🤩"
            },
            {
                "utilisateur": "SABRINA_L",
                "valeur": 5,
                "commentaire": "We had a very pleasant time in this restaurant with superb decor. The dishes were excellent and the coffee wonderful. Service was top-notch. The only downside is the kitchen smoke in the dining area. I highly recommend this place to all food enthusiasts!"
            }
        ],
        "siteweb": "https://www.lerestaurant24.fr",
        "informations_importants": {},
        "path": "Restaurants/Restaurant_Le_24",
        "uri": "Restaurant_Le_24",
        "category": "fruit_de_mer"
    },
    {
        "id": 2,
        "nom": "The Jungle Marseille",
        "slogan": "Brunch & Lunch",
        "description": "Dive into a tropical oasis in the heart of Marseille with The Jungle Restaurant. Enjoy exotic dishes and vibrant cocktails surrounded by lush greenery and a captivating ambiance. Perfect for a unique culinary experience.",
        "adresse": "68 Rue Breteuil 13006",
        "téléphone": "",
        "prix": "",
        "horaires": "• Tuesday to Friday: 10:30 AM - 4 PM • Weekend: 10 AM - 4 PM Kitchen closes at 3 PM",
        "images": [jungle1, jungle2, jungle3, jungle4, jungle5, jungle6],
        "avis": [
            {
                "utilisateur": "Claire_D",
                "valeur": 5,
                "commentaire": "An exceptional culinary experience! The dishes are delicious and the tropical ambiance is beautiful. Highly recommended!"
            },
            {
                "utilisateur": "Julien_M",
                "valeur": 5,
                "commentaire": "Incredible setting and flavorful exotic cuisine. The Jungle is the best place for a memorable evening in Marseille."
            },
            {
                "utilisateur": "Sophie_T",
                "valeur": 5,
                "commentaire": "Impeccable service and beautiful decoration. The cocktails are as beautiful as they are tasty. A must-visit address!"
            },
            {
                "utilisateur": "Marc_R",
                "valeur": 5,
                "commentaire": "Unique atmosphere and delicious food. We had a fantastic evening. Thanks to the entire team at The Jungle!"
            },
            {
                "utilisateur": "Elodie_L",
                "valeur": 5,
                "commentaire": "A surprising discovery! The dishes are original and well-presented, and the ambiance is magical. A must-try."
            }
        ],
        "siteweb": "https://vu.fr/xSlT",
        "informations_importants": {},
        "path": "Restaurants/the_jungle_marseille",
        "uri": "the_jungle_marseille",
        "category": "tropical"
    },
    {
        "id": 3,
        "nom": "LE SPLENDIDO",
        "slogan": "Everything is homemade ❤️",
        "description": "How about an Italian getaway in the heart of Marseille? Le Splendido is an Italian restaurant with increasingly surprising decor. Between truffle pasta and pizzas, your taste buds will discover the good taste of Italy.",
        "adresse": "📍 16-18 rue de la République, 13001 Marseille",
        "téléphone": "",
        "prix": "",
        "horaires": "• Tuesday to Friday: 10:30 AM - 4 PM • Weekend: 10 AM - 4 PM Kitchen closes at 3 PM",
        "images": [splendido1, splendido2, splendido3, splendido4, splendido5, splendido6],
        "avis": [
            {
                "utilisateur": "Laura_B",
                "commentaire": "A perfect Italian getaway in the heart of Marseille! The truffle pasta is to die for and the pizzas are delicious. The decor is also magnificent.",
                "valeur": 5
            },
            {
                "utilisateur": "Nicolas_V",
                "commentaire": "Le Splendido offers an authentic culinary experience with stunning decor. The Italian flavors are there, I will come back without hesitation.",
                "valeur": 5
            },
            {
                "utilisateur": "Elodie_P",
                "commentaire": "A beautiful setting and tasty dishes. The truffle pasta is a must and the pizzas are excellent. A real discovery!",
                "valeur": 5
            },
            {
                "utilisateur": "Thomas_L",
                "commentaire": "Warm atmosphere and quality Italian cuisine. Le Splendido is now my favorite Italian restaurant in Marseille.",
                "valeur": 5
            }
        ],
        "siteweb": "https://www.sevenrooms.com/reservations/bigmamma/ig?venues=pizzeriapopolarebourse%2Cmammaprimiparis%2Ceastmamma%2Cpinkmamma%2Cobermamma%2Cbigloveparis%2Clibertinoparis%2Cpalatinorestaurant%2Cgiacomomontecarlo%2CCarmelolyon%2Csplendidomarseille%2Cbellezzavieuxlille",
        "informations_importants": {},
        "path": "Restaurants/Le_Splendido",
        "uri": "Le_Splendido",
        "category": "italien"
    },
    {
        "id": 4,
        "nom": "LA TABLE D’AUGUSTINE",
        "slogan": "Traditional Provençal cuisine",
        "description": "La Table d'Augustine in Marseille invites you to discover authentic Provençal cuisine, inspired by grandmother Augustine's recipes. Located on the picturesque Place des Augustines, the restaurant offers traditional dishes with Mediterranean flavors, prepared with quality local products. Enjoy a warm atmosphere and charming decor for a memorable culinary experience.",
        "adresse": "📍 12 place des Augustines, 13002 Marseille",
        "téléphone": "0786271126",
        "prix": "",
        "horaires": "for LUNCH and DINNER",
        "images": [latable1, latable2, latable3, latable4],
        "avis": [
            {
                "utilisateur": "Marie_P",
                "commentaire": "An exceptional culinary experience! The dishes are delicious and authentic, with a Provençal touch. The setting is charming and warm.",
                "valeur": 5
            },
            {
                "utilisateur": "Jean_L",
                "commentaire": "A must-visit restaurant in Marseille. The cuisine is tasty and the atmosphere is perfect for a family or friends' dinner.",
                "valeur": 5
            },
            {
                "utilisateur": "Sophie_M",
                "commentaire": "Impeccable service and exquisite dishes. I loved the personal touch of grandmother Augustine's recipes. I will definitely come back.",
                "valeur": 5
            },
            {
                "utilisateur": "Lucas_R",
                "commentaire": "A true culinary journey in Provence! The ingredients are fresh and local, and each dish is carefully prepared. Highly recommended.",
                "valeur": 5
            }
        ],
        "siteweb": "https://latabledaugustine.fr/fr/booking",
        "informations_importants": {
            "notes": "Reservations are possible for LUNCH and DINNER services. Do not hesitate to contact us at 07 86 27 11 26. For events or groups, please send your request by email to latabledaugustine@gmail.com. Thank you and see you soon."
        },
        "path": "Restaurants/La_Table_D'augustine",
        "uri": "La_Table_D'augustine",
        "category": "traditionnelle"
    },
    {
        "id": 5,
        "nom": "Pizzeria L’eau à la bouche",
        "slogan": "🍕 On-site or take-away",
        "description": "In Marseille, on the Corniche promenade at the entrance to the Anse de Malmousque, at the Endoume crossroads, a small colorful cabin, no larger than a handkerchief, within the charm of a Marseillais house has been transformed into a pizzeria that will seduce you with its authenticity. A terrace, an upper floor, and 3 tables at the counter, but above all a decor that will amuse both young and old. The pizzas are to be enjoyed on-site or to take away in the area from Tuesday lunchtime to Sunday evening. Deliveries are only made in the low season: from October to May. Reservations and orders are recommended and can only be made by phone at 04.91.52.16.16. Payments accepted: CB, check with National Identity Card, cash.",
        "adresse": "120 corniche Kennedy, Marseille, France 13007",
        "téléphone": "04.91.52.16.16",
        "prix": "",
        "horaires": "From Tuesday to Sunday 12 PM - 3 PM & 6 PM - 11 PM",
        "images": [leaudanslabouche1, leaudanslabouche2, leaudanslabouche3, leaudanslabouche4],
        "avis": [],
        "siteweb": "https://pizzerialeaualabouche.fr",
        "informations_importants": {
            "notes": "Reservations are possible for LUNCH and DINNER services. Thank you and see you soon."
        },
        "path": "Restaurants/Pizzeria_Leau_à_La_Bouche",
        "uri": "Pizzeria_Leau_à_La_Bouche",
        "category": "pizzeria"
    },
    {
        "id": 6,
        "nom": "New School Tacos Marseille",
        "slogan": "🇫🇷 Real French tacos in Marseille 🤙🏼 Dare to taste the real 🤙🏼",
        "description": "Discover New School Tacos, where tradition and innovation meet to offer tasty and unique tacos. Located in the city, this restaurant offers fresh ingredients and authentic recipes for an unforgettable culinary experience.",
        "adresse": "📍 Marseille 24 rue Vacon 13001",
        "téléphone": "04.91.72.10.80",
        "prix": "",
        "horaires": "",
        "images": [newTacos1, newTacos2, newTacos3],
        "avis": [
            {
                "utilisateur": "Alice P.",
                "commentaire": "New School Tacos offers the best tacos in town! The ingredients are always fresh and the flavors incredible. A real treat!",
                "valeur": 5
            },
            {
                "utilisateur": "Marc D.",
                "commentaire": "Great experience at New School Tacos. The portions are generous and the recipes innovative. I will definitely come back.",
                "valeur": 4
            },
            {
                "utilisateur": "Sophie L.",
                "commentaire": "I love this restaurant! The tacos are delicious and the atmosphere is friendly. The service is fast and the prices are reasonable.",
                "valeur": 5
            },
            {
                "utilisateur": "Lucas M.",
                "commentaire": "Very satisfied with my visit to New School Tacos. The flavors are authentic and the tacos are well-filled. Highly recommended!",
                "valeur": 4
            },
            {
                "utilisateur": "Emma R.",
                "commentaire": "A fantastic discovery! The tacos are tasty and varied. The staff is welcoming and the setting is pleasant.",
                "valeur": 5
            },
            {
                "utilisateur": "Julien B.",
                "commentaire": "New School Tacos has become my favorite place for tacos. The quality ingredients and original recipes make it a must-visit.",
                "valeur": 5
            }
        ],
        "siteweb": "https://newschooltacos.fr",
        "informations_importants": {},
        "path": "Restaurants/New_School_Tacos_Marseille",
        "uri": "New_School_Tacos_Marseille",
        "category": "tacos"
    },
    {
        "id": 7,
        "nom": "Marcella Trattoria",
        "slogan": "Fresh Pasta 🍝, pizzas 🍕, seasonal fresh products, everything is handmade!",
        "description": "Explore the flavors of Italy at Marcella Trattoria, where tradition meets innovation in every dish. Nestled in the heart of [location], our restaurant offers an authentic Italian dining experience with a modern twist. From freshly made pasta to artisanal pizzas and delectable desserts, each bite is a journey through the diverse regions of Italy. Whether you're enjoying a romantic dinner for two or hosting a special celebration, Marcella Trattoria promises an unforgettable culinary experience infused with passion and flavor.",
        "adresse": "📍 1140 rue André Ampère, Place Actimart, Aix-en-Provence, France 13290",
        "téléphone": "04 12 20 03 05",
        "prix": "",
        "horaires": "Open Monday to Friday for lunch.",
        "images": [marcela1, marcela2, marcela3, marcela4, marcela5],
        "avis": [
            {
                "utilisateur": "Albert L.",
                "commentaire": "Marcella Trattoria offers an authentic Italian culinary experience. The fresh pasta and artisanal pizzas are simply delicious. A must-visit place!",
                "valeur": 5
            },
            {
                "utilisateur": "Julien R.",
                "commentaire": "I loved every moment spent at Marcella Trattoria. The service is impeccable and the dishes are prepared with care and passion. I will definitely come back.",
                "valeur": 4
            }
        ],
        "siteweb": "",
        "informations_importants": {},
        "path": "Restaurants/Marcella_Trattoria",
        "uri": "Marcella_Trattoria",
        "category": "italien"
    }

  ];

    const nights_club= [
    {
        id: 1,
        nom: "LE ROOFTOP",
        slogan: "The most exceptional rooftop in Europe",
        description: "New at the Rooftop! Free access from 7 PM to 9 PM. After a long workday, relax with a sumptuous sunset, cocktail in hand, and enjoy our gourmet boards for an unforgettable experience. Stay for the evening and discover our different atmospheres…",
        prix: "from 100 EUR",
        adresse: "Les Terrasses du Port, 9 Quai du Lazaret 13002 - Marseille",
        téléphone: "06 70 36 78 35",
        horaires: "7:00 PM - 2:00 AM",
        images: [rooftop1, rooftop2, rooftop3, rooftop4, rooftop5, rooftop6, rooftop7, rooftop8],
        avis: [
          {
            utilisateur: "Alex R.",
            commentaire: "Rooftop is the place to be on Saturday night! The music is always top-notch, and the atmosphere is electric. I can't wait to go back!",
            valeur: 5 
          },
          {
            utilisateur: "Mia T.",
            commentaire: "I had an incredible time at the Rooftop! The DJs are top-tier, and the drinks are reasonably priced. Definitely my new favorite spot.",
            valeur: 4
          },
          {
            utilisateur: "James L.",
            commentaire: "Great atmosphere and fantastic sound system at the Rooftop. The crowd is lively and friendly. Perfect for a night out with friends.",
            valeur: 5
          },
          {
            utilisateur: "Sophie H.",
            commentaire: "The Rooftop never disappoints. The staff is friendly, the decor is stylish, and the dance floor is always packed. Highly recommend!",
            valeur: 5
          },
          {
            utilisateur: "Daniel M.",
            commentaire: "I loved my experience at the Rooftop. The lighting and visuals are amazing, and the overall energy is contagious. A must-visit place!",
            valeur: 4
          },
          {
            utilisateur: "Lily S.",
            commentaire: "The Rooftop is the best nightclub in town! The music selection is varied, and the vibe is perfect for a night of dancing and fun.",
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
        description: "SportBeach is the ultimate destination for those looking to enjoy a perfect blend of vibrant nightlife and exquisite cuisine. Located along the picturesque beach, SportBeach offers breathtaking views that create the ideal setting for an unforgettable night.",
        prix: "",
        adresse: "📍138 avenue Pierre Mendès France, 13008 Marseille",
        téléphone: "04 91 76 12 35",
        horaires: "Monday: 10:00 AM – 7:00 PM | Tuesday: 10:00 AM – 2:00 AM | Wednesday: 10:00 AM – 2:00 AM | Thursday: 10:00 AM – 2:00 AM | Friday: 10:00 AM – 2:00 AM | Saturday: 10:00 AM – 2:00 AM | Sunday: 10:00 AM – 2:00 AM",
        images: [sportbeach1, sportbeach2, sportbeach3, sportbeach4],
        avis: [
          {
            utilisateur: "Alex R.",
            commentaire: "SportBeach is the perfect place for a night out! The combination of great music, delicious food, and stunning views is unbeatable. Highly recommend!",
            valeur: 5
          },
          {
            utilisateur: "Mia T.",
            commentaire: "I had an incredible time at SportBeach! The atmosphere is fantastic, the DJs are excellent, and the food is top-notch. Can't wait to go back!",
            valeur: 4
          },
          {
            utilisateur: "James L.",
            commentaire: "SportBeach offers an unforgettable experience.",
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
        description: "Welcome to SAS Galerie, the ultimate destination for sneaker enthusiasts and fashion lovers. Located in the heart of Marseille, SAS Galerie offers an unrivaled selection of the latest and most sought-after sneakers from top global brands.",
        adresse: "📍14 rue Montgrand, 13006 Marseille",
        téléphone: "",
        images: [sasgalerie1, sasgalerie2, sasgalerie3, sasgalerie4],
        horaires: "•Monday——>Saturday📌 •10H——> 19H🕖",
        siteweb: "https://sasgalerie.com",
        informations_importants: {},
        path: "Sneakers/SAS_GALERIE_SNEAKERS",
        uri: "SAS_GALERIE_SNEAKERS",
        avis: [
          {
            utilisateur: "Mauris_H",
            commentaire: "The store is rich in models and modern, I really like it.",
            valeur: 5
          }
        ]
      },
      {
        id: 2,
        nom: "L’Atelier de la Basket",
        description: "L'atelier de la basket is the first online service for cleaning, restoring luxury shoes and collectible sneakers, and a specialist in custom work. You can also find us at our stores in Marseille and Paris.",
        adresse: "📍4 rue Montgrand, Marseille, France 13006",
        téléphone: "",
        images: [basket1, basket2, basket3, basket4, basket5, basket6],
        horaires: "Monday to Saturday 11:00-12:15 / 13:15-19:00",
        siteweb: "https://www.latelierdelabasket.com",
        informations_importants: {},
        path: "Sneakers/L'Atelier_de_la_Basket",
        uri: "L'Atelier_de_la_Basket",
        category: "nettoyage et restauration",
        avis: [
          {
            utilisateur: "Lilia",
            commentaire: "I had my espadrilles cleaned at this store, and the result was amazing.",
            valeur: 5
          },
          {
            utilisateur: "Adam_B",
            commentaire: "Very nice sneaker store.",
            valeur: 4
          }
        ]
      },
      {
        id: 3,
        nom: "OS Sneakers",
        description: "Discover the latest releases and the most exclusive sneakers at OS Sneakers, your go-to destination for all things footwear. Stay ahead of the trends with our selection of high-end, authentic sneakers from the best global brands.",
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
            utilisateur: "Ilyas_L",
            commentaire: "I found the latest releases and my favorite espadrille sneakers at this store.",
            valeur: 5
          }
        ]
      }
      
      
  ];
  const activités=[
    {
        id: 1,
        nom: "Cinéma La Joliette",
        slogan: "Cinema",
        description: "Discover the vibrant and innovative experience of Cinéma La Joliette, located in the heart of Marseille, France. This cinema is a true masterpiece of modern design, featuring a unique and colorful seating arrangement that enhances your movie experience. With its playful mix of bean bags, comfortable padded chairs, and a dynamic color scheme, Cinéma La Joliette creates a welcoming and cozy atmosphere for all visitors. The cinema offers a diverse selection of films, ranging from the latest blockbusters to independent and international films. Whether you're a film enthusiast or just looking for a fun evening out, Cinéma La Joliette caters to all tastes and preferences. Its strategic location in Marseille makes it easily accessible, allowing you to explore the city's vibrant culture and attractions before or after your movie. Cinéma La Joliette is not just a place to watch movies; it's a destination where creativity, comfort, and entertainment come together for an unforgettable cinematic experience. Come enjoy the magic of movies in a setting as captivating as the films themselves at Cinéma La Joliette.",
        adresse: "54 rue de Chanterac 13002 Marseille, France",
        téléphone: "",
        prix: "",
        images: [cinema1, cinema2, cinema3],
        avis: [
          {
            utilisateur: "Joseph",
            commentaire: "Incredible",
            valeur: 5
          },
          {
            utilisateur: "Sandy",
            commentaire: "It was a good experience visiting this cinema",
            valeur: 3
          }
        ],
        informations_importants: {},
        path: "Activities/Cinéma_La_Joliette",
        uri: "Cinéma_La_Joliette",
        category: "cinema"
      }
      
];
    const locations=[
    {
      "id": 1,
      "nom": "Vita Loca",
      "slogan": "Scooter Rentals in Marseille",
      "description": "Rent a Vespa to explore the Marseille region, from the most beautiful coves on the blue coast to Cassis, passing by the Corniche and its many beaches!",
      "adresse": "📍8 Rue de la Loge, 13002 Marseille",
      "téléphone": "07.68.62.36.83",
      "prix": "55 EUR",
      "images": [vitaloca_vespa3, vitaloca_vespa2, vitaloca_vespa1],
      "avis": [
        {
          "utilisateur": "Chloe_Bordeaux",
          "commentaire": "A fantastic service from the Vespa Agency in Marseille! The scooters were immaculate and the staff very helpful. We will definitely be back!",
          "valeur": 5
        },
        {
          "utilisateur": "Marc_Montpellier",
          "commentaire": "I loved the ease of rental and the quality of the scooters. The team is very professional and attentive. A flawless experience.",
          "valeur": 4
        },
        {
          "utilisateur": "Isabelle_Nice",
          "commentaire": "Quick and efficient service, with scooters in excellent condition. The staff was very friendly and accommodating. A great way to discover Marseille.",
          "valeur": 5
        },
        {
          "utilisateur": "Pauline_Lille",
          "commentaire": "Great experience! The scooters were perfect and the customer service was incredible. The Vespa Agency in Marseille is by far the best scooter rental I've used.",
          "valeur": 5
        }
      ],
      "informations_importants": {
        "tarifs": [
          "Day: 55 EUR / 65 EUR",
          "24h: 75 EUR / 85 EUR",
          "48h: 95 EUR / 105 EUR"
        ],
        "conditions_de_résérvation": [],
        "notes": []
      },
      "path": "locations/Vita_Loca",
      "uri": "Vita_Loca"
    },
    {
      "id": 2,
      "nom": "Fais Ta Loc",
      "slogan": "Vespa Rentals",
      "description": "Rent a Vespa in Marseille and discover the beautiful spots and coves of Marseille on a Vespa.",
      "adresse": "8 Rue Félix Éboué, 13002",
      "téléphone": "0749289844",
      "prix": "45 EUR per day",
      "images": [vespa1, vespa2, vespa3],
      "avis": [
        {
          "utilisateur": "JeanDupont92",
          "commentaire": "Exceptional service! The Vespa Agency in Marseille made our trip unforgettable. The scooters were in perfect condition and the staff very welcoming.",
          "valeur": 5
        },
        {
          "utilisateur": "Marie_Lyon",
          "commentaire": "What a great experience! The customer service is top-notch and the Vespa scooters are perfect for discovering Marseille. Highly recommended.",
          "valeur": 5
        },
        {
          "utilisateur": "Lucas_Toulouse",
          "commentaire": "Very professional agency with quality scooters. The staff is friendly and ready to help. An excellent way to explore the city!",
          "valeur": 5
        },
        {
          "utilisateur": "Sophie_Paris",
          "commentaire": "We rented two Vespas for the weekend and everything went perfectly. Thank you to the Vespa Agency for their impeccable service.",
          "valeur": 5
        },
        {
          "utilisateur": "AlexandreNice",
          "commentaire": "First-class service! The scooters were like new and the rental process was quick and easy. Very satisfied.",
          "valeur": 5
        }
      ],
      "informations_importants": {
        "tarifs": [
          "Day: 45 EUR",
          "24h: 50 EUR",
          "48h: 90 EUR"
        ],
        "conditions_de_résérvation": [
          "125cc:",
          "Deposit: 800 EUR to 1000 EUR depending on available models",
          "Minimum Age: 20 years",
          "B license with a minimum of 2 years of experience and the 125 cc card or a motorcycle license",
          "Valid ID",
          "Gloves, helmets, and locks are provided with the rental",
          "50cc:",
          "Deposit: 500 EUR",
          "Minimum Age: 20 years",
          "B license or an AM equivalent license (BSR)",
          "Valid ID",
          "Gloves, helmets, and locks are provided with the rental"
        ],
        "notes": [
          "Any deposit paid and not used will remain with the lessor and will not be refunded. Likewise, any scooter returned before the contractual end date will not be refunded for the remaining days until the agreed end of the contract.",
          "In the event of damage to the scooter, the costs will be deducted from the deposit paid by the tenant. Additionally, a deduction will be applied for the days the scooter is immobilized to compensate for the loss of revenue incurred by the lessor."
        ]
      },
      "path": "locations/Fais_Ta_Loc",
      "uri": "Fais_Ta_Loc"
    }
  ];
    const opticiens=[
    {
      "id": 1,
      "nom": "ov_optic",
      "description": "Bienvenue chez ov_optic, votre expert en santé visuelle, offrant des examens de la vue précis et une large sélection de lunettes et lentilles pour un confort optimal. Découvrez notre service personnalisé au cœur de Marseille.",
      "adresse": "• OV OPTIC - 93 Avenue des poilus 13013 Marseille 📞 0413203026. • OV OPTIC 2 - 141 chemin de château gombert 13013 📞 0491707720.",
      "téléphone": "0413203026 ou 049170772",
      "images": [ov_optic1, ov_optic2],
      "avis": [],
      "résérvation": "http://wa.me/message/SXA7U3LZYWQZO1",
      "path": "Opticiens/Ov_Optic",
      "uri": "Ov_Optic"
    },
    {
      "id": 2,
      "nom": "Au Bon Oeil",
      "description": "💫 Votre opticien indépendant à Marseille📍 ",
      "adresse": "2 Boulevard Icard, Marseille, France 13010",
      "téléphone": "+33 6 23 97 24 33",
      "images": [au_bon_oeil1, au_bon_oeil2, au_bon_oeil3, au_bon_oeil4, au_bon_oeil5],
      "avis": [
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
      "horaires": "Lun-Jeu: 9h30-19h•Ven: 9h30-14h•Dimanche sur rdv 🗓️ 📝 Examen de vue - ordonnances en 48h",
      "résérvation": "https://vu.fr/BHqde",
      "path": "Opticiens/Au_Bon_Oeil",
      "uri": "Au_Bon_Oeil"
    }
  ];
  const coiffeurs=[
    {
      "id": 1,
      "nom": "L’ATELIER DE ZAIDI",
      "slogan": "Coiffeur - Barbier - Formateur",
      "description": "Bienvenue à L'Atelier Zaidi, votre destination ultime pour une expérience de coiffure exceptionnelle. Situé au cœur de la ville, notre salon offre une atmosphère élégante et accueillante où le talent rencontre la passion. Nos barbiers experts sont dédiés à fournir des coupes de cheveux impeccables, des tailles de barbe précises et des soins personnalisés, en utilisant des techniques modernes et des produits de haute qualité. Que vous recherchiez un look classique ou une touche contemporaine, L'Atelier Zaidi est là pour sublimer votre style avec une touche d'excellence et de sophistication.",
      "prix": "de 15 EUR à 50 EUR",
      "adresse": "87 rue de Rome, Marseille, France 13006",
      "téléphone": "09 88 56 30 88",
      "horaires": "Lundi : 12h00 - 19h00, Mardi : 9h00 - 19h00, Mercredi : 9h00 - 19h00, Jeudi : 9h00 - 19h00, Vendredi : 9h00 - 12h00 et 14h00 - 19h00, Samedi : 9h00 - 19h00, Dimanche : Fermé",
      "images": [barber1, barber2, barber3, barber4, barber5],
      "avis": [
        {
          "utilisateur": "John_S.",
          "commentaire": "Atelier Zaidi is my go-to barber shop! The atmosphere is so welcoming, and the barbers are incredibly skilled. I always leave feeling like a million bucks!",
          "valeur": 5
        },
        {
          "utilisateur": "Emily_M.",
          "commentaire": "I stumbled upon Atelier Zaidi and couldn't be happier! The service was impeccable, and they really take the time to understand what you want. Highly recommend!",
          "valeur": 5
        },
        {
          "utilisateur": "David_B.",
          "commentaire": "Great experience at Atelier Zaidi! The staff are friendly, and the haircut was spot-on. Definitely coming back for more!",
          "valeur": 4
        },
        {
          "utilisateur": "Sarah_L.",
          "commentaire": "Atelier Zaidi exceeded my expectations. The attention to detail and the quality of the cut are unmatched. A gem in the neighborhood!",
          "valeur": 5
        },
        {
          "utilisateur": "Michael_P.",
          "commentaire": "I've been going to Atelier Zaidi for years now, and they consistently deliver top-notch service. It's not just a haircut; it's an experience!",
          "valeur": 5
        },
        {
          "utilisateur": "Jessica_K.",
          "commentaire": "If you're looking for a barber shop that combines style and professionalism, Atelier Zaidi is the place to go. Always satisfied with their work!",
          "valeur": 5
        }
      ],
      "siteweb": "https://www.latelierzaidi.com/access-contact",
      "informations_importants": {},
      "path": "Coiffeurs/L'atelier_de_Zaidi",
      "uri": "L'atelier_de_Zaidi"
    }
  ];
  
    const cafées_et_biscuitrie=[
    {
      "id": 1,
      "nom": "DONUTS COFFEE in Marseille",
      "description": "Friendly atmosphere and welcoming staff, ideal for a coffee break.",
      "adresse": "📍: 9 Quai de la Joliette, 13002 Marseille",
      "téléphone": "04.91.72.10.80",
      "horaires": "Open 7/7 - 10am to 2am",
      "prix": "Unit price from 2 EUR to 9 EUR",
      "images": [donut1, donut2, donut3],
      "avis": [
        {
          "utilisateur": "Mark_R",
          "commentaire": "One of the best donuts I've ever tasted.",
          "valeur": 5
        },
        {
          "utilisateur": "Linda_B",
          "commentaire": "The space was very calm and the servers were very friendly. I love the place and the donut <3!",
          "valeur": 4
        }
      ],
      "siteweb": "https://linktr.ee/DonutsCoffee.fr",
      "informations_importants": {},
      "path": "Cafés-et-biscuitrie/DONUTS_COFFEE_à_Marseille",
      "uri": "DONUTS_COFFEE_à_Marseille",
      "category": "Donuts"
    },
    {
      "id": 2,
      "nom": "180° Artisan Biscuitery",
      "description": "180° Artisan Biscuitery 🌟 in Marseille for an authentic and gourmet experience! Enjoy local specialties like navettes and canistrelli, all prepared without colorants or preservatives. Gluten-free options available. Visit the heart of Bompard to discover unique and traditional flavors!",
      "adresse": "📍39 Boulevard Bompard, Marseille 7th",
      "téléphone": "",
      "horaires": "Tuesday to Saturday: 8:30am-1pm and 4pm-7:30pm, Sunday: 9am-1pm",
      "prix": "Not identified",
      "images": [biscuit1, biscuit2, biscuit3],
      "avis": [
        {
          "utilisateur": "Jean_D",
          "commentaire": "",
          "valeur": 4.5
        },
        {
          "utilisateur": "Lukas_S",
          "commentaire": "Very good biscuits, friendly staff, and a calm space. Definitely will visit again when I am in Marseille <3.",
          "valeur": 5
        }
      ],
      "siteweb": "https://le-grand-pastis.com/180-la-biscuiterie-tradition-endoume-marseille",
      "informations_importants": {},
      "path": "Cafés-et-biscuitrie/180_Biscuitrie_Arisanale",
      "uri": "180_Biscuitrie_Arisanale",
      "category": "Biscuiterie"
    }
  ];
    const hébergements=[];

  const CategoryParams=[
    {
        name:"Restaurants",
        element:restaurants,
        description:"Discover the best restaurants in Marseille and let us reserve the best tables for you! We have selected the most authentic establishments, spectacular rooftops, quaint cafés, and festive restaurants where the ambiance extends late into the night",
        filter:[],
        image:'RestoCat.jpg',
        path:'Restaurants'
    },
   
    {
        name:"Coiffeurs",
        element:coiffeurs,
        description:"Discover the best hairdressers in Marseille and let us help you find the perfect salon for your hair care needs! We have selected the most prestigious salons, from traditional barbers to the trendiest hair studios, so you can find the style that suits you perfectly.",
        filter:[],
        image:'CoiffeurCat.jpg',
        path:'Coiffeurs'
    },
    {
        name:"Cafées et biscuitrie",
        element:cafées_et_biscuitrie,
        description:"Discover the best cafés and biscuiteries in Marseille and let us guide you to the city's most charming establishments! We have selected the most welcoming cafés, from traditional tea rooms to artisanal pastry shops, so you can savor delightful moments of relaxation.",
        filter:[],
        image:'cafeCat.jpg',
        path:'Cafées-et-biscuitrie'
    },
    {
        name:"Opticiens",
        element:opticiens,
        description:"Discover the best opticians in Marseille for personalized advice and glasses suited to your style and needs. Whether you are looking for trendy frames, high-quality corrective lenses, or contact lenses, our partner opticians offer exceptional expertise and customer service. Make an online appointment and enjoy professional guidance for optimal visual comfort.",
        filter:[],
        image:'sneakersCat.jpg',
        path:'Opticiens'
    },
    {
        name:"Locations",
        element:locations,
        description:"Discover the best car and Vespa rental options in Marseille to explore the city and its surroundings at your own pace. Whether you need a car for a road trip or a Vespa to weave through the picturesque alleys, we have selected the best offers for you.",
        filter:[],
        image:'sneakersCat.jpg',
        path:'Locations'
    },
    {
        name:"Activités",
        element:activités,
        description:"Marseille is full of exciting activities for all tastes and ages. Explore the city's treasures through guided tours, nature hikes, water activities, or creative workshops. Whether you are with family, friends, or solo, let yourself be enchanted by our selection of must-do activities to experience memorable moments and discover Marseille from a new perspective.",
        filter:[],
        image:'sneakersCat.jpg',
        path:'Activités'
    },
   
    {
        name:"Sneakers",
        element:sneakers,
        description:"Discover the best sneaker shops in Marseille and be captivated by the latest urban trends. Whether you are looking for exclusive models, timeless classics, or original creations, we have listed the must-visit addresses for you.",
        filter:[],
        image:'sneakersCat.jpg',
        path:'Sneakers'
    },
    {
        name:"Nights club",
        element:nights_club,
        description:"Dive into Marseille's vibrant nightlife by discovering the best nightclubs in the city. From the electrifying ambiance of discos to the intimate evenings at cocktail bars, Marseille offers a multitude of places to party until the break of dawn. Dance to DJ sets, enjoy live performances, and savor refined cocktails in unique settings. Book your nights and get ready to experience unforgettable nights.",
        filter:[],
        image:'nightsClubcat.jpg',
        path:'Nights-Club'
    },
    {
        name:"Hébergements",
        element:hébergements,
        description:"Marseille offers a variety of charming and welcoming accommodations, suitable for all budgets and preferences. Discover a selection of elegant hotels, friendly hostels, and comfortable vacation rentals, each offering a unique experience in the heart of this dynamic city. Whether you are looking for luxury, simplicity, or an authentic stay, let yourself be charmed by our range of accommodations to fully enjoy your visit to Marseille. Experience unforgettable moments and make your stay a true Marseille getaway.",
        filter:[],
        image:'hotelMarseille.jpg',
        path:"Hébergements"
    }
    
]
  const en = {
      image1_phrase :" Where the Mediterranean sun embraces the vibrant soul of France.",
      image2_phrase :"Marseille, with its majestic calanques and picturesque old port, offers an incomparable natural and cultural beauty.",
      image3_phrase :"Embark on a journey through time, from Roman ruins to contemporary art.",
      image4_phrase :"Let the rhythm of the waves guide you through a city of endless possibilities.",
  
      resultat_de_recherche:"Search result",
      popup_adresse_visit_btn:"visit",
      search_input:"Search Destinations",
      search_message:"enter Keywords before searching !",
      no_result:"No results found !",
  
      comp2_about_us:"About Us",
      comp2__question: "what are you looking for ?",
      comp2_title:"Discover the Best Destinations in Marseille",
      comp2_paragraph:"This site is designed to help you find your ideal destination, whether you are a first-time visitor or a regular in the city. Thanks to our detailed recommendations and expert advice, you will be able to explore the hidden treasures of Marseille and fully enjoy your stay. Easily navigate through the different leisure options, Let us be your guide in this magnificent Mediterranean city.",
      comp2_button:" Best Destinations ",
  
      comp1_what_to_search :"What are you Looking for ?",
      comp1_title:"Best Destinations",
      comp1_paragraph:"Explore the vibrant culture, stunning landscapes and hidden treasures of Marseille, your perfect getaway awaits! ",
  
      best_restaurants:"Best Restaurants of Marseille",
      slider_title:"Discover the best-selling restaurants in Marseille!",
      Restaurants:"Restaurants",
      slider_button:"Show All",  
      explore:"View",


      category_filter1:"Pizzeria",
      category_filter2:"Tacos",
      category_filter3:"SeaFood",
      category_filter4:"Italian Kitchen",
      category_filter5:"traditional",
      category_filter6:"Tropical",
      category_filter7:"Donuts",
      category_filter8:"Cookies",
      category_filter9:"Cleaning and Catering",
      category_filter10:"Cinéma",
  
      description_title:"Description",
      form_title:'Réservation Form :',
      form_name_placeholder:"Full Name",
      form_email_placeholde:"Your Email",
      form_phone_placeholde:"Your Phone Number",
      form_nbre_adultes_placeholder:"Number of Adults",
      form_nbre_enfants_placeholder:"Number of Childrens",
      date:"Date",
      hour:"Hour",
      message:"Your message",
      form_submit_default:"Send",
      form_submit_loading:"Sending...",
      alert_reservation :" to book fill out the form above ",
      avis:"Reviews",
      not_found:" not found",
      prix:"Price",
      Horaires:"Schedules",
      Notation:"Notes",
      conditions_de_résérvation:"reservation conditions",
  
      nights_club: [
        {
            id: 1,
            nom: "LE ROOFTOP",
            slogan: "The most exceptional rooftop in Europe",
            description: "New at the Rooftop! Free access from 7 PM to 9 PM. After a long workday, relax with a sumptuous sunset, cocktail in hand, and enjoy our gourmet boards for an unforgettable experience. Stay for the evening and discover our different atmospheres…",
            prix: "from 100 EUR",
            adresse: "Les Terrasses du Port, 9 Quai du Lazaret 13002 - Marseille",
            téléphone: "06 70 36 78 35",
            horaires: "7:00 PM - 2:00 AM",
            images: [rooftop1, rooftop2, rooftop3, rooftop4, rooftop5, rooftop6, rooftop7, rooftop8],
            avis: [
              {
                utilisateur: "Alex R.",
                commentaire: "Rooftop is the place to be on Saturday night! The music is always top-notch, and the atmosphere is electric. I can't wait to go back!",
                valeur: 5 
              },
              {
                utilisateur: "Mia T.",
                commentaire: "I had an incredible time at the Rooftop! The DJs are top-tier, and the drinks are reasonably priced. Definitely my new favorite spot.",
                valeur: 4
              },
              {
                utilisateur: "James L.",
                commentaire: "Great atmosphere and fantastic sound system at the Rooftop. The crowd is lively and friendly. Perfect for a night out with friends.",
                valeur: 5
              },
              {
                utilisateur: "Sophie H.",
                commentaire: "The Rooftop never disappoints. The staff is friendly, the decor is stylish, and the dance floor is always packed. Highly recommend!",
                valeur: 5
              },
              {
                utilisateur: "Daniel M.",
                commentaire: "I loved my experience at the Rooftop. The lighting and visuals are amazing, and the overall energy is contagious. A must-visit place!",
                valeur: 4
              },
              {
                utilisateur: "Lily S.",
                commentaire: "The Rooftop is the best nightclub in town! The music selection is varied, and the vibe is perfect for a night of dancing and fun.",
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
            description: "SportBeach is the ultimate destination for those looking to enjoy a perfect blend of vibrant nightlife and exquisite cuisine. Located along the picturesque beach, SportBeach offers breathtaking views that create the ideal setting for an unforgettable night.",
            prix: "",
            adresse: "📍138 avenue Pierre Mendès France, 13008 Marseille",
            téléphone: "04 91 76 12 35",
            horaires: "Monday: 10:00 AM – 7:00 PM | Tuesday: 10:00 AM – 2:00 AM | Wednesday: 10:00 AM – 2:00 AM | Thursday: 10:00 AM – 2:00 AM | Friday: 10:00 AM – 2:00 AM | Saturday: 10:00 AM – 2:00 AM | Sunday: 10:00 AM – 2:00 AM",
            images: [sportbeach1, sportbeach2, sportbeach3, sportbeach4],
            avis: [
              {
                utilisateur: "Alex R.",
                commentaire: "SportBeach is the perfect place for a night out! The combination of great music, delicious food, and stunning views is unbeatable. Highly recommend!",
                valeur: 5
              },
              {
                utilisateur: "Mia T.",
                commentaire: "I had an incredible time at SportBeach! The atmosphere is fantastic, the DJs are excellent, and the food is top-notch. Can't wait to go back!",
                valeur: 4
              },
              {
                utilisateur: "James L.",
                commentaire: "SportBeach offers an unforgettable experience.",
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
            description: "Welcome to SAS Galerie, the ultimate destination for sneaker enthusiasts and fashion lovers. Located in the heart of Marseille, SAS Galerie offers an unrivaled selection of the latest and most sought-after sneakers from top global brands.",
            adresse: "📍14 rue Montgrand, 13006 Marseille",
            téléphone: "",
            images: [sasgalerie1, sasgalerie2, sasgalerie3, sasgalerie4],
            horaires: "•Monday——>Saturday📌 •10H——> 19H🕖",
            siteweb: "https://sasgalerie.com",
            informations_importants: {},
            path: "Sneakers/SAS_GALERIE_SNEAKERS",
            uri: "SAS_GALERIE_SNEAKERS",
            avis: [
              {
                utilisateur: "Mauris_H",
                commentaire: "The store is rich in models and modern, I really like it.",
                valeur: 5
              }
            ]
          },
          {
            id: 2,
            nom: "L’Atelier de la Basket",
            description: "L'atelier de la basket is the first online service for cleaning, restoring luxury shoes and collectible sneakers, and a specialist in custom work. You can also find us at our stores in Marseille and Paris.",
            adresse: "📍4 rue Montgrand, Marseille, France 13006",
            téléphone: "",
            images: [basket1, basket2, basket3, basket4, basket5, basket6],
            horaires: "Monday to Saturday 11:00-12:15 / 13:15-19:00",
            siteweb: "https://www.latelierdelabasket.com",
            informations_importants: {},
            path: "Sneakers/L'Atelier_de_la_Basket",
            uri: "L'Atelier_de_la_Basket",
            category: "nettoyage et restauration",
            avis: [
              {
                utilisateur: "Lilia",
                commentaire: "I had my espadrilles cleaned at this store, and the result was amazing.",
                valeur: 5
              },
              {
                utilisateur: "Adam_B",
                commentaire: "Very nice sneaker store.",
                valeur: 4
              }
            ]
          },
          {
            id: 3,
            nom: "OS Sneakers",
            description: "Discover the latest releases and the most exclusive sneakers at OS Sneakers, your go-to destination for all things footwear. Stay ahead of the trends with our selection of high-end, authentic sneakers from the best global brands.",
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
                utilisateur: "Ilyas_L",
                commentaire: "I found the latest releases and my favorite espadrille sneakers at this store.",
                valeur: 5
              }
            ]
          }
          
          
      ],
      activités:[
        {
            id: 1,
            nom: "Cinéma La Joliette",
            slogan: "Cinema",
            description: "Discover the vibrant and innovative experience of Cinéma La Joliette, located in the heart of Marseille, France. This cinema is a true masterpiece of modern design, featuring a unique and colorful seating arrangement that enhances your movie experience. With its playful mix of bean bags, comfortable padded chairs, and a dynamic color scheme, Cinéma La Joliette creates a welcoming and cozy atmosphere for all visitors. The cinema offers a diverse selection of films, ranging from the latest blockbusters to independent and international films. Whether you're a film enthusiast or just looking for a fun evening out, Cinéma La Joliette caters to all tastes and preferences. Its strategic location in Marseille makes it easily accessible, allowing you to explore the city's vibrant culture and attractions before or after your movie. Cinéma La Joliette is not just a place to watch movies; it's a destination where creativity, comfort, and entertainment come together for an unforgettable cinematic experience. Come enjoy the magic of movies in a setting as captivating as the films themselves at Cinéma La Joliette.",
            adresse: "54 rue de Chanterac 13002 Marseille, France",
            téléphone: "",
            prix: "",
            images: [cinema1, cinema2, cinema3],
            avis: [
              {
                utilisateur: "Joseph",
                commentaire: "Incredible",
                valeur: 5
              },
              {
                utilisateur: "Sandy",
                commentaire: "It was a good experience visiting this cinema",
                valeur: 3
              }
            ],
            informations_importants: {},
            path: "Activities/Cinéma_La_Joliette",
            uri: "Cinéma_La_Joliette",
            category: "cinema"
          }
          
    ],
    locations:[
        {
          "id": 1,
          "nom": "Vita Loca",
          "slogan": "Scooter Rentals in Marseille",
          "description": "Rent a Vespa to explore the Marseille region, from the most beautiful coves on the blue coast to Cassis, passing by the Corniche and its many beaches!",
          "adresse": "📍8 Rue de la Loge, 13002 Marseille",
          "téléphone": "07.68.62.36.83",
          "prix": "55 EUR",
          "images": [vitaloca_vespa3, vitaloca_vespa2, vitaloca_vespa1],
          "avis": [
            {
              "utilisateur": "Chloe_Bordeaux",
              "commentaire": "A fantastic service from the Vespa Agency in Marseille! The scooters were immaculate and the staff very helpful. We will definitely be back!",
              "valeur": 5
            },
            {
              "utilisateur": "Marc_Montpellier",
              "commentaire": "I loved the ease of rental and the quality of the scooters. The team is very professional and attentive. A flawless experience.",
              "valeur": 4
            },
            {
              "utilisateur": "Isabelle_Nice",
              "commentaire": "Quick and efficient service, with scooters in excellent condition. The staff was very friendly and accommodating. A great way to discover Marseille.",
              "valeur": 5
            },
            {
              "utilisateur": "Pauline_Lille",
              "commentaire": "Great experience! The scooters were perfect and the customer service was incredible. The Vespa Agency in Marseille is by far the best scooter rental I've used.",
              "valeur": 5
            }
          ],
          "informations_importants": {
            "tarifs": [
              "Day: 55 EUR / 65 EUR",
              "24h: 75 EUR / 85 EUR",
              "48h: 95 EUR / 105 EUR"
            ],
            "conditions_de_résérvation": [],
            "notes": []
          },
          "path": "locations/Vita_Loca",
          "uri": "Vita_Loca"
        },
        {
          "id": 2,
          "nom": "Fais Ta Loc",
          "slogan": "Vespa Rentals",
          "description": "Rent a Vespa in Marseille and discover the beautiful spots and coves of Marseille on a Vespa.",
          "adresse": "8 Rue Félix Éboué, 13002",
          "téléphone": "0749289844",
          "prix": "45 EUR per day",
          "images": [vespa1, vespa2, vespa3],
          "avis": [
            {
              "utilisateur": "JeanDupont92",
              "commentaire": "Exceptional service! The Vespa Agency in Marseille made our trip unforgettable. The scooters were in perfect condition and the staff very welcoming.",
              "valeur": 5
            },
            {
              "utilisateur": "Marie_Lyon",
              "commentaire": "What a great experience! The customer service is top-notch and the Vespa scooters are perfect for discovering Marseille. Highly recommended.",
              "valeur": 5
            },
            {
              "utilisateur": "Lucas_Toulouse",
              "commentaire": "Very professional agency with quality scooters. The staff is friendly and ready to help. An excellent way to explore the city!",
              "valeur": 5
            },
            {
              "utilisateur": "Sophie_Paris",
              "commentaire": "We rented two Vespas for the weekend and everything went perfectly. Thank you to the Vespa Agency for their impeccable service.",
              "valeur": 5
            },
            {
              "utilisateur": "AlexandreNice",
              "commentaire": "First-class service! The scooters were like new and the rental process was quick and easy. Very satisfied.",
              "valeur": 5
            }
          ],
          "informations_importants": {
            "tarifs": [
              "Day: 45 EUR",
              "24h: 50 EUR",
              "48h: 90 EUR"
            ],
            "conditions_de_résérvation": [
              "125cc:",
              "Deposit: 800 EUR to 1000 EUR depending on available models",
              "Minimum Age: 20 years",
              "B license with a minimum of 2 years of experience and the 125 cc card or a motorcycle license",
              "Valid ID",
              "Gloves, helmets, and locks are provided with the rental",
              "50cc:",
              "Deposit: 500 EUR",
              "Minimum Age: 20 years",
              "B license or an AM equivalent license (BSR)",
              "Valid ID",
              "Gloves, helmets, and locks are provided with the rental"
            ],
            "notes": [
              "Any deposit paid and not used will remain with the lessor and will not be refunded. Likewise, any scooter returned before the contractual end date will not be refunded for the remaining days until the agreed end of the contract.",
              "In the event of damage to the scooter, the costs will be deducted from the deposit paid by the tenant. Additionally, a deduction will be applied for the days the scooter is immobilized to compensate for the loss of revenue incurred by the lessor."
            ]
          },
          "path": "locations/Fais_Ta_Loc",
          "uri": "Fais_Ta_Loc"
        }
      ],
    opticiens:[
        {
          "id": 1,
          "nom": "ov_optic",
          "description": "Bienvenue chez ov_optic, votre expert en santé visuelle, offrant des examens de la vue précis et une large sélection de lunettes et lentilles pour un confort optimal. Découvrez notre service personnalisé au cœur de Marseille.",
          "adresse": "• OV OPTIC - 93 Avenue des poilus 13013 Marseille 📞 0413203026. • OV OPTIC 2 - 141 chemin de château gombert 13013 📞 0491707720.",
          "téléphone": "0413203026 ou 049170772",
          "images": [ov_optic1, ov_optic2],
          "avis": [],
          "résérvation": "http://wa.me/message/SXA7U3LZYWQZO1",
          "path": "Opticiens/Ov_Optic",
          "uri": "Ov_Optic"
        },
        {
          "id": 2,
          "nom": "Au Bon Oeil",
          "description": "💫 Votre opticien indépendant à Marseille📍 ",
          "adresse": "2 Boulevard Icard, Marseille, France 13010",
          "téléphone": "+33 6 23 97 24 33",
          "images": [au_bon_oeil1, au_bon_oeil2, au_bon_oeil3, au_bon_oeil4, au_bon_oeil5],
          "avis": [
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
          "horaires": "Lun-Jeu: 9h30-19h•Ven: 9h30-14h•Dimanche sur rdv 🗓️ 📝 Examen de vue - ordonnances en 48h",
          "résérvation": "https://vu.fr/BHqde",
          "path": "Opticiens/Au_Bon_Oeil",
          "uri": "Au_Bon_Oeil"
        }
      ]
      ,
    restaurants,
    coiffeurs:[
        {
          "id": 1,
          "nom": "L’ATELIER DE ZAIDI",
          "slogan": "Coiffeur - Barbier - Formateur",
          "description": "Bienvenue à L'Atelier Zaidi, votre destination ultime pour une expérience de coiffure exceptionnelle. Situé au cœur de la ville, notre salon offre une atmosphère élégante et accueillante où le talent rencontre la passion. Nos barbiers experts sont dédiés à fournir des coupes de cheveux impeccables, des tailles de barbe précises et des soins personnalisés, en utilisant des techniques modernes et des produits de haute qualité. Que vous recherchiez un look classique ou une touche contemporaine, L'Atelier Zaidi est là pour sublimer votre style avec une touche d'excellence et de sophistication.",
          "prix": "de 15 EUR à 50 EUR",
          "adresse": "87 rue de Rome, Marseille, France 13006",
          "téléphone": "09 88 56 30 88",
          "horaires": "Lundi : 12h00 - 19h00, Mardi : 9h00 - 19h00, Mercredi : 9h00 - 19h00, Jeudi : 9h00 - 19h00, Vendredi : 9h00 - 12h00 et 14h00 - 19h00, Samedi : 9h00 - 19h00, Dimanche : Fermé",
          "images": [barber1, barber2, barber3, barber4, barber5],
          "avis": [
            {
              "utilisateur": "John_S.",
              "commentaire": "Atelier Zaidi is my go-to barber shop! The atmosphere is so welcoming, and the barbers are incredibly skilled. I always leave feeling like a million bucks!",
              "valeur": 5
            },
            {
              "utilisateur": "Emily_M.",
              "commentaire": "I stumbled upon Atelier Zaidi and couldn't be happier! The service was impeccable, and they really take the time to understand what you want. Highly recommend!",
              "valeur": 5
            },
            {
              "utilisateur": "David_B.",
              "commentaire": "Great experience at Atelier Zaidi! The staff are friendly, and the haircut was spot-on. Definitely coming back for more!",
              "valeur": 4
            },
            {
              "utilisateur": "Sarah_L.",
              "commentaire": "Atelier Zaidi exceeded my expectations. The attention to detail and the quality of the cut are unmatched. A gem in the neighborhood!",
              "valeur": 5
            },
            {
              "utilisateur": "Michael_P.",
              "commentaire": "I've been going to Atelier Zaidi for years now, and they consistently deliver top-notch service. It's not just a haircut; it's an experience!",
              "valeur": 5
            },
            {
              "utilisateur": "Jessica_K.",
              "commentaire": "If you're looking for a barber shop that combines style and professionalism, Atelier Zaidi is the place to go. Always satisfied with their work!",
              "valeur": 5
            }
          ],
          "siteweb": "https://www.latelierzaidi.com/access-contact",
          "informations_importants": {},
          "path": "Coiffeurs/L'atelier_de_Zaidi",
          "uri": "L'atelier_de_Zaidi"
        }
      ],
      
    cafées_et_biscuitrie:[
        {
          "id": 1,
          "nom": "DONUTS COFFEE in Marseille",
          "description": "Friendly atmosphere and welcoming staff, ideal for a coffee break.",
          "adresse": "📍: 9 Quai de la Joliette, 13002 Marseille",
          "téléphone": "04.91.72.10.80",
          "horaires": "Open 7/7 - 10am to 2am",
          "prix": "Unit price from 2 EUR to 9 EUR",
          "images": [donut1, donut2, donut3],
          "avis": [
            {
              "utilisateur": "Mark_R",
              "commentaire": "One of the best donuts I've ever tasted.",
              "valeur": 5
            },
            {
              "utilisateur": "Linda_B",
              "commentaire": "The space was very calm and the servers were very friendly. I love the place and the donut <3!",
              "valeur": 4
            }
          ],
          "siteweb": "https://linktr.ee/DonutsCoffee.fr",
          "informations_importants": {},
          "path": "Cafés-et-biscuitrie/DONUTS_COFFEE_à_Marseille",
          "uri": "DONUTS_COFFEE_à_Marseille",
          "category": "Donuts"
        },
        {
          "id": 2,
          "nom": "180° Artisan Biscuitery",
          "description": "180° Artisan Biscuitery 🌟 in Marseille for an authentic and gourmet experience! Enjoy local specialties like navettes and canistrelli, all prepared without colorants or preservatives. Gluten-free options available. Visit the heart of Bompard to discover unique and traditional flavors!",
          "adresse": "📍39 Boulevard Bompard, Marseille 7th",
          "téléphone": "",
          "horaires": "Tuesday to Saturday: 8:30am-1pm and 4pm-7:30pm, Sunday: 9am-1pm",
          "prix": "Not identified",
          "images": [biscuit1, biscuit2, biscuit3],
          "avis": [
            {
              "utilisateur": "Jean_D",
              "commentaire": "",
              "valeur": 4.5
            },
            {
              "utilisateur": "Lukas_S",
              "commentaire": "Very good biscuits, friendly staff, and a calm space. Definitely will visit again when I am in Marseille <3.",
              "valeur": 5
            }
          ],
          "siteweb": "https://le-grand-pastis.com/180-la-biscuiterie-tradition-endoume-marseille",
          "informations_importants": {},
          "path": "Cafés-et-biscuitrie/180_Biscuitrie_Arisanale",
          "uri": "180_Biscuitrie_Arisanale",
          "category": "Biscuiterie"
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
          name:"Nights Clubs",
          img:sportbeach3,
          URI:"Nights-Club"
      },
      {
          name:"Locations",
          img:vitaloca_vespa3,
          URI:"Locations"
      },
      {
          name:"Activities",
          img:cinema2,
          URI:"Activités"
      },
      {
          name:"Opticiens",
          img:au_bon_oeil1,
          URI:"Opticiens"
      },
      {
          name:"Coffees and Cookies",
          img:donut3,
          URI:"Cafées-et-biscuitrie"
      },
      {
          name:"hairdressers",
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
    CategoryParams
  
      
    };
    
 export default en;