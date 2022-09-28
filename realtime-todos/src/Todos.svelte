<script async>
    import TodoItem from './TodoItem.svelte';
    import { getFirestore, doc, deleteDoc, getDoc } from "firebase/firestore";
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
                todos.push({
                    id: doc.id,
                    text: doc.data().text,
                    complete: doc.data().complete
                })
                todos = todos;
            });
        })
    
        console.log('!',todos)

    function add() {
        db.collection('todos').add({ uid, text, complete: false, created: Date.now() })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            });
        text = '';
    }

    function updateStatus(event) {
        const { id, newStatus } = event.detail;
        console.log(id);
        db.collection('todos').doc(`${event.detail.id}`).update({ complete: newStatus });
    }

    function removeItem(event) {
        const { id } = event.detail;
        console.log("WHAT", id);
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
	{#each [...todos] as todo}
        <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
	{/each}
</ul>


<input bind:value={text}>

<button on:click={add}>Add Task</button>