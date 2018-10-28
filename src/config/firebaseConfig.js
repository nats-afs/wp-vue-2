import firebase from "firebase";

export const config = {
  apiKey: "AIzaSyC7MOW1ASSbqodOAzsXit2_wOaCmRtnntg",
  authDomain: "muni-afs.firebaseapp.com",
  databaseURL: "https://muni-afs.firebaseio.com",
  projectId: "muni-afs",
  storageBucket: "muni-afs.appspot.com",
  messagingSenderId: "77842348726"
};

let app = firebase.initializeApp(config); //INITIALIZE FIREBASE

// export function firebaseListener(func) {
// 	firebase.auth().onAuthStateChanged(function (user) {
// 	  if (user) {
// 	  	console.log("User log in success", user);
// 	    func(true, user)
// 	  } else {
// 	  	console.log("User log in failed", user);
// 	    func(false)
// 	  }
// 	}, function(error) {
// 	  console.log(error)
// 	});
// }

//FIREBASE STORAGE
export const storage = app.storage(); //INITIALIZE STORAGE

let storageRef = storage.ref();

export const docsStoreRef = storageRef.child("documents");

//
// REALTIME DATABASE
export const db = app.database(); //INITIALIZE DATABASE

export const galleryRef = db.ref("gallery");
export const placeRef = db.ref("place");
export const orgRef = db.ref("org");
export const newsRef = db.ref("news");
export const noteRef = db.ref("note");
export const eventRef = db.ref("event");
//

// export const firebaseAuth = firebase.auth;
