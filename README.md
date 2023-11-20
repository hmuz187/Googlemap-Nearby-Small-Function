# Installation Guide for Running the Application on Linux/macOS
Prerequisites

Node.js (version 10 or higher), Express

Angular CLI (latest version)

PostgreSQL


## Installing PostgreSQL
1. Install PostgreSQL:

On Ubuntu:
> sudo apt update
> 
> sudo apt install postgresql postgresql-contrib

On macOS, you can use Homebrew:
> brew install postgresql

2. Start the PostgreSQL service:

On Ubuntu:
> sudo service postgresql start

On macOS:
> brew services start postgresql


## Backend Setup (Node.js & Express)

1. Clone the repository from GitHub:
> git clone https://github.com/Googlemap-Nearby-Small-Function.git
>
> cd Googlemap-Nearby-Small-Function/backend

2. Install dependencies:
> npm install

3. Configure PostgreSQL:
> Create a database and configure connection information in the .env file based on the template in .env.example.

4. Run migrations to create the database structure:
> npm run migrate

5. Start the server:
> npm start

## Frontend Setup (Angular)
1. Navigate to the frontend directory:
> cd Googlemap-Nearby-Small-Function/frontend/AngularPlace

2. Install dependencies:
> npm install

3. Configure API Endpoint:
> Open the environment.ts file and set apiUrl to point to the backend API (e.g., http://localhost:6868).

4. Launch the application:
> ng serve --open

5. Access http://localhost:4200 in a browser to view the application.

## Using the Application
### Admin Dashboard
Access http://localhost:4200/admin to enter the admin dashboard.

Log in with admin credentials to approve and manage submitted locations.

### Submitting a New Location
Access http://localhost:4200/map to select a location on the map and submit details to the backend.

### Preview
![](preview.gif)
