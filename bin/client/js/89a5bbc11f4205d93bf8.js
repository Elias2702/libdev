(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{13:function(e,t,o){"use strict";var n=o(0);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,i(t).apply(this,arguments))}var o,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,n["Component"]),o=t,(r=[{key:"render",value:function(){return n.createElement("div",{className:"modal ".concat(this.props.show)},n.createElement("div",{className:"modal-background"}),n.createElement("div",{className:"modal-card"},n.createElement("header",{className:"modal-card-head"},n.createElement("p",{className:"modal-card-title"},"Delete ".concat(this.props.name)),n.createElement("button",{className:"delete","aria-label":"close",onClick:this.props.closeModal})),n.createElement("section",{className:"modal-card-body"},"Are you sure you want to delete :",n.createElement("br",null),n.createElement("strong",{className:"delete-book-title"},n.createElement("p",null," ","".concat(this.props.title)," ")," ")),n.createElement("footer",{className:"modal-card-foot"},n.createElement("form",{onSubmit:this.props.delete},n.createElement("button",{className:"secondary-button",type:"submit",onClick:this.props.closeModal},"Delete")),n.createElement("button",{className:"submit-button","aria-label":"close",onClick:this.props.closeModal},"Cancel"))))}}])&&l(o.prototype,r),s&&l(o,s),t}();t.a=s},40:function(e,t,o){"use strict";var n=o(0),r=o(13),l=o(2),a=o.n(l);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){function t(e){var o,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=s(t).call(this,e),(o=!r||"object"!==i(r)&&"function"!=typeof r?p(n):r).handleDelete=function(e){e.preventDefault(),a.a.delete("http://localhost/api/books/".concat(o.props.bookid)).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},o.state={showmodal:""},o.handleClick=o.handleClick.bind(p(p(o))),o.handleClose=o.handleClose.bind(p(p(o))),o.handleDelete=o.handleDelete.bind(p(p(o))),o}var o,l,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,n["Component"]),o=t,(l=[{key:"handleClick",value:function(){this.setState({showModal:"is-active"})}},{key:"handleClose",value:function(){this.setState({showModal:""})}},{key:"render",value:function(){var e=this.props.book,t=this.props.ebook;return n.createElement("tr",null,n.createElement("th",null,this.props.title),n.createElement("td",null,this.props.author),n.createElement("td",null,this.props.isbn),n.createElement("td",null,this.props.language),n.createElement("td",null,this.props.owner),n.createElement("td",null,e?"Yes":"No"),n.createElement("td",null,t?"Yes":"No"),n.createElement("td",null,n.createElement("button",{className:"secondary-button"},"Edit"),n.createElement("button",{className:"selected-button",onClick:this.handleClick},"Delete")),n.createElement(r.a,{name:"a book",closeModal:this.handleClose,show:this.state.showModal,title:this.props.title,delete:this.handleDelete}))}}])&&c(o.prototype,l),f&&c(o,f),t}();t.a=f},50:function(e,t,o){"use strict";var n=o(0),r=o(51),l=o(12),a=o.n(l),i=o(2),c=o.n(i);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){function t(e){var o,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(o=!(r=p(t).call(this,e))||"object"!==s(r)&&"function"!=typeof r?h(n):r).state={showModal:"",thumbnail:a.a},o.handleClick=o.handleClick.bind(h(h(o))),o.handleClose=o.handleClose.bind(h(h(o))),o}var o,l,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,n["Component"]),o=t,(l=[{key:"componentDidMount",value:function(){var e=this;c.a.get("https://www.googleapis.com/books/v1/volumes?q=isbn:".concat(this.props.isbn)).then(function(t){var o=t.data.items[0].volumeInfo.imageLinks.thumbnail;e.setState({thumbnail:o})})}},{key:"handleClick",value:function(){this.setState({showModal:"is-active"})}},{key:"handleClose",value:function(){this.setState({showModal:""})}},{key:"render",value:function(){return n.createElement("div",{id:"bookCard"},n.createElement("ul",null,n.createElement("h1",{id:"bookCardHeader"},"".concat(this.props.title)),n.createElement("li",null,n.createElement("img",{src:this.state.thumbnail,id:"cardImage",onClick:this.handleClick})),n.createElement("li",null,"Author : ".concat(this.props.author)),n.createElement("li",null,"Language : ".concat(this.props.language)),n.createElement("li",{id:"bookCardFooter"}," ",n.createElement(r.a,{thumbnail:this.state.thumbnail,closeModal:this.handleClose,show:this.state.showModal,index:this.props.index,key:this.props._id,id:this.props.id,title:this.props.title,author:this.props.author,language:this.props.language,owner:this.props.owner,summary:this.props.summary}))))}}])&&u(o.prototype,l),i&&u(o,i),t}();t.a=m}}]);