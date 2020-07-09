import { create, tsx } from "@dojo/framework/core/vdom";
import theme from "@dojo/framework/core/middleware/theme";
import Timer from "./Timer";
import * as css from "../theme/default/system-statusbar.m.css";
import FontAwesomeIcon from "@blocklang/dojo-fontawesome/FontAwesomeIcon";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSignal } from "@fortawesome/free-solid-svg-icons/faSignal";
import { faWifi } from "@fortawesome/free-solid-svg-icons/faWifi";
import { faBatteryFull } from "@fortawesome/free-solid-svg-icons/faBatteryFull";

library.add(faSignal, faWifi, faBatteryFull);

const factory = create({ theme });

export default factory(function SystemStatusbar({ middleware: { theme } }) {
	const themedCss = theme.classes(css);

	return (
		<div classes={[theme.variant(), themedCss.root]}>
			<div classes={[themedCss.left]}>
				<FontAwesomeIcon icon="signal" />
				<span classes={[themedCss.title]}>BlockLang</span>
				<FontAwesomeIcon icon="wifi" />
			</div>
			<div classes={[themedCss.center]}>
				<Timer />
			</div>
			<div classes={[themedCss.right]}>
				<span classes={[themedCss.battery]}>100%</span>
				<FontAwesomeIcon icon="battery-full" />
			</div>
		</div>
	);
});
