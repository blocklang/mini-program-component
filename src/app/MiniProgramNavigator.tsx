import { create, tsx } from "@dojo/framework/core/vdom";

export interface MiniProgramNavigatorProperties {}

const factory = create().properties<MiniProgramNavigatorProperties>();

export default factory(function MiniProgramNavigator({ properties }) {
	const {} = properties();
	return <div>navigator</div>;
});
