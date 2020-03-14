---
id: 3d2fc3fa-21d6-49aa-a22f-de328963e95f
topic: postgres copy
tags: postgres, database
---

# Copy and \copy

Postgres has two copy functions.
copy is a regular function and requires certain access credentials.
\copy is a psql specific command that does not require the same amount of access right. However i cant be part of transaction.

# Copying large amounts of data into an existing table

1) `CREATE UNLOGGED TABLE temp_table_name (LIKE original_table_name INCLUDING DEFAULTS);`
2) `\copy temp_table_name(col1,col2) from '/tmp/filename' DELIMITER ';' CSV HEADER;`
3) `INSERT INTO original_table_name SELECT * FROM temp_table_name ON CONFLICT DO NOTHING;`
4) `DROP TABLE temp_table_name`


# csv formatting data
- array -> {a,b,c}
- jsonb -> {"""a""":"""b""","""c""":"""d"""}

recommended csv delimeter: ;

recommended quote character: "

Need to escape both of these in the csv file.
