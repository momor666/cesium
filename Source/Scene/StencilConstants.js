define([
        '../Core/freezeObject',
        './StencilFunction',
        './StencilOperation'
    ], function(
        freezeObject,
        StencilFunction,
        StencilOperation) {
    'use strict';

    /**
     * @private
     */
    var StencilConstants = {
        NONE_MASK : 0x00,
        ALL_MASK : 0xFF,
        CESIUM_3D_TILE_MASK : 0xE0,
        TERRAIN_CESIUM_3D_TILE_MASK : 0xF0,
        TERRAIN_MASK : 0x10,
        CLASSIFICATION_MASK : 0x0F
    };

    StencilConstants.setTerrainBit = function() {
        return {
            enabled : true,
            frontFunction : StencilFunction.ALWAYS,
            frontOperation : {
                fail : StencilOperation.KEEP,
                zFail : StencilOperation.KEEP,
                zPass : StencilOperation.REPLACE
            },
            backFunction : StencilFunction.ALWAYS,
            backOperation : {
                fail : StencilOperation.KEEP,
                zFail : StencilOperation.KEEP,
                zPass : StencilOperation.REPLACE
            },
            reference : StencilConstants.NONE_MASK,
            mask : StencilConstants.TERRAIN_MASK
        };
    };

    StencilConstants.unsetTerrainBit = function() {
        return {
            enabled : true,
            frontFunction : StencilFunction.ALWAYS,
            frontOperation : {
                fail : StencilOperation.KEEP,
                zFail : StencilOperation.KEEP,
                zPass : StencilOperation.REPLACE
            },
            backFunction : StencilFunction.ALWAYS,
            backOperation : {
                fail : StencilOperation.KEEP,
                zFail : StencilOperation.KEEP,
                zPass : StencilOperation.REPLACE
            },
            reference : StencilConstants.ALL_MASK,
            mask : StencilConstants.TERRAIN_MASK
        };
    };

    return freezeObject(StencilConstants);
});
