/*
 * @Author: lcj
 * @Date:   2017-08-24 09:46:37
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-24 09:47:52
 * @Descriptions: 
 */

export const switchBulkImportModalVisible = function(visible) {
	return {
		type: 'BULK_IMPORT_MODAL_SWITCH_VISIBLE',
		payload: {
			visible: visible
		}
	}
}