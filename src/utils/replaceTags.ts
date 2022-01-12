import { JSDOM } from 'jsdom'

export function replaceTags(html: string): string {
  const dom = new JSDOM(`${html}>`)
  let htmlText = ''

  dom.window.document.body.querySelectorAll('*').forEach((elem) => {
    // remove attributes
    while (elem.attributes.length > 0) {
      elem.removeAttribute(elem.attributes[0].name)
    }
  })

  dom.window.document.body.querySelectorAll('*').forEach((elem, index) => {
    if (htmlText.includes(elem.outerHTML)) {
      htmlText = htmlText
        .replace(`<${elem.tagName.toLowerCase()}>`, `{{${index}}}`)
        .replace(`</${elem.tagName.toLowerCase()}>`, `{{/${index}}}`)

      return
    }

    if (!htmlText.includes(elem.outerHTML))
      htmlText += elem.outerHTML
        .replace(`<${elem.tagName.toLowerCase()}>`, `{{${index}}}`)
        .replace(`</${elem.tagName.toLowerCase()}>`, `{{/${index}}}`)
  })

  console.log(htmlText)
  return htmlText
}
