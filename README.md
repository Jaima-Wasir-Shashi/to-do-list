# **Template React App**

## **# Prebuild Components**
* #### ***[Modal](https://github.com/Muhammad-Nafis-Abdullah/template-react-app/blob/master/src/components/preBuild/Modal.js)***
* #### ***[Loading](https://github.com/Muhammad-Nafis-Abdullah/template-react-app/blob/master/src/components/preBuild/Loading.js)***
* #### ***[NotFound](https://github.com/Muhammad-Nafis-Abdullah/template-react-app/blob/master/src/components/preBuild/NotFound.js)***

***

## **# Included Packages**
* #### ***[Tailwind CSS](https://tailwindcss.com/docs/installation)***
* #### ***[DaisyUI](https://daisyui.com/docs/install/)***
* #### ***[React Router](https://reactrouter.com/docs/en/v6/getting-started/tutorial)***
* #### ***[Firebase](https://console.firebase.google.com/)***
* #### ***[React Firebase Hooks](https://github.com/CSFrequency/react-firebase-hooks)***
* #### ***[React Slicker Carousel](https://react-slick.neostack.com/docs/get-started)***
* #### ***[React Simple Typewriter](https://github.com/awran5/react-simple-typewriter)***
* #### ***[React Icons](https://react-icons.github.io/react-icons)***
* #### ***[React Toastify](https://fkhadra.github.io/react-toastify/introduction)***
* #### ***[Email js](https://www.emailjs.com/docs)***
* #### ***[AOS animation](https://michalsnik.github.io/aos)***
* #### ***[Axios](https://axios-http.com/docs/intro)***

***

## **# Included Custom Hooks**
* #### ***[useFirebaseFetch (for fetching data from firebase real time data base)](https://github.com/Muhammad-Nafis-Abdullah/template-react-app/blob/master/src/hooks/useFirebaseFetch.js)***
* #### ***[useRefetch (for fetching data)](https://github.com/Muhammad-Nafis-Abdullah/template-react-app/blob/master/src/hooks/useRefetch.js)***
* #### ***[useStorage (for using local storage)](https://github.com/Muhammad-Nafis-Abdullah/template-react-app/blob/master/src/hooks/useStorage.js)***

***

### **# Steps for Implementing Authentication through Firebase**
* *1. create a new firebase project in console.firebase.google.com* **[already applied in this tamplete]**
* *2. install firebase through the command "`npm install firebase`"* **[already applied in this tamplete]**
* *3. create firebase.init.js and import getAuth to export auth* **[already applied in this tamplete]**
* *4. Firebase settings > Authentication > enable Email and password auth*
* *5. Create Login, Signup component, setup route*
* *6. Attach form field handler and form submit handler*
* *7. `npm install --save react-firebase-hooks`* **[already applied in this tamplete]**
* *8. useCreateUserWithEmailAndPassword from react-firebase-hooks*
* *9. if user is created redirect to the expected page*
* *10. useSignInWithEmailAndPassword for Login*
* *11. Create RequireAuth component ==> check user exists also tract user location* **[already applied in this tamplete]**
* *12. In route wrap Protected Component by using Require Auth Component*

***

### **# Steps for Implementing Hosting through Firebase**
* *1. `npm install -g firebase-tools` (one time for your computer)* **[already applied in this tamplete]**
* *2. `firebase login` (one time for your computer)* **[already applied in this tamplete]**
* *3. `firebase init` (one time for each project )*
* *4. `npm run build` (every time you want to deploy)*
* *5. `firebase deploy` (every time you want to deploy)*