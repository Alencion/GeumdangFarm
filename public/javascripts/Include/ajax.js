var ajax = {
    requestGET: function (url, param) {
        var ret = null;
        jQuery.ajax({
            url: url,
            data: param,
            dataType: 'json',
            type: 'GET',
            async: false,
            success: function (result) {
                ret = result;
            },
        });
        return ret;
    },
    requestPOST: function (url, param) {
        var ret = null;
        jQuery.ajax({
            url: url,
            data: param,
            dataType: 'json',
            type: 'POST',
            async: false,
            success: function (result) {
                ret = result;
            },
        });
        return ret;
    }
};
