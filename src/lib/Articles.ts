
const blogs = [
    {
        "id": 1,
        "title": "Example of a blog post using SvelteKit with Markdown",
        "description": "Intro   This is my first post and I'm gonna show you how I have created a blog section for m aysdauw aywgd awuydg awyg duwag dawu daw djawiud hiaw aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "tags": [
            "svelte",
            "api",
            "javascript",
            "blog"
        ],
        "md":
`
# This is a header

This is a paragraph.

* This is a list
* With two items
1. And a sublist
2. That is ordered
    * With another
    * Sublist inside

| And this is | A table |
|-------------|---------|
| With two    | columns |

# test image
![test image](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

# test local image
![test image](/logo.svg)
`
    },
  ]

export default blogs;