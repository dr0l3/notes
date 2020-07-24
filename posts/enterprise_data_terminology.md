---
id: faef4909-3cae-4244-ae34-3f07ec15ab88
topic: enterprise data terminology
tags: datascience, enterprise, terminology, database
---

# A note on history

As with any other part of the "computing"-industry.
The data industry has also changed a lot over the last 10 years.
This is largely a consequence of cloud computing, Moores laws and the reducing price of RAM.

# OLAP vs OLTP

OLTP = Online **Transaction** Processing

OLAP = Online **Analytics** Processing


# Data warehouse

Historically this has been SQL databases.
This means that data warehouses has historically inherited their properties.
Most SQL databases are schema on write, so data warehouses are schema on write.
Most data warehouses are also monolithic and fairly normalized.
They are usually organized in star schemas.

# Data mart

These are subsets of data warehouses, fitted to support a specific business unit.
These have come into existince because data warehouses have become huge, especially for enterprises.
The amount of tables and columns were so big that wrapping your head around it become difficult.

The logical solution to this problem is to filter the data a bit.
Select only the tables finance needs and only the columns finance needs for the finance department. Do the same for other deparments.

# Data lake

The NoSQL variant of data warehouses.
These are usually built on NoSQL databases so inherit the properties of those.
This means schema on read.
This also means that data is usually less organized and not neccesarily normalized.

# Data cubes

Traditional SQL databases store data in "row-format".
This means that all data from the same row is stored together and can be cheaply fetched.
This also means that queries like `select sum(price) from sales` are very expensive.
The data is not colocated.

Normally you want to go a bit further like `select sum(price) from sales group by model`.
In fact its quite common to use multiple dimensions.
Its also quite common to need the aggregations by multiple combinations of dimensions e.g.
- model
- model and color
- model and color and sales person

To do this in SQL you need unions.
Unions are very expensive as they usually require separate scans.
If you are running low on ram this even more of a problem.
If you had infinite RAM you could just run the scans in parallel and the time would still be proportional to a single scan.

The solution cooked up to this problem is to store data in nested lists.
This means that data is now stored in "column-format" so summing is easy because all prices from the sales table are stored together.

Traditionally this has been implemented by a "data cube" and the effort required to maintain such cubes have been enourmous. They were basically deriving "ad hoc" databases.

For some reason it did not occur to anyone that creating a database using the column format would be a good idea. However this a thing now with plenty of examples like
- druid
- bigtable
- cassandra

Additionally we are now in place where RAM is usually not a problem so even if your 64 way union requires 64 scans its less of a problem.

Usually RAM is cheaper than the human resources required to optimize RAM usage. As such data cubes are not a thing anymore.

# ETL

Traditionally OLTP workloads were stored in mainframe systems for optimal performance and minimization of memory footprint (RAM was expensive back in the day).

When you wanted to perform analytics on this data you needed to go through the work of doing the following
- Extract the data from the mainframe
- Transform it into the desired format for the OLAP system of choice
    - enrichment
    - de-duplication
    - e.g.
- Load it into the OLAP system

# ELT

Modern applications dont use main frames, but regular SQL database.
We still have a need to perform analytics and we still dont really want to do that against the OLTP database.
However it is perfectly possible to just copy the data from the OLTP database to the OLAP database one-to-one (they could both be postgres databases). We can then perform whatever transformations are needed in the OLAP database itself.

This changes Extract-Transform-Load into Extract-Load-Transform.

The change isn't so much about the order of things.
Its much rather about that the OLTP and OLAP database are in fact the same product.