import { tsx, create } from "@dojo/framework/core/vdom";
import { Window, TabBar } from "../interfaces";
import SystemStatusBar from "./SystemStatusBar";
import MiniProgramNavigator from "./MiniProgramNavigator";

// 定义部件的属性
export interface AppProperties {
	window?: Window;
	tabBar?: TabBar;
}

const factory = create().properties<AppProperties>();

// 定义部件
export default factory(function App({ children }) {
	return (
		<div>
			<SystemStatusBar />
			<MiniProgramNavigator />
			{children()}
		</div>
	);
});
