---
id: e3c72706-d40e-45a0-a4eb-aff26e1cf61b
topic: full text search
tags: text search fuzzy
---

Full text search is the practice of searching an entire document (as opposed to just the headings or something similar)

# Implementation approaches

There is essentially two approaches to this problem

1) regex
2) inverted indices

## Regex

The basic idea to compile a regex and apply it to each of the documents.
This will return the matches of the word.

There no pre-processing required for this implementation.
However the regex must scan the entire corpora of text every time a new search is initiated.

For some use cases like searching the internet, this is quite limiting.

## Inverted indices

The basic idea is to create an index that stores all the terms along with where each of the terms are located in the corpora.
This index can then be queried for matches in a straight forward fashion.

This approach does require pre-processing.
This means doing more work up front instead of doing the work at query time.

# Fuzzy searching

Usually "fuzziness settings" are defined loosely in terms of edit distance functions like
- Damerau–Levenshtein distance
- Levenshtein distance

# Adding fuzzy search to the regex implementation

The approach taken by tre-agrep is to simply compile the query into a rather elaborate regex that can perform the computation.

# Adding fuzzy search to the inverted index implementation

Since we have a term matrix its quite easy to rank the terms in the inverted index according to their edit distance.
Then we can use this ranking to fuzzy search the text.