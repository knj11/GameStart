// code to build and initialize DB
const {
  client,
  createProduct,
  // other db methods
} = require("./index");

async function dropTables() {
  console.log("Dropping All Tables...");
  try {
    await client.query(/*sql*/ `
        DROP TABLE IF EXISTS inventory CASCADE;
        DROP TABLE IF EXISTS "ordersDetails" CASCADE;
        DROP TABLE IF EXISTS orders CASCADE;
        DROP TABLE IF EXISTS reviews CASCADE;
        DROP TABLE IF EXISTS users CASCADE;
        DROP TABLE IF EXISTS roles CASCADE;
        DROP TABLE IF EXISTS products CASCADE;
        DROP TABLE IF EXISTS category CASCADE;
        DROP TABLE IF EXISTS "productCategory" CASCADE;
        DROP TABLE IF EXISTS "orderStatus" CASCADE;
        DROP TABLE IF EXISTS console CASCADE;
        DROP TABLE IF EXISTS products CASCADE;
        `);
    console.log("Finished dropping tables!");
  } catch (error) {
    console.error("Error while dropping tables!");
    throw error;
  }
}

async function createTables() {
  console.log("Creating Tables...");
  try {
    await client.query(/*sql*/ `
    CREATE TABLE "inventory" (
      "id" SERIAL PRIMARY KEY,
      "quantity" int,
      "productId" int,
      "consoleId" int,
      "description" varchar
    );

    CREATE TABLE "ordersDetails" (
      "id" SERIAL PRIMARY KEY,
      "quantity" int,
      "productId" int,
      "unitPrice" int,
      "orderId" int,
      "userId" int
    );

    CREATE TABLE "orders" (
      "id" SERIAL PRIMARY KEY,
      "totalAmount" decimal,
      "orderDate" timestamp,
      "orderStatusId" int,
      "userId" int
    );
    

    CREATE TABLE "users" (
      "id" SERIAL PRIMARY KEY,
      "firstName" varchar,
      "lastName" varchar,
      "description" varchar,
      "email" varchar,
      "hashedPassword" varchar,
      "roleId" int
    );
    
    CREATE TABLE "roles" (
      "id" SERIAL PRIMARY KEY,
      "name" varchar,
      "description" varchar
    );
    
    CREATE TABLE "products" (
      "id" SERIAL PRIMARY KEY,
      "title" varchar,
      "description" varchar,
      "picture" varchar,
      "unitPrice" decimal
    );
    
    
    CREATE TABLE "category" (
      "id" SERIAL PRIMARY KEY,
      "name" varchar
    );
    
    CREATE TABLE "productCategory" (
      "id" SERIAL PRIMARY KEY,
      "categoryId" int,
      "productId" int
    );
    
    CREATE TABLE "reviews" (
      "id" SERIAL PRIMARY KEY,
      "comment" varchar,
      "productId" int,
      "ratings" int,
      "userId" int
    );
    
    CREATE TABLE "orderStatus" (
      "id" SERIAL PRIMARY KEY,
      "name" varchar(30),
      "description" varchar
    );
    
    
    CREATE TABLE "console" (
      "id" SERIAL PRIMARY KEY,
      "description" varchar
    );
    
    ALTER TABLE "users" ADD FOREIGN KEY ("roleId") REFERENCES "roles" ("id");
    
    
    ALTER TABLE "orders" ADD FOREIGN KEY ("orderStatusId") REFERENCES "orderStatus" ("id");
    ALTER TABLE "orders" ADD FOREIGN KEY ("userId") REFERENCES "users" ("id");
    
    
    ALTER TABLE "reviews" ADD FOREIGN KEY ("productId") REFERENCES "products" ("id");
    ALTER TABLE "reviews" ADD FOREIGN KEY ("userId") REFERENCES "users" ("id");
    
    
    ALTER TABLE "ordersDetails" ADD FOREIGN KEY ("orderId") REFERENCES "orders" ("id");
    ALTER TABLE "ordersDetails" ADD FOREIGN KEY ("productId") REFERENCES "products" ("id");
    ALTER TABLE "ordersDetails" ADD FOREIGN KEY ("userId") REFERENCES "users" ("id");
    
    
    ALTER TABLE "inventory" ADD FOREIGN KEY ("productId") REFERENCES "products" ("id");
    ALTER TABLE "inventory" ADD FOREIGN KEY ("consoleId") REFERENCES "console" ("id");
    
    
    ALTER TABLE "productCategory" ADD FOREIGN KEY ("categoryId") REFERENCES "category" ("id");
    ALTER TABLE "productCategory" ADD FOREIGN KEY ("productId") REFERENCES "products" ("id");
    
    
    
      `);
  } catch (error) {
    console.error("Error while creating tables");
    throw error;
  }
}

