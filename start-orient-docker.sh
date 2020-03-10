#!/usr/bin/env bash
docker run -d --name orientdb -p 2424:2424 -p 2480:2480 \
    -v $(pwd)/databases:/orientdb/databases \
    -v $(pwd)/etl:/orientdb/etl \
    -v ~/orientdb/backup:/orientdb/backup \
    -e ORIENTDB_ROOT_PASSWORD=rootpwd \
    orientdb