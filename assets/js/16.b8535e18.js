(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{459:function(t,r,e){"use strict";var n=e(2),o=e(3),a=e(61);n({target:"Array",stat:!0,forced:o((function(){function t(){}return!(Array.of.call(t)instanceof t)}))},{of:function(){for(var t=0,r=arguments.length,e=new("function"==typeof this?this:Array)(r);r>t;)a(e,t,arguments[t++]);return e.length=r,e}})},484:function(t,r,e){"use strict";e.r(r);e(26),e(459),e(34),e(125),e(126),e(86);var n={name:"RelatedPosts",props:{relatedType:{type:String,default:"category"}},computed:{list:function(){var t=this;return this.$site.pages.filter((function(r){return"post"===r.pid&&(!r.frontmatter.excludeRelatedPost&&t.isRelatedPost(r))}))}},methods:{isRelatedPost:function(t){var r,e=this;return"category"===e.relatedType&&(r=["category","categories"]),"tag"===e.relatedType&&(r=["tag","tags"]),Array.of((function(){if("string"==typeof e.$frontmatter[r[0]]&&"string"==typeof t.frontmatter[r[0]])return e.$frontmatter[r[0]]===t.frontmatter[r[0]]}),(function(){if(Array.isArray(t.frontmatter[r[1]]))return t.frontmatter[r[1]].includes(e.$frontmatter[r[0]])}),(function(){if(Array.isArray(e.$frontmatter[r[1]]))return e.$frontmatter[r[1]].includes(t.frontmatter[r[0]])}),(function(){if(Array.isArray(t.frontmatter[r[1]])&&Array.isArray(e.$frontmatter[r[1]]))return e.$frontmatter[r[1]].some((function(e){return t.frontmatter[r[1]].includes(e)}))})).some((function(t){return t()}))}}},o=e(4),a=Object(o.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ul",t._l(t.list,(function(r){return e("li",{key:r.key},[e("router-link",{attrs:{to:r.path}},[t._v(t._s(r.title))])],1)})),0)}),[],!1,null,null,null);r.default=a.exports}}]);