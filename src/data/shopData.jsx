import kitsImages from "../assets/soro work/soro kit/kitsimages";
import pillsImages from "../assets/soro work/soro mdma Xanax 2b/pillsimages";
import naturalSupplementImages from "../assets/soro work/soro natural suppliments/naturalsupplimentimages";

const pills = [
  {
    id: "101",
    title: "2-CB",
    description:
      "2-CB is a psychedelic drug of the 2C family. It is a substituted phenethylamine and a member of the 2C family of drugs. It is known for its hallucinogenic effects and is often used recreationally. Minimum quantity available for shipping is 30 pills.",
    start_price: 110,
    end_price: 820,
    image1: pillsImages[0],
    image2: pillsImages[1],
  },
  {
    id: "102",
    title: "150mg MDMA",
    description:
      "150mg MDMA is a popular recreational drug known for its euphoric and empathogenic effects. It is often used in social settings. Each pill contains 150mg of MDMA. Minimum quantity available for shipping is 30 pills.",
    start_price: 100,
    end_price: 720,
    image1: pillsImages[2],
    image2: pillsImages[12],
    image3: pillsImages[14],
    image4: pillsImages[6],
  },
  {
    id: "112",
    title: "200mg MDMA",
    description:
      "200mg MDMA is a popular recreational drug known for its euphoric and empathogenic effects. It is often used in social settings. Each pill contains 200mg of MDMA. Minimum quantity available for shipping is 30 pills.",
    start_price: 140,
    end_price: 870,
    image1: pillsImages[3],
    image2: pillsImages[13],
  },
  {
    id: "103",
    title: "Xanax 2mg",
    description:
      "Xanax is a medication used to treat anxiety and panic disorders. It is also known for its calming effects. Each pill contains a 2mg of alprazolam. Minimum quantity available for shipping is 30 pills.",
    start_price: 120,
    end_price: 900,
    image1: pillsImages[4],
    image2: pillsImages[5],
  },
  {
    id: "143",
    title: "LSD Vial",
    description:
      "LSD Vial is a liquid form of LSD, a powerful hallucinogenic drug. It is known for its intense and long-lasting effects. Minimum quantity available for shipping is 5ml",
    start_price: 120,
    end_price: 850,
    image1: pillsImages[42],
    image2: pillsImages[43],
    image3: pillsImages[44],
    image4: pillsImages[45],
  },
  {
    id: "104",
    title: "DMT Cartridge",
    description:
      "DMT cartridges are used for vaping and provide a fast-acting psychedelic experience. Known for its intense and short-lived effects. The minimum quantity available is 3 cartidges.",
    start_price: 160,
    end_price: 560,
    image1: pillsImages[8],
    image2: pillsImages[7],
    image3: pillsImages[20],
  },
  {
    id: "105",
    title: "Fentanyl Injection (2ml)",
    description:
      "Fentanyl is a powerful synthetic opioid used for pain management.",
    start_price: 200,
    end_price: 500,
    image1: pillsImages[9],
  },
  {
    id: "106",
    title: "Lion's Breath Vape",
    description:
      "Lion's Breath Vape is a premium vape product known for its smooth flavor and high-quality ingredients. It is designed for a satisfying vaping experience. The minimum quantity available is 3 vapes.",
    start_price: 100,
    end_price: 600,
    image1: pillsImages[10],
  },
  {
    id: "144",
    title: "MDMA Crystal",
    description:
      "MDMA Crystal is a pure form of MDMA, a popular recreational drug known for its euphoric and empathogenic effects. It is often used in social settings. The minimum quantity available is 2 grams.",
    start_price: 160,
    end_price: 560,
    image1: pillsImages[46],
    image2: pillsImages[47],
    image3: pillsImages[48],
  },
  {
    id: "107",
    title: "Mango Kiwi Flavored Vape",
    description:
      "Mango Kiwi Flavored Vape is a delicious vape product that combines the tropical flavors of mango and kiwi. It is designed for a satisfying vaping experience. The minimum quantity available is 3 vapes.",
    start_price: 130,
    end_price: 620,
    image1: pillsImages[11],
  },
  {
    id: "109",
    title: "Pen Vape",
    description:
      "Pen Vape is a portable vaping device that offers convenience and ease of use. It is designed for a satisfying vaping experience. The minimum quantity available is 3 vapes.",
    start_price: 110,
    end_price: 500,
    image1: pillsImages[16],
    image2: pillsImages[15],
    image3: pillsImages[17],
  },
  {
    id: "133",
    title: "Ketamine Powder",
    description:
      "Ketamine Crystal is a powerful anesthetic and dissociative drug known for its unique effects. Minimum quantity available for shipping is 3 grams.",
    start_price: 180,
    end_price: 800,
    image1: pillsImages[39],
    image2: pillsImages[40],
    image3: pillsImages[41],
  },
  {
    id: "110",
    title: "Xanax",
    description:
      "Xanax is a medication used to treat anxiety and panic disorders. It is also known for its calming effects. Minimum quantity available for shipping is 30 pills.",
    start_price: 100,
    end_price: 800,
    image1: pillsImages[18],
    image2: pillsImages[19],
  },
  {
    id: "150",
    title: "LSD Blotter",
    description:
      "LSD (Lysergic acid diethylamide) Blotter is a type of LSD blotter gel that is known for its potency and unique designs. Each tab contains 300mcg. Minimum quantity available for shipping is 1 sheets (10*10).",
    start_price: 250,
    end_price: 600,
    image1: pillsImages[21],
    image2: pillsImages[22],
    image3: pillsImages[23],
  },
  {
    id: "152",
    title: "N,N-DMT",
    description:
      "N,N-DMT (N,N-Dimethyltryptamine) is a powerful psychedelic compound known for its intense and short-lived effects. The minimum quantity available is 3 grams.",
    start_price: 180,
    end_price: 700,
    image1: pillsImages[24],
    image2: pillsImages[25],
    image3: pillsImages[26],
  },
  {
    id: "172",
    title: "Blue Xanax",
    description:
      "Blue Xanax is a medication used to treat anxiety, muscle spasms, and seizures. It is also known for its calming effects. Minimum quantity available for shipping is 30 pills.",
    start_price: 100,
    end_price: 700,
    image1: pillsImages[27],
  },
  {
    id: "177",
    title: "Ketamine Liquid",
    description:
      "Ketamine Liquid (10ml) is a powerful anesthetic and dissociative drug known for its unique effects (50mg per ml). The minimum quantity available is 10ml.",
    start_price: 180,
    end_price: 850,
    image1: pillsImages[28],
  },
  {
    id: "188",
    title: "LSD Sheets",
    description:
      "LSD (Lysergic acid diethylamide) Sheets are paper-like type of LSD that is known for its potency and unique designs. Each sheet contains 100 tabs of 100mcg. Minimum quantity available for shipping is 1 sheets (10*10).",
    start_price: 140,
    end_price: 700,
    image1: pillsImages[29],
    image2: pillsImages[30],
    image3: pillsImages[31],
    image4: pillsImages[32],
  },
  {
    id: "182",
    title: "Crystal Methamphetamine",
    description:
      "Crystal Methamphetamine (Ice) is a powerful stimulant drug known for its intense and lasting effects. The minimum quantity available for shipping is 2 grams.", 
    start_price: 120,
    end_price: 600,
    image1: pillsImages[33],
    image2: pillsImages[34],
    image3: pillsImages[35],
  },
  {
    id: "180",
    title: "5-MeO-DMT",
    description:
      "5-MeO-DMT (5-Methoxy-N,N-Dimethyltryptamine) is a powerful psychedelic compound known for its intense and short-lived effects. The minimum quantity available is 3 grams.",
    start_price: 160,
    end_price: 800,
    image1: pillsImages[36],
    image2: pillsImages[37],
    image3: pillsImages[38],
  },
];


