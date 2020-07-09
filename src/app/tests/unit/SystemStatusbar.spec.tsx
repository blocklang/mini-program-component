const { describe, it } = intern.getInterface("bdd");
import { tsx } from "@dojo/framework/core/vdom";
import renderer, { assertion, wrap } from "@dojo/framework/testing/renderer";
import FontAwesomeIcon from "@blocklang/dojo-fontawesome/FontAwesomeIcon";

import SystemStatusbar from "../../SystemStatusbar";
import * as css from "../../../theme/default/system-statusbar.m.css";
import Timer from "../../Timer";

const WrappedRootDiv = wrap("div");
const WrappedTitleSpan = wrap("span");

const baseAssertion = assertion(() => (
	<WrappedRootDiv classes={[null, css.root]}>
		<div classes={[css.left]}>
			<FontAwesomeIcon icon="signal" />
			<WrappedTitleSpan classes={[css.title]}>BlockLang</WrappedTitleSpan>
			<FontAwesomeIcon icon="wifi" />
		</div>
		<div classes={[css.center]}>
			<Timer />
		</div>
		<div classes={[css.right]}>
			<span classes={[css.battery]}>100%</span>
			<FontAwesomeIcon icon="battery-full" />
		</div>
	</WrappedRootDiv>
));

describe("SystemStatusbar", () => {
	it("Should render using the default properties", () => {
		const r = renderer(() => <SystemStatusbar />);
		// 断言渲染的内容
		r.expect(baseAssertion);
	});
});
