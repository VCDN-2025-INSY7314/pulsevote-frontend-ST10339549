
# PulseVote Frontend

This is the frontend for the PulseVote project, built with **React (Vite)**.

## Features
- Vite-powered React app
- Displays a welcome message
- Fetches and displays JSON from the backend (`/test` endpoint)

## Setup

1. Install dependencies:
	```bash
	npm install
	```
2. Start the development server:
	```bash
	npm run dev
	```
3. Open the provided local URL (default http://localhost:5173/).

## Notes
- Make sure the backend is running on http://localhost:5000/ for API requests.
- The app currently fetches JSON from http://localhost:5000/test and displays it on the homepage.

## Scripts
- `npm run dev` → run dev server
- `npm run build` → build for production
- `npm run preview` → preview production build
