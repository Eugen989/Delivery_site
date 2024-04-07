import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb+srv://russianfox36:ExqfAv0YyFiJ7P4t@cluster0.tcjngn3.mongodb.net/delivery_site?retryWrites=true&w=majority&appName=Cluster0')

const start = async () =>{
    try{
        await client.connect()
        console.log('Соединение установлено')
    } catch(e){
        console.log(e)
    }
}