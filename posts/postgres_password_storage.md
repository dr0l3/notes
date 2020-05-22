---
id: 8e13b911-0a4c-42f3-930a-f471419ebaba
topic: postgres password storage
tags: postgres password security
---

# Steps

1) Enable pgcrypto if not enabled 

`CREATE EXTENSION pgcrypto;`

2) create user table

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);
```

3) Sign up users like this

```sql
INSERT INTO users (email, password) VALUES (
  'johndoe@mail.com',
  crypt('johnspassword', gen_salt('bf'))
);
```

4) Log in users like this

```sql
SELECT id 
  FROM users
 WHERE email = 'johndoe@mail.com' 
 AND password = crypt('johnspassword', password);
```

# Security concerns

This stores a hashed password in the database.
The hashing function is a one-way function so there is no way to revert the hashing.
The likelyhood of collisions is not worth thinking about.