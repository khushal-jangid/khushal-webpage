/**
 * ====================================================================
 * FilmHub — Clean, Smooth & Fast Streaming Directory
 * ====================================================================
 */

// 1. All Researched Websites (Including 4 New Movie Links)
const SITES_DATABASE = [
  {
    "id": "mu27eluoage5p",
    "name": "HDHub4U",
    "url": "https://hdhub4u.bi/",
    "domain": "hdhub4u.bi",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "4K & 1080p",
      "Dual Audio",
      "Fast Links"
    ]
  },
  {
    "id": "4khdhub_one",
    "name": "4K HDHub",
    "url": "https://4khdhub.one/",
    "domain": "4khdhub.one",
    "category": "Movies & Shows",
    "regions": [
      "Global",
      "IN"
    ],
    "isTrusted": true,
    "isNew": true,
    "isFeatured": true,
    "tags": [
      "4K Ultra HD",
      "Multi-Audio",
      "Direct Links"
    ]
  },
  {
    "id": "katmoviehd_top",
    "name": "KatMovieHD",
    "url": "https://new.katmoviehd.top/",
    "domain": "new.katmoviehd.top",
    "category": "Movies & Shows",
    "regions": [
      "Global",
      "IN"
    ],
    "isTrusted": true,
    "isNew": true,
    "isFeatured": true,
    "tags": [
      "Web Series",
      "Hindi Dubbed",
      "Fast Server"
    ]
  },
  {
    "id": "katmovie18_my",
    "name": "KatMovie18",
    "url": "https://new.katmovie18.my/",
    "domain": "new.katmovie18.my",
    "category": "Adult (18+)",
    "regions": [
      "Global",
      "IN"
    ],
    "isTrusted": true,
    "isNew": true,
    "isFeatured": true,
    "tags": [
      "18+ Cinema",
      "Uncut Series",
      "Fast Stream"
    ]
  },
  {
    "id": "ms2tg2e2jw8vg",
    "name": "ENMA",
    "url": "https://www.enma.lol/home",
    "domain": "enma.lol",
    "category": "Anime",
    "regions": [
      "Global"
    ],
    "isTrusted": true,
    "isNew": false,
    "isFeatured": true,
    "tags": [
      "Fast CDN",
      "Sub & Dub",
      "Watchlist"
    ]
  },
  {
    "id": "ms2tiauj2jn35",
    "name": "CINEZO",
    "url": "https://cinezo.net/",
    "domain": "cinezo.net",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "1080p HD",
      "Fast Player",
      "No Sign-Up"
    ]
  },
  {
    "id": "ms2v90v83veec",
    "name": "ONDEMAND",
    "url": "https://ondemand.st/",
    "domain": "ondemand.st",
    "category": "Live TV & Sports",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Live Stream",
      "Cricket & Football",
      "Multi-Feed"
    ]
  },
  {
    "id": "ms2vbpfemdoqp",
    "name": "MANGABALL",
    "url": "https://mangaball.net/",
    "domain": "mangaball.net",
    "category": "Manga",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "High-Res Reader",
      "Daily Updates",
      "Free Scans"
    ]
  },
  {
    "id": "ms2vfe5q5kuvu",
    "name": "NETFLIX",
    "url": "https://www.netflix.com/in/",
    "domain": "netflix.com",
    "category": "Paid",
    "regions": [
      "Global"
    ],
    "isTrusted": true,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Official",
      "4K Ultra HD",
      "Dolby Vision"
    ]
  },
  {
    "id": "ms3befx4o6ahl",
    "name": "NET MIRROR",
    "url": "https://netmirror.gg/10/en-in",
    "domain": "netmirror.gg",
    "category": "Apps",
    "regions": [
      "Global"
    ],
    "isTrusted": true,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Community Verified",
      "Android APK",
      "Ad-Free Option"
    ]
  },
  {
    "id": "ms2twlltw6obx",
    "name": "YENIME",
    "url": "https://yenime.net/",
    "domain": "yenime.net",
    "category": "Anime",
    "regions": [
      "Global"
    ],
    "isTrusted": true,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Community Verified",
      "Sub & Dub",
      "Simulcast"
    ]
  },
  {
    "id": "ms2v9t0be7pvn",
    "name": "STREAM EAST",
    "url": "https://thestreameast.top/",
    "domain": "thestreameast.top",
    "category": "Live TV & Sports",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Live Sports",
      "HD 60FPS",
      "Cricket/Soccer"
    ]
  },
  {
    "id": "ms2vc7tt9v0wk",
    "name": "COMICK",
    "url": "https://comick.dev/",
    "domain": "comick.dev",
    "category": "Manga",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "High-Res Reader",
      "Daily Updates",
      "Free Scans"
    ]
  },
  {
    "id": "ms2vg859bnjw5",
    "name": "HOTSTAR",
    "url": "https://www.hotstar.com/in/home",
    "domain": "hotstar.com",
    "category": "Paid",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Official",
      "4K Ultra HD",
      "Dolby Vision"
    ]
  },
  {
    "id": "ms3bftq5u05bp",
    "name": "MOVIES BOX",
    "url": "https://www.moviesbox.com.co/home/",
    "domain": "moviesbox.com.co",
    "category": "Apps",
    "regions": [
      "Global"
    ],
    "isTrusted": true,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Community Verified",
      "Android APK",
      "Ad-Free Option"
    ]
  },
  {
    "id": "ms2th1hf7ncwk",
    "name": "7 movies",
    "url": "https://7movies.in/",
    "domain": "7movies.in",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "1080p HD",
      "Fast Player",
      "No Sign-Up"
    ]
  },
  {
    "id": "ms2ug2xqgt5jg",
    "name": "FLIXHUB",
    "url": "https://flixhub.studio/",
    "domain": "flixhub.studio",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": true,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Community Verified",
      "1080p HD",
      "Fast Player"
    ]
  },
  {
    "id": "ms2va88dhq2dv",
    "name": "STMIFY",
    "url": "https://stmify.com/",
    "domain": "stmify.com",
    "category": "Live TV & Sports",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Live Stream",
      "Cricket & Football",
      "Multi-Feed"
    ]
  },
  {
    "id": "ms2vckb0mbtit",
    "name": "Q TOON",
    "url": "https://qtoon.org/",
    "domain": "qtoon.org",
    "category": "Manga",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "High-Res Reader",
      "Daily Updates",
      "Free Scans"
    ]
  },
  {
    "id": "ms2vhiq3gb07g",
    "name": "HBO MAX",
    "url": "https://www.hbomax.com/geo-availability/india?utm_source=facebook&utm_medium=paid-social&utm_id=fb%7C120250190127540496%7C120250961158360496%7C120251616249190496&utm_content=120251616249190496&utm_term=120250961158360496&utm_campaign=120250190127540496&fbclid=PAZXh0bgNhZW0BMABhZGlkAas4e85sqIBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafsfXCkyEl4FcZycGyBUnkFVj7iXciZ-B1yo4FfRdEWnfWpnKmcOpoY9UUcBg_aem_ll-4T2SohfzfkzGgGmV3ow%3Futm_campaign%3D120219700185430167&fbclid=PAcGRvZgJmZGlkFlCiQzGaqdjXf9Y1lyO7NwATd9GNHjVleHRuA2FlbQEwAGFkaWQBqzR0uZ50F3NydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpyPYH6sylBRTI-W_mlr7SRYcVjWB41loEbSmtMTPlW2EeRiM8blm9N6aUD7g_aem_MU58id_RK_BLwagzXcqPJQ&utm_id=fb%7C120219700185430167%7C120219700190500167%7C120247472418060167&utm_medium=paid-social&utm_content=120247472418060167&utm_source=facebook&utm_term=120219700190500167",
    "domain": "hbomax.com",
    "category": "Paid",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Official",
      "4K Ultra HD",
      "Dolby Vision"
    ]
  },
  {
    "id": "ms3bgpagkryc3",
    "name": "PIKASHOWS",
    "url": "https://pikashowtv.in/",
    "domain": "pikashowtv.in",
    "category": "Apps",
    "regions": [
      "Global"
    ],
    "isTrusted": true,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Android App",
      "TV Compatible",
      "Multi-Source"
    ]
  },
  {
    "id": "dl-fitgirl",
    "name": "FITGIRL REPACKS",
    "url": "https://fitgirl-repacks.site/",
    "domain": "fitgirl-repacks.site",
    "category": "Download",
    "regions": [
      "Global"
    ],
    "isTrusted": true,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "PC Repacks",
      "Torrent & Direct",
      "100% Lossless"
    ]
  },
  {
    "id": "game-crazygames",
    "name": "CRAZYGAMES",
    "url": "https://www.crazygames.com/",
    "domain": "crazygames.com",
    "category": "Games",
    "regions": [
      "Global"
    ],
    "isTrusted": true,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Community Verified",
      "Instant Play",
      "No Install"
    ]
  },
  {
    "id": "mubgaml3k7frc",
    "name": "FLIXANI",
    "url": "https://flixani.studio/",
    "domain": "flixani.studio",
    "category": "Anime",
    "regions": [
      "Global"
    ],
    "isTrusted": true,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Community Verified",
      "Sub & Dub",
      "Simulcast"
    ]
  },
  {
    "id": "ms2uego1lxbmv",
    "name": "ANY SHOWS",
    "url": "https://anishows.org/",
    "domain": "anishows.org",
    "category": "Anime",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Sub & Dub",
      "Simulcast",
      "HD Quality"
    ]
  },
  {
    "id": "ms2vaqvfr5810",
    "name": "FAMELACK",
    "url": "https://famelack.com/",
    "domain": "famelack.com",
    "category": "Live TV & Sports",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Live Stream",
      "Cricket & Football",
      "Multi-Feed"
    ]
  },
  {
    "id": "ms2vd2dtgayp4",
    "name": "WEEB CENTRAL",
    "url": "https://weebcentral.com/",
    "domain": "weebcentral.com",
    "category": "Manga",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "High-Res Reader",
      "Daily Updates",
      "Free Scans"
    ]
  },
  {
    "id": "ms2vhwcjijewa",
    "name": "APPLE TV",
    "url": "https://tv.apple.com/",
    "domain": "tv.apple.com",
    "category": "Paid",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Official OTT",
      "4K HDR",
      "Premium Audio"
    ]
  },
  {
    "id": "ms3bhjd2e2rhk",
    "name": "PLAY TORRIO",
    "url": "https://playtorrio.pages.dev/",
    "domain": "playtorrio.pages.dev",
    "category": "Apps",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Android APK",
      "Ad-Free Option",
      "TV Support"
    ]
  },
  {
    "id": "mu27fotacuvhq",
    "name": "DRAMA PLANETS",
    "url": "https://www.dramaplanets.online/",
    "domain": "dramaplanets.online",
    "category": "K Drama",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fresh Domain",
      "English Subs",
      "OST Tracks"
    ]
  },
  {
    "id": "mu27sdpt6xev3",
    "name": "ANKER GAMES",
    "url": "https://ankergames.net/",
    "domain": "ankergames.net",
    "category": "Games",
    "regions": [
      "Global"
    ],
    "isTrusted": true,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Community Verified",
      "Instant Play",
      "No Install"
    ]
  },
  {
    "id": "mu5damms1vagj",
    "name": "THUGTV",
    "url": "https://thugtv.online/",
    "domain": "thugtv.online",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "1080p HD",
      "Fast Player",
      "No Sign-Up"
    ]
  },
  {
    "id": "ms2tgj8utkoue",
    "name": "1TUBE",
    "url": "https://1tube.org/",
    "domain": "1tube.org",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": true,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Community Verified",
      "1080p HD",
      "Fast Player"
    ]
  },
  {
    "id": "ms2v1qsbnjn4f",
    "name": "ANIME TV",
    "url": "https://animetvplus.xyz/",
    "domain": "animetvplus.xyz",
    "category": "Anime",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Sub & Dub",
      "Simulcast",
      "HD Quality"
    ]
  },
  {
    "id": "ms2vdkyd46dy0",
    "name": "KING OF SHOJO",
    "url": "https://kingofshojo.com/",
    "domain": "kingofshojo.com",
    "category": "Manga",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "High-Res Reader",
      "Daily Updates",
      "Free Scans"
    ]
  },
  {
    "id": "ms2vismwnjk7z",
    "name": "PRIME VIDEO",
    "url": "https://www.primevideo.com/",
    "domain": "primevideo.com",
    "category": "Paid",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Official",
      "4K Ultra HD",
      "Dolby Vision"
    ]
  },
  {
    "id": "ms3bi5mak9klp",
    "name": "YOU CINE",
    "url": "https://youcineapkpro.com/",
    "domain": "youcineapkpro.com",
    "category": "Apps",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Android APK",
      "Ad-Free Option",
      "TV Support"
    ]
  },
  {
    "id": "ms3e21a50cr4d",
    "name": "PUBLIC IPTV",
    "url": "https://publiciptv.com/",
    "domain": "publiciptv.com",
    "category": "Live TV & Sports",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Live Stream",
      "Cricket & Football",
      "Multi-Feed"
    ]
  },
  {
    "id": "mu27tdq0zmrln",
    "name": "FILE CR",
    "url": "https://filecr.com/home/",
    "domain": "filecr.com",
    "category": "Download",
    "regions": [
      "Global"
    ],
    "isTrusted": true,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Community Verified",
      "Direct Link",
      "Verified Clean"
    ]
  },
  {
    "id": "mu27wjd635elu",
    "name": "VIKI",
    "url": "https://www.viki.com/",
    "domain": "viki.com",
    "category": "K Drama",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fresh Domain",
      "English Subs",
      "OST Tracks"
    ]
  },
  {
    "id": "ms2vjb6mljbxo",
    "name": "CRUNCHUROLL",
    "url": "https://sso.crunchyroll.com/login?return_url=%2Fauthorize%3Fclient_id%3Dnoaihdevm_6iyg0a8l0q%26redirect_uri%3Dhttps%253A%252F%252Fwww.crunchyroll.com%252Fcallback%26response_type%3Dcookie%26state%3D%252F",
    "domain": "sso.crunchyroll.com",
    "category": "Paid",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Official OTT",
      "4K HDR",
      "Premium Audio"
    ]
  },
  {
    "id": "ms3b79g4er7kt",
    "name": "WEBTOON",
    "url": "https://www.webtoons.com/en/",
    "domain": "webtoons.com",
    "category": "Manga",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": true,
    "tags": [
      "High-Res Reader",
      "Daily Updates",
      "Free Scans"
    ]
  },
  {
    "id": "ms3e0mfmzfjuo",
    "name": "ONSTREAM",
    "url": "https://onstreamapks.app/",
    "domain": "onstreamapks.app",
    "category": "Apps",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Android App",
      "TV Compatible",
      "Multi-Source"
    ]
  },
  {
    "id": "ms3e2mf403jea",
    "name": "SPORTPLUS",
    "url": "https://en97.sportplus.watch/",
    "domain": "en97.sportplus.watch",
    "category": "Live TV & Sports",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Live Sports",
      "HD 60FPS",
      "Cricket/Soccer"
    ]
  },
  {
    "id": "mu27u3ffmd0yz",
    "name": "FILMYFLY",
    "url": "https://filmyfly.bingo/",
    "domain": "filmyfly.bingo",
    "category": "Download",
    "regions": [
      "Global"
    ],
    "isTrusted": true,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Community Verified",
      "Direct Link",
      "Verified Clean"
    ]
  },
  {
    "id": "mu27y42ir5x0a",
    "name": "K SHOW",
    "url": "https://kshow123.tv/",
    "domain": "kshow123.tv",
    "category": "K Drama",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fresh Domain",
      "English Subs",
      "OST Tracks"
    ]
  },
  {
    "id": "mu5n6mxigco0x",
    "name": "RED FLIX",
    "url": "https://redflix.club/",
    "domain": "redflix.club",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": true,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Community Verified",
      "1080p HD",
      "Fast Player"
    ]
  },
  {
    "id": "ms2v4fhvkrqz1",
    "name": "KAA",
    "url": "https://kaa.lt/",
    "domain": "kaa.lt",
    "category": "Anime",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Sub & Dub",
      "Simulcast",
      "HD Quality"
    ]
  },
  {
    "id": "ms2tfcv4txa6u",
    "name": "1 Show",
    "url": "https://www.1shows.org/",
    "domain": "1shows.org",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": true,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Community Verified",
      "1080p HD",
      "Fast Player"
    ]
  },
  {
    "id": "ms2vjqvwdhbhh",
    "name": "PEACOCK",
    "url": "https://www.peacocktv.com/unavailable",
    "domain": "peacocktv.com",
    "category": "Paid",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Official OTT",
      "4K HDR",
      "Premium Audio"
    ]
  },
  {
    "id": "ms3e3lwsl5u80",
    "name": "STREAM EAST",
    "url": "https://streameastnow.net/",
    "domain": "streameastnow.net",
    "category": "Live TV & Sports",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Live Sports",
      "HD 60FPS",
      "Cricket/Soccer"
    ]
  },
  {
    "id": "mt1lk076av0z8",
    "name": "Manga reader",
    "url": "https://anireads.cc/",
    "domain": "anireads.cc",
    "category": "Manga",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fresh Domain",
      "High-Res Reader",
      "Daily Updates"
    ]
  },
  {
    "id": "ms2v4s9su1jh2",
    "name": "JUST ANIME",
    "url": "https://justanime.to/",
    "domain": "justanime.to",
    "category": "Anime",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Sub & Dub",
      "Simulcast",
      "HD Quality"
    ]
  },
  {
    "id": "ms2tl1qb47f6k",
    "name": "1FLEX",
    "url": "https://www.1flex.org/",
    "domain": "1flex.org",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": true,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Community Verified",
      "1080p HD",
      "Fast Player"
    ]
  },
  {
    "id": "ms3dpquywg3xx",
    "name": "SHUDDER",
    "url": "https://www.shudder.com/",
    "domain": "shudder.com",
    "category": "Paid",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Official OTT",
      "4K HDR",
      "Premium Audio"
    ]
  },
  {
    "id": "mu241sbzauh9x",
    "name": "fancode",
    "url": "https://www.fancode.com/",
    "domain": "fancode.com",
    "category": "Live TV & Sports",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Live Sports",
      "HD 60FPS",
      "Cricket/Soccer"
    ]
  },
  {
    "id": "ms2v5hpg7we7t",
    "name": "ANIME SALT",
    "url": "https://animesalt.link/",
    "domain": "animesalt.link",
    "category": "Anime",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Sub & Dub",
      "Simulcast",
      "HD Quality"
    ]
  },
  {
    "id": "mt1lpwjhlmfrf",
    "name": "NIPPLEFLIX",
    "url": "https://nippleflix.org/",
    "domain": "nippleflix.org",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": true,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Community Verified",
      "1080p HD",
      "Fast Player"
    ]
  },
  {
    "id": "ms3dvbko7co78",
    "name": "HULU",
    "url": "https://auth.hulu.com/web/login/",
    "domain": "auth.hulu.com",
    "category": "Paid",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Official OTT",
      "4K HDR",
      "Premium Audio"
    ]
  },
  {
    "id": "mse7lfl71u1ak",
    "name": "SENPAI FLIX",
    "url": "https://senpaiflix.fun/",
    "domain": "senpaiflix.fun",
    "category": "Anime",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Sub & Dub",
      "Simulcast",
      "HD Quality"
    ]
  },
  {
    "id": "mskbz4mxt82hu",
    "name": "PvrPlay",
    "url": "https://pvrplay.online",
    "domain": "PvrPlay",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "1080p HD",
      "Fast Player",
      "No Sign-Up"
    ]
  },
  {
    "id": "msfsfrhgp11w7",
    "name": "ANIMEXTRONS",
    "url": "https://animextrons.co.in/",
    "domain": "animextrons.co.in",
    "category": "Anime",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Sub & Dub",
      "Simulcast",
      "HD Quality"
    ]
  },
  {
    "id": "ms2tednwv7muc",
    "name": "PANTYFLIX",
    "url": "https://pantyflix.org/",
    "domain": "pantyflix.org",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": true,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Community Verified",
      "1080p HD",
      "Fast Player"
    ]
  },
  {
    "id": "ms3dxpw7it3tw",
    "name": "PARAMOUNT",
    "url": "https://www.paramountplus.com/intl/",
    "domain": "paramountplus.com",
    "category": "Paid",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Official OTT",
      "4K HDR",
      "Premium Audio"
    ]
  },
  {
    "id": "msia0q2cjtntr",
    "name": "ANIKOTO TV",
    "url": "https://anikototv.to/",
    "domain": "anikototv.to",
    "category": "Anime",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Sub & Dub",
      "Simulcast",
      "HD Quality"
    ]
  },
  {
    "id": "ms2u0cv0xlvak",
    "name": "SHUTTLE TV",
    "url": "https://shuttletv.su/",
    "domain": "shuttletv.su",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "1080p HD",
      "Fast Player",
      "No Sign-Up"
    ]
  },
  {
    "id": "ms3dyh5ufxj32",
    "name": "MGM",
    "url": "https://www.mgmplus.com/",
    "domain": "mgmplus.com",
    "category": "Paid",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Official OTT",
      "4K HDR",
      "Premium Audio"
    ]
  },
  {
    "id": "mslv1yszv725f",
    "name": "WATCH ANIMEx",
    "url": "https://watchanimez.me/",
    "domain": "https://watchanimez.me/",
    "category": "Anime",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Sub & Dub",
      "Simulcast",
      "HD Quality"
    ]
  },
  {
    "id": "ms2ublikhkx0h",
    "name": "FLY FLIX",
    "url": "https://flyflix.net/",
    "domain": "flyflix.net",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "1080p HD",
      "Fast Player",
      "No Sign-Up"
    ]
  },
  {
    "id": "ms3dz7jebbvpj",
    "name": "AMC",
    "url": "https://www.amcplus.com/login",
    "domain": "amcplus.com",
    "category": "Paid",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Official OTT",
      "4K HDR",
      "Premium Audio"
    ]
  },
  {
    "id": "mt1lfg9hm25kc",
    "name": "Ani waves",
    "url": "https://aniwaves.ru/home",
    "domain": "aniwaves.ru",
    "category": "Anime",
    "regions": [
      "IN"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fresh Domain",
      "Sub & Dub",
      "Simulcast"
    ]
  },
  {
    "id": "ms2udhv2f75gm",
    "name": "YOU SHOWS",
    "url": "https://youshows.org/",
    "domain": "youshows.org",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fresh Domain",
      "1080p HD",
      "Fast Player"
    ]
  },
  {
    "id": "mtbo1c3t14d8c",
    "name": "animerulz",
    "url": "https://animerulz.co.in/",
    "domain": "animerulz.co.in",
    "category": "Anime",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fast CDN",
      "Sub & Dub",
      "Watchlist"
    ]
  },
  {
    "id": "ms2um0ncjossc",
    "name": "PRIME MOVIES",
    "url": "https://primeshows.org/",
    "domain": "primeshows.org",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "Official",
      "4K Ultra HD",
      "Dolby Vision"
    ]
  },
  {
    "id": "mtbo4ywp7dhp1",
    "name": "Anime Play",
    "url": "https://dub.animeplay.icu/",
    "domain": "dub.animeplay.icu",
    "category": "Anime",
    "regions": [
      "IN"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fresh Domain",
      "Sub & Dub",
      "Simulcast"
    ]
  },
  {
    "id": "ms2uwsrnmrviw",
    "name": "DULO",
    "url": "https://dulo.cx/",
    "domain": "dulo.cx",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "1080p HD",
      "Fast Player",
      "No Sign-Up"
    ]
  },
  {
    "id": "mu25o20qf2l9d",
    "name": "OTANOX",
    "url": "https://otanox.online/",
    "domain": "otanox.online",
    "category": "Anime",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fresh Domain",
      "Sub & Dub",
      "Simulcast"
    ]
  },
  {
    "id": "ms2uyznbldhs4",
    "name": "STIGSTREAM",
    "url": "https://stigstream.ru/",
    "domain": "stigstream.ru",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "1080p HD",
      "Fast Player",
      "No Sign-Up"
    ]
  },
  {
    "id": "mu25rlfec9p45",
    "name": "HiAnime",
    "url": "https://hianime.at/home",
    "domain": "hianime.at",
    "category": "Anime",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fast CDN",
      "Sub & Dub",
      "Watchlist"
    ]
  },
  {
    "id": "ms2uzxxstyo73",
    "name": "FLIXEO",
    "url": "https://flixeo.tv/home",
    "domain": "flixeo.tv",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "1080p HD",
      "Fast Player",
      "No Sign-Up"
    ]
  },
  {
    "id": "mubg753c8ybm0",
    "name": "Animetsu",
    "url": "https://animetsu.site/",
    "domain": "animetsu.site",
    "category": "Anime",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fresh Domain",
      "Sub & Dub",
      "Simulcast"
    ]
  },
  {
    "id": "ms2v0ta2ph0tm",
    "name": "WILLOW",
    "url": "https://willow.arlen.icu/",
    "domain": "willow.arlen.icu",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "1080p HD",
      "Fast Player",
      "No Sign-Up"
    ]
  },
  {
    "id": "ms3di7p83at01",
    "name": "CINRIFT",
    "url": "https://cinrift.me/",
    "domain": "cinrift.me",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": false,
    "isFeatured": false,
    "tags": [
      "1080p HD",
      "Fast Player",
      "No Sign-Up"
    ]
  },
  {
    "id": "mssqu1xlcfcll",
    "name": "Cinemove",
    "url": "https://cinemove.cc/",
    "domain": "cinemove.cc",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fresh Domain",
      "1080p HD",
      "Fast Player"
    ]
  },
  {
    "id": "msuj7f7yxawwt",
    "name": "Vuflix",
    "url": "https://vuflix.co/",
    "domain": "vuflix.co",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fresh Domain",
      "1080p HD",
      "Fast Player"
    ]
  },
  {
    "id": "msuj9c8k8b6mg",
    "name": "7reels",
    "url": "https://7reels.cc/",
    "domain": "7reels.cc",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fresh Domain",
      "1080p HD",
      "Fast Player"
    ]
  },
  {
    "id": "mt1lgmav1n7xt",
    "name": "Pixel Flix",
    "url": "https://pixelflix.cc/",
    "domain": "pixelflix.cc",
    "category": "Movies & Shows",
    "regions": [
      "Global",
      "IN",
      "FR"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fresh Domain",
      "1080p HD",
      "Fast Player"
    ]
  },
  {
    "id": "mt1li8g02200i",
    "name": "Anicine",
    "url": "https://anicine.xyz/",
    "domain": "anicine.xyz",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fresh Domain",
      "1080p HD",
      "Fast Player"
    ]
  },
  {
    "id": "mt1lk9re60o47",
    "name": "Multi movies streaming site",
    "url": "https://flixhub.aniflix.uno/",
    "domain": "flixhub.aniflix.uno",
    "category": "Movies & Shows",
    "regions": [
      "IN"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fresh Domain",
      "1080p HD",
      "Fast Player"
    ]
  },
  {
    "id": "mtbo3zw6xgpx0",
    "name": "cinehd",
    "url": "https://cinehd.vc/",
    "domain": "cinehd.vc",
    "category": "Movies & Shows",
    "regions": [
      "US"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fresh Domain",
      "1080p HD",
      "Fast Player"
    ]
  },
  {
    "id": "mtbo4ns1kut2n",
    "name": "AllFlix",
    "url": "https://allflix.org/",
    "domain": "allflix.org",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fresh Domain",
      "1080p HD",
      "Fast Player"
    ]
  },
  {
    "id": "mu25bubupd8h6",
    "name": "Netshows",
    "url": "https://netshows.xyz/",
    "domain": "netshows.xyz",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fresh Domain",
      "1080p HD",
      "Fast Player"
    ]
  },
  {
    "id": "mu27gwx210awk",
    "name": "bingr one",
    "url": "https://bingr.one/",
    "domain": "bingr.one",
    "category": "Movies & Shows",
    "regions": [
      "Global"
    ],
    "isTrusted": false,
    "isNew": true,
    "isFeatured": false,
    "tags": [
      "Fresh Domain",
      "1080p HD",
      "Fast Player"
    ]
  }
];

