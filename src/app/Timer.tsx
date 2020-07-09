import { create, tsx, invalidator, destroy } from "@dojo/framework/core/vdom";
import icache from "@dojo/framework/core/middleware/icache";

const factory = create({ invalidator, destroy, icache });

export default factory(function Timer({ middleware: { invalidator, destroy, icache } }) {
	const intervalId = icache.getOrSet("intervalId", () => setInterval(() => invalidator(), 1000 * 60));
	destroy(() => clearInterval(intervalId));
	const now = new Date();
	return (
		<virtual>{`${now.getHours()}:${now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()}`}</virtual>
	);
});
