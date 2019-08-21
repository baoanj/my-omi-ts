import { WeElement, h, tag } from 'omi'

interface Props {
	msg: string
	onAbc: (evt: CustomEvent) => void
}

const tagName = 'hello-omi'
declare global {
	namespace JSX {
		interface IntrinsicElements {
			[tagName]: Omi.Props & Props
		}
	}
}

@tag(tagName)
export default class extends WeElement<Props> {
	static css = `div {
      color: red;
      cursor: pointer;
    }`

	onClick = (evt: Event) => {
		// trigger CustomEvent
		this.fire('abc', { name: 'dntzhang & f & xcatliu', age: 12 })
		evt.stopPropagation()
	}

	render() {
		return (
			<div onClick={this.onClick}>
				<div>	Hello {this.props.msg} Click Me!</div>
			</div>
		)
	}
}