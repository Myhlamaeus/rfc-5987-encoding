# rfc-5987-encoding [![Code Climate](https://codeclimate.com/github/ileri/rfc-5987-encoding/badges/gpa.svg)](https://codeclimate.com/github/ileri/rfc-5987-encoding) [![Build Status](https://travis-ci.org/ileri/rfc-5987-encoding.svg)](https://travis-ci.org/ileri/rfc-5987-encoding) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
> Encoding as per [RFC 5987](https://tools.ietf.org/html/rfc5987)

## encode({str, lang})
Returns the encoded str with charset UTF-8.

## decode(str)
Returns an object with properties str and lang. Currently only UTF-8 is
supported.
