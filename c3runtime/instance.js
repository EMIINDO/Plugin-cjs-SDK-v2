"use strict";
{
    // Porting BY EMI INDO with c3addon-ide-plus

    globalThis.C3.Plugins.cjs.Instance = class CallJSInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();


            if (properties) {

                this.nameOfExternalScript = properties[0];

            }


            this.returnValue = "";

            let myScriptTag;
            myScriptTag = document.createElement('script');
            myScriptTag.setAttribute("type", "text/javascript");
            myScriptTag.setAttribute("src", this.nameOfExternalScript);

            if (typeof myScriptTag != "undefined")

                document.getElementsByTagName("head")[0].appendChild(myScriptTag);

            this.EMI_INDO = globalThis.C3.Plugins.cjs.Cnds;

        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }

    };
}