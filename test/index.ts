import durationToSentence from '../src/index'
import {test} from 'tape'

test('sentence create long form 435432s', t => {
  const sentence = durationToSentence(435432)
  t.equal(sentence, '5days, 57minutes, 12seconds')
  t.end()
})

test('sentence create short form 435432s', t => {
  const sentence = durationToSentence(435432, true)
  t.equal(sentence, '5d, 57m, 12s')
  t.end()
})
