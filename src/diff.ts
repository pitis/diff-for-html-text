import { diff_match_patch as DiffMatchPatch } from 'diff-match-patch'
import { isHTML } from './utils/isHTML'
import { replaceTags } from './utils/replaceTags'

const startingTags = ['{{0}}', '⚠', '㊗️', '🧵', '⤴️', '⤵️']

export const replaceFromTags = (text: string) => {
  return text
    .replace(/<br>/gi, '⚠️')
    .replace(/<p>/gi, '{{0}}')
    .replace(/<\/p>/gi, '{{/0}}')
    .replace(/<h2>/gi, '⚠')
    .replace(/<\/h2>/gi, '❤')
    .replace(/<h3>/gi, '㊗️')
    .replace(/<\/h3>/gi, '㊙️')
    .replace(/<blockquote>/gi, '🧵')
    .replace(/<\/blockquote>/gi, '🩸')
    .replace(/<ol>/gi, '🈸')
    .replace(/<\/ol>/gi, '🈺')
    .replace(/<li>/gi, '⤴️')
    .replace(/<li class="ql-indent-1">/gi, '⤵️')
    .replace(/<\/li>/gi, '🈳')
}

export const replaceToTags = (text: string) => {
  return text
    .replace(/⚠️/gi, '<br>')
    .replace(/{{\0}}/gi, '<p>')
    .replace(/{{\/0}}/gi, '</p>')
    .replace(/⚠/gi, '<h2>')
    .replace(/❤/gi, '</h2>')
    .replace(/㊗️/gi, '<h3>')
    .replace(/㊙️/gi, '</h3>')
    .replace(/🧵/gi, '<blockquote>')
    .replace(/🩸/gi, '</blockquote>')
    .replace(/🈸/gi, '<ol>')
    .replace(/🈺/gi, '</ol>')
    .replace(/⤴️/gi, '<li>')
    .replace(/⤵️/gi, '<li class="ql-indent-1">')
    .replace(/🈳/gi, '</li>')
}

export const replaceWithVersace = (text: string) => {
  return text
    .replace(/⚠️/gi, '<br>')
    .replace(/{{\0}}/gi, '{{0}}<span class="new-text">')
    .replace(/{{\/0}}/gi, '</span>{{/0}}')
    .replace(/⚠/gi, '⚠<span class="new-text">')
    .replace(/❤/gi, '</span>❤')
    .replace(/㊗️/gi, '㊗️<span class="new-text">')
    .replace(/㊙️/gi, '</span>㊙️')
    .replace(/🧵/gi, '🧵<span class="new-text">')
    .replace(/🩸/gi, '</span>🩸')
    .replace(/🈸/gi, '🈸')
    .replace(/🈺/gi, '🈺')
    .replace(/⤴️/gi, '⤴️<span class="new-text">')
    .replace(/⤵️/gi, '⤵️<span class="new-text">')
    .replace(/🈳/gi, '</span>🈳')
}

export const diff_html = (previous: string, next: string): string | void => {
  if (!isHTML(previous) || !isHTML(next)) {
    return
  }

  const dmp = new DiffMatchPatch()

  let previousEdited = replaceTags(previous)
  let nextEdited = replaceTags(next)

  const diff = dmp.diff_main(previousEdited, nextEdited)

  console.log(diff)
}
