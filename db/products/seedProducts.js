//for use in init_db.js createInitialProducts
//in init_db.js add import { productsToCreate } from "./seedProducts"

const productsToCreate = [
  {
    title: "Super Mario Kart",
    description:
      "In Super Mario Kart, the player takes control of one of eight Mario series characters, each with differing capabilities. In single player mode players can race against computer-controlled characters in multi-race cups over three difficulty levels. During the races, offensive and speed boosting power-ups can be used to gain an advantage. Alternatively players can race against the clock in a Time Trial mode. In multiplayer mode two players can simultaneously take part in the cups or can race against each other one-on-one in Match Race mode. In a third multiplayer mode – Battle Mode – the aim is to defeat the other players by attacking them with power-ups, destroying balloons which surround each kart.",
    picture: "https://static.wikia.nocookie.net/videogames-fanon/images/f/f7/Mario_Kart_Double_Dash%21%21_XBOX.jpg/revision/latest/scale-to-width-down/250?cb=20191209133147",
    unitPrice: 28.99,
  },
  {
    title: "Grand Theft Auto: Vice City",
    description:
      "[Metacritic's 2002 PS2 Game of the Year ] Welcome to Vice City. Welcome to the 1980s. Having just made it back onto the streets of Liberty City after a long stretch in maximum security, Tommy Vercetti is sent to Vice City by his old boss, Sonny Forelli. They were understandably nervous about his re-appearance in Liberty City, so a trip down south seemed like a good idea. But all does not go smoothly upon his arrival in the glamorous, hedonistic metropolis of Vice City. He's set up and is left with no money and no merchandise. Sonny wants his money back, but the biker gangs, Cuban gangsters, and corrupt politicians stand in his way. Most of Vice City seems to want Tommy dead. His only answer is to fight back and take over the city himself. Vice City offers vehicular pleasures to suit every taste. For the speed enthusiast, there's high-performance cars and motorbikes. For the sportsman, a powerboat or a golf buggy lets you enjoy the great outdoors. For those that need that sense of freedom and escape, why not charter a helicopter and see the beauty of Vice City from the air? [Rockstar]",
    picture: "this is a placeholder for image",
    unitPrice: 8.99,
  },
  {
    title: "LA Noire",
    description:
      "Amid the post-war boom of Hollywood's Golden Age, Cole Phelps, an LAPD detective is thrown headfirst into a city drowning in its own success. Corruption is rampant, the drug trade is exploding, and murder rates are at an all-time high. In his fight to climb the ranks and do what's right, Phelps must unravel the truth behind a string of arson attacks, racketeering conspiracies and brutal murders, battling the L.A. underworld and even members of his own department to uncover a secret that could shake the city to its rotten core. Using groundbreaking new animation technology that captures every nuance of an actor's facial performance in astonishing detail, L.A. Noire is a violent crime thriller that blends breathtaking action with true detective work to deliver an unprecedented interactive experience. Search for clues, chase down suspects and interrogate witnesses as you struggle to find the truth in a city where everyone has something to hide.",
    picture: "this is a placeholder for image",
    unitPrice: 18.99,
  },
  {
    title: "Fortnite",
    description:
      "Epic Games next project has you building forts and stopping a zombie invasion.",
    picture: "this is a placeholder for image",
    unitPrice: 28.99,
  },
  {
    title: "The Legend of Zelda: Ocarina of Time",
    description:
      "As a young boy, Link is tricked by Ganondorf, the King of the Gerudo Thieves. The evil human uses Link to gain access to the Sacred Realm, where he places his tainted hands on Triforce and transforms the beautiful Hyrulean landscape into a barren wasteland. Link is determined to fix the problems he helped to create, so with the help of Rauru he travels through time gathering the powers of the Seven Sages.",
    picture: "this is a placeholder for image",
    unitPrice: 18.99,
  },
  {
    title: "Tony Hawk's Pro Skater 2",
    description:
      "As most major publishers' development efforts shift to any number of next-generation platforms, Tony Hawk 2 will likely stand as one of the last truly fantastic games to be released on the PlayStation.",
    picture: "this is a placeholder for image",
    unitPrice: 28.99,
  },
  {
    title: "Grand Theft Auto IV",
    description:
      "What does the American Dream mean today? For Niko Belic, fresh off the boat from Europe. It's the hope he can escape his past. For his cousin, Roman, it is the vision that together they can find fortune in Liberty City, gateway to the land of opportunity. As they slip into debt and are dragged into a criminal underworld by a series of shysters, thieves and sociopaths, they discover that the reality is very different from the dream in a city that worships money and status, and is heaven for those who have them an a living nightmare for those who don't. [Rockstar Games]",
    picture: "this is a placeholder for image",
    unitPrice: 8.99,
  },
  {
    title: "Soul Caliber",
    description:
      "This is a tale of souls and swords, transcending the world and all its history, told for all eternity... The greatest weapons-based fighter returns, this time on Sega Dreamcast. Soul Calibur unleashes incredible graphics, fantastic fighters, and combos so amazing they'll make your head spin!",
    picture: "this is a placeholder for image",
    unitPrice: 17.99,
  },
  {
    title: "Super Mario Galaxy",
    description:
      "[Metacritic's 2007 Wii Game of the Year] The ultimate Nintendo hero is taking the ultimate step ... out into space. Join Mario as he ushers in a new era of video games, defying gravity across all the planets in the galaxy. When some creature escapes into space with Princess Peach, Mario gives chase, exploring bizarre planets all across the galaxy. Mario, Peach and enemies new and old are here. Players run, jump and battle enemies as they explore all the planets in the galaxy. Since this game makes full use of all the features of the Wii Remote, players have to do all kinds of things to succeed: pressing buttons, swinging the Wii Remote and the Nunchuk, and even pointing at and dragging things with the pointer. Since he's in space, Mario can perform mind-bending jumps unlike anything he's done before. He'll also have a wealth of new moves that are all based around tilting, pointing and shaking the Wii Remote. Shake, tilt and point! Mario takes advantage of all the unique aspects of the Wii Remote and Nunchuk controller, unleashing new moves as players shake the controller and even point at and drag items with the pointer. [Nintendo]",
    picture: "this is a placeholder for image",
    unitPrice: 38.99,
  },
  {
    title: "FIFA 21",
    description:
      "Enjoy more control over the Decisive Moments that determine the outcome of every match in FIFA 21. Pick your target and time it right from the spot. Add curl, dip, or knuckle to free kicks. A new aiming mechanic gives you more creativity from dead balls. Move with more agility. Lure the defender in. Beat them with speed or skill. New strafe dribbling adds new dimensions for attacking play in FIFA 21. Take back possession with Active Touch Tackling and new animations that reward you for well-timed defensive play. More clinical finishing when one-on-one. More risk with volleys and long shots. Overhauled shooting creates more realism in front of goal in FIFA 21. [Electronic Arts]",
    picture: "this is a placeholder for image",
    unitPrice: 18.99,
  },
  {
    title: "Red Dead Redemption 2",
    description:
      "Developed by the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America’s unforgiving heartland. The game’s vast and atmospheric world also provides the foundation for a brand new online multiplayer experience. America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang has to rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal fissures threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang that raised him. [Rockstar]",
    picture: "this is a placeholder for image",
    unitPrice: 23.99,
  },
  {
    title: "Perfect Dark",
    description:
      "Step into the Dark... As Carrington Institute's most promising new Agent, Joanna Dark must uncover the truth behind the dataDyne Corporation's recent technological breakthroughs - breakthroughs which could have serious consequences for mankind.",
    picture: "this is a placeholder for image",
    unitPrice: 13.99,
  },
  {
    title: "NCAA Football 14",
    description:
      "NCAA 14 gives players enhanced control over their fate on the turf and as a head coach. The introduction of Infinity Engine 2 lets you play true to your team with gameplay tuned with the unique college game in mind, while new Coach Skills and Power Recruiting create an engrossing Dynasty experience. Also included is the Ultimate Team mode which includes a number of former NCAA stars. ",
    picture: "this is a placeholder for image",
    unitPrice: 68.99,
  },
  {
    title: "Disco Elysium: The Final Cut",
    description:
      "Disco Elysium - The Final Cut is the definitive edition of the smash-hit RPG. Pursue your political dreams in new quests, meet and question more of the city's locals, and explore a whole extra area. Full voice-acting, controller support, and expanded language options also included. Get even more out of this award-winning open world. You're a detective with a unique skill system at your disposal and a whole city block to carve your path across. Interrogate unforgettable characters, crack murders, or take bribes. Become a hero or an absolute disaster of a human being.",
    picture: "this is a placeholder for image",
    unitPrice: 18.99,
  },
  {
    title: "Halo: Combat Evolved",
    description:
      "Enter the mysterious world of Halo, an alien planet shaped like a ring. As mankind's super soldier Master Chief, you must uncover the secrets of Halo and fend off the attacking Covenant. During your missions, you'll battle on foot, in vehicles, inside, and outside with alien and human weaponry. Your objectives include attacking enemy outposts, raiding underground labs for advanced technology, rescuing fallen comrades, and sniping enemy forces. Halo also lets you battle three other players via intense split screen combat or fight cooperatively with a friend through the single-player missions.",
    picture: "this is a placeholder for image",
    unitPrice: 26.99,
  },
  {
    title: "Half-Life 2",
    description:
      "[Metacritic's 2004 PC Game of the Year] By taking the suspense, challenge and visceral charge of the original, and adding startling new realism and responsiveness, Half-Life 2 opens the door to a world where the player's presence affects everything around him, from the physical environment to the behaviors -- even the emotions -- of both friends and enemies. The player again picks up the crowbar of research scientist Gordon Freeman, who finds himself on an alien-infested Earth being picked to the bone, its resources depleted, its populace dwindling. Freeman is thrust into the unenviable role of rescuing the world from the wrong he unleashed back at Black Mesa. And a lot of people -- people he cares about -- are counting on him. [Vivendi Universal]",
    picture: "this is a placeholder for image",
    unitPrice: 18.99,
  },
  {
    title: "NFL 2K1",
    description:
      "In the end, NFL 2K1 is a deeper, more refined version of the original game.",
    picture: "this is a placeholder for image",
    unitPrice: 11.99,
  },
  {
    title: "Resident Evil 4",
    description:
      "Resident Evil 4 marks a new chapter in the Resident Evil series. You'll rejoin Leon S. Kennedy six years after his first mission as a rookie cop from Resident Evil 2. Now a US agent, Leon is on a top secret mission to investigate the disappearance of the president's daughter. As Leon, you must make your way to a mysterious location in Europe, where new enemies await. Take them down by using enhanced aim-and-shoot features and a new action button.",
    picture: "this is a placeholder for image",
    unitPrice: 18.99,
  },
  {
    title: "Mass Effect Legendary Edition",
    description:
      "For many months now, our team at BioWare has been hard at work updating the textures, shaders, models, effects and technical features of three enormous games. Our goal was not to remake or reimagine the original games, but to modernize the experience so that fans and new players can experience the original work in its best possible form. It's been amazing to see the adventures of Commander Shepard take on new life in super-sharp resolution, faster framerates, and beautiful visual enhancements. Mass Effect Legendary Edition will include single-player base content and DLC from Mass Effect, Mass Effect 2, and Mass Effect 3, plus promo weapons, armors, and packs - all remastered and optimized for 4k Ultra HD.",
    picture: "this is a placeholder for image",
    unitPrice: 58.88,
  },
  {
    title: "Hitman 3",
    description:
      "Death Awaits. HITMAN 3 is the dramatic conclusion to the World of Assassination trilogy and takes players around the world on a globetrotting adventure to sprawling sandbox locations. Agent 47 returns as a ruthless professional for the most important contracts of his entire career. Playing the entire trilogy from beginning to end, from within HITMAN 3, also means that the progression systems in HITMAN 3 work across all locations. You can unlock an item in Dubai and take it with you to Paris, for example. HITMAN 2 players will have the option to carry over their hard-earned unlocks and progression into HITMAN 3.",
    picture: "this is a placeholder for image",
    unitPrice: 49.99,
  },
];