// 2. Categories Configuration
const CATEGORIES = [
  {
    id: 'cat-movies',
    key: 'Movies & Shows',
    title: 'Movies & TV Shows',
    icon: '🎬',
    desc: 'Free movie streaming, 4K releases, Bollywood & Hollywood cinema, and web series.'
  },
  {
    id: 'cat-anime',
    key: 'Anime',
    title: 'Anime',
    icon: '⚡',
    desc: 'HD subbed and dubbed anime, simulcasts, and streaming portals.'
  },
  {
    id: 'cat-paid',
    key: 'Paid',
    title: 'Paid OTT Services',
    icon: '💳',
    desc: 'Official premium subscription platforms and 4K cinema apps.'
  },
  {
    id: 'cat-sports',
    key: 'Live TV & Sports',
    title: 'Live TV & Sports',
    icon: '📺',
    desc: 'Live cricket, football, racing, IPTV channels, and match streams.'
  },
  {
    id: 'cat-manga',
    key: 'Manga',
    title: 'Manga & Webtoons',
    icon: '📖',
    desc: 'Digital manga readers, manhwa, webtoons, and graphic novels.'
  },
  {
    id: 'cat-apps',
    key: 'Apps',
    title: 'Apps & APKs',
    icon: '📱',
    desc: 'Dedicated Android APKs and mobile applications for phone and TV.'
  },
  {
    id: 'cat-downloads',
    key: 'Download',
    title: 'Downloads & Software',
    icon: '📥',
    desc: 'Compressed PC game repacks, safe software vaults, and direct downloads.'
  },
  {
    id: 'cat-kdrama',
    key: 'K Drama',
    title: 'K-Drama',
    icon: '🌸',
    desc: 'Korean drama series, romantic shows, and Asian entertainment.'
  },
  {
    id: 'cat-games',
    key: 'Games',
    title: 'Instant Games',
    icon: '🎮',
    desc: 'Free playable browser games with zero downloads or installation.'
  },
  {
    id: 'cat-adult',
    key: 'Adult (18+)',
    title: 'Adult (18+)',
    icon: '🔞',
    desc: 'Adult cinema, 18+ uncut series, and mature content streaming.'
  }
];

