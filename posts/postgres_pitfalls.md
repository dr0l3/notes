---
id: aef7eea9-2802-42e6-9618-f93683bcdb61
topic: postgres pitfalls
tags: postgres
---

# Add column with default

When adding a column with a default value Postgres will (up to version 11) require an aggressive lock on the table.
This means that writes are blocked for the duration of writing the default values.
This can be a long time for large tables.
In PG11 this is fixed, see the [patch notes](https://www.postgresql.org/about/news/1855/) (User Experience Enhancements).

The default value can be static or any non-volatile function (e.g. not random()). 
If a non-volatile function is used then it will work exactly like if the value was written to the table.
