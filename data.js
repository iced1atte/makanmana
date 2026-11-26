/* =====================================================================
   MAKAN MANA? – DATA FILE
   Your team edits ONLY this file to update restaurants, links and photos.
   Be careful to keep every quote ( " ), comma ( , ) and bracket intact.
   ===================================================================== */

const CONFIG = {
  teamContact: "makanmana.team@gmail.com",  // team email. Recommend/Owner forms are sent here
  recommendFormUrl: "https://forms.gle/jeVGtQZrxFQJFEk36",  // optional: Google Form link for student recommendations
  ownerFormUrl: "https://forms.gle/vroQYPEzAjX5QQjW9",       // optional: Google Form link for restaurant owners
   feedbackFormUrl: "https://forms.gle/HE4CYFt91cTGPi5w7"
};

/* One restaurant per block. Copy a block, paste it below another, then edit.
   cuisines: list of cuisines, e.g. ["Western","Local","Thai"]. Use ONLY these 8, spelled exactly:
             Chinese, Dessert, Indonesian, Japanese, Local, Malay, Thai, Western
             "Local" means any local Malaysian food, so Malay places are listed as both Malay and Local
             Use real cuisines only, not venue types like Cafe or Kopitiam
   priceMin / priceMax: in RM | area: e.g. "Pagoh", "Muar", "Near campus"
   open / close: 24-hour clock (5 pm = 17). For after midnight use 25, 26 …
   tags: any of "affordable", "hidden", "near"
   closed: optional days closed, 0=Sun 1=Mon 2=Tue 3=Wed 4=Thu 5=Fri 6=Sat
   mapUrl: optional Google Maps link. Best: open the place in Google Maps, tap Share, copy the
           link (maps.app.goo.gl/...). Other links (such as share.google) are ignored for the map button.
   hours: leave open/close out completely if the hours are unknown (the site shows "Hours not listed")
   hoursNote: optional short text for hours that differ on one day, e.g. "Mon: 10am – 10pm"
   tip: optional student tip | menu: list of ["Dish", price] (use null if price unknown)
        price can also be text for an estimate, e.g. ["Mee bandung","Est. RM9–RM12"]
   menuNote: optional text shown under the menu, e.g. "Est. RM3–RM12 for the items above"
   Entries marked (sample) are placeholders. Delete them when real data is ready. */
