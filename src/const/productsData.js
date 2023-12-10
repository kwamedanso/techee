// import IMAGES from 'const/images'


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
        "colors": [{ purple: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone14pro-purple.png" }, { black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone14pro_black.png" }, { white: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone14pro_white.png" }, { yellow: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone14pro-yellow.png" }]
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
        "colors": [{ red: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone14_red.png" }, { lightblue: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone14_blue.png" }, { purple: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone14_purple.png" }, { yellow: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone14_yellow.png" }]
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
        "colors": [{ lightblue: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/samsunggalaxy-s23ultra-blue.png" }, { gray: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/samsungs23ultra-gray.png" }, { lightyellow: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/samsungs23ultra-white.png" }, { black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/samsungs23ultra_black.png" }]
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
        "colors": [{ black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/samsunggalaxy-s23-black.png" }, { white: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/samsunggalaxy-s23-white.png" }]
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
        "colors": [{ white: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/samsunggalaxy-s22-white.png" }, { green: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/samsunggalaxy-s22-green.png" }, { pink: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/samsunggalaxy-s22-pink.png" }, { black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/samsunggalaxy-s22-black.png" }]
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
        "colors": [{ white: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/a73-green.png" }]
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
        "colors": [{ purple: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone12_purple.png" }, { white: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone12_white.png" }]
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
        "colors": [{ lightblue: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/zflip4-blue.png" }]
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
        "colors": [{ black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/zfold4-black.png" }]
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
        "colors": [{ black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphonese2-black.png" }]
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
        "colors": [{ white: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/pixel7.png" }]
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
        "colors": [{ white: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone12_white.png" }, { purple: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone12_purple.png" }]
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
        "colors": [{ purple: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone13_purple.png" }, { green: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone13-green.png" }]
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
        "colors": [{ lightblue: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone13pro-blue.png" }, { gold: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone13pro-gold.png" }]
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
        "colors": [{ green: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone13-green.png" }, { purple: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone13_purple.png" }]
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
        "colors": [{ gold: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone13pro-gold.png" }, { lightblue: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone13pro-blue.png" }]
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
        "colors": [{ black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/samsunggalaxy-s23-black.png" }, { white: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/samsunggalaxy-s23-white.png" }],
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
        "colors": [{ pink: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/samsunggalaxy-s22-pink.png" }, { green: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/samsunggalaxy-s22-green.png" }, { white: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/samsunggalaxy-s22-white.png" }, { black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/samsunggalaxy-s22-black.png" }]
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
        "colors": [{ red: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone14_red.png" }, { lightblue: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone14_blue.png" }, { purple: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone14_purple.png" }, { yellow: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone14_yellow.png" }]
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
        "colors": [{ lightblue: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/s20-blue.png" }, { pink: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/s20-pink.png" }]
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
        "colors": [{ lightblue: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/s20-blue.png" }, { pink: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/s20-pink.png" }]
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
        "colors": [{ black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/laptops/asus_expertbook_15.png" }]
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
        "colors": [{ black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/laptops/asus-vivobook_13_black.png" }]
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
        "colors": [{ black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/laptops/dell-g15.png" }]
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
        "colors": [{ black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/laptops/dell_g16.png" }]
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
        "colors": [{ black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/laptops/dell_latitude_5530.png" }]
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
        "colors": [{ black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/laptops/dell_xps15_black.png" }]
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
        "colors": [{ gray: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/laptops/dell_xps_13plus_white.png" }]
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
        "colors": [{ black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/laptops/lenovo_thinkpad_15.png" }]
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
        "colors": [{ black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/laptops/macbook_air13_black.png" }, { gray: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/laptops/macbook_air13_white.png" }]
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
        "colors": [{ black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/laptops/macbook_pro13-black.png" }, { gray: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/laptops/macbook_pro13-white.png" }]
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
        "colors": [{ gray: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/laptops/macbook-pro14-white.png" }]
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
        "colors": [{ gray: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/laptops/macbook_pro16-white.png" }]
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
        "colors": [{ gray: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/laptops/msi_prestige14_evo_white.png" }, { black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/laptops/msi_prestige14_black.png" }]
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
        "colors": [{ white: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/laptops/msi_stealth16_white.png" }, { black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/laptops/msi_stealth16_black.png" }]
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
        "colors": [{ whtie: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/watches/applewatch-series8-white.png" }, { black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/watches/applewatch-series8-black.png" }]
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
        "colors": [{ gray: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/watches/applewatch-ultra-black.png" }]
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
        "colors": [{ purple: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/tablets/air-purple.png" }, { pink: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/tablets/air-pink.png" }, { gold: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/tablets/air-gold.png" }]
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
        "colors": [{ whtie: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/tablets/pro-white.png" }, { gray: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/tablets/pro-gray.png" }]
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
        "colors": [{ white: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/tablets/ipad_white.png" }, { gray: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/tablets/ipad-gray.png" }]
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
        "colors": [{ white: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/consoles/sony-ps5-console-21_1000x.png" }]
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
        "colors": [{ purple: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/headsets/gbuds_purple.png" }, { black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/headsets/gbuds_black.png" }, { white: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/headsets/gbuds_white.png" }]
    },
    {
        "id": 43,
        brand: "Apple",
        "category": "Headsets",
        "price": 42.84,
        "description": "These headsets are a total game-changer! Immerse yourself in high-quality sound and enjoy ultimate comfort.",
        "model": "Airpods 2",
        "starRating": 3.8,
        "colors": [{ white: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/headsets/airpods2.png" }]
    },
    {
        "id": 44,
        brand: "Apple",
        "category": "Headsets",
        "price": 465.84,
        "description": "These headsets are a total game-changer! Immerse yourself in high-quality sound and enjoy ultimate comfort.",
        "model": "Aipods Max",
        "starRating": 3.8,
        "colors": [{ lightcoral: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/headsets/airpodmax.png" }]
    },
    {
        "id": 45,
        brand: "Beats",
        "category": "Headsets",
        "price": 481.84,
        "description": "These headsets are a total game-changer! Immerse yourself in high-quality sound and enjoy ultimate comfort.",
        "model": "Studio Buds",
        "starRating": 3.8,
        "colors": [{ black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/headsets/Beats-Studio-Buds.png" }]
    },
    {
        "id": 46,
        brand: "JBL",
        "category": "Headsets",
        "price": 88.84,
        "description": "These headsets are a total game-changer! Immerse yourself in high-quality sound and enjoy ultimate comfort.",
        "model": "Tune 130NC",
        "starRating": 3.8,
        "colors": [{ black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/headsets/JBL-Tune-130NC.png" }]
    },
    {
        "id": 47,
        brand: "Sony",
        "category": "Headsets",
        "price": 48.84,
        "description": "These headsets are a total game-changer! Immerse yourself in high-quality sound and enjoy ultimate comfort.",
        "model": "Play Station 5 Headset",
        "starRating": 3.8,
        "colors": [{ white: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/headsets/ps5-headset-pulse3d.png" }]
    },
    {
        "id": 48,
        brand: "Sony",
        "category": "Headsets",
        "price": 518.84,
        "description": "These headsets are a total game-changer! Immerse yourself in high-quality sound and enjoy ultimate comfort.",
        "model": "WF-C500",
        "starRating": 3.8,
        "colors": [{ black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/headsets/SONY-WF-C500.png" }]
    },
    {
        "id": 49,
        brand: "Sony",
        "category": "Headsets",
        "price": 418.84,
        "description": "These headsets are a total game-changer! Immerse yourself in high-quality sound and enjoy ultimate comfort.",
        "model": "WH-CH510",
        "starRating": 3.8,
        "colors": [{ black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/headsets/sony-wh-ch510.png" }]
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
        "colors": [{ whtie: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/pixel7.png" }]
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
        "colors": [{ purple: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/watches/gwatch_purple.png" }, { black: "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/watches/gwatch_black.png" }]
    },
]

export default productsData;