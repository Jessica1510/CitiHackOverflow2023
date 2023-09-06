import { DebugForm } from "./debug.js";
import { SearchBar } from "./searchBar.js"

function main() {
  const searchBar = new SearchBar();
  if (document.querySelector(".debug-card")) {
    const debug = new DebugForm();
    debug.showResponse("");
  }
}

main();