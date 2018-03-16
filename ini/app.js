const appConfig = {
    config: {
        api: 'http://erp-test-api.cmcm.com',
    },
    actions: { // page内全局 action
        GetGoodsList: {
            action: 'FetchData',
            value: {
                type: 'get',
                url: '/api/goods/lists',
                data: {
                    goods_name: 'state.goods.filter_goodsName',
                    goods_id: 'state.goods.filter_goodsID',
                    brand_name: 'state.goods.filter_goodsBrand',
                    brand_name: 'state.goods.filter_goodsCategory',
                    page: 'state.goods.goodsPageIndex',
                    page_size: 'state.goods.goodsPageSize',
                },
                callback: `
                    ({res, state}) => {
                        state.goods.goodsList = res.data.list
                        state.goods.goodsTotal = res.data.total
                    }
                `
            }
        }
    },
    pages: [{
        name: 'Goods',  // 唯一
        component: require('./goods/component'),
        state: require('./goods/state')
    }]
}

module.exports = appConfig