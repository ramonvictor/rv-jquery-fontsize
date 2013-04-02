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
// example of $.rvFontsize()
$.rvFontsize({
    targetSection: '#content .post',
    store: true,
    controllers: {
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

<table>
	<tbody><tr>
		<th align="left">Key</th>
		<th align="left" width="240">Default value</th>
		<th align="left">Description</th>
	</tr>
	<tr>
		<td align="left" valign="top">targetSection</td>
		<td align="left" valign="top">"body"</td>
		<td align="left" valign="top">Set the section of the application where the font size changes have to be reflected.</td>
	</tr>
	<tr>
		<td align="left" valign="top">store</td>
		<td align="left" valign="top">false</td>
		<td align="left" valign="top">If you set as <code>true</code> the variation changed by the user will be stored. Thus, even if the user refreshs the page the font size will keep the same.</td>
	</tr>
	<tr>
		<td align="left" valign="top">variations</td>
		<td align="left" valign="top">7</td>
		<td align="left" valign="top">The amount of variations the font size will change. Lets suppose  you've assigned <code>9</code>, then the default font size css class, for the <code>targetSection</code> element, will be <code>.rvfs-5</code>. It will increase until the <code>.rvfs-9</code> class and decrease until it reaches <code>.rvfs-1</code>.</td>
	</tr>
	<tr>
		<td align="left" valign="top">controllers</td>
		<td align="left" valign="top">
			{<br>
			&nbsp;&nbsp;append: true,<br>
			&nbsp;&nbsp;appendTo: 'body',<br>
			&nbsp;&nbsp;showResetButton: false,<br> 
			&nbsp;&nbsp;template : ''<br> 
			}
		</td>
		<td align="left" valign="top">Assign <code>append: true</code> when you don't want to create a html template for font size button controllers. <br>
		Remember that when <code>append</code> is <code>true</code> you might want to change where the default html template have to be appended, to accomplish that you can use <code>appendTo: '#my-element'</code>.<br><br>
		You can also give the user the possibility to "reset" the font size variation to its original size by assign <code>showResetButton: true</code>.
		<br><br>
		However, if your project needs a specific html structure, you can also create your own button controllers html template: 
<pre><code>template: '&lt;div class="btn-group">' +
                        '&lt;a href="#" class="rvfs-decrease btn">A-&lt;/a>' +
                        '&lt;a href="#" class="rvfs-reset btn">A&lt;/a>' +
                        '&lt;a href="#" class="rvfs-increase btn">A+&lt;/a>' +
                 	 '&lt;/ul>';</code></pre>
         	 Note: to use this option please do <strong>NOT</strong> forget to add these three key css classes: <code>rvfs-increase</code>, <code>rvfs-decrease</code> and <code>rvfs-reset</code>.
		</td>
	</tr>
	</tbody>
</table>