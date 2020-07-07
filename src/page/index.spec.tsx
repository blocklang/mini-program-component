const { describe, it } = intern.getInterface("bdd");
import { tsx } from "@dojo/framework/core/vdom";
import renderer, { assertion, wrap } from "@dojo/framework/testing/renderer";

import Page from ".";

const WrappedRootDiv = wrap("div");
const baseAssertion = assertion(() => <WrappedRootDiv></WrappedRootDiv>);

describe("Page", () => {
	it("Should render using the default properties", () => {
		const r = renderer(() => <Page />);
		// 断言渲染的内容
		r.expect(baseAssertion);
	});
});
