[
    // Text mode
    {trigger: "mk", replacement: "$$0$", options: "tA"},
    {trigger: "dm", replacement: "$$\n$0\n$$", options: "tAw"},
    {trigger: "([a-zA-Z])mk", replacement: "$[[0]]$", options: "rtAw"},
    {trigger: /([^'])\b([B-HJ-Zb-z])\b([\n\s.,?!:'])/, replacement: "[[0]]$[[1]]$[[2]]", options: "tA"},
    {trigger: /([A-Za-z])(\d)/, replacement: "$[[0]]_{[[1]]}$", options: "rmtA", description: "Auto letter subscript", priority: -1},


    // operators
    {
        trigger: "^",
        replacement: "^{$0}$1",
        options: "mA"
    },

    {trigger: "...", replacement: "\\dots", options: "mA"},

    // Diffeq
    {
        trigger: "2deq",
        replacement: "${1:a}y'' + ${2:b}y' + ${3:c}y = ${4:f(t)}",
        options: "mA"
    },
    {
     trigger: "yp",
        replacement: "y_p ",
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




    // Environments
    {trigger: "align", replacement: "\\begin{align}\n$0\n\\end{align}", options: "mA"},
    {trigger: "text", replacement: "\\text{$0}$1", options: "mA"},
   {trigger: /(?<!\\\\)\n/, replacement: "test", options: "rmA"},
    {trigger: "\"", replacement: "\\text{$0}$1", options: "mA"},
    {trigger: "bmat", replacement: "\\begin{bmatrix}\n$0\n\\end{bmatrix}", options: "MA"},

    // Visual ops
    {trigger: "U", replacement: "\\underbrace{ ${VISUAL} }_{ $0 }", options: "mA"},
    {trigger: "A", replacement: "\\begin{align}\n${VISUAL}\n\\end{align}", options: "mA"},

]