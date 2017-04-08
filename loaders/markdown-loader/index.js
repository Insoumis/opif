var frontMatter = require('front-matter');
var markdownIt = require('markdown-it');
var objectAssign = require('object-assign');

var md = markdownIt({
  html: true,
  typographer: true,
})
  .use(require('markdown-it-attrs'))
  .use(require('markdown-it-table-of-contents'), {
    listType: 'ol',
  })
  .use(require('markdown-it-anchor'))
  .use(require('markdown-it-container'), 'spoiler')
  .use(require('markdown-it-container'), 'toggler', {
    marker: '+',
  })
  .use(require('markdown-it-container'), 'toggable')
  .use(require('markdown-it-footnote'));

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
