<script>
    // Import profile to use Google authentication
    import Profile from './Profile.svelte';
    import Todos from './Todos.svelte';

    import { auth, googleProvider } from './firebase';
    import { authState } from 'rxfire/auth';

    let user;

    const unsubscribe = authState(auth).subscribe(u => user = u);

    // Use Google authentication.
    function login() {
        auth.signInWithPopup(googleProvider);
    }
</script>


<section>
    <!-- If authenticated, then send immediately to the todo list app. Otherwise, prompt for Google sign-in. -->
{#if user}
    <Profile {...user} />
    <button on:click={ () => auth.signOut() }>Logout</button>
    <hr>
    <p>NOTE: You must refresh after adding, marking as completed, or deleting to see your changes update. (It's a bug, not a feature 🙁)</p>
    <Todos uid={user.uid} />
{:else}
	<button on:click={login}>
		Signin with Google
	</button>
{/if}
</section>