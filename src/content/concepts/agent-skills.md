---
title: "Agent Skills"
description: "An introduction to Agent Skills, what they are, why they matter for AX, and how they fit into the broader agent experience solution space."
pubDate: 2026-03-04
author: "AX Team"
category: "concepts"
category_order: 2.02
sidebar_indent: true
---

Agent Skills are one of the fastest-growing building blocks in the agent experience landscape. They provide a modular, reusable way to teach AI agents specialized workflows, domain knowledge, and procedural expertise. Understanding what skills are, how they work, and where they fit is essential for anyone building or optimizing for agent experiences.

## What are Agent Skills?

Agent Skills are structured instruction packages that extend what AI coding agents can do. Each skill is a directory containing a required `SKILL.md` file with YAML frontmatter and Markdown instructions, along with optional supporting files like scripts, reference documents, and templates. Skills encode the kind of procedural knowledge that would otherwise live in a senior engineer's head or a team wiki, making that knowledge available to every agent session.

The concept was introduced by Anthropic in late 2025 when Claude Code shipped a mechanism for packaging reusable instructions into modular directories. Since then, Agent Skills have been formalized into an [open standard](https://agentskills.io/specification) supported by a wide range of AI tools including Claude Code, OpenAI Codex, GitHub Copilot, Google Antigravity, Cursor, Windsurf, and dozens of other agent platforms.

A typical skill directory looks like this:

```
skill-name/
  SKILL.md           # Required: frontmatter + instructions
  scripts/           # Optional: executable code agents can run
  references/        # Optional: documentation loaded on demand
  assets/            # Optional: templates, schemas, static resources
```

The `SKILL.md` file contains a YAML frontmatter block with required fields like `name` and `description`, followed by Markdown instructions that guide the agent through a specific workflow or task.

## Why Skills matter for AX

Skills directly address several of the [AX principles](/concepts/principles-of-ax/):

**Contextual alignment.** Skills provide a structured channel for delivering procedural context to agents. Without skills, agents rely on their training data, which may be outdated or incomplete. A skill can encode up-to-date workflows, naming conventions, testing requirements, and deployment procedures that override stale training data. This directly supports the principle that digital services should not assume agents have sufficient internal context.

**Agent accessibility.** Skills remove barriers that prevent agents from performing specialized tasks correctly. Instead of requiring a human to intervene when an agent does not know the team's commit message format or deployment pipeline, a skill provides that knowledge directly. This reduces the need for human involvement in routine operations.

**Agent interactivity patterns.** Skills establish consistent patterns for how agents perform specific workflows. A commit skill always follows the team's conventions. A deploy skill always runs tests first. This consistency helps maintain verifiable trust between users and the agents acting on their behalf.

**Adopt optimal practices.** Skills allow digital services to define the optimal way for agents to interact with their systems. Rather than agents guessing at the correct approach, a well-authored skill guides the agent through the intended workflow, reducing wasted effort and unintended side effects.

## How skills work

The core design pattern behind Agent Skills is **progressive disclosure**, a three-level context management system that keeps token consumption efficient while making deep knowledge available when needed.

### Level 1: Metadata

At startup, the agent loads only the `name` and `description` of every installed skill into its system prompt. This costs roughly 100 tokens per skill and lets the agent know what capabilities are available without consuming significant context.

### Level 2: Full instructions

When the agent determines a skill is relevant, either because a user invoked it or because the task matches the skill's description, it reads the complete `SKILL.md` body into context via filesystem access. The specification recommends keeping this under 5,000 tokens.

### Level 3: Supporting resources

If the instructions reference additional files in `scripts/`, `references/`, or `assets/`, the agent loads only the specific files needed for the current task. Scripts are executed and only their output enters context.

This filesystem-based model means the amount of knowledge bundled into a skill is effectively unbounded while keeping actual token consumption minimal. Agents with filesystem and code execution tools do not need to read the entirety of a skill's resources when working on a particular task.

### How skills get activated

Skills can be activated in two ways:

- **Explicit invocation.** The user types a command like `/skill-name` to directly trigger a skill. Arguments can be passed along with the invocation.
- **Implicit invocation.** The agent autonomously matches the user's request against available skill descriptions and loads the relevant skill automatically. The `description` field in the frontmatter is the primary trigger for this matching.

## How users and agents interact with skills

### For users

Users install skills by placing a skill directory in a designated location, typically `.claude/skills/` for project-level skills or `~/.claude/skills/` for personal skills. Skills committed to a project's repository are shared with the entire team. Users can invoke skills explicitly with a slash command or let the agent discover and apply them automatically based on the task at hand.

Skills can also be installed from registries. The ecosystem includes directories like [skills.sh](https://skills.sh/) and curated collections where users can browse and install skills contributed by the community.

### For agents

Agents discover available skills at startup through their metadata. When a user's request aligns with a skill's description, the agent reads the full instructions, follows the steps defined in the skill, loads any supporting resources as needed, and returns results to the conversation. Some skills are configured to run in isolated subagent contexts, keeping the main conversation context clean.

### Access control

Skills support access control through frontmatter fields. Skills can be configured so that only users can invoke them (preventing the agent from auto-triggering sensitive workflows like deployments), or so that only the agent uses them (keeping background knowledge out of the user-facing skill menu). The default is that both users and agents can invoke a skill.

## Skills are one slice of the AX solution space

Skills are a powerful addition to the agent experience toolkit, but they are one piece of a larger puzzle. Agent experience requires a combination of approaches, each solving different problems at different layers of the stack. Understanding where skills fit, and where they do not, helps teams make informed decisions about their AX strategy.

### How Skills relate to other approaches

**Context files** like `AGENTS.md` and `CLAUDE.md` provide always-on project-level guidance. They are loaded into every agent session and contain short, always-true conventions. Skills are complementary: use context files for brief, persistent instructions and skills for specific reusable workflows that are loaded on demand. The [AGENTS.md standard](https://agents.md/), now stewarded by the Linux Foundation, focuses on project-level agent instructions while skills focus on task-level procedural knowledge.

**MCP (Model Context Protocol)** standardizes how agents connect to external tools and data sources. As described in the [MCP concept page](/concepts/model-context-protocol/), MCP provides deterministic actions that agents can execute, such as querying a database or creating an issue in a project tracker. Skills and MCP are complementary, not competing. Skills describe the workflow and reasoning. MCP provides the runtime actions. A skill might instruct an agent on the steps to deploy an application while MCP tools handle the actual API calls to the deployment service.

**Function calling** is the mechanism by which language models invoke structured actions. It is built into model APIs from providers like OpenAI and Anthropic. Function calling gives a model the ability to coordinate rather than just generate text. Skills sit at a higher layer, providing the procedural reasoning about when and how to use available functions.

**Agent orchestration frameworks** like LangChain, LlamaIndex, and CrewAI manage the agent's decision loop: observing, reasoning, planning, and acting. Skills do not replace these frameworks. Instead, skills provide reusable knowledge that these frameworks can draw on when performing specific tasks.

### What Skills do not solve

Skills encode procedural knowledge and workflows, but they do not address every AX challenge:

- **They do not provide runtime capabilities.** Skills teach agents how to reason about tasks. For executing external actions, agents need tools provided through MCP or function calling.
- **They do not guarantee correct behavior.** The quality of agent actions still depends on the model's reasoning ability and the quality of the skill's instructions.
- **They do not replace good API design.** A skill that guides an agent through a poorly designed API does not fix the underlying API. Skills provide the workflow layer, not the service design.
- **They do not cover all context delivery.** Some context is better served through always-on context files, hosted documentation, or structured data delivered via MCP resources.

## Improve your AX with Skills

Agent Skills are one of the most direct ways to improve the agent experience of a codebase or digital service. By creating and sharing skills, you give agents the procedural knowledge they need to work effectively with your project, reducing errors, saving time, and making your codebase more accessible to the growing number of developers who work through AI agents.

### Add skills to your project

Start by identifying the workflows in your project that agents struggle with or that require specific domain knowledge. Common candidates include:

- **Deployment procedures.** If deploying your project involves specific steps, environment checks, or post-deploy verification, encode those steps in a skill.
- **Code generation patterns.** If your project follows specific patterns for creating new components, API endpoints, or database migrations, a skill can guide agents through the correct approach every time.
- **Testing workflows.** If your test suite requires specific setup, fixtures, or sequencing, a skill ensures agents run tests correctly without trial and error.
- **Review and quality checks.** Skills can encode your team's code review standards, accessibility requirements, or performance benchmarks so agents apply them consistently.

Place skill directories in `.claude/skills/` (or the equivalent for your agent platform) and commit them to your repository. Every developer using an AI agent on your project will benefit immediately.

### Share skills with the community

If you have built a skill that solves a common problem, consider sharing it. The skills ecosystem grows when teams contribute their expertise back to the community. Skills for common frameworks, deployment platforms, testing patterns, and development workflows are in high demand.

You can publish skills through registries like [skills.sh](https://skills.sh/) or share them directly through GitHub repositories. Well-documented skills with clear descriptions and practical instructions get adopted quickly.

## Getting involved

Agent Skills are backed by an open specification with an active ecosystem. Here are the key resources:

- [Agent Skills specification](https://agentskills.io/specification) for the formal standard defining the SKILL.md format and progressive disclosure architecture.
- [Anthropic skills repository](https://github.com/anthropics/skills) for official and community-contributed skills.
- [Claude Code skills documentation](https://code.claude.com/docs/en/skills) for guides on creating, installing, and managing skills in Claude Code.
- [skills.sh](https://skills.sh/) for browsing and installing skills from the community ecosystem.

To connect Skills to your broader AX strategy, review the [AX principles](/concepts/principles-of-ax/) and explore how skills can work alongside [MCP](/concepts/model-context-protocol/) and context files to deliver a comprehensive agent experience.
