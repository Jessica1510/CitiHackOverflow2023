import { getData } from "./request.js";

export class SearchBar {
  constructor() {
    this.searchField = document.querySelector(".search-bar");
    this.form = this.searchField.querySelector(".search-input-field");
    this.submitButton = this.form.querySelector("button[data-action='submit']");
    this.submitButton.addEventListener(
      "click",
      this.handleSubmitClick.bind(this)
    );
  }

  handleSubmitClick(event) {
    event.preventDefault();
    const input = document.querySelector(".search-input-field input");
    const endpoint = "analysis/" + input.value;
    console.log(endpoint)
    getData(endpoint, this.showResponse);
  }

  showResponse(data) {
    const tickerCard = document.querySelector(".ticker-card");
    console.log(tickerCard);
    let code = tickerCard.querySelector("code");
    console.log(code);
    code.innerText = "hardcoded value";
  }
}