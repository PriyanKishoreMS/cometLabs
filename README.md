# API Usage

## Public Routes

These routes are publicly accessible:

*   **Sign Up:** `POST /api/signUp` - Create a new user account.
*   **Login:** `POST /api/login` - Authenticate and log in as a user.

## Private Routes (Admin Authentication)

These routes require admin authentication:

*   **Get Users:** `GET /api/getUsers` - Retrieve a list of all users.
*   **Create Problem:** `POST /api/createProblem` - Add a new problem to the database and Sphere Engine.
*   **Get All Problems from Sphere:** `GET /api/getAllProblemsFromSphere` - Fetch all problems from the Sphere Engine.
*   **Get My Problems:** `GET /api/getMyProblems` - Retrieve a list of problems created by the logged-in admin user.
*   **Update Problem:** `PUT /api/updateProblem/:problemId` - Update a specific problem identified by the problem ID in the database and Sphere Engine.
*   **Delete Problem:** `DELETE /api/deleteProblem/:problemId` - Delete a specific problem identified by the problem ID in the database and Sphere Engine.
*   **Create Testcase:** `POST /api/createTestcase/:problemId` - Add a new testcase for a specific problem identified by the problem ID in the database and Sphere Engine.

## Private Routes (User Authentication)

These routes require user authentication:

*   **Get All Problems from DB:** `GET /api/getAllProblemsFromDb` - Retrieve all problems from the database.
*   **Get Problem by ID:** `GET /api/getProblem/:problemId` - Retrieve a specific problem identified by the problem ID.
*   **Create Submission:** `POST /api/createSubmission` - Submit a solution for a specific problem in Sphere Engine.
*   **Logout:** `POST /api/logout` - Log out the currently authenticated user.