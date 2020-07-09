const { describe, it } = intern.getInterface("bdd");
import { tsx } from "@dojo/framework/core/vdom";
import renderer, { assertion, wrap } from "@dojo/framework/testing/renderer";

import App from "../../../app";
import Page from "../../index";

const WrappedApp = wrap(App);
const WrappedDiv = wrap("div");
const baseAssertion = assertion(() => (
	<WrappedApp window={{ navigationBarBackgroundColor: "#000000", navigationBarTitleText: undefined }}>
		<WrappedDiv></WrappedDiv>
	</WrappedApp>
));

describe("Page", () => {
	it("Should render using the default properties", () => {
		const r = renderer(() => <Page />);
		r.expect(baseAssertion);
	});

	it("children", () => {
		const childrenAssertion = baseAssertion.setChildren(WrappedDiv, () => ["children"]);
		const r = renderer(() => <Page>children</Page>);
		r.expect(childrenAssertion);
	});

	it("navigationBarBackgroundColor", () => {
		const propertyAssertion = baseAssertion.setProperties(WrappedApp, {
			window: { navigationBarBackgroundColor: "#ffffff", navigationBarTitleText: undefined },
		});
		const r = renderer(() => <Page navigationBarBackgroundColor="#ffffff" />);
		r.expect(propertyAssertion);
	});

	it("navigationBarTitleText", () => {
		const propertyAssertion = baseAssertion.setProperties(WrappedApp, {
			window: { navigationBarBackgroundColor: "#000000", navigationBarTitleText: "new title" },
		});
		const r = renderer(() => <Page navigationBarTitleText="new title" />);
		r.expect(propertyAssertion);
	});
});
