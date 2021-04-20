// import DiffMatchPatch from 'diff-match-patch'
import { diff_match_patch } from 'diff-match-patch'

const startingTags = ['{{1}}', '{{2}}', '☆', '⛬', '★', '☁', '☎']

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
    .replace(/<p>/gi, '{{1}}')
    .replace(/<\/p>/gi, '✒')
    .replace(/<h2>/gi, '{{2}}')
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
    .replace(/{{1}}/gi, '<p>')
    .replace(/✒/gi, '</p>')
    .replace(/{{2}}/gi, '<h2>')
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
    .replace(/{\{1}}/gi, '{{1}}<span class="versace">')
    .replace(/✒/gi, '</span>✒')
    .replace(/{\{2}}/gi, '{{2}}<span class="versace">')
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
    // if (part[0] === -1 && shallowCopy === part[1])
    //   part[1] = "<span class='blood'>" + part[1] + '</span>'

    // console.log('before', part[1])
    part[1] = replaceToTags(part[1])
    // console.log('after', part[1])
    layerText += part[1]
  })

  // console.log(layerText)

  return layerText
}

let first = `<p>On its website, cPanel boasts that its software is currently used by hundreds of web hosting companies to manage more than 70 million domains across the world. text that is added on the first layer</p>
<p>
    But in a&nbsp;<a href="https://www.digitaldefense.com/news/zero-day-cpanel-and-webhost-manager/" rel="noopener noreferrer" target="_blank">press release</a>&nbsp;today, Digital Defense says that the 2FA implementation on older cPanel
    &amp; WebHost Manager (WHM) software was vulnerable to brute-force attacks that allowed threat actors to guess URL parameters and bypass 2FA — if 2FA was enabled for an account.
</p>
<p>While brute-forcing attacks, in general, usually take hours or days to execute, in this particular case, the attack required only a few minutes.</p>
<p>
    While this might make some website owners think the bug is not important, it's actually the opposite since 2FA solutions were invented in the first place to protect against the use of phished credentials, and, as a result, any 2FA
    bypass like this bug needs to be treated with the utmost urgency and attention.
</p>
`

let second = `<p>On its website, cPanel boasts that its software is currently used by hundreds of web hosting companies to manage more than 70 million domains across the world. text that is added on the first layer</p>
<p>
    But in a&nbsp;<a href="https://www.digitaldefense.com/news/zero-day-cpanel-and-webhost-manager/" rel="noopener noreferrer" target="_blank">press release</a>&nbsp;today, Digital Defense says that the 2FA implementation on older cPanel
    &amp; WebHost Manager (WHM) software was vulnerable to brute-force attacks that allowed threat actors to guess URL parameters and bypass 2FA — if 2FA was enabled for an account.
</p>
<p>While brute-forcing attacks, in general, usually take hours or days to execute, in this particular case, the attack required only a few minutes.</p>
<p>Exploiting this bug also requires that attackers have valid credentials for a targeted account, but these can be obtained from phishing the website owner.</p>
<p>
    While this might make some website owners think the bug is not important, it's actually the opposite since 2FA solutions were invented in the first place to protect against the use of phished credentials, and, as a result, any 2FA
    bypass like this bug needs to be treated with the utmost urgency and attention.
</p>
<p>
    The good news is that Digital Defense has privately reported the bug, tracked as&nbsp;<a href="https://news.cpanel.com/cpanel-tsr-2020-0007-full-disclosure/" rel="noopener noreferrer" target="_blank">SEC-575</a>, to the cPanel team,
    which has already released&nbsp;<a href="https://news.cpanel.com/cpanel-tsr-2020-0007-announcement/" rel="noopener noreferrer" target="_blank">patches</a>&nbsp;last week.
</p>
`

console.log(diff_html(first, second))
