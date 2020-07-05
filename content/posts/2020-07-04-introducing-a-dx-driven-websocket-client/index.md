---
title: Introducing a DX driven WebSocket Client
author: Nishchit Dhanani
date: '2020-07-04'
hero: ../default-hero.jpg
excerpt: cooking
secret: true
---

### Introduction
Firecamp is introducing the improved version of WebSocket testing client with more developer freindly features and utilities which make it's a most complete tesing pad for WebSocket events. WebSocket client was introduced last year in Firecamp with basic teasing capabilities like sending message and monitoring the respose events from server. 

Even though it was simple in nature many developers and teams have shown their interest and found it most helpful and productive testing client for their development. altimately it fueled us as motivation to built a super client for WebSocket which could fulfill the every requirenment for realtime testing like just sending a simple TEXT message to sending a complex BINARY payload.

### Problem statement
RealTime features are being more and more practical in today’s software. For any modern product/app, collaboration, messaging, notification, and comments/reactions are being must-have features especially when they’re building it for teams or community. So the WebSocket having more adoption with its native form or hybrid form. Same with this growing popularity of WS, the ecosystem is missing the great tooling around it which makes it less accessible, complex in adoption, and poor discovery/debugging capabilities. Firecamp is filling this gap with it's collaborative WebSocket GUI client.

### Solution
The new version of WS client is introduced to simplify all chaos of realtime testing and debugging. This new improved client is being built based on many feedback and suggestions which we could receive from old version. The two standards we have foucused to fulfill the purpose of tooling in Firecamp's WS client are 

##### 1. Collaboration
WebSocket client is meant to solve the team’s problem at different stages of the development. Thus the collaboration is the primary feature. Collaboration allows all the team members to be on the same state of saved WS requests at any given time. They would get an instant reflection of any changes that happen from other team members in realtime.

Although being a collaboration first client, It is equally powerful and useful for individuals as beneficial as a team.

##### 2. Developer Experience
DX is the most important considerable element for developer tooling. This is what Firecamp's WebSocket client has taken  care for. Here is the couple of strict rules we have followed to achieve great DX, They're not last but we're commeted to improve it as per feedback and suggestions.
- Maximum elements would be viewable all time.
- No scrolling at all (atleast for main request tab)
- Shortcuts to perform certain actions quickly
- Maximum debugging options (Fullscreen response panel, fullscreen individual message, full-width response panel, message-alignment)

#### Cover all features
1. Support all message types
   - Text 
   - JSON
   - File
   - ArrayBuffer
   - ArrayBufferView
2. Message Collection [Folders and Messages]
3. Multiple connection
4. WebSocket Configuration
5. History
6. Code generation

### What's next?
1. Ping/Pong
2. Chrome Like debugging UI (configurable)
3. Avoid repeatative messages by showing a count instead
4. Documentation