const { describe, it } = intern.getInterface("bdd");
import { tsx } from "@dojo/framework/core/vdom";
import renderer, { assertion, wrap } from "@dojo/framework/testing/renderer";

import SystemStatusbar from "../../SystemStatusbar";

const baseAssertion = assertion(() => <div></div>);

describe("App", () => {
	it("Should render using the default properties", () => {
		const r = renderer(() => <SystemStatusbar />);
		// 断言渲染的内容
		r.expect(baseAssertion);
	});
});