const kits = [
    {
    id: "201",
    title: "Mycelium Syringe",
    description:
      "A sterile syringe filled with mycelium culture, perfect for inoculating your substrate.",
    start_price: 80,
    end_price: 400,
    image1: kitsImages[0],
    },
    {
        id: "202",
        title: "Organic Grow Kit",
        description: "Branded organic grow kit with everything you need to start growing mushrooms.",
        start_price: 100,
        end_price: 500,
        image1: kitsImages[1],
    },
    {
        id: "203",
        title: "PE Spore Syringe",
        description: "A sterile syringe filled with Penis Envy spore culture, perfect for inoculating your substrate.",
        start_price: 90,
        end_price: 450,
        image1: kitsImages[2],
    },
    {
        id: "204",
        title: "Uncolonised Complete Grow Setup",
        description:
          "A complete grow setup that is uncolonized, ready for you to inoculate with your favorite spores. Containing substrate Bag, spray bottle, sterilizer, spore syringe",
        start_price: 150,
        end_price: 700,
        image1: kitsImages[3],
    },
    {
        id: "205",
        title: "Automated Fruiting Tent",
        description:
          "An automated fruiting tent designed for optimal mushroom growth conditions.",
        start_price: 300,
        end_price: 800,
        image1: kitsImages[4],
    },
    {
        id: "206",
        title: "Colonized Golden Teacher substrate",
        description:"A substrate bag that is already colonized with Golden Teacher mycelium, ready for fruiting.",
        start_price: 220,
        end_price: 600,
        image1: kitsImages[5],
    },
    {
        id: "207",
        title: "Colonized Penis Envy Substrate",
        description:
          "A substrate bag that is already colonized with Penis Envy mycelium, ready for fruiting.",
        start_price: 200,
        end_price: 500,
        image1: kitsImages[6],
    },
    {
        id: "208",
        title: "Grow Kit tools",
        description:
          "A complete kit with everything you need to start growing mushrooms, including substrate block, and tools.",
        start_price: 200,
        end_price: 600,
        image1: kitsImages[7],
    },
    {
        id: "209",
        title: "Fruiting Chamber",
        description:
          "A chamber designed for fruiting mushrooms, providing optimal humidity and airflow.",
        start_price: 180,
        end_price: 400,
        image1: kitsImages[8],
    },
    {
        id: "210",
        title: "Fruiting Chamber",
        description:
          "An alternative design for a fruiting chamber, providing optimal conditions for mushroom growth.",
        start_price: 170,
        end_price: 380,
        image1: kitsImages[9],
    },
    {
      id: "211",
      title: "Fruiting Tent",
      description:
        "A tent designed for fruiting mushrooms, providing optimal humidity and airflow.",
      start_price: 200,
      end_price: 500,
      image1: kitsImages[10],
    },
    {
      id: "212",
      title: "Full Kit with Sanitizers",
      description:
        "Branded grow kit with sanitizers and everything you need to start included to ensure a clean growing environment.",
      start_price: 300,
      end_price: 800,
      image1: kitsImages[11],
    },
    {
      id: "213",
      title: "Grow Tent",
      description:
        "A tent designed for growing mushrooms, providing optimal conditions for growth.",
      start_price: 250,
      end_price: 600,
      image1: kitsImages[12],
    },
    {
      id: "214",
      title: "GT Spore Syringe",
      description:
        "A sterile syringe filled with Golden Teacher spore culture, perfect for inoculating your substrate.",
      start_price: 90,
      end_price: 450,
        image1: kitsImages[13],
      image2: kitsImages[14],
    },
];

