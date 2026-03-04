---
title: "Model Context Protocol (MCP)"
description: "An introduction to the Model Context Protocol, what it does, why it matters for AX, and how it fits into the broader agent experience solution space."
pubDate: 2026-03-03
author: "AX Team"
category: "concepts"
category_order: 2.01
sidebar_indent: true
---

The Model Context Protocol (MCP) is one of the most important building blocks in the agent experience landscape. It provides a standardized way for AI agents to discover and use external tools, access data, and interact with digital services. Understanding MCP, what it solves, and where it fits is essential for anyone building or optimizing for agent experiences.

## What is MCP?

MCP is an open protocol, originally introduced by Anthropic in November 2024 and now hosted by The Linux Foundation, that standardizes how AI systems connect to external tools and data sources. It defines a common interface, built on JSON-RPC 2.0, for agents to discover capabilities, invoke functions, retrieve data, and work with templated prompts from external services.

Before MCP, every integration between an AI tool and an external service required custom engineering, unique connectors, and one-off logic. MCP changes this by providing a shared standard. Instead of each tool and service building bespoke integrations, each service builds one MCP server and each tool builds one MCP client. This dramatically reduces the integration effort across the ecosystem.

The protocol has seen rapid adoption. Following its introduction, major AI providers including OpenAI and Google DeepMind adopted MCP. Official SDKs are available for TypeScript, Python, Java, C#, Go, Ruby, and more.

## Why MCP matters for AX

MCP directly addresses several of the [AX principles](/concepts/principles-of-ax/):

**Agent accessibility.** MCP provides a structured, machine-readable interface for agents to discover and use a service's capabilities. Instead of agents needing to parse documentation or guess at API structures, MCP servers explicitly describe what is available and how to use it. This removes barriers to agent interaction with digital services.

**Contextual alignment.** Through resources and prompts, MCP gives digital services a standardized channel to deliver context to agents. Servers can expose reference data, documentation, configuration, and templated instructions that help agents operate correctly within the service. This addresses the principle that digital services should not assume agents have sufficient internal context.

**Agent interactivity patterns.** MCP's authorization layer (built on OAuth 2.1) provides patterns for how agents authenticate and what permissions they hold. The protocol's structured tool descriptions set expectations for how interactions should be performed. These patterns help maintain verifiable trust between users, agents, and services.

**Differentiate agent interaction.** Because MCP traffic flows through a defined protocol layer, services can distinguish agent-originated requests from direct human interaction. This supports the principle of tracking agent interactions separately for debugging, audits, and improving AX.

## Core architecture

The MCP architecture centers on three roles:

- **Host application:** The application the user interacts with, such as a chat interface, code editor, or automation tool. The host contains the MCP client and connects to the language model.
- **MCP client:** Lives inside the host and handles communication with MCP servers. It converts requests into the structured format defined by the protocol and manages the connection lifecycle.
- **MCP server:** Exposes capabilities to clients. A server connects to databases, APIs, local files, or other systems and provides structured access to them. Each external service or data source has its own MCP server.

The flow works like this: a user sends a request to the host, the host sends it to the language model along with a list of available tools from connected MCP servers, the model decides which tools to use, the host calls the appropriate servers, and the results flow back to the model to inform its response.

## The three primitives

MCP defines three core primitives that servers expose to clients. Each has a different control model:

### Tools (model-controlled)

Tools are actions an MCP server makes available for an agent to call. These could be creating an issue in a project tracker, querying a database, sending a message, or running a computation. The language model decides when and how to invoke tools based on the user's request and the tool descriptions provided by the server. The client, with user permission, executes the tool call and returns results to the model.

### Resources (application-controlled)

Resources represent data that an MCP server exposes. They are identified by unique URIs and can contain text or binary content. Unlike tools, resources are controlled by the client application, not the model. The client decides when to fetch resource data and how to include it in the context provided to the model. Resources are well suited for static or semi-static information like configuration files, documentation, or reference data.

