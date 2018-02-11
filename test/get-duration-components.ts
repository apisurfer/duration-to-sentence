import getDurationComponents from '../src/get-duration-components'
import {test} from 'tape'

test('duration components(43); seconds only', t => {
  const components = getDurationComponents(43)
  t.equal(components[0].value, 0, 'days should be 0')
  t.equal(components[1].value, 0, 'hours should be 0')
  t.equal(components[2].value, 0, 'minutes should be 0')
  t.equal(components[3].value, 43, 'seconds should be 43')
  t.end()
})

test('duration components(143); seconds, minutes', t => {
  const components = getDurationComponents(143)
  t.equal(components[0].value, 0, 'days should be 0')
  t.equal(components[1].value, 0, 'hours should be 0')
  t.equal(components[2].value, 2, 'minutes should be 2')
  t.equal(components[3].value, 23, 'seconds should be 23')
  t.end()
})

test('duration components(7287); seconds, minutes, hours', t => {
  const components = getDurationComponents(7287)
  t.equal(components[0].value, 0, 'days should be 0')
  t.equal(components[1].value, 2, 'hours should be 2')
  t.equal(components[2].value, 1, 'minutes should be 1')
  t.equal(components[3].value, 27, 'seconds should be 27')
  t.end()
})

test('duration components(435432); seconds, minutes, hours, days', t => {
  const components = getDurationComponents(435432)
  t.equal(components[0].value, 5, 'days should be 5')
  t.equal(components[1].value, 0, 'hours should be 0')
  t.equal(components[2].value, 57, 'minutes should be 57')
  t.equal(components[3].value, 12, 'seconds should be 12')
  t.end()
})