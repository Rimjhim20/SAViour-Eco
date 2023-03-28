
# SAViour-Eco

Progressive Web App to solve poverty,hunger and impact of climate change.

# Introduction

This project uses google technologies like Firebase, Tensorflow , Google cloud , Google Map and Progressive web app

# Cloning the Repository

To clone this repository, follow these steps:

Open your terminal/command prompt and navigate to the directory where you want to clone the repository.

# Run the following command:

### 1 - git clone https://github.com/Rimjhim20/SAViour-Eco.git

#### Once the repository has been cloned, navigate into the directory by running:

### 2 - cd SAViour-Eco

#### Install the necessary dependencies by running the following command:

### 3 - npm install

#### Start the development server by running:

### 4 - npm run dev

## Now Website is running at http://localhost:3000/

# Install the Firebase Package
After creating your React app, change directory to your project's root folder and install the Firebase package by running:

```
npm install firebase
```
# Add Your React App to a Firebase Project
The next step is to create a Firebase project and link it with your React app. Go to the Firebase console:

1. Click Add project to start a new Firebase project.
![image](https://user-images.githubusercontent.com/71636845/228268730-084c7076-e4c6-4246-b977-eaa75a8b88c9.png)

2.Enter a project name, then click Continue.
![image](https://user-images.githubusercontent.com/71636845/228269002-5db305d3-eede-4f1b-b576-11ee0cab5c0e.png)

3.Click Continue on the next page.
4.Select your Firebase account from the dropdown or click Create a new account if you don't already have one.
5.Finally, click Create project.

![image](https://user-images.githubusercontent.com/71636845/228269312-ad83a6e1-68ab-4aec-afeb-92749ad4d3f6.png)

6.Click Continue once the process completes.
7.Next, click the Web icon (</>) towards the top-left of the following page to set up Firebase for the web.
![image](https://user-images.githubusercontent.com/71636845/228269482-b7b024af-98f0-43ba-ba45-513b46639be7.png)
8.Enter a nickname for your app in the provided field. Then click Register app.
![image](https://user-images.githubusercontent.com/71636845/228269577-6a80987e-ddf3-4dee-a0f9-e48e9aeb43eb.png)
9. Copy the generated code and keep it for the following step (discussed in the following section).
10. Click Continue to the console.
11. There are many options on the following page. Scroll down and select Cloud Firestore since you only need to set up a database in this case.
![image](https://user-images.githubusercontent.com/71636845/228269958-c83a5f5d-034a-400d-ad80-891a0190b087.png)
12.Next, click Create database.
![image](https://user-images.githubusercontent.com/71636845/228270080-365bfa6e-8350-4c4b-8625-5ad53866a8e2.png)
13. Click Next. Select your preferred Firestore location from the dropdown.
14. Then click Enable to create a Firestore database.
![image](https://user-images.githubusercontent.com/71636845/228270264-1044d7c9-b265-460a-89d9-b51f63f680fb.png)

#Initialize Firebase in Your React App
Create a new folder inside your project src directory. You can call this firebase_setup. Next, create a firebase.js file inside that folder. Then paste the code generated earlier into this file.
For example, to enter your app's Firebase secret key in the .env file:
```
REACT_APP_apiKey = yourFirebaseAccessKey

```
Thus, you can fine-tune the generated code as follows:
```
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
```

Firebase is connected successfully.


