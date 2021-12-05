# Getting Started Scoop's Node.js Server

### Configure environment variables
Add a .env file to the /server directory containing the following:
```
# Server connection
HTTP_PORT = 
HOSTNAME = 

# Database connection

DB_HOST = 
DB_PORT = 
DB_USERNAME = 
DB_PASSWORD = 
DB_NAME = 

# S3
S3_BUCKET_NAME = 
S3_BUCKET_REGION = 
AWS_ACCESS_KEY_ID = 
AWS_SECRET_ACCESS_KEY = 
```

In the /server directory, you can run:
### `npm install`

Install dependencies for the server.

### `nodemon server.js`

Runs the server in the development mode.

The server will reload if you make edits.
