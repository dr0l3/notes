---
id: 808d6a0b-d13f-4b35-9f04-3ff43d702cdd
topic: note searching implementation
tags: search project
---

As noted in [the full text search post](full_text_search.md) there is basically two approaches to fuzzy searching text.

1) Inverted index
2) compile-to-regex


I have started with an inverted index implementation.

This gives me
- Simple UI due to react integrations with elastic search
- Very quick search even if my notes become enourmous

But comes with the following problems
- ElasticSearch consumes about 500mb of RAM at the time of writing even if the index only takes up double digit kilobytes.
- The hit highlighting is sometimes a bit problematic when interacting with code sections.

An alternative implementation using the compile-to-regex strategy could solve these problems.

A rather simple bash script that gets quite far along this way is the following

```bash
find ~/projects/notes/posts -name '*.md' | xargs tre-agrep -2 -sin <query>
```

It becomes a little difficult to progress from here due to the following problems
- tre-agrep does not support the -A and -B flags from grep
- no clear way to filter overlapping hits (grep -A 2 -B 2 postgres can easily print overlapping lines)
- I would quite like a button to either go to the file or toggle between the entire post and the hit highlights
- TUI's are not great with media resources like graphs and images
