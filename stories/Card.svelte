<script>
  import { Button, Card } from "../src/index"
</script>

<div class="w-1/6">
  <Card>
    <img src="https://picsum.photos/150/200" alt="preview" slot="preview" />
    <h1 slot="title" class="text-cyan-600">Title</h1>
    <p class="text-grey-400 text-sm text-justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
      repellendus qui dicta, culpa impedit eveniet itaque odit expedita at
      voluptates officiis quam dolor. Cum omnis dolore nemo modi, commodi
      veritatis!
    </p>
    <div slot="actions">
      <Button buttonText="action 1" />
      <Button buttonText="action 2" />
    </div>
  </Card>
</div>
