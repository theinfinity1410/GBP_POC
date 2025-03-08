# GBP POC

This project is a proof of concept (POC) for interacting with Google Business Profile (GBP) APIs to fetch and reply to reviews. It uses Node.js with Express.js for the server and Axios for HTTP requests.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Google Business Profile API access

## Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd gbp_poc
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   GOOGLE_CLIENT_ID=<your-google-client-id>
   GOOGLE_CLIENT_SECRET=<your-google-client-secret>
   ACCESS_TOKEN=<your-access-token>
   BUSINESS_ACCOUNT_ID=<your-business-account-id>
   PORT=5000
   ```

   Replace the placeholders with your actual credentials.

## Running the Application

To start the server, run:
`npm start`



The server will start on the port specified in the `.env` file (default is 5000).

## API Endpoints

- **GET /get-review**

  Fetches reviews for the business account.

  **Response:**

  - `200 OK`: Returns the list of reviews.
  - `500 Internal Server Error`: Failed to fetch reviews.

- **POST /reply**

  Posts a reply to a specific review.

  **Request Body:**

  ```json
  {
    "reviewId": "string",
    "replyText": "string"
  }
  ```

  **Response:**

  - `200 OK`: Reply posted successfully.
  - `400 Bad Request`: Review ID and reply text are required.
  - `500 Internal Server Error`: Failed to post reply.

## Development

For development, you can use `nodemon` to automatically restart the server on file changes:
`npm run dev`