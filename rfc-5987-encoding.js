export function encode (str) {
  let lang = encode.defaultLang
  if (typeof str === 'object') {
    lang = str.lang
    str = str.str
  }

  return `UTF-8'${lang}'` + encodeURIComponent(str)
    .replace(/['()]/g, function (match) {
      return '%' + match.charCodeAt(0).toString(16)
    })
    .replace(/\*/g, '%2A')
    .replace(/%(7C|60|5E)/g, function (_, match) {
      return String.fromCharCode(parseInt(match, 16))
    })
}
encode.defaultLang = 'en-US'

export function decode (str) {
  const parts = str.split('\'')

  if (parts.length !== 3) {
    throw new Error(`Invalid string: ${str}`)
  }
  if (parts[0].toUpperCase() !== 'UTF-8') {
    throw new Error('Unsupported encoding: ${parts[0]}')
  }

  return {
    lang: parts[1],
    str: decodeURIComponent(parts[2])
  }
}