// 3. State
let searchQuery = '';
let filterVerified = false;
let filterNew = false;
let filterIndia = false;
let showFavorites = false;

let favorites = new Set();
try {
  const saved = localStorage.getItem('filmhub_favs');
  if (saved) favorites = new Set(JSON.parse(saved));
} catch (e) {
  favorites = new Set();
}

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchClearBtn = document.getElementById('searchClearBtn');
const sectionsContainer = document.getElementById('sectionsContainer');
const activeCounter = document.getElementById('activeCounter');
const favBadge = document.getElementById('favBadge');
const btnFavs = document.getElementById('btnFavs');

const chipAll = document.getElementById('chipAll');
const chipVerified = document.getElementById('chipVerified');
const chipNew = document.getElementById('chipNew');
const chipIndia = document.getElementById('chipIndia');

// 4. Initial Setup
updateFavCount();
renderSections();
setupScrollSpy();

// 5. Search Handlers
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    searchClearBtn.style.display = searchQuery ? 'block' : 'none';
    renderSections();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });
}

if (searchClearBtn) {
  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClearBtn.style.display = 'none';
    renderSections();
    searchInput.focus();
  });
}

// 6. Filter Chips
if (chipAll) {
  chipAll.addEventListener('click', () => {
    resetFilterState();
    showFavorites = false;
    if (btnFavs) btnFavs.classList.remove('active');
    chipAll.classList.add('active');
    renderSections();
  });
}

