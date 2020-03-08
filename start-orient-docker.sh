#!/usr/bin/env bash
docker run -d --name orientdb -p 2424:2424 -p 2480:2480 \
    -v ~/orientdb/database:/orientdb/databases \
    -v ~/orientdb/backup:/orientdb/backup \
    -e ORIENTDB_ROOT_PASSWORD=rootpwd \
    orientdb