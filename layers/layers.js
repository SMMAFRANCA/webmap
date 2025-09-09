var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_LimiteMunicipaldeFranca_3 = new ol.format.GeoJSON();
var features_LimiteMunicipaldeFranca_3 = format_LimiteMunicipaldeFranca_3.readFeatures(json_LimiteMunicipaldeFranca_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteMunicipaldeFranca_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipaldeFranca_3.addFeatures(features_LimiteMunicipaldeFranca_3);
var lyr_LimiteMunicipaldeFranca_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteMunicipaldeFranca_3, 
                style: style_LimiteMunicipaldeFranca_3,
                popuplayertitle: 'Limite Municipal de Franca',
                interactive: false,
                title: '<img src="styles/legend/LimiteMunicipaldeFranca_3.png" /> Limite Municipal de Franca'
            });
var format_reaUrbanadeFranca_4 = new ol.format.GeoJSON();
var features_reaUrbanadeFranca_4 = format_reaUrbanadeFranca_4.readFeatures(json_reaUrbanadeFranca_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaUrbanadeFranca_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaUrbanadeFranca_4.addFeatures(features_reaUrbanadeFranca_4);
var lyr_reaUrbanadeFranca_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaUrbanadeFranca_4, 
                style: style_reaUrbanadeFranca_4,
                popuplayertitle: 'Área Urbana de Franca',
                interactive: false,
                title: '<img src="styles/legend/reaUrbanadeFranca_4.png" /> Área Urbana de Franca'
            });
var format_EmprendimentoElias_5 = new ol.format.GeoJSON();
var features_EmprendimentoElias_5 = format_EmprendimentoElias_5.readFeatures(json_EmprendimentoElias_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmprendimentoElias_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmprendimentoElias_5.addFeatures(features_EmprendimentoElias_5);
var lyr_EmprendimentoElias_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmprendimentoElias_5, 
                style: style_EmprendimentoElias_5,
                popuplayertitle: 'Emprendimento Elias',
                interactive: true,
    title: 'Emprendimento Elias<br />\
    <img src="styles/legend/EmprendimentoElias_5_0.png" /> _Haty_Asfalto<br />\
    <img src="styles/legend/EmprendimentoElias_5_1.png" /> _Haty_Institucional<br />\
    <img src="styles/legend/EmprendimentoElias_5_2.png" /> _Haty_Quadras<br />\
    <img src="styles/legend/EmprendimentoElias_5_3.png" /> _Haty_Verde<br />\
    <img src="styles/legend/EmprendimentoElias_5_4.png" /> HATCH LAZER<br />\
    <img src="styles/legend/EmprendimentoElias_5_5.png" /> HATCH PASSSEIO<br />\
    <img src="styles/legend/EmprendimentoElias_5_6.png" /> LOTES MISTOS<br />' });
var format_EmprendimentoElias_6 = new ol.format.GeoJSON();
var features_EmprendimentoElias_6 = format_EmprendimentoElias_6.readFeatures(json_EmprendimentoElias_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmprendimentoElias_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmprendimentoElias_6.addFeatures(features_EmprendimentoElias_6);
var lyr_EmprendimentoElias_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmprendimentoElias_6, 
                style: style_EmprendimentoElias_6,
                popuplayertitle: 'Emprendimento Elias',
                interactive: true,
                title: '<img src="styles/legend/EmprendimentoElias_6.png" /> Emprendimento Elias'
            });
var format_EmprendimentoElias_7 = new ol.format.GeoJSON();
var features_EmprendimentoElias_7 = format_EmprendimentoElias_7.readFeatures(json_EmprendimentoElias_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmprendimentoElias_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmprendimentoElias_7.addFeatures(features_EmprendimentoElias_7);
var lyr_EmprendimentoElias_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmprendimentoElias_7, 
                style: style_EmprendimentoElias_7,
                popuplayertitle: 'Emprendimento Elias',
                interactive: true,
                title: '<img src="styles/legend/EmprendimentoElias_7.png" /> Emprendimento Elias'
            });
var format_EmpreendimentoEssence_8 = new ol.format.GeoJSON();
var features_EmpreendimentoEssence_8 = format_EmpreendimentoEssence_8.readFeatures(json_EmpreendimentoEssence_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoEssence_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEssence_8.addFeatures(features_EmpreendimentoEssence_8);
var lyr_EmpreendimentoEssence_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEssence_8, 
                style: style_EmpreendimentoEssence_8,
                popuplayertitle: 'Empreendimento Essence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEssence_8.png" /> Empreendimento Essence'
            });
var format_EmpreendimentoEssence_9 = new ol.format.GeoJSON();
var features_EmpreendimentoEssence_9 = format_EmpreendimentoEssence_9.readFeatures(json_EmpreendimentoEssence_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoEssence_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEssence_9.addFeatures(features_EmpreendimentoEssence_9);
var lyr_EmpreendimentoEssence_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEssence_9, 
                style: style_EmpreendimentoEssence_9,
                popuplayertitle: 'Empreendimento Essence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEssence_9.png" /> Empreendimento Essence'
            });
var format_EmpreendimentoResidencialSoCarlosI_10 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSoCarlosI_10 = format_EmpreendimentoResidencialSoCarlosI_10.readFeatures(json_EmpreendimentoResidencialSoCarlosI_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialSoCarlosI_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSoCarlosI_10.addFeatures(features_EmpreendimentoResidencialSoCarlosI_10);
var lyr_EmpreendimentoResidencialSoCarlosI_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSoCarlosI_10, 
                style: style_EmpreendimentoResidencialSoCarlosI_10,
                popuplayertitle: 'Empreendimento Residencial São Carlos I',
                interactive: true,
    title: 'Empreendimento Residencial São Carlos I<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_10_0.png" /> _Haty_Asfalto<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_10_1.png" /> _Haty_Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_10_2.png" /> _Haty_Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_10_3.png" /> _Haty_Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_10_4.png" /> HATCH PASSSEIO<br />' });
var format_EmpreendimentoResidencialSoCarlosI_11 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSoCarlosI_11 = format_EmpreendimentoResidencialSoCarlosI_11.readFeatures(json_EmpreendimentoResidencialSoCarlosI_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialSoCarlosI_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSoCarlosI_11.addFeatures(features_EmpreendimentoResidencialSoCarlosI_11);
var lyr_EmpreendimentoResidencialSoCarlosI_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSoCarlosI_11, 
                style: style_EmpreendimentoResidencialSoCarlosI_11,
                popuplayertitle: 'Empreendimento Residencial São Carlos I',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSoCarlosI_11.png" /> Empreendimento Residencial São Carlos I'
            });
var format_EmpreendimentoResidencialSoCarlosI_12 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSoCarlosI_12 = format_EmpreendimentoResidencialSoCarlosI_12.readFeatures(json_EmpreendimentoResidencialSoCarlosI_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialSoCarlosI_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSoCarlosI_12.addFeatures(features_EmpreendimentoResidencialSoCarlosI_12);
var lyr_EmpreendimentoResidencialSoCarlosI_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSoCarlosI_12, 
                style: style_EmpreendimentoResidencialSoCarlosI_12,
                popuplayertitle: 'Empreendimento Residencial São Carlos I',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSoCarlosI_12.png" /> Empreendimento Residencial São Carlos I'
            });
var format_EmpreendimentoMonti_13 = new ol.format.GeoJSON();
var features_EmpreendimentoMonti_13 = format_EmpreendimentoMonti_13.readFeatures(json_EmpreendimentoMonti_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoMonti_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMonti_13.addFeatures(features_EmpreendimentoMonti_13);
var lyr_EmpreendimentoMonti_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMonti_13, 
                style: style_EmpreendimentoMonti_13,
                popuplayertitle: 'Empreendimento Montié',
                interactive: true,
    title: 'Empreendimento Montié<br />\
    <img src="styles/legend/EmpreendimentoMonti_13_0.png" /> _Haty_Asfalto<br />\
    <img src="styles/legend/EmpreendimentoMonti_13_1.png" /> _Haty_Quadras<br />\
    <img src="styles/legend/EmpreendimentoMonti_13_2.png" /> _Haty_Verde<br />\
    <img src="styles/legend/EmpreendimentoMonti_13_3.png" /> HATCH LAZER<br />\
    <img src="styles/legend/EmpreendimentoMonti_13_4.png" /> HATCH PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoMonti_13_5.png" /> hatch vaga estacionamento<br />' });
var format_EmpreendimentoMonti_14 = new ol.format.GeoJSON();
var features_EmpreendimentoMonti_14 = format_EmpreendimentoMonti_14.readFeatures(json_EmpreendimentoMonti_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoMonti_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMonti_14.addFeatures(features_EmpreendimentoMonti_14);
var lyr_EmpreendimentoMonti_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMonti_14, 
                style: style_EmpreendimentoMonti_14,
                popuplayertitle: 'Empreendimento Montié',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMonti_14.png" /> Empreendimento Montié'
            });
var format_EmpreendimentoMonti_15 = new ol.format.GeoJSON();
var features_EmpreendimentoMonti_15 = format_EmpreendimentoMonti_15.readFeatures(json_EmpreendimentoMonti_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoMonti_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMonti_15.addFeatures(features_EmpreendimentoMonti_15);
var lyr_EmpreendimentoMonti_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMonti_15, 
                style: style_EmpreendimentoMonti_15,
                popuplayertitle: 'Empreendimento Montié',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMonti_15.png" /> Empreendimento Montié'
            });
var format_EmpreendimentoResidencialMoradadoBosque_16 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMoradadoBosque_16 = format_EmpreendimentoResidencialMoradadoBosque_16.readFeatures(json_EmpreendimentoResidencialMoradadoBosque_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialMoradadoBosque_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMoradadoBosque_16.addFeatures(features_EmpreendimentoResidencialMoradadoBosque_16);
var lyr_EmpreendimentoResidencialMoradadoBosque_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMoradadoBosque_16, 
                style: style_EmpreendimentoResidencialMoradadoBosque_16,
                popuplayertitle: 'Empreendimento Residencial Morada do Bosque',
                interactive: true,
    title: 'Empreendimento Residencial Morada do Bosque<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_16_0.png" /> _Haty_Asfalto<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_16_1.png" /> _Haty_Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_16_2.png" /> _Haty_Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_16_3.png" /> _Haty_Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_16_4.png" /> _Ponto Perimetral<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_16_5.png" /> ARQ_APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_16_6.png" /> FORMATO<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_16_7.png" /> HATCH LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_16_8.png" /> HATCH PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_16_9.png" /> LOTES MISTOS<br />' });
var format_EmpreendimentoResidencialMoradadoBosque_17 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMoradadoBosque_17 = format_EmpreendimentoResidencialMoradadoBosque_17.readFeatures(json_EmpreendimentoResidencialMoradadoBosque_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialMoradadoBosque_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMoradadoBosque_17.addFeatures(features_EmpreendimentoResidencialMoradadoBosque_17);
var lyr_EmpreendimentoResidencialMoradadoBosque_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMoradadoBosque_17, 
                style: style_EmpreendimentoResidencialMoradadoBosque_17,
                popuplayertitle: 'Empreendimento Residencial Morada do Bosque',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_17.png" /> Empreendimento Residencial Morada do Bosque'
            });
var format_EmpreendimentoResidencialMoradadoBosque_18 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMoradadoBosque_18 = format_EmpreendimentoResidencialMoradadoBosque_18.readFeatures(json_EmpreendimentoResidencialMoradadoBosque_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialMoradadoBosque_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMoradadoBosque_18.addFeatures(features_EmpreendimentoResidencialMoradadoBosque_18);
var lyr_EmpreendimentoResidencialMoradadoBosque_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMoradadoBosque_18, 
                style: style_EmpreendimentoResidencialMoradadoBosque_18,
                popuplayertitle: 'Empreendimento Residencial Morada do Bosque',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_18.png" /> Empreendimento Residencial Morada do Bosque'
            });
var format_EmpreendimentoVittaAlvorada_19 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaAlvorada_19 = format_EmpreendimentoVittaAlvorada_19.readFeatures(json_EmpreendimentoVittaAlvorada_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoVittaAlvorada_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaAlvorada_19.addFeatures(features_EmpreendimentoVittaAlvorada_19);
var lyr_EmpreendimentoVittaAlvorada_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaAlvorada_19, 
                style: style_EmpreendimentoVittaAlvorada_19,
                popuplayertitle: 'Empreendimento Vitta Alvorada',
                interactive: true,
    title: 'Empreendimento Vitta Alvorada<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_19_0.png" /> _Haty_Asfalto<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_19_1.png" /> _Haty_Institucional<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_19_2.png" /> _Haty_Quadras<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_19_3.png" /> _Haty_Verde<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_19_4.png" /> A-PROP-LINE<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_19_5.png" /> HATCH PASSSEIO<br />' });
var format_EmpreendimentoVittaAlvorada_20 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaAlvorada_20 = format_EmpreendimentoVittaAlvorada_20.readFeatures(json_EmpreendimentoVittaAlvorada_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoVittaAlvorada_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaAlvorada_20.addFeatures(features_EmpreendimentoVittaAlvorada_20);
var lyr_EmpreendimentoVittaAlvorada_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaAlvorada_20, 
                style: style_EmpreendimentoVittaAlvorada_20,
                popuplayertitle: 'Empreendimento Vitta Alvorada',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVittaAlvorada_20.png" /> Empreendimento Vitta Alvorada'
            });
var format_EmpreendimentoVittaAlvorada_21 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaAlvorada_21 = format_EmpreendimentoVittaAlvorada_21.readFeatures(json_EmpreendimentoVittaAlvorada_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoVittaAlvorada_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaAlvorada_21.addFeatures(features_EmpreendimentoVittaAlvorada_21);
var lyr_EmpreendimentoVittaAlvorada_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaAlvorada_21, 
                style: style_EmpreendimentoVittaAlvorada_21,
                popuplayertitle: 'Empreendimento Vitta Alvorada',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVittaAlvorada_21.png" /> Empreendimento Vitta Alvorada'
            });
var format_EmpreendimentoResidencialMarthaHelena_22 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarthaHelena_22 = format_EmpreendimentoResidencialMarthaHelena_22.readFeatures(json_EmpreendimentoResidencialMarthaHelena_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialMarthaHelena_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarthaHelena_22.addFeatures(features_EmpreendimentoResidencialMarthaHelena_22);
var lyr_EmpreendimentoResidencialMarthaHelena_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarthaHelena_22, 
                style: style_EmpreendimentoResidencialMarthaHelena_22,
                popuplayertitle: 'Empreendimento Residencial Martha Helena',
                interactive: true,
    title: 'Empreendimento Residencial Martha Helena<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarthaHelena_22_0.png" /> 0<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarthaHelena_22_1.png" /> Zona de Uso Residencial<br />' });
var format_EmpreendimentoResidencialMarthaHelena_23 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarthaHelena_23 = format_EmpreendimentoResidencialMarthaHelena_23.readFeatures(json_EmpreendimentoResidencialMarthaHelena_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialMarthaHelena_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarthaHelena_23.addFeatures(features_EmpreendimentoResidencialMarthaHelena_23);
var lyr_EmpreendimentoResidencialMarthaHelena_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarthaHelena_23, 
                style: style_EmpreendimentoResidencialMarthaHelena_23,
                popuplayertitle: 'Empreendimento Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarthaHelena_23.png" /> Empreendimento Residencial Martha Helena'
            });
var format_EmpreendimentoResidencialMarthaHelena_24 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarthaHelena_24 = format_EmpreendimentoResidencialMarthaHelena_24.readFeatures(json_EmpreendimentoResidencialMarthaHelena_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialMarthaHelena_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarthaHelena_24.addFeatures(features_EmpreendimentoResidencialMarthaHelena_24);
var lyr_EmpreendimentoResidencialMarthaHelena_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarthaHelena_24, 
                style: style_EmpreendimentoResidencialMarthaHelena_24,
                popuplayertitle: 'Empreendimento Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarthaHelena_24.png" /> Empreendimento Residencial Martha Helena'
            });
var format_EmpreendimentoResidencialYasminTorres_25 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialYasminTorres_25 = format_EmpreendimentoResidencialYasminTorres_25.readFeatures(json_EmpreendimentoResidencialYasminTorres_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialYasminTorres_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialYasminTorres_25.addFeatures(features_EmpreendimentoResidencialYasminTorres_25);
var lyr_EmpreendimentoResidencialYasminTorres_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialYasminTorres_25, 
                style: style_EmpreendimentoResidencialYasminTorres_25,
                popuplayertitle: 'Empreendimento Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialYasminTorres_25.png" /> Empreendimento Residencial Yasmin Torres'
            });
var format_EmpreendimentoResidencialYasminTorres_26 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialYasminTorres_26 = format_EmpreendimentoResidencialYasminTorres_26.readFeatures(json_EmpreendimentoResidencialYasminTorres_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialYasminTorres_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialYasminTorres_26.addFeatures(features_EmpreendimentoResidencialYasminTorres_26);
var lyr_EmpreendimentoResidencialYasminTorres_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialYasminTorres_26, 
                style: style_EmpreendimentoResidencialYasminTorres_26,
                popuplayertitle: 'Empreendimento Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialYasminTorres_26.png" /> Empreendimento Residencial Yasmin Torres'
            });
var format_EmpreendimentoResidencialYasminTorres_27 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialYasminTorres_27 = format_EmpreendimentoResidencialYasminTorres_27.readFeatures(json_EmpreendimentoResidencialYasminTorres_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialYasminTorres_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialYasminTorres_27.addFeatures(features_EmpreendimentoResidencialYasminTorres_27);
var lyr_EmpreendimentoResidencialYasminTorres_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialYasminTorres_27, 
                style: style_EmpreendimentoResidencialYasminTorres_27,
                popuplayertitle: 'Empreendimento Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialYasminTorres_27.png" /> Empreendimento Residencial Yasmin Torres'
            });
var format_EmpreendimentoVittaSoVicente_28 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaSoVicente_28 = format_EmpreendimentoVittaSoVicente_28.readFeatures(json_EmpreendimentoVittaSoVicente_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoVittaSoVicente_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaSoVicente_28.addFeatures(features_EmpreendimentoVittaSoVicente_28);
var lyr_EmpreendimentoVittaSoVicente_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaSoVicente_28, 
                style: style_EmpreendimentoVittaSoVicente_28,
                popuplayertitle: 'Empreendimento Vitta São Vicente',
                interactive: true,
    title: 'Empreendimento Vitta São Vicente<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_28_0.png" /> _Haty_Asfalto<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_28_1.png" /> _Haty_Quadras<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_28_2.png" /> _Haty_Verde<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_28_3.png" /> HATCH LAZER<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_28_4.png" /> HATCH PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_28_5.png" /> hatch vaga estacionamento<br />' });
var format_EmpreendimentoVittaSoVicente_29 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaSoVicente_29 = format_EmpreendimentoVittaSoVicente_29.readFeatures(json_EmpreendimentoVittaSoVicente_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoVittaSoVicente_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaSoVicente_29.addFeatures(features_EmpreendimentoVittaSoVicente_29);
var lyr_EmpreendimentoVittaSoVicente_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaSoVicente_29, 
                style: style_EmpreendimentoVittaSoVicente_29,
                popuplayertitle: 'Empreendimento Vitta São Vicente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVittaSoVicente_29.png" /> Empreendimento Vitta São Vicente'
            });
var format_EmpreendimentoVittaSoVicente_30 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaSoVicente_30 = format_EmpreendimentoVittaSoVicente_30.readFeatures(json_EmpreendimentoVittaSoVicente_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoVittaSoVicente_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaSoVicente_30.addFeatures(features_EmpreendimentoVittaSoVicente_30);
var lyr_EmpreendimentoVittaSoVicente_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaSoVicente_30, 
                style: style_EmpreendimentoVittaSoVicente_30,
                popuplayertitle: 'Empreendimento Vitta São Vicente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVittaSoVicente_30.png" /> Empreendimento Vitta São Vicente'
            });
var format_EmpreendimentoPalmeiraReal_31 = new ol.format.GeoJSON();
var features_EmpreendimentoPalmeiraReal_31 = format_EmpreendimentoPalmeiraReal_31.readFeatures(json_EmpreendimentoPalmeiraReal_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoPalmeiraReal_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoPalmeiraReal_31.addFeatures(features_EmpreendimentoPalmeiraReal_31);
var lyr_EmpreendimentoPalmeiraReal_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoPalmeiraReal_31, 
                style: style_EmpreendimentoPalmeiraReal_31,
                popuplayertitle: 'Empreendimento Palmeira Real',
                interactive: true,
    title: 'Empreendimento Palmeira Real<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_31_0.png" /> _Haty_Asfalto<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_31_1.png" /> _Haty_Quadras<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_31_2.png" /> _Haty_Verde<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_31_3.png" /> HATCH LAZER<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_31_4.png" /> HATCH PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_31_5.png" /> hatch vaga estacionamento<br />' });
