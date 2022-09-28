<!-- Show username, photo from Gmail, and unique user ID -->
<script>
    export let displayName;
    export let photoURL;
    export let uid;
</script>

<!-- Say "hi" with user's name -->
<h3>Hi { displayName }!</h3>

<img src={ photoURL } width="100" alt="user avatar">
<p>Your userID is { uid }</p>