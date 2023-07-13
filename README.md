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

![Screenshot from 2023-07-13 22-41-04](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/0f3678ff-d459-4b10-b1df-8e7458fd7ec9)
![Screenshot from 2023-07-13 22-41-31](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/a29bf2fe-79b8-4e51-9b07-c2dd6292b3e0)
![Screenshot from 2023-07-13 22-42-08](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/6f7094fd-ec96-45bb-8ffc-0f5afc4fd5e7)
![Screenshot from 2023-07-13 22-45-12](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/b67907e6-3091-4766-a0db-a0e781eaf5fb)
![Screenshot from 2023-07-13 22-46-31](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/f32ddcdc-047a-43eb-8ff2-0ad8e5afa952)
![Screenshot from 2023-07-13 22-47-16](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/05b91db4-cf48-41af-b45a-5313891b911f)
![Screenshot from 2023-07-13 22-48-13](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/150b55b5-c580-4d56-9d5b-9e15441d2199)
![Screenshot from 2023-07-13 22-48-42](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/c779d2bd-ed35-4475-8587-f411b02496bb)
![Screenshot from 2023-07-13 22-50-01](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/9fef0d6d-bb1c-40ea-9989-b63e35086a41)
![Screenshot from 2023-07-13 22-51-04](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/2634ba96-1aba-4c88-ae8e-f96a34c6c01b)
![Screenshot from 2023-07-13 22-57-19](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/5c9a993e-81aa-4964-a602-94ddae08563f)
![Screenshot from 2023-07-13 22-57-47](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/f2a7546c-2d54-4f32-9c87-f4829da638eb)
![Screenshot from 2023-07-13 22-58-56](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/a1fceb43-b0d7-480e-af6a-b40b6e59f867)
![Screenshot from 2023-07-13 22-59-10](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/9950882b-7f48-4751-be84-105a011a57f3)
![Screenshot from 2023-07-13 23-01-20](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/798639eb-acd9-4e82-9aba-fb30bc9c2a8a)
