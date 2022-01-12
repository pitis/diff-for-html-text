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

  console.log(previousEdited, tagTable)
  console.log(nextEdited)

  // const diff = dmp.diff_main(previousEdited.htmlText, nextEdited.htmlText)

  // console.log(diff)
}
