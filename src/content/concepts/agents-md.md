---
title: "AGENTS.md"
description: "An introduction to AGENTS.md, the open format for guiding AI coding agents, and how it fits into the broader agent experience solution space."
pubDate: 2026-03-04
author: "AX Team"
category: "concepts"
category_order: 2.02
sidebar_indent: true
---

AGENTS.md is a simple, open format that gives AI coding agents the project-specific context they need to work effectively in a repository. Think of it as a README written for agents rather than humans. Understanding what AGENTS.md does, how it is used, and where it fits within the broader agent experience landscape is essential for teams building or optimizing for AX.

## What is AGENTS.md?

AGENTS.md is a Markdown file placed at the root of a code repository (and optionally in subdirectories) that provides instructions, conventions, and context for AI coding agents. It was created to solve a practical problem: every AI coding tool needs project-specific knowledge to operate reliably, but that knowledge was scattered across READMEs, wikis, tribal knowledge, and tool-specific configuration files.

The format emerged from collaborative efforts across the AI software development ecosystem, including OpenAI Codex, Amp, Jules from Google, Cursor, and Factory. In December 2025, OpenAI contributed AGENTS.md to the [Agentic AI Foundation (AAIF)](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation) under the Linux Foundation, alongside Anthropic's Model Context Protocol (MCP) and Block's Goose. This move placed AGENTS.md under neutral, long-term stewardship as a shared standard for the industry.

Since its release in August 2025, AGENTS.md has been adopted by more than 60,000 open-source projects and is supported by a growing list of agent frameworks and tools, including GitHub Copilot, Cursor, OpenAI Codex, Google Jules, Gemini CLI, Devin, Factory, and VS Code.

## Why AGENTS.md matters for AX

AGENTS.md directly addresses several of the [AX principles](/concepts/principles-of-ax/), particularly around contextual alignment and agent accessibility.

**Contextual alignment.** The [AX principles](/concepts/principles-of-ax/) state that digital services must not assume an agent has sufficient internal context. AGENTS.md is one mechanism for delivering that context. By placing build commands, testing instructions, architectural guidelines, and code conventions in a structured file, teams ensure that agents receive the project-specific knowledge they need before they start working. This reduces hallucinations, prevents incorrect assumptions about project structure, and leads to more reliable agent output.

**Agent accessibility.** AGENTS.md removes barriers to agent interaction with a codebase. Instead of agents needing to infer project conventions from scattered documentation or code patterns, the file provides a single, predictable location for this information. This is particularly valuable in large or complex repositories where an agent might otherwise struggle to orient itself.

**Adopt optimal practices.** The AX principles encourage agents to use the best available practices for interacting with digital services. AGENTS.md provides a standardized channel for project maintainers to communicate what those optimal practices are for their specific codebase. When an AGENTS.md file says "run tests with npm test before committing" or "never modify files in the vendor directory," agents can follow these instructions instead of guessing.

**Measured impact.** Research across repositories that adopted AGENTS.md has shown a median reduction of roughly 29% in wall-clock runtime and about 17% fewer output tokens consumed by agents. These numbers reflect the value of giving agents the right context up front rather than forcing them to discover it through trial and error.

## How it works

### File placement and discovery

An AGENTS.md file is placed at the root of a repository. When a coding agent starts a task, it loads the nearest AGENTS.md into its context window alongside the system prompt. The file is read once at the start of each session, so every instruction counts toward the agent's available context.

For monorepos or multi-package projects, additional AGENTS.md files can be placed in subdirectories. Agents automatically read the nearest file in the directory tree relative to the files being edited, so the closest one takes precedence. This allows different parts of a project to have tailored instructions while maintaining overall consistency. For example, the main OpenAI repository contains over 80 AGENTS.md files across its various packages.

### What to include

AGENTS.md is plain Markdown with no required schema or structure. However, analysis of thousands of repositories has identified six core areas that the most effective files cover:

- **Build and test commands.** Exact commands for installing dependencies, compiling, running tests, and linting. These should be wrapped in backticks so agents can execute them directly.
- **Project structure.** Key directories, entry points, and where important logic lives. Rather than exhaustively mapping every file, describe capabilities and point to important areas.
- **Code style and conventions.** Formatting rules, naming conventions, design patterns, and language preferences. If TypeScript strict mode is required, say so. If the team follows a particular architecture pattern, describe it.
- **Git workflow.** Branching strategy, commit message conventions, and pull request requirements.
- **Testing expectations.** What constitutes a "ready" change. Whether tests must pass, coverage thresholds, and how to run different test suites.
- **Boundaries.** What the agent should never touch. This includes secrets, vendor directories, production configs, and any other sensitive areas. Setting clear boundaries is one of the most impactful things a file can do.

### Best practices

- **Keep it concise.** Aim for 150 lines or fewer. Every token in the file is loaded on every request, so brevity matters. Long files slow agents and bury the important instructions.
- **Treat it like code.** Update AGENTS.md in the same pull request when build processes, test commands, or conventions change. Stale instructions are worse than no instructions because they actively mislead agents.
- **Link, do not duplicate.** If detailed documentation exists elsewhere (READMEs, wikis, design docs), link to it rather than copying content into AGENTS.md. This prevents inconsistencies and keeps the file focused.
- **Iterate based on results.** Start small with the essentials and add detail when agents make mistakes. The best AGENTS.md files grow through real-world usage, not upfront planning.
- **Describe capabilities, not just structure.** File paths change frequently. Instead of saying "authentication logic lives in src/auth/handlers.ts," describe what the authentication system does and how it is organized. This guidance stays accurate even when files move.

