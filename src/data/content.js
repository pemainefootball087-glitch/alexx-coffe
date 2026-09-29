export const WA_NUMBER = "6283878687339";
export const WA_DISPLAY = "+62 838-7868-7339";
export const INSTAGRAM_URL = "https://instagram.com/alexxcoffee";
export const INSTAGRAM_HANDLE = "@alexxcoffee";
export const ADDRESS =
  "Jl. Blok Masjid RT 06 RW 01, Desa Rajaiyang, Kec. Losarang, Kab. Indramayu, Jawa Barat";
export const OPEN_HOURS = "Setiap Hari · 08.00 – 23.00 WIB";
export const MAPS_EMBED =
  "https://www.google.com/maps?q=Desa+Rajaiyang,+Losarang,+Indramayu,+Jawa+Barat&output=embed";
export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Desa+Rajaiyang,+Losarang,+Indramayu,+Jawa+Barat";

export const ORDER_MESSAGE =
  "Halo ALEXX COFFEE, saya ingin melakukan pemesanan.";
export const PROMO_MESSAGE =
  "Halo ALEXX COFFEE, saya ingin mengambil promo BUY 2 GET 1 FREE.";

export const waLink = (message) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const formatPrice = (n) => `Rp${n.toLocaleString("id-ID")}`;

export const NAV_LINKS = [
  { id: "menu", label: "Menu" },
  { id: "tentang", label: "Tentang Kami" },
  { id: "gallery", label: "Gallery" },
  { id: "review", label: "Review" },
  { id: "lokasi", label: "Lokasi" },
];

export const CATEGORIES = [
  { id: "semua", label: "Semua" },
  { id: "coffee", label: "Coffee" },
  { id: "non-coffee", label: "Non Coffee" },
  { id: "tea", label: "Tea" },
  { id: "snack", label: "Snack" },
  { id: "dessert", label: "Dessert" },
];

const u = (id, w = 900) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const IMAGES = {
  hero: u("photo-1442512595331-e89e73853f31", 2000),
  barista:
    "https://images.unsplash.com/photo-1769264963680-95a86383a483?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxhcnRpc2FuJTIwZXNwcmVzc28lMjBjb2ZmZWUlMjBjYWZlJTIwaW50ZXJpb3IlMjBiYXJpc3RhfGVufDB8fHx8MTc4NzU4ODU3MHww&ixlib=rb-4.1.0&q=85&w=900",
  pour:
    "https://images.pexels.com/photos/16615302/pexels-photo-16615302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  interior: u("photo-1554118811-1e0d58224f24"),
};

