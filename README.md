# [Diff for HTML](#)

Diff for HTML is a JavaScript library for comparing two blocks of HTML as plain text and efficiently return a list of differences.

- **Declarative:** React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
- **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
- **Learn Once, Write Anywhere:** We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using [React Native](https://reactnative.dev/).

[Learn how to use React in your own project](https://reactjs.org/docs/getting-started.html).

## Installation

Go to the root of your project and run:
`npm i diff-for-html`

Or if you use yarn:
`yarn add diff-for-html`

## Examples

We have several examples [on the website](https://reactjs.org/). Here is the first one to get you started:

```javascript
import { diff_html } from 'diff-for-html'

const html1 = '<p>I love this module</p>'
const html2 = "<p>I love this module, it's awesome</p>"

console.log(diff_html(html1, html2))
```

Expected output:

```
[
  [ 0, '<p>I love this module' ],
  [ 1, ", it's awesome" ],
  [ 0, '</p>' ]
]
<p>I love this module<span class='new-text'>, it's awesome</span></p>
```

This example takes 2 HTML inputs as text and shows the differences of the HTML in the console.

You'll notice that we used an HTML-like syntax; [we call it JSX](https://reactjs.org/docs/introducing-jsx.html). JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML. If you're using React as a `<script>` tag, read [this section](https://reactjs.org/docs/add-react-to-a-website.html#optional-try-react-with-jsx) on integrating JSX; otherwise, the [recommended JavaScript toolchains](https://reactjs.org/docs/create-a-new-react-app.html) handle it automatically.

## Contributing

The main purpose of this repository is to continue evolving the code, making it faster and easier to use. Development happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving diff-for-html.

### Code of Conduct

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to make participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

Examples of unacceptable behavior by participants include:

<ul>
  <li>The use of sexualized language or imagery and unwelcome sexual attention or advances</li>
  <li>Trolling, insulting/derogatory comments, and personal or political attacks</li>
  <li>Public or private harassment</li>
  <li>Publishing others’ private information, such as a physical or electronic address, without explicit permission</li>
  <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
</ul>

### Contributing Guide

If you wanna propose bugfixes or new features, please go to the [Issues](https://github.com/pitis/diff-for-html/issues) section.

### License

`diff-for-html` is [MIT licensed](./LICENSE).
