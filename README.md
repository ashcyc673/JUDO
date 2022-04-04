# JUDO
Take-Home Assignment

1 => run docker command to start data1
docker run --name data1 -p 27017: 27017 -d mongo

2 => run docker command to start data2
docker run --name data2 -p 27018: 27017 -d mongo

3 => cd into ingest and yarn start to start the server

4 => cd into worker and yarn start to start the worker service

5 => open postman and go to post localhost:3001/event
Select body and add info in Json format
{
    "experienceID": 200

}
