<script async>
    import TodoItem from './TodoItem.svelte';
    import { db } from './firebase';

    // User ID passed from parent
    export let uid;

    // Form Text
    let text = 'some task';
    let todos = [];

    // Query requires an index, see screenshot below
    db.collection("todos").where("uid", "==", uid)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data())
                todos = [...todos, doc.data()];
                todos = todos;
            });
        })

    function add() {
        db.collection('todos').add({ uid, text, complete: false, created: Date.now() });
        text = '';
    }

    function updateStatus(event) {
        const { id, newStatus } = event.detail;
        console.log('EVENT', event.detail)
        db.collection('todos').doc(id).update({ complete: newStatus });
    }

    function removeItem(event) {
        const { id } = event.detail;
        console.log('EVENT', event.detail)
        db.collection('todos').doc(id).delete();
    }

    todos = todos;
</script>

<style>
    input { display: block }
</style>

<ul>
	{#each [...todos] as todo}
        <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
	{/each}
</ul>


<input bind:value={text}>

<button on:click={add}>Add Task</button>