var format_EmpreendimentoPalmeiraReal_32 = new ol.format.GeoJSON();
var features_EmpreendimentoPalmeiraReal_32 = format_EmpreendimentoPalmeiraReal_32.readFeatures(json_EmpreendimentoPalmeiraReal_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoPalmeiraReal_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoPalmeiraReal_32.addFeatures(features_EmpreendimentoPalmeiraReal_32);
var lyr_EmpreendimentoPalmeiraReal_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoPalmeiraReal_32, 
                style: style_EmpreendimentoPalmeiraReal_32,
                popuplayertitle: 'Empreendimento Palmeira Real',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoPalmeiraReal_32.png" /> Empreendimento Palmeira Real'
            });
var format_EmpreendimentoPalmeiraReal_33 = new ol.format.GeoJSON();
var features_EmpreendimentoPalmeiraReal_33 = format_EmpreendimentoPalmeiraReal_33.readFeatures(json_EmpreendimentoPalmeiraReal_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoPalmeiraReal_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoPalmeiraReal_33.addFeatures(features_EmpreendimentoPalmeiraReal_33);
var lyr_EmpreendimentoPalmeiraReal_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoPalmeiraReal_33, 
                style: style_EmpreendimentoPalmeiraReal_33,
                popuplayertitle: 'Empreendimento Palmeira Real',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoPalmeiraReal_33.png" /> Empreendimento Palmeira Real'
            });
var format_EmpreendimentoVersalhes_34 = new ol.format.GeoJSON();
var features_EmpreendimentoVersalhes_34 = format_EmpreendimentoVersalhes_34.readFeatures(json_EmpreendimentoVersalhes_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoVersalhes_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVersalhes_34.addFeatures(features_EmpreendimentoVersalhes_34);
var lyr_EmpreendimentoVersalhes_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVersalhes_34, 
                style: style_EmpreendimentoVersalhes_34,
                popuplayertitle: 'Empreendimento Versalhes',
                interactive: true,
    title: 'Empreendimento Versalhes<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_34_0.png" /> _Haty_Asfalto<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_34_1.png" /> _Haty_Quadras<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_34_2.png" /> _Haty_Verde<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_34_3.png" /> HATCH LAZER<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_34_4.png" /> HATCH PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_34_5.png" /> hatch vaga estacionamento<br />' });
var format_EmpreendimentoVersalhes_35 = new ol.format.GeoJSON();
var features_EmpreendimentoVersalhes_35 = format_EmpreendimentoVersalhes_35.readFeatures(json_EmpreendimentoVersalhes_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoVersalhes_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVersalhes_35.addFeatures(features_EmpreendimentoVersalhes_35);
var lyr_EmpreendimentoVersalhes_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVersalhes_35, 
                style: style_EmpreendimentoVersalhes_35,
                popuplayertitle: 'Empreendimento Versalhes',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVersalhes_35.png" /> Empreendimento Versalhes'
            });
var format_EmpreendimentoVersalhes_36 = new ol.format.GeoJSON();
var features_EmpreendimentoVersalhes_36 = format_EmpreendimentoVersalhes_36.readFeatures(json_EmpreendimentoVersalhes_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoVersalhes_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVersalhes_36.addFeatures(features_EmpreendimentoVersalhes_36);
var lyr_EmpreendimentoVersalhes_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVersalhes_36, 
                style: style_EmpreendimentoVersalhes_36,
                popuplayertitle: 'Empreendimento Versalhes',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVersalhes_36.png" /> Empreendimento Versalhes'
            });
var format_EmpreendimentoSonetto_37 = new ol.format.GeoJSON();
var features_EmpreendimentoSonetto_37 = format_EmpreendimentoSonetto_37.readFeatures(json_EmpreendimentoSonetto_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoSonetto_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSonetto_37.addFeatures(features_EmpreendimentoSonetto_37);
var lyr_EmpreendimentoSonetto_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSonetto_37, 
                style: style_EmpreendimentoSonetto_37,
                popuplayertitle: 'Empreendimento Sonetto',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSonetto_37.png" /> Empreendimento Sonetto'
            });
var format_EmpreendimentoSonetto_38 = new ol.format.GeoJSON();
var features_EmpreendimentoSonetto_38 = format_EmpreendimentoSonetto_38.readFeatures(json_EmpreendimentoSonetto_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoSonetto_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSonetto_38.addFeatures(features_EmpreendimentoSonetto_38);
var lyr_EmpreendimentoSonetto_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSonetto_38, 
                style: style_EmpreendimentoSonetto_38,
                popuplayertitle: 'Empreendimento Sonetto',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSonetto_38.png" /> Empreendimento Sonetto'
            });
var format_EmpreendimentoResidencialSantaIns_39 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaIns_39 = format_EmpreendimentoResidencialSantaIns_39.readFeatures(json_EmpreendimentoResidencialSantaIns_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialSantaIns_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaIns_39.addFeatures(features_EmpreendimentoResidencialSantaIns_39);
var lyr_EmpreendimentoResidencialSantaIns_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaIns_39, 
                style: style_EmpreendimentoResidencialSantaIns_39,
                popuplayertitle: 'Empreendimento Residencial Santa Inês',
                interactive: true,
    title: 'Empreendimento Residencial Santa Inês<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_39_0.png" /> _Haty_Asfalto<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_39_1.png" /> _Haty_Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_39_2.png" /> _Haty_Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_39_3.png" /> _Haty_Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_39_4.png" /> HATCH LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_39_5.png" /> HATCH PASSSEIO<br />' });
var format_EmpreendimentoResidencialSantaIns_40 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaIns_40 = format_EmpreendimentoResidencialSantaIns_40.readFeatures(json_EmpreendimentoResidencialSantaIns_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialSantaIns_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaIns_40.addFeatures(features_EmpreendimentoResidencialSantaIns_40);
var lyr_EmpreendimentoResidencialSantaIns_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaIns_40, 
                style: style_EmpreendimentoResidencialSantaIns_40,
                popuplayertitle: 'Empreendimento Residencial Santa Inês',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSantaIns_40.png" /> Empreendimento Residencial Santa Inês'
            });
var format_EmpreendimentoResidencialSantaIns_41 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaIns_41 = format_EmpreendimentoResidencialSantaIns_41.readFeatures(json_EmpreendimentoResidencialSantaIns_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialSantaIns_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaIns_41.addFeatures(features_EmpreendimentoResidencialSantaIns_41);
var lyr_EmpreendimentoResidencialSantaIns_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaIns_41, 
                style: style_EmpreendimentoResidencialSantaIns_41,
                popuplayertitle: 'Empreendimento Residencial Santa Inês',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSantaIns_41.png" /> Empreendimento Residencial Santa Inês'
            });
var format_EmpreendimentoEdifcioSolNascente_42 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioSolNascente_42 = format_EmpreendimentoEdifcioSolNascente_42.readFeatures(json_EmpreendimentoEdifcioSolNascente_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoEdifcioSolNascente_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioSolNascente_42.addFeatures(features_EmpreendimentoEdifcioSolNascente_42);
var lyr_EmpreendimentoEdifcioSolNascente_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioSolNascente_42, 
                style: style_EmpreendimentoEdifcioSolNascente_42,
                popuplayertitle: 'Empreendimento Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioSolNascente_42.png" /> Empreendimento Edifício Sol Nascente'
            });
var format_EmpreendimentoEdifcioSolNascente_43 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioSolNascente_43 = format_EmpreendimentoEdifcioSolNascente_43.readFeatures(json_EmpreendimentoEdifcioSolNascente_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoEdifcioSolNascente_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioSolNascente_43.addFeatures(features_EmpreendimentoEdifcioSolNascente_43);
var lyr_EmpreendimentoEdifcioSolNascente_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioSolNascente_43, 
                style: style_EmpreendimentoEdifcioSolNascente_43,
                popuplayertitle: 'Empreendimento Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioSolNascente_43.png" /> Empreendimento Edifício Sol Nascente'
            });
var format_EmpreendimentoEdifcioSolNascente_44 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioSolNascente_44 = format_EmpreendimentoEdifcioSolNascente_44.readFeatures(json_EmpreendimentoEdifcioSolNascente_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoEdifcioSolNascente_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioSolNascente_44.addFeatures(features_EmpreendimentoEdifcioSolNascente_44);
var lyr_EmpreendimentoEdifcioSolNascente_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioSolNascente_44, 
                style: style_EmpreendimentoEdifcioSolNascente_44,
                popuplayertitle: 'Empreendimento Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioSolNascente_44.png" /> Empreendimento Edifício Sol Nascente'
            });
var format_EmpreendimentoResidencialQuintadosOitis_45 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadosOitis_45 = format_EmpreendimentoResidencialQuintadosOitis_45.readFeatures(json_EmpreendimentoResidencialQuintadosOitis_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialQuintadosOitis_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadosOitis_45.addFeatures(features_EmpreendimentoResidencialQuintadosOitis_45);
var lyr_EmpreendimentoResidencialQuintadosOitis_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadosOitis_45, 
                style: style_EmpreendimentoResidencialQuintadosOitis_45,
                popuplayertitle: 'Empreendimento Residencial Quinta dos Oitis',
                interactive: true,
    title: 'Empreendimento Residencial Quinta dos Oitis<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_45_0.png" /> _Haty_Asfalto<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_45_1.png" /> _Haty_Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_45_2.png" /> _Haty_Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_45_3.png" /> _Haty_Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_45_4.png" /> HATCH PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_45_5.png" /> haty_ruas<br />' });
var format_EmpreendimentoResidencialQuintadosOitis_46 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadosOitis_46 = format_EmpreendimentoResidencialQuintadosOitis_46.readFeatures(json_EmpreendimentoResidencialQuintadosOitis_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialQuintadosOitis_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadosOitis_46.addFeatures(features_EmpreendimentoResidencialQuintadosOitis_46);
var lyr_EmpreendimentoResidencialQuintadosOitis_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadosOitis_46, 
                style: style_EmpreendimentoResidencialQuintadosOitis_46,
                popuplayertitle: 'Empreendimento Residencial Quinta dos Oitis',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_46.png" /> Empreendimento Residencial Quinta dos Oitis'
            });
var format_EmpreendimentoResidencialQuintadosOitis_47 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadosOitis_47 = format_EmpreendimentoResidencialQuintadosOitis_47.readFeatures(json_EmpreendimentoResidencialQuintadosOitis_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialQuintadosOitis_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadosOitis_47.addFeatures(features_EmpreendimentoResidencialQuintadosOitis_47);
var lyr_EmpreendimentoResidencialQuintadosOitis_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadosOitis_47, 
                style: style_EmpreendimentoResidencialQuintadosOitis_47,
                popuplayertitle: 'Empreendimento Residencial Quinta dos Oitis',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_47.png" /> Empreendimento Residencial Quinta dos Oitis'
            });
var format_NovosEmpreendimentos_48 = new ol.format.GeoJSON();
var features_NovosEmpreendimentos_48 = format_NovosEmpreendimentos_48.readFeatures(json_NovosEmpreendimentos_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NovosEmpreendimentos_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NovosEmpreendimentos_48.addFeatures(features_NovosEmpreendimentos_48);
var lyr_NovosEmpreendimentos_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NovosEmpreendimentos_48, 
                style: style_NovosEmpreendimentos_48,
                popuplayertitle: 'Novos Empreendimentos',
                interactive: true,
                title: '<img src="styles/legend/NovosEmpreendimentos_48.png" /> Novos Empreendimentos'
            });
var format_RemanescentedaMatrcula11419_49 = new ol.format.GeoJSON();
var features_RemanescentedaMatrcula11419_49 = format_RemanescentedaMatrcula11419_49.readFeatures(json_RemanescentedaMatrcula11419_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RemanescentedaMatrcula11419_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RemanescentedaMatrcula11419_49.addFeatures(features_RemanescentedaMatrcula11419_49);
var lyr_RemanescentedaMatrcula11419_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RemanescentedaMatrcula11419_49, 
                style: style_RemanescentedaMatrcula11419_49,
                popuplayertitle: 'Remanescente da Matrícula 11419',
                interactive: true,
                title: '<img src="styles/legend/RemanescentedaMatrcula11419_49.png" /> Remanescente da Matrícula 11419'
            });
var format_ConjuntoHabitacional_50 = new ol.format.GeoJSON();
var features_ConjuntoHabitacional_50 = format_ConjuntoHabitacional_50.readFeatures(json_ConjuntoHabitacional_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConjuntoHabitacional_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConjuntoHabitacional_50.addFeatures(features_ConjuntoHabitacional_50);
var lyr_ConjuntoHabitacional_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConjuntoHabitacional_50, 
                style: style_ConjuntoHabitacional_50,
                popuplayertitle: 'Conjunto Habitacional',
                interactive: true,
                title: '<img src="styles/legend/ConjuntoHabitacional_50.png" /> Conjunto Habitacional'
            });
var format_AvdeacessoaoHortoeColgioAgrcola_51 = new ol.format.GeoJSON();
var features_AvdeacessoaoHortoeColgioAgrcola_51 = format_AvdeacessoaoHortoeColgioAgrcola_51.readFeatures(json_AvdeacessoaoHortoeColgioAgrcola_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AvdeacessoaoHortoeColgioAgrcola_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AvdeacessoaoHortoeColgioAgrcola_51.addFeatures(features_AvdeacessoaoHortoeColgioAgrcola_51);
var lyr_AvdeacessoaoHortoeColgioAgrcola_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AvdeacessoaoHortoeColgioAgrcola_51, 
                style: style_AvdeacessoaoHortoeColgioAgrcola_51,
                popuplayertitle: 'Av. de acesso ao Horto e Colégio Agrícola',
                interactive: true,
                title: '<img src="styles/legend/AvdeacessoaoHortoeColgioAgrcola_51.png" /> Av. de acesso ao Horto e Colégio Agrícola'
            });
var format_reaK_52 = new ol.format.GeoJSON();
var features_reaK_52 = format_reaK_52.readFeatures(json_reaK_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaK_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaK_52.addFeatures(features_reaK_52);
var lyr_reaK_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaK_52, 
                style: style_reaK_52,
                popuplayertitle: 'Área K',
                interactive: true,
                title: '<img src="styles/legend/reaK_52.png" /> Área K'
            });
var format_reaJ_53 = new ol.format.GeoJSON();
var features_reaJ_53 = format_reaJ_53.readFeatures(json_reaJ_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaJ_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaJ_53.addFeatures(features_reaJ_53);
var lyr_reaJ_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaJ_53, 
                style: style_reaJ_53,
                popuplayertitle: 'Área J',
                interactive: true,
                title: '<img src="styles/legend/reaJ_53.png" /> Área J'
            });
var format_reaI_54 = new ol.format.GeoJSON();
var features_reaI_54 = format_reaI_54.readFeatures(json_reaI_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaI_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaI_54.addFeatures(features_reaI_54);
var lyr_reaI_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaI_54, 
                style: style_reaI_54,
                popuplayertitle: 'Área I',
                interactive: true,
                title: '<img src="styles/legend/reaI_54.png" /> Área I'
            });
var format_reaH_55 = new ol.format.GeoJSON();
var features_reaH_55 = format_reaH_55.readFeatures(json_reaH_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaH_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaH_55.addFeatures(features_reaH_55);
var lyr_reaH_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaH_55, 
                style: style_reaH_55,
                popuplayertitle: 'Área H',
                interactive: true,
                title: '<img src="styles/legend/reaH_55.png" /> Área H'
            });
var format_reaG_56 = new ol.format.GeoJSON();
var features_reaG_56 = format_reaG_56.readFeatures(json_reaG_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaG_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaG_56.addFeatures(features_reaG_56);
var lyr_reaG_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaG_56, 
                style: style_reaG_56,
                popuplayertitle: 'Área G',
                interactive: true,
                title: '<img src="styles/legend/reaG_56.png" /> Área G'
            });
var format_reaF_57 = new ol.format.GeoJSON();
var features_reaF_57 = format_reaF_57.readFeatures(json_reaF_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaF_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaF_57.addFeatures(features_reaF_57);
var lyr_reaF_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaF_57, 
                style: style_reaF_57,
                popuplayertitle: 'Área F',
                interactive: true,
                title: '<img src="styles/legend/reaF_57.png" /> Área F'
            });
var format_reaE_58 = new ol.format.GeoJSON();
var features_reaE_58 = format_reaE_58.readFeatures(json_reaE_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaE_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaE_58.addFeatures(features_reaE_58);
var lyr_reaE_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaE_58, 
                style: style_reaE_58,
                popuplayertitle: 'Área E',
                interactive: true,
                title: '<img src="styles/legend/reaE_58.png" /> Área E'
            });
var format_reaD_59 = new ol.format.GeoJSON();
var features_reaD_59 = format_reaD_59.readFeatures(json_reaD_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaD_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaD_59.addFeatures(features_reaD_59);
var lyr_reaD_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaD_59, 
                style: style_reaD_59,
                popuplayertitle: 'Área D',
                interactive: true,
                title: '<img src="styles/legend/reaD_59.png" /> Área D'
            });
var format_reaC_60 = new ol.format.GeoJSON();
var features_reaC_60 = format_reaC_60.readFeatures(json_reaC_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaC_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaC_60.addFeatures(features_reaC_60);
var lyr_reaC_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaC_60, 
                style: style_reaC_60,
                popuplayertitle: 'Área C',
                interactive: true,
                title: '<img src="styles/legend/reaC_60.png" /> Área C'
            });
var format_reaB_61 = new ol.format.GeoJSON();
var features_reaB_61 = format_reaB_61.readFeatures(json_reaB_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaB_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaB_61.addFeatures(features_reaB_61);
var lyr_reaB_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaB_61, 
                style: style_reaB_61,
                popuplayertitle: 'Área B',
                interactive: true,
                title: '<img src="styles/legend/reaB_61.png" /> Área B'
            });
var format_reaA_62 = new ol.format.GeoJSON();
var features_reaA_62 = format_reaA_62.readFeatures(json_reaA_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaA_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaA_62.addFeatures(features_reaA_62);
var lyr_reaA_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaA_62, 
                style: style_reaA_62,
                popuplayertitle: 'Área A',
                interactive: true,
                title: '<img src="styles/legend/reaA_62.png" /> Área A'
            });
var format_reaAverbada355235ReservaFlorestalLegalPartedareaG_63 = new ol.format.GeoJSON();
var features_reaAverbada355235ReservaFlorestalLegalPartedareaG_63 = format_reaAverbada355235ReservaFlorestalLegalPartedareaG_63.readFeatures(json_reaAverbada355235ReservaFlorestalLegalPartedareaG_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_63.addFeatures(features_reaAverbada355235ReservaFlorestalLegalPartedareaG_63);
var lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_63, 
                style: style_reaAverbada355235ReservaFlorestalLegalPartedareaG_63,
                popuplayertitle: 'Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaAverbada355235ReservaFlorestalLegalPartedareaG_63.png" /> Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)'
            });
var format_reaaseraverbadaPartedareaG_64 = new ol.format.GeoJSON();
var features_reaaseraverbadaPartedareaG_64 = format_reaaseraverbadaPartedareaG_64.readFeatures(json_reaaseraverbadaPartedareaG_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaaseraverbadaPartedareaG_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaaseraverbadaPartedareaG_64.addFeatures(features_reaaseraverbadaPartedareaG_64);
var lyr_reaaseraverbadaPartedareaG_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaaseraverbadaPartedareaG_64, 
                style: style_reaaseraverbadaPartedareaG_64,
                popuplayertitle: 'Área a ser averbada (Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaaseraverbadaPartedareaG_64.png" /> Área a ser averbada (Parte da Área G)'
            });
var format_LoteEMDEF10unid218783m_65 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid218783m_65 = format_LoteEMDEF10unid218783m_65.readFeatures(json_LoteEMDEF10unid218783m_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoteEMDEF10unid218783m_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid218783m_65.addFeatures(features_LoteEMDEF10unid218783m_65);
var lyr_LoteEMDEF10unid218783m_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid218783m_65, 
                style: style_LoteEMDEF10unid218783m_65,
                popuplayertitle: 'Lote EMDEF (10 unid. / 2187.83 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid218783m_65.png" /> Lote EMDEF (10 unid. / 2187.83 m²)'
            });