### Prompts (user-controlled)

Prompts are predefined instruction templates that a server provides to clients. They standardize how models perform common tasks and save developers from repeatedly crafting the same instructions. Prompts can include variables that get filled in dynamically. They are explicitly invoked by the user or client and do not run automatically. A prompt might be something like "summarize recent issues for project X" with the project name as a variable.

Each primitive type has methods for discovery (`*/list`), retrieval (`*/get`), and in the case of tools, execution (`tools/call`). During an initial handshake, the client asks each connected server what it offers, and the server responds with its available tools, resources, and prompts.

## Additional capabilities

Beyond the three core primitives, MCP includes several other features:

- **Sampling:** Allows servers to request language model completions from the client, useful when server logic needs model intelligence but wants to remain model-agnostic.
- **Roots:** Let the client inform the server about relevant filesystem or URI locations, giving the server context about the working environment.
- **Elicitation:** Enables servers to request additional information from the user during an interaction when needed to complete a task.

The November 2025 specification (the latest version) added significant capabilities including async tasks for long-running operations, enhanced sampling with parallel tool calls, standardized tool naming, and improved OAuth-based authorization.

## MCP is one slice of the AX solution space

MCP is powerful, but it is one piece of a larger puzzle. Agent experience requires a combination of approaches, each solving different problems at different layers of the stack. Understanding where MCP fits, and where it does not, helps teams make informed decisions about their AX strategy.

### How MCP relates to other approaches

**Function calling** is the mechanism by which language models invoke structured actions. It is built into model APIs from providers like OpenAI and Anthropic. Function calling is what makes a model a coordinator rather than just a text generator. MCP builds on top of this: it standardizes how tools are described and discovered so that function calling can work consistently across many services.

**RAG (Retrieval-Augmented Generation)** addresses what a model knows at runtime. RAG systems retrieve relevant documents, code, or data and inject them into the model's context before it generates a response. RAG improves the accuracy of answers but does not take actions. MCP complements RAG by providing structured access to live data through resources while also enabling action through tools.

**OpenAPI / Arazzo** specifications describe REST APIs in a machine-readable format. They document endpoints, parameters, and schemas. Arazzo extends this to describe multi-step API workflows. These specifications help agents understand how to interact with traditional APIs. MCP is complementary, providing a higher-level protocol layer that can sit alongside or on top of existing API infrastructure.

**Agent orchestration frameworks** like LangChain, LlamaIndex, CrewAI, and others manage the decision loop: observing, reasoning, planning, and acting. MCP does not replace these frameworks. It does not decide when a tool should be called or for what purpose. Instead, MCP provides the standardized integration layer that these frameworks use to connect agents to external systems.

### What MCP does not solve

MCP standardizes how agents connect to tools and data, but it does not address every AX challenge:

- **It does not decide what agents should do.** MCP exposes capabilities; the orchestration layer and the model determine when and how to use them.
- **It does not guarantee correct agent behavior.** The quality of agent actions still depends on the model's reasoning, the quality of tool descriptions, and the context provided.
- **It does not cover all context delivery.** Some context is better served through hosted documentation files, in-product guidance, or other channels outside of MCP.
- **It does not replace good API design.** A poorly designed API exposed through MCP is still a poorly designed API. MCP provides the protocol layer, not the service design.

## Getting involved

MCP is an open source project with an active community. Here are the key resources:

- [Official MCP documentation](https://modelcontextprotocol.io/) for guides, tutorials, and the full specification.
- [MCP specification (latest)](https://modelcontextprotocol.io/specification/2025-11-25) for the detailed protocol requirements.
- [MCP GitHub organization](https://github.com/modelcontextprotocol) for source code, SDKs, and contribution opportunities.

To connect MCP to your broader AX strategy, review the [AX principles](/concepts/principles-of-ax/) and explore how your digital service can support agents through MCP alongside other context delivery and interactivity approaches.
