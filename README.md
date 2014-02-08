watermarker
===========

A non-sensical experiment at using the `comment` field in an images EXIF info to store pixels hidden by a baked-on watermark.

A section of the image is analyzed, and the pixels are transformed and stored in the `comments` field of the exif info.

Then, a watermark is applied to the same spot of the image.

On the client, the image is loaded in HTML and the exif is read.  The un-watermarked pixels are draw to a canvas element which overlays the image.

It works, but it's kind of useless.  

Presented here for educational purposes, and because I want to free up a hidden repo.