var format_LoteEMDEF10unid_66 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid_66 = format_LoteEMDEF10unid_66.readFeatures(json_LoteEMDEF10unid_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoteEMDEF10unid_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid_66.addFeatures(features_LoteEMDEF10unid_66);
var lyr_LoteEMDEF10unid_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid_66, 
                style: style_LoteEMDEF10unid_66,
                popuplayertitle: 'Lote EMDEF (10 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid_66.png" /> Lote EMDEF (10 unid.)'
            });
var format_Lote501unid13733803m_67 = new ol.format.GeoJSON();
var features_Lote501unid13733803m_67 = format_Lote501unid13733803m_67.readFeatures(json_Lote501unid13733803m_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lote501unid13733803m_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote501unid13733803m_67.addFeatures(features_Lote501unid13733803m_67);
var lyr_Lote501unid13733803m_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote501unid13733803m_67, 
                style: style_Lote501unid13733803m_67,
                popuplayertitle: 'Lote (501 unid. / 137338.03 m²)',
                interactive: true,
                title: '<img src="styles/legend/Lote501unid13733803m_67.png" /> Lote (501 unid. / 137338.03 m²)'
            });
var format_Lote501unid_68 = new ol.format.GeoJSON();
var features_Lote501unid_68 = format_Lote501unid_68.readFeatures(json_Lote501unid_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lote501unid_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote501unid_68.addFeatures(features_Lote501unid_68);
var lyr_Lote501unid_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote501unid_68, 
                style: style_Lote501unid_68,
                popuplayertitle: 'Lote (501 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lote501unid_68.png" /> Lote (501 unid.)'
            });
var format_reaVerde1922unid805661602m_69 = new ol.format.GeoJSON();
var features_reaVerde1922unid805661602m_69 = format_reaVerde1922unid805661602m_69.readFeatures(json_reaVerde1922unid805661602m_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaVerde1922unid805661602m_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaVerde1922unid805661602m_69.addFeatures(features_reaVerde1922unid805661602m_69);
var lyr_reaVerde1922unid805661602m_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaVerde1922unid805661602m_69, 
                style: style_reaVerde1922unid805661602m_69,
                popuplayertitle: 'Área Verde (1922 unid. / 8056616.02 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaVerde1922unid805661602m_69.png" /> Área Verde (1922 unid. / 8056616.02 m²)'
            });
var format_reaPatrimonial31unid14616301m_70 = new ol.format.GeoJSON();
var features_reaPatrimonial31unid14616301m_70 = format_reaPatrimonial31unid14616301m_70.readFeatures(json_reaPatrimonial31unid14616301m_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaPatrimonial31unid14616301m_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaPatrimonial31unid14616301m_70.addFeatures(features_reaPatrimonial31unid14616301m_70);
var lyr_reaPatrimonial31unid14616301m_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaPatrimonial31unid14616301m_70, 
                style: style_reaPatrimonial31unid14616301m_70,
                popuplayertitle: 'Área Patrimonial (31 unid. / 146163.01 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaPatrimonial31unid14616301m_70.png" /> Área Patrimonial (31 unid. / 146163.01 m²)'
            });
var format_reaInstitucional226unid132084179m_71 = new ol.format.GeoJSON();
var features_reaInstitucional226unid132084179m_71 = format_reaInstitucional226unid132084179m_71.readFeatures(json_reaInstitucional226unid132084179m_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaInstitucional226unid132084179m_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaInstitucional226unid132084179m_71.addFeatures(features_reaInstitucional226unid132084179m_71);
var lyr_reaInstitucional226unid132084179m_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaInstitucional226unid132084179m_71, 
                style: style_reaInstitucional226unid132084179m_71,
                popuplayertitle: 'Área Institucional (226 unid. / 1320841.79 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaInstitucional226unid132084179m_71.png" /> Área Institucional (226 unid. / 1320841.79 m²)'
            });
var format_readeUsoEspecial337unid311074946m_72 = new ol.format.GeoJSON();
var features_readeUsoEspecial337unid311074946m_72 = format_readeUsoEspecial337unid311074946m_72.readFeatures(json_readeUsoEspecial337unid311074946m_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeUsoEspecial337unid311074946m_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeUsoEspecial337unid311074946m_72.addFeatures(features_readeUsoEspecial337unid311074946m_72);
var lyr_readeUsoEspecial337unid311074946m_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeUsoEspecial337unid311074946m_72, 
                style: style_readeUsoEspecial337unid311074946m_72,
                popuplayertitle: 'Área de Uso Especial (337 unid. / 3110749.46 m²)',
                interactive: true,
                title: '<img src="styles/legend/readeUsoEspecial337unid311074946m_72.png" /> Área de Uso Especial (337 unid. / 3110749.46 m²)'
            });
var format_APP164unid230278996m_73 = new ol.format.GeoJSON();
var features_APP164unid230278996m_73 = format_APP164unid230278996m_73.readFeatures(json_APP164unid230278996m_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP164unid230278996m_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP164unid230278996m_73.addFeatures(features_APP164unid230278996m_73);
var lyr_APP164unid230278996m_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP164unid230278996m_73, 
                style: style_APP164unid230278996m_73,
                popuplayertitle: 'APP (164 unid. / 2302789.96 m²)',
                interactive: true,
                title: '<img src="styles/legend/APP164unid230278996m_73.png" /> APP (164 unid. / 2302789.96 m²)'
            });
var format_ParqueZumbidosPalmares_74 = new ol.format.GeoJSON();
var features_ParqueZumbidosPalmares_74 = format_ParqueZumbidosPalmares_74.readFeatures(json_ParqueZumbidosPalmares_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueZumbidosPalmares_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueZumbidosPalmares_74.addFeatures(features_ParqueZumbidosPalmares_74);
var lyr_ParqueZumbidosPalmares_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueZumbidosPalmares_74, 
                style: style_ParqueZumbidosPalmares_74,
                popuplayertitle: 'Parque Zumbi dos Palmares',
                interactive: true,
                title: '<img src="styles/legend/ParqueZumbidosPalmares_74.png" /> Parque Zumbi dos Palmares'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_75 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_75 = format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_75.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_75.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_75);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_75, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_75,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_75.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)'
            });
var format_AntigoAterrodasMaritacas_76 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacas_76 = format_AntigoAterrodasMaritacas_76.readFeatures(json_AntigoAterrodasMaritacas_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodasMaritacas_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacas_76.addFeatures(features_AntigoAterrodasMaritacas_76);
var lyr_AntigoAterrodasMaritacas_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacas_76, 
                style: style_AntigoAterrodasMaritacas_76,
                popuplayertitle: 'Antigo Aterro das Maritacas',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacas_76.png" /> Antigo Aterro das Maritacas'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_77 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_77 = format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_77.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_77.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_77);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_77, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_77,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_77.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)'
            });
var format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_78 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_78 = format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_78.readFeatures(json_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_78.addFeatures(features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_78);
var lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_78, 
                style: style_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_78,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalAntigareadoClubedeHipismo_78.png" /> Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo'
            });
var format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_79 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_79 = format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_79.readFeatures(json_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_79.addFeatures(features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_79);
var lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_79, 
                style: style_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_79,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_79.png" /> Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipal_80 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipal_80 = format_AntigoAterrodaFazendaMunicipal_80.readFeatures(json_AntigoAterrodaFazendaMunicipal_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodaFazendaMunicipal_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipal_80.addFeatures(features_AntigoAterrodaFazendaMunicipal_80);
var lyr_AntigoAterrodaFazendaMunicipal_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipal_80, 
                style: style_AntigoAterrodaFazendaMunicipal_80,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipal_80.png" /> Antigo Aterro da Fazenda Municipal'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_81 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_81 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_81.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_81.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_81);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_81, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_81,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_81.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_82 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_82 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_82.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_82.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_82);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_82, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_82,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_82.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)'
            });
var format_AoCivilPblica1unid_83 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_83 = format_AoCivilPblica1unid_83.readFeatures(json_AoCivilPblica1unid_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AoCivilPblica1unid_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_83.addFeatures(features_AoCivilPblica1unid_83);
var lyr_AoCivilPblica1unid_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_83, 
                style: style_AoCivilPblica1unid_83,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_83.png" /> Ação Civil Pública (1 unid.)'
            });
var format_AoCivilPblica1unid_84 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_84 = format_AoCivilPblica1unid_84.readFeatures(json_AoCivilPblica1unid_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AoCivilPblica1unid_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_84.addFeatures(features_AoCivilPblica1unid_84);
var lyr_AoCivilPblica1unid_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_84, 
                style: style_AoCivilPblica1unid_84,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_84.png" /> Ação Civil Pública (1 unid.)'
            });
var format_CartaAnuncia20unid_85 = new ol.format.GeoJSON();
var features_CartaAnuncia20unid_85 = format_CartaAnuncia20unid_85.readFeatures(json_CartaAnuncia20unid_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartaAnuncia20unid_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia20unid_85.addFeatures(features_CartaAnuncia20unid_85);
var lyr_CartaAnuncia20unid_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia20unid_85, 
                style: style_CartaAnuncia20unid_85,
                popuplayertitle: 'Carta Anuência (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia20unid_85.png" /> Carta Anuência (20 unid.)'
            });
var format_CartaAnuncia19unid_86 = new ol.format.GeoJSON();
var features_CartaAnuncia19unid_86 = format_CartaAnuncia19unid_86.readFeatures(json_CartaAnuncia19unid_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartaAnuncia19unid_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia19unid_86.addFeatures(features_CartaAnuncia19unid_86);
var lyr_CartaAnuncia19unid_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia19unid_86, 
                style: style_CartaAnuncia19unid_86,
                popuplayertitle: 'Carta Anuência (19 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia19unid_86.png" /> Carta Anuência (19 unid.)'
            });
var format_PlantioVoluntrio1unid_87 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_87 = format_PlantioVoluntrio1unid_87.readFeatures(json_PlantioVoluntrio1unid_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantioVoluntrio1unid_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_87.addFeatures(features_PlantioVoluntrio1unid_87);
var lyr_PlantioVoluntrio1unid_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_87, 
                style: style_PlantioVoluntrio1unid_87,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_87.png" /> Plantio Voluntário (1 unid.)'
            });
var format_PlantioVoluntrio1unid_88 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_88 = format_PlantioVoluntrio1unid_88.readFeatures(json_PlantioVoluntrio1unid_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantioVoluntrio1unid_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_88.addFeatures(features_PlantioVoluntrio1unid_88);
var lyr_PlantioVoluntrio1unid_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_88, 
                style: style_PlantioVoluntrio1unid_88,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_88.png" /> Plantio Voluntário (1 unid.)'
            });
var format_TACMinistrioPblico9unid_89 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_89 = format_TACMinistrioPblico9unid_89.readFeatures(json_TACMinistrioPblico9unid_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TACMinistrioPblico9unid_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_89.addFeatures(features_TACMinistrioPblico9unid_89);
var lyr_TACMinistrioPblico9unid_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_89, 
                style: style_TACMinistrioPblico9unid_89,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_89.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TACMinistrioPblico9unid_90 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_90 = format_TACMinistrioPblico9unid_90.readFeatures(json_TACMinistrioPblico9unid_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TACMinistrioPblico9unid_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_90.addFeatures(features_TACMinistrioPblico9unid_90);
var lyr_TACMinistrioPblico9unid_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_90, 
                style: style_TACMinistrioPblico9unid_90,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_90.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TCRACETESB28unid_91 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_91 = format_TCRACETESB28unid_91.readFeatures(json_TCRACETESB28unid_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRACETESB28unid_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_91.addFeatures(features_TCRACETESB28unid_91);
var lyr_TCRACETESB28unid_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_91, 
                style: style_TCRACETESB28unid_91,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_91.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRACETESB28unid_92 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_92 = format_TCRACETESB28unid_92.readFeatures(json_TCRACETESB28unid_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRACETESB28unid_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_92.addFeatures(features_TCRACETESB28unid_92);
var lyr_TCRACETESB28unid_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_92, 
                style: style_TCRACETESB28unid_92,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_92.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRAMunicipal13unid_93 = new ol.format.GeoJSON();
var features_TCRAMunicipal13unid_93 = format_TCRAMunicipal13unid_93.readFeatures(json_TCRAMunicipal13unid_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRAMunicipal13unid_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal13unid_93.addFeatures(features_TCRAMunicipal13unid_93);
var lyr_TCRAMunicipal13unid_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal13unid_93, 
                style: style_TCRAMunicipal13unid_93,
                popuplayertitle: 'TCRA Municipal (13 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal13unid_93.png" /> TCRA Municipal (13 unid.)'
            });
var format_TCRAMunicipal13unid_94 = new ol.format.GeoJSON();
var features_TCRAMunicipal13unid_94 = format_TCRAMunicipal13unid_94.readFeatures(json_TCRAMunicipal13unid_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRAMunicipal13unid_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal13unid_94.addFeatures(features_TCRAMunicipal13unid_94);
var lyr_TCRAMunicipal13unid_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal13unid_94, 
                style: style_TCRAMunicipal13unid_94,
                popuplayertitle: 'TCRA Municipal (13 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal13unid_94.png" /> TCRA Municipal (13 unid.)'
            });
var format_TRPRLCETESB2unid_95 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_95 = format_TRPRLCETESB2unid_95.readFeatures(json_TRPRLCETESB2unid_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRPRLCETESB2unid_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_95.addFeatures(features_TRPRLCETESB2unid_95);
var lyr_TRPRLCETESB2unid_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_95, 
                style: style_TRPRLCETESB2unid_95,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_95.png" /> TRPRL CETESB (2 unid.)'
            });
var format_TRPRLCETESB2unid_96 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_96 = format_TRPRLCETESB2unid_96.readFeatures(json_TRPRLCETESB2unid_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRPRLCETESB2unid_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_96.addFeatures(features_TRPRLCETESB2unid_96);
var lyr_TRPRLCETESB2unid_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_96, 
                style: style_TRPRLCETESB2unid_96,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_96.png" /> TRPRL CETESB (2 unid.)'
            });
var format_ARORemanescentesFlorestais_97 = new ol.format.GeoJSON();
var features_ARORemanescentesFlorestais_97 = format_ARORemanescentesFlorestais_97.readFeatures(json_ARORemanescentesFlorestais_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARORemanescentesFlorestais_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARORemanescentesFlorestais_97.addFeatures(features_ARORemanescentesFlorestais_97);
var lyr_ARORemanescentesFlorestais_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARORemanescentesFlorestais_97, 
                style: style_ARORemanescentesFlorestais_97,
                popuplayertitle: 'ARO - Remanescentes Florestais',
                interactive: true,
                title: '<img src="styles/legend/ARORemanescentesFlorestais_97.png" /> ARO - Remanescentes Florestais'
            });
var format_AROreadeAmortecimento_98 = new ol.format.GeoJSON();
var features_AROreadeAmortecimento_98 = format_AROreadeAmortecimento_98.readFeatures(json_AROreadeAmortecimento_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AROreadeAmortecimento_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROreadeAmortecimento_98.addFeatures(features_AROreadeAmortecimento_98);
var lyr_AROreadeAmortecimento_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROreadeAmortecimento_98, 
                style: style_AROreadeAmortecimento_98,
                popuplayertitle: 'ARO - Área de Amortecimento',
                interactive: true,
                title: '<img src="styles/legend/AROreadeAmortecimento_98.png" /> ARO - Área de Amortecimento'
            });
var format_AROFaixadeCuestas_99 = new ol.format.GeoJSON();
var features_AROFaixadeCuestas_99 = format_AROFaixadeCuestas_99.readFeatures(json_AROFaixadeCuestas_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AROFaixadeCuestas_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROFaixadeCuestas_99.addFeatures(features_AROFaixadeCuestas_99);
var lyr_AROFaixadeCuestas_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROFaixadeCuestas_99, 
                style: style_AROFaixadeCuestas_99,
                popuplayertitle: 'ARO - Faixa de Cuestas',
                interactive: true,
                title: '<img src="styles/legend/AROFaixadeCuestas_99.png" /> ARO - Faixa de Cuestas'
            });
var format_AROAPP_100 = new ol.format.GeoJSON();
var features_AROAPP_100 = format_AROAPP_100.readFeatures(json_AROAPP_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AROAPP_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROAPP_100.addFeatures(features_AROAPP_100);
var lyr_AROAPP_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROAPP_100, 
                style: style_AROAPP_100,
                popuplayertitle: 'ARO - APP',
                interactive: true,
                title: '<img src="styles/legend/AROAPP_100.png" /> ARO - APP'
            });
var format_ARAIncongrunciasemAPP_101 = new ol.format.GeoJSON();
var features_ARAIncongrunciasemAPP_101 = format_ARAIncongrunciasemAPP_101.readFeatures(json_ARAIncongrunciasemAPP_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAIncongrunciasemAPP_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAIncongrunciasemAPP_101.addFeatures(features_ARAIncongrunciasemAPP_101);
var lyr_ARAIncongrunciasemAPP_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAIncongrunciasemAPP_101, 
                style: style_ARAIncongrunciasemAPP_101,
                popuplayertitle: 'ARA - Incongruências em APP',
                interactive: true,
                title: '<img src="styles/legend/ARAIncongrunciasemAPP_101.png" /> ARA - Incongruências em APP'
            });
var format_ARAETELagoas_102 = new ol.format.GeoJSON();
var features_ARAETELagoas_102 = format_ARAETELagoas_102.readFeatures(json_ARAETELagoas_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAETELagoas_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAETELagoas_102.addFeatures(features_ARAETELagoas_102);
var lyr_ARAETELagoas_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAETELagoas_102, 
                style: style_ARAETELagoas_102,
                popuplayertitle: 'ARA - ETE Lagoas',
                interactive: true,
                title: '<img src="styles/legend/ARAETELagoas_102.png" /> ARA - ETE Lagoas'
            });
var format_ARAAterros_103 = new ol.format.GeoJSON();
var features_ARAAterros_103 = format_ARAAterros_103.readFeatures(json_ARAAterros_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAAterros_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAAterros_103.addFeatures(features_ARAAterros_103);
var lyr_ARAAterros_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAAterros_103, 
                style: style_ARAAterros_103,
                popuplayertitle: 'ARA - Aterros',
                interactive: true,
                title: '<img src="styles/legend/ARAAterros_103.png" /> ARA - Aterros'
            });
var format_AODreaUrbanaConsolidada_104 = new ol.format.GeoJSON();
var features_AODreaUrbanaConsolidada_104 = format_AODreaUrbanaConsolidada_104.readFeatures(json_AODreaUrbanaConsolidada_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODreaUrbanaConsolidada_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODreaUrbanaConsolidada_104.addFeatures(features_AODreaUrbanaConsolidada_104);
var lyr_AODreaUrbanaConsolidada_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODreaUrbanaConsolidada_104, 
                style: style_AODreaUrbanaConsolidada_104,
                popuplayertitle: 'AOD - Área Urbana Consolidada',
                interactive: true,
                title: '<img src="styles/legend/AODreaUrbanaConsolidada_104.png" /> AOD - Área Urbana Consolidada'
            });
var format_AODBaixaDensidadeNvel3_105 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel3_105 = format_AODBaixaDensidadeNvel3_105.readFeatures(json_AODBaixaDensidadeNvel3_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODBaixaDensidadeNvel3_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel3_105.addFeatures(features_AODBaixaDensidadeNvel3_105);
var lyr_AODBaixaDensidadeNvel3_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel3_105, 
                style: style_AODBaixaDensidadeNvel3_105,
                popuplayertitle: 'AOD - Baixa Densidade Nível 3',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel3_105.png" /> AOD - Baixa Densidade Nível 3'
            });
var format_AODBaixaDensidadeNvel2_106 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel2_106 = format_AODBaixaDensidadeNvel2_106.readFeatures(json_AODBaixaDensidadeNvel2_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODBaixaDensidadeNvel2_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel2_106.addFeatures(features_AODBaixaDensidadeNvel2_106);
var lyr_AODBaixaDensidadeNvel2_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel2_106, 
                style: style_AODBaixaDensidadeNvel2_106,
                popuplayertitle: 'AOD - Baixa Densidade Nível 2',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel2_106.png" /> AOD - Baixa Densidade Nível 2'
            });
