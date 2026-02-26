# Organizing Project Structure

## Drivers

Large angular applications are often worked on by teams of developers, who may be working, concurrently, on different aspects of the application. So (assuming a CI workflow), during the day each developer is working on a local "fork" of the origin repository, in essence, a parallel universe. At a minimum once a day they will push their changes to the repository to integrate with the changes from the other other developers.

To minimize merge conflicts and other annoyances, much of the project structure is designed to:

- Keep "overlap" of work to a minimum
- Give developers flexibility in iterating on the feature they are currently creating.



```ts
import { sameTag, SheriffConfig } from '@softarc/sheriff-core';

export const config: SheriffConfig = {
  autoTagging: true,
  entryFile: 'src/main.ts',
  enableBarrelLess: true,
  modules: {
    'src/app/areas/<domain>/feature-<name>': ['area:<domain>', 'type:feature'],
    'src/app/areas/<domain>/ui-<name>': ['area:<domain>', 'type:ui'],
    'src/app/areas/<domain>/data': ['area:<domain>', 'type:data'],
    'src/app/areas/<domain>/util-<name>': ['area:<domain>', 'type:util'],
  },
  depRules: {
    root: '*',
    'area:*': [sameTag, 'area:shared'],
    'type:feature': ['type:ui', 'type:data', 'type:util'],
    'type:ui': ['type:data', 'type:util'],
    'type:data': ['type:util'],
    'type:util': [],
  },
};
```

## Current Thinking

### Hot Spots

The `/src/app*.*` files are "hot spots" - they do most of the "aggregation" of the application, and will require a new "chunk" bundle to be delivered to the users with each change. We want to keep this "lean".

### Areas (e.g. "Domains")

Most developers will spend their time in one or more "areas" of the application. Despite some push back from coworkers and students in the past, these areas should be considered "domains" in both the DDD sense of the word, and the more general usage, like "King or Queen of my *Domain*". 

A domain is often defined as a world with a common language and understanding of terms. And that is also what is meant here. For example the concept of a "list" might mean one thing in the "orders" domain, and another in the "products" domain. Most importantly we want a developer working in a domain to 

a) Not care what the meaning or name of something is in another part of the applications (e.g. "Do we already have a Product service? Or a List component? Can I use those names?")

b) Use language and naming that makes sense to them, in their domain (i.e. "context")

c) Not worry about creating "things" that are generally reusable across the application (unless, of course, they are working in the area of "common stuff to use across the application").

So, areas or domains are kind of "language games", as in "I have to get in the 'User Management' head space today", or "I need to get in the 'Inventory Control' Mindset".

#### Areas Are Boundaries

Areas act as a sort of container. No other part of the application (aside from the "root", `app` stuff) can "reach in" and use your stuff in your domain. Likewise, when working in an area, you cannot use any other areas "stuff", unless it has been explicitly shared with you.

This might seem like a big restriction, and in a way it is, but it's one of those restrictions that actually gives you quite a bit of liberty (weird, huh)?  
