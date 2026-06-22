#  Travel Planner

A React app for planning trips: create named routes with travel dates, search for real places via the Mapbox API, drag them into your itinerary, and see the driving route rendered on a static map.

##  Features
- **Google authentication** — sign in with Google via Firebase; unauthenticated users see a landing state.
- **Route dashboard** — create, search, and delete trip routes; each card shows name, dates, and a map preview.
- **Route editor** — set a route name and travel dates, search for places (POIs, restaurants, hotels, etc.) powered by Mapbox Search API.
- **Drag-and-drop itinerary** — drag places from the search panel into the route; reorder stops with drag-and-drop (`dnd-kit`).
- **Live map preview** — once 2+ stops are added, a Mapbox Directions API call builds a driving route and renders a static map with numbered pins and a polyline.

##  Tech Stack
- **Framework:** React 19 (with the React Compiler enabled)
- **Build Tool:** Vite 8 for bundling and dev server
- **Routing:** React Router 7 for client-side routing
- **State Management:** Zustand 5 + Immer for global state management
- **Data Fetching:** TanStack Query 5 for data fetching and caching
- **Authentication:** Firebase (Auth) for Google sign-in
- **Maps & Routing:** Mapbox Search API, Mapbox Directions API, and Mapbox Static Images API
- **Drag-and-Drop:** `dnd-kit` for drag-and-drop interactions
- **Styling:** Tailwind CSS 4
- **Icons:** `react-icons`
