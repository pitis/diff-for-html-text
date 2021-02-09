export const isHTML = (text: string): boolean =>
  !(text || '')
    // replace html tag with content
    .replace(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/gi, '')
    // remove remaining self closing tags
    .replace(/(<([^>]+)>)/gi, '')
    // remove extra space at start and end
    .trim()