var format_AODBaixaDensidadeNvel1_107 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel1_107 = format_AODBaixaDensidadeNvel1_107.readFeatures(json_AODBaixaDensidadeNvel1_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODBaixaDensidadeNvel1_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel1_107.addFeatures(features_AODBaixaDensidadeNvel1_107);
var lyr_AODBaixaDensidadeNvel1_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel1_107, 
                style: style_AODBaixaDensidadeNvel1_107,
                popuplayertitle: 'AOD - Baixa Densidade Nível 1',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel1_107.png" /> AOD - Baixa Densidade Nível 1'
            });
var format_AODAUSFase2_108 = new ol.format.GeoJSON();
var features_AODAUSFase2_108 = format_AODAUSFase2_108.readFeatures(json_AODAUSFase2_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODAUSFase2_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase2_108.addFeatures(features_AODAUSFase2_108);
var lyr_AODAUSFase2_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase2_108, 
                style: style_AODAUSFase2_108,
                popuplayertitle: 'AOD - AUS Fase 2',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase2_108.png" /> AOD - AUS Fase 2'
            });
var format_AODAUSFase1_109 = new ol.format.GeoJSON();
var features_AODAUSFase1_109 = format_AODAUSFase1_109.readFeatures(json_AODAUSFase1_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODAUSFase1_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase1_109.addFeatures(features_AODAUSFase1_109);
var lyr_AODAUSFase1_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase1_109, 
                style: style_AODAUSFase1_109,
                popuplayertitle: 'AOD - AUS Fase 1',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase1_109.png" /> AOD - AUS Fase 1'
            });
var format_LimitedaBaciadoRioCanoasLeiC4322024_110 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC4322024_110 = format_LimitedaBaciadoRioCanoasLeiC4322024_110.readFeatures(json_LimitedaBaciadoRioCanoasLeiC4322024_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_110.addFeatures(features_LimitedaBaciadoRioCanoasLeiC4322024_110);
var lyr_LimitedaBaciadoRioCanoasLeiC4322024_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_110, 
                style: style_LimitedaBaciadoRioCanoasLeiC4322024_110,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 432/2024',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC4322024_110.png" /> Limite da Bacia do Rio Canoas - Lei C. 432/2024'
            });
var format_LimitedaBaciadoRioCanoasLeiC1002006_111 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC1002006_111 = format_LimitedaBaciadoRioCanoasLeiC1002006_111.readFeatures(json_LimitedaBaciadoRioCanoasLeiC1002006_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_111.addFeatures(features_LimitedaBaciadoRioCanoasLeiC1002006_111);
var lyr_LimitedaBaciadoRioCanoasLeiC1002006_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_111, 
                style: style_LimitedaBaciadoRioCanoasLeiC1002006_111,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 100/2006',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC1002006_111.png" /> Limite da Bacia do Rio Canoas - Lei C. 100/2006'
            });
var format_DelimitaodaBaciadoRibeirodaOna_112 = new ol.format.GeoJSON();
var features_DelimitaodaBaciadoRibeirodaOna_112 = format_DelimitaodaBaciadoRibeirodaOna_112.readFeatures(json_DelimitaodaBaciadoRibeirodaOna_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelimitaodaBaciadoRibeirodaOna_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelimitaodaBaciadoRibeirodaOna_112.addFeatures(features_DelimitaodaBaciadoRibeirodaOna_112);
var lyr_DelimitaodaBaciadoRibeirodaOna_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelimitaodaBaciadoRibeirodaOna_112, 
                style: style_DelimitaodaBaciadoRibeirodaOna_112,
                popuplayertitle: 'Delimitação da Bacia do Ribeirão da Onça',
                interactive: true,
                title: '<img src="styles/legend/DelimitaodaBaciadoRibeirodaOna_112.png" /> Delimitação da Bacia do Ribeirão da Onça'
            });
var format_APP1745unid_113 = new ol.format.GeoJSON();
var features_APP1745unid_113 = format_APP1745unid_113.readFeatures(json_APP1745unid_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP1745unid_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP1745unid_113.addFeatures(features_APP1745unid_113);
var lyr_APP1745unid_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP1745unid_113, 
                style: style_APP1745unid_113,
                popuplayertitle: 'APP (1745 unid.)',
                interactive: true,
                title: '<img src="styles/legend/APP1745unid_113.png" /> APP (1745 unid.)'
            });
var format_RiosDuplos84unid_114 = new ol.format.GeoJSON();
var features_RiosDuplos84unid_114 = format_RiosDuplos84unid_114.readFeatures(json_RiosDuplos84unid_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosDuplos84unid_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosDuplos84unid_114.addFeatures(features_RiosDuplos84unid_114);
var lyr_RiosDuplos84unid_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosDuplos84unid_114, 
                style: style_RiosDuplos84unid_114,
                popuplayertitle: 'Rios Duplos (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosDuplos84unid_114.png" /> Rios Duplos (84 unid.)'
            });
var format_MassasDgua270unid_115 = new ol.format.GeoJSON();
var features_MassasDgua270unid_115 = format_MassasDgua270unid_115.readFeatures(json_MassasDgua270unid_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MassasDgua270unid_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MassasDgua270unid_115.addFeatures(features_MassasDgua270unid_115);
var lyr_MassasDgua270unid_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MassasDgua270unid_115, 
                style: style_MassasDgua270unid_115,
                popuplayertitle: 'Massas D\'água (270 unid.)',
                interactive: true,
                title: '<img src="styles/legend/MassasDgua270unid_115.png" /> Massas D\'água (270 unid.)'
            });
var format_RiosSimples1842unid_116 = new ol.format.GeoJSON();
var features_RiosSimples1842unid_116 = format_RiosSimples1842unid_116.readFeatures(json_RiosSimples1842unid_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosSimples1842unid_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosSimples1842unid_116.addFeatures(features_RiosSimples1842unid_116);
var lyr_RiosSimples1842unid_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosSimples1842unid_116, 
                style: style_RiosSimples1842unid_116,
                popuplayertitle: 'Rios Simples (1842 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosSimples1842unid_116.png" /> Rios Simples (1842 unid.)'
            });
var format_Nascentes821unid_117 = new ol.format.GeoJSON();
var features_Nascentes821unid_117 = format_Nascentes821unid_117.readFeatures(json_Nascentes821unid_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nascentes821unid_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes821unid_117.addFeatures(features_Nascentes821unid_117);
var lyr_Nascentes821unid_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nascentes821unid_117, 
                style: style_Nascentes821unid_117,
                popuplayertitle: 'Nascentes (821 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Nascentes821unid_117.png" /> Nascentes (821 unid.)'
            });
var format_JardimZoobotnicoDelimitao_118 = new ol.format.GeoJSON();
var features_JardimZoobotnicoDelimitao_118 = format_JardimZoobotnicoDelimitao_118.readFeatures(json_JardimZoobotnicoDelimitao_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimZoobotnicoDelimitao_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnicoDelimitao_118.addFeatures(features_JardimZoobotnicoDelimitao_118);
var lyr_JardimZoobotnicoDelimitao_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnicoDelimitao_118, 
                style: style_JardimZoobotnicoDelimitao_118,
                popuplayertitle: 'Jardim Zoobotânico - Delimitação',
                interactive: true,
                title: '<img src="styles/legend/JardimZoobotnicoDelimitao_118.png" /> Jardim Zoobotânico - Delimitação'
            });
var format_JardimZoobotnicoTrajetos_119 = new ol.format.GeoJSON();
var features_JardimZoobotnicoTrajetos_119 = format_JardimZoobotnicoTrajetos_119.readFeatures(json_JardimZoobotnicoTrajetos_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimZoobotnicoTrajetos_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnicoTrajetos_119.addFeatures(features_JardimZoobotnicoTrajetos_119);
var lyr_JardimZoobotnicoTrajetos_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnicoTrajetos_119, 
                style: style_JardimZoobotnicoTrajetos_119,
                popuplayertitle: 'Jardim Zoobotânico - Trajetos',
                interactive: false,
                title: '<img src="styles/legend/JardimZoobotnicoTrajetos_119.png" /> Jardim Zoobotânico - Trajetos'
            });
var format_JardimZoobotnicoPontosdeInteresse19unid_120 = new ol.format.GeoJSON();
var features_JardimZoobotnicoPontosdeInteresse19unid_120 = format_JardimZoobotnicoPontosdeInteresse19unid_120.readFeatures(json_JardimZoobotnicoPontosdeInteresse19unid_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimZoobotnicoPontosdeInteresse19unid_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnicoPontosdeInteresse19unid_120.addFeatures(features_JardimZoobotnicoPontosdeInteresse19unid_120);
var lyr_JardimZoobotnicoPontosdeInteresse19unid_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnicoPontosdeInteresse19unid_120, 
                style: style_JardimZoobotnicoPontosdeInteresse19unid_120,
                popuplayertitle: 'Jardim Zoobotânico - Pontos de Interesse (19 unid.)',
                interactive: true,
                title: '<img src="styles/legend/JardimZoobotnicoPontosdeInteresse19unid_120.png" /> Jardim Zoobotânico - Pontos de Interesse (19 unid.)'
            });
var format_ParquedosTrabalhadores_121 = new ol.format.GeoJSON();
var features_ParquedosTrabalhadores_121 = format_ParquedosTrabalhadores_121.readFeatures(json_ParquedosTrabalhadores_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquedosTrabalhadores_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosTrabalhadores_121.addFeatures(features_ParquedosTrabalhadores_121);
var lyr_ParquedosTrabalhadores_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosTrabalhadores_121, 
                style: style_ParquedosTrabalhadores_121,
                popuplayertitle: 'Parque dos Trabalhadores',
                interactive: true,
                title: '<img src="styles/legend/ParquedosTrabalhadores_121.png" /> Parque dos Trabalhadores'
            });
var format_ParquedosTrabalhadores_122 = new ol.format.GeoJSON();
var features_ParquedosTrabalhadores_122 = format_ParquedosTrabalhadores_122.readFeatures(json_ParquedosTrabalhadores_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquedosTrabalhadores_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosTrabalhadores_122.addFeatures(features_ParquedosTrabalhadores_122);
var lyr_ParquedosTrabalhadores_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosTrabalhadores_122, 
                style: style_ParquedosTrabalhadores_122,
                popuplayertitle: 'Parque dos Trabalhadores',
                interactive: true,
                title: '<img src="styles/legend/ParquedosTrabalhadores_122.png" /> Parque dos Trabalhadores'
            });
var format_ComplexoPoliesportivo_123 = new ol.format.GeoJSON();
var features_ComplexoPoliesportivo_123 = format_ComplexoPoliesportivo_123.readFeatures(json_ComplexoPoliesportivo_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComplexoPoliesportivo_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComplexoPoliesportivo_123.addFeatures(features_ComplexoPoliesportivo_123);
var lyr_ComplexoPoliesportivo_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComplexoPoliesportivo_123, 
                style: style_ComplexoPoliesportivo_123,
                popuplayertitle: 'Complexo Poliesportivo',
                interactive: true,
                title: '<img src="styles/legend/ComplexoPoliesportivo_123.png" /> Complexo Poliesportivo'
            });
var format_ComplexoPoliesportivo_124 = new ol.format.GeoJSON();
var features_ComplexoPoliesportivo_124 = format_ComplexoPoliesportivo_124.readFeatures(json_ComplexoPoliesportivo_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComplexoPoliesportivo_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComplexoPoliesportivo_124.addFeatures(features_ComplexoPoliesportivo_124);
var lyr_ComplexoPoliesportivo_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComplexoPoliesportivo_124, 
                style: style_ComplexoPoliesportivo_124,
                popuplayertitle: 'Complexo Poliesportivo',
                interactive: true,
                title: '<img src="styles/legend/ComplexoPoliesportivo_124.png" /> Complexo Poliesportivo'
            });
var format_ParqueCaxambu_125 = new ol.format.GeoJSON();
var features_ParqueCaxambu_125 = format_ParqueCaxambu_125.readFeatures(json_ParqueCaxambu_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueCaxambu_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueCaxambu_125.addFeatures(features_ParqueCaxambu_125);
var lyr_ParqueCaxambu_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueCaxambu_125, 
                style: style_ParqueCaxambu_125,
                popuplayertitle: 'Parque Caxambu',
                interactive: true,
                title: '<img src="styles/legend/ParqueCaxambu_125.png" /> Parque Caxambu'
            });
var format_ParqueCaxambu_126 = new ol.format.GeoJSON();
var features_ParqueCaxambu_126 = format_ParqueCaxambu_126.readFeatures(json_ParqueCaxambu_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueCaxambu_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueCaxambu_126.addFeatures(features_ParqueCaxambu_126);
var lyr_ParqueCaxambu_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueCaxambu_126, 
                style: style_ParqueCaxambu_126,
                popuplayertitle: 'Parque Caxambu',
                interactive: true,
                title: '<img src="styles/legend/ParqueCaxambu_126.png" /> Parque Caxambu'
            });
var format_ParquedeExposiesFernandoCosta_127 = new ol.format.GeoJSON();
var features_ParquedeExposiesFernandoCosta_127 = format_ParquedeExposiesFernandoCosta_127.readFeatures(json_ParquedeExposiesFernandoCosta_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquedeExposiesFernandoCosta_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedeExposiesFernandoCosta_127.addFeatures(features_ParquedeExposiesFernandoCosta_127);
var lyr_ParquedeExposiesFernandoCosta_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedeExposiesFernandoCosta_127, 
                style: style_ParquedeExposiesFernandoCosta_127,
                popuplayertitle: 'Parque de Exposições “Fernando Costa”',
                interactive: true,
                title: '<img src="styles/legend/ParquedeExposiesFernandoCosta_127.png" /> Parque de Exposições “Fernando Costa”'
            });
var format_ParquedeExposiesFernandoCosta_128 = new ol.format.GeoJSON();
var features_ParquedeExposiesFernandoCosta_128 = format_ParquedeExposiesFernandoCosta_128.readFeatures(json_ParquedeExposiesFernandoCosta_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquedeExposiesFernandoCosta_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedeExposiesFernandoCosta_128.addFeatures(features_ParquedeExposiesFernandoCosta_128);
var lyr_ParquedeExposiesFernandoCosta_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedeExposiesFernandoCosta_128, 
                style: style_ParquedeExposiesFernandoCosta_128,
                popuplayertitle: 'Parque de Exposições “Fernando Costa”',
                interactive: true,
                title: '<img src="styles/legend/ParquedeExposiesFernandoCosta_128.png" /> Parque de Exposições “Fernando Costa”'
            });
var format_ParqueAmbientalLuprcioTaveira_129 = new ol.format.GeoJSON();
var features_ParqueAmbientalLuprcioTaveira_129 = format_ParqueAmbientalLuprcioTaveira_129.readFeatures(json_ParqueAmbientalLuprcioTaveira_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueAmbientalLuprcioTaveira_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAmbientalLuprcioTaveira_129.addFeatures(features_ParqueAmbientalLuprcioTaveira_129);
var lyr_ParqueAmbientalLuprcioTaveira_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAmbientalLuprcioTaveira_129, 
                style: style_ParqueAmbientalLuprcioTaveira_129,
                popuplayertitle: 'Parque Ambiental “Lupércio Taveira”',
                interactive: true,
                title: '<img src="styles/legend/ParqueAmbientalLuprcioTaveira_129.png" /> Parque Ambiental “Lupércio Taveira”'
            });
var format_ParqueAmbientalLuprcioTaveira_130 = new ol.format.GeoJSON();
var features_ParqueAmbientalLuprcioTaveira_130 = format_ParqueAmbientalLuprcioTaveira_130.readFeatures(json_ParqueAmbientalLuprcioTaveira_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueAmbientalLuprcioTaveira_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAmbientalLuprcioTaveira_130.addFeatures(features_ParqueAmbientalLuprcioTaveira_130);
var lyr_ParqueAmbientalLuprcioTaveira_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAmbientalLuprcioTaveira_130, 
                style: style_ParqueAmbientalLuprcioTaveira_130,
                popuplayertitle: 'Parque Ambiental “Lupércio Taveira”',
                interactive: true,
                title: '<img src="styles/legend/ParqueAmbientalLuprcioTaveira_130.png" /> Parque Ambiental “Lupércio Taveira”'
            });
var format_R01S01_131 = new ol.format.GeoJSON();
var features_R01S01_131 = format_R01S01_131.readFeatures(json_R01S01_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S01_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S01_131.addFeatures(features_R01S01_131);
var lyr_R01S01_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S01_131, 
                style: style_R01S01_131,
                popuplayertitle: 'R01S01',
                interactive: true,
                title: '<img src="styles/legend/R01S01_131.png" /> R01S01'
            });
var format_R01S02_132 = new ol.format.GeoJSON();
var features_R01S02_132 = format_R01S02_132.readFeatures(json_R01S02_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S02_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S02_132.addFeatures(features_R01S02_132);
var lyr_R01S02_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S02_132, 
                style: style_R01S02_132,
                popuplayertitle: 'R01S02',
                interactive: true,
                title: '<img src="styles/legend/R01S02_132.png" /> R01S02'
            });
var format_R01S03_133 = new ol.format.GeoJSON();
var features_R01S03_133 = format_R01S03_133.readFeatures(json_R01S03_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S03_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S03_133.addFeatures(features_R01S03_133);
var lyr_R01S03_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S03_133, 
                style: style_R01S03_133,
                popuplayertitle: 'R01S03',
                interactive: true,
                title: '<img src="styles/legend/R01S03_133.png" /> R01S03'
            });
var format_R01S04_134 = new ol.format.GeoJSON();
var features_R01S04_134 = format_R01S04_134.readFeatures(json_R01S04_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S04_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S04_134.addFeatures(features_R01S04_134);
var lyr_R01S04_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S04_134, 
                style: style_R01S04_134,
                popuplayertitle: 'R01S04',
                interactive: true,
                title: '<img src="styles/legend/R01S04_134.png" /> R01S04'
            });
var format_R01S05_135 = new ol.format.GeoJSON();
var features_R01S05_135 = format_R01S05_135.readFeatures(json_R01S05_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S05_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S05_135.addFeatures(features_R01S05_135);
var lyr_R01S05_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S05_135, 
                style: style_R01S05_135,
                popuplayertitle: 'R01S05',
                interactive: true,
                title: '<img src="styles/legend/R01S05_135.png" /> R01S05'
            });
var format_R01S06_136 = new ol.format.GeoJSON();
var features_R01S06_136 = format_R01S06_136.readFeatures(json_R01S06_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S06_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S06_136.addFeatures(features_R01S06_136);
var lyr_R01S06_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S06_136, 
                style: style_R01S06_136,
                popuplayertitle: 'R01S06',
                interactive: true,
                title: '<img src="styles/legend/R01S06_136.png" /> R01S06'
            });
var format_R01S07_137 = new ol.format.GeoJSON();
var features_R01S07_137 = format_R01S07_137.readFeatures(json_R01S07_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S07_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S07_137.addFeatures(features_R01S07_137);
var lyr_R01S07_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S07_137, 
                style: style_R01S07_137,
                popuplayertitle: 'R01S07',
                interactive: true,
                title: '<img src="styles/legend/R01S07_137.png" /> R01S07'
            });
var format_R01S08_138 = new ol.format.GeoJSON();
var features_R01S08_138 = format_R01S08_138.readFeatures(json_R01S08_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S08_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S08_138.addFeatures(features_R01S08_138);
var lyr_R01S08_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S08_138, 
                style: style_R01S08_138,
                popuplayertitle: 'R01S08',
                interactive: true,
                title: '<img src="styles/legend/R01S08_138.png" /> R01S08'
            });
var format_R02S01_139 = new ol.format.GeoJSON();
var features_R02S01_139 = format_R02S01_139.readFeatures(json_R02S01_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S01_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S01_139.addFeatures(features_R02S01_139);
var lyr_R02S01_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S01_139, 
                style: style_R02S01_139,
                popuplayertitle: 'R02S01',
                interactive: true,
                title: '<img src="styles/legend/R02S01_139.png" /> R02S01'
            });
var format_R02S02_140 = new ol.format.GeoJSON();
var features_R02S02_140 = format_R02S02_140.readFeatures(json_R02S02_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S02_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S02_140.addFeatures(features_R02S02_140);
var lyr_R02S02_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S02_140, 
                style: style_R02S02_140,
                popuplayertitle: 'R02S02',
                interactive: true,
                title: '<img src="styles/legend/R02S02_140.png" /> R02S02'
            });
var format_R02S03_141 = new ol.format.GeoJSON();
var features_R02S03_141 = format_R02S03_141.readFeatures(json_R02S03_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S03_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S03_141.addFeatures(features_R02S03_141);
var lyr_R02S03_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S03_141, 
                style: style_R02S03_141,
                popuplayertitle: 'R02S03',
                interactive: true,
                title: '<img src="styles/legend/R02S03_141.png" /> R02S03'
            });
