---
title: Introducing a DX driven WebSocket Client
author: Nishchit Dhanani
date: '2020-07-04'
hero: ./images/ws-hero.png
excerpt: Introucing the most complete collaborative WebSocket GUI client. The new version of WS client in Firecamp allows developers to test all kind of messages like Text, Binary, File etc.
secret: false
---

import YouTube from "react-youtube";

### Introduction
Firecamp is introducing the improved version of WebSocket testing client with more developer freindly features and utilities which make it's a most complete tesing pad for WebSocket events. WebSocket client was introduced last year in Firecamp with basic teasing capabilities like sending message and monitoring the respose events from server. 

Even though it was simple in nature many developers and teams have shown their interest and found it most helpful and productive testing client for their development. altimately it fueled us as motivation to built a super client for WebSocket which could fulfill the every requirenment for realtime testing like just sending a simple TEXT message to sending a complex BINARY payload.

### Problem statement
RealTime features are being more and more practical in today’s software. For any modern product/app, collaboration, messaging, notification, and comments/reactions are being must-have features especially when they’re building it for teams or community. So the WebSocket having more adoption with its native form or hybrid form. Same with this growing popularity of WS, the ecosystem is missing the great tooling around it which makes it less accessible, complex in adoption, and poor discovery/debugging capabilities. Firecamp is filling this gap with it's collaborative WebSocket GUI client.
##### Dev specific problems
- server-client events debugging
- server-server events debugging
- Headers (authentication)
- HTTP & WS cross connection testing
- Virtulise multiple client connections
- Client configuration (server specific environment or no-browser environment)

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

---
### Cover all value added features
Now it is a time to experience the glimpsy of WebSocket client. Following are the list of each value driven features which we'll go through one by one.
#### 1. Support all message types
It'll let you build and prepare for all available messages type which WebSocket supports natively like text, binary etc. As shown in below gif you just need to select the type from drop down. *Below is the list of supported message types*

>- Text 
- JSON
- File
- ArrayBuffer
- ArrayBufferView

<div className="Image__Small">
  <YouTube videoId="KHXvyEI6jEs"/>
</div>

#### 2. Message Collection [Folders and Messages]
It allows you to create your own message collection, you can arrange or save messages in specific folder with it's configuration. 
It'll be in-sync and accessible through out within your team. It enables the quickest way to send message directly from saved message.

<div className="Image__Small">
  <YouTube videoId="bjLeA99lwxg"/>
</div>

#### 3. Multiple connection
You can create virtual client connections as many as you want. No need to open multiple request tab and connect them invidually but you can just create multiple connection as show in below gif by assigning connection names like `Alice`, `Bob` and send/receive messages from right side response panel's tab.

<div className="Image__Small">
  <YouTube videoId="Oouju8grfio"/>
</div>

#### 4.WebSocket Configuration
This section allows you to set connection specific configuration like `Auto Reconnect`, `Protocols`, `Origin`, `Max Payload` etc. 

<div className="Image__Small">
  <img src="https://raw.githubusercontent.com/firecampapp/firecamp-doc/ws-v2-doc/source/websocket/assets/websocket-configuration.png" alt="WebSocket Configuration" />
</div>

#### 5. History
Every message sent from message-playground in WebSocket client will get added in the History. You can just click on that specific payload in History and WS request-tab will get opened quickly with pre-configuration which that history holds. just click on send button to send the same message.

<div className="Image__Small">
  <YouTube videoId="vRMG8ky56r4"/>
</div>

#### 6. Code generation
This feature auto generates code-snippets for different langauges (javascipt, c++, java, ...) from your message-collection. You or your team members can easily use this auto generated snippets in your codebase.

Todo: GIF

### What's next?
1. Ping/Pong
2. Chrome Like debugging UI (configurable)
3. Avoid repeatative messages by showing a count instead
4. Documentation