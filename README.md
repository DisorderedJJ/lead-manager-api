## Steps to run locally

- First clone the project
- Then run npm install
- After that create .env file and add following environemnt variables
  - PORT - the port which application should listen
  - DATABASE_URL - Your postgress database url connection string
  - CORS_ALLOWED_ORIGIN - add cors allowed origin for local run add "\*"
- Then run npx prisma generate
- after that run npm run dev
