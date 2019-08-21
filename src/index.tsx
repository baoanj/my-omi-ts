import * as router from 'omi-router'
import { WeElement, render, h, define, tag } from 'omi'
import './index.css'
import './pages/home/home'
import './pages/learn-ts/learn'

const route = router.default

interface Data {
	tag: string,
	params: object
}

@tag('my-app')
export default class extends WeElement<null, Data> {

	static observe = true

	install() {

    route('/', () => {
      this.data.tag = 'my-home'
    })

    route('/learn/:lang', (evt) => {
			this.data.tag = 'learn-ts'
			this.data.params = evt.params
    })

    route('*', () => {
      console.log('not found')
    })

    route.before = (evt) => {
      console.log('before')
      //prevent route when return false
      //return false
    }

    route.after = (evt) => {
      console.log('after')
    }
  }

	render() {
		return (
			<div class="app">
				<div>
					<a href="#/">Home</a>
					<span> </span>
					<a href="#/learn/ts">Learn</a>
				</div>
				<div>
					<this.data.tag />
				</div>
			</div>
		)
	}
}

render(<my-app></my-app>, '#root')
