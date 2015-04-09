// Disallow displaying site in iFrame
BrowserPolicy.framing.disallow();

// Dissalow inline JavaScript
BrowserPolicy.content.disallowInlineScripts();

// Allow eval() statements (for MessageFormat v1)
BrowserPolicy.content.allowEval()

// All inline CSS
BrowserPolicy.content.allowInlineStyles();
