---
id: 44cfaa5f-4c60-4581-8e7d-d5a16e84dcbe
topic: postgres day-to-day
tags: database, postgres
---


# start new postgres instance in docker with volume attached


```bash
docker run -d --name postgres \ 
    -p 5432:5432 \
    -v $PWD/postgres.conf:/etc/postgresql/postgresql.conf \
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

# Invesitgating index creation

[HypoPG](https://hypopg.readthedocs.io/en/latest/index.html) allows you to hypethetically create an index and see if the query parser will use it.

Does not work on RDS.

# Debugging config file usage

`SHOW config_file`

# List current activity

`SELECT * FROM pg_stat_activity;`

# Kill client

`select pg_terminate_backend(pid)`

# Approximate count

`SELECT n_live_tup FROM pg_stat_all_tables WHERE relname = 'tablename';`
