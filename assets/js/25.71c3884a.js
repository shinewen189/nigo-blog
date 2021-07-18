(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{493:function(t,s,a){"use strict";a.r(s);var e=a(4),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"变量、作用域和内存问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量、作用域和内存问题"}},[t._v("#")]),t._v(" 变量、作用域和内存问题")]),t._v(" "),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 理解基本类型和引用类型的值")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 理解执行环境")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 理解垃圾收集")])]),t._v(" "),a("h2",{attrs:{id:"_1-1-基本类型和引用类型的值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-基本类型和引用类型的值"}},[t._v("#")]),t._v(" 1.1 基本类型和引用类型的值")]),t._v(" "),a("p",[t._v("基本类型值指的是 简单的数据段，而引用类型值指那些可能由多个值构成的对象。")]),t._v(" "),a("h3",{attrs:{id:"_1-1-1-动态的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-动态的属性"}},[t._v("#")]),t._v(" 1.1.1 动态的属性")]),t._v(" "),a("p",[t._v("对于引用类型的值，我们可以为其添加属性和方法，也可以改变和删除其属性和方法。但是，我们不能给基本类型的值添加属性，尽管这样做不会导致任何错误。")]),t._v(" "),a("h3",{attrs:{id:"_1-1-2-复制变量值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-复制变量值"}},[t._v("#")]),t._v(" 1.1.2 复制变量值")]),t._v(" "),a("p",[a("strong",[t._v("基本类型")]),t._v(":如果从一个变量向另一个变量复制基本类型的值，会在变量对象上创建一个新值，然后把该值复制到为新变量分配的位置上。\n"),a("strong",[t._v("引用类型")]),t._v(":当从一个变量向另一个变量复制引用类型的值时，同样也会将存储在变量对象中的值复制一份放到为新变量分配的空间中。不同的是，这个值的副本实际上是一个指针，而这个指针指向存储在堆中的一个对象。复制操作结束后，两个变量实际上将引用同一个对象。因此，改变其中一个变量，就会影响另一个变量。")]),t._v(" "),a("h3",{attrs:{id:"_1-1-3-传递参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-传递参数"}},[t._v("#")]),t._v(" 1.1.3 传递参数")]),t._v(" "),a("p",[t._v("ECMAScript中所有函数的参数都是按值传递的。"),a("strong",[t._v("访问变量有按值和按引用两种方式，而参数只能按值传递。")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('function setName(obj) { \n    obj.name = "Nicholas"; \n    obj = new Object(); \n    obj.name = "Greg";\n}\nvar person = new Object();\nsetName(person);\nalert(person.name);    //"Nicholas"\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("即使在函数内部修改了参数的值，但原始的引用仍然保持未变。实际上，当在函数内部重写obj时，这个变量引用的就是一个局部对象了。而这个局部对象会在函数执行完毕后立即被销毁。\n"),a("strong",[t._v("可以把ECMAScript函数的参数想象成局部变量。")])]),t._v(" "),a("h3",{attrs:{id:"_1-1-4-检测类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-4-检测类型"}},[t._v("#")]),t._v(" 1.1.4 检测类型")]),t._v(" "),a("p",[t._v('typeof操作符是确定一个变量是字符串、数值、布尔值，还是 undefined 的最佳工具。如果变量的值是一个对象或 null，则typeof操作符会像下面例子中所示的那样返回"object"。')]),t._v(" "),a("p",[t._v("虽然在检测"),a("strong",[t._v("基本数据类型")]),t._v("时 typeof 是非常得力的助手，但在检测"),a("strong",[t._v("引用类型")]),t._v("的值时，这个操作符的 用处不大。")]),t._v(" "),a("p",[t._v("想知对象的类型，ECMAScript提供了instanceof操作符。语法如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("result = variable instanceof constructor\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("根据规定，所有引用类型的值都是 Object 的实例。因此，=="),a("strong",[t._v("在检测一个引用类型值和 Object构造函数时，instanceof操作符始终会返回true")]),t._v("==。当然，如果 =="),a("strong",[t._v("使用instanceof操作符检测基本类型的值，则该操作符始终会返回false")]),t._v("==,因为基本类型不是对象。")]),t._v(" "),a("p",[a("strong",[t._v('使用typeof操作符检测函数时，该操作符会返回"function"')])]),t._v(" "),a("h2",{attrs:{id:"_1-2-执行环境及作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-执行环境及作用域"}},[t._v("#")]),t._v(" 1.2 执行环境及作用域")]),t._v(" "),a("p",[a("strong",[t._v("JavaScript 没有块级作用域")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('if (true) {\n    var color = "blue";\n}\nalert(color);    // "blue"\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("for (var i = 0; i < 10; i++){\n    doSomething(i);\n}\nalert(i);      //10\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"_1-2-1-声明变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-声明变量"}},[t._v("#")]),t._v(" 1.2.1 声明变量")]),t._v(" "),a("p",[t._v("使用 var 声明的变量会自动被添加到最接近的环境中。如果初始化变量时没有使用 var 声明，该变量会自 动被添加到全局环境。")]),t._v(" "),a("p",[t._v("在编写 JavaScript 代码的过程中，不声明而直接初始化变量是一个常见的错误做 法，因为这样可能会导致意外。我们建议在初始化变量之前，一定要先声明，这样就 可以避免类似问题。在严格模式下，初始化未经声明的变量会导致错误。")]),t._v(" "),a("h3",{attrs:{id:"_1-2-2-查询标识符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-查询标识符"}},[t._v("#")]),t._v(" 1.2.2 查询标识符")]),t._v(" "),a("p",[t._v("搜索过程从作用域链的前端开始，向上逐级查询与给定名字匹配的标识符。如果在局部环境中找到 了该标识符，搜索过程停止，变量就绪。如果在局部环境中没有找到该变量名，则继续沿作用域链向上 搜索。搜索过程将一直追溯到全局环境的变量对象。如果在全局环境中也没有找到这个标识符，则意味 着该变量尚未声明。")]),t._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("JavaScript变量可以用来保存两种类型的值:"),a("strong",[t._v("基本类型值和引用类型值")]),t._v("。基本类型的值源自以下5种基本数据类型:"),a("strong",[t._v("Undefined、Null、Boolean、Number、String和Symbol(ES6)")]),t._v("。基本类型值和引用类型值具 有以下特点:")]),t._v(" "),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 基本类型值在内存中占据固定大小的空间，因此被保存在栈内存中;")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 从一个变量向另一个变量复制基本类型的值，会创建这个值的一个副本;")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 引用类型的值是对象，保存在堆内存中;")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 包含引用类型值的变量实际上包含的并不是对象本身，而是一个指向该对象的指针;")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 从一个变量向另一个变量复制引用类型的值，复制的其实是指针，因此两个变量最终都指向同\n一个对象;")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 确定一个值是哪种基本类型可以使用 typeof 操作符，而确定一个值是哪种引用类型可以使用 instanceof 操作符。")])]),t._v(" "),a("p",[t._v("所有变量(包括基本类型和引用类型)都存在于一个执行环境(也称为作用域)当中，这个执 行环境决定了变量的生命周期，以及哪一部分代码可以访问其中的变量。以下是关于执行环境的几点总结:")]),t._v(" "),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 执行环境有全局执行环境(也称为全局环境)和函数执行环境之分;")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 每次进入一个新执行环境，都会创建一个用于搜索变量和函数的作用域链;")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 函数的局部环境不仅有权访问函数作用域中的变量，而且有权访问其包含(父)环境，乃至全\n局环境")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 全局环境只能访问在全局环境中定义的变量和函数，而不能直接访问局部环境中的任何数据;")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 变量的执行环境有助于确定应该何时释放内存。")])])])}),[],!1,null,null,null);s.default=i.exports}}]);