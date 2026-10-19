---
title: "Example note (template — do not publish)"
date: 2026-10-19
description: "Copy this file when adding a note. It stays unpublished while draft is true."
tags: [example]
collection: notes
draft: true
# slug: /notes/your-slug/
---

This file is a template, not a published note. It does not describe a real incident.

While `draft` is `true`, this page is left out of `/notes`, the homepage, tag pages, and the RSS feed.

To add a note:

1. Duplicate this file in `src/notes/` and give the copy a new filename.
2. Replace `title`, `date`, and `description`. Those three are required.
3. Replace `tags` or delete that line. Tags are optional.
4. Replace this body with your own writing.
5. Set `draft` to `false` when it should go live.
6. Leave `slug` commented out to publish at `/notes/<filename>/`, or set `slug` to a path that starts with `/notes/`.

`collection` stays `notes`. Push the file and let the site rebuild.
