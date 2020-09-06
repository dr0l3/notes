---
id: 8e435bd8-aee6-4e0b-9c50-c805b8e819e8
topic: https
tags: compsci, security
---

Https is the secure extension to http.
It makes use of TLS and its deprecated predecessor SSL.
These layers make use of public/private key cryptography to create a secure tunnel of communication where only the intended receiver can read the communication.

# Establishing the connection

## Client Hello

Client sends hello message to server including list of supported cyphers (encryption protocols).

## Server hello

Server replies with a server hello including chosen cypher and certificate (public key).

## Key exchange

Client will check validity of certificate.
Client will encrypt a "pre-master" secret using the servers public key.
Both client and server will then compute the secret from the "pre-master" secret.
This shared secret is then used to encrypt all future communication, thus establishing the secure channel.

# Enabling https on a server

A certificate must be generated.
The client will check the validity of certificate.
This can be done because the certificate is signed by a CA (certificate authority).
You can either self sign the certificate or get a known CA to do it.
Browsers come with a list of known CA's.
Certificates signed by a unknown CA will make the browser prompt the user for whether to trust the CA or not.

Certificates can be generated on the commandline with the openssl command or in a more automated fashion using more moderns tools like kubernetes cert-manager or letsencrypts certbot.

It is the job of the CA to only sign certificates for domains to the owner of the domain.
This is handled by a variety of challenges.
The http challenge has the owner install a webserver with a CA-chosen key.
The dns challenge has the owner install specific CA-chosen dns records.

Certificates are only valid for a limited duration so they must be renewed.

