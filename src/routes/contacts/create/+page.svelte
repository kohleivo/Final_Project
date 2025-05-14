<script>
    let { form } = $props();
</script>

<a href="/contacts">
    <button class="btn btn-primary">Zurück</button>
</a>

<!-- Inputfelder definieren -->
<h1>Neuen Kontakt erstellen</h1>
<form method="POST" action="?/create">
    <!-- Name -->
    <div class="mb-3">
        <label for="" class="form-label">Name</label>
        <input class="form-control" name="name" type="text" required />
    </div>
    <!-- Geburtsdatum -->
    <div class="mb-3">
        <label for="" class="form-label">Geburtsdatum</label>
        <input class="form-control" name="birthdate" type="date" required />
    </div>
    <!-- Beruf -->
    <div class="mb-3">
        <label for="" class="form-label">Beruf</label>
        <input class="form-control" name="profession" type="text" required />
    </div>
    <!-- Interessen -->
    <div class="mb-3">
        <label for="interests" class="form-label"
            >Interessen (mit Komma getrennt)</label
        >
        <input
            class="form-control"
            name="interests"
            type="text"
            placeholder="z.B. Lesen, Sport, Musik"
        />
    </div>
    <!-- Bild-Link -->
    <div class="mb-3">
        <label for="picture" class="form-label">Profilbild-Link (URL)</label>
        <input
            class="form-control"
            type="url"
            name="picture"
            placeholder="https://..."
        />
    </div>
    <button type="submit" class="btn btn-primary">Kontakt erstellen</button>
</form>

{#if form?.success}
    <p>Kontakt erstellt</p>
{/if}
