import { diff_match_patch as DiffMatchPatch } from 'diff-match-patch'
import { ITagTable } from './types/ITagTable'
import { isHTML } from './utils/isHTML'
import { replaceTags } from './utils/replaceTags'

export const diff_html = (previous: string, next: string): string | void => {
  if (!isHTML(previous) || !isHTML(next)) {
    return
  }

  let tagTable: ITagTable[] = []

  const dmp = new DiffMatchPatch()

  let previousEdited = replaceTags(previous, tagTable)
  let nextEdited = replaceTags(next, tagTable)

  const diff = dmp.diff_main(previousEdited, nextEdited)

  diff.forEach((elem, index) => {
    // correction for missing parantheses
    if (
      index < diff.length - 1 &&
      diff[index + 1][1].substring(0, 4) === '}}{{'
    ) {
      diff[index][1] += '}}'
      diff[index + 1][1] = diff[index + 1][1].slice(2)
    }

    // transform back to tags
    tagTable.forEach((tag) => {})
  })

  console.log(tagTable)

  // console.log(diff.map((elem) => (elem[0] > -1 ? elem[1] : '')).join(''))
  // console.log(diff)
}
