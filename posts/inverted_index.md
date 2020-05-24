---
id: a7953430-a785-43ec-ac83-c93e50c3e80c
topic: inverted index
tags: database index
---

The inverted index is a term originating for text search.
Specifically 


The usual index type in this context is a forward index

| Document                  | Terms
| :-----------------------: |:------------------------------------------------------------------|
| Document 1                | the,cow,says,moo                                                  |
| Document 2                | the,cat,and,the,hat                                               |
| Document 3                | the,dish,ran,away,with,the,spoon                                  |


An inverted index is the ... inverse ... of that.

| Terms                     | Documents
| :-----------------------: |:------------------------------------------------------------------|
| The                       | Document 1, Document 2, Document 3                                |
| cat                       | Document 2                                                        |
| cow                       | Document 1                                                        |

Usually more than just the document is stored.
Position of the term is an obvious extension.

This allows for very fast searching for words across large corpora of text.