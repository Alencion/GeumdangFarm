var ajax = {
    request: function (url, param) {
        var ret = null;
        jQuery.ajax({
            url: url,
            data: {data : param},
            dataType: 'json',
            type: 'GET',
            async: false,
            success: function (result) {
                ret = result;
            },
        });
        return ret;
    }
};
