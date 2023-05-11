import { difference, isAfter, isBefore, isBetween } from '../lib/compare'
import { format } from '../lib/format'
import { fromRelativeString, fromString } from '../lib/from-string'
import { now } from '../lib/now'
import { toTimezone } from '../lib/toTimezone'

process.env.TZ = 'UTC'

// NOW
console.log('UTC       =>', now())
console.log('New York  =>', now('America/New_York'))
console.log('Sao Paulo =>', now('America/Sao_Paulo'))

// COMPARE
const a1 = isAfter(now(), now().addHours(3))
const a2 = isAfter(now().addHours(3), now())

console.log('isAfter =>', a1, a2)

const b1 = isBefore(now(), now().addHours(3))
const b2 = isBefore(now().addHours(3), now())

console.log('isBefore =>', b1, b2)

const c1 = difference(now(), now().addHours(3))
const c2 = difference(now().addHours(3), now())

console.log('difference =>', c1, c2)

const d1 = isBetween(now(), now().addHours(-1), now().addHours(2))
const d2 = isBetween(now(), now().addHours(1), now().addHours(2))

console.log('isBetween =>', d1, d2)

// FORMAT
const f1 = format(now(), 'M/D/YYYY [at] hh:mm A')

console.log('M/D/YYYY at hh:mm a =>', f1)

// FROM

const fs1 = fromString('5/10/2023 at 7:55 am')

console.log('fromString         =>', fs1)

const frs1 = fromRelativeString('today at 7:55 am', 'America/Sao_Paulo')
const frs2 = fromRelativeString('tomorrow at 7:55 am', 'America/Sao_Paulo')
const frs3 = fromRelativeString('7:55 am', 'America/Sao_Paulo')

console.log('fromRelativeString =>', frs1)
console.log('fromRelativeString =>', frs2)
console.log('fromRelativeString =>', frs3)

// TO TIMEZONE

const tt1 = toTimezone(now('America/Sao_Paulo'), 'America/New_York')
const tt2 = toTimezone(now('UTC'), 'America/New_York')

console.log('From America/Sao_Paulo to UTC =>', tt1)
console.log('From UTC to America/New_York  =>', tt2)