var format_R02S04_142 = new ol.format.GeoJSON();
var features_R02S04_142 = format_R02S04_142.readFeatures(json_R02S04_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S04_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S04_142.addFeatures(features_R02S04_142);
var lyr_R02S04_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S04_142, 
                style: style_R02S04_142,
                popuplayertitle: 'R02S04',
                interactive: true,
                title: '<img src="styles/legend/R02S04_142.png" /> R02S04'
            });
var format_R02S05_143 = new ol.format.GeoJSON();
var features_R02S05_143 = format_R02S05_143.readFeatures(json_R02S05_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S05_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S05_143.addFeatures(features_R02S05_143);
var lyr_R02S05_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S05_143, 
                style: style_R02S05_143,
                popuplayertitle: 'R02S05',
                interactive: true,
                title: '<img src="styles/legend/R02S05_143.png" /> R02S05'
            });
var format_R02S06_144 = new ol.format.GeoJSON();
var features_R02S06_144 = format_R02S06_144.readFeatures(json_R02S06_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S06_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S06_144.addFeatures(features_R02S06_144);
var lyr_R02S06_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S06_144, 
                style: style_R02S06_144,
                popuplayertitle: 'R02S06',
                interactive: true,
                title: '<img src="styles/legend/R02S06_144.png" /> R02S06'
            });
var format_R02S07_145 = new ol.format.GeoJSON();
var features_R02S07_145 = format_R02S07_145.readFeatures(json_R02S07_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S07_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S07_145.addFeatures(features_R02S07_145);
var lyr_R02S07_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S07_145, 
                style: style_R02S07_145,
                popuplayertitle: 'R02S07',
                interactive: true,
                title: '<img src="styles/legend/R02S07_145.png" /> R02S07'
            });
var format_R02S08_146 = new ol.format.GeoJSON();
var features_R02S08_146 = format_R02S08_146.readFeatures(json_R02S08_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S08_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S08_146.addFeatures(features_R02S08_146);
var lyr_R02S08_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S08_146, 
                style: style_R02S08_146,
                popuplayertitle: 'R02S08',
                interactive: true,
                title: '<img src="styles/legend/R02S08_146.png" /> R02S08'
            });
var format_R03S01_147 = new ol.format.GeoJSON();
var features_R03S01_147 = format_R03S01_147.readFeatures(json_R03S01_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S01_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S01_147.addFeatures(features_R03S01_147);
var lyr_R03S01_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S01_147, 
                style: style_R03S01_147,
                popuplayertitle: 'R03S01',
                interactive: true,
                title: '<img src="styles/legend/R03S01_147.png" /> R03S01'
            });
var format_R03S02_148 = new ol.format.GeoJSON();
var features_R03S02_148 = format_R03S02_148.readFeatures(json_R03S02_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S02_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S02_148.addFeatures(features_R03S02_148);
var lyr_R03S02_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S02_148, 
                style: style_R03S02_148,
                popuplayertitle: 'R03S02',
                interactive: true,
                title: '<img src="styles/legend/R03S02_148.png" /> R03S02'
            });
var format_R03S03_149 = new ol.format.GeoJSON();
var features_R03S03_149 = format_R03S03_149.readFeatures(json_R03S03_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S03_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S03_149.addFeatures(features_R03S03_149);
var lyr_R03S03_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S03_149, 
                style: style_R03S03_149,
                popuplayertitle: 'R03S03',
                interactive: true,
                title: '<img src="styles/legend/R03S03_149.png" /> R03S03'
            });
var format_R03S04_150 = new ol.format.GeoJSON();
var features_R03S04_150 = format_R03S04_150.readFeatures(json_R03S04_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S04_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S04_150.addFeatures(features_R03S04_150);
var lyr_R03S04_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S04_150, 
                style: style_R03S04_150,
                popuplayertitle: 'R03S04',
                interactive: true,
                title: '<img src="styles/legend/R03S04_150.png" /> R03S04'
            });
var format_R03S05_151 = new ol.format.GeoJSON();
var features_R03S05_151 = format_R03S05_151.readFeatures(json_R03S05_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S05_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S05_151.addFeatures(features_R03S05_151);
var lyr_R03S05_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S05_151, 
                style: style_R03S05_151,
                popuplayertitle: 'R03S05',
                interactive: true,
                title: '<img src="styles/legend/R03S05_151.png" /> R03S05'
            });
var format_R03S06_152 = new ol.format.GeoJSON();
var features_R03S06_152 = format_R03S06_152.readFeatures(json_R03S06_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S06_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S06_152.addFeatures(features_R03S06_152);
var lyr_R03S06_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S06_152, 
                style: style_R03S06_152,
                popuplayertitle: 'R03S06',
                interactive: true,
                title: '<img src="styles/legend/R03S06_152.png" /> R03S06'
            });
var format_R03S07_153 = new ol.format.GeoJSON();
var features_R03S07_153 = format_R03S07_153.readFeatures(json_R03S07_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S07_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S07_153.addFeatures(features_R03S07_153);
var lyr_R03S07_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S07_153, 
                style: style_R03S07_153,
                popuplayertitle: 'R03S07',
                interactive: true,
                title: '<img src="styles/legend/R03S07_153.png" /> R03S07'
            });
var format_R03S08_154 = new ol.format.GeoJSON();
var features_R03S08_154 = format_R03S08_154.readFeatures(json_R03S08_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S08_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S08_154.addFeatures(features_R03S08_154);
var lyr_R03S08_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S08_154, 
                style: style_R03S08_154,
                popuplayertitle: 'R03S08',
                interactive: true,
                title: '<img src="styles/legend/R03S08_154.png" /> R03S08'
            });
var format_ProgramaAdoteUmaPraa292unid27354594m_155 = new ol.format.GeoJSON();
var features_ProgramaAdoteUmaPraa292unid27354594m_155 = format_ProgramaAdoteUmaPraa292unid27354594m_155.readFeatures(json_ProgramaAdoteUmaPraa292unid27354594m_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProgramaAdoteUmaPraa292unid27354594m_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProgramaAdoteUmaPraa292unid27354594m_155.addFeatures(features_ProgramaAdoteUmaPraa292unid27354594m_155);
var lyr_ProgramaAdoteUmaPraa292unid27354594m_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProgramaAdoteUmaPraa292unid27354594m_155, 
                style: style_ProgramaAdoteUmaPraa292unid27354594m_155,
                popuplayertitle: 'Programa Adote Uma Praça (292 unid. / 273545.94 m²)',
                interactive: true,
                title: '<img src="styles/legend/ProgramaAdoteUmaPraa292unid27354594m_155.png" /> Programa Adote Uma Praça (292 unid. / 273545.94 m²)'
            });
var format_SemPlacaEgnaldo6unid284826m_156 = new ol.format.GeoJSON();
var features_SemPlacaEgnaldo6unid284826m_156 = format_SemPlacaEgnaldo6unid284826m_156.readFeatures(json_SemPlacaEgnaldo6unid284826m_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SemPlacaEgnaldo6unid284826m_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SemPlacaEgnaldo6unid284826m_156.addFeatures(features_SemPlacaEgnaldo6unid284826m_156);
var lyr_SemPlacaEgnaldo6unid284826m_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SemPlacaEgnaldo6unid284826m_156, 
                style: style_SemPlacaEgnaldo6unid284826m_156,
                popuplayertitle: 'Sem Placa - Egnaldo (6 unid. / 2848.26 m²)',
                interactive: true,
                title: '<img src="styles/legend/SemPlacaEgnaldo6unid284826m_156.png" /> Sem Placa - Egnaldo (6 unid. / 2848.26 m²)'
            });
var format_SemPlacaDilu17unid903692m_157 = new ol.format.GeoJSON();
var features_SemPlacaDilu17unid903692m_157 = format_SemPlacaDilu17unid903692m_157.readFeatures(json_SemPlacaDilu17unid903692m_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SemPlacaDilu17unid903692m_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SemPlacaDilu17unid903692m_157.addFeatures(features_SemPlacaDilu17unid903692m_157);
var lyr_SemPlacaDilu17unid903692m_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SemPlacaDilu17unid903692m_157, 
                style: style_SemPlacaDilu17unid903692m_157,
                popuplayertitle: 'Sem Placa - Dilu (17 unid. / 9036.92 m²)',
                interactive: true,
                title: '<img src="styles/legend/SemPlacaDilu17unid903692m_157.png" /> Sem Placa - Dilu (17 unid. / 9036.92 m²)'
            });
var format_ComPlacaEgnaldo96unid8147117m_158 = new ol.format.GeoJSON();
var features_ComPlacaEgnaldo96unid8147117m_158 = format_ComPlacaEgnaldo96unid8147117m_158.readFeatures(json_ComPlacaEgnaldo96unid8147117m_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComPlacaEgnaldo96unid8147117m_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComPlacaEgnaldo96unid8147117m_158.addFeatures(features_ComPlacaEgnaldo96unid8147117m_158);
var lyr_ComPlacaEgnaldo96unid8147117m_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComPlacaEgnaldo96unid8147117m_158, 
                style: style_ComPlacaEgnaldo96unid8147117m_158,
                popuplayertitle: 'Com Placa - Egnaldo (96 unid. / 81471.17 m²)',
                interactive: true,
                title: '<img src="styles/legend/ComPlacaEgnaldo96unid8147117m_158.png" /> Com Placa - Egnaldo (96 unid. / 81471.17 m²)'
            });
var format_ComPlacaDilu172unid17642665m_159 = new ol.format.GeoJSON();
var features_ComPlacaDilu172unid17642665m_159 = format_ComPlacaDilu172unid17642665m_159.readFeatures(json_ComPlacaDilu172unid17642665m_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComPlacaDilu172unid17642665m_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComPlacaDilu172unid17642665m_159.addFeatures(features_ComPlacaDilu172unid17642665m_159);
var lyr_ComPlacaDilu172unid17642665m_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComPlacaDilu172unid17642665m_159, 
                style: style_ComPlacaDilu172unid17642665m_159,
                popuplayertitle: 'Com Placa - Dilu  (172 unid. / 176426.65 m²)',
                interactive: true,
                title: '<img src="styles/legend/ComPlacaDilu172unid17642665m_159.png" /> Com Placa - Dilu  (172 unid. / 176426.65 m²)'
            });
var format_LotesImvelPrivado49unid_160 = new ol.format.GeoJSON();
var features_LotesImvelPrivado49unid_160 = format_LotesImvelPrivado49unid_160.readFeatures(json_LotesImvelPrivado49unid_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LotesImvelPrivado49unid_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotesImvelPrivado49unid_160.addFeatures(features_LotesImvelPrivado49unid_160);
var lyr_LotesImvelPrivado49unid_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LotesImvelPrivado49unid_160, 
                style: style_LotesImvelPrivado49unid_160,
                popuplayertitle: 'Lotes - Imóvel Privado (49 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LotesImvelPrivado49unid_160.png" /> Lotes - Imóvel Privado (49 unid.)'
            });
var format_ImvelPrivado49unid_161 = new ol.format.GeoJSON();
var features_ImvelPrivado49unid_161 = format_ImvelPrivado49unid_161.readFeatures(json_ImvelPrivado49unid_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImvelPrivado49unid_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelPrivado49unid_161.addFeatures(features_ImvelPrivado49unid_161);
var lyr_ImvelPrivado49unid_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImvelPrivado49unid_161, 
                style: style_ImvelPrivado49unid_161,
                popuplayertitle: 'Imóvel Privado (49 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ImvelPrivado49unid_161.png" /> Imóvel Privado (49 unid.)'
            });
var format_ImvelPblico112unid_162 = new ol.format.GeoJSON();
var features_ImvelPblico112unid_162 = format_ImvelPblico112unid_162.readFeatures(json_ImvelPblico112unid_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImvelPblico112unid_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelPblico112unid_162.addFeatures(features_ImvelPblico112unid_162);
var lyr_ImvelPblico112unid_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImvelPblico112unid_162, 
                style: style_ImvelPblico112unid_162,
                popuplayertitle: 'Imóvel Público (112 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ImvelPblico112unid_162.png" /> Imóvel Público (112 unid.)'
            });
var format_RodoviasEstaduais4unid_163 = new ol.format.GeoJSON();
var features_RodoviasEstaduais4unid_163 = format_RodoviasEstaduais4unid_163.readFeatures(json_RodoviasEstaduais4unid_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodoviasEstaduais4unid_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviasEstaduais4unid_163.addFeatures(features_RodoviasEstaduais4unid_163);
var lyr_RodoviasEstaduais4unid_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviasEstaduais4unid_163, 
                style: style_RodoviasEstaduais4unid_163,
                popuplayertitle: 'Rodovias Estaduais (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RodoviasEstaduais4unid_163.png" /> Rodovias Estaduais (4 unid.)'
            });
var format_EstradasRuraisMunicipais34unid_164 = new ol.format.GeoJSON();
var features_EstradasRuraisMunicipais34unid_164 = format_EstradasRuraisMunicipais34unid_164.readFeatures(json_EstradasRuraisMunicipais34unid_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstradasRuraisMunicipais34unid_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstradasRuraisMunicipais34unid_164.addFeatures(features_EstradasRuraisMunicipais34unid_164);
var lyr_EstradasRuraisMunicipais34unid_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstradasRuraisMunicipais34unid_164, 
                style: style_EstradasRuraisMunicipais34unid_164,
                popuplayertitle: 'Estradas Rurais Municipais (34 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EstradasRuraisMunicipais34unid_164.png" /> Estradas Rurais Municipais (34 unid.)'
            });
var format_RodoviasMunicipais8unid_165 = new ol.format.GeoJSON();
var features_RodoviasMunicipais8unid_165 = format_RodoviasMunicipais8unid_165.readFeatures(json_RodoviasMunicipais8unid_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodoviasMunicipais8unid_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviasMunicipais8unid_165.addFeatures(features_RodoviasMunicipais8unid_165);
var lyr_RodoviasMunicipais8unid_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviasMunicipais8unid_165, 
                style: style_RodoviasMunicipais8unid_165,
                popuplayertitle: 'Rodovias Municipais (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RodoviasMunicipais8unid_165.png" /> Rodovias Municipais (8 unid.)'
            });
var format_ResduosdeConstruoCivil7unid_166 = new ol.format.GeoJSON();
var features_ResduosdeConstruoCivil7unid_166 = format_ResduosdeConstruoCivil7unid_166.readFeatures(json_ResduosdeConstruoCivil7unid_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosdeConstruoCivil7unid_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeConstruoCivil7unid_166.addFeatures(features_ResduosdeConstruoCivil7unid_166);
var lyr_ResduosdeConstruoCivil7unid_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeConstruoCivil7unid_166, 
                style: style_ResduosdeConstruoCivil7unid_166,
                popuplayertitle: 'Resíduos de Construção Civil (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeConstruoCivil7unid_166.png" /> Resíduos de Construção Civil (7 unid.)'
            });
var format_ResduosVerdes1unid_167 = new ol.format.GeoJSON();
var features_ResduosVerdes1unid_167 = format_ResduosVerdes1unid_167.readFeatures(json_ResduosVerdes1unid_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosVerdes1unid_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosVerdes1unid_167.addFeatures(features_ResduosVerdes1unid_167);
var lyr_ResduosVerdes1unid_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosVerdes1unid_167, 
                style: style_ResduosVerdes1unid_167,
                popuplayertitle: 'Resíduos "Verdes" (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosVerdes1unid_167.png" /> Resíduos "Verdes" (1 unid.)'
            });
var format_ChapasdeRaioX1unid_168 = new ol.format.GeoJSON();
var features_ChapasdeRaioX1unid_168 = format_ChapasdeRaioX1unid_168.readFeatures(json_ChapasdeRaioX1unid_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChapasdeRaioX1unid_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChapasdeRaioX1unid_168.addFeatures(features_ChapasdeRaioX1unid_168);
var lyr_ChapasdeRaioX1unid_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChapasdeRaioX1unid_168, 
                style: style_ChapasdeRaioX1unid_168,
                popuplayertitle: 'Chapas de Raio-X (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ChapasdeRaioX1unid_168.png" /> Chapas de Raio-X (1 unid.)'
            });
var format_Embalagensvaziasdeagrotxicos1unid_169 = new ol.format.GeoJSON();
var features_Embalagensvaziasdeagrotxicos1unid_169 = format_Embalagensvaziasdeagrotxicos1unid_169.readFeatures(json_Embalagensvaziasdeagrotxicos1unid_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Embalagensvaziasdeagrotxicos1unid_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embalagensvaziasdeagrotxicos1unid_169.addFeatures(features_Embalagensvaziasdeagrotxicos1unid_169);
var lyr_Embalagensvaziasdeagrotxicos1unid_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Embalagensvaziasdeagrotxicos1unid_169, 
                style: style_Embalagensvaziasdeagrotxicos1unid_169,
                popuplayertitle: 'Embalagens vazias de agrotóxicos (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Embalagensvaziasdeagrotxicos1unid_169.png" /> Embalagens vazias de agrotóxicos (1 unid.)'
            });
var format_leodecozinhausado2unid_170 = new ol.format.GeoJSON();
var features_leodecozinhausado2unid_170 = format_leodecozinhausado2unid_170.readFeatures(json_leodecozinhausado2unid_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leodecozinhausado2unid_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leodecozinhausado2unid_170.addFeatures(features_leodecozinhausado2unid_170);
var lyr_leodecozinhausado2unid_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leodecozinhausado2unid_170, 
                style: style_leodecozinhausado2unid_170,
                popuplayertitle: 'Óleo de cozinha usado (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/leodecozinhausado2unid_170.png" /> Óleo de cozinha usado (2 unid.)'
            });
var format_leolubrificanteusado1unid_171 = new ol.format.GeoJSON();
var features_leolubrificanteusado1unid_171 = format_leolubrificanteusado1unid_171.readFeatures(json_leolubrificanteusado1unid_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leolubrificanteusado1unid_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leolubrificanteusado1unid_171.addFeatures(features_leolubrificanteusado1unid_171);
var lyr_leolubrificanteusado1unid_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leolubrificanteusado1unid_171, 
                style: style_leolubrificanteusado1unid_171,
                popuplayertitle: 'Óleo lubrificante usado (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/leolubrificanteusado1unid_171.png" /> Óleo lubrificante usado (1 unid.)'
            });
var format_Latasdetintametlicasvazias2unid_172 = new ol.format.GeoJSON();
var features_Latasdetintametlicasvazias2unid_172 = format_Latasdetintametlicasvazias2unid_172.readFeatures(json_Latasdetintametlicasvazias2unid_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Latasdetintametlicasvazias2unid_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Latasdetintametlicasvazias2unid_172.addFeatures(features_Latasdetintametlicasvazias2unid_172);
var lyr_Latasdetintametlicasvazias2unid_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Latasdetintametlicasvazias2unid_172, 
                style: style_Latasdetintametlicasvazias2unid_172,
                popuplayertitle: 'Latas de tinta metálicas vazias (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Latasdetintametlicasvazias2unid_172.png" /> Latas de tinta metálicas vazias (2 unid.)'
            });
var format_ResduosPerigosos1unid_173 = new ol.format.GeoJSON();
var features_ResduosPerigosos1unid_173 = format_ResduosPerigosos1unid_173.readFeatures(json_ResduosPerigosos1unid_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosPerigosos1unid_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosPerigosos1unid_173.addFeatures(features_ResduosPerigosos1unid_173);
var lyr_ResduosPerigosos1unid_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosPerigosos1unid_173, 
                style: style_ResduosPerigosos1unid_173,
                popuplayertitle: 'Resíduos Perigosos (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosPerigosos1unid_173.png" /> Resíduos Perigosos (1 unid.)'
            });
var format_Madeiras1unid_174 = new ol.format.GeoJSON();
var features_Madeiras1unid_174 = format_Madeiras1unid_174.readFeatures(json_Madeiras1unid_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Madeiras1unid_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Madeiras1unid_174.addFeatures(features_Madeiras1unid_174);
var lyr_Madeiras1unid_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Madeiras1unid_174, 
                style: style_Madeiras1unid_174,
                popuplayertitle: 'Madeiras (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Madeiras1unid_174.png" /> Madeiras (1 unid.)'
            });
