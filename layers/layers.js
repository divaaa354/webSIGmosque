var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_shop_bakery_1 = new ol.format.GeoJSON();
var features_shop_bakery_1 = format_shop_bakery_1.readFeatures(json_shop_bakery_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shop_bakery_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shop_bakery_1.addFeatures(features_shop_bakery_1);
var lyr_shop_bakery_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_shop_bakery_1, 
                style: style_shop_bakery_1,
                interactive: true,
                title: '<img src="styles/legend/shop_bakery_1.png" /> shop_bakery'
            });
var format_shop_bakery_2 = new ol.format.GeoJSON();
var features_shop_bakery_2 = format_shop_bakery_2.readFeatures(json_shop_bakery_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shop_bakery_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shop_bakery_2.addFeatures(features_shop_bakery_2);
var lyr_shop_bakery_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_shop_bakery_2, 
                style: style_shop_bakery_2,
                interactive: true,
                title: '<img src="styles/legend/shop_bakery_2.png" /> shop_bakery'
            });
var format_healthcare_clinic_3 = new ol.format.GeoJSON();
var features_healthcare_clinic_3 = format_healthcare_clinic_3.readFeatures(json_healthcare_clinic_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_healthcare_clinic_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_healthcare_clinic_3.addFeatures(features_healthcare_clinic_3);
var lyr_healthcare_clinic_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_healthcare_clinic_3, 
                style: style_healthcare_clinic_3,
                interactive: true,
                title: '<img src="styles/legend/healthcare_clinic_3.png" /> healthcare_clinic'
            });
var format_healthcare_clinic_4 = new ol.format.GeoJSON();
var features_healthcare_clinic_4 = format_healthcare_clinic_4.readFeatures(json_healthcare_clinic_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_healthcare_clinic_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_healthcare_clinic_4.addFeatures(features_healthcare_clinic_4);
var lyr_healthcare_clinic_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_healthcare_clinic_4, 
                style: style_healthcare_clinic_4,
                interactive: true,
                title: '<img src="styles/legend/healthcare_clinic_4.png" /> healthcare_clinic'
            });
var format_healthcare_alternative_5 = new ol.format.GeoJSON();
var features_healthcare_alternative_5 = format_healthcare_alternative_5.readFeatures(json_healthcare_alternative_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_healthcare_alternative_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_healthcare_alternative_5.addFeatures(features_healthcare_alternative_5);
var lyr_healthcare_alternative_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_healthcare_alternative_5, 
                style: style_healthcare_alternative_5,
                interactive: true,
                title: '<img src="styles/legend/healthcare_alternative_5.png" /> healthcare_alternative'
            });
var format_building_mosque_6 = new ol.format.GeoJSON();
var features_building_mosque_6 = format_building_mosque_6.readFeatures(json_building_mosque_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_mosque_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_mosque_6.addFeatures(features_building_mosque_6);
var lyr_building_mosque_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_mosque_6, 
                style: style_building_mosque_6,
                interactive: true,
                title: '<img src="styles/legend/building_mosque_6.png" /> building_mosque'
            });
var format_building_mosque_7 = new ol.format.GeoJSON();
var features_building_mosque_7 = format_building_mosque_7.readFeatures(json_building_mosque_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_mosque_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_mosque_7.addFeatures(features_building_mosque_7);
var lyr_building_mosque_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_mosque_7, 
                style: style_building_mosque_7,
                interactive: true,
                title: '<img src="styles/legend/building_mosque_7.png" /> building_mosque'
            });
var format_building_house_8 = new ol.format.GeoJSON();
var features_building_house_8 = format_building_house_8.readFeatures(json_building_house_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_8.addFeatures(features_building_house_8);
var lyr_building_house_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_house_8, 
                style: style_building_house_8,
                interactive: true,
                title: '<img src="styles/legend/building_house_8.png" /> building_house'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_shop_bakery_1.setVisible(true);lyr_shop_bakery_2.setVisible(true);lyr_healthcare_clinic_3.setVisible(true);lyr_healthcare_clinic_4.setVisible(true);lyr_healthcare_alternative_5.setVisible(true);lyr_building_mosque_6.setVisible(true);lyr_building_mosque_7.setVisible(true);lyr_building_house_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_shop_bakery_1,lyr_shop_bakery_2,lyr_healthcare_clinic_3,lyr_healthcare_clinic_4,lyr_healthcare_alternative_5,lyr_building_mosque_6,lyr_building_mosque_7,lyr_building_house_8];
