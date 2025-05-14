<script>
    let { contact } = $props();
  </script>
  
  <div class="contact-card">
    <div>
      <img class="img-fluid" src={contact.picture} alt="" />
    </div>
    
    <div class="details">
      <div class="name">
        <a href={"/contacts/" + contact._id}>
          {contact.name}
        </a>
      </div>
      <div>
        Geburtsdatum: {contact.birthdate}
      </div>
      <div>
        Beruf: {contact.profession}
      </div>
    </div>
  </div>
  
  <style>
    .contact-card {
      border: 1px solid #555;
      height: 100%;
      background-color: #444;
      color: white;
    }
    .details {
      padding: 0.5em;
    }
    .name {
      font-weight: bold;
    }
  </style>
  