import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  cheeseType: string;
  difficulty: 'Lihtne' | 'Keskmine' | 'Keeruline';
  prepTime: string;
  servings: string;
  ingredients: string[];
  instructions: string[];
  tips: string[];
  image: string;
  featured: boolean;
}

const initialRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Sinine Juust Pasta Gorgonzola Stiilis',
    description: 'Dekadentne kreemjas pasta meie kuulsa sinise juustuga - tõeline gurmeeelamus, mis ühendab Itaalia klassika Eesti meisterlikkusega.',
    cheeseType: 'Sinine Juust',
    difficulty: 'Lihtne',
    prepTime: '20 min',
    servings: '4 inimest',
    ingredients: [
      '400g kvaliteetset pastat (penne või fettuccine)',
      '200g Breti sinist juustu, tükkideks lõigatud',
      '300ml rasket koort (33%)',
      '2 küüslaugukübarat, peeneks hakitud',
      '100ml kvaliteetset valget veini',
      '50g võid',
      '100g värskeid pähkleid, peeneks hakitud',
      'Värske must pipar ja meresool',
      'Värske petersell garneerimiseks'
    ],
    instructions: [
      'Keeda pasta soolases vees al dente konsistentsini. Säilita 1 tass pastavett.',
      'Kuumuta või suures pannis keskmise tulega. Lisa küüslauk ja praadi 1 minut.',
      'Vala juurde valge vein ja lase keema. Keeda 2 minutit, kuni alkohol aurustub.',
      'Vähenda tuld ja lisa koor. Lase aeglaselt keema, segage pidevalt.',
      'Lisa sinine juust tükkide kaupa, segades kuni smuutseks kreemiks.',
      'Lisa kuivatatud pasta ja natuke pastavett. Sega õrnalt.',
      'Maitsesta pipar ja soolaga. Garneerige pähklite ja peterselliga.'
    ],
    tips: [
      'Kasuta ainult Breti sinist juustu - selle unikaalne maitse teeb roa erakordse',
      'Ära lase kastmel keema - see võib juustu kõrvetada',
      'Serveeri kohe kuumalt koos kvaliteetse valge veini või šampanjaga'
    ],
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
    featured: true
  },
  {
    id: '2',
    title: 'Tšilli Juust Mac & Cheese Deluxe',
    description: 'Klassikaline Mac & Cheese saab tulise uuenduse meie vürtsika tšillijuustuga - comfort food, mis paneb maitsemeeled tantsima.',
    cheeseType: 'Tšilli Juust',
    difficulty: 'Keskmine',
    prepTime: '35 min',
    servings: '6 inimest',
    ingredients: [
      '500g macaroni pastat',
      '300g Breti tšillijuustu, riivitud',
      '200g kvaliteetset cheddar juustu',
      '500ml täispiima',
      '50g võid',
      '3 spl jahu',
      '100g leivapuru',
      '2 spl oliiviõli',
      'Väike kimp värske tilli',
      'Sool ja valge pipar'
    ],
    instructions: [
      'Kuumuta ahi 200°C. Keeda pasta al dente ja vala ära.',
      'Valmista roux: sula või, lisa jahu ja praadi 2 minutit.',
      'Lisa piim aeglaselt, pidevalt segades. Keeda pakseks kastmeks.',
      'Eemalda tulelt ja lisa mõlemad juustud. Sega smuutseks.',
      'Sega pasta kastmega ja vala ühtlaselt vormi.',
      'Sega leivapuru oliiviõliga ja puista peale.',
      'Küpseta 20-25 minutit kuldpruuniks. Garneerige tilliga.'
    ],
    tips: [
      'Breti tšillijuust annab täiusliku vürtsikuse - ei ole vaja lisada tšillit',
      'Kasuta värskelt riivitud juustu parima tulemuse saamiseks',
      'Serveeri koos värske salati või grillitud köögiviljadega'
    ],
    image: 'https://images.pexels.com/photos/806300/pexels-photo-806300.jpeg',
    featured: true
  },
  {
    id: '3',
    title: 'Valge Juust Bruschetta Elegante',
    description: 'Rafineeritud eelroog, mis ühendab Breti valge juustu kreemjasuse värskete ürtide ja kvaliteetsete tomatitega - tõeline maitsete sümfoonia.',
    cheeseType: 'Valge Juust',
    difficulty: 'Lihtne',
    prepTime: '15 min',
    servings: '8 tükki',
    ingredients: [
      '8 viilu kvaliteetset saia või ciabatta leiba',
      '250g Breti valget juustu',
      '4 suurt küpset tomati, tükkideks',
      '3 küüslaugukübarat',
      '1 kimp värske basilikumi',
      '3 spl ekstra neitsioliiviõli',
      '1 spl balsamico äädikat',
      'Meresool ja värske must pipar',
      'Mõned oliivid garneerimiseks'
    ],
    instructions: [
      'Rösti leivad kuldpruuniks ja hõõru küüslauguga.',
      'Sega tomatid oliiviõli, balsamico, soola ja pipraga.',
      'Määri iga leivaviilu peale õhukeselt Breti valget juustu.',
      'Lisa peale tomatisegu ja värske basilikum.',
      'Tilguta peale natuke oliiviõli ja garneerige oliividega.',
      'Serveeri kohe, kuni leib on veel krõbe.'
    ],
    tips: [
      'Breti valge juust on ideaalne baas - ei varja teisi maitset',
      'Kasuta ainult kõige värskemaid tomateid',
      'Serveeri aperitiiviõhtul koos kvaliteetse Prosecco või valge veini'
    ],
    image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg',
    featured: false
  },
  {
    id: '4',
    title: 'Kõrvitsa Juust Risotto Autumnale',
    description: 'Sügisene luksuslik risotto, mis ühendab Breti kõrvitsajuustu magususe kreemja riisiga - soe embamus külmal õhtul.',
    cheeseType: 'Kõrvitsa Juust',
    difficulty: 'Keeruline',
    prepTime: '45 min',
    servings: '4 inimest',
    ingredients: [
      '300g Arborio riisi',
      '200g Breti kõrvitsajuustu, tükkideks',
      '1L sooja kanalihapuljongit',
      '200ml valget veini',
      '1 suur sibul, peeneks hakitud',
      '3 küüslaugukübarat',
      '50g võid',
      '50g Parmesani juustu',
      '2 spl oliiviõli',
      'Värske salvei ja tüümian',
      'Sool ja valge pipar'
    ],
    instructions: [
      'Kuumuta oliiviõli ja pool võid. Praadi sibul klaasistumiseni.',
      'Lisa küüslauk ja riis, praadi 2 minutit segades.',
      'Vala juurde vein ja lase aurustuda.',
      'Lisa puljong lusikaga, pidevalt segades, kuni riis on kreemjas.',
      'Sega sisse kõrvitsajuust ja ülejäänud või.',
      'Lisa Parmesan, ürdid ja maitsesta.',
      'Serveeri kohe, garneerides värske salveiga.'
    ],
    tips: [
      'Breti kõrvitsajuust annab risottole ainulaadse sügisese maitse',
      'Sega pidevalt - see on risotto saladus',
      'Serveeri koos kvaliteetse Chardonnay või Pinot Grigio'
    ],
    image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg',
    featured: true
  },
  {
    id: '5',
    title: 'Kreeka Juust Salatipommid',
    description: 'Värskendavad suupisted, mis ühendavad Breti Kreeka juustu soolasuse värskete köögiviljadega - ideaalne suveõhtu snäkk.',
    cheeseType: 'Kreeka Juust',
    difficulty: 'Lihtne',
    prepTime: '10 min',
    servings: '12 tükki',
    ingredients: [
      '200g Breti Kreeka juustu, kuubikuteks',
      '2 kurki, kuubikuteks',
      '200g kirsstomateid, pooleks',
      '1 punane sibul, õhukesteks viiludeks',
      '100g Kalamata oliive',
      '3 spl ekstra neitsioliiviõli',
      '1 spl punast veinäädikat',
      '1 tl kuivatatud oreganot',
      'Värske dill ja petersell',
      'Must pipar'
    ],
    instructions: [
      'Lõika kõik koostisosad ühtlasteks tükkideks.',
      'Sega oliiviõli, äädikas ja oregano kastmeks.',
      'Sega kõik koostisosad suures kausis.',
      'Lase 10 minutit seista, et maitsed segunevad.',
      'Garneerige värske dilli ja peterselliga.',
      'Serveeri koos pita leiva või kräkkeritega.'
    ],
    tips: [
      'Breti Kreeka juust on täiuslik - õige soolasus ja tekstuur',
      'Valmista ette ja hoia külmikus - maitseb järgmisel päeval veel paremini',
      'Ideaalne piknikule või poolpeole'
    ],
    image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg',
    featured: false
  },
  {
    id: '6',
    title: 'Ürdijuust Quiche Provençale',
    description: 'Prantsuse klassika Eesti puudutusega - õrn quiche meie aromaatse ürdijuustuga, mis toob köögisse Provence\'i lõhnad.',
    cheeseType: 'Ürdijuust',
    difficulty: 'Keskmine',
    prepTime: '60 min',
    servings: '8 tükki',
    ingredients: [
      '1 valmis taignapõhi',
      '200g Breti ürdijuustu',
      '4 suurt muna',
      '300ml rasket koort',
      '200g spinati, kuivatatud',
      '1 punane paprika, ribadeks',
      '100g päikesekuivatatud tomateid',
      '2 spl piniapähkleid',
      'Sool ja valge pipar',
      'Natuke muskaatpähklit'
    ],
    instructions: [
      'Kuumuta ahi 180°C. Voodri quiche vorm taignaga.',
      'Klopi munad koorega, lisa maitsestused.',
      'Jaota ürdijuust, spinat ja köögiviljad taignapõhjale.',
      'Vala peale munasegu ja puista piniapähklid.',
      'Küpseta 35-40 minutit kuldpruuniks.',
      'Lase 10 minutit jahtuda enne lõikamist.'
    ],
    tips: [
      'Breti ürdijuust annab quiche\'le uskumatu aroomi',
      'Eemalda spinatist kogu vesi, et quiche ei läheks märjaks',
      'Serveeri soojalt või toatemperatuuril'
    ],
    image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg',
    featured: true
  }
];

interface RecipeContextType {
  recipes: Recipe[];
  updateRecipe: (updatedRecipe: Recipe) => void;
  addRecipe: (newRecipe: Recipe) => void;
  deleteRecipe: (recipeId: string) => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

interface RecipeProviderProps {
  children: ReactNode;
}

export function RecipeProvider({ children }: RecipeProviderProps) {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);

  const updateRecipe = (updatedRecipe: Recipe) => {
    setRecipes(prev => prev.map(r => r.id === updatedRecipe.id ? updatedRecipe : r));
  };

  const addRecipe = (newRecipe: Recipe) => {
    setRecipes(prev => [...prev, newRecipe]);
  };

  const deleteRecipe = (recipeId: string) => {
    setRecipes(prev => prev.filter(r => r.id !== recipeId));
  };

  return (
    <RecipeContext.Provider value={{
      recipes,
      updateRecipe,
      addRecipe,
      deleteRecipe
    }}>
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipes must be used within a RecipeProvider');
  }
  return context;
}