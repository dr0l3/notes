---
id: d6fa5125-41e8-4d4d-b8ce-930e1b9a7b4e
topic: postgres indexing
tags: postgres, optimization
---

# B-tree, the standard index

Should be the default for single-value columns (single number or string as opposed to array or jsonb)

# Gin vs Gist the very short version

Gin is 3 times faster than gist, but also 3 times slower to build and takes up 3 times more space.

# Hash indexes

Not crash-proof in version 9 or earlier. Dont use.

Faster than b-trees, but only supports equality.

# Further reading

https://www.citusdata.com/blog/2017/10/17/tour-of-postgres-index-types/
