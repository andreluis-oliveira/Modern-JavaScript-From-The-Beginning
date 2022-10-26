module.exports = {
  importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      "files": ["*.html"],
      "options": {
        "tabWidth": 2,
		"printWidth": 80,
		"singleQuote": false,
      }
    },
    {
      "files": ["*.scss", "*.css"],
      "options": {
        "tabWidth": 2,
		"printWidth": 80,
		"singleQuote": false,
      }
    }	
  ]
}