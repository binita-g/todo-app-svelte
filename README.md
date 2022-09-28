# todo-app-svelte
A simple To Do list app built with Svelte and Firebase.

## Check Firebase version if installed
Run the following commands to install Firebase. This uses Firebase 11.11.0, so make sure your Firebase version is at least 9.0. You can check by using:

```
firebase tools --version
```

## Go into correct repo
```
cd realtime-todos
```

## If Firebase NOT installed, install Firebase
Run the following to install Firebase:
```
npm i rxfire firebase rxjs
```

## Once you're ready, spin up the app.
```
npm i
npm run dev
```

You should now see it running at ```http://localhost:8080/```!

## Citations
Code is from:

https://fireship.io/lessons/svelte-v3-overview-firebase/

https://softauthor.com/firebase-firestore-delete-document-deletedoc/

https://firebase.google.com/docs/web/modular-upgrade

https://softauthor.com/firebase-firestore-get-document-by-id/

https://stackoverflow.com/questions/72684050/how-to-get-id-from-clicked-doc-firebase-react
