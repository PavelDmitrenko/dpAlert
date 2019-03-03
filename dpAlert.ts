
interface JQueryStatic {
	confirm(p: any): any;
	alert(p: any): any;
}

interface IdpDialogErrorOptions {
	message: string;
	title?: string;
	width?: number;
	callback?: () => void;
}

interface IdpDialogConfirmOptions {
	title?: string;
	message?: string;
	yes?: ()=> void;
	no?: () => void;
	width?: number;
	color?: string;
}

class dpDialog {

	static success = (Message: string, Width: number = 250 ) => {
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
	}

	static error = (options: IdpDialogErrorOptions) => {

		const defaults: IdpDialogErrorOptions = {
			title: "Ошибка",
			message: "",
			width: 300,
			callback:null
		};

		const settings = $.extend({}, defaults, options) as IdpDialogErrorOptions;

		$.alert({
			boxWidth: settings.width + "px",
			useBootstrap: false,
			escapeKey: true,
			backgroundDismiss: true,
			type: "red",
			title: settings.title,
			content: settings.message,
			onClose: () => {
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
	}

	static confirm = (options: IdpDialogConfirmOptions) => {

		var Defaults: IdpDialogConfirmOptions = {
			title:  "",
			message: "",
			yes: null, 
			no: null,
			width: 300,
			color:"blue"
		};
		
		var Settings: IdpDialogConfirmOptions = $.extend({}, Defaults, options);

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
					action: () => {
						Settings.yes();
						return true;
					}
				},

				no: {
					text: "Нет",
					action: () => {
						if (Settings.no !== null)
							Settings.no();
						return true;
					}
				}
			}
		});
	}

}



