<script>
  import ContactCard from "$lib/components/ContactCard.svelte";
  let {data} = $props();
  let contacts = data.contacts;
  console.log('Daten:', data, 'Kontakte:', contacts);
</script>

<!--Anzeige der Kontakte-->
<p><i>Daten wurden mit ChatGPT generiert. Die Bilder sind lizenzfrei von unsplash.com</i></p>


<button type="submit" class="btn btn-primary custom-font" style="margin-bottom: 20px;">
  <a href="/contacts/create" class="text-white text-decoration-none">Neuen Kontakt erstellen</a>
</button>

<div class="row">
  {#each contacts as contact}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <ContactCard contact={contact}></ContactCard>
    </div>
  {/each}
</div>

<style>
  .custom-font {
    font-family: 'Arial', sans-serif;
    font-size: 1.1rem;
  }
</style>