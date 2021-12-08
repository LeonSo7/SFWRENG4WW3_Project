# COMPSCI 4WW3 Project: Scoops

Scoops is a website that allows users to browse for ice cream shops, and contribute through writing reviews.

Course Name: Web Computing and Web Systems

Group Name: Scoops

Member 1: Leon So, 400127468, sol4

Member 2: Joy Xiao, 400125285, xiaoz18

Demo: https://insidescoops.live/

Github repo: https://github.com/LeonSo7/Scoops

## Notes to marker:
- Approval was obtained from Professor Do to use Node.js in place of PHP for the server-side implementation, and React for dynamic rendering.
- To reach the search results page, please click the search bar button from the home page (or 'Search Nearby' button to search with geolocation).
- To reach the business object page, please click on a search result from the search results page. The reviews for each business (if any) are also listed on this page.
- You must login to see the pages to write a review and submit a business.
- To sign up, please visit the 'Sign up' page.
- To login, please visit the 'Log In' page, and use the email and password used to sign up. Optionally, you may use the following existing account (u: leon@email.com / p: TestPass1!).
- Redux.js is used to manage the global application state. (Only logged in users can submit a review or business).
- Currently, the coordinates (latitude and longitude) of the sample businesses provided are located near McMaster university. To search nearby, results will only show near if you are close to this location.

### Search:
- The search algorithm can filter by rating, a search string, and geolocation (and any combination of the three).
- When searching using a search string, the current implementation will return results with a business name containing the search string.
- Click the 'Search Nearby' (found in Search.js) to search by geolocation. The current location (latitude and longitude) will be shown above the map.

### App:
- Please find the front-end code base under the `/app` directory.
- Please find the axios/ajax call (HTTP post request) to upload an image to S3 (and insert the relevant image data to the database) in `/app/src/pages/Submission.js`.
- To find the header, footer, and other common page components (shared between different pages), please see the components found in the `/app/src/components` directory.

### Server:
- Please find the back-end (server) code base under the `/server` directory.
- The database (MySQL) connection and queries are handled in `/server/common/database.js`.
- The logic to handle uploading and retrieving a file from S3 are handled in `server/common/s3.js`.
- The routers/APIs for users, businesses, images (S3), and reviews, and be found in `server/routes/`.
- `server/routes/user_router` contains the API end points for handling HTTP GET and POST requests for retrieving user data, adding a user (for sign up), and authenticating users for login.
- `server/routes/business_router` contains the API end points for handling HTTP GET and POST requests for retrieving business data (by id or by filtering using url query parameters), adding a business.
- `server/routes/images_router` contains the API end points for uploading or retrieving an image from S3.
- `server/routes/review_router` contains the API end points for handling HTTP GET and POST requests for retrieving review data or adding a review.

### MySQL Script:
- Please find the SQL script for creating the (STORES, USERS, REVIEWS) tables and populating the initial data entries under `/db_scripts/datamodel.sql`.

### (Bonus) Add-on Programming Task:
- On the review object submission page (`app/src/pages/ReviewSubmissionPage.js`), a post request is sent to the server using axios (an ajax framework/library) to submit and insert a review/rating to the database. The response will include a status code indicating success or failure. 
- On the business page (`app/src/pages/BusinessPage.js`), a get request is sent to the server using axios (an ajax framework) to retrieve the reviews for a business with store id; in addition, a get request is sent to the server using axios to retrieve the data/informtion for a business with a store id.
- Similarly, axios/ajax calls can be found throughout the front-end code base to insert to the database and to retrieve data from the database.

### Setup:
- For instructions regarding deploying the front-end React application, pease see the `README.md` file in the `/app` directory.
- For instructions regarding deploying the back-end Node.js server, pease see the `README.md` file in the `/server` directory.
- Environment variables will need to be set as described in the above two readme files.

### Troubleshooting:
- Please disable any AdBlocker; this may interfere with the HTTP requests (depending on the browser).
- Please contact (Leon So) sol4@mcmaster.ca or (Joy Xiao) xiaoz18@mcmaster.ca for further troubleshooting.


