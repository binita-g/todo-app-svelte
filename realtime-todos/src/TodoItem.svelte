<script>

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    // Function to delete an item
    function remove() {
		dispatch('remove', { id });
	}

    // Function to toggle an item's status to complete or not
	function toggleStatus() {
        let newStatus = !complete;
		dispatch('toggle', {
            id,
            newStatus
        });
    }
    

    export let id; // document ID
    export let text;
    export let complete;
</script>

<style>
    /* If the item is completed, strike-through with green */
    .is-complete {
        text-decoration: line-through;
        color: green;
    }
</style>


<li>

<!-- If the item is completed, toggle the status to completed and change the icon to a checkmark -->
{#if complete}
    <span class="is-complete">{ text }</span>
    <button on:click={toggleStatus}> ✔️ </button>
<!-- Else, keep the icon as an "X" -->
{:else}
    <span>{ text }</span>
    <button on:click={toggleStatus}> ❌ </button>
{/if}
<!-- Delete button -->
<button on:click={remove}> 🗑 </button>

</li>