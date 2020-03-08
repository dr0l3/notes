#!/usr/bin/env bash
docker run -d -v ~/neo4j/data:/data -p 7473:7473 -p 7474:7474 -p 7687:7687 --name neo4j neo4j