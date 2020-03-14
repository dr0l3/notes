---
id: 2237d825-3479-4113-9967-fba8e608b57a
topic: hyperloglog
tags: compsci
---

# The problem: distinct count

Imagine you have table like the below

```sql
create table events(
    userid uuid,
    ts timestamp,
    eventtype text
)
```

And you would like to know how many users emitted a login-event between 7:00 and 8:00.
This type of problem is called disctinc count.

# The problems with distinct count

In a distributed setting this is tricky.
This is tricky due to the distinct part.
node1 might contain a login event for user1, but so does node2.
This means that we can just sum the counts from node1 and node2.

The second problem with distnict count is that in order to continually keep the count updated we need store each of the distinct ids.

For very large datasets this becomes problematic.

# the hyper log log datastructure and algorithm

To be filled in....