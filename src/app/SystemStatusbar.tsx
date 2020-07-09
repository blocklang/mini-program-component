import { create, tsx } from "@dojo/framework/core/vdom";
import theme from "@dojo/framework/core/middleware/theme";
import * as css from "../theme/default/system-statusbar.m.css";

export interface SystemStatusbarProperties {}

const factory = create({ theme }).properties<SystemStatusbarProperties>();

export default factory(function SystemStatusbar({ properties, middleware: { theme } }) {
	const themedCss = theme.classes(css);
	const {} = properties();
	return <div classes={[theme.variant(), themedCss.root]}>system status bar</div>;
});
