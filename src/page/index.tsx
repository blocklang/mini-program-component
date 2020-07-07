import { tsx, create } from "@dojo/framework/core/vdom";

// 定义部件的属性
export interface PageProperties {}

const factory = create().properties<PageProperties>();

// 定义部件
export default factory(function Page({ properties }) {
	const {} = properties();

	return <div></div>;
});
