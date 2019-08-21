import { WeElement, h, tag } from 'omi'
import * as router from 'omi-router'

const route = router.default

interface Data {
	abc: string
}

@tag('learn-ts')
export default class extends WeElement<null, Data> {
	static css = `div {
      color: red;
      cursor: pointer;
    }`

	render() {
		return (
      <div>Learn {route.params.lang}</div>
    )
	}
}