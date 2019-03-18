
    var sel = {
        multiSelect: function(opts, callBack) {
            /*
             * 参数
             */
            var opt = {
                isJquery: false,
                data: "",
                a_item: "",
                a_class: 'color: black;padding: 12px 16px;text-decoration: none;display: block;line-height: 24px;cursor: pointer;text-align:left;',
                show: false,
                multiSelect: (opts.multiSelect ? opts.multiSelect : false), //是否多选
                searchBar: (opts.searchBar ? opts.searchBar : false),
                title: (opts.title ? opts.title : "请选择"),
                width: (opts.width ? opts.width : 215),
                arry: []
            }
            if(opts && opts.data && opts.data.length > 0) {
                opt.data = opts.data
                for(var i in opt.data) {
                    var setData = opt.data[i]
                    if(opts.multiSelect) {
                        opt.a_item += '<a class="_item" style="' + opt.a_class + '" data-id=' + opt.data[i].id + '>' + opt.data[i].name + '<label style="float: right !important;" class="supply-label"><input disabled="disabled" class="supply-input" type="checkbox" name="type"><span></span></label></a>';
                    } else {
                        opt.a_item += '<a class="_item" style="' + opt.a_class + '" data-id=' + setData[opts.dataKey[0]] + '>' + setData[opts.dataKey[1]] + '</a>';
                    }

                }
            }

            /*
             * 样式
             */
            var _setAttribute = {
                boxStyle: 'position:relative;display:inline-block',
                btnStyle: 'background:#FFFFFF;border:1px solid #e6e6e6;height:30px;border-radius:6px;margin-left:5px;width:' + opt.width + 'px;padding:0px 10px',

                _dropdown_contentStyle: 'display:none;position:absolute;background-color:#FFFFFF;width:' + opt.width + 'px;overflow:auto;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.2);z-index: 5;margin-left:5px',
                _select_search_boxStyle: 'height:40px;width:100%;line-height:40px;border-bottom:1px solid #DDDDDD;border-top:1px solid #DDDDDD;padding:5px 0',

                inputStyle: 'float:left;border:1px solid #e6e6e6;height:37px;border-radius:6px 0 0 6px;margin-left:5px;padding:0px 10px;width:145px',

                _select_icon: 'height: 39px;width: 40px;background: #E7E1CD;text-align: center;border-radius: 0 6px 6px 0;color: #FFFFFF;float: left;',
                _div_item: 'max-height: 240px;overflow-y: auto;',
                aOver: 'background-color: #f1f1f1;',
                _show: 'block',
                btn: 'position:absolute;height: 30px;padding: 0 20px;border: 0;border-radius: 5px;color: white;vertical-align: middle;line-height: 30px;font-size: 16px;right: 8px;background-color:#E7E1CD;'
            }

            var $setAttribute = {
                boxStyle: {
                    'position': 'relative',
                    'display': 'inline-block'
                },
                btnStyle: {
                    'background': '-webkit-gradient(linear, 0% 0%, 0% 100%, from(#E9E9E9), to(#FFFFFF))',
                    'border': '1px solid #e6e6e6',
                    'height': '37px',
                    'border-radius': '6px',
                    'margin-left': '5px',
                    'width': '215px',
                    'padding': '0px 10px'
                },

                _dropdown_contentStyle: {
                    'display': 'none',
                    'position': 'absolute',
                    'background-color': '#FFFFFF',
                    'min-width': '215px',
                    'overflow': 'auto',
                    'box-shadow': '0px 8px 16px 0px rgba(0, 0, 0, 0.2)',
                    'z-index': 1,
                    'margin-left': '5px',
                },
                _select_search_boxStyle: {
                    'height': '40px',
                    'width': '100%',
                    'line-height': '40px',
                    'border-bottom': '1px solid #DDDDDD',
                    'padding': '5px 0'
                },
                inputStyle: {
                    'float': 'left',
                    'border': '1px solid #e6e6e6',
                    'height': '37px',
                    'border-radius': '6px 0 0 6px',
                    'margin-left': '5px',
                    'padding': '0px 10px',
                    'width': '145px'
                }

            }

            /**
             * 创建元素
             * **/
            var _button = document.createElement('button');
            var _i = document.createElement('i');
            var _span = document.createElement('span');

            var _dropdown_content = document.createElement('div'); //容器

            var _select_search_box = document.createElement('div'); //搜索栏容器

            var _select_search_footer = document.createElement('div');

            var _div_input = document.createElement('div');
            var _input = document.createElement('input');

            var _select_icon = document.createElement('div');
            var _icon_originalimage = document.createElement('i');

            var _div_item = document.createElement('div');

            var btn = document.createElement('button');

            _div_item.innerHTML = opt.a_item;

            /*
             * 设置样式
             */

            _i.style.position = 'absolute';
            _i.style.right = '5px';
            _span.textContent = opt.title;
            _span.className = 'select-val';
            _button.className = 'select-search-btn';
            _button.setAttribute('style', _setAttribute.btnStyle);
            _dropdown_content.setAttribute('style', _setAttribute._dropdown_contentStyle);
            _select_search_box.setAttribute('style', _setAttribute._select_search_boxStyle);
            _select_search_footer.setAttribute('style', _setAttribute._select_search_boxStyle);
            _select_search_footer.style.height = "30px"
            _div_input.setAttribute('style', 'float: left')
            _input.setAttribute('style', _setAttribute.inputStyle);
            _select_icon.setAttribute('style', _setAttribute._select_icon);
            _i.className = "icon iconfont icon-less";
            _icon_originalimage.className = 'icon iconfont icon-originalimage';

            btn.setAttribute('style', _setAttribute.btn)
            document.getElementById(opts.id).setAttribute("style", "position: relative;display: inline-block;");
            document.getElementById(opts.id).className = opts.id;

            _div_item.setAttribute('style', _setAttribute._div_item);

            _button.appendChild(_span);
            _button.appendChild(_i);
            _select_icon.appendChild(_icon_originalimage);
            _div_input.appendChild(_input);
            _select_search_box.appendChild(_div_input);
            _select_search_box.appendChild(_select_icon);

            if(opt.searchBar) {
                _dropdown_content.appendChild(_select_search_box);
            }

            _dropdown_content.appendChild(_div_item);

            document.getElementById(opts.id).appendChild(_button);
            document.getElementById(opts.id).appendChild(_dropdown_content);
            /**
             * 绑定事件
             * **/
            var _itemElememt = document.getElementById(opts.id).getElementsByClassName("_item");
            for(var i = 0; i < _itemElememt.length; i++) {
                _itemElememt[i].onmouseover = function() {
                    this.setAttribute("style", opt.a_class + _setAttribute.aOver);
                };
                _itemElememt[i].onmouseout = function() {
                    this.setAttribute("style", opt.a_class);
                };
                _itemElememt[i].onclick = function() {

                    if(_span.textContent == opts.title) {
                        _span.textContent = "";
                    }
                    if(opts.multiSelect) {
                        if(this.querySelector(".supply-input").checked) {
                            this.querySelector(".supply-input").checked = false;
                            opt.arry.splice(this.textContent, 1);

                        } else {
                            this.querySelector(".supply-input").checked = true;
                            opt.arry.push(this.textContent);

                        }
                        _span.textContent = opt.arry;
                        if(!_span.textContent) {
                            _span.textContent = opts.title
                        }

                    } else {

                        _span.textContent = this.textContent;
                        _span.setAttribute("data-data", this.getAttribute("data-id"));
                        _dropdown_content.style.display = 'none';
                    };

                };
            }
            _button.addEventListener("click", function() {
                showFunction()
            })

            if(opt.searchBar) {
                _input.onkeyup = function(e) {
                    var inputContent = this.value;

                    for(var i = 0; i < _itemElememt.length; i++) {
                        if(inputContent) {
                            if(_itemElememt[i].textContent.indexOf(inputContent) >= 0) {
                                _itemElememt[i].style.display = 'block';
                            } else {
                                _itemElememt[i].style.display = 'none';
                            }
                        } else {
                            _itemElememt[i].style.display = 'block';
                        }

                    }
                }
            }

            function showFunction() {
                if(_dropdown_content.style.display == _setAttribute._show) {
                    _dropdown_content.style.display = 'none';
                    _i.className = 'icon iconfont icon-less';
                } else {
                    _dropdown_content.style.display = _setAttribute._show;
                    _i.className = 'icon iconfont icon-moreunfold';
                }

            }

            _input.className = '_dropdown_content'
            window.onclick = function(event) {
                if(
                    event.target.matches('.select-search-btn') ||
                    event.target.matches('._dropdown_content') ||
                    event.target.matches('._item') ||
                    event.target.matches('.select-val')
                ) {

                } else {
                    _dropdown_content.style.display = 'none';
                }

            }
            callBack();
        }

    };
    return sel;
