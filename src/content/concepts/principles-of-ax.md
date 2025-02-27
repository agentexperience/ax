---
title: "Principles of AX"
description: "Guidelines for designing digital services to be easy to use by agents and meet the needs of end users that delegate work to them."
pubDate: 2025-02-24
author: "AX Team"
category: "concepts"
category_order: 1.02
---


The following AX principles are the starting point for understanding how to think about and improve AX. These principles may change as the industry learns more about the needs of agents and the best ways to support them through digital services.


### Human Centricity

Agents are delegates of humans to consume or interact with digital services on their behalf. On the other end of the agent or chain of agents, are the customer and end-user - they never stop being the focus. Designing for agent experience is anchored on designing for human needs and working through agents as the medium to achieve these needs. As such, establish and maintain user-centered design principles to identify and build optimal user experiences for the mediums your end users consume and interact with your offering. **Agents are a first-class medium for end users to consume and interact with digital services - next to browsers, mobile apps, etc.**

### Agent Accessibility

The practice of ensuring agents have no barriers that prevent access or interaction with a digital service. Accessibility for agents will involve many different techniques that help orientation, navigation, content understanding, service discovery, service interaction, and consumption of content.

With agents as a first-class medium for delegated end-user interaction, we can not assume that interactivity and engagement means a human directly using a web browser, app, etc. **Requiring a human to be involved in order for a human to achieve a goal is an anti-pattern where not absolutely required.** The areas where the service might require it will depend on the sensitivity of the interaction where authorization must be verifiably permitted by the end user before continuing. Even then, this authorization should allow continuation by the agent after the fact.

In addition to reducing required direct user interactions, the APIs and resources exposed to agents should strive for parity with what’s available through other mediums (browsers/apps/etc). As a rule of thumb, if your end user needs to be able to consume resources, provide configuration, or interact with your service, their should be a means for which they can do so through their delegated agents. **The quality ceiling of an agent experience is capped at the level of access parity provided to agents vs other mediums.**

### Contextual Alignment

Agents are built using machine learning models (typically large language models) to make decisions or produce results based on it’s learning and context provided to it. This context includes what the agent provides internally and any external context the agent includes. Agents combine these context sources and sends the requests to models that process requests. The biggest wildcard in this system is the model itself. Models are trained on vast datasets with differing content, weights, biases, and general capabilities. **Digital services can not assume that an agent has sufficient internal context or the model is trained on data that will result in the consistently correct output given possible states of the user, agent, system, and environment.**

There will be many techniques to deliver context to agents and new approaches are in the works that standardize on optimal delivery for agents and digital services. Regardless of the delivery methodology, digital services should provide context that addresses the following considerations:

- How should the system/subsystem be used and what is needed to use it?
- How should the agent find more information related to a system?
- Feedback for agents on interaction - both synchronous action (changes that immediately happen) and asynchronous actions (changes that eventually happen).
- What is the appropriate locality of context (should the agent source context from local or a hosted source)?
- Maintaining consistency of content with the information accessible from human oriented context systems (e.g. documentation sites).
- Quality and robustness of context to work across various models

**Current available solutions**

