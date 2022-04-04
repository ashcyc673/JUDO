# JUDO
Take-Home Assignment

1️⃣ run docker command to start data1

    docker run --name data1 -p 27017: 27017 -d mongo


2️⃣ run docker command to start data2

    docker run --name data2 -p 27018: 27017 -d mongo


3️⃣ cd into ingest and yarn start to start the server

    cd ingest
    yarn start

4️⃣ cd into worker and yarn start to start the worker service

    cd worker
    yarn start

5️⃣ open postman and go to post localhost:3001/event

     Select body and add data in Json format

    {
        "experienceID": 200

    }
