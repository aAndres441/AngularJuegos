// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  myUrlImage: 'assets/imagenes/error-robot.png',

  firebaseConfig : {
    apiKey: "AIzaSyA9W_9f6CSEAi5h3NgjpsbrATWrL4GsgUs",
    authDomain: "juegosangular.firebaseapp.com",
    projectId: "juegosangular",
    storageBucket: "juegosangular.appspot.com",
    messagingSenderId: "292835106561",
    appId: "1:292835106561:web:40ee1b6b4905ad5e334500"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