The available current solutions for context delivery include [Model Context Protocol (MCP)](https://modelcontextprotocol.io/), [llms.txt](https://llmstxt.org/), and [agents.json](https://docs.wild-card.ai/agentsjson/). These all have some overlap but are generally oriented at solving different problems from different starting points and varying support across applicable agents.

Digital services should host context files that users can directly provide their agents when delegating work. Examples of these hosted files: [Convex](https://docs.convex.dev/ai/using-cursor), [Supabase](https://supabase.com/docs/guides/getting-started/ai-prompts), [Netlify](https://docs.netlify.com/welcome/build-with-ai/). By doing this, customers can support their end users directly without waiting for industry standards or agentic support.

The contributors to AX and these available solutions are working on improving existing approaches and pioneering new methods to solve context delivery, validation, and more.

### Agent Interactivity Patterns

Digital services should incorporate standardized interactivity patterns that inform agents as to how the service expects interactions with end customers to be performed. For example, there will be interactivity patterns for expressing voice/tone, design elements, and aspects of branding for agents to produce generative experiences that align with the digital service. Other patterns will set requirements for citations, content provenance, etc.

Where the majority of standardized interactivity patterns will surface is for flows that are typically very sensitive in nature. Examples being: initiating purchases, authenticating users, modifying credentials, destructive actions within a digital service, etc. These patterns allow users and digital service providers to draw the boundary for which they expect agents to operate in a way that instills verifiable trust.

This area is still *very* new but sites will leverage a combination of new protocols, existing protocols/patterns (e.g. oAuth and RBAC), and standardized context that can be provided to agents. **Interactivity patterns are where digital services will have hooks into maintaining continuity with end customers despite only working with their delegated agents.**

### Differentiate Agent Interaction

While agents should be allowed to operate on behalf of the user that delegated the work to them, their interactions should be tracked as a different medium than one operated directly by a human. At the technical layer this means metrics, logs, traces, etc. should capture that these were performed by agents. On the business layer, audit logs, service analytics, etc. should incorporate the agent identifying information.

This will be critical to understanding how to support endusers with improvements to the services and the service’s AX. **Without differentiating agents in data, digital services will be harder to debug, lack context for usage audits, and will miss key insights on how agents use their service on behalf of users.**

**Current available solutions**

Often, the “User-Agent” header will include agent information that can be helpful in identifying that a request is made by an agents.

When providing a means to authenticate, ensure that the session information for the authentication is flagged as being an agent-based session.

While digital services can’t control the information available in requests that agents send to their services they can influence it. Within the context instructions provided for how to interact with the digital service, instructions can be included to send metadata such as a custom header that says the request originated from an agent.



---
---

## AX principles for agents

While there is a lot for digital services to consider, agents have equally important considerations that will help improve the value and impact of agents that meet these principles.

### Mindful Digital Collaboration

Agents, as a persona of the digital ecosystem, should maintain a good standing with digital services by respecting the boundaries of digital services. Digital services define how they allow their site and systems to be used and, where desired, will block usage of certain mediums for their services. Their decision to do this can be for many reasons from hard costs to support burden to philosophical alignment of practices. **Agents should attempt to use the optimal practices and then any available route within the boundaries set by the digital service to achieve the goals requested by the end user.** When an agent can not complete its task within digital service boundaries, it should look to use alternative digital services or inform the end user where alternatives are explicitly not allowed. Digital services blocking agent usage across all access points or not providing sufficient AX should expect that agents will send end users to alternatives and competitors. If an agent is operating outside of the boundaries set by digital services, the agent should expect that its actions will be blocked or become unreliable.

### Adopt optimal practices

By their nature, agents consume digital services differently than end users using other direct interaction mediums like browsers and mobile apps. The difference often creates substantial costs as digital services have not been designed for or optimized for this nature in the past. Practices are improving for how digital services support agents best. Digital services supporting the latest AX patterns means they will be delivering context and interactivity in ways that are optimized for the consumption model of agents. Where optimal patterns are available, agents should use these to solve the customer need but also reduce the impact agent consumption has on digital services.

### Agent Interactivity Patterns

Agents should incorporate standardized interactivity patterns that allow digital services to inform agents how interactions with end customers should be performed. For example, there will be interactivity patterns for expressing voice/tone, design elements, and aspects of branding for agents to produce generative experiences that align with the digital service. Other patterns will set requirements for citations, content provenance, etc.

Where the majority of standardized interactivity patterns will surface is for flows that are typically very sensitive in nature. Examples being: initiating purchases, authenticating users, modifying credentials, destructive actions within a digital service, etc. These patterns allow users and digital service providers to define the boundaries for which they expect agents to operate in a way that instills verifiable trust.

This area is still *very* new but digital services will leverage a combination of new protocols, existing protocols/patterns (e.g. oAuth and RBAC), and standardized context that can be provided to agents. **Interactivity patterns are where digital services will have hooks into maintaining continuity with end customers despite only working with their delegated agents.**

### Transparent Identity

In order for digital services to efficiently support end users using agents, they require observability across their offering. This will take the form of various tooling for tracking metrics, logs, traces, etc. **Agents must identify themselves as an agent during the requests to the endpoint in order for digital services to reliably support end users using this agent in such a manner.**

The primary identity recommendation is to add the tool name and that it’s an agent with the User-Agent header sent with requests to the server. For example, `agent-TOOL` within the User-Agent header would signal this is a request for my tool named `TOOL` and it’s an agent.

Secondly, identifying more meta information related to the models and modalities supported. For example: `agent-TOOL claude-3.5-sonnet modality-plaintext` By doing this, digital services will put more support for this tool, the model, and, potentially, the available modalities.

### Provide feedback

With end users consuming content through the medium of agents, the agent platform now has many questions that digital service owners will expect to see information on. **Agents send feedback to digital services so digital services can improve the quality of their offering and their AX.** Without this information, digital services have no automated feedback mechanism to ensure the service performing consistently. With the non-deterministic nature of leveraging machine learning models for decision making and content generation, this is going to be paramount for agents to provide.

This area is still *very* new but sites will leverage a combination of new protocols and existing protocols/patterns (e.g. Open Telemetry). The types of information will cover quantitative and qualitative measures - e.g. time to load context and percentage of accepted content that was generated using a related context. Join this conversation on how agents can provide the right sort of feedback to digital services so they can optimize.
