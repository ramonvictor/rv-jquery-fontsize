/*
 *  Project: RV Font Size jQuery Plugin
 *  Description: An easy and flexible jquery plugin to give font size accessibility control.
 *  URL: https://github.com/ramonvictor/rv-jquery-fontsize/
 *  Author: Ramon Victor (https://github.com/ramonvictor/)
 *  License: Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 *  Any and all use of this script must be accompanied by this copyright/license notice in its present form.
 */

;(function ($, window, document, undefined) {

    var rvFontsize = "rvFontsize";
    
    var defaults = {
        targetSection: 'body',
        store: false,
        variations: 7,
        controllers: {
            append: true,
            appendTo: 'body',
            showResetButton: false,
            template : ''
        }
    };

    function Plugin(element, options) {
        var _self = this;
        _self.element = element;
        _self.options = $.extend({}, defaults, options);

        _self._defaults = defaults;
        _self._name = rvFontsize;

        _self.init();
    }

    Plugin.prototype = {

        init: function() {

            var _self = this,
                fn = function(){
                    _self.defineElements();
                    _self.getDefaultFontSize();
                };

            if( _self.options.store ){
                _self.cachedScript("js/store.min.js").done(function(script, textStatus) {
                  fn();
                });
            } else {
                fn();
            }            

        },

        cachedScript : function(url, options) {
 
          options = $.extend(options || {}, {
            dataType: "script",
            cache: true,
            url: url
          });
         
          return $.ajax(options);
        },

        bindControlerHandlers: function(){
           
            var _self = this;
            
            // decrease fn
            _self.$decreaseButton = $('.rvfs-decrease');
            if( _self.$decreaseButton.length > 0){
                _self.$decreaseButton.on('click', function(e){
                    var $el = $(this);

                    if(!$el.hasClass('disable')){
                        var n = parseInt( _self.getCurrentVariation() );
                        if(n > 1){
                            _self.$target.removeClass('rvfs-' + n);
                            _self.$target.attr('data-rvfs', n-1);
                            _self.options.store ? _self.storeCurrentSize() : '';
                            _self.fontsizeChanged();
                        } 
                    } else {
                        e.preventDefault();
                    }

                });
            }
            
            // increase fn
            _self.$increaseButton = $('.rvfs-increase');
            if( _self.$increaseButton.length > 0){
                _self.$increaseButton.on('click', function(e) { 
                    var $el = $(this);

                    if(!$el.hasClass('disable')){
                        var n = parseInt( _self.getCurrentVariation() );
                        if(n < _self.options.variations){
                            _self.$target.removeClass('rvfs-' + n);
                            _self.$target.attr('data-rvfs', n+1);
                            _self.options.store ? _self.storeCurrentSize() : '';
                            _self.fontsizeChanged();
                        }
                    } else{
                        e.preventDefault();
                    }

                });
            }
            
            // reset the font size to its default
            _self.$resetButton = $(".rvfs-reset");
            if( _self.$resetButton.length > 0){
                _self.$resetButton.on('click', function(){

                    var n = parseInt( _self.getCurrentVariation() );
                    _self.$target.removeClass('rvfs-' + n);

                    _self.$target.attr('data-rvfs', _self.defaultFontsize);
                    _self.options.store ? _self.storeCurrentSize() : '';
                    _self.fontsizeChanged();
                });
            }

        },

        defineElements: function() {
            var _self = this;
            _self.$target = $( _self.options.targetSection );
          
            if( _self.options.controllers.append !== false ){
                var resetButton = _self.options.controllers.showResetButton ? '<li><a href="javascript:;" class="rvfs-reset" title="Default font size">A</a></li>' : '';
                var template = _self.options.controllers.template,
                    controllersHtml = '';
                _self.$appendTo = $( _self.options.controllers.appendTo );
                
                if( $.trim(template).length > 0 ){
                     controllersHtml = template;
                } else {
                    controllersHtml = '<ul>' +
                                            '<li><a href="javascript:;" class="rvfs-decrease" title="Decrease font size">A-</a></li>' +
                                            resetButton +
                                            '<li><a href="javascript:;" class="rvfs-increase" title="Increase font size">A+</a></li>' +
                                      '</ul>';
                }

                _self.$appendTo.html( controllersHtml );

                _self.bindControlerHandlers();
            }
        },
        
        getDefaultFontSize: function () {
            var _self = this,
                v = _self.options.variations;
            _self.defaultFontsize = 0;

            if(v % 2 == 0){
                _self.defaultFontsize = (v/2) + 1;
            } else {
                _self.defaultFontsize = parseInt((v/2) + 1);
            }

            _self.setDefaultFontSize( _self.defaultFontsize );
        },

        setDefaultFontSize: function( dfs ){
            var _self = this;
            
            if( _self.options.store && store.get('rvfs') ){
                _self.$target.attr("data-rvfs", store.get('rvfs') );
            } else {
                _self.$target.attr("data-rvfs", dfs );
            }

            _self.fontsizeChanged();
        },

        storeCurrentSize : function() {
            store.set('rvfs', this.$target.attr("data-rvfs"));  
        },

        getCurrentVariation : function(){
            return this.$target.attr("data-rvfs");
        },

        fontsizeChanged : function(){
            var _self = this;
                currentFs = parseInt( _self.$target.attr("data-rvfs") );
            _self.$target.addClass( "rvfs-" +  currentFs);

            if(currentFs === _self.options.variations){
                _self.$increaseButton.addClass('disable');
            } else {
                _self.$increaseButton.removeClass('disable');
            }

            if(currentFs === 1){
                _self.$decreaseButton.addClass('disable');
            } else {
                _self.$decreaseButton.removeClass('disable');
            }
        }
    };

    
    $.fn[rvFontsize] = function (options) {
        var _self = this;
        return _self.each(function () {
            if (!$.data(_self, "plugin_" + rvFontsize)) {
                $.data(_self, "plugin_" + rvFontsize, new Plugin(_self, options));
            }
        });
    };

    $[rvFontsize] = function(options) {
        var $window = $(window);
        return $window.rvFontsize.apply($window, Array.prototype.slice.call(arguments, 0));
    };


})(jQuery, window, document);