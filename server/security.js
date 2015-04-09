// Disallow displaying site in iFrame
BrowserPolicy.framing.disallow();

// Dissalow inline JavaScript
BrowserPolicy.content.disallowInlineScripts();

// Disallow eval() statements
BrowserPolicy.content.disallowEval();

// All inline CSS
BrowserPolicy.content.allowInlineStyles();
