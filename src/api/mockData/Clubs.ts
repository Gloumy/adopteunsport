import type { ClubDTO } from "../../models/Club";

const clubsSportVirtonArlon: ClubDTO[] = [
  // === RÉGION DE VIRTON ===
  
  // Football
  {
    nom: "Royal Excelsior Virton",
    latitude: 49.5625,
    longitude: 5.5306,
    adress: "Stade Yvan Georges, Faubourg d'Arival, 6760 Virton, Belgique",
    website: "https://www.revirton.be",
    sport: "Football",
    phoneNumber: "063 57 82 37",
    email: "contact@revirton.com"
  },
  {
    nom: "R.A.C. Saint-Mard",
    latitude: 49.55320321205538, 
    longitude: 5.521312159712086,
    adress: "Rue du stade 7, 6762 St-Mard",
    website: "",
    sport: "Football",
    phoneNumber: "063/582516",
    email: "cq.rac.saintmard@gmail.com"
  },
  {
    nom: "R.U.S. Ethe Belmont",
    latitude: 49.57935194841553, 
    longitude: 5.575376856924885,
    adress: "Place aux Ônous 1, 6760 Éthe (Virton)",
    website: "",
    sport: "Football",
    phoneNumber: "+32471748266",
    email: "bruondaniel@gmail.com"
  },
  {
    nom: "E.S. Bleid",
    latitude: 49.568369360136124, 
    longitude: 5.622556472704689,
    adress: "Rue du Buté 15, 6760 Bleid (Virton)",
    website: "",
    sport: "Football",
    phoneNumber: "063/581397",
    email: "Manuclette@hotmail.com"
  },
  {
    nom: "R.O.C. Meix-devant-Virton",
    latitude: 49.608158100741846, 
    longitude: 5.482133906623019,
    adress: "Rue De Launoy, 6769 Meix-Devant-Virton",
    website: "",
    sport: "Football",
    phoneNumber: "0032473445236",
    email: "michel.georges1959@gmail.com"
  },
  {
    nom: "F.C. Torgny-Rouvroy",
    latitude: 49.50730558281128, 
    longitude: 5.46872708761428,
    adress: "Rue Grande 6767 Torgny ",
    website: "",
    sport: "Football",
    phoneNumber: "0032470820355",
    email: "kevin.stasser@hotmail.com"
  },

  // Tennis
  {
    nom: "Tennis Club de Virton",
    latitude: 49.56608983976613, 
    longitude: 5.537202474972081,
    adress: "Complexe sportif Cour Marchal, 6760 Virton, Belgique",
    website: "",
    sport: "Tennis",
    phoneNumber: "",
    email: ""
  },
  {
    nom: "T.C. Saint-Mard",
    latitude: 49.5333,
    longitude: 5.5167,
    adress: "Rue du Stade, 6762 Saint-Mard",
    website: "https://www.facebook.com/tc.virton/",
    sport: "Tennis",
    phoneNumber: "063/57.13.47",
    email: "tennisclubvirton@gmail.com"
  },

  // Tennis de table
  {
    nom: "TTC Virton",
    latitude: 49.56659084245809, 
    longitude: 5.538071510725003,
    adress: "Salle Cour Marchal, 6760 Virton, Belgique",
    website: "",
    sport: "Tennis de table",
    phoneNumber: "",
    email: ""
  },

  // Sports de Combat
  {
    nom: "J.C. Kodokan Gaumais",
    latitude: 49.56755867044008, 
    longitude: 5.528158167756406,
    adress: "16 Rue Croix-le-Maire, Saint-Mard (6762)",
    website: "https://judoclubkodokangaumais.business.site/",
    sport: "Judo",
    phoneNumber: "",
    email: "kodokangaumais@gmail.com"
  },
  {
    nom: "Royal Judo Club Gaumais",
    latitude: 49.565837392221574, 
    longitude: 5.537037083459889,
    adress: "Complexe sportif de Virton, Cour Marchal, Belgique",
    website: "",
    sport: "Judo, Ju-Jutsu",
    phoneNumber: "",
    email: ""
  },
  {
    nom: "Aikido Club de Virton",
    latitude: 49.565837756916466, 
    longitude: 5.537297564874223,
    adress: "Complexe sportif de Virton, Cour Marchal, Belgique",
    website: "",
    sport: "Aïkido",
    phoneNumber: "",
    email: ""
  },

  // Arts énergétiques
  {
    nom: "Taichi Gaume",
    latitude: 49.5625,
    longitude: 5.5306,
    adress: "Complexe sportif de Virton, Cour Marchal, Belgique",
    website: "",
    sport: "Taï chi chuan, Qi Gong",
    phoneNumber: "+32 497 79 82 75",
    email: "monin.francois@hotmail.fr"
  },

  // Équitation
  {
    nom: "C.E. Au Chabus",
    latitude: 49.5732645879321, 
    longitude: 5.521996219125269,
    adress: "Au Chabus, 6760 Virton",
    website: "https://auchabus.be/",
    sport: "Équitation",
    phoneNumber: "0497/55 17 44",
    email: "francoise@auchabus.be"
  },
  {
    nom: "Cheval du Vent",
    latitude: 49.5667,
    longitude: 5.5333,
    adress: "Rue de Latour 2, 6760 Ethe",
    website: "https://www.lechevalduvent.be",
    sport: "Équitation",
    phoneNumber: "+32 496 08 00 53",
    email: "natachapeignois@lechevalduvent.be"
  },

  // Volleyball
  {
    nom: "Vir'Vol'Ton",
    latitude: 49.53627194289257, 
    longitude: 5.49656984871793,
    adress: "Avenue Adam 9, 6767 Rouvroy",
    website: "",
    sport: "Volleyball",
    phoneNumber: "+32 498 480037",
    email: "virvolton@gmail.com"
  },

  // Basketball
  {
    nom: "Rebond Musson",
    latitude: 49.5500,
    longitude: 5.4833,
    adress: "Musson",
    website: "",
    sport: "Basketball",
    phoneNumber: "",
    email: ""
  },

  // Autres Sports
  {
    nom: "DAMP Dampicourt",
    latitude: 49.5333,
    longitude: 5.5500,
    adress: "Dampicourt",
    website: "",
    sport: "Athlétisme",
    phoneNumber: "",
    email: ""
  },
  {
    nom: "Team Liégeois",
    latitude: 49.5667,
    longitude: 5.5333,
    adress: "6760 Virton",
    website: "",
    sport: "Cyclisme",
    phoneNumber: "",
    email: ""
  },
  {
    nom: "Golf Découverte Virton",
    latitude: 49.5667,
    longitude: 5.5333,
    adress: "6760 Virton",
    website: "",
    sport: "Golf",
    phoneNumber: "",
    email: ""
  },
  // === RÉGION D'ARLON ===

  // Fitness et Musculation
  {
    nom: "Athletic Center Arlon",
    latitude: 49.6833,
    longitude: 5.8167,
    adress: "Anciennes casernes du Callemeyn, 6700 Arlon",
    website: "athleticcenter.be",
    sport: "Fitness",
    phoneNumber: "",
    email: ""
  },
  {
    nom: "Basic-Fit Arlon Hydrion",
    latitude: 49.6833,
    longitude: 5.8167,
    adress: "Parc Hydrion, 6700 Arlon",
    website: "basic-fit.com",
    sport: "Fitness",
    phoneNumber: "",
    email: ""
  },

  // Tennis
  {
    nom: "Royal Tennis Club Arlon",
    latitude: 49.6833,
    longitude: 5.8167,
    adress: "Rue du Maitrank 62, Bonnert, 6700 Arlon",
    website: "rtcarlon.be",
    sport: "Tennis",
    phoneNumber: "063 23 60 60",
    email: "jeanpierre.k.rtca@gmail.com"
  },
  {
    nom: "Tennis Club Garisart",
    latitude: 49.68,
    longitude: 5.83,
    adress: "Zone artisanale de Weyler, Arlon, Belgique",
    website: "garisart.be",
    sport: "Tennis, Padel",
    phoneNumber: "",
    email: ""
  },
  {
    nom: "T.C. Waltzing",
    latitude: 49.6833,
    longitude: 5.8167,
    adress: "Rue Du Lingenthal 91, Bonnert 6700",
    website: "",
    sport: "Tennis",
    phoneNumber: "",
    email: ""
  },

  // Tennis de table
  {
    nom: "TT Schoppach-Arlon",
    latitude: 49.68,
    longitude: 5.82,
    adress: "Institut Cardijn Lorraine, Arlon, Belgique",
    website: "",
    sport: "Tennis de table",
    phoneNumber: "",
    email: ""
  },

  // Volleyball
  {
    nom: "Arlon Volley-Ball",
    latitude: 49.6833,
    longitude: 5.8167,
    adress: "Rue de l'Hydrion 108, 6700 Arlon",
    website: "",
    sport: "Volleyball",
    phoneNumber: "",
    email: ""
  },

  // Basketball
  {
    nom: "Club de Basketball d'Arlon",
    latitude: 49.6833,
    longitude: 5.8167,
    adress: "Rue de Hachy 112, Fouches, 6700 Arlon",
    website: "",
    sport: "Basketball",
    phoneNumber: "",
    email: ""
  },

  // Football
  {
    nom: "Football Club Arlon",
    latitude: 49.68,
    longitude: 5.82,
    adress: "Avenue de Longwy 329, 6700 Arlon, Belgique",
    website: "www.footarlon.be",
    sport: "Football",
    phoneNumber: "",
    email: ""
  },

  // Cyclisme
  {
    nom: "Cyclo Club Weyler",
    latitude: 49.68,
    longitude: 5.83,
    adress: "Weyler, Arlon, Belgique",
    website: "",
    sport: "Cyclotourisme, VTT",
    phoneNumber: "",
    email: ""
  },

  // Arts Martiaux
  {
    nom: "Sei-sen Karaté Club",
    latitude: 49.6833,
    longitude: 5.8167,
    adress: "Rue De Toernich 70, 6700 Arlon",
    website: "",
    sport: "Karaté",
    phoneNumber: "",
    email: ""
  },

  // Équitation
  {
    nom: "Centre Équestre de Viville",
    latitude: 49.6833,
    longitude: 5.8167,
    adress: "17, Rue De La Follmillen, 6700 Arlon",
    website: "",
    sport: "Équitation",
    phoneNumber: "",
    email: ""
  },

  // Escrime
  {
    nom: "Cercle Royal d'Escrime d'Arlon",
    latitude: 49.6833,
    longitude: 5.8167,
    adress: "ISMA - Salle 'Chapelle', 6700 Arlon",
    website: "",
    sport: "Escrime",
    phoneNumber: "",
    email: ""
  },

  // Danse et Bien-être
  {
    nom: "Vivre Carpe Diem",
    latitude: 49.6833,
    longitude: 5.8167,
    adress: "Rue Du Cloître 34, 6700 Arlon",
    website: "",
    sport: "Yoga",
    phoneNumber: "",
    email: ""
  },
  {
    nom: "Centre Marina Arlon",
    latitude: 49.6833,
    longitude: 5.8167,
    adress: "Rue De Bastogne 141, 6700 Arlon",
    website: "",
    sport: "Qi Gong",
    phoneNumber: "",
    email: ""
  },

  // Complexes Sportifs
  {
    nom: "Centre Adeps d'Arlon",
    latitude: 49.6833,
    longitude: 5.8167,
    adress: "6700 Arlon",
    website: "sport-adeps.be",
    sport: "Multisports",
    phoneNumber: "",
    email: ""
  },
  {
    nom: "ASBL Complexe Sportif de la Spetz",
    latitude: 49.6833,
    longitude: 5.8167,
    adress: "6700 Arlon",
    website: "",
    sport: "Multisports",
    phoneNumber: "",
    email: ""
  },

  // === RÉGION DE SAINT-LÉGER ===

  {
    nom: "Indiaka Gaume – Saint-Léger",
    latitude: 49.582,
    longitude: 5.697,
    adress: "Rue du Stade 1, 6747 Saint-Léger, Belgique",
    website: "",
    sport: "Indiaka (senior énéoSport)",
    phoneNumber: "",
    email: ""
  },
  {
    nom: "BC Saint-Léger",
    latitude: 49.60523822295553, 
    longitude: 5.651475149349525,
    adress: "Complexe sportif de Conchibois, 6747 Saint-Léger, Belgique",
    website: "",
    sport: "Badminton",
    phoneNumber: "0032 (0)63 21 89 70",
    email: ""
  },
  {
    nom: "Gaume Paintball Club ASBL",
    latitude: 49.582,
    longitude: 5.697,
    adress: "Rue de Choupa 39, 6747 Saint-Léger, Belgique",
    website: "",
    sport: "Paintball, Laser game",
    phoneNumber: "+32 498 21 07 27",
    email: "gaumepaintball@hotmail.com"
  },
  {
    nom: "Basket Club Eagles Saint-Léger",
    latitude: 49.575,
    longitude: 5.682,
    adress: "Complexe Sportif du Conchibois, Saint-Léger, Belgique",
    website: "",
    sport: "Basketball",
    phoneNumber: "",
    email: ""
  },

  // === RÉGION DE FLORENVILLE ===

  {
    nom: "Centre Sportif Local de Florenville",
    latitude: 49.687,
    longitude: 5.532,
    adress: "Rue de Carignan 62, 6820 Florenville, Belgique",
    website: "https://www.sports-florenville.be",
    sport: "Multisport (Basket, Judo, Volley, Minifoot, Danse, etc.)",
    phoneNumber: "+32 61 31 39 36",
    email: "info@sports-florenville.be"
  },
  {
    nom: "BC Florenville",
    latitude: 49.687,
    longitude: 5.532,
    adress: "Centre Sportif Florenville, 6820 Florenville, Belgique",
    website: "",
    sport: "Basketball",
    phoneNumber: "",
    email: ""
  },

  // === RÉGION DE CHINY ===

  {
    nom: "Royal Vélo Sport Jamoigne",
    latitude: 49.600,
    longitude: 5.550,
    adress: "Jamoigne, 6810 Chiny, Belgique",
    website: "",
    sport: "Cyclotourisme, VTT, Gravel",
    phoneNumber: "",
    email: ""
  }
];

export default clubsSportVirtonArlon;