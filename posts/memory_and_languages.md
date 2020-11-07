---
id: 28e9956a-34bf-4ee3-bd3b-5f979e49e526
topic: memory and languages
tags: memory, language design, application design
---

JVM (scala)
- Great developer tooling
- Semantic language
    - Async code easy
- Slow startup
- High memory usage

Can to some degree be fixed by Graal.

Rust
- Great tooling
- Low-level language
    - Async code complex
- Fast startup
- High memory usage
- Great performance


Generally it seems i quite like the Scala language. 
I like the great tooling.
I like the great IDE.
I love the types and the clarity they bring.
I love the fact that almost anything can be expressed quite declaratively with little effort.
I love that the entire JVM ecosystem is working for you and is at your fingertips.
It is still my opinion that if you want to ship production ready features fast then Scala is the best language for you.
After you learn the language it seems it is the language that I can think of where you spend the least time on things that provide no value
- Writing drivers for something
- Writing a library for things where there ougth to exist a library

It just seems there are these two small problems
- Startup time
- Memory usage

It looks like graal can fix most of these for you.
However the tooling around it is a little unexplored and thus under developed.


A couple of questions become interesting

When is memory and startup time important?

- CLI's
- Software runs on client machine
- Cost cutting

Cost cutting is kinda irrelevant.
The cost of extra memory is not that high compared to developer productivity.
For most things properly written Scala is good enough that cost cutting isn't needed.

CLI's go under software that runs on client machine, so this is really the only true problem.

The question the becomes. What software needs to run on client machines?

Most code run on client machines are browser based.
In fact if the code needs to display anything on a screen you would want to write it as browsercode instead of supporting two codebases.

This leaves us with code that does not need to display anything.

This leaves us mostly with CLI's and also a small class of applications like hasura and kubernetes sidecars.

Clearly there is lots of room for other languages, but it seems to me that a great part of Rust's attraction is full control over memory and performance.

If you don't have the usecase you probably don't "need" rust.