var format_ResduosdeServiosdeSade21unid_175 = new ol.format.GeoJSON();
var features_ResduosdeServiosdeSade21unid_175 = format_ResduosdeServiosdeSade21unid_175.readFeatures(json_ResduosdeServiosdeSade21unid_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosdeServiosdeSade21unid_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeServiosdeSade21unid_175.addFeatures(features_ResduosdeServiosdeSade21unid_175);
var lyr_ResduosdeServiosdeSade21unid_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeServiosdeSade21unid_175, 
                style: style_ResduosdeServiosdeSade21unid_175,
                popuplayertitle: 'Resíduos de Serviços de Saúde (21 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeServiosdeSade21unid_175.png" /> Resíduos de Serviços de Saúde (21 unid.)'
            });
var format_PilhaseBaterias16unid_176 = new ol.format.GeoJSON();
var features_PilhaseBaterias16unid_176 = format_PilhaseBaterias16unid_176.readFeatures(json_PilhaseBaterias16unid_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PilhaseBaterias16unid_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PilhaseBaterias16unid_176.addFeatures(features_PilhaseBaterias16unid_176);
var lyr_PilhaseBaterias16unid_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PilhaseBaterias16unid_176, 
                style: style_PilhaseBaterias16unid_176,
                popuplayertitle: 'Pilhas e Baterias (16 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PilhaseBaterias16unid_176.png" /> Pilhas e Baterias (16 unid.)'
            });
var format_Pneus1unid_177 = new ol.format.GeoJSON();
var features_Pneus1unid_177 = format_Pneus1unid_177.readFeatures(json_Pneus1unid_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pneus1unid_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pneus1unid_177.addFeatures(features_Pneus1unid_177);
var lyr_Pneus1unid_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pneus1unid_177, 
                style: style_Pneus1unid_177,
                popuplayertitle: 'Pneus (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Pneus1unid_177.png" /> Pneus (1 unid.)'
            });
var format_Lmpadas4unid_178 = new ol.format.GeoJSON();
var features_Lmpadas4unid_178 = format_Lmpadas4unid_178.readFeatures(json_Lmpadas4unid_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmpadas4unid_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmpadas4unid_178.addFeatures(features_Lmpadas4unid_178);
var lyr_Lmpadas4unid_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmpadas4unid_178, 
                style: style_Lmpadas4unid_178,
                popuplayertitle: 'Lâmpadas (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lmpadas4unid_178.png" /> Lâmpadas (4 unid.)'
            });
var format_ResduosdeCouro1unid_179 = new ol.format.GeoJSON();
var features_ResduosdeCouro1unid_179 = format_ResduosdeCouro1unid_179.readFeatures(json_ResduosdeCouro1unid_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosdeCouro1unid_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeCouro1unid_179.addFeatures(features_ResduosdeCouro1unid_179);
var lyr_ResduosdeCouro1unid_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeCouro1unid_179, 
                style: style_ResduosdeCouro1unid_179,
                popuplayertitle: 'Resíduos de Couro (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeCouro1unid_179.png" /> Resíduos de Couro (1 unid.)'
            });
var format_ResduosEletrnicos2unid_180 = new ol.format.GeoJSON();
var features_ResduosEletrnicos2unid_180 = format_ResduosEletrnicos2unid_180.readFeatures(json_ResduosEletrnicos2unid_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosEletrnicos2unid_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosEletrnicos2unid_180.addFeatures(features_ResduosEletrnicos2unid_180);
var lyr_ResduosEletrnicos2unid_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosEletrnicos2unid_180, 
                style: style_ResduosEletrnicos2unid_180,
                popuplayertitle: 'Resíduos Eletrônicos (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosEletrnicos2unid_180.png" /> Resíduos Eletrônicos (2 unid.)'
            });
var format_ResduosReciclveis15unid_181 = new ol.format.GeoJSON();
var features_ResduosReciclveis15unid_181 = format_ResduosReciclveis15unid_181.readFeatures(json_ResduosReciclveis15unid_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosReciclveis15unid_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosReciclveis15unid_181.addFeatures(features_ResduosReciclveis15unid_181);
var lyr_ResduosReciclveis15unid_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosReciclveis15unid_181, 
                style: style_ResduosReciclveis15unid_181,
                popuplayertitle: 'Resíduos Recicláveis (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosReciclveis15unid_181.png" /> Resíduos Recicláveis (15 unid.)'
            });
var format_ResduosInservveis4unid_182 = new ol.format.GeoJSON();
var features_ResduosInservveis4unid_182 = format_ResduosInservveis4unid_182.readFeatures(json_ResduosInservveis4unid_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosInservveis4unid_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosInservveis4unid_182.addFeatures(features_ResduosInservveis4unid_182);
var lyr_ResduosInservveis4unid_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosInservveis4unid_182, 
                style: style_ResduosInservveis4unid_182,
                popuplayertitle: 'Resíduos Inservíveis (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosInservveis4unid_182.png" /> Resíduos Inservíveis (4 unid.)'
            });
var format_Contineres286unid_183 = new ol.format.GeoJSON();
var features_Contineres286unid_183 = format_Contineres286unid_183.readFeatures(json_Contineres286unid_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contineres286unid_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres286unid_183.addFeatures(features_Contineres286unid_183);
var lyr_Contineres286unid_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres286unid_183, 
                style: style_Contineres286unid_183,
                popuplayertitle: 'Contêineres (286 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Contineres286unid_183.png" /> Contêineres (286 unid.)'
            });
var format_rvoreImuneaoCorte8unid_184 = new ol.format.GeoJSON();
var features_rvoreImuneaoCorte8unid_184 = format_rvoreImuneaoCorte8unid_184.readFeatures(json_rvoreImuneaoCorte8unid_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoreImuneaoCorte8unid_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoreImuneaoCorte8unid_184.addFeatures(features_rvoreImuneaoCorte8unid_184);
var lyr_rvoreImuneaoCorte8unid_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoreImuneaoCorte8unid_184, 
                style: style_rvoreImuneaoCorte8unid_184,
                popuplayertitle: 'Árvore Imune ao Corte (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoreImuneaoCorte8unid_184.png" /> Árvore Imune ao Corte (8 unid.)'
            });
var format_LocaisdeDifcilAcessoereasRurais20unid_185 = new ol.format.GeoJSON();
var features_LocaisdeDifcilAcessoereasRurais20unid_185 = format_LocaisdeDifcilAcessoereasRurais20unid_185.readFeatures(json_LocaisdeDifcilAcessoereasRurais20unid_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocaisdeDifcilAcessoereasRurais20unid_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocaisdeDifcilAcessoereasRurais20unid_185.addFeatures(features_LocaisdeDifcilAcessoereasRurais20unid_185);
var lyr_LocaisdeDifcilAcessoereasRurais20unid_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocaisdeDifcilAcessoereasRurais20unid_185, 
                style: style_LocaisdeDifcilAcessoereasRurais20unid_185,
                popuplayertitle: 'Locais de Difícil Acesso e Áreas Rurais (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LocaisdeDifcilAcessoereasRurais20unid_185.png" /> Locais de Difícil Acesso e Áreas Rurais (20 unid.)'
            });
var format_AcademiasaoArLivre84unid_186 = new ol.format.GeoJSON();
var features_AcademiasaoArLivre84unid_186 = format_AcademiasaoArLivre84unid_186.readFeatures(json_AcademiasaoArLivre84unid_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcademiasaoArLivre84unid_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcademiasaoArLivre84unid_186.addFeatures(features_AcademiasaoArLivre84unid_186);
var lyr_AcademiasaoArLivre84unid_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcademiasaoArLivre84unid_186, 
                style: style_AcademiasaoArLivre84unid_186,
                popuplayertitle: 'Academias ao Ar Livre (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AcademiasaoArLivre84unid_186.png" /> Academias ao Ar Livre (84 unid.)'
            });
var format_Voorocas26unid_187 = new ol.format.GeoJSON();
var features_Voorocas26unid_187 = format_Voorocas26unid_187.readFeatures(json_Voorocas26unid_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voorocas26unid_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voorocas26unid_187.addFeatures(features_Voorocas26unid_187);
var lyr_Voorocas26unid_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voorocas26unid_187, 
                style: style_Voorocas26unid_187,
                popuplayertitle: 'Voçorocas (26 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Voorocas26unid_187.png" /> Voçorocas (26 unid.)'
            });
var group_DescarteCorretodeResduos = new ol.layer.Group({
                                layers: [lyr_ResduosdeConstruoCivil7unid_166,lyr_ResduosVerdes1unid_167,lyr_ChapasdeRaioX1unid_168,lyr_Embalagensvaziasdeagrotxicos1unid_169,lyr_leodecozinhausado2unid_170,lyr_leolubrificanteusado1unid_171,lyr_Latasdetintametlicasvazias2unid_172,lyr_ResduosPerigosos1unid_173,lyr_Madeiras1unid_174,lyr_ResduosdeServiosdeSade21unid_175,lyr_PilhaseBaterias16unid_176,lyr_Pneus1unid_177,lyr_Lmpadas4unid_178,lyr_ResduosdeCouro1unid_179,lyr_ResduosEletrnicos2unid_180,lyr_ResduosReciclveis15unid_181,lyr_ResduosInservveis4unid_182,],
                                fold: 'close',
                                title: 'Descarte Correto de Resíduos'});
var group_RodoviaseEstradas = new ol.layer.Group({
                                layers: [lyr_RodoviasEstaduais4unid_163,lyr_EstradasRuraisMunicipais34unid_164,lyr_RodoviasMunicipais8unid_165,],
                                fold: 'close',
                                title: 'Rodovias e Estradas'});
var group_PontosViciados = new ol.layer.Group({
                                layers: [lyr_LotesImvelPrivado49unid_160,lyr_ImvelPrivado49unid_161,lyr_ImvelPblico112unid_162,],
                                fold: 'close',
                                title: 'Pontos Viciados'});
var group_ProgramaAdoteUmaPraa = new ol.layer.Group({
                                layers: [lyr_ProgramaAdoteUmaPraa292unid27354594m_155,lyr_SemPlacaEgnaldo6unid284826m_156,lyr_SemPlacaDilu17unid903692m_157,lyr_ComPlacaEgnaldo96unid8147117m_158,lyr_ComPlacaDilu172unid17642665m_159,],
                                fold: 'close',
                                title: 'Programa Adote Uma Praça'});
var group_SubregiesContratoESSE = new ol.layer.Group({
                                layers: [lyr_R01S01_131,lyr_R01S02_132,lyr_R01S03_133,lyr_R01S04_134,lyr_R01S05_135,lyr_R01S06_136,lyr_R01S07_137,lyr_R01S08_138,lyr_R02S01_139,lyr_R02S02_140,lyr_R02S03_141,lyr_R02S04_142,lyr_R02S05_143,lyr_R02S06_144,lyr_R02S07_145,lyr_R02S08_146,lyr_R03S01_147,lyr_R03S02_148,lyr_R03S03_149,lyr_R03S04_150,lyr_R03S05_151,lyr_R03S06_152,lyr_R03S07_153,lyr_R03S08_154,],
                                fold: 'close',
                                title: 'Sub-regiões - Contrato ESSE'});
var group_ParquesdeFranca = new ol.layer.Group({
                                layers: [lyr_JardimZoobotnicoDelimitao_118,lyr_JardimZoobotnicoTrajetos_119,lyr_JardimZoobotnicoPontosdeInteresse19unid_120,lyr_ParquedosTrabalhadores_121,lyr_ParquedosTrabalhadores_122,lyr_ComplexoPoliesportivo_123,lyr_ComplexoPoliesportivo_124,lyr_ParqueCaxambu_125,lyr_ParqueCaxambu_126,lyr_ParquedeExposiesFernandoCosta_127,lyr_ParquedeExposiesFernandoCosta_128,lyr_ParqueAmbientalLuprcioTaveira_129,lyr_ParqueAmbientalLuprcioTaveira_130,],
                                fold: 'close',
                                title: 'Parques de Franca'});
var group_HidrografiaFBDS2025 = new ol.layer.Group({
                                layers: [lyr_APP1745unid_113,lyr_RiosDuplos84unid_114,lyr_MassasDgua270unid_115,lyr_RiosSimples1842unid_116,lyr_Nascentes821unid_117,],
                                fold: 'close',
                                title: 'Hidrografia FBDS 2025'});
var group_ZoneamentoAmbientaldaBaciadoRioCanoas = new ol.layer.Group({
                                layers: [lyr_ARORemanescentesFlorestais_97,lyr_AROreadeAmortecimento_98,lyr_AROFaixadeCuestas_99,lyr_AROAPP_100,lyr_ARAIncongrunciasemAPP_101,lyr_ARAETELagoas_102,lyr_ARAAterros_103,lyr_AODreaUrbanaConsolidada_104,lyr_AODBaixaDensidadeNvel3_105,lyr_AODBaixaDensidadeNvel2_106,lyr_AODBaixaDensidadeNvel1_107,lyr_AODAUSFase2_108,lyr_AODAUSFase1_109,lyr_LimitedaBaciadoRioCanoasLeiC4322024_110,lyr_LimitedaBaciadoRioCanoasLeiC1002006_111,lyr_DelimitaodaBaciadoRibeirodaOna_112,],
                                fold: 'close',
                                title: 'Zoneamento Ambiental da Bacia do Rio Canoas'});
var group_reasCompromissadas = new ol.layer.Group({
                                layers: [lyr_AoCivilPblica1unid_83,lyr_AoCivilPblica1unid_84,lyr_CartaAnuncia20unid_85,lyr_CartaAnuncia19unid_86,lyr_PlantioVoluntrio1unid_87,lyr_PlantioVoluntrio1unid_88,lyr_TACMinistrioPblico9unid_89,lyr_TACMinistrioPblico9unid_90,lyr_TCRACETESB28unid_91,lyr_TCRACETESB28unid_92,lyr_TCRAMunicipal13unid_93,lyr_TCRAMunicipal13unid_94,lyr_TRPRLCETESB2unid_95,lyr_TRPRLCETESB2unid_96,],
                                fold: 'close',
                                title: 'Áreas Compromissadas'});
var group_GerenciamentodereasContaminadas = new ol.layer.Group({
                                layers: [lyr_ParqueZumbidosPalmares_74,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_75,lyr_AntigoAterrodasMaritacas_76,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_77,lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_78,lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_79,lyr_AntigoAterrodaFazendaMunicipal_80,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_81,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_82,],
                                fold: 'close',
                                title: 'Gerenciamento de Áreas Contaminadas'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_LoteEMDEF10unid218783m_65,lyr_LoteEMDEF10unid_66,lyr_Lote501unid13733803m_67,lyr_Lote501unid_68,lyr_reaVerde1922unid805661602m_69,lyr_reaPatrimonial31unid14616301m_70,lyr_reaInstitucional226unid132084179m_71,lyr_readeUsoEspecial337unid311074946m_72,lyr_APP164unid230278996m_73,],
                                fold: 'close',
                                title: 'Áreas Públicas'});
var group_FazendaMunicipalPousoAlto = new ol.layer.Group({
                                layers: [lyr_RemanescentedaMatrcula11419_49,lyr_ConjuntoHabitacional_50,lyr_AvdeacessoaoHortoeColgioAgrcola_51,lyr_reaK_52,lyr_reaJ_53,lyr_reaI_54,lyr_reaH_55,lyr_reaG_56,lyr_reaF_57,lyr_reaE_58,lyr_reaD_59,lyr_reaC_60,lyr_reaB_61,lyr_reaA_62,lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_63,lyr_reaaseraverbadaPartedareaG_64,],
                                fold: 'close',
                                title: 'Fazenda Municipal Pouso Alto'});
var group_SecretariadeInfraestrutura = new ol.layer.Group({
                                layers: [lyr_EmprendimentoElias_5,lyr_EmprendimentoElias_6,lyr_EmprendimentoElias_7,lyr_EmpreendimentoEssence_8,lyr_EmpreendimentoEssence_9,lyr_EmpreendimentoResidencialSoCarlosI_10,lyr_EmpreendimentoResidencialSoCarlosI_11,lyr_EmpreendimentoResidencialSoCarlosI_12,lyr_EmpreendimentoMonti_13,lyr_EmpreendimentoMonti_14,lyr_EmpreendimentoMonti_15,lyr_EmpreendimentoResidencialMoradadoBosque_16,lyr_EmpreendimentoResidencialMoradadoBosque_17,lyr_EmpreendimentoResidencialMoradadoBosque_18,lyr_EmpreendimentoVittaAlvorada_19,lyr_EmpreendimentoVittaAlvorada_20,lyr_EmpreendimentoVittaAlvorada_21,lyr_EmpreendimentoResidencialMarthaHelena_22,lyr_EmpreendimentoResidencialMarthaHelena_23,lyr_EmpreendimentoResidencialMarthaHelena_24,lyr_EmpreendimentoResidencialYasminTorres_25,lyr_EmpreendimentoResidencialYasminTorres_26,lyr_EmpreendimentoResidencialYasminTorres_27,lyr_EmpreendimentoVittaSoVicente_28,lyr_EmpreendimentoVittaSoVicente_29,lyr_EmpreendimentoVittaSoVicente_30,lyr_EmpreendimentoPalmeiraReal_31,lyr_EmpreendimentoPalmeiraReal_32,lyr_EmpreendimentoPalmeiraReal_33,lyr_EmpreendimentoVersalhes_34,lyr_EmpreendimentoVersalhes_35,lyr_EmpreendimentoVersalhes_36,lyr_EmpreendimentoSonetto_37,lyr_EmpreendimentoSonetto_38,lyr_EmpreendimentoResidencialSantaIns_39,lyr_EmpreendimentoResidencialSantaIns_40,lyr_EmpreendimentoResidencialSantaIns_41,lyr_EmpreendimentoEdifcioSolNascente_42,lyr_EmpreendimentoEdifcioSolNascente_43,lyr_EmpreendimentoEdifcioSolNascente_44,lyr_EmpreendimentoResidencialQuintadosOitis_45,lyr_EmpreendimentoResidencialQuintadosOitis_46,lyr_EmpreendimentoResidencialQuintadosOitis_47,lyr_NovosEmpreendimentos_48,],
                                fold: 'close',
                                title: 'Secretaria de Infraestrutura'});
