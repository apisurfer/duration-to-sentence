import {SECOND, MINUTE, HOUR, DAY} from './constants'
import {DurationComponents} from './types'
import Unit from './unit'

export default function getDurationComponents(durationInSeconds: number): DurationComponents {
  const seconds = durationInSeconds % MINUTE
  const minutesInSeconds = (durationInSeconds - seconds) % HOUR
  const hoursInSeconds = (durationInSeconds - seconds - minutesInSeconds) % DAY
  const daysInSeconds = (durationInSeconds - seconds - minutesInSeconds - hoursInSeconds)

  return [
    new Unit('days', Math.floor(daysInSeconds / DAY)),
    new Unit('hours', Math.floor(hoursInSeconds / HOUR)),
    new Unit('minutes', Math.floor(minutesInSeconds / MINUTE)),
    new Unit('seconds', seconds)
  ]
}
