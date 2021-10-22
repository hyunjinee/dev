import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashbord");
  }
  async getHtml() {
    return `
        <h1>Hello, hyunjin</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt excepturi officiis delectus minima. Aut ut accusantium officiis repudiandae. Enim, repellendus dignissimos! Nisi unde eveniet aliquid illo, quas laborum nam suscipit?</p>
        <p>
        <a href="/posts" data-link>View recent posts</a>
        </p>
        `;
  }
}
