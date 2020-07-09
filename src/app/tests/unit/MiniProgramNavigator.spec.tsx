const { describe, it } = intern.getInterface("bdd");
import { tsx } from "@dojo/framework/core/vdom";
import renderer, { assertion, wrap } from "@dojo/framework/testing/renderer";
import FontAwesomeIcon from "@blocklang/dojo-fontawesome/FontAwesomeIcon";

import MiniProgramNavigator from "../../MiniProgramNavigator";
import * as css from "../../../theme/default/mini-program-navigator.m.css";

const WrappedTitleStrong = wrap("strong");

const baseAssertion = assertion(() => (
	<div classes={[null, css.root]}>
		<div classes={[css.left]}></div>
		<WrappedTitleStrong classes={[css.center]}>Mini Program</WrappedTitleStrong>
		<div classes={[css.right]}>
			<div classes={[css.capsule]}>
				<span classes={[css.iconMore]}>
					<FontAwesomeIcon icon="ellipsis-h" />
				</span>
				<span classes={[css.iconClose]}>
					<FontAwesomeIcon icon="dot-circle" />
				</span>
			</div>
		</div>
	</div>
));

describe("MiniProgramNavigator", () => {
	it("Should render using the default properties", () => {
		const r = renderer(() => <MiniProgramNavigator />);
		r.expect(baseAssertion);
	});

	it("title property", () => {
		const titlePropAssertion = baseAssertion.replaceChildren(WrappedTitleStrong, () => ["foo"]);
		const r = renderer(() => <MiniProgramNavigator title="foo" />);
		r.expect(titlePropAssertion);
	});
});
