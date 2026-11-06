import assetpilotImg from '../assets/assetpilot.webp'
import assetpilotSmall from '../assets/assetpilot-700.webp'
import psxMonitorImg from '../assets/psx-monitor.webp'
import psxMonitorSmall from '../assets/psx-monitor-700.webp'
import pocketPantryImg from '../assets/pocket-pantry.webp'
import sprintTrackerImg from '../assets/sprint-tracker.webp'
import sprintTrackerSmall from '../assets/sprint-tracker-700.webp'

/**
 * AssetPilot's hosted demo. Leave as null until it is deployed; the Live button
 * stays hidden while this is null.
 */
export const DEMO_URL: string | null = null

export type Project = {
  slug: string
  name: string
  pitch: string
  highlights?: string[]
  stack: string[]
  repo: string
  live?: string | null
  image?: { src: string; srcSmall?: string; alt: string; width: number; height: number; position?: string }
  /** Drawn thumbnail for projects without a screenshot. */
  glyph?: 'graph' | 'diff'
}

export const featuredProjects: Project[] = [
  {
    slug: 'assetpilot',
    name: 'AssetPilot',
    pitch:
      'An AI operations agent for IT inventories. Ask which laptops go out of warranty this quarter, check assets in and out, or trace what breaks, and who to call, if a switch dies.',
    highlights: [
      'Tool-using Claude agent that streams each step to the UI over server-sent events',
      'Live dependency graph of every asset and service the agent touches',
      'MCP server exposing the same seven inventory tools to Claude Code and other clients',
      '55-case eval suite with deterministic grading across seven dimensions',
      'Replay mode: recorded runs play through the real pipeline, so no API key is needed to try it',
    ],
    stack: ['Rails 8.1', 'PostgreSQL', 'Anthropic SDK', 'MCP', 'React 19', 'React Flow', 'TypeScript'],
    repo: 'https://github.com/haadfida/assetpilot',
    live: DEMO_URL,
    image: {
      src: assetpilotImg,
      srcSmall: assetpilotSmall,
      alt: 'AssetPilot answering "What breaks if DB-Server goes down?" with a dependency graph of 12 affected services and 52 assets',
      width: 1400,
      height: 875,
    },
  },
  {
    slug: 'psx-monitor',
    name: 'PSX Monitor',
    pitch:
      'A stock intelligence dashboard for the Pakistan Stock Exchange. It scores a watchlist on valuation, analyst consensus and dividends, flags sell signals, and tracks macro risk.',
    highlights: [
      'Works with no keys at all: a demo mode serves a seeded, clearly labelled analysis snapshot',
      'Bring your own Anthropic key for live news analysis; the key is saved only in your browser',
      'Composite 0–100 score, Shariah filter and a thesis-based sell-signal engine',
      'Private portfolio tracking stored locally, with optional Supabase sync',
    ],
    stack: ['React', 'Vite', 'Recharts', 'Claude API', 'Vercel', 'Supabase'],
    repo: 'https://github.com/haadfida/psx-monitor',
    live: 'https://psx-monitor-six.vercel.app',
    image: {
      src: psxMonitorImg,
      srcSmall: psxMonitorSmall,
      alt: 'PSX Monitor dashboard showing the KSE-100 index, sector weights and a PSO stock card scored 90',
      width: 1400,
      height: 875,
    },
  },
]

export const moreProjects: Project[] = [
  {
    slug: 'cmdb-graph-rag-demo',
    name: 'CMDB Graph RAG',
    pitch:
      'Retrieval-augmented generation over a property graph of assets, services and owners, with an interactive graph view of what was retrieved.',
    stack: ['LangGraph', 'Neo4j', 'Gemini', 'FastAPI', 'React'],
    repo: 'https://github.com/haadfida/cmdb-graph-rag-demo',
    glyph: 'graph',
  },
  {
    slug: 'code-companion',
    name: 'code-companion',
    pitch:
      'An AI pair programmer for VS Code: plans multi-step tasks, applies workspace edits behind diff review and safety guardrails, and runs on Ollama or OpenAI.',
    stack: ['TypeScript', 'VS Code API', 'Ollama', 'OpenAI'],
    repo: 'https://github.com/haadfida/code-companion',
    glyph: 'diff',
  },
  {
    slug: 'pocket-pantry',
    name: 'Pocket Pantry',
    pitch:
      'An offline-first recipe, pantry and grocery planner that shows what you can cook right now. Everything lives in a local SQLite database.',
    stack: ['React Native', 'Expo', 'SQLite', 'TypeScript'],
    repo: 'https://github.com/haadfida/pocket-pantry',
    image: {
      src: pocketPantryImg,
      alt: 'Pocket Pantry recipes screen listing Spaghetti Marinara and Grilled Cheese Sandwich',
      width: 708,
      height: 1310,
      position: 'center 12%',
    },
  },
  {
    slug: 'sprint-tracker',
    name: 'Sprint Tracker',
    pitch:
      'A multi-tenant, Jira-style project tracker: companies get their own subdomain to plan sprints, manage issues, log time and review change history.',
    stack: ['Rails', 'React', 'MySQL', 'Devise', 'CanCanCan'],
    repo: 'https://github.com/haadfida/Sprint-Tracker',
    image: {
      src: sprintTrackerImg,
      srcSmall: sprintTrackerSmall,
      alt: 'Sprint Tracker dashboard with project, issue and sprint counts above a burndown chart',
      width: 1400,
      height: 915,
      position: 'center 70%',
    },
  },
]

export const links = {
  github: 'https://github.com/haadfida',
  linkedin: 'https://linkedin.com/in/haadfida',
  email: 'haad99@gmail.com',
}
