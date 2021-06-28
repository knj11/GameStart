// code to build and initialize DB

const {
  createProduct,
  seedUsers,
  seedRoles,
  productsToCreate,
  createRole,
  getAllProducts,
  createUser,
  seedOrderStatus,
  createOrderStatus,
  seedInitalOrders,
  createNewOrder
  // other db methods
} = require("./");

const { client } = require("./client")

async function dropTables() {
  console.log("Dropping All Tables...");
  try {
    await client.query(/*sql*/ `
        DROP TABLE IF EXISTS inventory CASCADE;
        DROP TABLE IF EXISTS "ordersItem" CASCADE;
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

    CREATE TABLE "ordersItem" (
      "id" SERIAL PRIMARY KEY,
      "quantity" int,
      "productId" int,
      "unitPrice" int,
      "orderId" int,
      "userId" int
    );

    CREATE TABLE "orders" (
      "id" SERIAL PRIMARY KEY,
      "totalAmount" decimal DEFAULT 0.00,
      "statusDate" timestamp DEFAULT CURRENT_TIMESTAMP,
      "orderStatusId" int DEFAULT 1,
      "userId" int NOT NULL
    );

    CREATE TABLE "users" (
      "id" SERIAL PRIMARY KEY,
      "firstName" varchar,
      "lastName" varchar,
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
    
    
    ALTER TABLE "ordersItem" ADD FOREIGN KEY ("orderId") REFERENCES "orders" ("id");
    ALTER TABLE "ordersItem" ADD FOREIGN KEY ("productId") REFERENCES "products" ("id");
    ALTER TABLE "ordersItem" ADD FOREIGN KEY ("userId") REFERENCES "users" ("id");
    
    
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
    const products = await Promise.all(productsToCreate.map(createProduct));
    console.log("Products created");
    console.log(products);
  } catch (error) {
    console.error("Error creating initial products");
    throw error;
  }
}

async function createInitialUsers() {
  try {
    //Need to create the roles table 1st before adding Users
    console.log("Starting to create initial Users Roles...");
    const roles = await Promise.all(seedRoles.map(createRole))
    console.log("Finished creating roles")
    console.log(roles)
    console.log("Starting to create initial Users...");
    const users = await Promise.all(seedUsers.map(createUser));
    console.log("Users Created", users);
  } catch (error) {
    console.log("Error creating initial Users")
    console.error(error)
    throw error
  }
}

async function createInitialOrders() {
  try {
    console.log("Starting to create orderStatus")
    const statuses = await Promise.all(seedOrderStatus.map(createOrderStatus))
    console.log("Finished creating orderStatuses")
    console.log(statuses)

    console.log("Starting to create orders")
    const orders = await Promise.all(seedInitalOrders.map(createNewOrder))
    console.log("Finished creating orders")
    console.log(orders)
  } catch (error) {
    console.log("Error creating initial Orders")
    console.error(error)
    throw error
  }
}

async function rebuildDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialProducts();
    await createInitialUsers();
    await createInitialOrders();
  } catch (error) {
    console.error("error during rebuildDB");
    throw error;
  }
}

rebuildDB()
  .catch(console.error)
  .finally(() => client.end());
