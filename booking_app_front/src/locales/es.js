import {vespa1, vespa2, vespa3, vitaloca_vespa3, vitaloca_vespa2, vitaloca_vespa1, ov_optic1, ov_optic2, au_bon_oeil5, au_bon_oeil1, au_bon_oeil2, au_bon_oeil3, au_bon_oeil4, Restau241, Restau242, Restau243, Restau244, Restau245, jungle1, jungle2, jungle3, jungle4, jungle5, jungle6, splendido1, splendido2, splendido3, splendido4, splendido5, splendido6, latable1, latable2, latable3, latable4, leaudanslabouche1, leaudanslabouche2, leaudanslabouche3, leaudanslabouche4, barber1, barber2, barber3, barber4, barber5, rooftop1, rooftop2, rooftop3, rooftop4, rooftop5, rooftop6, rooftop7, rooftop8, sasgalerie1, sasgalerie2, sasgalerie3, sasgalerie4, basket1, basket2, basket3, basket4, basket5, basket6, OS1, OS2, OS3, OS4, newTacos1, newTacos2, newTacos3, donut1, donut2, donut3, biscuit1, biscuit2, biscuit3, marcela1, marcela2, marcela3, marcela4, marcela5, cinema1, cinema2, cinema3, sportbeach1, sportbeach2, sportbeach3,
  sportbeach4, hotels} from "../assets/data";
  
  
     const restaurants = [
      {
        id: 1,
        nom: "Restaurante Le 24",
        slogan: "Especialidades en langosta, pescado y mariscos",
        description: "Nuestro Restaurante Le 24 te recibe en un ambiente agradable para disfrutar de platos de alta calidad. Especializados en cocina francesa reinventada, ofrecemos menús variados, renovados estacionalmente, inspirados en las tendencias culinarias de los 5 continentes.",
        adresse: "24 rue Falque 13006 Marseille",
        téléphone: "06.58.06.92.40",
        prix: "Precio medio €39",
        horaires: "Mar-Vie: 12 PM - 3 PM & 7 PM - 11 PM Vie & Sáb hasta las 12 AM",
        images: [Restau241, Restau242, Restau243, Restau244, Restau245],
        avis: [
            {
                "utilisateur": "LAURENT_L",
                "valeur": 5,
                "commentaire": "De paso por Marsella y buscando un brunch familiar. Descubierto por casualidad en internet. Recomiendo encarecidamente este lugar: cálida bienvenida, equipo dinámico y servicial. Debe probarse urgentemente."
            },
            {
                "utilisateur": "MARIO_C",
                "valeur": 5,
                "commentaire": "Fue excelente, el equipo fue genial y la decoración era magnífica 🤩"
            },
            {
                "utilisateur": "SABRINA_L",
                "valeur": 5,
                "commentaire": "Pasamos un tiempo muy agradable en este restaurante con una decoración maravillosa. Los platos eran excelentes y el café maravilloso. El servicio fue de primera. El único inconveniente es el humo de la cocina en el área de comedor. ¡Recomiendo encarecidamente este lugar a todos los entusiastas de la comida!"
            }
        ],
        "siteweb": "https://www.lerestaurant24.fr",
        "informations_importants": {},
        "path": "Restaurants/Restaurant_Le_24",
        "uri": "Restaurant_Le_24",
        "category": "fruit_de_mer"
    }
    ,
    {
      id: 2,
      nom: "The Jungle Marseille",
      slogan: "Brunch & Lunch",
      description: "Sumérgete en un oasis tropical en el corazón de Marsella con The Jungle Restaurant. Disfruta de platos exóticos y cócteles vibrantes rodeado de exuberante vegetación y una atmósfera cautivadora. Perfecto para una experiencia culinaria única.",
      adresse: "68 Rue Breteuil 13006",
      téléphone: "",
      prix: "",
      horaires: "• Martes a viernes: 10:30 AM - 4 PM • Fin de semana: 10 AM - 4 PM La cocina cierra a las 3 PM",
      images: [jungle1, jungle2, jungle3, jungle4, jungle5, jungle6],
      avis: [
          {
              "utilisateur": "Claire_D",
              "valeur": 5,
              "commentaire": "¡Una experiencia culinaria excepcional! Los platos son deliciosos y la atmósfera tropical es hermosa. ¡Altamente recomendado!"
          },
          {
              "utilisateur": "Julien_M",
              "valeur": 5,
              "commentaire": "Un entorno increíble y cocina exótica sabrosa. The Jungle es el mejor lugar para una noche memorable en Marsella."
          },
          {
              "utilisateur": "Sophie_T",
              "valeur": 5,
              "commentaire": "Servicio impecable y decoración hermosa. Los cócteles son tan bellos como sabrosos. ¡Una dirección que debes visitar!"
          },
          {
              "utilisateur": "Marc_R",
              "valeur": 5,
              "commentaire": "Ambiente único y comida deliciosa. Pasamos una noche fantástica. ¡Gracias a todo el equipo de The Jungle!"
          },
          {
              "utilisateur": "Elodie_L",
              "valeur": 5,
              "commentaire": "¡Un descubrimiento sorprendente! Los platos son originales y bien presentados, y la atmósfera es mágica. Una experiencia que debes probar."
          }
      ],
      "siteweb": "https://vu.fr/xSlT",
      "informations_importants": {},
      "path": "Restaurants/the_jungle_marseille",
      "uri": "the_jungle_marseille",
      "category": "tropical"
  },
   {
          id: 3,
          nom: "LE SPLENDIDO",
          slogan: "Everything is homemade ❤️",
          description: "How about an Italian getaway in the heart of Marseille? Le Splendido is an Italian restaurant with increasingly surprising decor. Between truffle pasta and pizzas, your taste buds will discover the good taste of Italy.",
          adresse: "📍 16-18 rue de la République, 13001 Marseille",
          téléphone: "",
          prix: "",
          horaires: "• Tuesday to Friday: 10:30 AM - 4 PM • Weekend: 10 AM - 4 PM Kitchen closes at 3 PM",
          images: [splendido1, splendido2, splendido3, splendido4, splendido5, splendido6],
          avis: [
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
        id: 4,
        nom: "LA TABLE D’AUGUSTINE",
        slogan: "Cocina Provenzal Tradicional",
        description: "La Table d'Augustine en Marsella te invita a descubrir la auténtica cocina provenzal, inspirada en las recetas de la abuela Augustine. Situado en la pintoresca Place des Augustines, el restaurante ofrece platos tradicionales con sabores mediterráneos, preparados con productos locales de calidad. Disfruta de una atmósfera cálida y una decoración encantadora para una experiencia culinaria memorable.",
        adresse: "📍 12 place des Augustines, 13002 Marsella",
        téléphone: "0786271126",
        prix: "",
        horaires: "para ALMUERZO y CENA",
        images: [latable1, latable2, latable3, latable4],
        avis: [
            {
                "utilisateur": "Marie_P",
                "commentaire": "¡Una experiencia culinaria excepcional! Los platos son deliciosos y auténticos, con un toque provenzal. El ambiente es encantador y cálido.",
                "valeur": 5
            },
            {
                "utilisateur": "Jean_L",
                "commentaire": "Un restaurante que debes visitar en Marsella. La cocina es sabrosa y el ambiente es perfecto para una cena en familia o con amigos.",
                "valeur": 5
            },
            {
                "utilisateur": "Sophie_M",
                "commentaire": "Servicio impecable y platos exquisitos. Me encantó el toque personal de las recetas de la abuela Augustine. Definitivamente volveré.",
                "valeur": 5
            },
            {
                "utilisateur": "Lucas_R",
                "commentaire": "¡Un verdadero viaje culinario en Provenza! Los ingredientes son frescos y locales, y cada plato está cuidadosamente preparado. Muy recomendable.",
                "valeur": 5
            }
        ],
        "siteweb": "https://latabledaugustine.fr/fr/booking",
        "informations_importants": {
            "notes": "Las reservas son posibles para servicios de ALMUERZO y CENA. No dudes en contactarnos al 07 86 27 11 26. Para eventos o grupos, por favor envía tu solicitud por correo electrónico a latabledaugustine@gmail.com. Gracias y hasta pronto."
        },
        "path": "Restaurants/La_Table_D'augustine",
        "uri": "La_Table_D'augustine",
        "category": "traditionnelle"
    },
    
    {
        id: 5,
        nom: "Pizzeria L’eau à la bouche",
        slogan: "🍕 En el sitio o para llevar",
        description: "En Marsella, en el paseo marítimo de la Corniche a la entrada de la Anse de Malmousque, en el cruce de Endoume, una pequeña cabaña colorida, no más grande que un pañuelo, dentro del encanto de una casa marsellesa se ha transformado en una pizzería que te seducirá con su autenticidad. Una terraza, un piso superior y 3 mesas en el mostrador, pero sobre todo una decoración que divertirá tanto a grandes como a pequeños. Las pizzas se pueden disfrutar en el sitio o para llevar en la zona desde el almuerzo del martes hasta la noche del domingo. Las entregas solo se realizan en temporada baja: de octubre a mayo. Las reservas y pedidos son recomendables y solo se pueden hacer por teléfono al 04.91.52.16.16. Métodos de pago aceptados: CB, cheque con DNI, efectivo.",
        adresse: "120 corniche Kennedy, Marsella, Francia 13007",
        téléphone: "04.91.52.16.16",
        prix: "",
        horaires: "De martes a domingo 12 PM - 3 PM & 6 PM - 11 PM",
        images: [leaudanslabouche1, leaudanslabouche2, leaudanslabouche3, leaudanslabouche4],
        avis: [],
        "siteweb": "https://pizzerialeaualabouche.fr",
        "informations_importants": {
            "notes": "Las reservas son posibles para servicios de ALMUERZO y CENA. Gracias y hasta pronto."
        },
        "path": "Restaurants/Pizzeria_Leau_à_La_Bouche",
        "uri": "Pizzeria_Leau_à_La_Bouche",
        "category": "pizzería"
    },    
    {
        id: 6,
        nom: "New School Tacos Marseille",
        slogan: "🇫🇷 Tacos franceses reales en Marsella 🤙🏼 Atrévete a probar lo real 🤙🏼",
        description: "Descubre New School Tacos, donde la tradición y la innovación se encuentran para ofrecer tacos sabrosos y únicos. Ubicado en la ciudad, este restaurante ofrece ingredientes frescos y recetas auténticas para una experiencia culinaria inolvidable.",
        adresse: "📍 Marsella 24 rue Vacon 13001",
        téléphone: "04.91.72.10.80",
        prix: "",
        horaires: "",
        images: [newTacos1, newTacos2, newTacos3],
        avis: [
            {
                "utilisateur": "Alice P.",
                "commentaire": "¡New School Tacos ofrece los mejores tacos de la ciudad! Los ingredientes siempre son frescos y los sabores increíbles. ¡Un verdadero placer!",
                "valeur": 5
            },
            {
                "utilisateur": "Marc D.",
                "commentaire": "Gran experiencia en New School Tacos. Las porciones son generosas y las recetas innovadoras. Definitivamente volveré.",
                "valeur": 4
            },
            {
                "utilisateur": "Sophie L.",
                "commentaire": "¡Me encanta este restaurante! Los tacos son deliciosos y el ambiente es amistoso. El servicio es rápido y los precios razonables.",
                "valeur": 5
            },
            {
                "utilisateur": "Lucas M.",
                "commentaire": "Muy satisfecho con mi visita a New School Tacos. Los sabores son auténticos y los tacos bien rellenos. ¡Muy recomendable!",
                "valeur": 4
            },
            {
                "utilisateur": "Emma R.",
                "commentaire": "¡Un descubrimiento fantástico! Los tacos son sabrosos y variados. El personal es acogedor y el ambiente es agradable.",
                "valeur": 5
            },
            {
                "utilisateur": "Julien B.",
                "commentaire": "New School Tacos se ha convertido en mi lugar favorito para tacos. Los ingredientes de calidad y las recetas originales lo convierten en un lugar que debes visitar.",
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
        id: 7,
        nom: "Marcella Trattoria",
        slogan: "Pasta fresca 🍝, pizzas 🍕, productos frescos de temporada, ¡todo es hecho a mano!",
        description: "Explora los sabores de Italia en Marcella Trattoria, donde la tradición se encuentra con la innovación en cada plato. Ubicado en el corazón de [ubicación], nuestro restaurante ofrece una experiencia gastronómica italiana auténtica con un toque moderno. Desde pasta fresca hasta pizzas artesanales y postres deliciosos, cada bocado es un viaje a través de las diversas regiones de Italia. Ya sea que estés disfrutando de una cena romántica para dos o celebrando una ocasión especial, Marcella Trattoria promete una experiencia culinaria inolvidable llena de pasión y sabor.",
        adresse: "📍 1140 rue André Ampère, Place Actimart, Aix-en-Provence, Francia 13290",
        téléphone: "04 12 20 03 05",
        prix: "",
        horaires: "Abierto de lunes a viernes para almuerzo.",
        images: [marcela1, marcela2, marcela3, marcela4, marcela5],
        avis: [
            {
                "utilisateur": "Albert L.",
                "commentaire": "Marcella Trattoria ofrece una experiencia culinaria italiana auténtica. La pasta fresca y las pizzas artesanales son simplemente deliciosas. ¡Un lugar que debes visitar!",
                "valeur": 5
            },
            {
                "utilisateur": "Julien R.",
                "commentaire": "Me encantó cada momento pasado en Marcella Trattoria. El servicio es impecable y los platos están preparados con cuidado y pasión. Definitivamente volveré.",
                "valeur": 4
            }
        ],
        "siteweb": "",
        "informations_importants": {},
        "path": "Restaurants/Marcella_Trattoria",
        "uri": "Marcella_Trattoria",
        "category": "italiana"
    }
    
  
    ];

    const nights_club= [
      {
          id: 1,
          nom: "LE ROOFTOP",
          slogan: "La azotea más excepcional de Europa",
          description: "¡Nuevo en la azotea! Acceso gratuito de 19 a 21 horas. Después de un largo día de trabajo, relájate con un suntuoso atardecer, cóctel en mano, y disfruta de nuestras tablas gourmet para vivir una experiencia inolvidable. Quédese a pasar la noche y descubra nuestros diferentes ambientes...",
          prix: "desde 100 euros",
          adresse: "Les Terrasses du Port, 9 Quai du Lazaret 13002 - Marseille",
          téléphone: "06 70 36 78 35",
          horaires: "7:00 PM - 2:00 AM",
          images: [rooftop1, rooftop2, rooftop3, rooftop4, rooftop5, rooftop6, rooftop7, rooftop8],
          avis: [
            {
              utilisateur: "Alex R.",
              commentaire: "¡La azotea es el lugar ideal para estar el sábado por la noche! La música siempre es de primera y el ambiente es eléctrico. ¡No puedo esperar a regresar!",
              valeur: 5 
            },
            {
              utilisateur: "Mia T.",
              commentaire: "¡Lo pasé increíble en el Rooftop! Los DJ son de primer nivel y las bebidas tienen precios razonables. Definitivamente mi nuevo lugar favorito.",
              valeur: 4
            },
            {
              utilisateur: "James L.",
              commentaire: "Great atmosphere and fantastic sound system at the Rooftop. The crowd is lively and friendly. Perfect for a night out with friends.",
              valeur: 5
            },
            {
              utilisateur: "Sophie H.",
              commentaire: "La azotea nunca decepciona. El personal es amable, la decoración es elegante y la pista de baile siempre está llena. ¡Altamente recomendado!",
              valeur: 5
            },
            {
              utilisateur: "Daniel M.",
              commentaire: "Me encantó mi experiencia en el Rooftop. La iluminación y las imágenes son asombrosas y la energía general es contagiosa. ¡Un lugar de visita obligada!",
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
          description: "SportBeach es el destino ideal para aquellos que buscan disfrutar de una combinación perfecta de vibrante vida nocturna y exquisita cocina. Ubicado a lo largo de la pintoresca playa, SportBeach ofrece impresionantes vistas que crean el escenario ideal para una noche inolvidable.",
          prix: "",
          adresse: "📍138 avenue Pierre Mendès France, 13008 Marseille",
          téléphone: "04 91 76 12 35",
          horaires: "Monday: 10:00 AM – 7:00 PM | Tuesday: 10:00 AM – 2:00 AM | Wednesday: 10:00 AM – 2:00 AM | Thursday: 10:00 AM – 2:00 AM | Friday: 10:00 AM – 2:00 AM | Saturday: 10:00 AM – 2:00 AM | Sunday: 10:00 AM – 2:00 AM",
          images: [sportbeach1, sportbeach2, sportbeach3, sportbeach4],
          avis: [
            {
              utilisateur: "Alex R.",
              commentaire: "¡SportBeach es el lugar perfecto para salir por la noche! La combinación de buena música, comida deliciosa y vistas impresionantes es inmejorable. ¡Altamente recomendado!",
              valeur: 5
            },
            {
              utilisateur: "Mia T.",
              commentaire: "¡Lo pasé increíble en SportBeach! El ambiente es fantástico, los DJ son excelentes y la comida es de primera. ¡No puedo esperar para regresar!",
              valeur: 4
            },
            {
              utilisateur: "James L.",
              commentaire: "SportBeach ofrece una experiencia inolvidable.",
              valeur: 5
            }
          ],
          siteweb: "https://sportbeach.fr",
          informations_importants: {},
          path: "Nights-club/LE_SPORT_BEACH",
          uri: "LE_SPORT_BEACH"
        }
        
    ];
    const sneakers = [
      {
          id: 1,
          nom: "SAS GALERIE SNEAKERS",
          description: "Bienvenido a SAS Galerie, el destino definitivo para los entusiastas de las zapatillas y los amantes de la moda. Ubicada en el corazón de Marsella, SAS Galerie ofrece una selección inigualable de las últimas y más buscadas zapatillas de deporte de las principales marcas mundiales.",
          adresse: "📍14 rue Montgrand, 13006 Marseille",
          téléphone: "",
          images: [sasgalerie1, sasgalerie2, sasgalerie3, sasgalerie4],
          horaires: "•Lunes——>Sábado📌 •10H——> 19H🕖",
          siteweb: "https://sasgalerie.com",
          informations_importants: {},
          path: "Sneakers/SAS_GALERIE_SNEAKERS",
          uri: "SAS_GALERIE_SNEAKERS",
          avis: [
            {
              utilisateur: "Mauris_H",
              commentaire: "La tienda es rica en modelos y moderna, me gusta mucho.",
              valeur: 5
            }
          ]
        },
        {
          id: 2,
          nom: "L’Atelier de la Basket",
          description: "L'atelier de la basket es el primer servicio online de limpieza, restauración de zapatos de lujo y zapatillas de colección, y especialista en trabajos a medida. También puede encontrarnos en nuestras tiendas de Marsella y París.",
          adresse: "📍4 rue Montgrand, Marseille, France 13006",
          téléphone: "",
          images: [basket1, basket2, basket3, basket4, basket5, basket6],
          horaires: "de lunes a sábado 11:00-12:15 / 13:15-19:00",
          siteweb: "https://www.latelierdelabasket.com",
          informations_importants: {},
          path: "Sneakers/L'Atelier_de_la_Basket",
          uri: "L'Atelier_de_la_Basket",
          category: "nettoyage et restauration",
          avis: [
            {
              utilisateur: "Lilia",
              commentaire: "Hice limpiar mis alpargatas en esta tienda y el resultado fue increíble.",
              valeur: 5
            },
            {
              utilisateur: "Adam_B",
              commentaire: "Muy bonita tienda de zapatillas.",
              valeur: 4
            }
          ]
        },
        {
          id: 3,
          nom: "OS Sneakers",
          description: "Descubra los últimos lanzamientos y las zapatillas más exclusivas en OS Sneakers, su destino ideal para todo lo relacionado con el calzado. Manténgase a la vanguardia de las tendencias con nuestra selección de zapatillas auténticas y de alta gama de las mejores marcas mundiales.",
          adresse: "📍67 ruda Francis Davso, 13001 Marseille",
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
              commentaire: "Encontré los últimos lanzamientos y mis alpargatas favoritas en esta tienda.",
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
          description: "Descubra la experiencia vibrante e innovadora de Cinéma La Joliette, ubicada en el corazón de Marsella, Francia. Este cine es una verdadera obra maestra del diseño moderno, con una disposición de asientos única y colorida que mejora su experiencia cinematográfica. Con su divertida combinación de pufs, cómodas sillas acolchadas y una combinación de colores dinámica, Cinéma La Joliette crea un ambiente acogedor y acogedor para todos los visitantes. El cine ofrece una variada selección de películas, desde los últimos éxitos de taquilla hasta películas independientes e internacionales. Tanto si es un entusiasta del cine como si simplemente busca pasar una velada divertida, Cinéma La Joliette satisface todos los gustos y preferencias. Su ubicación estratégica en Marsella la hace de fácil acceso, lo que le permitirá explorar la vibrante cultura y las atracciones de la ciudad antes o después de su película. Cinéma La Joliette no es sólo un lugar para ver películas; es un destino donde la creatividad, la comodidad y el entretenimiento se unen para brindar una experiencia cinematográfica inolvidable. Ven a disfrutar de la magia del cine en un entorno tan cautivador como las propias películas en Cinéma La Joliette.",
          adresse: "54 rue de Chanterac 13002 Marseille, France",
          téléphone: "",
          prix: "",
          images: [cinema1, cinema2, cinema3],
          avis: [
            {
              utilisateur: "Joseph",
              commentaire: "Increíble",
              valeur: 5
            },
            {
              utilisateur: "Sandy",
              commentaire: "Fue una buena experiencia visitar este cine.",
              valeur: 3
            }
          ],
          informations_importants: {},
          path: "Activités/Cinéma_La_Joliette",
          uri: "Cinéma_La_Joliette",
          category: "cinema"
        }
        
  ];  
   const locations=[
      {
        id: 1,
        nom: "Vita Loca",
        slogan: "Alquiler de scooters en Marsella",
        description: "¡Alquile una Vespa para explorar la región de Marsella, desde las calas más bellas de la costa azul hasta Cassis, pasando por la Corniche y sus numerosas playas!",
        adresse: "📍8 Calle de la Loge, 13002 Marseille",
        téléphone: "07.68.62.36.83",
        prix: "55£ EUR",
        images: [vitaloca_vespa3, vitaloca_vespa2, vitaloca_vespa1],
        avis: [
          {
            "utilisateur": "Chloe_B",
            "commentaire": "¡Un fantástico servicio de la Agencia Vespa en Marsella! Los scooters estaban impecables y el personal muy servicial. ¡Definitivamente vamos a estar de vuelta!",
            "valeur": 5
          },
          {
            "utilisateur": "Marc_M",
            "commentaire": "Me encantó la facilidad de alquiler y la calidad de los scooters. El equipo es muy profesional y atento. Una experiencia impecable.",
            "valeur": 4
          },
          {
            "utilisateur": "Isabelle_N",
            "commentaire": "Servicio rápido y eficaz, con scooters en excelentes condiciones. El personal fue muy amable y servicial. Una excelente manera de descubrir Marsella.",
            "valeur": 5
          },
          {
            "utilisateur": "Pauline_L",
            "commentaire": "¡Gran experiencia! Los scooters eran perfectos y el servicio al cliente fue increíble. La Agencia Vespa en Marsella es, con diferencia, el mejor alquiler de scooters que he utilizado.",
            "valeur": 5
          }
        ],
        "informations_importants": {
          "tarifs": [
            "Día: 55 EUR / 65 EUR",
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
        id: 2,
        nom: "Fais Ta Loc",
        slogan: "Alquiler de Vespas",
        description: "Alquile una Vespa en Marsella y descubra los bellos rincones y calas de Marsella en una Vespa.",
        adresse: "8 Ruda Félix Éboué, 13002",
        téléphone: "0749289844",
        prix: "45 EUR per day",
        images: [vespa1,vespa2,vespa3],
        avis: [
          {
            "utilisateur": "JeanDupont92",
            "commentaire": "¡Servicio excepcional! La Agencia Vespa en Marsella hizo que nuestro viaje fuera inolvidable. Las motos estaban en perfectas condiciones y el personal muy acogedor.",
            "valeur": 5
          },
          {
            "utilisateur": "Marie_Lyon",
            "commentaire": "¡Qué gran experiencia! El servicio de atención al cliente es de primera y las scooters Vespa son perfectas para descubrir Marsella. Muy recomendable.",
            "valeur": 5
          },
          {
            "utilisateur": "Lucas_Toulouse",
            "commentaire": "Agencia muy profesional con scooters de calidad. El personal es amable y está dispuesto a ayudar. ¡Una excelente manera de explorar la ciudad!",
            "valeur": 5
          },
          {
            "utilisateur": "Sophie_Paris",
            "commentaire": "Alquilamos dos Vespas para el fin de semana y todo salió perfecto. Gracias a la Agencia Vespa por su impecable servicio.",
            "valeur": 5
          },
          {
            "utilisateur": "AlexandreNice",
            "commentaire": "¡Servicio de primera clase! Los scooters estaban como nuevos y el proceso de alquiler fue rápido y sencillo. Muy Satisfecho.",
            "valeur": 5
          }
        ],
        "informations_importants": {
          "tarifs": [
            "Dìa: 45 EUR",
            "24h: 50 EUR",
            "48h: 90 EUR"
          ],
          "conditions_de_résérvation": [
            "125 cc:",
             "Depósito: 800 EUR a 1000 EUR según modelos disponibles",
             "Edad mínima: 20 años",
             "Carnet B con un mínimo de 2 años de experiencia y el carnet de 125 cc o carnet de moto",
             "Identificación válida",
             "Con el alquiler se proporcionan guantes, cascos y candados",
             "50 cc:",
             "Depósito: 500 EUR",
             "Edad mínima: 20 años",
             "Licencia B o licencia equivalente AM (BSR)",
             "Identificación válida",
             "Con el alquiler se proporcionan guantes, cascos y candados"
          ],
          "notes": [
            "Cualquier depósito pagado y no utilizado quedará en manos del arrendador y no será reembolsado. Asimismo, cualquier scooter devuelto antes de la fecha de finalización del contrato no será reembolsado durante los días restantes hasta la finalización del contrato acordada.",
            "En caso de daños en la moto, los gastos se descontarán de la fianza abonada por el arrendatario. Además, se aplicará una deducción por los días que la moto esté inmovilizada para compensar la pérdida de ingresos sufrida por el arrendador."
             ]
        },
        "path": "locations/Fais_Ta_Loc",
        "uri": "Fais_Ta_Loc"
      }
    ];
  const opticiens=[
      {
        id: 1,
        nom: "ov_optic",
        description: "Bienvenido a ov_optic, su experto en salud visual, realice exámenes de la vista precisa y una gran selección de gafas y lentes para un confort óptimo. Descubra nuestro servicio personalizado en el corazón de Marsella.",
        adresse: "• OV OPTIC - 93 Avenue des poilus 13013 Marseille 📞 0413203026. • OV OPTIC 2 - 141 chemin de château gombert 13013 📞 0491707720.",
        téléphone: "0413203026 ou 049170772",
        images: [ov_optic1, ov_optic2],
        avis: [],
        "résérvation": "http://wa.me/message/SXA7U3LZYWQZO1",
        "path": "Opticiens/Ov_Optic",
        "uri": "Ov_Optic"
      },
      {
        id: 2,
        nom: "Au Bon Oeil",
        description: "💫Tu óptica independiente en Marsella📍 ",
        adresse: "2 Boulevard Icard, Marsella, Francia 13010",
        téléphone: "+33 6 23 97 24 33",
        images: [au_bon_oeil1, au_bon_oeil2, au_bon_oeil3,au_bon_oeil4, au_bon_oeil5],
        avis: [
          {
            "utilisateur": "Lucas_R",
            "commentaire": "¡Súper experiencia! Gran elección de muebles y un servicio al cliente irreprochable. Je suis très satisfait de mes nouvelles lunettes.",
            "valeur": 5
          },
          {
            "utilisateur": "Marie_L",
            "commentaire": "Bienvenida cálida y profesional. Mis hijos y yo encontramos gafas que a todos nos gustan. ¡Gracias visionaria!",
            "valeur": 5
          }
        ],
        horaires: "",
        "résérvation": "https://vu.fr/BHqde",
        "path": "Opticiens/Au_Bon_Oeil",
        "uri": "Au_Bon_Oeil"
      }
    ]
  const coiffeurs=[
      {
        id: 1,
        nom: "L’ATELIER DE ZAIDI",
        slogan: "Peluquería - Barbero - Entrenador",
        description: "Bienvenido a L'Atelier Zaidi, su destino definitivo para una experiencia de peluquería excepcional. Ubicado en el corazón de la ciudad, nuestro salón ofrece un ambiente elegante y acogedor donde el talento se encuentra con la pasión. Nuestros barberos expertos se dedican a brindar cortes de cabello impecables, recortes de barba precisos y atención personalizada, utilizando técnicas modernas y productos de alta calidad. Ya sea que busque un look clásico o un toque contemporáneo, L'Atelier Zaidi está aquí para realzar su estilo con un toque de excelencia y sofisticación.",
        prix: "de 15 euros a 50 euros",
        adresse: "87 Calle de Rome, Marsella, Francia 13006",
        téléphone: "09 88 56 30 88",
        horaires: "Lunes : 12h00 - 19h00, Martes : 9h00 - 19h00, Miércoles : 9h00 - 19h00, JUEVES : 9h00 - 19h00, Viernes : 9h00 - 12h00 et 14h00 - 19h00, SÁBADO  : 9h00 - 19h00, Domingo : Fermé",
        images: [barber1, barber2, barber3, barber4, barber5],
        avis: [
          {
            "utilisateur": "John_S.",
            "commentaire": "¡Atelier Zaidi es mi barbería preferida! El ambiente es muy acogedor y los barberos son increíblemente hábiles. ¡Siempre salgo sintiéndome como un millón de dólares!",
            "valeur": 5
          },
          {
            "utilisateur": "Emily_M.",
            "commentaire": "¡Me topé con Atelier Zaidi y no podría estar más feliz! El servicio fue impecable y realmente se tomaron el tiempo para entender lo que querías. ¡Muy recomendable!",
            "valeur": 5
          },
          {
            "utilisateur": "David_B.",
            "commentaire": "¡Gran experiencia en Atelier Zaidi! El personal es amable y el corte de pelo fue perfecto. ¡Definitivamente regresaremos por más!",
            "valeur": 4
          },
          {
            "utilisateur": "Sarah_L.",
            "commentaire": "Atelier Zaidi superó mis expectativas. La atención al detalle y la calidad del corte son inigualables. ¡Una joya en el vecindario!",
            "valeur": 5
          },
          {
            "utilisateur": "Michael_P.",
            "commentaire": "Llevo años yendo a Atelier Zaidi y siempre ofrecen un servicio de primera. No es sólo un corte de pelo; ¡es una experiencia!",
            "valeur": 5
          },
          {
            "utilisateur": "Jessica_K.",
            "commentaire": "Si buscas una barbería que combine estilo y profesionalidad, Atelier Zaidi es el lugar indicado. ¡Siempre satisfechos con su trabajo!",
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
        id: 1,
        nom: "DONUTS COFFEE in Marseille",
        description: "Ambiente agradable y personal acogedor, ideal para una pausa para el café.",
        adresse: " 9 Quai de la Joliette, 13002 Marsella",
        téléphone: "04.91.72.10.80",
        horaires: "Abierto 7/7 - 10am to 2am",
        prix: "Precio unitario de 2 EUR a 9 EUR",
        images: [donut1,donut2,donut3],
        avis: [
          {
            "utilisateur": "Mark_R",
            "commentaire": "Uno de los mejores donuts que he probado en mi vida.",
            "valeur": 5
          },
          {
            "utilisateur": "Linda_B",
            "commentaire": "El espacio era muy tranquilo y los camareros eran muy amables. Me encanta el lugar y el donut <3!",
            "valeur": 4
          }
        ],
        "siteweb": "https://linktr.ee/DonutsCoffee.fr",
        "informations_importants": {},
        "path": "Cafées-et-biscuitrie/DONUTS_COFFEE_à_Marseille",
        "uri": "DONUTS_COFFEE_à_Marseille",
        "category": "Donuts"
      },
      {
        id: 2,
        nom: "180° Artisan Biscuitery",
        description: "¡Galletas artesanales 180° 🌟 en Marsella para una experiencia auténtica y gourmet! Disfrute de especialidades locales como lanzaderas y canistrelli, todos preparados sin colorantes ni conservantes. Opciones sin gluten disponibles. ¡Visite el corazón de Bompard para descubrir sabores únicos y tradicionales!",
        adresse: "📍Bulevar Bompard, 39 Marseille 7th",
        téléphone: "",
        horaires:"Martes a sábado: 8:30am-1pm and 4pm-7:30pm, Sunday: 9am-1pm",
        prix: "No identificado",
        images: [biscuit1, biscuit2, biscuit3],
        avis: [
          {
            "utilisateur": "Jean_D",
            "commentaire": "",
            "valeur": 4
          },
          {
            "utilisateur": "Lukas_S",
            "commentaire": "Muy buenas galletas, personal amable y un espacio tranquilo. Definitivamente lo visitaré nuevamente cuando esté en Marsella <3",
            "valeur": 5
          }
        ],
        "siteweb": "https://le-grand-pastis.com/180-la-biscuiterie-tradition-endoume-marseille",
        "informations_importants": {},
        "path": "Cafées-et-biscuitrie/180_Biscuitrie_Arisanale",
        "uri": "180_Biscuitrie_Arisanale",
        "category": "Biscuiterie"
      }
    ];
   const hébergements=[];
    const CategoryParams=[
      {
          name:"Restaurants",
          element:restaurants,
          description:"¡Descubre los mejores restaurantes de Marsella y déjanos reservarte las mejores mesas! Hemos seleccionado los establecimientos más auténticos, espectaculares azoteas, pintorescos cafés y restaurantes festivos donde el ambiente se prolonga hasta bien entrada la noche.",
          filter:[],
          image:'RestoCat.jpg',
          path:'Restaurants'
      },
     
      {
          name:"Coiffeurs",
          element:coiffeurs,
          description:"¡Descubre los mejores peluqueros de Marsella y déjanos ayudarte a encontrar el salón perfecto para tus necesidades de cuidado del cabello! Hemos seleccionado los salones más prestigiosos, desde barberos tradicionales hasta los estudios de peluquería más modernos, para que puedas encontrar el estilo que mejor se adapte a ti.",
          filter:[],
          image:'CoiffeurCat.jpg',
          path:'Coiffeurs'
      },
      {
          name:"Cafées et biscuitrie",
          element:cafées_et_biscuitrie,
          description:"¡Descubre los mejores cafés y pastelerías de Marsella y déjanos guiarte hasta los establecimientos con más encanto de la ciudad! Hemos seleccionado las cafeterías más acogedoras, desde tradicionales salones de té hasta pastelerías artesanales, para que puedas saborear deliciosos momentos de relax.",
          filter:[],
          image:'cafeCat.jpg',
          path:'Cafées-et-biscuitrie'
      },
      {
          name:"Opticiens",
          element:opticiens,
          description:"Descubra las mejores ópticas de Marsella para obtener un asesoramiento personalizado y unas gafas adaptadas a su estilo y a sus necesidades. Ya sea que esté buscando monturas modernas, lentes correctivos de alta calidad o lentes de contacto, nuestros ópticos asociados ofrecen una experiencia y un servicio al cliente excepcionales. Concierte una cita online y disfrute de orientación profesional para un confort visual óptimo.",
          filter:[],
          image:ov_optic1,
          path:'Opticiens'
      },
      {
          name:"Locations",
          element:locations,
          description:"Descubre las mejores opciones de alquiler de coches y Vespas en Marsella para explorar la ciudad y sus alrededores a tu propio ritmo. Ya sea que necesite un coche para un viaje por carretera o una Vespa para recorrer las pintorescas callejuelas, hemos seleccionado las mejores ofertas para usted.",
          filter:[],
          image:vitaloca_vespa3,
          path:'Locations'
      },
      {
          name:"Activités",
          element:activités,
          description:"Marsella está llena de actividades apasionantes para todos los gustos y edades. Explore los tesoros de la ciudad a través de visitas guiadas, caminatas por la naturaleza, actividades acuáticas o talleres creativos. Ya sea que esté en familia, con amigos o solo, déjese encantar por nuestra selección de actividades imprescindibles para vivir momentos memorables y descubrir Marsella desde una nueva perspectiva.",
          filter:[],
          image:cinema1,
          path:'Activités'
      },
     
      {
          name:"Sneakers",
          element:sneakers,
          description:"Descubre las mejores tiendas de zapatillas de Marsella y déjate cautivar por las últimas tendencias urbanas. Ya sea que busque modelos exclusivos, clásicos atemporales o creaciones originales, hemos enumerado las direcciones de visita obligada para usted.",
          filter:[],
          image:'sneakersCat.jpg',
          path:'Sneakers'
      },
      {
          name:"Nights club",
          element:nights_club,
          description:"Sumérgete en la vibrante vida nocturna de Marsella descubriendo las mejores discotecas de la ciudad. Desde el ambiente electrizante de las discotecas hasta las veladas íntimas en los bares de copas, Marsella ofrece multitud de lugares para divertirse hasta el amanecer. Baile con sesiones de DJ, disfrute de actuaciones en vivo y saboree cócteles refinados en entornos únicos. Reserva tus noches y prepárate para vivir noches inolvidables.",
          filter:[],
          image:'nightsClubcat.jpg',
          path:'Nights-Club'
      },
      {
          name:"Hébergements",
          element:hébergements,
          description:"Marsella ofrece una variedad de alojamientos encantadores y acogedores, adecuados para todos los presupuestos y preferencias. Descubra una selección de hoteles elegantes, hostales acogedores y cómodos alquileres vacacionales, cada uno de los cuales ofrece una experiencia única en el corazón de esta dinámica ciudad. Ya sea que busque lujo, sencillez o una estancia auténtica, déjese seducir por nuestra gama de alojamientos para disfrutar plenamente de su visita a Marsella. Viva momentos inolvidables y haga de su estancia una auténtica escapada a Marsella.",
          filter:[],
          image:'hotelMarseille.jpg',
          path:"Hébergements"
      }
      
  ]  
    const es = {
        image1_phrase :" Donde el sol del Mediterráneo abraza el alma vibrante de Francia.",
        image2_phrase :"Marsella, con sus majestuosos calanques y su pintoresco puerto antiguo, ofrece una belleza natural y cultural incomparable.Una cautivadora combinación de encanto del viejo mundo y encanto moderno. ",
        image3_phrase :"Embárcate en un viaje en el tiempo, desde las ruinas romanas hasta el arte contemporáneo.",
        image4_phrase :"Deja que el ritmo de las olas te guíe por una ciudad de infinitas posibilidades.",
    
        resultat_de_recherche:"Resultados de la búsqueda",
        popup_adresse_visit_btn:"visitar",
        search_input:"bùsqueda Destinos",
        search_message:"Ingrese palabras clave antes de buscar !",
        no_result:"No se han encontrado resultados !",
    
        comp2_about_us:"Sobre nosotras",
        comp2__question: "qué estás buscando ?",
        comp2_title:"Descubra los mejores destinos en Marsella",
        comp2_paragraph:"Este sitio está diseñado para ayudarte a encontrar tu destino ideal, ya sea que visites la ciudad por primera vez o seas un visitante habitual. Gracias a nuestras recomendaciones detalladas y consejos de expertos, podrá explorar los tesoros escondidos de Marsella y disfrutar plenamente de su estancia. Navega fácilmente por las diferentes opciones de ocio, déjanos ser tu guía en esta magnífica ciudad mediterránea.",
        comp2_button:"Mejores Destinos",

    
        comp1_what_to_search :"Qué estás buscando ?",
        comp1_title:"Mejores Destinos",
        comp1_paragraph:"Explora la vibrante cultura, los impresionantes paisajes y los tesoros escondidos de Marsella, ¡tu escapada perfecta te espera!",
    
        best_restaurants:"Los mejores restaurantes de Marsella",
        slider_title:"¡Descubre los restaurantes mejor valorados de Marsella!",
        Restaurants:"Restaurantes",
        slider_button:"Explora más",
        explore:"Explora",


        category_filter1:"Pizzería",
        category_filter2:"Tacos",
        category_filter3:"Mariscos",
        category_filter4:"cocina italiana",
        category_filter5:"tradicional",
        category_filter6:"Tropical",
        category_filter7:"Donas",
        category_filter8:"Galletas",
        category_filter9:"Limpieza y restauración",
        category_filter10:"Cine",
    
        description_title:"Descripción",
        form_title:'Formulario de reservación:',
        form_name_placeholder:"Nombre completo",
        form_email_placeholde:"Your Email",
        form_phone_placeholde:"Su número de teléfono",
        form_nbre_adultes_placeholder:"Numero de adultas",
        form_nbre_enfants_placeholder:"Número de niños",
        date:"fecha",
        hour:"hora",
        message:"Tu mensaje",
        form_submit_default:"Enviar",
        form_submit_loading:"Enviando...",
        alert_reservation :"para reservar rellene el formulario de arriba",

        avis:"Reseñas",
        not_found:"extraviado",
        prix:"Precio",
        Horaires:"Horarios",
        Notation:"Notas",
        conditions_de_résérvation:"condiciones reserva",
    
        nights_club,
        sneakers : [
          {
              id: 1,
              nom: "SAS GALERIE SNEAKERS",
              description: "Bienvenido a SAS Galerie, el destino definitivo para los entusiastas de las zapatillas y los amantes de la moda. Ubicada en el corazón de Marsella, SAS Galerie ofrece una selección inigualable de las últimas y más buscadas zapatillas de deporte de las principales marcas mundiales.",
              adresse: "📍14 rue Montgrand, 13006 Marseille",
              téléphone: "",
              images: [sasgalerie1, sasgalerie2, sasgalerie3, sasgalerie4],
              horaires: "•Lunes——>Sábado📌 •10H——> 19H🕖",
              siteweb: "https://sasgalerie.com",
              informations_importants: {},
              path: "Sneakers/SAS_GALERIE_SNEAKERS",
              uri: "SAS_GALERIE_SNEAKERS",
              avis: [
                {
                  utilisateur: "Mauris_H",
                  commentaire: "La tienda es rica en modelos y moderna, me gusta mucho.",
                  valeur: 5
                }
              ]
            },
            {
              id: 2,
              nom: "L’Atelier de la Basket",
              description: "L'atelier de la basket es el primer servicio online de limpieza, restauración de zapatos de lujo y zapatillas de colección, y especialista en trabajos a medida. También puede encontrarnos en nuestras tiendas de Marsella y París.",
              adresse: "📍4 rue Montgrand, Marseille, France 13006",
              téléphone: "",
              images: [basket1, basket2, basket3, basket4, basket5, basket6],
              horaires: "de lunes a sábado 11:00-12:15 / 13:15-19:00",
              siteweb: "https://www.latelierdelabasket.com",
              informations_importants: {},
              path: "Sneakers/L'Atelier_de_la_Basket",
              uri: "L'Atelier_de_la_Basket",
              category: "nettoyage et restauration",
              avis: [
                {
                  utilisateur: "Lilia",
                  commentaire: "Hice limpiar mis alpargatas en esta tienda y el resultado fue increíble.",
                  valeur: 5
                },
                {
                  utilisateur: "Adam_B",
                  commentaire: "Muy bonita tienda de zapatillas.",
                  valeur: 4
                }
              ]
            },
            {
              id: 3,
              nom: "OS Sneakers",
              description: "Descubra los últimos lanzamientos y las zapatillas más exclusivas en OS Sneakers, su destino ideal para todo lo relacionado con el calzado. Manténgase a la vanguardia de las tendencias con nuestra selección de zapatillas auténticas y de alta gama de las mejores marcas mundiales.",
              adresse: "📍67 ruda Francis Davso, 13001 Marseille",
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
                  commentaire: "Encontré los últimos lanzamientos y mis alpargatas favoritas en esta tienda.",
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
              description: "Descubra la experiencia vibrante e innovadora de Cinéma La Joliette, ubicada en el corazón de Marsella, Francia. Este cine es una verdadera obra maestra del diseño moderno, con una disposición de asientos única y colorida que mejora su experiencia cinematográfica. Con su divertida combinación de pufs, cómodas sillas acolchadas y una combinación de colores dinámica, Cinéma La Joliette crea un ambiente acogedor y acogedor para todos los visitantes. El cine ofrece una variada selección de películas, desde los últimos éxitos de taquilla hasta películas independientes e internacionales. Tanto si es un entusiasta del cine como si simplemente busca pasar una velada divertida, Cinéma La Joliette satisface todos los gustos y preferencias. Su ubicación estratégica en Marsella la hace de fácil acceso, lo que le permitirá explorar la vibrante cultura y las atracciones de la ciudad antes o después de su película. Cinéma La Joliette no es sólo un lugar para ver películas; es un destino donde la creatividad, la comodidad y el entretenimiento se unen para brindar una experiencia cinematográfica inolvidable. Ven a disfrutar de la magia del cine en un entorno tan cautivador como las propias películas en Cinéma La Joliette.",
              adresse: "54 rue de Chanterac 13002 Marseille, France",
              téléphone: "",
              prix: "",
              images: [cinema1, cinema2, cinema3],
              avis: [
                {
                  utilisateur: "Joseph",
                  commentaire: "Increíble",
                  valeur: 5
                },
                {
                  utilisateur: "Sandy",
                  commentaire: "Fue una buena experiencia visitar este cine.",
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
            id: 1,
             nom: "Vita Loca",
            slogan: "Alquiler de scooters en Marsella",
            description: "¡Alquile una Vespa para explorar la región de Marsella, desde las calas más bellas de la costa azul hasta Cassis, pasando por la Corniche y sus numerosas playas!",
            adresse: "📍8 Calle de la Loge, 13002 Marseille",
            téléphone: "07.68.62.36.83",
            prix: "55£ EUR",
            images: [vitaloca_vespa3,vitaloca_vespa2,vitaloca_vespa1],
            avis: [
              {
                "utilisateur": "Chloe_B",
                "commentaire": "¡Un fantástico servicio de la Agencia Vespa en Marsella! Los scooters estaban impecables y el personal muy servicial. ¡Definitivamente vamos a estar de vuelta!",
                "valeur": 5
              },
              {
                "utilisateur": "Marc_M",
                "commentaire": "Me encantó la facilidad de alquiler y la calidad de los scooters. El equipo es muy profesional y atento. Una experiencia impecable.",
                "valeur": 4
              },
              {
                "utilisateur": "Isabelle_N",
                "commentaire": "Servicio rápido y eficaz, con scooters en excelentes condiciones. El personal fue muy amable y servicial. Una excelente manera de descubrir Marsella.",
                "valeur": 5
              },
              {
                "utilisateur": "Pauline_L",
                "commentaire": "¡Gran experiencia! Los scooters eran perfectos y el servicio al cliente fue increíble. La Agencia Vespa en Marsella es, con diferencia, el mejor alquiler de scooters que he utilizado.",
                "valeur": 5
              }
            ],
            "informations_importants": {
              "tarifs": [
                "Día: 55 EUR / 65 EUR",
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
            id: 2,
            nom: "Fais Ta Loc",
            slogan: "Alquiler de Vespas",
            description: "Alquile una Vespa en Marsella y descubra los bellos rincones y calas de Marsella en una Vespa.",
            adresse: "8 Ruda Félix Éboué, 13002",
            téléphone: "0749289844",
            prix: "45 EUR per day",
            images: [vespa1,vespa2,vespa3],
            avis: [
              {
                "utilisateur": "JeanDupont92",
                "commentaire": "¡Servicio excepcional! La Agencia Vespa en Marsella hizo que nuestro viaje fuera inolvidable. Las motos estaban en perfectas condiciones y el personal muy acogedor.",
                "valeur": 5
              },
              {
                "utilisateur": "Marie_Lyon",
                "commentaire": "¡Qué gran experiencia! El servicio de atención al cliente es de primera y las scooters Vespa son perfectas para descubrir Marsella. Muy recomendable.",
                "valeur": 5
              },
              {
                "utilisateur": "Lucas_Toulouse",
                "commentaire": "Agencia muy profesional con scooters de calidad. El personal es amable y está dispuesto a ayudar. ¡Una excelente manera de explorar la ciudad!",
                "valeur": 5
              },
              {
                "utilisateur": "Sophie_Paris",
                "commentaire": "Alquilamos dos Vespas para el fin de semana y todo salió perfecto. Gracias a la Agencia Vespa por su impecable servicio.",
                "valeur": 5
              },
              {
                "utilisateur": "AlexandreNice",
                "commentaire": "¡Servicio de primera clase! Los scooters estaban como nuevos y el proceso de alquiler fue rápido y sencillo. Muy Satisfecho.",
                "valeur": 5
              }
            ],
            "informations_importants": {
              "tarifs": [
                "Dìa: 45 EUR",
                "24h: 50 EUR",
                "48h: 90 EUR"
              ],
              "conditions_de_résérvation": [
                "125 cc:",
                 "Depósito: 800 EUR a 1000 EUR según modelos disponibles",
                 "Edad mínima: 20 años",
                 "Carnet B con un mínimo de 2 años de experiencia y el carnet de 125 cc o carnet de moto",
                 "Identificación válida",
                 "Con el alquiler se proporcionan guantes, cascos y candados",
                 "50 cc:",
                 "Depósito: 500 EUR",
                 "Edad mínima: 20 años",
                 "Licencia B o licencia equivalente AM (BSR)",
                 "Identificación válida",
                 "Con el alquiler se proporcionan guantes, cascos y candados"
              ],
              "notes": [
                "Cualquier depósito pagado y no utilizado quedará en manos del arrendador y no será reembolsado. Asimismo, cualquier scooter devuelto antes de la fecha de finalización del contrato no será reembolsado durante los días restantes hasta la finalización del contrato acordada.",
                "En caso de daños en la moto, los gastos se descontarán de la fianza abonada por el arrendatario. Además, se aplicará una deducción por los días que la moto esté inmovilizada para compensar la pérdida de ingresos sufrida por el arrendador."
                 ]
            },
            "path": "locations/Fais_Ta_Loc",
            "uri": "Fais_Ta_Loc"
          }
        ],
      opticiens:[
          {
            id: 1,
            nom: "ov_optic",
            description: "Bienvenido a ov_optic, su experto en salud visual, realice exámenes de la vista precisa y una gran selección de gafas y lentes para un confort óptimo. Descubra nuestro servicio personalizado en el corazón de Marsella.",
            adresse: "• OV OPTIC - 93 Avenue des poilus 13013 Marseille 📞 0413203026. • OV OPTIC 2 - 141 chemin de château gombert 13013 📞 0491707720.",
            téléphone: "0413203026 ou 049170772",
            images: [ov_optic1, ov_optic2],
            avis: [],
            "résérvation": "http://wa.me/message/SXA7U3LZYWQZO1",
            "path": "Opticiens/Ov_Optic",
            "uri": "Ov_Optic"
          },
          {
            id: 2,
            nom: "Au Bon Oeil",
            description: "💫Tu óptica independiente en Marsella📍 ",
            adresse: "2 Boulevard Icard, Marsella, Francia 13010",
            téléphone: "+33 6 23 97 24 33",
            images: [au_bon_oeil1, au_bon_oeil2, au_bon_oeil3,au_bon_oeil4, au_bon_oeil5],
            avis: [
              {
                "utilisateur": "Lucas_R",
                "commentaire": "¡Súper experiencia! Gran elección de muebles y un servicio al cliente irreprochable. Je suis très satisfait de mes nouvelles lunettes.",
                "valeur": 5
              },
              {
                "utilisateur": "Marie_L",
                "commentaire": "Bienvenida cálida y profesional. Mis hijos y yo encontramos gafas que a todos nos gustan. ¡Gracias visionaria!",
                "valeur": 5
              }
            ],
            horaires: "",
            "résérvation": "https://vu.fr/BHqde",
            "path": "Opticiens/Au_Bon_Oeil",
            "uri": "Au_Bon_Oeil"
          }
        ]
        ,
      restaurants,
      coiffeurs:[
          {
            id: 1,
            nom: "L’ATELIER DE ZAIDI",
            slogan: "Peluquería - Barbero - Entrenador",
            description: "Bienvenido a L'Atelier Zaidi, su destino definitivo para una experiencia de peluquería excepcional. Ubicado en el corazón de la ciudad, nuestro salón ofrece un ambiente elegante y acogedor donde el talento se encuentra con la pasión. Nuestros barberos expertos se dedican a brindar cortes de cabello impecables, recortes de barba precisos y atención personalizada, utilizando técnicas modernas y productos de alta calidad. Ya sea que busque un look clásico o un toque contemporáneo, L'Atelier Zaidi está aquí para realzar su estilo con un toque de excelencia y sofisticación.",
            prix: "de 15 euros a 50 euros",
            adresse: "87 Calle de Rome, Marsella, Francia 13006",
            téléphone: "09 88 56 30 88",
            horaires: "Lunes : 12h00 - 19h00, Martes : 9h00 - 19h00, Miércoles : 9h00 - 19h00, JUEVES : 9h00 - 19h00, Viernes : 9h00 - 12h00 et 14h00 - 19h00, SÁBADO  : 9h00 - 19h00, Domingo : Fermé",
            images: [barber1, barber2, barber3, barber4, barber5],
            avis: [
              {
                "utilisateur": "John_S.",
                "commentaire": "¡Atelier Zaidi es mi barbería preferida! El ambiente es muy acogedor y los barberos son increíblemente hábiles. ¡Siempre salgo sintiéndome como un millón de dólares!",
                "valeur": 5
              },
              {
                "utilisateur": "Emily_M.",
                "commentaire": "¡Me topé con Atelier Zaidi y no podría estar más feliz! El servicio fue impecable y realmente se tomaron el tiempo para entender lo que querías. ¡Muy recomendable!",
                "valeur": 5
              },
              {
                "utilisateur": "David_B.",
                "commentaire": "¡Gran experiencia en Atelier Zaidi! El personal es amable y el corte de pelo fue perfecto. ¡Definitivamente regresaremos por más!",
                "valeur": 4
              },
              {
                "utilisateur": "Sarah_L.",
                "commentaire": "Atelier Zaidi superó mis expectativas. La atención al detalle y la calidad del corte son inigualables. ¡Una joya en el vecindario!",
                "valeur": 5
              },
              {
                "utilisateur": "Michael_P.",
                "commentaire": "Llevo años yendo a Atelier Zaidi y siempre ofrecen un servicio de primera. No es sólo un corte de pelo; ¡es una experiencia!",
                "valeur": 5
              },
              {
                "utilisateur": "Jessica_K.",
                "commentaire": "Si buscas una barbería que combine estilo y profesionalidad, Atelier Zaidi es el lugar indicado. ¡Siempre satisfechos con su trabajo!",
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
            id: 1,
            nom: "DONUTS COFFEE in Marseille",
            description: "Ambiente agradable y personal acogedor, ideal para una pausa para el café.",
            adresse: " 9 Quai de la Joliette, 13002 Marsella",
            téléphone: "04.91.72.10.80",
            horaires: "Abierto 7/7 - 10am to 2am",
            prix: "Precio unitario de 2 EUR a 9 EUR",
            images: [donut1,donut2,donut3],
            avis: [
              {
                "utilisateur": "Mark_R",
                "commentaire": "Uno de los mejores donuts que he probado en mi vida.",
                "valeur": 5
              },
              {
                "utilisateur": "Linda_B",
                "commentaire": "El espacio era muy tranquilo y los camareros eran muy amables. Me encanta el lugar y el donut <3!",
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
            id: 2,
            nom: "180° Artisan Biscuitery",
            description: "¡Galletas artesanales 180° 🌟 en Marsella para una experiencia auténtica y gourmet! Disfrute de especialidades locales como lanzaderas y canistrelli, todos preparados sin colorantes ni conservantes. Opciones sin gluten disponibles. ¡Visite el corazón de Bompard para descubrir sabores únicos y tradicionales!",
            adresse: "📍Bulevar Bompard, 39 Marseille 7th",
            téléphone: "",
            horaires:"Martes a sábado: 8:30am-1pm and 4pm-7:30pm, Sunday: 9am-1pm",
            prix: "No identificado",
            images: [biscuit1, biscuit2, biscuit3],
            avis: [
              {
                "utilisateur": "Jean_D",
                "commentaire": "",
                "valeur": 4
              },
              {
                "utilisateur": "Lukas_S",
                "commentaire": "Muy buenas galletas, personal amable y un espacio tranquilo. Definitivamente lo visitaré nuevamente cuando esté en Marsella <3",
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
            name:"Restaurantes",
            img:splendido4,
            URI:"Restaurants"
        },
        {
            name:"Discotecas",
            img:sportbeach3,
            URI:"Nights-Club"
        },
        {
            name:"Ubicaciones de vespas",
            img:vitaloca_vespa3,
            URI:"Locations"
        },
        {
            name:"Actividades",
            img:cinema2,
            URI:"Activités"
        },
        {
            name:"ópticas",
            img:au_bon_oeil1,
            URI:"Opticiens"
        },
        {
            name:"Cafés y galletas",
            img:donut3,
            URI:"Cafées-et-biscuitrie"
        },
        {
            name:"peluquería",
            img:barber3,
            URI:"/Coiffeurs"
        },
        {
            name:"Zapatillas",
            img:OS3,
            URI:"Sneakers"
        },
        {
            name:"Alojamientos",
            img:hotels,
            URI:"Hébergements"
        }
    
    
      ],
      CategoryParams
    
        
      };
      
   export default es;