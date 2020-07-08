import { create, tsx } from "@dojo/framework/core/vdom";
import Example from "../../Example";
import App from "../../../../app";

const factory = create();

export default factory(function Basic() {
	return (
		<Example>
			<App />
		</Example>
	);
});
