/* =====================================================================
   MAKAN MANA? – DATA FILE
   Your team edits ONLY this file to update restaurants, links and photos.
   Be careful to keep every quote ( " ), comma ( , ) and bracket intact.
   ===================================================================== */

const CONFIG = {
  teamContact: "makanmana.team@gmail.com",  // team email. Recommend/Owner forms are sent here
  recommendFormUrl: "https://forms.gle/jeVGtQZrxFQJFEk36",  // optional: Google Form link for student recommendations
  ownerFormUrl: "https://forms.gle/vroQYPEzAjX5QQjW9"       // optional: Google Form link for restaurant owners
};

/* One restaurant per block. Copy a block, paste it below another, then edit.
   type: food type | priceMin / priceMax: in RM | area: e.g. "Pagoh", "Muar", "Near campus"
   open / close: 24-hour clock (5 pm = 17). For after midnight use 25, 26 …
   tags: any of "affordable", "hidden", "near"
   closed: optional days closed, 0=Sun 1=Mon 2=Tue 3=Wed 4=Thu 5=Fri 6=Sat
   tip: optional student tip | menu: list of ["Dish", price] (use null if price unknown)
   Entries marked (sample) are placeholders. Delete them when real data is ready. */
const RESTAURANTS = [
  {name:"Nam Kopi", type:"Cafe", priceMin:1, priceMax:20, open:8, close:17, area:"Pekan Muar", phone:"011-26668596", address:"44 (Tingkat), Nam Kopi, First Floor, Lot FF-03, Satu, Jalan Sisi, Pekan Muar, 84000 Muar, Johor", mapUrl:"https://share.google/ttbtTu89rfPEokZhv", tags:["affordable"],
   menu:[["Nasi lemak",null],["Nasi goreng",null],["Nasi chicken chop",null],["Roti bakar",null],["Ayam Korea",null],["Kopi",null],["Cendol",null]]},
  {name:"Brado Kitchen", type:"Western & Local", priceMin:1, priceMax:20, open:12, close:23, area:"Muar", phone:"017-449 5139", address:"Brado Kitchen, 2, Jln Jaya 1/5B, 84600 Muar, Johor", tags:["affordable","near"], closed:[5],
   menu:[["Western dishes",null],["Local dishes",null]]},
  {name:"Kedai Makan Haji Masjuki", type:"Malay", priceMin:1, priceMax:20, open:7, close:18, area:"Near campus", phone:"010-5120647", address:"No. 1, Sime Darby Property Sales Gallery, Cafe Unit, KM25, Jalan Pagoh, 84600 Pagoh, Johor", mapUrl:"https://maps.app.goo.gl/12xwWhk3RA7xwBWr8", tags:["affordable","near"],
   menu:[["Mee Bandung Udang Galah",null]]},
  {name:"Nasi Campur Cik Ina Kelate (stall Mok)", type:"Malay", priceMin:1, priceMax:20, open:10, close:14, area:"Near campus", phone:"", address:"Medan Penjaja Taman Pagoh Jaya, Jln Pagoh Jaya 1, 84300 Pagoh, Johor", tags:["affordable","near","hidden"], mapUrl:"https://maps.app.goo.gl/P5RVZLcmMKY1ECYL7", closed:[0], tip:"Food includes free drink", 
   menu:[["Nasi putih",null],["Lauk tengahari",null]]},
  {name:"Restoran Senda Loka", type:"Malay", priceMin:1, priceMax:20, open:10.5, close:16, area:"Near campus", phone:"0172825131", address:"Restoran Senda Loka, 14 Jalan Jaya 1/3 Taman Pagoh Jaya Pagoh, 84600 Muar, Johor Darul Ta'zim", mapUrl:"https://share.google/Fzs2UWvWAQlTgg3V1", tags:["near"], closed:[0],
   menu:[["Nasi berlauk",null]]},
  {name:"Restoran Lee Permai Seafood", type:"Thai", priceMin:1, priceMax:20, open:17, close:27, area:"Pagoh", phone:"014-303 6979", address:"Restoran Lee Permai Seafood, 6, Jalan Perniagaan Permai 1, Pusat Perniagaan Pagoh Permai, 84600 Pagoh, Johor", mapUrl:"https://share.google/DJzMjlO4kj0pVibLy", tags:[],
   menu:[["Tomyam",null],["Thai cuisine",null]]},
  {name:"Asam Pedas Panchor", type:"Malay", priceMin:1, priceMax:20, open:10, close:17, area:"Panchor", phone:"012-714 1316", address:"LOT 49, Asam Pedas Panchor, 20, JALAN TAN CHOY, YAN, 84500 Panchor, Johor Darul Ta'zim", mapUrl:"https://share.google/7BXorLDrX210AlBIy", tags:[], closed:[5],
   menu:[["Asam pedas pari",null],["Daging salai",null]]},
  {name:"Muar Mee Bandung Corner (sample)", type:"Noodles", priceMin:7, priceMax:12, open:10, close:21, area:"Muar", phone:"016-888 9900", address:"Bandar Maharani, Muar", tags:["hidden"],
   menu:[["Mee bandung Muar",9],["Mee rebus",8],["Air bandung",3]]},
  {name:"Gerai Western Abang Jo (sample)", type:"Western", priceMin:8, priceMax:16, open:16, close:23, area:"Near campus", phone:"017-111 2233", address:"Opposite campus, Pagoh", tags:["near","affordable"],
   menu:[["Chicken chop",12],["Fish & chips",11],["Fries",5]]},
  {name:"Cafe Kopi Lorong (sample)", type:"Cafe", priceMin:4, priceMax:15, open:9, close:22, area:"Muar", phone:"014-777 1212", address:"Jalan Abdullah, Muar", tags:["hidden"],
   menu:[["Iced latte",9],["Kaya toast set",8],["Teh o ais",3]]}
];

/* Photos (optional): "Exact restaurant name": "photos/file-name.jpg"
   Upload the image into the photos folder first. Keep each photo under about 300 KB.
   Restaurants without a photo show a neutral placeholder. */
const PHOTOS = {
   "Nam Kopi": "photos/nam-kopi.jpg",
   "Brado Kitchen": "photos/brado-kitchen.jpg",
   "Nasi Campur Cik Ina Kelate (stall Mok)": "photos/nasi-campur-cik-ina.jpg"
};
