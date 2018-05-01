var dpDialog = /** @class */ (function () {
    function dpDialog() {
    }
    dpDialog.Success = function (Message, Width) {
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
    dpDialog.Error = function (options) {
        var Defaults = {
            Title: "Ошибка",
            Message: "",
            Width: 300,
            Callback: null
        };
        var Settings = $.extend({}, Defaults, options);
        $.alert({
            boxWidth: Settings.Width + "px",
            useBootstrap: false,
            escapeKey: true,
            backgroundDismiss: true,
            type: "red",
            title: Settings.Title,
            content: Settings.Message,
            onClose: function () {
                if (Settings.Callback != null)
                    Settings.Callback();
            },
            buttons: {
                OK: {
                    text: "OK",
                    btnClass: "btn-red"
                }
            }
        });
    };
    dpDialog.Confirm = function (options) {
        var Defaults = {
            Title: "",
            Message: "",
            Yes: null,
            No: null,
            Width: 300,
            Color: "blue"
        };
        var Settings = $.extend({}, Defaults, options);
        $.confirm({
            escapeKey: true,
            backgroundDismiss: true,
            boxWidth: Settings.Width + "px",
            useBootstrap: false,
            title: Settings.Title,
            type: Settings.Color,
            content: Settings.Message,
            buttons: {
                yes: {
                    text: "Да",
                    action: function () {
                        Settings.Yes();
                        return true;
                    }
                },
                no: {
                    text: "Нет",
                    action: function () {
                        if (Settings.No !== null)
                            Settings.No();
                        return true;
                    }
                }
            }
        });
    };
    return dpDialog;
}());
//# sourceMappingURL=dpalert.js.map