export const MENU_ITEMS = [
  {
    id: "es-kopi-senja",
    name: "Es Kopi Senja",
    category: "coffee",
    categoryLabel: "Coffee",
    price: 18000,
    tag: "Signature",
    img: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHw0fHxpY2VkJTIwbGF0dGUlMjBzcGVjaWFsdHklMjBjb2ZmZWUlMjBkZXNzZXJ0JTIwcGFzdHJ5fGVufDB8fHx8MTc4NzU4ODU3MHww&ixlib=rb-4.1.0&q=85&w=800",
    desc: "Espresso, susu segar, dan gula aren asli.",
    long: "Perpaduan double shot espresso, susu segar, dan gula aren asli yang kami masak sendiri. Manisnya pas, kopinya tetap terasa — signature yang paling banyak dipesan di ALEXX COFFEE.",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    category: "coffee",
    categoryLabel: "Coffee",
    price: 20000,
    img: u("photo-1572442388796-11668a67e53d", 800),
    desc: "Espresso, susu steamed, dan foam lembut klasik.",
    long: "Racikan klasik dengan perbandingan espresso, susu steamed, dan microfoam yang seimbang. Disajikan hangat dengan latte art dari barista kami.",
  },
  {
    id: "cafe-latte",
    name: "Cafe Latte",
    category: "coffee",
    categoryLabel: "Coffee",
    price: 20000,
    img: u("photo-1541167760496-1628856ab772", 800),
    desc: "Espresso lembut dengan susu creamy.",
    long: "Shot espresso yang dipadukan susu steamed creamy, menghasilkan rasa lembut dan milky. Cocok untuk kamu yang suka kopi yang tidak terlalu pahit.",
  },
  {
    id: "americano",
    name: "Americano",
    category: "coffee",
    categoryLabel: "Coffee",
    price: 15000,
    img: "https://images.unsplash.com/photo-1589985902809-39d25db22101?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwxfHxpY2VkJTIwbGF0dGUlMjBzcGVjaWFsdHklMjBjb2ZmZWUlMjBkZXNzZXJ0JTIwcGFzdHJ5fGVufDB8fHx8MTc4NzU4ODU3MHww&ixlib=rb-4.1.0&q=85&w=800",
    desc: "Espresso bold dan bersih, panas atau dingin.",
    long: "Double shot espresso diseduh dengan air panas. Karakter kopi yang bold, bersih, dan tanpa gula tambahan — untuk penikmat kopi sejati.",
  },
  {
    id: "espresso",
    name: "Espresso",
    category: "coffee",
    categoryLabel: "Coffee",
    price: 12000,
    img: "https://images.unsplash.com/photo-1527678357412-ef45dfbd9ecc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwzfHxpY2VkJTIwbGF0dGUlMjBzcGVjaWFsdHklMjBjb2ZmZWUlMjBkZXNzZXJ0JTIwcGFzdHJ5fGVufDB8fHx8MTc4NzU4ODU3MHww&ixlib=rb-4.1.0&q=85&w=800",
    desc: "Shot pekat dari biji arabika pilihan.",
    long: "Ekstraksi 25–30 detik dari biji arabika pilihan menghasilkan shot pekat dengan crema keemasan. Kecil, tapi penuh karakter.",
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    category: "non-coffee",
    categoryLabel: "Non Coffee",
    price: 22000,
    tag: "Favorit",
    img: u("photo-1515823064-d6e0c04616a7", 800),
    desc: "Matcha premium dengan susu segar.",
    long: "Bubuk matcha premium dikocok hingga halus lalu dipadukan susu segar. Creamy, earthy, dengan warna hijau yang cantik — favorit untuk yang tidak minum kopi.",
  },
  {
    id: "chocolate",
    name: "Chocolate",
    category: "non-coffee",
    categoryLabel: "Non Coffee",
    price: 20000,
    img: u("photo-1517578239113-b03992dcdd25", 800),
    desc: "Cokelat pekat, manis, dan creamy.",
    long: "Dark chocolate asli dilelehkan bersama susu segar hingga creamy. Manis, hangat, dan menenangkan — tersedia panas maupun dingin.",
  },
  {
    id: "cookies-cream",
    name: "Cookies & Cream Frappe",
    category: "non-coffee",
    categoryLabel: "Non Coffee",
    price: 24000,
    img: "https://images.pexels.com/photos/5598317/pexels-photo-5598317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "Frappe cookies & cream dengan whipped cream.",
    long: "Blend es, susu, dan remah cookies yang creamy, ditutup whipped cream lembut dan taburan cookies. Manisnya bikin nagih.",
  },
  {
    id: "es-teh-melati",
    name: "Es Teh Melati",
    category: "tea",
    categoryLabel: "Tea",
    price: 10000,
    img: u("photo-1564890369478-c89ca6d9cde9", 800),
    desc: "Teh melati klasik, segar dan wangi.",
    long: "Teh melati diseduh pekat lalu disajikan dingin dengan es batu. Sederhana, wangi, dan selalu menyegarkan.",
  },
  {
    id: "lemon-tea",
    name: "Lemon Tea",
    category: "tea",
    categoryLabel: "Tea",
    price: 15000,
    img: u("photo-1556679343-c7306c1976bc", 800),
    desc: "Teh dengan perasan lemon segar.",
    long: "Teh hitam dipadukan perasan lemon asli. Asam segarnya pas untuk menemani siang yang terik di Indramayu.",
  },
  {
    id: "lychee-tea",
    name: "Lychee Tea",
    category: "tea",
    categoryLabel: "Tea",
    price: 18000,
    img: u("photo-1499638673689-79a0b5115d87", 800),
    desc: "Teh leci manis dengan buah leci asli.",
    long: "Teh dengan sirup leci dan buah leci utuh di dalamnya. Manis, segar, dan wangi — favorit untuk nongkrong sore.",
  },
  {
    id: "kentang-goreng",
    name: "Kentang Goreng",
    category: "snack",
    categoryLabel: "Snack",
    price: 15000,
    img: u("photo-1541592106381-b31e9677c0e5", 800),
    desc: "Kentang renyah dengan saus sambal & mayones.",
    long: "Kentang digoreng hingga keemasan, renyah di luar dan lembut di dalam. Disajikan hangat dengan saus sambal dan mayones.",
  },
  {
    id: "roti-bakar",
    name: "Roti Bakar Cokelat Keju",
    category: "snack",
    categoryLabel: "Snack",
    price: 13000,
    img: u("photo-1484723091739-30a097e8f929", 800),
    desc: "Roti bakar dengan cokelat lumer dan keju.",
    long: "Roti dipanggang hingga garing, diolesi cokelat lumer dan keju parut melimpah. Teman terbaik secangkir kopi hangat.",
  },
  {
    id: "croissant",
    name: "Butter Croissant",
    category: "snack",
    categoryLabel: "Snack",
    price: 18000,
    img: u("photo-1555507036-ab1f4038808a", 800),
    desc: "Croissant butter renyah berlapis.",
    long: "Croissant dengan lapisan renyah dan aroma butter yang kuat. Dipanggang fresh, cocok untuk teman latte pagimu.",
  },
  {
    id: "tiramisu-cup",
    name: "Tiramisu Cup",
    category: "dessert",
    categoryLabel: "Dessert",
    price: 25000,
    img: u("photo-1571877227200-a0d98ea607e9", 800),
    desc: "Tiramisu lembut dengan taburan kakao.",
    long: "Layer mascarpone lembut dan ladyfinger rendaman kopi, ditaburi kakao premium. Dessert yang paling dicari di etalase kami.",
  },
  {
    id: "cheesecake",
    name: "Berry Cheesecake",
    category: "dessert",
    categoryLabel: "Dessert",
    price: 25000,
    img: u("photo-1533134242443-d4fd215305ad", 800),
    desc: "Cheesecake creamy dengan saus berry.",
    long: "Cheesecake panggang yang creamy dengan crust biskuit renyah, disajikan dengan saus berry segar.",
  },
  {
    id: "affogato",
    name: "Affogato",
    category: "dessert",
    categoryLabel: "Dessert",
    price: 25000,
    img: u("photo-1579954115545-a95591f28bfc", 800),
    desc: "Es krim vanilla disiram espresso panas.",
    long: "Satu scoop es krim vanilla premium disiram shot espresso panas. Manis, pahit, dingin, dan hangat dalam satu sendok.",
  },
];

