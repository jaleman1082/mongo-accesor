
const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = 
"mongodb+srv://MathLogic:MathLogicAdmin@mathlogiccluster.4nbztgb.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('PruebaDB');
    const movies = database.collection('CollectionNamePrueba');
    // filtro
    const query = { attr1:"Primer Dato"};
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

/*

    require(['mongodb'], function (MongoClient) {

        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(err => {
            const collection = client.db("PruebaDB").collection("CollectionNamePrueba");
            const cursor = collection.find(query);
              // perform actions on the collection object
            cursor.forEach(console.log);
            cursor.forEach(console.dir);
            // perform actions on the collection object
            client.close();
        });

        async function run() {
          try {
            const database = client.db("PruebaDB");
            const collection = database.collection("CollectionNamePrueba");
            // create a document to insert
            const doc = {
              title: "Record of a Shriveled Datum",
              content: "No bytes, no problem. Just insert a document, in MongoDB",
            }
            const result = await haiku.insertOne(doc);
            console.log('A document was inserted with the _id: ${result.insertedId}');
          } finally {
            await client.close();
          }
        }
        run().catch(console.dir);

    });     

*/