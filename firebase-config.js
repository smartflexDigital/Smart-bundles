// ============================================
// FIREBASE CONFIG — Smart Bundles
// ============================================
// MUHIMU: Weka Firestore Security Rules hizi
// kwenye Firebase Console > Firestore > Rules:
//
//   rules_version = '2';
//   service cloud.firestore {
//     match /databases/{database}/documents {
//       match /reviews/{review} {
//         allow read: if true;
//         allow create: if request.resource.data.name is string
//                       && request.resource.data.message is string
//                       && request.resource.data.stars is int
//                       && request.resource.data.stars >= 1
//                       && request.resource.data.stars <= 5;
//         allow update, delete: if false;
//       }
//     }
//   }

export const firebaseConfig = {
  apiKey: "AIzaSyCVp3VUQVJzVVW_vFgeEcSk0PD57tsP1dg",
  authDomain: "smart-bundles-10d09.firebaseapp.com",
  projectId: "smart-bundles-10d09",
  storageBucket: "smart-bundles-10d09.firebasestorage.app",
  messagingSenderId: "146024000699",
  appId: "1:146024000699:web:4fc1877970d09d3867cd9e"
};
