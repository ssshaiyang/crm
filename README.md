
#E+ CRM系统前端项目开发仓库。

-------

## 浏览器支持

本项目支持IE11+,Firefox,Chrome和Safari,为了更好的用户体验，建议使用Chrome等先进的浏览器

## 目录结构

 - src 代码存放目录
 	- actions/ antions存放目录，每个actions有着一个store和一个reducers与对应的component，文件名相同，文件夹下对应的目录结构相同，方便查找
	- components/ 组件存放目录，子文件夹的名称为对应的页面名，可继续分组件的组件
	- reducers/ reducer存放目录，目录结构与actions文件夹相同，在reducer.js中统一export，方便使用
	- stores/ store存放目录，目录结构与actions文件夹相同，在store.js中统一export
	- utils/ 通用函数，接口与配置文件等
		- interfaces/ 接口存放目录，一个模块一个文件，在utils/interface.js中统一export
	- index.jsx 系统主页面
	- app.jsx 系统入口文件，路由主页面与登录注册页面
	- reducer.js reducer统一export文件
	- store.js store统一export文件
	- template.js 动态生成html的模板文件
- static/ 代码打包后的存放目录
 - iconfont/ icon图标本地化的资源存放目录
 - imgs/ 本地图片资源目录
 - index.html 动态生成的HTML文件
 - index.css 样式文件
 - main.css 打包后提取的样式文件
 - main.js 打包后的js文件
- test/ 测试文件存放目录

##流程

以工作页面的审批二级页面的获取审批列表为例

--------

 1. 在containers目录新建work.jsx文件作为work目录的入口文件(新建页面)
 2. 在components中新建work文件夹，在其中写work页面中所需的组件，同时，头部导航栏是一个通用的组件，所以卸载components/common/中
 3. 在components/work文件夹中新建Approval.jsx文件与approval文件夹作为审批的二级页面入口与组件文件夹
 4. 在actions,stores,reducers的work文件夹下分别新建approval.js
 5. 在approval的componentWillMount中调用action中完成的actionCreater,actionCreater返回一个函数：该函数调用了interface中的接口，将返回的审批列表的数据作为payload中的data来dispatch
 6. 因为使用中间件，dispatch可以接受函数作为参数，dispatch后reducer通过type来更新store，刷新store中的data值，页面刷新，审批列表刷新
 7. 以同种方式，完成approval的各种组件，如分页等等，在actions,stores,reducers文件夹中的work/approval文件夹新建对应的文件来管理状态

## iconfont本地化

/static/iconfont为现在的iconfont本地目录，在/src/utils/custom.less中修改iconfont地址，优先使用本地icon,若没有则使用阿里的cdn，本地的icon编码可能会覆盖cdn中的编码，如要修改优先级，请修改`~antd/lib/style/mixins/iconfont.less`中的

	&:before {
    display: block;
    font-family: "anticon_user","anticon"!important;
  }


  同时把
  .iconfont-font(@content) {
  font-family: "anticon_user","anticon";
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: @content;
}
  中的font-family改成上面对应的优先级

  例如：&:before中的font-family是"anticon_user" 那么在.iconfont-font中的font-family也为"anticon_user",同时"anticon_user"和"anticon"只能选择一个

其中`font-family`中的名称的排序顺序即为优先级