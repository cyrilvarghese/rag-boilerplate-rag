<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Index from "./layout/index.svelte";
  export let url = "";
</script>

<main>
  <div>
    <Router {url}>
      <!-- admin layout -->
      <Route path="/*" component={Index} />
    </Router>
  </div>
</main>
