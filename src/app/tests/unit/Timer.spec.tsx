const { describe, it, beforeEach, afterEach } = intern.getInterface("bdd");
import { tsx } from "@dojo/framework/core/vdom";
import renderer, { assertion } from "@dojo/framework/testing/renderer";
import * as sinon from "sinon";

import Timer from "../../Timer";

let clock: sinon.SinonFakeTimers;

describe("Timer", () => {
	beforeEach(() => {
		const date = new Date(2020, 1, 2, 3, 4, 5);
		clock = sinon.useFakeTimers(date.getTime());
	});

	afterEach(() => {
		clock.restore();
	});

	it("分为一位数时，在前面补上0", () => {
		const baseAssertion = assertion(() => <virtual>3:04</virtual>);
		const r = renderer(() => <Timer />);
		r.expect(baseAssertion);
	});

	it("分为两位数", () => {
		clock.tick((6 + 1) * 1000 * 60);
		const baseAssertion = assertion(() => <virtual>3:11</virtual>);
		const r = renderer(() => <Timer />);
		r.expect(baseAssertion);
	});
});
