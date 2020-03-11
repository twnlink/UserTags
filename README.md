# UserTags
UserTags is a database of custom Discord tags made entirely via CSS for Discord theme devs to use in their themes.  

# Getting your own tag
Getting your own tag can be done by [submitting an issue](https://github.com/Cr3atable/UserTags/issues) with your tag information (your Discord ID, your tag text, and your tag color) or creating a pull request with your tag added.  
I will most likely open a Discord server for tag requests if this becomes big enough.

# Adding UserTags to your theme
If you'd like to include UserTags in your theme there are two ways to do it:

**1.** Import the basic implementation. (SIMPLE)

Adding tags from UserTags without making your own implementation is as simple as adding `@import url('https://cr3atable.github.io/UserTags/basic.css')` to the top of your theme.

**2.** Build your own implementation with the DB.

Building your own implementation is a good way to add custom tags if you have a theme that makes a lot of major changes to Discord's UI (ex: Tropical's Midnight).  
You'll want to add `@import url(https://cr3atable.github.io/UserTags/tags.css)` to the top of your theme which will import the database (note that this does not add custom tags by default).  
I'd suggest looking at https://cr3atable.github.io/UserTags/basic.css to get a general idea of how to make your own tag implementation.
