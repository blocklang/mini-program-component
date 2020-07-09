import { tsx, create } from "@dojo/framework/core/vdom";
import theme from "@dojo/framework/core/middleware/theme";
import { Window, TabBar } from "../interfaces";
import SystemStatusbar from "./SystemStatusbar";
import MiniProgramNavigator from "./MiniProgramNavigator";
import * as css from "../theme/default/app.m.css";

// 定义部件的属性
export interface AppProperties {
	window?: Window;
	tabBar?: TabBar;
}

const factory = create({ theme }).properties<AppProperties>();

// 定义部件
export default factory(function App({ properties, children, middleware: { theme } }) {
	const themedCss = theme.classes(css);
	const { window } = properties();
	const styles: any = {};
	styles.backgroundColor = window?.navigationBarBackgroundColor ?? "#000000";

	return (
		<div classes={[theme.variant(), themedCss.root]}>
			<div styles={styles}>
				<SystemStatusbar />
				<MiniProgramNavigator title={window?.navigationBarTitleText} />
			</div>
			{children()}
		</div>
	);
});
