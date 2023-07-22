import { FirebaseApp } from 'firebase/app';
import { signInWithPopup, getAuth, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';
import firebaseApp from 'src/config/firebase.config';

class AuthService {
  auth: any;
  constructor(firebaseApp: FirebaseApp) {
    this.auth = getAuth(firebaseApp);
  }

  waitForUser(callback: (user: User | null) => void) {
    return onAuthStateChanged(this.auth, (userCred) => {
      callback(userCred);
    });
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((userCred) => {
        return {
          user: userCred.user,
          error: '',
        };
      })
      .catch((error) => {
        return {
          error: error.message,
          user: null,
        };
      });
  }
  async logout() {
    await signOut(this.auth);
  }
}

export default new AuthService(firebaseApp);
