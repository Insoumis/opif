var frontMatter = require('front-matter');
var markdownIt = require('markdown-it');
var objectAssign = require('object-assign');

var md = markdownIt({
  typographer: true,
});

module.exports = function (content) {
  this.cacheable();
  var meta = frontMatter(content);
  var body = md.render(meta.body);
  var result = objectAssign({}, meta.attributes, {
    body,
  });
  this.value = result;
  return `module.exports = ${JSON.stringify(result)}`;
};
