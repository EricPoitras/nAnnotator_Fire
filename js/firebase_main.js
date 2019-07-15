// Authentification Process and Config Settings

// Your web app's Firebase authentification config
var uiConfig = {
callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // TODO: GET app data in firebase_data.js
      Firebase_GET_Call();
      Firebase_GET_Call_2();
      // TODO: Hide the sign in/out buttons in firebase_controller.js
      Controller_SignIn_Completed();
      return false;
    }
  },
'credentialHelper': firebaseui.auth.CredentialHelper.NONE,
signInSuccessUrl: 'index.html',
signInOptions: [
  // Leave the lines as is for the providers you want to offer your users.
  //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  //firebase.auth.GithubAuthProvider.PROVIDER_ID,
  firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  //firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
],
// Terms of service url/callback.
tosUrl: 'index.html',
// Privacy policy url/callback.
privacyPolicyUrl: 'index.html'
};

// Sign In Firebase Auth
function Firebase_SignIn(){
  // Begin sign in process by loading UI authentification into container in HTML
  ui.start('#firebaseui-auth-container', uiConfig);
}
    
// Sign Out of Firebase Auth
function Firebase_SignOut(){
 //Sign Out
  firebase.auth().signOut();
  // TODO: Update UI elements in firebase_controller.js
  Controller_SignOut_Completed();
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//console.log(firebase);
          
// Define database object
 var db = firebase.firestore();
 //console.log(db);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// The start method will wait until the DOM is loaded.
 ui.disableAutoSignIn();