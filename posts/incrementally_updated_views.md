---
id: 4cfb2f8c-17cc-416c-8b7f-0021754197c5
topic: incrementally updated views
tags: computer science, timely dataflow, differential dataflow, stream processing
---

# Contrast to regular databases


| System                | Query evaluation   | Queries defined |
| :---------------------|:------------------ | :-------------- |
| Regular SQL database  | Lazy / pullbased   | Ad-hoc          |
| Differential Dataflow | Strict / pushbased | Up-front        |

Regular databases are loved for their flexibility.
One can insert data and decide how to process it at a later time.

The database will not perform any work other than storage until the work is needed.

This is great when the following conditions are met

- Queries are simple/cheap
- Queries are either return different results to different clients or are not reused
- Writes/reads ratio is high
- Dont care too much about query latency

Conversely this is not se great when the following contions are met

- Queries are complex/expensive to compute
- Queries return the same result to many clients
- Writes/reads ratio is low
- Want low latency queries

# Example use cases

## Top-n dashboard

A game that needs a top-n dashboard.
The game has many players.
Players can be many games.
For each game the player is assigned a score.
The best player is the one with the best score where score is a complicated computation that weighs score/game and number of games.

This is staight forward to implement in SQL.
However to compute the Top-N we need to go through all players and all their games and compute the complete score.
As soon as a new game ends the result of the previous Top-N query is invalid.

What we want here is that just to update the Top-N materialized view anytime a new game is finished.
When someone runs the Top-N query we simply give show them the current state of the materialized view.

Materialized view are good in this instance becase

- Work for computing complex queries can be reused and is not duplicated
- Want low latency queries


## Code editors

Modern code editors need support for a wide variety of complicated queries including usage of definitions

Additionally in an IDE it would be nice if the complete flow of some data could be visualized.

These sorts of use cases are prime candidates for materialized views.

- Complex queries are invalidated constantly
- Want low latency queries

# Requirements

For the materialized views to make sense there must exist a way to make incremental progress.
