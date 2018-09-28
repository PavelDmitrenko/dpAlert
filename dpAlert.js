var dpDialog = /** @class */ (function () {
    function dpDialog() {
    }
    dpDialog.success = function (Message, Width) {
        if (Width === void 0) { Width = 250; }
        $.alert({
            boxWidth: Width + "px",
            useBootstrap: false,
            escapeKey: true,
            backgroundDismiss: true,
            type: "green",
            title: "Успех",
            content: Message,
            buttons: {
                OK: {
                    text: "OK",
                    btnClass: "btn-green"
                }
            }
        });
    };
    dpDialog.error = function (options) {
        var defaults = {
            title: "Ошибка",
            message: "",
            width: 300,
            callback: null
        };
        var settings = $.extend({}, defaults, options);
        $.alert({
            boxWidth: settings.width + "px",
            useBootstrap: false,
            escapeKey: true,
            backgroundDismiss: true,
            type: "red",
            title: settings.title,
            content: settings.message,
            onClose: function () {
                if (settings.callback != null)
                    settings.callback();
            },
            buttons: {
                OK: {
                    text: "OK",
                    btnClass: "btn-red"
                }
            }
        });
    };
    dpDialog.confirm = function (options) {
        var Defaults = {
            title: "",
            message: "",
            yes: null,
            no: null,
            width: 300,
            color: "blue"
        };
        var Settings = $.extend({}, Defaults, options);
        $.confirm({
            escapeKey: true,
            backgroundDismiss: true,
            boxWidth: Settings.width + "px",
            useBootstrap: false,
            title: Settings.title,
            type: Settings.color,
            content: Settings.message,
            buttons: {
                yes: {
                    text: "Да",
                    action: function () {
                        Settings.yes();
                        return true;
                    }
                },
                no: {
                    text: "Нет",
                    action: function () {
                        if (Settings.no !== null)
                            Settings.no();
                        return true;
                    }
                }
            }
        });
    };
    return dpDialog;
}());
//# sourceMappingURL=dpalert.js.map