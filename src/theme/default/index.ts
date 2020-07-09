import * as app from "./app.m.css";
import * as systemStatusbar from "./system-statusbar.m.css";
import * as defaultVariant from "./variants/default.m.css";

export default {
	theme: {
		"mini-program-component/app": app,
		"mini-program-component/system-statusbar": systemStatusbar,
	},
	variants: {
		default: defaultVariant,
	},
};