## How AGENTS.md relates to other agent configuration files

AGENTS.md is not the only file format that guides AI coding agents. Several tools have their own native configuration formats:

- **CLAUDE.md** is Claude Code's native configuration file. It supports hierarchical loading (global and project-level), skills integration, and MCP server configuration. Claude Code reads CLAUDE.md, not AGENTS.md, though teams often symlink between them for compatibility.
- **copilot-instructions.md** (placed in `.github/`) is GitHub Copilot's repository-level custom instructions format. Copilot also reads AGENTS.md, so the two can coexist.
- **Other formats** include `.cursorrules` for Cursor and `JULES.md` for Google Jules.

The fragmentation across these formats was one of the motivations for AGENTS.md as a cross-tool standard. The practical recommendation for teams using multiple tools is to place shared instructions in AGENTS.md and keep tool-specific features in the respective native files.

## AGENTS.md is one slice of the AX solution space

AGENTS.md is a valuable tool for improving the agent experience within code repositories, but it is one piece of a larger AX strategy. Agent experience involves many different challenges at different layers of the stack, and AGENTS.md addresses a specific subset of them. Understanding where it fits, and where it does not, helps teams build a complete approach.

### How AGENTS.md relates to other approaches

**[Model Context Protocol (MCP)](/concepts/model-context-protocol/)** standardizes how agents discover and invoke tools, access data, and interact with external services at runtime. MCP operates at the protocol layer, enabling structured communication between agents and services. AGENTS.md operates at the project layer, providing static instructions that guide how an agent should behave within a specific codebase. The two are complementary: MCP tells agents what tools are available and how to call them, while AGENTS.md tells agents how to work within a particular project's conventions and constraints.

**llms.txt** is a convention for providing LLM-readable documentation hosted on a website, similar to how robots.txt guides search engine crawlers. Where AGENTS.md focuses on coding agents within a repository, llms.txt focuses on making hosted documentation accessible to any AI system. A digital service might use both: AGENTS.md for developers contributing to its codebase and llms.txt for agents consuming its documentation externally.

**OpenAPI and Arazzo** specifications describe REST APIs in machine-readable formats. They document endpoints, parameters, schemas, and multi-step workflows. These specifications help agents understand how to interact with APIs. AGENTS.md does not replace API specifications. Instead, it may reference them and provide additional guidance about how and when to use specific APIs within the project context.

**agents.json** is a format for describing agent-accessible service capabilities. Where AGENTS.md focuses on coding agent behavior within a repository, agents.json is oriented toward service discovery and interaction patterns for broader agent use cases.

### What AGENTS.md does not solve

AGENTS.md provides static, project-level context for coding agents, but it does not cover every AX need:

- **It does not provide runtime context.** AGENTS.md is read once at session start. It cannot deliver dynamic information about live system state, current deployments, or real-time data. Protocols like MCP handle runtime context delivery.
- **It does not enable tool discovery.** AGENTS.md can describe what tools exist and how to use them, but it does not provide the structured interface for agents to programmatically discover and invoke tools. That is the role of MCP and similar protocols.
- **It does not address non-coding agent use cases.** AGENTS.md is designed specifically for coding agents working in repositories. Agents interacting with web services, processing documents, or managing infrastructure have different context needs that other AX solutions address.
- **It does not replace good project practices.** A well-written AGENTS.md cannot compensate for a poorly organized codebase, unclear API designs, or missing tests. The file guides agents within a project, but the project itself must be well-structured for agents to succeed.
- **It does not solve multi-tool fragmentation entirely.** While AGENTS.md aims to be a cross-tool standard, some tools still require their own configuration files for tool-specific features. Teams using multiple AI coding tools may still need to maintain parallel configurations.

## Getting started

Creating an AGENTS.md file is straightforward. Place a file named `AGENTS.md` (uppercase) at the root of the repository and add the sections most relevant to the project. Start with build commands, test instructions, and the most important conventions. Many coding agents can generate an initial AGENTS.md when asked.

Here are key resources for learning more:

- [Official AGENTS.md website](https://agents.md/) for the format overview and community resources.
- [AGENTS.md GitHub repository](https://github.com/agentsmd/agents.md) for the specification and examples.
- [How to write a great AGENTS.md](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/) for best practices based on analysis of 2,500+ repositories.
- [OpenAI Codex AGENTS.md guide](https://developers.openai.com/codex/guides/agents-md/) for Codex-specific guidance.
- [Agentic AI Foundation](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation) for governance and the broader ecosystem.

To connect AGENTS.md to a broader AX strategy, review the [AX principles](/concepts/principles-of-ax/) and consider how project-level agent guidance fits alongside runtime protocols like [MCP](/concepts/model-context-protocol/), hosted documentation formats like llms.txt, and API specifications. Each approach solves a different problem, and a complete AX strategy draws on multiple solutions working together.
