const { describe, it } = intern.getInterface("bdd");
import { tsx } from "@dojo/framework/core/vdom";
import renderer, { assertion, wrap } from "@dojo/framework/testing/renderer";
import { Window } from "../../../interfaces";

import App from "../..";
import SystemStatusbar from "../../SystemStatusbar";
import MiniProgramNavigator from "../../MiniProgramNavigator";

const WrappedRootDiv = wrap("div");
const WrappedMiniProgramNavigator = wrap(MiniProgramNavigator);
const baseAssertion = assertion(() => (
	<WrappedRootDiv>
		<SystemStatusbar />
		<WrappedMiniProgramNavigator title={undefined} />
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
});
