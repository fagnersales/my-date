import { difference, isAfter, isBefore, isBetween } from '../lib/compare'
import { format } from '../lib/format'
import { now } from '../lib/now'

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

console.log('M/D/YYYY at hh:mm a =>', format(now(), 'M/D/YYYY [at] hh:mm A'))