var group_RESIDENCIALOLIVITOURB = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'RESIDENCIAL OLIVITO - URB'});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_GoogleSatelliteHybrid_2,],
                                fold: 'close',
                                title: 'Mapas Base'});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(false);lyr_LimiteMunicipaldeFranca_3.setVisible(true);lyr_reaUrbanadeFranca_4.setVisible(true);lyr_EmprendimentoElias_5.setVisible(false);lyr_EmprendimentoElias_6.setVisible(false);lyr_EmprendimentoElias_7.setVisible(false);lyr_EmpreendimentoEssence_8.setVisible(false);lyr_EmpreendimentoEssence_9.setVisible(false);lyr_EmpreendimentoResidencialSoCarlosI_10.setVisible(false);lyr_EmpreendimentoResidencialSoCarlosI_11.setVisible(false);lyr_EmpreendimentoResidencialSoCarlosI_12.setVisible(false);lyr_EmpreendimentoMonti_13.setVisible(false);lyr_EmpreendimentoMonti_14.setVisible(false);lyr_EmpreendimentoMonti_15.setVisible(false);lyr_EmpreendimentoResidencialMoradadoBosque_16.setVisible(false);lyr_EmpreendimentoResidencialMoradadoBosque_17.setVisible(false);lyr_EmpreendimentoResidencialMoradadoBosque_18.setVisible(false);lyr_EmpreendimentoVittaAlvorada_19.setVisible(false);lyr_EmpreendimentoVittaAlvorada_20.setVisible(false);lyr_EmpreendimentoVittaAlvorada_21.setVisible(false);lyr_EmpreendimentoResidencialMarthaHelena_22.setVisible(false);lyr_EmpreendimentoResidencialMarthaHelena_23.setVisible(false);lyr_EmpreendimentoResidencialMarthaHelena_24.setVisible(false);lyr_EmpreendimentoResidencialYasminTorres_25.setVisible(false);lyr_EmpreendimentoResidencialYasminTorres_26.setVisible(false);lyr_EmpreendimentoResidencialYasminTorres_27.setVisible(false);lyr_EmpreendimentoVittaSoVicente_28.setVisible(false);lyr_EmpreendimentoVittaSoVicente_29.setVisible(false);lyr_EmpreendimentoVittaSoVicente_30.setVisible(false);lyr_EmpreendimentoPalmeiraReal_31.setVisible(false);lyr_EmpreendimentoPalmeiraReal_32.setVisible(false);lyr_EmpreendimentoPalmeiraReal_33.setVisible(false);lyr_EmpreendimentoVersalhes_34.setVisible(false);lyr_EmpreendimentoVersalhes_35.setVisible(false);lyr_EmpreendimentoVersalhes_36.setVisible(false);lyr_EmpreendimentoSonetto_37.setVisible(false);lyr_EmpreendimentoSonetto_38.setVisible(false);lyr_EmpreendimentoResidencialSantaIns_39.setVisible(false);lyr_EmpreendimentoResidencialSantaIns_40.setVisible(false);lyr_EmpreendimentoResidencialSantaIns_41.setVisible(false);lyr_EmpreendimentoEdifcioSolNascente_42.setVisible(false);lyr_EmpreendimentoEdifcioSolNascente_43.setVisible(false);lyr_EmpreendimentoEdifcioSolNascente_44.setVisible(false);lyr_EmpreendimentoResidencialQuintadosOitis_45.setVisible(false);lyr_EmpreendimentoResidencialQuintadosOitis_46.setVisible(false);lyr_EmpreendimentoResidencialQuintadosOitis_47.setVisible(false);lyr_NovosEmpreendimentos_48.setVisible(false);lyr_RemanescentedaMatrcula11419_49.setVisible(false);lyr_ConjuntoHabitacional_50.setVisible(false);lyr_AvdeacessoaoHortoeColgioAgrcola_51.setVisible(false);lyr_reaK_52.setVisible(false);lyr_reaJ_53.setVisible(false);lyr_reaI_54.setVisible(false);lyr_reaH_55.setVisible(false);lyr_reaG_56.setVisible(false);lyr_reaF_57.setVisible(false);lyr_reaE_58.setVisible(false);lyr_reaD_59.setVisible(false);lyr_reaC_60.setVisible(false);lyr_reaB_61.setVisible(false);lyr_reaA_62.setVisible(false);lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_63.setVisible(false);lyr_reaaseraverbadaPartedareaG_64.setVisible(false);lyr_LoteEMDEF10unid218783m_65.setVisible(false);lyr_LoteEMDEF10unid_66.setVisible(false);lyr_Lote501unid13733803m_67.setVisible(false);lyr_Lote501unid_68.setVisible(false);lyr_reaVerde1922unid805661602m_69.setVisible(false);lyr_reaPatrimonial31unid14616301m_70.setVisible(false);lyr_reaInstitucional226unid132084179m_71.setVisible(false);lyr_readeUsoEspecial337unid311074946m_72.setVisible(false);lyr_APP164unid230278996m_73.setVisible(false);lyr_ParqueZumbidosPalmares_74.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_75.setVisible(false);lyr_AntigoAterrodasMaritacas_76.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_77.setVisible(false);lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_78.setVisible(false);lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_79.setVisible(false);lyr_AntigoAterrodaFazendaMunicipal_80.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_81.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_82.setVisible(false);lyr_AoCivilPblica1unid_83.setVisible(false);lyr_AoCivilPblica1unid_84.setVisible(false);lyr_CartaAnuncia20unid_85.setVisible(false);lyr_CartaAnuncia19unid_86.setVisible(false);lyr_PlantioVoluntrio1unid_87.setVisible(false);lyr_PlantioVoluntrio1unid_88.setVisible(false);lyr_TACMinistrioPblico9unid_89.setVisible(false);lyr_TACMinistrioPblico9unid_90.setVisible(false);lyr_TCRACETESB28unid_91.setVisible(false);lyr_TCRACETESB28unid_92.setVisible(false);lyr_TCRAMunicipal13unid_93.setVisible(false);lyr_TCRAMunicipal13unid_94.setVisible(false);lyr_TRPRLCETESB2unid_95.setVisible(false);lyr_TRPRLCETESB2unid_96.setVisible(false);lyr_ARORemanescentesFlorestais_97.setVisible(false);lyr_AROreadeAmortecimento_98.setVisible(false);lyr_AROFaixadeCuestas_99.setVisible(false);lyr_AROAPP_100.setVisible(false);lyr_ARAIncongrunciasemAPP_101.setVisible(false);lyr_ARAETELagoas_102.setVisible(false);lyr_ARAAterros_103.setVisible(false);lyr_AODreaUrbanaConsolidada_104.setVisible(false);lyr_AODBaixaDensidadeNvel3_105.setVisible(false);lyr_AODBaixaDensidadeNvel2_106.setVisible(false);lyr_AODBaixaDensidadeNvel1_107.setVisible(false);lyr_AODAUSFase2_108.setVisible(false);lyr_AODAUSFase1_109.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC4322024_110.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC1002006_111.setVisible(false);lyr_DelimitaodaBaciadoRibeirodaOna_112.setVisible(false);lyr_APP1745unid_113.setVisible(false);lyr_RiosDuplos84unid_114.setVisible(false);lyr_MassasDgua270unid_115.setVisible(false);lyr_RiosSimples1842unid_116.setVisible(false);lyr_Nascentes821unid_117.setVisible(false);lyr_JardimZoobotnicoDelimitao_118.setVisible(false);lyr_JardimZoobotnicoTrajetos_119.setVisible(false);lyr_JardimZoobotnicoPontosdeInteresse19unid_120.setVisible(false);lyr_ParquedosTrabalhadores_121.setVisible(false);lyr_ParquedosTrabalhadores_122.setVisible(false);lyr_ComplexoPoliesportivo_123.setVisible(false);lyr_ComplexoPoliesportivo_124.setVisible(false);lyr_ParqueCaxambu_125.setVisible(false);lyr_ParqueCaxambu_126.setVisible(false);lyr_ParquedeExposiesFernandoCosta_127.setVisible(false);lyr_ParquedeExposiesFernandoCosta_128.setVisible(false);lyr_ParqueAmbientalLuprcioTaveira_129.setVisible(false);lyr_ParqueAmbientalLuprcioTaveira_130.setVisible(false);lyr_R01S01_131.setVisible(false);lyr_R01S02_132.setVisible(false);lyr_R01S03_133.setVisible(false);lyr_R01S04_134.setVisible(false);lyr_R01S05_135.setVisible(false);lyr_R01S06_136.setVisible(false);lyr_R01S07_137.setVisible(false);lyr_R01S08_138.setVisible(false);lyr_R02S01_139.setVisible(false);lyr_R02S02_140.setVisible(false);lyr_R02S03_141.setVisible(false);lyr_R02S04_142.setVisible(false);lyr_R02S05_143.setVisible(false);lyr_R02S06_144.setVisible(false);lyr_R02S07_145.setVisible(false);lyr_R02S08_146.setVisible(false);lyr_R03S01_147.setVisible(false);lyr_R03S02_148.setVisible(false);lyr_R03S03_149.setVisible(false);lyr_R03S04_150.setVisible(false);lyr_R03S05_151.setVisible(false);lyr_R03S06_152.setVisible(false);lyr_R03S07_153.setVisible(false);lyr_R03S08_154.setVisible(false);lyr_ProgramaAdoteUmaPraa292unid27354594m_155.setVisible(false);lyr_SemPlacaEgnaldo6unid284826m_156.setVisible(false);lyr_SemPlacaDilu17unid903692m_157.setVisible(false);lyr_ComPlacaEgnaldo96unid8147117m_158.setVisible(false);lyr_ComPlacaDilu172unid17642665m_159.setVisible(false);lyr_LotesImvelPrivado49unid_160.setVisible(false);lyr_ImvelPrivado49unid_161.setVisible(false);lyr_ImvelPblico112unid_162.setVisible(false);lyr_RodoviasEstaduais4unid_163.setVisible(false);lyr_EstradasRuraisMunicipais34unid_164.setVisible(false);lyr_RodoviasMunicipais8unid_165.setVisible(false);lyr_ResduosdeConstruoCivil7unid_166.setVisible(false);lyr_ResduosVerdes1unid_167.setVisible(false);lyr_ChapasdeRaioX1unid_168.setVisible(false);lyr_Embalagensvaziasdeagrotxicos1unid_169.setVisible(false);lyr_leodecozinhausado2unid_170.setVisible(false);lyr_leolubrificanteusado1unid_171.setVisible(false);lyr_Latasdetintametlicasvazias2unid_172.setVisible(false);lyr_ResduosPerigosos1unid_173.setVisible(false);lyr_Madeiras1unid_174.setVisible(false);lyr_ResduosdeServiosdeSade21unid_175.setVisible(false);lyr_PilhaseBaterias16unid_176.setVisible(false);lyr_Pneus1unid_177.setVisible(false);lyr_Lmpadas4unid_178.setVisible(false);lyr_ResduosdeCouro1unid_179.setVisible(false);lyr_ResduosEletrnicos2unid_180.setVisible(false);lyr_ResduosReciclveis15unid_181.setVisible(false);lyr_ResduosInservveis4unid_182.setVisible(false);lyr_Contineres286unid_183.setVisible(false);lyr_rvoreImuneaoCorte8unid_184.setVisible(false);lyr_LocaisdeDifcilAcessoereasRurais20unid_185.setVisible(false);lyr_AcademiasaoArLivre84unid_186.setVisible(false);lyr_Voorocas26unid_187.setVisible(false);
