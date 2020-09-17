---
id: 2cea2ecf-999c-4da6-9bbf-f36af2f87be6
topic: csv formatting text
tags: escaping, compsci
---

# The general plan

Csv format expects a certain format.
The standard is using `,` as the delimeter and `"` as the quote value with `\` as the escape character.

This allows for data in either one of two formats

`a,b,c,d`

`"a","b","c","d"`

Or any combination of the two

`a, "b", c, "d"`

The purpose of the quote value is to allow uses of the delimeter in strings.
This means that `"a,b,c"` is a sing valid value, but `a,b,c` is three values.

When implementing escaping three things can ruin the day

- Unescaped line breaks (`\r` or `\r\n`)
- Unescaped quote values (`"`)
- Values ending in an uneven amount of occurences of the escape value (`\`)

Escaping line breaks and quote values will fix the first two issues.
The last issue can be fixed by appending a single occurence of the escape character to the value.

`Regards \r Rune` -> `Regards \n Rune`

`That sounds "good"` -> `That sounds \"good\"`

`okay \` -> `okay \\`

These three rules will allow for converting any string value to csv.