const consolesToCreate = [
  {
    description: "Playstation 5",
  },
  {
    description: "Playstation 4",
  },
  {
    description: "Xbox Series X|S",
  },
  {
    description: "Xbox One",
  },
  {
    description: "Nintendo Switch",
  },
  {
    description: "PC",
  },
];

const initialInventory = [
  {
    quantity: 12,
    productId: 1,
    consoleId: 5,
    description: "SuperMario Cart for Switch",
  },
  {
    quantity: 16,
    productId: 2,
    consoleId: 1,
    description: "Grand Theft Auto: Vice City for PS5",
  },
  {
    quantity: 2,
    productId: 2,
    consoleId: 2,
    description: "Grand Theft Auto: Vice City for PS4",
  },
  {
    quantity: 10,
    productId: 2,
    consoleId: 3,
    description: "Grand Theft Auto: Vice City for Xbox Series X|S",
  },
  {
    quantity: 14,
    productId: 2,
    consoleId: 4,
    description: "Grand Theft Auto: Vice City for XBox One",
  },
  {
    quantity: 7,
    productId: 3,
    consoleId: 1,
    description: "LA Noire for PS5",
  },
  {
    quantity: 5,
    productId: 3,
    consoleId: 2,
    description: "LA Noire for PS4",
  },
  {
    quantity: 1,
    productId: 3,
    consoleId: 3,
    description: "LA Noire for Xbox Series X|S",
  },
  {
    quantity: 10,
    productId: 3,
    consoleId: 4,
    description: "LA Noire for Xbox One",
  },
  {
    quantity: 3,
    productId: 3,
    consoleId: 5,
    description: "LA Noire for Switch",
  },
  {
    quantity: 19,
    productId: 4,
    consoleId: 1,
    description: "Fortnite for PS5",
  },
  {
    quantity: 5,
    productId: 4,
    consoleId: 2,
    description: "Fortnite for PS4",
  },
  {
    quantity: 8,
    productId: 4,
    consoleId: 3,
    description: "Fortnite for Xbox Series X|S",
  },
  {
    quantity: 7,
    productId: 4,
    consoleId: 4,
    description: "Fortnite for Xbox One",
  },
  {
    quantity: 2,
    productId: 4,
    consoleId: 5,
    description: "Fortnite for Switch",
  },
  {
    quantity: 5,
    productId: 5,
    consoleId: 1,
    description: "The Legend of Zelda: Ocarina of Time for Switch",
  },
  {
    quantity: 10,
    productId: 6,
    consoleId: 1,
    description: "Tony Hawk's Pro Skater 2 for PS5",
  },
  {
    quantity: 8,
    productId: 6,
    consoleId: 2,
    description: "Tony Hawk's Pro Skater 2 for PS4",
  },
  {
    quantity: 5,
    productId: 6,
    consoleId: 3,
    description: "Tony Hawk's Pro Skater 2 for Xbox Series X|S",
  },
  {
    quantity: 9,
    productId: 6,
    consoleId: 4,
    description: "Tony Hawk's Pro Skater 2 for Xbox One",
  },
  {
    quantity: 13,
    productId: 6,
    consoleId: 5,
    description: "Tony Hawk's Pro Skater 2 for Nintendo Switch",
  },
  {
    quantity: 12,
    productId: 6,
    consoleId: 6,
    description: "Tony Hawk's Pro Skater 2 for PC",
  },
  {
    quantity: 12,
    productId: 7,
    consoleId: 1,
    description: "Grand Theft Auto IV for PS5",
  },
  {
    quantity: 1,
    productId: 7,
    consoleId: 2,
    description: "Grand Theft Auto IV for PS4",
  },
  {
    quantity: 5,
    productId: 7,
    consoleId: 3,
    description: "Grand Theft Auto IV for Xbox Series X|S",
  },
  {
    quantity: 10,
    productId: 7,
    consoleId: 4,
    description: "Grand Theft Auto IV for Xbox One",
  },
];

module.exports = { productsToCreate, consolesToCreate, initialInventory };
