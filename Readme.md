# Example

This is a gulp-clean-css & clean-css 4 example.

When built via `gulp build` it produces a minified file with correct output and references to images & fonts.

Note that all sources from `/src` directory are copied to `/public` directory, however clean-css operates on `/src` folder only, i.e.:

```js
cleanCSS({ rebaseTo: sourceDir })
```

clean-css 3 example can be found at https://github.com/jakubpawlowicz/gulp-clean-css-v3-example
