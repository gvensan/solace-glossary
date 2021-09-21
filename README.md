# solace-glossary
InShorts: Solace Glossary of Terms &amp; Acronyms

## Overview
Goal is to collate Solace and EDA terms of reference in one place, with appropriate tags, categories, acronyms and links back to Solace documentation, blogs, tutorials and other references for further reading. The presentation of the glossary of terms is through a static site built using Jekyll framework with a friendly UI and support for search and quick navigation. 

The repository also contains the source data (terms list) and the a nodejs tool to convert records into Jekyll blog posts. With the help of Git Pages, the repository content is automatically hosted and mae available on a public URL.

To participate, first you need to fork the repository, make changes and build the markdown files locally. After checking in, create a PR to request for review and merge changes - after which the changes would be automatically visible on the hosted git pages URL.

## Source Data
The key terms are maintaind in an Excel file __"Solace - Terms & Acronyms.xlsx"__ in _buildposts_ directory. 

Any addition and modification are to be made to this excel file as it is the single source of truth for this project.

#### About the Excel file template

| Column                   | Notes                                                                               |
| ---------------------- | ------------------------------------------------------------------------------ |
| `Date`             | IMPORTANT: Enter the date value when __NEW ROW__ is added - otherwise, do not modify the existing date value (it is used as part of the generated markdown file - change would create duplicate entries).                        |
| `Abbreviation`            | Enter the abbreviation, if available for the referred term.|
| `Term`            | The term of reference (aka topic name) being discussed. If a topic name requires to be duplicated, create  distinction in the term name by adding a suffix (as simple as a counter 1,2,3… or other literals). The value in this column has to be unique.
|
| `Description`            | Description of the term - precise definition of the term.|
| `Category`            | The categorization that best captures the term of reference for collective reference. A term could be associated with multiple categories, in which case enter the category names as a comma-separated value|
| `Tags`            | The tags that best identifies the term of reference for quicker access. A term could be associated with multiple tags, in which case enter the tag names as a comma-separated value|
| `References`            | External references - URLs pointing to further reading/details in the Solace pages (blogs, docs, tutorials etc or definitive references in public sites like wiki, techtarget etc)|


## Generating Markdown Posts

Once the Excel file is updated with additions or changes, it need to be converted into markdown posts files as expected by the Jekyll framework. A nodejs utility has been written and made available as part of the repository.

#### How to run the utility

1. In your local repository, change directory to `buildposts` folder        
    `cd buildposts`
2. If you are running this for the first time, then install the required node modules by running the following command:
   `npm install`
3. Run the utility
    `node reader.js`

This would automatically generate the markdowns for each rows and write into the `_posts` folder. 

## Running locally

If you want to run the glossary site locally and validate before checking in, you can do so by running the following command from the root directory.

First, clean Jekyll cache by running the following command:

`bundle exec jekyll clean`

Run the following command to start the Jekyll server in watch mode, so that any changes made to the markdown posts are reflected immediately on the local site.

`bundle exec jekyll serve --watch`

## Checking-in changes

Before checking in, please do the following:

- Remove the npm modules in the `buildposts` folder
  ```
  cd buildposts
  rm -r node_modules
  ```

Once the changes are made and verified locally, check-in the changes to the code to your forked repository. From the GitHub, create a PR to notify the glossary site admins to review, approve and merge your changes into the main branch. At this point, your changes will reflect on the hosted URL.

## Credits

### Creator

**Michael Rose**

* <https://mademistakes.com>
* <https://twitter.com/mmistakes>
* <https://github.com/mmistakes>

### Icons + Demo Images:

* [Font Awesome](https://fontawesome.com)
* [WeGraphics](http://wegraphics.net/downloads/free-ultimate-blurred-background-pack/)
* [Unsplash](https://unsplash.com/)

### Reference
* [So Simple Theme - A simple Jekyll theme for words and pictures.](https://mmistakes.github.io/so-simple-theme/)
* [Jordan Levi personal blog](https://jordanlevi.red/)

### Other:

* [Jekyll](http://jekyllrb.com/)
* [Breakpoint](http://breakpoint-sass.com/)
* [jQuery](http://jquery.com/)
* [jQuery Smooth Scroll](https://github.com/kswedberg/jquery-smooth-scroll)
* [Lity](https://sorgalla.com/lity/)
* [Lunr](http://lunrjs.com/)

