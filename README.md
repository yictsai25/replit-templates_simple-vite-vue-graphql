# Replit Template for Vue 3 + TypeScript + Vite + Vue Apollo + json-graphql-server

![](./cover.png "Repo Sample Cover")

- [繁體中文](./README.zh-TW.md)

This template is designed to provide a straightforward way for you to build frontend interfaces using Vue and GraphQL,
with `json-graphql-server` serving as a simple backend API.

## Features

- **Vite**: A fast frontend build tool.
- **TypeScript**: A strongly-typed extension of JavaScript.
- **Vue**: A framework for frontend development.
- **Vue Apollo**: A solution to integrate GraphQL in Vue.
- **json-graphql-server**: A tool for quickly setting up a GraphQL API.

## Quick Start

1. Clone this template or open it on Replit.

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn start
   ```

This will automatically launch the `json-graphql-server`. Once it's up and port 4000 is available, the Vite development
server will initiate.

## Instructions

Upon launching this project, it will run two servers:

1. `json-graphql-server`: The backend server for GraphQL API. It uses `db.js` as its data source.
2. The Vite development server: For frontend development and hot-reloading.

Both servers are initiated using the `concurrently` and `wait-on` tools to ensure that the `json-graphql-server` is
fully operational before the Vite server starts.

You can also launch the frontend and backend servers separately:

* Start the frontend server:
   ```bash
   yarn start:frontend
   ```

* Start the backend server:
   ```bash
   yarn start:backend
   ```
