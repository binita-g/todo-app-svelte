<script async>
    import TodoItem from './TodoItem.svelte';
    import { doc, deleteDoc } from "firebase/firestore";
    import { db } from './firebase';

    // User ID passed from parent
    export let uid;

    // Form Text
    let text = 'some task';

    // Create empty todos iterable and append to it
    let todos = [];

    // Append to todos iterable from database collection
    db.collection("todos").where("uid", "==", uid)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data())
                todos.push({
                    id: doc.id,
                    text: doc.data().text,
                    complete: doc.data().complete
                })
                todos = todos;
            });
        })
    
    // Add new item to database collection with user's id, text of task, completion status, and date creation
    function add() {
        db.collection('todos').add({ uid, text, complete: false, created: Date.now() })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            });
        text = '';
    }

    // Update item's status to completed or not
    function updateStatus(event) {
        const { id, newStatus } = event.detail;
        console.log(id);
        db.collection('todos').doc(`${event.detail.id}`).update({ complete: newStatus });
    }

    // Delete a task
    function removeItem(event) {
        const { id } = event.detail;
        const docRef = doc(db, 'todos', `${id}`);

        deleteDoc(docRef).then(() => {
            console.log("Entire Document has been deleted successfully.")
            todos = todos;
        })
    }

    todos = todos;
</script>

<style>
    input { display: block }
</style>

<ul>
    <!-- Populate list with todos -->
	{#each [...todos] as todo}
        <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
	{/each}
</ul>


<input bind:value={text}>

<button on:click={add}>Add Task</button>