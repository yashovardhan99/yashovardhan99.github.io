+++
title = "Now"
template = "content.html"
+++

I am working as a _Data & AI Consultant_ at {{ svg(path="icons/microsoft.svg")}} __Microsoft__. This page aims to highlight the different topics I am currently working on.

## Work

Currently, I am spending most of my time optimizing and improving a _legacy_ RAG pipeline. The pipeline is built on Databricks, with almost no proper python tooling and highly abstracted and hard-to-understand code. I have slowly spent my time improving these pipelines one step at a time.

For instance, I moved all dependencies to `pyproject.toml` with a `uv.lock` and created a `uv export` script to create the `requirements.txt` we need to run on Databricks (side note: when will we have proper `uv` support on Databricks?)
Then, I added pre-commit checks for some basic things like json/yaml/toml validations, big file checks etc. along with a CI step to validate `uv.lock` and the generated `requirements.txt`. This ensures any deployment will only succeed if the developers follow all rules.

Next, I migrated a duplicated JSON config structure to a much more simplified toml structure, reducing the total config file size from 4.5k LoC to just under 500 (a 90% reduction!). This was probably one of the biggest refactors I undertook as I ended up touching almost all files in the project, removed dozens of unused modules, simplified the config usage, and even created a whole new config management system with validations using `attrs`.
Now, I am working on updating the pipeline so it actually loads data incrementally instead of reprocessing all files for a particular group at once.

The sad part is I don't have access to an AI agent in the virtual environment I need to connect to. My personal GHCP subscription (via Microsoft) is blocked by org rules and the said company hasn't provided me any subscription of their own. I ended up creating a thread in Gemini (outside the virtual desktop) to ideate through different things I am working on.

That said, I am surprisingly enjoying this work. The code is in a state where it's not totally messed up but just bad enough that spending some time can help improve quality a lot. I really enjoy these kinds of challenges, especially without the use of an AI coding agent!

## Personal

On my personal side, I recently took a liking to develop my own personal website (as you can see here). I used Zola for this site (mainly because I wanted to learn Rust) but ended up learning a lot of HTML and CSS core concepts. I went through some of the available themes and didn't like any of them, so this entire site is handcrafted by me with almost no AI generated code!

I come from a data engineering background with mainly experience working with Python, so this has certainly been an interesting challenge for me. Once the site is at a good enough state, I plan to start writing blog posts about my work (let me know if you are interested in a particular topic).

When I am not working on this site or my actual job, I am mainly playing around with some financial tools I have developed. You might have already read about [BulkInvoicer](/blog/introducing-bulkinvoicer), but there is also [NiveshPy](https://github.com/yashovardhan99/niveshpy) and some other small utilities I worked on for filing my tax returns.
