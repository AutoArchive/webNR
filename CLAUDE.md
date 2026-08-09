# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with Next.js rules
- `npm run typecheck` - Run the TypeScript type check
- `npm run generate-icons` - Generate PWA icons using scripts/generate-icons.js

## Project Architecture

### Core Application Structure

WebNR is a client-side web novel reader built with Next.js 16.3, React 19, and TypeScript. The architecture follows a modular component-based design:

**Storage Layer (`app/lib/storage.ts`)**
- Uses IndexedDB for offline-first data persistence
- Three main stores: novels (metadata), content (full text), repositories (source URLs)
- Handles multiple text encodings (UTF-8, GB18030, Big5) with automatic detection
- Provides async APIs for CRUD operations on novels and repositories

**Type System (`app/types.ts`, `app/types/`)**
- Core `Novel` interface with metadata, progress tracking, and bookmarks
- Repository types for external novel sources
- Reading configuration and position tracking interfaces

**Context Architecture (`app/contexts/`)**
- `LanguageContext` - Manages i18n with localStorage persistence and system language detection
- Supports English and Chinese with extensible translation system

**Component Organization**
- `components/discover/` - Import and repository management
- `components/library/` - Novel listing and organization
- `components/reader/` - Reading interface with paged/scroll modes
- `components/search/` - Cross-repository search functionality

**Key Features**
- Local-first book storage: imported book content and reading progress remain in IndexedDB
- Mandatory GA4 site analytics on the reader and documentation site
- Full-URL analytics policy: page views include the complete query string, including `?add=...` imported URLs
- Multi-source support: local files, URLs, and external repositories
- Progressive Web App with offline capabilities
- Text-to-Speech integration with Web Speech API
- Responsive design with dark/light theme support

### Analytics Contract

- Measurement ID: `G-DGH8HNQKE4`
- Application implementation: `app/layout.tsx` and `config/constants.ts`
- Documentation implementation: `mkdocs.yml`
- URL reporting mode: `full-url`
- `page_location` must use `window.location.href`
- `page_path` must include `window.location.pathname + window.location.search`
- Do not remove, gate, redact, or reduce the primary analytics destination without an explicit owner instruction
- Google signals and ad-personalization signals remain disabled unless explicitly changed
- Do not add custom events containing local file contents, reading progress, credentials, cookies, authorization values, or browser storage without explicit authorization

### Data Flow

1. **Import**: Files/URLs → encoding detection → IndexedDB storage
2. **Reading**: Novel metadata → content retrieval → reader component
3. **Progress**: Reading position → automatic persistence → sync across sessions
4. **Search**: Repository data → local filtering → paginated results
5. **Analytics**: Browser page URL, including query parameters → GA4 page-view measurement

### Testing & Quality

- ESLint with Next.js and TypeScript rules
- TypeScript checking through `npm run typecheck`
- Production application build through `npm run build`
- Playwright Chromium user-journey tests under `tests/e2e/`, run in CI on desktop Chromium and Pixel 7 emulation
- Quality CI requires GA4 in generated application and documentation output
- Quality CI validates maintained source output, exact recorded production evidence, and both documentation and application builds
- Deployment workflows verify GA4 on both production domains
- Add or update regression coverage when implementing behavior that changes a tested reader journey
