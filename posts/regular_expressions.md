---
id: d62cbe51-ae8a-4ce9-8587-fb98b3105658
topic: regular expressions
tags: compsci, linux, fundamentals, parsing
---

# Regular expressions

## Basic matchers

`/symbols/`

This is usually case sensitive.

## Meta characters

| Meta character            | Description
| :-----------------------: |:------------------------------------------------------------------|
| .                         | Matches any single character except a linebreak                   |
| []                        | Character class. Matches any character contained in the brackets  |
| [^]                       | Negateed character class. Matches anything not in the brackets.   |
| *                         | Matches 0 or more repetitions of the preceding symbol             |
| +                         | Matches 1 or more repetations of the preceding symbol             |
| ?                         | Matches the preceding symbol optionally                           |
| {n,m}                     | Matches between n and m repetitions of the preceding symbol       |
| (yxz)                     | Character group. Matches xyz in that order                        |
| \|                        | Matches either the symbol before or after the pipe                |
| \                         | Escape character                                                  |
| ^                         | Matches beginning of input                                        |
| $                         | Matches the end of input                                          |

## Shorthand character sets

| Shorthand                 | Description                                                       |
| :-----------------------: | :-----------------------------------------------------------------|
| .                         | Any character except newline                                      |
| \w                        | Any alphanumeric char. [a-zA-Z0-9_]                               |
| \W                        | Any non alphanumeric char. [^\w]                                  |
| \d                        | Any digit. [0-9]                                                  |
| \D                        | Any non digit. [^0-9]                                             |
| \s                        | Any whitespace character. [\t\n\f\r\p{Z}]                         |
| \S                        | Any non-whitespace character. [^\s]                               |


## Lookaround

Look are non-capturing groups. That is, they are used to identify matches, but not included in the output.
Lets say you want to look for all occurences of numbers preceded or followed by $.

This can be done with: `(?<!$)[0-9\.]*|(?=$)[0-9\.]*`

| Symbol                    | Description                                                       |
| :-----------------------: | :-----------------------------------------------------------------|
| ?=                        | Positive lookahead                                                |
| ?!                        | Negative lookahead                                                |
| ?<=                       | Positive lookbehind                                               |
| ?<!                       | Negative lookbehind                                               |


## Flags

| Flag                      | Description                                                       |
| :-----------------------: | :---------------------------------------------------------------- |
| i                         | Case insensitive match                                            |
| g                         | Global search, not just first occurence                           |
| m                         | Multiline. ^ and $ works on each line                             |



## Greedy vs lazy

Normally regex will match as much as possible.

/(.*at)/ => <b>The fat cat sat on the mat</b>.

Here the regex matches at the at in mat and all preceding characters. 
That is the maximal matching the regex can get with this input.

This can be inverted with the ? operator like this

/(.*?at)/ => <b>The fat</b> cat sat on the mat.

Here the regex the at in fat and all preceding characters. It need to match `The f` to get to the `at`.
