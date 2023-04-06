"use strict";
exports.id = 371;
exports.ids = [371];
exports.modules = {

/***/ 2371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/navbar.js


const Navbar = ()=>/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar navbar-expand-lg bg-custom-primary navbar-dark fixed-top",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    className: "navbar-brand",
                    href: "/",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: "d-flex flex-row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: ">"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "underline",
                                children: "_"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarNav",
                    "aria-controls": "navbarNav",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "navbar-toggler-icon"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "collapse navbar-collapse justify-content-end",
                    id: "navbarNav",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "navbar-nav",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "#skils",
                                    className: "nav-link",
                                    children: "Skills"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "#experience",
                                    className: "nav-link",
                                    children: "Experience"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "#portfolio",
                                    className: "nav-link",
                                    children: "Portfolio"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "https://github.com/juampymdd",
                                    className: "nav-link",
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "d-flex flex-row gap-1 align-items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                alt: "githubIcon",
                                                src: "/images/github.svg",
                                                style: {
                                                    width: "18px",
                                                    height: "auto"
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Github"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
/* harmony default export */ const navbar = (Navbar);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/layout.js



const Layout = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "container-fluid p-4",
                children: children
            })
        ]
    });
/* harmony default export */ const layout = (Layout);


/***/ })

};
;