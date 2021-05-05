# [Diff for HTML](#)

Diff for HTML is a JavaScript library for comparing two blocks of HTML as plain text and efficiently return a list of differences.

- **Diff-Match-Params Based:** We found that using Google's library is extremely incovenient for this use. So we took the liberty of improving this to work with HTML.
- **Write Anywhere:** You can use this on the front-end as well as the back-end.

## Installation

Go to the root of your project and run:
`npm i diff-for-html`

Or if you use yarn:
`yarn add diff-for-html`

## Examples

I'll try to update here more examples. Here is the first one to get you started:

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
