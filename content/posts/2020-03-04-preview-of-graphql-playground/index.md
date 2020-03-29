---
title: Preview of GraphQL Playground
author: Nishchit Dhanani
date: '2020-03-07'
hero: ./images/hero.jpg
excerpt: It's been 2 months of Firecamp's GraphQL playground launching, throughout this time I have been discussing with so many folks about their GraphQL usage and experience with Playground. 
---
It's been 2 months of [Firecamp's GraphQL playground launching](https://firecamp.app/graphql), throughout this time I have been discussing with so many folks about their GraphQL usage and experience with Playground. 

I am so privileged to have meaningful insights and have great feedback from the community, and based on that we implemented new features, changed DX and put a focus on accessibility. This week we have launched a new revamped version of GraphQL playground with all these following productive and time-saving features.

So, here is the list of weapons to stay prepared for the GraphQL war.
1. Magical Playground
2. Single/Multiple File upload
3. Query collection (One-click save playground queries)
4. Interactive Query Variables
5. Query Documents
6. Save & Export  GraphQL request


Let me go through with all these goodies one by one.

#### 1. Magical Playground
It's a query-writing area, where we can write any query and hit cmd+enter to execute it. The takeaway is we can write N number of queries.

To execute one query from the playground, just bring the cursor to the query area and hit the play button. That query will become an active query and get executed on the play-button click. means, to set any query as active query, just bring the cursor to its context area in a playground (set cursor in-between start and end line of per query) 

![Magical Playground](https://thepracticaldev.s3.amazonaws.com/i/n7t6nzevxzvftx0klnlb.gif)


#### 2. Single/Multiple File upload
Uploading a file with GraphQL is a bit hurdle at this moment as it's not mature for file handling but the community is seriously trying to fill this gap. 

[Firecamp GraphQL playground](https://firecamp.app/graphql) supports file uploading with this community-driven specifications. To upload a file, just select files from the bottom section of the playground and use the $files variables in a query as variable. see this live-action from the below video.

![File Upload](https://thepracticaldev.s3.amazonaws.com/i/nuyrp6iumc27cj4w0vgi.gif)

#### 3. Query collection (One-click save playground queries)
Query collection is the previously saved query's list, which helps us to avoid the repetition task of writing the query again and again. and also it 's sharable by exporting the GraphQL request configuration. 

If the [playground](https://firecamp.app/graphql) area having 2 queries and 3 mutations then to save them in a collection we just need to click on the `Save to collection` button. All the queries, mutations and subscriptions will get saved with their original name.

![Query collection](https://thepracticaldev.s3.amazonaws.com/i/vlegzcazdt768gygl7l3.gif)

#### 4. Interactive Query Variables
Variables vary with query by query. As shown in the below video, By changing the active query, the variable section will get reflect with new active query's variables.

We can edit those variables like JSON editor, JSON-like-form or Table form. just change the option from caret shown on the right side.

![Variables](https://thepracticaldev.s3.amazonaws.com/i/0qjht5l9q68yodcp4tic.gif)

#### 5. Query Documents
As of now, [Firecamp GraphQL playground](https://firecamp.app/graphql) is using a modified version of GraphiQL's query Document. It's pretty neat and clean. It shows the entire schema documentation of the GraphQL server implementation.

![Query Documents](https://thepracticaldev.s3.amazonaws.com/i/5mvtfmxkxfkv23n8b6dk.gif)

#### 6. Save & Export  GraphQL request
[Firecamp GraphQL playground](https://firecamp.app/graphql) focuses on persistence. It's configurable, sharable, and storable for future usage and collaboration purpose. 

Here we can add queries to the collection, and save the request within the project. Anytime later we can have single-click access to our saved GraphQL queries. and start executing in a matter of seconds. 

![Save & Export](https://thepracticaldev.s3.amazonaws.com/i/e5avvv7up6w7nn3gfjqn.gif)




> Team collaboration feature is in private beta, Apply for [Team Access](https://firecamp.typeform.com/to/y51lzS)


Thank you so much for reading this blog. Feel free to share anything you want that improves developer productivity. 

Follow on Twitter [@FirecampHQ](https://twitter.com/FirecampHQ)
Connect to discuss [@Nishchit14](https://twitter.com/Nishchit14)
