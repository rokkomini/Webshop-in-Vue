console.log("db script starting");
const db = new Mongo().getDB("webshop");

const products = db.createCollection("products", { capped: false });
console.log("Created products collection.");

db.products.insertMany([

])