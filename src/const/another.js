import IMAGES from 'const/images'


const productsData = [
    {
        "id": 1,
        brand: "Apple",
        "category": "Phones",
        "price": 936.34,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "iPhone 14 Pro Max",
        "starRating": 5.0,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ purple: IMAGES.iphone14pro_purple }, { black: IMAGES.iphone14pro_black }, { white: IMAGES.iphone14pro_white }, { yellow: IMAGES.iphone14pro_yellow }],
        "imageUrl": IMAGES.iphone14pro_purple
    },
    {
        "id": 2,
        brand: "Apple",
        "category": "Phones",
        "price": 248.82,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "iPhone 14",
        "starRating": 4.2,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ red: IMAGES.iphone14_red }, { lightblue: IMAGES.iphone14_blue }, { purple: IMAGES.iphone14_purple }, { yellow: IMAGES.iphone14_yellow }],
        "imageUrl": IMAGES.iphone14_red
    },
    {
        "id": 3,
        brand: "Samsung",
        "category": "Phones",
        "price": 729.36,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Galaxy S23 Ultra",
        "starRating": 4.7,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ lightblue: IMAGES.s23Ultra_blue }, { gray: IMAGES.s23Ultra_gray }, { lightyellow: IMAGES.s23Ultra_white }, { black: IMAGES.s23Ultra_black }],
        "imageUrl": IMAGES.s23Ultra_gray
    },
    {
        "id": 4,
        brand: "Samsung",
        "category": "Phones",
        "price": 553.50,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Galaxy S23",
        "starRating": 4.3,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ black: IMAGES.s23_black }, { white: IMAGES.s23_white }],
        "imageUrl": IMAGES.s23_black
    },
    {
        "id": 5,
        brand: "Samsung",
        "category": "Phones",
        "price": 638.27,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Galaxy S22",
        "starRating": 3.2,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ white: IMAGES.s22_white }, { green: IMAGES.s22_green }, { pink: IMAGES.s22_pink }, { black: IMAGES.s22_black }],
        "imageUrl": IMAGES.s22_white
    },
    {
        "id": 6,
        brand: "Samsung",
        "category": "Phones",
        "price": 280.25,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Galaxy A73",
        "starRating": 4.6,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ white: IMAGES.a73_green }],
        "imageUrl": IMAGES.a73_green
    },
    {
        "id": 7,
        brand: "Apple",
        "category": "Phones",
        "price": 338.39,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "iPhone 12",
        "starRating": 3.1,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ purple: IMAGES.iphone12_purple }, { white: IMAGES.iphone12_white }],
        "imageUrl": IMAGES.iphone12_purple
    },
    {
        "id": 8,
        brand: "Samsung",
        "category": "Phones",
        "price": 238.97,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Galaxy Z-Flip 4",
        "starRating": 4.4,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ lightblue: IMAGES.zflip4 }],
        "imageUrl": IMAGES.zflip4
    },
    {
        "id": 9,
        brand: "Samsung",
        "category": "Phones",
        "price": 929.23,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Galaxy Z-Fold 4",
        "starRating": 5.0,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ black: IMAGES.zfold4 }],
        "imageUrl": IMAGES.zfold4
    },
    {
        "id": 10,
        brand: "Apple",
        "category": "Phones",
        "price": 71.16,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "iPhone SE 2",
        "starRating": 3.1,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ black: IMAGES.iphonese_black }],
        "imageUrl": IMAGES.iphonese_black
    },
    {
        "id": 11,
        brand: "Goolge",
        "category": "Phones",
        "price": 300.26,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Pixel 7",
        "starRating": 3.9,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ white: IMAGES.pixel7 }],
        "imageUrl": IMAGES.pixel7
    },
    {
        "id": 12,
        brand: "Apple",
        "category": "Phones",
        "price": 815.76,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "iPhone 12 Plus",
        "starRating": 3.2,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ white: IMAGES.iphone12_white }, { purple: IMAGES.iphone12_purple }],
        "imageUrl": IMAGES.iphone12_white
    },
    {
        "id": 13,
        brand: "Apple",
        "category": "Phones",
        "price": 104.51,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "iPhone 13",
        "starRating": 3.9,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ purple: IMAGES.iphone13_purple }, { green: IMAGES.iphone13_green }],
        "imageUrl": IMAGES.iphone13_purple
    },
    {
        "id": 14,
        brand: "Apple",
        "category": "Phones",
        "price": 362.27,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "iPhone 13 Pro",
        "starRating": 4.5,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ lightblue: IMAGES.iphone13pro_blue }, { gold: IMAGES.iphone13pro_gold }],
        "imageUrl": IMAGES.iphone13pro_blue
    },
    {
        "id": 15,
        brand: "Apple",
        "category": "Phones",
        "price": 159.64,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "iPhone 13 Plus",
        "starRating": 4.6,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ green: IMAGES.iphone13_green }, { purple: IMAGES.iphone13_purple }],
        "imageUrl": IMAGES.iphone13_green
    },
    {
        "id": 16,
        brand: "Apple",
        "category": "Phones",
        "price": 352.41,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "iPhone 13 Pro Max",
        "starRating": 3.2,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ gold: IMAGES.iphone13pro_gold }, { lightblue: IMAGES.iphone13pro_blue }],
        "imageUrl": IMAGES.iphone13pro_gold
    },
    {
        "id": 17,
        brand: "Samsung",
        "category": "Phones",
        "price": 545.50,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Galaxy S23+",
        "starRating": 3.4,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ black: IMAGES.s23_black }, { white: IMAGES.s23_white }],
        "imageUrl": IMAGES.s23_white,
    },
    {
        "id": 18,
        brand: "Samsung",
        "category": "Phones",
        "price": 666.91,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Galaxy S22+",
        "starRating": 3.3,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ pink: IMAGES.s22_pink }, { green: IMAGES.s22_green }, { white: IMAGES.s22_white }, { black: IMAGES.s22_black }],
        "imageUrl": IMAGES.s22_white
    },
    {
        "id": 19,
        brand: "Apple",
        "category": "Phones",
        "price": 510.65,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "iPhone 14 Plus",
        "starRating": 3.7,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ red: IMAGES.iphone14_red }, { lightblue: IMAGES.iphone14_blue }, { purple: IMAGES.iphone14_purple }, { yellow: IMAGES.iphone14_yellow }],
        "imageUrl": IMAGES.iphone14_purple
    },
    {
        "id": 20,
        brand: "Samsung",
        "category": "Phones",
        "price": 875.15,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Galaxy S20",
        "starRating": 3.9,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ lightblue: IMAGES.s20_blue }, { pink: IMAGES.s20_pink }],
        "imageUrl": IMAGES.s20_blue
    },
    {
        "id": 21,
        brand: "Samsung",
        "category": "Phones",
        "price": 962.24,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Galaxy S20+",
        "starRating": 3.3,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ lightblue: IMAGES.s20_blue }, { pink: IMAGES.s20_pink }],
        "imageUrl": IMAGES.s20_pink
    },
    {
        "id": 22,
        brand: "Asus",
        "category": "Laptops",
        "price": 143.42,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Expertbook 15",
        "starRating": 4.0,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ black: IMAGES.expertbook15 }],
        "imageUrl": IMAGES.expertbook15
    },
    {
        "id": 23,
        brand: "Asus",
        "category": "Laptops",
        "price": 79.13,
        "description": "Get ready to be blown away by this incredible laptop that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "VivoBook 13",
        "starRating": 3.5,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ black: IMAGES.vivobook13 }],
        "imageUrl": IMAGES.vivobook13
    },
    {
        "id": 24,
        brand: "Dell",
        "category": "Laptops",
        "price": 183.00,
        "description": "Get ready to be blown away by this incredible laptop that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "G15 Nvidia",
        "starRating": 3.0,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ black: IMAGES.g15 }],
        "imageUrl": IMAGES.g15
    },
    {
        "id": 25,
        brand: "Dell",
        "category": "Laptops",
        "price": 151.18,
        "description": "Get ready to be blown away by this incredible laptop that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "G16 AMD",
        "starRating": 3.1,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ black: IMAGES.g16 }],
        "imageUrl": IMAGES.g16
    },
    {
        "id": 26,
        brand: "Dell",
        "category": "Laptops",
        "price": 431.67,
        "description": "Get ready to be blown away by this incredible laptop that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Latitude 5530",
        "starRating": 4.8,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ black: IMAGES.latitude5530 }],
        "imageUrl": IMAGES.latitude5530
    },
    {
        "id": 27,
        brand: "Dell",
        "category": "Laptops",
        "price": 642.50,
        "description": "Get ready to be blown away by this incredible laptop that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "XPS 15",
        "starRating": 4.3,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ black: IMAGES.xps15 }],
        "imageUrl": IMAGES.xps15
    },
    {
        "id": 28,
        brand: "Dell",
        "category": "Laptops",
        "price": 690.55,
        "description": "Get ready to be blown away by this incredible laptop that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "XPS 13 Plus",
        "starRating": 4.0,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ gray: IMAGES.xps13plus_white }],
        "imageUrl": IMAGES.xps13plus_white
    },
    {
        "id": 29,
        brand: "Lenovo",
        "category": "Laptops",
        "price": 611.45,
        "description": "Get ready to be blown away by this incredible laptop that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Thinkpad Xtreme",
        "starRating": 4.5,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ black: IMAGES.thinkpad15 }],
        "imageUrl": IMAGES.thinkpad15
    },
    {
        "id": 30,
        brand: "Apple",
        "category": "Laptops",
        "price": 1118.84,
        "description": "Get ready to be blown away by this incredible laptop that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Macbook Air 13",
        "starRating": 3.8,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ black: IMAGES.mac_air13_black }, { gray: IMAGES.mac_air13_white }],
        "imageUrl": IMAGES.mac_air13_white
    },
    {
        "id": 31,
        brand: "Apple",
        "category": "Laptops",
        "price": 918.84,
        "description": "Get ready to be blown away by this incredible laptop that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Macbook Pro 13",
        "starRating": 3.8,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ black: IMAGES.mac_pro_13_black }, { gray: IMAGES.mac_pro_13_white }],
        "imageUrl": IMAGES.mac_pro_13_black
    },
    {
        "id": 32,
        brand: "Apple",
        "category": "Laptops",
        "price": 499.84,
        "description": "Get ready to be blown away by this incredible laptop that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Macbook Pro 14 M1",
        "starRating": 3.8,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ gray: IMAGES.mac_pro_14 }],
        "imageUrl": IMAGES.mac_pro_14
    },
    {
        "id": 33,
        brand: "Apple",
        "category": "Laptops",
        "price": 409.84,
        "description": "Get ready to be blown away by this incredible laptop that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Macbook Pro 16 M2",
        "starRating": 3.8,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ gray: IMAGES.mac_pro_16 }],
        "imageUrl": IMAGES.mac_pro_16
    },
    {
        "id": 34,
        brand: "MSI",
        "category": "Laptops",
        "price": 400.84,
        "description": "Get ready to be blown away by this incredible laptop that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Prestige 14",
        "starRating": 3.8,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ gray: IMAGES.msi_14_white }, { black: IMAGES.msi_14_black }],
        "imageUrl": IMAGES.msi_14_white
    },
    {
        "id": 35,
        brand: "MSI",
        "category": "Laptops",
        "price": 480.84,
        "description": "Get ready to be blown away by this incredible laptop that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Stealth 16",
        "starRating": 3.8,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ white: IMAGES.msi_16_white }, { black: IMAGES.msi_16_black }],
        "imageUrl": IMAGES.msi_16_white
    },
    {
        "id": 36,
        brand: "Apple",
        "category": "Watch",
        "price": 48.84,
        "description": "It's not just a timepiece, but a personal assistant on your wrist. Stay connected and tract your fitness goals in style!.",
        "model": "Watch Series 8",
        "starRating": 3.8,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ whtie: IMAGES.watch8_white }, { black: IMAGES.watch8_black }],
        "imageUrl": IMAGES.watch8_white
    },
    {
        "id": 37,
        brand: "Apple",
        "category": "Watch",
        "price": 42.84,
        "description": "Get ready to be blown away by this incredible device that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Watch Ultra",
        "starRating": 3.8,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ gray: IMAGES.watch_ultra }],
        "imageUrl": IMAGES.watch_ultra
    },
    {
        "id": 38,
        brand: "Apple",
        "category": "Tablets",
        "price": 41.84,
        "description": "Get ready to be blown away by this incredible device that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "iPad Air 5th Gen.",
        "starRating": 3.8,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ purple: IMAGES.ipadair_purple }, { pink: IMAGES.ipadair_pink }, { gold: IMAGES.ipadair_gold }],
        "imageUrl": IMAGES.ipadair_purple
    },
    {
        "id": 39,
        brand: "Apple",
        "category": "Tablets",
        "price": 411.84,
        "description": "Get ready to be blown away by this incredible device that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "iPad Pro 11'",
        "starRating": 3.8,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ whtie: IMAGES.ipadpro_white }, { gray: IMAGES.ipadpro_gray }],
        "imageUrl": IMAGES.ipadpro_white
    },
    {
        "id": 40,
        brand: "Apple",
        "category": "Tablets",
        "price": 65.84,
        "description": "Get ready to be blown away by this incredible device that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "iPad 9.7' 9th Gen.",
        "starRating": 3.8,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ white: IMAGES.ipad_white }, { gray: IMAGES.ipad_gray }],
        "imageUrl": IMAGES.ipad_white
    },
    {
        "id": 41,
        brand: "Sony",
        "category": "Console",
        "price": 462.84,
        "description": "Get ready to level up your gaming experience with this cutting edge game console. It's a game-changer!",
        "model": "Play Station 5",
        "starRating": 3.8,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ white: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/consoles/sony-ps5-console-21_1000x.png" }],
        "imageUrl": IMAGES.ps5
    },
    {
        "id": 42,
        brand: "Samsung",
        "category": "Headsets",
        "price": 423.84,
        "description": "These headsets are a total game-changer! Immerse yourself in high-quality sound and enjoy ultimate comfort.",
        "model": "Galaxy Buds Pro",
        "starRating": 3.8,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ purple: IMAGES.gbuds_purple }, { black: IMAGES.gbuds_black }, { white: IMAGES.gbuds_white }],
        "imageUrl": IMAGES.gbuds_purple
    },
    {
        "id": 43,
        brand: "Apple",
        "category": "Headsets",
        "price": 42.84,
        "description": "These headsets are a total game-changer! Immerse yourself in high-quality sound and enjoy ultimate comfort.",
        "model": "Airpods 2",
        "starRating": 3.8,
        "colors": [{ white: IMAGES.airpods2 }],
        "imageUrl": IMAGES.airpods2
    },
    {
        "id": 44,
        brand: "Apple",
        "category": "Headsets",
        "price": 465.84,
        "description": "These headsets are a total game-changer! Immerse yourself in high-quality sound and enjoy ultimate comfort.",
        "model": "Aipods Max",
        "starRating": 3.8,
        "colors": [{ lightcoral: IMAGES.airpodmax }],
        "imageUrl": IMAGES.airpodmax
    },
    {
        "id": 45,
        brand: "Beats",
        "category": "Headsets",
        "price": 481.84,
        "description": "These headsets are a total game-changer! Immerse yourself in high-quality sound and enjoy ultimate comfort.",
        "model": "Studio Buds",
        "starRating": 3.8,
        "colors": [{ black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/headsets/Beats-Studio-Buds.png" }],
        "imageUrl": IMAGES.beats
    },
    {
        "id": 46,
        brand: "JBL",
        "category": "Headsets",
        "price": 88.84,
        "description": "These headsets are a total game-changer! Immerse yourself in high-quality sound and enjoy ultimate comfort.",
        "model": "Tune 130NC",
        "starRating": 3.8,
        "colors": [{ black: IMAGES.jbl }],
        "imageUrl": IMAGES.jbl
    },
    {
        "id": 47,
        brand: "Sony",
        "category": "Headsets",
        "price": 48.84,
        "description": "These headsets are a total game-changer! Immerse yourself in high-quality sound and enjoy ultimate comfort.",
        "model": "Play Station 5 Headset",
        "starRating": 3.8,
        "colors": [{ white: IMAGES.ps5headset }],
        "imageUrl": IMAGES.ps5headset
    },
    {
        "id": 48,
        brand: "Sony",
        "category": "Headsets",
        "price": 518.84,
        "description": "These headsets are a total game-changer! Immerse yourself in high-quality sound and enjoy ultimate comfort.",
        "model": "WF-C500",
        "starRating": 3.8,
        "colors": [{ black: IMAGES.sony_wf }],
        "imageUrl": IMAGES.sony_wf
    },
    {
        "id": 49,
        brand: "Sony",
        "category": "Headsets",
        "price": 418.84,
        "description": "These headsets are a total game-changer! Immerse yourself in high-quality sound and enjoy ultimate comfort.",
        "model": "WH-CH510",
        "starRating": 3.8,
        "colors": [{ black: IMAGES.sony_wh }],
        "imageUrl": IMAGES.sony_wh
    },
    {
        "id": 50,
        brand: "Goolge",
        "category": "Phones",
        "price": 18.84,
        "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.",
        "model": "Pixel 7 Pro",
        "starRating": 3.8,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ whtie: IMAGES.pixel7ro }],
        "imageUrl": IMAGES.pixel7ro
    },
    {
        "id": 51,
        brand: "Samsung",
        "category": "Watch",
        "price": 41.84,
        "description": "It's not just a timepiece, but a personal assistant on your wrist. Stay connected and tract your fitness goals in style!.",
        "model": "Galaxy Watch 5",
        "starRating": 3.8,
        "storage": [{ "128": 0 }, { "256": 100 }],
        "colors": [{ purple: IMAGES.gwatch_purple }, { black: IMAGES.gwatch_black }],
        "imageUrl": IMAGES.gwatch_purple
    },
]

export default productsData;