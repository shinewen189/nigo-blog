(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{493:function(t,e,a){"use strict";a.r(e);var s=a(4),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("你可能会在你可能会在文档中碰到一些陌生的概念，本节列出了文档中常见的术语，方便查阅、学习、插件/主题开发之用。")])]),t._v(" "),a("h2",{attrs:{id:"layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[t._v("#")]),t._v(" layout")]),t._v(" "),a("ul",[a("li",[t._v("Access: "),a("code",[t._v("$page.frontmatter.layout")])])]),t._v(" "),a("p",[t._v("当前页面所使用的布局组件名。")]),t._v(" "),a("h2",{attrs:{id:"front-matter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#front-matter"}},[t._v("#")]),t._v(" front matter")]),t._v(" "),a("p",[t._v("任何包含 YAML front matter 的 Markdown 文件都将由 "),a("a",{attrs:{href:"https://github.com/jonschlinkert/gray-matter",target:"_blank",rel:"noopener noreferrer"}},[t._v("gray-matter"),a("OutboundLink")],1),t._v(" 处理。front matter 必须是 markdown 文件中的第一部分，并且必须采用在三点划线之间书写的有效的 YAML。 这是一个基本的例子：")]),t._v(" "),a("div",{staticClass:"language-markdown line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Blogging Like a Hacker\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("US")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("在这些三条虚线之间，你可以设置预定义变量（参见"),a("a",{attrs:{href:"#%E9%A2%84%E5%AE%9A%E4%B9%89%E5%8F%98%E9%87%8F"}},[t._v("下面")]),t._v("），甚至可以创建自己的自定义变量。 然后，您可以使用 "),a("code",[t._v("$frontmatter")]),t._v(" 在页面的其余部分、以及所有的自定义和主题组件访问这些变量。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("在 VuePress 中，Front matter 是 "),a("strong",[t._v("可选的")]),t._v("。通过Front matter可以做很多有用的事情, 比如文章标签、分类、封面图等")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"预定义变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预定义变量"}},[t._v("#")]),t._v(" 预定义变量")]),t._v(" "),a("h3",{attrs:{id:"title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" title")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("h1_title || siteConfig.title")])])]),t._v(" "),a("p",[t._v("当前页面的标题。")]),t._v(" "),a("h3",{attrs:{id:"lang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lang"}},[t._v("#")]),t._v(" lang")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("en-US")])])]),t._v(" "),a("p",[t._v("当前页面的语言。")]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("siteConfig.description")])])]),t._v(" "),a("p",[t._v("当前页面的描述。")]),t._v(" "),a("h3",{attrs:{id:"layout-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layout-2"}},[t._v("#")]),t._v(" layout")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("Layout")])])]),t._v(" "),a("p",[t._v("设置当前页面的布局组件。")]),t._v(" "),a("h3",{attrs:{id:"permalink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permalink"}},[t._v("#")]),t._v(" permalink")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("siteConfig.permalink")])])]),t._v(" "),a("p",[t._v("参考: "),a("RouterLink",{attrs:{to:"/_post/permalinks.html"}},[t._v("Permalinks")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"metatitle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metatitle"}},[t._v("#")]),t._v(" metaTitle")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("`${page.title} | ${siteConfig.title}`")])])]),t._v(" "),a("p",[t._v("重写默认的 meta title。")]),t._v(" "),a("h3",{attrs:{id:"meta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta"}},[t._v("#")]),t._v(" meta")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("array")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("指定额外的要注入的 meta 标签：")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("meta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" description\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hello\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keywords\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" super duper SEO\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content"}},[t._v("#")]),t._v(" content")]),t._v(" "),a("p",[t._v("当前的 .md 文件渲染的内容，可以作为一个独特的全局组件 "),a("code",[t._v("<Content/>")]),t._v(" 来使用.")]),t._v(" "),a("h2",{attrs:{id:"permalink-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permalink-2"}},[t._v("#")]),t._v(" permalink")]),t._v(" "),a("ul",[a("li",[t._v("Access: "),a("code",[t._v("$page.frontmatter.permalink")])])]),t._v(" "),a("p",[t._v("永久链接，更多细节请参考官网文档 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/permalinks.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Permalinks"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"regularpath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regularpath"}},[t._v("#")]),t._v(" regularPath")]),t._v(" "),a("ul",[a("li",[t._v("Access: "),a("code",[t._v("$page.regularPath")])])]),t._v(" "),a("p",[t._v("当前页面基于目录结构生成的 URL。")]),t._v(" "),a("h2",{attrs:{id:"path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[t._v("#")]),t._v(" path")]),t._v(" "),a("ul",[a("li",[t._v("Access: "),a("code",[t._v("$page.path")])])]),t._v(" "),a("p",[t._v("当前页面的实际 URL。在构建期生成路由时，一个页面的 URL 将优先使用 "),a("code",[t._v("permalink")]),t._v("，若不存在则降级到 "),a("code",[t._v("regularPath")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[t._v("#")]),t._v(" headers")]),t._v(" "),a("ul",[a("li",[t._v("Access: "),a("code",[t._v("$page.headers")])])]),t._v(" "),a("p",[t._v("即 "),a("code",[t._v("markdown")]),t._v(" 中那些以一个或多个 "),a("code",[t._v("#")]),t._v(" 定义的标题。")]),t._v(" "),a("h2",{attrs:{id:"siteconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#siteconfig"}},[t._v("#")]),t._v(" siteConfig")]),t._v(" "),a("ul",[a("li",[t._v("Access: "),a("code",[t._v("$site | Context.siteConfig")])])]),t._v(" "),a("p",[t._v("即 "),a("code",[t._v(".vuepress/config.js")]),t._v("，译为 "),a("code",[t._v("站点配置")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"themeconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#themeconfig"}},[t._v("#")]),t._v(" themeConfig")]),t._v(" "),a("ul",[a("li",[t._v("Access: "),a("code",[t._v("$themeConfig | Context.themeConfig")])])]),t._v(" "),a("p",[t._v("即 "),a("code",[t._v(".vuepress/config.js")]),t._v(" 中 "),a("code",[t._v("themeConfig")]),t._v(" 的值，是用户对当前所使用的主题的配置。")]),t._v(" "),a("h2",{attrs:{id:"themepath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#themepath"}},[t._v("#")]),t._v(" themePath")]),t._v(" "),a("ul",[a("li",[t._v("Access: "),a("code",[t._v("Context.themeAPI.theme.path")])])]),t._v(" "),a("p",[t._v("当前使用的主题的所在的绝对路径。")]),t._v(" "),a("h2",{attrs:{id:"themeentry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#themeentry"}},[t._v("#")]),t._v(" themeEntry")]),t._v(" "),a("ul",[a("li",[t._v("Access: "),a("code",[t._v("Context.themeAPI.theme.entry")])])]),t._v(" "),a("p",[t._v("主题的配置文件 "),a("code",[t._v("themePath/index.js")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"parentthemepath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parentthemepath"}},[t._v("#")]),t._v(" parentThemePath")]),t._v(" "),a("ul",[a("li",[t._v("Access: "),a("code",[t._v("Context.themeAPI.parentTheme.path")])])]),t._v(" "),a("p",[t._v("如果当前使用的主题是一个派生主题，那么 "),a("code",[t._v("parentThemePath")]),t._v(" 就是指父主题的所在绝对路径。")]),t._v(" "),a("h2",{attrs:{id:"parentthemeentry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parentthemeentry"}},[t._v("#")]),t._v(" parentThemeEntry")]),t._v(" "),a("ul",[a("li",[t._v("Access: "),a("code",[t._v("Context.themeAPI.parentTheme.entry")])])]),t._v(" "),a("p",[t._v("如果当前使用的主题是一个派生主题，那么 "),a("code",[t._v("parentThemePath")]),t._v(" 就是指父主题的主题的配置文件 "),a("code",[t._v("parentThemePath/index.js")]),t._v("。")])])}),[],!1,null,null,null);e.default=r.exports}}]);