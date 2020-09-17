---
id: 6fe660ea-d191-41bb-9572-48357b7e2227
topic: actor based concurrency
tags: actor concurrency
---

# The idea

A system is modelled as a swarm of small indepenent units called actors.
Actors an send and receive messages to other actors.

Actors can hold state, but interacting with the state requires sending/receiving messages.

# Relationship to object oriented programming

The idea of actor based concurrency is almost a 1:1 mapping of the ideas behind object oriented programming applies to concurrency.

# When it shines

Actor based conccurency is great when the system involved keeping track of a large amount of long lived processes (longer than 5 seconds).

An example of this is Teslas usecase where a large fleet of IoT bateries needs to cooperate to take part in real-time auctioning of electrical power.

Another example is the original use case of keeping track of telephone calls.

# When does it not apply

While actor based system can certainly perform the role of a simple request/response system it is really trying to shoehorn it into the domain where Functional programming shines.

# What is the actual difference? Isn't it just a matter of perspective?

GUI's used to be thought of as a core use case for object oriented design and by extension Actors.

The rationale was the a GUI was a long lived process with individual components that needed to react to events. Individual components could keep state, but only interact via messages/events. That certianly sounds like actors.

Nowadays that has mostly been turned on its head. Today GUI's are thought of as functional systems taking as input the state of the system and outputting a layout. That certainly sounds functional.

Does a similar perspective shift apply to all "Object oriented use cases"? And if that is the case will all programming eventually converge to functional programming?

The answer is that the two systems are equivalent.

Actors an be viewed as collections of functions and a function can be viewed as an actor.
Actors can receive messages and reply with responses.
So the messages are function parameters and the response is the function return.
So an actor that can only process a single type of message is in fact just a function.

Actors can keep state, but so can functions.
Functions just delegate the actual book-keeping of the state to a database.
That database can be diskbased, but there is nothing stopping it from delegating to an in-memory cache. At that point a function has the same capabilties as an actor.

So whether a system is a collections of functions working together to form a whole or it is a collection of actors is just semantics.

If the functional rules of purity are followed it can be very difficult to see the difference.

When evaluating the two paradigms the distinction shouldn't really be at the ideological level. Usually one has some implementations that is the real system under evaluation and so quality of those implementations is the real difference, not the ideological distinction.
