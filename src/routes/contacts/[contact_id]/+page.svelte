<script>
    let { data } = $props();
</script>

<div class="container mt-4">
    <a href="/contacts">
        <button class="btn btn-primary mb-4">Zurück</button>
    </a>
</div>

<div class="container mt-4">
    <div class="row">
        <!-- Bildspalte -->
        <div class="col-md-4">
            <img
                src={data.picture}
                alt={data.name}
                class="img-fluid contact-picture"
            />
        </div>

        <form action ="?/update" method="POST">

            <input type="text" value={1} name="id" hidden>

            <div class="mb-3">
                <label class = "form-label" for="">Name</label>
                <input class="form-control" type="text" name="name" id="" />
            </div>

            <div class="mb-3">
                <label class = "form-label" for="">Geburtsdatum</label>
                <input class="form-control" type="date" name="birthdate" id="" />
            </div>

            <div class="mb-3">
                <label class = "form-label" for="">Beruf</label>
                <input class="form-control" type="text" name="profession" id="" />
            </div>

            <button class="btn btn-primary">Update</button>
        </form>

        <!-- Details-Spalte -->
        <div class="col-md-8">
            <h3>{data.name}</h3>
            <div class="contact-details">
                <p>Geburtsdatum: {data.birthdate}</p>
                <p>Beruf: {data.profession}</p>

                <!-- Liste von Schauspielern -->
                <div class="interests-section">
                    <h4>Interessen:</h4>
                    <ul class="interest-list">
                        {#each data.interests as interest}
                            <li class="interests-item">
                                {interest}
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .contact-picture {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
    }

    .contact-details {
        margin-top: 20px;
    }

    .interests-section {
        margin-top: 20px;
    }

    .interest-list {
        list-style-type: none;
        padding-left: 0;
    }

    .interests-item {
        background-color: #9e9e9e;
        padding: 10px;
        margin-bottom: 5px;
        border-radius: 4px;
    }
</style>
