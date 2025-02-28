---
title: "Navigating the Future: AX, the Agent Web, and Its Interface"
description: "In order for website and agents to coexist within a mutually beneficial web, we have to provide a different view of the web with optimal AX and UX without the negative impacts on websites today."
pubDate: 2025-02-05
author: "Sean Roberts"
authorTitle: "Head of AX Architecture, Netlify"
category: "research"
category_order: 1
sidebar_label: "Agent Web and Its Interface"
social_card_url: "/articles/ax-standard-social.png"
---

As we look at the opportunities that great [agent experiences (AX)](https://biilmann.blog/articles/introducing-ax/) can offer agents, end users, and services, we need to confront some realities about how the status quo needs to change.

The current form of the web is built to support a user experience with the intent that humans are directly consuming the experiences. Agents working on behalf of humans breaks this expectation and have different needs and requirements for a successful AX. In order for website and agents to coexist within a mutually beneficial web, we have to provide a different view of the web that provides optimal AX and user experiences without the negative impacts on websites today. Without applying these practices, businesses will struggle to retain relevance in this new medium and websites will continue to take the bulk of the burden as agents are built around using a less optimal AX. As the builders of this future, we can identify a better path for the agent web interaction.

## Purposeful views for better experiences

The web as we know it, experienced through web browser systems, was built for direct human consumption. In the future, we will have to have a web that is focused on supporting direct agent consumption. The two will live alongside one another as a purpose-built mirrors of each other. It will not be a bifurcated, separate web but will certainly be a separate “view” of the web with different interfaces for its consumption.

By “agents” I am referring to the systems that are powering the future of accessing and engaging with websites and services in the age of AI, natural language interactions, agentic workflows working on behalf of humans, generative experiences, etc. What we see with Claude.ai, ChatGPT, Bolt.new, Cursor, etc. today, there will be more varied, powerful, diverse, niche, and purpose-built tools for consuming this content. Up until now, the primary systems developers built for on the web were browsers, the few search engines, and email clients. Now there will be countless agents of many types that will benefit from access to the web in a way that is easier to consume and this is a great thing for the open web.

The web for humans is visual, engaging, and focused on cues that are relevant for humans to consume directly. It cares about human accessibility, readability, engagement, etc. Websites attempt to maximize those concerns as doing so maximizes the ability to provide/capture value to/from our audiences in a way that aligns with our goals. This web is the point of contact with humans directly.

The web for agents has no concern around visuals and engaging interaction (unless that is the purpose of the information shared). It uses practical verbosity, agent relevant information structures, and is not concerned with the ability to be consumed by humans directly. This agent web is the point of contact for other agentic systems which will directly or indirectly have other points of contact to service human interactions.

The purpose for this agent web is to allow agent systems to have a purpose-built way to access the latest information (in real time in some cases) and engage with web services in a way that mutually benefits websites and the tools themselves.

An intentional approach to supporting these two different types of personas (humans and agents) will provide a better experience for humans, agents will become more capable, costs for website owners and vendors will go down, and more developers will be able to create agents that work in tandem with the web we know today. This change will also be a catalyst for further advancements that have been traditionally very hard to achieve such as ushering in a better future for accessibility to web content for humans.

The intentional approach of having a great experience for humans on the web is a focus on “user experience (UX).” The parallel to that, is an intentional approach of having a great experience for agents which is known as “agent experience (AX).” While AX practices will have more to them, this view of the web for agents is going to be critical to providing a good AX while removing the outsized burden of agents have had on websites.

## Issues with the status quo

By using the human/browser focused web, agents are causing many challenges for themselves and others.

![Status quo of agent consumption on the web](/articles/agent-web/statusquo.png)

- Websites pay a cost for every resource requested and byte that’s transferred. By using the human web, these agents are driving up costs for resources that it will not benefit from. E.g. if a page has 15 resources that make up the human experience, 1 maybe 2 of those resources are usually useful to the agent doing its job. But the website owner will be paying for all 15 to be delivered. At scale, this adds up to cost site owners a lot of money and wastes resources for all parties involved.
- Websites that have not created experiences, documentation, etc. that are optimal for agent consumption, they will not exist or are doomed to provide a subpar experience through this agent medium. This is where AX comes in and where optimizing for AX is working to deliver an agent web view of the sites and services offered.
- Agents have to identify, filter, ignore, or implement some mechanisms to take the information that’s given via the human view of the web and prepare it to be agent ready. This means tools incur more processing costs, slower performance, higher likelihood of errors/hallucinations, etc. Not processing this data before consuming it into LLMs can cause much higher LLM costs due to token usage taken by unnecessary content.
- Observability and analytics are focused on consumption based metrics that make assumptions about the the effective delivery telling you information related to the throughput, lifespan of users visiting sites, dropoffs, etc. With agents sitting in the middle, the consumption model is entirely different and our metrics need to change. The continued use of the human oriented view of the web by agents skews the metrics and analytics of these systems which impacts businesses in many ways from strategy to costs.
- Services and platforms typically create two sets of APIs - a private one used by clients they control (the website or app) and another for allowed usage by external integrators. Often the externalized API is a subset of what the private API is. This isn’t without reason, often these APIs are meant to manage important “flows” that the provider intentionally does not want to support others doing. Regardless of the validity of that concern, this means that the tasks that agents would most likely need to perform require these APIs that are intentionally undocumented or obscured for external use. In Zdenek “Z” Nemec’s talk [“APIs for AI: Have we Failed?”,](https://nordicapis.com/sessions/apis-for-ai-have-we-failed/) speaks very effectively about these challenges.
- Authentication and authorization remain challenging problems - adding the fact that agents can asynchronously require access on behalf of users introduces interesting new flows. Today, these are solved one of two ways - injecting an oAuth flow or the agent system stores credentials on behalf of the user to use as it needs to authenticate. Both have many trade offs and concerns for the end user experience. If we add the fact that you might have many concurrent agents working on behalf of a user, these authentication flows become more challenging.

## Why is this important to websites?

Continuing to be relevant will require it. In the early web, it became clear that if you weren’t on the web, you were irrelevant. Then a few search engines became the way people found sites and thus if you were not able to show up in search results or even the top results, you do not exist. With the advent of LLMs, agents, etc. we’ve received a new entry point for the web and solutions. The websites and businesses that continue to show up and are relevant and respond to users through this new medium, they will be the ones that are optimizing AX and supporting agent consumption of the web.

Becoming or remaining preferred requires a good AX. We’ve all had the experience where we’ve been able to find a website but it just didn’t work right, there was unexpected friction, or you’ve felt lost. Then we find a tool that “just works.” After that, we never look back to these tools that didn’t show up to meet us where we are. As companies and web creators start to ensure their site delivers exceptional AX, they will start out performing their competitors through this medium, developing a user bias to prefer their tools. If they aren’t you can expect their competitors will.

Delivering purpose built way for agents to consume optimal content through more appropriate delivery mechanisms, websites can reduce the costs it takes to support agents consuming content on their sites.

## Why can’t the “human” view support the “agent” view?

It’s not impossible but it seems, at best, impractical to do this. Websites are already really complex, bloated, and nuanced to ship modern web in a way that’s accessible, useful, and engaging to humans. Trust me, I wish that were not the reality and I am thankful for modern frameworks like Astro that push for a better state.

In an ideal world, websites are simple to parse, semantic, and with clear action intent. The reality is very far from this. Even with content only websites, they are more often than not plagued with massive amounts of ads, imagery, tracking, delayed interactions, etc. that the HTML on the page hides important things from agents or puts unimportant things in the way which make LLMs and agents stumble. Sites that are considered “web apps” are at least an order of magnitude worse on most measures by their nature.

There's also the assumption being made in this that the content and structuring needed by humans is the same as what agents will benefit from. I believe that the status quo of making due with what we have has convinced us that this is sufficient for agents but we have evidence (to be published in future reports) that shows how this is not the case.

Given the reality of what we have today and the needs of agents, forcing different code paths and exceptions into a shared presentation layer for these two personas is asking for significant complexity and fragile systems. Not impossible, but I'm not seeing a graceful path where these two persona target's content should mesh into one layer alone.

That said, the concept of an agent web is not a specific solution, it’s a claim that we will have purpose built views of the web that will encompass many mechanisms and a range of support that will be delivered to solve for this view. The human view of the web will remain vital and will stay as the fallback opportunity for any site that’s not supporting an agent specific view of the web. The need for us to prioritize improved views of the webs for humans will not go away and this will absolutely benefit the agent view of the web.

An important note, some agent systems have built features to embed or use browsers directly to give them access to working with web services of allowing agents to interact with a website through an automated browser. I understand the attempt and it’s an obvious initial step - anyone building integrations over the years knows they wish they could go about it in this way which has been possible for a long time. However, I believe this is the wrong way. These features incur the same issues and costs with added latency and likelihood of failure. Businesses measuring the impact/usability/accessibility of their site with customers will have all new ways for analytics to be skewed, bounce rates will be wilder than ever, and so on. These closed systems will be proxying non-deterministic flows and the website owners will be left to figure out how to help support customers that run into issues within these delegated experiences. Frankly, if this were a good idea, we would have used this mechanism as a solution for building APIs instead of building APIs to work with other sites.

## Aren’t APIs the “agent web“?

Yes and no. APIs represent the mechanisms for systems to talk to one another. So in the sense that agents are systems speaking to other systems (websites), they will be using APIs along with other layers. The agent web is a conceptual view that will emerge as we develop new an creative ways to provide better AX on the web. With that, we’d have to have full expectations that traditional APIs will certainly come up in the methodologies of surfacing an agent view of the web.

However, with natural language processing (NLP) and LLMs, we can now satisfy queries from agents with natural language and unstructured content allowing us to reimagine what we think of as working with APIs and APIs themselves. It’s unlikely that APIs alone will provide sufficient context to agent systems to respond flexibly to the demands of the new wave of agents consuming this content. So while APIs are used to directly interact and query systems, the agent view of the web will likely serve as a superset of APIs a site has today, abstractions to established APIs, and so forth.

## The agent web’s interface

So what might this look like? We don’t know yet but I have some ideas. Ultimately, I believe we must lean on established patterns to offer a web compatible approach.

![A view of an optimal agent interaction and good AX](/articles/agent-web/optimal-ax.png)


### Progressive enhancements via content negotiation

When a agent requests content from a website, it can lay out the various formats it can accept while making those requests. In doing so, it can enumerate the supported optimal versions while still accepting the standard “human” version that would traditionally be sent to a browser. This is in line with an industry standard practice called [content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation).

As a hypothetical example, when requesting [`example.com/latest-info-on-specific-topic`](http://example.com/latest-info-on-specific-topic) the agent can send an `Accept` header that includes `text/html, application/llm.txt`. By doing so, the website can decide to deliver the HTML version of the site (usually sent and rendered by browsers) but it could also send `application/llm.txt` which was a view of the same web page that’s optimized for LLM use. The beauty of this approach is that for sites that don’t know anything about providing this `application/llm.txt` format would simply return the HTML as it always has.

### Optimal content types for agent consumption

In addition to the ability to negotiate on how to deliver the optimal content, the agent web should support many different approaches to reduce the need to add more processing for agents and websites. Sending HTML is step one (what we have today), sending LLM text data is better, sending already chunked LLM text is even better, providing the content as an already vectorized embedding for the language models that a agent uses is even better than that. With this pattern, we can see this trend of being able to support the various capabilities.

### Standards-based caching

Caching is largely a well understood and solved problem within the browser based mode of development (no, it’s not perfect). However, with the new wave of agents consuming this new view of the web, it will do the agent, the website owners, and everyone in between a great service to leverage proper handling and tracking of resources for the purposes of caching. Without doing so, we run into the problem of out of date information or constantly bombarding websites with redundant requests.

Tried and true methodologies such as ETags and Cache-Control headers are the bare minimum that should be supported in these cases to ensure these systems request only the content needed and can validate they still have the latest information without burdening the website.

### Natural language-based APIs

We will start to see the strict structure and rigidity of APIs to become fronted by proxy systems that can take requests in loosely structured, natural language and turn those into the proper API calls that fit into the existing strict API call formats. This will unlikely ever replace the traditional APIs but it will certainly open up new doors for direct Agent usage where the values may or may not match exact schemas defined by the APIs.

For example, you could imagine that an agent helping to book a hotel could ask an API what’s needed to book with them.. it responds with schema information, extra context, and examples. The agent could then gather this information from the user and construct a response. On one hand, this might be sufficient context to generate the original strict schema based request. On the other hand, the agent could create a request with the information needed in natural language. At this point the site’s API will use the request directly or convert the natural language request into the schema and send the request.

### Delegated interactivity models

The web has long been challenged by the on-demand nature of serving content and updates to sites - meaning you have to actually visit the site and continue doing so to get the latest information. Websockets and server-sent events helped with this but the long standing connectivity is a burden on both client and server. One of the more viable approaches to mitigating this challenge on the web came up in the world of progressive web apps (PWA). This architecture pattern leverages a file called a service worker that registers events and can be ran in isolation of the website itself allowing any client to run the JavaScript to perform the actions including prefeching, background syncing data, verifying latest information, etc. Taking a page from this architecture pattern, we can imagine how we can solve the problems of offline syncing of context, event driven actions that allow the web app to provide additional context, tool definitions, etc., and a more direct hook into dynamic user flows that they can ensure are compatible with their APIs.

---

# New problems to solve

By having a separate view of the web, we introduce a few new challenges.

An initial key challenge is agent content consistency trust. That is, how can the agent trust that they are being given the content that matches the content of the human consumed site (minus the parts that aren’t needed). To many agents, they might not care but most will. To solve this, we can establish a means to cheaply verify this with the authority in ways that do not incur negative impacts on the site or provider.

Authentication and authorization techniques will require more improvements with the now more common pattern of allowing agents to act on behalf of users but only within the constraints allowed. These problems aren’t particularly new but the options to solve them are non-trivial for most websites. We will have to simplify the ability to adopt better auth practices and avoid the dreadfully easy but dangerous practice of collecting end user passwords. If we’re enabling a world where countless of providers will build agents to take these actions on behalf of users, not solving this problem is asking for the collapse of trust in the agent ecosystem.

Observability will be harder than ever. Understanding traffic, usage, ways to optimize, and so on. We will have to rethink how agents work with the web, not just as consumers of the content but as feedback loops as well.

Delegation of brand expression and voice. If there’s a medium that sits between the end customer and the brand, that medium needs to have a means for sites, services, and creators to have a voice and expression through delegation. This will likely mean solving generative UI properly - not just what some are touting with tool calls to predefined visual components.

And so on… the list of improvements to make sites and agents work well together is not a short one.

## What if this doesn’t happen?

The web and agents will continue to be at odds with one another. Websites will lump agents into the same category like they are pesky bots not allowing the website to serve their target audience. Other ways of solving AX will likely emerge but will be to the benefit of the agent providers and less for the website builders and owners. Fragmentation of support will continue the detriment of the ecosystem of agents and access to sites.

At some point there will be a few companies that invest enough into solving the agent consumption problems (not the problems that impact websites website ones - that’s the website’s problem) that they become the defacto, centralized tool because they can do these things and no one else can (that’s not a good thing).

## Where do we take this from here?

I have strong conviction that this agent view of the web will surface to allow a new medium to expand where agents and the web can work together to feel like magic to customers and all parties can benefit. With the rise and proliferation of agents across every business category, tools, etc. we have to work to make sure both work well together. This an ambitious vision that we as an industry can go after.

There’s already amazing work happening in this space, for example [Model Context Protocol](https://modelcontextprotocol.io/), [Open Context](https://openctx.org/), LLM.txt, and others. These are pushing the boundaries of what we could be possible. With AX being a new but well established focus, like that of UX and DX, we will continue to see industry experts come together to solve AX in web architecture that resets the expectations for agents and how the web can meet end customers where they are.

Let’s get to work.

---

Sean Roberts - Head of AX Architecture, Distinguished Engineer at Netlify. Follow him directly on [LinkedIn](https://www.linkedin.com/in/developsean/), [Bluesky](https://bsky.app/profile/javasquip.bsky.social), [X](https://x.com/JavaSquip)

