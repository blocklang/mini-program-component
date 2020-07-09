import { tsx, create } from "@dojo/framework/core/vdom";
import App from "../app";
import { Window } from "../interfaces";
// 定义部件的属性
export interface PageProperties extends Window {}

const factory = create().properties<PageProperties>();

// 定义部件
export default factory(function Page({ children, properties }) {
	const { navigationBarBackgroundColor = "#000000", navigationBarTitleText } = properties();
	const window = { navigationBarBackgroundColor, navigationBarTitleText };
	return (
		<App window={window}>
			<div>{children()}</div>
		</App>
	);
});