if (chipVerified) {
  chipVerified.addEventListener('click', () => {
    filterVerified = !filterVerified;
    chipVerified.classList.toggle('active', filterVerified);
    chipAll.classList.remove('active');
    renderSections();
  });
}

if (chipNew) {
  chipNew.addEventListener('click', () => {
    filterNew = !filterNew;
    chipNew.classList.toggle('active', filterNew);
    chipAll.classList.remove('active');
    renderSections();
  });
}

if (chipIndia) {
  chipIndia.addEventListener('click', () => {
    filterIndia = !filterIndia;
    chipIndia.classList.toggle('active', filterIndia);
    chipAll.classList.remove('active');
    renderSections();
  });
}

if (btnFavs) {
  btnFavs.addEventListener('click', () => {
    showFavorites = !showFavorites;
    btnFavs.classList.toggle('active', showFavorites);
    if (showFavorites) chipAll.classList.remove('active');
    renderSections();
  });
}

function resetFilterState() {
  filterVerified = false;
  filterNew = false;
  filterIndia = false;
  if (chipVerified) chipVerified.classList.remove('active');
  if (chipNew) chipNew.classList.remove('active');
  if (chipIndia) chipIndia.classList.remove('active');
}

// 7. Render Sections Engine
function renderSections() {
  let totalVisible = 0;
  let html = '';

  CATEGORIES.forEach(cat => {
    const sites = SITES_DATABASE.filter(site => {
      if (site.category !== cat.key) return false;

      // Favorites filter
      if (showFavorites && !favorites.has(site.id)) return false;

      // Sub-filters
      if (filterVerified && !site.isTrusted) return false;
      if (filterNew && !site.isNew) return false;
      if (filterIndia && !site.regions.includes('IN')) return false;

      // Search match
      if (searchQuery) {
        const matchName = site.name.toLowerCase().includes(searchQuery);
        const matchDomain = site.domain.toLowerCase().includes(searchQuery);
        const matchCat = site.category.toLowerCase().includes(searchQuery);
        const matchTags = site.tags && site.tags.some(t => t.toLowerCase().includes(searchQuery));
        if (!matchName && !matchDomain && !matchCat && !matchTags) return false;
      }

      return true;
    });

    if (sites.length > 0) {
      totalVisible += sites.length;

      const cardsHtml = sites.map(site => {
        const isFav = favorites.has(site.id);
        const isIndia = site.regions && site.regions.includes('IN') && !site.regions.includes('Global');

        const monogram = site.name.substring(0, 2).toUpperCase();
        const verifiedTag = site.isTrusted ? `<span class="badge-tag-verified">Verified</span>` : '';
        const newTag = site.isNew ? `<span class="badge-tag-new">★ New</span>` : '';
        const regionTag = isIndia ? `<span class="badge-tag-region">India</span>` : '';
        const adultTag = site.category === 'Adult (18+)' ? `<span class="badge-tag-adult">18+</span>` : '';

        const tagsHtml = (site.tags || []).slice(0, 3).map(tag => 
          `<span class="card-tag-item">${tag}</span>`
        ).join('');

        return `
          <article class="film-card">
            <div>
              <div class="card-top-flex">
                <div class="card-monogram">${monogram}</div>
                <div class="card-badges-row">
                  ${adultTag}
                  ${verifiedTag}
                  ${newTag}
                  ${regionTag}
                </div>
              </div>
              <h3 class="card-site-title">${site.name}</h3>
              <div class="card-site-domain">${site.domain}</div>
              <div class="card-tags-list">${tagsHtml}</div>
            </div>

            <div class="card-bottom-row">
              <a href="${site.url}" target="_blank" rel="noopener noreferrer" class="btn-open-stream">
                <span>Watch / Open</span>
                <span>↗</span>
              </a>
              <button class="btn-icon-fav ${isFav ? 'active' : ''}" onclick="toggleFav('${site.id}')" title="${isFav ? 'Remove Favorite' : 'Save Favorite'}">
                ${isFav ? '❤️' : '🤍'}
              </button>
              <button class="btn-icon-copy" onclick="copyUrl('${site.url}')" title="Copy URL">
                📋
              </button>
            </div>
          </article>
        `;
      }).join('');

      html += `
        <section class="category-block" id="${cat.id}">
          <div class="category-banner">
            <div class="cat-left-info">
              <div class="cat-icon-badge">${cat.icon}</div>
              <div>
                <h2 class="cat-heading">${cat.title}</h2>
                <p class="cat-sub">${cat.desc}</p>
              </div>
            </div>
            <div class="cat-count-pill">${sites.length} Sites</div>
          </div>

          <div class="cards-grid">
            ${cardsHtml}
          </div>
        </section>
      `;
    }
  });

  // Empty state
  if (totalVisible === 0) {
    const msg = showFavorites 
      ? "You haven't added any platforms to Favorites yet. Click the heart ❤️ on any card to save it!"
      : `No platforms found matching "${searchQuery}". Try searching another term or resetting filters.`;

    sectionsContainer.innerHTML = `
      <div class="empty-results-box">
        <div style="font-size: 32px; margin-bottom: 12px;">🎬</div>
        <h3 style="font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 6px;">No Sites Found</h3>
        <p style="color: var(--text-muted); font-size: 13.5px; max-width: 440px; margin: 0 auto 18px auto;">
          ${msg}
        </p>
        <button onclick="resetAll()" style="background: var(--accent-red); color: #fff; border: none; padding: 8px 20px; border-radius: 8px; font-weight: 700; cursor: pointer;">
          Reset Filters
        </button>
      </div>
    `;
  } else {
    sectionsContainer.innerHTML = html;
  }

  if (activeCounter) {
    activeCounter.textContent = `${totalVisible} Sites Online`;
  }
}

