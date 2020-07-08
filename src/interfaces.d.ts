export type HexColor = string;

// https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#window
export interface Window {
	/**
	 * 导航栏背景颜色，如 #000000
	 */
	navigationBarBackgroundColor: HexColor;
	/**
	 * 导航栏标题颜色，仅支持 black / white
	 */
	navigationBarTextStyle: string;
	/**
	 * 导航栏标题文字内容
	 */
	navigationBarTitleText: string;
	/**
	 * 导航栏样式，仅支持以下值：
	 * default 默认样式
	 * custom 自定义导航栏，只保留右上角胶囊按钮。
	 * 参见注 2。
	 */
	navigationStyle: string;
	/**
	 * 窗口的背景色
	 */
	backgroundColor: HexColor;
	/**
	 * 下拉 loading 的样式，仅支持 dark / light
	 */
	backgroundTextStyle: string;
	/**
	 * 顶部窗口的背景色，仅 iOS 支持
	 */
	backgroundColorTop: string;
	/**
	 * 底部窗口的背景色，仅 iOS 支持
	 */
	backgroundColorBottom: string;
	/**
	 * 是否开启全局的下拉刷新。
	 * 详见 [Page.onPullDownRefresh](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onpulldownrefresh)
	 */
	enablePullDownRefresh: boolean;
	/**
	 * 页面上拉触底事件触发时距页面底部距离，单位为 px。
	 * 详见 [Page.onReachBottom](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onreachbottom)
	 */
	onReachBottomDistance: number;
	/**
	 * 屏幕旋转设置，支持 auto / portrait / landscape
	 * 详见 [响应显示区域变化](https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html)
	 */
	pageOrientation: string;
}

export interface TabBar {
	/**
	 * tab 上的文字默认颜色，仅支持十六进制颜色
	 */
	color: HexColor;
	/**
	 * tab 上的文字选中时的颜色，仅支持十六进制颜色
	 */
	selectedColor: HexColor;
	/**
	 * tab 的背景色，仅支持十六进制颜色
	 */
	backgroundColor: HexColor;
	/**
	 * tabbar 上边框的颜色， 仅支持 black / white
	 */
	borderStyle: string;
	/**
	 * tab 的列表，详见 list 属性说明，最少 2 个、最多 5 个 tab
	 */
	list: TabBarItem[];
	/**
	 * tabBar 的位置，仅支持 bottom / top
	 */
	position: string;
	/**
	 * 自定义 tabBar，见[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)
	 */
	custom: boolean;
}

export interface TabBarItem {
	/**
	 * 页面路径，必须在 pages 中先定义
	 */
	pagePath: string;
	/**
	 * tab 上按钮文字
	 */
	text: string;
	/**
	 * 图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。
	 * **当 position 为 top 时，不显示 icon。**
	 */
	iconPath: string;
	/**
	 * 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。
	 * **当 position 为 top 时，不显示 icon。**
	 */
	selectedIconPath: string;
}
