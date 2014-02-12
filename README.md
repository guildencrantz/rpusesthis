This site is created with [Middleman](http://middlemanapp.com/), a static site generator, and is hosted on [GitHub Pages](http://pages.github.com/). The `master` branch contains Middleman-specific files which are used to generate the flat HTML files in the `gh-pages` branch, which are served when you visit [otherinbox.github.io/rpusesthis](http://otherinbox.github.io/rpusesthis).

To add and update content, you're going to need to install Middleman and its dependencies.

## Requirements

- Ruby
- RubyGems
- Xcode
- Bundler

Xcode can be installed via the [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?ls=1&amp;mt=12). Alternately, if you have a free Apple Developer account, you can just install Command Line Tools for Xcode from their downloads page. Full instructions on the Middleman's [Getting Started page](http://middlemanapp.com/basics/getting-started/).

## Getting Started

Install Middleman

    gem install middleman

Clone the repo

    git clone https://github.com/otherinbox/rpusesthis.git
    cd rpusesthis

Install dependencies

    bundle install

Start the Middleman server

    bundle exec middleman server

Now you can view the site via `http://localhost:4567/` in your browser. This is handy because you won't have to build out the site every time you make a change.

## Creating new posts

Create a new markdown file in `/source/interviews/` with the following format: `[year]-[month]-[day]-[firstname]-[lastname].html.md`. The post should start with a YAML Frontmatter metadata section at the top, followed by your Markdown formatted post content. Something like this:

**2014-02-14-mike-ditka.html.md**

    ---
    title: Mike Ditka
    date: 2014-02-14
    avatar: mike-ditka.png
    ---

    ## Your content here

- **title**: The name of the person
- **date**: The published date. Make sure it's the same date as the file name or else Middleman will complain.
- **avatar**: drop an image in `/source/assets/images` and put the filename here. If you don't have an image for the interviewee, you can put `default.jpg` as the value here.

With you new file created, you can drop in Markdown formatted text below the YAML Frontmatter section. And that's it! Commit your changes and push to master for good measure.

## Building the site

Once everything looks as expected, you can easily deploy to GitHub pages like so:

    rake publish

END