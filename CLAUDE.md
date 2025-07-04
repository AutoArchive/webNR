# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with Next.js rules
- `npm run generate-icons` - Generate PWA icons using scripts/generate-icons.js

## Project Architecture

### Core Application Structure

WebNR is a client-side web novel reader built with Next.js 15, React 19, and TypeScript. The architecture follows a modular component-based design:

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
- Privacy-first: All processing happens client-side
- Multi-source support: Local files, URLs, and external repositories
- Progressive Web App with offline capabilities
- Text-to-Speech integration with Web Speech API
- Responsive design with dark/light theme support

### Data Flow

1. **Import**: Files/URLs → encoding detection → IndexedDB storage
2. **Reading**: Novel metadata → content retrieval → reader component
3. **Progress**: Reading position → automatic persistence → sync across sessions
4. **Search**: Repository data → local filtering → paginated results

### Testing & Quality

- Jest configured with TypeScript support
- ESLint with Next.js and TypeScript rules
- No automated tests currently implemented - add tests when implementing new features