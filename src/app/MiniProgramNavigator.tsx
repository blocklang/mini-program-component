import { create, tsx } from "@dojo/framework/core/vdom";
import theme from "@dojo/framework/core/middleware/theme";
import FontAwesomeIcon from "@blocklang/dojo-fontawesome/FontAwesomeIcon";
import * as css from "../theme/default/mini-program-navigator.m.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons/faEllipsisH";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons/faDotCircle";

library.add(faEllipsisH, faDotCircle);

export interface MiniProgramNavigatorProperties {
	title?: string;
}

const factory = create({ theme }).properties<MiniProgramNavigatorProperties>();

export default factory(function MiniProgramNavigator({ properties, middleware: { theme } }) {
	const themedCss = theme.classes(css);
	const { title = "Mini Program" } = properties();
	return (
		<div classes={[theme.variant(), themedCss.root]}>
			<div classes={[css.left]}></div>
			<strong classes={[css.center]}>{title}</strong>
			<div classes={[css.right]}>
				<div classes={[css.capsule]}>
					<span classes={[css.iconMore]}>
						<FontAwesomeIcon icon="ellipsis-h" />
					</span>
					<span classes={[css.iconClose]}>
						<FontAwesomeIcon icon="dot-circle" />
					</span>
				</div>
			</div>
		</div>
	);
});
