# react-interview-task

This repository is a collection of small React interview tasks packaged in one app. Each task is a focused exercise accessible from the Home page.

**Overview**
- Each task lives in `src/routes` as its own page.
- Tasks aim to assess core React skills: state, rendering, performance, and UX.
- Data and utilities are colocated for simplicity.

**Run**
- Install: npm install
- Dev: npm run dev
- Build: npm run build
- Preview: npm run preview
- Lint: npm run lint

**Tasks Catalog**
- Mini Search Filter — Filter a movie list by title and genre and render result cards. Open from Home or directly at [mini-search-filter.tsx](file:///e:/react-projects/react-interview-task/src/routes/mini-search-filter.tsx). Data source: [Film.ts](file:///e:/react-projects/react-interview-task/src/data/Film.ts).

**Start Here**
- Use the Home page to navigate tasks: [index.tsx](file:///e:/react-projects/react-interview-task/src/routes/index.tsx).
- Shared layout and navigation are defined in [__root.tsx](file:///e:/react-projects/react-interview-task/src/routes/__root.tsx).

**Suggested Extensions**
- Mini Search Filter
  - Case-insensitive search and input debounce
  - Empty state and loading skeletons
  - Pagination or list virtualization
  - Extract Card and Filters components

**Add A New Task**
- Create a new file in `src/routes`, e.g. `my-task.tsx`.
- Link it from the Home page to expose the task.
- Keep tasks self-contained with clear UI and requirements.
