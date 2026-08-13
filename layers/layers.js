ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31983").setExtent([228566.637530, 7689454.761062, 276615.686900, 7740908.029506]);
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

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LimiteMunicipaldeFranca_3 = new ol.format.GeoJSON();
var features_LimiteMunicipaldeFranca_3 = format_LimiteMunicipaldeFranca_3.readFeatures(json_LimiteMunicipaldeFranca_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
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
var format_BACIA_RIO_CANOAS_LC_4322024_5 = new ol.format.GeoJSON();
var features_BACIA_RIO_CANOAS_LC_4322024_5 = format_BACIA_RIO_CANOAS_LC_4322024_5.readFeatures(json_BACIA_RIO_CANOAS_LC_4322024_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BACIA_RIO_CANOAS_LC_4322024_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BACIA_RIO_CANOAS_LC_4322024_5.addFeatures(features_BACIA_RIO_CANOAS_LC_4322024_5);
var lyr_BACIA_RIO_CANOAS_LC_4322024_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BACIA_RIO_CANOAS_LC_4322024_5, 
                style: style_BACIA_RIO_CANOAS_LC_4322024_5,
                popuplayertitle: 'BACIA_RIO_CANOAS_LC_432/2024',
                interactive: true,
                title: '<img src="styles/legend/BACIA_RIO_CANOAS_LC_4322024_5.png" /> BACIA_RIO_CANOAS_LC_432/2024'
            });
var format_BACIA_RIO_CANOAS_LC_1002006_6 = new ol.format.GeoJSON();
var features_BACIA_RIO_CANOAS_LC_1002006_6 = format_BACIA_RIO_CANOAS_LC_1002006_6.readFeatures(json_BACIA_RIO_CANOAS_LC_1002006_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BACIA_RIO_CANOAS_LC_1002006_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BACIA_RIO_CANOAS_LC_1002006_6.addFeatures(features_BACIA_RIO_CANOAS_LC_1002006_6);
var lyr_BACIA_RIO_CANOAS_LC_1002006_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BACIA_RIO_CANOAS_LC_1002006_6, 
                style: style_BACIA_RIO_CANOAS_LC_1002006_6,
                popuplayertitle: 'BACIA_RIO_CANOAS_LC_100/2006',
                interactive: true,
                title: '<img src="styles/legend/BACIA_RIO_CANOAS_LC_1002006_6.png" /> BACIA_RIO_CANOAS_LC_100/2006'
            });
var format_BACIA_RIBEIRAO_DA_ONCA_7 = new ol.format.GeoJSON();
var features_BACIA_RIBEIRAO_DA_ONCA_7 = format_BACIA_RIBEIRAO_DA_ONCA_7.readFeatures(json_BACIA_RIBEIRAO_DA_ONCA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BACIA_RIBEIRAO_DA_ONCA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BACIA_RIBEIRAO_DA_ONCA_7.addFeatures(features_BACIA_RIBEIRAO_DA_ONCA_7);
var lyr_BACIA_RIBEIRAO_DA_ONCA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BACIA_RIBEIRAO_DA_ONCA_7, 
                style: style_BACIA_RIBEIRAO_DA_ONCA_7,
                popuplayertitle: 'BACIA_RIBEIRAO_DA_ONCA',
                interactive: true,
                title: '<img src="styles/legend/BACIA_RIBEIRAO_DA_ONCA_7.png" /> BACIA_RIBEIRAO_DA_ONCA'
            });
var format_ARO_REMANESCENTES_FLORESTAIS_8 = new ol.format.GeoJSON();
var features_ARO_REMANESCENTES_FLORESTAIS_8 = format_ARO_REMANESCENTES_FLORESTAIS_8.readFeatures(json_ARO_REMANESCENTES_FLORESTAIS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARO_REMANESCENTES_FLORESTAIS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARO_REMANESCENTES_FLORESTAIS_8.addFeatures(features_ARO_REMANESCENTES_FLORESTAIS_8);
var lyr_ARO_REMANESCENTES_FLORESTAIS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARO_REMANESCENTES_FLORESTAIS_8, 
                style: style_ARO_REMANESCENTES_FLORESTAIS_8,
                popuplayertitle: 'ARO_REMANESCENTES_FLORESTAIS',
                interactive: true,
                title: '<img src="styles/legend/ARO_REMANESCENTES_FLORESTAIS_8.png" /> ARO_REMANESCENTES_FLORESTAIS'
            });
var format_ARO_FAIXA_DE_CUESTAS_9 = new ol.format.GeoJSON();
var features_ARO_FAIXA_DE_CUESTAS_9 = format_ARO_FAIXA_DE_CUESTAS_9.readFeatures(json_ARO_FAIXA_DE_CUESTAS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARO_FAIXA_DE_CUESTAS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARO_FAIXA_DE_CUESTAS_9.addFeatures(features_ARO_FAIXA_DE_CUESTAS_9);
var lyr_ARO_FAIXA_DE_CUESTAS_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARO_FAIXA_DE_CUESTAS_9, 
                style: style_ARO_FAIXA_DE_CUESTAS_9,
                popuplayertitle: 'ARO_FAIXA_DE_CUESTAS',
                interactive: true,
                title: '<img src="styles/legend/ARO_FAIXA_DE_CUESTAS_9.png" /> ARO_FAIXA_DE_CUESTAS'
            });
var format_ARO_AREA_DE_AMORTECIMENTO_10 = new ol.format.GeoJSON();
var features_ARO_AREA_DE_AMORTECIMENTO_10 = format_ARO_AREA_DE_AMORTECIMENTO_10.readFeatures(json_ARO_AREA_DE_AMORTECIMENTO_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARO_AREA_DE_AMORTECIMENTO_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARO_AREA_DE_AMORTECIMENTO_10.addFeatures(features_ARO_AREA_DE_AMORTECIMENTO_10);
var lyr_ARO_AREA_DE_AMORTECIMENTO_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARO_AREA_DE_AMORTECIMENTO_10, 
                style: style_ARO_AREA_DE_AMORTECIMENTO_10,
                popuplayertitle: 'ARO_AREA_DE_AMORTECIMENTO',
                interactive: true,
                title: '<img src="styles/legend/ARO_AREA_DE_AMORTECIMENTO_10.png" /> ARO_AREA_DE_AMORTECIMENTO'
            });
var format_ARO_APP_11 = new ol.format.GeoJSON();
var features_ARO_APP_11 = format_ARO_APP_11.readFeatures(json_ARO_APP_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARO_APP_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARO_APP_11.addFeatures(features_ARO_APP_11);
var lyr_ARO_APP_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARO_APP_11, 
                style: style_ARO_APP_11,
                popuplayertitle: 'ARO_APP',
                interactive: true,
                title: '<img src="styles/legend/ARO_APP_11.png" /> ARO_APP'
            });
var format_ARA_INCONGRUENCIAS_EM_APP_12 = new ol.format.GeoJSON();
var features_ARA_INCONGRUENCIAS_EM_APP_12 = format_ARA_INCONGRUENCIAS_EM_APP_12.readFeatures(json_ARA_INCONGRUENCIAS_EM_APP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARA_INCONGRUENCIAS_EM_APP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARA_INCONGRUENCIAS_EM_APP_12.addFeatures(features_ARA_INCONGRUENCIAS_EM_APP_12);
var lyr_ARA_INCONGRUENCIAS_EM_APP_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARA_INCONGRUENCIAS_EM_APP_12, 
                style: style_ARA_INCONGRUENCIAS_EM_APP_12,
                popuplayertitle: 'ARA_INCONGRUENCIAS_EM_APP',
                interactive: true,
                title: '<img src="styles/legend/ARA_INCONGRUENCIAS_EM_APP_12.png" /> ARA_INCONGRUENCIAS_EM_APP'
            });
var format_ARA_ETE_LAGOAS_13 = new ol.format.GeoJSON();
var features_ARA_ETE_LAGOAS_13 = format_ARA_ETE_LAGOAS_13.readFeatures(json_ARA_ETE_LAGOAS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARA_ETE_LAGOAS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARA_ETE_LAGOAS_13.addFeatures(features_ARA_ETE_LAGOAS_13);
var lyr_ARA_ETE_LAGOAS_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARA_ETE_LAGOAS_13, 
                style: style_ARA_ETE_LAGOAS_13,
                popuplayertitle: 'ARA_ETE_LAGOAS',
                interactive: true,
                title: '<img src="styles/legend/ARA_ETE_LAGOAS_13.png" /> ARA_ETE_LAGOAS'
            });
var format_ARA_ATERROS_14 = new ol.format.GeoJSON();
var features_ARA_ATERROS_14 = format_ARA_ATERROS_14.readFeatures(json_ARA_ATERROS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARA_ATERROS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARA_ATERROS_14.addFeatures(features_ARA_ATERROS_14);
var lyr_ARA_ATERROS_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARA_ATERROS_14, 
                style: style_ARA_ATERROS_14,
                popuplayertitle: 'ARA_ATERROS',
                interactive: true,
                title: '<img src="styles/legend/ARA_ATERROS_14.png" /> ARA_ATERROS'
            });
var format_AOD_BAIXA_DENSIDADE_NIVEL_3_15 = new ol.format.GeoJSON();
var features_AOD_BAIXA_DENSIDADE_NIVEL_3_15 = format_AOD_BAIXA_DENSIDADE_NIVEL_3_15.readFeatures(json_AOD_BAIXA_DENSIDADE_NIVEL_3_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AOD_BAIXA_DENSIDADE_NIVEL_3_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOD_BAIXA_DENSIDADE_NIVEL_3_15.addFeatures(features_AOD_BAIXA_DENSIDADE_NIVEL_3_15);
var lyr_AOD_BAIXA_DENSIDADE_NIVEL_3_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOD_BAIXA_DENSIDADE_NIVEL_3_15, 
                style: style_AOD_BAIXA_DENSIDADE_NIVEL_3_15,
                popuplayertitle: 'AOD_BAIXA_DENSIDADE_NIVEL_3',
                interactive: true,
                title: '<img src="styles/legend/AOD_BAIXA_DENSIDADE_NIVEL_3_15.png" /> AOD_BAIXA_DENSIDADE_NIVEL_3'
            });
var format_AOD_BAIXA_DENSIDADE_NIVEL_2_16 = new ol.format.GeoJSON();
var features_AOD_BAIXA_DENSIDADE_NIVEL_2_16 = format_AOD_BAIXA_DENSIDADE_NIVEL_2_16.readFeatures(json_AOD_BAIXA_DENSIDADE_NIVEL_2_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AOD_BAIXA_DENSIDADE_NIVEL_2_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOD_BAIXA_DENSIDADE_NIVEL_2_16.addFeatures(features_AOD_BAIXA_DENSIDADE_NIVEL_2_16);
var lyr_AOD_BAIXA_DENSIDADE_NIVEL_2_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOD_BAIXA_DENSIDADE_NIVEL_2_16, 
                style: style_AOD_BAIXA_DENSIDADE_NIVEL_2_16,
                popuplayertitle: 'AOD_BAIXA_DENSIDADE_NIVEL_2',
                interactive: true,
                title: '<img src="styles/legend/AOD_BAIXA_DENSIDADE_NIVEL_2_16.png" /> AOD_BAIXA_DENSIDADE_NIVEL_2'
            });
var format_AOD_BAIXA_DENSIDADE_NIVEL_1_17 = new ol.format.GeoJSON();
var features_AOD_BAIXA_DENSIDADE_NIVEL_1_17 = format_AOD_BAIXA_DENSIDADE_NIVEL_1_17.readFeatures(json_AOD_BAIXA_DENSIDADE_NIVEL_1_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AOD_BAIXA_DENSIDADE_NIVEL_1_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOD_BAIXA_DENSIDADE_NIVEL_1_17.addFeatures(features_AOD_BAIXA_DENSIDADE_NIVEL_1_17);
var lyr_AOD_BAIXA_DENSIDADE_NIVEL_1_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOD_BAIXA_DENSIDADE_NIVEL_1_17, 
                style: style_AOD_BAIXA_DENSIDADE_NIVEL_1_17,
                popuplayertitle: 'AOD_BAIXA_DENSIDADE_NIVEL_1',
                interactive: true,
                title: '<img src="styles/legend/AOD_BAIXA_DENSIDADE_NIVEL_1_17.png" /> AOD_BAIXA_DENSIDADE_NIVEL_1'
            });
var format_AOD_AUS_FASE_2_18 = new ol.format.GeoJSON();
var features_AOD_AUS_FASE_2_18 = format_AOD_AUS_FASE_2_18.readFeatures(json_AOD_AUS_FASE_2_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AOD_AUS_FASE_2_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOD_AUS_FASE_2_18.addFeatures(features_AOD_AUS_FASE_2_18);
var lyr_AOD_AUS_FASE_2_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOD_AUS_FASE_2_18, 
                style: style_AOD_AUS_FASE_2_18,
                popuplayertitle: 'AOD_AUS_FASE_2',
                interactive: true,
                title: '<img src="styles/legend/AOD_AUS_FASE_2_18.png" /> AOD_AUS_FASE_2'
            });
var format_AOD_AUS_FASE_1_19 = new ol.format.GeoJSON();
var features_AOD_AUS_FASE_1_19 = format_AOD_AUS_FASE_1_19.readFeatures(json_AOD_AUS_FASE_1_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AOD_AUS_FASE_1_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOD_AUS_FASE_1_19.addFeatures(features_AOD_AUS_FASE_1_19);
var lyr_AOD_AUS_FASE_1_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOD_AUS_FASE_1_19, 
                style: style_AOD_AUS_FASE_1_19,
                popuplayertitle: 'AOD_AUS_FASE_1',
                interactive: true,
                title: '<img src="styles/legend/AOD_AUS_FASE_1_19.png" /> AOD_AUS_FASE_1'
            });
var format_AOD_AREA_URBANA_CONSOLIDADA_20 = new ol.format.GeoJSON();
var features_AOD_AREA_URBANA_CONSOLIDADA_20 = format_AOD_AREA_URBANA_CONSOLIDADA_20.readFeatures(json_AOD_AREA_URBANA_CONSOLIDADA_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AOD_AREA_URBANA_CONSOLIDADA_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOD_AREA_URBANA_CONSOLIDADA_20.addFeatures(features_AOD_AREA_URBANA_CONSOLIDADA_20);
var lyr_AOD_AREA_URBANA_CONSOLIDADA_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOD_AREA_URBANA_CONSOLIDADA_20, 
                style: style_AOD_AREA_URBANA_CONSOLIDADA_20,
                popuplayertitle: 'AOD_AREA_URBANA_CONSOLIDADA',
                interactive: true,
                title: '<img src="styles/legend/AOD_AREA_URBANA_CONSOLIDADA_20.png" /> AOD_AREA_URBANA_CONSOLIDADA'
            });
var format_SubMacrozonadeOcupaoRestrita_21 = new ol.format.GeoJSON();
var features_SubMacrozonadeOcupaoRestrita_21 = format_SubMacrozonadeOcupaoRestrita_21.readFeatures(json_SubMacrozonadeOcupaoRestrita_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SubMacrozonadeOcupaoRestrita_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubMacrozonadeOcupaoRestrita_21.addFeatures(features_SubMacrozonadeOcupaoRestrita_21);
var lyr_SubMacrozonadeOcupaoRestrita_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubMacrozonadeOcupaoRestrita_21, 
                style: style_SubMacrozonadeOcupaoRestrita_21,
                popuplayertitle: 'Sub - Macrozona de Ocupação Restrita',
                interactive: true,
                title: '<img src="styles/legend/SubMacrozonadeOcupaoRestrita_21.png" /> Sub - Macrozona de Ocupação Restrita'
            });
var format_SubMacrozonadeOcupaoPreferencial_22 = new ol.format.GeoJSON();
var features_SubMacrozonadeOcupaoPreferencial_22 = format_SubMacrozonadeOcupaoPreferencial_22.readFeatures(json_SubMacrozonadeOcupaoPreferencial_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SubMacrozonadeOcupaoPreferencial_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubMacrozonadeOcupaoPreferencial_22.addFeatures(features_SubMacrozonadeOcupaoPreferencial_22);
var lyr_SubMacrozonadeOcupaoPreferencial_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubMacrozonadeOcupaoPreferencial_22, 
                style: style_SubMacrozonadeOcupaoPreferencial_22,
                popuplayertitle: 'Sub - Macrozona de Ocupação Preferencial',
                interactive: true,
                title: '<img src="styles/legend/SubMacrozonadeOcupaoPreferencial_22.png" /> Sub - Macrozona de Ocupação Preferencial'
            });
var format_SubMacrozonadeExpansoUrbana_23 = new ol.format.GeoJSON();
var features_SubMacrozonadeExpansoUrbana_23 = format_SubMacrozonadeExpansoUrbana_23.readFeatures(json_SubMacrozonadeExpansoUrbana_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SubMacrozonadeExpansoUrbana_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubMacrozonadeExpansoUrbana_23.addFeatures(features_SubMacrozonadeExpansoUrbana_23);
var lyr_SubMacrozonadeExpansoUrbana_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubMacrozonadeExpansoUrbana_23, 
                style: style_SubMacrozonadeExpansoUrbana_23,
                popuplayertitle: 'Sub - Macrozona de Expansão Urbana',
                interactive: true,
                title: '<img src="styles/legend/SubMacrozonadeExpansoUrbana_23.png" /> Sub - Macrozona de Expansão Urbana'
            });
var format_MacrozonadoRioCanoas_24 = new ol.format.GeoJSON();
var features_MacrozonadoRioCanoas_24 = format_MacrozonadoRioCanoas_24.readFeatures(json_MacrozonadoRioCanoas_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MacrozonadoRioCanoas_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacrozonadoRioCanoas_24.addFeatures(features_MacrozonadoRioCanoas_24);
var lyr_MacrozonadoRioCanoas_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MacrozonadoRioCanoas_24, 
                style: style_MacrozonadoRioCanoas_24,
                popuplayertitle: 'Macrozona do Rio Canoas',
                interactive: true,
                title: '<img src="styles/legend/MacrozonadoRioCanoas_24.png" /> Macrozona do Rio Canoas'
            });
var format_ExpUrbanaLeis4240199244201994eLC1002006_25 = new ol.format.GeoJSON();
var features_ExpUrbanaLeis4240199244201994eLC1002006_25 = format_ExpUrbanaLeis4240199244201994eLC1002006_25.readFeatures(json_ExpUrbanaLeis4240199244201994eLC1002006_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpUrbanaLeis4240199244201994eLC1002006_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpUrbanaLeis4240199244201994eLC1002006_25.addFeatures(features_ExpUrbanaLeis4240199244201994eLC1002006_25);
var lyr_ExpUrbanaLeis4240199244201994eLC1002006_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpUrbanaLeis4240199244201994eLC1002006_25, 
                style: style_ExpUrbanaLeis4240199244201994eLC1002006_25,
                popuplayertitle: 'Exp. Urbana - Leis - 4.240/1992, 4.420/1994 e L.C. 100/2006',
                interactive: true,
                title: '<img src="styles/legend/ExpUrbanaLeis4240199244201994eLC1002006_25.png" /> Exp. Urbana - Leis - 4.240/1992, 4.420/1994 e L.C. 100/2006'
            });
var format_ExpUrbanaLCN3242019_26 = new ol.format.GeoJSON();
var features_ExpUrbanaLCN3242019_26 = format_ExpUrbanaLCN3242019_26.readFeatures(json_ExpUrbanaLCN3242019_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpUrbanaLCN3242019_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpUrbanaLCN3242019_26.addFeatures(features_ExpUrbanaLCN3242019_26);
var lyr_ExpUrbanaLCN3242019_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpUrbanaLCN3242019_26, 
                style: style_ExpUrbanaLCN3242019_26,
                popuplayertitle: 'Exp. Urbana - L.C. Nº 324/ 2019',
                interactive: true,
                title: '<img src="styles/legend/ExpUrbanaLCN3242019_26.png" /> Exp. Urbana - L.C. Nº 324/ 2019'
            });
var format_ExpUrbanaLCN2352013_27 = new ol.format.GeoJSON();
var features_ExpUrbanaLCN2352013_27 = format_ExpUrbanaLCN2352013_27.readFeatures(json_ExpUrbanaLCN2352013_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpUrbanaLCN2352013_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpUrbanaLCN2352013_27.addFeatures(features_ExpUrbanaLCN2352013_27);
var lyr_ExpUrbanaLCN2352013_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpUrbanaLCN2352013_27, 
                style: style_ExpUrbanaLCN2352013_27,
                popuplayertitle: 'Exp. Urbana - L.C. Nº 235/ 2013',
                interactive: true,
                title: '<img src="styles/legend/ExpUrbanaLCN2352013_27.png" /> Exp. Urbana - L.C. Nº 235/ 2013'
            });
var format_ExpUrbanaLCN1402009_28 = new ol.format.GeoJSON();
var features_ExpUrbanaLCN1402009_28 = format_ExpUrbanaLCN1402009_28.readFeatures(json_ExpUrbanaLCN1402009_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpUrbanaLCN1402009_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpUrbanaLCN1402009_28.addFeatures(features_ExpUrbanaLCN1402009_28);
var lyr_ExpUrbanaLCN1402009_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpUrbanaLCN1402009_28, 
                style: style_ExpUrbanaLCN1402009_28,
                popuplayertitle: 'Exp. Urbana - L.C. Nº 140/ 2009',
                interactive: true,
                title: '<img src="styles/legend/ExpUrbanaLCN1402009_28.png" /> Exp. Urbana - L.C. Nº 140/ 2009'
            });
var format_ExpUrbanaLCN0502003_29 = new ol.format.GeoJSON();
var features_ExpUrbanaLCN0502003_29 = format_ExpUrbanaLCN0502003_29.readFeatures(json_ExpUrbanaLCN0502003_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpUrbanaLCN0502003_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpUrbanaLCN0502003_29.addFeatures(features_ExpUrbanaLCN0502003_29);
var lyr_ExpUrbanaLCN0502003_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpUrbanaLCN0502003_29, 
                style: style_ExpUrbanaLCN0502003_29,
                popuplayertitle: 'Exp. Urbana - L.C. Nº 050/ 2003',
                interactive: true,
                title: '<img src="styles/legend/ExpUrbanaLCN0502003_29.png" /> Exp. Urbana - L.C. Nº 050/ 2003'
            });
var format_reaEspecialLazerInteresseTursticoeCultural_30 = new ol.format.GeoJSON();
var features_reaEspecialLazerInteresseTursticoeCultural_30 = format_reaEspecialLazerInteresseTursticoeCultural_30.readFeatures(json_reaEspecialLazerInteresseTursticoeCultural_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaEspecialLazerInteresseTursticoeCultural_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaEspecialLazerInteresseTursticoeCultural_30.addFeatures(features_reaEspecialLazerInteresseTursticoeCultural_30);
var lyr_reaEspecialLazerInteresseTursticoeCultural_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaEspecialLazerInteresseTursticoeCultural_30, 
                style: style_reaEspecialLazerInteresseTursticoeCultural_30,
                popuplayertitle: 'Área Especial Lazer Interesse Turístico e Cultural',
                interactive: true,
                title: '<img src="styles/legend/reaEspecialLazerInteresseTursticoeCultural_30.png" /> Área Especial Lazer Interesse Turístico e Cultural'
            });
var format_AERUreaEspecialResidenciasUnifamiliares_31 = new ol.format.GeoJSON();
var features_AERUreaEspecialResidenciasUnifamiliares_31 = format_AERUreaEspecialResidenciasUnifamiliares_31.readFeatures(json_AERUreaEspecialResidenciasUnifamiliares_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AERUreaEspecialResidenciasUnifamiliares_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AERUreaEspecialResidenciasUnifamiliares_31.addFeatures(features_AERUreaEspecialResidenciasUnifamiliares_31);
var lyr_AERUreaEspecialResidenciasUnifamiliares_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AERUreaEspecialResidenciasUnifamiliares_31, 
                style: style_AERUreaEspecialResidenciasUnifamiliares_31,
                popuplayertitle: 'AERU - Área Especial Residencias Unifamiliares',
                interactive: true,
                title: '<img src="styles/legend/AERUreaEspecialResidenciasUnifamiliares_31.png" /> AERU - Área Especial Residencias Unifamiliares'
            });
var format_AEPIreaEspecialPreferIndustrialeLogstica_32 = new ol.format.GeoJSON();
var features_AEPIreaEspecialPreferIndustrialeLogstica_32 = format_AEPIreaEspecialPreferIndustrialeLogstica_32.readFeatures(json_AEPIreaEspecialPreferIndustrialeLogstica_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AEPIreaEspecialPreferIndustrialeLogstica_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AEPIreaEspecialPreferIndustrialeLogstica_32.addFeatures(features_AEPIreaEspecialPreferIndustrialeLogstica_32);
var lyr_AEPIreaEspecialPreferIndustrialeLogstica_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AEPIreaEspecialPreferIndustrialeLogstica_32, 
                style: style_AEPIreaEspecialPreferIndustrialeLogstica_32,
                popuplayertitle: 'AEPI - Área Especial Prefer. Industrial e Logística',
                interactive: true,
                title: '<img src="styles/legend/AEPIreaEspecialPreferIndustrialeLogstica_32.png" /> AEPI - Área Especial Prefer. Industrial e Logística'
            });
var format_AEISreaEspecialdeInteresseSocial_33 = new ol.format.GeoJSON();
var features_AEISreaEspecialdeInteresseSocial_33 = format_AEISreaEspecialdeInteresseSocial_33.readFeatures(json_AEISreaEspecialdeInteresseSocial_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AEISreaEspecialdeInteresseSocial_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AEISreaEspecialdeInteresseSocial_33.addFeatures(features_AEISreaEspecialdeInteresseSocial_33);
var lyr_AEISreaEspecialdeInteresseSocial_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AEISreaEspecialdeInteresseSocial_33, 
                style: style_AEISreaEspecialdeInteresseSocial_33,
                popuplayertitle: 'AEIS - Área Especial de Interesse Social',
                interactive: true,
                title: '<img src="styles/legend/AEISreaEspecialdeInteresseSocial_33.png" /> AEIS - Área Especial de Interesse Social'
            });
var format_SistemaVirioSistemavirioprincipal_34 = new ol.format.GeoJSON();
var features_SistemaVirioSistemavirioprincipal_34 = format_SistemaVirioSistemavirioprincipal_34.readFeatures(json_SistemaVirioSistemavirioprincipal_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SistemaVirioSistemavirioprincipal_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemaVirioSistemavirioprincipal_34.addFeatures(features_SistemaVirioSistemavirioprincipal_34);
var lyr_SistemaVirioSistemavirioprincipal_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemaVirioSistemavirioprincipal_34, 
                style: style_SistemaVirioSistemavirioprincipal_34,
                popuplayertitle: 'Sistema Viário - Sistema viário principal',
                interactive: true,
                title: '<img src="styles/legend/SistemaVirioSistemavirioprincipal_34.png" /> Sistema Viário - Sistema viário principal'
            });
var format_SistemaVirioRodoviasViasarteriais_35 = new ol.format.GeoJSON();
var features_SistemaVirioRodoviasViasarteriais_35 = format_SistemaVirioRodoviasViasarteriais_35.readFeatures(json_SistemaVirioRodoviasViasarteriais_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SistemaVirioRodoviasViasarteriais_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemaVirioRodoviasViasarteriais_35.addFeatures(features_SistemaVirioRodoviasViasarteriais_35);
var lyr_SistemaVirioRodoviasViasarteriais_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemaVirioRodoviasViasarteriais_35, 
                style: style_SistemaVirioRodoviasViasarteriais_35,
                popuplayertitle: 'Sistema Viário - Rodovias/Vias arteriais',
                interactive: true,
                title: '<img src="styles/legend/SistemaVirioRodoviasViasarteriais_35.png" /> Sistema Viário - Rodovias/Vias arteriais'
            });
var format_SistemaVirioRodovias_36 = new ol.format.GeoJSON();
var features_SistemaVirioRodovias_36 = format_SistemaVirioRodovias_36.readFeatures(json_SistemaVirioRodovias_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SistemaVirioRodovias_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemaVirioRodovias_36.addFeatures(features_SistemaVirioRodovias_36);
var lyr_SistemaVirioRodovias_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemaVirioRodovias_36, 
                style: style_SistemaVirioRodovias_36,
                popuplayertitle: 'Sistema Viário - Rodovias',
                interactive: true,
                title: '<img src="styles/legend/SistemaVirioRodovias_36.png" /> Sistema Viário - Rodovias'
            });
var format_SistemaVirioExpansodosistemavirio_37 = new ol.format.GeoJSON();
var features_SistemaVirioExpansodosistemavirio_37 = format_SistemaVirioExpansodosistemavirio_37.readFeatures(json_SistemaVirioExpansodosistemavirio_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SistemaVirioExpansodosistemavirio_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemaVirioExpansodosistemavirio_37.addFeatures(features_SistemaVirioExpansodosistemavirio_37);
var lyr_SistemaVirioExpansodosistemavirio_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemaVirioExpansodosistemavirio_37, 
                style: style_SistemaVirioExpansodosistemavirio_37,
                popuplayertitle: 'Sistema Viário - Expansão do sistema viário',
                interactive: true,
                title: '<img src="styles/legend/SistemaVirioExpansodosistemavirio_37.png" /> Sistema Viário - Expansão do sistema viário'
            });
var format_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_38 = new ol.format.GeoJSON();
var features_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_38 = format_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_38.readFeatures(json_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_38.addFeatures(features_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_38);
var lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_38, 
                style: style_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_38,
                popuplayertitle: 'Plano Viário Zona Sul - VIA EXPRESSA EXISTENTE',
                interactive: true,
                title: '<img src="styles/legend/PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_38.png" /> Plano Viário Zona Sul - VIA EXPRESSA EXISTENTE'
            });
var format_PlanoVirioZonaSulDIRETRIZVIAPARQUE_39 = new ol.format.GeoJSON();
var features_PlanoVirioZonaSulDIRETRIZVIAPARQUE_39 = format_PlanoVirioZonaSulDIRETRIZVIAPARQUE_39.readFeatures(json_PlanoVirioZonaSulDIRETRIZVIAPARQUE_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoVirioZonaSulDIRETRIZVIAPARQUE_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoVirioZonaSulDIRETRIZVIAPARQUE_39.addFeatures(features_PlanoVirioZonaSulDIRETRIZVIAPARQUE_39);
var lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoVirioZonaSulDIRETRIZVIAPARQUE_39, 
                style: style_PlanoVirioZonaSulDIRETRIZVIAPARQUE_39,
                popuplayertitle: 'Plano Viário Zona Sul - DIRETRIZ VIA PARQUE',
                interactive: true,
                title: '<img src="styles/legend/PlanoVirioZonaSulDIRETRIZVIAPARQUE_39.png" /> Plano Viário Zona Sul - DIRETRIZ VIA PARQUE'
            });
var format_PlanoVirioZonaSulDIRETRIZCOLETORA_40 = new ol.format.GeoJSON();
var features_PlanoVirioZonaSulDIRETRIZCOLETORA_40 = format_PlanoVirioZonaSulDIRETRIZCOLETORA_40.readFeatures(json_PlanoVirioZonaSulDIRETRIZCOLETORA_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoVirioZonaSulDIRETRIZCOLETORA_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoVirioZonaSulDIRETRIZCOLETORA_40.addFeatures(features_PlanoVirioZonaSulDIRETRIZCOLETORA_40);
var lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoVirioZonaSulDIRETRIZCOLETORA_40, 
                style: style_PlanoVirioZonaSulDIRETRIZCOLETORA_40,
                popuplayertitle: 'Plano Viário Zona Sul - DIRETRIZ COLETORA',
                interactive: true,
                title: '<img src="styles/legend/PlanoVirioZonaSulDIRETRIZCOLETORA_40.png" /> Plano Viário Zona Sul - DIRETRIZ COLETORA'
            });
var format_PlanoVirioZonaSulDIRETRIZAVENIDA_41 = new ol.format.GeoJSON();
var features_PlanoVirioZonaSulDIRETRIZAVENIDA_41 = format_PlanoVirioZonaSulDIRETRIZAVENIDA_41.readFeatures(json_PlanoVirioZonaSulDIRETRIZAVENIDA_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoVirioZonaSulDIRETRIZAVENIDA_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoVirioZonaSulDIRETRIZAVENIDA_41.addFeatures(features_PlanoVirioZonaSulDIRETRIZAVENIDA_41);
var lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoVirioZonaSulDIRETRIZAVENIDA_41, 
                style: style_PlanoVirioZonaSulDIRETRIZAVENIDA_41,
                popuplayertitle: 'Plano Viário Zona Sul - DIRETRIZ AVENIDA',
                interactive: true,
                title: '<img src="styles/legend/PlanoVirioZonaSulDIRETRIZAVENIDA_41.png" /> Plano Viário Zona Sul - DIRETRIZ AVENIDA'
            });
var format_PlanoVirioZonaSulAVENIDAEXISTENTE_42 = new ol.format.GeoJSON();
var features_PlanoVirioZonaSulAVENIDAEXISTENTE_42 = format_PlanoVirioZonaSulAVENIDAEXISTENTE_42.readFeatures(json_PlanoVirioZonaSulAVENIDAEXISTENTE_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoVirioZonaSulAVENIDAEXISTENTE_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoVirioZonaSulAVENIDAEXISTENTE_42.addFeatures(features_PlanoVirioZonaSulAVENIDAEXISTENTE_42);
var lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoVirioZonaSulAVENIDAEXISTENTE_42, 
                style: style_PlanoVirioZonaSulAVENIDAEXISTENTE_42,
                popuplayertitle: 'Plano Viário Zona Sul - AVENIDA EXISTENTE',
                interactive: true,
                title: '<img src="styles/legend/PlanoVirioZonaSulAVENIDAEXISTENTE_42.png" /> Plano Viário Zona Sul - AVENIDA EXISTENTE'
            });
var format_VIGILANCIA_EM_SAUDE_43 = new ol.format.GeoJSON();
var features_VIGILANCIA_EM_SAUDE_43 = format_VIGILANCIA_EM_SAUDE_43.readFeatures(json_VIGILANCIA_EM_SAUDE_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VIGILANCIA_EM_SAUDE_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIGILANCIA_EM_SAUDE_43.addFeatures(features_VIGILANCIA_EM_SAUDE_43);
var lyr_VIGILANCIA_EM_SAUDE_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIGILANCIA_EM_SAUDE_43, 
                style: style_VIGILANCIA_EM_SAUDE_43,
                popuplayertitle: 'VIGILANCIA_EM_SAUDE',
                interactive: true,
                title: '<img src="styles/legend/VIGILANCIA_EM_SAUDE_43.png" /> VIGILANCIA_EM_SAUDE'
            });
var format_UNIDADE_DE_URGENCIA_E_EMERGENCIA_44 = new ol.format.GeoJSON();
var features_UNIDADE_DE_URGENCIA_E_EMERGENCIA_44 = format_UNIDADE_DE_URGENCIA_E_EMERGENCIA_44.readFeatures(json_UNIDADE_DE_URGENCIA_E_EMERGENCIA_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UNIDADE_DE_URGENCIA_E_EMERGENCIA_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UNIDADE_DE_URGENCIA_E_EMERGENCIA_44.addFeatures(features_UNIDADE_DE_URGENCIA_E_EMERGENCIA_44);
var lyr_UNIDADE_DE_URGENCIA_E_EMERGENCIA_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UNIDADE_DE_URGENCIA_E_EMERGENCIA_44, 
                style: style_UNIDADE_DE_URGENCIA_E_EMERGENCIA_44,
                popuplayertitle: 'UNIDADE_DE_URGENCIA_E_EMERGENCIA',
                interactive: true,
                title: '<img src="styles/legend/UNIDADE_DE_URGENCIA_E_EMERGENCIA_44.png" /> UNIDADE_DE_URGENCIA_E_EMERGENCIA'
            });
var format_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO_45 = new ol.format.GeoJSON();
var features_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO_45 = format_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO_45.readFeatures(json_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO_45.addFeatures(features_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO_45);
var lyr_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO_45, 
                style: style_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO_45,
                popuplayertitle: 'SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO',
                interactive: true,
                title: '<img src="styles/legend/SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO_45.png" /> SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO'
            });
var format_GESTAO_ADMINISTRATIVO_46 = new ol.format.GeoJSON();
var features_GESTAO_ADMINISTRATIVO_46 = format_GESTAO_ADMINISTRATIVO_46.readFeatures(json_GESTAO_ADMINISTRATIVO_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GESTAO_ADMINISTRATIVO_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GESTAO_ADMINISTRATIVO_46.addFeatures(features_GESTAO_ADMINISTRATIVO_46);
var lyr_GESTAO_ADMINISTRATIVO_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GESTAO_ADMINISTRATIVO_46, 
                style: style_GESTAO_ADMINISTRATIVO_46,
                popuplayertitle: 'GESTAO_ADMINISTRATIVO',
                interactive: true,
                title: '<img src="styles/legend/GESTAO_ADMINISTRATIVO_46.png" /> GESTAO_ADMINISTRATIVO'
            });
var format_ATENCAO_PRIMARIA_47 = new ol.format.GeoJSON();
var features_ATENCAO_PRIMARIA_47 = format_ATENCAO_PRIMARIA_47.readFeatures(json_ATENCAO_PRIMARIA_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ATENCAO_PRIMARIA_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATENCAO_PRIMARIA_47.addFeatures(features_ATENCAO_PRIMARIA_47);
var lyr_ATENCAO_PRIMARIA_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATENCAO_PRIMARIA_47, 
                style: style_ATENCAO_PRIMARIA_47,
                popuplayertitle: 'ATENCAO_PRIMARIA',
                interactive: true,
                title: '<img src="styles/legend/ATENCAO_PRIMARIA_47.png" /> ATENCAO_PRIMARIA'
            });
var format_TEATRO_48 = new ol.format.GeoJSON();
var features_TEATRO_48 = format_TEATRO_48.readFeatures(json_TEATRO_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TEATRO_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEATRO_48.addFeatures(features_TEATRO_48);
var lyr_TEATRO_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEATRO_48, 
                style: style_TEATRO_48,
                popuplayertitle: 'TEATRO',
                interactive: true,
                title: '<img src="styles/legend/TEATRO_48.png" /> TEATRO'
            });
var format_SECRETARIA_49 = new ol.format.GeoJSON();
var features_SECRETARIA_49 = format_SECRETARIA_49.readFeatures(json_SECRETARIA_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SECRETARIA_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SECRETARIA_49.addFeatures(features_SECRETARIA_49);
var lyr_SECRETARIA_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SECRETARIA_49, 
                style: style_SECRETARIA_49,
                popuplayertitle: 'SECRETARIA',
                interactive: true,
                title: '<img src="styles/legend/SECRETARIA_49.png" /> SECRETARIA'
            });
var format_QUADRA_50 = new ol.format.GeoJSON();
var features_QUADRA_50 = format_QUADRA_50.readFeatures(json_QUADRA_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_QUADRA_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QUADRA_50.addFeatures(features_QUADRA_50);
var lyr_QUADRA_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QUADRA_50, 
                style: style_QUADRA_50,
                popuplayertitle: 'QUADRA',
                interactive: true,
                title: '<img src="styles/legend/QUADRA_50.png" /> QUADRA'
            });
var format_PRACA_51 = new ol.format.GeoJSON();
var features_PRACA_51 = format_PRACA_51.readFeatures(json_PRACA_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PRACA_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRACA_51.addFeatures(features_PRACA_51);
var lyr_PRACA_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRACA_51, 
                style: style_PRACA_51,
                popuplayertitle: 'PRACA',
                interactive: true,
                title: '<img src="styles/legend/PRACA_51.png" /> PRACA'
            });
var format_PISTA_52 = new ol.format.GeoJSON();
var features_PISTA_52 = format_PISTA_52.readFeatures(json_PISTA_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PISTA_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PISTA_52.addFeatures(features_PISTA_52);
var lyr_PISTA_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PISTA_52, 
                style: style_PISTA_52,
                popuplayertitle: 'PISTA',
                interactive: true,
                title: '<img src="styles/legend/PISTA_52.png" /> PISTA'
            });
var format_PISCINA_53 = new ol.format.GeoJSON();
var features_PISCINA_53 = format_PISCINA_53.readFeatures(json_PISCINA_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PISCINA_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PISCINA_53.addFeatures(features_PISCINA_53);
var lyr_PISCINA_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PISCINA_53, 
                style: style_PISCINA_53,
                popuplayertitle: 'PISCINA',
                interactive: true,
                title: '<img src="styles/legend/PISCINA_53.png" /> PISCINA'
            });
var format_PINACOTECA_54 = new ol.format.GeoJSON();
var features_PINACOTECA_54 = format_PINACOTECA_54.readFeatures(json_PINACOTECA_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PINACOTECA_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PINACOTECA_54.addFeatures(features_PINACOTECA_54);
var lyr_PINACOTECA_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PINACOTECA_54, 
                style: style_PINACOTECA_54,
                popuplayertitle: 'PINACOTECA',
                interactive: true,
                title: '<img src="styles/legend/PINACOTECA_54.png" /> PINACOTECA'
            });
var format_PAVILHAO_55 = new ol.format.GeoJSON();
var features_PAVILHAO_55 = format_PAVILHAO_55.readFeatures(json_PAVILHAO_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PAVILHAO_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAVILHAO_55.addFeatures(features_PAVILHAO_55);
var lyr_PAVILHAO_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAVILHAO_55, 
                style: style_PAVILHAO_55,
                popuplayertitle: 'PAVILHAO',
                interactive: true,
                title: '<img src="styles/legend/PAVILHAO_55.png" /> PAVILHAO'
            });
var format_PARQUE_56 = new ol.format.GeoJSON();
var features_PARQUE_56 = format_PARQUE_56.readFeatures(json_PARQUE_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_56.addFeatures(features_PARQUE_56);
var lyr_PARQUE_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_56, 
                style: style_PARQUE_56,
                popuplayertitle: 'PARQUE',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_56.png" /> PARQUE'
            });
var format_MUSEU_57 = new ol.format.GeoJSON();
var features_MUSEU_57 = format_MUSEU_57.readFeatures(json_MUSEU_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MUSEU_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUSEU_57.addFeatures(features_MUSEU_57);
var lyr_MUSEU_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUSEU_57, 
                style: style_MUSEU_57,
                popuplayertitle: 'MUSEU',
                interactive: true,
                title: '<img src="styles/legend/MUSEU_57.png" /> MUSEU'
            });
var format_GINASIO_58 = new ol.format.GeoJSON();
var features_GINASIO_58 = format_GINASIO_58.readFeatures(json_GINASIO_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GINASIO_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GINASIO_58.addFeatures(features_GINASIO_58);
var lyr_GINASIO_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GINASIO_58, 
                style: style_GINASIO_58,
                popuplayertitle: 'GINASIO',
                interactive: true,
                title: '<img src="styles/legend/GINASIO_58.png" /> GINASIO'
            });
var format_ESTADIO_59 = new ol.format.GeoJSON();
var features_ESTADIO_59 = format_ESTADIO_59.readFeatures(json_ESTADIO_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ESTADIO_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTADIO_59.addFeatures(features_ESTADIO_59);
var lyr_ESTADIO_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTADIO_59, 
                style: style_ESTADIO_59,
                popuplayertitle: 'ESTADIO',
                interactive: true,
                title: '<img src="styles/legend/ESTADIO_59.png" /> ESTADIO'
            });
var format_CONJUNTO_60 = new ol.format.GeoJSON();
var features_CONJUNTO_60 = format_CONJUNTO_60.readFeatures(json_CONJUNTO_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CONJUNTO_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONJUNTO_60.addFeatures(features_CONJUNTO_60);
var lyr_CONJUNTO_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONJUNTO_60, 
                style: style_CONJUNTO_60,
                popuplayertitle: 'CONJUNTO',
                interactive: true,
                title: '<img src="styles/legend/CONJUNTO_60.png" /> CONJUNTO'
            });
var format_CEPEL_61 = new ol.format.GeoJSON();
var features_CEPEL_61 = format_CEPEL_61.readFeatures(json_CEPEL_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CEPEL_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CEPEL_61.addFeatures(features_CEPEL_61);
var lyr_CEPEL_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CEPEL_61, 
                style: style_CEPEL_61,
                popuplayertitle: 'CEPEL',
                interactive: true,
                title: '<img src="styles/legend/CEPEL_61.png" /> CEPEL'
            });
var format_CENTRO_62 = new ol.format.GeoJSON();
var features_CENTRO_62 = format_CENTRO_62.readFeatures(json_CENTRO_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CENTRO_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTRO_62.addFeatures(features_CENTRO_62);
var lyr_CENTRO_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTRO_62, 
                style: style_CENTRO_62,
                popuplayertitle: 'CENTRO',
                interactive: true,
                title: '<img src="styles/legend/CENTRO_62.png" /> CENTRO'
            });
var format_CASA_63 = new ol.format.GeoJSON();
var features_CASA_63 = format_CASA_63.readFeatures(json_CASA_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CASA_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASA_63.addFeatures(features_CASA_63);
var lyr_CASA_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASA_63, 
                style: style_CASA_63,
                popuplayertitle: 'CASA',
                interactive: true,
                title: '<img src="styles/legend/CASA_63.png" /> CASA'
            });
var format_CAMPO_64 = new ol.format.GeoJSON();
var features_CAMPO_64 = format_CAMPO_64.readFeatures(json_CAMPO_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CAMPO_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAMPO_64.addFeatures(features_CAMPO_64);
var lyr_CAMPO_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAMPO_64, 
                style: style_CAMPO_64,
                popuplayertitle: 'CAMPO',
                interactive: true,
                title: '<img src="styles/legend/CAMPO_64.png" /> CAMPO'
            });
var format_BIBLIOTECA_65 = new ol.format.GeoJSON();
var features_BIBLIOTECA_65 = format_BIBLIOTECA_65.readFeatures(json_BIBLIOTECA_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BIBLIOTECA_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BIBLIOTECA_65.addFeatures(features_BIBLIOTECA_65);
var lyr_BIBLIOTECA_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BIBLIOTECA_65, 
                style: style_BIBLIOTECA_65,
                popuplayertitle: 'BIBLIOTECA',
                interactive: true,
                title: '<img src="styles/legend/BIBLIOTECA_65.png" /> BIBLIOTECA'
            });
var format_ARENA_66 = new ol.format.GeoJSON();
var features_ARENA_66 = format_ARENA_66.readFeatures(json_ARENA_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARENA_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARENA_66.addFeatures(features_ARENA_66);
var lyr_ARENA_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARENA_66, 
                style: style_ARENA_66,
                popuplayertitle: 'ARENA',
                interactive: true,
                title: '<img src="styles/legend/ARENA_66.png" /> ARENA'
            });
var format_UNIVERSIDADE_ABERTA_DO_BRASIL_67 = new ol.format.GeoJSON();
var features_UNIVERSIDADE_ABERTA_DO_BRASIL_67 = format_UNIVERSIDADE_ABERTA_DO_BRASIL_67.readFeatures(json_UNIVERSIDADE_ABERTA_DO_BRASIL_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UNIVERSIDADE_ABERTA_DO_BRASIL_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UNIVERSIDADE_ABERTA_DO_BRASIL_67.addFeatures(features_UNIVERSIDADE_ABERTA_DO_BRASIL_67);
var lyr_UNIVERSIDADE_ABERTA_DO_BRASIL_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UNIVERSIDADE_ABERTA_DO_BRASIL_67, 
                style: style_UNIVERSIDADE_ABERTA_DO_BRASIL_67,
                popuplayertitle: 'UNIVERSIDADE_ABERTA_DO_BRASIL',
                interactive: true,
                title: '<img src="styles/legend/UNIVERSIDADE_ABERTA_DO_BRASIL_67.png" /> UNIVERSIDADE_ABERTA_DO_BRASIL'
            });
var format_SETOR_DE_MERENDA_68 = new ol.format.GeoJSON();
var features_SETOR_DE_MERENDA_68 = format_SETOR_DE_MERENDA_68.readFeatures(json_SETOR_DE_MERENDA_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SETOR_DE_MERENDA_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SETOR_DE_MERENDA_68.addFeatures(features_SETOR_DE_MERENDA_68);
var lyr_SETOR_DE_MERENDA_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SETOR_DE_MERENDA_68, 
                style: style_SETOR_DE_MERENDA_68,
                popuplayertitle: 'SETOR_DE_MERENDA',
                interactive: true,
                title: '<img src="styles/legend/SETOR_DE_MERENDA_68.png" /> SETOR_DE_MERENDA'
            });
var format_SECRETARIA_DE_EDUCACAO_69 = new ol.format.GeoJSON();
var features_SECRETARIA_DE_EDUCACAO_69 = format_SECRETARIA_DE_EDUCACAO_69.readFeatures(json_SECRETARIA_DE_EDUCACAO_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SECRETARIA_DE_EDUCACAO_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SECRETARIA_DE_EDUCACAO_69.addFeatures(features_SECRETARIA_DE_EDUCACAO_69);
var lyr_SECRETARIA_DE_EDUCACAO_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SECRETARIA_DE_EDUCACAO_69, 
                style: style_SECRETARIA_DE_EDUCACAO_69,
                popuplayertitle: 'SECRETARIA_DE_EDUCACAO',
                interactive: true,
                title: '<img src="styles/legend/SECRETARIA_DE_EDUCACAO_69.png" /> SECRETARIA_DE_EDUCACAO'
            });
var format_ESPACO_DE_DIFUSAO_CIENTIFICA_70 = new ol.format.GeoJSON();
var features_ESPACO_DE_DIFUSAO_CIENTIFICA_70 = format_ESPACO_DE_DIFUSAO_CIENTIFICA_70.readFeatures(json_ESPACO_DE_DIFUSAO_CIENTIFICA_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ESPACO_DE_DIFUSAO_CIENTIFICA_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESPACO_DE_DIFUSAO_CIENTIFICA_70.addFeatures(features_ESPACO_DE_DIFUSAO_CIENTIFICA_70);
var lyr_ESPACO_DE_DIFUSAO_CIENTIFICA_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESPACO_DE_DIFUSAO_CIENTIFICA_70, 
                style: style_ESPACO_DE_DIFUSAO_CIENTIFICA_70,
                popuplayertitle: 'ESPACO_DE_DIFUSAO_CIENTIFICA',
                interactive: true,
                title: '<img src="styles/legend/ESPACO_DE_DIFUSAO_CIENTIFICA_70.png" /> ESPACO_DE_DIFUSAO_CIENTIFICA'
            });
var format_ENSINO_FUNDAMENTAL_71 = new ol.format.GeoJSON();
var features_ENSINO_FUNDAMENTAL_71 = format_ENSINO_FUNDAMENTAL_71.readFeatures(json_ENSINO_FUNDAMENTAL_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ENSINO_FUNDAMENTAL_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENSINO_FUNDAMENTAL_71.addFeatures(features_ENSINO_FUNDAMENTAL_71);
var lyr_ENSINO_FUNDAMENTAL_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ENSINO_FUNDAMENTAL_71, 
                style: style_ENSINO_FUNDAMENTAL_71,
                popuplayertitle: 'ENSINO_FUNDAMENTAL',
                interactive: true,
                title: '<img src="styles/legend/ENSINO_FUNDAMENTAL_71.png" /> ENSINO_FUNDAMENTAL'
            });
var format_EJA_72 = new ol.format.GeoJSON();
var features_EJA_72 = format_EJA_72.readFeatures(json_EJA_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EJA_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EJA_72.addFeatures(features_EJA_72);
var lyr_EJA_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EJA_72, 
                style: style_EJA_72,
                popuplayertitle: 'EJA',
                interactive: true,
                title: '<img src="styles/legend/EJA_72.png" /> EJA'
            });
var format_ED_INFANTIL_ENS_FUNDAMENTAL_73 = new ol.format.GeoJSON();
var features_ED_INFANTIL_ENS_FUNDAMENTAL_73 = format_ED_INFANTIL_ENS_FUNDAMENTAL_73.readFeatures(json_ED_INFANTIL_ENS_FUNDAMENTAL_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ED_INFANTIL_ENS_FUNDAMENTAL_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ED_INFANTIL_ENS_FUNDAMENTAL_73.addFeatures(features_ED_INFANTIL_ENS_FUNDAMENTAL_73);
var lyr_ED_INFANTIL_ENS_FUNDAMENTAL_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ED_INFANTIL_ENS_FUNDAMENTAL_73, 
                style: style_ED_INFANTIL_ENS_FUNDAMENTAL_73,
                popuplayertitle: 'ED_INFANTIL_ENS_FUNDAMENTAL',
                interactive: true,
                title: '<img src="styles/legend/ED_INFANTIL_ENS_FUNDAMENTAL_73.png" /> ED_INFANTIL_ENS_FUNDAMENTAL'
            });
var format_EDUCACAO_INFANTIL_74 = new ol.format.GeoJSON();
var features_EDUCACAO_INFANTIL_74 = format_EDUCACAO_INFANTIL_74.readFeatures(json_EDUCACAO_INFANTIL_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EDUCACAO_INFANTIL_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDUCACAO_INFANTIL_74.addFeatures(features_EDUCACAO_INFANTIL_74);
var lyr_EDUCACAO_INFANTIL_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EDUCACAO_INFANTIL_74, 
                style: style_EDUCACAO_INFANTIL_74,
                popuplayertitle: 'EDUCACAO_INFANTIL',
                interactive: true,
                title: '<img src="styles/legend/EDUCACAO_INFANTIL_74.png" /> EDUCACAO_INFANTIL'
            });
var format_CRECHE_PRE_ESCOLA_75 = new ol.format.GeoJSON();
var features_CRECHE_PRE_ESCOLA_75 = format_CRECHE_PRE_ESCOLA_75.readFeatures(json_CRECHE_PRE_ESCOLA_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CRECHE_PRE_ESCOLA_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRECHE_PRE_ESCOLA_75.addFeatures(features_CRECHE_PRE_ESCOLA_75);
var lyr_CRECHE_PRE_ESCOLA_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRECHE_PRE_ESCOLA_75, 
                style: style_CRECHE_PRE_ESCOLA_75,
                popuplayertitle: 'CRECHE_PRE_ESCOLA',
                interactive: true,
                title: '<img src="styles/legend/CRECHE_PRE_ESCOLA_75.png" /> CRECHE_PRE_ESCOLA'
            });
var format_CRECHE_76 = new ol.format.GeoJSON();
var features_CRECHE_76 = format_CRECHE_76.readFeatures(json_CRECHE_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CRECHE_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRECHE_76.addFeatures(features_CRECHE_76);
var lyr_CRECHE_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRECHE_76, 
                style: style_CRECHE_76,
                popuplayertitle: 'CRECHE',
                interactive: true,
                title: '<img src="styles/legend/CRECHE_76.png" /> CRECHE'
            });
var format_CENTRO_DE_EDUCACAO_INTEGRADA_77 = new ol.format.GeoJSON();
var features_CENTRO_DE_EDUCACAO_INTEGRADA_77 = format_CENTRO_DE_EDUCACAO_INTEGRADA_77.readFeatures(json_CENTRO_DE_EDUCACAO_INTEGRADA_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CENTRO_DE_EDUCACAO_INTEGRADA_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTRO_DE_EDUCACAO_INTEGRADA_77.addFeatures(features_CENTRO_DE_EDUCACAO_INTEGRADA_77);
var lyr_CENTRO_DE_EDUCACAO_INTEGRADA_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTRO_DE_EDUCACAO_INTEGRADA_77, 
                style: style_CENTRO_DE_EDUCACAO_INTEGRADA_77,
                popuplayertitle: 'CENTRO_DE_EDUCACAO_INTEGRADA',
                interactive: true,
                title: '<img src="styles/legend/CENTRO_DE_EDUCACAO_INTEGRADA_77.png" /> CENTRO_DE_EDUCACAO_INTEGRADA'
            });
var format_ALMOCHARIFADO_EDUCACAO_78 = new ol.format.GeoJSON();
var features_ALMOCHARIFADO_EDUCACAO_78 = format_ALMOCHARIFADO_EDUCACAO_78.readFeatures(json_ALMOCHARIFADO_EDUCACAO_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ALMOCHARIFADO_EDUCACAO_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALMOCHARIFADO_EDUCACAO_78.addFeatures(features_ALMOCHARIFADO_EDUCACAO_78);
var lyr_ALMOCHARIFADO_EDUCACAO_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALMOCHARIFADO_EDUCACAO_78, 
                style: style_ALMOCHARIFADO_EDUCACAO_78,
                popuplayertitle: 'ALMOCHARIFADO_EDUCACAO',
                interactive: true,
                title: '<img src="styles/legend/ALMOCHARIFADO_EDUCACAO_78.png" /> ALMOCHARIFADO_EDUCACAO'
            });
var format_ALFABETIZACAO_DE_JOVENS_E_ADULTOS_79 = new ol.format.GeoJSON();
var features_ALFABETIZACAO_DE_JOVENS_E_ADULTOS_79 = format_ALFABETIZACAO_DE_JOVENS_E_ADULTOS_79.readFeatures(json_ALFABETIZACAO_DE_JOVENS_E_ADULTOS_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ALFABETIZACAO_DE_JOVENS_E_ADULTOS_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALFABETIZACAO_DE_JOVENS_E_ADULTOS_79.addFeatures(features_ALFABETIZACAO_DE_JOVENS_E_ADULTOS_79);
var lyr_ALFABETIZACAO_DE_JOVENS_E_ADULTOS_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALFABETIZACAO_DE_JOVENS_E_ADULTOS_79, 
                style: style_ALFABETIZACAO_DE_JOVENS_E_ADULTOS_79,
                popuplayertitle: 'ALFABETIZACAO_DE_JOVENS_E_ADULTOS',
                interactive: true,
                title: '<img src="styles/legend/ALFABETIZACAO_DE_JOVENS_E_ADULTOS_79.png" /> ALFABETIZACAO_DE_JOVENS_E_ADULTOS'
            });
var format_RODOVIAS_MUNICIPAIS_80 = new ol.format.GeoJSON();
var features_RODOVIAS_MUNICIPAIS_80 = format_RODOVIAS_MUNICIPAIS_80.readFeatures(json_RODOVIAS_MUNICIPAIS_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RODOVIAS_MUNICIPAIS_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RODOVIAS_MUNICIPAIS_80.addFeatures(features_RODOVIAS_MUNICIPAIS_80);
var lyr_RODOVIAS_MUNICIPAIS_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RODOVIAS_MUNICIPAIS_80, 
                style: style_RODOVIAS_MUNICIPAIS_80,
                popuplayertitle: 'RODOVIAS_MUNICIPAIS',
                interactive: true,
                title: '<img src="styles/legend/RODOVIAS_MUNICIPAIS_80.png" /> RODOVIAS_MUNICIPAIS'
            });
var format_RODOVIAS_ESTADUAIS_81 = new ol.format.GeoJSON();
var features_RODOVIAS_ESTADUAIS_81 = format_RODOVIAS_ESTADUAIS_81.readFeatures(json_RODOVIAS_ESTADUAIS_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RODOVIAS_ESTADUAIS_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RODOVIAS_ESTADUAIS_81.addFeatures(features_RODOVIAS_ESTADUAIS_81);
var lyr_RODOVIAS_ESTADUAIS_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RODOVIAS_ESTADUAIS_81, 
                style: style_RODOVIAS_ESTADUAIS_81,
                popuplayertitle: 'RODOVIAS_ESTADUAIS',
                interactive: true,
                title: '<img src="styles/legend/RODOVIAS_ESTADUAIS_81.png" /> RODOVIAS_ESTADUAIS'
            });
var format_ESTRADAS_RURAIS_MUNICIPAIS_82 = new ol.format.GeoJSON();
var features_ESTRADAS_RURAIS_MUNICIPAIS_82 = format_ESTRADAS_RURAIS_MUNICIPAIS_82.readFeatures(json_ESTRADAS_RURAIS_MUNICIPAIS_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ESTRADAS_RURAIS_MUNICIPAIS_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTRADAS_RURAIS_MUNICIPAIS_82.addFeatures(features_ESTRADAS_RURAIS_MUNICIPAIS_82);
var lyr_ESTRADAS_RURAIS_MUNICIPAIS_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTRADAS_RURAIS_MUNICIPAIS_82, 
                style: style_ESTRADAS_RURAIS_MUNICIPAIS_82,
                popuplayertitle: 'ESTRADAS_RURAIS_MUNICIPAIS',
                interactive: true,
                title: '<img src="styles/legend/ESTRADAS_RURAIS_MUNICIPAIS_82.png" /> ESTRADAS_RURAIS_MUNICIPAIS'
            });
var format_IMOVEL_PUBLICO_83 = new ol.format.GeoJSON();
var features_IMOVEL_PUBLICO_83 = format_IMOVEL_PUBLICO_83.readFeatures(json_IMOVEL_PUBLICO_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IMOVEL_PUBLICO_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMOVEL_PUBLICO_83.addFeatures(features_IMOVEL_PUBLICO_83);
var lyr_IMOVEL_PUBLICO_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IMOVEL_PUBLICO_83, 
                style: style_IMOVEL_PUBLICO_83,
                popuplayertitle: 'IMOVEL_PUBLICO',
                interactive: true,
                title: '<img src="styles/legend/IMOVEL_PUBLICO_83.png" /> IMOVEL_PUBLICO'
            });
var format_IMOVEL_PRIVADO_URBANO_84 = new ol.format.GeoJSON();
var features_IMOVEL_PRIVADO_URBANO_84 = format_IMOVEL_PRIVADO_URBANO_84.readFeatures(json_IMOVEL_PRIVADO_URBANO_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IMOVEL_PRIVADO_URBANO_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMOVEL_PRIVADO_URBANO_84.addFeatures(features_IMOVEL_PRIVADO_URBANO_84);
var lyr_IMOVEL_PRIVADO_URBANO_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IMOVEL_PRIVADO_URBANO_84, 
                style: style_IMOVEL_PRIVADO_URBANO_84,
                popuplayertitle: 'IMOVEL_PRIVADO_URBANO',
                interactive: true,
                title: '<img src="styles/legend/IMOVEL_PRIVADO_URBANO_84.png" /> IMOVEL_PRIVADO_URBANO'
            });
var format_IMOVEL_PRIVADO_URBANO_85 = new ol.format.GeoJSON();
var features_IMOVEL_PRIVADO_URBANO_85 = format_IMOVEL_PRIVADO_URBANO_85.readFeatures(json_IMOVEL_PRIVADO_URBANO_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IMOVEL_PRIVADO_URBANO_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMOVEL_PRIVADO_URBANO_85.addFeatures(features_IMOVEL_PRIVADO_URBANO_85);
var lyr_IMOVEL_PRIVADO_URBANO_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IMOVEL_PRIVADO_URBANO_85, 
                style: style_IMOVEL_PRIVADO_URBANO_85,
                popuplayertitle: 'IMOVEL_PRIVADO_URBANO',
                interactive: true,
                title: '<img src="styles/legend/IMOVEL_PRIVADO_URBANO_85.png" /> IMOVEL_PRIVADO_URBANO'
            });
var format_IMOVEL_PRIVADO_RURAL_86 = new ol.format.GeoJSON();
var features_IMOVEL_PRIVADO_RURAL_86 = format_IMOVEL_PRIVADO_RURAL_86.readFeatures(json_IMOVEL_PRIVADO_RURAL_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IMOVEL_PRIVADO_RURAL_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMOVEL_PRIVADO_RURAL_86.addFeatures(features_IMOVEL_PRIVADO_RURAL_86);
var lyr_IMOVEL_PRIVADO_RURAL_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IMOVEL_PRIVADO_RURAL_86, 
                style: style_IMOVEL_PRIVADO_RURAL_86,
                popuplayertitle: 'IMOVEL_PRIVADO_RURAL',
                interactive: true,
                title: '<img src="styles/legend/IMOVEL_PRIVADO_RURAL_86.png" /> IMOVEL_PRIVADO_RURAL'
            });
var format_IMOVEL_PRIVADO_RURAL_87 = new ol.format.GeoJSON();
var features_IMOVEL_PRIVADO_RURAL_87 = format_IMOVEL_PRIVADO_RURAL_87.readFeatures(json_IMOVEL_PRIVADO_RURAL_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IMOVEL_PRIVADO_RURAL_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMOVEL_PRIVADO_RURAL_87.addFeatures(features_IMOVEL_PRIVADO_RURAL_87);
var lyr_IMOVEL_PRIVADO_RURAL_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IMOVEL_PRIVADO_RURAL_87, 
                style: style_IMOVEL_PRIVADO_RURAL_87,
                popuplayertitle: 'IMOVEL_PRIVADO_RURAL',
                interactive: true,
                title: '<img src="styles/legend/IMOVEL_PRIVADO_RURAL_87.png" /> IMOVEL_PRIVADO_RURAL'
            });
var format_PARQUE_DOS_TRABALHADORES_88 = new ol.format.GeoJSON();
var features_PARQUE_DOS_TRABALHADORES_88 = format_PARQUE_DOS_TRABALHADORES_88.readFeatures(json_PARQUE_DOS_TRABALHADORES_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_DOS_TRABALHADORES_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_DOS_TRABALHADORES_88.addFeatures(features_PARQUE_DOS_TRABALHADORES_88);
var lyr_PARQUE_DOS_TRABALHADORES_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_DOS_TRABALHADORES_88, 
                style: style_PARQUE_DOS_TRABALHADORES_88,
                popuplayertitle: 'PARQUE_DOS_TRABALHADORES',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_DOS_TRABALHADORES_88.png" /> PARQUE_DOS_TRABALHADORES'
            });
var format_PARQUE_DOS_TRABALHADORES_89 = new ol.format.GeoJSON();
var features_PARQUE_DOS_TRABALHADORES_89 = format_PARQUE_DOS_TRABALHADORES_89.readFeatures(json_PARQUE_DOS_TRABALHADORES_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_DOS_TRABALHADORES_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_DOS_TRABALHADORES_89.addFeatures(features_PARQUE_DOS_TRABALHADORES_89);
var lyr_PARQUE_DOS_TRABALHADORES_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_DOS_TRABALHADORES_89, 
                style: style_PARQUE_DOS_TRABALHADORES_89,
                popuplayertitle: 'PARQUE_DOS_TRABALHADORES',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_DOS_TRABALHADORES_89.png" /> PARQUE_DOS_TRABALHADORES'
            });
var format_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_90 = new ol.format.GeoJSON();
var features_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_90 = format_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_90.readFeatures(json_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_90.addFeatures(features_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_90);
var lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_90, 
                style: style_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_90,
                popuplayertitle: 'PARQUE_DE_EXPOSICOES_FERNANDO_COSTA',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_90.png" /> PARQUE_DE_EXPOSICOES_FERNANDO_COSTA'
            });
var format_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_91 = new ol.format.GeoJSON();
var features_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_91 = format_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_91.readFeatures(json_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_91.addFeatures(features_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_91);
var lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_91, 
                style: style_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_91,
                popuplayertitle: 'PARQUE_DE_EXPOSICOES_FERNANDO_COSTA',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_91.png" /> PARQUE_DE_EXPOSICOES_FERNANDO_COSTA'
            });
var format_PARQUE_CAXAMBU_92 = new ol.format.GeoJSON();
var features_PARQUE_CAXAMBU_92 = format_PARQUE_CAXAMBU_92.readFeatures(json_PARQUE_CAXAMBU_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_CAXAMBU_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_CAXAMBU_92.addFeatures(features_PARQUE_CAXAMBU_92);
var lyr_PARQUE_CAXAMBU_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_CAXAMBU_92, 
                style: style_PARQUE_CAXAMBU_92,
                popuplayertitle: 'PARQUE_CAXAMBU',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_CAXAMBU_92.png" /> PARQUE_CAXAMBU'
            });
var format_PARQUE_CAXAMBU_93 = new ol.format.GeoJSON();
var features_PARQUE_CAXAMBU_93 = format_PARQUE_CAXAMBU_93.readFeatures(json_PARQUE_CAXAMBU_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_CAXAMBU_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_CAXAMBU_93.addFeatures(features_PARQUE_CAXAMBU_93);
var lyr_PARQUE_CAXAMBU_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_CAXAMBU_93, 
                style: style_PARQUE_CAXAMBU_93,
                popuplayertitle: 'PARQUE_CAXAMBU',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_CAXAMBU_93.png" /> PARQUE_CAXAMBU'
            });
var format_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_94 = new ol.format.GeoJSON();
var features_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_94 = format_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_94.readFeatures(json_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_94.addFeatures(features_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_94);
var lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_94, 
                style: style_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_94,
                popuplayertitle: 'PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_94.png" /> PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO'
            });
var format_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_95 = new ol.format.GeoJSON();
var features_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_95 = format_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_95.readFeatures(json_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_95.addFeatures(features_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_95);
var lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_95, 
                style: style_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_95,
                popuplayertitle: 'PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_95.png" /> PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO'
            });
var format_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_96 = new ol.format.GeoJSON();
var features_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_96 = format_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_96.readFeatures(json_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_96.addFeatures(features_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_96);
var lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_96, 
                style: style_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_96,
                popuplayertitle: 'PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_96.png" /> PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA'
            });
var format_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_97 = new ol.format.GeoJSON();
var features_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_97 = format_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_97.readFeatures(json_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_97.addFeatures(features_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_97);
var lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_97, 
                style: style_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_97,
                popuplayertitle: 'PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_97.png" /> PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA'
            });
var format_JARDIM_ZOOBOTANICO_98 = new ol.format.GeoJSON();
var features_JARDIM_ZOOBOTANICO_98 = format_JARDIM_ZOOBOTANICO_98.readFeatures(json_JARDIM_ZOOBOTANICO_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JARDIM_ZOOBOTANICO_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARDIM_ZOOBOTANICO_98.addFeatures(features_JARDIM_ZOOBOTANICO_98);
var lyr_JARDIM_ZOOBOTANICO_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARDIM_ZOOBOTANICO_98, 
                style: style_JARDIM_ZOOBOTANICO_98,
                popuplayertitle: 'JARDIM_ZOOBOTANICO',
                interactive: true,
                title: '<img src="styles/legend/JARDIM_ZOOBOTANICO_98.png" /> JARDIM_ZOOBOTANICO'
            });
var format_JARDIM_ZOOBOTANICO_99 = new ol.format.GeoJSON();
var features_JARDIM_ZOOBOTANICO_99 = format_JARDIM_ZOOBOTANICO_99.readFeatures(json_JARDIM_ZOOBOTANICO_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JARDIM_ZOOBOTANICO_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARDIM_ZOOBOTANICO_99.addFeatures(features_JARDIM_ZOOBOTANICO_99);
var lyr_JARDIM_ZOOBOTANICO_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARDIM_ZOOBOTANICO_99, 
                style: style_JARDIM_ZOOBOTANICO_99,
                popuplayertitle: 'JARDIM_ZOOBOTANICO',
                interactive: true,
                title: '<img src="styles/legend/JARDIM_ZOOBOTANICO_99.png" /> JARDIM_ZOOBOTANICO'
            });
var format_COMPLEXO_POLIESPORTIVO_100 = new ol.format.GeoJSON();
var features_COMPLEXO_POLIESPORTIVO_100 = format_COMPLEXO_POLIESPORTIVO_100.readFeatures(json_COMPLEXO_POLIESPORTIVO_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_COMPLEXO_POLIESPORTIVO_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMPLEXO_POLIESPORTIVO_100.addFeatures(features_COMPLEXO_POLIESPORTIVO_100);
var lyr_COMPLEXO_POLIESPORTIVO_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMPLEXO_POLIESPORTIVO_100, 
                style: style_COMPLEXO_POLIESPORTIVO_100,
                popuplayertitle: 'COMPLEXO_POLIESPORTIVO',
                interactive: true,
                title: '<img src="styles/legend/COMPLEXO_POLIESPORTIVO_100.png" /> COMPLEXO_POLIESPORTIVO'
            });
var format_COMPLEXO_POLIESPORTIVO_101 = new ol.format.GeoJSON();
var features_COMPLEXO_POLIESPORTIVO_101 = format_COMPLEXO_POLIESPORTIVO_101.readFeatures(json_COMPLEXO_POLIESPORTIVO_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_COMPLEXO_POLIESPORTIVO_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMPLEXO_POLIESPORTIVO_101.addFeatures(features_COMPLEXO_POLIESPORTIVO_101);
var lyr_COMPLEXO_POLIESPORTIVO_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMPLEXO_POLIESPORTIVO_101, 
                style: style_COMPLEXO_POLIESPORTIVO_101,
                popuplayertitle: 'COMPLEXO_POLIESPORTIVO',
                interactive: true,
                title: '<img src="styles/legend/COMPLEXO_POLIESPORTIVO_101.png" /> COMPLEXO_POLIESPORTIVO'
            });
var format_UBS_SANTA_TEREZINHA_102 = new ol.format.GeoJSON();
var features_UBS_SANTA_TEREZINHA_102 = format_UBS_SANTA_TEREZINHA_102.readFeatures(json_UBS_SANTA_TEREZINHA_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UBS_SANTA_TEREZINHA_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBS_SANTA_TEREZINHA_102.addFeatures(features_UBS_SANTA_TEREZINHA_102);
var lyr_UBS_SANTA_TEREZINHA_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBS_SANTA_TEREZINHA_102, 
                style: style_UBS_SANTA_TEREZINHA_102,
                popuplayertitle: 'UBS_SANTA_TEREZINHA',
                interactive: true,
                title: '<img src="styles/legend/UBS_SANTA_TEREZINHA_102.png" /> UBS_SANTA_TEREZINHA'
            });
var format_UBS_SANTA_BARBARA_103 = new ol.format.GeoJSON();
var features_UBS_SANTA_BARBARA_103 = format_UBS_SANTA_BARBARA_103.readFeatures(json_UBS_SANTA_BARBARA_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UBS_SANTA_BARBARA_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBS_SANTA_BARBARA_103.addFeatures(features_UBS_SANTA_BARBARA_103);
var lyr_UBS_SANTA_BARBARA_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBS_SANTA_BARBARA_103, 
                style: style_UBS_SANTA_BARBARA_103,
                popuplayertitle: 'UBS_SANTA_BARBARA',
                interactive: true,
                title: '<img src="styles/legend/UBS_SANTA_BARBARA_103.png" /> UBS_SANTA_BARBARA'
            });
var format_UBS_PERES_ELIAS_104 = new ol.format.GeoJSON();
var features_UBS_PERES_ELIAS_104 = format_UBS_PERES_ELIAS_104.readFeatures(json_UBS_PERES_ELIAS_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UBS_PERES_ELIAS_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBS_PERES_ELIAS_104.addFeatures(features_UBS_PERES_ELIAS_104);
var lyr_UBS_PERES_ELIAS_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBS_PERES_ELIAS_104, 
                style: style_UBS_PERES_ELIAS_104,
                popuplayertitle: 'UBS_PERES_ELIAS',
                interactive: true,
                title: '<img src="styles/legend/UBS_PERES_ELIAS_104.png" /> UBS_PERES_ELIAS'
            });
var format_UBS_PARQUE_HORTO_105 = new ol.format.GeoJSON();
var features_UBS_PARQUE_HORTO_105 = format_UBS_PARQUE_HORTO_105.readFeatures(json_UBS_PARQUE_HORTO_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UBS_PARQUE_HORTO_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBS_PARQUE_HORTO_105.addFeatures(features_UBS_PARQUE_HORTO_105);
var lyr_UBS_PARQUE_HORTO_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBS_PARQUE_HORTO_105, 
                style: style_UBS_PARQUE_HORTO_105,
                popuplayertitle: 'UBS_PARQUE_HORTO',
                interactive: true,
                title: '<img src="styles/legend/UBS_PARQUE_HORTO_105.png" /> UBS_PARQUE_HORTO'
            });
var format_UBS_JARDIM_PALMA_106 = new ol.format.GeoJSON();
var features_UBS_JARDIM_PALMA_106 = format_UBS_JARDIM_PALMA_106.readFeatures(json_UBS_JARDIM_PALMA_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UBS_JARDIM_PALMA_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBS_JARDIM_PALMA_106.addFeatures(features_UBS_JARDIM_PALMA_106);
var lyr_UBS_JARDIM_PALMA_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBS_JARDIM_PALMA_106, 
                style: style_UBS_JARDIM_PALMA_106,
                popuplayertitle: 'UBS_JARDIM_PALMA',
                interactive: true,
                title: '<img src="styles/legend/UBS_JARDIM_PALMA_106.png" /> UBS_JARDIM_PALMA'
            });
var format_REVITALIZACAO_ESTACAO_FERROVIARIA_107 = new ol.format.GeoJSON();
var features_REVITALIZACAO_ESTACAO_FERROVIARIA_107 = format_REVITALIZACAO_ESTACAO_FERROVIARIA_107.readFeatures(json_REVITALIZACAO_ESTACAO_FERROVIARIA_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REVITALIZACAO_ESTACAO_FERROVIARIA_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REVITALIZACAO_ESTACAO_FERROVIARIA_107.addFeatures(features_REVITALIZACAO_ESTACAO_FERROVIARIA_107);
var lyr_REVITALIZACAO_ESTACAO_FERROVIARIA_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REVITALIZACAO_ESTACAO_FERROVIARIA_107, 
                style: style_REVITALIZACAO_ESTACAO_FERROVIARIA_107,
                popuplayertitle: 'REVITALIZACAO_ESTACAO_FERROVIARIA',
                interactive: true,
                title: '<img src="styles/legend/REVITALIZACAO_ESTACAO_FERROVIARIA_107.png" /> REVITALIZACAO_ESTACAO_FERROVIARIA'
            });
var format_REFORMA_CRAS_OESTE_108 = new ol.format.GeoJSON();
var features_REFORMA_CRAS_OESTE_108 = format_REFORMA_CRAS_OESTE_108.readFeatures(json_REFORMA_CRAS_OESTE_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REFORMA_CRAS_OESTE_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REFORMA_CRAS_OESTE_108.addFeatures(features_REFORMA_CRAS_OESTE_108);
var lyr_REFORMA_CRAS_OESTE_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REFORMA_CRAS_OESTE_108, 
                style: style_REFORMA_CRAS_OESTE_108,
                popuplayertitle: 'REFORMA_CRAS_OESTE',
                interactive: true,
                title: '<img src="styles/legend/REFORMA_CRAS_OESTE_108.png" /> REFORMA_CRAS_OESTE'
            });
var format_REFORMA_CRAS_NORTE_109 = new ol.format.GeoJSON();
var features_REFORMA_CRAS_NORTE_109 = format_REFORMA_CRAS_NORTE_109.readFeatures(json_REFORMA_CRAS_NORTE_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REFORMA_CRAS_NORTE_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REFORMA_CRAS_NORTE_109.addFeatures(features_REFORMA_CRAS_NORTE_109);
var lyr_REFORMA_CRAS_NORTE_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REFORMA_CRAS_NORTE_109, 
                style: style_REFORMA_CRAS_NORTE_109,
                popuplayertitle: 'REFORMA_CRAS_NORTE',
                interactive: true,
                title: '<img src="styles/legend/REFORMA_CRAS_NORTE_109.png" /> REFORMA_CRAS_NORTE'
            });
var format_REFORCO_ESTRUTURAL_CHAMPAGNAT_110 = new ol.format.GeoJSON();
var features_REFORCO_ESTRUTURAL_CHAMPAGNAT_110 = format_REFORCO_ESTRUTURAL_CHAMPAGNAT_110.readFeatures(json_REFORCO_ESTRUTURAL_CHAMPAGNAT_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REFORCO_ESTRUTURAL_CHAMPAGNAT_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REFORCO_ESTRUTURAL_CHAMPAGNAT_110.addFeatures(features_REFORCO_ESTRUTURAL_CHAMPAGNAT_110);
var lyr_REFORCO_ESTRUTURAL_CHAMPAGNAT_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REFORCO_ESTRUTURAL_CHAMPAGNAT_110, 
                style: style_REFORCO_ESTRUTURAL_CHAMPAGNAT_110,
                popuplayertitle: 'REFORCO_ESTRUTURAL_CHAMPAGNAT',
                interactive: true,
                title: '<img src="styles/legend/REFORCO_ESTRUTURAL_CHAMPAGNAT_110.png" /> REFORCO_ESTRUTURAL_CHAMPAGNAT'
            });
var format_RECAPEAMENTO_JARDIM_MARTINS_111 = new ol.format.GeoJSON();
var features_RECAPEAMENTO_JARDIM_MARTINS_111 = format_RECAPEAMENTO_JARDIM_MARTINS_111.readFeatures(json_RECAPEAMENTO_JARDIM_MARTINS_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RECAPEAMENTO_JARDIM_MARTINS_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RECAPEAMENTO_JARDIM_MARTINS_111.addFeatures(features_RECAPEAMENTO_JARDIM_MARTINS_111);
var lyr_RECAPEAMENTO_JARDIM_MARTINS_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RECAPEAMENTO_JARDIM_MARTINS_111, 
                style: style_RECAPEAMENTO_JARDIM_MARTINS_111,
                popuplayertitle: 'RECAPEAMENTO_JARDIM_MARTINS',
                interactive: true,
                title: '<img src="styles/legend/RECAPEAMENTO_JARDIM_MARTINS_111.png" /> RECAPEAMENTO_JARDIM_MARTINS'
            });
var format_PRONTO_SOCORRO_ALVARO_AZZUZ_112 = new ol.format.GeoJSON();
var features_PRONTO_SOCORRO_ALVARO_AZZUZ_112 = format_PRONTO_SOCORRO_ALVARO_AZZUZ_112.readFeatures(json_PRONTO_SOCORRO_ALVARO_AZZUZ_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PRONTO_SOCORRO_ALVARO_AZZUZ_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRONTO_SOCORRO_ALVARO_AZZUZ_112.addFeatures(features_PRONTO_SOCORRO_ALVARO_AZZUZ_112);
var lyr_PRONTO_SOCORRO_ALVARO_AZZUZ_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRONTO_SOCORRO_ALVARO_AZZUZ_112, 
                style: style_PRONTO_SOCORRO_ALVARO_AZZUZ_112,
                popuplayertitle: 'PRONTO_SOCORRO_ALVARO_AZZUZ',
                interactive: true,
                title: '<img src="styles/legend/PRONTO_SOCORRO_ALVARO_AZZUZ_112.png" /> PRONTO_SOCORRO_ALVARO_AZZUZ'
            });
var format_POLICLINICA_113 = new ol.format.GeoJSON();
var features_POLICLINICA_113 = format_POLICLINICA_113.readFeatures(json_POLICLINICA_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_POLICLINICA_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLICLINICA_113.addFeatures(features_POLICLINICA_113);
var lyr_POLICLINICA_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLICLINICA_113, 
                style: style_POLICLINICA_113,
                popuplayertitle: 'POLICLINICA',
                interactive: true,
                title: '<img src="styles/legend/POLICLINICA_113.png" /> POLICLINICA'
            });
var format_NOVO_NGA_114 = new ol.format.GeoJSON();
var features_NOVO_NGA_114 = format_NOVO_NGA_114.readFeatures(json_NOVO_NGA_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_NOVO_NGA_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NOVO_NGA_114.addFeatures(features_NOVO_NGA_114);
var lyr_NOVO_NGA_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NOVO_NGA_114, 
                style: style_NOVO_NGA_114,
                popuplayertitle: 'NOVO_NGA',
                interactive: true,
                title: '<img src="styles/legend/NOVO_NGA_114.png" /> NOVO_NGA'
            });
var format_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_115 = new ol.format.GeoJSON();
var features_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_115 = format_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_115.readFeatures(json_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_115.addFeatures(features_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_115);
var lyr_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_115, 
                style: style_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_115,
                popuplayertitle: 'ESTABILIZACAO_TALUDE_JD_BRASILANDIA',
                interactive: true,
                title: '<img src="styles/legend/ESTABILIZACAO_TALUDE_JD_BRASILANDIA_115.png" /> ESTABILIZACAO_TALUDE_JD_BRASILANDIA'
            });
var format_ESCOLA_JOAO_LIPORONI_116 = new ol.format.GeoJSON();
var features_ESCOLA_JOAO_LIPORONI_116 = format_ESCOLA_JOAO_LIPORONI_116.readFeatures(json_ESCOLA_JOAO_LIPORONI_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ESCOLA_JOAO_LIPORONI_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESCOLA_JOAO_LIPORONI_116.addFeatures(features_ESCOLA_JOAO_LIPORONI_116);
var lyr_ESCOLA_JOAO_LIPORONI_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESCOLA_JOAO_LIPORONI_116, 
                style: style_ESCOLA_JOAO_LIPORONI_116,
                popuplayertitle: 'ESCOLA_JOAO_LIPORONI',
                interactive: true,
                title: '<img src="styles/legend/ESCOLA_JOAO_LIPORONI_116.png" /> ESCOLA_JOAO_LIPORONI'
            });
var format_DRENAGEM_CORREGO_CUBATAO_117 = new ol.format.GeoJSON();
var features_DRENAGEM_CORREGO_CUBATAO_117 = format_DRENAGEM_CORREGO_CUBATAO_117.readFeatures(json_DRENAGEM_CORREGO_CUBATAO_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_CORREGO_CUBATAO_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_CORREGO_CUBATAO_117.addFeatures(features_DRENAGEM_CORREGO_CUBATAO_117);
var lyr_DRENAGEM_CORREGO_CUBATAO_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_CORREGO_CUBATAO_117, 
                style: style_DRENAGEM_CORREGO_CUBATAO_117,
                popuplayertitle: 'DRENAGEM_CORREGO_CUBATAO',
                interactive: true,
                title: '<img src="styles/legend/DRENAGEM_CORREGO_CUBATAO_117.png" /> DRENAGEM_CORREGO_CUBATAO'
            });
var format_DRENAGEM_CORREGO_BRAGRES_118 = new ol.format.GeoJSON();
var features_DRENAGEM_CORREGO_BRAGRES_118 = format_DRENAGEM_CORREGO_BRAGRES_118.readFeatures(json_DRENAGEM_CORREGO_BRAGRES_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_CORREGO_BRAGRES_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_CORREGO_BRAGRES_118.addFeatures(features_DRENAGEM_CORREGO_BRAGRES_118);
var lyr_DRENAGEM_CORREGO_BRAGRES_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_CORREGO_BRAGRES_118, 
                style: style_DRENAGEM_CORREGO_BRAGRES_118,
                popuplayertitle: 'DRENAGEM_CORREGO_BRAGRES',
                interactive: true,
                title: '<img src="styles/legend/DRENAGEM_CORREGO_BRAGRES_118.png" /> DRENAGEM_CORREGO_BRAGRES'
            });
var format_DRENAGEM_CANAL_JD_PALMEIRAS_119 = new ol.format.GeoJSON();
var features_DRENAGEM_CANAL_JD_PALMEIRAS_119 = format_DRENAGEM_CANAL_JD_PALMEIRAS_119.readFeatures(json_DRENAGEM_CANAL_JD_PALMEIRAS_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_CANAL_JD_PALMEIRAS_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_CANAL_JD_PALMEIRAS_119.addFeatures(features_DRENAGEM_CANAL_JD_PALMEIRAS_119);
var lyr_DRENAGEM_CANAL_JD_PALMEIRAS_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_CANAL_JD_PALMEIRAS_119, 
                style: style_DRENAGEM_CANAL_JD_PALMEIRAS_119,
                popuplayertitle: 'DRENAGEM_CANAL_JD_PALMEIRAS',
                interactive: true,
                title: '<img src="styles/legend/DRENAGEM_CANAL_JD_PALMEIRAS_119.png" /> DRENAGEM_CANAL_JD_PALMEIRAS'
            });
var format_CRECHE_SAMEL_PARK_120 = new ol.format.GeoJSON();
var features_CRECHE_SAMEL_PARK_120 = format_CRECHE_SAMEL_PARK_120.readFeatures(json_CRECHE_SAMEL_PARK_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CRECHE_SAMEL_PARK_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRECHE_SAMEL_PARK_120.addFeatures(features_CRECHE_SAMEL_PARK_120);
var lyr_CRECHE_SAMEL_PARK_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRECHE_SAMEL_PARK_120, 
                style: style_CRECHE_SAMEL_PARK_120,
                popuplayertitle: 'CRECHE_SAMEL_PARK',
                interactive: true,
                title: '<img src="styles/legend/CRECHE_SAMEL_PARK_120.png" /> CRECHE_SAMEL_PARK'
            });
var format_CORPO_BAMBEIROS_121 = new ol.format.GeoJSON();
var features_CORPO_BAMBEIROS_121 = format_CORPO_BAMBEIROS_121.readFeatures(json_CORPO_BAMBEIROS_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CORPO_BAMBEIROS_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORPO_BAMBEIROS_121.addFeatures(features_CORPO_BAMBEIROS_121);
var lyr_CORPO_BAMBEIROS_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORPO_BAMBEIROS_121, 
                style: style_CORPO_BAMBEIROS_121,
                popuplayertitle: 'CORPO_BAMBEIROS',
                interactive: true,
                title: '<img src="styles/legend/CORPO_BAMBEIROS_121.png" /> CORPO_BAMBEIROS'
            });
var format_CONTENCAO_VIARIA_122 = new ol.format.GeoJSON();
var features_CONTENCAO_VIARIA_122 = format_CONTENCAO_VIARIA_122.readFeatures(json_CONTENCAO_VIARIA_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CONTENCAO_VIARIA_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTENCAO_VIARIA_122.addFeatures(features_CONTENCAO_VIARIA_122);
var lyr_CONTENCAO_VIARIA_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTENCAO_VIARIA_122, 
                style: style_CONTENCAO_VIARIA_122,
                popuplayertitle: 'CONTENCAO_VIARIA',
                interactive: true,
                title: '<img src="styles/legend/CONTENCAO_VIARIA_122.png" /> CONTENCAO_VIARIA'
            });
var format_CONSTRUCAO_CEPEL_SAO_JOSE_123 = new ol.format.GeoJSON();
var features_CONSTRUCAO_CEPEL_SAO_JOSE_123 = format_CONSTRUCAO_CEPEL_SAO_JOSE_123.readFeatures(json_CONSTRUCAO_CEPEL_SAO_JOSE_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CONSTRUCAO_CEPEL_SAO_JOSE_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONSTRUCAO_CEPEL_SAO_JOSE_123.addFeatures(features_CONSTRUCAO_CEPEL_SAO_JOSE_123);
var lyr_CONSTRUCAO_CEPEL_SAO_JOSE_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONSTRUCAO_CEPEL_SAO_JOSE_123, 
                style: style_CONSTRUCAO_CEPEL_SAO_JOSE_123,
                popuplayertitle: 'CONSTRUCAO_CEPEL_SAO_JOSE',
                interactive: true,
                title: '<img src="styles/legend/CONSTRUCAO_CEPEL_SAO_JOSE_123.png" /> CONSTRUCAO_CEPEL_SAO_JOSE'
            });
var format_CONSTRUCAO_CEPEL_JD_CAMBUI_124 = new ol.format.GeoJSON();
var features_CONSTRUCAO_CEPEL_JD_CAMBUI_124 = format_CONSTRUCAO_CEPEL_JD_CAMBUI_124.readFeatures(json_CONSTRUCAO_CEPEL_JD_CAMBUI_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CONSTRUCAO_CEPEL_JD_CAMBUI_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONSTRUCAO_CEPEL_JD_CAMBUI_124.addFeatures(features_CONSTRUCAO_CEPEL_JD_CAMBUI_124);
var lyr_CONSTRUCAO_CEPEL_JD_CAMBUI_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONSTRUCAO_CEPEL_JD_CAMBUI_124, 
                style: style_CONSTRUCAO_CEPEL_JD_CAMBUI_124,
                popuplayertitle: 'CONSTRUCAO_CEPEL_JD_CAMBUI',
                interactive: true,
                title: '<img src="styles/legend/CONSTRUCAO_CEPEL_JD_CAMBUI_124.png" /> CONSTRUCAO_CEPEL_JD_CAMBUI'
            });
var format_CONSTRUCAO_CAPS_INFANTIL_125 = new ol.format.GeoJSON();
var features_CONSTRUCAO_CAPS_INFANTIL_125 = format_CONSTRUCAO_CAPS_INFANTIL_125.readFeatures(json_CONSTRUCAO_CAPS_INFANTIL_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CONSTRUCAO_CAPS_INFANTIL_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONSTRUCAO_CAPS_INFANTIL_125.addFeatures(features_CONSTRUCAO_CAPS_INFANTIL_125);
var lyr_CONSTRUCAO_CAPS_INFANTIL_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONSTRUCAO_CAPS_INFANTIL_125, 
                style: style_CONSTRUCAO_CAPS_INFANTIL_125,
                popuplayertitle: 'CONSTRUCAO_CAPS_INFANTIL',
                interactive: true,
                title: '<img src="styles/legend/CONSTRUCAO_CAPS_INFANTIL_125.png" /> CONSTRUCAO_CAPS_INFANTIL'
            });
var format_AREA_LAZER_PARQUE_ESMERALDA_126 = new ol.format.GeoJSON();
var features_AREA_LAZER_PARQUE_ESMERALDA_126 = format_AREA_LAZER_PARQUE_ESMERALDA_126.readFeatures(json_AREA_LAZER_PARQUE_ESMERALDA_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_LAZER_PARQUE_ESMERALDA_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_LAZER_PARQUE_ESMERALDA_126.addFeatures(features_AREA_LAZER_PARQUE_ESMERALDA_126);
var lyr_AREA_LAZER_PARQUE_ESMERALDA_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_LAZER_PARQUE_ESMERALDA_126, 
                style: style_AREA_LAZER_PARQUE_ESMERALDA_126,
                popuplayertitle: 'AREA_LAZER_PARQUE_ESMERALDA',
                interactive: true,
                title: '<img src="styles/legend/AREA_LAZER_PARQUE_ESMERALDA_126.png" /> AREA_LAZER_PARQUE_ESMERALDA'
            });
var format_AREA_LAZER_PARQUE_CONTINENTAL_127 = new ol.format.GeoJSON();
var features_AREA_LAZER_PARQUE_CONTINENTAL_127 = format_AREA_LAZER_PARQUE_CONTINENTAL_127.readFeatures(json_AREA_LAZER_PARQUE_CONTINENTAL_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_LAZER_PARQUE_CONTINENTAL_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_LAZER_PARQUE_CONTINENTAL_127.addFeatures(features_AREA_LAZER_PARQUE_CONTINENTAL_127);
var lyr_AREA_LAZER_PARQUE_CONTINENTAL_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_LAZER_PARQUE_CONTINENTAL_127, 
                style: style_AREA_LAZER_PARQUE_CONTINENTAL_127,
                popuplayertitle: 'AREA_LAZER_PARQUE_CONTINENTAL',
                interactive: true,
                title: '<img src="styles/legend/AREA_LAZER_PARQUE_CONTINENTAL_127.png" /> AREA_LAZER_PARQUE_CONTINENTAL'
            });
var format_AREA_LAZER_JARDIM_PORTINARI_128 = new ol.format.GeoJSON();
var features_AREA_LAZER_JARDIM_PORTINARI_128 = format_AREA_LAZER_JARDIM_PORTINARI_128.readFeatures(json_AREA_LAZER_JARDIM_PORTINARI_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_LAZER_JARDIM_PORTINARI_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_LAZER_JARDIM_PORTINARI_128.addFeatures(features_AREA_LAZER_JARDIM_PORTINARI_128);
var lyr_AREA_LAZER_JARDIM_PORTINARI_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_LAZER_JARDIM_PORTINARI_128, 
                style: style_AREA_LAZER_JARDIM_PORTINARI_128,
                popuplayertitle: 'AREA_LAZER_JARDIM_PORTINARI',
                interactive: true,
                title: '<img src="styles/legend/AREA_LAZER_JARDIM_PORTINARI_128.png" /> AREA_LAZER_JARDIM_PORTINARI'
            });
var format_OBRAS_PUBLICAS_129 = new ol.format.GeoJSON();
var features_OBRAS_PUBLICAS_129 = format_OBRAS_PUBLICAS_129.readFeatures(json_OBRAS_PUBLICAS_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_OBRAS_PUBLICAS_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OBRAS_PUBLICAS_129.addFeatures(features_OBRAS_PUBLICAS_129);
var lyr_OBRAS_PUBLICAS_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OBRAS_PUBLICAS_129, 
                style: style_OBRAS_PUBLICAS_129,
                popuplayertitle: 'OBRAS_PUBLICAS',
                interactive: true,
                title: '<img src="styles/legend/OBRAS_PUBLICAS_129.png" /> OBRAS_PUBLICAS'
            });
var format_REGULARIZADO_130 = new ol.format.GeoJSON();
var features_REGULARIZADO_130 = format_REGULARIZADO_130.readFeatures(json_REGULARIZADO_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REGULARIZADO_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGULARIZADO_130.addFeatures(features_REGULARIZADO_130);
var lyr_REGULARIZADO_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGULARIZADO_130, 
                style: style_REGULARIZADO_130,
                popuplayertitle: 'REGULARIZADO',
                interactive: true,
                title: '<img src="styles/legend/REGULARIZADO_130.png" /> REGULARIZADO'
            });
var format_REGULARIZADO_131 = new ol.format.GeoJSON();
var features_REGULARIZADO_131 = format_REGULARIZADO_131.readFeatures(json_REGULARIZADO_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REGULARIZADO_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGULARIZADO_131.addFeatures(features_REGULARIZADO_131);
var lyr_REGULARIZADO_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGULARIZADO_131, 
                style: style_REGULARIZADO_131,
                popuplayertitle: 'REGULARIZADO',
                interactive: true,
                title: '<img src="styles/legend/REGULARIZADO_131.png" /> REGULARIZADO'
            });
var format_Vivenna_132 = new ol.format.GeoJSON();
var features_Vivenna_132 = format_Vivenna_132.readFeatures(json_Vivenna_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Vivenna_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vivenna_132.addFeatures(features_Vivenna_132);
var lyr_Vivenna_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vivenna_132, 
                style: style_Vivenna_132,
                popuplayertitle: 'Vivenna',
                interactive: true,
    title: 'Vivenna<br />\
    <img src="styles/legend/Vivenna_132_0.png" /> APP<br />\
    <img src="styles/legend/Vivenna_132_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Vivenna_132_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Vivenna_132_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Vivenna_132_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Vivenna_132_5.png" /> PASSEIO<br />\
    <img src="styles/legend/Vivenna_132_6.png" /> RUAS<br />\
    <img src="styles/legend/Vivenna_132_7.png" /> VIELA<br />' });
var format_Vivenna_133 = new ol.format.GeoJSON();
var features_Vivenna_133 = format_Vivenna_133.readFeatures(json_Vivenna_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Vivenna_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vivenna_133.addFeatures(features_Vivenna_133);
var lyr_Vivenna_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vivenna_133, 
                style: style_Vivenna_133,
                popuplayertitle: 'Vivenna',
                interactive: true,
                title: '<img src="styles/legend/Vivenna_133.png" /> Vivenna'
            });
var format_VittaSoVicente_134 = new ol.format.GeoJSON();
var features_VittaSoVicente_134 = format_VittaSoVicente_134.readFeatures(json_VittaSoVicente_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaSoVicente_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaSoVicente_134.addFeatures(features_VittaSoVicente_134);
var lyr_VittaSoVicente_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaSoVicente_134, 
                style: style_VittaSoVicente_134,
                popuplayertitle: 'Vitta São Vicente',
                interactive: true,
    title: 'Vitta São Vicente<br />\
    <img src="styles/legend/VittaSoVicente_134_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/VittaSoVicente_134_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/VittaSoVicente_134_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/VittaSoVicente_134_3.png" /> PASSEIO<br />\
    <img src="styles/legend/VittaSoVicente_134_4.png" /> RUAS<br />\
    <img src="styles/legend/VittaSoVicente_134_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_VittaSoVicente_135 = new ol.format.GeoJSON();
var features_VittaSoVicente_135 = format_VittaSoVicente_135.readFeatures(json_VittaSoVicente_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaSoVicente_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaSoVicente_135.addFeatures(features_VittaSoVicente_135);
var lyr_VittaSoVicente_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaSoVicente_135, 
                style: style_VittaSoVicente_135,
                popuplayertitle: 'Vitta São Vicente',
                interactive: true,
                title: '<img src="styles/legend/VittaSoVicente_135.png" /> Vitta São Vicente'
            });
var format_VittaJardimSimes_136 = new ol.format.GeoJSON();
var features_VittaJardimSimes_136 = format_VittaJardimSimes_136.readFeatures(json_VittaJardimSimes_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaJardimSimes_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaJardimSimes_136.addFeatures(features_VittaJardimSimes_136);
var lyr_VittaJardimSimes_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaJardimSimes_136, 
                style: style_VittaJardimSimes_136,
                popuplayertitle: 'Vitta Jardim Simões',
                interactive: true,
    title: 'Vitta Jardim Simões<br />\
    <img src="styles/legend/VittaJardimSimes_136_0.png" /> APP<br />\
    <img src="styles/legend/VittaJardimSimes_136_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VittaJardimSimes_136_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/VittaJardimSimes_136_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/VittaJardimSimes_136_4.png" /> PASSEIO<br />\
    <img src="styles/legend/VittaJardimSimes_136_5.png" /> RUAS<br />' });
var format_VittaJardimSimes_137 = new ol.format.GeoJSON();
var features_VittaJardimSimes_137 = format_VittaJardimSimes_137.readFeatures(json_VittaJardimSimes_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaJardimSimes_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaJardimSimes_137.addFeatures(features_VittaJardimSimes_137);
var lyr_VittaJardimSimes_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaJardimSimes_137, 
                style: style_VittaJardimSimes_137,
                popuplayertitle: 'Vitta Jardim Simões',
                interactive: true,
                title: '<img src="styles/legend/VittaJardimSimes_137.png" /> Vitta Jardim Simões'
            });
var format_VittaAlvorada_138 = new ol.format.GeoJSON();
var features_VittaAlvorada_138 = format_VittaAlvorada_138.readFeatures(json_VittaAlvorada_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaAlvorada_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaAlvorada_138.addFeatures(features_VittaAlvorada_138);
var lyr_VittaAlvorada_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaAlvorada_138, 
                style: style_VittaAlvorada_138,
                popuplayertitle: 'Vitta Alvorada',
                interactive: true,
    title: 'Vitta Alvorada<br />\
    <img src="styles/legend/VittaAlvorada_138_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VittaAlvorada_138_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/VittaAlvorada_138_2.png" /> LOTES<br />\
    <img src="styles/legend/VittaAlvorada_138_3.png" /> PASSEIO<br />\
    <img src="styles/legend/VittaAlvorada_138_4.png" /> RUAS<br />\
    <img src="styles/legend/VittaAlvorada_138_5.png" /> VIELA<br />' });
var format_VittaAlvorada_139 = new ol.format.GeoJSON();
var features_VittaAlvorada_139 = format_VittaAlvorada_139.readFeatures(json_VittaAlvorada_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaAlvorada_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaAlvorada_139.addFeatures(features_VittaAlvorada_139);
var lyr_VittaAlvorada_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaAlvorada_139, 
                style: style_VittaAlvorada_139,
                popuplayertitle: 'Vitta Alvorada',
                interactive: true,
                title: '<img src="styles/legend/VittaAlvorada_139.png" /> Vitta Alvorada'
            });
var format_VilaDiEspanha_140 = new ol.format.GeoJSON();
var features_VilaDiEspanha_140 = format_VilaDiEspanha_140.readFeatures(json_VilaDiEspanha_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaDiEspanha_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaDiEspanha_140.addFeatures(features_VilaDiEspanha_140);
var lyr_VilaDiEspanha_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaDiEspanha_140, 
                style: style_VilaDiEspanha_140,
                popuplayertitle: 'Vila Di Espanha',
                interactive: true,
    title: 'Vila Di Espanha<br />\
    <img src="styles/legend/VilaDiEspanha_140_0.png" /> APP<br />\
    <img src="styles/legend/VilaDiEspanha_140_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VilaDiEspanha_140_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VilaDiEspanha_140_3.png" /> LOTES<br />\
    <img src="styles/legend/VilaDiEspanha_140_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VilaDiEspanha_140_5.png" /> PASSEIO<br />\
    <img src="styles/legend/VilaDiEspanha_140_6.png" /> RUAS<br />\
    <img src="styles/legend/VilaDiEspanha_140_7.png" /> VIELA<br />' });
var format_VilaDiEspanha_141 = new ol.format.GeoJSON();
var features_VilaDiEspanha_141 = format_VilaDiEspanha_141.readFeatures(json_VilaDiEspanha_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaDiEspanha_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaDiEspanha_141.addFeatures(features_VilaDiEspanha_141);
var lyr_VilaDiEspanha_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaDiEspanha_141, 
                style: style_VilaDiEspanha_141,
                popuplayertitle: 'Vila Di Espanha',
                interactive: true,
                title: '<img src="styles/legend/VilaDiEspanha_141.png" /> Vila Di Espanha'
            });
var format_VillaPucci_142 = new ol.format.GeoJSON();
var features_VillaPucci_142 = format_VillaPucci_142.readFeatures(json_VillaPucci_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaPucci_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaPucci_142.addFeatures(features_VillaPucci_142);
var lyr_VillaPucci_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaPucci_142, 
                style: style_VillaPucci_142,
                popuplayertitle: 'Villa Pucci',
                interactive: true,
    title: 'Villa Pucci<br />\
    <img src="styles/legend/VillaPucci_142_0.png" /> APP<br />\
    <img src="styles/legend/VillaPucci_142_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaPucci_142_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaPucci_142_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/VillaPucci_142_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaPucci_142_5.png" /> LOTES<br />\
    <img src="styles/legend/VillaPucci_142_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VillaPucci_142_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/VillaPucci_142_8.png" /> PASSEIO<br />\
    <img src="styles/legend/VillaPucci_142_9.png" /> RUAS<br />\
    <img src="styles/legend/VillaPucci_142_10.png" /> VIELA<br />' });
var format_VillaPucci_143 = new ol.format.GeoJSON();
var features_VillaPucci_143 = format_VillaPucci_143.readFeatures(json_VillaPucci_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaPucci_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaPucci_143.addFeatures(features_VillaPucci_143);
var lyr_VillaPucci_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaPucci_143, 
                style: style_VillaPucci_143,
                popuplayertitle: 'Villa Pucci',
                interactive: true,
                title: '<img src="styles/legend/VillaPucci_143.png" /> Villa Pucci'
            });
var format_VilaPiemonteII_144 = new ol.format.GeoJSON();
var features_VilaPiemonteII_144 = format_VilaPiemonteII_144.readFeatures(json_VilaPiemonteII_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaPiemonteII_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaPiemonteII_144.addFeatures(features_VilaPiemonteII_144);
var lyr_VilaPiemonteII_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaPiemonteII_144, 
                style: style_VilaPiemonteII_144,
                popuplayertitle: 'Vila Piemonte II',
                interactive: true,
    title: 'Vila Piemonte II<br />\
    <img src="styles/legend/VilaPiemonteII_144_0.png" /> APP<br />\
    <img src="styles/legend/VilaPiemonteII_144_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VilaPiemonteII_144_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VilaPiemonteII_144_3.png" /> DESMEMBRAMENTO DOACAO DESAPROPRIACAO<br />\
    <img src="styles/legend/VilaPiemonteII_144_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/VilaPiemonteII_144_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VilaPiemonteII_144_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/VilaPiemonteII_144_7.png" /> PASSEIO<br />\
    <img src="styles/legend/VilaPiemonteII_144_8.png" /> RUAS<br />\
    <img src="styles/legend/VilaPiemonteII_144_9.png" /> VIELA<br />' });
var format_VilaPiemonteII_145 = new ol.format.GeoJSON();
var features_VilaPiemonteII_145 = format_VilaPiemonteII_145.readFeatures(json_VilaPiemonteII_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaPiemonteII_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaPiemonteII_145.addFeatures(features_VilaPiemonteII_145);
var lyr_VilaPiemonteII_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaPiemonteII_145, 
                style: style_VilaPiemonteII_145,
                popuplayertitle: 'Vila Piemonte II',
                interactive: true,
                title: '<img src="styles/legend/VilaPiemonteII_145.png" /> Vila Piemonte II'
            });
var format_VilaOlimpica_146 = new ol.format.GeoJSON();
var features_VilaOlimpica_146 = format_VilaOlimpica_146.readFeatures(json_VilaOlimpica_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaOlimpica_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaOlimpica_146.addFeatures(features_VilaOlimpica_146);
var lyr_VilaOlimpica_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaOlimpica_146, 
                style: style_VilaOlimpica_146,
                popuplayertitle: 'Vila Olimpica',
                interactive: true,
    title: 'Vila Olimpica<br />\
    <img src="styles/legend/VilaOlimpica_146_0.png" /> APP<br />\
    <img src="styles/legend/VilaOlimpica_146_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VilaOlimpica_146_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/VilaOlimpica_146_3.png" /> LOTES<br />\
    <img src="styles/legend/VilaOlimpica_146_4.png" /> PASSEIO<br />\
    <img src="styles/legend/VilaOlimpica_146_5.png" /> RUAS<br />\
    <img src="styles/legend/VilaOlimpica_146_6.png" /> VIELA<br />' });
var format_VilaOlimpica_147 = new ol.format.GeoJSON();
var features_VilaOlimpica_147 = format_VilaOlimpica_147.readFeatures(json_VilaOlimpica_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaOlimpica_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaOlimpica_147.addFeatures(features_VilaOlimpica_147);
var lyr_VilaOlimpica_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaOlimpica_147, 
                style: style_VilaOlimpica_147,
                popuplayertitle: 'Vila Olimpica',
                interactive: true,
                title: '<img src="styles/legend/VilaOlimpica_147.png" /> Vila Olimpica'
            });
var format_VillaDoratta_148 = new ol.format.GeoJSON();
var features_VillaDoratta_148 = format_VillaDoratta_148.readFeatures(json_VillaDoratta_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaDoratta_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaDoratta_148.addFeatures(features_VillaDoratta_148);
var lyr_VillaDoratta_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaDoratta_148, 
                style: style_VillaDoratta_148,
                popuplayertitle: 'Villa Doratta',
                interactive: true,
    title: 'Villa Doratta<br />\
    <img src="styles/legend/VillaDoratta_148_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaDoratta_148_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaDoratta_148_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaDoratta_148_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/VillaDoratta_148_4.png" /> PASSEIO<br />\
    <img src="styles/legend/VillaDoratta_148_5.png" /> RUAS<br />\
    <img src="styles/legend/VillaDoratta_148_6.png" /> VAGAS DE ESTACIONAMENTO<br />\
    <img src="styles/legend/VillaDoratta_148_7.png" /> VIELA<br />\
    <img src="styles/legend/VillaDoratta_148_8.png" /> APP<br />' });
var format_VillaDoratta_149 = new ol.format.GeoJSON();
var features_VillaDoratta_149 = format_VillaDoratta_149.readFeatures(json_VillaDoratta_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaDoratta_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaDoratta_149.addFeatures(features_VillaDoratta_149);
var lyr_VillaDoratta_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaDoratta_149, 
                style: style_VillaDoratta_149,
                popuplayertitle: 'Villa Doratta',
                interactive: true,
                title: '<img src="styles/legend/VillaDoratta_149.png" /> Villa Doratta'
            });
var format_VillaBella_150 = new ol.format.GeoJSON();
var features_VillaBella_150 = format_VillaBella_150.readFeatures(json_VillaBella_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaBella_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaBella_150.addFeatures(features_VillaBella_150);
var lyr_VillaBella_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaBella_150, 
                style: style_VillaBella_150,
                popuplayertitle: 'Villa Bella',
                interactive: true,
    title: 'Villa Bella<br />\
    <img src="styles/legend/VillaBella_150_0.png" /> APP<br />\
    <img src="styles/legend/VillaBella_150_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaBella_150_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaBella_150_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaBella_150_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VillaBella_150_5.png" /> RUAS<br />\
    <img src="styles/legend/VillaBella_150_6.png" /> PASSEIO<br />' });
var format_VillaBella_151 = new ol.format.GeoJSON();
var features_VillaBella_151 = format_VillaBella_151.readFeatures(json_VillaBella_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaBella_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaBella_151.addFeatures(features_VillaBella_151);
var lyr_VillaBella_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaBella_151, 
                style: style_VillaBella_151,
                popuplayertitle: 'Villa Bella',
                interactive: true,
                title: '<img src="styles/legend/VillaBella_151.png" /> Villa Bella'
            });
var format_Versalhes_152 = new ol.format.GeoJSON();
var features_Versalhes_152 = format_Versalhes_152.readFeatures(json_Versalhes_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Versalhes_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Versalhes_152.addFeatures(features_Versalhes_152);
var lyr_Versalhes_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Versalhes_152, 
                style: style_Versalhes_152,
                popuplayertitle: 'Versalhes',
                interactive: true,
    title: 'Versalhes<br />\
    <img src="styles/legend/Versalhes_152_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/Versalhes_152_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/Versalhes_152_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Versalhes_152_3.png" /> PASSEIO<br />\
    <img src="styles/legend/Versalhes_152_4.png" /> RUAS<br />\
    <img src="styles/legend/Versalhes_152_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_Versalhes_153 = new ol.format.GeoJSON();
var features_Versalhes_153 = format_Versalhes_153.readFeatures(json_Versalhes_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Versalhes_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Versalhes_153.addFeatures(features_Versalhes_153);
var lyr_Versalhes_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Versalhes_153, 
                style: style_Versalhes_153,
                popuplayertitle: 'Versalhes',
                interactive: true,
                title: '<img src="styles/legend/Versalhes_153.png" /> Versalhes'
            });
var format_TorontoResidence_154 = new ol.format.GeoJSON();
var features_TorontoResidence_154 = format_TorontoResidence_154.readFeatures(json_TorontoResidence_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TorontoResidence_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TorontoResidence_154.addFeatures(features_TorontoResidence_154);
var lyr_TorontoResidence_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TorontoResidence_154, 
                style: style_TorontoResidence_154,
                popuplayertitle: 'Toronto Residence',
                interactive: true,
    title: 'Toronto Residence<br />\
    <img src="styles/legend/TorontoResidence_154_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/TorontoResidence_154_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/TorontoResidence_154_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/TorontoResidence_154_3.png" /> PASSEIO<br />\
    <img src="styles/legend/TorontoResidence_154_4.png" /> RUAS<br />\
    <img src="styles/legend/TorontoResidence_154_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_TorontoResidence_155 = new ol.format.GeoJSON();
var features_TorontoResidence_155 = format_TorontoResidence_155.readFeatures(json_TorontoResidence_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TorontoResidence_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TorontoResidence_155.addFeatures(features_TorontoResidence_155);
var lyr_TorontoResidence_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TorontoResidence_155, 
                style: style_TorontoResidence_155,
                popuplayertitle: 'Toronto Residence',
                interactive: true,
                title: '<img src="styles/legend/TorontoResidence_155.png" /> Toronto Residence'
            });
var format_TerraNova_156 = new ol.format.GeoJSON();
var features_TerraNova_156 = format_TerraNova_156.readFeatures(json_TerraNova_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TerraNova_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerraNova_156.addFeatures(features_TerraNova_156);
var lyr_TerraNova_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerraNova_156, 
                style: style_TerraNova_156,
                popuplayertitle: 'Terra Nova',
                interactive: true,
    title: 'Terra Nova<br />\
    <img src="styles/legend/TerraNova_156_0.png" /> APP<br />\
    <img src="styles/legend/TerraNova_156_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/TerraNova_156_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/TerraNova_156_3.png" /> LOTES<br />\
    <img src="styles/legend/TerraNova_156_4.png" /> PASSEIO<br />\
    <img src="styles/legend/TerraNova_156_5.png" /> RUAS<br />' });
var format_TerraNova_157 = new ol.format.GeoJSON();
var features_TerraNova_157 = format_TerraNova_157.readFeatures(json_TerraNova_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TerraNova_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerraNova_157.addFeatures(features_TerraNova_157);
var lyr_TerraNova_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerraNova_157, 
                style: style_TerraNova_157,
                popuplayertitle: 'Terra Nova',
                interactive: true,
                title: '<img src="styles/legend/TerraNova_157.png" /> Terra Nova'
            });
var format_Sonetto_158 = new ol.format.GeoJSON();
var features_Sonetto_158 = format_Sonetto_158.readFeatures(json_Sonetto_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Sonetto_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sonetto_158.addFeatures(features_Sonetto_158);
var lyr_Sonetto_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sonetto_158, 
                style: style_Sonetto_158,
                popuplayertitle: 'Sonetto',
                interactive: true,
                title: '<img src="styles/legend/Sonetto_158.png" /> Sonetto'
            });
var format_Sonetto_159 = new ol.format.GeoJSON();
var features_Sonetto_159 = format_Sonetto_159.readFeatures(json_Sonetto_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Sonetto_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sonetto_159.addFeatures(features_Sonetto_159);
var lyr_Sonetto_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sonetto_159, 
                style: style_Sonetto_159,
                popuplayertitle: 'Sonetto',
                interactive: true,
                title: '<img src="styles/legend/Sonetto_159.png" /> Sonetto'
            });
var format_SMARTFRANCAEIXORESIDENCIAL2_160 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL2_160 = format_SMARTFRANCAEIXORESIDENCIAL2_160.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL2_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL2_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL2_160.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL2_160);
var lyr_SMARTFRANCAEIXORESIDENCIAL2_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL2_160, 
                style: style_SMARTFRANCAEIXORESIDENCIAL2_160,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 2',
                interactive: true,
    title: 'SMART FRANCA - EIXO RESIDENCIAL 2<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_160_0.png" /> APP<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_160_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_160_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_160_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_160_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_160_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_160_6.png" /> PASSEIO<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_160_7.png" /> RUAS<br />' });
var format_SMARTFRANCAEIXORESIDENCIAL2_161 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL2_161 = format_SMARTFRANCAEIXORESIDENCIAL2_161.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL2_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL2_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL2_161.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL2_161);
var lyr_SMARTFRANCAEIXORESIDENCIAL2_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL2_161, 
                style: style_SMARTFRANCAEIXORESIDENCIAL2_161,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 2',
                interactive: true,
                title: '<img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_161.png" /> SMART FRANCA - EIXO RESIDENCIAL 2'
            });
var format_SMARTFRANCAEIXORESIDENCIAL1_162 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL1_162 = format_SMARTFRANCAEIXORESIDENCIAL1_162.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL1_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL1_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL1_162.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL1_162);
var lyr_SMARTFRANCAEIXORESIDENCIAL1_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL1_162, 
                style: style_SMARTFRANCAEIXORESIDENCIAL1_162,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 1',
                interactive: true,
    title: 'SMART FRANCA - EIXO RESIDENCIAL 1<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_162_0.png" /> APP<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_162_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_162_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_162_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_162_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_162_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_162_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_162_7.png" /> PASSEIO<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_162_8.png" /> RUAS<br />' });
var format_SMARTFRANCAEIXORESIDENCIAL1_163 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL1_163 = format_SMARTFRANCAEIXORESIDENCIAL1_163.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL1_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL1_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL1_163.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL1_163);
var lyr_SMARTFRANCAEIXORESIDENCIAL1_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL1_163, 
                style: style_SMARTFRANCAEIXORESIDENCIAL1_163,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 1',
                interactive: true,
                title: '<img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_163.png" /> SMART FRANCA - EIXO RESIDENCIAL 1'
            });
var format_SMARTCITYFRANCAEIXOEMPRESARIAL_164 = new ol.format.GeoJSON();
var features_SMARTCITYFRANCAEIXOEMPRESARIAL_164 = format_SMARTCITYFRANCAEIXOEMPRESARIAL_164.readFeatures(json_SMARTCITYFRANCAEIXOEMPRESARIAL_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_164.addFeatures(features_SMARTCITYFRANCAEIXOEMPRESARIAL_164);
var lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_164, 
                style: style_SMARTCITYFRANCAEIXOEMPRESARIAL_164,
                popuplayertitle: 'SMART CITY FRANCA - EIXO EMPRESARIAL',
                interactive: true,
    title: 'SMART CITY FRANCA - EIXO EMPRESARIAL<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_164_0.png" /> APP<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_164_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_164_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_164_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_164_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_164_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_164_6.png" /> PASSEIO<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_164_7.png" /> RUAS<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_164_8.png" /> VIELA<br />' });
var format_SMARTCITYFRANCAEIXOEMPRESARIAL_165 = new ol.format.GeoJSON();
var features_SMARTCITYFRANCAEIXOEMPRESARIAL_165 = format_SMARTCITYFRANCAEIXOEMPRESARIAL_165.readFeatures(json_SMARTCITYFRANCAEIXOEMPRESARIAL_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_165.addFeatures(features_SMARTCITYFRANCAEIXOEMPRESARIAL_165);
var lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_165, 
                style: style_SMARTCITYFRANCAEIXOEMPRESARIAL_165,
                popuplayertitle: 'SMART CITY FRANCA - EIXO EMPRESARIAL',
                interactive: true,
                title: '<img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_165.png" /> SMART CITY FRANCA - EIXO EMPRESARIAL'
            });
var format_ServidoRamal138kVFranca4Guanabara_166 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_166 = format_ServidoRamal138kVFranca4Guanabara_166.readFeatures(json_ServidoRamal138kVFranca4Guanabara_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_166.addFeatures(features_ServidoRamal138kVFranca4Guanabara_166);
var lyr_ServidoRamal138kVFranca4Guanabara_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_166, 
                style: style_ServidoRamal138kVFranca4Guanabara_166,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_166.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_ServidoRamal138kVFranca4Guanabara_167 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_167 = format_ServidoRamal138kVFranca4Guanabara_167.readFeatures(json_ServidoRamal138kVFranca4Guanabara_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_167.addFeatures(features_ServidoRamal138kVFranca4Guanabara_167);
var lyr_ServidoRamal138kVFranca4Guanabara_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_167, 
                style: style_ServidoRamal138kVFranca4Guanabara_167,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_167.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_SantaLina_168 = new ol.format.GeoJSON();
var features_SantaLina_168 = format_SantaLina_168.readFeatures(json_SantaLina_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantaLina_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaLina_168.addFeatures(features_SantaLina_168);
var lyr_SantaLina_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantaLina_168, 
                style: style_SantaLina_168,
                popuplayertitle: 'Santa Lina',
                interactive: true,
    title: 'Santa Lina<br />\
    <img src="styles/legend/SantaLina_168_0.png" /> LOTES<br />\
    <img src="styles/legend/SantaLina_168_1.png" /> PASSEIO<br />\
    <img src="styles/legend/SantaLina_168_2.png" /> RUAS<br />' });
var format_SantaLina_169 = new ol.format.GeoJSON();
var features_SantaLina_169 = format_SantaLina_169.readFeatures(json_SantaLina_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantaLina_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaLina_169.addFeatures(features_SantaLina_169);
var lyr_SantaLina_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantaLina_169, 
                style: style_SantaLina_169,
                popuplayertitle: 'Santa Lina',
                interactive: true,
                title: '<img src="styles/legend/SantaLina_169.png" /> Santa Lina'
            });
var format_SantAnita_170 = new ol.format.GeoJSON();
var features_SantAnita_170 = format_SantAnita_170.readFeatures(json_SantAnita_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantAnita_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantAnita_170.addFeatures(features_SantAnita_170);
var lyr_SantAnita_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantAnita_170, 
                style: style_SantAnita_170,
                popuplayertitle: 'Sant\'Anita',
                interactive: true,
                title: '<img src="styles/legend/SantAnita_170.png" /> Sant\'Anita'
            });
var format_SantAnita_171 = new ol.format.GeoJSON();
var features_SantAnita_171 = format_SantAnita_171.readFeatures(json_SantAnita_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantAnita_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantAnita_171.addFeatures(features_SantAnita_171);
var lyr_SantAnita_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantAnita_171, 
                style: style_SantAnita_171,
                popuplayertitle: 'Sant\'Anita',
                interactive: true,
                title: '<img src="styles/legend/SantAnita_171.png" /> Sant\'Anita'
            });
var format_RuaAlfioBenedini_172 = new ol.format.GeoJSON();
var features_RuaAlfioBenedini_172 = format_RuaAlfioBenedini_172.readFeatures(json_RuaAlfioBenedini_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RuaAlfioBenedini_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuaAlfioBenedini_172.addFeatures(features_RuaAlfioBenedini_172);
var lyr_RuaAlfioBenedini_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuaAlfioBenedini_172, 
                style: style_RuaAlfioBenedini_172,
                popuplayertitle: 'Rua Alfio Benedini',
                interactive: true,
                title: '<img src="styles/legend/RuaAlfioBenedini_172.png" /> Rua Alfio Benedini'
            });
var format_RuaAlfioBenedini_173 = new ol.format.GeoJSON();
var features_RuaAlfioBenedini_173 = format_RuaAlfioBenedini_173.readFeatures(json_RuaAlfioBenedini_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RuaAlfioBenedini_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuaAlfioBenedini_173.addFeatures(features_RuaAlfioBenedini_173);
var lyr_RuaAlfioBenedini_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuaAlfioBenedini_173, 
                style: style_RuaAlfioBenedini_173,
                popuplayertitle: 'Rua Alfio Benedini',
                interactive: true,
                title: '<img src="styles/legend/RuaAlfioBenedini_173.png" /> Rua Alfio Benedini'
            });
var format_RuaAlfioBenedini_174 = new ol.format.GeoJSON();
var features_RuaAlfioBenedini_174 = format_RuaAlfioBenedini_174.readFeatures(json_RuaAlfioBenedini_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RuaAlfioBenedini_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuaAlfioBenedini_174.addFeatures(features_RuaAlfioBenedini_174);
var lyr_RuaAlfioBenedini_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuaAlfioBenedini_174, 
                style: style_RuaAlfioBenedini_174,
                popuplayertitle: 'Rua Alfio Benedini',
                interactive: true,
                title: '<img src="styles/legend/RuaAlfioBenedini_174.png" /> Rua Alfio Benedini'
            });
var format_ResidencialValeVerde_175 = new ol.format.GeoJSON();
var features_ResidencialValeVerde_175 = format_ResidencialValeVerde_175.readFeatures(json_ResidencialValeVerde_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialValeVerde_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialValeVerde_175.addFeatures(features_ResidencialValeVerde_175);
var lyr_ResidencialValeVerde_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialValeVerde_175, 
                style: style_ResidencialValeVerde_175,
                popuplayertitle: 'Residencial Vale Verde',
                interactive: true,
    title: 'Residencial Vale Verde<br />\
    <img src="styles/legend/ResidencialValeVerde_175_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialValeVerde_175_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialValeVerde_175_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialValeVerde_175_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialValeVerde_175_4.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialValeVerde_175_5.png" /> PASSEIO<br />' });
var format_ResidencialValeVerde_176 = new ol.format.GeoJSON();
var features_ResidencialValeVerde_176 = format_ResidencialValeVerde_176.readFeatures(json_ResidencialValeVerde_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialValeVerde_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialValeVerde_176.addFeatures(features_ResidencialValeVerde_176);
var lyr_ResidencialValeVerde_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialValeVerde_176, 
                style: style_ResidencialValeVerde_176,
                popuplayertitle: 'Residencial Vale Verde',
                interactive: true,
                title: '<img src="styles/legend/ResidencialValeVerde_176.png" /> Residencial Vale Verde'
            });
var format_ResidencialYasminTorres_177 = new ol.format.GeoJSON();
var features_ResidencialYasminTorres_177 = format_ResidencialYasminTorres_177.readFeatures(json_ResidencialYasminTorres_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialYasminTorres_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialYasminTorres_177.addFeatures(features_ResidencialYasminTorres_177);
var lyr_ResidencialYasminTorres_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialYasminTorres_177, 
                style: style_ResidencialYasminTorres_177,
                popuplayertitle: 'Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/ResidencialYasminTorres_177.png" /> Residencial Yasmin Torres'
            });
var format_ResidencialYasminTorres_178 = new ol.format.GeoJSON();
var features_ResidencialYasminTorres_178 = format_ResidencialYasminTorres_178.readFeatures(json_ResidencialYasminTorres_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialYasminTorres_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialYasminTorres_178.addFeatures(features_ResidencialYasminTorres_178);
var lyr_ResidencialYasminTorres_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialYasminTorres_178, 
                style: style_ResidencialYasminTorres_178,
                popuplayertitle: 'Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/ResidencialYasminTorres_178.png" /> Residencial Yasmin Torres'
            });
var format_ResidencialTellini_179 = new ol.format.GeoJSON();
var features_ResidencialTellini_179 = format_ResidencialTellini_179.readFeatures(json_ResidencialTellini_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialTellini_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialTellini_179.addFeatures(features_ResidencialTellini_179);
var lyr_ResidencialTellini_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialTellini_179, 
                style: style_ResidencialTellini_179,
                popuplayertitle: 'Residencial Tellini',
                interactive: true,
    title: 'Residencial Tellini<br />\
    <img src="styles/legend/ResidencialTellini_179_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialTellini_179_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialTellini_179_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialTellini_179_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialTellini_179_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialTellini_179_5.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialTellini_179_6.png" /> VIELA<br />' });
var format_ResidencialTellini_180 = new ol.format.GeoJSON();
var features_ResidencialTellini_180 = format_ResidencialTellini_180.readFeatures(json_ResidencialTellini_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialTellini_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialTellini_180.addFeatures(features_ResidencialTellini_180);
var lyr_ResidencialTellini_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialTellini_180, 
                style: style_ResidencialTellini_180,
                popuplayertitle: 'Residencial Tellini',
                interactive: true,
                title: '<img src="styles/legend/ResidencialTellini_180.png" /> Residencial Tellini'
            });
var format_ResidencialSoCarlosII_181 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosII_181 = format_ResidencialSoCarlosII_181.readFeatures(json_ResidencialSoCarlosII_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosII_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosII_181.addFeatures(features_ResidencialSoCarlosII_181);
var lyr_ResidencialSoCarlosII_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosII_181, 
                style: style_ResidencialSoCarlosII_181,
                popuplayertitle: 'Residencial São Carlos II',
                interactive: true,
    title: 'Residencial São Carlos II<br />\
    <img src="styles/legend/ResidencialSoCarlosII_181_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSoCarlosII_181_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSoCarlosII_181_2.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialSoCarlosII_181_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialSoCarlosII_181_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSoCarlosII_181_5.png" /> RUAS<br />' });
var format_ResidencialSoCarlosII_182 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosII_182 = format_ResidencialSoCarlosII_182.readFeatures(json_ResidencialSoCarlosII_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosII_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosII_182.addFeatures(features_ResidencialSoCarlosII_182);
var lyr_ResidencialSoCarlosII_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosII_182, 
                style: style_ResidencialSoCarlosII_182,
                popuplayertitle: 'Residencial São Carlos II',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSoCarlosII_182.png" /> Residencial São Carlos II'
            });
var format_ResidencialSoCarlosI_183 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosI_183 = format_ResidencialSoCarlosI_183.readFeatures(json_ResidencialSoCarlosI_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosI_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosI_183.addFeatures(features_ResidencialSoCarlosI_183);
var lyr_ResidencialSoCarlosI_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosI_183, 
                style: style_ResidencialSoCarlosI_183,
                popuplayertitle: 'Residencial São Carlos I',
                interactive: true,
    title: 'Residencial São Carlos I<br />\
    <img src="styles/legend/ResidencialSoCarlosI_183_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSoCarlosI_183_1.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialSoCarlosI_183_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSoCarlosI_183_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/ResidencialSoCarlosI_183_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialSoCarlosI_183_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialSoCarlosI_183_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSoCarlosI_183_7.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialSoCarlosI_183_8.png" /> VIELA<br />' });
var format_ResidencialSoCarlosI_184 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosI_184 = format_ResidencialSoCarlosI_184.readFeatures(json_ResidencialSoCarlosI_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosI_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosI_184.addFeatures(features_ResidencialSoCarlosI_184);
var lyr_ResidencialSoCarlosI_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosI_184, 
                style: style_ResidencialSoCarlosI_184,
                popuplayertitle: 'Residencial São Carlos I',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSoCarlosI_184.png" /> Residencial São Carlos I'
            });
var format_ResidencialSantaIns_185 = new ol.format.GeoJSON();
var features_ResidencialSantaIns_185 = format_ResidencialSantaIns_185.readFeatures(json_ResidencialSantaIns_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaIns_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaIns_185.addFeatures(features_ResidencialSantaIns_185);
var lyr_ResidencialSantaIns_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaIns_185, 
                style: style_ResidencialSantaIns_185,
                popuplayertitle: 'Residencial Santa Inês',
                interactive: true,
    title: 'Residencial Santa Inês<br />\
    <img src="styles/legend/ResidencialSantaIns_185_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSantaIns_185_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialSantaIns_185_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSantaIns_185_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialSantaIns_185_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSantaIns_185_5.png" /> RUAS<br />' });
var format_ResidencialSantaIns_186 = new ol.format.GeoJSON();
var features_ResidencialSantaIns_186 = format_ResidencialSantaIns_186.readFeatures(json_ResidencialSantaIns_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaIns_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaIns_186.addFeatures(features_ResidencialSantaIns_186);
var lyr_ResidencialSantaIns_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaIns_186, 
                style: style_ResidencialSantaIns_186,
                popuplayertitle: 'Residencial Santa Inês',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSantaIns_186.png" /> Residencial Santa Inês'
            });
var format_ResidencialSantaF_187 = new ol.format.GeoJSON();
var features_ResidencialSantaF_187 = format_ResidencialSantaF_187.readFeatures(json_ResidencialSantaF_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaF_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaF_187.addFeatures(features_ResidencialSantaF_187);
var lyr_ResidencialSantaF_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaF_187, 
                style: style_ResidencialSantaF_187,
                popuplayertitle: 'Residencial Santa Fé',
                interactive: true,
    title: 'Residencial Santa Fé<br />\
    <img src="styles/legend/ResidencialSantaF_187_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialSantaF_187_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSantaF_187_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSantaF_187_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialSantaF_187_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSantaF_187_5.png" /> RUAS<br />' });
var format_ResidencialSantaF_188 = new ol.format.GeoJSON();
var features_ResidencialSantaF_188 = format_ResidencialSantaF_188.readFeatures(json_ResidencialSantaF_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaF_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaF_188.addFeatures(features_ResidencialSantaF_188);
var lyr_ResidencialSantaF_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaF_188, 
                style: style_ResidencialSantaF_188,
                popuplayertitle: 'Residencial Santa Fé',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSantaF_188.png" /> Residencial Santa Fé'
            });
var format_ResidencialQuintadosOitis_189 = new ol.format.GeoJSON();
var features_ResidencialQuintadosOitis_189 = format_ResidencialQuintadosOitis_189.readFeatures(json_ResidencialQuintadosOitis_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadosOitis_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadosOitis_189.addFeatures(features_ResidencialQuintadosOitis_189);
var lyr_ResidencialQuintadosOitis_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadosOitis_189, 
                style: style_ResidencialQuintadosOitis_189,
                popuplayertitle: 'Residencial Quinta dos Oitis',
                interactive: true,
    title: 'Residencial Quinta dos Oitis<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_189_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_189_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_189_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_189_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_189_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_189_5.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_189_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_189_7.png" /> RUAS<br />' });
var format_ResidencialQuintadosOitis_190 = new ol.format.GeoJSON();
var features_ResidencialQuintadosOitis_190 = format_ResidencialQuintadosOitis_190.readFeatures(json_ResidencialQuintadosOitis_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadosOitis_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadosOitis_190.addFeatures(features_ResidencialQuintadosOitis_190);
var lyr_ResidencialQuintadosOitis_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadosOitis_190, 
                style: style_ResidencialQuintadosOitis_190,
                popuplayertitle: 'Residencial Quinta dos Oitis',
                interactive: true,
                title: '<img src="styles/legend/ResidencialQuintadosOitis_190.png" /> Residencial Quinta dos Oitis'
            });
var format_ResidencialQuintadoSol_191 = new ol.format.GeoJSON();
var features_ResidencialQuintadoSol_191 = format_ResidencialQuintadoSol_191.readFeatures(json_ResidencialQuintadoSol_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadoSol_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadoSol_191.addFeatures(features_ResidencialQuintadoSol_191);
var lyr_ResidencialQuintadoSol_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadoSol_191, 
                style: style_ResidencialQuintadoSol_191,
                popuplayertitle: 'Residencial Quinta do Sol',
                interactive: true,
    title: 'Residencial Quinta do Sol<br />\
    <img src="styles/legend/ResidencialQuintadoSol_191_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialQuintadoSol_191_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialQuintadoSol_191_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialQuintadoSol_191_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialQuintadoSol_191_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialQuintadoSol_191_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialQuintadoSol_191_6.png" /> RUAS<br />' });
var format_ResidencialQuintadoSol_192 = new ol.format.GeoJSON();
var features_ResidencialQuintadoSol_192 = format_ResidencialQuintadoSol_192.readFeatures(json_ResidencialQuintadoSol_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadoSol_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadoSol_192.addFeatures(features_ResidencialQuintadoSol_192);
var lyr_ResidencialQuintadoSol_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadoSol_192, 
                style: style_ResidencialQuintadoSol_192,
                popuplayertitle: 'Residencial Quinta do Sol',
                interactive: true,
                title: '<img src="styles/legend/ResidencialQuintadoSol_192.png" /> Residencial Quinta do Sol'
            });
var format_ResidencialPousoAlegreII_193 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegreII_193 = format_ResidencialPousoAlegreII_193.readFeatures(json_ResidencialPousoAlegreII_193, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegreII_193 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegreII_193.addFeatures(features_ResidencialPousoAlegreII_193);
var lyr_ResidencialPousoAlegreII_193 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegreII_193, 
                style: style_ResidencialPousoAlegreII_193,
                popuplayertitle: 'Residencial Pouso Alegre II',
                interactive: true,
    title: 'Residencial Pouso Alegre II<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_193_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_193_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_193_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_193_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_193_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_193_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_193_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_193_7.png" /> SERVIDAO<br />' });
var format_ResidencialPousoAlegreII_194 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegreII_194 = format_ResidencialPousoAlegreII_194.readFeatures(json_ResidencialPousoAlegreII_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegreII_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegreII_194.addFeatures(features_ResidencialPousoAlegreII_194);
var lyr_ResidencialPousoAlegreII_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegreII_194, 
                style: style_ResidencialPousoAlegreII_194,
                popuplayertitle: 'Residencial Pouso Alegre II',
                interactive: true,
                title: '<img src="styles/legend/ResidencialPousoAlegreII_194.png" /> Residencial Pouso Alegre II'
            });
var format_ResidencialPousoAlegre_195 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegre_195 = format_ResidencialPousoAlegre_195.readFeatures(json_ResidencialPousoAlegre_195, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegre_195 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegre_195.addFeatures(features_ResidencialPousoAlegre_195);
var lyr_ResidencialPousoAlegre_195 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegre_195, 
                style: style_ResidencialPousoAlegre_195,
                popuplayertitle: 'Residencial Pouso Alegre',
                interactive: true,
    title: 'Residencial Pouso Alegre<br />\
    <img src="styles/legend/ResidencialPousoAlegre_195_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialPousoAlegre_195_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialPousoAlegre_195_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialPousoAlegre_195_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialPousoAlegre_195_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialPousoAlegre_195_5.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialPousoAlegre_195_6.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialPousoAlegre_195_7.png" /> VIELA<br />' });
var format_ResidencialPousoAlegre_196 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegre_196 = format_ResidencialPousoAlegre_196.readFeatures(json_ResidencialPousoAlegre_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegre_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegre_196.addFeatures(features_ResidencialPousoAlegre_196);
var lyr_ResidencialPousoAlegre_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegre_196, 
                style: style_ResidencialPousoAlegre_196,
                popuplayertitle: 'Residencial Pouso Alegre',
                interactive: true,
                title: '<img src="styles/legend/ResidencialPousoAlegre_196.png" /> Residencial Pouso Alegre'
            });
var format_ResidencialPiamalim_197 = new ol.format.GeoJSON();
var features_ResidencialPiamalim_197 = format_ResidencialPiamalim_197.readFeatures(json_ResidencialPiamalim_197, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPiamalim_197 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPiamalim_197.addFeatures(features_ResidencialPiamalim_197);
var lyr_ResidencialPiamalim_197 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPiamalim_197, 
                style: style_ResidencialPiamalim_197,
                popuplayertitle: 'Residencial Piamalim',
                interactive: true,
    title: 'Residencial Piamalim<br />\
    <img src="styles/legend/ResidencialPiamalim_197_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialPiamalim_197_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialPiamalim_197_2.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialPiamalim_197_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialPiamalim_197_4.png" /> RUAS<br />' });
var format_ResidencialPiamalim_198 = new ol.format.GeoJSON();
var features_ResidencialPiamalim_198 = format_ResidencialPiamalim_198.readFeatures(json_ResidencialPiamalim_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPiamalim_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPiamalim_198.addFeatures(features_ResidencialPiamalim_198);
var lyr_ResidencialPiamalim_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPiamalim_198, 
                style: style_ResidencialPiamalim_198,
                popuplayertitle: 'Residencial Piamalim',
                interactive: true,
                title: '<img src="styles/legend/ResidencialPiamalim_198.png" /> Residencial Piamalim'
            });
var format_ResidencialParquedosPassaros_199 = new ol.format.GeoJSON();
var features_ResidencialParquedosPassaros_199 = format_ResidencialParquedosPassaros_199.readFeatures(json_ResidencialParquedosPassaros_199, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialParquedosPassaros_199 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialParquedosPassaros_199.addFeatures(features_ResidencialParquedosPassaros_199);
var lyr_ResidencialParquedosPassaros_199 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialParquedosPassaros_199, 
                style: style_ResidencialParquedosPassaros_199,
                popuplayertitle: 'Residencial Parque dos Passaros',
                interactive: true,
    title: 'Residencial Parque dos Passaros<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_199_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_199_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_199_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_199_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_199_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_199_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_199_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_199_7.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_199_8.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_199_9.png" /> VIELA<br />' });
var format_ResidencialParquedosPassaros_200 = new ol.format.GeoJSON();
var features_ResidencialParquedosPassaros_200 = format_ResidencialParquedosPassaros_200.readFeatures(json_ResidencialParquedosPassaros_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialParquedosPassaros_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialParquedosPassaros_200.addFeatures(features_ResidencialParquedosPassaros_200);
var lyr_ResidencialParquedosPassaros_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialParquedosPassaros_200, 
                style: style_ResidencialParquedosPassaros_200,
                popuplayertitle: 'Residencial Parque dos Passaros',
                interactive: true,
                title: '<img src="styles/legend/ResidencialParquedosPassaros_200.png" /> Residencial Parque dos Passaros'
            });
var format_ResicencialNairRetuciII_201 = new ol.format.GeoJSON();
var features_ResicencialNairRetuciII_201 = format_ResicencialNairRetuciII_201.readFeatures(json_ResicencialNairRetuciII_201, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuciII_201 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuciII_201.addFeatures(features_ResicencialNairRetuciII_201);
var lyr_ResicencialNairRetuciII_201 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuciII_201, 
                style: style_ResicencialNairRetuciII_201,
                popuplayertitle: 'Resicencial Nair Retuci II',
                interactive: true,
    title: 'Resicencial Nair Retuci II<br />\
    <img src="styles/legend/ResicencialNairRetuciII_201_0.png" /> APP<br />\
    <img src="styles/legend/ResicencialNairRetuciII_201_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResicencialNairRetuciII_201_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResicencialNairRetuciII_201_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResicencialNairRetuciII_201_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResicencialNairRetuciII_201_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResicencialNairRetuciII_201_6.png" /> RUAS<br />' });
var format_ResicencialNairRetuciII_202 = new ol.format.GeoJSON();
var features_ResicencialNairRetuciII_202 = format_ResicencialNairRetuciII_202.readFeatures(json_ResicencialNairRetuciII_202, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuciII_202 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuciII_202.addFeatures(features_ResicencialNairRetuciII_202);
var lyr_ResicencialNairRetuciII_202 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuciII_202, 
                style: style_ResicencialNairRetuciII_202,
                popuplayertitle: 'Resicencial Nair Retuci II',
                interactive: true,
                title: '<img src="styles/legend/ResicencialNairRetuciII_202.png" /> Resicencial Nair Retuci II'
            });
var format_ResicencialNairRetuci_203 = new ol.format.GeoJSON();
var features_ResicencialNairRetuci_203 = format_ResicencialNairRetuci_203.readFeatures(json_ResicencialNairRetuci_203, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuci_203 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuci_203.addFeatures(features_ResicencialNairRetuci_203);
var lyr_ResicencialNairRetuci_203 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuci_203, 
                style: style_ResicencialNairRetuci_203,
                popuplayertitle: 'Resicencial Nair Retuci',
                interactive: true,
    title: 'Resicencial Nair Retuci<br />\
    <img src="styles/legend/ResicencialNairRetuci_203_0.png" /> APP<br />\
    <img src="styles/legend/ResicencialNairRetuci_203_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResicencialNairRetuci_203_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResicencialNairRetuci_203_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/ResicencialNairRetuci_203_4.png" /> LOTES<br />\
    <img src="styles/legend/ResicencialNairRetuci_203_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResicencialNairRetuci_203_6.png" /> RUAS<br />\
    <img src="styles/legend/ResicencialNairRetuci_203_7.png" /> VIELA<br />' });
var format_ResicencialNairRetuci_204 = new ol.format.GeoJSON();
var features_ResicencialNairRetuci_204 = format_ResicencialNairRetuci_204.readFeatures(json_ResicencialNairRetuci_204, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuci_204 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuci_204.addFeatures(features_ResicencialNairRetuci_204);
var lyr_ResicencialNairRetuci_204 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuci_204, 
                style: style_ResicencialNairRetuci_204,
                popuplayertitle: 'Resicencial Nair Retuci',
                interactive: true,
                title: '<img src="styles/legend/ResicencialNairRetuci_204.png" /> Resicencial Nair Retuci'
            });
var format_ResidencialMoradadoBosque_205 = new ol.format.GeoJSON();
var features_ResidencialMoradadoBosque_205 = format_ResidencialMoradadoBosque_205.readFeatures(json_ResidencialMoradadoBosque_205, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMoradadoBosque_205 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMoradadoBosque_205.addFeatures(features_ResidencialMoradadoBosque_205);
var lyr_ResidencialMoradadoBosque_205 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMoradadoBosque_205, 
                style: style_ResidencialMoradadoBosque_205,
                popuplayertitle: 'Residencial Morada do Bosque',
                interactive: true,
    title: 'Residencial Morada do Bosque<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_205_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_205_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_205_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_205_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_205_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_205_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_205_6.png" /> RUAS<br />' });
var format_ResidencialMoradadoBosque_206 = new ol.format.GeoJSON();
var features_ResidencialMoradadoBosque_206 = format_ResidencialMoradadoBosque_206.readFeatures(json_ResidencialMoradadoBosque_206, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMoradadoBosque_206 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMoradadoBosque_206.addFeatures(features_ResidencialMoradadoBosque_206);
var lyr_ResidencialMoradadoBosque_206 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMoradadoBosque_206, 
                style: style_ResidencialMoradadoBosque_206,
                popuplayertitle: 'Residencial Morada do Bosque',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMoradadoBosque_206.png" /> Residencial Morada do Bosque'
            });
var format_ResidencialMarthaHelena_207 = new ol.format.GeoJSON();
var features_ResidencialMarthaHelena_207 = format_ResidencialMarthaHelena_207.readFeatures(json_ResidencialMarthaHelena_207, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarthaHelena_207 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarthaHelena_207.addFeatures(features_ResidencialMarthaHelena_207);
var lyr_ResidencialMarthaHelena_207 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarthaHelena_207, 
                style: style_ResidencialMarthaHelena_207,
                popuplayertitle: 'Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarthaHelena_207.png" /> Residencial Martha Helena'
            });
var format_ResidencialMarthaHelena_208 = new ol.format.GeoJSON();
var features_ResidencialMarthaHelena_208 = format_ResidencialMarthaHelena_208.readFeatures(json_ResidencialMarthaHelena_208, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarthaHelena_208 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarthaHelena_208.addFeatures(features_ResidencialMarthaHelena_208);
var lyr_ResidencialMarthaHelena_208 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarthaHelena_208, 
                style: style_ResidencialMarthaHelena_208,
                popuplayertitle: 'Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarthaHelena_208.png" /> Residencial Martha Helena'
            });
var format_ResidencialMarioTasso_209 = new ol.format.GeoJSON();
var features_ResidencialMarioTasso_209 = format_ResidencialMarioTasso_209.readFeatures(json_ResidencialMarioTasso_209, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarioTasso_209 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarioTasso_209.addFeatures(features_ResidencialMarioTasso_209);
var lyr_ResidencialMarioTasso_209 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarioTasso_209, 
                style: style_ResidencialMarioTasso_209,
                popuplayertitle: 'Residencial Mario Tasso',
                interactive: true,
    title: 'Residencial Mario Tasso<br />\
    <img src="styles/legend/ResidencialMarioTasso_209_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialMarioTasso_209_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialMarioTasso_209_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialMarioTasso_209_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialMarioTasso_209_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialMarioTasso_209_5.png" /> RUAS<br />' });
var format_ResidencialMarioTasso_210 = new ol.format.GeoJSON();
var features_ResidencialMarioTasso_210 = format_ResidencialMarioTasso_210.readFeatures(json_ResidencialMarioTasso_210, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarioTasso_210 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarioTasso_210.addFeatures(features_ResidencialMarioTasso_210);
var lyr_ResidencialMarioTasso_210 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarioTasso_210, 
                style: style_ResidencialMarioTasso_210,
                popuplayertitle: 'Residencial Mario Tasso',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarioTasso_210.png" /> Residencial Mario Tasso'
            });
var format_ResidencialMarianaAlarcon_211 = new ol.format.GeoJSON();
var features_ResidencialMarianaAlarcon_211 = format_ResidencialMarianaAlarcon_211.readFeatures(json_ResidencialMarianaAlarcon_211, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarianaAlarcon_211 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarianaAlarcon_211.addFeatures(features_ResidencialMarianaAlarcon_211);
var lyr_ResidencialMarianaAlarcon_211 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarianaAlarcon_211, 
                style: style_ResidencialMarianaAlarcon_211,
                popuplayertitle: 'Residencial Mariana Alarcon ',
                interactive: true,
    title: 'Residencial Mariana Alarcon <br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_211_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_211_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_211_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_211_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_211_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_211_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_211_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_211_7.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_211_8.png" /> VIELA<br />' });
var format_ResidencialMarianaAlarcon_212 = new ol.format.GeoJSON();
var features_ResidencialMarianaAlarcon_212 = format_ResidencialMarianaAlarcon_212.readFeatures(json_ResidencialMarianaAlarcon_212, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarianaAlarcon_212 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarianaAlarcon_212.addFeatures(features_ResidencialMarianaAlarcon_212);
var lyr_ResidencialMarianaAlarcon_212 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarianaAlarcon_212, 
                style: style_ResidencialMarianaAlarcon_212,
                popuplayertitle: 'Residencial Mariana Alarcon ',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarianaAlarcon_212.png" /> Residencial Mariana Alarcon '
            });
var format_ResidencialJardimCanada_213 = new ol.format.GeoJSON();
var features_ResidencialJardimCanada_213 = format_ResidencialJardimCanada_213.readFeatures(json_ResidencialJardimCanada_213, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJardimCanada_213 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJardimCanada_213.addFeatures(features_ResidencialJardimCanada_213);
var lyr_ResidencialJardimCanada_213 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJardimCanada_213, 
                style: style_ResidencialJardimCanada_213,
                popuplayertitle: 'Residencial Jardim Canada',
                interactive: true,
                title: '<img src="styles/legend/ResidencialJardimCanada_213.png" /> Residencial Jardim Canada'
            });
var format_ResidencialJardimCanada_214 = new ol.format.GeoJSON();
var features_ResidencialJardimCanada_214 = format_ResidencialJardimCanada_214.readFeatures(json_ResidencialJardimCanada_214, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJardimCanada_214 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJardimCanada_214.addFeatures(features_ResidencialJardimCanada_214);
var lyr_ResidencialJardimCanada_214 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJardimCanada_214, 
                style: style_ResidencialJardimCanada_214,
                popuplayertitle: 'Residencial Jardim Canada',
                interactive: true,
                title: '<img src="styles/legend/ResidencialJardimCanada_214.png" /> Residencial Jardim Canada'
            });
var format_ResidencialJabuticabeiras_215 = new ol.format.GeoJSON();
var features_ResidencialJabuticabeiras_215 = format_ResidencialJabuticabeiras_215.readFeatures(json_ResidencialJabuticabeiras_215, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJabuticabeiras_215 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJabuticabeiras_215.addFeatures(features_ResidencialJabuticabeiras_215);
var lyr_ResidencialJabuticabeiras_215 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJabuticabeiras_215, 
                style: style_ResidencialJabuticabeiras_215,
                popuplayertitle: 'Residencial Jabuticabeiras',
                interactive: true,
    title: 'Residencial Jabuticabeiras<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_215_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_215_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_215_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_215_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_215_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_215_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_215_6.png" /> RUAS<br />' });
var format_ResidencialJabuticabeiras_216 = new ol.format.GeoJSON();
var features_ResidencialJabuticabeiras_216 = format_ResidencialJabuticabeiras_216.readFeatures(json_ResidencialJabuticabeiras_216, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJabuticabeiras_216 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJabuticabeiras_216.addFeatures(features_ResidencialJabuticabeiras_216);
var lyr_ResidencialJabuticabeiras_216 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJabuticabeiras_216, 
                style: style_ResidencialJabuticabeiras_216,
                popuplayertitle: 'Residencial Jabuticabeiras',
                interactive: true,
                title: '<img src="styles/legend/ResidencialJabuticabeiras_216.png" /> Residencial Jabuticabeiras'
            });
var format_ResidencialGramadosII_217 = new ol.format.GeoJSON();
var features_ResidencialGramadosII_217 = format_ResidencialGramadosII_217.readFeatures(json_ResidencialGramadosII_217, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGramadosII_217 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGramadosII_217.addFeatures(features_ResidencialGramadosII_217);
var lyr_ResidencialGramadosII_217 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGramadosII_217, 
                style: style_ResidencialGramadosII_217,
                popuplayertitle: 'Residencial Gramados II',
                interactive: true,
    title: 'Residencial Gramados II<br />\
    <img src="styles/legend/ResidencialGramadosII_217_0.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialGramadosII_217_1.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialGramadosII_217_2.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialGramadosII_217_3.png" /> RUAS<br />' });
var format_ResidencialGramadosII_218 = new ol.format.GeoJSON();
var features_ResidencialGramadosII_218 = format_ResidencialGramadosII_218.readFeatures(json_ResidencialGramadosII_218, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGramadosII_218 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGramadosII_218.addFeatures(features_ResidencialGramadosII_218);
var lyr_ResidencialGramadosII_218 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGramadosII_218, 
                style: style_ResidencialGramadosII_218,
                popuplayertitle: 'Residencial Gramados II',
                interactive: true,
                title: '<img src="styles/legend/ResidencialGramadosII_218.png" /> Residencial Gramados II'
            });
var format_ResidencialGramados_219 = new ol.format.GeoJSON();
var features_ResidencialGramados_219 = format_ResidencialGramados_219.readFeatures(json_ResidencialGramados_219, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGramados_219 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGramados_219.addFeatures(features_ResidencialGramados_219);
var lyr_ResidencialGramados_219 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGramados_219, 
                style: style_ResidencialGramados_219,
                popuplayertitle: 'Residencial Gramados',
                interactive: true,
    title: 'Residencial Gramados<br />\
    <img src="styles/legend/ResidencialGramados_219_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialGramados_219_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialGramados_219_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialGramados_219_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialGramados_219_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialGramados_219_5.png" /> RUAS<br />' });
var format_ResidencialGramados_220 = new ol.format.GeoJSON();
var features_ResidencialGramados_220 = format_ResidencialGramados_220.readFeatures(json_ResidencialGramados_220, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGramados_220 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGramados_220.addFeatures(features_ResidencialGramados_220);
var lyr_ResidencialGramados_220 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGramados_220, 
                style: style_ResidencialGramados_220,
                popuplayertitle: 'Residencial Gramados',
                interactive: true,
                title: '<img src="styles/legend/ResidencialGramados_220.png" /> Residencial Gramados'
            });
var format_ResidencialGaia_221 = new ol.format.GeoJSON();
var features_ResidencialGaia_221 = format_ResidencialGaia_221.readFeatures(json_ResidencialGaia_221, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGaia_221 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGaia_221.addFeatures(features_ResidencialGaia_221);
var lyr_ResidencialGaia_221 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGaia_221, 
                style: style_ResidencialGaia_221,
                popuplayertitle: 'Residencial Gaia',
                interactive: true,
    title: 'Residencial Gaia<br />\
    <img src="styles/legend/ResidencialGaia_221_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialGaia_221_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialGaia_221_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialGaia_221_3.png" /> DESMEMBRAMENTO DOACAO DESAPROPRIACAO<br />\
    <img src="styles/legend/ResidencialGaia_221_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialGaia_221_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialGaia_221_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialGaia_221_7.png" /> VIELA<br />' });
var format_ResidencialGaia_222 = new ol.format.GeoJSON();
var features_ResidencialGaia_222 = format_ResidencialGaia_222.readFeatures(json_ResidencialGaia_222, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGaia_222 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGaia_222.addFeatures(features_ResidencialGaia_222);
var lyr_ResidencialGaia_222 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGaia_222, 
                style: style_ResidencialGaia_222,
                popuplayertitle: 'Residencial Gaia',
                interactive: true,
                title: '<img src="styles/legend/ResidencialGaia_222.png" /> Residencial Gaia'
            });
var format_ResidencialFrutuoso_223 = new ol.format.GeoJSON();
var features_ResidencialFrutuoso_223 = format_ResidencialFrutuoso_223.readFeatures(json_ResidencialFrutuoso_223, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialFrutuoso_223 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialFrutuoso_223.addFeatures(features_ResidencialFrutuoso_223);
var lyr_ResidencialFrutuoso_223 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialFrutuoso_223, 
                style: style_ResidencialFrutuoso_223,
                popuplayertitle: 'Residencial Frutuoso',
                interactive: true,
    title: 'Residencial Frutuoso<br />\
    <img src="styles/legend/ResidencialFrutuoso_223_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialFrutuoso_223_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialFrutuoso_223_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialFrutuoso_223_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialFrutuoso_223_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialFrutuoso_223_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialFrutuoso_223_6.png" /> RUAS<br />' });
var format_ResidencialFrutuoso_224 = new ol.format.GeoJSON();
var features_ResidencialFrutuoso_224 = format_ResidencialFrutuoso_224.readFeatures(json_ResidencialFrutuoso_224, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialFrutuoso_224 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialFrutuoso_224.addFeatures(features_ResidencialFrutuoso_224);
var lyr_ResidencialFrutuoso_224 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialFrutuoso_224, 
                style: style_ResidencialFrutuoso_224,
                popuplayertitle: 'Residencial Frutuoso',
                interactive: true,
                title: '<img src="styles/legend/ResidencialFrutuoso_224.png" /> Residencial Frutuoso'
            });
var format_ResidencialFaggioni_225 = new ol.format.GeoJSON();
var features_ResidencialFaggioni_225 = format_ResidencialFaggioni_225.readFeatures(json_ResidencialFaggioni_225, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialFaggioni_225 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialFaggioni_225.addFeatures(features_ResidencialFaggioni_225);
var lyr_ResidencialFaggioni_225 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialFaggioni_225, 
                style: style_ResidencialFaggioni_225,
                popuplayertitle: 'Residencial Faggioni',
                interactive: true,
    title: 'Residencial Faggioni<br />\
    <img src="styles/legend/ResidencialFaggioni_225_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialFaggioni_225_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialFaggioni_225_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialFaggioni_225_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialFaggioni_225_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialFaggioni_225_5.png" /> RUAS<br />' });
var format_ResidencialFaggioni_226 = new ol.format.GeoJSON();
var features_ResidencialFaggioni_226 = format_ResidencialFaggioni_226.readFeatures(json_ResidencialFaggioni_226, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialFaggioni_226 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialFaggioni_226.addFeatures(features_ResidencialFaggioni_226);
var lyr_ResidencialFaggioni_226 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialFaggioni_226, 
                style: style_ResidencialFaggioni_226,
                popuplayertitle: 'Residencial Faggioni',
                interactive: true,
                title: '<img src="styles/legend/ResidencialFaggioni_226.png" /> Residencial Faggioni'
            });
var format_ResidencialEssenza_227 = new ol.format.GeoJSON();
var features_ResidencialEssenza_227 = format_ResidencialEssenza_227.readFeatures(json_ResidencialEssenza_227, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialEssenza_227 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialEssenza_227.addFeatures(features_ResidencialEssenza_227);
var lyr_ResidencialEssenza_227 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialEssenza_227, 
                style: style_ResidencialEssenza_227,
                popuplayertitle: 'Residencial Essenza',
                interactive: true,
    title: 'Residencial Essenza<br />\
    <img src="styles/legend/ResidencialEssenza_227_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialEssenza_227_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialEssenza_227_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialEssenza_227_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialEssenza_227_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialEssenza_227_5.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialEssenza_227_6.png" /> PASSEIO<br />' });
var format_ResidencialEssenza_228 = new ol.format.GeoJSON();
var features_ResidencialEssenza_228 = format_ResidencialEssenza_228.readFeatures(json_ResidencialEssenza_228, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialEssenza_228 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialEssenza_228.addFeatures(features_ResidencialEssenza_228);
var lyr_ResidencialEssenza_228 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialEssenza_228, 
                style: style_ResidencialEssenza_228,
                popuplayertitle: 'Residencial Essenza',
                interactive: true,
                title: '<img src="styles/legend/ResidencialEssenza_228.png" /> Residencial Essenza'
            });
var format_ResidencialDomingosJardini_229 = new ol.format.GeoJSON();
var features_ResidencialDomingosJardini_229 = format_ResidencialDomingosJardini_229.readFeatures(json_ResidencialDomingosJardini_229, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialDomingosJardini_229 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialDomingosJardini_229.addFeatures(features_ResidencialDomingosJardini_229);
var lyr_ResidencialDomingosJardini_229 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialDomingosJardini_229, 
                style: style_ResidencialDomingosJardini_229,
                popuplayertitle: 'Residencial Domingos Jardini',
                interactive: true,
    title: 'Residencial Domingos Jardini<br />\
    <img src="styles/legend/ResidencialDomingosJardini_229_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialDomingosJardini_229_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialDomingosJardini_229_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialDomingosJardini_229_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialDomingosJardini_229_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialDomingosJardini_229_5.png" /> RUAS<br />' });
var format_ResidencialDomingosJardini_230 = new ol.format.GeoJSON();
var features_ResidencialDomingosJardini_230 = format_ResidencialDomingosJardini_230.readFeatures(json_ResidencialDomingosJardini_230, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialDomingosJardini_230 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialDomingosJardini_230.addFeatures(features_ResidencialDomingosJardini_230);
var lyr_ResidencialDomingosJardini_230 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialDomingosJardini_230, 
                style: style_ResidencialDomingosJardini_230,
                popuplayertitle: 'Residencial Domingos Jardini',
                interactive: true,
                title: '<img src="styles/legend/ResidencialDomingosJardini_230.png" /> Residencial Domingos Jardini'
            });
var format_ResidencialCintraAlves_231 = new ol.format.GeoJSON();
var features_ResidencialCintraAlves_231 = format_ResidencialCintraAlves_231.readFeatures(json_ResidencialCintraAlves_231, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialCintraAlves_231 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialCintraAlves_231.addFeatures(features_ResidencialCintraAlves_231);
var lyr_ResidencialCintraAlves_231 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialCintraAlves_231, 
                style: style_ResidencialCintraAlves_231,
                popuplayertitle: 'Residencial Cintra Alves',
                interactive: true,
    title: 'Residencial Cintra Alves<br />\
    <img src="styles/legend/ResidencialCintraAlves_231_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialCintraAlves_231_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialCintraAlves_231_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialCintraAlves_231_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialCintraAlves_231_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialCintraAlves_231_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialCintraAlves_231_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialCintraAlves_231_7.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialCintraAlves_231_8.png" /> VIELA<br />' });
var format_ResidencialCintraAlves_232 = new ol.format.GeoJSON();
var features_ResidencialCintraAlves_232 = format_ResidencialCintraAlves_232.readFeatures(json_ResidencialCintraAlves_232, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialCintraAlves_232 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialCintraAlves_232.addFeatures(features_ResidencialCintraAlves_232);
var lyr_ResidencialCintraAlves_232 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialCintraAlves_232, 
                style: style_ResidencialCintraAlves_232,
                popuplayertitle: 'Residencial Cintra Alves',
                interactive: true,
                title: '<img src="styles/legend/ResidencialCintraAlves_232.png" /> Residencial Cintra Alves'
            });
var format_ResidencialBoaVista_233 = new ol.format.GeoJSON();
var features_ResidencialBoaVista_233 = format_ResidencialBoaVista_233.readFeatures(json_ResidencialBoaVista_233, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialBoaVista_233 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialBoaVista_233.addFeatures(features_ResidencialBoaVista_233);
var lyr_ResidencialBoaVista_233 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialBoaVista_233, 
                style: style_ResidencialBoaVista_233,
                popuplayertitle: 'Residencial Boa Vista',
                interactive: true,
    title: 'Residencial Boa Vista<br />\
    <img src="styles/legend/ResidencialBoaVista_233_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialBoaVista_233_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialBoaVista_233_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialBoaVista_233_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialBoaVista_233_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialBoaVista_233_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialBoaVista_233_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialBoaVista_233_7.png" /> RUAS<br />' });
var format_ResidencialBoaVista_234 = new ol.format.GeoJSON();
var features_ResidencialBoaVista_234 = format_ResidencialBoaVista_234.readFeatures(json_ResidencialBoaVista_234, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialBoaVista_234 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialBoaVista_234.addFeatures(features_ResidencialBoaVista_234);
var lyr_ResidencialBoaVista_234 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialBoaVista_234, 
                style: style_ResidencialBoaVista_234,
                popuplayertitle: 'Residencial Boa Vista',
                interactive: true,
                title: '<img src="styles/legend/ResidencialBoaVista_234.png" /> Residencial Boa Vista'
            });
var format_ResidencialAltodaFazenda_235 = new ol.format.GeoJSON();
var features_ResidencialAltodaFazenda_235 = format_ResidencialAltodaFazenda_235.readFeatures(json_ResidencialAltodaFazenda_235, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialAltodaFazenda_235 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAltodaFazenda_235.addFeatures(features_ResidencialAltodaFazenda_235);
var lyr_ResidencialAltodaFazenda_235 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAltodaFazenda_235, 
                style: style_ResidencialAltodaFazenda_235,
                popuplayertitle: 'Residencial Alto da Fazenda',
                interactive: true,
    title: 'Residencial Alto da Fazenda<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_235_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_235_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_235_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_235_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_235_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_235_5.png" /> RUAS<br />' });
var format_ResidencialAltodaFazenda_236 = new ol.format.GeoJSON();
var features_ResidencialAltodaFazenda_236 = format_ResidencialAltodaFazenda_236.readFeatures(json_ResidencialAltodaFazenda_236, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialAltodaFazenda_236 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAltodaFazenda_236.addFeatures(features_ResidencialAltodaFazenda_236);
var lyr_ResidencialAltodaFazenda_236 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAltodaFazenda_236, 
                style: style_ResidencialAltodaFazenda_236,
                popuplayertitle: 'Residencial Alto da Fazenda',
                interactive: true,
                title: '<img src="styles/legend/ResidencialAltodaFazenda_236.png" /> Residencial Alto da Fazenda'
            });
var format_ResidencialAnaHelena_237 = new ol.format.GeoJSON();
var features_ResidencialAnaHelena_237 = format_ResidencialAnaHelena_237.readFeatures(json_ResidencialAnaHelena_237, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialAnaHelena_237 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAnaHelena_237.addFeatures(features_ResidencialAnaHelena_237);
var lyr_ResidencialAnaHelena_237 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAnaHelena_237, 
                style: style_ResidencialAnaHelena_237,
                popuplayertitle: 'Residencial Ana Helena',
                interactive: true,
    title: 'Residencial Ana Helena<br />\
    <img src="styles/legend/ResidencialAnaHelena_237_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialAnaHelena_237_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialAnaHelena_237_2.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialAnaHelena_237_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialAnaHelena_237_4.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialAnaHelena_237_5.png" /> VIELA<br />' });
var format_ResidencialAnaHelena_238 = new ol.format.GeoJSON();
var features_ResidencialAnaHelena_238 = format_ResidencialAnaHelena_238.readFeatures(json_ResidencialAnaHelena_238, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialAnaHelena_238 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAnaHelena_238.addFeatures(features_ResidencialAnaHelena_238);
var lyr_ResidencialAnaHelena_238 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAnaHelena_238, 
                style: style_ResidencialAnaHelena_238,
                popuplayertitle: 'Residencial Ana Helena',
                interactive: true,
                title: '<img src="styles/legend/ResidencialAnaHelena_238.png" /> Residencial Ana Helena'
            });
var format_ReservaAbaete_239 = new ol.format.GeoJSON();
var features_ReservaAbaete_239 = format_ReservaAbaete_239.readFeatures(json_ReservaAbaete_239, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ReservaAbaete_239 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservaAbaete_239.addFeatures(features_ReservaAbaete_239);
var lyr_ReservaAbaete_239 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservaAbaete_239, 
                style: style_ReservaAbaete_239,
                popuplayertitle: 'Reserva Abaete',
                interactive: true,
    title: 'Reserva Abaete<br />\
    <img src="styles/legend/ReservaAbaete_239_0.png" /> APP<br />\
    <img src="styles/legend/ReservaAbaete_239_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ReservaAbaete_239_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ReservaAbaete_239_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ReservaAbaete_239_4.png" /> LOTES<br />\
    <img src="styles/legend/ReservaAbaete_239_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ReservaAbaete_239_6.png" /> RUAS<br />' });
var format_ReservaAbaete_240 = new ol.format.GeoJSON();
var features_ReservaAbaete_240 = format_ReservaAbaete_240.readFeatures(json_ReservaAbaete_240, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ReservaAbaete_240 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservaAbaete_240.addFeatures(features_ReservaAbaete_240);
var lyr_ReservaAbaete_240 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservaAbaete_240, 
                style: style_ReservaAbaete_240,
                popuplayertitle: 'Reserva Abaete',
                interactive: true,
                title: '<img src="styles/legend/ReservaAbaete_240.png" /> Reserva Abaete'
            });
var format_RecantoMeneghetti_241 = new ol.format.GeoJSON();
var features_RecantoMeneghetti_241 = format_RecantoMeneghetti_241.readFeatures(json_RecantoMeneghetti_241, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoMeneghetti_241 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoMeneghetti_241.addFeatures(features_RecantoMeneghetti_241);
var lyr_RecantoMeneghetti_241 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoMeneghetti_241, 
                style: style_RecantoMeneghetti_241,
                popuplayertitle: 'Recanto Meneghetti',
                interactive: true,
    title: 'Recanto Meneghetti<br />\
    <img src="styles/legend/RecantoMeneghetti_241_0.png" /> APP<br />\
    <img src="styles/legend/RecantoMeneghetti_241_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RecantoMeneghetti_241_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/RecantoMeneghetti_241_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/RecantoMeneghetti_241_4.png" /> CICLOVIA<br />\
    <img src="styles/legend/RecantoMeneghetti_241_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/RecantoMeneghetti_241_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/RecantoMeneghetti_241_7.png" /> PASSEIO<br />\
    <img src="styles/legend/RecantoMeneghetti_241_8.png" /> RUAS<br />\
    <img src="styles/legend/RecantoMeneghetti_241_9.png" /> VIELA<br />' });
var format_RecantoMeneghetti_242 = new ol.format.GeoJSON();
var features_RecantoMeneghetti_242 = format_RecantoMeneghetti_242.readFeatures(json_RecantoMeneghetti_242, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoMeneghetti_242 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoMeneghetti_242.addFeatures(features_RecantoMeneghetti_242);
var lyr_RecantoMeneghetti_242 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoMeneghetti_242, 
                style: style_RecantoMeneghetti_242,
                popuplayertitle: 'Recanto Meneghetti',
                interactive: true,
                title: '<img src="styles/legend/RecantoMeneghetti_242.png" /> Recanto Meneghetti'
            });
var format_Quadra18VilaExposio_243 = new ol.format.GeoJSON();
var features_Quadra18VilaExposio_243 = format_Quadra18VilaExposio_243.readFeatures(json_Quadra18VilaExposio_243, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Quadra18VilaExposio_243 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quadra18VilaExposio_243.addFeatures(features_Quadra18VilaExposio_243);
var lyr_Quadra18VilaExposio_243 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quadra18VilaExposio_243, 
                style: style_Quadra18VilaExposio_243,
                popuplayertitle: 'Quadra 18 Vila Exposição',
                interactive: true,
    title: 'Quadra 18 Vila Exposição<br />\
    <img src="styles/legend/Quadra18VilaExposio_243_0.png" /> LOTES<br />\
    <img src="styles/legend/Quadra18VilaExposio_243_1.png" /> RUAS<br />\
    <img src="styles/legend/Quadra18VilaExposio_243_2.png" /> PASSEIO<br />' });
var format_Quadra18VilaExposio_244 = new ol.format.GeoJSON();
var features_Quadra18VilaExposio_244 = format_Quadra18VilaExposio_244.readFeatures(json_Quadra18VilaExposio_244, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Quadra18VilaExposio_244 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quadra18VilaExposio_244.addFeatures(features_Quadra18VilaExposio_244);
var lyr_Quadra18VilaExposio_244 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quadra18VilaExposio_244, 
                style: style_Quadra18VilaExposio_244,
                popuplayertitle: 'Quadra 18 Vila Exposição',
                interactive: true,
                title: '<img src="styles/legend/Quadra18VilaExposio_244.png" /> Quadra 18 Vila Exposição'
            });
var format_ProlongamentoSamelPark_245 = new ol.format.GeoJSON();
var features_ProlongamentoSamelPark_245 = format_ProlongamentoSamelPark_245.readFeatures(json_ProlongamentoSamelPark_245, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ProlongamentoSamelPark_245 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProlongamentoSamelPark_245.addFeatures(features_ProlongamentoSamelPark_245);
var lyr_ProlongamentoSamelPark_245 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProlongamentoSamelPark_245, 
                style: style_ProlongamentoSamelPark_245,
                popuplayertitle: 'Prolongamento Samel Park',
                interactive: true,
    title: 'Prolongamento Samel Park<br />\
    <img src="styles/legend/ProlongamentoSamelPark_245_0.png" /> APP<br />\
    <img src="styles/legend/ProlongamentoSamelPark_245_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ProlongamentoSamelPark_245_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ProlongamentoSamelPark_245_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ProlongamentoSamelPark_245_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ProlongamentoSamelPark_245_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ProlongamentoSamelPark_245_6.png" /> RUAS<br />\
    <img src="styles/legend/ProlongamentoSamelPark_245_7.png" /> PASSEIO<br />' });
var format_ProlongamentoSamelPark_246 = new ol.format.GeoJSON();
var features_ProlongamentoSamelPark_246 = format_ProlongamentoSamelPark_246.readFeatures(json_ProlongamentoSamelPark_246, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ProlongamentoSamelPark_246 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProlongamentoSamelPark_246.addFeatures(features_ProlongamentoSamelPark_246);
var lyr_ProlongamentoSamelPark_246 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProlongamentoSamelPark_246, 
                style: style_ProlongamentoSamelPark_246,
                popuplayertitle: 'Prolongamento Samel Park',
                interactive: true,
                title: '<img src="styles/legend/ProlongamentoSamelPark_246.png" /> Prolongamento Samel Park'
            });
var format_ParqueVillaLobos_247 = new ol.format.GeoJSON();
var features_ParqueVillaLobos_247 = format_ParqueVillaLobos_247.readFeatures(json_ParqueVillaLobos_247, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueVillaLobos_247 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueVillaLobos_247.addFeatures(features_ParqueVillaLobos_247);
var lyr_ParqueVillaLobos_247 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueVillaLobos_247, 
                style: style_ParqueVillaLobos_247,
                popuplayertitle: 'Parque Villa-Lobos',
                interactive: true,
    title: 'Parque Villa-Lobos<br />\
    <img src="styles/legend/ParqueVillaLobos_247_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueVillaLobos_247_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueVillaLobos_247_2.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/ParqueVillaLobos_247_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParqueVillaLobos_247_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueVillaLobos_247_5.png" /> RUAS<br />' });
var format_ParqueVillaLobos_248 = new ol.format.GeoJSON();
var features_ParqueVillaLobos_248 = format_ParqueVillaLobos_248.readFeatures(json_ParqueVillaLobos_248, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueVillaLobos_248 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueVillaLobos_248.addFeatures(features_ParqueVillaLobos_248);
var lyr_ParqueVillaLobos_248 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueVillaLobos_248, 
                style: style_ParqueVillaLobos_248,
                popuplayertitle: 'Parque Villa-Lobos',
                interactive: true,
                title: '<img src="styles/legend/ParqueVillaLobos_248.png" /> Parque Villa-Lobos'
            });
var format_ParquePalmeiraImperial_249 = new ol.format.GeoJSON();
var features_ParquePalmeiraImperial_249 = format_ParquePalmeiraImperial_249.readFeatures(json_ParquePalmeiraImperial_249, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquePalmeiraImperial_249 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquePalmeiraImperial_249.addFeatures(features_ParquePalmeiraImperial_249);
var lyr_ParquePalmeiraImperial_249 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquePalmeiraImperial_249, 
                style: style_ParquePalmeiraImperial_249,
                popuplayertitle: 'Parque Palmeira Imperial',
                interactive: true,
    title: 'Parque Palmeira Imperial<br />\
    <img src="styles/legend/ParquePalmeiraImperial_249_0.png" /> APP<br />\
    <img src="styles/legend/ParquePalmeiraImperial_249_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParquePalmeiraImperial_249_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParquePalmeiraImperial_249_3.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/ParquePalmeiraImperial_249_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParquePalmeiraImperial_249_5.png" /> LOTES<br />\
    <img src="styles/legend/ParquePalmeiraImperial_249_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ParquePalmeiraImperial_249_7.png" /> RUAS<br />' });
var format_ParquePalmeiraImperial_250 = new ol.format.GeoJSON();
var features_ParquePalmeiraImperial_250 = format_ParquePalmeiraImperial_250.readFeatures(json_ParquePalmeiraImperial_250, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquePalmeiraImperial_250 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquePalmeiraImperial_250.addFeatures(features_ParquePalmeiraImperial_250);
var lyr_ParquePalmeiraImperial_250 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquePalmeiraImperial_250, 
                style: style_ParquePalmeiraImperial_250,
                popuplayertitle: 'Parque Palmeira Imperial',
                interactive: true,
                title: '<img src="styles/legend/ParquePalmeiraImperial_250.png" /> Parque Palmeira Imperial'
            });
var format_ParqueJacarand_251 = new ol.format.GeoJSON();
var features_ParqueJacarand_251 = format_ParqueJacarand_251.readFeatures(json_ParqueJacarand_251, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueJacarand_251 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueJacarand_251.addFeatures(features_ParqueJacarand_251);
var lyr_ParqueJacarand_251 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueJacarand_251, 
                style: style_ParqueJacarand_251,
                popuplayertitle: 'Parque Jacarandá',
                interactive: true,
    title: 'Parque Jacarandá<br />\
    <img src="styles/legend/ParqueJacarand_251_0.png" /> APP<br />\
    <img src="styles/legend/ParqueJacarand_251_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueJacarand_251_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParqueJacarand_251_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueJacarand_251_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ParqueJacarand_251_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParqueJacarand_251_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueJacarand_251_7.png" /> RUAS<br />' });
var format_ParqueJacarand_252 = new ol.format.GeoJSON();
var features_ParqueJacarand_252 = format_ParqueJacarand_252.readFeatures(json_ParqueJacarand_252, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueJacarand_252 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueJacarand_252.addFeatures(features_ParqueJacarand_252);
var lyr_ParqueJacarand_252 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueJacarand_252, 
                style: style_ParqueJacarand_252,
                popuplayertitle: 'Parque Jacarandá',
                interactive: true,
                title: '<img src="styles/legend/ParqueJacarand_252.png" /> Parque Jacarandá'
            });
var format_ParqueFlora_253 = new ol.format.GeoJSON();
var features_ParqueFlora_253 = format_ParqueFlora_253.readFeatures(json_ParqueFlora_253, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueFlora_253 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueFlora_253.addFeatures(features_ParqueFlora_253);
var lyr_ParqueFlora_253 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueFlora_253, 
                style: style_ParqueFlora_253,
                popuplayertitle: 'Parque Flora',
                interactive: true,
    title: 'Parque Flora<br />\
    <img src="styles/legend/ParqueFlora_253_0.png" /> APP<br />\
    <img src="styles/legend/ParqueFlora_253_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueFlora_253_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueFlora_253_3.png" /> LOTES<br />\
    <img src="styles/legend/ParqueFlora_253_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueFlora_253_5.png" /> RUAS<br />\
    <img src="styles/legend/ParqueFlora_253_6.png" /> VIELA<br />' });
var format_ParqueFlora_254 = new ol.format.GeoJSON();
var features_ParqueFlora_254 = format_ParqueFlora_254.readFeatures(json_ParqueFlora_254, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueFlora_254 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueFlora_254.addFeatures(features_ParqueFlora_254);
var lyr_ParqueFlora_254 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueFlora_254, 
                style: style_ParqueFlora_254,
                popuplayertitle: 'Parque Flora',
                interactive: true,
                title: '<img src="styles/legend/ParqueFlora_254.png" /> Parque Flora'
            });
var format_ParquedosSabias_255 = new ol.format.GeoJSON();
var features_ParquedosSabias_255 = format_ParquedosSabias_255.readFeatures(json_ParquedosSabias_255, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosSabias_255 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosSabias_255.addFeatures(features_ParquedosSabias_255);
var lyr_ParquedosSabias_255 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosSabias_255, 
                style: style_ParquedosSabias_255,
                popuplayertitle: 'Parque dos Sabias',
                interactive: true,
    title: 'Parque dos Sabias<br />\
    <img src="styles/legend/ParquedosSabias_255_0.png" /> APP<br />\
    <img src="styles/legend/ParquedosSabias_255_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParquedosSabias_255_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParquedosSabias_255_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/ParquedosSabias_255_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParquedosSabias_255_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ParquedosSabias_255_6.png" /> RUAS<br />\
    <img src="styles/legend/ParquedosSabias_255_7.png" /> VIELA<br />' });
var format_ParquedosSabias_256 = new ol.format.GeoJSON();
var features_ParquedosSabias_256 = format_ParquedosSabias_256.readFeatures(json_ParquedosSabias_256, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosSabias_256 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosSabias_256.addFeatures(features_ParquedosSabias_256);
var lyr_ParquedosSabias_256 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosSabias_256, 
                style: style_ParquedosSabias_256,
                popuplayertitle: 'Parque dos Sabias',
                interactive: true,
                title: '<img src="styles/legend/ParquedosSabias_256.png" /> Parque dos Sabias'
            });
var format_ParquedosCoqueiros_257 = new ol.format.GeoJSON();
var features_ParquedosCoqueiros_257 = format_ParquedosCoqueiros_257.readFeatures(json_ParquedosCoqueiros_257, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosCoqueiros_257 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosCoqueiros_257.addFeatures(features_ParquedosCoqueiros_257);
var lyr_ParquedosCoqueiros_257 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosCoqueiros_257, 
                style: style_ParquedosCoqueiros_257,
                popuplayertitle: 'Parque dos Coqueiros',
                interactive: true,
    title: 'Parque dos Coqueiros<br />\
    <img src="styles/legend/ParquedosCoqueiros_257_0.png" /> APP<br />\
    <img src="styles/legend/ParquedosCoqueiros_257_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParquedosCoqueiros_257_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParquedosCoqueiros_257_3.png" /> LOTES<br />\
    <img src="styles/legend/ParquedosCoqueiros_257_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ParquedosCoqueiros_257_5.png" /> RUAS<br />\
    <img src="styles/legend/ParquedosCoqueiros_257_6.png" /> SERVIDAO<br />\
    <img src="styles/legend/ParquedosCoqueiros_257_7.png" /> VIELA<br />' });
var format_ParquedosCoqueiros_258 = new ol.format.GeoJSON();
var features_ParquedosCoqueiros_258 = format_ParquedosCoqueiros_258.readFeatures(json_ParquedosCoqueiros_258, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosCoqueiros_258 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosCoqueiros_258.addFeatures(features_ParquedosCoqueiros_258);
var lyr_ParquedosCoqueiros_258 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosCoqueiros_258, 
                style: style_ParquedosCoqueiros_258,
                popuplayertitle: 'Parque dos Coqueiros',
                interactive: true,
                title: '<img src="styles/legend/ParquedosCoqueiros_258.png" /> Parque dos Coqueiros'
            });
var format_ParqueAlvorada_259 = new ol.format.GeoJSON();
var features_ParqueAlvorada_259 = format_ParqueAlvorada_259.readFeatures(json_ParqueAlvorada_259, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueAlvorada_259 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAlvorada_259.addFeatures(features_ParqueAlvorada_259);
var lyr_ParqueAlvorada_259 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAlvorada_259, 
                style: style_ParqueAlvorada_259,
                popuplayertitle: 'Parque Alvorada',
                interactive: true,
    title: 'Parque Alvorada<br />\
    <img src="styles/legend/ParqueAlvorada_259_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueAlvorada_259_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueAlvorada_259_2.png" /> LOTES<br />\
    <img src="styles/legend/ParqueAlvorada_259_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueAlvorada_259_4.png" /> RUAS<br />' });
var format_ParqueAlvorada_260 = new ol.format.GeoJSON();
var features_ParqueAlvorada_260 = format_ParqueAlvorada_260.readFeatures(json_ParqueAlvorada_260, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueAlvorada_260 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAlvorada_260.addFeatures(features_ParqueAlvorada_260);
var lyr_ParqueAlvorada_260 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAlvorada_260, 
                style: style_ParqueAlvorada_260,
                popuplayertitle: 'Parque Alvorada',
                interactive: true,
                title: '<img src="styles/legend/ParqueAlvorada_260.png" /> Parque Alvorada'
            });
var format_ParagonFaseII_261 = new ol.format.GeoJSON();
var features_ParagonFaseII_261 = format_ParagonFaseII_261.readFeatures(json_ParagonFaseII_261, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParagonFaseII_261 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParagonFaseII_261.addFeatures(features_ParagonFaseII_261);
var lyr_ParagonFaseII_261 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParagonFaseII_261, 
                style: style_ParagonFaseII_261,
                popuplayertitle: 'Paragon Fase II',
                interactive: true,
    title: 'Paragon Fase II<br />\
    <img src="styles/legend/ParagonFaseII_261_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParagonFaseII_261_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParagonFaseII_261_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ParagonFaseII_261_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParagonFaseII_261_4.png" /> LOTES<br />\
    <img src="styles/legend/ParagonFaseII_261_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParagonFaseII_261_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ParagonFaseII_261_7.png" /> RUAS<br />\
    <img src="styles/legend/ParagonFaseII_261_8.png" /> VIELA<br />' });
var format_ParagonFaseII_262 = new ol.format.GeoJSON();
var features_ParagonFaseII_262 = format_ParagonFaseII_262.readFeatures(json_ParagonFaseII_262, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParagonFaseII_262 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParagonFaseII_262.addFeatures(features_ParagonFaseII_262);
var lyr_ParagonFaseII_262 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParagonFaseII_262, 
                style: style_ParagonFaseII_262,
                popuplayertitle: 'Paragon Fase II',
                interactive: true,
                title: '<img src="styles/legend/ParagonFaseII_262.png" /> Paragon Fase II'
            });
var format_Paragon_263 = new ol.format.GeoJSON();
var features_Paragon_263 = format_Paragon_263.readFeatures(json_Paragon_263, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Paragon_263 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paragon_263.addFeatures(features_Paragon_263);
var lyr_Paragon_263 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paragon_263, 
                style: style_Paragon_263,
                popuplayertitle: 'Paragon',
                interactive: true,
    title: 'Paragon<br />\
    <img src="styles/legend/Paragon_263_0.png" /> APP<br />\
    <img src="styles/legend/Paragon_263_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Paragon_263_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Paragon_263_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/Paragon_263_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/Paragon_263_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Paragon_263_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Paragon_263_7.png" /> PASSEIO<br />\
    <img src="styles/legend/Paragon_263_8.png" /> RUAS<br />\
    <img src="styles/legend/Paragon_263_9.png" /> VIELA<br />' });
var format_Paragon_264 = new ol.format.GeoJSON();
var features_Paragon_264 = format_Paragon_264.readFeatures(json_Paragon_264, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Paragon_264 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paragon_264.addFeatures(features_Paragon_264);
var lyr_Paragon_264 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paragon_264, 
                style: style_Paragon_264,
                popuplayertitle: 'Paragon',
                interactive: true,
                title: '<img src="styles/legend/Paragon_264.png" /> Paragon'
            });
var format_PalmeiraReal_265 = new ol.format.GeoJSON();
var features_PalmeiraReal_265 = format_PalmeiraReal_265.readFeatures(json_PalmeiraReal_265, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PalmeiraReal_265 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PalmeiraReal_265.addFeatures(features_PalmeiraReal_265);
var lyr_PalmeiraReal_265 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PalmeiraReal_265, 
                style: style_PalmeiraReal_265,
                popuplayertitle: 'Palmeira Real',
                interactive: true,
    title: 'Palmeira Real<br />\
    <img src="styles/legend/PalmeiraReal_265_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/PalmeiraReal_265_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/PalmeiraReal_265_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/PalmeiraReal_265_3.png" /> PASSEIO<br />\
    <img src="styles/legend/PalmeiraReal_265_4.png" /> RUAS<br />\
    <img src="styles/legend/PalmeiraReal_265_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_PalmeiraReal_266 = new ol.format.GeoJSON();
var features_PalmeiraReal_266 = format_PalmeiraReal_266.readFeatures(json_PalmeiraReal_266, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PalmeiraReal_266 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PalmeiraReal_266.addFeatures(features_PalmeiraReal_266);
var lyr_PalmeiraReal_266 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PalmeiraReal_266, 
                style: style_PalmeiraReal_266,
                popuplayertitle: 'Palmeira Real',
                interactive: true,
                title: '<img src="styles/legend/PalmeiraReal_266.png" /> Palmeira Real'
            });
var format_MoradadoVerdeII_267 = new ol.format.GeoJSON();
var features_MoradadoVerdeII_267 = format_MoradadoVerdeII_267.readFeatures(json_MoradadoVerdeII_267, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadoVerdeII_267 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadoVerdeII_267.addFeatures(features_MoradadoVerdeII_267);
var lyr_MoradadoVerdeII_267 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadoVerdeII_267, 
                style: style_MoradadoVerdeII_267,
                popuplayertitle: 'Morada do Verde II',
                interactive: true,
    title: 'Morada do Verde II<br />\
    <img src="styles/legend/MoradadoVerdeII_267_0.png" /> APP<br />\
    <img src="styles/legend/MoradadoVerdeII_267_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MoradadoVerdeII_267_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MoradadoVerdeII_267_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/MoradadoVerdeII_267_4.png" /> LOTES<br />\
    <img src="styles/legend/MoradadoVerdeII_267_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/MoradadoVerdeII_267_6.png" /> PASSEIO<br />\
    <img src="styles/legend/MoradadoVerdeII_267_7.png" /> RUAS<br />' });
var format_MoradadoVerdeII_268 = new ol.format.GeoJSON();
var features_MoradadoVerdeII_268 = format_MoradadoVerdeII_268.readFeatures(json_MoradadoVerdeII_268, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadoVerdeII_268 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadoVerdeII_268.addFeatures(features_MoradadoVerdeII_268);
var lyr_MoradadoVerdeII_268 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadoVerdeII_268, 
                style: style_MoradadoVerdeII_268,
                popuplayertitle: 'Morada do Verde II',
                interactive: true,
                title: '<img src="styles/legend/MoradadoVerdeII_268.png" /> Morada do Verde II'
            });
var format_MoradadaMata_269 = new ol.format.GeoJSON();
var features_MoradadaMata_269 = format_MoradadaMata_269.readFeatures(json_MoradadaMata_269, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadaMata_269 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadaMata_269.addFeatures(features_MoradadaMata_269);
var lyr_MoradadaMata_269 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadaMata_269, 
                style: style_MoradadaMata_269,
                popuplayertitle: 'Morada da Mata',
                interactive: true,
    title: 'Morada da Mata<br />\
    <img src="styles/legend/MoradadaMata_269_0.png" /> APP<br />\
    <img src="styles/legend/MoradadaMata_269_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MoradadaMata_269_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MoradadaMata_269_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/MoradadaMata_269_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MoradadaMata_269_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MoradadaMata_269_6.png" /> PASSEIO<br />\
    <img src="styles/legend/MoradadaMata_269_7.png" /> RUAS<br />' });
var format_MoradadaMata_270 = new ol.format.GeoJSON();
var features_MoradadaMata_270 = format_MoradadaMata_270.readFeatures(json_MoradadaMata_270, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadaMata_270 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadaMata_270.addFeatures(features_MoradadaMata_270);
var lyr_MoradadaMata_270 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadaMata_270, 
                style: style_MoradadaMata_270,
                popuplayertitle: 'Morada da Mata',
                interactive: true,
                title: '<img src="styles/legend/MoradadaMata_270.png" /> Morada da Mata'
            });
var format_Monti_271 = new ol.format.GeoJSON();
var features_Monti_271 = format_Monti_271.readFeatures(json_Monti_271, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Monti_271 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monti_271.addFeatures(features_Monti_271);
var lyr_Monti_271 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monti_271, 
                style: style_Monti_271,
                popuplayertitle: 'Montié',
                interactive: true,
    title: 'Montié<br />\
    <img src="styles/legend/Monti_271_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/Monti_271_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/Monti_271_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Monti_271_3.png" /> PASSEIO<br />\
    <img src="styles/legend/Monti_271_4.png" /> RUAS<br />\
    <img src="styles/legend/Monti_271_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_Monti_272 = new ol.format.GeoJSON();
var features_Monti_272 = format_Monti_272.readFeatures(json_Monti_272, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Monti_272 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monti_272.addFeatures(features_Monti_272);
var lyr_Monti_272 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monti_272, 
                style: style_Monti_272,
                popuplayertitle: 'Montié',
                interactive: true,
                title: '<img src="styles/legend/Monti_272.png" /> Montié'
            });
var format_MontBlancResidence_273 = new ol.format.GeoJSON();
var features_MontBlancResidence_273 = format_MontBlancResidence_273.readFeatures(json_MontBlancResidence_273, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MontBlancResidence_273 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontBlancResidence_273.addFeatures(features_MontBlancResidence_273);
var lyr_MontBlancResidence_273 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MontBlancResidence_273, 
                style: style_MontBlancResidence_273,
                popuplayertitle: 'Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/MontBlancResidence_273.png" /> Mont Blanc Residence'
            });
var format_MontBlancResidence_274 = new ol.format.GeoJSON();
var features_MontBlancResidence_274 = format_MontBlancResidence_274.readFeatures(json_MontBlancResidence_274, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MontBlancResidence_274 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontBlancResidence_274.addFeatures(features_MontBlancResidence_274);
var lyr_MontBlancResidence_274 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MontBlancResidence_274, 
                style: style_MontBlancResidence_274,
                popuplayertitle: 'Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/MontBlancResidence_274.png" /> Mont Blanc Residence'
            });
var format_MasterplanDespaschoal_275 = new ol.format.GeoJSON();
var features_MasterplanDespaschoal_275 = format_MasterplanDespaschoal_275.readFeatures(json_MasterplanDespaschoal_275, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasterplanDespaschoal_275 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasterplanDespaschoal_275.addFeatures(features_MasterplanDespaschoal_275);
var lyr_MasterplanDespaschoal_275 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasterplanDespaschoal_275, 
                style: style_MasterplanDespaschoal_275,
                popuplayertitle: 'Masterplan Despaschoal ',
                interactive: true,
    title: 'Masterplan Despaschoal <br />\
    <img src="styles/legend/MasterplanDespaschoal_275_0.png" /> APP<br />\
    <img src="styles/legend/MasterplanDespaschoal_275_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MasterplanDespaschoal_275_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/MasterplanDespaschoal_275_3.png" /> FUNCACAO<br />\
    <img src="styles/legend/MasterplanDespaschoal_275_4.png" /> INDUSTRIAL<br />\
    <img src="styles/legend/MasterplanDespaschoal_275_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MasterplanDespaschoal_275_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/MasterplanDespaschoal_275_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MasterplanDespaschoal_275_8.png" /> PASSEIO<br />\
    <img src="styles/legend/MasterplanDespaschoal_275_9.png" /> RUAS<br />' });
var format_MasterplanDespaschoal_276 = new ol.format.GeoJSON();
var features_MasterplanDespaschoal_276 = format_MasterplanDespaschoal_276.readFeatures(json_MasterplanDespaschoal_276, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasterplanDespaschoal_276 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasterplanDespaschoal_276.addFeatures(features_MasterplanDespaschoal_276);
var lyr_MasterplanDespaschoal_276 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasterplanDespaschoal_276, 
                style: style_MasterplanDespaschoal_276,
                popuplayertitle: 'Masterplan Despaschoal ',
                interactive: true,
                title: '<img src="styles/legend/MasterplanDespaschoal_276.png" /> Masterplan Despaschoal '
            });
var format_MasterplanDespaschoal_277 = new ol.format.GeoJSON();
var features_MasterplanDespaschoal_277 = format_MasterplanDespaschoal_277.readFeatures(json_MasterplanDespaschoal_277, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasterplanDespaschoal_277 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasterplanDespaschoal_277.addFeatures(features_MasterplanDespaschoal_277);
var lyr_MasterplanDespaschoal_277 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasterplanDespaschoal_277, 
                style: style_MasterplanDespaschoal_277,
                popuplayertitle: 'Masterplan Despaschoal ',
                interactive: true,
                title: '<img src="styles/legend/MasterplanDespaschoal_277.png" /> Masterplan Despaschoal '
            });
var format_MasteplanBildVitta_278 = new ol.format.GeoJSON();
var features_MasteplanBildVitta_278 = format_MasteplanBildVitta_278.readFeatures(json_MasteplanBildVitta_278, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasteplanBildVitta_278 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasteplanBildVitta_278.addFeatures(features_MasteplanBildVitta_278);
var lyr_MasteplanBildVitta_278 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasteplanBildVitta_278, 
                style: style_MasteplanBildVitta_278,
                popuplayertitle: 'Masteplan Bild/Vitta',
                interactive: true,
    title: 'Masteplan Bild/Vitta<br />\
    <img src="styles/legend/MasteplanBildVitta_278_0.png" /> APP<br />\
    <img src="styles/legend/MasteplanBildVitta_278_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MasteplanBildVitta_278_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MasteplanBildVitta_278_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/MasteplanBildVitta_278_4.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/MasteplanBildVitta_278_5.png" /> AREA VERDE<br />\
    <img src="styles/legend/MasteplanBildVitta_278_6.png" /> DESMEMBRAMENTO DOACAO<br />\
    <img src="styles/legend/MasteplanBildVitta_278_7.png" /> EIXOS<br />\
    <img src="styles/legend/MasteplanBildVitta_278_8.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MasteplanBildVitta_278_9.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MasteplanBildVitta_278_10.png" /> PASSEIO<br />\
    <img src="styles/legend/MasteplanBildVitta_278_11.png" /> RUAS<br />\
    <img src="styles/legend/MasteplanBildVitta_278_12.png" /> SERVIDAO<br />' });
var format_MasteplanBildVitta_279 = new ol.format.GeoJSON();
var features_MasteplanBildVitta_279 = format_MasteplanBildVitta_279.readFeatures(json_MasteplanBildVitta_279, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasteplanBildVitta_279 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasteplanBildVitta_279.addFeatures(features_MasteplanBildVitta_279);
var lyr_MasteplanBildVitta_279 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasteplanBildVitta_279, 
                style: style_MasteplanBildVitta_279,
                popuplayertitle: 'Masteplan Bild/Vitta',
                interactive: true,
                title: '<img src="styles/legend/MasteplanBildVitta_279.png" /> Masteplan Bild/Vitta'
            });
var format_MasteplanBildVitta_280 = new ol.format.GeoJSON();
var features_MasteplanBildVitta_280 = format_MasteplanBildVitta_280.readFeatures(json_MasteplanBildVitta_280, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasteplanBildVitta_280 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasteplanBildVitta_280.addFeatures(features_MasteplanBildVitta_280);
var lyr_MasteplanBildVitta_280 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasteplanBildVitta_280, 
                style: style_MasteplanBildVitta_280,
                popuplayertitle: 'Masteplan Bild/Vitta',
                interactive: true,
                title: '<img src="styles/legend/MasteplanBildVitta_280.png" /> Masteplan Bild/Vitta'
            });
var format_Loteamentolamo_281 = new ol.format.GeoJSON();
var features_Loteamentolamo_281 = format_Loteamentolamo_281.readFeatures(json_Loteamentolamo_281, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Loteamentolamo_281 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamentolamo_281.addFeatures(features_Loteamentolamo_281);
var lyr_Loteamentolamo_281 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamentolamo_281, 
                style: style_Loteamentolamo_281,
                popuplayertitle: 'Loteamento Álamo',
                interactive: true,
    title: 'Loteamento Álamo<br />\
    <img src="styles/legend/Loteamentolamo_281_0.png" /> APP<br />\
    <img src="styles/legend/Loteamentolamo_281_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Loteamentolamo_281_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Loteamentolamo_281_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/Loteamentolamo_281_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/Loteamentolamo_281_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/Loteamentolamo_281_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Loteamentolamo_281_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Loteamentolamo_281_8.png" /> PASSEIO<br />\
    <img src="styles/legend/Loteamentolamo_281_9.png" /> RUAS<br />\
    <img src="styles/legend/Loteamentolamo_281_10.png" /> VIELA<br />' });
var format_Loteamentolamo_282 = new ol.format.GeoJSON();
var features_Loteamentolamo_282 = format_Loteamentolamo_282.readFeatures(json_Loteamentolamo_282, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Loteamentolamo_282 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamentolamo_282.addFeatures(features_Loteamentolamo_282);
var lyr_Loteamentolamo_282 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamentolamo_282, 
                style: style_Loteamentolamo_282,
                popuplayertitle: 'Loteamento Álamo',
                interactive: true,
                title: '<img src="styles/legend/Loteamentolamo_282.png" /> Loteamento Álamo'
            });
var format_JardimStephani_283 = new ol.format.GeoJSON();
var features_JardimStephani_283 = format_JardimStephani_283.readFeatures(json_JardimStephani_283, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimStephani_283 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimStephani_283.addFeatures(features_JardimStephani_283);
var lyr_JardimStephani_283 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimStephani_283, 
                style: style_JardimStephani_283,
                popuplayertitle: 'Jardim Stephani',
                interactive: true,
    title: 'Jardim Stephani<br />\
    <img src="styles/legend/JardimStephani_283_0.png" /> LOTES<br />' });
var format_JardimStephani_284 = new ol.format.GeoJSON();
var features_JardimStephani_284 = format_JardimStephani_284.readFeatures(json_JardimStephani_284, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimStephani_284 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimStephani_284.addFeatures(features_JardimStephani_284);
var lyr_JardimStephani_284 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimStephani_284, 
                style: style_JardimStephani_284,
                popuplayertitle: 'Jardim Stephani',
                interactive: true,
                title: '<img src="styles/legend/JardimStephani_284.png" /> Jardim Stephani'
            });
var format_JardimPherola_285 = new ol.format.GeoJSON();
var features_JardimPherola_285 = format_JardimPherola_285.readFeatures(json_JardimPherola_285, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimPherola_285 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimPherola_285.addFeatures(features_JardimPherola_285);
var lyr_JardimPherola_285 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimPherola_285, 
                style: style_JardimPherola_285,
                popuplayertitle: 'Jardim Pherola',
                interactive: true,
                title: '<img src="styles/legend/JardimPherola_285.png" /> Jardim Pherola'
            });
var format_JardimPherola_286 = new ol.format.GeoJSON();
var features_JardimPherola_286 = format_JardimPherola_286.readFeatures(json_JardimPherola_286, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimPherola_286 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimPherola_286.addFeatures(features_JardimPherola_286);
var lyr_JardimPherola_286 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimPherola_286, 
                style: style_JardimPherola_286,
                popuplayertitle: 'Jardim Pherola',
                interactive: true,
                title: '<img src="styles/legend/JardimPherola_286.png" /> Jardim Pherola'
            });
var format_JardimNatal_287 = new ol.format.GeoJSON();
var features_JardimNatal_287 = format_JardimNatal_287.readFeatures(json_JardimNatal_287, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimNatal_287 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimNatal_287.addFeatures(features_JardimNatal_287);
var lyr_JardimNatal_287 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimNatal_287, 
                style: style_JardimNatal_287,
                popuplayertitle: 'Jardim Natal',
                interactive: true,
    title: 'Jardim Natal<br />\
    <img src="styles/legend/JardimNatal_287_0.png" /> APP<br />\
    <img src="styles/legend/JardimNatal_287_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimNatal_287_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimNatal_287_3.png" /> LOTES<br />\
    <img src="styles/legend/JardimNatal_287_4.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimNatal_287_5.png" /> RUAS<br />\
    <img src="styles/legend/JardimNatal_287_6.png" /> VIELA<br />' });
var format_JardimNatal_288 = new ol.format.GeoJSON();
var features_JardimNatal_288 = format_JardimNatal_288.readFeatures(json_JardimNatal_288, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimNatal_288 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimNatal_288.addFeatures(features_JardimNatal_288);
var lyr_JardimNatal_288 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimNatal_288, 
                style: style_JardimNatal_288,
                popuplayertitle: 'Jardim Natal',
                interactive: true,
                title: '<img src="styles/legend/JardimNatal_288.png" /> Jardim Natal'
            });
var format_JardimMariaLuiza_289 = new ol.format.GeoJSON();
var features_JardimMariaLuiza_289 = format_JardimMariaLuiza_289.readFeatures(json_JardimMariaLuiza_289, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimMariaLuiza_289 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaLuiza_289.addFeatures(features_JardimMariaLuiza_289);
var lyr_JardimMariaLuiza_289 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaLuiza_289, 
                style: style_JardimMariaLuiza_289,
                popuplayertitle: 'Jardim Maria Luiza',
                interactive: true,
    title: 'Jardim Maria Luiza<br />\
    <img src="styles/legend/JardimMariaLuiza_289_0.png" /> APP<br />\
    <img src="styles/legend/JardimMariaLuiza_289_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimMariaLuiza_289_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/JardimMariaLuiza_289_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimMariaLuiza_289_4.png" /> LOTES<br />\
    <img src="styles/legend/JardimMariaLuiza_289_5.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimMariaLuiza_289_6.png" /> RUAS<br />\
    <img src="styles/legend/JardimMariaLuiza_289_7.png" /> VIELA<br />' });
var format_JardimMariaLuiza_290 = new ol.format.GeoJSON();
var features_JardimMariaLuiza_290 = format_JardimMariaLuiza_290.readFeatures(json_JardimMariaLuiza_290, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimMariaLuiza_290 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaLuiza_290.addFeatures(features_JardimMariaLuiza_290);
var lyr_JardimMariaLuiza_290 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaLuiza_290, 
                style: style_JardimMariaLuiza_290,
                popuplayertitle: 'Jardim Maria Luiza',
                interactive: true,
                title: '<img src="styles/legend/JardimMariaLuiza_290.png" /> Jardim Maria Luiza'
            });
var format_JardimMariaAugusta_291 = new ol.format.GeoJSON();
var features_JardimMariaAugusta_291 = format_JardimMariaAugusta_291.readFeatures(json_JardimMariaAugusta_291, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimMariaAugusta_291 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaAugusta_291.addFeatures(features_JardimMariaAugusta_291);
var lyr_JardimMariaAugusta_291 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaAugusta_291, 
                style: style_JardimMariaAugusta_291,
                popuplayertitle: 'Jardim Maria Augusta',
                interactive: true,
    title: 'Jardim Maria Augusta<br />\
    <img src="styles/legend/JardimMariaAugusta_291_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimMariaAugusta_291_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/JardimMariaAugusta_291_2.png" /> LOTES<br />\
    <img src="styles/legend/JardimMariaAugusta_291_3.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimMariaAugusta_291_4.png" /> RUAS<br />\
    <img src="styles/legend/JardimMariaAugusta_291_5.png" /> VIELA<br />' });
var format_JardimMariaAugusta_292 = new ol.format.GeoJSON();
var features_JardimMariaAugusta_292 = format_JardimMariaAugusta_292.readFeatures(json_JardimMariaAugusta_292, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimMariaAugusta_292 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaAugusta_292.addFeatures(features_JardimMariaAugusta_292);
var lyr_JardimMariaAugusta_292 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaAugusta_292, 
                style: style_JardimMariaAugusta_292,
                popuplayertitle: 'Jardim Maria Augusta',
                interactive: true,
                title: '<img src="styles/legend/JardimMariaAugusta_292.png" /> Jardim Maria Augusta'
            });
var format_JardimHorizonte_293 = new ol.format.GeoJSON();
var features_JardimHorizonte_293 = format_JardimHorizonte_293.readFeatures(json_JardimHorizonte_293, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimHorizonte_293 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimHorizonte_293.addFeatures(features_JardimHorizonte_293);
var lyr_JardimHorizonte_293 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimHorizonte_293, 
                style: style_JardimHorizonte_293,
                popuplayertitle: 'Jardim Horizonte',
                interactive: true,
    title: 'Jardim Horizonte<br />\
    <img src="styles/legend/JardimHorizonte_293_0.png" /> APP<br />\
    <img src="styles/legend/JardimHorizonte_293_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimHorizonte_293_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimHorizonte_293_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/JardimHorizonte_293_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/JardimHorizonte_293_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/JardimHorizonte_293_6.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimHorizonte_293_7.png" /> RUAS<br />\
    <img src="styles/legend/JardimHorizonte_293_8.png" /> VIELA<br />' });
var format_JardimHorizonte_294 = new ol.format.GeoJSON();
var features_JardimHorizonte_294 = format_JardimHorizonte_294.readFeatures(json_JardimHorizonte_294, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimHorizonte_294 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimHorizonte_294.addFeatures(features_JardimHorizonte_294);
var lyr_JardimHorizonte_294 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimHorizonte_294, 
                style: style_JardimHorizonte_294,
                popuplayertitle: 'Jardim Horizonte',
                interactive: true,
                title: '<img src="styles/legend/JardimHorizonte_294.png" /> Jardim Horizonte'
            });
var format_JardimFlora_295 = new ol.format.GeoJSON();
var features_JardimFlora_295 = format_JardimFlora_295.readFeatures(json_JardimFlora_295, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimFlora_295 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimFlora_295.addFeatures(features_JardimFlora_295);
var lyr_JardimFlora_295 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimFlora_295, 
                style: style_JardimFlora_295,
                popuplayertitle: 'Jardim Flora',
                interactive: true,
    title: 'Jardim Flora<br />\
    <img src="styles/legend/JardimFlora_295_0.png" /> APP<br />\
    <img src="styles/legend/JardimFlora_295_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimFlora_295_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/JardimFlora_295_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/JardimFlora_295_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimFlora_295_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/JardimFlora_295_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/JardimFlora_295_7.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimFlora_295_8.png" /> RUAS<br />' });
var format_JardimFlora_296 = new ol.format.GeoJSON();
var features_JardimFlora_296 = format_JardimFlora_296.readFeatures(json_JardimFlora_296, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimFlora_296 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimFlora_296.addFeatures(features_JardimFlora_296);
var lyr_JardimFlora_296 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimFlora_296, 
                style: style_JardimFlora_296,
                popuplayertitle: 'Jardim Flora',
                interactive: true,
                title: '<img src="styles/legend/JardimFlora_296.png" /> Jardim Flora'
            });
var format_IrineuZanetiII_297 = new ol.format.GeoJSON();
var features_IrineuZanetiII_297 = format_IrineuZanetiII_297.readFeatures(json_IrineuZanetiII_297, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IrineuZanetiII_297 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrineuZanetiII_297.addFeatures(features_IrineuZanetiII_297);
var lyr_IrineuZanetiII_297 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrineuZanetiII_297, 
                style: style_IrineuZanetiII_297,
                popuplayertitle: 'Irineu Zaneti II',
                interactive: true,
    title: 'Irineu Zaneti II<br />\
    <img src="styles/legend/IrineuZanetiII_297_0.png" /> APP<br />\
    <img src="styles/legend/IrineuZanetiII_297_1.png" /> LOTES<br />\
    <img src="styles/legend/IrineuZanetiII_297_2.png" /> RUAS<br />\
    <img src="styles/legend/IrineuZanetiII_297_3.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/IrineuZanetiII_297_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/IrineuZanetiII_297_5.png" /> PASSEIO<br />' });
var format_IrineuZanetiII_298 = new ol.format.GeoJSON();
var features_IrineuZanetiII_298 = format_IrineuZanetiII_298.readFeatures(json_IrineuZanetiII_298, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IrineuZanetiII_298 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrineuZanetiII_298.addFeatures(features_IrineuZanetiII_298);
var lyr_IrineuZanetiII_298 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrineuZanetiII_298, 
                style: style_IrineuZanetiII_298,
                popuplayertitle: 'Irineu Zaneti II',
                interactive: true,
                title: '<img src="styles/legend/IrineuZanetiII_298.png" /> Irineu Zaneti II'
            });
var format_Infratcnica_299 = new ol.format.GeoJSON();
var features_Infratcnica_299 = format_Infratcnica_299.readFeatures(json_Infratcnica_299, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Infratcnica_299 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infratcnica_299.addFeatures(features_Infratcnica_299);
var lyr_Infratcnica_299 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infratcnica_299, 
                style: style_Infratcnica_299,
                popuplayertitle: 'Infratécnica',
                interactive: true,
    title: 'Infratécnica<br />\
    <img src="styles/legend/Infratcnica_299_0.png" /> APP<br />\
    <img src="styles/legend/Infratcnica_299_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Infratcnica_299_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Infratcnica_299_3.png" /> LOTES<br />\
    <img src="styles/legend/Infratcnica_299_4.png" /> PASSEIO<br />\
    <img src="styles/legend/Infratcnica_299_5.png" /> RUAS<br />' });
var format_Infratcnica_300 = new ol.format.GeoJSON();
var features_Infratcnica_300 = format_Infratcnica_300.readFeatures(json_Infratcnica_300, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Infratcnica_300 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infratcnica_300.addFeatures(features_Infratcnica_300);
var lyr_Infratcnica_300 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infratcnica_300, 
                style: style_Infratcnica_300,
                popuplayertitle: 'Infratécnica',
                interactive: true,
                title: '<img src="styles/legend/Infratcnica_300.png" /> Infratécnica'
            });
var format_HorizResidence_301 = new ol.format.GeoJSON();
var features_HorizResidence_301 = format_HorizResidence_301.readFeatures(json_HorizResidence_301, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HorizResidence_301 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HorizResidence_301.addFeatures(features_HorizResidence_301);
var lyr_HorizResidence_301 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HorizResidence_301, 
                style: style_HorizResidence_301,
                popuplayertitle: 'Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/HorizResidence_301.png" /> Horiz Residence'
            });
var format_HorizResidence_302 = new ol.format.GeoJSON();
var features_HorizResidence_302 = format_HorizResidence_302.readFeatures(json_HorizResidence_302, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HorizResidence_302 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HorizResidence_302.addFeatures(features_HorizResidence_302);
var lyr_HorizResidence_302 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HorizResidence_302, 
                style: style_HorizResidence_302,
                popuplayertitle: 'Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/HorizResidence_302.png" /> Horiz Residence'
            });
var format_GlebaNossaSenhoraAuxiliadora_303 = new ol.format.GeoJSON();
var features_GlebaNossaSenhoraAuxiliadora_303 = format_GlebaNossaSenhoraAuxiliadora_303.readFeatures(json_GlebaNossaSenhoraAuxiliadora_303, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GlebaNossaSenhoraAuxiliadora_303 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlebaNossaSenhoraAuxiliadora_303.addFeatures(features_GlebaNossaSenhoraAuxiliadora_303);
var lyr_GlebaNossaSenhoraAuxiliadora_303 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlebaNossaSenhoraAuxiliadora_303, 
                style: style_GlebaNossaSenhoraAuxiliadora_303,
                popuplayertitle: 'Gleba Nossa Senhora Auxiliadora',
                interactive: true,
                title: '<img src="styles/legend/GlebaNossaSenhoraAuxiliadora_303.png" /> Gleba Nossa Senhora Auxiliadora'
            });
var format_GlebaNossaSenhoraAuxiliadora_304 = new ol.format.GeoJSON();
var features_GlebaNossaSenhoraAuxiliadora_304 = format_GlebaNossaSenhoraAuxiliadora_304.readFeatures(json_GlebaNossaSenhoraAuxiliadora_304, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GlebaNossaSenhoraAuxiliadora_304 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlebaNossaSenhoraAuxiliadora_304.addFeatures(features_GlebaNossaSenhoraAuxiliadora_304);
var lyr_GlebaNossaSenhoraAuxiliadora_304 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlebaNossaSenhoraAuxiliadora_304, 
                style: style_GlebaNossaSenhoraAuxiliadora_304,
                popuplayertitle: 'Gleba Nossa Senhora Auxiliadora',
                interactive: true,
                title: '<img src="styles/legend/GlebaNossaSenhoraAuxiliadora_304.png" /> Gleba Nossa Senhora Auxiliadora'
            });
var format_Ferracini_305 = new ol.format.GeoJSON();
var features_Ferracini_305 = format_Ferracini_305.readFeatures(json_Ferracini_305, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Ferracini_305 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferracini_305.addFeatures(features_Ferracini_305);
var lyr_Ferracini_305 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferracini_305, 
                style: style_Ferracini_305,
                popuplayertitle: 'Ferracini',
                interactive: true,
    title: 'Ferracini<br />\
    <img src="styles/legend/Ferracini_305_0.png" /> APP<br />\
    <img src="styles/legend/Ferracini_305_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Ferracini_305_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Ferracini_305_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/Ferracini_305_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Ferracini_305_5.png" /> RUAS<br />\
    <img src="styles/legend/Ferracini_305_6.png" /> VIELA<br />\
    <img src="styles/legend/Ferracini_305_7.png" /> PASSEIO<br />' });
var format_Ferracini_306 = new ol.format.GeoJSON();
var features_Ferracini_306 = format_Ferracini_306.readFeatures(json_Ferracini_306, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Ferracini_306 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferracini_306.addFeatures(features_Ferracini_306);
var lyr_Ferracini_306 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferracini_306, 
                style: style_Ferracini_306,
                popuplayertitle: 'Ferracini',
                interactive: true,
                title: '<img src="styles/legend/Ferracini_306.png" /> Ferracini'
            });
var format_FrancaB6_307 = new ol.format.GeoJSON();
var features_FrancaB6_307 = format_FrancaB6_307.readFeatures(json_FrancaB6_307, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FrancaB6_307 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrancaB6_307.addFeatures(features_FrancaB6_307);
var lyr_FrancaB6_307 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrancaB6_307, 
                style: style_FrancaB6_307,
                popuplayertitle: 'Franca B6',
                interactive: true,
    title: 'Franca B6<br />\
    <img src="styles/legend/FrancaB6_307_0.png" /> APP<br />\
    <img src="styles/legend/FrancaB6_307_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/FrancaB6_307_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/FrancaB6_307_3.png" /> LOTES<br />\
    <img src="styles/legend/FrancaB6_307_4.png" /> RUAS<br />\
    <img src="styles/legend/FrancaB6_307_5.png" /> PASSEIO<br />' });
var format_FrancaB6_308 = new ol.format.GeoJSON();
var features_FrancaB6_308 = format_FrancaB6_308.readFeatures(json_FrancaB6_308, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FrancaB6_308 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrancaB6_308.addFeatures(features_FrancaB6_308);
var lyr_FrancaB6_308 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrancaB6_308, 
                style: style_FrancaB6_308,
                popuplayertitle: 'Franca B6',
                interactive: true,
                title: '<img src="styles/legend/FrancaB6_308.png" /> Franca B6'
            });
var format_FazendaProgresso_309 = new ol.format.GeoJSON();
var features_FazendaProgresso_309 = format_FazendaProgresso_309.readFeatures(json_FazendaProgresso_309, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaProgresso_309 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaProgresso_309.addFeatures(features_FazendaProgresso_309);
var lyr_FazendaProgresso_309 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaProgresso_309, 
                style: style_FazendaProgresso_309,
                popuplayertitle: 'Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/FazendaProgresso_309.png" /> Fazenda Progresso'
            });
var format_FazendaProgresso_310 = new ol.format.GeoJSON();
var features_FazendaProgresso_310 = format_FazendaProgresso_310.readFeatures(json_FazendaProgresso_310, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaProgresso_310 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaProgresso_310.addFeatures(features_FazendaProgresso_310);
var lyr_FazendaProgresso_310 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaProgresso_310, 
                style: style_FazendaProgresso_310,
                popuplayertitle: 'Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/FazendaProgresso_310.png" /> Fazenda Progresso'
            });
var format_FazendaeGranjaSantaRita2_311 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita2_311 = format_FazendaeGranjaSantaRita2_311.readFeatures(json_FazendaeGranjaSantaRita2_311, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaeGranjaSantaRita2_311 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita2_311.addFeatures(features_FazendaeGranjaSantaRita2_311);
var lyr_FazendaeGranjaSantaRita2_311 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita2_311, 
                style: style_FazendaeGranjaSantaRita2_311,
                popuplayertitle: 'Fazenda e Granja Santa Rita 2',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita2_311.png" /> Fazenda e Granja Santa Rita 2'
            });
var format_FazendaeGranjaSantaRita2_312 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita2_312 = format_FazendaeGranjaSantaRita2_312.readFeatures(json_FazendaeGranjaSantaRita2_312, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaeGranjaSantaRita2_312 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita2_312.addFeatures(features_FazendaeGranjaSantaRita2_312);
var lyr_FazendaeGranjaSantaRita2_312 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita2_312, 
                style: style_FazendaeGranjaSantaRita2_312,
                popuplayertitle: 'Fazenda e Granja Santa Rita 2',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita2_312.png" /> Fazenda e Granja Santa Rita 2'
            });
var format_FazendaeGranjaSantaRita_313 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita_313 = format_FazendaeGranjaSantaRita_313.readFeatures(json_FazendaeGranjaSantaRita_313, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaeGranjaSantaRita_313 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita_313.addFeatures(features_FazendaeGranjaSantaRita_313);
var lyr_FazendaeGranjaSantaRita_313 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita_313, 
                style: style_FazendaeGranjaSantaRita_313,
                popuplayertitle: 'Fazenda e Granja Santa Rita',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita_313.png" /> Fazenda e Granja Santa Rita'
            });
var format_FazendaeGranjaSantaRita_314 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita_314 = format_FazendaeGranjaSantaRita_314.readFeatures(json_FazendaeGranjaSantaRita_314, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaeGranjaSantaRita_314 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita_314.addFeatures(features_FazendaeGranjaSantaRita_314);
var lyr_FazendaeGranjaSantaRita_314 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita_314, 
                style: style_FazendaeGranjaSantaRita_314,
                popuplayertitle: 'Fazenda e Granja Santa Rita',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita_314.png" /> Fazenda e Granja Santa Rita'
            });
var format_Essence_315 = new ol.format.GeoJSON();
var features_Essence_315 = format_Essence_315.readFeatures(json_Essence_315, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Essence_315 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Essence_315.addFeatures(features_Essence_315);
var lyr_Essence_315 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Essence_315, 
                style: style_Essence_315,
                popuplayertitle: 'Essence',
                interactive: true,
                title: '<img src="styles/legend/Essence_315.png" /> Essence'
            });
var format_Essence_316 = new ol.format.GeoJSON();
var features_Essence_316 = format_Essence_316.readFeatures(json_Essence_316, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Essence_316 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Essence_316.addFeatures(features_Essence_316);
var lyr_Essence_316 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Essence_316, 
                style: style_Essence_316,
                popuplayertitle: 'Essence',
                interactive: true,
                title: '<img src="styles/legend/Essence_316.png" /> Essence'
            });
var format_Elias_317 = new ol.format.GeoJSON();
var features_Elias_317 = format_Elias_317.readFeatures(json_Elias_317, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Elias_317 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elias_317.addFeatures(features_Elias_317);
var lyr_Elias_317 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elias_317, 
                style: style_Elias_317,
                popuplayertitle: 'Elias',
                interactive: true,
    title: 'Elias<br />\
    <img src="styles/legend/Elias_317_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Elias_317_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/Elias_317_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Elias_317_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/Elias_317_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Elias_317_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Elias_317_6.png" /> PASSEIO<br />\
    <img src="styles/legend/Elias_317_7.png" /> RUAS<br />' });
var format_Elias_318 = new ol.format.GeoJSON();
var features_Elias_318 = format_Elias_318.readFeatures(json_Elias_318, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Elias_318 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elias_318.addFeatures(features_Elias_318);
var lyr_Elias_318 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elias_318, 
                style: style_Elias_318,
                popuplayertitle: 'Elias',
                interactive: true,
                title: '<img src="styles/legend/Elias_318.png" /> Elias'
            });
var format_EdifcioSolNascente_319 = new ol.format.GeoJSON();
var features_EdifcioSolNascente_319 = format_EdifcioSolNascente_319.readFeatures(json_EdifcioSolNascente_319, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioSolNascente_319 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioSolNascente_319.addFeatures(features_EdifcioSolNascente_319);
var lyr_EdifcioSolNascente_319 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioSolNascente_319, 
                style: style_EdifcioSolNascente_319,
                popuplayertitle: 'Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EdifcioSolNascente_319.png" /> Edifício Sol Nascente'
            });
var format_EdifcioSolNascente_320 = new ol.format.GeoJSON();
var features_EdifcioSolNascente_320 = format_EdifcioSolNascente_320.readFeatures(json_EdifcioSolNascente_320, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioSolNascente_320 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioSolNascente_320.addFeatures(features_EdifcioSolNascente_320);
var lyr_EdifcioSolNascente_320 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioSolNascente_320, 
                style: style_EdifcioSolNascente_320,
                popuplayertitle: 'Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EdifcioSolNascente_320.png" /> Edifício Sol Nascente'
            });
var format_EdifcioRuadoSol_321 = new ol.format.GeoJSON();
var features_EdifcioRuadoSol_321 = format_EdifcioRuadoSol_321.readFeatures(json_EdifcioRuadoSol_321, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioRuadoSol_321 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioRuadoSol_321.addFeatures(features_EdifcioRuadoSol_321);
var lyr_EdifcioRuadoSol_321 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioRuadoSol_321, 
                style: style_EdifcioRuadoSol_321,
                popuplayertitle: 'Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EdifcioRuadoSol_321.png" /> Edifício Rua do Sol'
            });
var format_EdifcioRuadoSol_322 = new ol.format.GeoJSON();
var features_EdifcioRuadoSol_322 = format_EdifcioRuadoSol_322.readFeatures(json_EdifcioRuadoSol_322, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioRuadoSol_322 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioRuadoSol_322.addFeatures(features_EdifcioRuadoSol_322);
var lyr_EdifcioRuadoSol_322 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioRuadoSol_322, 
                style: style_EdifcioRuadoSol_322,
                popuplayertitle: 'Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EdifcioRuadoSol_322.png" /> Edifício Rua do Sol'
            });
var format_EdifcioResidencialHope_323 = new ol.format.GeoJSON();
var features_EdifcioResidencialHope_323 = format_EdifcioResidencialHope_323.readFeatures(json_EdifcioResidencialHope_323, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioResidencialHope_323 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioResidencialHope_323.addFeatures(features_EdifcioResidencialHope_323);
var lyr_EdifcioResidencialHope_323 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioResidencialHope_323, 
                style: style_EdifcioResidencialHope_323,
                popuplayertitle: 'Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EdifcioResidencialHope_323.png" /> Edifício Residencial Hope'
            });
var format_EdifcioResidencialHope_324 = new ol.format.GeoJSON();
var features_EdifcioResidencialHope_324 = format_EdifcioResidencialHope_324.readFeatures(json_EdifcioResidencialHope_324, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioResidencialHope_324 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioResidencialHope_324.addFeatures(features_EdifcioResidencialHope_324);
var lyr_EdifcioResidencialHope_324 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioResidencialHope_324, 
                style: style_EdifcioResidencialHope_324,
                popuplayertitle: 'Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EdifcioResidencialHope_324.png" /> Edifício Residencial Hope'
            });
var format_DiocesedeFranca_325 = new ol.format.GeoJSON();
var features_DiocesedeFranca_325 = format_DiocesedeFranca_325.readFeatures(json_DiocesedeFranca_325, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DiocesedeFranca_325 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiocesedeFranca_325.addFeatures(features_DiocesedeFranca_325);
var lyr_DiocesedeFranca_325 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiocesedeFranca_325, 
                style: style_DiocesedeFranca_325,
                popuplayertitle: 'Diocese de Franca',
                interactive: true,
    title: 'Diocese de Franca<br />\
    <img src="styles/legend/DiocesedeFranca_325_0.png" /> APP<br />\
    <img src="styles/legend/DiocesedeFranca_325_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/DiocesedeFranca_325_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/DiocesedeFranca_325_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/DiocesedeFranca_325_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/DiocesedeFranca_325_5.png" /> PASSEIO<br />\
    <img src="styles/legend/DiocesedeFranca_325_6.png" /> RUAS<br />' });
var format_DiocesedeFranca_326 = new ol.format.GeoJSON();
var features_DiocesedeFranca_326 = format_DiocesedeFranca_326.readFeatures(json_DiocesedeFranca_326, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DiocesedeFranca_326 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiocesedeFranca_326.addFeatures(features_DiocesedeFranca_326);
var lyr_DiocesedeFranca_326 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiocesedeFranca_326, 
                style: style_DiocesedeFranca_326,
                popuplayertitle: 'Diocese de Franca',
                interactive: true,
                title: '<img src="styles/legend/DiocesedeFranca_326.png" /> Diocese de Franca'
            });
var format_DaVinci_327 = new ol.format.GeoJSON();
var features_DaVinci_327 = format_DaVinci_327.readFeatures(json_DaVinci_327, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DaVinci_327 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaVinci_327.addFeatures(features_DaVinci_327);
var lyr_DaVinci_327 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaVinci_327, 
                style: style_DaVinci_327,
                popuplayertitle: 'Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/DaVinci_327.png" /> Da Vinci'
            });
var format_DaVinci_328 = new ol.format.GeoJSON();
var features_DaVinci_328 = format_DaVinci_328.readFeatures(json_DaVinci_328, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DaVinci_328 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaVinci_328.addFeatures(features_DaVinci_328);
var lyr_DaVinci_328 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaVinci_328, 
                style: style_DaVinci_328,
                popuplayertitle: 'Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/DaVinci_328.png" /> Da Vinci'
            });
var format_CondomnioIICityPetrpolis_329 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_329 = format_CondomnioIICityPetrpolis_329.readFeatures(json_CondomnioIICityPetrpolis_329, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioIICityPetrpolis_329 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_329.addFeatures(features_CondomnioIICityPetrpolis_329);
var lyr_CondomnioIICityPetrpolis_329 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_329, 
                style: style_CondomnioIICityPetrpolis_329,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
    title: 'Condomínio II City Petrópolis<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_329_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_329_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_329_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_329_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_329_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_329_5.png" /> RUAS<br />' });
var format_CondomnioIICityPetrpolis_330 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_330 = format_CondomnioIICityPetrpolis_330.readFeatures(json_CondomnioIICityPetrpolis_330, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioIICityPetrpolis_330 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_330.addFeatures(features_CondomnioIICityPetrpolis_330);
var lyr_CondomnioIICityPetrpolis_330 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_330, 
                style: style_CondomnioIICityPetrpolis_330,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
                title: '<img src="styles/legend/CondomnioIICityPetrpolis_330.png" /> Condomínio II City Petrópolis'
            });
var format_CondomnioICityPetrpolis_331 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_331 = format_CondomnioICityPetrpolis_331.readFeatures(json_CondomnioICityPetrpolis_331, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioICityPetrpolis_331 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_331.addFeatures(features_CondomnioICityPetrpolis_331);
var lyr_CondomnioICityPetrpolis_331 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_331, 
                style: style_CondomnioICityPetrpolis_331,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
    title: 'Condomínio I City Petrópolis<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_331_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_331_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_331_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_331_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_331_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_331_5.png" /> RUAS<br />' });
var format_CondomnioICityPetrpolis_332 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_332 = format_CondomnioICityPetrpolis_332.readFeatures(json_CondomnioICityPetrpolis_332, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioICityPetrpolis_332 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_332.addFeatures(features_CondomnioICityPetrpolis_332);
var lyr_CondomnioICityPetrpolis_332 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_332, 
                style: style_CondomnioICityPetrpolis_332,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
                title: '<img src="styles/legend/CondomnioICityPetrpolis_332.png" /> Condomínio I City Petrópolis'
            });
var format_Colorado_333 = new ol.format.GeoJSON();
var features_Colorado_333 = format_Colorado_333.readFeatures(json_Colorado_333, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Colorado_333 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colorado_333.addFeatures(features_Colorado_333);
var lyr_Colorado_333 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colorado_333, 
                style: style_Colorado_333,
                popuplayertitle: 'Colorado',
                interactive: true,
    title: 'Colorado<br />\
    <img src="styles/legend/Colorado_333_0.png" /> APP<br />\
    <img src="styles/legend/Colorado_333_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Colorado_333_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Colorado_333_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/Colorado_333_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Colorado_333_5.png" /> RUAS<br />\
    <img src="styles/legend/Colorado_333_6.png" /> PASSEIO<br />' });
var format_Colorado_334 = new ol.format.GeoJSON();
var features_Colorado_334 = format_Colorado_334.readFeatures(json_Colorado_334, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Colorado_334 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colorado_334.addFeatures(features_Colorado_334);
var lyr_Colorado_334 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colorado_334, 
                style: style_Colorado_334,
                popuplayertitle: 'Colorado',
                interactive: true,
                title: '<img src="styles/legend/Colorado_334.png" /> Colorado'
            });
var format_CidadeJardim_335 = new ol.format.GeoJSON();
var features_CidadeJardim_335 = format_CidadeJardim_335.readFeatures(json_CidadeJardim_335, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CidadeJardim_335 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CidadeJardim_335.addFeatures(features_CidadeJardim_335);
var lyr_CidadeJardim_335 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CidadeJardim_335, 
                style: style_CidadeJardim_335,
                popuplayertitle: 'Cidade Jardim',
                interactive: true,
    title: 'Cidade Jardim<br />\
    <img src="styles/legend/CidadeJardim_335_0.png" /> APP<br />\
    <img src="styles/legend/CidadeJardim_335_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CidadeJardim_335_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/CidadeJardim_335_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/CidadeJardim_335_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CidadeJardim_335_5.png" /> PASSEIO<br />\
    <img src="styles/legend/CidadeJardim_335_6.png" /> RUAS<br />\
    <img src="styles/legend/CidadeJardim_335_7.png" /> SERVIDAO<br />' });
var format_CidadeJardim_336 = new ol.format.GeoJSON();
var features_CidadeJardim_336 = format_CidadeJardim_336.readFeatures(json_CidadeJardim_336, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CidadeJardim_336 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CidadeJardim_336.addFeatures(features_CidadeJardim_336);
var lyr_CidadeJardim_336 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CidadeJardim_336, 
                style: style_CidadeJardim_336,
                popuplayertitle: 'Cidade Jardim',
                interactive: true,
                title: '<img src="styles/legend/CidadeJardim_336.png" /> Cidade Jardim'
            });
var format_ChacaraOlaria_337 = new ol.format.GeoJSON();
var features_ChacaraOlaria_337 = format_ChacaraOlaria_337.readFeatures(json_ChacaraOlaria_337, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChacaraOlaria_337 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraOlaria_337.addFeatures(features_ChacaraOlaria_337);
var lyr_ChacaraOlaria_337 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraOlaria_337, 
                style: style_ChacaraOlaria_337,
                popuplayertitle: 'Chacara Olaria',
                interactive: true,
                title: '<img src="styles/legend/ChacaraOlaria_337.png" /> Chacara Olaria'
            });
var format_ChacaraOlaria_338 = new ol.format.GeoJSON();
var features_ChacaraOlaria_338 = format_ChacaraOlaria_338.readFeatures(json_ChacaraOlaria_338, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChacaraOlaria_338 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraOlaria_338.addFeatures(features_ChacaraOlaria_338);
var lyr_ChacaraOlaria_338 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraOlaria_338, 
                style: style_ChacaraOlaria_338,
                popuplayertitle: 'Chacara Olaria',
                interactive: true,
                title: '<img src="styles/legend/ChacaraOlaria_338.png" /> Chacara Olaria'
            });
var format_ChacaraBelaVista_339 = new ol.format.GeoJSON();
var features_ChacaraBelaVista_339 = format_ChacaraBelaVista_339.readFeatures(json_ChacaraBelaVista_339, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChacaraBelaVista_339 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraBelaVista_339.addFeatures(features_ChacaraBelaVista_339);
var lyr_ChacaraBelaVista_339 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraBelaVista_339, 
                style: style_ChacaraBelaVista_339,
                popuplayertitle: 'Chacara Bela Vista',
                interactive: true,
    title: 'Chacara Bela Vista<br />\
    <img src="styles/legend/ChacaraBelaVista_339_0.png" /> APP<br />\
    <img src="styles/legend/ChacaraBelaVista_339_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ChacaraBelaVista_339_2.png" /> LOTES<br />\
    <img src="styles/legend/ChacaraBelaVista_339_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ChacaraBelaVista_339_4.png" /> RUAS<br />' });
var format_ChacaraBelaVista_340 = new ol.format.GeoJSON();
var features_ChacaraBelaVista_340 = format_ChacaraBelaVista_340.readFeatures(json_ChacaraBelaVista_340, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChacaraBelaVista_340 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraBelaVista_340.addFeatures(features_ChacaraBelaVista_340);
var lyr_ChacaraBelaVista_340 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraBelaVista_340, 
                style: style_ChacaraBelaVista_340,
                popuplayertitle: 'Chacara Bela Vista',
                interactive: true,
                title: '<img src="styles/legend/ChacaraBelaVista_340.png" /> Chacara Bela Vista'
            });
var format_BordadaMata_341 = new ol.format.GeoJSON();
var features_BordadaMata_341 = format_BordadaMata_341.readFeatures(json_BordadaMata_341, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BordadaMata_341 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BordadaMata_341.addFeatures(features_BordadaMata_341);
var lyr_BordadaMata_341 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BordadaMata_341, 
                style: style_BordadaMata_341,
                popuplayertitle: 'Borda da Mata',
                interactive: true,
    title: 'Borda da Mata<br />\
    <img src="styles/legend/BordadaMata_341_0.png" /> APP<br />\
    <img src="styles/legend/BordadaMata_341_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/BordadaMata_341_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/BordadaMata_341_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/BordadaMata_341_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/BordadaMata_341_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/BordadaMata_341_6.png" /> PASSEIO<br />\
    <img src="styles/legend/BordadaMata_341_7.png" /> RUAS<br />\
    <img src="styles/legend/BordadaMata_341_8.png" /> SERVIDAO<br />' });
var format_BordadaMata_342 = new ol.format.GeoJSON();
var features_BordadaMata_342 = format_BordadaMata_342.readFeatures(json_BordadaMata_342, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BordadaMata_342 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BordadaMata_342.addFeatures(features_BordadaMata_342);
var lyr_BordadaMata_342 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BordadaMata_342, 
                style: style_BordadaMata_342,
                popuplayertitle: 'Borda da Mata',
                interactive: true,
                title: '<img src="styles/legend/BordadaMata_342.png" /> Borda da Mata'
            });
var format_Arteris_343 = new ol.format.GeoJSON();
var features_Arteris_343 = format_Arteris_343.readFeatures(json_Arteris_343, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arteris_343 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arteris_343.addFeatures(features_Arteris_343);
var lyr_Arteris_343 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arteris_343, 
                style: style_Arteris_343,
                popuplayertitle: 'Arteris',
                interactive: true,
    title: 'Arteris<br />\
    <img src="styles/legend/Arteris_343_0.png" /> OAE EXISTENTE<br />\
    <img src="styles/legend/Arteris_343_1.png" /> OAE PROJETADA<br />\
    <img src="styles/legend/Arteris_343_2.png" /> PASSARELA EXISTENTE<br />\
    <img src="styles/legend/Arteris_343_3.png" /> PASSEIO PROJETADO<br />\
    <img src="styles/legend/Arteris_343_4.png" /> PAVIMENTO DO DISPOSITIVO<br />\
    <img src="styles/legend/Arteris_343_5.png" /> PAVIMENTO EXISTENTE<br />\
    <img src="styles/legend/Arteris_343_6.png" /> PAVIMENTO PREFEITURA<br />\
    <img src="styles/legend/Arteris_343_7.png" /> AREA DESAPROPRIADA<br />' });
var format_Arteris_344 = new ol.format.GeoJSON();
var features_Arteris_344 = format_Arteris_344.readFeatures(json_Arteris_344, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arteris_344 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arteris_344.addFeatures(features_Arteris_344);
var lyr_Arteris_344 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arteris_344, 
                style: style_Arteris_344,
                popuplayertitle: 'Arteris',
                interactive: true,
                title: '<img src="styles/legend/Arteris_344.png" /> Arteris'
            });
var format_ArterisFaixadeDomnioFrancaSP_3342_345 = new ol.format.GeoJSON();
var features_ArterisFaixadeDomnioFrancaSP_3342_345 = format_ArterisFaixadeDomnioFrancaSP_3342_345.readFeatures(json_ArterisFaixadeDomnioFrancaSP_3342_345, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ArterisFaixadeDomnioFrancaSP_3342_345 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArterisFaixadeDomnioFrancaSP_3342_345.addFeatures(features_ArterisFaixadeDomnioFrancaSP_3342_345);
var lyr_ArterisFaixadeDomnioFrancaSP_3342_345 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArterisFaixadeDomnioFrancaSP_3342_345, 
                style: style_ArterisFaixadeDomnioFrancaSP_3342_345,
                popuplayertitle: 'Arteris Faixa de Domínio Franca — SP_334 (#2)',
                interactive: true,
                title: '<img src="styles/legend/ArterisFaixadeDomnioFrancaSP_3342_345.png" /> Arteris Faixa de Domínio Franca — SP_334 (#2)'
            });
var format_ArterisFaixadeDomnioFrancaSP_3452_346 = new ol.format.GeoJSON();
var features_ArterisFaixadeDomnioFrancaSP_3452_346 = format_ArterisFaixadeDomnioFrancaSP_3452_346.readFeatures(json_ArterisFaixadeDomnioFrancaSP_3452_346, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ArterisFaixadeDomnioFrancaSP_3452_346 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArterisFaixadeDomnioFrancaSP_3452_346.addFeatures(features_ArterisFaixadeDomnioFrancaSP_3452_346);
var lyr_ArterisFaixadeDomnioFrancaSP_3452_346 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArterisFaixadeDomnioFrancaSP_3452_346, 
                style: style_ArterisFaixadeDomnioFrancaSP_3452_346,
                popuplayertitle: 'Arteris Faixa de Domínio Franca — SP_345 (#2)',
                interactive: true,
                title: '<img src="styles/legend/ArterisFaixadeDomnioFrancaSP_3452_346.png" /> Arteris Faixa de Domínio Franca — SP_345 (#2)'
            });
var format_ArterisFaixadeDomnioFrancaSPA_397334_347 = new ol.format.GeoJSON();
var features_ArterisFaixadeDomnioFrancaSPA_397334_347 = format_ArterisFaixadeDomnioFrancaSPA_397334_347.readFeatures(json_ArterisFaixadeDomnioFrancaSPA_397334_347, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ArterisFaixadeDomnioFrancaSPA_397334_347 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArterisFaixadeDomnioFrancaSPA_397334_347.addFeatures(features_ArterisFaixadeDomnioFrancaSPA_397334_347);
var lyr_ArterisFaixadeDomnioFrancaSPA_397334_347 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArterisFaixadeDomnioFrancaSPA_397334_347, 
                style: style_ArterisFaixadeDomnioFrancaSPA_397334_347,
                popuplayertitle: 'Arteris Faixa de Domínio Franca — SPA_397/334',
                interactive: true,
                title: '<img src="styles/legend/ArterisFaixadeDomnioFrancaSPA_397334_347.png" /> Arteris Faixa de Domínio Franca — SPA_397/334'
            });
var format_Arizona_348 = new ol.format.GeoJSON();
var features_Arizona_348 = format_Arizona_348.readFeatures(json_Arizona_348, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arizona_348 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arizona_348.addFeatures(features_Arizona_348);
var lyr_Arizona_348 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arizona_348, 
                style: style_Arizona_348,
                popuplayertitle: 'Arizona',
                interactive: true,
    title: 'Arizona<br />\
    <img src="styles/legend/Arizona_348_0.png" /> APP<br />\
    <img src="styles/legend/Arizona_348_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Arizona_348_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Arizona_348_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Arizona_348_4.png" /> PASSEIO<br />\
    <img src="styles/legend/Arizona_348_5.png" /> RUAS<br />\
    <img src="styles/legend/Arizona_348_6.png" /> VIELA<br />' });
var format_Arizona_349 = new ol.format.GeoJSON();
var features_Arizona_349 = format_Arizona_349.readFeatures(json_Arizona_349, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arizona_349 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arizona_349.addFeatures(features_Arizona_349);
var lyr_Arizona_349 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arizona_349, 
                style: style_Arizona_349,
                popuplayertitle: 'Arizona',
                interactive: true,
                title: '<img src="styles/legend/Arizona_349.png" /> Arizona'
            });
var format_AbuDhabiParadiseResortResidence_350 = new ol.format.GeoJSON();
var features_AbuDhabiParadiseResortResidence_350 = format_AbuDhabiParadiseResortResidence_350.readFeatures(json_AbuDhabiParadiseResortResidence_350, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AbuDhabiParadiseResortResidence_350 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbuDhabiParadiseResortResidence_350.addFeatures(features_AbuDhabiParadiseResortResidence_350);
var lyr_AbuDhabiParadiseResortResidence_350 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbuDhabiParadiseResortResidence_350, 
                style: style_AbuDhabiParadiseResortResidence_350,
                popuplayertitle: 'Abu Dhabi Paradise Resort Residence',
                interactive: true,
    title: 'Abu Dhabi Paradise Resort Residence<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_350_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_350_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_350_2.png" /> CICLOVIA<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_350_3.png" /> LOTES<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_350_4.png" /> PASSEIO<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_350_5.png" /> RUAS<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_350_6.png" /> VIELA<br />' });
var format_AbuDhabiParadiseResortResidence_351 = new ol.format.GeoJSON();
var features_AbuDhabiParadiseResortResidence_351 = format_AbuDhabiParadiseResortResidence_351.readFeatures(json_AbuDhabiParadiseResortResidence_351, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AbuDhabiParadiseResortResidence_351 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbuDhabiParadiseResortResidence_351.addFeatures(features_AbuDhabiParadiseResortResidence_351);
var lyr_AbuDhabiParadiseResortResidence_351 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbuDhabiParadiseResortResidence_351, 
                style: style_AbuDhabiParadiseResortResidence_351,
                popuplayertitle: 'Abu Dhabi Paradise Resort Residence',
                interactive: true,
                title: '<img src="styles/legend/AbuDhabiParadiseResortResidence_351.png" /> Abu Dhabi Paradise Resort Residence'
            });
var format_EtapaAprovado43unid_352 = new ol.format.GeoJSON();
var features_EtapaAprovado43unid_352 = format_EtapaAprovado43unid_352.readFeatures(json_EtapaAprovado43unid_352, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaAprovado43unid_352 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaAprovado43unid_352.addFeatures(features_EtapaAprovado43unid_352);
var lyr_EtapaAprovado43unid_352 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaAprovado43unid_352, 
                style: style_EtapaAprovado43unid_352,
                popuplayertitle: 'Etapa: Aprovado (43 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaAprovado43unid_352.png" /> Etapa: Aprovado (43 unid.)'
            });
var format_EtapaDiretriz22unid_353 = new ol.format.GeoJSON();
var features_EtapaDiretriz22unid_353 = format_EtapaDiretriz22unid_353.readFeatures(json_EtapaDiretriz22unid_353, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaDiretriz22unid_353 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaDiretriz22unid_353.addFeatures(features_EtapaDiretriz22unid_353);
var lyr_EtapaDiretriz22unid_353 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaDiretriz22unid_353, 
                style: style_EtapaDiretriz22unid_353,
                popuplayertitle: 'Etapa: Diretriz (22 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaDiretriz22unid_353.png" /> Etapa: Diretriz (22 unid.)'
            });
var format_EtapaDefinitiva10unid_354 = new ol.format.GeoJSON();
var features_EtapaDefinitiva10unid_354 = format_EtapaDefinitiva10unid_354.readFeatures(json_EtapaDefinitiva10unid_354, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaDefinitiva10unid_354 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaDefinitiva10unid_354.addFeatures(features_EtapaDefinitiva10unid_354);
var lyr_EtapaDefinitiva10unid_354 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaDefinitiva10unid_354, 
                style: style_EtapaDefinitiva10unid_354,
                popuplayertitle: 'Etapa: Definitiva 10 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaDefinitiva10unid_354.png" /> Etapa: Definitiva 10 unid.)'
            });
var format_EtapaPrvia24unid_355 = new ol.format.GeoJSON();
var features_EtapaPrvia24unid_355 = format_EtapaPrvia24unid_355.readFeatures(json_EtapaPrvia24unid_355, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaPrvia24unid_355 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaPrvia24unid_355.addFeatures(features_EtapaPrvia24unid_355);
var lyr_EtapaPrvia24unid_355 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaPrvia24unid_355, 
                style: style_EtapaPrvia24unid_355,
                popuplayertitle: 'Etapa: Prévia (24 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaPrvia24unid_355.png" /> Etapa: Prévia (24 unid.)'
            });
var format_IRREGULAR_356 = new ol.format.GeoJSON();
var features_IRREGULAR_356 = format_IRREGULAR_356.readFeatures(json_IRREGULAR_356, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IRREGULAR_356 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IRREGULAR_356.addFeatures(features_IRREGULAR_356);
var lyr_IRREGULAR_356 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IRREGULAR_356, 
                style: style_IRREGULAR_356,
                popuplayertitle: 'IRREGULAR',
                interactive: true,
                title: '<img src="styles/legend/IRREGULAR_356.png" /> IRREGULAR'
            });
var format_IRREGULAR_357 = new ol.format.GeoJSON();
var features_IRREGULAR_357 = format_IRREGULAR_357.readFeatures(json_IRREGULAR_357, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IRREGULAR_357 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IRREGULAR_357.addFeatures(features_IRREGULAR_357);
var lyr_IRREGULAR_357 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IRREGULAR_357, 
                style: style_IRREGULAR_357,
                popuplayertitle: 'IRREGULAR',
                interactive: true,
                title: '<img src="styles/legend/IRREGULAR_357.png" /> IRREGULAR'
            });
var format_APP1745unid_358 = new ol.format.GeoJSON();
var features_APP1745unid_358 = format_APP1745unid_358.readFeatures(json_APP1745unid_358, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP1745unid_358 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP1745unid_358.addFeatures(features_APP1745unid_358);
var lyr_APP1745unid_358 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP1745unid_358, 
                style: style_APP1745unid_358,
                popuplayertitle: 'APP (1.745 unid.)',
                interactive: true,
                title: '<img src="styles/legend/APP1745unid_358.png" /> APP (1.745 unid.)'
            });
var format_RiosDuplos84unid_359 = new ol.format.GeoJSON();
var features_RiosDuplos84unid_359 = format_RiosDuplos84unid_359.readFeatures(json_RiosDuplos84unid_359, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RiosDuplos84unid_359 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosDuplos84unid_359.addFeatures(features_RiosDuplos84unid_359);
var lyr_RiosDuplos84unid_359 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosDuplos84unid_359, 
                style: style_RiosDuplos84unid_359,
                popuplayertitle: 'Rios Duplos (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosDuplos84unid_359.png" /> Rios Duplos (84 unid.)'
            });
var format_MassasDgua270unid_360 = new ol.format.GeoJSON();
var features_MassasDgua270unid_360 = format_MassasDgua270unid_360.readFeatures(json_MassasDgua270unid_360, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MassasDgua270unid_360 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MassasDgua270unid_360.addFeatures(features_MassasDgua270unid_360);
var lyr_MassasDgua270unid_360 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MassasDgua270unid_360, 
                style: style_MassasDgua270unid_360,
                popuplayertitle: 'Massas D\'água (270 unid.)',
                interactive: true,
                title: '<img src="styles/legend/MassasDgua270unid_360.png" /> Massas D\'água (270 unid.)'
            });
var format_RiosSimples1842unid_361 = new ol.format.GeoJSON();
var features_RiosSimples1842unid_361 = format_RiosSimples1842unid_361.readFeatures(json_RiosSimples1842unid_361, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RiosSimples1842unid_361 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosSimples1842unid_361.addFeatures(features_RiosSimples1842unid_361);
var lyr_RiosSimples1842unid_361 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosSimples1842unid_361, 
                style: style_RiosSimples1842unid_361,
                popuplayertitle: 'Rios Simples (1.842 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosSimples1842unid_361.png" /> Rios Simples (1.842 unid.)'
            });
var format_CORPO_HIDRICO_CANAL_FECHADO_362 = new ol.format.GeoJSON();
var features_CORPO_HIDRICO_CANAL_FECHADO_362 = format_CORPO_HIDRICO_CANAL_FECHADO_362.readFeatures(json_CORPO_HIDRICO_CANAL_FECHADO_362, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CORPO_HIDRICO_CANAL_FECHADO_362 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORPO_HIDRICO_CANAL_FECHADO_362.addFeatures(features_CORPO_HIDRICO_CANAL_FECHADO_362);
var lyr_CORPO_HIDRICO_CANAL_FECHADO_362 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORPO_HIDRICO_CANAL_FECHADO_362, 
                style: style_CORPO_HIDRICO_CANAL_FECHADO_362,
                popuplayertitle: 'CORPO_HIDRICO_CANAL_FECHADO',
                interactive: true,
                title: '<img src="styles/legend/CORPO_HIDRICO_CANAL_FECHADO_362.png" /> CORPO_HIDRICO_CANAL_FECHADO'
            });
var format_CORPO_HIDRICO_CANAL_ABERTO_363 = new ol.format.GeoJSON();
var features_CORPO_HIDRICO_CANAL_ABERTO_363 = format_CORPO_HIDRICO_CANAL_ABERTO_363.readFeatures(json_CORPO_HIDRICO_CANAL_ABERTO_363, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CORPO_HIDRICO_CANAL_ABERTO_363 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORPO_HIDRICO_CANAL_ABERTO_363.addFeatures(features_CORPO_HIDRICO_CANAL_ABERTO_363);
var lyr_CORPO_HIDRICO_CANAL_ABERTO_363 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORPO_HIDRICO_CANAL_ABERTO_363, 
                style: style_CORPO_HIDRICO_CANAL_ABERTO_363,
                popuplayertitle: 'CORPO_HIDRICO_CANAL_ABERTO',
                interactive: true,
                title: '<img src="styles/legend/CORPO_HIDRICO_CANAL_ABERTO_363.png" /> CORPO_HIDRICO_CANAL_ABERTO'
            });
var format_Nascentes821unid_364 = new ol.format.GeoJSON();
var features_Nascentes821unid_364 = format_Nascentes821unid_364.readFeatures(json_Nascentes821unid_364, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Nascentes821unid_364 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes821unid_364.addFeatures(features_Nascentes821unid_364);
var lyr_Nascentes821unid_364 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nascentes821unid_364, 
                style: style_Nascentes821unid_364,
                popuplayertitle: 'Nascentes (821 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Nascentes821unid_364.png" /> Nascentes (821 unid.)'
            });
var format_AntigoAterrodaFazMunicipal_365 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazMunicipal_365 = format_AntigoAterrodaFazMunicipal_365.readFeatures(json_AntigoAterrodaFazMunicipal_365, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazMunicipal_365 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazMunicipal_365.addFeatures(features_AntigoAterrodaFazMunicipal_365);
var lyr_AntigoAterrodaFazMunicipal_365 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazMunicipal_365, 
                style: style_AntigoAterrodaFazMunicipal_365,
                popuplayertitle: 'Antigo Aterro da Faz. Municipal',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazMunicipal_365.png" /> Antigo Aterro da Faz. Municipal'
            });
var format_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_366 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_366 = format_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_366.readFeatures(json_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_366, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_366 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_366.addFeatures(features_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_366);
var lyr_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_366 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_366, 
                style: style_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_366,
                popuplayertitle: 'Antigo Aterro da Faz. Municipal - PMs-Gás/Avatz (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazMunicipalPMsGsAvatz15unid_366.png" /> Antigo Aterro da Faz. Municipal - PMs-Gás/Avatz (15 unid.)'
            });
var format_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_367 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_367 = format_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_367.readFeatures(json_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_367, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_367 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_367.addFeatures(features_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_367);
var lyr_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_367 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_367, 
                style: style_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_367,
                popuplayertitle: 'Antigo Aterro da Faz. Municipal - PMs-Água/Avatz (18 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazMunicipalPMsguaAvatz18unid_367.png" /> Antigo Aterro da Faz. Municipal - PMs-Água/Avatz (18 unid.)'
            });
var format_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_368 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_368 = format_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_368.readFeatures(json_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_368, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_368 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_368.addFeatures(features_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_368);
var lyr_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_368 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_368, 
                style: style_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_368,
                popuplayertitle: 'Antigo Aterro da Faz. Municipal - PMs-Água/Geo-Analítica (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_368.png" /> Antigo Aterro da Faz. Municipal - PMs-Água/Geo-Analítica (15 unid.)'
            });
var format_reaBdaFazMunicipal_369 = new ol.format.GeoJSON();
var features_reaBdaFazMunicipal_369 = format_reaBdaFazMunicipal_369.readFeatures(json_reaBdaFazMunicipal_369, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazMunicipal_369 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazMunicipal_369.addFeatures(features_reaBdaFazMunicipal_369);
var lyr_reaBdaFazMunicipal_369 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazMunicipal_369, 
                style: style_reaBdaFazMunicipal_369,
                popuplayertitle: 'Área "B" da Faz. Municipal',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazMunicipal_369.png" /> Área "B" da Faz. Municipal'
            });
var format_reaBdaFazMunicPoosMonitEngesolve7unid_370 = new ol.format.GeoJSON();
var features_reaBdaFazMunicPoosMonitEngesolve7unid_370 = format_reaBdaFazMunicPoosMonitEngesolve7unid_370.readFeatures(json_reaBdaFazMunicPoosMonitEngesolve7unid_370, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazMunicPoosMonitEngesolve7unid_370 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazMunicPoosMonitEngesolve7unid_370.addFeatures(features_reaBdaFazMunicPoosMonitEngesolve7unid_370);
var lyr_reaBdaFazMunicPoosMonitEngesolve7unid_370 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazMunicPoosMonitEngesolve7unid_370, 
                style: style_reaBdaFazMunicPoosMonitEngesolve7unid_370,
                popuplayertitle: 'Área "B" da Faz. Munic. - Poços Monit. Engesolve (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazMunicPoosMonitEngesolve7unid_370.png" /> Área "B" da Faz. Munic. - Poços Monit. Engesolve (7 unid.)'
            });
var format_AntigoAterrodasMaritacas_371 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacas_371 = format_AntigoAterrodasMaritacas_371.readFeatures(json_AntigoAterrodasMaritacas_371, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacas_371 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacas_371.addFeatures(features_AntigoAterrodasMaritacas_371);
var lyr_AntigoAterrodasMaritacas_371 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacas_371, 
                style: style_AntigoAterrodasMaritacas_371,
                popuplayertitle: 'Antigo Aterro das Maritacas',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacas_371.png" /> Antigo Aterro das Maritacas'
            });
var format_AntigoAterroMaritacas1Etapa28unid_372 = new ol.format.GeoJSON();
var features_AntigoAterroMaritacas1Etapa28unid_372 = format_AntigoAterroMaritacas1Etapa28unid_372.readFeatures(json_AntigoAterroMaritacas1Etapa28unid_372, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterroMaritacas1Etapa28unid_372 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterroMaritacas1Etapa28unid_372.addFeatures(features_AntigoAterroMaritacas1Etapa28unid_372);
var lyr_AntigoAterroMaritacas1Etapa28unid_372 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterroMaritacas1Etapa28unid_372, 
                style: style_AntigoAterroMaritacas1Etapa28unid_372,
                popuplayertitle: 'Antigo AterroMaritacas - 1ª Etapa (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterroMaritacas1Etapa28unid_372.png" /> Antigo AterroMaritacas - 1ª Etapa (28 unid.)'
            });
var format_ParqueZumbidosPalmares_373 = new ol.format.GeoJSON();
var features_ParqueZumbidosPalmares_373 = format_ParqueZumbidosPalmares_373.readFeatures(json_ParqueZumbidosPalmares_373, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueZumbidosPalmares_373 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueZumbidosPalmares_373.addFeatures(features_ParqueZumbidosPalmares_373);
var lyr_ParqueZumbidosPalmares_373 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueZumbidosPalmares_373, 
                style: style_ParqueZumbidosPalmares_373,
                popuplayertitle: 'Parque Zumbi dos Palmares',
                interactive: true,
                title: '<img src="styles/legend/ParqueZumbidosPalmares_373.png" /> Parque Zumbi dos Palmares'
            });
var format_AntigoAterroMaritacas3Etapa5unid_374 = new ol.format.GeoJSON();
var features_AntigoAterroMaritacas3Etapa5unid_374 = format_AntigoAterroMaritacas3Etapa5unid_374.readFeatures(json_AntigoAterroMaritacas3Etapa5unid_374, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterroMaritacas3Etapa5unid_374 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterroMaritacas3Etapa5unid_374.addFeatures(features_AntigoAterroMaritacas3Etapa5unid_374);
var lyr_AntigoAterroMaritacas3Etapa5unid_374 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterroMaritacas3Etapa5unid_374, 
                style: style_AntigoAterroMaritacas3Etapa5unid_374,
                popuplayertitle: 'Antigo Aterro Maritacas - 3ª Etapa (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterroMaritacas3Etapa5unid_374.png" /> Antigo Aterro Maritacas - 3ª Etapa (5 unid.)'
            });
var format_AntigoAterroMaritacas2Etapa41unid_375 = new ol.format.GeoJSON();
var features_AntigoAterroMaritacas2Etapa41unid_375 = format_AntigoAterroMaritacas2Etapa41unid_375.readFeatures(json_AntigoAterroMaritacas2Etapa41unid_375, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterroMaritacas2Etapa41unid_375 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterroMaritacas2Etapa41unid_375.addFeatures(features_AntigoAterroMaritacas2Etapa41unid_375);
var lyr_AntigoAterroMaritacas2Etapa41unid_375 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterroMaritacas2Etapa41unid_375, 
                style: style_AntigoAterroMaritacas2Etapa41unid_375,
                popuplayertitle: 'Antigo Aterro Maritacas - 2ª Etapa (41 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterroMaritacas2Etapa41unid_375.png" /> Antigo Aterro Maritacas - 2ª Etapa (41 unid.)'
            });
var format_PARTE_DA_AREA_G_AVERBADA_376 = new ol.format.GeoJSON();
var features_PARTE_DA_AREA_G_AVERBADA_376 = format_PARTE_DA_AREA_G_AVERBADA_376.readFeatures(json_PARTE_DA_AREA_G_AVERBADA_376, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARTE_DA_AREA_G_AVERBADA_376 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARTE_DA_AREA_G_AVERBADA_376.addFeatures(features_PARTE_DA_AREA_G_AVERBADA_376);
var lyr_PARTE_DA_AREA_G_AVERBADA_376 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARTE_DA_AREA_G_AVERBADA_376, 
                style: style_PARTE_DA_AREA_G_AVERBADA_376,
                popuplayertitle: 'PARTE_DA_AREA_G_AVERBADA',
                interactive: true,
                title: '<img src="styles/legend/PARTE_DA_AREA_G_AVERBADA_376.png" /> PARTE_DA_AREA_G_AVERBADA'
            });
var format_PARTE_DA_AREA_G_A_SER_AVERBADA_377 = new ol.format.GeoJSON();
var features_PARTE_DA_AREA_G_A_SER_AVERBADA_377 = format_PARTE_DA_AREA_G_A_SER_AVERBADA_377.readFeatures(json_PARTE_DA_AREA_G_A_SER_AVERBADA_377, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARTE_DA_AREA_G_A_SER_AVERBADA_377 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARTE_DA_AREA_G_A_SER_AVERBADA_377.addFeatures(features_PARTE_DA_AREA_G_A_SER_AVERBADA_377);
var lyr_PARTE_DA_AREA_G_A_SER_AVERBADA_377 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARTE_DA_AREA_G_A_SER_AVERBADA_377, 
                style: style_PARTE_DA_AREA_G_A_SER_AVERBADA_377,
                popuplayertitle: 'PARTE_DA_AREA_G_A_SER_AVERBADA',
                interactive: true,
                title: '<img src="styles/legend/PARTE_DA_AREA_G_A_SER_AVERBADA_377.png" /> PARTE_DA_AREA_G_A_SER_AVERBADA'
            });
var format_CONJUNTO_HABITACIONAL_378 = new ol.format.GeoJSON();
var features_CONJUNTO_HABITACIONAL_378 = format_CONJUNTO_HABITACIONAL_378.readFeatures(json_CONJUNTO_HABITACIONAL_378, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CONJUNTO_HABITACIONAL_378 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONJUNTO_HABITACIONAL_378.addFeatures(features_CONJUNTO_HABITACIONAL_378);
var lyr_CONJUNTO_HABITACIONAL_378 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONJUNTO_HABITACIONAL_378, 
                style: style_CONJUNTO_HABITACIONAL_378,
                popuplayertitle: 'CONJUNTO_HABITACIONAL',
                interactive: true,
                title: '<img src="styles/legend/CONJUNTO_HABITACIONAL_378.png" /> CONJUNTO_HABITACIONAL'
            });
var format_AV_ACESSO_COLEGIO_AGRICOLA_379 = new ol.format.GeoJSON();
var features_AV_ACESSO_COLEGIO_AGRICOLA_379 = format_AV_ACESSO_COLEGIO_AGRICOLA_379.readFeatures(json_AV_ACESSO_COLEGIO_AGRICOLA_379, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AV_ACESSO_COLEGIO_AGRICOLA_379 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AV_ACESSO_COLEGIO_AGRICOLA_379.addFeatures(features_AV_ACESSO_COLEGIO_AGRICOLA_379);
var lyr_AV_ACESSO_COLEGIO_AGRICOLA_379 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AV_ACESSO_COLEGIO_AGRICOLA_379, 
                style: style_AV_ACESSO_COLEGIO_AGRICOLA_379,
                popuplayertitle: 'AV_ACESSO_COLEGIO_AGRICOLA',
                interactive: true,
                title: '<img src="styles/legend/AV_ACESSO_COLEGIO_AGRICOLA_379.png" /> AV_ACESSO_COLEGIO_AGRICOLA'
            });
var format_AREA_N2_380 = new ol.format.GeoJSON();
var features_AREA_N2_380 = format_AREA_N2_380.readFeatures(json_AREA_N2_380, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_N2_380 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_N2_380.addFeatures(features_AREA_N2_380);
var lyr_AREA_N2_380 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_N2_380, 
                style: style_AREA_N2_380,
                popuplayertitle: 'AREA_N2',
                interactive: true,
                title: '<img src="styles/legend/AREA_N2_380.png" /> AREA_N2'
            });
var format_AREA_N1_381 = new ol.format.GeoJSON();
var features_AREA_N1_381 = format_AREA_N1_381.readFeatures(json_AREA_N1_381, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_N1_381 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_N1_381.addFeatures(features_AREA_N1_381);
var lyr_AREA_N1_381 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_N1_381, 
                style: style_AREA_N1_381,
                popuplayertitle: 'AREA_N1',
                interactive: true,
                title: '<img src="styles/legend/AREA_N1_381.png" /> AREA_N1'
            });
var format_AREA_N_382 = new ol.format.GeoJSON();
var features_AREA_N_382 = format_AREA_N_382.readFeatures(json_AREA_N_382, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_N_382 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_N_382.addFeatures(features_AREA_N_382);
var lyr_AREA_N_382 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_N_382, 
                style: style_AREA_N_382,
                popuplayertitle: 'AREA_N',
                interactive: true,
                title: '<img src="styles/legend/AREA_N_382.png" /> AREA_N'
            });
var format_AREA_K_383 = new ol.format.GeoJSON();
var features_AREA_K_383 = format_AREA_K_383.readFeatures(json_AREA_K_383, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_K_383 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_K_383.addFeatures(features_AREA_K_383);
var lyr_AREA_K_383 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_K_383, 
                style: style_AREA_K_383,
                popuplayertitle: 'AREA_K',
                interactive: true,
                title: '<img src="styles/legend/AREA_K_383.png" /> AREA_K'
            });
var format_AREA_J_384 = new ol.format.GeoJSON();
var features_AREA_J_384 = format_AREA_J_384.readFeatures(json_AREA_J_384, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_J_384 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_J_384.addFeatures(features_AREA_J_384);
var lyr_AREA_J_384 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_J_384, 
                style: style_AREA_J_384,
                popuplayertitle: 'AREA_J',
                interactive: true,
                title: '<img src="styles/legend/AREA_J_384.png" /> AREA_J'
            });
var format_AREA_I_385 = new ol.format.GeoJSON();
var features_AREA_I_385 = format_AREA_I_385.readFeatures(json_AREA_I_385, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_I_385 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_I_385.addFeatures(features_AREA_I_385);
var lyr_AREA_I_385 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_I_385, 
                style: style_AREA_I_385,
                popuplayertitle: 'AREA_I',
                interactive: true,
                title: '<img src="styles/legend/AREA_I_385.png" /> AREA_I'
            });
var format_AREA_H_386 = new ol.format.GeoJSON();
var features_AREA_H_386 = format_AREA_H_386.readFeatures(json_AREA_H_386, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_H_386 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_H_386.addFeatures(features_AREA_H_386);
var lyr_AREA_H_386 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_H_386, 
                style: style_AREA_H_386,
                popuplayertitle: 'AREA_H',
                interactive: true,
                title: '<img src="styles/legend/AREA_H_386.png" /> AREA_H'
            });
var format_AREA_G_387 = new ol.format.GeoJSON();
var features_AREA_G_387 = format_AREA_G_387.readFeatures(json_AREA_G_387, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_G_387 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_G_387.addFeatures(features_AREA_G_387);
var lyr_AREA_G_387 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_G_387, 
                style: style_AREA_G_387,
                popuplayertitle: 'AREA_G',
                interactive: true,
                title: '<img src="styles/legend/AREA_G_387.png" /> AREA_G'
            });
var format_AREA_F_388 = new ol.format.GeoJSON();
var features_AREA_F_388 = format_AREA_F_388.readFeatures(json_AREA_F_388, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_F_388 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_F_388.addFeatures(features_AREA_F_388);
var lyr_AREA_F_388 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_F_388, 
                style: style_AREA_F_388,
                popuplayertitle: 'AREA_F',
                interactive: true,
                title: '<img src="styles/legend/AREA_F_388.png" /> AREA_F'
            });
var format_AREA_E_389 = new ol.format.GeoJSON();
var features_AREA_E_389 = format_AREA_E_389.readFeatures(json_AREA_E_389, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_E_389 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_E_389.addFeatures(features_AREA_E_389);
var lyr_AREA_E_389 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_E_389, 
                style: style_AREA_E_389,
                popuplayertitle: 'AREA_E',
                interactive: true,
                title: '<img src="styles/legend/AREA_E_389.png" /> AREA_E'
            });
var format_AREA_D_390 = new ol.format.GeoJSON();
var features_AREA_D_390 = format_AREA_D_390.readFeatures(json_AREA_D_390, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_D_390 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_D_390.addFeatures(features_AREA_D_390);
var lyr_AREA_D_390 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_D_390, 
                style: style_AREA_D_390,
                popuplayertitle: 'AREA_D',
                interactive: true,
                title: '<img src="styles/legend/AREA_D_390.png" /> AREA_D'
            });
var format_AREA_C_391 = new ol.format.GeoJSON();
var features_AREA_C_391 = format_AREA_C_391.readFeatures(json_AREA_C_391, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_C_391 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_C_391.addFeatures(features_AREA_C_391);
var lyr_AREA_C_391 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_C_391, 
                style: style_AREA_C_391,
                popuplayertitle: 'AREA_C',
                interactive: true,
                title: '<img src="styles/legend/AREA_C_391.png" /> AREA_C'
            });
var format_AREA_B_392 = new ol.format.GeoJSON();
var features_AREA_B_392 = format_AREA_B_392.readFeatures(json_AREA_B_392, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_B_392 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_B_392.addFeatures(features_AREA_B_392);
var lyr_AREA_B_392 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_B_392, 
                style: style_AREA_B_392,
                popuplayertitle: 'AREA_B',
                interactive: true,
                title: '<img src="styles/legend/AREA_B_392.png" /> AREA_B'
            });
var format_AREA_A_393 = new ol.format.GeoJSON();
var features_AREA_A_393 = format_AREA_A_393.readFeatures(json_AREA_A_393, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_A_393 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_A_393.addFeatures(features_AREA_A_393);
var lyr_AREA_A_393 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_A_393, 
                style: style_AREA_A_393,
                popuplayertitle: 'AREA_A',
                interactive: true,
                title: '<img src="styles/legend/AREA_A_393.png" /> AREA_A'
            });
var format_PROPOSTO_394 = new ol.format.GeoJSON();
var features_PROPOSTO_394 = format_PROPOSTO_394.readFeatures(json_PROPOSTO_394, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PROPOSTO_394 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROPOSTO_394.addFeatures(features_PROPOSTO_394);
var lyr_PROPOSTO_394 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROPOSTO_394, 
                style: style_PROPOSTO_394,
                popuplayertitle: 'PROPOSTO',
                interactive: true,
                title: '<img src="styles/legend/PROPOSTO_394.png" /> PROPOSTO'
            });
var format_EM_FUNCIONAMENTO_395 = new ol.format.GeoJSON();
var features_EM_FUNCIONAMENTO_395 = format_EM_FUNCIONAMENTO_395.readFeatures(json_EM_FUNCIONAMENTO_395, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EM_FUNCIONAMENTO_395 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EM_FUNCIONAMENTO_395.addFeatures(features_EM_FUNCIONAMENTO_395);
var lyr_EM_FUNCIONAMENTO_395 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EM_FUNCIONAMENTO_395, 
                style: style_EM_FUNCIONAMENTO_395,
                popuplayertitle: 'EM_FUNCIONAMENTO',
                interactive: true,
                title: '<img src="styles/legend/EM_FUNCIONAMENTO_395.png" /> EM_FUNCIONAMENTO'
            });
var format_EM_CONSTRUCAO_396 = new ol.format.GeoJSON();
var features_EM_CONSTRUCAO_396 = format_EM_CONSTRUCAO_396.readFeatures(json_EM_CONSTRUCAO_396, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EM_CONSTRUCAO_396 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EM_CONSTRUCAO_396.addFeatures(features_EM_CONSTRUCAO_396);
var lyr_EM_CONSTRUCAO_396 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EM_CONSTRUCAO_396, 
                style: style_EM_CONSTRUCAO_396,
                popuplayertitle: 'EM_CONSTRUCAO',
                interactive: true,
                title: '<img src="styles/legend/EM_CONSTRUCAO_396.png" /> EM_CONSTRUCAO'
            });
var format_DrenagensExistentes_397 = new ol.format.GeoJSON();
var features_DrenagensExistentes_397 = format_DrenagensExistentes_397.readFeatures(json_DrenagensExistentes_397, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DrenagensExistentes_397 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrenagensExistentes_397.addFeatures(features_DrenagensExistentes_397);
var lyr_DrenagensExistentes_397 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrenagensExistentes_397, 
                style: style_DrenagensExistentes_397,
                popuplayertitle: 'Drenagens Existentes',
                interactive: true,
    title: 'Drenagens Existentes<br />\
    <img src="styles/legend/DrenagensExistentes_397_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DrenagensExistentes_397_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DrenagensExistentes_397_2.png" /> CAIXA<br />\
    <img src="styles/legend/DrenagensExistentes_397_3.png" /> CANALETA<br />\
    <img src="styles/legend/DrenagensExistentes_397_4.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DrenagensExistentes_397_5.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DrenagensExistentes_397_6.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DrenagensExistentes_397_7.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DrenagensExistentes_397_8.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DrenagensExistentes_397_9.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DrenagensExistentes_397_10.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DrenagensExistentes_397_11.png" /> PV<br />' });
var format_DRENAGEM_VILLAGIO_DI_FIRENZE_398 = new ol.format.GeoJSON();
var features_DRENAGEM_VILLAGIO_DI_FIRENZE_398 = format_DRENAGEM_VILLAGIO_DI_FIRENZE_398.readFeatures(json_DRENAGEM_VILLAGIO_DI_FIRENZE_398, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_VILLAGIO_DI_FIRENZE_398 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_VILLAGIO_DI_FIRENZE_398.addFeatures(features_DRENAGEM_VILLAGIO_DI_FIRENZE_398);
var lyr_DRENAGEM_VILLAGIO_DI_FIRENZE_398 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_VILLAGIO_DI_FIRENZE_398, 
                style: style_DRENAGEM_VILLAGIO_DI_FIRENZE_398,
                popuplayertitle: 'DRENAGEM_VILLAGIO_DI_FIRENZE',
                interactive: true,
    title: 'DRENAGEM_VILLAGIO_DI_FIRENZE<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_398_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_398_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_398_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_398_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_398_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_398_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_398_6.png" /> PV<br />' });
var format_DRENAGEM_VILLA_SANTA_GIANNA_399 = new ol.format.GeoJSON();
var features_DRENAGEM_VILLA_SANTA_GIANNA_399 = format_DRENAGEM_VILLA_SANTA_GIANNA_399.readFeatures(json_DRENAGEM_VILLA_SANTA_GIANNA_399, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_VILLA_SANTA_GIANNA_399 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_VILLA_SANTA_GIANNA_399.addFeatures(features_DRENAGEM_VILLA_SANTA_GIANNA_399);
var lyr_DRENAGEM_VILLA_SANTA_GIANNA_399 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_VILLA_SANTA_GIANNA_399, 
                style: style_DRENAGEM_VILLA_SANTA_GIANNA_399,
                popuplayertitle: 'DRENAGEM_VILLA_SANTA_GIANNA',
                interactive: true,
    title: 'DRENAGEM_VILLA_SANTA_GIANNA<br />\
    <img src="styles/legend/DRENAGEM_VILLA_SANTA_GIANNA_399_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_VILLA_SANTA_GIANNA_399_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_VILLA_SANTA_GIANNA_399_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_VILLA_SANTA_GIANNA_399_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_VILLA_SANTA_GIANNA_399_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_VILLA_SANTA_GIANNA_399_5.png" /> PV<br />' });
var format_DRENAGEM_VILA_TOTOLI_400 = new ol.format.GeoJSON();
var features_DRENAGEM_VILA_TOTOLI_400 = format_DRENAGEM_VILA_TOTOLI_400.readFeatures(json_DRENAGEM_VILA_TOTOLI_400, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_VILA_TOTOLI_400 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_VILA_TOTOLI_400.addFeatures(features_DRENAGEM_VILA_TOTOLI_400);
var lyr_DRENAGEM_VILA_TOTOLI_400 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_VILA_TOTOLI_400, 
                style: style_DRENAGEM_VILA_TOTOLI_400,
                popuplayertitle: 'DRENAGEM_VILA_TOTOLI',
                interactive: true,
    title: 'DRENAGEM_VILA_TOTOLI<br />\
    <img src="styles/legend/DRENAGEM_VILA_TOTOLI_400_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_VILA_TOTOLI_400_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_VILA_TOTOLI_400_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_VILA_TOTOLI_400_3.png" /> PV<br />' });
var format_DRENAGEM_VILA_REAL_401 = new ol.format.GeoJSON();
var features_DRENAGEM_VILA_REAL_401 = format_DRENAGEM_VILA_REAL_401.readFeatures(json_DRENAGEM_VILA_REAL_401, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_VILA_REAL_401 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_VILA_REAL_401.addFeatures(features_DRENAGEM_VILA_REAL_401);
var lyr_DRENAGEM_VILA_REAL_401 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_VILA_REAL_401, 
                style: style_DRENAGEM_VILA_REAL_401,
                popuplayertitle: 'DRENAGEM_VILA_REAL',
                interactive: true,
    title: 'DRENAGEM_VILA_REAL<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_401_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_401_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_401_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_401_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_401_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_401_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_401_6.png" /> PV<br />' });
var format_DRENAGEM_VILA_DORATTA_402 = new ol.format.GeoJSON();
var features_DRENAGEM_VILA_DORATTA_402 = format_DRENAGEM_VILA_DORATTA_402.readFeatures(json_DRENAGEM_VILA_DORATTA_402, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_VILA_DORATTA_402 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_VILA_DORATTA_402.addFeatures(features_DRENAGEM_VILA_DORATTA_402);
var lyr_DRENAGEM_VILA_DORATTA_402 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_VILA_DORATTA_402, 
                style: style_DRENAGEM_VILA_DORATTA_402,
                popuplayertitle: 'DRENAGEM_VILA_DORATTA',
                interactive: true,
    title: 'DRENAGEM_VILA_DORATTA<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_402_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_402_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_402_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_402_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_402_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_402_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_402_6.png" /> PV<br />' });
var format_DRENAGEM_SAO_PEDRO_II_403 = new ol.format.GeoJSON();
var features_DRENAGEM_SAO_PEDRO_II_403 = format_DRENAGEM_SAO_PEDRO_II_403.readFeatures(json_DRENAGEM_SAO_PEDRO_II_403, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_SAO_PEDRO_II_403 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_SAO_PEDRO_II_403.addFeatures(features_DRENAGEM_SAO_PEDRO_II_403);
var lyr_DRENAGEM_SAO_PEDRO_II_403 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_SAO_PEDRO_II_403, 
                style: style_DRENAGEM_SAO_PEDRO_II_403,
                popuplayertitle: 'DRENAGEM_SAO_PEDRO_II',
                interactive: true,
    title: 'DRENAGEM_SAO_PEDRO_II<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_403_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_403_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_403_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_403_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_403_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_403_5.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_403_6.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_403_7.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_403_8.png" /> PV<br />' });
var format_DRENAGEM_SANTA_FE_404 = new ol.format.GeoJSON();
var features_DRENAGEM_SANTA_FE_404 = format_DRENAGEM_SANTA_FE_404.readFeatures(json_DRENAGEM_SANTA_FE_404, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_SANTA_FE_404 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_SANTA_FE_404.addFeatures(features_DRENAGEM_SANTA_FE_404);
var lyr_DRENAGEM_SANTA_FE_404 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_SANTA_FE_404, 
                style: style_DRENAGEM_SANTA_FE_404,
                popuplayertitle: 'DRENAGEM_SANTA_FE',
                interactive: true,
    title: 'DRENAGEM_SANTA_FE<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_404_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_404_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_404_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_404_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_404_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_404_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_404_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_404_7.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_TELLINI_405 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_TELLINI_405 = format_DRENAGEM_RESIDENCIAL_TELLINI_405.readFeatures(json_DRENAGEM_RESIDENCIAL_TELLINI_405, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_TELLINI_405 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_TELLINI_405.addFeatures(features_DRENAGEM_RESIDENCIAL_TELLINI_405);
var lyr_DRENAGEM_RESIDENCIAL_TELLINI_405 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_TELLINI_405, 
                style: style_DRENAGEM_RESIDENCIAL_TELLINI_405,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_TELLINI',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_TELLINI<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_405_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_405_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_405_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_405_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_405_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_405_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_405_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_405_7.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406 = format_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406.readFeatures(json_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406.addFeatures(features_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406);
var lyr_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406, 
                style: style_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_SAO_TOMAZ',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_SAO_TOMAZ<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406_5.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407 = format_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407.readFeatures(json_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407.addFeatures(features_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407);
var lyr_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407, 
                style: style_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407_8.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_SANTA_INES_408 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_SANTA_INES_408 = format_DRENAGEM_RESIDENCIAL_SANTA_INES_408.readFeatures(json_DRENAGEM_RESIDENCIAL_SANTA_INES_408, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_SANTA_INES_408 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_SANTA_INES_408.addFeatures(features_DRENAGEM_RESIDENCIAL_SANTA_INES_408);
var lyr_DRENAGEM_RESIDENCIAL_SANTA_INES_408 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_SANTA_INES_408, 
                style: style_DRENAGEM_RESIDENCIAL_SANTA_INES_408,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_SANTA_INES',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_SANTA_INES<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_408_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_408_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_408_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_408_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_408_4.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_408_5.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_408_6.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_408_7.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_408_8.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_408_9.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409 = format_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409.readFeatures(json_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409.addFeatures(features_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409);
var lyr_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409, 
                style: style_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409_3.png" /> DIAMETRO 1800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409_8.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410 = format_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410.readFeatures(json_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410.addFeatures(features_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410);
var lyr_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410, 
                style: style_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_POUSO_ALEGRE',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_POUSO_ALEGRE<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410_4.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410_5.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410_6.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410_7.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410_8.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410_9.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411 = format_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411.readFeatures(json_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411.addFeatures(features_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411);
var lyr_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411, 
                style: style_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_PARQUE_FLORA',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_PARQUE_FLORA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411_8.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_PALERMO_412 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_PALERMO_412 = format_DRENAGEM_RESIDENCIAL_PALERMO_412.readFeatures(json_DRENAGEM_RESIDENCIAL_PALERMO_412, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_PALERMO_412 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_PALERMO_412.addFeatures(features_DRENAGEM_RESIDENCIAL_PALERMO_412);
var lyr_DRENAGEM_RESIDENCIAL_PALERMO_412 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_PALERMO_412, 
                style: style_DRENAGEM_RESIDENCIAL_PALERMO_412,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_PALERMO',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_PALERMO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_412_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_412_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_412_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_412_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_412_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_412_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_412_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_412_7.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_ITAPUA_413 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_ITAPUA_413 = format_DRENAGEM_RESIDENCIAL_ITAPUA_413.readFeatures(json_DRENAGEM_RESIDENCIAL_ITAPUA_413, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_ITAPUA_413 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_ITAPUA_413.addFeatures(features_DRENAGEM_RESIDENCIAL_ITAPUA_413);
var lyr_DRENAGEM_RESIDENCIAL_ITAPUA_413 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_ITAPUA_413, 
                style: style_DRENAGEM_RESIDENCIAL_ITAPUA_413,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_ITAPUA',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_ITAPUA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ITAPUA_413_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ITAPUA_413_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ITAPUA_413_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ITAPUA_413_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ITAPUA_413_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ITAPUA_413_5.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_GAIA_414 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_GAIA_414 = format_DRENAGEM_RESIDENCIAL_GAIA_414.readFeatures(json_DRENAGEM_RESIDENCIAL_GAIA_414, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_GAIA_414 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_GAIA_414.addFeatures(features_DRENAGEM_RESIDENCIAL_GAIA_414);
var lyr_DRENAGEM_RESIDENCIAL_GAIA_414 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_GAIA_414, 
                style: style_DRENAGEM_RESIDENCIAL_GAIA_414,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_GAIA',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_GAIA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_414_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_414_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_414_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_414_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_414_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_414_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_414_6.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_FERRACINI_415 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_FERRACINI_415 = format_DRENAGEM_RESIDENCIAL_FERRACINI_415.readFeatures(json_DRENAGEM_RESIDENCIAL_FERRACINI_415, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_FERRACINI_415 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_FERRACINI_415.addFeatures(features_DRENAGEM_RESIDENCIAL_FERRACINI_415);
var lyr_DRENAGEM_RESIDENCIAL_FERRACINI_415 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_FERRACINI_415, 
                style: style_DRENAGEM_RESIDENCIAL_FERRACINI_415,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_FERRACINI',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_FERRACINI<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FERRACINI_415_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FERRACINI_415_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FERRACINI_415_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FERRACINI_415_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FERRACINI_415_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FERRACINI_415_5.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_FAGGIONI_416 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_FAGGIONI_416 = format_DRENAGEM_RESIDENCIAL_FAGGIONI_416.readFeatures(json_DRENAGEM_RESIDENCIAL_FAGGIONI_416, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_FAGGIONI_416 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_FAGGIONI_416.addFeatures(features_DRENAGEM_RESIDENCIAL_FAGGIONI_416);
var lyr_DRENAGEM_RESIDENCIAL_FAGGIONI_416 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_FAGGIONI_416, 
                style: style_DRENAGEM_RESIDENCIAL_FAGGIONI_416,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_FAGGIONI',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_FAGGIONI<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_416_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_416_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_416_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_416_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_416_4.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_416_5.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_416_6.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_416_7.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_416_8.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_416_9.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_ECOSTILO_417 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_ECOSTILO_417 = format_DRENAGEM_RESIDENCIAL_ECOSTILO_417.readFeatures(json_DRENAGEM_RESIDENCIAL_ECOSTILO_417, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_ECOSTILO_417 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_ECOSTILO_417.addFeatures(features_DRENAGEM_RESIDENCIAL_ECOSTILO_417);
var lyr_DRENAGEM_RESIDENCIAL_ECOSTILO_417 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_ECOSTILO_417, 
                style: style_DRENAGEM_RESIDENCIAL_ECOSTILO_417,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_ECOSTILO',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_ECOSTILO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_417_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_417_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_417_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_417_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_417_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_417_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_417_6.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_DOURADO_418 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_DOURADO_418 = format_DRENAGEM_RESIDENCIAL_DOURADO_418.readFeatures(json_DRENAGEM_RESIDENCIAL_DOURADO_418, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_DOURADO_418 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_DOURADO_418.addFeatures(features_DRENAGEM_RESIDENCIAL_DOURADO_418);
var lyr_DRENAGEM_RESIDENCIAL_DOURADO_418 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_DOURADO_418, 
                style: style_DRENAGEM_RESIDENCIAL_DOURADO_418,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_DOURADO',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_DOURADO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_418_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_418_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_418_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_418_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_418_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_418_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_418_6.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_BALDASSARI_419 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_BALDASSARI_419 = format_DRENAGEM_RESIDENCIAL_BALDASSARI_419.readFeatures(json_DRENAGEM_RESIDENCIAL_BALDASSARI_419, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_BALDASSARI_419 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_BALDASSARI_419.addFeatures(features_DRENAGEM_RESIDENCIAL_BALDASSARI_419);
var lyr_DRENAGEM_RESIDENCIAL_BALDASSARI_419 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_BALDASSARI_419, 
                style: style_DRENAGEM_RESIDENCIAL_BALDASSARI_419,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_BALDASSARI',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_BALDASSARI<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_BALDASSARI_419_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_BALDASSARI_419_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_BALDASSARI_419_2.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_BALDASSARI_419_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_BALDASSARI_419_4.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_ANA_HELENA_420 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_ANA_HELENA_420 = format_DRENAGEM_RESIDENCIAL_ANA_HELENA_420.readFeatures(json_DRENAGEM_RESIDENCIAL_ANA_HELENA_420, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_ANA_HELENA_420 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_ANA_HELENA_420.addFeatures(features_DRENAGEM_RESIDENCIAL_ANA_HELENA_420);
var lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_420 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_ANA_HELENA_420, 
                style: style_DRENAGEM_RESIDENCIAL_ANA_HELENA_420,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_ANA_HELENA',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_ANA_HELENA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_420_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_420_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_420_2.png" /> CAIXA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_420_3.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_420_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_420_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_420_6.png" /> DISSIPADOR<br />' });
var format_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421 = format_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421.readFeatures(json_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421.addFeatures(features_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421);
var lyr_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421, 
                style: style_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421_5.png" /> PV<br />' });
var format_DRENAGEM_RECREIO_CAMPO_BELO_422 = new ol.format.GeoJSON();
var features_DRENAGEM_RECREIO_CAMPO_BELO_422 = format_DRENAGEM_RECREIO_CAMPO_BELO_422.readFeatures(json_DRENAGEM_RECREIO_CAMPO_BELO_422, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RECREIO_CAMPO_BELO_422 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RECREIO_CAMPO_BELO_422.addFeatures(features_DRENAGEM_RECREIO_CAMPO_BELO_422);
var lyr_DRENAGEM_RECREIO_CAMPO_BELO_422 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RECREIO_CAMPO_BELO_422, 
                style: style_DRENAGEM_RECREIO_CAMPO_BELO_422,
                popuplayertitle: 'DRENAGEM_RECREIO_CAMPO_BELO',
                interactive: true,
    title: 'DRENAGEM_RECREIO_CAMPO_BELO<br />\
    <img src="styles/legend/DRENAGEM_RECREIO_CAMPO_BELO_422_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RECREIO_CAMPO_BELO_422_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RECREIO_CAMPO_BELO_422_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RECREIO_CAMPO_BELO_422_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RECREIO_CAMPO_BELO_422_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RECREIO_CAMPO_BELO_422_5.png" /> PV<br />' });
var format_DRENAGEM_RECANTO_MENEGHETTI_423 = new ol.format.GeoJSON();
var features_DRENAGEM_RECANTO_MENEGHETTI_423 = format_DRENAGEM_RECANTO_MENEGHETTI_423.readFeatures(json_DRENAGEM_RECANTO_MENEGHETTI_423, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RECANTO_MENEGHETTI_423 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RECANTO_MENEGHETTI_423.addFeatures(features_DRENAGEM_RECANTO_MENEGHETTI_423);
var lyr_DRENAGEM_RECANTO_MENEGHETTI_423 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RECANTO_MENEGHETTI_423, 
                style: style_DRENAGEM_RECANTO_MENEGHETTI_423,
                popuplayertitle: 'DRENAGEM_RECANTO_MENEGHETTI',
                interactive: true,
    title: 'DRENAGEM_RECANTO_MENEGHETTI<br />\
    <img src="styles/legend/DRENAGEM_RECANTO_MENEGHETTI_423_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RECANTO_MENEGHETTI_423_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RECANTO_MENEGHETTI_423_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RECANTO_MENEGHETTI_423_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RECANTO_MENEGHETTI_423_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RECANTO_MENEGHETTI_423_5.png" /> PV<br />' });
var format_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424 = new ol.format.GeoJSON();
var features_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424 = format_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424.readFeatures(json_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424.addFeatures(features_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424);
var lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424, 
                style: style_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424,
                popuplayertitle: 'DRENAGEM_PROL_VILA_SANTA_TEREZINHA',
                interactive: true,
    title: 'DRENAGEM_PROL_VILA_SANTA_TEREZINHA<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424_4.png" /> PV<br />' });
var format_DRENAGEM_PROL_VILA_ISABEL_425 = new ol.format.GeoJSON();
var features_DRENAGEM_PROL_VILA_ISABEL_425 = format_DRENAGEM_PROL_VILA_ISABEL_425.readFeatures(json_DRENAGEM_PROL_VILA_ISABEL_425, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PROL_VILA_ISABEL_425 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PROL_VILA_ISABEL_425.addFeatures(features_DRENAGEM_PROL_VILA_ISABEL_425);
var lyr_DRENAGEM_PROL_VILA_ISABEL_425 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PROL_VILA_ISABEL_425, 
                style: style_DRENAGEM_PROL_VILA_ISABEL_425,
                popuplayertitle: 'DRENAGEM_PROL_VILA_ISABEL',
                interactive: true,
    title: 'DRENAGEM_PROL_VILA_ISABEL<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_ISABEL_425_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_ISABEL_425_1.png" /> DIAMETRO 300<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_ISABEL_425_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_ISABEL_425_3.png" /> DIAMETRO 600<br />' });
var format_DRENAGEM_PROL_JARDIM_MARTINS_426 = new ol.format.GeoJSON();
var features_DRENAGEM_PROL_JARDIM_MARTINS_426 = format_DRENAGEM_PROL_JARDIM_MARTINS_426.readFeatures(json_DRENAGEM_PROL_JARDIM_MARTINS_426, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PROL_JARDIM_MARTINS_426 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PROL_JARDIM_MARTINS_426.addFeatures(features_DRENAGEM_PROL_JARDIM_MARTINS_426);
var lyr_DRENAGEM_PROL_JARDIM_MARTINS_426 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PROL_JARDIM_MARTINS_426, 
                style: style_DRENAGEM_PROL_JARDIM_MARTINS_426,
                popuplayertitle: 'DRENAGEM_PROL_JARDIM_MARTINS',
                interactive: true,
    title: 'DRENAGEM_PROL_JARDIM_MARTINS<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_426_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_426_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_426_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_426_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_426_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_426_5.png" /> PV<br />' });
var format_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427 = new ol.format.GeoJSON();
var features_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427 = format_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427.readFeatures(json_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427.addFeatures(features_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427);
var lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427, 
                style: style_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427,
                popuplayertitle: 'DRENAGEM_POLO_IND_ABILIO_NOGUEIRA',
                interactive: true,
    title: 'DRENAGEM_POLO_IND_ABILIO_NOGUEIRA<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427_7.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_UNIVERSITARIO_428 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_UNIVERSITARIO_428 = format_DRENAGEM_PARQUE_UNIVERSITARIO_428.readFeatures(json_DRENAGEM_PARQUE_UNIVERSITARIO_428, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_UNIVERSITARIO_428 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_UNIVERSITARIO_428.addFeatures(features_DRENAGEM_PARQUE_UNIVERSITARIO_428);
var lyr_DRENAGEM_PARQUE_UNIVERSITARIO_428 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_UNIVERSITARIO_428, 
                style: style_DRENAGEM_PARQUE_UNIVERSITARIO_428,
                popuplayertitle: 'DRENAGEM_PARQUE_UNIVERSITARIO',
                interactive: true,
    title: 'DRENAGEM_PARQUE_UNIVERSITARIO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_428_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_428_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_428_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_428_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_428_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_428_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_428_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_428_7.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_SANTA_ADELIA_429 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_SANTA_ADELIA_429 = format_DRENAGEM_PARQUE_SANTA_ADELIA_429.readFeatures(json_DRENAGEM_PARQUE_SANTA_ADELIA_429, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_SANTA_ADELIA_429 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_SANTA_ADELIA_429.addFeatures(features_DRENAGEM_PARQUE_SANTA_ADELIA_429);
var lyr_DRENAGEM_PARQUE_SANTA_ADELIA_429 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_SANTA_ADELIA_429, 
                style: style_DRENAGEM_PARQUE_SANTA_ADELIA_429,
                popuplayertitle: 'DRENAGEM_PARQUE_SANTA_ADELIA',
                interactive: true,
    title: 'DRENAGEM_PARQUE_SANTA_ADELIA<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_429_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_429_1.png" /> CAIXA<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_429_2.png" /> DIAMETRO 300<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_429_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_429_4.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_429_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_429_6.png" /> DIAMETRO 700<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_429_7.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_MOEMA_430 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_MOEMA_430 = format_DRENAGEM_PARQUE_MOEMA_430.readFeatures(json_DRENAGEM_PARQUE_MOEMA_430, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_MOEMA_430 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_MOEMA_430.addFeatures(features_DRENAGEM_PARQUE_MOEMA_430);
var lyr_DRENAGEM_PARQUE_MOEMA_430 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_MOEMA_430, 
                style: style_DRENAGEM_PARQUE_MOEMA_430,
                popuplayertitle: 'DRENAGEM_PARQUE_MOEMA',
                interactive: true,
    title: 'DRENAGEM_PARQUE_MOEMA<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_430_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_430_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_430_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_430_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_430_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_430_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_430_6.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_JOAO_LEITE_431 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_JOAO_LEITE_431 = format_DRENAGEM_PARQUE_JOAO_LEITE_431.readFeatures(json_DRENAGEM_PARQUE_JOAO_LEITE_431, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_JOAO_LEITE_431 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_JOAO_LEITE_431.addFeatures(features_DRENAGEM_PARQUE_JOAO_LEITE_431);
var lyr_DRENAGEM_PARQUE_JOAO_LEITE_431 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_JOAO_LEITE_431, 
                style: style_DRENAGEM_PARQUE_JOAO_LEITE_431,
                popuplayertitle: 'DRENAGEM_PARQUE_JOAO_LEITE',
                interactive: true,
    title: 'DRENAGEM_PARQUE_JOAO_LEITE<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_431_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_431_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_431_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_431_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_431_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_431_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_431_6.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_DOS_SABIAS_432 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_DOS_SABIAS_432 = format_DRENAGEM_PARQUE_DOS_SABIAS_432.readFeatures(json_DRENAGEM_PARQUE_DOS_SABIAS_432, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_DOS_SABIAS_432 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_DOS_SABIAS_432.addFeatures(features_DRENAGEM_PARQUE_DOS_SABIAS_432);
var lyr_DRENAGEM_PARQUE_DOS_SABIAS_432 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_DOS_SABIAS_432, 
                style: style_DRENAGEM_PARQUE_DOS_SABIAS_432,
                popuplayertitle: 'DRENAGEM_PARQUE_DOS_SABIAS',
                interactive: true,
    title: 'DRENAGEM_PARQUE_DOS_SABIAS<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_432_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_432_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_432_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_432_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_432_4.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_432_5.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_432_6.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_432_7.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_432_8.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_432_9.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_DOS_COQUEIROS_433 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_DOS_COQUEIROS_433 = format_DRENAGEM_PARQUE_DOS_COQUEIROS_433.readFeatures(json_DRENAGEM_PARQUE_DOS_COQUEIROS_433, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_DOS_COQUEIROS_433 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_DOS_COQUEIROS_433.addFeatures(features_DRENAGEM_PARQUE_DOS_COQUEIROS_433);
var lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_433 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_DOS_COQUEIROS_433, 
                style: style_DRENAGEM_PARQUE_DOS_COQUEIROS_433,
                popuplayertitle: 'DRENAGEM_PARQUE_DOS_COQUEIROS',
                interactive: true,
    title: 'DRENAGEM_PARQUE_DOS_COQUEIROS<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_433_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_433_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_433_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_433_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_433_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_433_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_433_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_433_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_433_8.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_DAS_ARVORES_434 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_DAS_ARVORES_434 = format_DRENAGEM_PARQUE_DAS_ARVORES_434.readFeatures(json_DRENAGEM_PARQUE_DAS_ARVORES_434, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_DAS_ARVORES_434 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_DAS_ARVORES_434.addFeatures(features_DRENAGEM_PARQUE_DAS_ARVORES_434);
var lyr_DRENAGEM_PARQUE_DAS_ARVORES_434 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_DAS_ARVORES_434, 
                style: style_DRENAGEM_PARQUE_DAS_ARVORES_434,
                popuplayertitle: 'DRENAGEM_PARQUE_DAS_ARVORES',
                interactive: true,
    title: 'DRENAGEM_PARQUE_DAS_ARVORES<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DAS_ARVORES_434_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DAS_ARVORES_434_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DAS_ARVORES_434_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DAS_ARVORES_434_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DAS_ARVORES_434_4.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_CASTELO_435 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_CASTELO_435 = format_DRENAGEM_PARQUE_CASTELO_435.readFeatures(json_DRENAGEM_PARQUE_CASTELO_435, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_CASTELO_435 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_CASTELO_435.addFeatures(features_DRENAGEM_PARQUE_CASTELO_435);
var lyr_DRENAGEM_PARQUE_CASTELO_435 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_CASTELO_435, 
                style: style_DRENAGEM_PARQUE_CASTELO_435,
                popuplayertitle: 'DRENAGEM_PARQUE_CASTELO',
                interactive: true,
    title: 'DRENAGEM_PARQUE_CASTELO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_CASTELO_435_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_CASTELO_435_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_CASTELO_435_2.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_CASTELO_435_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_CASTELO_435_4.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_BOA_VISTA_436 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_BOA_VISTA_436 = format_DRENAGEM_PARQUE_BOA_VISTA_436.readFeatures(json_DRENAGEM_PARQUE_BOA_VISTA_436, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_BOA_VISTA_436 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_BOA_VISTA_436.addFeatures(features_DRENAGEM_PARQUE_BOA_VISTA_436);
var lyr_DRENAGEM_PARQUE_BOA_VISTA_436 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_BOA_VISTA_436, 
                style: style_DRENAGEM_PARQUE_BOA_VISTA_436,
                popuplayertitle: 'DRENAGEM_PARQUE_BOA_VISTA',
                interactive: true,
    title: 'DRENAGEM_PARQUE_BOA_VISTA<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_BOA_VISTA_436_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_BOA_VISTA_436_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_BOA_VISTA_436_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_BOA_VISTA_436_3.png" /> PV<br />' });
var format_DRENAGEM_PARQ_RESD_SANTA_MARIA_437 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQ_RESD_SANTA_MARIA_437 = format_DRENAGEM_PARQ_RESD_SANTA_MARIA_437.readFeatures(json_DRENAGEM_PARQ_RESD_SANTA_MARIA_437, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQ_RESD_SANTA_MARIA_437 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQ_RESD_SANTA_MARIA_437.addFeatures(features_DRENAGEM_PARQ_RESD_SANTA_MARIA_437);
var lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_437 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQ_RESD_SANTA_MARIA_437, 
                style: style_DRENAGEM_PARQ_RESD_SANTA_MARIA_437,
                popuplayertitle: 'DRENAGEM_PARQ_RESD_SANTA_MARIA',
                interactive: true,
    title: 'DRENAGEM_PARQ_RESD_SANTA_MARIA<br />\
    <img src="styles/legend/DRENAGEM_PARQ_RESD_SANTA_MARIA_437_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQ_RESD_SANTA_MARIA_437_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQ_RESD_SANTA_MARIA_437_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQ_RESD_SANTA_MARIA_437_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQ_RESD_SANTA_MARIA_437_4.png" /> PV<br />' });
var format_DRENAGEM_PARAGON_438 = new ol.format.GeoJSON();
var features_DRENAGEM_PARAGON_438 = format_DRENAGEM_PARAGON_438.readFeatures(json_DRENAGEM_PARAGON_438, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARAGON_438 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARAGON_438.addFeatures(features_DRENAGEM_PARAGON_438);
var lyr_DRENAGEM_PARAGON_438 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARAGON_438, 
                style: style_DRENAGEM_PARAGON_438,
                popuplayertitle: 'DRENAGEM_PARAGON',
                interactive: true,
    title: 'DRENAGEM_PARAGON<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_438_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_438_1.png" /> CAIXA<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_438_2.png" /> CANALETA<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_438_3.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_438_4.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_438_5.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_438_6.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_438_7.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_438_8.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_438_9.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_438_10.png" /> PV<br />' });
var format_DRENAGEM_NAIR_RETUSSI_I_439 = new ol.format.GeoJSON();
var features_DRENAGEM_NAIR_RETUSSI_I_439 = format_DRENAGEM_NAIR_RETUSSI_I_439.readFeatures(json_DRENAGEM_NAIR_RETUSSI_I_439, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_NAIR_RETUSSI_I_439 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_NAIR_RETUSSI_I_439.addFeatures(features_DRENAGEM_NAIR_RETUSSI_I_439);
var lyr_DRENAGEM_NAIR_RETUSSI_I_439 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_NAIR_RETUSSI_I_439, 
                style: style_DRENAGEM_NAIR_RETUSSI_I_439,
                popuplayertitle: 'DRENAGEM_NAIR_RETUSSI_I',
                interactive: true,
    title: 'DRENAGEM_NAIR_RETUSSI_I<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_439_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_439_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_439_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_439_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_439_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_439_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_439_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_439_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_439_8.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_SAO_GABRIEL_440 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_SAO_GABRIEL_440 = format_DRENAGEM_JARDIM_SAO_GABRIEL_440.readFeatures(json_DRENAGEM_JARDIM_SAO_GABRIEL_440, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_SAO_GABRIEL_440 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_SAO_GABRIEL_440.addFeatures(features_DRENAGEM_JARDIM_SAO_GABRIEL_440);
var lyr_DRENAGEM_JARDIM_SAO_GABRIEL_440 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_SAO_GABRIEL_440, 
                style: style_DRENAGEM_JARDIM_SAO_GABRIEL_440,
                popuplayertitle: 'DRENAGEM_JARDIM_SAO_GABRIEL',
                interactive: true,
    title: 'DRENAGEM_JARDIM_SAO_GABRIEL<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_440_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_440_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_440_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_440_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_440_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_440_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_440_6.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_SANTA_LUCIA_441 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_SANTA_LUCIA_441 = format_DRENAGEM_JARDIM_SANTA_LUCIA_441.readFeatures(json_DRENAGEM_JARDIM_SANTA_LUCIA_441, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_SANTA_LUCIA_441 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_SANTA_LUCIA_441.addFeatures(features_DRENAGEM_JARDIM_SANTA_LUCIA_441);
var lyr_DRENAGEM_JARDIM_SANTA_LUCIA_441 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_SANTA_LUCIA_441, 
                style: style_DRENAGEM_JARDIM_SANTA_LUCIA_441,
                popuplayertitle: 'DRENAGEM_JARDIM_SANTA_LUCIA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_SANTA_LUCIA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_441_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_441_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_441_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_441_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_441_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_441_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_441_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_441_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_441_8.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_PULICANO_442 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_PULICANO_442 = format_DRENAGEM_JARDIM_PULICANO_442.readFeatures(json_DRENAGEM_JARDIM_PULICANO_442, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_PULICANO_442 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_PULICANO_442.addFeatures(features_DRENAGEM_JARDIM_PULICANO_442);
var lyr_DRENAGEM_JARDIM_PULICANO_442 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_PULICANO_442, 
                style: style_DRENAGEM_JARDIM_PULICANO_442,
                popuplayertitle: 'DRENAGEM_JARDIM_PULICANO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_PULICANO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_442_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_442_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_442_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_442_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_442_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_442_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_442_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_442_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_442_8.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_PORTINARI_443 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_PORTINARI_443 = format_DRENAGEM_JARDIM_PORTINARI_443.readFeatures(json_DRENAGEM_JARDIM_PORTINARI_443, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_PORTINARI_443 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_PORTINARI_443.addFeatures(features_DRENAGEM_JARDIM_PORTINARI_443);
var lyr_DRENAGEM_JARDIM_PORTINARI_443 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_PORTINARI_443, 
                style: style_DRENAGEM_JARDIM_PORTINARI_443,
                popuplayertitle: 'DRENAGEM_JARDIM_PORTINARI',
                interactive: true,
    title: 'DRENAGEM_JARDIM_PORTINARI<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_443_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_443_1.png" /> DIAMETRO 300<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_443_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_443_3.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_443_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_443_5.png" /> DIAMETRO 700<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_443_6.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_PIRATININGA_444 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_PIRATININGA_444 = format_DRENAGEM_JARDIM_PIRATININGA_444.readFeatures(json_DRENAGEM_JARDIM_PIRATININGA_444, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_PIRATININGA_444 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_PIRATININGA_444.addFeatures(features_DRENAGEM_JARDIM_PIRATININGA_444);
var lyr_DRENAGEM_JARDIM_PIRATININGA_444 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_PIRATININGA_444, 
                style: style_DRENAGEM_JARDIM_PIRATININGA_444,
                popuplayertitle: 'DRENAGEM_JARDIM_PIRATININGA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_PIRATININGA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_444_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_444_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_444_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_444_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_444_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_444_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_444_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_444_7.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_PALMA_445 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_PALMA_445 = format_DRENAGEM_JARDIM_PALMA_445.readFeatures(json_DRENAGEM_JARDIM_PALMA_445, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_PALMA_445 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_PALMA_445.addFeatures(features_DRENAGEM_JARDIM_PALMA_445);
var lyr_DRENAGEM_JARDIM_PALMA_445 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_PALMA_445, 
                style: style_DRENAGEM_JARDIM_PALMA_445,
                popuplayertitle: 'DRENAGEM_JARDIM_PALMA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_PALMA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_445_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_445_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_445_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_445_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_445_4.png" /> DIAMETRO 900<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_445_5.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446 = format_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446.readFeatures(json_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446.addFeatures(features_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446);
var lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446, 
                style: style_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446,
                popuplayertitle: 'DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS',
                interactive: true,
    title: 'DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446_4.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_NOEMIA_447 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_NOEMIA_447 = format_DRENAGEM_JARDIM_NOEMIA_447.readFeatures(json_DRENAGEM_JARDIM_NOEMIA_447, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_NOEMIA_447 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_NOEMIA_447.addFeatures(features_DRENAGEM_JARDIM_NOEMIA_447);
var lyr_DRENAGEM_JARDIM_NOEMIA_447 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_NOEMIA_447, 
                style: style_DRENAGEM_JARDIM_NOEMIA_447,
                popuplayertitle: 'DRENAGEM_JARDIM_NOEMIA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_NOEMIA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOEMIA_447_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOEMIA_447_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOEMIA_447_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOEMIA_447_3.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_NATAL_448 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_NATAL_448 = format_DRENAGEM_JARDIM_NATAL_448.readFeatures(json_DRENAGEM_JARDIM_NATAL_448, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_NATAL_448 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_NATAL_448.addFeatures(features_DRENAGEM_JARDIM_NATAL_448);
var lyr_DRENAGEM_JARDIM_NATAL_448 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_NATAL_448, 
                style: style_DRENAGEM_JARDIM_NATAL_448,
                popuplayertitle: 'DRENAGEM_JARDIM_NATAL',
                interactive: true,
    title: 'DRENAGEM_JARDIM_NATAL<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_448_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_448_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_448_2.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_448_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_448_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_448_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_448_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_448_7.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_MARTINS_449 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_MARTINS_449 = format_DRENAGEM_JARDIM_MARTINS_449.readFeatures(json_DRENAGEM_JARDIM_MARTINS_449, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_MARTINS_449 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_MARTINS_449.addFeatures(features_DRENAGEM_JARDIM_MARTINS_449);
var lyr_DRENAGEM_JARDIM_MARTINS_449 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_MARTINS_449, 
                style: style_DRENAGEM_JARDIM_MARTINS_449,
                popuplayertitle: 'DRENAGEM_JARDIM_MARTINS',
                interactive: true,
    title: 'DRENAGEM_JARDIM_MARTINS<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARTINS_449_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARTINS_449_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARTINS_449_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARTINS_449_3.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_MARIA_LUIZA_450 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_MARIA_LUIZA_450 = format_DRENAGEM_JARDIM_MARIA_LUIZA_450.readFeatures(json_DRENAGEM_JARDIM_MARIA_LUIZA_450, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_MARIA_LUIZA_450 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_MARIA_LUIZA_450.addFeatures(features_DRENAGEM_JARDIM_MARIA_LUIZA_450);
var lyr_DRENAGEM_JARDIM_MARIA_LUIZA_450 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_MARIA_LUIZA_450, 
                style: style_DRENAGEM_JARDIM_MARIA_LUIZA_450,
                popuplayertitle: 'DRENAGEM_JARDIM_MARIA_LUIZA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_MARIA_LUIZA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_450_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_450_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_450_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_450_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_450_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_450_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_450_6.png" /> FLUXO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_450_7.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_LIBANO_451 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_LIBANO_451 = format_DRENAGEM_JARDIM_LIBANO_451.readFeatures(json_DRENAGEM_JARDIM_LIBANO_451, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_LIBANO_451 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_LIBANO_451.addFeatures(features_DRENAGEM_JARDIM_LIBANO_451);
var lyr_DRENAGEM_JARDIM_LIBANO_451 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_LIBANO_451, 
                style: style_DRENAGEM_JARDIM_LIBANO_451,
                popuplayertitle: 'DRENAGEM_JARDIM_LIBANO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_LIBANO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_LIBANO_451_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_LIBANO_451_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_LIBANO_451_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_LIBANO_451_3.png" /> FLUXO<br />' });
var format_DRENAGEM_JARDIM_IPANEMA_452 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_IPANEMA_452 = format_DRENAGEM_JARDIM_IPANEMA_452.readFeatures(json_DRENAGEM_JARDIM_IPANEMA_452, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_IPANEMA_452 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_IPANEMA_452.addFeatures(features_DRENAGEM_JARDIM_IPANEMA_452);
var lyr_DRENAGEM_JARDIM_IPANEMA_452 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_IPANEMA_452, 
                style: style_DRENAGEM_JARDIM_IPANEMA_452,
                popuplayertitle: 'DRENAGEM_JARDIM_IPANEMA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_IPANEMA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_452_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_452_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_452_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_452_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_452_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_452_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_452_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_452_7.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_BUENO_453 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_BUENO_453 = format_DRENAGEM_JARDIM_BUENO_453.readFeatures(json_DRENAGEM_JARDIM_BUENO_453, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_BUENO_453 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_BUENO_453.addFeatures(features_DRENAGEM_JARDIM_BUENO_453);
var lyr_DRENAGEM_JARDIM_BUENO_453 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_BUENO_453, 
                style: style_DRENAGEM_JARDIM_BUENO_453,
                popuplayertitle: 'DRENAGEM_JARDIM_BUENO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_BUENO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BUENO_453_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BUENO_453_1.png" /> DIAMETRO 300<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BUENO_453_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BUENO_453_3.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_BOTANICO_454 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_BOTANICO_454 = format_DRENAGEM_JARDIM_BOTANICO_454.readFeatures(json_DRENAGEM_JARDIM_BOTANICO_454, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_BOTANICO_454 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_BOTANICO_454.addFeatures(features_DRENAGEM_JARDIM_BOTANICO_454);
var lyr_DRENAGEM_JARDIM_BOTANICO_454 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_BOTANICO_454, 
                style: style_DRENAGEM_JARDIM_BOTANICO_454,
                popuplayertitle: 'DRENAGEM_JARDIM_BOTANICO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_BOTANICO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_454_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_454_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_454_2.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_454_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_454_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_454_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_454_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_454_7.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_BARAO_455 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_BARAO_455 = format_DRENAGEM_JARDIM_BARAO_455.readFeatures(json_DRENAGEM_JARDIM_BARAO_455, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_BARAO_455 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_BARAO_455.addFeatures(features_DRENAGEM_JARDIM_BARAO_455);
var lyr_DRENAGEM_JARDIM_BARAO_455 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_BARAO_455, 
                style: style_DRENAGEM_JARDIM_BARAO_455,
                popuplayertitle: 'DRENAGEM_JARDIM_BARAO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_BARAO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BARAO_455_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BARAO_455_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BARAO_455_2.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BARAO_455_3.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_AVIACAO_456 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_AVIACAO_456 = format_DRENAGEM_JARDIM_AVIACAO_456.readFeatures(json_DRENAGEM_JARDIM_AVIACAO_456, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_AVIACAO_456 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_AVIACAO_456.addFeatures(features_DRENAGEM_JARDIM_AVIACAO_456);
var lyr_DRENAGEM_JARDIM_AVIACAO_456 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_AVIACAO_456, 
                style: style_DRENAGEM_JARDIM_AVIACAO_456,
                popuplayertitle: 'DRENAGEM_JARDIM_AVIACAO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_AVIACAO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_456_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_456_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_456_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_456_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_456_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_456_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_456_6.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_ARIZONA_II_457 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_ARIZONA_II_457 = format_DRENAGEM_JARDIM_ARIZONA_II_457.readFeatures(json_DRENAGEM_JARDIM_ARIZONA_II_457, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_ARIZONA_II_457 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_ARIZONA_II_457.addFeatures(features_DRENAGEM_JARDIM_ARIZONA_II_457);
var lyr_DRENAGEM_JARDIM_ARIZONA_II_457 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_ARIZONA_II_457, 
                style: style_DRENAGEM_JARDIM_ARIZONA_II_457,
                popuplayertitle: 'DRENAGEM_JARDIM_ARIZONA_II',
                interactive: true,
    title: 'DRENAGEM_JARDIM_ARIZONA_II<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_457_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_457_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_457_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_457_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_457_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_457_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_457_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_457_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_457_8.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_ARIZONA_I_458 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_ARIZONA_I_458 = format_DRENAGEM_JARDIM_ARIZONA_I_458.readFeatures(json_DRENAGEM_JARDIM_ARIZONA_I_458, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_ARIZONA_I_458 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_ARIZONA_I_458.addFeatures(features_DRENAGEM_JARDIM_ARIZONA_I_458);
var lyr_DRENAGEM_JARDIM_ARIZONA_I_458 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_ARIZONA_I_458, 
                style: style_DRENAGEM_JARDIM_ARIZONA_I_458,
                popuplayertitle: 'DRENAGEM_JARDIM_ARIZONA_I',
                interactive: true,
    title: 'DRENAGEM_JARDIM_ARIZONA_I<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_458_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_458_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_458_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_458_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_458_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_458_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_458_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_458_7.png" /> PV<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_458_8.png" /> DISSIPADOR<br />' });
var format_DRENAGEM_JARDIM_AEROPORTO_II_459 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_AEROPORTO_II_459 = format_DRENAGEM_JARDIM_AEROPORTO_II_459.readFeatures(json_DRENAGEM_JARDIM_AEROPORTO_II_459, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_AEROPORTO_II_459 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_AEROPORTO_II_459.addFeatures(features_DRENAGEM_JARDIM_AEROPORTO_II_459);
var lyr_DRENAGEM_JARDIM_AEROPORTO_II_459 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_AEROPORTO_II_459, 
                style: style_DRENAGEM_JARDIM_AEROPORTO_II_459,
                popuplayertitle: 'DRENAGEM_JARDIM_AEROPORTO_II',
                interactive: true,
    title: 'DRENAGEM_JARDIM_AEROPORTO_II<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AEROPORTO_II_459_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AEROPORTO_II_459_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AEROPORTO_II_459_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AEROPORTO_II_459_3.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AEROPORTO_II_459_4.png" /> PV<br />' });
var format_DRENAGEM_GRAMADOS_I_460 = new ol.format.GeoJSON();
var features_DRENAGEM_GRAMADOS_I_460 = format_DRENAGEM_GRAMADOS_I_460.readFeatures(json_DRENAGEM_GRAMADOS_I_460, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_GRAMADOS_I_460 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_GRAMADOS_I_460.addFeatures(features_DRENAGEM_GRAMADOS_I_460);
var lyr_DRENAGEM_GRAMADOS_I_460 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_GRAMADOS_I_460, 
                style: style_DRENAGEM_GRAMADOS_I_460,
                popuplayertitle: 'DRENAGEM_GRAMADOS_I',
                interactive: true,
    title: 'DRENAGEM_GRAMADOS_I<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_460_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_460_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_460_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_460_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_460_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_460_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_460_6.png" /> PV<br />' });
var format_DRENAGEM_FRANCA_POLO_CLUBE_461 = new ol.format.GeoJSON();
var features_DRENAGEM_FRANCA_POLO_CLUBE_461 = format_DRENAGEM_FRANCA_POLO_CLUBE_461.readFeatures(json_DRENAGEM_FRANCA_POLO_CLUBE_461, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_FRANCA_POLO_CLUBE_461 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_FRANCA_POLO_CLUBE_461.addFeatures(features_DRENAGEM_FRANCA_POLO_CLUBE_461);
var lyr_DRENAGEM_FRANCA_POLO_CLUBE_461 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_FRANCA_POLO_CLUBE_461, 
                style: style_DRENAGEM_FRANCA_POLO_CLUBE_461,
                popuplayertitle: 'DRENAGEM_FRANCA_POLO_CLUBE',
                interactive: true,
    title: 'DRENAGEM_FRANCA_POLO_CLUBE<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_461_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_461_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_461_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_461_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_461_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_461_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_461_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_461_7.png" /> PV<br />' });
var format_DRENAGEM_DOMINGOS_JARDINI_462 = new ol.format.GeoJSON();
var features_DRENAGEM_DOMINGOS_JARDINI_462 = format_DRENAGEM_DOMINGOS_JARDINI_462.readFeatures(json_DRENAGEM_DOMINGOS_JARDINI_462, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_DOMINGOS_JARDINI_462 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_DOMINGOS_JARDINI_462.addFeatures(features_DRENAGEM_DOMINGOS_JARDINI_462);
var lyr_DRENAGEM_DOMINGOS_JARDINI_462 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_DOMINGOS_JARDINI_462, 
                style: style_DRENAGEM_DOMINGOS_JARDINI_462,
                popuplayertitle: 'DRENAGEM_DOMINGOS_JARDINI',
                interactive: true,
    title: 'DRENAGEM_DOMINGOS_JARDINI<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_462_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_462_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_462_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_462_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_462_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_462_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_462_6.png" /> PV<br />' });
var format_DRENAGEM_DINFRA_II_463 = new ol.format.GeoJSON();
var features_DRENAGEM_DINFRA_II_463 = format_DRENAGEM_DINFRA_II_463.readFeatures(json_DRENAGEM_DINFRA_II_463, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_DINFRA_II_463 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_DINFRA_II_463.addFeatures(features_DRENAGEM_DINFRA_II_463);
var lyr_DRENAGEM_DINFRA_II_463 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_DINFRA_II_463, 
                style: style_DRENAGEM_DINFRA_II_463,
                popuplayertitle: 'DRENAGEM_DINFRA_II',
                interactive: true,
    title: 'DRENAGEM_DINFRA_II<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_463_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_463_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_463_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_463_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_463_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_463_5.png" /> PV<br />' });
var format_DRENAGEM_ATLANTA_PARK_464 = new ol.format.GeoJSON();
var features_DRENAGEM_ATLANTA_PARK_464 = format_DRENAGEM_ATLANTA_PARK_464.readFeatures(json_DRENAGEM_ATLANTA_PARK_464, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_ATLANTA_PARK_464 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_ATLANTA_PARK_464.addFeatures(features_DRENAGEM_ATLANTA_PARK_464);
var lyr_DRENAGEM_ATLANTA_PARK_464 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_ATLANTA_PARK_464, 
                style: style_DRENAGEM_ATLANTA_PARK_464,
                popuplayertitle: 'DRENAGEM_ATLANTA_PARK',
                interactive: true,
    title: 'DRENAGEM_ATLANTA_PARK<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_464_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_464_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_464_2.png" /> CAIXA<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_464_3.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_464_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_464_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_464_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_464_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_464_8.png" /> PV<br />' });
var format_DRENAGEM_ANA_DOROTHEA_465 = new ol.format.GeoJSON();
var features_DRENAGEM_ANA_DOROTHEA_465 = format_DRENAGEM_ANA_DOROTHEA_465.readFeatures(json_DRENAGEM_ANA_DOROTHEA_465, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_ANA_DOROTHEA_465 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_ANA_DOROTHEA_465.addFeatures(features_DRENAGEM_ANA_DOROTHEA_465);
var lyr_DRENAGEM_ANA_DOROTHEA_465 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_ANA_DOROTHEA_465, 
                style: style_DRENAGEM_ANA_DOROTHEA_465,
                popuplayertitle: 'DRENAGEM_ANA_DOROTHEA',
                interactive: true,
    title: 'DRENAGEM_ANA_DOROTHEA<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_465_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_465_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_465_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_465_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_465_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_465_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_465_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_465_7.png" /> PV<br />' });
var format_REGIAO_SUL_466 = new ol.format.GeoJSON();
var features_REGIAO_SUL_466 = format_REGIAO_SUL_466.readFeatures(json_REGIAO_SUL_466, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REGIAO_SUL_466 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIAO_SUL_466.addFeatures(features_REGIAO_SUL_466);
var lyr_REGIAO_SUL_466 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIAO_SUL_466, 
                style: style_REGIAO_SUL_466,
                popuplayertitle: 'REGIAO_SUL',
                interactive: true,
                title: '<img src="styles/legend/REGIAO_SUL_466.png" /> REGIAO_SUL'
            });
var format_REGIAO_OESTE_467 = new ol.format.GeoJSON();
var features_REGIAO_OESTE_467 = format_REGIAO_OESTE_467.readFeatures(json_REGIAO_OESTE_467, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REGIAO_OESTE_467 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIAO_OESTE_467.addFeatures(features_REGIAO_OESTE_467);
var lyr_REGIAO_OESTE_467 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIAO_OESTE_467, 
                style: style_REGIAO_OESTE_467,
                popuplayertitle: 'REGIAO_OESTE',
                interactive: true,
                title: '<img src="styles/legend/REGIAO_OESTE_467.png" /> REGIAO_OESTE'
            });
var format_REGIAO_NORTE_468 = new ol.format.GeoJSON();
var features_REGIAO_NORTE_468 = format_REGIAO_NORTE_468.readFeatures(json_REGIAO_NORTE_468, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REGIAO_NORTE_468 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIAO_NORTE_468.addFeatures(features_REGIAO_NORTE_468);
var lyr_REGIAO_NORTE_468 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIAO_NORTE_468, 
                style: style_REGIAO_NORTE_468,
                popuplayertitle: 'REGIAO_NORTE',
                interactive: true,
                title: '<img src="styles/legend/REGIAO_NORTE_468.png" /> REGIAO_NORTE'
            });
var format_REGIAO_LESTE_469 = new ol.format.GeoJSON();
var features_REGIAO_LESTE_469 = format_REGIAO_LESTE_469.readFeatures(json_REGIAO_LESTE_469, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REGIAO_LESTE_469 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIAO_LESTE_469.addFeatures(features_REGIAO_LESTE_469);
var lyr_REGIAO_LESTE_469 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIAO_LESTE_469, 
                style: style_REGIAO_LESTE_469,
                popuplayertitle: 'REGIAO_LESTE',
                interactive: true,
                title: '<img src="styles/legend/REGIAO_LESTE_469.png" /> REGIAO_LESTE'
            });
var format_BAIRROS_470 = new ol.format.GeoJSON();
var features_BAIRROS_470 = format_BAIRROS_470.readFeatures(json_BAIRROS_470, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BAIRROS_470 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAIRROS_470.addFeatures(features_BAIRROS_470);
var lyr_BAIRROS_470 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAIRROS_470, 
                style: style_BAIRROS_470,
                popuplayertitle: 'BAIRROS',
                interactive: true,
                title: '<img src="styles/legend/BAIRROS_470.png" /> BAIRROS'
            });
var format_Voorocas27unid_471 = new ol.format.GeoJSON();
var features_Voorocas27unid_471 = format_Voorocas27unid_471.readFeatures(json_Voorocas27unid_471, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Voorocas27unid_471 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voorocas27unid_471.addFeatures(features_Voorocas27unid_471);
var lyr_Voorocas27unid_471 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voorocas27unid_471, 
                style: style_Voorocas27unid_471,
                popuplayertitle: 'Voçorocas (27 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Voorocas27unid_471.png" /> Voçorocas (27 unid.)'
            });
var format_LocaisDifcilAcessoreasRurais12unid_472 = new ol.format.GeoJSON();
var features_LocaisDifcilAcessoreasRurais12unid_472 = format_LocaisDifcilAcessoreasRurais12unid_472.readFeatures(json_LocaisDifcilAcessoreasRurais12unid_472, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LocaisDifcilAcessoreasRurais12unid_472 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocaisDifcilAcessoreasRurais12unid_472.addFeatures(features_LocaisDifcilAcessoreasRurais12unid_472);
var lyr_LocaisDifcilAcessoreasRurais12unid_472 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocaisDifcilAcessoreasRurais12unid_472, 
                style: style_LocaisDifcilAcessoreasRurais12unid_472,
                popuplayertitle: 'Locais Difícil Acesso Áreas Rurais (12 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LocaisDifcilAcessoreasRurais12unid_472.png" /> Locais Difícil Acesso Áreas Rurais (12 unid.)'
            });
var format_Contineres286unid_473 = new ol.format.GeoJSON();
var features_Contineres286unid_473 = format_Contineres286unid_473.readFeatures(json_Contineres286unid_473, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Contineres286unid_473 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres286unid_473.addFeatures(features_Contineres286unid_473);
var lyr_Contineres286unid_473 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres286unid_473, 
                style: style_Contineres286unid_473,
                popuplayertitle: 'Contêineres (286 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Contineres286unid_473.png" /> Contêineres (286 unid.)'
            });
var format_rvoreImuneaoCorte9unid_474 = new ol.format.GeoJSON();
var features_rvoreImuneaoCorte9unid_474 = format_rvoreImuneaoCorte9unid_474.readFeatures(json_rvoreImuneaoCorte9unid_474, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_rvoreImuneaoCorte9unid_474 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoreImuneaoCorte9unid_474.addFeatures(features_rvoreImuneaoCorte9unid_474);
var lyr_rvoreImuneaoCorte9unid_474 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoreImuneaoCorte9unid_474, 
                style: style_rvoreImuneaoCorte9unid_474,
                popuplayertitle: 'Árvore Imune ao Corte (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoreImuneaoCorte9unid_474.png" /> Árvore Imune ao Corte (9 unid.)'
            });
var format_AcademiasaoArLivre84unid_475 = new ol.format.GeoJSON();
var features_AcademiasaoArLivre84unid_475 = format_AcademiasaoArLivre84unid_475.readFeatures(json_AcademiasaoArLivre84unid_475, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcademiasaoArLivre84unid_475 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcademiasaoArLivre84unid_475.addFeatures(features_AcademiasaoArLivre84unid_475);
var lyr_AcademiasaoArLivre84unid_475 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcademiasaoArLivre84unid_475, 
                style: style_AcademiasaoArLivre84unid_475,
                popuplayertitle: 'Academias ao Ar Livre (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AcademiasaoArLivre84unid_475.png" /> Academias ao Ar Livre (84 unid.)'
            });
var format_SERVICO_DE_SAUDE_476 = new ol.format.GeoJSON();
var features_SERVICO_DE_SAUDE_476 = format_SERVICO_DE_SAUDE_476.readFeatures(json_SERVICO_DE_SAUDE_476, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SERVICO_DE_SAUDE_476 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVICO_DE_SAUDE_476.addFeatures(features_SERVICO_DE_SAUDE_476);
var lyr_SERVICO_DE_SAUDE_476 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SERVICO_DE_SAUDE_476, 
                style: style_SERVICO_DE_SAUDE_476,
                popuplayertitle: 'SERVICO_DE_SAUDE',
                interactive: true,
                title: '<img src="styles/legend/SERVICO_DE_SAUDE_476.png" /> SERVICO_DE_SAUDE'
            });
var format_RECICLAVEIS_477 = new ol.format.GeoJSON();
var features_RECICLAVEIS_477 = format_RECICLAVEIS_477.readFeatures(json_RECICLAVEIS_477, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RECICLAVEIS_477 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RECICLAVEIS_477.addFeatures(features_RECICLAVEIS_477);
var lyr_RECICLAVEIS_477 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RECICLAVEIS_477, 
                style: style_RECICLAVEIS_477,
                popuplayertitle: 'RECICLAVEIS',
                interactive: true,
                title: '<img src="styles/legend/RECICLAVEIS_477.png" /> RECICLAVEIS'
            });
var format_PNEUS_478 = new ol.format.GeoJSON();
var features_PNEUS_478 = format_PNEUS_478.readFeatures(json_PNEUS_478, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PNEUS_478 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNEUS_478.addFeatures(features_PNEUS_478);
var lyr_PNEUS_478 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNEUS_478, 
                style: style_PNEUS_478,
                popuplayertitle: 'PNEUS',
                interactive: true,
                title: '<img src="styles/legend/PNEUS_478.png" /> PNEUS'
            });
var format_PILHAS_E_BATERIAS_479 = new ol.format.GeoJSON();
var features_PILHAS_E_BATERIAS_479 = format_PILHAS_E_BATERIAS_479.readFeatures(json_PILHAS_E_BATERIAS_479, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PILHAS_E_BATERIAS_479 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PILHAS_E_BATERIAS_479.addFeatures(features_PILHAS_E_BATERIAS_479);
var lyr_PILHAS_E_BATERIAS_479 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PILHAS_E_BATERIAS_479, 
                style: style_PILHAS_E_BATERIAS_479,
                popuplayertitle: 'PILHAS_E_BATERIAS',
                interactive: true,
                title: '<img src="styles/legend/PILHAS_E_BATERIAS_479.png" /> PILHAS_E_BATERIAS'
            });
var format_PERIGOSOS_480 = new ol.format.GeoJSON();
var features_PERIGOSOS_480 = format_PERIGOSOS_480.readFeatures(json_PERIGOSOS_480, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PERIGOSOS_480 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERIGOSOS_480.addFeatures(features_PERIGOSOS_480);
var lyr_PERIGOSOS_480 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERIGOSOS_480, 
                style: style_PERIGOSOS_480,
                popuplayertitle: 'PERIGOSOS',
                interactive: true,
                title: '<img src="styles/legend/PERIGOSOS_480.png" /> PERIGOSOS'
            });
var format_OLEO_LUBRIFICANTE_481 = new ol.format.GeoJSON();
var features_OLEO_LUBRIFICANTE_481 = format_OLEO_LUBRIFICANTE_481.readFeatures(json_OLEO_LUBRIFICANTE_481, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_OLEO_LUBRIFICANTE_481 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OLEO_LUBRIFICANTE_481.addFeatures(features_OLEO_LUBRIFICANTE_481);
var lyr_OLEO_LUBRIFICANTE_481 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OLEO_LUBRIFICANTE_481, 
                style: style_OLEO_LUBRIFICANTE_481,
                popuplayertitle: 'OLEO_LUBRIFICANTE',
                interactive: true,
                title: '<img src="styles/legend/OLEO_LUBRIFICANTE_481.png" /> OLEO_LUBRIFICANTE'
            });
var format_OLEO_DE_COZINHA_482 = new ol.format.GeoJSON();
var features_OLEO_DE_COZINHA_482 = format_OLEO_DE_COZINHA_482.readFeatures(json_OLEO_DE_COZINHA_482, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_OLEO_DE_COZINHA_482 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OLEO_DE_COZINHA_482.addFeatures(features_OLEO_DE_COZINHA_482);
var lyr_OLEO_DE_COZINHA_482 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OLEO_DE_COZINHA_482, 
                style: style_OLEO_DE_COZINHA_482,
                popuplayertitle: 'OLEO_DE_COZINHA',
                interactive: true,
                title: '<img src="styles/legend/OLEO_DE_COZINHA_482.png" /> OLEO_DE_COZINHA'
            });
var format_MASSA_VERDE_483 = new ol.format.GeoJSON();
var features_MASSA_VERDE_483 = format_MASSA_VERDE_483.readFeatures(json_MASSA_VERDE_483, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MASSA_VERDE_483 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MASSA_VERDE_483.addFeatures(features_MASSA_VERDE_483);
var lyr_MASSA_VERDE_483 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MASSA_VERDE_483, 
                style: style_MASSA_VERDE_483,
                popuplayertitle: 'MASSA_VERDE',
                interactive: true,
                title: '<img src="styles/legend/MASSA_VERDE_483.png" /> MASSA_VERDE'
            });
var format_MADEIRAS_484 = new ol.format.GeoJSON();
var features_MADEIRAS_484 = format_MADEIRAS_484.readFeatures(json_MADEIRAS_484, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MADEIRAS_484 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MADEIRAS_484.addFeatures(features_MADEIRAS_484);
var lyr_MADEIRAS_484 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MADEIRAS_484, 
                style: style_MADEIRAS_484,
                popuplayertitle: 'MADEIRAS',
                interactive: true,
                title: '<img src="styles/legend/MADEIRAS_484.png" /> MADEIRAS'
            });
var format_LATAS_DE_TINTA_485 = new ol.format.GeoJSON();
var features_LATAS_DE_TINTA_485 = format_LATAS_DE_TINTA_485.readFeatures(json_LATAS_DE_TINTA_485, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LATAS_DE_TINTA_485 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LATAS_DE_TINTA_485.addFeatures(features_LATAS_DE_TINTA_485);
var lyr_LATAS_DE_TINTA_485 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LATAS_DE_TINTA_485, 
                style: style_LATAS_DE_TINTA_485,
                popuplayertitle: 'LATAS_DE_TINTA',
                interactive: true,
                title: '<img src="styles/legend/LATAS_DE_TINTA_485.png" /> LATAS_DE_TINTA'
            });
var format_LAMPADAS_486 = new ol.format.GeoJSON();
var features_LAMPADAS_486 = format_LAMPADAS_486.readFeatures(json_LAMPADAS_486, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LAMPADAS_486 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAMPADAS_486.addFeatures(features_LAMPADAS_486);
var lyr_LAMPADAS_486 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAMPADAS_486, 
                style: style_LAMPADAS_486,
                popuplayertitle: 'LAMPADAS',
                interactive: true,
                title: '<img src="styles/legend/LAMPADAS_486.png" /> LAMPADAS'
            });
var format_INSERVIVEIS_487 = new ol.format.GeoJSON();
var features_INSERVIVEIS_487 = format_INSERVIVEIS_487.readFeatures(json_INSERVIVEIS_487, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_INSERVIVEIS_487 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INSERVIVEIS_487.addFeatures(features_INSERVIVEIS_487);
var lyr_INSERVIVEIS_487 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INSERVIVEIS_487, 
                style: style_INSERVIVEIS_487,
                popuplayertitle: 'INSERVIVEIS',
                interactive: true,
                title: '<img src="styles/legend/INSERVIVEIS_487.png" /> INSERVIVEIS'
            });
var format_GESSO_488 = new ol.format.GeoJSON();
var features_GESSO_488 = format_GESSO_488.readFeatures(json_GESSO_488, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GESSO_488 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GESSO_488.addFeatures(features_GESSO_488);
var lyr_GESSO_488 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GESSO_488, 
                style: style_GESSO_488,
                popuplayertitle: 'GESSO',
                interactive: true,
                title: '<img src="styles/legend/GESSO_488.png" /> GESSO'
            });
var format_EMBALAGENS_AGROTOXICO_489 = new ol.format.GeoJSON();
var features_EMBALAGENS_AGROTOXICO_489 = format_EMBALAGENS_AGROTOXICO_489.readFeatures(json_EMBALAGENS_AGROTOXICO_489, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EMBALAGENS_AGROTOXICO_489 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EMBALAGENS_AGROTOXICO_489.addFeatures(features_EMBALAGENS_AGROTOXICO_489);
var lyr_EMBALAGENS_AGROTOXICO_489 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EMBALAGENS_AGROTOXICO_489, 
                style: style_EMBALAGENS_AGROTOXICO_489,
                popuplayertitle: 'EMBALAGENS_AGROTOXICO',
                interactive: true,
                title: '<img src="styles/legend/EMBALAGENS_AGROTOXICO_489.png" /> EMBALAGENS_AGROTOXICO'
            });
var format_ELETRONICOS_490 = new ol.format.GeoJSON();
var features_ELETRONICOS_490 = format_ELETRONICOS_490.readFeatures(json_ELETRONICOS_490, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ELETRONICOS_490 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELETRONICOS_490.addFeatures(features_ELETRONICOS_490);
var lyr_ELETRONICOS_490 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ELETRONICOS_490, 
                style: style_ELETRONICOS_490,
                popuplayertitle: 'ELETRONICOS',
                interactive: true,
                title: '<img src="styles/legend/ELETRONICOS_490.png" /> ELETRONICOS'
            });
var format_COURO_491 = new ol.format.GeoJSON();
var features_COURO_491 = format_COURO_491.readFeatures(json_COURO_491, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_COURO_491 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COURO_491.addFeatures(features_COURO_491);
var lyr_COURO_491 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COURO_491, 
                style: style_COURO_491,
                popuplayertitle: 'COURO',
                interactive: true,
                title: '<img src="styles/legend/COURO_491.png" /> COURO'
            });
var format_CONSTRUCAO_CIVIL_492 = new ol.format.GeoJSON();
var features_CONSTRUCAO_CIVIL_492 = format_CONSTRUCAO_CIVIL_492.readFeatures(json_CONSTRUCAO_CIVIL_492, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CONSTRUCAO_CIVIL_492 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONSTRUCAO_CIVIL_492.addFeatures(features_CONSTRUCAO_CIVIL_492);
var lyr_CONSTRUCAO_CIVIL_492 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONSTRUCAO_CIVIL_492, 
                style: style_CONSTRUCAO_CIVIL_492,
                popuplayertitle: 'CONSTRUCAO_CIVIL',
                interactive: true,
                title: '<img src="styles/legend/CONSTRUCAO_CIVIL_492.png" /> CONSTRUCAO_CIVIL'
            });
var format_CHAPAS_DE_RAIO_X_493 = new ol.format.GeoJSON();
var features_CHAPAS_DE_RAIO_X_493 = format_CHAPAS_DE_RAIO_X_493.readFeatures(json_CHAPAS_DE_RAIO_X_493, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CHAPAS_DE_RAIO_X_493 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHAPAS_DE_RAIO_X_493.addFeatures(features_CHAPAS_DE_RAIO_X_493);
var lyr_CHAPAS_DE_RAIO_X_493 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHAPAS_DE_RAIO_X_493, 
                style: style_CHAPAS_DE_RAIO_X_493,
                popuplayertitle: 'CHAPAS_DE_RAIO_X',
                interactive: true,
                title: '<img src="styles/legend/CHAPAS_DE_RAIO_X_493.png" /> CHAPAS_DE_RAIO_X'
            });
var format_PROTECAO_AERODROMO_494 = new ol.format.GeoJSON();
var features_PROTECAO_AERODROMO_494 = format_PROTECAO_AERODROMO_494.readFeatures(json_PROTECAO_AERODROMO_494, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PROTECAO_AERODROMO_494 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROTECAO_AERODROMO_494.addFeatures(features_PROTECAO_AERODROMO_494);
var lyr_PROTECAO_AERODROMO_494 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROTECAO_AERODROMO_494, 
                style: style_PROTECAO_AERODROMO_494,
                popuplayertitle: 'PROTECAO_AERODROMO',
                interactive: true,
    title: 'PROTECAO_AERODROMO<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_494_0.png" /> Aproximação 1 Cab 1<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_494_1.png" /> Aproximação 1 Cab 2<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_494_2.png" /> Cônica<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_494_3.png" /> Decolagem Cab 1<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_494_4.png" /> Decolagem Cab 2<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_494_5.png" /> Faixa de Pista<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_494_6.png" /> Horizontal Interna<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_494_7.png" /> Linha entre cabeceiras<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_494_8.png" /> Pista<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_494_9.png" /> SPVV 1<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_494_10.png" /> SPVV 2<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_494_11.png" /> Transição<br />' });
var format_HELIPONTO_HOSPITAL_REGIONAL_495 = new ol.format.GeoJSON();
var features_HELIPONTO_HOSPITAL_REGIONAL_495 = format_HELIPONTO_HOSPITAL_REGIONAL_495.readFeatures(json_HELIPONTO_HOSPITAL_REGIONAL_495, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HELIPONTO_HOSPITAL_REGIONAL_495 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HELIPONTO_HOSPITAL_REGIONAL_495.addFeatures(features_HELIPONTO_HOSPITAL_REGIONAL_495);
var lyr_HELIPONTO_HOSPITAL_REGIONAL_495 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HELIPONTO_HOSPITAL_REGIONAL_495, 
                style: style_HELIPONTO_HOSPITAL_REGIONAL_495,
                popuplayertitle: 'HELIPONTO_HOSPITAL_REGIONAL',
                interactive: true,
    title: 'HELIPONTO_HOSPITAL_REGIONAL<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_495_0.png" /> Aproximação 1 seção 1<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_495_1.png" /> Aproximação 2 seção 1<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_495_2.png" /> Area de Segurança 1<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_495_3.png" /> Decolagem 1 seção 1<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_495_4.png" /> Decolagem 2 seção 1<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_495_5.png" /> FATO 1<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_495_6.png" /> TLOF 1<br />' });
var format_HELIPONTO_EDIFICIO_PRIME_496 = new ol.format.GeoJSON();
var features_HELIPONTO_EDIFICIO_PRIME_496 = format_HELIPONTO_EDIFICIO_PRIME_496.readFeatures(json_HELIPONTO_EDIFICIO_PRIME_496, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HELIPONTO_EDIFICIO_PRIME_496 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HELIPONTO_EDIFICIO_PRIME_496.addFeatures(features_HELIPONTO_EDIFICIO_PRIME_496);
var lyr_HELIPONTO_EDIFICIO_PRIME_496 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HELIPONTO_EDIFICIO_PRIME_496, 
                style: style_HELIPONTO_EDIFICIO_PRIME_496,
                popuplayertitle: 'HELIPONTO_EDIFICIO_PRIME',
                interactive: true,
                title: '<img src="styles/legend/HELIPONTO_EDIFICIO_PRIME_496.png" /> HELIPONTO_EDIFICIO_PRIME'
            });
var format_HELIPONTO_EDIFICIO_PRIME_497 = new ol.format.GeoJSON();
var features_HELIPONTO_EDIFICIO_PRIME_497 = format_HELIPONTO_EDIFICIO_PRIME_497.readFeatures(json_HELIPONTO_EDIFICIO_PRIME_497, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HELIPONTO_EDIFICIO_PRIME_497 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HELIPONTO_EDIFICIO_PRIME_497.addFeatures(features_HELIPONTO_EDIFICIO_PRIME_497);
var lyr_HELIPONTO_EDIFICIO_PRIME_497 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HELIPONTO_EDIFICIO_PRIME_497, 
                style: style_HELIPONTO_EDIFICIO_PRIME_497,
                popuplayertitle: 'HELIPONTO_EDIFICIO_PRIME',
                interactive: true,
    title: 'HELIPONTO_EDIFICIO_PRIME<br />\
    <img src="styles/legend/HELIPONTO_EDIFICIO_PRIME_497_0.png" /> HELIPONTO<br />\
    <img src="styles/legend/HELIPONTO_EDIFICIO_PRIME_497_1.png" /> RAMPA<br />' });
var format_CLASSE_VB_498 = new ol.format.GeoJSON();
var features_CLASSE_VB_498 = format_CLASSE_VB_498.readFeatures(json_CLASSE_VB_498, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_VB_498 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_VB_498.addFeatures(features_CLASSE_VB_498);
var lyr_CLASSE_VB_498 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_VB_498, 
                style: style_CLASSE_VB_498,
                popuplayertitle: 'CLASSE_VB',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_VB_498.png" /> CLASSE_VB'
            });
var format_CLASSE_VA_499 = new ol.format.GeoJSON();
var features_CLASSE_VA_499 = format_CLASSE_VA_499.readFeatures(json_CLASSE_VA_499, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_VA_499 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_VA_499.addFeatures(features_CLASSE_VA_499);
var lyr_CLASSE_VA_499 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_VA_499, 
                style: style_CLASSE_VA_499,
                popuplayertitle: 'CLASSE_VA',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_VA_499.png" /> CLASSE_VA'
            });
var format_CLASSE_IVC_500 = new ol.format.GeoJSON();
var features_CLASSE_IVC_500 = format_CLASSE_IVC_500.readFeatures(json_CLASSE_IVC_500, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IVC_500 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IVC_500.addFeatures(features_CLASSE_IVC_500);
var lyr_CLASSE_IVC_500 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IVC_500, 
                style: style_CLASSE_IVC_500,
                popuplayertitle: 'CLASSE_IVC',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IVC_500.png" /> CLASSE_IVC'
            });
var format_CLASSE_IVB_501 = new ol.format.GeoJSON();
var features_CLASSE_IVB_501 = format_CLASSE_IVB_501.readFeatures(json_CLASSE_IVB_501, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IVB_501 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IVB_501.addFeatures(features_CLASSE_IVB_501);
var lyr_CLASSE_IVB_501 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IVB_501, 
                style: style_CLASSE_IVB_501,
                popuplayertitle: 'CLASSE_IVB',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IVB_501.png" /> CLASSE_IVB'
            });
var format_CLASSE_IVA_502 = new ol.format.GeoJSON();
var features_CLASSE_IVA_502 = format_CLASSE_IVA_502.readFeatures(json_CLASSE_IVA_502, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IVA_502 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IVA_502.addFeatures(features_CLASSE_IVA_502);
var lyr_CLASSE_IVA_502 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IVA_502, 
                style: style_CLASSE_IVA_502,
                popuplayertitle: 'CLASSE_IVA',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IVA_502.png" /> CLASSE_IVA'
            });
var format_CLASSE_IIIC_503 = new ol.format.GeoJSON();
var features_CLASSE_IIIC_503 = format_CLASSE_IIIC_503.readFeatures(json_CLASSE_IIIC_503, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IIIC_503 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IIIC_503.addFeatures(features_CLASSE_IIIC_503);
var lyr_CLASSE_IIIC_503 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IIIC_503, 
                style: style_CLASSE_IIIC_503,
                popuplayertitle: 'CLASSE_IIIC',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IIIC_503.png" /> CLASSE_IIIC'
            });
var format_CLASSE_IIIB_504 = new ol.format.GeoJSON();
var features_CLASSE_IIIB_504 = format_CLASSE_IIIB_504.readFeatures(json_CLASSE_IIIB_504, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IIIB_504 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IIIB_504.addFeatures(features_CLASSE_IIIB_504);
var lyr_CLASSE_IIIB_504 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IIIB_504, 
                style: style_CLASSE_IIIB_504,
                popuplayertitle: 'CLASSE_IIIB',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IIIB_504.png" /> CLASSE_IIIB'
            });
var format_CLASSE_IIIA_505 = new ol.format.GeoJSON();
var features_CLASSE_IIIA_505 = format_CLASSE_IIIA_505.readFeatures(json_CLASSE_IIIA_505, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IIIA_505 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IIIA_505.addFeatures(features_CLASSE_IIIA_505);
var lyr_CLASSE_IIIA_505 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IIIA_505, 
                style: style_CLASSE_IIIA_505,
                popuplayertitle: 'CLASSE_IIIA',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IIIA_505.png" /> CLASSE_IIIA'
            });
var format_CLASSE_II_506 = new ol.format.GeoJSON();
var features_CLASSE_II_506 = format_CLASSE_II_506.readFeatures(json_CLASSE_II_506, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_II_506 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_II_506.addFeatures(features_CLASSE_II_506);
var lyr_CLASSE_II_506 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_II_506, 
                style: style_CLASSE_II_506,
                popuplayertitle: 'CLASSE_II',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_II_506.png" /> CLASSE_II'
            });
var format_CLASSE_I_507 = new ol.format.GeoJSON();
var features_CLASSE_I_507 = format_CLASSE_I_507.readFeatures(json_CLASSE_I_507, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_I_507 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_I_507.addFeatures(features_CLASSE_I_507);
var lyr_CLASSE_I_507 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_I_507, 
                style: style_CLASSE_I_507,
                popuplayertitle: 'CLASSE_I',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_I_507.png" /> CLASSE_I'
            });
var format_LoteamentoFechado146unid70632440m_508 = new ol.format.GeoJSON();
var features_LoteamentoFechado146unid70632440m_508 = format_LoteamentoFechado146unid70632440m_508.readFeatures(json_LoteamentoFechado146unid70632440m_508, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentoFechado146unid70632440m_508 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentoFechado146unid70632440m_508.addFeatures(features_LoteamentoFechado146unid70632440m_508);
var lyr_LoteamentoFechado146unid70632440m_508 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentoFechado146unid70632440m_508, 
                style: style_LoteamentoFechado146unid70632440m_508,
                popuplayertitle: 'Loteamento Fechado (146 unid. / 706.324,40 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentoFechado146unid70632440m_508.png" /> Loteamento Fechado (146 unid. / 706.324,40 m²)'
            });
var format_LoteEdificao20unid_509 = new ol.format.GeoJSON();
var features_LoteEdificao20unid_509 = format_LoteEdificao20unid_509.readFeatures(json_LoteEdificao20unid_509, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEdificao20unid_509 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEdificao20unid_509.addFeatures(features_LoteEdificao20unid_509);
var lyr_LoteEdificao20unid_509 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEdificao20unid_509, 
                style: style_LoteEdificao20unid_509,
                popuplayertitle: 'Lote/Edificação (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEdificao20unid_509.png" /> Lote/Edificação (20 unid.)'
            });
var format_LoteEdificao20unid508062m_510 = new ol.format.GeoJSON();
var features_LoteEdificao20unid508062m_510 = format_LoteEdificao20unid508062m_510.readFeatures(json_LoteEdificao20unid508062m_510, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEdificao20unid508062m_510 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEdificao20unid508062m_510.addFeatures(features_LoteEdificao20unid508062m_510);
var lyr_LoteEdificao20unid508062m_510 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEdificao20unid508062m_510, 
                style: style_LoteEdificao20unid508062m_510,
                popuplayertitle: 'Lote/Edificação (20 unid. / 5.080,62 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEdificao20unid508062m_510.png" /> Lote/Edificação (20 unid. / 5.080,62 m²)'
            });
var format_LoteEMDEF10unid_511 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid_511 = format_LoteEMDEF10unid_511.readFeatures(json_LoteEMDEF10unid_511, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEMDEF10unid_511 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid_511.addFeatures(features_LoteEMDEF10unid_511);
var lyr_LoteEMDEF10unid_511 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid_511, 
                style: style_LoteEMDEF10unid_511,
                popuplayertitle: 'Lote EMDEF (10 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid_511.png" /> Lote EMDEF (10 unid.)'
            });
var format_LoteEMDEF10unid218783m_512 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid218783m_512 = format_LoteEMDEF10unid218783m_512.readFeatures(json_LoteEMDEF10unid218783m_512, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEMDEF10unid218783m_512 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid218783m_512.addFeatures(features_LoteEMDEF10unid218783m_512);
var lyr_LoteEMDEF10unid218783m_512 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid218783m_512, 
                style: style_LoteEMDEF10unid218783m_512,
                popuplayertitle: 'Lote EMDEF (10 unid. / 2.187,83 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid218783m_512.png" /> Lote EMDEF (10 unid. / 2.187,83 m²)'
            });
var format_Lote252unid_513 = new ol.format.GeoJSON();
var features_Lote252unid_513 = format_Lote252unid_513.readFeatures(json_Lote252unid_513, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote252unid_513 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote252unid_513.addFeatures(features_Lote252unid_513);
var lyr_Lote252unid_513 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote252unid_513, 
                style: style_Lote252unid_513,
                popuplayertitle: 'Lote (252 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lote252unid_513.png" /> Lote (252 unid.)'
            });
var format_Lote252unid7530210m_514 = new ol.format.GeoJSON();
var features_Lote252unid7530210m_514 = format_Lote252unid7530210m_514.readFeatures(json_Lote252unid7530210m_514, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote252unid7530210m_514 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote252unid7530210m_514.addFeatures(features_Lote252unid7530210m_514);
var lyr_Lote252unid7530210m_514 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote252unid7530210m_514, 
                style: style_Lote252unid7530210m_514,
                popuplayertitle: 'Lote (252 unid. / 75.302,10 m²)',
                interactive: true,
                title: '<img src="styles/legend/Lote252unid7530210m_514.png" /> Lote (252 unid. / 75.302,10 m²)'
            });
var format_LeiloLEI97542025Proc7954202537196unid_515 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Proc7954202537196unid_515 = format_LeiloLEI97542025Proc7954202537196unid_515.readFeatures(json_LeiloLEI97542025Proc7954202537196unid_515, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Proc7954202537196unid_515 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Proc7954202537196unid_515.addFeatures(features_LeiloLEI97542025Proc7954202537196unid_515);
var lyr_LeiloLEI97542025Proc7954202537196unid_515 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Proc7954202537196unid_515, 
                style: style_LeiloLEI97542025Proc7954202537196unid_515,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Proc 7954/2025-37 (196 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Proc7954202537196unid_515.png" /> Leilão - LEI 9.754/2025 - Proc 7954/2025-37 (196 unid.)'
            });
var format_LeiloLEI97542025Proc7954202537196unid3240462m_516 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Proc7954202537196unid3240462m_516 = format_LeiloLEI97542025Proc7954202537196unid3240462m_516.readFeatures(json_LeiloLEI97542025Proc7954202537196unid3240462m_516, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Proc7954202537196unid3240462m_516 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Proc7954202537196unid3240462m_516.addFeatures(features_LeiloLEI97542025Proc7954202537196unid3240462m_516);
var lyr_LeiloLEI97542025Proc7954202537196unid3240462m_516 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Proc7954202537196unid3240462m_516, 
                style: style_LeiloLEI97542025Proc7954202537196unid3240462m_516,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Proc 7954/2025-37 (196 unid. / 32.404,62 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Proc7954202537196unid3240462m_516.png" /> Leilão - LEI 9.754/2025 - Proc 7954/2025-37 (196 unid. / 32.404,62 m²)'
            });
var format_LeiloLEI97542025Proc2652520256922unid_517 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Proc2652520256922unid_517 = format_LeiloLEI97542025Proc2652520256922unid_517.readFeatures(json_LeiloLEI97542025Proc2652520256922unid_517, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Proc2652520256922unid_517 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Proc2652520256922unid_517.addFeatures(features_LeiloLEI97542025Proc2652520256922unid_517);
var lyr_LeiloLEI97542025Proc2652520256922unid_517 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Proc2652520256922unid_517, 
                style: style_LeiloLEI97542025Proc2652520256922unid_517,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Proc 26525/2025-69 (22 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Proc2652520256922unid_517.png" /> Leilão - LEI 9.754/2025 - Proc 26525/2025-69 (22 unid.)'
            });
var format_LeiloLEI97542025Proc2652520256922unid352000m_518 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Proc2652520256922unid352000m_518 = format_LeiloLEI97542025Proc2652520256922unid352000m_518.readFeatures(json_LeiloLEI97542025Proc2652520256922unid352000m_518, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Proc2652520256922unid352000m_518 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Proc2652520256922unid352000m_518.addFeatures(features_LeiloLEI97542025Proc2652520256922unid352000m_518);
var lyr_LeiloLEI97542025Proc2652520256922unid352000m_518 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Proc2652520256922unid352000m_518, 
                style: style_LeiloLEI97542025Proc2652520256922unid352000m_518,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Proc 26525/2025-69 (22 unid. / 3.520,00 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Proc2652520256922unid352000m_518.png" /> Leilão - LEI 9.754/2025 - Proc 26525/2025-69 (22 unid. / 3.520,00 m²)'
            });
var format_LeiloLEI97542025Proc2198620254518unid_519 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Proc2198620254518unid_519 = format_LeiloLEI97542025Proc2198620254518unid_519.readFeatures(json_LeiloLEI97542025Proc2198620254518unid_519, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Proc2198620254518unid_519 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Proc2198620254518unid_519.addFeatures(features_LeiloLEI97542025Proc2198620254518unid_519);
var lyr_LeiloLEI97542025Proc2198620254518unid_519 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Proc2198620254518unid_519, 
                style: style_LeiloLEI97542025Proc2198620254518unid_519,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Proc 21986/2025-45 (18 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Proc2198620254518unid_519.png" /> Leilão - LEI 9.754/2025 - Proc 21986/2025-45 (18 unid.)'
            });
var format_LeiloLEI97542025Proc2198620254518unid2092083m_520 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Proc2198620254518unid2092083m_520 = format_LeiloLEI97542025Proc2198620254518unid2092083m_520.readFeatures(json_LeiloLEI97542025Proc2198620254518unid2092083m_520, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Proc2198620254518unid2092083m_520 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Proc2198620254518unid2092083m_520.addFeatures(features_LeiloLEI97542025Proc2198620254518unid2092083m_520);
var lyr_LeiloLEI97542025Proc2198620254518unid2092083m_520 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Proc2198620254518unid2092083m_520, 
                style: style_LeiloLEI97542025Proc2198620254518unid2092083m_520,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Proc 21986/2025-45 (18 unid. / 20.920,83 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Proc2198620254518unid2092083m_520.png" /> Leilão - LEI 9.754/2025 - Proc 21986/2025-45 (18 unid. / 20.920,83 m²)'
            });
var format_LeiloLEI97542025Homologado4unid_521 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Homologado4unid_521 = format_LeiloLEI97542025Homologado4unid_521.readFeatures(json_LeiloLEI97542025Homologado4unid_521, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Homologado4unid_521 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Homologado4unid_521.addFeatures(features_LeiloLEI97542025Homologado4unid_521);
var lyr_LeiloLEI97542025Homologado4unid_521 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Homologado4unid_521, 
                style: style_LeiloLEI97542025Homologado4unid_521,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Homologado (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Homologado4unid_521.png" /> Leilão - LEI 9.754/2025 - Homologado (4 unid.)'
            });
var format_LeiloLEI97542025Homologado4unid334770m_522 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Homologado4unid334770m_522 = format_LeiloLEI97542025Homologado4unid334770m_522.readFeatures(json_LeiloLEI97542025Homologado4unid334770m_522, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Homologado4unid334770m_522 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Homologado4unid334770m_522.addFeatures(features_LeiloLEI97542025Homologado4unid334770m_522);
var lyr_LeiloLEI97542025Homologado4unid334770m_522 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Homologado4unid334770m_522, 
                style: style_LeiloLEI97542025Homologado4unid334770m_522,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Homologado (4 unid. / 3.347,70 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Homologado4unid334770m_522.png" /> Leilão - LEI 9.754/2025 - Homologado (4 unid. / 3.347,70 m²)'
            });
var format_reaVerde2117unid881307234m_523 = new ol.format.GeoJSON();
var features_reaVerde2117unid881307234m_523 = format_reaVerde2117unid881307234m_523.readFeatures(json_reaVerde2117unid881307234m_523, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaVerde2117unid881307234m_523 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaVerde2117unid881307234m_523.addFeatures(features_reaVerde2117unid881307234m_523);
var lyr_reaVerde2117unid881307234m_523 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaVerde2117unid881307234m_523, 
                style: style_reaVerde2117unid881307234m_523,
                popuplayertitle: 'Área Verde (2117 unid. / 8.813.072,34 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaVerde2117unid881307234m_523.png" /> Área Verde (2117 unid. / 8.813.072,34 m²)'
            });
var format_reaPatrimonial69unid121924073m_524 = new ol.format.GeoJSON();
var features_reaPatrimonial69unid121924073m_524 = format_reaPatrimonial69unid121924073m_524.readFeatures(json_reaPatrimonial69unid121924073m_524, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaPatrimonial69unid121924073m_524 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaPatrimonial69unid121924073m_524.addFeatures(features_reaPatrimonial69unid121924073m_524);
var lyr_reaPatrimonial69unid121924073m_524 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaPatrimonial69unid121924073m_524, 
                style: style_reaPatrimonial69unid121924073m_524,
                popuplayertitle: 'Área Patrimonial (69 unid. / 1.219.240,73 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaPatrimonial69unid121924073m_524.png" /> Área Patrimonial (69 unid. / 1.219.240,73 m²)'
            });
var format_reaInstitucional371unid208395759m_525 = new ol.format.GeoJSON();
var features_reaInstitucional371unid208395759m_525 = format_reaInstitucional371unid208395759m_525.readFeatures(json_reaInstitucional371unid208395759m_525, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaInstitucional371unid208395759m_525 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaInstitucional371unid208395759m_525.addFeatures(features_reaInstitucional371unid208395759m_525);
var lyr_reaInstitucional371unid208395759m_525 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaInstitucional371unid208395759m_525, 
                style: style_reaInstitucional371unid208395759m_525,
                popuplayertitle: 'Área Institucional  (371 unid. / 2.083.957,59 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaInstitucional371unid208395759m_525.png" /> Área Institucional  (371 unid. / 2.083.957,59 m²)'
            });
var format_readeUsoEspecial280unid271349968m_526 = new ol.format.GeoJSON();
var features_readeUsoEspecial280unid271349968m_526 = format_readeUsoEspecial280unid271349968m_526.readFeatures(json_readeUsoEspecial280unid271349968m_526, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_readeUsoEspecial280unid271349968m_526 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeUsoEspecial280unid271349968m_526.addFeatures(features_readeUsoEspecial280unid271349968m_526);
var lyr_readeUsoEspecial280unid271349968m_526 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeUsoEspecial280unid271349968m_526, 
                style: style_readeUsoEspecial280unid271349968m_526,
                popuplayertitle: 'Área de Uso Especial (280 unid. / 2.713.499,68 m²)',
                interactive: true,
                title: '<img src="styles/legend/readeUsoEspecial280unid271349968m_526.png" /> Área de Uso Especial (280 unid. / 2.713.499,68 m²)'
            });
var format_APP169unid239527816m_527 = new ol.format.GeoJSON();
var features_APP169unid239527816m_527 = format_APP169unid239527816m_527.readFeatures(json_APP169unid239527816m_527, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP169unid239527816m_527 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP169unid239527816m_527.addFeatures(features_APP169unid239527816m_527);
var lyr_APP169unid239527816m_527 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP169unid239527816m_527, 
                style: style_APP169unid239527816m_527,
                popuplayertitle: 'APP (169 unid. / 2.395.278,16 m²)',
                interactive: true,
                title: '<img src="styles/legend/APP169unid239527816m_527.png" /> APP (169 unid. / 2.395.278,16 m²)'
            });
var format_TRPRL_CETESB_528 = new ol.format.GeoJSON();
var features_TRPRL_CETESB_528 = format_TRPRL_CETESB_528.readFeatures(json_TRPRL_CETESB_528, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRL_CETESB_528 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRL_CETESB_528.addFeatures(features_TRPRL_CETESB_528);
var lyr_TRPRL_CETESB_528 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRL_CETESB_528, 
                style: style_TRPRL_CETESB_528,
                popuplayertitle: 'TRPRL_CETESB',
                interactive: true,
                title: '<img src="styles/legend/TRPRL_CETESB_528.png" /> TRPRL_CETESB'
            });
var format_TRPRL_CETESB_529 = new ol.format.GeoJSON();
var features_TRPRL_CETESB_529 = format_TRPRL_CETESB_529.readFeatures(json_TRPRL_CETESB_529, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRL_CETESB_529 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRL_CETESB_529.addFeatures(features_TRPRL_CETESB_529);
var lyr_TRPRL_CETESB_529 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRL_CETESB_529, 
                style: style_TRPRL_CETESB_529,
                popuplayertitle: 'TRPRL_CETESB',
                interactive: true,
                title: '<img src="styles/legend/TRPRL_CETESB_529.png" /> TRPRL_CETESB'
            });
var format_TCRA_MUNICIPAL_530 = new ol.format.GeoJSON();
var features_TCRA_MUNICIPAL_530 = format_TCRA_MUNICIPAL_530.readFeatures(json_TCRA_MUNICIPAL_530, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRA_MUNICIPAL_530 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRA_MUNICIPAL_530.addFeatures(features_TCRA_MUNICIPAL_530);
var lyr_TCRA_MUNICIPAL_530 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRA_MUNICIPAL_530, 
                style: style_TCRA_MUNICIPAL_530,
                popuplayertitle: 'TCRA_MUNICIPAL',
                interactive: true,
                title: '<img src="styles/legend/TCRA_MUNICIPAL_530.png" /> TCRA_MUNICIPAL'
            });
var format_TCRA_MUNICIPAL_531 = new ol.format.GeoJSON();
var features_TCRA_MUNICIPAL_531 = format_TCRA_MUNICIPAL_531.readFeatures(json_TCRA_MUNICIPAL_531, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRA_MUNICIPAL_531 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRA_MUNICIPAL_531.addFeatures(features_TCRA_MUNICIPAL_531);
var lyr_TCRA_MUNICIPAL_531 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRA_MUNICIPAL_531, 
                style: style_TCRA_MUNICIPAL_531,
                popuplayertitle: 'TCRA_MUNICIPAL',
                interactive: true,
                title: '<img src="styles/legend/TCRA_MUNICIPAL_531.png" /> TCRA_MUNICIPAL'
            });
var format_TCRA_CETESB_PARCELAMENTO_532 = new ol.format.GeoJSON();
var features_TCRA_CETESB_PARCELAMENTO_532 = format_TCRA_CETESB_PARCELAMENTO_532.readFeatures(json_TCRA_CETESB_PARCELAMENTO_532, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRA_CETESB_PARCELAMENTO_532 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRA_CETESB_PARCELAMENTO_532.addFeatures(features_TCRA_CETESB_PARCELAMENTO_532);
var lyr_TCRA_CETESB_PARCELAMENTO_532 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRA_CETESB_PARCELAMENTO_532, 
                style: style_TCRA_CETESB_PARCELAMENTO_532,
                popuplayertitle: 'TCRA_CETESB_PARCELAMENTO',
                interactive: true,
                title: '<img src="styles/legend/TCRA_CETESB_PARCELAMENTO_532.png" /> TCRA_CETESB_PARCELAMENTO'
            });
var format_TCRA_CETESB_PARCELAMENTO_533 = new ol.format.GeoJSON();
var features_TCRA_CETESB_PARCELAMENTO_533 = format_TCRA_CETESB_PARCELAMENTO_533.readFeatures(json_TCRA_CETESB_PARCELAMENTO_533, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRA_CETESB_PARCELAMENTO_533 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRA_CETESB_PARCELAMENTO_533.addFeatures(features_TCRA_CETESB_PARCELAMENTO_533);
var lyr_TCRA_CETESB_PARCELAMENTO_533 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRA_CETESB_PARCELAMENTO_533, 
                style: style_TCRA_CETESB_PARCELAMENTO_533,
                popuplayertitle: 'TCRA_CETESB_PARCELAMENTO',
                interactive: true,
                title: '<img src="styles/legend/TCRA_CETESB_PARCELAMENTO_533.png" /> TCRA_CETESB_PARCELAMENTO'
            });
var format_TCRA_CETESB_534 = new ol.format.GeoJSON();
var features_TCRA_CETESB_534 = format_TCRA_CETESB_534.readFeatures(json_TCRA_CETESB_534, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRA_CETESB_534 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRA_CETESB_534.addFeatures(features_TCRA_CETESB_534);
var lyr_TCRA_CETESB_534 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRA_CETESB_534, 
                style: style_TCRA_CETESB_534,
                popuplayertitle: 'TCRA_CETESB',
                interactive: true,
                title: '<img src="styles/legend/TCRA_CETESB_534.png" /> TCRA_CETESB'
            });
var format_TCRA_CETESB_535 = new ol.format.GeoJSON();
var features_TCRA_CETESB_535 = format_TCRA_CETESB_535.readFeatures(json_TCRA_CETESB_535, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRA_CETESB_535 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRA_CETESB_535.addFeatures(features_TCRA_CETESB_535);
var lyr_TCRA_CETESB_535 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRA_CETESB_535, 
                style: style_TCRA_CETESB_535,
                popuplayertitle: 'TCRA_CETESB',
                interactive: true,
                title: '<img src="styles/legend/TCRA_CETESB_535.png" /> TCRA_CETESB'
            });
var format_TAC_MP_536 = new ol.format.GeoJSON();
var features_TAC_MP_536 = format_TAC_MP_536.readFeatures(json_TAC_MP_536, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TAC_MP_536 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAC_MP_536.addFeatures(features_TAC_MP_536);
var lyr_TAC_MP_536 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAC_MP_536, 
                style: style_TAC_MP_536,
                popuplayertitle: 'TAC_MP',
                interactive: true,
                title: '<img src="styles/legend/TAC_MP_536.png" /> TAC_MP'
            });
var format_TAC_MP_537 = new ol.format.GeoJSON();
var features_TAC_MP_537 = format_TAC_MP_537.readFeatures(json_TAC_MP_537, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TAC_MP_537 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAC_MP_537.addFeatures(features_TAC_MP_537);
var lyr_TAC_MP_537 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAC_MP_537, 
                style: style_TAC_MP_537,
                popuplayertitle: 'TAC_MP',
                interactive: true,
                title: '<img src="styles/legend/TAC_MP_537.png" /> TAC_MP'
            });
var format_PLANTIO_VOLUNTARIO_538 = new ol.format.GeoJSON();
var features_PLANTIO_VOLUNTARIO_538 = format_PLANTIO_VOLUNTARIO_538.readFeatures(json_PLANTIO_VOLUNTARIO_538, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PLANTIO_VOLUNTARIO_538 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLANTIO_VOLUNTARIO_538.addFeatures(features_PLANTIO_VOLUNTARIO_538);
var lyr_PLANTIO_VOLUNTARIO_538 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLANTIO_VOLUNTARIO_538, 
                style: style_PLANTIO_VOLUNTARIO_538,
                popuplayertitle: 'PLANTIO_VOLUNTARIO',
                interactive: true,
                title: '<img src="styles/legend/PLANTIO_VOLUNTARIO_538.png" /> PLANTIO_VOLUNTARIO'
            });
var format_PLANTIO_VOLUNTARIO_539 = new ol.format.GeoJSON();
var features_PLANTIO_VOLUNTARIO_539 = format_PLANTIO_VOLUNTARIO_539.readFeatures(json_PLANTIO_VOLUNTARIO_539, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PLANTIO_VOLUNTARIO_539 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLANTIO_VOLUNTARIO_539.addFeatures(features_PLANTIO_VOLUNTARIO_539);
var lyr_PLANTIO_VOLUNTARIO_539 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLANTIO_VOLUNTARIO_539, 
                style: style_PLANTIO_VOLUNTARIO_539,
                popuplayertitle: 'PLANTIO_VOLUNTARIO',
                interactive: true,
                title: '<img src="styles/legend/PLANTIO_VOLUNTARIO_539.png" /> PLANTIO_VOLUNTARIO'
            });
var format_ANUENCIA_540 = new ol.format.GeoJSON();
var features_ANUENCIA_540 = format_ANUENCIA_540.readFeatures(json_ANUENCIA_540, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ANUENCIA_540 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANUENCIA_540.addFeatures(features_ANUENCIA_540);
var lyr_ANUENCIA_540 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANUENCIA_540, 
                style: style_ANUENCIA_540,
                popuplayertitle: 'ANUENCIA',
                interactive: true,
                title: '<img src="styles/legend/ANUENCIA_540.png" /> ANUENCIA'
            });
var format_ANUENCIA_541 = new ol.format.GeoJSON();
var features_ANUENCIA_541 = format_ANUENCIA_541.readFeatures(json_ANUENCIA_541, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ANUENCIA_541 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANUENCIA_541.addFeatures(features_ANUENCIA_541);
var lyr_ANUENCIA_541 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANUENCIA_541, 
                style: style_ANUENCIA_541,
                popuplayertitle: 'ANUENCIA',
                interactive: true,
                title: '<img src="styles/legend/ANUENCIA_541.png" /> ANUENCIA'
            });
var format_AIIPA_CETESB_542 = new ol.format.GeoJSON();
var features_AIIPA_CETESB_542 = format_AIIPA_CETESB_542.readFeatures(json_AIIPA_CETESB_542, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AIIPA_CETESB_542 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIIPA_CETESB_542.addFeatures(features_AIIPA_CETESB_542);
var lyr_AIIPA_CETESB_542 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIIPA_CETESB_542, 
                style: style_AIIPA_CETESB_542,
                popuplayertitle: 'AIIPA_CETESB',
                interactive: true,
                title: '<img src="styles/legend/AIIPA_CETESB_542.png" /> AIIPA_CETESB'
            });
var format_AIIPA_CETESB_543 = new ol.format.GeoJSON();
var features_AIIPA_CETESB_543 = format_AIIPA_CETESB_543.readFeatures(json_AIIPA_CETESB_543, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AIIPA_CETESB_543 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIIPA_CETESB_543.addFeatures(features_AIIPA_CETESB_543);
var lyr_AIIPA_CETESB_543 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIIPA_CETESB_543, 
                style: style_AIIPA_CETESB_543,
                popuplayertitle: 'AIIPA_CETESB',
                interactive: true,
                title: '<img src="styles/legend/AIIPA_CETESB_543.png" /> AIIPA_CETESB'
            });
var format_ACAO_CIVIL_PUBLICA_544 = new ol.format.GeoJSON();
var features_ACAO_CIVIL_PUBLICA_544 = format_ACAO_CIVIL_PUBLICA_544.readFeatures(json_ACAO_CIVIL_PUBLICA_544, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ACAO_CIVIL_PUBLICA_544 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACAO_CIVIL_PUBLICA_544.addFeatures(features_ACAO_CIVIL_PUBLICA_544);
var lyr_ACAO_CIVIL_PUBLICA_544 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACAO_CIVIL_PUBLICA_544, 
                style: style_ACAO_CIVIL_PUBLICA_544,
                popuplayertitle: 'ACAO_CIVIL_PUBLICA',
                interactive: true,
                title: '<img src="styles/legend/ACAO_CIVIL_PUBLICA_544.png" /> ACAO_CIVIL_PUBLICA'
            });
var format_ACAO_CIVIL_PUBLICA_545 = new ol.format.GeoJSON();
var features_ACAO_CIVIL_PUBLICA_545 = format_ACAO_CIVIL_PUBLICA_545.readFeatures(json_ACAO_CIVIL_PUBLICA_545, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ACAO_CIVIL_PUBLICA_545 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACAO_CIVIL_PUBLICA_545.addFeatures(features_ACAO_CIVIL_PUBLICA_545);
var lyr_ACAO_CIVIL_PUBLICA_545 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACAO_CIVIL_PUBLICA_545, 
                style: style_ACAO_CIVIL_PUBLICA_545,
                popuplayertitle: 'ACAO_CIVIL_PUBLICA',
                interactive: true,
                title: '<img src="styles/legend/ACAO_CIVIL_PUBLICA_545.png" /> ACAO_CIVIL_PUBLICA'
            });
var format_AdoteUmaPraa392unid38295094m_546 = new ol.format.GeoJSON();
var features_AdoteUmaPraa392unid38295094m_546 = format_AdoteUmaPraa392unid38295094m_546.readFeatures(json_AdoteUmaPraa392unid38295094m_546, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AdoteUmaPraa392unid38295094m_546 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdoteUmaPraa392unid38295094m_546.addFeatures(features_AdoteUmaPraa392unid38295094m_546);
var lyr_AdoteUmaPraa392unid38295094m_546 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdoteUmaPraa392unid38295094m_546, 
                style: style_AdoteUmaPraa392unid38295094m_546,
                popuplayertitle: 'Adote Uma Praça (392 unid. / 382.950,94 m²)',
                interactive: true,
                title: '<img src="styles/legend/AdoteUmaPraa392unid38295094m_546.png" /> Adote Uma Praça (392 unid. / 382.950,94 m²)'
            });
var format_SPlacaEgnaldo4unid86447m_547 = new ol.format.GeoJSON();
var features_SPlacaEgnaldo4unid86447m_547 = format_SPlacaEgnaldo4unid86447m_547.readFeatures(json_SPlacaEgnaldo4unid86447m_547, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SPlacaEgnaldo4unid86447m_547 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPlacaEgnaldo4unid86447m_547.addFeatures(features_SPlacaEgnaldo4unid86447m_547);
var lyr_SPlacaEgnaldo4unid86447m_547 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPlacaEgnaldo4unid86447m_547, 
                style: style_SPlacaEgnaldo4unid86447m_547,
                popuplayertitle: 'S/ Placa - Egnaldo (4 unid. / 864,47 m²)',
                interactive: true,
                title: '<img src="styles/legend/SPlacaEgnaldo4unid86447m_547.png" /> S/ Placa - Egnaldo (4 unid. / 864,47 m²)'
            });
var format_SPlacaDilu15unid751060m_548 = new ol.format.GeoJSON();
var features_SPlacaDilu15unid751060m_548 = format_SPlacaDilu15unid751060m_548.readFeatures(json_SPlacaDilu15unid751060m_548, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SPlacaDilu15unid751060m_548 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPlacaDilu15unid751060m_548.addFeatures(features_SPlacaDilu15unid751060m_548);
var lyr_SPlacaDilu15unid751060m_548 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPlacaDilu15unid751060m_548, 
                style: style_SPlacaDilu15unid751060m_548,
                popuplayertitle: 'S/ Placa - Dilu (15 unid. / 7.510,60 m²)',
                interactive: true,
                title: '<img src="styles/legend/SPlacaDilu15unid751060m_548.png" /> S/ Placa - Dilu (15 unid. / 7.510,60 m²)'
            });
var format_CPlacaEgnaldo221unid22321870m_549 = new ol.format.GeoJSON();
var features_CPlacaEgnaldo221unid22321870m_549 = format_CPlacaEgnaldo221unid22321870m_549.readFeatures(json_CPlacaEgnaldo221unid22321870m_549, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CPlacaEgnaldo221unid22321870m_549 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CPlacaEgnaldo221unid22321870m_549.addFeatures(features_CPlacaEgnaldo221unid22321870m_549);
var lyr_CPlacaEgnaldo221unid22321870m_549 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CPlacaEgnaldo221unid22321870m_549, 
                style: style_CPlacaEgnaldo221unid22321870m_549,
                popuplayertitle: 'C/ Placa - Egnaldo (221 unid. / 223.218,70 m²)',
                interactive: true,
                title: '<img src="styles/legend/CPlacaEgnaldo221unid22321870m_549.png" /> C/ Placa - Egnaldo (221 unid. / 223.218,70 m²)'
            });
var format_CPlacaDilu152unid15990431m_550 = new ol.format.GeoJSON();
var features_CPlacaDilu152unid15990431m_550 = format_CPlacaDilu152unid15990431m_550.readFeatures(json_CPlacaDilu152unid15990431m_550, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CPlacaDilu152unid15990431m_550 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CPlacaDilu152unid15990431m_550.addFeatures(features_CPlacaDilu152unid15990431m_550);
var lyr_CPlacaDilu152unid15990431m_550 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CPlacaDilu152unid15990431m_550, 
                style: style_CPlacaDilu152unid15990431m_550,
                popuplayertitle: 'C/ Placa - Dilu (152 unid. / 159.904,31 m²)',
                interactive: true,
                title: '<img src="styles/legend/CPlacaDilu152unid15990431m_550.png" /> C/ Placa - Dilu (152 unid. / 159.904,31 m²)'
            });
var group_ProgramaAdoteUmaPraa = new ol.layer.Group({
                                layers: [lyr_AdoteUmaPraa392unid38295094m_546,lyr_SPlacaEgnaldo4unid86447m_547,lyr_SPlacaDilu15unid751060m_548,lyr_CPlacaEgnaldo221unid22321870m_549,lyr_CPlacaDilu152unid15990431m_550,],
                                fold: 'close',
                                title: 'Programa Adote Uma Praça'});
var group_reasdeCompensaoAmbiental = new ol.layer.Group({
                                layers: [lyr_TRPRL_CETESB_528,lyr_TRPRL_CETESB_529,lyr_TCRA_MUNICIPAL_530,lyr_TCRA_MUNICIPAL_531,lyr_TCRA_CETESB_PARCELAMENTO_532,lyr_TCRA_CETESB_PARCELAMENTO_533,lyr_TCRA_CETESB_534,lyr_TCRA_CETESB_535,lyr_TAC_MP_536,lyr_TAC_MP_537,lyr_PLANTIO_VOLUNTARIO_538,lyr_PLANTIO_VOLUNTARIO_539,lyr_ANUENCIA_540,lyr_ANUENCIA_541,lyr_AIIPA_CETESB_542,lyr_AIIPA_CETESB_543,lyr_ACAO_CIVIL_PUBLICA_544,lyr_ACAO_CIVIL_PUBLICA_545,],
                                fold: 'close',
                                title: 'Áreas de Compensação Ambiental'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_LoteamentoFechado146unid70632440m_508,lyr_LoteEdificao20unid_509,lyr_LoteEdificao20unid508062m_510,lyr_LoteEMDEF10unid_511,lyr_LoteEMDEF10unid218783m_512,lyr_Lote252unid_513,lyr_Lote252unid7530210m_514,lyr_LeiloLEI97542025Proc7954202537196unid_515,lyr_LeiloLEI97542025Proc7954202537196unid3240462m_516,lyr_LeiloLEI97542025Proc2652520256922unid_517,lyr_LeiloLEI97542025Proc2652520256922unid352000m_518,lyr_LeiloLEI97542025Proc2198620254518unid_519,lyr_LeiloLEI97542025Proc2198620254518unid2092083m_520,lyr_LeiloLEI97542025Homologado4unid_521,lyr_LeiloLEI97542025Homologado4unid334770m_522,lyr_reaVerde2117unid881307234m_523,lyr_reaPatrimonial69unid121924073m_524,lyr_reaInstitucional371unid208395759m_525,lyr_readeUsoEspecial280unid271349968m_526,lyr_APP169unid239527816m_527,],
                                fold: 'close',
                                title: 'Áreas Públicas'});
var group_ClassesdeRiscoIPT = new ol.layer.Group({
                                layers: [lyr_CLASSE_VB_498,lyr_CLASSE_VA_499,lyr_CLASSE_IVC_500,lyr_CLASSE_IVB_501,lyr_CLASSE_IVA_502,lyr_CLASSE_IIIC_503,lyr_CLASSE_IIIB_504,lyr_CLASSE_IIIA_505,lyr_CLASSE_II_506,lyr_CLASSE_I_507,],
                                fold: 'close',
                                title: 'Classes de Risco IPT'});
var group_ControleAreo = new ol.layer.Group({
                                layers: [lyr_PROTECAO_AERODROMO_494,lyr_HELIPONTO_HOSPITAL_REGIONAL_495,lyr_HELIPONTO_EDIFICIO_PRIME_496,lyr_HELIPONTO_EDIFICIO_PRIME_497,],
                                fold: 'close',
                                title: 'Controle Aéreo'});
var group_DescarteCorretodeResduos = new ol.layer.Group({
                                layers: [lyr_SERVICO_DE_SAUDE_476,lyr_RECICLAVEIS_477,lyr_PNEUS_478,lyr_PILHAS_E_BATERIAS_479,lyr_PERIGOSOS_480,lyr_OLEO_LUBRIFICANTE_481,lyr_OLEO_DE_COZINHA_482,lyr_MASSA_VERDE_483,lyr_MADEIRAS_484,lyr_LATAS_DE_TINTA_485,lyr_LAMPADAS_486,lyr_INSERVIVEIS_487,lyr_GESSO_488,lyr_EMBALAGENS_AGROTOXICO_489,lyr_ELETRONICOS_490,lyr_COURO_491,lyr_CONSTRUCAO_CIVIL_492,lyr_CHAPAS_DE_RAIO_X_493,],
                                fold: 'close',
                                title: 'Descarte Correto de Resíduos'});
var group_Diversos = new ol.layer.Group({
                                layers: [lyr_Voorocas27unid_471,lyr_LocaisDifcilAcessoreasRurais12unid_472,lyr_Contineres286unid_473,lyr_rvoreImuneaoCorte9unid_474,lyr_AcademiasaoArLivre84unid_475,],
                                fold: 'close',
                                title: 'Diversos'});
var group_DivisoTerritorialMunicipal = new ol.layer.Group({
                                layers: [lyr_REGIAO_SUL_466,lyr_REGIAO_OESTE_467,lyr_REGIAO_NORTE_468,lyr_REGIAO_LESTE_469,lyr_BAIRROS_470,],
                                fold: 'close',
                                title: 'Divisão Territorial Municipal'});
var group_Drenagem = new ol.layer.Group({
                                layers: [lyr_DrenagensExistentes_397,lyr_DRENAGEM_VILLAGIO_DI_FIRENZE_398,lyr_DRENAGEM_VILLA_SANTA_GIANNA_399,lyr_DRENAGEM_VILA_TOTOLI_400,lyr_DRENAGEM_VILA_REAL_401,lyr_DRENAGEM_VILA_DORATTA_402,lyr_DRENAGEM_SAO_PEDRO_II_403,lyr_DRENAGEM_SANTA_FE_404,lyr_DRENAGEM_RESIDENCIAL_TELLINI_405,lyr_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406,lyr_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407,lyr_DRENAGEM_RESIDENCIAL_SANTA_INES_408,lyr_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409,lyr_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410,lyr_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411,lyr_DRENAGEM_RESIDENCIAL_PALERMO_412,lyr_DRENAGEM_RESIDENCIAL_ITAPUA_413,lyr_DRENAGEM_RESIDENCIAL_GAIA_414,lyr_DRENAGEM_RESIDENCIAL_FERRACINI_415,lyr_DRENAGEM_RESIDENCIAL_FAGGIONI_416,lyr_DRENAGEM_RESIDENCIAL_ECOSTILO_417,lyr_DRENAGEM_RESIDENCIAL_DOURADO_418,lyr_DRENAGEM_RESIDENCIAL_BALDASSARI_419,lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_420,lyr_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421,lyr_DRENAGEM_RECREIO_CAMPO_BELO_422,lyr_DRENAGEM_RECANTO_MENEGHETTI_423,lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424,lyr_DRENAGEM_PROL_VILA_ISABEL_425,lyr_DRENAGEM_PROL_JARDIM_MARTINS_426,lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427,lyr_DRENAGEM_PARQUE_UNIVERSITARIO_428,lyr_DRENAGEM_PARQUE_SANTA_ADELIA_429,lyr_DRENAGEM_PARQUE_MOEMA_430,lyr_DRENAGEM_PARQUE_JOAO_LEITE_431,lyr_DRENAGEM_PARQUE_DOS_SABIAS_432,lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_433,lyr_DRENAGEM_PARQUE_DAS_ARVORES_434,lyr_DRENAGEM_PARQUE_CASTELO_435,lyr_DRENAGEM_PARQUE_BOA_VISTA_436,lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_437,lyr_DRENAGEM_PARAGON_438,lyr_DRENAGEM_NAIR_RETUSSI_I_439,lyr_DRENAGEM_JARDIM_SAO_GABRIEL_440,lyr_DRENAGEM_JARDIM_SANTA_LUCIA_441,lyr_DRENAGEM_JARDIM_PULICANO_442,lyr_DRENAGEM_JARDIM_PORTINARI_443,lyr_DRENAGEM_JARDIM_PIRATININGA_444,lyr_DRENAGEM_JARDIM_PALMA_445,lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446,lyr_DRENAGEM_JARDIM_NOEMIA_447,lyr_DRENAGEM_JARDIM_NATAL_448,lyr_DRENAGEM_JARDIM_MARTINS_449,lyr_DRENAGEM_JARDIM_MARIA_LUIZA_450,lyr_DRENAGEM_JARDIM_LIBANO_451,lyr_DRENAGEM_JARDIM_IPANEMA_452,lyr_DRENAGEM_JARDIM_BUENO_453,lyr_DRENAGEM_JARDIM_BOTANICO_454,lyr_DRENAGEM_JARDIM_BARAO_455,lyr_DRENAGEM_JARDIM_AVIACAO_456,lyr_DRENAGEM_JARDIM_ARIZONA_II_457,lyr_DRENAGEM_JARDIM_ARIZONA_I_458,lyr_DRENAGEM_JARDIM_AEROPORTO_II_459,lyr_DRENAGEM_GRAMADOS_I_460,lyr_DRENAGEM_FRANCA_POLO_CLUBE_461,lyr_DRENAGEM_DOMINGOS_JARDINI_462,lyr_DRENAGEM_DINFRA_II_463,lyr_DRENAGEM_ATLANTA_PARK_464,lyr_DRENAGEM_ANA_DOROTHEA_465,],
                                fold: 'close',
                                title: 'Drenagem'});
var group_Ecopontos = new ol.layer.Group({
                                layers: [lyr_PROPOSTO_394,lyr_EM_FUNCIONAMENTO_395,lyr_EM_CONSTRUCAO_396,],
                                fold: 'close',
                                title: 'Ecopontos'});
var group_FazendaMunicipalPousoAlto = new ol.layer.Group({
                                layers: [lyr_PARTE_DA_AREA_G_AVERBADA_376,lyr_PARTE_DA_AREA_G_A_SER_AVERBADA_377,lyr_CONJUNTO_HABITACIONAL_378,lyr_AV_ACESSO_COLEGIO_AGRICOLA_379,lyr_AREA_N2_380,lyr_AREA_N1_381,lyr_AREA_N_382,lyr_AREA_K_383,lyr_AREA_J_384,lyr_AREA_I_385,lyr_AREA_H_386,lyr_AREA_G_387,lyr_AREA_F_388,lyr_AREA_E_389,lyr_AREA_D_390,lyr_AREA_C_391,lyr_AREA_B_392,lyr_AREA_A_393,],
                                fold: 'close',
                                title: 'Fazenda Municipal Pouso Alto'});
var group_GerenciamentodereasContaminadas = new ol.layer.Group({
                                layers: [lyr_AntigoAterrodaFazMunicipal_365,lyr_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_366,lyr_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_367,lyr_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_368,lyr_reaBdaFazMunicipal_369,lyr_reaBdaFazMunicPoosMonitEngesolve7unid_370,lyr_AntigoAterrodasMaritacas_371,lyr_AntigoAterroMaritacas1Etapa28unid_372,lyr_ParqueZumbidosPalmares_373,lyr_AntigoAterroMaritacas3Etapa5unid_374,lyr_AntigoAterroMaritacas2Etapa41unid_375,],
                                fold: 'close',
                                title: 'Gerenciamento de Áreas Contaminadas'});
var group_HidrografiaFBDS2025 = new ol.layer.Group({
                                layers: [lyr_APP1745unid_358,lyr_RiosDuplos84unid_359,lyr_MassasDgua270unid_360,lyr_RiosSimples1842unid_361,lyr_CORPO_HIDRICO_CANAL_FECHADO_362,lyr_CORPO_HIDRICO_CANAL_ABERTO_363,lyr_Nascentes821unid_364,],
                                fold: 'close',
                                title: 'Hidrografia FBDS 2025'});
var group_LoteamentosClandestinos = new ol.layer.Group({
                                layers: [lyr_IRREGULAR_356,lyr_IRREGULAR_357,],
                                fold: 'close',
                                title: 'Loteamentos Clandestinos'});
var group_LoteamentosCondomniosParcelamentodoSolo = new ol.layer.Group({
                                layers: [lyr_Vivenna_132,lyr_Vivenna_133,lyr_VittaSoVicente_134,lyr_VittaSoVicente_135,lyr_VittaJardimSimes_136,lyr_VittaJardimSimes_137,lyr_VittaAlvorada_138,lyr_VittaAlvorada_139,lyr_VilaDiEspanha_140,lyr_VilaDiEspanha_141,lyr_VillaPucci_142,lyr_VillaPucci_143,lyr_VilaPiemonteII_144,lyr_VilaPiemonteII_145,lyr_VilaOlimpica_146,lyr_VilaOlimpica_147,lyr_VillaDoratta_148,lyr_VillaDoratta_149,lyr_VillaBella_150,lyr_VillaBella_151,lyr_Versalhes_152,lyr_Versalhes_153,lyr_TorontoResidence_154,lyr_TorontoResidence_155,lyr_TerraNova_156,lyr_TerraNova_157,lyr_Sonetto_158,lyr_Sonetto_159,lyr_SMARTFRANCAEIXORESIDENCIAL2_160,lyr_SMARTFRANCAEIXORESIDENCIAL2_161,lyr_SMARTFRANCAEIXORESIDENCIAL1_162,lyr_SMARTFRANCAEIXORESIDENCIAL1_163,lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_164,lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_165,lyr_ServidoRamal138kVFranca4Guanabara_166,lyr_ServidoRamal138kVFranca4Guanabara_167,lyr_SantaLina_168,lyr_SantaLina_169,lyr_SantAnita_170,lyr_SantAnita_171,lyr_RuaAlfioBenedini_172,lyr_RuaAlfioBenedini_173,lyr_RuaAlfioBenedini_174,lyr_ResidencialValeVerde_175,lyr_ResidencialValeVerde_176,lyr_ResidencialYasminTorres_177,lyr_ResidencialYasminTorres_178,lyr_ResidencialTellini_179,lyr_ResidencialTellini_180,lyr_ResidencialSoCarlosII_181,lyr_ResidencialSoCarlosII_182,lyr_ResidencialSoCarlosI_183,lyr_ResidencialSoCarlosI_184,lyr_ResidencialSantaIns_185,lyr_ResidencialSantaIns_186,lyr_ResidencialSantaF_187,lyr_ResidencialSantaF_188,lyr_ResidencialQuintadosOitis_189,lyr_ResidencialQuintadosOitis_190,lyr_ResidencialQuintadoSol_191,lyr_ResidencialQuintadoSol_192,lyr_ResidencialPousoAlegreII_193,lyr_ResidencialPousoAlegreII_194,lyr_ResidencialPousoAlegre_195,lyr_ResidencialPousoAlegre_196,lyr_ResidencialPiamalim_197,lyr_ResidencialPiamalim_198,lyr_ResidencialParquedosPassaros_199,lyr_ResidencialParquedosPassaros_200,lyr_ResicencialNairRetuciII_201,lyr_ResicencialNairRetuciII_202,lyr_ResicencialNairRetuci_203,lyr_ResicencialNairRetuci_204,lyr_ResidencialMoradadoBosque_205,lyr_ResidencialMoradadoBosque_206,lyr_ResidencialMarthaHelena_207,lyr_ResidencialMarthaHelena_208,lyr_ResidencialMarioTasso_209,lyr_ResidencialMarioTasso_210,lyr_ResidencialMarianaAlarcon_211,lyr_ResidencialMarianaAlarcon_212,lyr_ResidencialJardimCanada_213,lyr_ResidencialJardimCanada_214,lyr_ResidencialJabuticabeiras_215,lyr_ResidencialJabuticabeiras_216,lyr_ResidencialGramadosII_217,lyr_ResidencialGramadosII_218,lyr_ResidencialGramados_219,lyr_ResidencialGramados_220,lyr_ResidencialGaia_221,lyr_ResidencialGaia_222,lyr_ResidencialFrutuoso_223,lyr_ResidencialFrutuoso_224,lyr_ResidencialFaggioni_225,lyr_ResidencialFaggioni_226,lyr_ResidencialEssenza_227,lyr_ResidencialEssenza_228,lyr_ResidencialDomingosJardini_229,lyr_ResidencialDomingosJardini_230,lyr_ResidencialCintraAlves_231,lyr_ResidencialCintraAlves_232,lyr_ResidencialBoaVista_233,lyr_ResidencialBoaVista_234,lyr_ResidencialAltodaFazenda_235,lyr_ResidencialAltodaFazenda_236,lyr_ResidencialAnaHelena_237,lyr_ResidencialAnaHelena_238,lyr_ReservaAbaete_239,lyr_ReservaAbaete_240,lyr_RecantoMeneghetti_241,lyr_RecantoMeneghetti_242,lyr_Quadra18VilaExposio_243,lyr_Quadra18VilaExposio_244,lyr_ProlongamentoSamelPark_245,lyr_ProlongamentoSamelPark_246,lyr_ParqueVillaLobos_247,lyr_ParqueVillaLobos_248,lyr_ParquePalmeiraImperial_249,lyr_ParquePalmeiraImperial_250,lyr_ParqueJacarand_251,lyr_ParqueJacarand_252,lyr_ParqueFlora_253,lyr_ParqueFlora_254,lyr_ParquedosSabias_255,lyr_ParquedosSabias_256,lyr_ParquedosCoqueiros_257,lyr_ParquedosCoqueiros_258,lyr_ParqueAlvorada_259,lyr_ParqueAlvorada_260,lyr_ParagonFaseII_261,lyr_ParagonFaseII_262,lyr_Paragon_263,lyr_Paragon_264,lyr_PalmeiraReal_265,lyr_PalmeiraReal_266,lyr_MoradadoVerdeII_267,lyr_MoradadoVerdeII_268,lyr_MoradadaMata_269,lyr_MoradadaMata_270,lyr_Monti_271,lyr_Monti_272,lyr_MontBlancResidence_273,lyr_MontBlancResidence_274,lyr_MasterplanDespaschoal_275,lyr_MasterplanDespaschoal_276,lyr_MasterplanDespaschoal_277,lyr_MasteplanBildVitta_278,lyr_MasteplanBildVitta_279,lyr_MasteplanBildVitta_280,lyr_Loteamentolamo_281,lyr_Loteamentolamo_282,lyr_JardimStephani_283,lyr_JardimStephani_284,lyr_JardimPherola_285,lyr_JardimPherola_286,lyr_JardimNatal_287,lyr_JardimNatal_288,lyr_JardimMariaLuiza_289,lyr_JardimMariaLuiza_290,lyr_JardimMariaAugusta_291,lyr_JardimMariaAugusta_292,lyr_JardimHorizonte_293,lyr_JardimHorizonte_294,lyr_JardimFlora_295,lyr_JardimFlora_296,lyr_IrineuZanetiII_297,lyr_IrineuZanetiII_298,lyr_Infratcnica_299,lyr_Infratcnica_300,lyr_HorizResidence_301,lyr_HorizResidence_302,lyr_GlebaNossaSenhoraAuxiliadora_303,lyr_GlebaNossaSenhoraAuxiliadora_304,lyr_Ferracini_305,lyr_Ferracini_306,lyr_FrancaB6_307,lyr_FrancaB6_308,lyr_FazendaProgresso_309,lyr_FazendaProgresso_310,lyr_FazendaeGranjaSantaRita2_311,lyr_FazendaeGranjaSantaRita2_312,lyr_FazendaeGranjaSantaRita_313,lyr_FazendaeGranjaSantaRita_314,lyr_Essence_315,lyr_Essence_316,lyr_Elias_317,lyr_Elias_318,lyr_EdifcioSolNascente_319,lyr_EdifcioSolNascente_320,lyr_EdifcioRuadoSol_321,lyr_EdifcioRuadoSol_322,lyr_EdifcioResidencialHope_323,lyr_EdifcioResidencialHope_324,lyr_DiocesedeFranca_325,lyr_DiocesedeFranca_326,lyr_DaVinci_327,lyr_DaVinci_328,lyr_CondomnioIICityPetrpolis_329,lyr_CondomnioIICityPetrpolis_330,lyr_CondomnioICityPetrpolis_331,lyr_CondomnioICityPetrpolis_332,lyr_Colorado_333,lyr_Colorado_334,lyr_CidadeJardim_335,lyr_CidadeJardim_336,lyr_ChacaraOlaria_337,lyr_ChacaraOlaria_338,lyr_ChacaraBelaVista_339,lyr_ChacaraBelaVista_340,lyr_BordadaMata_341,lyr_BordadaMata_342,lyr_Arteris_343,lyr_Arteris_344,lyr_ArterisFaixadeDomnioFrancaSP_3342_345,lyr_ArterisFaixadeDomnioFrancaSP_3452_346,lyr_ArterisFaixadeDomnioFrancaSPA_397334_347,lyr_Arizona_348,lyr_Arizona_349,lyr_AbuDhabiParadiseResortResidence_350,lyr_AbuDhabiParadiseResortResidence_351,lyr_EtapaAprovado43unid_352,lyr_EtapaDiretriz22unid_353,lyr_EtapaDefinitiva10unid_354,lyr_EtapaPrvia24unid_355,],
                                fold: 'close',
                                title: 'Loteamentos/Condomínios – Parcelamento do Solo'});
var group_LoteamentosRegularizadosREURB = new ol.layer.Group({
                                layers: [lyr_REGULARIZADO_130,lyr_REGULARIZADO_131,],
                                fold: 'close',
                                title: 'Loteamentos Regularizados - REURB'});
var group_ObrasPblicas = new ol.layer.Group({
                                layers: [lyr_UBS_SANTA_TEREZINHA_102,lyr_UBS_SANTA_BARBARA_103,lyr_UBS_PERES_ELIAS_104,lyr_UBS_PARQUE_HORTO_105,lyr_UBS_JARDIM_PALMA_106,lyr_REVITALIZACAO_ESTACAO_FERROVIARIA_107,lyr_REFORMA_CRAS_OESTE_108,lyr_REFORMA_CRAS_NORTE_109,lyr_REFORCO_ESTRUTURAL_CHAMPAGNAT_110,lyr_RECAPEAMENTO_JARDIM_MARTINS_111,lyr_PRONTO_SOCORRO_ALVARO_AZZUZ_112,lyr_POLICLINICA_113,lyr_NOVO_NGA_114,lyr_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_115,lyr_ESCOLA_JOAO_LIPORONI_116,lyr_DRENAGEM_CORREGO_CUBATAO_117,lyr_DRENAGEM_CORREGO_BRAGRES_118,lyr_DRENAGEM_CANAL_JD_PALMEIRAS_119,lyr_CRECHE_SAMEL_PARK_120,lyr_CORPO_BAMBEIROS_121,lyr_CONTENCAO_VIARIA_122,lyr_CONSTRUCAO_CEPEL_SAO_JOSE_123,lyr_CONSTRUCAO_CEPEL_JD_CAMBUI_124,lyr_CONSTRUCAO_CAPS_INFANTIL_125,lyr_AREA_LAZER_PARQUE_ESMERALDA_126,lyr_AREA_LAZER_PARQUE_CONTINENTAL_127,lyr_AREA_LAZER_JARDIM_PORTINARI_128,lyr_OBRAS_PUBLICAS_129,],
                                fold: 'close',
                                title: 'Obras Públicas'});
var group_ParquesdeFranca = new ol.layer.Group({
                                layers: [lyr_PARQUE_DOS_TRABALHADORES_88,lyr_PARQUE_DOS_TRABALHADORES_89,lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_90,lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_91,lyr_PARQUE_CAXAMBU_92,lyr_PARQUE_CAXAMBU_93,lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_94,lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_95,lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_96,lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_97,lyr_JARDIM_ZOOBOTANICO_98,lyr_JARDIM_ZOOBOTANICO_99,lyr_COMPLEXO_POLIESPORTIVO_100,lyr_COMPLEXO_POLIESPORTIVO_101,],
                                fold: 'close',
                                title: 'Parques de Franca'});
var group_PontosViciados = new ol.layer.Group({
                                layers: [lyr_IMOVEL_PUBLICO_83,lyr_IMOVEL_PRIVADO_URBANO_84,lyr_IMOVEL_PRIVADO_URBANO_85,lyr_IMOVEL_PRIVADO_RURAL_86,lyr_IMOVEL_PRIVADO_RURAL_87,],
                                fold: 'close',
                                title: 'Pontos Viciados'});
var group_RodoviaseEstradas = new ol.layer.Group({
                                layers: [lyr_RODOVIAS_MUNICIPAIS_80,lyr_RODOVIAS_ESTADUAIS_81,lyr_ESTRADAS_RURAIS_MUNICIPAIS_82,],
                                fold: 'close',
                                title: 'Rodovias e Estradas'});
var group_SecretariadeEducaoUnidadesEscolares = new ol.layer.Group({
                                layers: [lyr_UNIVERSIDADE_ABERTA_DO_BRASIL_67,lyr_SETOR_DE_MERENDA_68,lyr_SECRETARIA_DE_EDUCACAO_69,lyr_ESPACO_DE_DIFUSAO_CIENTIFICA_70,lyr_ENSINO_FUNDAMENTAL_71,lyr_EJA_72,lyr_ED_INFANTIL_ENS_FUNDAMENTAL_73,lyr_EDUCACAO_INFANTIL_74,lyr_CRECHE_PRE_ESCOLA_75,lyr_CRECHE_76,lyr_CENTRO_DE_EDUCACAO_INTEGRADA_77,lyr_ALMOCHARIFADO_EDUCACAO_78,lyr_ALFABETIZACAO_DE_JOVENS_E_ADULTOS_79,],
                                fold: 'close',
                                title: 'Secretaria de Educação - Unidades Escolares'});
var group_SecretariadeEsporteeCultura = new ol.layer.Group({
                                layers: [lyr_TEATRO_48,lyr_SECRETARIA_49,lyr_QUADRA_50,lyr_PRACA_51,lyr_PISTA_52,lyr_PISCINA_53,lyr_PINACOTECA_54,lyr_PAVILHAO_55,lyr_PARQUE_56,lyr_MUSEU_57,lyr_GINASIO_58,lyr_ESTADIO_59,lyr_CONJUNTO_60,lyr_CEPEL_61,lyr_CENTRO_62,lyr_CASA_63,lyr_CAMPO_64,lyr_BIBLIOTECA_65,lyr_ARENA_66,],
                                fold: 'close',
                                title: 'Secretaria de Esporte e Cultura'});
var group_SecretariadeSade = new ol.layer.Group({
                                layers: [lyr_VIGILANCIA_EM_SAUDE_43,lyr_UNIDADE_DE_URGENCIA_E_EMERGENCIA_44,lyr_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO_45,lyr_GESTAO_ADMINISTRATIVO_46,lyr_ATENCAO_PRIMARIA_47,],
                                fold: 'close',
                                title: 'Secretaria de Saúde'});
var group_SistemaVirio = new ol.layer.Group({
                                layers: [lyr_SistemaVirioSistemavirioprincipal_34,lyr_SistemaVirioRodoviasViasarteriais_35,lyr_SistemaVirioRodovias_36,lyr_SistemaVirioExpansodosistemavirio_37,lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_38,lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_39,lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40,lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_41,lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_42,],
                                fold: 'close',
                                title: 'Sistema Viário'});
var group_Zoneamento = new ol.layer.Group({
                                layers: [lyr_SubMacrozonadeOcupaoRestrita_21,lyr_SubMacrozonadeOcupaoPreferencial_22,lyr_SubMacrozonadeExpansoUrbana_23,lyr_MacrozonadoRioCanoas_24,lyr_ExpUrbanaLeis4240199244201994eLC1002006_25,lyr_ExpUrbanaLCN3242019_26,lyr_ExpUrbanaLCN2352013_27,lyr_ExpUrbanaLCN1402009_28,lyr_ExpUrbanaLCN0502003_29,lyr_reaEspecialLazerInteresseTursticoeCultural_30,lyr_AERUreaEspecialResidenciasUnifamiliares_31,lyr_AEPIreaEspecialPreferIndustrialeLogstica_32,lyr_AEISreaEspecialdeInteresseSocial_33,],
                                fold: 'close',
                                title: 'Zoneamento'});
var group_ZoneamentoAmbientaldaBaciadoRioCanoas = new ol.layer.Group({
                                layers: [lyr_BACIA_RIO_CANOAS_LC_4322024_5,lyr_BACIA_RIO_CANOAS_LC_1002006_6,lyr_BACIA_RIBEIRAO_DA_ONCA_7,lyr_ARO_REMANESCENTES_FLORESTAIS_8,lyr_ARO_FAIXA_DE_CUESTAS_9,lyr_ARO_AREA_DE_AMORTECIMENTO_10,lyr_ARO_APP_11,lyr_ARA_INCONGRUENCIAS_EM_APP_12,lyr_ARA_ETE_LAGOAS_13,lyr_ARA_ATERROS_14,lyr_AOD_BAIXA_DENSIDADE_NIVEL_3_15,lyr_AOD_BAIXA_DENSIDADE_NIVEL_2_16,lyr_AOD_BAIXA_DENSIDADE_NIVEL_1_17,lyr_AOD_AUS_FASE_2_18,lyr_AOD_AUS_FASE_1_19,lyr_AOD_AREA_URBANA_CONSOLIDADA_20,],
                                fold: 'close',
                                title: 'Zoneamento Ambiental da Bacia do Rio Canoas'});
var group_ZonaCartogrficaMapaBase = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,lyr_GoogleSatellite_2,lyr_LimiteMunicipaldeFranca_3,lyr_reaUrbanadeFranca_4,],
                                fold: 'close',
                                title: 'Zona Cartográfica / Mapa Base'});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatelliteHybrid_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(true);lyr_LimiteMunicipaldeFranca_3.setVisible(true);lyr_reaUrbanadeFranca_4.setVisible(true);lyr_BACIA_RIO_CANOAS_LC_4322024_5.setVisible(false);lyr_BACIA_RIO_CANOAS_LC_1002006_6.setVisible(false);lyr_BACIA_RIBEIRAO_DA_ONCA_7.setVisible(false);lyr_ARO_REMANESCENTES_FLORESTAIS_8.setVisible(false);lyr_ARO_FAIXA_DE_CUESTAS_9.setVisible(false);lyr_ARO_AREA_DE_AMORTECIMENTO_10.setVisible(false);lyr_ARO_APP_11.setVisible(false);lyr_ARA_INCONGRUENCIAS_EM_APP_12.setVisible(false);lyr_ARA_ETE_LAGOAS_13.setVisible(false);lyr_ARA_ATERROS_14.setVisible(false);lyr_AOD_BAIXA_DENSIDADE_NIVEL_3_15.setVisible(false);lyr_AOD_BAIXA_DENSIDADE_NIVEL_2_16.setVisible(false);lyr_AOD_BAIXA_DENSIDADE_NIVEL_1_17.setVisible(false);lyr_AOD_AUS_FASE_2_18.setVisible(false);lyr_AOD_AUS_FASE_1_19.setVisible(false);lyr_AOD_AREA_URBANA_CONSOLIDADA_20.setVisible(false);lyr_SubMacrozonadeOcupaoRestrita_21.setVisible(false);lyr_SubMacrozonadeOcupaoPreferencial_22.setVisible(false);lyr_SubMacrozonadeExpansoUrbana_23.setVisible(false);lyr_MacrozonadoRioCanoas_24.setVisible(false);lyr_ExpUrbanaLeis4240199244201994eLC1002006_25.setVisible(false);lyr_ExpUrbanaLCN3242019_26.setVisible(false);lyr_ExpUrbanaLCN2352013_27.setVisible(false);lyr_ExpUrbanaLCN1402009_28.setVisible(false);lyr_ExpUrbanaLCN0502003_29.setVisible(false);lyr_reaEspecialLazerInteresseTursticoeCultural_30.setVisible(false);lyr_AERUreaEspecialResidenciasUnifamiliares_31.setVisible(false);lyr_AEPIreaEspecialPreferIndustrialeLogstica_32.setVisible(false);lyr_AEISreaEspecialdeInteresseSocial_33.setVisible(false);lyr_SistemaVirioSistemavirioprincipal_34.setVisible(false);lyr_SistemaVirioRodoviasViasarteriais_35.setVisible(false);lyr_SistemaVirioRodovias_36.setVisible(false);lyr_SistemaVirioExpansodosistemavirio_37.setVisible(false);lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_38.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_39.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_41.setVisible(false);lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_42.setVisible(false);lyr_VIGILANCIA_EM_SAUDE_43.setVisible(false);lyr_UNIDADE_DE_URGENCIA_E_EMERGENCIA_44.setVisible(false);lyr_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO_45.setVisible(false);lyr_GESTAO_ADMINISTRATIVO_46.setVisible(false);lyr_ATENCAO_PRIMARIA_47.setVisible(false);lyr_TEATRO_48.setVisible(false);lyr_SECRETARIA_49.setVisible(false);lyr_QUADRA_50.setVisible(false);lyr_PRACA_51.setVisible(false);lyr_PISTA_52.setVisible(false);lyr_PISCINA_53.setVisible(false);lyr_PINACOTECA_54.setVisible(false);lyr_PAVILHAO_55.setVisible(false);lyr_PARQUE_56.setVisible(false);lyr_MUSEU_57.setVisible(false);lyr_GINASIO_58.setVisible(false);lyr_ESTADIO_59.setVisible(false);lyr_CONJUNTO_60.setVisible(false);lyr_CEPEL_61.setVisible(false);lyr_CENTRO_62.setVisible(false);lyr_CASA_63.setVisible(false);lyr_CAMPO_64.setVisible(false);lyr_BIBLIOTECA_65.setVisible(false);lyr_ARENA_66.setVisible(false);lyr_UNIVERSIDADE_ABERTA_DO_BRASIL_67.setVisible(false);lyr_SETOR_DE_MERENDA_68.setVisible(false);lyr_SECRETARIA_DE_EDUCACAO_69.setVisible(false);lyr_ESPACO_DE_DIFUSAO_CIENTIFICA_70.setVisible(false);lyr_ENSINO_FUNDAMENTAL_71.setVisible(false);lyr_EJA_72.setVisible(false);lyr_ED_INFANTIL_ENS_FUNDAMENTAL_73.setVisible(false);lyr_EDUCACAO_INFANTIL_74.setVisible(false);lyr_CRECHE_PRE_ESCOLA_75.setVisible(false);lyr_CRECHE_76.setVisible(false);lyr_CENTRO_DE_EDUCACAO_INTEGRADA_77.setVisible(false);lyr_ALMOCHARIFADO_EDUCACAO_78.setVisible(false);lyr_ALFABETIZACAO_DE_JOVENS_E_ADULTOS_79.setVisible(false);lyr_RODOVIAS_MUNICIPAIS_80.setVisible(false);lyr_RODOVIAS_ESTADUAIS_81.setVisible(false);lyr_ESTRADAS_RURAIS_MUNICIPAIS_82.setVisible(false);lyr_IMOVEL_PUBLICO_83.setVisible(false);lyr_IMOVEL_PRIVADO_URBANO_84.setVisible(false);lyr_IMOVEL_PRIVADO_URBANO_85.setVisible(false);lyr_IMOVEL_PRIVADO_RURAL_86.setVisible(false);lyr_IMOVEL_PRIVADO_RURAL_87.setVisible(false);lyr_PARQUE_DOS_TRABALHADORES_88.setVisible(false);lyr_PARQUE_DOS_TRABALHADORES_89.setVisible(false);lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_90.setVisible(false);lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_91.setVisible(false);lyr_PARQUE_CAXAMBU_92.setVisible(false);lyr_PARQUE_CAXAMBU_93.setVisible(false);lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_94.setVisible(false);lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_95.setVisible(false);lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_96.setVisible(false);lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_97.setVisible(false);lyr_JARDIM_ZOOBOTANICO_98.setVisible(false);lyr_JARDIM_ZOOBOTANICO_99.setVisible(false);lyr_COMPLEXO_POLIESPORTIVO_100.setVisible(false);lyr_COMPLEXO_POLIESPORTIVO_101.setVisible(false);lyr_UBS_SANTA_TEREZINHA_102.setVisible(false);lyr_UBS_SANTA_BARBARA_103.setVisible(false);lyr_UBS_PERES_ELIAS_104.setVisible(false);lyr_UBS_PARQUE_HORTO_105.setVisible(false);lyr_UBS_JARDIM_PALMA_106.setVisible(false);lyr_REVITALIZACAO_ESTACAO_FERROVIARIA_107.setVisible(false);lyr_REFORMA_CRAS_OESTE_108.setVisible(false);lyr_REFORMA_CRAS_NORTE_109.setVisible(false);lyr_REFORCO_ESTRUTURAL_CHAMPAGNAT_110.setVisible(false);lyr_RECAPEAMENTO_JARDIM_MARTINS_111.setVisible(false);lyr_PRONTO_SOCORRO_ALVARO_AZZUZ_112.setVisible(false);lyr_POLICLINICA_113.setVisible(false);lyr_NOVO_NGA_114.setVisible(false);lyr_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_115.setVisible(false);lyr_ESCOLA_JOAO_LIPORONI_116.setVisible(false);lyr_DRENAGEM_CORREGO_CUBATAO_117.setVisible(false);lyr_DRENAGEM_CORREGO_BRAGRES_118.setVisible(false);lyr_DRENAGEM_CANAL_JD_PALMEIRAS_119.setVisible(false);lyr_CRECHE_SAMEL_PARK_120.setVisible(false);lyr_CORPO_BAMBEIROS_121.setVisible(false);lyr_CONTENCAO_VIARIA_122.setVisible(false);lyr_CONSTRUCAO_CEPEL_SAO_JOSE_123.setVisible(false);lyr_CONSTRUCAO_CEPEL_JD_CAMBUI_124.setVisible(false);lyr_CONSTRUCAO_CAPS_INFANTIL_125.setVisible(false);lyr_AREA_LAZER_PARQUE_ESMERALDA_126.setVisible(false);lyr_AREA_LAZER_PARQUE_CONTINENTAL_127.setVisible(false);lyr_AREA_LAZER_JARDIM_PORTINARI_128.setVisible(false);lyr_OBRAS_PUBLICAS_129.setVisible(false);lyr_REGULARIZADO_130.setVisible(false);lyr_REGULARIZADO_131.setVisible(false);lyr_Vivenna_132.setVisible(false);lyr_Vivenna_133.setVisible(false);lyr_VittaSoVicente_134.setVisible(false);lyr_VittaSoVicente_135.setVisible(false);lyr_VittaJardimSimes_136.setVisible(false);lyr_VittaJardimSimes_137.setVisible(false);lyr_VittaAlvorada_138.setVisible(false);lyr_VittaAlvorada_139.setVisible(false);lyr_VilaDiEspanha_140.setVisible(false);lyr_VilaDiEspanha_141.setVisible(false);lyr_VillaPucci_142.setVisible(false);lyr_VillaPucci_143.setVisible(false);lyr_VilaPiemonteII_144.setVisible(false);lyr_VilaPiemonteII_145.setVisible(false);lyr_VilaOlimpica_146.setVisible(false);lyr_VilaOlimpica_147.setVisible(false);lyr_VillaDoratta_148.setVisible(false);lyr_VillaDoratta_149.setVisible(false);lyr_VillaBella_150.setVisible(false);lyr_VillaBella_151.setVisible(false);lyr_Versalhes_152.setVisible(false);lyr_Versalhes_153.setVisible(false);lyr_TorontoResidence_154.setVisible(false);lyr_TorontoResidence_155.setVisible(false);lyr_TerraNova_156.setVisible(false);lyr_TerraNova_157.setVisible(false);lyr_Sonetto_158.setVisible(false);lyr_Sonetto_159.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL2_160.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL2_161.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL1_162.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL1_163.setVisible(false);lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_164.setVisible(false);lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_165.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_166.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_167.setVisible(false);lyr_SantaLina_168.setVisible(false);lyr_SantaLina_169.setVisible(false);lyr_SantAnita_170.setVisible(false);lyr_SantAnita_171.setVisible(false);lyr_RuaAlfioBenedini_172.setVisible(false);lyr_RuaAlfioBenedini_173.setVisible(false);lyr_RuaAlfioBenedini_174.setVisible(false);lyr_ResidencialValeVerde_175.setVisible(false);lyr_ResidencialValeVerde_176.setVisible(false);lyr_ResidencialYasminTorres_177.setVisible(false);lyr_ResidencialYasminTorres_178.setVisible(false);lyr_ResidencialTellini_179.setVisible(false);lyr_ResidencialTellini_180.setVisible(false);lyr_ResidencialSoCarlosII_181.setVisible(false);lyr_ResidencialSoCarlosII_182.setVisible(false);lyr_ResidencialSoCarlosI_183.setVisible(false);lyr_ResidencialSoCarlosI_184.setVisible(false);lyr_ResidencialSantaIns_185.setVisible(false);lyr_ResidencialSantaIns_186.setVisible(false);lyr_ResidencialSantaF_187.setVisible(false);lyr_ResidencialSantaF_188.setVisible(false);lyr_ResidencialQuintadosOitis_189.setVisible(false);lyr_ResidencialQuintadosOitis_190.setVisible(false);lyr_ResidencialQuintadoSol_191.setVisible(false);lyr_ResidencialQuintadoSol_192.setVisible(false);lyr_ResidencialPousoAlegreII_193.setVisible(false);lyr_ResidencialPousoAlegreII_194.setVisible(false);lyr_ResidencialPousoAlegre_195.setVisible(false);lyr_ResidencialPousoAlegre_196.setVisible(false);lyr_ResidencialPiamalim_197.setVisible(false);lyr_ResidencialPiamalim_198.setVisible(false);lyr_ResidencialParquedosPassaros_199.setVisible(false);lyr_ResidencialParquedosPassaros_200.setVisible(false);lyr_ResicencialNairRetuciII_201.setVisible(false);lyr_ResicencialNairRetuciII_202.setVisible(false);lyr_ResicencialNairRetuci_203.setVisible(false);lyr_ResicencialNairRetuci_204.setVisible(false);lyr_ResidencialMoradadoBosque_205.setVisible(false);lyr_ResidencialMoradadoBosque_206.setVisible(false);lyr_ResidencialMarthaHelena_207.setVisible(false);lyr_ResidencialMarthaHelena_208.setVisible(false);lyr_ResidencialMarioTasso_209.setVisible(false);lyr_ResidencialMarioTasso_210.setVisible(false);lyr_ResidencialMarianaAlarcon_211.setVisible(false);lyr_ResidencialMarianaAlarcon_212.setVisible(false);lyr_ResidencialJardimCanada_213.setVisible(false);lyr_ResidencialJardimCanada_214.setVisible(false);lyr_ResidencialJabuticabeiras_215.setVisible(false);lyr_ResidencialJabuticabeiras_216.setVisible(false);lyr_ResidencialGramadosII_217.setVisible(false);lyr_ResidencialGramadosII_218.setVisible(false);lyr_ResidencialGramados_219.setVisible(false);lyr_ResidencialGramados_220.setVisible(false);lyr_ResidencialGaia_221.setVisible(false);lyr_ResidencialGaia_222.setVisible(false);lyr_ResidencialFrutuoso_223.setVisible(false);lyr_ResidencialFrutuoso_224.setVisible(false);lyr_ResidencialFaggioni_225.setVisible(false);lyr_ResidencialFaggioni_226.setVisible(false);lyr_ResidencialEssenza_227.setVisible(false);lyr_ResidencialEssenza_228.setVisible(false);lyr_ResidencialDomingosJardini_229.setVisible(false);lyr_ResidencialDomingosJardini_230.setVisible(false);lyr_ResidencialCintraAlves_231.setVisible(false);lyr_ResidencialCintraAlves_232.setVisible(false);lyr_ResidencialBoaVista_233.setVisible(false);lyr_ResidencialBoaVista_234.setVisible(false);lyr_ResidencialAltodaFazenda_235.setVisible(false);lyr_ResidencialAltodaFazenda_236.setVisible(false);lyr_ResidencialAnaHelena_237.setVisible(false);lyr_ResidencialAnaHelena_238.setVisible(false);lyr_ReservaAbaete_239.setVisible(false);lyr_ReservaAbaete_240.setVisible(false);lyr_RecantoMeneghetti_241.setVisible(false);lyr_RecantoMeneghetti_242.setVisible(false);lyr_Quadra18VilaExposio_243.setVisible(false);lyr_Quadra18VilaExposio_244.setVisible(false);lyr_ProlongamentoSamelPark_245.setVisible(false);lyr_ProlongamentoSamelPark_246.setVisible(false);lyr_ParqueVillaLobos_247.setVisible(false);lyr_ParqueVillaLobos_248.setVisible(false);lyr_ParquePalmeiraImperial_249.setVisible(false);lyr_ParquePalmeiraImperial_250.setVisible(false);lyr_ParqueJacarand_251.setVisible(false);lyr_ParqueJacarand_252.setVisible(false);lyr_ParqueFlora_253.setVisible(false);lyr_ParqueFlora_254.setVisible(false);lyr_ParquedosSabias_255.setVisible(false);lyr_ParquedosSabias_256.setVisible(false);lyr_ParquedosCoqueiros_257.setVisible(false);lyr_ParquedosCoqueiros_258.setVisible(false);lyr_ParqueAlvorada_259.setVisible(false);lyr_ParqueAlvorada_260.setVisible(false);lyr_ParagonFaseII_261.setVisible(false);lyr_ParagonFaseII_262.setVisible(false);lyr_Paragon_263.setVisible(false);lyr_Paragon_264.setVisible(false);lyr_PalmeiraReal_265.setVisible(false);lyr_PalmeiraReal_266.setVisible(false);lyr_MoradadoVerdeII_267.setVisible(false);lyr_MoradadoVerdeII_268.setVisible(false);lyr_MoradadaMata_269.setVisible(false);lyr_MoradadaMata_270.setVisible(false);lyr_Monti_271.setVisible(false);lyr_Monti_272.setVisible(false);lyr_MontBlancResidence_273.setVisible(false);lyr_MontBlancResidence_274.setVisible(false);lyr_MasterplanDespaschoal_275.setVisible(false);lyr_MasterplanDespaschoal_276.setVisible(false);lyr_MasterplanDespaschoal_277.setVisible(false);lyr_MasteplanBildVitta_278.setVisible(false);lyr_MasteplanBildVitta_279.setVisible(false);lyr_MasteplanBildVitta_280.setVisible(false);lyr_Loteamentolamo_281.setVisible(false);lyr_Loteamentolamo_282.setVisible(false);lyr_JardimStephani_283.setVisible(false);lyr_JardimStephani_284.setVisible(false);lyr_JardimPherola_285.setVisible(false);lyr_JardimPherola_286.setVisible(false);lyr_JardimNatal_287.setVisible(false);lyr_JardimNatal_288.setVisible(false);lyr_JardimMariaLuiza_289.setVisible(false);lyr_JardimMariaLuiza_290.setVisible(false);lyr_JardimMariaAugusta_291.setVisible(false);lyr_JardimMariaAugusta_292.setVisible(false);lyr_JardimHorizonte_293.setVisible(false);lyr_JardimHorizonte_294.setVisible(false);lyr_JardimFlora_295.setVisible(false);lyr_JardimFlora_296.setVisible(false);lyr_IrineuZanetiII_297.setVisible(false);lyr_IrineuZanetiII_298.setVisible(false);lyr_Infratcnica_299.setVisible(false);lyr_Infratcnica_300.setVisible(false);lyr_HorizResidence_301.setVisible(false);lyr_HorizResidence_302.setVisible(false);lyr_GlebaNossaSenhoraAuxiliadora_303.setVisible(false);lyr_GlebaNossaSenhoraAuxiliadora_304.setVisible(false);lyr_Ferracini_305.setVisible(false);lyr_Ferracini_306.setVisible(false);lyr_FrancaB6_307.setVisible(false);lyr_FrancaB6_308.setVisible(false);lyr_FazendaProgresso_309.setVisible(false);lyr_FazendaProgresso_310.setVisible(false);lyr_FazendaeGranjaSantaRita2_311.setVisible(false);lyr_FazendaeGranjaSantaRita2_312.setVisible(false);lyr_FazendaeGranjaSantaRita_313.setVisible(false);lyr_FazendaeGranjaSantaRita_314.setVisible(false);lyr_Essence_315.setVisible(false);lyr_Essence_316.setVisible(false);lyr_Elias_317.setVisible(false);lyr_Elias_318.setVisible(false);lyr_EdifcioSolNascente_319.setVisible(false);lyr_EdifcioSolNascente_320.setVisible(false);lyr_EdifcioRuadoSol_321.setVisible(false);lyr_EdifcioRuadoSol_322.setVisible(false);lyr_EdifcioResidencialHope_323.setVisible(false);lyr_EdifcioResidencialHope_324.setVisible(false);lyr_DiocesedeFranca_325.setVisible(false);lyr_DiocesedeFranca_326.setVisible(false);lyr_DaVinci_327.setVisible(false);lyr_DaVinci_328.setVisible(false);lyr_CondomnioIICityPetrpolis_329.setVisible(false);lyr_CondomnioIICityPetrpolis_330.setVisible(false);lyr_CondomnioICityPetrpolis_331.setVisible(false);lyr_CondomnioICityPetrpolis_332.setVisible(false);lyr_Colorado_333.setVisible(false);lyr_Colorado_334.setVisible(false);lyr_CidadeJardim_335.setVisible(false);lyr_CidadeJardim_336.setVisible(false);lyr_ChacaraOlaria_337.setVisible(false);lyr_ChacaraOlaria_338.setVisible(false);lyr_ChacaraBelaVista_339.setVisible(false);lyr_ChacaraBelaVista_340.setVisible(false);lyr_BordadaMata_341.setVisible(false);lyr_BordadaMata_342.setVisible(false);lyr_Arteris_343.setVisible(false);lyr_Arteris_344.setVisible(false);lyr_ArterisFaixadeDomnioFrancaSP_3342_345.setVisible(false);lyr_ArterisFaixadeDomnioFrancaSP_3452_346.setVisible(false);lyr_ArterisFaixadeDomnioFrancaSPA_397334_347.setVisible(false);lyr_Arizona_348.setVisible(false);lyr_Arizona_349.setVisible(false);lyr_AbuDhabiParadiseResortResidence_350.setVisible(false);lyr_AbuDhabiParadiseResortResidence_351.setVisible(false);lyr_EtapaAprovado43unid_352.setVisible(false);lyr_EtapaDiretriz22unid_353.setVisible(false);lyr_EtapaDefinitiva10unid_354.setVisible(false);lyr_EtapaPrvia24unid_355.setVisible(false);lyr_IRREGULAR_356.setVisible(false);lyr_IRREGULAR_357.setVisible(false);lyr_APP1745unid_358.setVisible(false);lyr_RiosDuplos84unid_359.setVisible(false);lyr_MassasDgua270unid_360.setVisible(false);lyr_RiosSimples1842unid_361.setVisible(false);lyr_CORPO_HIDRICO_CANAL_FECHADO_362.setVisible(false);lyr_CORPO_HIDRICO_CANAL_ABERTO_363.setVisible(false);lyr_Nascentes821unid_364.setVisible(false);lyr_AntigoAterrodaFazMunicipal_365.setVisible(false);lyr_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_366.setVisible(false);lyr_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_367.setVisible(false);lyr_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_368.setVisible(false);lyr_reaBdaFazMunicipal_369.setVisible(false);lyr_reaBdaFazMunicPoosMonitEngesolve7unid_370.setVisible(false);lyr_AntigoAterrodasMaritacas_371.setVisible(false);lyr_AntigoAterroMaritacas1Etapa28unid_372.setVisible(false);lyr_ParqueZumbidosPalmares_373.setVisible(false);lyr_AntigoAterroMaritacas3Etapa5unid_374.setVisible(false);lyr_AntigoAterroMaritacas2Etapa41unid_375.setVisible(false);lyr_PARTE_DA_AREA_G_AVERBADA_376.setVisible(false);lyr_PARTE_DA_AREA_G_A_SER_AVERBADA_377.setVisible(false);lyr_CONJUNTO_HABITACIONAL_378.setVisible(false);lyr_AV_ACESSO_COLEGIO_AGRICOLA_379.setVisible(false);lyr_AREA_N2_380.setVisible(false);lyr_AREA_N1_381.setVisible(false);lyr_AREA_N_382.setVisible(false);lyr_AREA_K_383.setVisible(false);lyr_AREA_J_384.setVisible(false);lyr_AREA_I_385.setVisible(false);lyr_AREA_H_386.setVisible(false);lyr_AREA_G_387.setVisible(false);lyr_AREA_F_388.setVisible(false);lyr_AREA_E_389.setVisible(false);lyr_AREA_D_390.setVisible(false);lyr_AREA_C_391.setVisible(false);lyr_AREA_B_392.setVisible(false);lyr_AREA_A_393.setVisible(false);lyr_PROPOSTO_394.setVisible(false);lyr_EM_FUNCIONAMENTO_395.setVisible(false);lyr_EM_CONSTRUCAO_396.setVisible(false);lyr_DrenagensExistentes_397.setVisible(false);lyr_DRENAGEM_VILLAGIO_DI_FIRENZE_398.setVisible(false);lyr_DRENAGEM_VILLA_SANTA_GIANNA_399.setVisible(false);lyr_DRENAGEM_VILA_TOTOLI_400.setVisible(false);lyr_DRENAGEM_VILA_REAL_401.setVisible(false);lyr_DRENAGEM_VILA_DORATTA_402.setVisible(false);lyr_DRENAGEM_SAO_PEDRO_II_403.setVisible(false);lyr_DRENAGEM_SANTA_FE_404.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_TELLINI_405.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_SANTA_INES_408.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_PALERMO_412.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_ITAPUA_413.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_GAIA_414.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_FERRACINI_415.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_FAGGIONI_416.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_ECOSTILO_417.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_DOURADO_418.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_BALDASSARI_419.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_420.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421.setVisible(false);lyr_DRENAGEM_RECREIO_CAMPO_BELO_422.setVisible(false);lyr_DRENAGEM_RECANTO_MENEGHETTI_423.setVisible(false);lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424.setVisible(false);lyr_DRENAGEM_PROL_VILA_ISABEL_425.setVisible(false);lyr_DRENAGEM_PROL_JARDIM_MARTINS_426.setVisible(false);lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427.setVisible(false);lyr_DRENAGEM_PARQUE_UNIVERSITARIO_428.setVisible(false);lyr_DRENAGEM_PARQUE_SANTA_ADELIA_429.setVisible(false);lyr_DRENAGEM_PARQUE_MOEMA_430.setVisible(false);lyr_DRENAGEM_PARQUE_JOAO_LEITE_431.setVisible(false);lyr_DRENAGEM_PARQUE_DOS_SABIAS_432.setVisible(false);lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_433.setVisible(false);lyr_DRENAGEM_PARQUE_DAS_ARVORES_434.setVisible(false);lyr_DRENAGEM_PARQUE_CASTELO_435.setVisible(false);lyr_DRENAGEM_PARQUE_BOA_VISTA_436.setVisible(false);lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_437.setVisible(false);lyr_DRENAGEM_PARAGON_438.setVisible(false);lyr_DRENAGEM_NAIR_RETUSSI_I_439.setVisible(false);lyr_DRENAGEM_JARDIM_SAO_GABRIEL_440.setVisible(false);lyr_DRENAGEM_JARDIM_SANTA_LUCIA_441.setVisible(false);lyr_DRENAGEM_JARDIM_PULICANO_442.setVisible(false);lyr_DRENAGEM_JARDIM_PORTINARI_443.setVisible(false);lyr_DRENAGEM_JARDIM_PIRATININGA_444.setVisible(false);lyr_DRENAGEM_JARDIM_PALMA_445.setVisible(false);lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446.setVisible(false);lyr_DRENAGEM_JARDIM_NOEMIA_447.setVisible(false);lyr_DRENAGEM_JARDIM_NATAL_448.setVisible(false);lyr_DRENAGEM_JARDIM_MARTINS_449.setVisible(false);lyr_DRENAGEM_JARDIM_MARIA_LUIZA_450.setVisible(false);lyr_DRENAGEM_JARDIM_LIBANO_451.setVisible(false);lyr_DRENAGEM_JARDIM_IPANEMA_452.setVisible(false);lyr_DRENAGEM_JARDIM_BUENO_453.setVisible(false);lyr_DRENAGEM_JARDIM_BOTANICO_454.setVisible(false);lyr_DRENAGEM_JARDIM_BARAO_455.setVisible(false);lyr_DRENAGEM_JARDIM_AVIACAO_456.setVisible(false);lyr_DRENAGEM_JARDIM_ARIZONA_II_457.setVisible(false);lyr_DRENAGEM_JARDIM_ARIZONA_I_458.setVisible(false);lyr_DRENAGEM_JARDIM_AEROPORTO_II_459.setVisible(false);lyr_DRENAGEM_GRAMADOS_I_460.setVisible(false);lyr_DRENAGEM_FRANCA_POLO_CLUBE_461.setVisible(false);lyr_DRENAGEM_DOMINGOS_JARDINI_462.setVisible(false);lyr_DRENAGEM_DINFRA_II_463.setVisible(false);lyr_DRENAGEM_ATLANTA_PARK_464.setVisible(false);lyr_DRENAGEM_ANA_DOROTHEA_465.setVisible(false);lyr_REGIAO_SUL_466.setVisible(false);lyr_REGIAO_OESTE_467.setVisible(false);lyr_REGIAO_NORTE_468.setVisible(false);lyr_REGIAO_LESTE_469.setVisible(false);lyr_BAIRROS_470.setVisible(false);lyr_Voorocas27unid_471.setVisible(false);lyr_LocaisDifcilAcessoreasRurais12unid_472.setVisible(false);lyr_Contineres286unid_473.setVisible(false);lyr_rvoreImuneaoCorte9unid_474.setVisible(false);lyr_AcademiasaoArLivre84unid_475.setVisible(false);lyr_SERVICO_DE_SAUDE_476.setVisible(false);lyr_RECICLAVEIS_477.setVisible(false);lyr_PNEUS_478.setVisible(false);lyr_PILHAS_E_BATERIAS_479.setVisible(false);lyr_PERIGOSOS_480.setVisible(false);lyr_OLEO_LUBRIFICANTE_481.setVisible(false);lyr_OLEO_DE_COZINHA_482.setVisible(false);lyr_MASSA_VERDE_483.setVisible(false);lyr_MADEIRAS_484.setVisible(false);lyr_LATAS_DE_TINTA_485.setVisible(false);lyr_LAMPADAS_486.setVisible(false);lyr_INSERVIVEIS_487.setVisible(false);lyr_GESSO_488.setVisible(false);lyr_EMBALAGENS_AGROTOXICO_489.setVisible(false);lyr_ELETRONICOS_490.setVisible(false);lyr_COURO_491.setVisible(false);lyr_CONSTRUCAO_CIVIL_492.setVisible(false);lyr_CHAPAS_DE_RAIO_X_493.setVisible(false);lyr_PROTECAO_AERODROMO_494.setVisible(false);lyr_HELIPONTO_HOSPITAL_REGIONAL_495.setVisible(false);lyr_HELIPONTO_EDIFICIO_PRIME_496.setVisible(false);lyr_HELIPONTO_EDIFICIO_PRIME_497.setVisible(false);lyr_CLASSE_VB_498.setVisible(false);lyr_CLASSE_VA_499.setVisible(false);lyr_CLASSE_IVC_500.setVisible(false);lyr_CLASSE_IVB_501.setVisible(false);lyr_CLASSE_IVA_502.setVisible(false);lyr_CLASSE_IIIC_503.setVisible(false);lyr_CLASSE_IIIB_504.setVisible(false);lyr_CLASSE_IIIA_505.setVisible(false);lyr_CLASSE_II_506.setVisible(false);lyr_CLASSE_I_507.setVisible(false);lyr_LoteamentoFechado146unid70632440m_508.setVisible(false);lyr_LoteEdificao20unid_509.setVisible(false);lyr_LoteEdificao20unid508062m_510.setVisible(false);lyr_LoteEMDEF10unid_511.setVisible(false);lyr_LoteEMDEF10unid218783m_512.setVisible(false);lyr_Lote252unid_513.setVisible(false);lyr_Lote252unid7530210m_514.setVisible(false);lyr_LeiloLEI97542025Proc7954202537196unid_515.setVisible(false);lyr_LeiloLEI97542025Proc7954202537196unid3240462m_516.setVisible(false);lyr_LeiloLEI97542025Proc2652520256922unid_517.setVisible(false);lyr_LeiloLEI97542025Proc2652520256922unid352000m_518.setVisible(false);lyr_LeiloLEI97542025Proc2198620254518unid_519.setVisible(false);lyr_LeiloLEI97542025Proc2198620254518unid2092083m_520.setVisible(false);lyr_LeiloLEI97542025Homologado4unid_521.setVisible(false);lyr_LeiloLEI97542025Homologado4unid334770m_522.setVisible(false);lyr_reaVerde2117unid881307234m_523.setVisible(false);lyr_reaPatrimonial69unid121924073m_524.setVisible(false);lyr_reaInstitucional371unid208395759m_525.setVisible(false);lyr_readeUsoEspecial280unid271349968m_526.setVisible(false);lyr_APP169unid239527816m_527.setVisible(false);lyr_TRPRL_CETESB_528.setVisible(false);lyr_TRPRL_CETESB_529.setVisible(false);lyr_TCRA_MUNICIPAL_530.setVisible(false);lyr_TCRA_MUNICIPAL_531.setVisible(false);lyr_TCRA_CETESB_PARCELAMENTO_532.setVisible(false);lyr_TCRA_CETESB_PARCELAMENTO_533.setVisible(false);lyr_TCRA_CETESB_534.setVisible(false);lyr_TCRA_CETESB_535.setVisible(false);lyr_TAC_MP_536.setVisible(false);lyr_TAC_MP_537.setVisible(false);lyr_PLANTIO_VOLUNTARIO_538.setVisible(false);lyr_PLANTIO_VOLUNTARIO_539.setVisible(false);lyr_ANUENCIA_540.setVisible(false);lyr_ANUENCIA_541.setVisible(false);lyr_AIIPA_CETESB_542.setVisible(false);lyr_AIIPA_CETESB_543.setVisible(false);lyr_ACAO_CIVIL_PUBLICA_544.setVisible(false);lyr_ACAO_CIVIL_PUBLICA_545.setVisible(false);lyr_AdoteUmaPraa392unid38295094m_546.setVisible(false);lyr_SPlacaEgnaldo4unid86447m_547.setVisible(false);lyr_SPlacaDilu15unid751060m_548.setVisible(false);lyr_CPlacaEgnaldo221unid22321870m_549.setVisible(false);lyr_CPlacaDilu152unid15990431m_550.setVisible(false);
var layersList = [group_ZonaCartogrficaMapaBase,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_Zoneamento,group_SistemaVirio,group_SecretariadeSade,group_SecretariadeEsporteeCultura,group_SecretariadeEducaoUnidadesEscolares,group_RodoviaseEstradas,group_PontosViciados,group_ParquesdeFranca,group_ObrasPblicas,group_LoteamentosRegularizadosREURB,group_LoteamentosCondomniosParcelamentodoSolo,group_LoteamentosClandestinos,group_HidrografiaFBDS2025,group_GerenciamentodereasContaminadas,group_FazendaMunicipalPousoAlto,group_Ecopontos,group_Drenagem,group_DivisoTerritorialMunicipal,group_Diversos,group_DescarteCorretodeResduos,group_ControleAreo,group_ClassesdeRiscoIPT,group_reasPblicas,group_reasdeCompensaoAmbiental,group_ProgramaAdoteUmaPraa];
lyr_LimiteMunicipaldeFranca_3.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_reaUrbanadeFranca_4.set('fieldAliases', {'fid': 'fid', 'Código do Município': 'Código do Município', 'Nome do Município': 'Nome do Município', 'UF': 'UF', 'Código da UF': 'Código da UF', 'Classe de Uso': 'Classe de Uso', 'Área (ha)': 'Área (ha)', 'Área (km²)': 'Área (km²)', });
lyr_BACIA_RIO_CANOAS_LC_4322024_5.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'AREA_KM2': 'AREA_KM2', });
lyr_BACIA_RIO_CANOAS_LC_1002006_6.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'AREA_KM2': 'AREA_KM2', });
lyr_BACIA_RIBEIRAO_DA_ONCA_7.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'AREA_KM2': 'Área (km²)', });
lyr_ARO_REMANESCENTES_FLORESTAIS_8.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_ARO_FAIXA_DE_CUESTAS_9.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_ARO_AREA_DE_AMORTECIMENTO_10.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_ARO_APP_11.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_ARA_INCONGRUENCIAS_EM_APP_12.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_ARA_ETE_LAGOAS_13.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_ARA_ATERROS_14.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_AOD_BAIXA_DENSIDADE_NIVEL_3_15.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_AOD_BAIXA_DENSIDADE_NIVEL_2_16.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_AOD_BAIXA_DENSIDADE_NIVEL_1_17.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_AOD_AUS_FASE_2_18.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_AOD_AUS_FASE_1_19.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_AOD_AREA_URBANA_CONSOLIDADA_20.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_SubMacrozonadeOcupaoRestrita_21.set('fieldAliases', {'fid': 'fid', 'macrozona_urbana': 'macrozona_urbana', });
lyr_SubMacrozonadeOcupaoPreferencial_22.set('fieldAliases', {'fid': 'fid', 'macrozona_urbana': 'macrozona_urbana', });
lyr_SubMacrozonadeExpansoUrbana_23.set('fieldAliases', {'fid': 'fid', 'macrozona_urbana': 'macrozona_urbana', });
lyr_MacrozonadoRioCanoas_24.set('fieldAliases', {'fid': 'fid', 'macrozona_urbana': 'macrozona_urbana', });
lyr_ExpUrbanaLeis4240199244201994eLC1002006_25.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_ExpUrbanaLCN3242019_26.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_ExpUrbanaLCN2352013_27.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_ExpUrbanaLCN1402009_28.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_ExpUrbanaLCN0502003_29.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_reaEspecialLazerInteresseTursticoeCultural_30.set('fieldAliases', {'fid': 'fid', 'zona_especial': 'zona_especial', });
lyr_AERUreaEspecialResidenciasUnifamiliares_31.set('fieldAliases', {'fid': 'fid', 'zona_especial': 'zona_especial', });
lyr_AEPIreaEspecialPreferIndustrialeLogstica_32.set('fieldAliases', {'fid': 'fid', 'zona_especial': 'zona_especial', });
lyr_AEISreaEspecialdeInteresseSocial_33.set('fieldAliases', {'fid': 'fid', 'zona_especial': 'zona_especial', });
lyr_SistemaVirioSistemavirioprincipal_34.set('fieldAliases', {'fid': 'fid', 'sistema_viario': 'sistema_viario', });
lyr_SistemaVirioRodoviasViasarteriais_35.set('fieldAliases', {'fid': 'fid', 'sistema_viario': 'sistema_viario', });
lyr_SistemaVirioRodovias_36.set('fieldAliases', {'fid': 'fid', 'sistema_viario': 'sistema_viario', });
lyr_SistemaVirioExpansodosistemavirio_37.set('fieldAliases', {'fid': 'fid', 'sistema_viario': 'sistema_viario', });
lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_38.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_39.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_41.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_42.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_VIGILANCIA_EM_SAUDE_43.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAUDE': 'EQUIPAMENTO_DE_SAUDE', 'ENDERECO': 'ENDERECO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'CATEGORIA': 'CATEGORIA', });
lyr_UNIDADE_DE_URGENCIA_E_EMERGENCIA_44.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAUDE': 'EQUIPAMENTO_DE_SAUDE', 'ENDERECO': 'ENDERECO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'CATEGORIA': 'CATEGORIA', });
lyr_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO_45.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAUDE': 'EQUIPAMENTO_DE_SAUDE', 'ENDERECO': 'ENDERECO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'CATEGORIA': 'CATEGORIA', });
lyr_GESTAO_ADMINISTRATIVO_46.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAUDE': 'EQUIPAMENTO_DE_SAUDE', 'ENDERECO': 'ENDERECO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'CATEGORIA': 'CATEGORIA', });
lyr_ATENCAO_PRIMARIA_47.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAUDE': 'EQUIPAMENTO_DE_SAUDE', 'ENDERECO': 'ENDERECO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'CATEGORIA': 'CATEGORIA', });
lyr_TEATRO_48.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_SECRETARIA_49.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_QUADRA_50.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_PRACA_51.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_PISTA_52.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_PISCINA_53.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_PINACOTECA_54.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_PAVILHAO_55.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_PARQUE_56.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_MUSEU_57.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_GINASIO_58.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_ESTADIO_59.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_CONJUNTO_60.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_CEPEL_61.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_CENTRO_62.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_CASA_63.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_CAMPO_64.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_BIBLIOTECA_65.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_ARENA_66.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_UNIVERSIDADE_ABERTA_DO_BRASIL_67.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_SETOR_DE_MERENDA_68.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_SECRETARIA_DE_EDUCACAO_69.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_ESPACO_DE_DIFUSAO_CIENTIFICA_70.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_ENSINO_FUNDAMENTAL_71.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_EJA_72.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_ED_INFANTIL_ENS_FUNDAMENTAL_73.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_EDUCACAO_INFANTIL_74.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_CRECHE_PRE_ESCOLA_75.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_CRECHE_76.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_CENTRO_DE_EDUCACAO_INTEGRADA_77.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_ALMOCHARIFADO_EDUCACAO_78.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDEREÇ', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_ALFABETIZACAO_DE_JOVENS_E_ADULTOS_79.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_RODOVIAS_MUNICIPAIS_80.set('fieldAliases', {'fid': 'fid', 'TIPO_VIA': 'TIPO_VIA', 'JUDISDICAO': 'JUDISDICAO', 'REVESTIMENTO': 'REVESTIMENTO', 'NUM_PISTAS': 'NUM_PISTAS', 'NUM_FAIXAS': 'NUM_FAIXAS', 'EXTENSAO': 'Extensao (km)', 'NOME': 'NOME', 'CATEGORIA': 'CATEGORIA', });
lyr_RODOVIAS_ESTADUAIS_81.set('fieldAliases', {'fid': 'fid', 'TIPO_VIA': 'TIPO_VIA', 'JUDISDICAO': 'JUDISDICAO', 'REVESTIMENTO': 'REVESTIMENTO', 'NUM_PISTAS': 'NUM_PISTAS', 'NUM_FAIXAS': 'NUM_FAIXAS', 'EXTENSAO': 'Extensao (km)', 'NOME': 'NOME', 'CATEGORIA': 'CATEGORIA', });
lyr_ESTRADAS_RURAIS_MUNICIPAIS_82.set('fieldAliases', {'fid': 'fid', 'TIPO_VIA': 'TIPO_VIA', 'JUDISDICAO': 'JUDISDICAO', 'REVESTIMENTO': 'REVESTIMENTO', 'NUM_PISTAS': 'NUM_PISTAS', 'NUM_FAIXAS': 'NUM_FAIXAS', 'EXTENSAO': 'EXTENSAO', 'NOME': 'NOME', 'CATEGORIA': 'CATEGORIA', });
lyr_IMOVEL_PUBLICO_83.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'LOGRADOURO': 'LOGRADOURO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'CLASSIFICACAO': 'CLASSIFICACAO', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'PROCESSO_SEINFRA': 'Processo SEINFRA', 'PROCESSO_SMS': 'Processo SMS', 'PROCESSO_MP': 'Pocesso MP', 'PROCESSO_SMSEG': 'Processo SMSEG', 'COORDENADA_X': 'Coordenada Leste (x)', 'COORDENADA_Y': 'Coordenada Norte (y)', 'OUTROS_PROCESSOS': 'Outos Processos', 'DATA_INCLUSAO': 'Data de Inclusão', 'REGIAO': 'REGIAO', });
lyr_IMOVEL_PRIVADO_URBANO_84.set('fieldAliases', {'fid': 'fid', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'CADASTRO_IMOBILIARIO': 'CADASTRO IMOBILIÁRIO', 'BAIRRO': 'BAIRRO', 'LOGRADOURO': 'LOGRADOURO', 'PROCESSO-SEINFRA': 'PROCESSO-SEINFRA', 'PROCESSO_SMS': 'PROCESSO_SMS', 'PROCESSO_MP': 'PROCESSO_MP', 'PROCESSO_SMSEG': 'PROCESSO_SMSEG', 'OUTROS_PROCESSOS': 'OUTROS_PROCESSOS', 'DATA_INCLUSAO': 'DATA_INCLUSAO', 'CLASSIFICACAO': 'CLASSIFICACAO', });
lyr_IMOVEL_PRIVADO_URBANO_85.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'LOGRADOURO': 'LOGRADOURO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'CLASSIFICACAO': 'CLASSIFICACAO', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'PROCESSO_SEINFRA': 'Processo SEINFRA', 'PROCESSO_SMS': 'Processo SMS', 'PROCESSO_MP': 'Pocesso MP', 'PROCESSO_SMSEG': 'Processo SMSEG', 'COORDENADA_X': 'Coordenada Leste (x)', 'COORDENADA_Y': 'Coordenada Norte (y)', 'OUTROS_PROCESSOS': 'Outos Processos', 'DATA_INCLUSAO': 'Data de Inclusão', 'REGIAO': 'REGIAO', });
lyr_IMOVEL_PRIVADO_RURAL_86.set('fieldAliases', {'fid': 'fid', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'BAIRRO': 'BAIRRO', 'LOGRADOURO': 'LOGRADOURO', 'PROCESSO-SEINFRA': 'PROCESSO-SEINFRA', 'PROCESSO_SMS': 'PROCESSO_SMS', 'PROCESSO_MP': 'PROCESSO_MP', 'PROCESSO_SMSEG': 'PROCESSO_SMSEG', 'OUTROS_PROCESSOS': 'OUTROS_PROCESSOS', 'DATA_INCLUSAO': 'DATA_INCLUSAO', 'CLASSIFICACAO': 'CLASSIFICACAO', });
lyr_IMOVEL_PRIVADO_RURAL_87.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'LOGRADOURO': 'LOGRADOURO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'CLASSIFICACAO': 'CLASSIFICACAO', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'PROCESSO_SEINFRA': 'Processo SEINFRA', 'PROCESSO_SMS': 'Processo SMS', 'PROCESSO_MP': 'Pocesso MP', 'PROCESSO_SMSEG': 'Processo SMSEG', 'COORDENADA_X': 'Coordenada Leste (x)', 'COORDENADA_Y': 'Coordenada Norte (y)', 'OUTROS_PROCESSOS': 'Outos Processos', 'DATA_INCLUSAO': 'Data de Inclusão', 'REGIAO': 'REGIAO', });
lyr_PARQUE_DOS_TRABALHADORES_88.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_DOS_TRABALHADORES_89.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_90.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_91.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_CAXAMBU_92.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_CAXAMBU_93.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_94.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_95.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_96.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_97.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_JARDIM_ZOOBOTANICO_98.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'DESCRICAO', });
lyr_JARDIM_ZOOBOTANICO_99.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'DESCRICAO', });
lyr_COMPLEXO_POLIESPORTIVO_100.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_COMPLEXO_POLIESPORTIVO_101.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_UBS_SANTA_TEREZINHA_102.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_UBS_SANTA_BARBARA_103.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_UBS_PERES_ELIAS_104.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_UBS_PARQUE_HORTO_105.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_UBS_JARDIM_PALMA_106.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_REVITALIZACAO_ESTACAO_FERROVIARIA_107.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_REFORMA_CRAS_OESTE_108.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_REFORMA_CRAS_NORTE_109.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_REFORCO_ESTRUTURAL_CHAMPAGNAT_110.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_RECAPEAMENTO_JARDIM_MARTINS_111.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_PRONTO_SOCORRO_ALVARO_AZZUZ_112.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_POLICLINICA_113.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_NOVO_NGA_114.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_115.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_ESCOLA_JOAO_LIPORONI_116.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_DRENAGEM_CORREGO_CUBATAO_117.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_DRENAGEM_CORREGO_BRAGRES_118.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_DRENAGEM_CANAL_JD_PALMEIRAS_119.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_CRECHE_SAMEL_PARK_120.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_CORPO_BAMBEIROS_121.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_CONTENCAO_VIARIA_122.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_CONSTRUCAO_CEPEL_SAO_JOSE_123.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_CONSTRUCAO_CEPEL_JD_CAMBUI_124.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_CONSTRUCAO_CAPS_INFANTIL_125.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_AREA_LAZER_PARQUE_ESMERALDA_126.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_AREA_LAZER_PARQUE_CONTINENTAL_127.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_AREA_LAZER_JARDIM_PORTINARI_128.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_OBRAS_PUBLICAS_129.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGEM_DE_EXECUCAO': 'PORCENTAGEM_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_REGULARIZADO_130.set('fieldAliases', {'fid': 'fid', 'PROCESSO': 'PROCESSO', 'MODALIDADE': 'MODALIDADE', 'NOME_LOTEAMENTO': 'NOME_LOTEAMENTO', 'OBSERVACAO': 'OBSERVACAO', 'MATRICULA': 'MATRICULA', 'QUANT_LOTES': 'QUANT_LOTES', 'AREA_M2': 'AREA_M2', 'DECRETO_REURB': 'DECRETO_REURB', 'SITUACAO': 'SITUACAO', });
lyr_REGULARIZADO_131.set('fieldAliases', {'fid': 'fid', 'PROCESSO': 'PROCESSO', 'MODALIDADE': 'MODALIDADE', 'NOME_LOTEAMENTO': 'NOME_LOTEAMENTO', 'OBSERVACAO': 'OBSERVACAO', 'MATRICULA': 'MATRICULA', 'QUANT_LOTES': 'QUANT_LOTES', 'AREA_M2': 'AREA_M2', 'DECRETO_REURB': 'DECRETO_REURB', 'SITUACAO': 'SITUACAO', });
lyr_Vivenna_132.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Vivenna_133.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaSoVicente_134.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaSoVicente_135.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaJardimSimes_136.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaJardimSimes_137.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaAlvorada_138.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaAlvorada_139.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaDiEspanha_140.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaDiEspanha_141.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaPucci_142.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaPucci_143.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaPiemonteII_144.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaPiemonteII_145.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaOlimpica_146.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaOlimpica_147.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaDoratta_148.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaDoratta_149.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaBella_150.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaBella_151.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Versalhes_152.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Versalhes_153.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TorontoResidence_154.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TorontoResidence_155.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TerraNova_156.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TerraNova_157.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Sonetto_158.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Sonetto_159.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_160.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_161.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_162.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_163.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_164.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_165.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ServidoRamal138kVFranca4Guanabara_166.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_ServidoRamal138kVFranca4Guanabara_167.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_SantaLina_168.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantaLina_169.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantAnita_170.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantAnita_171.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RuaAlfioBenedini_172.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RuaAlfioBenedini_173.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RuaAlfioBenedini_174.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', });
lyr_ResidencialValeVerde_175.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialValeVerde_176.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialYasminTorres_177.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialYasminTorres_178.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialTellini_179.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialTellini_180.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosII_181.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosII_182.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosI_183.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosI_184.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaIns_185.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaIns_186.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaF_187.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaF_188.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadosOitis_189.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadosOitis_190.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadoSol_191.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadoSol_192.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegreII_193.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegreII_194.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegre_195.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegre_196.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPiamalim_197.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPiamalim_198.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialParquedosPassaros_199.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialParquedosPassaros_200.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuciII_201.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuciII_202.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuci_203.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuci_204.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMoradadoBosque_205.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMoradadoBosque_206.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarthaHelena_207.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarthaHelena_208.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarioTasso_209.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarioTasso_210.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarianaAlarcon_211.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarianaAlarcon_212.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJardimCanada_213.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJardimCanada_214.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJabuticabeiras_215.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJabuticabeiras_216.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGramadosII_217.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGramadosII_218.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGramados_219.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGramados_220.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGaia_221.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGaia_222.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialFrutuoso_223.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialFrutuoso_224.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialFaggioni_225.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialFaggioni_226.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialEssenza_227.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialEssenza_228.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialDomingosJardini_229.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialDomingosJardini_230.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialCintraAlves_231.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialCintraAlves_232.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialBoaVista_233.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialBoaVista_234.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAltodaFazenda_235.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAltodaFazenda_236.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAnaHelena_237.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAnaHelena_238.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ReservaAbaete_239.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ReservaAbaete_240.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RecantoMeneghetti_241.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RecantoMeneghetti_242.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Quadra18VilaExposio_243.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Quadra18VilaExposio_244.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ProlongamentoSamelPark_245.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ProlongamentoSamelPark_246.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueVillaLobos_247.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueVillaLobos_248.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquePalmeiraImperial_249.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquePalmeiraImperial_250.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueJacarand_251.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueJacarand_252.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueFlora_253.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueFlora_254.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosSabias_255.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosSabias_256.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosCoqueiros_257.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosCoqueiros_258.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueAlvorada_259.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueAlvorada_260.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParagonFaseII_261.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParagonFaseII_262.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Paragon_263.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Paragon_264.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_PalmeiraReal_265.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_PalmeiraReal_266.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadoVerdeII_267.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadoVerdeII_268.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadaMata_269.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadaMata_270.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Monti_271.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Monti_272.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MontBlancResidence_273.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MontBlancResidence_274.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasterplanDespaschoal_275.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasterplanDespaschoal_276.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasterplanDespaschoal_277.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', });
lyr_MasteplanBildVitta_278.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasteplanBildVitta_279.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasteplanBildVitta_280.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', });
lyr_Loteamentolamo_281.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Loteamentolamo_282.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimStephani_283.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimStephani_284.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimPherola_285.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimPherola_286.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimNatal_287.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimNatal_288.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaLuiza_289.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaLuiza_290.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaAugusta_291.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaAugusta_292.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimHorizonte_293.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimHorizonte_294.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimFlora_295.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimFlora_296.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_IrineuZanetiII_297.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_IrineuZanetiII_298.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Infratcnica_299.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Infratcnica_300.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_HorizResidence_301.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_HorizResidence_302.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_GlebaNossaSenhoraAuxiliadora_303.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_GlebaNossaSenhoraAuxiliadora_304.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Ferracini_305.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Ferracini_306.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FrancaB6_307.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FrancaB6_308.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaProgresso_309.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaProgresso_310.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita2_311.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita2_312.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita_313.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita_314.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Essence_315.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Essence_316.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Elias_317.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Elias_318.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioSolNascente_319.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioSolNascente_320.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioRuadoSol_321.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioRuadoSol_322.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioResidencialHope_323.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioResidencialHope_324.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DiocesedeFranca_325.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DiocesedeFranca_326.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DaVinci_327.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DaVinci_328.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioIICityPetrpolis_329.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioIICityPetrpolis_330.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_331.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_332.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Colorado_333.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Colorado_334.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CidadeJardim_335.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CidadeJardim_336.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraOlaria_337.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraOlaria_338.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraBelaVista_339.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraBelaVista_340.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_BordadaMata_341.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_BordadaMata_342.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arteris_343.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arteris_344.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ArterisFaixadeDomnioFrancaSP_3342_345.set('fieldAliases', {'fid': 'fid', 'description': 'description', });
lyr_ArterisFaixadeDomnioFrancaSP_3452_346.set('fieldAliases', {'fid': 'fid', 'description': 'description', });
lyr_ArterisFaixadeDomnioFrancaSPA_397334_347.set('fieldAliases', {'fid': 'fid', 'description': 'description', });
lyr_Arizona_348.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arizona_349.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AbuDhabiParadiseResortResidence_350.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AbuDhabiParadiseResortResidence_351.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EtapaAprovado43unid_352.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaDiretriz22unid_353.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaDefinitiva10unid_354.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaPrvia24unid_355.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_IRREGULAR_356.set('fieldAliases', {'fid': 'fid', 'PROCESSO': 'PROCESSO', 'MODALIDADE': 'MODALIDADE', 'NOME_LOTEAMENTO': 'NOME_LOTEAMENTO', 'OBSERVACAO': 'OBSERVACAO', 'MATRICULA': 'MATRICULA', 'QUANT_LOTES': 'QUANT_LOTES', 'AREA_M2': 'AREA_M2', 'DECRETO_REURB': 'DECRETO_REURB', 'SITUACAO': 'SITUACAO', });
lyr_IRREGULAR_357.set('fieldAliases', {'fid': 'fid', 'PROCESSO': 'PROCESSO', 'MODALIDADE': 'MODALIDADE', 'NOME_LOTEAMENTO': 'NOME_LOTEAMENTO', 'OBSERVACAO': 'OBSERVACAO', 'MATRICULA': 'MATRICULA', 'QUANT_LOTES': 'QUANT_LOTES', 'AREA_M2': 'AREA_M2', 'DECRETO_REURB': 'DECRETO_REURB', 'SITUACAO': 'SITUACAO', });
lyr_APP1745unid_358.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosDuplos84unid_359.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_MassasDgua270unid_360.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosSimples1842unid_361.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_CORPO_HIDRICO_CANAL_FECHADO_362.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_CORPO_HIDRICO_CANAL_ABERTO_363.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_Nascentes821unid_364.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_AntigoAterrodaFazMunicipal_365.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_366.set('fieldAliases', {'fid': 'fid', 'poco': 'Poço', 'coordenada_y': 'Coordenada N (m)', 'coordenada_x': 'Coordenada E (m)', 'cota': 'Cota (m)', 'tipo': 'Tipo do poço', 'situacao': 'Situação', 'empresa': 'Empresa', 'ano': 'Ano', });
lyr_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_367.set('fieldAliases', {'fid': 'fid', 'poco': 'Poço', 'coordenada_y': 'Coordenada N (m)', 'coordenada_x': 'Coordenada E (m)', 'cota': 'Cota (m)', 'tipo': 'Tipo do poço', 'situacao': 'Situação', 'empresa': 'Empresa', 'ano': 'Ano', });
lyr_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_368.set('fieldAliases', {'fid': 'fid', 'poco': 'Poço', 'coordenada_y': 'Coordenada N (m)', 'coordenada_x': 'Coordenada E (m)', 'cota': 'Cota (m)', 'tipo': 'Tipo do poço', 'situacao': 'Situação', 'empresa': 'Empresa', 'ano': 'Ano', });
lyr_reaBdaFazMunicipal_369.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_reaBdaFazMunicPoosMonitEngesolve7unid_370.set('fieldAliases', {'fid': 'fid', 'Norte': 'Norte', 'Leste': 'Leste', 'Cota': 'Cota', 'Identifica': 'Identifica', 'Profundida': 'Profundida', 'Identifi_1': 'Poço', 'Profundi_1': 'Profundi_1', 'NA Dinâmi': 'NA Dinâmi', 'NA Estatic': 'NA Estatic', 'NÍVEL DE': 'NÍVEL DE', 'TEMPERATUR': 'TEMPERATUR', 'pH': 'pH', 'CONDUTIVID': 'CONDUTIVID', 'Eh/ORP': 'Eh/ORP', 'OXIGÊNIO': 'OXIGÊNIO', 'TURBIDEZ': 'TURBIDEZ', });
lyr_AntigoAterrodasMaritacas_371.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterroMaritacas1Etapa28unid_372.set('fieldAliases', {'fid': 'fid', 'Poço': 'Poço', 'Norte (m)': 'Norte (m)', 'Este (m)': 'Este (m)', 'Cota': 'Cota', });
lyr_ParqueZumbidosPalmares_373.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterroMaritacas3Etapa5unid_374.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterroMaritacas2Etapa41unid_375.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_PARTE_DA_AREA_G_AVERBADA_376.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_PARTE_DA_AREA_G_A_SER_AVERBADA_377.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_CONJUNTO_HABITACIONAL_378.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AV_ACESSO_COLEGIO_AGRICOLA_379.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_N2_380.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_N1_381.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_N_382.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_K_383.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_J_384.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_I_385.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_H_386.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_G_387.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_F_388.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_E_389.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_D_390.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_C_391.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_B_392.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_A_393.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_PROPOSTO_394.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'BAIRRO': 'BAIRRO', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', 'STATUS': 'STATUS', });
lyr_EM_FUNCIONAMENTO_395.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'BAIRRO': 'BAIRRO', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', 'STATUS': 'STATUS', });
lyr_EM_CONSTRUCAO_396.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'BAIRRO': 'BAIRRO', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', 'STATUS': 'STATUS', });
lyr_DrenagensExistentes_397.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DRENAGEM_VILLAGIO_DI_FIRENZE_398.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_VILLA_SANTA_GIANNA_399.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_VILA_TOTOLI_400.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_VILA_REAL_401.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_VILA_DORATTA_402.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_SAO_PEDRO_II_403.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_SANTA_FE_404.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_TELLINI_405.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_SANTA_INES_408.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_PALERMO_412.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_ITAPUA_413.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_GAIA_414.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_FERRACINI_415.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_FAGGIONI_416.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_ECOSTILO_417.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_DOURADO_418.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_BALDASSARI_419.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_420.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RECREIO_CAMPO_BELO_422.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RECANTO_MENEGHETTI_423.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PROL_VILA_ISABEL_425.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PROL_JARDIM_MARTINS_426.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_UNIVERSITARIO_428.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_SANTA_ADELIA_429.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_MOEMA_430.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_JOAO_LEITE_431.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_DOS_SABIAS_432.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_433.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_DAS_ARVORES_434.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_CASTELO_435.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_BOA_VISTA_436.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_437.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARAGON_438.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_NAIR_RETUSSI_I_439.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_SAO_GABRIEL_440.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_SANTA_LUCIA_441.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_PULICANO_442.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_PORTINARI_443.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_PIRATININGA_444.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_PALMA_445.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_NOEMIA_447.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_NATAL_448.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_MARTINS_449.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_MARIA_LUIZA_450.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_LIBANO_451.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_IPANEMA_452.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_BUENO_453.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_BOTANICO_454.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_BARAO_455.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_AVIACAO_456.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_ARIZONA_II_457.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_ARIZONA_I_458.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_AEROPORTO_II_459.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_GRAMADOS_I_460.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_FRANCA_POLO_CLUBE_461.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_DOMINGOS_JARDINI_462.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_DINFRA_II_463.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_ATLANTA_PARK_464.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_ANA_DOROTHEA_465.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_REGIAO_SUL_466.set('fieldAliases', {'fid': 'fid', 'AREA_M2': 'AREA_M2', 'REGIAO': 'REGIAO', });
lyr_REGIAO_OESTE_467.set('fieldAliases', {'fid': 'fid', 'AREA_M2': 'AREA_M2', 'REGIAO': 'REGIAO', });
lyr_REGIAO_NORTE_468.set('fieldAliases', {'fid': 'fid', 'AREA_M2': 'AREA_M2', 'REGIAO': 'REGIAO', });
lyr_REGIAO_LESTE_469.set('fieldAliases', {'fid': 'fid', 'AREA_M2': 'AREA_M2', 'REGIAO': 'REGIAO', });
lyr_BAIRROS_470.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'AREA_M2': 'Área (m²)', 'REGIAO': 'Região', 'REGIAO_ARRASTAO_LIMPEZA': 'REGIAO_ARRASTAO_LIMPEZA', });
lyr_Voorocas27unid_471.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'ID_PONTO_I': 'ID_PONTO_I', 'IBGE': 'IBGE', 'MUNIC__PIO': 'MUNIC__PIO', 'BACIA': 'BACIA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'SITUA____O': 'Situação', 'REFER__NCI': 'Referência', 'PRIORIDADE': 'Prioridade', 'OBSERVA_____': 'Observação', });
lyr_LocaisDifcilAcessoreasRurais12unid_472.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'PER__ODO_TURNO_': 'Período', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'Horário', 'FREQU__NCIA': 'Frequência', 'PROGRAMA____O_SEMANAL': 'Programação Semanal', 'EQUIPAMENTOS': 'Equipamentos', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', });
lyr_Contineres286unid_473.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Nome', 'bairro': 'bairro', });
lyr_rvoreImuneaoCorte9unid_474.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_AcademiasaoArLivre84unid_475.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Local', 'bairro': 'bairro', });
lyr_SERVICO_DE_SAUDE_476.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_RECICLAVEIS_477.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_PNEUS_478.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_PILHAS_E_BATERIAS_479.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_PERIGOSOS_480.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_OLEO_LUBRIFICANTE_481.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_OLEO_DE_COZINHA_482.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_MASSA_VERDE_483.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_MADEIRAS_484.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_LATAS_DE_TINTA_485.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_LAMPADAS_486.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_INSERVIVEIS_487.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_GESSO_488.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_EMBALAGENS_AGROTOXICO_489.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_ELETRONICOS_490.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_COURO_491.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_CONSTRUCAO_CIVIL_492.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_CHAPAS_DE_RAIO_X_493.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_PROTECAO_AERODROMO_494.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', });
lyr_HELIPONTO_HOSPITAL_REGIONAL_495.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', });
lyr_HELIPONTO_EDIFICIO_PRIME_496.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', });
lyr_HELIPONTO_EDIFICIO_PRIME_497.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', });
lyr_CLASSE_VB_498.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_VA_499.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IVC_500.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IVB_501.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IVA_502.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IIIC_503.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IIIB_504.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IIIA_505.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_II_506.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_I_507.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_LoteamentoFechado146unid70632440m_508.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LoteEdificao20unid_509.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'regiao': 'regiao', 'processo': 'processo', });
lyr_LoteEdificao20unid508062m_510.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LoteEMDEF10unid_511.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', });
lyr_LoteEMDEF10unid218783m_512.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_Lote252unid_513.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_Lote252unid7530210m_514.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LeiloLEI97542025Proc7954202537196unid_515.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEI97542025Proc7954202537196unid3240462m_516.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Status', 'processo': 'Processo', });
lyr_LeiloLEI97542025Proc2652520256922unid_517.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEI97542025Proc2652520256922unid352000m_518.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Status', 'processo': 'Processo', });
lyr_LeiloLEI97542025Proc2198620254518unid_519.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'Status', 'processo': 'Processo', });
lyr_LeiloLEI97542025Proc2198620254518unid2092083m_520.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Status', 'processo': 'Processo', });
lyr_LeiloLEI97542025Homologado4unid_521.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEI97542025Homologado4unid334770m_522.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'Processo', });
lyr_reaVerde2117unid881307234m_523.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'Processo', });
lyr_reaPatrimonial69unid121924073m_524.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_reaInstitucional371unid208395759m_525.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_readeUsoEspecial280unid271349968m_526.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_APP169unid239527816m_527.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_TRPRL_CETESB_528.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TRPRL_CETESB_529.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TCRA_MUNICIPAL_530.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TCRA_MUNICIPAL_531.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TCRA_CETESB_PARCELAMENTO_532.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TCRA_CETESB_PARCELAMENTO_533.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TCRA_CETESB_534.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TCRA_CETESB_535.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TAC_MP_536.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TAC_MP_537.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_PLANTIO_VOLUNTARIO_538.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_PLANTIO_VOLUNTARIO_539.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_ANUENCIA_540.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_ANUENCIA_541.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_AIIPA_CETESB_542.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_AIIPA_CETESB_543.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_ACAO_CIVIL_PUBLICA_544.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_ACAO_CIVIL_PUBLICA_545.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_AdoteUmaPraa392unid38295094m_546.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'responsavel': 'Responsável', 'm2': 'Área (m²)', });
lyr_SPlacaEgnaldo4unid86447m_547.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_SPlacaDilu15unid751060m_548.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_CPlacaEgnaldo221unid22321870m_549.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_CPlacaDilu152unid15990431m_550.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_LimiteMunicipaldeFranca_3.set('fieldImages', {'fid': '', 'CD_MUN': '', 'NM_MUN': '', 'CD_RGI': '', 'NM_RGI': '', 'CD_RGINT': '', 'NM_RGINT': '', 'CD_UF': '', 'NM_UF': '', 'SIGLA_UF': '', 'CD_REGIA': '', 'NM_REGIA': '', 'SIGLA_RG': '', 'CD_CONCU': '', 'NM_CONCU': '', 'AREA_KM2': '', });
lyr_reaUrbanadeFranca_4.set('fieldImages', {'fid': '', 'Código do Município': '', 'Nome do Município': '', 'UF': '', 'Código da UF': '', 'Classe de Uso': '', 'Área (ha)': '', 'Área (km²)': '', });
lyr_BACIA_RIO_CANOAS_LC_4322024_5.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'AREA_KM2': '', });
lyr_BACIA_RIO_CANOAS_LC_1002006_6.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'AREA_KM2': '', });
lyr_BACIA_RIBEIRAO_DA_ONCA_7.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'AREA_KM2': '', });
lyr_ARO_REMANESCENTES_FLORESTAIS_8.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_ARO_FAIXA_DE_CUESTAS_9.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_ARO_AREA_DE_AMORTECIMENTO_10.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_ARO_APP_11.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_ARA_INCONGRUENCIAS_EM_APP_12.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_ARA_ETE_LAGOAS_13.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_ARA_ATERROS_14.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_AOD_BAIXA_DENSIDADE_NIVEL_3_15.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_AOD_BAIXA_DENSIDADE_NIVEL_2_16.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_AOD_BAIXA_DENSIDADE_NIVEL_1_17.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_AOD_AUS_FASE_2_18.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_AOD_AUS_FASE_1_19.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_AOD_AREA_URBANA_CONSOLIDADA_20.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_SubMacrozonadeOcupaoRestrita_21.set('fieldImages', {'fid': '', 'macrozona_urbana': '', });
lyr_SubMacrozonadeOcupaoPreferencial_22.set('fieldImages', {'fid': 'TextEdit', 'macrozona_urbana': 'TextEdit', });
lyr_SubMacrozonadeExpansoUrbana_23.set('fieldImages', {'fid': '', 'macrozona_urbana': '', });
lyr_MacrozonadoRioCanoas_24.set('fieldImages', {'fid': '', 'macrozona_urbana': '', });
lyr_ExpUrbanaLeis4240199244201994eLC1002006_25.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_ExpUrbanaLCN3242019_26.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_ExpUrbanaLCN2352013_27.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_ExpUrbanaLCN1402009_28.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_ExpUrbanaLCN0502003_29.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_reaEspecialLazerInteresseTursticoeCultural_30.set('fieldImages', {'fid': '', 'zona_especial': '', });
lyr_AERUreaEspecialResidenciasUnifamiliares_31.set('fieldImages', {'fid': '', 'zona_especial': '', });
lyr_AEPIreaEspecialPreferIndustrialeLogstica_32.set('fieldImages', {'fid': '', 'zona_especial': '', });
lyr_AEISreaEspecialdeInteresseSocial_33.set('fieldImages', {'fid': '', 'zona_especial': '', });
lyr_SistemaVirioSistemavirioprincipal_34.set('fieldImages', {'fid': '', 'sistema_viario': '', });
lyr_SistemaVirioRodoviasViasarteriais_35.set('fieldImages', {'fid': '', 'sistema_viario': '', });
lyr_SistemaVirioRodovias_36.set('fieldImages', {'fid': '', 'sistema_viario': '', });
lyr_SistemaVirioExpansodosistemavirio_37.set('fieldImages', {'fid': '', 'sistema_viario': '', });
lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_38.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_39.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_41.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_42.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_VIGILANCIA_EM_SAUDE_43.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAUDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_UNIDADE_DE_URGENCIA_E_EMERGENCIA_44.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAUDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO_45.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAUDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_GESTAO_ADMINISTRATIVO_46.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAUDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_ATENCAO_PRIMARIA_47.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAUDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_TEATRO_48.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_SECRETARIA_49.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_QUADRA_50.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_PRACA_51.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_PISTA_52.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_PISCINA_53.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_PINACOTECA_54.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_PAVILHAO_55.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_PARQUE_56.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_MUSEU_57.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_GINASIO_58.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_ESTADIO_59.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_CONJUNTO_60.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_CEPEL_61.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_CENTRO_62.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_CASA_63.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_CAMPO_64.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_BIBLIOTECA_65.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_ARENA_66.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_UNIVERSIDADE_ABERTA_DO_BRASIL_67.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_SETOR_DE_MERENDA_68.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_SECRETARIA_DE_EDUCACAO_69.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_ESPACO_DE_DIFUSAO_CIENTIFICA_70.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_ENSINO_FUNDAMENTAL_71.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_EJA_72.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_ED_INFANTIL_ENS_FUNDAMENTAL_73.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_EDUCACAO_INFANTIL_74.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_CRECHE_PRE_ESCOLA_75.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_CRECHE_76.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_CENTRO_DE_EDUCACAO_INTEGRADA_77.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_ALMOCHARIFADO_EDUCACAO_78.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_ALFABETIZACAO_DE_JOVENS_E_ADULTOS_79.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_RODOVIAS_MUNICIPAIS_80.set('fieldImages', {'fid': 'TextEdit', 'TIPO_VIA': '', 'JUDISDICAO': '', 'REVESTIMENTO': '', 'NUM_PISTAS': '', 'NUM_FAIXAS': '', 'EXTENSAO': '', 'NOME': '', 'CATEGORIA': '', });
lyr_RODOVIAS_ESTADUAIS_81.set('fieldImages', {'fid': 'TextEdit', 'TIPO_VIA': '', 'JUDISDICAO': '', 'REVESTIMENTO': '', 'NUM_PISTAS': '', 'NUM_FAIXAS': '', 'EXTENSAO': '', 'NOME': '', 'CATEGORIA': '', });
lyr_ESTRADAS_RURAIS_MUNICIPAIS_82.set('fieldImages', {'fid': 'TextEdit', 'TIPO_VIA': '', 'JUDISDICAO': '', 'REVESTIMENTO': '', 'NUM_PISTAS': '', 'NUM_FAIXAS': '', 'EXTENSAO': '', 'NOME': '', 'CATEGORIA': '', });
lyr_IMOVEL_PUBLICO_83.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'LOGRADOURO': '', 'CADASTRO_IMOBILIARIO': '', 'CLASSIFICACAO': '', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'PROCESSO_SEINFRA': '', 'PROCESSO_SMS': '', 'PROCESSO_MP': '', 'PROCESSO_SMSEG': '', 'COORDENADA_X': '', 'COORDENADA_Y': '', 'OUTROS_PROCESSOS': '', 'DATA_INCLUSAO': '', 'REGIAO': '', });
lyr_IMOVEL_PRIVADO_URBANO_84.set('fieldImages', {'fid': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'BAIRRO': 'TextEdit', 'LOGRADOURO': 'TextEdit', 'PROCESSO-SEINFRA': 'TextEdit', 'PROCESSO_SMS': 'TextEdit', 'PROCESSO_MP': 'TextEdit', 'PROCESSO_SMSEG': 'TextEdit', 'OUTROS_PROCESSOS': 'TextEdit', 'DATA_INCLUSAO': 'DateTime', 'CLASSIFICACAO': '', });
lyr_IMOVEL_PRIVADO_URBANO_85.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'LOGRADOURO': '', 'CADASTRO_IMOBILIARIO': '', 'CLASSIFICACAO': '', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'PROCESSO_SEINFRA': '', 'PROCESSO_SMS': '', 'PROCESSO_MP': '', 'PROCESSO_SMSEG': '', 'COORDENADA_X': '', 'COORDENADA_Y': '', 'OUTROS_PROCESSOS': '', 'DATA_INCLUSAO': '', 'REGIAO': '', });
lyr_IMOVEL_PRIVADO_RURAL_86.set('fieldImages', {'fid': 'TextEdit', 'QUADRA': '', 'LOTE': '', 'CADASTRO_IMOBILIARIO': '', 'BAIRRO': '', 'LOGRADOURO': '', 'PROCESSO-SEINFRA': '', 'PROCESSO_SMS': '', 'PROCESSO_MP': '', 'PROCESSO_SMSEG': '', 'OUTROS_PROCESSOS': '', 'DATA_INCLUSAO': '', 'CLASSIFICACAO': '', });
lyr_IMOVEL_PRIVADO_RURAL_87.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'LOGRADOURO': '', 'CADASTRO_IMOBILIARIO': '', 'CLASSIFICACAO': '', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'PROCESSO_SEINFRA': '', 'PROCESSO_SMS': '', 'PROCESSO_MP': '', 'PROCESSO_SMSEG': '', 'COORDENADA_X': '', 'COORDENADA_Y': '', 'OUTROS_PROCESSOS': '', 'DATA_INCLUSAO': '', 'REGIAO': '', });
lyr_PARQUE_DOS_TRABALHADORES_88.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_DOS_TRABALHADORES_89.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_90.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_91.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_CAXAMBU_92.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_CAXAMBU_93.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_94.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_95.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_96.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_97.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_JARDIM_ZOOBOTANICO_98.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_JARDIM_ZOOBOTANICO_99.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_COMPLEXO_POLIESPORTIVO_100.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_COMPLEXO_POLIESPORTIVO_101.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_UBS_SANTA_TEREZINHA_102.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_UBS_SANTA_BARBARA_103.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_UBS_PERES_ELIAS_104.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_UBS_PARQUE_HORTO_105.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_UBS_JARDIM_PALMA_106.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_REVITALIZACAO_ESTACAO_FERROVIARIA_107.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_REFORMA_CRAS_OESTE_108.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_REFORMA_CRAS_NORTE_109.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_REFORCO_ESTRUTURAL_CHAMPAGNAT_110.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_RECAPEAMENTO_JARDIM_MARTINS_111.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_PRONTO_SOCORRO_ALVARO_AZZUZ_112.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_POLICLINICA_113.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_NOVO_NGA_114.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_115.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_ESCOLA_JOAO_LIPORONI_116.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_DRENAGEM_CORREGO_CUBATAO_117.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_DRENAGEM_CORREGO_BRAGRES_118.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_DRENAGEM_CANAL_JD_PALMEIRAS_119.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_CRECHE_SAMEL_PARK_120.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_CORPO_BAMBEIROS_121.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_CONTENCAO_VIARIA_122.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_CONSTRUCAO_CEPEL_SAO_JOSE_123.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_CONSTRUCAO_CEPEL_JD_CAMBUI_124.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_CONSTRUCAO_CAPS_INFANTIL_125.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_AREA_LAZER_PARQUE_ESMERALDA_126.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_AREA_LAZER_PARQUE_CONTINENTAL_127.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_AREA_LAZER_JARDIM_PORTINARI_128.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_OBRAS_PUBLICAS_129.set('fieldImages', {'fid': 'TextEdit', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGEM_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_REGULARIZADO_130.set('fieldImages', {'fid': 'TextEdit', 'PROCESSO': 'TextEdit', 'MODALIDADE': 'TextEdit', 'NOME_LOTEAMENTO': 'TextEdit', 'OBSERVACAO': 'TextEdit', 'MATRICULA': 'TextEdit', 'QUANT_LOTES': 'Range', 'AREA_M2': 'TextEdit', 'DECRETO_REURB': 'TextEdit', 'SITUACAO': 'TextEdit', });
lyr_REGULARIZADO_131.set('fieldImages', {'fid': 'TextEdit', 'PROCESSO': 'TextEdit', 'MODALIDADE': 'TextEdit', 'NOME_LOTEAMENTO': 'TextEdit', 'OBSERVACAO': 'TextEdit', 'MATRICULA': 'TextEdit', 'QUANT_LOTES': 'Range', 'AREA_M2': 'TextEdit', 'DECRETO_REURB': 'TextEdit', 'SITUACAO': 'TextEdit', });
lyr_Vivenna_132.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Vivenna_133.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaSoVicente_134.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaSoVicente_135.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaJardimSimes_136.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaJardimSimes_137.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaAlvorada_138.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaAlvorada_139.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaDiEspanha_140.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaDiEspanha_141.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaPucci_142.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaPucci_143.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaPiemonteII_144.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaPiemonteII_145.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaOlimpica_146.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaOlimpica_147.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaDoratta_148.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaDoratta_149.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaBella_150.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaBella_151.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Versalhes_152.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Versalhes_153.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TorontoResidence_154.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TorontoResidence_155.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TerraNova_156.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TerraNova_157.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Sonetto_158.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Sonetto_159.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_160.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_161.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_162.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_163.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_164.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_165.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ServidoRamal138kVFranca4Guanabara_166.set('fieldImages', {'fid': '', 'id': '', });
lyr_ServidoRamal138kVFranca4Guanabara_167.set('fieldImages', {'fid': '', 'id': '', });
lyr_SantaLina_168.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantaLina_169.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantAnita_170.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantAnita_171.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_RuaAlfioBenedini_172.set('fieldImages', {'fid': '', 'layer': '', });
lyr_RuaAlfioBenedini_173.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_RuaAlfioBenedini_174.set('fieldImages', {'fid': 'TextEdit', 'nome': '', });
lyr_ResidencialValeVerde_175.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialValeVerde_176.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialYasminTorres_177.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialYasminTorres_178.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialTellini_179.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialTellini_180.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosII_181.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosII_182.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosI_183.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosI_184.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaIns_185.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaIns_186.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaF_187.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaF_188.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadosOitis_189.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadosOitis_190.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadoSol_191.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadoSol_192.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegreII_193.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegreII_194.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegre_195.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegre_196.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPiamalim_197.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPiamalim_198.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialParquedosPassaros_199.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialParquedosPassaros_200.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuciII_201.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuciII_202.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuci_203.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuci_204.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMoradadoBosque_205.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMoradadoBosque_206.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarthaHelena_207.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarthaHelena_208.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarioTasso_209.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarioTasso_210.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarianaAlarcon_211.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarianaAlarcon_212.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJardimCanada_213.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJardimCanada_214.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJabuticabeiras_215.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJabuticabeiras_216.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGramadosII_217.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGramadosII_218.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGramados_219.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGramados_220.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGaia_221.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGaia_222.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialFrutuoso_223.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialFrutuoso_224.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialFaggioni_225.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialFaggioni_226.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialEssenza_227.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialEssenza_228.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialDomingosJardini_229.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialDomingosJardini_230.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialCintraAlves_231.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialCintraAlves_232.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialBoaVista_233.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialBoaVista_234.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAltodaFazenda_235.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAltodaFazenda_236.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAnaHelena_237.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAnaHelena_238.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ReservaAbaete_239.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ReservaAbaete_240.set('fieldImages', {'fid': '', 'layer': '', });
lyr_RecantoMeneghetti_241.set('fieldImages', {'fid': '', 'layer': '', });
lyr_RecantoMeneghetti_242.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Quadra18VilaExposio_243.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Quadra18VilaExposio_244.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ProlongamentoSamelPark_245.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ProlongamentoSamelPark_246.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueVillaLobos_247.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueVillaLobos_248.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquePalmeiraImperial_249.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquePalmeiraImperial_250.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueJacarand_251.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueJacarand_252.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueFlora_253.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueFlora_254.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosSabias_255.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosSabias_256.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosCoqueiros_257.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosCoqueiros_258.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueAlvorada_259.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueAlvorada_260.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParagonFaseII_261.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParagonFaseII_262.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Paragon_263.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Paragon_264.set('fieldImages', {'fid': '', 'layer': '', });
lyr_PalmeiraReal_265.set('fieldImages', {'fid': '', 'layer': '', });
lyr_PalmeiraReal_266.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadoVerdeII_267.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadoVerdeII_268.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadaMata_269.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadaMata_270.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Monti_271.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Monti_272.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MontBlancResidence_273.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MontBlancResidence_274.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MasterplanDespaschoal_275.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_MasterplanDespaschoal_276.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MasterplanDespaschoal_277.set('fieldImages', {'fid': '', 'Nome': '', });
lyr_MasteplanBildVitta_278.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_MasteplanBildVitta_279.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MasteplanBildVitta_280.set('fieldImages', {'fid': '', 'Nome': '', });
lyr_Loteamentolamo_281.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Loteamentolamo_282.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimStephani_283.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimStephani_284.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimPherola_285.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimPherola_286.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimNatal_287.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimNatal_288.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaLuiza_289.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaLuiza_290.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaAugusta_291.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaAugusta_292.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimHorizonte_293.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimHorizonte_294.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimFlora_295.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimFlora_296.set('fieldImages', {'fid': '', 'layer': '', });
lyr_IrineuZanetiII_297.set('fieldImages', {'fid': '', 'layer': '', });
lyr_IrineuZanetiII_298.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Infratcnica_299.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Infratcnica_300.set('fieldImages', {'fid': '', 'layer': '', });
lyr_HorizResidence_301.set('fieldImages', {'fid': '', 'layer': '', });
lyr_HorizResidence_302.set('fieldImages', {'fid': '', 'layer': '', });
lyr_GlebaNossaSenhoraAuxiliadora_303.set('fieldImages', {'fid': '', 'layer': '', });
lyr_GlebaNossaSenhoraAuxiliadora_304.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Ferracini_305.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Ferracini_306.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FrancaB6_307.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FrancaB6_308.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaProgresso_309.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaProgresso_310.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita2_311.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita2_312.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita_313.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita_314.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Essence_315.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Essence_316.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Elias_317.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Elias_318.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioSolNascente_319.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioSolNascente_320.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioRuadoSol_321.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioRuadoSol_322.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioResidencialHope_323.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioResidencialHope_324.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DiocesedeFranca_325.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DiocesedeFranca_326.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DaVinci_327.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DaVinci_328.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioIICityPetrpolis_329.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioIICityPetrpolis_330.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_331.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_332.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Colorado_333.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Colorado_334.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CidadeJardim_335.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CidadeJardim_336.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraOlaria_337.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraOlaria_338.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraBelaVista_339.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraBelaVista_340.set('fieldImages', {'fid': '', 'layer': '', });
lyr_BordadaMata_341.set('fieldImages', {'fid': '', 'layer': '', });
lyr_BordadaMata_342.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Arteris_343.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_Arteris_344.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ArterisFaixadeDomnioFrancaSP_3342_345.set('fieldImages', {'fid': '', 'description': '', });
lyr_ArterisFaixadeDomnioFrancaSP_3452_346.set('fieldImages', {'fid': '', 'description': '', });
lyr_ArterisFaixadeDomnioFrancaSPA_397334_347.set('fieldImages', {'fid': '', 'description': '', });
lyr_Arizona_348.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Arizona_349.set('fieldImages', {'fid': '', 'layer': '', });
lyr_AbuDhabiParadiseResortResidence_350.set('fieldImages', {'fid': '', 'layer': '', });
lyr_AbuDhabiParadiseResortResidence_351.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EtapaAprovado43unid_352.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaDiretriz22unid_353.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaDefinitiva10unid_354.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaPrvia24unid_355.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_IRREGULAR_356.set('fieldImages', {'fid': 'TextEdit', 'PROCESSO': 'TextEdit', 'MODALIDADE': 'TextEdit', 'NOME_LOTEAMENTO': 'TextEdit', 'OBSERVACAO': 'TextEdit', 'MATRICULA': 'TextEdit', 'QUANT_LOTES': 'Range', 'AREA_M2': 'TextEdit', 'DECRETO_REURB': 'TextEdit', 'SITUACAO': 'TextEdit', });
lyr_IRREGULAR_357.set('fieldImages', {'fid': 'TextEdit', 'PROCESSO': 'TextEdit', 'MODALIDADE': 'TextEdit', 'NOME_LOTEAMENTO': 'TextEdit', 'OBSERVACAO': 'TextEdit', 'MATRICULA': 'TextEdit', 'QUANT_LOTES': 'Range', 'AREA_M2': 'TextEdit', 'DECRETO_REURB': 'TextEdit', 'SITUACAO': 'TextEdit', });
lyr_APP1745unid_358.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosDuplos84unid_359.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MassasDgua270unid_360.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosSimples1842unid_361.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_CORPO_HIDRICO_CANAL_FECHADO_362.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_CORPO_HIDRICO_CANAL_ABERTO_363.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_Nascentes821unid_364.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_AntigoAterrodaFazMunicipal_365.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_366.set('fieldImages', {'fid': 'TextEdit', 'poco': 'TextEdit', 'coordenada_y': 'TextEdit', 'coordenada_x': 'TextEdit', 'cota': 'TextEdit', 'tipo': 'TextEdit', 'situacao': 'TextEdit', 'empresa': 'TextEdit', 'ano': 'TextEdit', });
lyr_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_367.set('fieldImages', {'fid': 'TextEdit', 'poco': 'TextEdit', 'coordenada_y': 'TextEdit', 'coordenada_x': 'TextEdit', 'cota': 'TextEdit', 'tipo': 'TextEdit', 'situacao': 'TextEdit', 'empresa': 'TextEdit', 'ano': 'TextEdit', });
lyr_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_368.set('fieldImages', {'fid': 'TextEdit', 'poco': 'TextEdit', 'coordenada_y': 'TextEdit', 'coordenada_x': 'TextEdit', 'cota': 'TextEdit', 'tipo': 'TextEdit', 'situacao': 'TextEdit', 'empresa': 'TextEdit', 'ano': 'TextEdit', });
lyr_reaBdaFazMunicipal_369.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_reaBdaFazMunicPoosMonitEngesolve7unid_370.set('fieldImages', {'fid': 'TextEdit', 'Norte': 'TextEdit', 'Leste': 'TextEdit', 'Cota': 'TextEdit', 'Identifica': 'TextEdit', 'Profundida': 'TextEdit', 'Identifi_1': 'TextEdit', 'Profundi_1': 'TextEdit', 'NA Dinâmi': 'TextEdit', 'NA Estatic': 'TextEdit', 'NÍVEL DE': 'TextEdit', 'TEMPERATUR': 'TextEdit', 'pH': 'TextEdit', 'CONDUTIVID': 'TextEdit', 'Eh/ORP': 'TextEdit', 'OXIGÊNIO': 'TextEdit', 'TURBIDEZ': 'TextEdit', });
lyr_AntigoAterrodasMaritacas_371.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterroMaritacas1Etapa28unid_372.set('fieldImages', {'fid': 'TextEdit', 'Poço': 'TextEdit', 'Norte (m)': 'TextEdit', 'Este (m)': 'TextEdit', 'Cota': 'TextEdit', });
lyr_ParqueZumbidosPalmares_373.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterroMaritacas3Etapa5unid_374.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterroMaritacas2Etapa41unid_375.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PARTE_DA_AREA_G_AVERBADA_376.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_PARTE_DA_AREA_G_A_SER_AVERBADA_377.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_CONJUNTO_HABITACIONAL_378.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AV_ACESSO_COLEGIO_AGRICOLA_379.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_N2_380.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_N1_381.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_N_382.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_K_383.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_J_384.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_I_385.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_H_386.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_G_387.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_F_388.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_E_389.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_D_390.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_C_391.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_B_392.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_A_393.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_PROPOSTO_394.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'BAIRRO': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', 'STATUS': '', });
lyr_EM_FUNCIONAMENTO_395.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'BAIRRO': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', 'STATUS': '', });
lyr_EM_CONSTRUCAO_396.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'BAIRRO': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', 'STATUS': '', });
lyr_DrenagensExistentes_397.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DRENAGEM_VILLAGIO_DI_FIRENZE_398.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_VILLA_SANTA_GIANNA_399.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_VILA_TOTOLI_400.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_VILA_REAL_401.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_VILA_DORATTA_402.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_SAO_PEDRO_II_403.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_SANTA_FE_404.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_TELLINI_405.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_SANTA_INES_408.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_PALERMO_412.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_ITAPUA_413.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_GAIA_414.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_FERRACINI_415.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_FAGGIONI_416.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_ECOSTILO_417.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_DOURADO_418.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_BALDASSARI_419.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_420.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RECREIO_CAMPO_BELO_422.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RECANTO_MENEGHETTI_423.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PROL_VILA_ISABEL_425.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PROL_JARDIM_MARTINS_426.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_UNIVERSITARIO_428.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_SANTA_ADELIA_429.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_MOEMA_430.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_JOAO_LEITE_431.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_DOS_SABIAS_432.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_433.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_DAS_ARVORES_434.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_CASTELO_435.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_BOA_VISTA_436.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_437.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARAGON_438.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_NAIR_RETUSSI_I_439.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_SAO_GABRIEL_440.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_SANTA_LUCIA_441.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_PULICANO_442.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_PORTINARI_443.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_PIRATININGA_444.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_PALMA_445.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_NOEMIA_447.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_NATAL_448.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_MARTINS_449.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_MARIA_LUIZA_450.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_LIBANO_451.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_IPANEMA_452.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_BUENO_453.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_BOTANICO_454.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_BARAO_455.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_AVIACAO_456.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_ARIZONA_II_457.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_ARIZONA_I_458.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_AEROPORTO_II_459.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_GRAMADOS_I_460.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_FRANCA_POLO_CLUBE_461.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_DOMINGOS_JARDINI_462.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_DINFRA_II_463.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_ATLANTA_PARK_464.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_ANA_DOROTHEA_465.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_REGIAO_SUL_466.set('fieldImages', {'fid': '', 'AREA_M2': '', 'REGIAO': '', });
lyr_REGIAO_OESTE_467.set('fieldImages', {'fid': '', 'AREA_M2': '', 'REGIAO': '', });
lyr_REGIAO_NORTE_468.set('fieldImages', {'fid': '', 'AREA_M2': '', 'REGIAO': '', });
lyr_REGIAO_LESTE_469.set('fieldImages', {'fid': '', 'AREA_M2': '', 'REGIAO': '', });
lyr_BAIRROS_470.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', 'AREA_M2': 'TextEdit', 'REGIAO': 'TextEdit', 'REGIAO_ARRASTAO_LIMPEZA': 'TextEdit', });
lyr_Voorocas27unid_471.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'ID_PONTO_I': 'TextEdit', 'IBGE': 'TextEdit', 'MUNIC__PIO': 'TextEdit', 'BACIA': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'SITUA____O': 'TextEdit', 'REFER__NCI': 'TextEdit', 'PRIORIDADE': 'TextEdit', 'OBSERVA_____': 'TextEdit', });
lyr_LocaisDifcilAcessoreasRurais12unid_472.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'PER__ODO_TURNO_': 'TextEdit', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'TextEdit', 'FREQU__NCIA': 'TextEdit', 'PROGRAMA____O_SEMANAL': 'TextEdit', 'EQUIPAMENTOS': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', });
lyr_Contineres286unid_473.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'bairro': '', });
lyr_rvoreImuneaoCorte9unid_474.set('fieldImages', {'fid': 'TextEdit', 'nome_popular': 'TextEdit', 'nome_cientifico': 'TextEdit', 'legislacao': 'TextEdit', });
lyr_AcademiasaoArLivre84unid_475.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'bairro': '', });
lyr_SERVICO_DE_SAUDE_476.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_RECICLAVEIS_477.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_PNEUS_478.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_PILHAS_E_BATERIAS_479.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_PERIGOSOS_480.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_OLEO_LUBRIFICANTE_481.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_OLEO_DE_COZINHA_482.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_MASSA_VERDE_483.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_MADEIRAS_484.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_LATAS_DE_TINTA_485.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_LAMPADAS_486.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_INSERVIVEIS_487.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_GESSO_488.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_EMBALAGENS_AGROTOXICO_489.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_ELETRONICOS_490.set('fieldImages', {'fid': '', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_COURO_491.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_CONSTRUCAO_CIVIL_492.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_CHAPAS_DE_RAIO_X_493.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_PROTECAO_AERODROMO_494.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', });
lyr_HELIPONTO_HOSPITAL_REGIONAL_495.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', });
lyr_HELIPONTO_EDIFICIO_PRIME_496.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', });
lyr_HELIPONTO_EDIFICIO_PRIME_497.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', });
lyr_CLASSE_VB_498.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_VA_499.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IVC_500.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IVB_501.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IVA_502.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IIIC_503.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IIIB_504.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IIIA_505.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_II_506.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_I_507.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_LoteamentoFechado146unid70632440m_508.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LoteEdificao20unid_509.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': '', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_LoteEdificao20unid508062m_510.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LoteEMDEF10unid_511.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', });
lyr_LoteEMDEF10unid218783m_512.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_Lote252unid_513.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', });
lyr_Lote252unid7530210m_514.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Proc7954202537196unid_515.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Proc7954202537196unid3240462m_516.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Proc2652520256922unid_517.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Proc2652520256922unid352000m_518.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Proc2198620254518unid_519.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Proc2198620254518unid2092083m_520.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Homologado4unid_521.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Homologado4unid334770m_522.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_reaVerde2117unid881307234m_523.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_reaPatrimonial69unid121924073m_524.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_reaInstitucional371unid208395759m_525.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_readeUsoEspecial280unid271349968m_526.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_APP169unid239527816m_527.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_TRPRL_CETESB_528.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TRPRL_CETESB_529.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TCRA_MUNICIPAL_530.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TCRA_MUNICIPAL_531.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TCRA_CETESB_PARCELAMENTO_532.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TCRA_CETESB_PARCELAMENTO_533.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TCRA_CETESB_534.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TCRA_CETESB_535.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TAC_MP_536.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TAC_MP_537.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_PLANTIO_VOLUNTARIO_538.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_PLANTIO_VOLUNTARIO_539.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_ANUENCIA_540.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_ANUENCIA_541.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_AIIPA_CETESB_542.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_AIIPA_CETESB_543.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_ACAO_CIVIL_PUBLICA_544.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_ACAO_CIVIL_PUBLICA_545.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_AdoteUmaPraa392unid38295094m_546.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'responsavel': 'TextEdit', 'm2': 'TextEdit', });
lyr_SPlacaEgnaldo4unid86447m_547.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
lyr_SPlacaDilu15unid751060m_548.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': '', 'bairro': '', });
lyr_CPlacaEgnaldo221unid22321870m_549.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
lyr_CPlacaDilu152unid15990431m_550.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
lyr_LimiteMunicipaldeFranca_3.set('fieldLabels', {'fid': 'hidden field', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_reaUrbanadeFranca_4.set('fieldLabels', {'fid': 'hidden field', 'Código do Município': 'inline label - visible with data', 'Nome do Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Código da UF': 'hidden field', 'Classe de Uso': 'hidden field', 'Área (ha)': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_BACIA_RIO_CANOAS_LC_4322024_5.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', });
lyr_BACIA_RIO_CANOAS_LC_1002006_6.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', });
lyr_BACIA_RIBEIRAO_DA_ONCA_7.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', });
lyr_ARO_REMANESCENTES_FLORESTAIS_8.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_ARO_FAIXA_DE_CUESTAS_9.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_ARO_AREA_DE_AMORTECIMENTO_10.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_ARO_APP_11.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_ARA_INCONGRUENCIAS_EM_APP_12.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_ARA_ETE_LAGOAS_13.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_ARA_ATERROS_14.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_AOD_BAIXA_DENSIDADE_NIVEL_3_15.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_AOD_BAIXA_DENSIDADE_NIVEL_2_16.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_AOD_BAIXA_DENSIDADE_NIVEL_1_17.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_AOD_AUS_FASE_2_18.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_AOD_AUS_FASE_1_19.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_AOD_AREA_URBANA_CONSOLIDADA_20.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_SubMacrozonadeOcupaoRestrita_21.set('fieldLabels', {'fid': 'hidden field', 'macrozona_urbana': 'inline label - visible with data', });
lyr_SubMacrozonadeOcupaoPreferencial_22.set('fieldLabels', {'fid': 'hidden field', 'macrozona_urbana': 'inline label - visible with data', });
lyr_SubMacrozonadeExpansoUrbana_23.set('fieldLabels', {'fid': 'hidden field', 'macrozona_urbana': 'inline label - visible with data', });
lyr_MacrozonadoRioCanoas_24.set('fieldLabels', {'fid': 'hidden field', 'macrozona_urbana': 'inline label - visible with data', });
lyr_ExpUrbanaLeis4240199244201994eLC1002006_25.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_ExpUrbanaLCN3242019_26.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_ExpUrbanaLCN2352013_27.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_ExpUrbanaLCN1402009_28.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_ExpUrbanaLCN0502003_29.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_reaEspecialLazerInteresseTursticoeCultural_30.set('fieldLabels', {'fid': 'hidden field', 'zona_especial': 'inline label - visible with data', });
lyr_AERUreaEspecialResidenciasUnifamiliares_31.set('fieldLabels', {'fid': 'hidden field', 'zona_especial': 'inline label - visible with data', });
lyr_AEPIreaEspecialPreferIndustrialeLogstica_32.set('fieldLabels', {'fid': 'hidden field', 'zona_especial': 'inline label - visible with data', });
lyr_AEISreaEspecialdeInteresseSocial_33.set('fieldLabels', {'fid': 'hidden field', 'zona_especial': 'inline label - visible with data', });
lyr_SistemaVirioSistemavirioprincipal_34.set('fieldLabels', {'fid': 'hidden field', 'sistema_viario': 'inline label - visible with data', });
lyr_SistemaVirioRodoviasViasarteriais_35.set('fieldLabels', {'fid': 'hidden field', 'sistema_viario': 'inline label - visible with data', });
lyr_SistemaVirioRodovias_36.set('fieldLabels', {'fid': 'hidden field', 'sistema_viario': 'inline label - visible with data', });
lyr_SistemaVirioExpansodosistemavirio_37.set('fieldLabels', {'fid': 'hidden field', 'sistema_viario': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_38.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_39.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_41.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_42.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_VIGILANCIA_EM_SAUDE_43.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAUDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_UNIDADE_DE_URGENCIA_E_EMERGENCIA_44.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAUDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO_45.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAUDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_GESTAO_ADMINISTRATIVO_46.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAUDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_ATENCAO_PRIMARIA_47.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAUDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_TEATRO_48.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_SECRETARIA_49.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_QUADRA_50.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_PRACA_51.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_PISTA_52.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_PISCINA_53.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_PINACOTECA_54.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_PAVILHAO_55.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_PARQUE_56.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_MUSEU_57.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_GINASIO_58.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_ESTADIO_59.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_CONJUNTO_60.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_CEPEL_61.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_CENTRO_62.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_CASA_63.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_CAMPO_64.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_BIBLIOTECA_65.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_ARENA_66.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_UNIVERSIDADE_ABERTA_DO_BRASIL_67.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_SETOR_DE_MERENDA_68.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_SECRETARIA_DE_EDUCACAO_69.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_ESPACO_DE_DIFUSAO_CIENTIFICA_70.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_ENSINO_FUNDAMENTAL_71.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_EJA_72.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_ED_INFANTIL_ENS_FUNDAMENTAL_73.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_EDUCACAO_INFANTIL_74.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_CRECHE_PRE_ESCOLA_75.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_CRECHE_76.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_CENTRO_DE_EDUCACAO_INTEGRADA_77.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_ALMOCHARIFADO_EDUCACAO_78.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_ALFABETIZACAO_DE_JOVENS_E_ADULTOS_79.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_RODOVIAS_MUNICIPAIS_80.set('fieldLabels', {'fid': 'hidden field', 'TIPO_VIA': 'inline label - visible with data', 'JUDISDICAO': 'inline label - visible with data', 'REVESTIMENTO': 'inline label - visible with data', 'NUM_PISTAS': 'inline label - visible with data', 'NUM_FAIXAS': 'inline label - visible with data', 'EXTENSAO': 'inline label - visible with data', 'NOME': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_RODOVIAS_ESTADUAIS_81.set('fieldLabels', {'fid': 'hidden field', 'TIPO_VIA': 'inline label - visible with data', 'JUDISDICAO': 'inline label - visible with data', 'REVESTIMENTO': 'inline label - visible with data', 'NUM_PISTAS': 'inline label - visible with data', 'NUM_FAIXAS': 'inline label - visible with data', 'EXTENSAO': 'inline label - visible with data', 'NOME': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_ESTRADAS_RURAIS_MUNICIPAIS_82.set('fieldLabels', {'fid': 'hidden field', 'TIPO_VIA': 'inline label - visible with data', 'JUDISDICAO': 'inline label - visible with data', 'REVESTIMENTO': 'inline label - visible with data', 'NUM_PISTAS': 'inline label - visible with data', 'NUM_FAIXAS': 'inline label - visible with data', 'EXTENSAO': 'inline label - visible with data', 'NOME': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_IMOVEL_PUBLICO_83.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'LOGRADOURO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CLASSIFICACAO': 'inline label - visible with data', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'PROCESSO_SEINFRA': 'inline label - visible with data', 'PROCESSO_SMS': 'inline label - visible with data', 'PROCESSO_MP': 'inline label - visible with data', 'PROCESSO_SMSEG': 'inline label - visible with data', 'COORDENADA_X': 'inline label - visible with data', 'COORDENADA_Y': 'inline label - visible with data', 'OUTROS_PROCESSOS': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', });
lyr_IMOVEL_PRIVADO_URBANO_84.set('fieldLabels', {'fid': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'LOGRADOURO': 'inline label - visible with data', 'PROCESSO-SEINFRA': 'inline label - visible with data', 'PROCESSO_SMS': 'inline label - visible with data', 'PROCESSO_MP': 'inline label - visible with data', 'PROCESSO_SMSEG': 'inline label - visible with data', 'OUTROS_PROCESSOS': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'CLASSIFICACAO': 'inline label - visible with data', });
lyr_IMOVEL_PRIVADO_URBANO_85.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'LOGRADOURO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CLASSIFICACAO': 'inline label - visible with data', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'PROCESSO_SEINFRA': 'inline label - visible with data', 'PROCESSO_SMS': 'inline label - visible with data', 'PROCESSO_MP': 'inline label - visible with data', 'PROCESSO_SMSEG': 'inline label - visible with data', 'COORDENADA_X': 'inline label - visible with data', 'COORDENADA_Y': 'inline label - visible with data', 'OUTROS_PROCESSOS': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', });
lyr_IMOVEL_PRIVADO_RURAL_86.set('fieldLabels', {'fid': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'LOGRADOURO': 'inline label - visible with data', 'PROCESSO-SEINFRA': 'inline label - visible with data', 'PROCESSO_SMS': 'inline label - visible with data', 'PROCESSO_MP': 'inline label - visible with data', 'PROCESSO_SMSEG': 'inline label - visible with data', 'OUTROS_PROCESSOS': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'CLASSIFICACAO': 'inline label - visible with data', });
lyr_IMOVEL_PRIVADO_RURAL_87.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'LOGRADOURO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CLASSIFICACAO': 'inline label - visible with data', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'PROCESSO_SEINFRA': 'inline label - visible with data', 'PROCESSO_SMS': 'inline label - visible with data', 'PROCESSO_MP': 'inline label - visible with data', 'PROCESSO_SMSEG': 'inline label - visible with data', 'COORDENADA_X': 'inline label - visible with data', 'COORDENADA_Y': 'inline label - visible with data', 'OUTROS_PROCESSOS': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', });
lyr_PARQUE_DOS_TRABALHADORES_88.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PARQUE_DOS_TRABALHADORES_89.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_90.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_91.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PARQUE_CAXAMBU_92.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PARQUE_CAXAMBU_93.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_94.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_95.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_96.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_97.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_JARDIM_ZOOBOTANICO_98.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_JARDIM_ZOOBOTANICO_99.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_COMPLEXO_POLIESPORTIVO_100.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_COMPLEXO_POLIESPORTIVO_101.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_UBS_SANTA_TEREZINHA_102.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_UBS_SANTA_BARBARA_103.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_UBS_PERES_ELIAS_104.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_UBS_PARQUE_HORTO_105.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_UBS_JARDIM_PALMA_106.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_REVITALIZACAO_ESTACAO_FERROVIARIA_107.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_REFORMA_CRAS_OESTE_108.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_REFORMA_CRAS_NORTE_109.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_REFORCO_ESTRUTURAL_CHAMPAGNAT_110.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_RECAPEAMENTO_JARDIM_MARTINS_111.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_PRONTO_SOCORRO_ALVARO_AZZUZ_112.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_POLICLINICA_113.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_NOVO_NGA_114.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_115.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_ESCOLA_JOAO_LIPORONI_116.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_DRENAGEM_CORREGO_CUBATAO_117.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_DRENAGEM_CORREGO_BRAGRES_118.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_DRENAGEM_CANAL_JD_PALMEIRAS_119.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_CRECHE_SAMEL_PARK_120.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_CORPO_BAMBEIROS_121.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_CONTENCAO_VIARIA_122.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_CONSTRUCAO_CEPEL_SAO_JOSE_123.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_CONSTRUCAO_CEPEL_JD_CAMBUI_124.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_CONSTRUCAO_CAPS_INFANTIL_125.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_AREA_LAZER_PARQUE_ESMERALDA_126.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_AREA_LAZER_PARQUE_CONTINENTAL_127.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_AREA_LAZER_JARDIM_PORTINARI_128.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_OBRAS_PUBLICAS_129.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGEM_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_REGULARIZADO_130.set('fieldLabels', {'fid': 'hidden field', 'PROCESSO': 'inline label - visible with data', 'MODALIDADE': 'inline label - visible with data', 'NOME_LOTEAMENTO': 'inline label - visible with data', 'OBSERVACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'QUANT_LOTES': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DECRETO_REURB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', });
lyr_REGULARIZADO_131.set('fieldLabels', {'fid': 'hidden field', 'PROCESSO': 'inline label - visible with data', 'MODALIDADE': 'inline label - visible with data', 'NOME_LOTEAMENTO': 'inline label - visible with data', 'OBSERVACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'QUANT_LOTES': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DECRETO_REURB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', });
lyr_Vivenna_132.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Vivenna_133.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaSoVicente_134.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaSoVicente_135.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaJardimSimes_136.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaJardimSimes_137.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaAlvorada_138.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaAlvorada_139.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaDiEspanha_140.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaDiEspanha_141.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaPucci_142.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaPucci_143.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaPiemonteII_144.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaPiemonteII_145.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaOlimpica_146.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaOlimpica_147.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaDoratta_148.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaDoratta_149.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaBella_150.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaBella_151.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Versalhes_152.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Versalhes_153.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TorontoResidence_154.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TorontoResidence_155.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TerraNova_156.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TerraNova_157.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Sonetto_158.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Sonetto_159.set('fieldLabels', {'fid': 'hidden field', 'layer': 'no label', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_160.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_161.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_162.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_163.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_164.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_165.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ServidoRamal138kVFranca4Guanabara_166.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_ServidoRamal138kVFranca4Guanabara_167.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_SantaLina_168.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantaLina_169.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantAnita_170.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantAnita_171.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RuaAlfioBenedini_172.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RuaAlfioBenedini_173.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RuaAlfioBenedini_174.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', });
lyr_ResidencialValeVerde_175.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialValeVerde_176.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialYasminTorres_177.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialYasminTorres_178.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialTellini_179.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialTellini_180.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosII_181.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosII_182.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosI_183.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosI_184.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaIns_185.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaIns_186.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaF_187.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaF_188.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadosOitis_189.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadosOitis_190.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadoSol_191.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadoSol_192.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegreII_193.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegreII_194.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegre_195.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegre_196.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPiamalim_197.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPiamalim_198.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialParquedosPassaros_199.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialParquedosPassaros_200.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuciII_201.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuciII_202.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuci_203.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuci_204.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMoradadoBosque_205.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMoradadoBosque_206.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarthaHelena_207.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarthaHelena_208.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarioTasso_209.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarioTasso_210.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarianaAlarcon_211.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarianaAlarcon_212.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJardimCanada_213.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJardimCanada_214.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJabuticabeiras_215.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJabuticabeiras_216.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGramadosII_217.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGramadosII_218.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGramados_219.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGramados_220.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGaia_221.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGaia_222.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialFrutuoso_223.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialFrutuoso_224.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialFaggioni_225.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialFaggioni_226.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialEssenza_227.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialEssenza_228.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialDomingosJardini_229.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialDomingosJardini_230.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialCintraAlves_231.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialCintraAlves_232.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialBoaVista_233.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialBoaVista_234.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAltodaFazenda_235.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAltodaFazenda_236.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAnaHelena_237.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAnaHelena_238.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ReservaAbaete_239.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ReservaAbaete_240.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RecantoMeneghetti_241.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RecantoMeneghetti_242.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Quadra18VilaExposio_243.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Quadra18VilaExposio_244.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ProlongamentoSamelPark_245.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ProlongamentoSamelPark_246.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueVillaLobos_247.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueVillaLobos_248.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquePalmeiraImperial_249.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquePalmeiraImperial_250.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueJacarand_251.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueJacarand_252.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueFlora_253.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueFlora_254.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosSabias_255.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosSabias_256.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosCoqueiros_257.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosCoqueiros_258.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueAlvorada_259.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueAlvorada_260.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParagonFaseII_261.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParagonFaseII_262.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Paragon_263.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Paragon_264.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_PalmeiraReal_265.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_PalmeiraReal_266.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadoVerdeII_267.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadoVerdeII_268.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadaMata_269.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadaMata_270.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Monti_271.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Monti_272.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MontBlancResidence_273.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MontBlancResidence_274.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasterplanDespaschoal_275.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasterplanDespaschoal_276.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasterplanDespaschoal_277.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_MasteplanBildVitta_278.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasteplanBildVitta_279.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasteplanBildVitta_280.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_Loteamentolamo_281.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Loteamentolamo_282.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimStephani_283.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimStephani_284.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimPherola_285.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimPherola_286.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimNatal_287.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimNatal_288.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaLuiza_289.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaLuiza_290.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaAugusta_291.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaAugusta_292.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimHorizonte_293.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimHorizonte_294.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimFlora_295.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimFlora_296.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_IrineuZanetiII_297.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_IrineuZanetiII_298.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Infratcnica_299.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Infratcnica_300.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_HorizResidence_301.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_HorizResidence_302.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GlebaNossaSenhoraAuxiliadora_303.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GlebaNossaSenhoraAuxiliadora_304.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Ferracini_305.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Ferracini_306.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FrancaB6_307.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FrancaB6_308.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaProgresso_309.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaProgresso_310.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita2_311.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita2_312.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita_313.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita_314.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Essence_315.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Essence_316.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Elias_317.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Elias_318.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioSolNascente_319.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioSolNascente_320.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioRuadoSol_321.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioRuadoSol_322.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioResidencialHope_323.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioResidencialHope_324.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DiocesedeFranca_325.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DiocesedeFranca_326.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DaVinci_327.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DaVinci_328.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_329.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_330.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_331.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_332.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Colorado_333.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Colorado_334.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CidadeJardim_335.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CidadeJardim_336.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraOlaria_337.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraOlaria_338.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraBelaVista_339.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraBelaVista_340.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_BordadaMata_341.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_BordadaMata_342.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arteris_343.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arteris_344.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ArterisFaixadeDomnioFrancaSP_3342_345.set('fieldLabels', {'fid': 'hidden field', 'description': 'inline label - visible with data', });
lyr_ArterisFaixadeDomnioFrancaSP_3452_346.set('fieldLabels', {'fid': 'hidden field', 'description': 'inline label - visible with data', });
lyr_ArterisFaixadeDomnioFrancaSPA_397334_347.set('fieldLabels', {'fid': 'hidden field', 'description': 'inline label - visible with data', });
lyr_Arizona_348.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arizona_349.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_AbuDhabiParadiseResortResidence_350.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_AbuDhabiParadiseResortResidence_351.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EtapaAprovado43unid_352.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaDiretriz22unid_353.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaDefinitiva10unid_354.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaPrvia24unid_355.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_IRREGULAR_356.set('fieldLabels', {'fid': 'hidden field', 'PROCESSO': 'inline label - visible with data', 'MODALIDADE': 'inline label - visible with data', 'NOME_LOTEAMENTO': 'inline label - visible with data', 'OBSERVACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'QUANT_LOTES': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DECRETO_REURB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', });
lyr_IRREGULAR_357.set('fieldLabels', {'fid': 'hidden field', 'PROCESSO': 'inline label - visible with data', 'MODALIDADE': 'inline label - visible with data', 'NOME_LOTEAMENTO': 'inline label - visible with data', 'OBSERVACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'QUANT_LOTES': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DECRETO_REURB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', });
lyr_APP1745unid_358.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - always visible', });
lyr_RiosDuplos84unid_359.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_MassasDgua270unid_360.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosSimples1842unid_361.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_CORPO_HIDRICO_CANAL_FECHADO_362.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_CORPO_HIDRICO_CANAL_ABERTO_363.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_Nascentes821unid_364.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_AntigoAterrodaFazMunicipal_365.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_366.set('fieldLabels', {'fid': 'hidden field', 'poco': 'inline label - visible with data', 'coordenada_y': 'inline label - visible with data', 'coordenada_x': 'inline label - visible with data', 'cota': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'situacao': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'ano': 'inline label - visible with data', });
lyr_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_367.set('fieldLabels', {'fid': 'hidden field', 'poco': 'inline label - visible with data', 'coordenada_y': 'inline label - visible with data', 'coordenada_x': 'inline label - visible with data', 'cota': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'situacao': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'ano': 'inline label - visible with data', });
lyr_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_368.set('fieldLabels', {'fid': 'hidden field', 'poco': 'inline label - visible with data', 'coordenada_y': 'inline label - visible with data', 'coordenada_x': 'inline label - visible with data', 'cota': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'situacao': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'ano': 'inline label - visible with data', });
lyr_reaBdaFazMunicipal_369.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_reaBdaFazMunicPoosMonitEngesolve7unid_370.set('fieldLabels', {'fid': 'hidden field', 'Norte': 'hidden field', 'Leste': 'hidden field', 'Cota': 'hidden field', 'Identifica': 'hidden field', 'Profundida': 'hidden field', 'Identifi_1': 'inline label - visible with data', 'Profundi_1': 'hidden field', 'NA Dinâmi': 'hidden field', 'NA Estatic': 'hidden field', 'NÍVEL DE': 'hidden field', 'TEMPERATUR': 'hidden field', 'pH': 'hidden field', 'CONDUTIVID': 'hidden field', 'Eh/ORP': 'hidden field', 'OXIGÊNIO': 'hidden field', 'TURBIDEZ': 'hidden field', });
lyr_AntigoAterrodasMaritacas_371.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterroMaritacas1Etapa28unid_372.set('fieldLabels', {'fid': 'hidden field', 'Poço': 'inline label - visible with data', 'Norte (m)': 'hidden field', 'Este (m)': 'hidden field', 'Cota': 'hidden field', });
lyr_ParqueZumbidosPalmares_373.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterroMaritacas3Etapa5unid_374.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterroMaritacas2Etapa41unid_375.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PARTE_DA_AREA_G_AVERBADA_376.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_PARTE_DA_AREA_G_A_SER_AVERBADA_377.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_CONJUNTO_HABITACIONAL_378.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AV_ACESSO_COLEGIO_AGRICOLA_379.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_N2_380.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_N1_381.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_N_382.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_K_383.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_J_384.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_I_385.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_H_386.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_G_387.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_F_388.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_E_389.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_D_390.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_C_391.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_B_392.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_A_393.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_PROPOSTO_394.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', });
lyr_EM_FUNCIONAMENTO_395.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', });
lyr_EM_CONSTRUCAO_396.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', });
lyr_DrenagensExistentes_397.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DRENAGEM_VILLAGIO_DI_FIRENZE_398.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_VILLA_SANTA_GIANNA_399.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_VILA_TOTOLI_400.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_VILA_REAL_401.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_VILA_DORATTA_402.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_SAO_PEDRO_II_403.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_SANTA_FE_404.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_TELLINI_405.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_SANTA_INES_408.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_PALERMO_412.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_ITAPUA_413.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_GAIA_414.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_FERRACINI_415.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_FAGGIONI_416.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_ECOSTILO_417.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_DOURADO_418.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_BALDASSARI_419.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_420.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RECREIO_CAMPO_BELO_422.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RECANTO_MENEGHETTI_423.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PROL_VILA_ISABEL_425.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PROL_JARDIM_MARTINS_426.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_UNIVERSITARIO_428.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_SANTA_ADELIA_429.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_MOEMA_430.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_JOAO_LEITE_431.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_DOS_SABIAS_432.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_433.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_DAS_ARVORES_434.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_CASTELO_435.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_BOA_VISTA_436.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_437.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARAGON_438.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_NAIR_RETUSSI_I_439.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_SAO_GABRIEL_440.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_SANTA_LUCIA_441.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_PULICANO_442.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_PORTINARI_443.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_PIRATININGA_444.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_PALMA_445.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_NOEMIA_447.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_NATAL_448.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_MARTINS_449.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_MARIA_LUIZA_450.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_LIBANO_451.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_IPANEMA_452.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_BUENO_453.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_BOTANICO_454.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_BARAO_455.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_AVIACAO_456.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_ARIZONA_II_457.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_ARIZONA_I_458.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_AEROPORTO_II_459.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_GRAMADOS_I_460.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_FRANCA_POLO_CLUBE_461.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_DOMINGOS_JARDINI_462.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_DINFRA_II_463.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_ATLANTA_PARK_464.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_ANA_DOROTHEA_465.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_REGIAO_SUL_466.set('fieldLabels', {'fid': 'hidden field', 'AREA_M2': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', });
lyr_REGIAO_OESTE_467.set('fieldLabels', {'fid': 'hidden field', 'AREA_M2': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', });
lyr_REGIAO_NORTE_468.set('fieldLabels', {'fid': 'hidden field', 'AREA_M2': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', });
lyr_REGIAO_LESTE_469.set('fieldLabels', {'fid': 'hidden field', 'AREA_M2': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', });
lyr_BAIRROS_470.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'REGIAO_ARRASTAO_LIMPEZA': 'inline label - visible with data', });
lyr_Voorocas27unid_471.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'ID_PONTO_I': 'hidden field', 'IBGE': 'hidden field', 'MUNIC__PIO': 'hidden field', 'BACIA': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'SITUA____O': 'hidden field', 'REFER__NCI': 'inline label - visible with data', 'PRIORIDADE': 'hidden field', 'OBSERVA_____': 'inline label - visible with data', });
lyr_LocaisDifcilAcessoreasRurais12unid_472.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'PER__ODO_TURNO_': 'inline label - visible with data', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'inline label - visible with data', 'FREQU__NCIA': 'inline label - visible with data', 'PROGRAMA____O_SEMANAL': 'inline label - visible with data', 'EQUIPAMENTOS': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', });
lyr_Contineres286unid_473.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_rvoreImuneaoCorte9unid_474.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_AcademiasaoArLivre84unid_475.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_SERVICO_DE_SAUDE_476.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_RECICLAVEIS_477.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_PNEUS_478.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_PILHAS_E_BATERIAS_479.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_PERIGOSOS_480.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_OLEO_LUBRIFICANTE_481.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_OLEO_DE_COZINHA_482.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_MASSA_VERDE_483.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_MADEIRAS_484.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_LATAS_DE_TINTA_485.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_LAMPADAS_486.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_INSERVIVEIS_487.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_GESSO_488.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_EMBALAGENS_AGROTOXICO_489.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_ELETRONICOS_490.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_COURO_491.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_CONSTRUCAO_CIVIL_492.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_CHAPAS_DE_RAIO_X_493.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_PROTECAO_AERODROMO_494.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', });
lyr_HELIPONTO_HOSPITAL_REGIONAL_495.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', });
lyr_HELIPONTO_EDIFICIO_PRIME_496.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', });
lyr_HELIPONTO_EDIFICIO_PRIME_497.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', });
lyr_CLASSE_VB_498.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_VA_499.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IVC_500.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IVB_501.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IVA_502.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IIIC_503.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IIIB_504.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IIIA_505.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_II_506.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_I_507.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_LoteamentoFechado146unid70632440m_508.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'hidden field', });
lyr_LoteEdificao20unid_509.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LoteEdificao20unid508062m_510.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LoteEMDEF10unid_511.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', });
lyr_LoteEMDEF10unid218783m_512.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_Lote252unid_513.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', });
lyr_Lote252unid7530210m_514.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Proc7954202537196unid_515.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Proc7954202537196unid3240462m_516.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Proc2652520256922unid_517.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Proc2652520256922unid352000m_518.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Proc2198620254518unid_519.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Proc2198620254518unid2092083m_520.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Homologado4unid_521.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Homologado4unid334770m_522.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_reaVerde2117unid881307234m_523.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaPatrimonial69unid121924073m_524.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaInstitucional371unid208395759m_525.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_readeUsoEspecial280unid271349968m_526.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_APP169unid239527816m_527.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_TRPRL_CETESB_528.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TRPRL_CETESB_529.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TCRA_MUNICIPAL_530.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TCRA_MUNICIPAL_531.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TCRA_CETESB_PARCELAMENTO_532.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TCRA_CETESB_PARCELAMENTO_533.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TCRA_CETESB_534.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TCRA_CETESB_535.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TAC_MP_536.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TAC_MP_537.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PLANTIO_VOLUNTARIO_538.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PLANTIO_VOLUNTARIO_539.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_ANUENCIA_540.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_ANUENCIA_541.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_AIIPA_CETESB_542.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_AIIPA_CETESB_543.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_ACAO_CIVIL_PUBLICA_544.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_ACAO_CIVIL_PUBLICA_545.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_AdoteUmaPraa392unid38295094m_546.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'responsavel': 'inline label - visible with data', 'm2': 'inline label - visible with data', });
lyr_SPlacaEgnaldo4unid86447m_547.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_SPlacaDilu15unid751060m_548.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_CPlacaEgnaldo221unid22321870m_549.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_CPlacaDilu152unid15990431m_550.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_CPlacaDilu152unid15990431m_550.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});