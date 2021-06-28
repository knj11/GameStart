// const { client } = require("../client");

// async function createConsoles(description) {
//   try {
//     const {
//       rows: [console],
//     } = await client.query(
//       /*sql*/ `
//         INSERT INTO console( description )
//         VALUES ($1)
//         RETURNING *;
//       `,
//       [description]
//     );

//     return console;
//   } catch (error) {
//     throw error;
//   }
// }

// module.exports = { createConsoles };

const { client } = require("../client");

async function createConsoles({ description }) {
  try {
    const {
      rows: [console],
    } = await client.query(
      `
      INSERT INTO console(description)
      VALUES ($1)
      RETURNING *;
    `,
      [description]
    );
    return console;
  } catch (error) {
    throw error;
  }
}

module.exports = { createConsoles };
