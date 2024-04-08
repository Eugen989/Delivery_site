// import { MongoClient } from 'mongodb';

// const client = new MongoClient('mongodb+srv://russianfox36:ExqfAv0YyFiJ7P4t@cluster0.tcjngn3.mongodb.net/delivery_site?retryWrites=true&w=majority&appName=Cluster0');

// const start = async () => {
//   try {
//     await client.connect();
//     console.log('Соединение установлено');
//   } catch (e) {
//     console.log(e);
//   }
// };

// start();
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://russianfox36:ExqfAv0YyFiJ7P4t@cluster0.tcjngn3.mongodb.net/delivery_site?retryWrites=true&w=majority&appName=Cluster0'; // URL-адрес для подключения к MongoDB (по умолчанию localhost:27017)
const client = new MongoClient(uri);

let db;

async function connect() {
  try {
    await client.connect();
    db = client.db('my_database'); // Замените 'my_database' на имя вашей базы данных
    console.log('Connected to MongoDB.');
  } catch (err) {
    console.error('Connection to MongoDB failed:', err);
  }
}

function getDb() {
  if (!db) {
    throw new Error('Database not connected.');
  }
  return db;
}

export { connect, getDb };