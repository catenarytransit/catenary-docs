# Documentation

To update the technical documentation, make a fork of the repository https://github.com/catenarytransit/catenary-docs, make your changes, and put your changes in a pull request.

Catenary-docs uses the [Markdown](https://www.markdownguide.org/getting-started/) syntax to format its text (to make headings, add images and links, and write **bold** and *italic*).

If you just want to edit an existing page, you can click the "Edit this page on GitHub" link on the right-hand sidebar, then click the pencil icon on GitHub. GitHub will walk you through making the pull request.

If you want to make a new page, go to `pages/`, browse the folders, and make a new file with an extension ending in `.md`. Write your content in that file. Then make sure to update `_meta.json` in the folder your new page is in to include the filename (without extension) and the title of the page.

For example, I might make the page `pages/contributing/nontechnical/docs.md`. Then I would update `pages/contributing/nontechnical/_meta.json` like this:

```diff
 {
     "index": "Anyone Can Contribute!",
     "workflow": "Adding Agencies",
+    "docs": "Documentation"
 }
```

If you want to test your changes, follow the instructions in [README.md](https://github.com/catenarytransit/catenary-docs/blob/main/README.md).
