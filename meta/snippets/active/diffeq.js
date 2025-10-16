[
    // Text mode
    {trigger: "mk", replacement: "$$0$", options: "tA"},
    {trigger: "dm", replacement: "$$\n$0\n$$", options: "tAw"},
    {trigger: "([a-zA-Z])mk", replacement: "$[[0]]$", options: "rtAw"},

    // operators
    {
        trigger: "^",
        replacement: "^{$0}$1",
        options: "mwA"
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


]