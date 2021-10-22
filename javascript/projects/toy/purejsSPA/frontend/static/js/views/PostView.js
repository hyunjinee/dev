import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Viewing Post");
  }
  async getHtml() {
    console.log(this.params);
    return `
        <h1>Posts</h1>
     <p>You are viewing the posts!</p>
        `;
  }
}
