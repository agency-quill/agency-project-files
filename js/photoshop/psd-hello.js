var originalUnit = preferences.rulerUnits;
preferences.rulerUnits = Units.PIXELS;
var docRef = app.documents.add(200,100);
var artLayerRef = docRef.artLayers.add();
artLayerRef.kind = LayerKind.TEXT;
var textItemRef = artLayerRef.textItem;
textItemRef.contents = "Hello world!";
docRef = null;
artLayerRef = null;
textItemRef = null;
app.preferences.rulerUnits = originalUnit;