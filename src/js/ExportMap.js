/**
 *
 * @constructor
 * @param {mindmaps.EventBus} eventBus
 * @param {mindmaps.MindMapModel} mindmapModel
 * @param {mindmaps.ExportMapView} view
 */
mindmaps.ExportMapPresenter = function(eventBus, mindmapModel) {
	var renderer = new mindmaps.StaticCanvasRenderer();

	this.go = function() {
		var $img = renderer.renderAsPNG(mindmapModel.getDocument());
        eventBus.publish(mindmaps.Event.IMAGE_EXPORT, $img.attr('src'));
	};
};