var layersList = [group_MapasBase,lyr_LimiteMunicipaldeFranca_3,lyr_reaUrbanadeFranca_4,group_SecretariadeInfraestrutura,group_FazendaMunicipalPousoAlto,group_reasPblicas,group_GerenciamentodereasContaminadas,group_reasCompromissadas,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_HidrografiaFBDS2025,group_ParquesdeFranca,group_SubregiesContratoESSE,group_ProgramaAdoteUmaPraa,group_PontosViciados,group_RodoviaseEstradas,group_DescarteCorretodeResduos,lyr_Contineres286unid_183,lyr_rvoreImuneaoCorte8unid_184,lyr_LocaisdeDifcilAcessoereasRurais20unid_185,lyr_AcademiasaoArLivre84unid_186,lyr_Voorocas26unid_187];
lyr_LimiteMunicipaldeFranca_3.set('fieldAliases', {'fid': 'fid', 'Código do Município': 'Código do Município', 'Nome do Município': 'Nome do Município', 'UF': 'UF', 'Área (km²)': 'Área (km²)', });
lyr_reaUrbanadeFranca_4.set('fieldAliases', {'fid': 'fid', 'Código do Município': 'Código do Município', 'Nome do Município': 'Nome do Município', 'UF': 'UF', 'Código da UF': 'Código da UF', 'Classe de Uso': 'Classe de Uso', 'Área (ha)': 'Área (ha)', 'Área (km²)': 'Área (km²)', });
lyr_EmprendimentoElias_5.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmprendimentoElias_6.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmprendimentoElias_7.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEssence_8.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEssence_9.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSoCarlosI_10.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSoCarlosI_11.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialSoCarlosI_12.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMonti_13.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMonti_14.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoMonti_15.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMoradadoBosque_16.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMoradadoBosque_17.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialMoradadoBosque_18.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaAlvorada_19.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaAlvorada_20.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoVittaAlvorada_21.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarthaHelena_22.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarthaHelena_23.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialMarthaHelena_24.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialYasminTorres_25.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialYasminTorres_26.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialYasminTorres_27.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaSoVicente_28.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaSoVicente_29.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoVittaSoVicente_30.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoPalmeiraReal_31.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoPalmeiraReal_32.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoPalmeiraReal_33.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVersalhes_34.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVersalhes_35.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoVersalhes_36.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSonetto_37.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSonetto_38.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialSantaIns_39.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaIns_40.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialSantaIns_41.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioSolNascente_42.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioSolNascente_43.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioSolNascente_44.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialQuintadosOitis_45.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialQuintadosOitis_46.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialQuintadosOitis_47.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_NovosEmpreendimentos_48.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', });
lyr_RemanescentedaMatrcula11419_49.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_ConjuntoHabitacional_50.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_AvdeacessoaoHortoeColgioAgrcola_51.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaK_52.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaJ_53.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaI_54.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaH_55.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaG_56.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaF_57.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaE_58.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaD_59.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaC_60.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaB_61.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaA_62.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_63.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaaseraverbadaPartedareaG_64.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_LoteEMDEF10unid218783m_65.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'm2': 'm2', });
lyr_LoteEMDEF10unid_66.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', });
lyr_Lote501unid13733803m_67.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_Lote501unid_68.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_reaVerde1922unid805661602m_69.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_reaPatrimonial31unid14616301m_70.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_reaInstitucional226unid132084179m_71.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_readeUsoEspecial337unid311074946m_72.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_APP164unid230278996m_73.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_ParqueZumbidosPalmares_74.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_75.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacas_76.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_77.set('fieldAliases', {'fid': 'fid', 'Poço': 'Poço', 'Norte (m)': 'Norte (m)', 'Este (m)': 'Este (m)', 'Cota': 'Cota', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_78.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_79.set('fieldAliases', {'fid': 'fid', 'Norte': 'Norte', 'Leste': 'Leste', 'Cota': 'Cota', 'Identifica': 'Identifica', 'Profundida': 'Profundida', 'Identifi_1': 'Poço', 'Profundi_1': 'Profundi_1', 'NA Dinâmi': 'NA Dinâmi', 'NA Estatic': 'NA Estatic', 'NÍVEL DE': 'NÍVEL DE', 'TEMPERATUR': 'TEMPERATUR', 'pH': 'pH', 'CONDUTIVID': 'CONDUTIVID', 'Eh/ORP': 'Eh/ORP', 'OXIGÊNIO': 'OXIGÊNIO', 'TURBIDEZ': 'TURBIDEZ', });
lyr_AntigoAterrodaFazendaMunicipal_80.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_81.set('fieldAliases', {'fid': 'fid', 'Field1': 'Poço', 'Field2': 'Field2', 'Field3': 'Field3', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_82.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Poço', });
lyr_AoCivilPblica1unid_83.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_AoCivilPblica1unid_84.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'area': 'area', 'quant': 'quant', 'proc_municipal': 'proc_municipal', });
lyr_CartaAnuncia20unid_85.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_CartaAnuncia19unid_86.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_PlantioVoluntrio1unid_87.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_PlantioVoluntrio1unid_88.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_TACMinistrioPblico9unid_89.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TACMinistrioPblico9unid_90.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TCRACETESB28unid_91.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESB28unid_92.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRAMunicipal13unid_93.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TCRAMunicipal13unid_94.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TRPRLCETESB2unid_95.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TRPRLCETESB2unid_96.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_ARORemanescentesFlorestais_97.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROreadeAmortecimento_98.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROFaixadeCuestas_99.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROAPP_100.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAIncongrunciasemAPP_101.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAETELagoas_102.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAAterros_103.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODreaUrbanaConsolidada_104.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel3_105.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel2_106.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel1_107.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase2_108.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'SUM_area': 'SUM_area', 'FIRST_AI': 'FIRST_AI', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase1_109.set('fieldAliases', {'fid': 'fid', 'Classe': 'Subclasse', 'SUM_area': 'Área (m²)', 'FIRST_AI': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_110.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'area': 'area', 'Id_2': 'Id_2', 'Área (km²)': 'Área (km²)', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_111.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Área (km²)': 'Área (km²)', });
lyr_DelimitaodaBaciadoRibeirodaOna_112.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area_km2': 'Área (km²)', });
lyr_APP1745unid_113.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosDuplos84unid_114.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_MassasDgua270unid_115.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosSimples1842unid_116.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_Nascentes821unid_117.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_JardimZoobotnicoDelimitao_118.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_JardimZoobotnicoTrajetos_119.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', });
lyr_JardimZoobotnicoPontosdeInteresse19unid_120.set('fieldAliases', {'fid': 'fid', 'Legenda': 'Legenda', });
lyr_ParquedosTrabalhadores_121.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedosTrabalhadores_122.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ComplexoPoliesportivo_123.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Descrição', });
lyr_ComplexoPoliesportivo_124.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Descrição', });
lyr_ParqueCaxambu_125.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueCaxambu_126.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedeExposiesFernandoCosta_127.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedeExposiesFernandoCosta_128.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueAmbientalLuprcioTaveira_129.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueAmbientalLuprcioTaveira_130.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_R01S01_131.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'cod_regiao', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S02_132.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'cod_regiao', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S03_133.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S04_134.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S05_135.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S06_136.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S07_137.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S08_138.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S01_139.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S02_140.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S03_141.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S04_142.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S05_143.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S06_144.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S07_145.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S08_146.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S01_147.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S02_148.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S03_149.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S04_150.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S05_151.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S06_152.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S07_153.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S08_154.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_ProgramaAdoteUmaPraa292unid27354594m_155.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'responsavel': 'Responsável', 'm2': 'Área (m²)', });
lyr_SemPlacaEgnaldo6unid284826m_156.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', });
lyr_SemPlacaDilu17unid903692m_157.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', });
lyr_ComPlacaEgnaldo96unid8147117m_158.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', });
lyr_ComPlacaDilu172unid17642665m_159.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', });
lyr_LotesImvelPrivado49unid_160.set('fieldAliases', {'fid': 'fid', 'quadra': 'QUADRA', 'lote': 'LOTE', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', });
lyr_ImvelPrivado49unid_161.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'processo_seinfra': 'Processo SEINFRA', 'processo_sms': 'Processo SMS', });
lyr_ImvelPblico112unid_162.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'processo_seinfra': 'Processo SEINFRA', 'processo_mp': 'Pocesso MP', 'processo_smseg': 'Processo SMSEG', 'coordenada_x': 'Coordenada Leste (x)', 'coordenada_y': 'Coordenada Norte (y)', });
lyr_RodoviasEstaduais4unid_163.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'Codigo_Rod': 'Codigo_Rod', 'Tipo_Trech': 'Tipo_Trech', 'Unidade_Fe': 'Unidade_Fe', 'Codigo_SNV': 'Codigo_SNV', 'Codigo_SRE': 'Codigo_SRE', 'Extensao': 'Extensao (km)', 'Superficie': 'Superficie', 'Jurisdicao': 'Jurisdição', });
lyr_EstradasRuraisMunicipais34unid_164.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'description', 'Extensao_km': 'Extensao (km)', });
lyr_RodoviasMunicipais8unid_165.set('fieldAliases', {'fid': 'fid', 'geometriaaproximada': 'geometriaaproximada', 'tipovia': 'tipovia', 'jurisdicao': 'Jurisdição', 'administracao': 'administracao', 'revestimento': 'revestimento', 'operacional': 'operacional', 'situacaofisica': 'situacaofisica', 'canteirodivisorio': 'canteirodivisorio', 'nrpistas': 'nrpistas', 'nrfaixas': 'nrfaixas', 'trafego': 'trafego', 'tipopavimentacao': 'tipopavimentacao', 'sigla': 'sigla', 'Extensao': 'Extensao (km)', });
lyr_ResduosdeConstruoCivil7unid_166.set('fieldAliases', {'fid': 'fid', 'categoria': 'categoria', 'local': 'local', 'descricao': 'Descrição', 'endereco': 'Endereço', 'contato': 'contato', });
lyr_ResduosVerdes1unid_167.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ChapasdeRaioX1unid_168.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Embalagensvaziasdeagrotxicos1unid_169.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leodecozinhausado2unid_170.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leolubrificanteusado1unid_171.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Latasdetintametlicasvazias2unid_172.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosPerigosos1unid_173.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Madeiras1unid_174.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeServiosdeSade21unid_175.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_PilhaseBaterias16unid_176.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Pneus1unid_177.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Lmpadas4unid_178.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeCouro1unid_179.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosEletrnicos2unid_180.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosReciclveis15unid_181.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosInservveis4unid_182.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Contineres286unid_183.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Nome', });
lyr_rvoreImuneaoCorte8unid_184.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_LocaisdeDifcilAcessoereasRurais20unid_185.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'PER__ODO_TURNO_': 'Período', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'Horário', 'FREQU__NCIA': 'Frequência', 'PROGRAMA____O_SEMANAL': 'Programação Semanal', 'EQUIPAMENTOS': 'Equipamentos', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', });
lyr_AcademiasaoArLivre84unid_186.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Local', });
lyr_Voorocas26unid_187.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'ID_PONTO_I': 'ID_PONTO_I', 'IBGE': 'IBGE', 'MUNIC__PIO': 'MUNIC__PIO', 'BACIA': 'BACIA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'SITUA____O': 'Situação', 'REFER__NCI': 'Referência', 'PRIORIDADE': 'Prioridade', 'OBSERVA_____': 'Observação', });
lyr_LimiteMunicipaldeFranca_3.set('fieldImages', {'fid': '', 'Código do Município': '', 'Nome do Município': '', 'UF': '', 'Área (km²)': '', });
lyr_reaUrbanadeFranca_4.set('fieldImages', {'fid': '', 'Código do Município': '', 'Nome do Município': '', 'UF': '', 'Código da UF': '', 'Classe de Uso': '', 'Área (ha)': '', 'Área (km²)': '', });
lyr_EmprendimentoElias_5.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_EmprendimentoElias_6.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_EmprendimentoElias_7.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_EmpreendimentoEssence_8.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEssence_9.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_EmpreendimentoResidencialSoCarlosI_10.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSoCarlosI_11.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialSoCarlosI_12.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMonti_13.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMonti_14.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoMonti_15.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMoradadoBosque_16.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMoradadoBosque_17.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialMoradadoBosque_18.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaAlvorada_19.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaAlvorada_20.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoVittaAlvorada_21.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarthaHelena_22.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarthaHelena_23.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialMarthaHelena_24.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialYasminTorres_25.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialYasminTorres_26.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialYasminTorres_27.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaSoVicente_28.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaSoVicente_29.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoVittaSoVicente_30.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoPalmeiraReal_31.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoPalmeiraReal_32.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoPalmeiraReal_33.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVersalhes_34.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVersalhes_35.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoVersalhes_36.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSonetto_37.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSonetto_38.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialSantaIns_39.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaIns_40.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialSantaIns_41.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioSolNascente_42.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioSolNascente_43.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioSolNascente_44.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialQuintadosOitis_45.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialQuintadosOitis_46.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialQuintadosOitis_47.set('fieldImages', {'fid': '', 'layer': '', });
lyr_NovosEmpreendimentos_48.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', });
lyr_RemanescentedaMatrcula11419_49.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_ConjuntoHabitacional_50.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_AvdeacessoaoHortoeColgioAgrcola_51.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaK_52.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaJ_53.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaI_54.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaH_55.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaG_56.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaF_57.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaE_58.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaD_59.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaC_60.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaB_61.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaA_62.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_63.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaaseraverbadaPartedareaG_64.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_LoteEMDEF10unid218783m_65.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'm2': 'TextEdit', });
lyr_LoteEMDEF10unid_66.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', });
lyr_Lote501unid13733803m_67.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_Lote501unid_68.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', });
lyr_reaVerde1922unid805661602m_69.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_reaPatrimonial31unid14616301m_70.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_reaInstitucional226unid132084179m_71.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_readeUsoEspecial337unid311074946m_72.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_APP164unid230278996m_73.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_ParqueZumbidosPalmares_74.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_75.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacas_76.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_77.set('fieldImages', {'fid': 'TextEdit', 'Poço': 'TextEdit', 'Norte (m)': 'TextEdit', 'Este (m)': 'TextEdit', 'Cota': 'TextEdit', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_78.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_79.set('fieldImages', {'fid': 'TextEdit', 'Norte': 'TextEdit', 'Leste': 'TextEdit', 'Cota': 'TextEdit', 'Identifica': 'TextEdit', 'Profundida': 'TextEdit', 'Identifi_1': 'TextEdit', 'Profundi_1': 'TextEdit', 'NA Dinâmi': 'TextEdit', 'NA Estatic': 'TextEdit', 'NÍVEL DE': 'TextEdit', 'TEMPERATUR': 'TextEdit', 'pH': 'TextEdit', 'CONDUTIVID': 'TextEdit', 'Eh/ORP': 'TextEdit', 'OXIGÊNIO': 'TextEdit', 'TURBIDEZ': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipal_80.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_81.set('fieldImages', {'fid': 'TextEdit', 'Field1': 'TextEdit', 'Field2': 'TextEdit', 'Field3': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_82.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_AoCivilPblica1unid_83.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_AoCivilPblica1unid_84.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_CartaAnuncia20unid_85.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': '', });
lyr_CartaAnuncia19unid_86.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': 'TextEdit', });
lyr_PlantioVoluntrio1unid_87.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_PlantioVoluntrio1unid_88.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_TACMinistrioPblico9unid_89.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TACMinistrioPblico9unid_90.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TCRACETESB28unid_91.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRACETESB28unid_92.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'proc_cetesb': 'TextEdit', });
lyr_TCRAMunicipal13unid_93.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'autorizacao': '', });
lyr_TCRAMunicipal13unid_94.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'autorizacao': 'TextEdit', });
lyr_TRPRLCETESB2unid_95.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_TRPRLCETESB2unid_96.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'matricula': 'TextEdit', 'proc_cetesb': 'TextEdit', });
lyr_ARORemanescentesFlorestais_97.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROreadeAmortecimento_98.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROFaixadeCuestas_99.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROAPP_100.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAIncongrunciasemAPP_101.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAETELagoas_102.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAAterros_103.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODreaUrbanaConsolidada_104.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel3_105.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel2_106.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel1_107.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase2_108.set('fieldImages', {'fid': '', 'Classe': '', 'SUM_area': '', 'FIRST_AI': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase1_109.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'SUM_area': 'TextEdit', 'FIRST_AI': 'TextEdit', 'desc_subclasse': '', 'desc_classe': '', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_110.set('fieldImages', {'fid': '', 'Id': '', 'area': '', 'Id_2': '', 'Área (km²)': '', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_111.set('fieldImages', {'fid': '', 'Id': '', 'Área (km²)': '', });
lyr_DelimitaodaBaciadoRibeirodaOna_112.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_APP1745unid_113.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosDuplos84unid_114.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MassasDgua270unid_115.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosSimples1842unid_116.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_Nascentes821unid_117.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_JardimZoobotnicoDelimitao_118.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_JardimZoobotnicoTrajetos_119.set('fieldImages', {'fid': '', 'NOME': '', });
lyr_JardimZoobotnicoPontosdeInteresse19unid_120.set('fieldImages', {'fid': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_ParquedosTrabalhadores_121.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedosTrabalhadores_122.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ComplexoPoliesportivo_123.set('fieldImages', {'fid': '', 'Name': '', 'description': '', });
lyr_ComplexoPoliesportivo_124.set('fieldImages', {'fid': '', 'Name': '', 'description': '', });
lyr_ParqueCaxambu_125.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueCaxambu_126.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedeExposiesFernandoCosta_127.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedeExposiesFernandoCosta_128.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueAmbientalLuprcioTaveira_129.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueAmbientalLuprcioTaveira_130.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Descrição': 'TextEdit', });
lyr_R01S01_131.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S02_132.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S03_133.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S04_134.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S05_135.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S06_136.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S07_137.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S08_138.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S01_139.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S02_140.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S03_141.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S04_142.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S05_143.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S06_144.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S07_145.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S08_146.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S01_147.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S02_148.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S03_149.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S04_150.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S05_151.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S06_152.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S07_153.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S08_154.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial': '', 'total_geral': '', });
lyr_ProgramaAdoteUmaPraa292unid27354594m_155.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'responsavel': 'TextEdit', 'm2': 'TextEdit', });
lyr_SemPlacaEgnaldo6unid284826m_156.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', });
lyr_SemPlacaDilu17unid903692m_157.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': '', });
lyr_ComPlacaEgnaldo96unid8147117m_158.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', });
lyr_ComPlacaDilu172unid17642665m_159.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', });
lyr_LotesImvelPrivado49unid_160.set('fieldImages', {'fid': 'TextEdit', 'quadra': 'TextEdit', 'lote': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', });
lyr_ImvelPrivado49unid_161.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'CADASTRO IMOBILIÁRIO': 'TextEdit', 'CLASSIFICAÇÃO DO IMÓVEL': 'TextEdit', 'FREQUÊNCIA DE LIMPEZA': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'processo_seinfra': '', 'processo_sms': '', });
lyr_ImvelPblico112unid_162.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'CADASTRO IMOBILIÁRIO': 'TextEdit', 'CLASSIFICAÇÃO DO IMÓVEL': 'TextEdit', 'FREQUÊNCIA DE LIMPEZA': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'processo_seinfra': '', 'processo_mp': '', 'processo_smseg': '', 'coordenada_x': '', 'coordenada_y': '', });
lyr_RodoviasEstaduais4unid_163.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'TextEdit', 'Codigo_Rod': 'TextEdit', 'Tipo_Trech': 'TextEdit', 'Unidade_Fe': 'TextEdit', 'Codigo_SNV': 'TextEdit', 'Codigo_SRE': 'TextEdit', 'Extensao': 'TextEdit', 'Superficie': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_EstradasRuraisMunicipais34unid_164.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'Extensao_km': 'TextEdit', });
lyr_RodoviasMunicipais8unid_165.set('fieldImages', {'fid': 'TextEdit', 'geometriaaproximada': 'TextEdit', 'tipovia': 'TextEdit', 'jurisdicao': 'TextEdit', 'administracao': 'TextEdit', 'revestimento': 'TextEdit', 'operacional': 'TextEdit', 'situacaofisica': 'TextEdit', 'canteirodivisorio': 'TextEdit', 'nrpistas': 'TextEdit', 'nrfaixas': 'TextEdit', 'trafego': 'TextEdit', 'tipopavimentacao': 'TextEdit', 'sigla': 'TextEdit', 'Extensao': 'TextEdit', });
lyr_ResduosdeConstruoCivil7unid_166.set('fieldImages', {'fid': '', 'categoria': '', 'local': '', 'descricao': '', 'endereco': '', 'contato': '', });
lyr_ResduosVerdes1unid_167.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ChapasdeRaioX1unid_168.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Embalagensvaziasdeagrotxicos1unid_169.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_leodecozinhausado2unid_170.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_leolubrificanteusado1unid_171.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Latasdetintametlicasvazias2unid_172.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosPerigosos1unid_173.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Madeiras1unid_174.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosdeServiosdeSade21unid_175.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_PilhaseBaterias16unid_176.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Pneus1unid_177.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Lmpadas4unid_178.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosdeCouro1unid_179.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosEletrnicos2unid_180.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosReciclveis15unid_181.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosInservveis4unid_182.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Contineres286unid_183.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_rvoreImuneaoCorte8unid_184.set('fieldImages', {'fid': 'TextEdit', 'nome_popular': 'TextEdit', 'nome_cientifico': 'TextEdit', 'legislacao': 'TextEdit', });
lyr_LocaisdeDifcilAcessoereasRurais20unid_185.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'PER__ODO_TURNO_': 'TextEdit', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'TextEdit', 'FREQU__NCIA': 'TextEdit', 'PROGRAMA____O_SEMANAL': 'TextEdit', 'EQUIPAMENTOS': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', });
lyr_AcademiasaoArLivre84unid_186.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_Voorocas26unid_187.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'ID_PONTO_I': 'TextEdit', 'IBGE': 'TextEdit', 'MUNIC__PIO': 'TextEdit', 'BACIA': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'SITUA____O': 'TextEdit', 'REFER__NCI': 'TextEdit', 'PRIORIDADE': 'TextEdit', 'OBSERVA_____': 'TextEdit', });
lyr_LimiteMunicipaldeFranca_3.set('fieldLabels', {'fid': 'hidden field', 'Código do Município': 'inline label - visible with data', 'Nome do Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Área (km²)': 'inline label - visible with data', });
lyr_reaUrbanadeFranca_4.set('fieldLabels', {'fid': 'hidden field', 'Código do Município': 'inline label - visible with data', 'Nome do Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Código da UF': 'hidden field', 'Classe de Uso': 'hidden field', 'Área (ha)': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_EmprendimentoElias_5.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmprendimentoElias_6.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmprendimentoElias_7.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEssence_8.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEssence_9.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSoCarlosI_10.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSoCarlosI_11.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialSoCarlosI_12.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMonti_13.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMonti_14.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoMonti_15.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMoradadoBosque_16.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMoradadoBosque_17.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialMoradadoBosque_18.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaAlvorada_19.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaAlvorada_20.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoVittaAlvorada_21.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarthaHelena_22.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarthaHelena_23.set('fieldLabels', {'fid': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarthaHelena_24.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialYasminTorres_25.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialYasminTorres_26.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialYasminTorres_27.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaSoVicente_28.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaSoVicente_29.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoVittaSoVicente_30.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoPalmeiraReal_31.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoPalmeiraReal_32.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoPalmeiraReal_33.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVersalhes_34.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVersalhes_35.set('fieldLabels', {'fid': 'inline label - visible with data', });
lyr_EmpreendimentoVersalhes_36.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSonetto_37.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSonetto_38.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialSantaIns_39.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaIns_40.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialSantaIns_41.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioSolNascente_42.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioSolNascente_43.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioSolNascente_44.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialQuintadosOitis_45.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialQuintadosOitis_46.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialQuintadosOitis_47.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_NovosEmpreendimentos_48.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'hidden field', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', });
lyr_RemanescentedaMatrcula11419_49.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_ConjuntoHabitacional_50.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_AvdeacessoaoHortoeColgioAgrcola_51.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaK_52.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaJ_53.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaI_54.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaH_55.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaG_56.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaF_57.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaE_58.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaD_59.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaC_60.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaB_61.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaA_62.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_63.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaaseraverbadaPartedareaG_64.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_LoteEMDEF10unid218783m_65.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'm2': 'inline label - visible with data', });
lyr_LoteEMDEF10unid_66.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', });
lyr_Lote501unid13733803m_67.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_Lote501unid_68.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_reaVerde1922unid805661602m_69.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_reaPatrimonial31unid14616301m_70.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_reaInstitucional226unid132084179m_71.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_readeUsoEspecial337unid311074946m_72.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_APP164unid230278996m_73.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_ParqueZumbidosPalmares_74.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_75.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacas_76.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_77.set('fieldLabels', {'fid': 'hidden field', 'Poço': 'inline label - visible with data', 'Norte (m)': 'hidden field', 'Este (m)': 'hidden field', 'Cota': 'hidden field', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_78.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_79.set('fieldLabels', {'fid': 'hidden field', 'Norte': 'hidden field', 'Leste': 'hidden field', 'Cota': 'hidden field', 'Identifica': 'hidden field', 'Profundida': 'hidden field', 'Identifi_1': 'inline label - visible with data', 'Profundi_1': 'hidden field', 'NA Dinâmi': 'hidden field', 'NA Estatic': 'hidden field', 'NÍVEL DE': 'hidden field', 'TEMPERATUR': 'hidden field', 'pH': 'hidden field', 'CONDUTIVID': 'hidden field', 'Eh/ORP': 'hidden field', 'OXIGÊNIO': 'hidden field', 'TURBIDEZ': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipal_80.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_81.set('fieldLabels', {'fid': 'hidden field', 'Field1': 'inline label - visible with data', 'Field2': 'hidden field', 'Field3': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_82.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_83.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_84.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_CartaAnuncia20unid_85.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_CartaAnuncia19unid_86.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_87.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_88.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_89.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_90.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TCRACETESB28unid_91.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESB28unid_92.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRAMunicipal13unid_93.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TCRAMunicipal13unid_94.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_95.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_96.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_ARORemanescentesFlorestais_97.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROreadeAmortecimento_98.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROFaixadeCuestas_99.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROAPP_100.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAIncongrunciasemAPP_101.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAETELagoas_102.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAAterros_103.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODreaUrbanaConsolidada_104.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel3_105.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel2_106.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel1_107.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase2_108.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase1_109.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_110.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'area': 'hidden field', 'Id_2': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_111.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_DelimitaodaBaciadoRibeirodaOna_112.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area_km2': 'inline label - visible with data', });
lyr_APP1745unid_113.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosDuplos84unid_114.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_MassasDgua270unid_115.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosSimples1842unid_116.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_Nascentes821unid_117.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_JardimZoobotnicoDelimitao_118.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_JardimZoobotnicoTrajetos_119.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', });
lyr_JardimZoobotnicoPontosdeInteresse19unid_120.set('fieldLabels', {'fid': 'hidden field', 'Legenda': 'inline label - visible with data', });
lyr_ParquedosTrabalhadores_121.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedosTrabalhadores_122.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ComplexoPoliesportivo_123.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', });
lyr_ComplexoPoliesportivo_124.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', });
lyr_ParqueCaxambu_125.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueCaxambu_126.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedeExposiesFernandoCosta_127.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedeExposiesFernandoCosta_128.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueAmbientalLuprcioTaveira_129.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueAmbientalLuprcioTaveira_130.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_R01S01_131.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S02_132.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S03_133.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S04_134.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S05_135.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S06_136.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S07_137.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S08_138.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S01_139.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S02_140.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S03_141.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S04_142.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S05_143.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S06_144.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S07_145.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S08_146.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S01_147.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S02_148.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S03_149.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S04_150.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S05_151.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S06_152.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S07_153.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S08_154.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_ProgramaAdoteUmaPraa292unid27354594m_155.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'responsavel': 'inline label - visible with data', 'm2': 'inline label - visible with data', });
lyr_SemPlacaEgnaldo6unid284826m_156.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', });
lyr_SemPlacaDilu17unid903692m_157.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', });
lyr_ComPlacaEgnaldo96unid8147117m_158.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', });
lyr_ComPlacaDilu172unid17642665m_159.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', });
lyr_LotesImvelPrivado49unid_160.set('fieldLabels', {'fid': 'hidden field', 'quadra': 'inline label - visible with data', 'lote': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', });
lyr_ImvelPrivado49unid_161.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'processo_seinfra': 'inline label - visible with data', 'processo_sms': 'inline label - visible with data', });
lyr_ImvelPblico112unid_162.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'processo_seinfra': 'inline label - visible with data', 'processo_mp': 'inline label - visible with data', 'processo_smseg': 'inline label - visible with data', 'coordenada_x': 'hidden field', 'coordenada_y': 'hidden field', });
lyr_RodoviasEstaduais4unid_163.set('fieldLabels', {'fid': 'hidden field', 'ogc_fid': 'hidden field', 'Codigo_Rod': 'hidden field', 'Tipo_Trech': 'hidden field', 'Unidade_Fe': 'hidden field', 'Codigo_SNV': 'hidden field', 'Codigo_SRE': 'hidden field', 'Extensao': 'inline label - visible with data', 'Superficie': 'hidden field', 'Jurisdicao': 'inline label - visible with data', });
lyr_EstradasRuraisMunicipais34unid_164.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'hidden field', 'Extensao_km': 'inline label - visible with data', });
lyr_RodoviasMunicipais8unid_165.set('fieldLabels', {'fid': 'hidden field', 'geometriaaproximada': 'hidden field', 'tipovia': 'hidden field', 'jurisdicao': 'inline label - visible with data', 'administracao': 'hidden field', 'revestimento': 'hidden field', 'operacional': 'hidden field', 'situacaofisica': 'hidden field', 'canteirodivisorio': 'hidden field', 'nrpistas': 'hidden field', 'nrfaixas': 'hidden field', 'trafego': 'hidden field', 'tipopavimentacao': 'hidden field', 'sigla': 'hidden field', 'Extensao': 'inline label - visible with data', });
lyr_ResduosdeConstruoCivil7unid_166.set('fieldLabels', {'fid': 'hidden field', 'categoria': 'inline label - visible with data', 'local': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'contato': 'inline label - visible with data', });
lyr_ResduosVerdes1unid_167.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ChapasdeRaioX1unid_168.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Embalagensvaziasdeagrotxicos1unid_169.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leodecozinhausado2unid_170.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leolubrificanteusado1unid_171.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Latasdetintametlicasvazias2unid_172.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosPerigosos1unid_173.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Madeiras1unid_174.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeServiosdeSade21unid_175.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_PilhaseBaterias16unid_176.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Pneus1unid_177.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Lmpadas4unid_178.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeCouro1unid_179.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosEletrnicos2unid_180.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosReciclveis15unid_181.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosInservveis4unid_182.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Contineres286unid_183.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_rvoreImuneaoCorte8unid_184.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_LocaisdeDifcilAcessoereasRurais20unid_185.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'PER__ODO_TURNO_': 'inline label - visible with data', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'inline label - visible with data', 'FREQU__NCIA': 'inline label - visible with data', 'PROGRAMA____O_SEMANAL': 'inline label - visible with data', 'EQUIPAMENTOS': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', });
lyr_AcademiasaoArLivre84unid_186.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', });
lyr_Voorocas26unid_187.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'ID_PONTO_I': 'hidden field', 'IBGE': 'hidden field', 'MUNIC__PIO': 'hidden field', 'BACIA': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'SITUA____O': 'hidden field', 'REFER__NCI': 'inline label - visible with data', 'PRIORIDADE': 'hidden field', 'OBSERVA_____': 'inline label - visible with data', });
lyr_Voorocas26unid_187.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});