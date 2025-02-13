"use strict";
{
    globalThis.C3.Plugins.cjs.Acts = {
        ExecuteJS(value0)
        {

            const self = this;
            this.returnValue = "";
            try
            {
                self.returnValue = eval(value0);
            }
            catch (err)
            {
                self.returnValue = (JSON.stringify(err));
                self._trigger(self.EMI_INDO.Errvalue);

            }

        }
    };
}