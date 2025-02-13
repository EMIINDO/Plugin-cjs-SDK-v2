"use strict";

{
    const SDK = globalThis.SDK;

    const PLUGIN_CLASS = SDK.Plugins.cjs;

    PLUGIN_CLASS.Type = class cjsType extends SDK.ITypeBase {
        constructor(sdkPlugin, iObjectType) {
            super(sdkPlugin, iObjectType);
        }
    };
}