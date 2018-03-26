const appConfig = {
    config: {
        api: 'http://erp-test-api.cmcm.com',
    },
    actions: { // page内全局 action
        GetGoodsList: {
            action: 'Fetch',
            value: {
                type: 'get',
                url: 'http://10.60.206.15:3167/lists',
                data: {
                    goods_name: 'state.Goods.filterGoodsName',
                    goods_id: 'state.Goods.filterGoodsID',
                    brand_name: 'state.Goods.filter_goodsBrand',
                    brand_name: 'state.Goods.filter_goodsCategory',
                    page: 'state.Goods.goodsPageIndex',
                    page_size: 'state.Goods.goodsPageSize',
                },
                callback: `
                    ({res, state}) => {
                        state.Goods.goodsList = res
                    }
                `
            }
        }
    },
    pages: [{
        name: 'Goods', // 唯一
        component: require('./goods/component'),
        state: require('./goods/state')
    }/* , {
        name: 'News', // 唯一
        component: require('./news/component'),
        state: require('./news/state')
    } */]
}

module.exports = appConfig