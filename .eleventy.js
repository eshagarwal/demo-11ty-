// 11ty config file
// and is formatted as module.exports

module.exports = function(eleventyConfig) {

    // when we make a change then eleventy to recompile and go through the sass file
    eleventyConfig.addWatchTarget("./src/sass"); 

    // once the sass is compiled passthrough tells 11ty to take the contents of css and pass them
    eleventyConfig.addPassthroughCopy("./src/css");

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}