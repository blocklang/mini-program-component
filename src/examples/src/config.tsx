import dojoTheme from "@dojo/widgets/theme/dojo";
const tests = (require as any).context("./", true, /\.spec\.ts(x)?$/);
import BasicApp from "./widgets/app/Basic";

export default {
	name: "小程序组件库",
	home: "README.md",
	tests,
	themes: [{ label: "dojo", theme: dojoTheme }],
	readmePath: (widget: string) => `src/${widget}/README.md`,
	widgetPath: (widget: string, filename: string) => `src/${widget}/${filename || "index"}.tsx`,
	examplePath: (widget: string, filename: string) => `src/examples/src/widgets/${widget}/${filename || "index"}.tsx`,
	widgets: {
		app: {
			filename: "index",
			overview: {
				example: {
					filename: "Basic",
					module: BasicApp,
				},
			},
		},
	},
};
