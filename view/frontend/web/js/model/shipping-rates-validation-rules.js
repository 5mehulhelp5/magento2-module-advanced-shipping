/**
 * Copyright © Owebia. All rights reserved.
 * See COPYING.txt for license details.
 */

/*global define*/
define(
    [],
    function () {
        "use strict";
        return {
            getRules: function () {
                return window.checkoutConfig.owebia.advanced_shipping.validation_rules;
            }
        };
    }
);
