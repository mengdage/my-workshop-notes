# Network

## Color

#### Queuing

A requesting being queued indicates that:

* The request was postponed by the browser because it's considered lower priority than critical resources (such as scripts/styles). This often happens with images.

* There are already 6 TCP connects open for this origin. Applies to HTTP/1.0 and HTTP/1.1.

* The browser is allocating space in the disk cache.

#### Stalled/Blocking

Time the request spent waiting before it could be sent. It can be waiting for any of the reasons described for Queuing. Additionally, this time is inclusive of any time spent in proxy negotiation.

#### Proxy Negotiation

Time spent negotiation with a proxy server connect. The request is done queuing and is sent out, but it has not reached the server yet.

#### DNS Lookup

Time spent performing the DNS lookup. Every new domain on a page requies a full roundtrip to do the DNS lookup.

#### Initial Connection/Connecting

Time it took to establish a connection, including TCP handshakes/retries and negotiating a SSL.

#### SSL

Time spent completing a SSL handshake.

#### Request Sent

Time spent issuing the network request. Typically a fracton of a millisecond.

#### Waiting (TTFB) (slow application server: DB query)

Have the URL -> do a DNS lookup to get the IP address
-> TCP connection -> SSL connect -> everything is connected -> browser starts the network request
-> waiting ... -> first byte come over the wire

Time spent waiting for the initial response, Time To First Byte. This time captures the latency of a round trip to the server in addition to the time spent waiting for the server to deliver.

#### Content Download

Time spent receiving the reponse data.
