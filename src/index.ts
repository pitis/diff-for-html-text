import { diff_html } from './diff'

const html1 =
  '<div class="lmao" id="textu-meu">I love this module, <span>it brings fresh air</span><p>trappere de ce ma <a>minti</a></p></div>'
const html2 = "<p>I love this module, it's awesome</p>"

console.log(diff_html(html1, html2))