const naturalSupplement = [
  {
    id: "301",
    title: "Dried GT Mushroom",
    description:
      "Get dried Golden Teachers mushrooms as little as half OZ or as much as 2LP, perfect for microdosing or recreational use.",
    start_price: 180,
    end_price: 1800,
    image1: naturalSupplementImages[0],
    image2: naturalSupplementImages[8],
    image3: naturalSupplementImages[6],
    image4: naturalSupplementImages[24],
  },
  {
    id: "302",
    title: "Safe Herb Mushroom Chocolate Bars",
    description:
      "This is our special Safe Herb chocolate bar, each bar contains 8 serving of mushroom-infused chocolate bars, each containing 200mg of psilocybin. Customizable to your liking. Minimum quantity available for shipping is 4 packs.",
    start_price: 150,
    end_price: 500,
    image1: naturalSupplementImages[1],
  },
  {
    id: "303",
    title: "40 Caps Mushroom Microdosing",
    description:
      "TMT is a branded mushroom capsule containing 40 capsules of mushroom microdosing, perfect for enhancing creativity and focus. Each capsule contains 6.25mg of psilocybin. Customizable to your liking on request.",
    start_price: 180,
    end_price: 700,
    image1: naturalSupplementImages[2],
    image2: naturalSupplementImages[3],
  },
  {
    id: "304",
    title: "Cannabis Toast Crunch",
    description:
      "A delicious cannabis-infused cereal treat, perfect for a sweet snack. Minimum quantity available for shipping is 4 packs. ",
    start_price: 110,
    end_price: 400,
    image1: naturalSupplementImages[4],
  },
  {
    id: "305",
    title: "Dank Cannabis Gummy",
    description:
      "A gummy infused with cannabis, providing a sweet and relaxing experience.Minimum quantity available for shipping is 4 packs.",
    start_price: 80,
    end_price: 300,
    image1: naturalSupplementImages[5],
  },
  {
    id: "307",
    title: "Golden Teachers Capsules",
    description:
      "Capsules carefully measured and filled with Golden Teacher mushrooms, perfect for microdosing. Each capsule contains 0.6mg of psilocybin. Customizable to your liking on request. Minimum quantity available for shipping is 30 pills.",
    start_price: 180,
    end_price: 900,
    image1: naturalSupplementImages[7],
  },
  {
    id: "309",
    title: "Marshmallow Chocolate Bar",
    description:
      "A delicious branded marshmallow chocolate bar infused with psilocybin. Minimum quantity available for shipping is 4 packs",
    start_price: 150,
    end_price: 350,
    image1: naturalSupplementImages[9],
  },
  {
    id: "310",
    title: "Doce Microdosing Chocolate Bars",
    description:
      "Branded Chocolate bars infused with psilocybin, perfect for microdosing. Each bar contains 200mg of psilocybin. Minimum quantity available for shipping is 4 packs.",
    start_price: 120,
    end_price: 400,
    image1: naturalSupplementImages[10],
    image2: naturalSupplementImages[11],
  },
  {
    id: "311",
    title: "Penis Envy Microdosing Capsule",
    description:
      "Capsules carefully measured and filled with penis envy, perfect for microdosing. Each capsule contains 0.6mg of psilocybin. Customizable to your liking on request. Minimum quantity available for shipping is 30 pills.",
    start_price: 200,
    end_price: 900,
    image1: naturalSupplementImages[12],
  },
  {
    id: "361",
    title: "Dried PE Mushroom",
    description:
      "Get dried Penis Envy mushrooms as little as half OZ or as much as 2lp, perfect for microdosing or recreational use.",
    start_price: 200,
    end_price: 2000,
    image1: naturalSupplementImages[26],
    image2: naturalSupplementImages[27],
    image3: naturalSupplementImages[28],
  },
  {
    id: "312",
    title: "Mushies Chocolate Bar",
    description:
      "A quality branded psilocybin chocolate bar. Made to suit the user desires, can be used for therapeutic and recreational purposes. Minimum quantity available for shipping is 4 packs.",
    start_price: 100,
    end_price: 600,
    image1: naturalSupplementImages[13],
  },
  {
    id: "344",
    title: "Myco Bar",
    description:
      "A quality branded psilocybin chocolate bar. Made to suit the user desires, can be used for therapeutic and recreational purposes. Minimum quantity available for shipping is 4 packs.",
    start_price: 110,
    end_price: 600,
    image1: naturalSupplementImages[16],
  },
  {
    id: "384",
    title: "PolkaDot Chocolate Bars",
    description:
      "A quality branded psilocybin chocolate bar. Made to suit the user desires, can be used for therapeutic and recreational purposes. Minimum quantity available for shipping is 4 packs.",
    start_price: 150,
    end_price: 900,
    image1: naturalSupplementImages[19],
  },
  {
    id: "324",
    title: "Mush Love Chocolate Bar",
    description:
      "A quality branded psilocybin chocolate bar. Made to suit the user desires, can be used for therapeutic and recreational purposes, Minimum quantity available for shipping is 4 packs.",
    start_price: 130,
    end_price: 700,
    image1: naturalSupplementImages[15],
    image2: naturalSupplementImages[14],
  },
  {
    id: "358",
    title: "One Up Chocolate Bar",
    description:
      "A quality branded psilocybin chocolate bar. Made to suit the user desires, can be used for therapeutic and recreational purposes.  Minimum quantity available for shippong is 4 packs.",
    start_price: 150,
    end_price: 800,
    image1: naturalSupplementImages[18],
    image2: naturalSupplementImages[17],
    image3: naturalSupplementImages[25],
    image4: naturalSupplementImages[32],
  },
  {
    id: "391",
    title: "Psilocybin Gummies",
    description:
      "Psilocybin-infused gummies, perfect for a sweet and psychedelic experience. Minimum quantity available for shipping is 4 packs.",
    start_price: 100,
    end_price: 600,
    image1: naturalSupplementImages[20],
  },
  {
    id: "338",
    title: "Stoney Patch Gummies",
    description:
      "THC-infused gummies, perfect for a sweet and relaxing experience. Minimum quantity available for shipping is 4 packs.",
    start_price: 100,
    end_price: 500,
    image1: naturalSupplementImages[21],
  },
  {
    id: "372",
    title: "THC Edibles",
    description:
      "THC-infused edibles, perfect for a sweet and relaxing experience.  Minimum quantity available for shipping is 4 packs.",
    start_price: 120,
    end_price: 600,
    image1: naturalSupplementImages[22],
    image2: naturalSupplementImages[29],
    image3: naturalSupplementImages[30],
    image4: naturalSupplementImages[31],
  },
  {
    id: "377",
    title: "Trolli Sour Brite Crawlers",
    description:
      "Sour gummy worms infused with THC, perfect for a sweet and relaxing experience. Minimum quantity available for shipping is 4 packs.",
    start_price: 120,
    end_price: 600,
    image1: naturalSupplementImages[23],
  },
];



const allItems = [...pills, ...kits, ...naturalSupplement]; // Combine shopdData


export { pills, kits, naturalSupplement, allItems };