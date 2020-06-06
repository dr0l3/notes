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

# An alternative implementation using the compile-to-regex strategy

A rather simple bash script that gets quite far along this way is the following

```bash
find ~/projects/notes/posts -name '*.md' | xargs tre-agrep -2 -sin <query>
```

It becomes a little difficult to progress from here due to the following problems
- tre-agrep does not support the -A and -B flags from grep
- no clear way to filter overlapping hits (grep -A 2 -B 2 postgres can easily print overlapping lines)
- I would quite like a button to either go to the file or toggle between the entire post and the hit highlights
- TUI's are not great with media resources like graphs and images


## Implementation sketch

Use the below script to find files with line numbers and match positions

```bash
find ~/projects/notes/posts -name '*.md' | xargs tre-agrep -2 -sin --show-position <query>
```

This gives a list like the following

```shell
/home/rune/projects/notes/posts/situational_postgres_extensions.md:3:0:19-26:topic: situational postgres extensions
/home/rune/projects/notes/posts/situational_postgres_extensions.md:4:0:6-13:tags: postgres, database
/home/rune/projects/notes/posts/situational_postgres_extensions.md:8:2:2-9:# PostGis
```

The format is `file-name:linenumber:edit-distance:<match-start-position>-<match-end-position>`

Something like the following algorithm would then be nice

1) rank by edit-distance
2) expand the match x lines/characters up and down