import { diff_html } from './diff';

const html1 = '<p>I love this module</p>'
const html2 = "<p>I love this module, it's awesome</p>"

console.log(diff_html(html1, html2))
