[

  // Greek letters
  {trigger: "@a", replacement: "\\alpha", options: "mtA"},
  {trigger: "@b", replacement: "\\beta", options: "mtA"},
  {trigger: "@g", replacement: "\\gamma", options: "mtA"},
  {trigger: "@G", replacement: "\\Gamma", options: "mtA"},
  {trigger: "@d", replacement: "\\delta", options: "mtA"},
  {trigger: "@D", replacement: "\\Delta", options: "mtA"},
  {trigger: "@e", replacement: "\\epsilon", options: "mtA"},
  {trigger: ":e", replacement: "\\varepsilon", options: "mtA"},
  {trigger: "@z", replacement: "\\zeta", options: "mtA"},
  {trigger: "@t", replacement: "\\theta", options: "mtA"},
  {trigger: "@T", replacement: "\\Theta", options: "mtA"},
  {trigger: ":t", replacement: "\\vartheta", options: "mtA"},
  {trigger: "@i", replacement: "\\iota", options: "mtA"},
  {trigger: "@k", replacement: "\\kappa", options: "mtA"},
  {trigger: "@l", replacement: "\\lambda", options: "mtA"},
  {trigger: "@L", replacement: "\\Lambda", options: "mtA"},
  {trigger: "@s", replacement: "\\sigma", options: "mtA"},
  {trigger: "@S", replacement: "\\Sigma", options: "mtA"},
  {trigger: "@u", replacement: "\\upsilon", options: "mtA"},
  {trigger: "@U", replacement: "\\Upsilon", options: "mtA"},
  {trigger: "@o", replacement: "\\omega", options: "mtA"},
  {trigger: "@O", replacement: "\\Omega", options: "mtA"},
  {trigger: "ome", replacement: "\\omega", options: "mtA"},
  {trigger: "Ome", replacement: "\\Omega", options: "mtA"},


  // some grek letters can just be typed for convienence
  // {trigger: "([^\\\\])(${GREEK})", replacement: "[[0]]\\[[1]]", options: "rmtA", description: "Add backslash before Greek letters"},
  // {trigger: "([^\\\\])(${SYMBOL})", replacement: "[[0]]\\[[1]]", options: "rmtA", description: "Add backslash before symbols"},

  // Insert space after Greek letters and symbols
  {trigger: "\\\\(${GREEK}|${SYMBOL}|${MORE_SYMBOLS})([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmtA"},
  {trigger: "\\\\(${GREEK}|${SYMBOL}) sr", replacement: "\\[[0]]^{2}", options: "rmtA"},
  {trigger: "\\\\(${GREEK}|${SYMBOL}) cb", replacement: "\\[[0]]^{3}", options: "rmtA"},
  {trigger: "\\\\(${GREEK}|${SYMBOL}) rd", replacement: "\\[[0]]^{$0}$1", options: "rmtA"},
  {trigger: "\\\\(${GREEK}|${SYMBOL}) hat", replacement: "\\hat{\\[[0]]}", options: "rmtA"},
  {trigger: "\\\\(${GREEK}|${SYMBOL}) dot", replacement: "\\dot{\\[[0]]}", options: "rmtA"},
  {trigger: "\\\\(${GREEK}|${SYMBOL}) bar", replacement: "\\bar{\\[[0]]}", options: "rmtA"},
  {trigger: "\\\\(${GREEK}|${SYMBOL}) vec", replacement: "\\vec{\\[[0]]}", options: "rmtA"},
  {trigger: "\\\\(${GREEK}|${SYMBOL}) tilde", replacement: "\\tilde{\\[[0]]}", options: "rmtA"},
  {trigger: "\\\\(${GREEK}|${SYMBOL}) und", replacement: "\\underline{\\[[0]]}", options: "rmtA"}

  // Here we do it for text mode aswell

]
