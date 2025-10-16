[
    // Text mode
    {trigger: "mk", replacement: "$$0$", options: "tA"},
    {trigger: "dm", replacement: "$$\n$0\n$$", options: "tAw"},
    {trigger: "([a-zA-Z])mk", replacement: "$[[0]]$", options: "rtAw"},


    // Diffeq
    {
        trigger: "2deq",
        replacement: `a$0{}y'' + by' + cy = f(t)`,
        options: "m"
    },

]