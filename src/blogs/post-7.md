---
slug: "/blog/strapi-seo-best-practices"
date: "2021-11-07"
humanDate: "November 7, 2021"
title: "Strapi SEO Best Practices"
cardText: "Strapi is the beast when it comes to the headless CMS, let me show you how easy was creating a Search Engine Optimized web application witht it."
image: "../images/seostrapi.png"
---

Recently, I've started a series of side hustle projects with my couple of developer friends.

Since our team was small and everyone was spending their free time, we wanted to make this as less time-consuming as possible.

Other than creating the whole back end from scratch, we've used Strapi CMS to cover most of the back-end we need for the applications.

Cause I've already experienced Strapi, I was the one in our dev team who insisted to use Strapi. Therefore, I took the whole responsibility for that part of the project.

And in this blog post, I'll summarize how I approached the project in terms of Search Engine Optimization using Strapi.

## SEO Best Practices

Before getting our feet dirty with Strapi, we should refresh our memories about SEO best practices.
The primary purpose of SEO is to improve the ranking of a website/web application in search engine listings.

This can be done using various SEO aspects strategically. So when you want to create content for your website, you must take into account these:

#### 1. Metadata

#### 2. Content Clustering

#### 3. Organized and Structured Data

#### 4. Url Construction

<br>

### 1. Metadata

Search engines place a high value on metadata. Metadata is not visible to users (except the title), but they assist search engines in determining your page's topic.

The most important tags are:

#### Title: No more than 60 characters and make it at least one word.

#### Description: No more than 155 characters and try to put essential words respect to your content.

#### Keywords

#### Robots: Controls how your material is treated by search engines.

 <br>

<div>
    <img  src="../images/seomain.jpg" alt="Strapi SEO Component"
        title="Strapi SEO Component"  />
    <p style="text-align:center;">Strapi SEO Component</p>
</div>

As you can see picture above, all the metadata fields are created in the SEO component in Stapi, such as metaTitle, metaDescription and the keywords. preventIndexing boolean field is also used for Robots metadata in the project. We set this field to true if we want that particular page indexed by search engines.

Cause of this SEO component used for every collection type that'll render new page in the application, it makes everything very flexible and effective in terms of SEO.

### 2. Content Clustering

Content clustering is an SEO approach that organizes subjects into pillar and cluster pages to improve a website's structure and internal links.

So that you may link your cluster content to your pillar page, which will need to cover each of these themes in general, each cluster's content can then elaborate on that issue.

It can be seen how blog pages are essential in content clustering for SEO.

We've created a blog collection type in the example below and also included an SEO component in this collection type.

<div>
    <img  src="../images/mainblog.jpg" alt="Strapi Blog Collection Type"
        title="Strapi Blog Collection Type"  />
    <p style="text-align:center;">Strapi Blog Collection Type</p>
</div>

### 3. Organized and Structured Data

Structured data is critical for SEO because it helps search engines locate and comprehend your content and website.

It's also an excellent approach to get ready for the future of search, as Google and other engines continue to personalize the user experience and answer questions right on their Search Engine Results Page.

Organized and Structured Data is directly related to the language you're using while creating your content. The main goal is your site markup should be universally as understandable as possible.

### 4. Url Construction

For the search engines that will crawl your website, the URLs of your content are pretty significant. It is critical to make use of it, and while using be as descriptive as possible, that'll help SEO of your site dramatically.

#### Good Example ==> myrestaurant/menu/foods/spicy-calamari

#### Bad Example ==> mysrestaurant/menu/foods/232453

It is possible to construct a slug based on the name of your content using Strapi. We've created a slug inside the SEO component, a short text field, and it's required and must be unique while creating the content.

<div>
    <img  src="../images/strapislug.jpg" alt="Strapi SEO Component Slug Field"
        title="Strapi SEO Component Slug Field"  />
    <p style="text-align:center;">Strapi SEO Component Slug Field</p>
</div>

### 5. Additional Customized Stuff

If you paid attention to some other fields that we have in SEO component such as favicon, logo, and published date are not needed for SEO purposes. We've added those fields to cover some cases that we needed throughout the application.

You might need some, or you might need something different entirely, also making those fields require another developer preference.

As seen, Strapi makes everything more accessible in an organized matter, and also, you're writing zero lines of code.

However, I'd like to warn you about the significant challenge of Strapi projects, which is building well-structured components - content type architecture and content type relationships. Other than that, I don't think anything will prevent you from building your dream project.

#### Resources

- [Headless CMS and Strapi SEO best practices](https://strapi.io/blog/headless-cms-strapi-seo-best-practices)

- [How to Create Pages on the fly with Dynamic Zone](https://strapi.io/blog/how-to-create-pages-on-the-fly-with-dynamic-zone?utm_source=devto&utm_medium=post)