const RESTAURANTS = [
  {name:"Nam Kopi", cuisines:["Local"], priceMin:1, priceMax:20, open:8, close:17, area:"Muar", phone:"011-26668596", address:"44 (Tingkat), Nam Kopi, First Floor, Lot FF-03, Satu, Jalan Sisi, Pekan Muar, 84000 Muar, Johor", mapUrl:"https://share.google/ttbtTu89rfPEokZhv", tags:["affordable"],
   menu:[["Nasi lemak",null],["Nasi goreng",null],["Nasi chicken chop",null],["Roti bakar",null],["Ayam Korea",null],["Kopi",null],["Cendol",null]]},
  {name:"Brado Kitchen", cuisines:["Western","Local"], priceMin:1, priceMax:20, open:12, close:23, area:"Pagoh", phone:"017-449 5139", address:"Brado Kitchen, 2, Jln Jaya 1/5B, 84600 Muar, Johor", tags:["affordable","near"], closed:[5],
   menu:[["Western dishes",null],["Local dishes",null]]},
  {name:"Kedai Makan Haji Masjuki", cuisines:["Malay","Local"], priceMin:1, priceMax:20, open:7, close:18, area:"Near campus", phone:"010-5120647", address:"No. 1, Sime Darby Property Sales Gallery, Cafe Unit, KM25, Jalan Pagoh, 84600 Pagoh, Johor", mapUrl:"https://maps.app.goo.gl/12xwWhk3RA7xwBWr8", tags:["affordable","near"],
   menu:[["Mee Bandung Udang Galah",null]]},
  {name:"Nasi Campur Cik Ina Kelate (stall Mok)", cuisines:["Malay","Local"], priceMin:1, priceMax:20, open:10, close:14, area:"Near campus", phone:"", address:"Medan Penjaja Taman Pagoh Jaya, Jln Pagoh Jaya 1, 84300 Pagoh, Johor", tags:["affordable","near","hidden"], mapUrl:"https://maps.app.goo.gl/P5RVZLcmMKY1ECYL7", closed:[0], tip:"Food includes free drink", 
   menu:[["Nasi putih",null],["Lauk tengahari",null]]},
  {name:"Restoran Senda Loka", cuisines:["Malay","Local"], priceMin:1, priceMax:20, open:10.5, close:16, area:"Near campus", phone:"0172825131", address:"Restoran Senda Loka, 14 Jalan Jaya 1/3 Taman Pagoh Jaya Pagoh, 84600 Muar, Johor Darul Ta'zim", mapUrl:"https://share.google/Fzs2UWvWAQlTgg3V1", tags:["near"], closed:[0],
   menu:[["Nasi berlauk",null]]},
  {name:"Restoran Lee Permai Seafood", cuisines:["Thai"], priceMin:1, priceMax:20, open:17, close:27, area:"Pagoh", phone:"014-303 6979", address:"Restoran Lee Permai Seafood, 6, Jalan Perniagaan Permai 1, Pusat Perniagaan Pagoh Permai, 84600 Pagoh, Johor", mapUrl:"https://share.google/DJzMjlO4kj0pVibLy", tags:[],
   menu:[["Tomyam",null],["Thai cuisine",null]]},
  {name:"Asam Pedas Panchor", cuisines:["Malay","Local"], priceMin:1, priceMax:20, open:10, close:17, area:"Panchor", phone:"012-714 1316", address:"LOT 49, Asam Pedas Panchor, 20, JALAN TAN CHOY, YAN, 84500 Panchor, Johor Darul Ta'zim", mapUrl:"https://share.google/7BXorLDrX210AlBIy", tags:[], closed:[5],
   menu:[["Asam pedas pari",null],["Daging salai",null]]},
   {name:"PappaRice by THEsalts", cuisines:["Western","Local"], priceMin:1, priceMax:30, open:11, close:21, area:"Muar", phone:"011-5760 3558", address:"PappaRice by THEsalts, 23 GF JALAN MEGA, Jln Sakeh, PUSAT PERDAGANGAN MEGA, 84000 Muar, Johor Darul Ta'zim", mapUrl:"https://share.google/brndfqS6BNx6DyYT6", tags:[], closed:[1],
   menu:[["Western dishes",null],["Local dishes",null]]},
  {name:"Mee Bandung Abu Bakar Hanipah", cuisines:["Malay","Local"], priceMin:1, priceMax:20, open:7, close:16, area:"Muar", phone:"012-264 2720", address:"Mee Bandung Abu Bakar Hanipah, 69A, Jalan Abdullah, Pekan Muar, 84000 Muar, Johor", mapUrl:"https://share.google/v2NxVuM32ftSK4oDF", tags:[], closed:[5],
   menu:[["Mee bandung",null],["Satay",null]]},
  {name:"ThaiRich", cuisines:["Thai"], priceMin:20, priceMax:40, open:12, close:21.5, area:"Muar", phone:"010-779 6286", address:"B03 & B04, ThaiRich, The Wood, 37-3, Lorong Haji Ibrahim, Taman Orkid, 84000 Muar, Johor Darul Ta'zim", mapUrl:"https://share.google/ebofPv0UC7Nu8aL8K", tags:[], closed:[3],
   menu:[["Tomyam",null],["Bingsu",null],["Pad kra pao",null]]},
  {name:"Ayam Gepuk Ganas", cuisines:["Indonesian"], priceMin:1, priceMax:20, open:10.5, close:22, area:"Pagoh", phone:"013-3480142", address:"No 7, Jalan Sarjana 8, Presint Sarjana, Bandar University Pagoh, 84600 Muar, Johor Darul Ta'zim", mapUrl:"https://share.google/cksh6MeFajlxBQw5j", tags:["near"],
   menu:[["Indonesian cuisine",null]]},
  {name:"Ayam Gepuk Tokmat", cuisines:["Indonesian"], priceMin:1, priceMax:20, open:11, close:21.5, area:"Pagoh", phone:"014-7244153", address:"No. 14, Jalan Sarjana 9 Presint Sarjana, Bandar Universiti Pagoh Pagoh, 84600 Muar, 84600 Pagoh, Johor Darul Ta'zim", mapUrl:"https://share.google/ouW8Tfl0JCvO5hBG1", tags:["near"],
   menu:[["Indonesian cuisine",null]]},
   {name:"Angin Malam", cuisines:["Western","Local"], priceMin:5, priceMax:30, open:16.5, close:23.5, area:"Pekan Pagoh", phone:"017-6734123", address:"TL13/14 Lot 3963, Penginapan WNT, Jalan Sekolah Paya Redan, Pagoh", tags:[], closed:[3],
   menu:[["Coffee",null],["Sparkling Water",null],["Chicken chop",null],["Fish and chip",null]]},
    {name:"Hayven by KelabKopi", cuisines:["Western","Local"], priceMin:5, priceMax:30, open:11, close:19, area:"Muar", phone:"017-6281600", address:"120, Jalan Meriam, Pekan Muar, 84000 Muar, Johor", mapUrl:"https://share.google/nX2vmTcuqXSteSZWL", tags:[], closed:[2],
   menu:[["Buttermilk",null]]},
   {name:"Kagawa Grill", cuisines:["Western","Local","Thai"], priceMin:1, priceMax:80, open:11, close:22, area:"Pagoh", phone:"", address:"35, Jln Pagoh Jaya 1, Pusat Perniagaan Pagoh Jaya, 84600 Pagoh, Johor Darul Ta'zim", mapUrl:"https://share.google/RYp8arNXXvnt4SLep", tags:[], closed:[3],
   menu:[["Western dishes",null],["Local dishes",null],["Thai dishes",null]]},
  {name:"Kopi 434 Muar", cuisines:["Local"], open:8, close:17.5, area:"Muar", phone:"06-951 3046", address:"121, Jalan Maharani, 84000 Muar, Johor Darul Ta'zim", mapUrl:"https://share.google/wiIUSuXNjsPWmY4Wo", tags:[],
   menu:[["Local Malaysian kopitiam food",null]]},
  {name:"Lan Zhou Mee Tarik (Muar)", cuisines:["Chinese"], priceMin:1, priceMax:20, open:10, close:23, area:"Muar", phone:"012-237 5302", address:"33, Jalan Sungai Abong Indah 2, Pusat Perniagaan Sungai Abong Indah, 84000 Muar, Johor Darul Ta'zim", mapUrl:"https://share.google/S3SSMzFaPPFwDMknN", tags:[],
   menu:[["Chinese cuisine",null]]},
  {name:"Yay For Today Paya Redan", cuisines:["Western","Local","Thai"], open:8, close:16, area:"Paya Redan", phone:"013-309 8489", address:"Lot 258, Jalan Pagoh - Bukit Kepong, Paya Redan, Pagoh, 84600 Muar, Johor", mapUrl:"https://share.google/cx9lpDGtEXM5H1jjB", tags:[], closed:[3],
   menu:[["Western dishes",null],["Local dishes",null],["Thai dishes",null]]},
  {name:"Laman J", cuisines:["Western"], priceMin:1, priceMax:30, open:17.5, close:23.5, area:"Pagoh", phone:"014-231 0096", address:"5413, Jalan Sri Gelam, Pagoh, 84600 Muar, Johor Darul Ta'zim", mapUrl:"https://share.google/3GheehkuBjUpz71wh", tags:[], closed:[2],
   menu:[["Western dishes",null]]},
  {name:"Saudagar Cafe Pagoh", cuisines:["Local","Malay"], priceMin:8, priceMax:25, open:9, close:22, hoursNote:"Mon: 10am – 10pm", area:"Pagoh", phone:"", address:"Kawasan Rehat & Rawat (R&R) Pagoh (Northbound/Southbound), North-South Expressway, 84300 Pagoh, Johor", mapUrl:"https://www.google.com/maps/search/?api=1&query=Saudagar+Cafe+Pagoh", tags:["near"], tip:"Accessible via the Pagoh R&R area for a casual sit-down meal.",
   menu:[["Mee Bandung","Est. RM9–RM12"],["Nasi Arab Mandy","Est. RM15–RM22"]]},
  {name:"Cafe TPJ", cuisines:["Western","Local"], priceMin:5, priceMax:20, open:10, close:22, area:"Pagoh", phone:"017-7251425", address:"7, Jalan Jaya 1/5A, Taman Pagoh Jaya, 84600 Pagoh, Johor", mapUrl:"https://www.google.com/maps/search/?api=1&query=Cafe+TPJ+Taman+Pagoh+Jaya", tags:["affordable","near"],
   menu:[["Western sets",null],["Fried rice",null],["Drinks",null]], menuNote:"Est. RM6–RM18 for the items above"},
  {name:"Sama Sama Kopi", cuisines:["Local","Malay"], priceMin:1, priceMax:20, open:7.5, close:17, area:"Panchor", phone:"06-9824935", address:"46, Jalan Abdullah, Panchor, 84500 Muar, Johor", mapUrl:"https://www.google.com/maps/search/?api=1&query=Sama+Sama+Kopi+Panchor+Muar", tags:["affordable","hidden"], closed:[5], tip:"Classic kopitiam-style breakfast spot in Panchor town. Try their lontong and soto!!",
   menu:[["Nasi lemak",null],["Lontong",null],["Soto",null],["Roti bakar",null],["Kopi",null]], menuNote:"Est. RM3–RM12 for the items above"},
  {name:"Asam Pedas Claypot", cuisines:["Local","Malay"], priceMin:1, priceMax:20, open:10, close:16, area:"Pagoh", phone:"011-33453237", address:"Asam Pedas Claypot No. 1, 84600 Pagoh, Johor", mapUrl:"https://www.google.com/maps/search/?api=1&query=Asam+Pedas+Claypot+Pagoh", tags:["affordable","near"], closed:[5,6],
   menu:[["Asam pedas claypot ikan pari / kembung / daging with rice & telur masin","Est. RM8–RM15"]]},
  {name:"Nasuha Herbs & Spice Farm", cuisines:["Local","Malay"], priceMin:15, priceMax:40, open:10.5, close:17, area:"Pagoh", phone:"018-7681000", address:"KM 19, Jalan Muar, 84500 Pagoh, Johor", mapUrl:"https://www.google.com/maps/search/?api=1&query=Nasuha+Herbs+and+Spice+Farm+Pagoh", tags:["hidden"], closed:[2], tip:"Unique herbal-infused Malay dishes surrounded by a scenic spice plantation along Jalan Muar–Pagoh.",
   menu:[["Nasi beriani herba kambing / ayam",null],["Asam pedas herba",null],["Herbal teas",null]], menuNote:"Est. RM15–RM35 for the items above"},
  {name:"Cafe Pos Pagoh Uda Leena", cuisines:["Indonesian","Local","Malay"], priceMin:1, priceMax:20, open:7, close:22, area:"Pagoh", phone:"013-765 3061", address:"JKR 1990A, Jalan Besar, Pekan Pagoh, 84600 Pagoh, Johor", mapUrl:"https://www.google.com/maps/search/?api=1&query=Cafe+Pos+Pagoh+Uda+Leena", tags:["affordable","near"], closed:[6], tip:"Try their nasi sotong geprek.",
   menu:[["Mee bandung",null],["Bakso",null],["Ayam penyet",null],["Breakfast kuih & nasi lemak",null]], menuNote:"Est. RM3–RM14 for the items above"},
  {name:"NoorJannah’s Kitchen", cuisines:["Local","Malay"], priceMin:1, priceMax:20, open:7, close:17.5, hoursNote:"Tue: 7:30am – 5:30pm", area:"Pagoh", phone:"019-8628068", address:"55, Jalan Pagoh Jaya 1, Taman Perindustrian Pagoh Jaya, 84600 Pagoh, Johor", mapUrl:"https://www.google.com/maps/search/?api=1&query=NoorJannahs+Kitchen+Pagoh+Jaya", tags:["affordable","near"], tip:"Budget-friendly \"nasi cedok\" spot in Pagoh Jaya, great when you want to control your own portion and price.",
   menu:[["Nasi cedok / nasi campur",null],["Breakfast nasi lemak & kuih",null]], menuNote:"Est. RM4–RM12 for the items above"},
  {name:"Sama Sama Cuisine, Muar", cuisines:["Local","Western"], priceMin:20, priceMax:40, open:12, close:23, area:"Muar", phone:"019-5863005", address:"14-1, Jalan Abdul Rahman, Kampung Dato Bentara Dalam, 84000 Muar, Johor", mapUrl:"https://www.google.com/maps/search/?api=1&query=Sama+Sama+Cuisine+Jalan+Abdul+Rahman+Muar", tags:["hidden"], tip:"Nice sit-down restaurant in Muar town for group dinners.",
   menu:[["Western mains",null],["Pasta",null],["Local fusion rice dishes",null],["Desserts",null]], menuNote:"Est. RM18–RM38 for the items above"},
  {name:"Layers, Muar", cuisines:["Local","Malay","Western","Dessert"], priceMin:15, priceMax:40, open:15, close:24, area:"Muar", phone:"012-273 3468", address:"144, Jalan Abdullah, Pekan Muar, 84000 Muar, Johor", mapUrl:"https://www.google.com/maps/search/?api=1&query=Layers+Jalan+Abdullah+Muar", tags:["hidden"], closed:[4], tip:"Open until midnight, a popular Muar hangout for cakes, coffee, and dinner.",
   menu:[["Crepe cakes",null],["Cheesecakes",null],["Western grills",null],["Malay specialties",null]], menuNote:"Est. RM12–RM35 for the items above"},
  {name:"Nuridah Tomyam", cuisines:["Thai"], priceMin:1, priceMax:20, open:17.5, close:24, hoursNote:"Mon: 5pm – 12am", area:"Pagoh", phone:"", address:"75, Jalan Pagoh Jaya 1, Pusat Perniagaan Pagoh Jaya, 84600 Pagoh, Johor", mapUrl:"https://www.google.com/maps/search/?api=1&query=Nuridah+Tomyam+Pagoh+Jaya", tags:["affordable","near"], tip:"Staple student dinner spot in Pagoh Jaya with fast service and affordable single-plate dishes.",
   menu:[["Tomyam campur",null],["Nasi goreng USA",null],["Kuey teow kungfu",null],["Daging merah",null]], menuNote:"Est. RM6–RM15 for the items above"},
  {name:"Warung Botak", cuisines:["Local","Malay"], priceMin:1, priceMax:15, area:"Panchor", phone:"", address:"27, Jalan Kampung Jawa, Kampung Jawa, 84500 Panchor, Johor", mapUrl:"https://www.google.com/maps/search/?api=1&query=Warung+Botak+Kampung+Jawa+Panchor", tags:["affordable","hidden"], tip:"Classic kampung warung in Panchor for a cheap, no-frills meal.",
   menu:[["Roti canai",null],["Nasi lemak",null],["Local drinks",null]], menuNote:"Est. RM2–RM10 for the items above"},
  {name:"Nasi Beriani, Panchor", cuisines:["Local","Malay"], priceMin:1, priceMax:20, open:10, close:16, area:"Panchor", phone:"014-965 6801", address:"Lot 6434-1, Kampung Jawa, Panchor, 84500 Muar, Johor", mapUrl:"https://www.google.com/maps/search/?api=1&query=Nasi+Beriani+Kampung+Jawa+Panchor", tags:["affordable","hidden"], closed:[2], tip:"Authentic Johor nasi beriani in Panchor. Go early around lunchtime before the mutton (kambing) runs out.",
   menu:[["Nasi beriani ayam merah / ayam goreng / daging / kambing","Est. RM9–RM16"]]},
  {name:"Warung Tok Lan Janggut, Pekan Pagoh", cuisines:["Local","Malay"], priceMin:1, priceMax:20, open:7, close:23.75, area:"Pagoh", phone:"019-673 7115", address:"Lot 3555, Batu 18, Jalan Besar Pagoh, 84600 Pagoh, Johor", mapUrl:"https://www.google.com/maps/search/?api=1&query=Warung+Tok+Lan+Janggut+Pekan+Pagoh", tags:["affordable","near"], closed:[6], tip:"Famous for Johor-style Mee Rebus in Pekan Pagoh; great for breakfast or casual supper.",
   menu:[["Mee rebus Johor",null],["Nasi lemak",null],["Nasi kukus",null],["Roti canai",null],["Teh tarik",null]], menuNote:"Est. RM3–RM12 for the items above"},
  {name:"Dapur Cik Tina", cuisines:["Local","Malay"], priceMin:1, priceMax:20, open:9, close:19, area:"Pagoh", phone:"011-3938 4562", address:"Jalan Pagoh Jaya / Kampung area, 84600 Pagoh, Johor", mapUrl:"https://www.google.com/maps/search/?api=1&query=Dapur+Cik+Tina+Pagoh", tags:["affordable","near","hidden"], tip:"Message or call ahead to check daily specials and exact stall pin.",
   menu:[["Masakan panas",null],["Nasi campur",null],["Kuih-muih",null]], menuNote:"Est. RM5–RM15 for the items above"},
  {name:"Paumira Dessert", cuisines:["Dessert"], priceMin:5, priceMax:20, open:11, close:21, area:"Pagoh", phone:"014-6696229", address:"No. 10, Tingkat Bawah, Pusat Perniagaan Pagoh Jaya, Jalan Pagoh Jaya 2, 84600 Pagoh, Johor", mapUrl:"https://www.google.com/maps/search/?api=1&query=Paumira+Dessert+Pagoh+Jaya", tags:["affordable","near"], closed:[3], tip:"Go-to dessert spot right in Pagoh Jaya for sweet cravings after class, with a full selection of famous up-to-date desserts.",
   menu:[["Kek batik",null],["Brownies",null],["Pavlova",null],["Croffles",null],["Iced beverages",null]], menuNote:"Est. RM5–RM18 for the items above"},
  {name:"Suwwitbite.co", cuisines:["Dessert"], priceMin:2, priceMax:130, open:11, close:21, area:"Pagoh", phone:"011-6099 9270", address:"No. 9, KM 28, Pekan Pagoh, 84600 Pagoh, Johor", mapUrl:"https://www.google.com/maps/search/?api=1&query=Suwwitbite.co+Pekan+Pagoh", tags:["affordable","near"], tip:"Great for affordable single-cup desserts (from RM2) or ordering birthday cakes in Pekan Pagoh.",
   menu:[["Mini cheesecakes",null],["Brownies",null],["Dessert tubs",null],["Custom celebration cakes",null]], menuNote:"Est. RM2–RM130 (single desserts to whole cakes and boxes)"},
  {name:"Takoyaki Pagoh Jaya", cuisines:["Japanese"], priceMin:5, priceMax:15, area:"Pagoh", phone:"", address:"Pusat Perniagaan Pagoh Jaya, 84600 Pagoh, Johor", mapUrl:"https://www.google.com/maps/search/?api=1&query=Takoyaki+Pagoh+Jaya", tags:["affordable","near","hidden"], tip:"Quick evening snack stall in Pagoh Jaya, a micro-vendor missing from standard map apps.",
   menu:[["Takoyaki octopus / chicken / crabstick / cheese","Est. RM5–RM12 per box"]]},
  {name:"Nasi Ayam Berempah Terengganu", cuisines:["Local","Malay"], priceMin:6, priceMax:12, area:"Pagoh", phone:"", address:"Taman Pagoh Jaya / Bandar Universiti Pagoh area, 84600 Pagoh, Johor", mapUrl:"https://www.google.com/maps/search/?api=1&query=Nasi+Ayam+Berempah+Terengganu+Pagoh", tags:["affordable","near","hidden"], tip:"Micro-vendor stall. Confirm exact roadside pin and daily availability before heading over.",
   menu:[["Nasi ayam berempah with sambal & kari","Est. RM7–RM10"]]},
  {name:"Restaurant Sri Tasik Utama", cuisines:["Local","Malay"], priceMin:1, priceMax:20, open:8, close:22.25, area:"Pagoh", phone:"", address:"1, Jalan Jaya 1/5B, Taman Pagoh Jaya, 84600 Pagoh, Johor", mapUrl:"https://www.google.com/maps/search/?api=1&query=Restaurant+Sri+Tasik+Utama+Pagoh+Jaya", tags:["affordable","near"], tip:"Spacious corner lot in Taman Pagoh Jaya suitable for large student study/supper groups.",
   menu:[["Roti canai",null],["Nasi kandar / nasi campur",null],["Mee goreng",null],["Teh tarik",null]], menuNote:"Est. RM2–RM15 for the items above"},
  {name:"Kopi Changkung", cuisines:["Local","Malay","Dessert"], priceMin:5, priceMax:20, open:6, close:22, area:"Pagoh", phone:"", address:"33, Jalan Jaya 1/5B, Taman Pagoh Jaya, 84600 Pagoh, Johor (TikTok: @kopichangkung)", mapUrl:"https://www.google.com/maps/search/?api=1&query=Kopi+Changkung+Pagoh+Jaya", tags:["affordable","near"], tip:"Opens as early as 6:00 AM, perfect if you need coffee and breakfast before an 8:00 AM lecture.",
   menu:[["Local coffee",null],["Breakfast sets",null],["Lunch specials",null],["Pastries & desserts",null]], menuNote:"Est. RM4–RM18 for the items above"},
  {name:"Kafe Dandan", cuisines:["Local","Malay"], priceMin:1, priceMax:15, open:8, close:14.5, area:"Pagoh", phone:"", address:"No. 8, Jalan Pagoh Jaya 1/5, Taman Pagoh Jaya, 84600 Pagoh, Johor (beside Klinik Kita)", mapUrl:"https://www.google.com/maps/search/?api=1&query=Kafe+Dandan+Pagoh+Jaya", tags:["affordable","near"], closed:[1], tip:"Right next to Klinik Kita in Pagoh Jaya, great for morning breakfast or an early lunch before 2:30 PM.",
   menu:[["Nasi lemak",null],["Lontong",null],["Mee siam",null],["Kuih-muih",null],["Lunch dishes",null]], menuNote:"Est. RM3–RM12 for the items above"},
];

/* Photos (optional): "Exact restaurant name": "photos/file-name.jpg"
   Upload the image into the photos folder first. Keep each photo under about 300 KB.
   Restaurants without a photo show a neutral placeholder. */
const PHOTOS = {
   "Nam Kopi": "photos/nam-kopi.jpg",
   "Brado Kitchen": "photos/brado-kitchen.jpg",
   "Nasi Campur Cik Ina Kelate (stall Mok)": "photos/nasi-campur-cik-ina.jpg",
   "Ayam Gepuk Tokmat": "photos/gepuk-tokmat.jpeg",
   "ThaiRich": "photos/thai-rich.jpg",
   "PappaRice by THEsalts": "photos/papparice-by-thesalts.jpg",
   "Hayven by KelabKopi": "photos/hayven-kelabkopi.jpeg"

};
