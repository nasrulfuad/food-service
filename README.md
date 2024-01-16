### Setting Up Your Project

1. **Install Dependencies:**
   - Open your terminal and navigate to your project directory.
   - Run the following command to install all project dependencies :
   ```bash
   npm install
   # or
   yarn
   ```
2. **Copy Environment Configuration:**
   - Duplicate the example environment configuration file :
   ```bash
   cp .env.example .env
   ```

### Database Setup

1. **Migrate Database Tables:**
   - Execute the migration script to set up the required database tables :
   ```bash
   npm run db:migrate
   ```
2. **Seed Example Data:**
   - Populate your database with example data using the following command :
   ```bash
   npm run db:seed
   ```

### Running the Application

1. **Build and Start the App:**
   - To build and start the application, use the following command :
   ```bash
   npm run build && npm start
   ```
2. **Run in Development Mode:**
   - Alternatively, for a development environment with auto-reload, use :
   ```bash
   npm run start:dev
   ```
3. **Run test**
   - To test the application :
   ```bash
   npm run test
   ```

# Project File Structure

The file structure of a web application is a crucial aspect of organizing and maintaining code. A well-organized structure enhances readability, scalability, and collaboration among developers. Below is a standard file structure for this service application.

## Project Root

- **`.env.example`**: An example environment file.
- **`openapi.yml`**: Api specification and documentation.

## Source Code

- **`src/`**: Main source code directory.
  - **`app/`**: Main directory for application file server to be run.
    - **`router`**: All endpoints in one file.
  - **`controllers/`**: All contracts controller and implementations.
  - **`libs/`**: Application helpers directory.
  - **`services/`**: API calls, external services, and utility functions.
  - **`middlewares/`**: Midlewares directory.
  - **`models/`**: Contract models and implementation to represent all the tables in the datastore.
  - **`repositories/`**: All contracts and implementation to access the datastore.
  - **`web/`**: All data specification and validation to send to the app.
  - **`main.ts`**: Root file or entry point of the application.

## Schema database

- **`prisma/`**: Main directory for database development.
  - **`migrations/`**: Tables migration directory.
  - **`schema.prisma`**: Schema file.
  - **`seed.ts`**: Tool file for seeding dummy data.

## Build and Deployment

- **`dist/`**: Distribution-ready files (generated on build).
- **`node_modules/`**: Node.js modules and dependencies.
- **`.env`**: Environment variables (not committed to version control).

## Version Control

- **`.gitignore`**: Specifies files and directories to be ignored by Git.

## Documentation

- **`openapi.yml`**: Api specification and documentation.
- **`README.md`**: Project overview and documentation.

## Build Scripts

- **`package.json`**: Node.js project configuration and scripts.
- **`tsconfig.json`**: TypeScript configuration.
