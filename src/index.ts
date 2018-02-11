import {DurationComponents} from './types'
import getDurationComponents from './get-duration-components'

export default function durationToSentence(durationInSeconds: number, shortOutput?: boolean) {
  function generateSentence(components: DurationComponents, out = '') {
    if (components && components.length) {
      const durationUnit = components.shift()

      if (durationUnit.value) {
        out += `${durationUnit.value}${shortOutput ? durationUnit.name[0] : durationUnit.name}`

        if (components.length) {
          out += ', ';
        }
      }

      out = generateSentence(components, out)
    }

    return out
  }

  return generateSentence(getDurationComponents(durationInSeconds))
}
