import { WeElement, h, tag } from 'omi'
import '@omim/core/text-field'
import './hello-omi'
import * as css from './_index.less' // 命名必须为 _index 才有效，不知为啥
import * as logo from '@/assets/svg/logo.svg'

interface Props {
	name: string
}

interface Data {
	abc: string
}

const tagName = 'my-home'
declare global {
	namespace JSX {
		interface IntrinsicElements {
			[tagName]: Omi.Props & Props
		}
	}
}

@tag(tagName)
export default class extends WeElement<Props, Data> {

	static css = css

	textFieldCSS = `
		.mdc-text-field,
		.mdc-text-field::before {
			background-color: #fff !important;
		}
	`

	onAbc = (evt: CustomEvent) => {
		this.data.abc = ` by ${evt.detail.name}`
		this.update()
	}

	render() {
		return (
			<div class="app">
				<header class="app-header">
					<img
						src={logo}
						class="app-logo"
						alt="logo"
					/>
					<h1 class="app-title">Welcome to {this.props.name}</h1>
				</header>
				{this.data.abc}
				<hello-omi onAbc={this.onAbc} msg="Omi"></hello-omi>

				<m-text-field label='test' css={this.textFieldCSS}></m-text-field>
			</div>
		)
	}
}
