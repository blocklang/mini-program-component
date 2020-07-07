import { tsx, create } from "@dojo/framework/core/vdom";

// 定义部件的属性
export interface AppProperties {}

const factory = create().properties<AppProperties>();

// 定义部件
export default factory(function App({ properties }) {
	const {} = properties();

	return <div></div>;
});
