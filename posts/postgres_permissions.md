---
id: 2db40c7f-5245-402d-ae8c-81a3c93ca93c
topic: postgres permissions
tags: admin, postgres, permissions
---

# Basic building blocks

- roles
- grants

Roles are either abstract roles or users. The only difference between the two is that users can log in.

Roles can be granted privileges on objects.

# Changing default permissions

Default permissions only apply for objects owned by the user who executes changes in the default permissions.
This can be counter intuitive, lets take the following example.

1) root creates admin user
2) root creates readonly user
3) root changes default permissions for all tables in public schema
4) admin creates table in public schema

In this case the readonly user does not have read access to the new table.
This is highly confusing but is caused by the owner rule.

To complicate matters further you are only allowed to transfer ownership of tables if you are a member of both the receiving and sending role.

To make it even more annoying the owner of a user can always delete an object.

These three rules combined makes it impossible to create a system where new tables are automatically given the right permissions.

# Implementing a simple read/write/admin structure

So objective is to create a simple structure with three tiers of users
- read only
- read-write
- admin

There are essentially two (simple) ways to achieve this

1) Explicitly by appending the relevant grants after each table definition
2) Implicitly by using default privileges and make sure that whoever creates the tables is also responsible for setting default privileges

As explained above the default privilege scheme can have some fairly counter intuitive workings so the explicit version is probably preferable in most cases.

# Listing permissions in a postgres database

```
SELECT
    r.rolname,
    ARRAY(SELECT b.rolname
          FROM pg_catalog.pg_auth_members m
                   JOIN pg_catalog.pg_roles b ON (m.roleid = b.oid)
          WHERE m.member = r.oid) as memberof
FROM pg_catalog.pg_roles r
WHERE r.rolname NOT IN ('pg_signal_backend','rds_iam',
                        'rds_replication','rds_superuser',
                        'rdsadmin','rdsrepladmin')
ORDER BY 1;
```
