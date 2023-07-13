
# CodeComet API 
Click [here](https://cometcode.onrender.com) to use the application.
`NOTE: The application is hosted on a free server and hence it might take a few seconds to load.`<br><br>
**TECH STACK: Node, Express, MongoDB, Sphere Engine API** <br><br>

### Installation
1. Clone the repository
2. Install dependencies
```bash
npm install
```
3. Sign in to Sphere Engine to get the API key
4. Create a .env file in the root directory and add the following environment variables
```bash
MONGO_LOCAL_URI=<your_mongodb_uri>
ACCESS_SECRET=<your_accesskey_secret_for_jwt>
SE_API_ADDRESS=<your_sphere_engine_api_address>
SE_API_KEY=<your_sphere_engine_api_key>
EMAIL_ID=<your_email_id>
EMAIL_PASSWORD=<your_email_password>
```
5.  Run the application
```bash
npm start
```
1.  The application should be running on http://localhost:5000


## Public Routes

These routes are publicly accessible:

* **Sign Up:** `POST /api/signUp` - Create a new user account which responds with an access token and email<br><br>
  ![Screenshot from 2023-07-13 22-41-04](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/0f3678ff-d459-4b10-b1df-8e7458fd7ec9)<br><br>
* **Login:** `POST /api/login` - Authenticate and log in as a user.<br><br>
![Screenshot from 2023-07-13 22-41-31](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/a29bf2fe-79b8-4e51-9b07-c2dd6292b3e0)<br><br>

* The access token is saved as a cookie in the browser<br><br>
![Screenshot from 2023-07-13 22-42-08](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/6f7094fd-ec96-45bb-8ffc-0f5afc4fd5e7)<br><br>
## Private Routes (Admin Authentication)

These routes require admin authentication:

* **Get Users:** `GET /api/getUsers` - Retrieve all users with pagination, sort, order, search.<br><br>
  ![Screenshot from 2023-07-13 22-58-56](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/a1fceb43-b0d7-480e-af6a-b40b6e59f867)<br><br>
* **Create Problem:** `POST /api/createProblem` - Add a new problem to the database and Sphere Engine.<br><br>
  ![Screenshot from 2023-07-13 22-45-12](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/b67907e6-3091-4766-a0db-a0e781eaf5fb)<br><br>
* Trying to create a new problem as user which is not allowed<br><br>
  ![Screenshot from 2023-07-13 23-01-20](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/798639eb-acd9-4e82-9aba-fb30bc9c2a8a)<br><br>
* **Get All Problems from Sphere:** `GET /api/getAllProblemsFromSphere` - Fetch all problems from the Sphere Engine.<br><br>
  ![Screenshot from 2023-07-13 22-48-42](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/c779d2bd-ed35-4475-8587-f411b02496bb)<br><br>
* **Get My Problems:** `GET /api/getMyProblems` - Retrieve a list of problems created by the logged-in admin user.<br><br>
  ![Screenshot from 2023-07-13 22-48-13](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/150b55b5-c580-4d56-9d5b-9e15441d2199)<br><br>
* **Update Problem:** `PUT /api/updateProblem/:problemId` - Update a specific problem identified by the problem ID in the database and Sphere Engine.<br><br>
  ![Screenshot from 2023-07-13 22-46-31](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/f32ddcdc-047a-43eb-8ff2-0ad8e5afa952)<br><br>
* **Delete Problem:** `DELETE /api/deleteProblem/:problemId` - Delete a specific problem identified by the problem ID in the database and Sphere Engine.<br><br>
  ![Screenshot from 2023-07-13 22-57-47](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/f2a7546c-2d54-4f32-9c87-f4829da638eb)<br><br>
* **Create Testcase:** `POST /api/createTestcase/:problemId` - Add a new testcase for a specific problem identified by the problem ID in the database and Sphere Engine.<br><br>
  ![Screenshot from 2023-07-13 22-51-04](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/2634ba96-1aba-4c88-ae8e-f96a34c6c01b)<br><br>

## Private Routes (User Authentication)

These routes require user authentication:

* **Get All Problems from DB:** `GET /api/getAllProblemsFromDb` - Retrieve all problems from the database.<br><br>
  ![Screenshot from 2023-07-13 22-50-01](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/9fef0d6d-bb1c-40ea-9989-b63e35086a41)<br><br>
* **Get Problem by ID:** `GET /api/getProblem/:problemId` - Retrieve a specific problem identified by the problem ID.<br><br>
  ![Screenshot from 2023-07-13 22-47-16](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/05b91db4-cf48-41af-b45a-5313891b911f)<br><br>
* **Create Submission:** `POST /api/createSubmission` - Submit a solution for a specific problem in Sphere Engine.<br><br>
  ![Screenshot from 2023-07-13 22-57-19](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/5c9a993e-81aa-4964-a602-94ddae08563f)<br><br>
* Mail sent to the user after submission<br><br>
  ![image](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/56480fe8-105d-46ad-9d3b-38287e938df1)<br><br>
* **Logout:** `POST /api/logout` - Log out the currently authenticated user.<br><br>
  ![Screenshot from 2023-07-13 22-59-10](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/9950882b-7f48-4751-be84-105a011a57f3)<br><br>

