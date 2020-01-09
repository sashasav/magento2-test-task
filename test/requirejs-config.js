var config = {
    map: {
        '*': {
            owl: 'js/owl.carousel'
        }
    },
    deps: [
        'js/mainScripts'
    ],
    shim: {
        'owl': {
            'deps': ['jquery']
        }
    },
    config: {
        mixins: {
            'Magento_Catalog/js/product/list/listing': {
                'Magento_Catalog/js/product/list/listing-mixin': true
            }
        }
    }
};
