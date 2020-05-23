---
id: f3057dae-0f03-49e4-b022-18aac20e204d
topic: postgres variants
tags: database postgres
---

This is an overview of databases that are drop-in replacements for postgres, but does postgres is not particularly good at.

# Aurora

AWS's advanced postgres offering.


# Materialize.io

Great support for incremental updates of change streams allowing for very quick access to query results that would otherwise be high latency

# Citus

Hyperscale postgres by sharding.

# Timescale DB

Postgres built for timeseries data.
Beware that sql queries over timeseries data is quite elaborate.
There is a reason PromQL exists :)

# Yugabyte DB

Planet scale postgres.

# Cockroach DB

Another distributed SQL database.