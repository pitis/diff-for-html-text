import { JSDOM } from 'jsdom'
import { ITagTable } from '../types/ITagTable'

export function replaceTags(html: string, tagTable: ITagTable[]) {
  const dom = new JSDOM(`${html}>`)
  let htmlText = ''

  dom.window.document.body.querySelectorAll('*').forEach((elem) => {
    // remove attributes
    while (elem.attributes.length > 0) {
      elem.removeAttribute(elem.attributes[0].name)
    }
  })

  dom.window.document.body.querySelectorAll('*').forEach((elem, index) => {
    // verify if tag already exists in tagTable
    let exists = true

    if (
      !tagTable.some(
        (tag) => `<${elem.tagName.toLowerCase()}>` === tag.htmlElement
      )
    ) {
      exists = false
      tagTable.push({
        htmlElement: `<${elem.tagName.toLowerCase()}>`,
        // id: `{{${index}}}`,
        id: index,
      })
    }

    if (htmlText.includes(elem.outerHTML)) {
      let idx = exists
        ? tagTable.find(
            (tag) => `<${elem.tagName.toLowerCase()}>` === tag.htmlElement
          )?.id
        : index

      htmlText = htmlText
        .replace(`<${elem.tagName.toLowerCase()}>`, `{{${idx}}}`)
        .replace(`</${elem.tagName.toLowerCase()}>`, `{{/${idx}}}`)

      return
    }

    if (!htmlText.includes(elem.outerHTML)) {
      let idx = exists
        ? tagTable.find(
            (tag) => `<${elem.tagName.toLowerCase()}>` === tag.htmlElement
          )?.id
        : index
      htmlText += elem.outerHTML
        .replace(`<${elem.tagName.toLowerCase()}>`, `{{${idx}}}`)
        .replace(`</${elem.tagName.toLowerCase()}>`, `{{/${idx}}}`)
    }
  })

  return htmlText
}
