# RV jQuery Fontsize Plugin

### What is it?
An easy and flexible jquery plugin to give font size accessibility control.

[See live demo](http://ramonvictor.com/fontsize/fontsize2.0/).

NOTE: The plugin is in beta version, so if you find any bug feel free to [report here](https://github.com/ramonvictor/rv-jquery-fontsize/issues).

### Features
* Create your own controllers (increase, decrease and default buttons) html template;
* Store the last font size variation set by the user. Thus, when the user comes back to your application/website he will be able to see his preferred font size;
* Create your own font size style for each variation by editing the `fvfs-*` classes on `css/fvfs.css` file.


### How to use?

First, import the rv fontsize js file:
``` html
<script type="text/javascript" src="js/rv-jquery-fontsize-2.0.js"></script>
```

Then, call $.rvFontsize() with the options you desire:

``` js
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

Insert the css file *
``` html
<link rel="stylesheet" href="css/rvfs.css" />
```
* In fact, if I were you, instead of add a new css file, I would rather copy its content and paste it on your own css.

### Available options

| Key           | Default value | Description  |
| ------------- | ------------- | ------------ |
| targetSection | body | In which section of the application you want the font size to change |
| store | false | If you set as `true` the variation changed by the user will be stored. Even if the user refreshs the page the font size will keep the same. |


