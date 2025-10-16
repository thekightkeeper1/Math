[
    // Text mode
    {trigger: "mk", replacement: "$$0$", options: "tA"},
    {trigger: "dm", replacement: "$$\n$0\n$$", options: "tAw"},
    {trigger: "([a-zA-Z])mk", replacement: "$[[0]]$", options: "rtAw"},
    {trigger: /([^'])\b([B-HJ-Zb-z])\b([\n\s.,?!:'])/, replacement: "[[0]]$[[1]]$[[2]]", options: "tA"},


    // operators
    {
        trigger: "^",
        replacement: "^{$0}$1",
        options: "mA"
    },

    // Diffeq
    {
        trigger: "2deq",
        replacement: "${1:a}y'' + ${2:b}y' + ${3:c}y = ${4:f(t)}",
        options: "mA"
    },


    // Trig
    // Trigonometry
    {trigger: /([^\\])(arcsin|sin|arccos|cos|arctan|tan|csc|sec|cot)/, replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before trig funcs"},

    {trigger: /\\(arcsin|sin|arccos|cos|arctan|tan|csc|sec|cot)([A-Za-gi-z])/,
        replacement: "\\[[0]] [[1]]", options: "rmA",
        description: "Add space after trig funcs. Skips letter h to allow sinh, cosh, etc."},

    {trigger: /\\(sinh|cosh|tanh|coth)([A-Za-z])/,
        replacement: "\\[[0]] [[1]]", options: "rmA",
        description: "Add space after hyperbolic trig funcs"},


    // Greek letters
    {trigger: "@a", replacement: "\\alpha", options: "mA"},
    {trigger: "@b", replacement: "\\beta", options: "mA"},
    {trigger: "@g", replacement: "\\gamma", options: "mA"},
    {trigger: "@G", replacement: "\\Gamma", options: "mA"},
    {trigger: "@d", replacement: "\\delta", options: "mA"},
    {trigger: "@D", replacement: "\\Delta", options: "mA"},
    {trigger: "@e", replacement: "\\epsilon", options: "mA"},
    {trigger: ":e", replacement: "\\varepsilon", options: "mA"},
    {trigger: "@z", replacement: "\\zeta", options: "mA"},
    {trigger: "@t", replacement: "\\theta", options: "mA"},
    {trigger: "@T", replacement: "\\Theta", options: "mA"},
    {trigger: ":t", replacement: "\\vartheta", options: "mA"},
    {trigger: "@i", replacement: "\\iota", options: "mA"},
    {trigger: "@k", replacement: "\\kappa", options: "mA"},
    {trigger: "@l", replacement: "\\lambda", options: "mA"},
    {trigger: "@L", replacement: "\\Lambda", options: "mA"},
    {trigger: "@s", replacement: "\\sigma", options: "mA"},
    {trigger: "@S", replacement: "\\Sigma", options: "mA"},
    {trigger: "@u", replacement: "\\upsilon", options: "mA"},
    {trigger: "@U", replacement: "\\Upsilon", options: "mA"},
    {trigger: "@o", replacement: "\\omega", options: "mA"},
    {trigger: "@O", replacement: "\\Omega", options: "mA"},
    {trigger: "ome", replacement: "\\omega", options: "mA"},
    {trigger: "Ome", replacement: "\\Omega", options: "mA"},


    // some grek letters can just be typed for convienence
    {trigger: "([^\\\\])(${GREEK})", replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before Greek letters"},
    {trigger: "([^\\\\])(${SYMBOL})", replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before symbols"},

    // Insert space after Greek letters and symbols
    {trigger: "\\\\(${GREEK}|${SYMBOL}|${MORE_SYMBOLS})([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) sr", replacement: "\\[[0]]^{2}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) cb", replacement: "\\[[0]]^{3}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) rd", replacement: "\\[[0]]^{$0}$1", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) hat", replacement: "\\hat{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) dot", replacement: "\\dot{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) bar", replacement: "\\bar{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) vec", replacement: "\\vec{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) tilde", replacement: "\\tilde{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) und", replacement: "\\underline{\\[[0]]}", options: "rmA"},

    // Environments
    {trigger: "align", replacement: "\\begin{align}\n$0\n\\end{align}", options: "mA"},
    {trigger: "text", replacement: "\\text{$0}$1", options: "mA"},
    {trigger: "\"", replacement: "\\text{$0}$1", options: "mA"},


    // Visual ops
    {trigger: "U", replacement: "\\underbrace{ ${VISUAL} }_{ $0 }", options: "mA"},
    {trigger: "A", replacement: "\\begin{align}\n${VISUAL}\n\\end{align}", options: "mA"},


]