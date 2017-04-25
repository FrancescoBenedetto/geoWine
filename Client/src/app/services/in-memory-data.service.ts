import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let wineries = [
{
"id":1,
"name":"Conterno Giacomo",
"nation":"Italy",
"region":"Rome",
"latitude":41.727715,
"longitude":12.359806,
"address":"via Aldeno 19",
"wines":[
  {"id":1,"name":"Barolo","type":"red","description":"descr","winery_to_wine":{"winerys_wine_description":"stagionato in botti bla bla bla descr descr ...","wineId":1,"wineryId":1}},
  {"id":2,"name":"Amarone","type":"red","description":"desc2","winery_to_wine":{"winerys_wine_description":"detail desc 2 ","wineId":2,"wineryId":1}}
  ]
},
{
"id":2,
"name":"Produttori del Barbaresco",
"nation":"Italy",
"region":"Rome",
"latitude":41.884979,
"longitude":12.501945,
"address":"via dell'Ambaradam",
"wines":[
  {"id":1,"name":"Barolo","type":"red","description":"descr","winery_to_wine":{"winerys_wine_description":"detailed description","wineId":1,"wineryId":2}},
  {"id":3,"name":"Valpolicella","type":"red","description":"desc2","winery_to_wine":{"winerys_wine_description":"detail desc 2 ","wineId":3,"wineryId":2}}

]
},
{
"id":3,
"name":"Maccario Dringenberg",
"nation":"Italy",
"region":"Rome",
"latitude":41.604979,
"longitude":12.501949,
"address":"via dell'Ambaradam",
"wines":[
  {"id":1,"name":"Caccia al piano","type":"red","description":"desc2","winery_to_wine":{"winerys_wine_description":"detail desc 2 ","wineId":3,"wineryId":2}}

]
}
];

    return {wineries};
  }
}
