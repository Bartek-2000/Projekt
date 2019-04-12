import app from 'firebase/app'
import 'firebase/auth'


  
  var config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AYTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER
  };
 export default class firebase {
      constructor(){
          app.initializeApp(config)
          this.auth = app.auth()
      }


      doSignOut = () => this.auth.signOut()
      doCreateWithEmailAndPassword = (email, password) => this.auth.createWithEmailAndPassword(email, password)
      doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password)


  }
  