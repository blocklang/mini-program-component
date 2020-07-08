import { tsx, create } from "@dojo/framework/core/vdom";
import { Window, TabBar } from "../interfaces";

// 定义部件的属性
export interface AppProperties {
	window?: Window;
	tabBar?: TabBar;
}

const factory = create().properties<AppProperties>();

// 定义部件
export default factory(function App({ properties }) {
	const {} = properties();

	return <div>app app</div>;
});
