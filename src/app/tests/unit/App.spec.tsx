const { describe, it } = intern.getInterface("bdd");
import { tsx } from "@dojo/framework/core/vdom";
import renderer, { assertion, wrap } from "@dojo/framework/testing/renderer";

import App from "../..";
import SystemStatusbar from "../../SystemStatusbar";
import MiniProgramNavigator from "../../MiniProgramNavigator";

const WrappedRootDiv = wrap("div");
const baseAssertion = assertion(() => (
	<WrappedRootDiv>
		<SystemStatusbar />
		<MiniProgramNavigator />
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
});