export const BEST_SELLER_IDS = ["es-kopi-senja", "cappuccino", "matcha-latte"];

export const GALLERY = [
  { img: u("photo-1554118811-1e0d58224f24", 800), title: "Interior Cafe" },
  {
    img: "https://images.unsplash.com/photo-1787239558913-4bdec8d4a11d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NjA1Mjh8MHwxfHNlYXJjaHwyfHxjb3p5JTIwY2FmZSUyMG91dGRvb3IlMjBzZWF0aW5nJTIwbmlnaHQlMjBhbWJpYW5jZXxlbnwwfHx8fDE3ODc1ODg1ODJ8MA&ixlib=rb-4.1.0&q=85&w=800",
    title: "Suasana Malam",
  },
  { img: u("photo-1509042239860-f550ce710b93", 800), title: "Barista Kami" },
  {
    img: "https://images.unsplash.com/photo-1781193707853-ca159cd72e47?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NjA1Mjh8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FmZSUyMG91dGRvb3IlMjBzZWF0aW5nJTIwbmlnaHQlMjBhbWJpYW5jZXxlbnwwfHx8fDE3ODc1ODg1ODJ8MA&ixlib=rb-4.1.0&q=85&w=800",
    title: "Sudut Favorit",
  },
  { img: u("photo-1445116572660-236099ec97a0", 800), title: "Kopi & Biji Pilihan" },
  {
    img: "https://images.pexels.com/photos/31039340/pexels-photo-31039340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Area Outdoor",
  },
  { img: u("photo-1551024506-0bccd828d307", 800), title: "Dessert & Makanan" },
  {
    img: "https://images.unsplash.com/photo-1761455953108-377962e63c02?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NjA1Mjh8MHwxfHNlYXJjaHwzfHxjb3p5JTIwY2FmZSUyMG91dGRvb3IlMjBzZWF0aW5nJTIwbmlnaHQlMjBhbWJpYW5jZXxlbnwwfHx8fDE3ODc1ODg1ODJ8MA&ixlib=rb-4.1.0&q=85&w=800",
    title: "Lampu Taman",
  },
];

export const REVIEWS = [
  {
    name: "Rizky Pratama",
    rating: 5,
    text: "Kopinya enak, tempatnya nyaman banget buat nongkrong. Es Kopi Senja-nya juara, gula arennya berasa banget.",
  },
  {
    name: "Salsabila Nur",
    rating: 5,
    text: "Pelayanannya ramah, suasananya adem. Matcha latte-nya creamy dan nggak terlalu manis. Pasti balik lagi.",
  },
  {
    name: "Andi Wijaya",
    rating: 4,
    text: "Tempat favorit buat kerja. Suasananya tenang, kursinya nyaman, dan americanonya selalu konsisten enak.",
  },
  {
    name: "Dewi Lestari",
    rating: 5,
    text: "Bawa keluarga pas weekend, anak-anak suka tiramisu cup-nya. Tempatnya bersih dan homey. Recommended!",
  },
  {
    name: "Fajar Ramadhan",
    rating: 5,
    text: "Harga ramah di kantong, rasa premium. Buat ukuran coffee shop di Losarang, ini levelnya beda.",
  },
  {
    name: "Nadia Putri",
    rating: 5,
    text: "Spot foto-nya estetik banget, terutama pas sore. Lychee tea-nya segar, porsinya juga pas.",
  },
];

export const MARQUEE_ITEMS = [
  "Kopi Pilihan Nusantara",
  "Gula Aren Asli",
  "Barista Berpengalaman",
  "Buka 08.00 – 23.00",
  "Ruang untuk Setiap Cerita",
  "Fresh Setiap Hari",
];