lyr_shop_bakery_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'shop': 'shop', 'name:en': 'name:en', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'name': 'name', });
lyr_shop_bakery_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'shop': 'shop', 'name': 'name', 'building': 'building', });
lyr_healthcare_clinic_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'healthcare': 'healthcare', 'operator:type': 'operator:type', 'name': 'name', 'healthcare:speciality': 'healthcare:speciality', 'amenity': 'amenity', 'addr:full': 'addr:full', 'addr:city': 'addr:city', });
lyr_healthcare_clinic_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'healthcare': 'healthcare', 'operator:wikipedia': 'operator:wikipedia', 'operator:wikidata': 'operator:wikidata', 'operator': 'operator', 'operator:type': 'operator:type', 'ground_floor:height': 'ground_floor:height', 'evacuation_center': 'evacuation_center', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', 'beauty': 'beauty', 'name': 'name', 'building': 'building', 'amenity': 'amenity', });
lyr_healthcare_alternative_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'healthcare': 'healthcare', 'name': 'name', 'building': 'building', });
lyr_building_mosque_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'opening_hours': 'opening_hours', 'air_conditioning': 'air_conditioning', 'addr:housenumber': 'addr:housenumber', 'denomination': 'denomination', 'addr:street': 'addr:street', 'school:type_idn': 'school:type_idn', 'operator:type': 'operator:type', 'addr:postcode': 'addr:postcode', 'water_source': 'water_source', 'toilets:number': 'toilets:number', 'toilet:facilities': 'toilet:facilities', 'shelter_type': 'shelter_type', 'kitchen:facilities': 'kitchen:facilities', 'religion': 'religion', 'name': 'name', 'ground_floor:height': 'ground_floor:height', 'evacuation_center': 'evacuation_center', 'amenity': 'amenity', 'addr:full': 'addr:full', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'addr:city': 'addr:city', 'access:roof': 'access:roof', });
lyr_building_mosque_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'service_times': 'service_times', 'denomination': 'denomination', 'addr:postcode': 'addr:postcode', 'ground_floor:height': 'ground_floor:height', 'evacuation_center': 'evacuation_center', 'building:walls': 'building:walls', 'addr:street': 'addr:street', 'backup_generator': 'backup_generator', 'religion': 'religion', 'name': 'name', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'amenity': 'amenity', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', });
lyr_building_house_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_shop_bakery_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'shop': '', 'name:en': '', 'addr:street': '', 'addr:housenumber': '', 'name': '', });
lyr_shop_bakery_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'shop': '', 'name': '', 'building': '', });
lyr_healthcare_clinic_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'healthcare': '', 'operator:type': '', 'name': '', 'healthcare:speciality': '', 'amenity': '', 'addr:full': '', 'addr:city': '', });
lyr_healthcare_clinic_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'healthcare': '', 'operator:wikipedia': '', 'operator:wikidata': '', 'operator': '', 'operator:type': '', 'ground_floor:height': '', 'evacuation_center': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', 'beauty': '', 'name': '', 'building': '', 'amenity': '', });
lyr_healthcare_alternative_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'healthcare': '', 'name': '', 'building': '', });
lyr_building_mosque_6.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'opening_hours': '', 'air_conditioning': '', 'addr:housenumber': '', 'denomination': '', 'addr:street': '', 'school:type_idn': '', 'operator:type': '', 'addr:postcode': '', 'water_source': '', 'toilets:number': '', 'toilet:facilities': '', 'shelter_type': '', 'kitchen:facilities': '', 'religion': '', 'name': '', 'ground_floor:height': '', 'evacuation_center': '', 'amenity': '', 'addr:full': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'addr:city': '', 'access:roof': '', });
lyr_building_mosque_7.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'service_times': '', 'denomination': '', 'addr:postcode': '', 'ground_floor:height': '', 'evacuation_center': '', 'building:walls': '', 'addr:street': '', 'backup_generator': '', 'religion': '', 'name': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'amenity': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', });
lyr_building_house_8.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_shop_bakery_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'shop': 'no label', 'name:en': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'name': 'no label', });
lyr_shop_bakery_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'shop': 'no label', 'name': 'no label', 'building': 'no label', });
lyr_healthcare_clinic_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'healthcare': 'no label', 'operator:type': 'no label', 'name': 'no label', 'healthcare:speciality': 'no label', 'amenity': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', });
lyr_healthcare_clinic_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'healthcare': 'no label', 'operator:wikipedia': 'no label', 'operator:wikidata': 'no label', 'operator': 'no label', 'operator:type': 'no label', 'ground_floor:height': 'no label', 'evacuation_center': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', 'beauty': 'no label', 'name': 'no label', 'building': 'no label', 'amenity': 'no label', });
lyr_healthcare_alternative_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'healthcare': 'no label', 'name': 'no label', 'building': 'no label', });
lyr_building_mosque_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'opening_hours': 'no label', 'air_conditioning': 'no label', 'addr:housenumber': 'no label', 'denomination': 'no label', 'addr:street': 'no label', 'school:type_idn': 'no label', 'operator:type': 'no label', 'addr:postcode': 'no label', 'water_source': 'no label', 'toilets:number': 'no label', 'toilet:facilities': 'no label', 'shelter_type': 'no label', 'kitchen:facilities': 'no label', 'religion': 'no label', 'name': 'no label', 'ground_floor:height': 'no label', 'evacuation_center': 'no label', 'amenity': 'no label', 'addr:full': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', });
lyr_building_mosque_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'service_times': 'no label', 'denomination': 'no label', 'addr:postcode': 'no label', 'ground_floor:height': 'no label', 'evacuation_center': 'no label', 'building:walls': 'no label', 'addr:street': 'no label', 'backup_generator': 'no label', 'religion': 'no label', 'name': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'amenity': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', });
lyr_building_house_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_building_house_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});