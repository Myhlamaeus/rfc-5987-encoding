export var defaultLang = 'en-US'

export function encode ({str, lang = defaultLang}) {
  return `UTF-8'${lang}'` + encodeURIComponent(str)
    .replace(/['()]/g, escape)
    .replace(/\*/g, '%2A')
    .replace(/%(?:7C|60|5E)/g, unescape)
}

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
