# Mud Pit Canada Working Guide

## Purpose
This repository is a programmatic SEO Next.js site for Mud Pit Canada. It generates service hub and city landing pages for mud pit cleaning, sump pit cleaning, hydrovac services, vacuum truck services, catch basin cleaning, sewer cleaning, industrial cleaning, septic tank cleaning, and tank cleaning.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Shared global styling in `app/globals.css`

## Routing Model
- Home page: `app/page.tsx`
- Service index: `app/services/page.tsx`
- Dynamic pSEO pages: `app/[...slug]/page.tsx`

## Source Of Truth
- Spreadsheet-derived page data lives in `lib/watermain-data.ts`.
- Core SEO helpers live in `lib/seo.ts`.

## SEO Content Rules
- Use one primary keyword target per landing page.
- Write to the visitor first: site conditions, access, safety, equipment, disposal, and next steps.
- Do not stuff secondary keywords into repeated lists or paragraphs.
- Keep claims practical and credible.
- Preserve local context from each spreadsheet row.

## UI Rules
- Use the `wmc-*` industrial design language in `app/globals.css`.
- Keep sections clean, direct, operational, and service-oriented.
- Keep new pages on this distinct Mud Pit Canada theme.
