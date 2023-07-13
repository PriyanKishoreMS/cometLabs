
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
6.  The application should be running on http://localhost:5000<br><br>


## Public Routes

These routes are publicly accessible:

* **Sign Up:** `POST /api/signUp` - Create a new user account which responds with an access token and email<br><br>
  ![Screenshot from 2023-07-13 22-41-04](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/5895f3d4-2b4e-45db-9449-87366d885ea1)<br><br>
* **Login:** `POST /api/login` - Authenticate and log in as a user.<br><br>
![Screenshot from 2023-07-13 22-41-31](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/440d23ca-a6b5-455e-bc06-db62410a486f)<br><br>

* The access token is saved as a cookie in the browser<br><br>
![Screenshot from 2023-07-13 22-42-08](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/dd051757-677e-4944-9719-6c3c8539d9a3)
<br><br>
## Private Routes (Admin Authentication)

These routes require admin authentication:

* **Get Users:** `GET /api/getUsers` - Retrieve all users with pagination, sort, order, search.<br><br>
  ![Screenshot from 2023-07-13 22-58-56](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/75266fb2-47a1-4d15-8b65-8b66e257fd06)<br><br>
* **Create Problem:** `POST /api/createProblem` - Add a new problem to the database and Sphere Engine.<br><br>
  ![Screenshot from 2023-07-13 22-45-12](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/8713e0d6-e5a4-4da7-8b88-9841865cc29a)<br><br>
* Trying to create a new problem as user which is not allowed<br><br>
  ![Screenshot from 2023-07-13 23-01-20](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/336c704b-af0f-42fd-b86b-c708da510cc2)<br><br>
* **Get All Problems from Sphere:** `GET /api/getAllProblemsFromSphere` - Fetch all problems from the Sphere Engine.<br><br>
  ![Screenshot from 2023-07-13 22-48-42](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/dae89dba-bfdb-44e0-8558-fdc44a91ca23)<br><br>
* **Get My Problems:** `GET /api/getMyProblems` - Retrieve a list of problems created by the logged-in admin user.<br><br>
  ![Screenshot from 2023-07-13 22-48-13](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/0de0bcdd-fc97-40d7-9201-88c3918b2066)<br><br>
* **Update Problem:** `PUT /api/updateProblem/:problemId` - Update a specific problem identified by the problem ID in the database and Sphere Engine.<br><br>
  ![Screenshot from 2023-07-13 22-46-31](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/7bf6b45e-f1b3-4124-836e-f371501e8a77)<br><br>
* **Delete Problem:** `DELETE /api/deleteProblem/:problemId` - Delete a specific problem identified by the problem ID in the database and Sphere Engine.<br><br>
  ![Screenshot from 2023-07-13 22-57-47](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/a729021e-ec68-4ef3-8a9b-936320920c58)<br><br>
* **Create Testcase:** `POST /api/createTestcase/:problemId` - Add a new testcase for a specific problem identified by the problem ID in the database and Sphere Engine.<br><br>
  ![Screenshot from 2023-07-13 22-51-04](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/20fbc18a-df68-400f-874a-260ef39a5aaa)<br><br>

## Private Routes (User Authentication)

These routes require user authentication:

* **Get All Problems from DB:** `GET /api/getAllProblemsFromDb` - Retrieve all problems from the database.<br><br>
  ![Screenshot from 2023-07-13 22-50-01](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/44c64d8e-2d19-400d-a785-c5793767afae)<br><br>
* **Get Problem by ID:** `GET /api/getProblem/:problemId` - Retrieve a specific problem identified by the problem ID.<br><br>
  ![Screenshot from 2023-07-13 22-47-16](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/87a2f0ab-a734-4c6b-b559-ed2ed7f0c9dd)<br><br>
* **Create Submission:** `POST /api/createSubmission` - Submit a solution for a specific problem in Sphere Engine.<br><br>
  ![Screenshot from 2023-07-13 22-57-19](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/f5a67c4d-c6d4-4cb0-9dff-72dc78b57901)<br><br>
* Mail sent to the user after submission<br><br>
  ![Screenshot from 2023-07-13 23-59-54](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/7dc25f4f-7f40-4578-8a6a-baa0ee7929a0)<br><br>
* **Logout:** `POST /api/logout` - Log out the currently authenticated user and clear cookies.<br><br>
  ![Screenshot from 2023-07-13 22-59-10](https://github.com/PriyanKishoreMS/cometLabs/assets/80768547/becf1374-7907-41dd-a9b7-47199deaa9a9)<br><br>

