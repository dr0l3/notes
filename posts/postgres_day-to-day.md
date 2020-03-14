---
id: 44cfaa5f-4c60-4581-8e7d-d5a16e84dcbe
topic: postgres day-to-day
tags: database, postgres
---


# start new postgres instance in docker with volume attached


```bash
docker run -d --name postgres \ 
    -p 5432:5432 \
    -v $PWD/postgres.conf:/var/lib/postgresql/data/postgres.conf \
    -v $PWD/some-folder:/var/lib/postgresql/data \
    -e POSTGRES_PASSWORD=postgres \
    postgres
```

Use the postgres.conf in the media folder.


# clone a database inside postgres for testing purposes

```sql
CREATE DATABASE dvdrental_test WITH TEMPLATE dvdrental;
```

# Visual explain

https://dalibo.github.io/pev2/#/

# Debugging config file usage

`SHOW config_file`