# search-Plug-in
$(function () {
        var data = [
            { id: 1, name: "办公管理", pid: 0 },
            { id: 2, name: "请假申请", pid: 1 },
            { id: 3, name: "出差申请", pid: 1 },
            { id: 4, name: "请假记录", pid: 2 },
            { id: 5, name: "系统设置", pid: 0 },
            { id: 6, name: "权限管理", pid: 5 },
            { id: 7, name: "用户角色", pid: 6 },
            { id: 8, name: "菜单设置", pid: 6 },
        ];

        GetData(0, data);
        $("body").append(menus);
    });

    //菜单列表html
    var menus = '';

    //根据菜单主键id生成菜单列表html
    //id：菜单主键id
    //arry：菜单数组信息
    function GetData(id, arry) {
        var childArry = GetParentArry(id, arry);
        if (childArry.length > 0) {
            menus += '<ul>';
            for (var i in childArry) {
                menus += '<li>' + childArry[i].name;
                GetData(childArry[i].id, arry);
                menus += '</li>';
            }
            menus += '</ul>';
        }
    }

    //根据菜单主键id获取下级菜单
    //id：菜单主键id
    //arry：菜单数组信息
    function GetParentArry(id, arry) {
        var newArry = new Array();
        for (var i in arry) {
            if (arry[i].pid == id)
                newArry.push(arry[i]);
        }
        return newArry;
    }
