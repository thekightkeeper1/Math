[
    // Texting for math
    {
        trigger: "  ",
            replacement: "\\space ",
        options: "mA",
    },

    {trigger: "inv", replacement: "^{-1}", options: "mA"},
    {trigger: "fxy=", replacement: "f(x,y) = ", options: "mA"},
    {trigger: "fxyz=", replacement: "f(x,y,z) = ", options: "mA"},
    {trigger: "f([xyz])xyz=", replacement: "f_[[0]](x,y,z) = ", options: "rmA"},
    {trigger: "f([xy])xy=", replacement: "f_[[0]](x,y) = ", options: "rmA"},
    {trigger: "dd([xyz])", replacement: "\\frac{\\partial}{\\partial [[0]]} ", options: "rmA"},
    {trigger: "lr.|", replacement: "\\left. \\right|", options: "mA"},




]