function resetAll() {
  if (searchInput) {
    searchInput.value = '';
    searchQuery = '';
    searchClearBtn.style.display = 'none';
  }
  showFavorites = false;
  if (btnFavs) btnFavs.classList.remove('active');
  resetFilterState();
  if (chipAll) chipAll.classList.add('active');
  renderSections();
}

// 8. Favorites System
function toggleFav(id) {
  if (favorites.has(id)) {
    favorites.delete(id);
    showToast('Removed from Favorites');
  } else {
    favorites.add(id);
    showToast('❤️ Saved to Favorites');
  }

  try {
    localStorage.setItem('filmhub_favs', JSON.stringify([...favorites]));
  } catch (e) {}

  updateFavCount();
  renderSections();
}

function updateFavCount() {
  if (favBadge) favBadge.textContent = favorites.size;
}

// 9. Clipboard Copy
function copyUrl(url) {
  navigator.clipboard.writeText(url).then(() => {
    showToast(`Copied: ${url}`);
  }).catch(() => {
    showToast('Failed to copy link.');
  });
}

function showToast(text) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.innerHTML = `<span>🔗 ${text}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

// 10. ScrollSpy for Sidebar & Mobile Nav
function setupScrollSpy() {
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  const mobilePills = document.querySelectorAll('.mobile-nav-pill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        sidebarItems.forEach(item => {
          if (item.getAttribute('data-target') === id) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });

        mobilePills.forEach(pill => {
          const href = pill.getAttribute('href').replace('#', '');
          if (href === id) {
            pill.classList.add('active');
            pill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          } else {
            pill.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  CATEGORIES.forEach(cat => {
    const el = document.getElementById(cat.id);
    if (el) observer.observe(el);
  });
}
