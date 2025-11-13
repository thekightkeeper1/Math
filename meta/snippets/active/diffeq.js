[
    // Text mode
    {trigger: "mk", replacement: "$$0$", options: "tA"},
    {trigger: "dm", replacement: "$$\n$0\n$$", options: "tAw"},
    {trigger: "([a-zA-Z])mk", replacement: "$[[0]]$", options: "rtAw"},
    {trigger: /([^'])\b([B-HJ-Zb-z])\b([\n\s.,?!:'])/, replacement: "[[0]]$[[1]]$[[2]]", options: "tA"},
    {trigger: /([A-Za-z])(\d)/, replacement: "$[[0]]_{[[1]]}$", options: "rtA", description: "Auto letter subscript", priority: -1},
    {trigger: / (?!we|in|of|is|as|at|an|if|it|on|no|by|to|so|or)([a-z])([a-z0-9])/i, replacement: " $[[0]]([[1]])$ ", options: "tw"},
    {trigger: /([a-z])_([a-z0-9])/ , replacement: "$[[0]]_[[1]]$ $0", options: "rt",},

    {trigger: /([A-Za-z])(\d)/, replacement: "[[0]]_{[[1]]}", options: "rmA", description: "Auto letter subscript", priority: -1},

    // operators
    {
        trigger: "^",
        replacement: "^{$0}$1",
        options: "mA"
    },
    {trigger: "sr", replacement: "^{2}", options: "mA"},

    {trigger: "...", replacement: "\\dots", options: "mA"},

    // Diffeq
    {
        trigger: "2deq",
        replacement: "${1:a}y'' + ${2:b}y' + ${3:c}y = ${4:f(t)} $5",
        options: "mA"
    },

    {
        trigger: "2ode",
        replacement: "ay'' + by' + cy = f(t) ",
        options: "mA"
    },


    {
        trigger: /Lap [.*]/,
        replacement: "\\mathscr{L} \\left\\{ [[0]] \\right\\}= \\int_{0}^{\\infty}e^{-st}\\left([[0]] \\right)dt",
        options: "rmA",
        description: "Laplace with integral"
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

    {trigger: "lim", replacement: "\\lim_{ ${0:n} \\to ${1:\\infty} } $2", options: "mA"},
    {trigger: /([^\\])(exp|log|ln)/, replacement: "[[0]]\\[[1]]", options: "rmA"},



    // Environments
    {trigger: "//", replacement: "\\frac{$0}{$1}$2", options: "mA"},
    {trigger: "align", replacement: "\\begin{align}\n$0\n\\end{align}", options: "mA"},
    {trigger: "text", replacement: "\\text{$0}$1", options: "mA"},

    {trigger: "\"", replacement: "\\text{$0}$1", options: "mA"},
    {trigger: "bmat", replacement: "\\begin{bmatrix}\n$0\n\\end{bmatrix}", options: "MA"},

    // Visual ops
    {trigger: "u", replacement: "\\underbrace{ ${VISUAL} }_{ $0 }", options: "mA"},
    {trigger: "a", replacement: "\\begin{align}\n${VISUAL}\n\\end{align}", options: "mA"},
    {trigger: "s", replacement: "\\text${VISUAL} ", options: "mA"},


    // // Brackets
    // {trigger: "avg", replacement: "\\langle $0 \\rangle $1", options: "mA"},
    // {trigger: "norm", replacement: "\\lvert $0 \\rvert $1", options: "mA", priority: 1},
    // {trigger: "Norm", replacement: "\\lVert $0 \\rVert $1", options: "mA", priority: 1},
    // {trigger: "ceil", replacement: "\\lceil $0 \\rceil $1", options: "mA"},
    // {trigger: "floor", replacement: "\\lfloor $0 \\rfloor $1", options: "mA"},
    // {trigger: "mod", replacement: "|$0|$1", options: "mA"},
    // {trigger: "(", replacement: "(${VISUAL})", options: "mA"},
    // {trigger: "[", replacement: "[${VISUAL}]", options: "mA"},
    // {trigger: "{", replacement: "{${VISUAL}}", options: "mA"},
    // {trigger: "(", replacement: "($0)$1", options: "mA"},
    // {trigger: "{", replacement: "{$0}$1", options: "mA"},
    // {trigger: "[", replacement: "[$0]$1", options: "mA"},
    {trigger: "lr(", replacement: "\\left( $0 \\right) $1", options: "mA"},
    {trigger: "lr{", replacement: "\\left\\{ $0 \\right\\} $1", options: "mA"},
    {trigger: "lr[", replacement: "\\left[ $0 \\right] $1", options: "mA"},
    {trigger: "lr|", replacement: "\\left| $0 \\right| $1", options: "mA"},
    {trigger: "lra", replacement: "\\left< $0 \\right> $1", options: "mA"},
]