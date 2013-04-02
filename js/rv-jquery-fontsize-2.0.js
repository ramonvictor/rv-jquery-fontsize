/*
 *  Project: RV Font Size jQuery Plugin
 *  Description: An easy and flexible way to give font size accessibility control to the web systems end users.
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
        setCookie: false,
        variations: 7,
        controlers: {
            append: false,
            appendTo: 'body',
            showResetButton: false,
            template : ''
        }
    };

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = rvFontsize;

        this.init();
    }

    Plugin.prototype = {

        init: function () {

            this.defineElements();
            this.getDefaultFontSize();

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
                            _self.storeCurrentSize();
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
                            _self.storeCurrentSize();
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
                    // !create reset click handler
                });
            }

        },

        defineElements: function() {
            this.$target = $( this.options.targetSection );
          
            if( this.options.controlers.append !== false ){
                var resetButton = this.options.controlers.showResetButton ? '<li><a href="javascript:;" class="rvfs-reset" title="Tamanho padrão">A</a></li>' : '';
                var template = this.options.controlers.template,
                    controlersHtml = '';
                this.$appendTo = $( this.options.controlers.appendTo );
                
                if( $.trim(template).length > 0 ){
                     controlersHtml = template;
                } else {
                    controlersHtml = '<ul>' +
                                            '<li><a href="javascript:;" class="rvfs-decrease" title="Decrease font size">A-</a></li>' +
                                            resetButton +
                                            '<li><a href="javascript:;" class="rvfs-increase" title="Increase font size">A+</a></li>' +
                                      '</ul>';
                }

                this.$appendTo.html( controlersHtml );

                this.bindControlerHandlers();
            }
        },
        
        getDefaultFontSize: function () {
            var defaultFontsize = 0,
                v = this.options.variations;

            if(v % 2 == 0){
                defaultFontsize = (v/2) + 1;
            } else {
                defaultFontsize = parseInt((v/2) + 1);
            }

            this.setDefaultFontSize( defaultFontsize );
        },

        setDefaultFontSize: function( dfs ){
            if( this.options.setCookie && ($.cookie("rvFontsize") !== null) ){
                this.$target.attr("data-rvfs", $.cookie("rvFontsize") );
            } else {
                this.$target.attr("data-rvfs", dfs );
            }

            this.fontsizeChanged();
        },

        storeCurrentSize : function() {
            $.cookie('fontSize', this.$target.attr("data-rvfs") );
        },

        getCurrentVariation : function(){
            return this.$target.attr("data-rvfs");
        },

        fontsizeChanged : function(){
            var currentFs = parseInt( this.$target.attr("data-rvfs") );
            this.$target.addClass( "rvfs-" +  currentFs);

            if(currentFs === this.options.variations){
                this.$increaseButton.addClass('disable');
            } else {
                this.$increaseButton.removeClass('disable');
            }

            if(currentFs === 1){
                this.$decreaseButton.addClass('disable');
            } else {
                this.$decreaseButton.removeClass('disable');
            }
        }
    };

    
    $.fn[rvFontsize] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + rvFontsize)) {
                $.data(this, "plugin_" + rvFontsize, new Plugin(this, options));
            }
        });
    };

    $[rvFontsize] = function(options) {
        var $window = $(window);
        return $window.rvFontsize.apply($window, Array.prototype.slice.call(arguments, 0));
    };


})(jQuery, window, document);