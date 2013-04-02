# RV jQuery Fontsize Plugin

### What is it?
An easy and flexible jquery plugin to give font size accessibility control.

[See live demo](http://www.ramonvictor.com/demo/fontsize/fontsize2.0/).

NOTE: The plugin is in beta version, so if you find any bug feel free to [report here](https://github.com/ramonvictor/rv-jquery-fontsize/issues).

### Features
* Create your own controllers html template (increase, decrease and default buttons);
* Store the last font size variation setted by the user;
* Create your own font size style for each variation by editing the `.fvfs-*` classes on `css/fvfs.css` file.


### How to use?

First, import the rv fontsize js file:
``` html
<script type="text/javascript" src="js/rv-jquery-fontsize-2.0.js"></script>
```

Then, call $.rvFontsize() with the options you desire:

``` js
// example of $.rvFontsize() call used in the demo page
$.rvFontsize({
    targetSection: '#content .post',
    store: true,
    controllers: {
        append: true,
        appendTo: '#rvfs-controllers',
        showResetButton: true
    }
}); 
```

Insert the css file <small>[*]</small>
``` html
<link rel="stylesheet" href="css/rvfs.css" />
```
<small>[*] In fact, if I were you, instead of add a new css file, I would rather copy its content and paste it on my own css (`main.css`, `style.css` or whatever you call it).</small>

### Available options

| Key            | Default value           | Description   |
| :------------- | :------------- | :------------ |
| targetSection  | "body"         | Set the section of the application where the font size changes have to be reflected. |
| store          | false          | If you set as `true` the variation changed by the user will be stored. Thus, even if the user refreshs the page the font size will keep the same. |
| variations     | 7         |  The amount of variations the font size will change. Lets suppose  you've assigned `9`, then the default font size css class, for the `targetSection` element, will be `.rvfs-5`. It will increase until the `.rvfs-9` class and decrease until it reaches `.rvfs-1`. |
| controllers     | {<br> append: false,<br> appendTo: 'body',<br> showResetButton: false,<br> template : ''<br> } |  If you assign `append: true`... |



