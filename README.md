# RV Font Size jQuery Plugin

### About
An easy and flexible jquery plugin to give font size accessibility control. [See live demo](http://www.ramonvictor.com/demo/fontsize/fontsize2.0/).

Notes: 
* The plugin is in beta version, so if you find any bug feel free to [report here](https://github.com/ramonvictor/rv-jquery-fontsize/issues);
* The project is been tested with jquery 1.9.1.

### Features
* Create your own controllers html template (increase, decrease and default buttons);
* Font size settings can be remembered even after page reloads (via localStorage);
* Create your own font size style for each variation by editing the `.fvfs-*` classes on `css/fvfs.css` file.


### How to use?

First, import the rv fontsize js file:
``` html
<script type="text/javascript" src="js/store.min.js"></script><!-- store plugin required if "store : true"!  -->
<script type="text/javascript" src="js/rv-jquery-fontsize.min.js"></script>
```

After that, call $.rvFontsize() with the desired options:

``` js
// plugin call used in live demo page
$.rvFontsize({
    targetSection: '#content .post',
    store: true, // store.min.js required!
    controllers: {
        appendTo: '#rvfs-controllers',
        showResetButton: true
    }
}); 
```

Insert the css file [*]
``` html
<link rel="stylesheet" href="css/rvfs.css" />
```
[*]  Instead of add a new css file, it would be recommended copy its content and paste it on your main css (`main.css`, `style.css` or whatever it's called).

##### CSS observation:
Within `rvfs.css` file you will find the following snippet of code.
This is mandatory because the RV Font Size plugin doesn't add dynamic
css style in order to avoid damaging the project performance.
Feel free to adapt it to fit your project needs.

``` css
.rvfs-1 p, .rvfs-1 li{ font-size: 70% }
.rvfs-2 p, .rvfs-2 li{ font-size: 80% }
.rvfs-3 p, .rvfs-3 li{ font-size: 90% }
.rvfs-4 p, .rvfs-4 li{ font-size: 100% } /* initial font size for 'variations' default value: 7 */
.rvfs-5 p, .rvfs-5 li{ font-size: 110% }
.rvfs-6 p, .rvfs-6 li{ font-size: 120% }
.rvfs-7 p, .rvfs-7 li{ font-size: 130% }
```

### Available options

<table>
	<tbody><tr>
		<th align="left">Key</th>
		<th align="left" width="240">Default value</th>
		<th align="left">Description</th>
	</tr>
	<tr>
		<td align="left" valign="top">targetSection</td>
		<td align="left" valign="top">'body'</td>
		<td align="left" valign="top">Define in which application section the font size changes have to be reflected.</td>
	</tr>
	<tr>
		<td align="left" valign="top">store</td>
		<td align="left" valign="top">false</td>
		<td align="left" valign="top">If set as <code>true</code> the browser localStorage will be used to store font size settings. Thus, even if the user refreshs the page the font size will keep the same.<br><br>
		 When this feature is enabled it uses <a href="https://github.com/marcuswestin/store.js">store.js</a> plugin. So, don't forget to add the <strong>store.min.js</strong> script tag right before the <strong>rv-jquery-fontsize.js</strong>.
		</td>
	</tr>
	<tr>
		<td align="left" valign="top">variations</td>
		<td align="left" valign="top">7</td>
		<td align="left" valign="top">The amount of variations the font size will change. If it's changed to <code>9</code>, then the default font size css class will be <code>.rvfs-5</code>. It will increase up to <code>.rvfs-9</code> class and decrease until it reaches <code>.rvfs-1</code>.<br><br>
		<strong>Note:</strong> every time this option is changed the <code>.rvfs-*</code> classes have to be updated accordingly.
		</td>
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
		<td align="left" valign="top">Assign <code>append: false</code> means that your font size button controllers will have to be explicit declared within your project html file. By doing this, all the following options (<code>appendTo</code>, <code>showResetButton</code> and <code>template</code>) are invalidated because the js won't append any html template. In this case, it has to be done manually.<br><br>
		If <code>append: true</code>, <code>appendTo</code> option can be used to specify in which element the font size controller html has to be appended.<br><br>
		It's also possible to show a "reset" font size button by assigning <code>showResetButton: true</code>.
		<br><br>
		 Moreover, your own controllers html structure can be defined by using <code>template</code> option, for example: 
<pre><code>template: '&lt;div class="btn-group">' +
                '&lt;a href="#" class="rvfs-decrease btn">A-&lt;/a>' +
                '&lt;a href="#" class="rvfs-reset btn">A&lt;/a>' +
                '&lt;a href="#" class="rvfs-increase btn">A+&lt;/a>' +
         	 '&lt;/div>'</code></pre>
         	 Note: to use this option please do <strong>NOT</strong> forget to add these three key css classes: <code>rvfs-increase</code>, <code>rvfs-decrease</code> and <code>rvfs-reset</code>. Because the plugin will try to find them to attach their respective event handlers.
		</td>
	</tr>
	</tbody>
</table>

### Credits
* [jQuery Boilerplate](http://jqueryboilerplate.com)
* [store.js](https://github.com/marcuswestin/store.js)

### License

[MIT License](http://opensource.org/licenses/mit-license.php)