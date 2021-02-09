// import DiffMatchPatch from 'diff-match-patch'
import { diff_match_patch } from 'diff-match-patch'

const startingTags = ['☀', '⚠', '☆', '⛬', '★', '☁', '☎']

// const endingHtmlTags = ['<a>', '<abbr>', '<address>', '<area>', '</article>', '</aside>', '</b>', '</bdi>', '</bdo>', '</blockquote>', '</body>', '</button>', '</canvas>', '</caption>', '</cite>', '</code>', '</col>', '</colgroup>', '</data>', '</datalist>', '</dd>', '</del>', '</details>', '</dfn>', '</dialog>', '</div>', '</dl>', '</dt>', '</>', '</>', '</>', '</>', '</>', '</>', '</>', '</>', '</>', '</>', '</>', '</>', '</>', '</>',]

const startingHtmlTags = [
  '<html>',
  '<body>',
  '<p>',
  '<h1>',
  '<h2>',
  '<h3>',
  '<blockquote>',
  '<ul>',
  '<ol>',
  '<li>',
  '<br>',
]

const replaceFromTags = (text: string): string => {
  return text
    .replace(/<br>/gi, '♜')
    .replace(/<em>/gi, '☎')
    .replace(/<\/em>/gi, '☏')
    .replace(/<p>/gi, '☀')
    .replace(/<\/p>/gi, '✒')
    .replace(/<h2>/gi, '⚠')
    .replace(/<\/h2>/gi, '❤')
    .replace(/<h3>/gi, '☆')
    .replace(/<\/h3>/gi, '⚑')
    .replace(/<blockquote>/gi, '⛬')
    .replace(/<\/blockquote>/gi, '☂')
    .replace(/<ol>/gi, '⚐')
    .replace(/<\/ol>/gi, '☯')
    .replace(/<li>/gi, '★')
    .replace(/<li class="ql-indent-1">/gi, '☁')
    .replace(/<\/li>/gi, '♞')
}

export const replaceToTags = (text: string): string => {
  return text
    .replace(/♜/gi, '<br>')
    .replace(/☎/gi, '<em>')
    .replace(/☏/gi, '</em>')
    .replace(/☀/gi, '<p>')
    .replace(/✒/gi, '</p>')
    .replace(/⚠/gi, '<h2>')
    .replace(/❤/gi, '</h2>')
    .replace(/☆/gi, '<h3>')
    .replace(/⚑/gi, '</h3>')
    .replace(/⛬/gi, '<blockquote>')
    .replace(/☂/gi, '</blockquote>')
    .replace(/⚐/gi, '<ol>')
    .replace(/☯/gi, '</ol>')
    .replace(/★/gi, '<li>')
    .replace(/☁/gi, '<li class="ql-indent-1">')
    .replace(/♞/gi, '</li>')
}

const replaceWithVersace = (text: string) => {
  return text
    .replace(/♜/gi, '<br>')
    .replace(/☎/gi, '☎<span class="versace">')
    .replace(/☏/gi, '</span>☏')
    .replace(/☀/gi, '☀<span class="versace">')
    .replace(/✒/gi, '</span>✒')
    .replace(/⚠/gi, '⚠<span class="versace">')
    .replace(/❤/gi, '</span>❤')
    .replace(/☆/gi, '☆<span class="versace">')
    .replace(/⚑/gi, '</span>⚑')
    .replace(/⛬/gi, '⛬<span class="versace">')
    .replace(/☂/gi, '</span>☂')
    .replace(/⚐/gi, '⚐')
    .replace(/☯/gi, '☯')
    .replace(/★/gi, '★<span class="versace">')
    .replace(/☁/gi, '☁<span class="versace">')
    .replace(/♞/gi, '</span>♞')
}

export const diff_html = (previous: string, currentOne: string) => {
  const dmp = new diff_match_patch()

  // let previousEdited = replaceFromTags(previous)
  // let currentOneEdited = replaceFromTags(currentOne)

  // const diff = dmp.diff_main(previousEdited, currentOneEdited)
  const diff = dmp.diff_main(previous, currentOne)

  console.log(diff)

  let layerText = ''
  let rememberTag = ''

  diff.forEach((part, index) => {
    // part[0] says if it this is added text, -1 deleted, 0 no changes, 1 added
    // part[1] is the text
    // if (part[0] === -1) {
    //   part[1] = ''
    //   return
    // }

    if (startingTags.includes(part[1].slice(-1))) {
      rememberTag = part[1].slice(-1)
      part[1] = part[1].slice(0, -1)
      diff[index + 1][1] = rememberTag + diff[index + 1][1]
    }

    let shallowCopy = part[1]
    if (part[0] !== 0) part[1] = replaceWithVersace(part[1])
    if (part[0] === 1 && shallowCopy === part[1])
      part[1] = "<span class='versace'>" + part[1] + '</span>'
    if (part[0] === -1 && shallowCopy === part[1])
      part[1] = "<span class='blood'>" + part[1] + '</span>'

    // console.log('before', part[1])
    part[1] = replaceToTags(part[1])
    // console.log('after', part[1])
    layerText += part[1]
  })

  // console.log(layerText)

  return layerText
}