async function createInitialProducts() {
  try {
    console.log("Starting to create initial products...");
    const productsToCreate = [
      {
        title: "Super Mario Kart",
        console: "Super Nintendo",
        description:
          "In Super Mario Kart, the player takes control of one of eight Mario series characters, each with differing capabilities. In single player mode players can race against computer-controlled characters in multi-race cups over three difficulty levels. During the races, offensive and speed boosting power-ups can be used to gain an advantage. Alternatively players can race against the clock in a Time Trial mode. In multiplayer mode two players can simultaneously take part in the cups or can race against each other one-on-one in Match Race mode. In a third multiplayer mode – Battle Mode – the aim is to defeat the other players by attacking them with power-ups, destroying balloons which surround each kart.",
        price: "$20.00",
        picture: "this is a placeholder for image",
      },
      {
        title: "Grand Theft Auto: Vice City",
        console: "PlayStation 2",
        description:
          "[Metacritic's 2002 PS2 Game of the Year ] Welcome to Vice City. Welcome to the 1980s. Having just made it back onto the streets of Liberty City after a long stretch in maximum security, Tommy Vercetti is sent to Vice City by his old boss, Sonny Forelli. They were understandably nervous about his re-appearance in Liberty City, so a trip down south seemed like a good idea. But all does not go smoothly upon his arrival in the glamorous, hedonistic metropolis of Vice City. He's set up and is left with no money and no merchandise. Sonny wants his money back, but the biker gangs, Cuban gangsters, and corrupt politicians stand in his way. Most of Vice City seems to want Tommy dead. His only answer is to fight back and take over the city himself. Vice City offers vehicular pleasures to suit every taste. For the speed enthusiast, there's high-performance cars and motorbikes. For the sportsman, a powerboat or a golf buggy lets you enjoy the great outdoors. For those that need that sense of freedom and escape, why not charter a helicopter and see the beauty of Vice City from the air? [Rockstar]",
        price: "$40.00",
        picture: "this is a placeholder for image",
      },
      {
        title: "LA Noire",
        console: "PlayStation 4",
        description:
          "Amid the post-war boom of Hollywood's Golden Age, Cole Phelps, an LAPD detective is thrown headfirst into a city drowning in its own success. Corruption is rampant, the drug trade is exploding, and murder rates are at an all-time high. In his fight to climb the ranks and do what's right, Phelps must unravel the truth behind a string of arson attacks, racketeering conspiracies and brutal murders, battling the L.A. underworld and even members of his own department to uncover a secret that could shake the city to its rotten core. Using groundbreaking new animation technology that captures every nuance of an actor's facial performance in astonishing detail, L.A. Noire is a violent crime thriller that blends breathtaking action with true detective work to deliver an unprecedented interactive experience. Search for clues, chase down suspects and interrogate witnesses as you struggle to find the truth in a city where everyone has something to hide.",
        price: "70.00",
        picture: "this is a placeholder for image",
      },
      {
        title: "Fortnite",
        console: "PC",
        description:
          "Epic Games next project has you building forts and stopping a zombie invasion.",
        price: "70.00",
        picture: "this is a placeholder for image",
      },
    ];
    const products = await Promise.all(productsToCreate.map(createProduct));

    console.log("Products created");
    console.log(products);
  } catch (error) {
    console.error("Error creating initial products");
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialProducts();
  } catch (error) {
    console.error("error during rebuildDB");
    throw error;
  }
}

rebuildDB()
  .catch(console.error)
  .finally(() => client.end());

module.exports = {
  // dropTables,
  // createTables,
  // rebuildDB,
  // createInitialProducts
};
