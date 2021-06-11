# [How to Build a RESTful API using Node, Express, and Mongo](https://www.youtube.com/watch?v=o3ka5fYysBM&t=55s)

What is http..

- Application Layer Protocol
- Built on top of TCP/IP protocol
- Rules for transferring resources
- every Http Req is executed independently without the knowledge of req that came before it
- HTTP is stateless
- TCP/IP is not stateless
- payload can be anything as long as it is defined in header

What is REST (Representational state Transfer)

- architectural pattern with design guidelines
- http is usually the underlying protocol
- use http methods explicitly
- every restful resource has a unique id
- client state is not persisted between reqs
- caching policy for responses
- seperation of concerns between clients and servers
- layered system

Route

- GET req
- Req parameters
- Query parameters
