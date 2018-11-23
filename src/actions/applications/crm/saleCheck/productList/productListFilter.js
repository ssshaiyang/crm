// 销售查看的过滤
export const saleCheckFilterActionCreater = function(filterVal) {
	return {
		type: 'SALE_CHECK_PRODUCT_LIST_FILTER',
		payload: {
			filter:filterVal
		}
	}
}