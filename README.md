# Financify

Financify is a full-stack financial dashboard application built with the MERN stack (MongoDB, Express, React, Node.js) and TypeScript. It features interactive charts, machine learning predictions for revenue, and transaction management.

## Tech Stack

### Frontend
-   **Framework:** React with TypeScript (Vite)
-   **State Management:** Redux Toolkit (RTK Query)
-   **UI Library:** Material UI (MUI) @mui/material
-   **Charts:** Recharts
-   **Data Grid:** @mui/x-data-grid
-   **ML/Predictions:** Regression.js
-   **Styling:** Emotion/Styled

### Backend
-   **Runtime:** Node.js
-   **Framework:** Express.js
-   **Database:** MongoDB with Mongoose
-   **Body Parser:** body-parser
-   **CORS:** cors
-   **Environment Variables:** dotenv
-   **Security:** Helmet
-   **Logging:** Morgan

## Prerequisites

Before running this project, ensure you have the following installed:
-   [Node.js](https://nodejs.org/) (v18+ recommended)

## Installation & Setup

### 1. Server Setup

Navigate to the server directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Run the server:

```bash
npm run dev
```
The server will start on `http://localhost:9000` (or your defined PORT).

### 2. Client Setup

Open a new terminal and navigate to the client directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the `client` directory and add the following variable:

```env
VITE_BASE_URL=http://localhost:9000
```
*Make sure this URL matches your server's address and port.*

Run the client:

```bash
npm run dev
```

The application should now be running at `http://localhost:5173` (or the port shown in your terminal).

## Key Features

-   **Dashboard:** Visualizes key performance indicators (KPIs), revenue, and expenses.
-   **Products:** Management and display of product metrics.
-   **Transactions:** List of recent transactions.
-   **Predictions:** Uses regression analysis to predict next year's revenue based on historical data.

