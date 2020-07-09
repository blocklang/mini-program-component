const { describe, it } = intern.getInterface("bdd");
import { tsx } from "@dojo/framework/core/vdom";
import renderer, { assertion, wrap } from "@dojo/framework/testing/renderer";

import App from "../..";
import SystemStatusbar from "../../SystemStatusbar";
import MiniProgramNavigator from "../../MiniProgramNavigator";
import * as css from "../../../theme/default/app.m.css";

const WrappedRootDiv = wrap("div");
const WeappedHeaderContainerDiv = wrap("div");
const WrappedMiniProgramNavigator = wrap(MiniProgramNavigator);
const baseAssertion = assertion(() => (
	<WrappedRootDiv classes={[null, css.root]}>
		<WeappedHeaderContainerDiv styles={{ backgroundColor: "#000000" }}>
			<SystemStatusbar />
			<WrappedMiniProgramNavigator title={undefined} />
		</WeappedHeaderContainerDiv>
	</WrappedRootDiv>
));

describe("App", () => {
	it("Should render using the default properties", () => {
		const r = renderer(() => <App />);
		// 断言渲染的内容
		r.expect(baseAssertion);
	});

	it("children", () => {
		const childrenAssertion = baseAssertion.append(WrappedRootDiv, () => ["children"]);
		const r = renderer(() => <App>children</App>);
		r.expect(childrenAssertion);
	});

	it("window.navigationBarTitleText", () => {
		const window = { navigationBarTitleText: "custom title" };
		const windowTitleAssertion = baseAssertion.setProperty(WrappedMiniProgramNavigator, "title", "custom title");
		const r = renderer(() => <App window={window} />);
		r.expect(windowTitleAssertion);
	});

	it("window.navigationBarBackgroundColor", () => {
		const window = { navigationBarBackgroundColor: "#ffffff" };
		const windowTitleAssertion = baseAssertion.setProperty(WeappedHeaderContainerDiv, "styles", {
			backgroundColor: "#ffffff",
		});
		const r = renderer(() => <App window={window} />);
		r.expect(windowTitleAssertion);
	});
});
