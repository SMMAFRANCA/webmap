ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31983").setExtent([222565.319082, 7699987.750491, 287719.107856, 7741660.188040]);
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
var format_CONSTRUCAO_CAPS_INFANTIL_123 = new ol.format.GeoJSON();
var features_CONSTRUCAO_CAPS_INFANTIL_123 = format_CONSTRUCAO_CAPS_INFANTIL_123.readFeatures(json_CONSTRUCAO_CAPS_INFANTIL_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CONSTRUCAO_CAPS_INFANTIL_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONSTRUCAO_CAPS_INFANTIL_123.addFeatures(features_CONSTRUCAO_CAPS_INFANTIL_123);
var lyr_CONSTRUCAO_CAPS_INFANTIL_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONSTRUCAO_CAPS_INFANTIL_123, 
                style: style_CONSTRUCAO_CAPS_INFANTIL_123,
                popuplayertitle: 'CONSTRUCAO_CAPS_INFANTIL',
                interactive: true,
                title: '<img src="styles/legend/CONSTRUCAO_CAPS_INFANTIL_123.png" /> CONSTRUCAO_CAPS_INFANTIL'
            });
var format_AREA_LAZER_PARQUE_ESMERALDA_124 = new ol.format.GeoJSON();
var features_AREA_LAZER_PARQUE_ESMERALDA_124 = format_AREA_LAZER_PARQUE_ESMERALDA_124.readFeatures(json_AREA_LAZER_PARQUE_ESMERALDA_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_LAZER_PARQUE_ESMERALDA_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_LAZER_PARQUE_ESMERALDA_124.addFeatures(features_AREA_LAZER_PARQUE_ESMERALDA_124);
var lyr_AREA_LAZER_PARQUE_ESMERALDA_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_LAZER_PARQUE_ESMERALDA_124, 
                style: style_AREA_LAZER_PARQUE_ESMERALDA_124,
                popuplayertitle: 'AREA_LAZER_PARQUE_ESMERALDA',
                interactive: true,
                title: '<img src="styles/legend/AREA_LAZER_PARQUE_ESMERALDA_124.png" /> AREA_LAZER_PARQUE_ESMERALDA'
            });
var format_AREA_LAZER_PARQUE_CONTINENTAL_125 = new ol.format.GeoJSON();
var features_AREA_LAZER_PARQUE_CONTINENTAL_125 = format_AREA_LAZER_PARQUE_CONTINENTAL_125.readFeatures(json_AREA_LAZER_PARQUE_CONTINENTAL_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_LAZER_PARQUE_CONTINENTAL_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_LAZER_PARQUE_CONTINENTAL_125.addFeatures(features_AREA_LAZER_PARQUE_CONTINENTAL_125);
var lyr_AREA_LAZER_PARQUE_CONTINENTAL_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_LAZER_PARQUE_CONTINENTAL_125, 
                style: style_AREA_LAZER_PARQUE_CONTINENTAL_125,
                popuplayertitle: 'AREA_LAZER_PARQUE_CONTINENTAL',
                interactive: true,
                title: '<img src="styles/legend/AREA_LAZER_PARQUE_CONTINENTAL_125.png" /> AREA_LAZER_PARQUE_CONTINENTAL'
            });
var format_AREA_LAZER_JARDIM_PORTINARI_126 = new ol.format.GeoJSON();
var features_AREA_LAZER_JARDIM_PORTINARI_126 = format_AREA_LAZER_JARDIM_PORTINARI_126.readFeatures(json_AREA_LAZER_JARDIM_PORTINARI_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_LAZER_JARDIM_PORTINARI_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_LAZER_JARDIM_PORTINARI_126.addFeatures(features_AREA_LAZER_JARDIM_PORTINARI_126);
var lyr_AREA_LAZER_JARDIM_PORTINARI_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_LAZER_JARDIM_PORTINARI_126, 
                style: style_AREA_LAZER_JARDIM_PORTINARI_126,
                popuplayertitle: 'AREA_LAZER_JARDIM_PORTINARI',
                interactive: true,
                title: '<img src="styles/legend/AREA_LAZER_JARDIM_PORTINARI_126.png" /> AREA_LAZER_JARDIM_PORTINARI'
            });
var format_OBRAS_PUBLICAS_127 = new ol.format.GeoJSON();
var features_OBRAS_PUBLICAS_127 = format_OBRAS_PUBLICAS_127.readFeatures(json_OBRAS_PUBLICAS_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_OBRAS_PUBLICAS_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OBRAS_PUBLICAS_127.addFeatures(features_OBRAS_PUBLICAS_127);
var lyr_OBRAS_PUBLICAS_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OBRAS_PUBLICAS_127, 
                style: style_OBRAS_PUBLICAS_127,
                popuplayertitle: 'OBRAS_PUBLICAS',
                interactive: true,
                title: '<img src="styles/legend/OBRAS_PUBLICAS_127.png" /> OBRAS_PUBLICAS'
            });
var format_REGULARIZADO_128 = new ol.format.GeoJSON();
var features_REGULARIZADO_128 = format_REGULARIZADO_128.readFeatures(json_REGULARIZADO_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REGULARIZADO_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGULARIZADO_128.addFeatures(features_REGULARIZADO_128);
var lyr_REGULARIZADO_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGULARIZADO_128, 
                style: style_REGULARIZADO_128,
                popuplayertitle: 'REGULARIZADO',
                interactive: true,
                title: '<img src="styles/legend/REGULARIZADO_128.png" /> REGULARIZADO'
            });
var format_REGULARIZADO_129 = new ol.format.GeoJSON();
var features_REGULARIZADO_129 = format_REGULARIZADO_129.readFeatures(json_REGULARIZADO_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REGULARIZADO_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGULARIZADO_129.addFeatures(features_REGULARIZADO_129);
var lyr_REGULARIZADO_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGULARIZADO_129, 
                style: style_REGULARIZADO_129,
                popuplayertitle: 'REGULARIZADO',
                interactive: true,
                title: '<img src="styles/legend/REGULARIZADO_129.png" /> REGULARIZADO'
            });
var format_Vivenna_130 = new ol.format.GeoJSON();
var features_Vivenna_130 = format_Vivenna_130.readFeatures(json_Vivenna_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Vivenna_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vivenna_130.addFeatures(features_Vivenna_130);
var lyr_Vivenna_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vivenna_130, 
                style: style_Vivenna_130,
                popuplayertitle: 'Vivenna',
                interactive: true,
    title: 'Vivenna<br />\
    <img src="styles/legend/Vivenna_130_0.png" /> APP<br />\
    <img src="styles/legend/Vivenna_130_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Vivenna_130_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Vivenna_130_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Vivenna_130_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Vivenna_130_5.png" /> PASSEIO<br />\
    <img src="styles/legend/Vivenna_130_6.png" /> RUAS<br />\
    <img src="styles/legend/Vivenna_130_7.png" /> VIELA<br />' });
var format_Vivenna_131 = new ol.format.GeoJSON();
var features_Vivenna_131 = format_Vivenna_131.readFeatures(json_Vivenna_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Vivenna_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vivenna_131.addFeatures(features_Vivenna_131);
var lyr_Vivenna_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vivenna_131, 
                style: style_Vivenna_131,
                popuplayertitle: 'Vivenna',
                interactive: true,
                title: '<img src="styles/legend/Vivenna_131.png" /> Vivenna'
            });
var format_VittaSoVicente_132 = new ol.format.GeoJSON();
var features_VittaSoVicente_132 = format_VittaSoVicente_132.readFeatures(json_VittaSoVicente_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaSoVicente_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaSoVicente_132.addFeatures(features_VittaSoVicente_132);
var lyr_VittaSoVicente_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaSoVicente_132, 
                style: style_VittaSoVicente_132,
                popuplayertitle: 'Vitta São Vicente',
                interactive: true,
    title: 'Vitta São Vicente<br />\
    <img src="styles/legend/VittaSoVicente_132_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/VittaSoVicente_132_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/VittaSoVicente_132_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/VittaSoVicente_132_3.png" /> PASSEIO<br />\
    <img src="styles/legend/VittaSoVicente_132_4.png" /> RUAS<br />\
    <img src="styles/legend/VittaSoVicente_132_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_VittaSoVicente_133 = new ol.format.GeoJSON();
var features_VittaSoVicente_133 = format_VittaSoVicente_133.readFeatures(json_VittaSoVicente_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaSoVicente_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaSoVicente_133.addFeatures(features_VittaSoVicente_133);
var lyr_VittaSoVicente_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaSoVicente_133, 
                style: style_VittaSoVicente_133,
                popuplayertitle: 'Vitta São Vicente',
                interactive: true,
                title: '<img src="styles/legend/VittaSoVicente_133.png" /> Vitta São Vicente'
            });
var format_VittaJardimSimes_134 = new ol.format.GeoJSON();
var features_VittaJardimSimes_134 = format_VittaJardimSimes_134.readFeatures(json_VittaJardimSimes_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaJardimSimes_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaJardimSimes_134.addFeatures(features_VittaJardimSimes_134);
var lyr_VittaJardimSimes_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaJardimSimes_134, 
                style: style_VittaJardimSimes_134,
                popuplayertitle: 'Vitta Jardim Simões',
                interactive: true,
    title: 'Vitta Jardim Simões<br />\
    <img src="styles/legend/VittaJardimSimes_134_0.png" /> APP<br />\
    <img src="styles/legend/VittaJardimSimes_134_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VittaJardimSimes_134_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/VittaJardimSimes_134_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/VittaJardimSimes_134_4.png" /> PASSEIO<br />\
    <img src="styles/legend/VittaJardimSimes_134_5.png" /> RUAS<br />' });
var format_VittaJardimSimes_135 = new ol.format.GeoJSON();
var features_VittaJardimSimes_135 = format_VittaJardimSimes_135.readFeatures(json_VittaJardimSimes_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaJardimSimes_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaJardimSimes_135.addFeatures(features_VittaJardimSimes_135);
var lyr_VittaJardimSimes_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaJardimSimes_135, 
                style: style_VittaJardimSimes_135,
                popuplayertitle: 'Vitta Jardim Simões',
                interactive: true,
                title: '<img src="styles/legend/VittaJardimSimes_135.png" /> Vitta Jardim Simões'
            });
var format_VittaAlvorada_136 = new ol.format.GeoJSON();
var features_VittaAlvorada_136 = format_VittaAlvorada_136.readFeatures(json_VittaAlvorada_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaAlvorada_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaAlvorada_136.addFeatures(features_VittaAlvorada_136);
var lyr_VittaAlvorada_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaAlvorada_136, 
                style: style_VittaAlvorada_136,
                popuplayertitle: 'Vitta Alvorada',
                interactive: true,
    title: 'Vitta Alvorada<br />\
    <img src="styles/legend/VittaAlvorada_136_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VittaAlvorada_136_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/VittaAlvorada_136_2.png" /> LOTES<br />\
    <img src="styles/legend/VittaAlvorada_136_3.png" /> PASSEIO<br />\
    <img src="styles/legend/VittaAlvorada_136_4.png" /> RUAS<br />\
    <img src="styles/legend/VittaAlvorada_136_5.png" /> VIELA<br />' });
var format_VittaAlvorada_137 = new ol.format.GeoJSON();
var features_VittaAlvorada_137 = format_VittaAlvorada_137.readFeatures(json_VittaAlvorada_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaAlvorada_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaAlvorada_137.addFeatures(features_VittaAlvorada_137);
var lyr_VittaAlvorada_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaAlvorada_137, 
                style: style_VittaAlvorada_137,
                popuplayertitle: 'Vitta Alvorada',
                interactive: true,
                title: '<img src="styles/legend/VittaAlvorada_137.png" /> Vitta Alvorada'
            });
var format_VilaDiEspanha_138 = new ol.format.GeoJSON();
var features_VilaDiEspanha_138 = format_VilaDiEspanha_138.readFeatures(json_VilaDiEspanha_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaDiEspanha_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaDiEspanha_138.addFeatures(features_VilaDiEspanha_138);
var lyr_VilaDiEspanha_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaDiEspanha_138, 
                style: style_VilaDiEspanha_138,
                popuplayertitle: 'Vila Di Espanha',
                interactive: true,
    title: 'Vila Di Espanha<br />\
    <img src="styles/legend/VilaDiEspanha_138_0.png" /> APP<br />\
    <img src="styles/legend/VilaDiEspanha_138_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VilaDiEspanha_138_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VilaDiEspanha_138_3.png" /> LOTES<br />\
    <img src="styles/legend/VilaDiEspanha_138_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VilaDiEspanha_138_5.png" /> PASSEIO<br />\
    <img src="styles/legend/VilaDiEspanha_138_6.png" /> RUAS<br />\
    <img src="styles/legend/VilaDiEspanha_138_7.png" /> VIELA<br />' });
var format_VilaDiEspanha_139 = new ol.format.GeoJSON();
var features_VilaDiEspanha_139 = format_VilaDiEspanha_139.readFeatures(json_VilaDiEspanha_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaDiEspanha_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaDiEspanha_139.addFeatures(features_VilaDiEspanha_139);
var lyr_VilaDiEspanha_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaDiEspanha_139, 
                style: style_VilaDiEspanha_139,
                popuplayertitle: 'Vila Di Espanha',
                interactive: true,
                title: '<img src="styles/legend/VilaDiEspanha_139.png" /> Vila Di Espanha'
            });
var format_VillaPucci_140 = new ol.format.GeoJSON();
var features_VillaPucci_140 = format_VillaPucci_140.readFeatures(json_VillaPucci_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaPucci_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaPucci_140.addFeatures(features_VillaPucci_140);
var lyr_VillaPucci_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaPucci_140, 
                style: style_VillaPucci_140,
                popuplayertitle: 'Villa Pucci',
                interactive: true,
    title: 'Villa Pucci<br />\
    <img src="styles/legend/VillaPucci_140_0.png" /> APP<br />\
    <img src="styles/legend/VillaPucci_140_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaPucci_140_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaPucci_140_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/VillaPucci_140_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaPucci_140_5.png" /> LOTES<br />\
    <img src="styles/legend/VillaPucci_140_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VillaPucci_140_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/VillaPucci_140_8.png" /> PASSEIO<br />\
    <img src="styles/legend/VillaPucci_140_9.png" /> RUAS<br />\
    <img src="styles/legend/VillaPucci_140_10.png" /> VIELA<br />' });
var format_VillaPucci_141 = new ol.format.GeoJSON();
var features_VillaPucci_141 = format_VillaPucci_141.readFeatures(json_VillaPucci_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaPucci_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaPucci_141.addFeatures(features_VillaPucci_141);
var lyr_VillaPucci_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaPucci_141, 
                style: style_VillaPucci_141,
                popuplayertitle: 'Villa Pucci',
                interactive: true,
                title: '<img src="styles/legend/VillaPucci_141.png" /> Villa Pucci'
            });
var format_VilaPiemonteII_142 = new ol.format.GeoJSON();
var features_VilaPiemonteII_142 = format_VilaPiemonteII_142.readFeatures(json_VilaPiemonteII_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaPiemonteII_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaPiemonteII_142.addFeatures(features_VilaPiemonteII_142);
var lyr_VilaPiemonteII_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaPiemonteII_142, 
                style: style_VilaPiemonteII_142,
                popuplayertitle: 'Vila Piemonte II',
                interactive: true,
    title: 'Vila Piemonte II<br />\
    <img src="styles/legend/VilaPiemonteII_142_0.png" /> APP<br />\
    <img src="styles/legend/VilaPiemonteII_142_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VilaPiemonteII_142_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VilaPiemonteII_142_3.png" /> DESMEMBRAMENTO DOACAO DESAPROPRIACAO<br />\
    <img src="styles/legend/VilaPiemonteII_142_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/VilaPiemonteII_142_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VilaPiemonteII_142_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/VilaPiemonteII_142_7.png" /> PASSEIO<br />\
    <img src="styles/legend/VilaPiemonteII_142_8.png" /> RUAS<br />\
    <img src="styles/legend/VilaPiemonteII_142_9.png" /> VIELA<br />' });
var format_VilaPiemonteII_143 = new ol.format.GeoJSON();
var features_VilaPiemonteII_143 = format_VilaPiemonteII_143.readFeatures(json_VilaPiemonteII_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaPiemonteII_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaPiemonteII_143.addFeatures(features_VilaPiemonteII_143);
var lyr_VilaPiemonteII_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaPiemonteII_143, 
                style: style_VilaPiemonteII_143,
                popuplayertitle: 'Vila Piemonte II',
                interactive: true,
                title: '<img src="styles/legend/VilaPiemonteII_143.png" /> Vila Piemonte II'
            });
var format_VilaOlimpica_144 = new ol.format.GeoJSON();
var features_VilaOlimpica_144 = format_VilaOlimpica_144.readFeatures(json_VilaOlimpica_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaOlimpica_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaOlimpica_144.addFeatures(features_VilaOlimpica_144);
var lyr_VilaOlimpica_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaOlimpica_144, 
                style: style_VilaOlimpica_144,
                popuplayertitle: 'Vila Olimpica',
                interactive: true,
    title: 'Vila Olimpica<br />\
    <img src="styles/legend/VilaOlimpica_144_0.png" /> APP<br />\
    <img src="styles/legend/VilaOlimpica_144_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VilaOlimpica_144_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/VilaOlimpica_144_3.png" /> LOTES<br />\
    <img src="styles/legend/VilaOlimpica_144_4.png" /> PASSEIO<br />\
    <img src="styles/legend/VilaOlimpica_144_5.png" /> RUAS<br />\
    <img src="styles/legend/VilaOlimpica_144_6.png" /> VIELA<br />' });
var format_VilaOlimpica_145 = new ol.format.GeoJSON();
var features_VilaOlimpica_145 = format_VilaOlimpica_145.readFeatures(json_VilaOlimpica_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaOlimpica_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaOlimpica_145.addFeatures(features_VilaOlimpica_145);
var lyr_VilaOlimpica_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaOlimpica_145, 
                style: style_VilaOlimpica_145,
                popuplayertitle: 'Vila Olimpica',
                interactive: true,
                title: '<img src="styles/legend/VilaOlimpica_145.png" /> Vila Olimpica'
            });
var format_VillaDoratta_146 = new ol.format.GeoJSON();
var features_VillaDoratta_146 = format_VillaDoratta_146.readFeatures(json_VillaDoratta_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaDoratta_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaDoratta_146.addFeatures(features_VillaDoratta_146);
var lyr_VillaDoratta_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaDoratta_146, 
                style: style_VillaDoratta_146,
                popuplayertitle: 'Villa Doratta',
                interactive: true,
    title: 'Villa Doratta<br />\
    <img src="styles/legend/VillaDoratta_146_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaDoratta_146_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaDoratta_146_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaDoratta_146_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/VillaDoratta_146_4.png" /> PASSEIO<br />\
    <img src="styles/legend/VillaDoratta_146_5.png" /> RUAS<br />\
    <img src="styles/legend/VillaDoratta_146_6.png" /> VAGAS DE ESTACIONAMENTO<br />\
    <img src="styles/legend/VillaDoratta_146_7.png" /> VIELA<br />\
    <img src="styles/legend/VillaDoratta_146_8.png" /> APP<br />' });
var format_VillaDoratta_147 = new ol.format.GeoJSON();
var features_VillaDoratta_147 = format_VillaDoratta_147.readFeatures(json_VillaDoratta_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaDoratta_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaDoratta_147.addFeatures(features_VillaDoratta_147);
var lyr_VillaDoratta_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaDoratta_147, 
                style: style_VillaDoratta_147,
                popuplayertitle: 'Villa Doratta',
                interactive: true,
                title: '<img src="styles/legend/VillaDoratta_147.png" /> Villa Doratta'
            });
var format_VillaBella_148 = new ol.format.GeoJSON();
var features_VillaBella_148 = format_VillaBella_148.readFeatures(json_VillaBella_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaBella_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaBella_148.addFeatures(features_VillaBella_148);
var lyr_VillaBella_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaBella_148, 
                style: style_VillaBella_148,
                popuplayertitle: 'Villa Bella',
                interactive: true,
    title: 'Villa Bella<br />\
    <img src="styles/legend/VillaBella_148_0.png" /> APP<br />\
    <img src="styles/legend/VillaBella_148_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaBella_148_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaBella_148_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaBella_148_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VillaBella_148_5.png" /> RUAS<br />\
    <img src="styles/legend/VillaBella_148_6.png" /> PASSEIO<br />' });
var format_VillaBella_149 = new ol.format.GeoJSON();
var features_VillaBella_149 = format_VillaBella_149.readFeatures(json_VillaBella_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaBella_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaBella_149.addFeatures(features_VillaBella_149);
var lyr_VillaBella_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaBella_149, 
                style: style_VillaBella_149,
                popuplayertitle: 'Villa Bella',
                interactive: true,
                title: '<img src="styles/legend/VillaBella_149.png" /> Villa Bella'
            });
var format_Versalhes_150 = new ol.format.GeoJSON();
var features_Versalhes_150 = format_Versalhes_150.readFeatures(json_Versalhes_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Versalhes_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Versalhes_150.addFeatures(features_Versalhes_150);
var lyr_Versalhes_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Versalhes_150, 
                style: style_Versalhes_150,
                popuplayertitle: 'Versalhes',
                interactive: true,
    title: 'Versalhes<br />\
    <img src="styles/legend/Versalhes_150_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/Versalhes_150_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/Versalhes_150_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Versalhes_150_3.png" /> PASSEIO<br />\
    <img src="styles/legend/Versalhes_150_4.png" /> RUAS<br />\
    <img src="styles/legend/Versalhes_150_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_Versalhes_151 = new ol.format.GeoJSON();
var features_Versalhes_151 = format_Versalhes_151.readFeatures(json_Versalhes_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Versalhes_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Versalhes_151.addFeatures(features_Versalhes_151);
var lyr_Versalhes_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Versalhes_151, 
                style: style_Versalhes_151,
                popuplayertitle: 'Versalhes',
                interactive: true,
                title: '<img src="styles/legend/Versalhes_151.png" /> Versalhes'
            });
var format_TorontoResidence_152 = new ol.format.GeoJSON();
var features_TorontoResidence_152 = format_TorontoResidence_152.readFeatures(json_TorontoResidence_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TorontoResidence_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TorontoResidence_152.addFeatures(features_TorontoResidence_152);
var lyr_TorontoResidence_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TorontoResidence_152, 
                style: style_TorontoResidence_152,
                popuplayertitle: 'Toronto Residence',
                interactive: true,
    title: 'Toronto Residence<br />\
    <img src="styles/legend/TorontoResidence_152_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/TorontoResidence_152_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/TorontoResidence_152_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/TorontoResidence_152_3.png" /> PASSEIO<br />\
    <img src="styles/legend/TorontoResidence_152_4.png" /> RUAS<br />\
    <img src="styles/legend/TorontoResidence_152_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_TorontoResidence_153 = new ol.format.GeoJSON();
var features_TorontoResidence_153 = format_TorontoResidence_153.readFeatures(json_TorontoResidence_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TorontoResidence_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TorontoResidence_153.addFeatures(features_TorontoResidence_153);
var lyr_TorontoResidence_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TorontoResidence_153, 
                style: style_TorontoResidence_153,
                popuplayertitle: 'Toronto Residence',
                interactive: true,
                title: '<img src="styles/legend/TorontoResidence_153.png" /> Toronto Residence'
            });
var format_TerraNova_154 = new ol.format.GeoJSON();
var features_TerraNova_154 = format_TerraNova_154.readFeatures(json_TerraNova_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TerraNova_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerraNova_154.addFeatures(features_TerraNova_154);
var lyr_TerraNova_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerraNova_154, 
                style: style_TerraNova_154,
                popuplayertitle: 'Terra Nova',
                interactive: true,
    title: 'Terra Nova<br />\
    <img src="styles/legend/TerraNova_154_0.png" /> APP<br />\
    <img src="styles/legend/TerraNova_154_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/TerraNova_154_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/TerraNova_154_3.png" /> LOTES<br />\
    <img src="styles/legend/TerraNova_154_4.png" /> PASSEIO<br />\
    <img src="styles/legend/TerraNova_154_5.png" /> RUAS<br />' });
var format_TerraNova_155 = new ol.format.GeoJSON();
var features_TerraNova_155 = format_TerraNova_155.readFeatures(json_TerraNova_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TerraNova_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerraNova_155.addFeatures(features_TerraNova_155);
var lyr_TerraNova_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerraNova_155, 
                style: style_TerraNova_155,
                popuplayertitle: 'Terra Nova',
                interactive: true,
                title: '<img src="styles/legend/TerraNova_155.png" /> Terra Nova'
            });
var format_Sonetto_156 = new ol.format.GeoJSON();
var features_Sonetto_156 = format_Sonetto_156.readFeatures(json_Sonetto_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Sonetto_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sonetto_156.addFeatures(features_Sonetto_156);
var lyr_Sonetto_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sonetto_156, 
                style: style_Sonetto_156,
                popuplayertitle: 'Sonetto',
                interactive: true,
                title: '<img src="styles/legend/Sonetto_156.png" /> Sonetto'
            });
var format_Sonetto_157 = new ol.format.GeoJSON();
var features_Sonetto_157 = format_Sonetto_157.readFeatures(json_Sonetto_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Sonetto_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sonetto_157.addFeatures(features_Sonetto_157);
var lyr_Sonetto_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sonetto_157, 
                style: style_Sonetto_157,
                popuplayertitle: 'Sonetto',
                interactive: true,
                title: '<img src="styles/legend/Sonetto_157.png" /> Sonetto'
            });
var format_SMARTFRANCAEIXORESIDENCIAL2_158 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL2_158 = format_SMARTFRANCAEIXORESIDENCIAL2_158.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL2_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL2_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL2_158.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL2_158);
var lyr_SMARTFRANCAEIXORESIDENCIAL2_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL2_158, 
                style: style_SMARTFRANCAEIXORESIDENCIAL2_158,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 2',
                interactive: true,
    title: 'SMART FRANCA - EIXO RESIDENCIAL 2<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_158_0.png" /> APP<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_158_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_158_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_158_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_158_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_158_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_158_6.png" /> PASSEIO<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_158_7.png" /> RUAS<br />' });
var format_SMARTFRANCAEIXORESIDENCIAL2_159 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL2_159 = format_SMARTFRANCAEIXORESIDENCIAL2_159.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL2_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL2_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL2_159.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL2_159);
var lyr_SMARTFRANCAEIXORESIDENCIAL2_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL2_159, 
                style: style_SMARTFRANCAEIXORESIDENCIAL2_159,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 2',
                interactive: true,
                title: '<img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_159.png" /> SMART FRANCA - EIXO RESIDENCIAL 2'
            });
var format_SMARTFRANCAEIXORESIDENCIAL1_160 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL1_160 = format_SMARTFRANCAEIXORESIDENCIAL1_160.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL1_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL1_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL1_160.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL1_160);
var lyr_SMARTFRANCAEIXORESIDENCIAL1_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL1_160, 
                style: style_SMARTFRANCAEIXORESIDENCIAL1_160,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 1',
                interactive: true,
    title: 'SMART FRANCA - EIXO RESIDENCIAL 1<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_160_0.png" /> APP<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_160_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_160_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_160_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_160_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_160_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_160_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_160_7.png" /> PASSEIO<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_160_8.png" /> RUAS<br />' });
var format_SMARTFRANCAEIXORESIDENCIAL1_161 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL1_161 = format_SMARTFRANCAEIXORESIDENCIAL1_161.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL1_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL1_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL1_161.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL1_161);
var lyr_SMARTFRANCAEIXORESIDENCIAL1_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL1_161, 
                style: style_SMARTFRANCAEIXORESIDENCIAL1_161,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 1',
                interactive: true,
                title: '<img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_161.png" /> SMART FRANCA - EIXO RESIDENCIAL 1'
            });
var format_SMARTCITYFRANCAEIXOEMPRESARIAL_162 = new ol.format.GeoJSON();
var features_SMARTCITYFRANCAEIXOEMPRESARIAL_162 = format_SMARTCITYFRANCAEIXOEMPRESARIAL_162.readFeatures(json_SMARTCITYFRANCAEIXOEMPRESARIAL_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_162.addFeatures(features_SMARTCITYFRANCAEIXOEMPRESARIAL_162);
var lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_162, 
                style: style_SMARTCITYFRANCAEIXOEMPRESARIAL_162,
                popuplayertitle: 'SMART CITY FRANCA - EIXO EMPRESARIAL',
                interactive: true,
    title: 'SMART CITY FRANCA - EIXO EMPRESARIAL<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_162_0.png" /> APP<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_162_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_162_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_162_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_162_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_162_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_162_6.png" /> PASSEIO<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_162_7.png" /> RUAS<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_162_8.png" /> VIELA<br />' });
var format_SMARTCITYFRANCAEIXOEMPRESARIAL_163 = new ol.format.GeoJSON();
var features_SMARTCITYFRANCAEIXOEMPRESARIAL_163 = format_SMARTCITYFRANCAEIXOEMPRESARIAL_163.readFeatures(json_SMARTCITYFRANCAEIXOEMPRESARIAL_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_163.addFeatures(features_SMARTCITYFRANCAEIXOEMPRESARIAL_163);
var lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_163, 
                style: style_SMARTCITYFRANCAEIXOEMPRESARIAL_163,
                popuplayertitle: 'SMART CITY FRANCA - EIXO EMPRESARIAL',
                interactive: true,
                title: '<img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_163.png" /> SMART CITY FRANCA - EIXO EMPRESARIAL'
            });
var format_ServidoRamal138kVFranca4Guanabara_164 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_164 = format_ServidoRamal138kVFranca4Guanabara_164.readFeatures(json_ServidoRamal138kVFranca4Guanabara_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_164.addFeatures(features_ServidoRamal138kVFranca4Guanabara_164);
var lyr_ServidoRamal138kVFranca4Guanabara_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_164, 
                style: style_ServidoRamal138kVFranca4Guanabara_164,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_164.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_ServidoRamal138kVFranca4Guanabara_165 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_165 = format_ServidoRamal138kVFranca4Guanabara_165.readFeatures(json_ServidoRamal138kVFranca4Guanabara_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_165.addFeatures(features_ServidoRamal138kVFranca4Guanabara_165);
var lyr_ServidoRamal138kVFranca4Guanabara_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_165, 
                style: style_ServidoRamal138kVFranca4Guanabara_165,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_165.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_SantaLina_166 = new ol.format.GeoJSON();
var features_SantaLina_166 = format_SantaLina_166.readFeatures(json_SantaLina_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantaLina_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaLina_166.addFeatures(features_SantaLina_166);
var lyr_SantaLina_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantaLina_166, 
                style: style_SantaLina_166,
                popuplayertitle: 'Santa Lina',
                interactive: true,
    title: 'Santa Lina<br />\
    <img src="styles/legend/SantaLina_166_0.png" /> LOTES<br />\
    <img src="styles/legend/SantaLina_166_1.png" /> PASSEIO<br />\
    <img src="styles/legend/SantaLina_166_2.png" /> RUAS<br />' });
var format_SantaLina_167 = new ol.format.GeoJSON();
var features_SantaLina_167 = format_SantaLina_167.readFeatures(json_SantaLina_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantaLina_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaLina_167.addFeatures(features_SantaLina_167);
var lyr_SantaLina_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantaLina_167, 
                style: style_SantaLina_167,
                popuplayertitle: 'Santa Lina',
                interactive: true,
                title: '<img src="styles/legend/SantaLina_167.png" /> Santa Lina'
            });
var format_SantAnita_168 = new ol.format.GeoJSON();
var features_SantAnita_168 = format_SantAnita_168.readFeatures(json_SantAnita_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantAnita_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantAnita_168.addFeatures(features_SantAnita_168);
var lyr_SantAnita_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantAnita_168, 
                style: style_SantAnita_168,
                popuplayertitle: 'Sant\'Anita',
                interactive: true,
                title: '<img src="styles/legend/SantAnita_168.png" /> Sant\'Anita'
            });
var format_SantAnita_169 = new ol.format.GeoJSON();
var features_SantAnita_169 = format_SantAnita_169.readFeatures(json_SantAnita_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantAnita_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantAnita_169.addFeatures(features_SantAnita_169);
var lyr_SantAnita_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantAnita_169, 
                style: style_SantAnita_169,
                popuplayertitle: 'Sant\'Anita',
                interactive: true,
                title: '<img src="styles/legend/SantAnita_169.png" /> Sant\'Anita'
            });
var format_RuaAlfioBenedini_170 = new ol.format.GeoJSON();
var features_RuaAlfioBenedini_170 = format_RuaAlfioBenedini_170.readFeatures(json_RuaAlfioBenedini_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RuaAlfioBenedini_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuaAlfioBenedini_170.addFeatures(features_RuaAlfioBenedini_170);
var lyr_RuaAlfioBenedini_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuaAlfioBenedini_170, 
                style: style_RuaAlfioBenedini_170,
                popuplayertitle: 'Rua Alfio Benedini',
                interactive: true,
                title: '<img src="styles/legend/RuaAlfioBenedini_170.png" /> Rua Alfio Benedini'
            });
var format_RuaAlfioBenedini_171 = new ol.format.GeoJSON();
var features_RuaAlfioBenedini_171 = format_RuaAlfioBenedini_171.readFeatures(json_RuaAlfioBenedini_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RuaAlfioBenedini_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuaAlfioBenedini_171.addFeatures(features_RuaAlfioBenedini_171);
var lyr_RuaAlfioBenedini_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuaAlfioBenedini_171, 
                style: style_RuaAlfioBenedini_171,
                popuplayertitle: 'Rua Alfio Benedini',
                interactive: true,
                title: '<img src="styles/legend/RuaAlfioBenedini_171.png" /> Rua Alfio Benedini'
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
var format_ResidencialValeVerde_173 = new ol.format.GeoJSON();
var features_ResidencialValeVerde_173 = format_ResidencialValeVerde_173.readFeatures(json_ResidencialValeVerde_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialValeVerde_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialValeVerde_173.addFeatures(features_ResidencialValeVerde_173);
var lyr_ResidencialValeVerde_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialValeVerde_173, 
                style: style_ResidencialValeVerde_173,
                popuplayertitle: 'Residencial Vale Verde',
                interactive: true,
    title: 'Residencial Vale Verde<br />\
    <img src="styles/legend/ResidencialValeVerde_173_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialValeVerde_173_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialValeVerde_173_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialValeVerde_173_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialValeVerde_173_4.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialValeVerde_173_5.png" /> PASSEIO<br />' });
var format_ResidencialValeVerde_174 = new ol.format.GeoJSON();
var features_ResidencialValeVerde_174 = format_ResidencialValeVerde_174.readFeatures(json_ResidencialValeVerde_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialValeVerde_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialValeVerde_174.addFeatures(features_ResidencialValeVerde_174);
var lyr_ResidencialValeVerde_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialValeVerde_174, 
                style: style_ResidencialValeVerde_174,
                popuplayertitle: 'Residencial Vale Verde',
                interactive: true,
                title: '<img src="styles/legend/ResidencialValeVerde_174.png" /> Residencial Vale Verde'
            });
var format_ResidencialYasminTorres_175 = new ol.format.GeoJSON();
var features_ResidencialYasminTorres_175 = format_ResidencialYasminTorres_175.readFeatures(json_ResidencialYasminTorres_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialYasminTorres_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialYasminTorres_175.addFeatures(features_ResidencialYasminTorres_175);
var lyr_ResidencialYasminTorres_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialYasminTorres_175, 
                style: style_ResidencialYasminTorres_175,
                popuplayertitle: 'Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/ResidencialYasminTorres_175.png" /> Residencial Yasmin Torres'
            });
var format_ResidencialYasminTorres_176 = new ol.format.GeoJSON();
var features_ResidencialYasminTorres_176 = format_ResidencialYasminTorres_176.readFeatures(json_ResidencialYasminTorres_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialYasminTorres_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialYasminTorres_176.addFeatures(features_ResidencialYasminTorres_176);
var lyr_ResidencialYasminTorres_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialYasminTorres_176, 
                style: style_ResidencialYasminTorres_176,
                popuplayertitle: 'Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/ResidencialYasminTorres_176.png" /> Residencial Yasmin Torres'
            });
var format_ResidencialTellini_177 = new ol.format.GeoJSON();
var features_ResidencialTellini_177 = format_ResidencialTellini_177.readFeatures(json_ResidencialTellini_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialTellini_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialTellini_177.addFeatures(features_ResidencialTellini_177);
var lyr_ResidencialTellini_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialTellini_177, 
                style: style_ResidencialTellini_177,
                popuplayertitle: 'Residencial Tellini',
                interactive: true,
    title: 'Residencial Tellini<br />\
    <img src="styles/legend/ResidencialTellini_177_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialTellini_177_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialTellini_177_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialTellini_177_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialTellini_177_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialTellini_177_5.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialTellini_177_6.png" /> VIELA<br />' });
var format_ResidencialTellini_178 = new ol.format.GeoJSON();
var features_ResidencialTellini_178 = format_ResidencialTellini_178.readFeatures(json_ResidencialTellini_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialTellini_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialTellini_178.addFeatures(features_ResidencialTellini_178);
var lyr_ResidencialTellini_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialTellini_178, 
                style: style_ResidencialTellini_178,
                popuplayertitle: 'Residencial Tellini',
                interactive: true,
                title: '<img src="styles/legend/ResidencialTellini_178.png" /> Residencial Tellini'
            });
var format_ResidencialSoCarlosII_179 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosII_179 = format_ResidencialSoCarlosII_179.readFeatures(json_ResidencialSoCarlosII_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosII_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosII_179.addFeatures(features_ResidencialSoCarlosII_179);
var lyr_ResidencialSoCarlosII_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosII_179, 
                style: style_ResidencialSoCarlosII_179,
                popuplayertitle: 'Residencial São Carlos II',
                interactive: true,
    title: 'Residencial São Carlos II<br />\
    <img src="styles/legend/ResidencialSoCarlosII_179_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSoCarlosII_179_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSoCarlosII_179_2.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialSoCarlosII_179_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialSoCarlosII_179_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSoCarlosII_179_5.png" /> RUAS<br />' });
var format_ResidencialSoCarlosII_180 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosII_180 = format_ResidencialSoCarlosII_180.readFeatures(json_ResidencialSoCarlosII_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosII_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosII_180.addFeatures(features_ResidencialSoCarlosII_180);
var lyr_ResidencialSoCarlosII_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosII_180, 
                style: style_ResidencialSoCarlosII_180,
                popuplayertitle: 'Residencial São Carlos II',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSoCarlosII_180.png" /> Residencial São Carlos II'
            });
var format_ResidencialSoCarlosI_181 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosI_181 = format_ResidencialSoCarlosI_181.readFeatures(json_ResidencialSoCarlosI_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosI_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosI_181.addFeatures(features_ResidencialSoCarlosI_181);
var lyr_ResidencialSoCarlosI_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosI_181, 
                style: style_ResidencialSoCarlosI_181,
                popuplayertitle: 'Residencial São Carlos I',
                interactive: true,
    title: 'Residencial São Carlos I<br />\
    <img src="styles/legend/ResidencialSoCarlosI_181_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSoCarlosI_181_1.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialSoCarlosI_181_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSoCarlosI_181_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/ResidencialSoCarlosI_181_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialSoCarlosI_181_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialSoCarlosI_181_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSoCarlosI_181_7.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialSoCarlosI_181_8.png" /> VIELA<br />' });
var format_ResidencialSoCarlosI_182 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosI_182 = format_ResidencialSoCarlosI_182.readFeatures(json_ResidencialSoCarlosI_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosI_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosI_182.addFeatures(features_ResidencialSoCarlosI_182);
var lyr_ResidencialSoCarlosI_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosI_182, 
                style: style_ResidencialSoCarlosI_182,
                popuplayertitle: 'Residencial São Carlos I',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSoCarlosI_182.png" /> Residencial São Carlos I'
            });
var format_ResidencialSantaIns_183 = new ol.format.GeoJSON();
var features_ResidencialSantaIns_183 = format_ResidencialSantaIns_183.readFeatures(json_ResidencialSantaIns_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaIns_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaIns_183.addFeatures(features_ResidencialSantaIns_183);
var lyr_ResidencialSantaIns_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaIns_183, 
                style: style_ResidencialSantaIns_183,
                popuplayertitle: 'Residencial Santa Inês',
                interactive: true,
    title: 'Residencial Santa Inês<br />\
    <img src="styles/legend/ResidencialSantaIns_183_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSantaIns_183_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialSantaIns_183_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSantaIns_183_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialSantaIns_183_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSantaIns_183_5.png" /> RUAS<br />' });
var format_ResidencialSantaIns_184 = new ol.format.GeoJSON();
var features_ResidencialSantaIns_184 = format_ResidencialSantaIns_184.readFeatures(json_ResidencialSantaIns_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaIns_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaIns_184.addFeatures(features_ResidencialSantaIns_184);
var lyr_ResidencialSantaIns_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaIns_184, 
                style: style_ResidencialSantaIns_184,
                popuplayertitle: 'Residencial Santa Inês',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSantaIns_184.png" /> Residencial Santa Inês'
            });
var format_ResidencialSantaF_185 = new ol.format.GeoJSON();
var features_ResidencialSantaF_185 = format_ResidencialSantaF_185.readFeatures(json_ResidencialSantaF_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaF_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaF_185.addFeatures(features_ResidencialSantaF_185);
var lyr_ResidencialSantaF_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaF_185, 
                style: style_ResidencialSantaF_185,
                popuplayertitle: 'Residencial Santa Fé',
                interactive: true,
    title: 'Residencial Santa Fé<br />\
    <img src="styles/legend/ResidencialSantaF_185_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialSantaF_185_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSantaF_185_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSantaF_185_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialSantaF_185_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSantaF_185_5.png" /> RUAS<br />' });
var format_ResidencialSantaF_186 = new ol.format.GeoJSON();
var features_ResidencialSantaF_186 = format_ResidencialSantaF_186.readFeatures(json_ResidencialSantaF_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaF_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaF_186.addFeatures(features_ResidencialSantaF_186);
var lyr_ResidencialSantaF_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaF_186, 
                style: style_ResidencialSantaF_186,
                popuplayertitle: 'Residencial Santa Fé',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSantaF_186.png" /> Residencial Santa Fé'
            });
var format_ResidencialQuintadosOitis_187 = new ol.format.GeoJSON();
var features_ResidencialQuintadosOitis_187 = format_ResidencialQuintadosOitis_187.readFeatures(json_ResidencialQuintadosOitis_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadosOitis_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadosOitis_187.addFeatures(features_ResidencialQuintadosOitis_187);
var lyr_ResidencialQuintadosOitis_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadosOitis_187, 
                style: style_ResidencialQuintadosOitis_187,
                popuplayertitle: 'Residencial Quinta dos Oitis',
                interactive: true,
    title: 'Residencial Quinta dos Oitis<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_187_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_187_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_187_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_187_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_187_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_187_5.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_187_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_187_7.png" /> RUAS<br />' });
var format_ResidencialQuintadosOitis_188 = new ol.format.GeoJSON();
var features_ResidencialQuintadosOitis_188 = format_ResidencialQuintadosOitis_188.readFeatures(json_ResidencialQuintadosOitis_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadosOitis_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadosOitis_188.addFeatures(features_ResidencialQuintadosOitis_188);
var lyr_ResidencialQuintadosOitis_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadosOitis_188, 
                style: style_ResidencialQuintadosOitis_188,
                popuplayertitle: 'Residencial Quinta dos Oitis',
                interactive: true,
                title: '<img src="styles/legend/ResidencialQuintadosOitis_188.png" /> Residencial Quinta dos Oitis'
            });
var format_ResidencialQuintadoSol_189 = new ol.format.GeoJSON();
var features_ResidencialQuintadoSol_189 = format_ResidencialQuintadoSol_189.readFeatures(json_ResidencialQuintadoSol_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadoSol_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadoSol_189.addFeatures(features_ResidencialQuintadoSol_189);
var lyr_ResidencialQuintadoSol_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadoSol_189, 
                style: style_ResidencialQuintadoSol_189,
                popuplayertitle: 'Residencial Quinta do Sol',
                interactive: true,
    title: 'Residencial Quinta do Sol<br />\
    <img src="styles/legend/ResidencialQuintadoSol_189_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialQuintadoSol_189_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialQuintadoSol_189_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialQuintadoSol_189_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialQuintadoSol_189_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialQuintadoSol_189_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialQuintadoSol_189_6.png" /> RUAS<br />' });
var format_ResidencialQuintadoSol_190 = new ol.format.GeoJSON();
var features_ResidencialQuintadoSol_190 = format_ResidencialQuintadoSol_190.readFeatures(json_ResidencialQuintadoSol_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadoSol_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadoSol_190.addFeatures(features_ResidencialQuintadoSol_190);
var lyr_ResidencialQuintadoSol_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadoSol_190, 
                style: style_ResidencialQuintadoSol_190,
                popuplayertitle: 'Residencial Quinta do Sol',
                interactive: true,
                title: '<img src="styles/legend/ResidencialQuintadoSol_190.png" /> Residencial Quinta do Sol'
            });
var format_ResidencialPousoAlegreII_191 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegreII_191 = format_ResidencialPousoAlegreII_191.readFeatures(json_ResidencialPousoAlegreII_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegreII_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegreII_191.addFeatures(features_ResidencialPousoAlegreII_191);
var lyr_ResidencialPousoAlegreII_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegreII_191, 
                style: style_ResidencialPousoAlegreII_191,
                popuplayertitle: 'Residencial Pouso Alegre II',
                interactive: true,
    title: 'Residencial Pouso Alegre II<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_191_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_191_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_191_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_191_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_191_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_191_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_191_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_191_7.png" /> SERVIDAO<br />' });
var format_ResidencialPousoAlegreII_192 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegreII_192 = format_ResidencialPousoAlegreII_192.readFeatures(json_ResidencialPousoAlegreII_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegreII_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegreII_192.addFeatures(features_ResidencialPousoAlegreII_192);
var lyr_ResidencialPousoAlegreII_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegreII_192, 
                style: style_ResidencialPousoAlegreII_192,
                popuplayertitle: 'Residencial Pouso Alegre II',
                interactive: true,
                title: '<img src="styles/legend/ResidencialPousoAlegreII_192.png" /> Residencial Pouso Alegre II'
            });
var format_ResidencialPousoAlegre_193 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegre_193 = format_ResidencialPousoAlegre_193.readFeatures(json_ResidencialPousoAlegre_193, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegre_193 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegre_193.addFeatures(features_ResidencialPousoAlegre_193);
var lyr_ResidencialPousoAlegre_193 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegre_193, 
                style: style_ResidencialPousoAlegre_193,
                popuplayertitle: 'Residencial Pouso Alegre',
                interactive: true,
    title: 'Residencial Pouso Alegre<br />\
    <img src="styles/legend/ResidencialPousoAlegre_193_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialPousoAlegre_193_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialPousoAlegre_193_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialPousoAlegre_193_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialPousoAlegre_193_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialPousoAlegre_193_5.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialPousoAlegre_193_6.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialPousoAlegre_193_7.png" /> VIELA<br />' });
var format_ResidencialPousoAlegre_194 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegre_194 = format_ResidencialPousoAlegre_194.readFeatures(json_ResidencialPousoAlegre_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegre_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegre_194.addFeatures(features_ResidencialPousoAlegre_194);
var lyr_ResidencialPousoAlegre_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegre_194, 
                style: style_ResidencialPousoAlegre_194,
                popuplayertitle: 'Residencial Pouso Alegre',
                interactive: true,
                title: '<img src="styles/legend/ResidencialPousoAlegre_194.png" /> Residencial Pouso Alegre'
            });
var format_ResidencialPiamalim_195 = new ol.format.GeoJSON();
var features_ResidencialPiamalim_195 = format_ResidencialPiamalim_195.readFeatures(json_ResidencialPiamalim_195, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPiamalim_195 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPiamalim_195.addFeatures(features_ResidencialPiamalim_195);
var lyr_ResidencialPiamalim_195 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPiamalim_195, 
                style: style_ResidencialPiamalim_195,
                popuplayertitle: 'Residencial Piamalim',
                interactive: true,
    title: 'Residencial Piamalim<br />\
    <img src="styles/legend/ResidencialPiamalim_195_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialPiamalim_195_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialPiamalim_195_2.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialPiamalim_195_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialPiamalim_195_4.png" /> RUAS<br />' });
var format_ResidencialPiamalim_196 = new ol.format.GeoJSON();
var features_ResidencialPiamalim_196 = format_ResidencialPiamalim_196.readFeatures(json_ResidencialPiamalim_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPiamalim_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPiamalim_196.addFeatures(features_ResidencialPiamalim_196);
var lyr_ResidencialPiamalim_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPiamalim_196, 
                style: style_ResidencialPiamalim_196,
                popuplayertitle: 'Residencial Piamalim',
                interactive: true,
                title: '<img src="styles/legend/ResidencialPiamalim_196.png" /> Residencial Piamalim'
            });
var format_ResidencialParquedosPassaros_197 = new ol.format.GeoJSON();
var features_ResidencialParquedosPassaros_197 = format_ResidencialParquedosPassaros_197.readFeatures(json_ResidencialParquedosPassaros_197, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialParquedosPassaros_197 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialParquedosPassaros_197.addFeatures(features_ResidencialParquedosPassaros_197);
var lyr_ResidencialParquedosPassaros_197 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialParquedosPassaros_197, 
                style: style_ResidencialParquedosPassaros_197,
                popuplayertitle: 'Residencial Parque dos Passaros',
                interactive: true,
    title: 'Residencial Parque dos Passaros<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_197_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_197_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_197_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_197_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_197_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_197_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_197_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_197_7.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_197_8.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_197_9.png" /> VIELA<br />' });
var format_ResidencialParquedosPassaros_198 = new ol.format.GeoJSON();
var features_ResidencialParquedosPassaros_198 = format_ResidencialParquedosPassaros_198.readFeatures(json_ResidencialParquedosPassaros_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialParquedosPassaros_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialParquedosPassaros_198.addFeatures(features_ResidencialParquedosPassaros_198);
var lyr_ResidencialParquedosPassaros_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialParquedosPassaros_198, 
                style: style_ResidencialParquedosPassaros_198,
                popuplayertitle: 'Residencial Parque dos Passaros',
                interactive: true,
                title: '<img src="styles/legend/ResidencialParquedosPassaros_198.png" /> Residencial Parque dos Passaros'
            });
var format_ResicencialNairRetuciII_199 = new ol.format.GeoJSON();
var features_ResicencialNairRetuciII_199 = format_ResicencialNairRetuciII_199.readFeatures(json_ResicencialNairRetuciII_199, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuciII_199 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuciII_199.addFeatures(features_ResicencialNairRetuciII_199);
var lyr_ResicencialNairRetuciII_199 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuciII_199, 
                style: style_ResicencialNairRetuciII_199,
                popuplayertitle: 'Resicencial Nair Retuci II',
                interactive: true,
    title: 'Resicencial Nair Retuci II<br />\
    <img src="styles/legend/ResicencialNairRetuciII_199_0.png" /> APP<br />\
    <img src="styles/legend/ResicencialNairRetuciII_199_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResicencialNairRetuciII_199_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResicencialNairRetuciII_199_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResicencialNairRetuciII_199_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResicencialNairRetuciII_199_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResicencialNairRetuciII_199_6.png" /> RUAS<br />' });
var format_ResicencialNairRetuciII_200 = new ol.format.GeoJSON();
var features_ResicencialNairRetuciII_200 = format_ResicencialNairRetuciII_200.readFeatures(json_ResicencialNairRetuciII_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuciII_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuciII_200.addFeatures(features_ResicencialNairRetuciII_200);
var lyr_ResicencialNairRetuciII_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuciII_200, 
                style: style_ResicencialNairRetuciII_200,
                popuplayertitle: 'Resicencial Nair Retuci II',
                interactive: true,
                title: '<img src="styles/legend/ResicencialNairRetuciII_200.png" /> Resicencial Nair Retuci II'
            });
var format_ResicencialNairRetuci_201 = new ol.format.GeoJSON();
var features_ResicencialNairRetuci_201 = format_ResicencialNairRetuci_201.readFeatures(json_ResicencialNairRetuci_201, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuci_201 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuci_201.addFeatures(features_ResicencialNairRetuci_201);
var lyr_ResicencialNairRetuci_201 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuci_201, 
                style: style_ResicencialNairRetuci_201,
                popuplayertitle: 'Resicencial Nair Retuci',
                interactive: true,
    title: 'Resicencial Nair Retuci<br />\
    <img src="styles/legend/ResicencialNairRetuci_201_0.png" /> APP<br />\
    <img src="styles/legend/ResicencialNairRetuci_201_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResicencialNairRetuci_201_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResicencialNairRetuci_201_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/ResicencialNairRetuci_201_4.png" /> LOTES<br />\
    <img src="styles/legend/ResicencialNairRetuci_201_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResicencialNairRetuci_201_6.png" /> RUAS<br />\
    <img src="styles/legend/ResicencialNairRetuci_201_7.png" /> VIELA<br />' });
var format_ResicencialNairRetuci_202 = new ol.format.GeoJSON();
var features_ResicencialNairRetuci_202 = format_ResicencialNairRetuci_202.readFeatures(json_ResicencialNairRetuci_202, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuci_202 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuci_202.addFeatures(features_ResicencialNairRetuci_202);
var lyr_ResicencialNairRetuci_202 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuci_202, 
                style: style_ResicencialNairRetuci_202,
                popuplayertitle: 'Resicencial Nair Retuci',
                interactive: true,
                title: '<img src="styles/legend/ResicencialNairRetuci_202.png" /> Resicencial Nair Retuci'
            });
var format_ResidencialMoradadoBosque_203 = new ol.format.GeoJSON();
var features_ResidencialMoradadoBosque_203 = format_ResidencialMoradadoBosque_203.readFeatures(json_ResidencialMoradadoBosque_203, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMoradadoBosque_203 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMoradadoBosque_203.addFeatures(features_ResidencialMoradadoBosque_203);
var lyr_ResidencialMoradadoBosque_203 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMoradadoBosque_203, 
                style: style_ResidencialMoradadoBosque_203,
                popuplayertitle: 'Residencial Morada do Bosque',
                interactive: true,
    title: 'Residencial Morada do Bosque<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_203_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_203_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_203_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_203_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_203_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_203_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_203_6.png" /> RUAS<br />' });
var format_ResidencialMoradadoBosque_204 = new ol.format.GeoJSON();
var features_ResidencialMoradadoBosque_204 = format_ResidencialMoradadoBosque_204.readFeatures(json_ResidencialMoradadoBosque_204, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMoradadoBosque_204 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMoradadoBosque_204.addFeatures(features_ResidencialMoradadoBosque_204);
var lyr_ResidencialMoradadoBosque_204 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMoradadoBosque_204, 
                style: style_ResidencialMoradadoBosque_204,
                popuplayertitle: 'Residencial Morada do Bosque',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMoradadoBosque_204.png" /> Residencial Morada do Bosque'
            });
var format_ResidencialMarthaHelena_205 = new ol.format.GeoJSON();
var features_ResidencialMarthaHelena_205 = format_ResidencialMarthaHelena_205.readFeatures(json_ResidencialMarthaHelena_205, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarthaHelena_205 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarthaHelena_205.addFeatures(features_ResidencialMarthaHelena_205);
var lyr_ResidencialMarthaHelena_205 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarthaHelena_205, 
                style: style_ResidencialMarthaHelena_205,
                popuplayertitle: 'Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarthaHelena_205.png" /> Residencial Martha Helena'
            });
var format_ResidencialMarthaHelena_206 = new ol.format.GeoJSON();
var features_ResidencialMarthaHelena_206 = format_ResidencialMarthaHelena_206.readFeatures(json_ResidencialMarthaHelena_206, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarthaHelena_206 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarthaHelena_206.addFeatures(features_ResidencialMarthaHelena_206);
var lyr_ResidencialMarthaHelena_206 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarthaHelena_206, 
                style: style_ResidencialMarthaHelena_206,
                popuplayertitle: 'Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarthaHelena_206.png" /> Residencial Martha Helena'
            });
var format_ResidencialMarioTasso_207 = new ol.format.GeoJSON();
var features_ResidencialMarioTasso_207 = format_ResidencialMarioTasso_207.readFeatures(json_ResidencialMarioTasso_207, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarioTasso_207 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarioTasso_207.addFeatures(features_ResidencialMarioTasso_207);
var lyr_ResidencialMarioTasso_207 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarioTasso_207, 
                style: style_ResidencialMarioTasso_207,
                popuplayertitle: 'Residencial Mario Tasso',
                interactive: true,
    title: 'Residencial Mario Tasso<br />\
    <img src="styles/legend/ResidencialMarioTasso_207_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialMarioTasso_207_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialMarioTasso_207_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialMarioTasso_207_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialMarioTasso_207_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialMarioTasso_207_5.png" /> RUAS<br />' });
var format_ResidencialMarioTasso_208 = new ol.format.GeoJSON();
var features_ResidencialMarioTasso_208 = format_ResidencialMarioTasso_208.readFeatures(json_ResidencialMarioTasso_208, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarioTasso_208 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarioTasso_208.addFeatures(features_ResidencialMarioTasso_208);
var lyr_ResidencialMarioTasso_208 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarioTasso_208, 
                style: style_ResidencialMarioTasso_208,
                popuplayertitle: 'Residencial Mario Tasso',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarioTasso_208.png" /> Residencial Mario Tasso'
            });
var format_ResidencialMarianaAlarcon_209 = new ol.format.GeoJSON();
var features_ResidencialMarianaAlarcon_209 = format_ResidencialMarianaAlarcon_209.readFeatures(json_ResidencialMarianaAlarcon_209, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarianaAlarcon_209 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarianaAlarcon_209.addFeatures(features_ResidencialMarianaAlarcon_209);
var lyr_ResidencialMarianaAlarcon_209 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarianaAlarcon_209, 
                style: style_ResidencialMarianaAlarcon_209,
                popuplayertitle: 'Residencial Mariana Alarcon ',
                interactive: true,
    title: 'Residencial Mariana Alarcon <br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_209_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_209_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_209_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_209_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_209_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_209_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_209_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_209_7.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_209_8.png" /> VIELA<br />' });
var format_ResidencialMarianaAlarcon_210 = new ol.format.GeoJSON();
var features_ResidencialMarianaAlarcon_210 = format_ResidencialMarianaAlarcon_210.readFeatures(json_ResidencialMarianaAlarcon_210, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarianaAlarcon_210 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarianaAlarcon_210.addFeatures(features_ResidencialMarianaAlarcon_210);
var lyr_ResidencialMarianaAlarcon_210 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarianaAlarcon_210, 
                style: style_ResidencialMarianaAlarcon_210,
                popuplayertitle: 'Residencial Mariana Alarcon ',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarianaAlarcon_210.png" /> Residencial Mariana Alarcon '
            });
var format_ResidencialJardimCanada_211 = new ol.format.GeoJSON();
var features_ResidencialJardimCanada_211 = format_ResidencialJardimCanada_211.readFeatures(json_ResidencialJardimCanada_211, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJardimCanada_211 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJardimCanada_211.addFeatures(features_ResidencialJardimCanada_211);
var lyr_ResidencialJardimCanada_211 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJardimCanada_211, 
                style: style_ResidencialJardimCanada_211,
                popuplayertitle: 'Residencial Jardim Canada',
                interactive: true,
                title: '<img src="styles/legend/ResidencialJardimCanada_211.png" /> Residencial Jardim Canada'
            });
var format_ResidencialJardimCanada_212 = new ol.format.GeoJSON();
var features_ResidencialJardimCanada_212 = format_ResidencialJardimCanada_212.readFeatures(json_ResidencialJardimCanada_212, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJardimCanada_212 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJardimCanada_212.addFeatures(features_ResidencialJardimCanada_212);
var lyr_ResidencialJardimCanada_212 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJardimCanada_212, 
                style: style_ResidencialJardimCanada_212,
                popuplayertitle: 'Residencial Jardim Canada',
                interactive: true,
                title: '<img src="styles/legend/ResidencialJardimCanada_212.png" /> Residencial Jardim Canada'
            });
var format_ResidencialJabuticabeiras_213 = new ol.format.GeoJSON();
var features_ResidencialJabuticabeiras_213 = format_ResidencialJabuticabeiras_213.readFeatures(json_ResidencialJabuticabeiras_213, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJabuticabeiras_213 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJabuticabeiras_213.addFeatures(features_ResidencialJabuticabeiras_213);
var lyr_ResidencialJabuticabeiras_213 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJabuticabeiras_213, 
                style: style_ResidencialJabuticabeiras_213,
                popuplayertitle: 'Residencial Jabuticabeiras',
                interactive: true,
    title: 'Residencial Jabuticabeiras<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_213_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_213_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_213_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_213_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_213_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_213_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_213_6.png" /> RUAS<br />' });
var format_ResidencialJabuticabeiras_214 = new ol.format.GeoJSON();
var features_ResidencialJabuticabeiras_214 = format_ResidencialJabuticabeiras_214.readFeatures(json_ResidencialJabuticabeiras_214, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJabuticabeiras_214 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJabuticabeiras_214.addFeatures(features_ResidencialJabuticabeiras_214);
var lyr_ResidencialJabuticabeiras_214 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJabuticabeiras_214, 
                style: style_ResidencialJabuticabeiras_214,
                popuplayertitle: 'Residencial Jabuticabeiras',
                interactive: true,
                title: '<img src="styles/legend/ResidencialJabuticabeiras_214.png" /> Residencial Jabuticabeiras'
            });
var format_ResidencialGramadosII_215 = new ol.format.GeoJSON();
var features_ResidencialGramadosII_215 = format_ResidencialGramadosII_215.readFeatures(json_ResidencialGramadosII_215, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGramadosII_215 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGramadosII_215.addFeatures(features_ResidencialGramadosII_215);
var lyr_ResidencialGramadosII_215 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGramadosII_215, 
                style: style_ResidencialGramadosII_215,
                popuplayertitle: 'Residencial Gramados II',
                interactive: true,
    title: 'Residencial Gramados II<br />\
    <img src="styles/legend/ResidencialGramadosII_215_0.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialGramadosII_215_1.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialGramadosII_215_2.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialGramadosII_215_3.png" /> RUAS<br />' });
var format_ResidencialGramadosII_216 = new ol.format.GeoJSON();
var features_ResidencialGramadosII_216 = format_ResidencialGramadosII_216.readFeatures(json_ResidencialGramadosII_216, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGramadosII_216 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGramadosII_216.addFeatures(features_ResidencialGramadosII_216);
var lyr_ResidencialGramadosII_216 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGramadosII_216, 
                style: style_ResidencialGramadosII_216,
                popuplayertitle: 'Residencial Gramados II',
                interactive: true,
                title: '<img src="styles/legend/ResidencialGramadosII_216.png" /> Residencial Gramados II'
            });
var format_ResidencialGramados_217 = new ol.format.GeoJSON();
var features_ResidencialGramados_217 = format_ResidencialGramados_217.readFeatures(json_ResidencialGramados_217, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGramados_217 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGramados_217.addFeatures(features_ResidencialGramados_217);
var lyr_ResidencialGramados_217 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGramados_217, 
                style: style_ResidencialGramados_217,
                popuplayertitle: 'Residencial Gramados',
                interactive: true,
    title: 'Residencial Gramados<br />\
    <img src="styles/legend/ResidencialGramados_217_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialGramados_217_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialGramados_217_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialGramados_217_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialGramados_217_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialGramados_217_5.png" /> RUAS<br />' });
var format_ResidencialGramados_218 = new ol.format.GeoJSON();
var features_ResidencialGramados_218 = format_ResidencialGramados_218.readFeatures(json_ResidencialGramados_218, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGramados_218 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGramados_218.addFeatures(features_ResidencialGramados_218);
var lyr_ResidencialGramados_218 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGramados_218, 
                style: style_ResidencialGramados_218,
                popuplayertitle: 'Residencial Gramados',
                interactive: true,
                title: '<img src="styles/legend/ResidencialGramados_218.png" /> Residencial Gramados'
            });
var format_ResidencialGaia_219 = new ol.format.GeoJSON();
var features_ResidencialGaia_219 = format_ResidencialGaia_219.readFeatures(json_ResidencialGaia_219, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGaia_219 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGaia_219.addFeatures(features_ResidencialGaia_219);
var lyr_ResidencialGaia_219 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGaia_219, 
                style: style_ResidencialGaia_219,
                popuplayertitle: 'Residencial Gaia',
                interactive: true,
    title: 'Residencial Gaia<br />\
    <img src="styles/legend/ResidencialGaia_219_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialGaia_219_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialGaia_219_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialGaia_219_3.png" /> DESMEMBRAMENTO DOACAO DESAPROPRIACAO<br />\
    <img src="styles/legend/ResidencialGaia_219_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialGaia_219_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialGaia_219_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialGaia_219_7.png" /> VIELA<br />' });
var format_ResidencialGaia_220 = new ol.format.GeoJSON();
var features_ResidencialGaia_220 = format_ResidencialGaia_220.readFeatures(json_ResidencialGaia_220, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGaia_220 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGaia_220.addFeatures(features_ResidencialGaia_220);
var lyr_ResidencialGaia_220 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGaia_220, 
                style: style_ResidencialGaia_220,
                popuplayertitle: 'Residencial Gaia',
                interactive: true,
                title: '<img src="styles/legend/ResidencialGaia_220.png" /> Residencial Gaia'
            });
var format_ResidencialFrutuoso_221 = new ol.format.GeoJSON();
var features_ResidencialFrutuoso_221 = format_ResidencialFrutuoso_221.readFeatures(json_ResidencialFrutuoso_221, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialFrutuoso_221 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialFrutuoso_221.addFeatures(features_ResidencialFrutuoso_221);
var lyr_ResidencialFrutuoso_221 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialFrutuoso_221, 
                style: style_ResidencialFrutuoso_221,
                popuplayertitle: 'Residencial Frutuoso',
                interactive: true,
    title: 'Residencial Frutuoso<br />\
    <img src="styles/legend/ResidencialFrutuoso_221_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialFrutuoso_221_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialFrutuoso_221_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialFrutuoso_221_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialFrutuoso_221_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialFrutuoso_221_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialFrutuoso_221_6.png" /> RUAS<br />' });
var format_ResidencialFrutuoso_222 = new ol.format.GeoJSON();
var features_ResidencialFrutuoso_222 = format_ResidencialFrutuoso_222.readFeatures(json_ResidencialFrutuoso_222, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialFrutuoso_222 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialFrutuoso_222.addFeatures(features_ResidencialFrutuoso_222);
var lyr_ResidencialFrutuoso_222 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialFrutuoso_222, 
                style: style_ResidencialFrutuoso_222,
                popuplayertitle: 'Residencial Frutuoso',
                interactive: true,
                title: '<img src="styles/legend/ResidencialFrutuoso_222.png" /> Residencial Frutuoso'
            });
var format_ResidencialFaggioni_223 = new ol.format.GeoJSON();
var features_ResidencialFaggioni_223 = format_ResidencialFaggioni_223.readFeatures(json_ResidencialFaggioni_223, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialFaggioni_223 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialFaggioni_223.addFeatures(features_ResidencialFaggioni_223);
var lyr_ResidencialFaggioni_223 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialFaggioni_223, 
                style: style_ResidencialFaggioni_223,
                popuplayertitle: 'Residencial Faggioni',
                interactive: true,
    title: 'Residencial Faggioni<br />\
    <img src="styles/legend/ResidencialFaggioni_223_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialFaggioni_223_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialFaggioni_223_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialFaggioni_223_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialFaggioni_223_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialFaggioni_223_5.png" /> RUAS<br />' });
var format_ResidencialFaggioni_224 = new ol.format.GeoJSON();
var features_ResidencialFaggioni_224 = format_ResidencialFaggioni_224.readFeatures(json_ResidencialFaggioni_224, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialFaggioni_224 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialFaggioni_224.addFeatures(features_ResidencialFaggioni_224);
var lyr_ResidencialFaggioni_224 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialFaggioni_224, 
                style: style_ResidencialFaggioni_224,
                popuplayertitle: 'Residencial Faggioni',
                interactive: true,
                title: '<img src="styles/legend/ResidencialFaggioni_224.png" /> Residencial Faggioni'
            });
var format_ResidencialEssenza_225 = new ol.format.GeoJSON();
var features_ResidencialEssenza_225 = format_ResidencialEssenza_225.readFeatures(json_ResidencialEssenza_225, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialEssenza_225 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialEssenza_225.addFeatures(features_ResidencialEssenza_225);
var lyr_ResidencialEssenza_225 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialEssenza_225, 
                style: style_ResidencialEssenza_225,
                popuplayertitle: 'Residencial Essenza',
                interactive: true,
    title: 'Residencial Essenza<br />\
    <img src="styles/legend/ResidencialEssenza_225_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialEssenza_225_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialEssenza_225_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialEssenza_225_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialEssenza_225_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialEssenza_225_5.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialEssenza_225_6.png" /> PASSEIO<br />' });
var format_ResidencialEssenza_226 = new ol.format.GeoJSON();
var features_ResidencialEssenza_226 = format_ResidencialEssenza_226.readFeatures(json_ResidencialEssenza_226, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialEssenza_226 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialEssenza_226.addFeatures(features_ResidencialEssenza_226);
var lyr_ResidencialEssenza_226 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialEssenza_226, 
                style: style_ResidencialEssenza_226,
                popuplayertitle: 'Residencial Essenza',
                interactive: true,
                title: '<img src="styles/legend/ResidencialEssenza_226.png" /> Residencial Essenza'
            });
var format_ResidencialDomingosJardini_227 = new ol.format.GeoJSON();
var features_ResidencialDomingosJardini_227 = format_ResidencialDomingosJardini_227.readFeatures(json_ResidencialDomingosJardini_227, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialDomingosJardini_227 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialDomingosJardini_227.addFeatures(features_ResidencialDomingosJardini_227);
var lyr_ResidencialDomingosJardini_227 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialDomingosJardini_227, 
                style: style_ResidencialDomingosJardini_227,
                popuplayertitle: 'Residencial Domingos Jardini',
                interactive: true,
    title: 'Residencial Domingos Jardini<br />\
    <img src="styles/legend/ResidencialDomingosJardini_227_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialDomingosJardini_227_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialDomingosJardini_227_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialDomingosJardini_227_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialDomingosJardini_227_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialDomingosJardini_227_5.png" /> RUAS<br />' });
var format_ResidencialDomingosJardini_228 = new ol.format.GeoJSON();
var features_ResidencialDomingosJardini_228 = format_ResidencialDomingosJardini_228.readFeatures(json_ResidencialDomingosJardini_228, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialDomingosJardini_228 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialDomingosJardini_228.addFeatures(features_ResidencialDomingosJardini_228);
var lyr_ResidencialDomingosJardini_228 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialDomingosJardini_228, 
                style: style_ResidencialDomingosJardini_228,
                popuplayertitle: 'Residencial Domingos Jardini',
                interactive: true,
                title: '<img src="styles/legend/ResidencialDomingosJardini_228.png" /> Residencial Domingos Jardini'
            });
var format_ResidencialCintraAlves_229 = new ol.format.GeoJSON();
var features_ResidencialCintraAlves_229 = format_ResidencialCintraAlves_229.readFeatures(json_ResidencialCintraAlves_229, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialCintraAlves_229 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialCintraAlves_229.addFeatures(features_ResidencialCintraAlves_229);
var lyr_ResidencialCintraAlves_229 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialCintraAlves_229, 
                style: style_ResidencialCintraAlves_229,
                popuplayertitle: 'Residencial Cintra Alves',
                interactive: true,
    title: 'Residencial Cintra Alves<br />\
    <img src="styles/legend/ResidencialCintraAlves_229_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialCintraAlves_229_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialCintraAlves_229_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialCintraAlves_229_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialCintraAlves_229_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialCintraAlves_229_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialCintraAlves_229_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialCintraAlves_229_7.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialCintraAlves_229_8.png" /> VIELA<br />' });
var format_ResidencialCintraAlves_230 = new ol.format.GeoJSON();
var features_ResidencialCintraAlves_230 = format_ResidencialCintraAlves_230.readFeatures(json_ResidencialCintraAlves_230, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialCintraAlves_230 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialCintraAlves_230.addFeatures(features_ResidencialCintraAlves_230);
var lyr_ResidencialCintraAlves_230 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialCintraAlves_230, 
                style: style_ResidencialCintraAlves_230,
                popuplayertitle: 'Residencial Cintra Alves',
                interactive: true,
                title: '<img src="styles/legend/ResidencialCintraAlves_230.png" /> Residencial Cintra Alves'
            });
var format_ResidencialBoaVista_231 = new ol.format.GeoJSON();
var features_ResidencialBoaVista_231 = format_ResidencialBoaVista_231.readFeatures(json_ResidencialBoaVista_231, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialBoaVista_231 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialBoaVista_231.addFeatures(features_ResidencialBoaVista_231);
var lyr_ResidencialBoaVista_231 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialBoaVista_231, 
                style: style_ResidencialBoaVista_231,
                popuplayertitle: 'Residencial Boa Vista',
                interactive: true,
    title: 'Residencial Boa Vista<br />\
    <img src="styles/legend/ResidencialBoaVista_231_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialBoaVista_231_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialBoaVista_231_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialBoaVista_231_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialBoaVista_231_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialBoaVista_231_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialBoaVista_231_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialBoaVista_231_7.png" /> RUAS<br />' });
var format_ResidencialBoaVista_232 = new ol.format.GeoJSON();
var features_ResidencialBoaVista_232 = format_ResidencialBoaVista_232.readFeatures(json_ResidencialBoaVista_232, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialBoaVista_232 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialBoaVista_232.addFeatures(features_ResidencialBoaVista_232);
var lyr_ResidencialBoaVista_232 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialBoaVista_232, 
                style: style_ResidencialBoaVista_232,
                popuplayertitle: 'Residencial Boa Vista',
                interactive: true,
                title: '<img src="styles/legend/ResidencialBoaVista_232.png" /> Residencial Boa Vista'
            });
var format_ResidencialAltodaFazenda_233 = new ol.format.GeoJSON();
var features_ResidencialAltodaFazenda_233 = format_ResidencialAltodaFazenda_233.readFeatures(json_ResidencialAltodaFazenda_233, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialAltodaFazenda_233 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAltodaFazenda_233.addFeatures(features_ResidencialAltodaFazenda_233);
var lyr_ResidencialAltodaFazenda_233 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAltodaFazenda_233, 
                style: style_ResidencialAltodaFazenda_233,
                popuplayertitle: 'Residencial Alto da Fazenda',
                interactive: true,
    title: 'Residencial Alto da Fazenda<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_233_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_233_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_233_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_233_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_233_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_233_5.png" /> RUAS<br />' });
var format_ResidencialAltodaFazenda_234 = new ol.format.GeoJSON();
var features_ResidencialAltodaFazenda_234 = format_ResidencialAltodaFazenda_234.readFeatures(json_ResidencialAltodaFazenda_234, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialAltodaFazenda_234 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAltodaFazenda_234.addFeatures(features_ResidencialAltodaFazenda_234);
var lyr_ResidencialAltodaFazenda_234 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAltodaFazenda_234, 
                style: style_ResidencialAltodaFazenda_234,
                popuplayertitle: 'Residencial Alto da Fazenda',
                interactive: true,
                title: '<img src="styles/legend/ResidencialAltodaFazenda_234.png" /> Residencial Alto da Fazenda'
            });
var format_ResidencialAnaHelena_235 = new ol.format.GeoJSON();
var features_ResidencialAnaHelena_235 = format_ResidencialAnaHelena_235.readFeatures(json_ResidencialAnaHelena_235, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialAnaHelena_235 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAnaHelena_235.addFeatures(features_ResidencialAnaHelena_235);
var lyr_ResidencialAnaHelena_235 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAnaHelena_235, 
                style: style_ResidencialAnaHelena_235,
                popuplayertitle: 'Residencial Ana Helena',
                interactive: true,
    title: 'Residencial Ana Helena<br />\
    <img src="styles/legend/ResidencialAnaHelena_235_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialAnaHelena_235_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialAnaHelena_235_2.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialAnaHelena_235_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialAnaHelena_235_4.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialAnaHelena_235_5.png" /> VIELA<br />' });
var format_ResidencialAnaHelena_236 = new ol.format.GeoJSON();
var features_ResidencialAnaHelena_236 = format_ResidencialAnaHelena_236.readFeatures(json_ResidencialAnaHelena_236, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialAnaHelena_236 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAnaHelena_236.addFeatures(features_ResidencialAnaHelena_236);
var lyr_ResidencialAnaHelena_236 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAnaHelena_236, 
                style: style_ResidencialAnaHelena_236,
                popuplayertitle: 'Residencial Ana Helena',
                interactive: true,
                title: '<img src="styles/legend/ResidencialAnaHelena_236.png" /> Residencial Ana Helena'
            });
var format_ReservaAbaete_237 = new ol.format.GeoJSON();
var features_ReservaAbaete_237 = format_ReservaAbaete_237.readFeatures(json_ReservaAbaete_237, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ReservaAbaete_237 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservaAbaete_237.addFeatures(features_ReservaAbaete_237);
var lyr_ReservaAbaete_237 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservaAbaete_237, 
                style: style_ReservaAbaete_237,
                popuplayertitle: 'Reserva Abaete',
                interactive: true,
    title: 'Reserva Abaete<br />\
    <img src="styles/legend/ReservaAbaete_237_0.png" /> APP<br />\
    <img src="styles/legend/ReservaAbaete_237_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ReservaAbaete_237_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ReservaAbaete_237_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ReservaAbaete_237_4.png" /> LOTES<br />\
    <img src="styles/legend/ReservaAbaete_237_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ReservaAbaete_237_6.png" /> RUAS<br />' });
var format_ReservaAbaete_238 = new ol.format.GeoJSON();
var features_ReservaAbaete_238 = format_ReservaAbaete_238.readFeatures(json_ReservaAbaete_238, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ReservaAbaete_238 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservaAbaete_238.addFeatures(features_ReservaAbaete_238);
var lyr_ReservaAbaete_238 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservaAbaete_238, 
                style: style_ReservaAbaete_238,
                popuplayertitle: 'Reserva Abaete',
                interactive: true,
                title: '<img src="styles/legend/ReservaAbaete_238.png" /> Reserva Abaete'
            });
var format_RecantoMeneghetti_239 = new ol.format.GeoJSON();
var features_RecantoMeneghetti_239 = format_RecantoMeneghetti_239.readFeatures(json_RecantoMeneghetti_239, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoMeneghetti_239 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoMeneghetti_239.addFeatures(features_RecantoMeneghetti_239);
var lyr_RecantoMeneghetti_239 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoMeneghetti_239, 
                style: style_RecantoMeneghetti_239,
                popuplayertitle: 'Recanto Meneghetti',
                interactive: true,
    title: 'Recanto Meneghetti<br />\
    <img src="styles/legend/RecantoMeneghetti_239_0.png" /> APP<br />\
    <img src="styles/legend/RecantoMeneghetti_239_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RecantoMeneghetti_239_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/RecantoMeneghetti_239_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/RecantoMeneghetti_239_4.png" /> CICLOVIA<br />\
    <img src="styles/legend/RecantoMeneghetti_239_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/RecantoMeneghetti_239_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/RecantoMeneghetti_239_7.png" /> PASSEIO<br />\
    <img src="styles/legend/RecantoMeneghetti_239_8.png" /> RUAS<br />\
    <img src="styles/legend/RecantoMeneghetti_239_9.png" /> VIELA<br />' });
var format_RecantoMeneghetti_240 = new ol.format.GeoJSON();
var features_RecantoMeneghetti_240 = format_RecantoMeneghetti_240.readFeatures(json_RecantoMeneghetti_240, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoMeneghetti_240 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoMeneghetti_240.addFeatures(features_RecantoMeneghetti_240);
var lyr_RecantoMeneghetti_240 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoMeneghetti_240, 
                style: style_RecantoMeneghetti_240,
                popuplayertitle: 'Recanto Meneghetti',
                interactive: true,
                title: '<img src="styles/legend/RecantoMeneghetti_240.png" /> Recanto Meneghetti'
            });
var format_Quadra18VilaExposio_241 = new ol.format.GeoJSON();
var features_Quadra18VilaExposio_241 = format_Quadra18VilaExposio_241.readFeatures(json_Quadra18VilaExposio_241, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Quadra18VilaExposio_241 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quadra18VilaExposio_241.addFeatures(features_Quadra18VilaExposio_241);
var lyr_Quadra18VilaExposio_241 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quadra18VilaExposio_241, 
                style: style_Quadra18VilaExposio_241,
                popuplayertitle: 'Quadra 18 Vila Exposição',
                interactive: true,
    title: 'Quadra 18 Vila Exposição<br />\
    <img src="styles/legend/Quadra18VilaExposio_241_0.png" /> LOTES<br />\
    <img src="styles/legend/Quadra18VilaExposio_241_1.png" /> RUAS<br />\
    <img src="styles/legend/Quadra18VilaExposio_241_2.png" /> PASSEIO<br />' });
var format_Quadra18VilaExposio_242 = new ol.format.GeoJSON();
var features_Quadra18VilaExposio_242 = format_Quadra18VilaExposio_242.readFeatures(json_Quadra18VilaExposio_242, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Quadra18VilaExposio_242 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quadra18VilaExposio_242.addFeatures(features_Quadra18VilaExposio_242);
var lyr_Quadra18VilaExposio_242 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quadra18VilaExposio_242, 
                style: style_Quadra18VilaExposio_242,
                popuplayertitle: 'Quadra 18 Vila Exposição',
                interactive: true,
                title: '<img src="styles/legend/Quadra18VilaExposio_242.png" /> Quadra 18 Vila Exposição'
            });
var format_ProlongamentoSamelPark_243 = new ol.format.GeoJSON();
var features_ProlongamentoSamelPark_243 = format_ProlongamentoSamelPark_243.readFeatures(json_ProlongamentoSamelPark_243, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ProlongamentoSamelPark_243 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProlongamentoSamelPark_243.addFeatures(features_ProlongamentoSamelPark_243);
var lyr_ProlongamentoSamelPark_243 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProlongamentoSamelPark_243, 
                style: style_ProlongamentoSamelPark_243,
                popuplayertitle: 'Prolongamento Samel Park',
                interactive: true,
    title: 'Prolongamento Samel Park<br />\
    <img src="styles/legend/ProlongamentoSamelPark_243_0.png" /> APP<br />\
    <img src="styles/legend/ProlongamentoSamelPark_243_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ProlongamentoSamelPark_243_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ProlongamentoSamelPark_243_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ProlongamentoSamelPark_243_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ProlongamentoSamelPark_243_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ProlongamentoSamelPark_243_6.png" /> RUAS<br />\
    <img src="styles/legend/ProlongamentoSamelPark_243_7.png" /> PASSEIO<br />' });
var format_ProlongamentoSamelPark_244 = new ol.format.GeoJSON();
var features_ProlongamentoSamelPark_244 = format_ProlongamentoSamelPark_244.readFeatures(json_ProlongamentoSamelPark_244, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ProlongamentoSamelPark_244 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProlongamentoSamelPark_244.addFeatures(features_ProlongamentoSamelPark_244);
var lyr_ProlongamentoSamelPark_244 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProlongamentoSamelPark_244, 
                style: style_ProlongamentoSamelPark_244,
                popuplayertitle: 'Prolongamento Samel Park',
                interactive: true,
                title: '<img src="styles/legend/ProlongamentoSamelPark_244.png" /> Prolongamento Samel Park'
            });
var format_ParqueVillaLobos_245 = new ol.format.GeoJSON();
var features_ParqueVillaLobos_245 = format_ParqueVillaLobos_245.readFeatures(json_ParqueVillaLobos_245, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueVillaLobos_245 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueVillaLobos_245.addFeatures(features_ParqueVillaLobos_245);
var lyr_ParqueVillaLobos_245 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueVillaLobos_245, 
                style: style_ParqueVillaLobos_245,
                popuplayertitle: 'Parque Villa-Lobos',
                interactive: true,
    title: 'Parque Villa-Lobos<br />\
    <img src="styles/legend/ParqueVillaLobos_245_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueVillaLobos_245_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueVillaLobos_245_2.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/ParqueVillaLobos_245_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParqueVillaLobos_245_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueVillaLobos_245_5.png" /> RUAS<br />' });
var format_ParqueVillaLobos_246 = new ol.format.GeoJSON();
var features_ParqueVillaLobos_246 = format_ParqueVillaLobos_246.readFeatures(json_ParqueVillaLobos_246, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueVillaLobos_246 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueVillaLobos_246.addFeatures(features_ParqueVillaLobos_246);
var lyr_ParqueVillaLobos_246 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueVillaLobos_246, 
                style: style_ParqueVillaLobos_246,
                popuplayertitle: 'Parque Villa-Lobos',
                interactive: true,
                title: '<img src="styles/legend/ParqueVillaLobos_246.png" /> Parque Villa-Lobos'
            });
var format_ParquePalmeiraImperial_247 = new ol.format.GeoJSON();
var features_ParquePalmeiraImperial_247 = format_ParquePalmeiraImperial_247.readFeatures(json_ParquePalmeiraImperial_247, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquePalmeiraImperial_247 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquePalmeiraImperial_247.addFeatures(features_ParquePalmeiraImperial_247);
var lyr_ParquePalmeiraImperial_247 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquePalmeiraImperial_247, 
                style: style_ParquePalmeiraImperial_247,
                popuplayertitle: 'Parque Palmeira Imperial',
                interactive: true,
    title: 'Parque Palmeira Imperial<br />\
    <img src="styles/legend/ParquePalmeiraImperial_247_0.png" /> APP<br />\
    <img src="styles/legend/ParquePalmeiraImperial_247_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParquePalmeiraImperial_247_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParquePalmeiraImperial_247_3.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/ParquePalmeiraImperial_247_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParquePalmeiraImperial_247_5.png" /> LOTES<br />\
    <img src="styles/legend/ParquePalmeiraImperial_247_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ParquePalmeiraImperial_247_7.png" /> RUAS<br />' });
var format_ParquePalmeiraImperial_248 = new ol.format.GeoJSON();
var features_ParquePalmeiraImperial_248 = format_ParquePalmeiraImperial_248.readFeatures(json_ParquePalmeiraImperial_248, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquePalmeiraImperial_248 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquePalmeiraImperial_248.addFeatures(features_ParquePalmeiraImperial_248);
var lyr_ParquePalmeiraImperial_248 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquePalmeiraImperial_248, 
                style: style_ParquePalmeiraImperial_248,
                popuplayertitle: 'Parque Palmeira Imperial',
                interactive: true,
                title: '<img src="styles/legend/ParquePalmeiraImperial_248.png" /> Parque Palmeira Imperial'
            });
var format_ParqueJacarand_249 = new ol.format.GeoJSON();
var features_ParqueJacarand_249 = format_ParqueJacarand_249.readFeatures(json_ParqueJacarand_249, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueJacarand_249 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueJacarand_249.addFeatures(features_ParqueJacarand_249);
var lyr_ParqueJacarand_249 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueJacarand_249, 
                style: style_ParqueJacarand_249,
                popuplayertitle: 'Parque Jacarandá',
                interactive: true,
    title: 'Parque Jacarandá<br />\
    <img src="styles/legend/ParqueJacarand_249_0.png" /> APP<br />\
    <img src="styles/legend/ParqueJacarand_249_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueJacarand_249_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParqueJacarand_249_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueJacarand_249_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ParqueJacarand_249_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParqueJacarand_249_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueJacarand_249_7.png" /> RUAS<br />' });
var format_ParqueJacarand_250 = new ol.format.GeoJSON();
var features_ParqueJacarand_250 = format_ParqueJacarand_250.readFeatures(json_ParqueJacarand_250, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueJacarand_250 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueJacarand_250.addFeatures(features_ParqueJacarand_250);
var lyr_ParqueJacarand_250 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueJacarand_250, 
                style: style_ParqueJacarand_250,
                popuplayertitle: 'Parque Jacarandá',
                interactive: true,
                title: '<img src="styles/legend/ParqueJacarand_250.png" /> Parque Jacarandá'
            });
var format_ParqueFlora_251 = new ol.format.GeoJSON();
var features_ParqueFlora_251 = format_ParqueFlora_251.readFeatures(json_ParqueFlora_251, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueFlora_251 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueFlora_251.addFeatures(features_ParqueFlora_251);
var lyr_ParqueFlora_251 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueFlora_251, 
                style: style_ParqueFlora_251,
                popuplayertitle: 'Parque Flora',
                interactive: true,
    title: 'Parque Flora<br />\
    <img src="styles/legend/ParqueFlora_251_0.png" /> APP<br />\
    <img src="styles/legend/ParqueFlora_251_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueFlora_251_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueFlora_251_3.png" /> LOTES<br />\
    <img src="styles/legend/ParqueFlora_251_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueFlora_251_5.png" /> RUAS<br />\
    <img src="styles/legend/ParqueFlora_251_6.png" /> VIELA<br />' });
var format_ParqueFlora_252 = new ol.format.GeoJSON();
var features_ParqueFlora_252 = format_ParqueFlora_252.readFeatures(json_ParqueFlora_252, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueFlora_252 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueFlora_252.addFeatures(features_ParqueFlora_252);
var lyr_ParqueFlora_252 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueFlora_252, 
                style: style_ParqueFlora_252,
                popuplayertitle: 'Parque Flora',
                interactive: true,
                title: '<img src="styles/legend/ParqueFlora_252.png" /> Parque Flora'
            });
var format_ParquedosSabias_253 = new ol.format.GeoJSON();
var features_ParquedosSabias_253 = format_ParquedosSabias_253.readFeatures(json_ParquedosSabias_253, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosSabias_253 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosSabias_253.addFeatures(features_ParquedosSabias_253);
var lyr_ParquedosSabias_253 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosSabias_253, 
                style: style_ParquedosSabias_253,
                popuplayertitle: 'Parque dos Sabias',
                interactive: true,
    title: 'Parque dos Sabias<br />\
    <img src="styles/legend/ParquedosSabias_253_0.png" /> APP<br />\
    <img src="styles/legend/ParquedosSabias_253_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParquedosSabias_253_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParquedosSabias_253_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/ParquedosSabias_253_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParquedosSabias_253_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ParquedosSabias_253_6.png" /> RUAS<br />\
    <img src="styles/legend/ParquedosSabias_253_7.png" /> VIELA<br />' });
var format_ParquedosSabias_254 = new ol.format.GeoJSON();
var features_ParquedosSabias_254 = format_ParquedosSabias_254.readFeatures(json_ParquedosSabias_254, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosSabias_254 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosSabias_254.addFeatures(features_ParquedosSabias_254);
var lyr_ParquedosSabias_254 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosSabias_254, 
                style: style_ParquedosSabias_254,
                popuplayertitle: 'Parque dos Sabias',
                interactive: true,
                title: '<img src="styles/legend/ParquedosSabias_254.png" /> Parque dos Sabias'
            });
var format_ParquedosCoqueiros_255 = new ol.format.GeoJSON();
var features_ParquedosCoqueiros_255 = format_ParquedosCoqueiros_255.readFeatures(json_ParquedosCoqueiros_255, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosCoqueiros_255 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosCoqueiros_255.addFeatures(features_ParquedosCoqueiros_255);
var lyr_ParquedosCoqueiros_255 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosCoqueiros_255, 
                style: style_ParquedosCoqueiros_255,
                popuplayertitle: 'Parque dos Coqueiros',
                interactive: true,
    title: 'Parque dos Coqueiros<br />\
    <img src="styles/legend/ParquedosCoqueiros_255_0.png" /> APP<br />\
    <img src="styles/legend/ParquedosCoqueiros_255_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParquedosCoqueiros_255_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParquedosCoqueiros_255_3.png" /> LOTES<br />\
    <img src="styles/legend/ParquedosCoqueiros_255_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ParquedosCoqueiros_255_5.png" /> RUAS<br />\
    <img src="styles/legend/ParquedosCoqueiros_255_6.png" /> SERVIDAO<br />\
    <img src="styles/legend/ParquedosCoqueiros_255_7.png" /> VIELA<br />' });
var format_ParquedosCoqueiros_256 = new ol.format.GeoJSON();
var features_ParquedosCoqueiros_256 = format_ParquedosCoqueiros_256.readFeatures(json_ParquedosCoqueiros_256, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosCoqueiros_256 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosCoqueiros_256.addFeatures(features_ParquedosCoqueiros_256);
var lyr_ParquedosCoqueiros_256 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosCoqueiros_256, 
                style: style_ParquedosCoqueiros_256,
                popuplayertitle: 'Parque dos Coqueiros',
                interactive: true,
                title: '<img src="styles/legend/ParquedosCoqueiros_256.png" /> Parque dos Coqueiros'
            });
var format_ParqueAlvorada_257 = new ol.format.GeoJSON();
var features_ParqueAlvorada_257 = format_ParqueAlvorada_257.readFeatures(json_ParqueAlvorada_257, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueAlvorada_257 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAlvorada_257.addFeatures(features_ParqueAlvorada_257);
var lyr_ParqueAlvorada_257 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAlvorada_257, 
                style: style_ParqueAlvorada_257,
                popuplayertitle: 'Parque Alvorada',
                interactive: true,
    title: 'Parque Alvorada<br />\
    <img src="styles/legend/ParqueAlvorada_257_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueAlvorada_257_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueAlvorada_257_2.png" /> LOTES<br />\
    <img src="styles/legend/ParqueAlvorada_257_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueAlvorada_257_4.png" /> RUAS<br />' });
var format_ParqueAlvorada_258 = new ol.format.GeoJSON();
var features_ParqueAlvorada_258 = format_ParqueAlvorada_258.readFeatures(json_ParqueAlvorada_258, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueAlvorada_258 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAlvorada_258.addFeatures(features_ParqueAlvorada_258);
var lyr_ParqueAlvorada_258 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAlvorada_258, 
                style: style_ParqueAlvorada_258,
                popuplayertitle: 'Parque Alvorada',
                interactive: true,
                title: '<img src="styles/legend/ParqueAlvorada_258.png" /> Parque Alvorada'
            });
var format_ParagonFaseII_259 = new ol.format.GeoJSON();
var features_ParagonFaseII_259 = format_ParagonFaseII_259.readFeatures(json_ParagonFaseII_259, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParagonFaseII_259 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParagonFaseII_259.addFeatures(features_ParagonFaseII_259);
var lyr_ParagonFaseII_259 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParagonFaseII_259, 
                style: style_ParagonFaseII_259,
                popuplayertitle: 'Paragon Fase II',
                interactive: true,
    title: 'Paragon Fase II<br />\
    <img src="styles/legend/ParagonFaseII_259_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParagonFaseII_259_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParagonFaseII_259_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ParagonFaseII_259_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParagonFaseII_259_4.png" /> LOTES<br />\
    <img src="styles/legend/ParagonFaseII_259_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParagonFaseII_259_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ParagonFaseII_259_7.png" /> RUAS<br />\
    <img src="styles/legend/ParagonFaseII_259_8.png" /> VIELA<br />' });
var format_ParagonFaseII_260 = new ol.format.GeoJSON();
var features_ParagonFaseII_260 = format_ParagonFaseII_260.readFeatures(json_ParagonFaseII_260, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParagonFaseII_260 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParagonFaseII_260.addFeatures(features_ParagonFaseII_260);
var lyr_ParagonFaseII_260 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParagonFaseII_260, 
                style: style_ParagonFaseII_260,
                popuplayertitle: 'Paragon Fase II',
                interactive: true,
                title: '<img src="styles/legend/ParagonFaseII_260.png" /> Paragon Fase II'
            });
var format_Paragon_261 = new ol.format.GeoJSON();
var features_Paragon_261 = format_Paragon_261.readFeatures(json_Paragon_261, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Paragon_261 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paragon_261.addFeatures(features_Paragon_261);
var lyr_Paragon_261 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paragon_261, 
                style: style_Paragon_261,
                popuplayertitle: 'Paragon',
                interactive: true,
    title: 'Paragon<br />\
    <img src="styles/legend/Paragon_261_0.png" /> APP<br />\
    <img src="styles/legend/Paragon_261_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Paragon_261_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Paragon_261_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/Paragon_261_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/Paragon_261_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Paragon_261_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Paragon_261_7.png" /> PASSEIO<br />\
    <img src="styles/legend/Paragon_261_8.png" /> RUAS<br />\
    <img src="styles/legend/Paragon_261_9.png" /> VIELA<br />' });
var format_Paragon_262 = new ol.format.GeoJSON();
var features_Paragon_262 = format_Paragon_262.readFeatures(json_Paragon_262, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Paragon_262 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paragon_262.addFeatures(features_Paragon_262);
var lyr_Paragon_262 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paragon_262, 
                style: style_Paragon_262,
                popuplayertitle: 'Paragon',
                interactive: true,
                title: '<img src="styles/legend/Paragon_262.png" /> Paragon'
            });
var format_PalmeiraReal_263 = new ol.format.GeoJSON();
var features_PalmeiraReal_263 = format_PalmeiraReal_263.readFeatures(json_PalmeiraReal_263, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PalmeiraReal_263 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PalmeiraReal_263.addFeatures(features_PalmeiraReal_263);
var lyr_PalmeiraReal_263 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PalmeiraReal_263, 
                style: style_PalmeiraReal_263,
                popuplayertitle: 'Palmeira Real',
                interactive: true,
    title: 'Palmeira Real<br />\
    <img src="styles/legend/PalmeiraReal_263_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/PalmeiraReal_263_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/PalmeiraReal_263_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/PalmeiraReal_263_3.png" /> PASSEIO<br />\
    <img src="styles/legend/PalmeiraReal_263_4.png" /> RUAS<br />\
    <img src="styles/legend/PalmeiraReal_263_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_PalmeiraReal_264 = new ol.format.GeoJSON();
var features_PalmeiraReal_264 = format_PalmeiraReal_264.readFeatures(json_PalmeiraReal_264, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PalmeiraReal_264 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PalmeiraReal_264.addFeatures(features_PalmeiraReal_264);
var lyr_PalmeiraReal_264 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PalmeiraReal_264, 
                style: style_PalmeiraReal_264,
                popuplayertitle: 'Palmeira Real',
                interactive: true,
                title: '<img src="styles/legend/PalmeiraReal_264.png" /> Palmeira Real'
            });
var format_MoradadoVerdeII_265 = new ol.format.GeoJSON();
var features_MoradadoVerdeII_265 = format_MoradadoVerdeII_265.readFeatures(json_MoradadoVerdeII_265, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadoVerdeII_265 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadoVerdeII_265.addFeatures(features_MoradadoVerdeII_265);
var lyr_MoradadoVerdeII_265 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadoVerdeII_265, 
                style: style_MoradadoVerdeII_265,
                popuplayertitle: 'Morada do Verde II',
                interactive: true,
    title: 'Morada do Verde II<br />\
    <img src="styles/legend/MoradadoVerdeII_265_0.png" /> APP<br />\
    <img src="styles/legend/MoradadoVerdeII_265_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MoradadoVerdeII_265_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MoradadoVerdeII_265_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/MoradadoVerdeII_265_4.png" /> LOTES<br />\
    <img src="styles/legend/MoradadoVerdeII_265_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/MoradadoVerdeII_265_6.png" /> PASSEIO<br />\
    <img src="styles/legend/MoradadoVerdeII_265_7.png" /> RUAS<br />' });
var format_MoradadoVerdeII_266 = new ol.format.GeoJSON();
var features_MoradadoVerdeII_266 = format_MoradadoVerdeII_266.readFeatures(json_MoradadoVerdeII_266, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadoVerdeII_266 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadoVerdeII_266.addFeatures(features_MoradadoVerdeII_266);
var lyr_MoradadoVerdeII_266 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadoVerdeII_266, 
                style: style_MoradadoVerdeII_266,
                popuplayertitle: 'Morada do Verde II',
                interactive: true,
                title: '<img src="styles/legend/MoradadoVerdeII_266.png" /> Morada do Verde II'
            });
var format_MoradadaMata_267 = new ol.format.GeoJSON();
var features_MoradadaMata_267 = format_MoradadaMata_267.readFeatures(json_MoradadaMata_267, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadaMata_267 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadaMata_267.addFeatures(features_MoradadaMata_267);
var lyr_MoradadaMata_267 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadaMata_267, 
                style: style_MoradadaMata_267,
                popuplayertitle: 'Morada da Mata',
                interactive: true,
    title: 'Morada da Mata<br />\
    <img src="styles/legend/MoradadaMata_267_0.png" /> APP<br />\
    <img src="styles/legend/MoradadaMata_267_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MoradadaMata_267_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MoradadaMata_267_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/MoradadaMata_267_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MoradadaMata_267_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MoradadaMata_267_6.png" /> PASSEIO<br />\
    <img src="styles/legend/MoradadaMata_267_7.png" /> RUAS<br />' });
var format_MoradadaMata_268 = new ol.format.GeoJSON();
var features_MoradadaMata_268 = format_MoradadaMata_268.readFeatures(json_MoradadaMata_268, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadaMata_268 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadaMata_268.addFeatures(features_MoradadaMata_268);
var lyr_MoradadaMata_268 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadaMata_268, 
                style: style_MoradadaMata_268,
                popuplayertitle: 'Morada da Mata',
                interactive: true,
                title: '<img src="styles/legend/MoradadaMata_268.png" /> Morada da Mata'
            });
var format_Monti_269 = new ol.format.GeoJSON();
var features_Monti_269 = format_Monti_269.readFeatures(json_Monti_269, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Monti_269 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monti_269.addFeatures(features_Monti_269);
var lyr_Monti_269 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monti_269, 
                style: style_Monti_269,
                popuplayertitle: 'Montié',
                interactive: true,
    title: 'Montié<br />\
    <img src="styles/legend/Monti_269_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/Monti_269_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/Monti_269_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Monti_269_3.png" /> PASSEIO<br />\
    <img src="styles/legend/Monti_269_4.png" /> RUAS<br />\
    <img src="styles/legend/Monti_269_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_Monti_270 = new ol.format.GeoJSON();
var features_Monti_270 = format_Monti_270.readFeatures(json_Monti_270, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Monti_270 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monti_270.addFeatures(features_Monti_270);
var lyr_Monti_270 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monti_270, 
                style: style_Monti_270,
                popuplayertitle: 'Montié',
                interactive: true,
                title: '<img src="styles/legend/Monti_270.png" /> Montié'
            });
var format_MontBlancResidence_271 = new ol.format.GeoJSON();
var features_MontBlancResidence_271 = format_MontBlancResidence_271.readFeatures(json_MontBlancResidence_271, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MontBlancResidence_271 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontBlancResidence_271.addFeatures(features_MontBlancResidence_271);
var lyr_MontBlancResidence_271 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MontBlancResidence_271, 
                style: style_MontBlancResidence_271,
                popuplayertitle: 'Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/MontBlancResidence_271.png" /> Mont Blanc Residence'
            });
var format_MontBlancResidence_272 = new ol.format.GeoJSON();
var features_MontBlancResidence_272 = format_MontBlancResidence_272.readFeatures(json_MontBlancResidence_272, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MontBlancResidence_272 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontBlancResidence_272.addFeatures(features_MontBlancResidence_272);
var lyr_MontBlancResidence_272 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MontBlancResidence_272, 
                style: style_MontBlancResidence_272,
                popuplayertitle: 'Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/MontBlancResidence_272.png" /> Mont Blanc Residence'
            });
var format_MasterplanDespaschoal_273 = new ol.format.GeoJSON();
var features_MasterplanDespaschoal_273 = format_MasterplanDespaschoal_273.readFeatures(json_MasterplanDespaschoal_273, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasterplanDespaschoal_273 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasterplanDespaschoal_273.addFeatures(features_MasterplanDespaschoal_273);
var lyr_MasterplanDespaschoal_273 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasterplanDespaschoal_273, 
                style: style_MasterplanDespaschoal_273,
                popuplayertitle: 'Masterplan Despaschoal ',
                interactive: true,
    title: 'Masterplan Despaschoal <br />\
    <img src="styles/legend/MasterplanDespaschoal_273_0.png" /> APP<br />\
    <img src="styles/legend/MasterplanDespaschoal_273_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MasterplanDespaschoal_273_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/MasterplanDespaschoal_273_3.png" /> FUNCACAO<br />\
    <img src="styles/legend/MasterplanDespaschoal_273_4.png" /> INDUSTRIAL<br />\
    <img src="styles/legend/MasterplanDespaschoal_273_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MasterplanDespaschoal_273_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/MasterplanDespaschoal_273_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MasterplanDespaschoal_273_8.png" /> PASSEIO<br />\
    <img src="styles/legend/MasterplanDespaschoal_273_9.png" /> RUAS<br />' });
var format_MasterplanDespaschoal_274 = new ol.format.GeoJSON();
var features_MasterplanDespaschoal_274 = format_MasterplanDespaschoal_274.readFeatures(json_MasterplanDespaschoal_274, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasterplanDespaschoal_274 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasterplanDespaschoal_274.addFeatures(features_MasterplanDespaschoal_274);
var lyr_MasterplanDespaschoal_274 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasterplanDespaschoal_274, 
                style: style_MasterplanDespaschoal_274,
                popuplayertitle: 'Masterplan Despaschoal ',
                interactive: true,
                title: '<img src="styles/legend/MasterplanDespaschoal_274.png" /> Masterplan Despaschoal '
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
                title: '<img src="styles/legend/MasterplanDespaschoal_275.png" /> Masterplan Despaschoal '
            });
var format_MasteplanBildVitta_276 = new ol.format.GeoJSON();
var features_MasteplanBildVitta_276 = format_MasteplanBildVitta_276.readFeatures(json_MasteplanBildVitta_276, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasteplanBildVitta_276 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasteplanBildVitta_276.addFeatures(features_MasteplanBildVitta_276);
var lyr_MasteplanBildVitta_276 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasteplanBildVitta_276, 
                style: style_MasteplanBildVitta_276,
                popuplayertitle: 'Masteplan Bild/Vitta',
                interactive: true,
    title: 'Masteplan Bild/Vitta<br />\
    <img src="styles/legend/MasteplanBildVitta_276_0.png" /> APP<br />\
    <img src="styles/legend/MasteplanBildVitta_276_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MasteplanBildVitta_276_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MasteplanBildVitta_276_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/MasteplanBildVitta_276_4.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/MasteplanBildVitta_276_5.png" /> AREA VERDE<br />\
    <img src="styles/legend/MasteplanBildVitta_276_6.png" /> DESMEMBRAMENTO DOACAO<br />\
    <img src="styles/legend/MasteplanBildVitta_276_7.png" /> EIXOS<br />\
    <img src="styles/legend/MasteplanBildVitta_276_8.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MasteplanBildVitta_276_9.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MasteplanBildVitta_276_10.png" /> PASSEIO<br />\
    <img src="styles/legend/MasteplanBildVitta_276_11.png" /> RUAS<br />\
    <img src="styles/legend/MasteplanBildVitta_276_12.png" /> SERVIDAO<br />' });
var format_MasteplanBildVitta_277 = new ol.format.GeoJSON();
var features_MasteplanBildVitta_277 = format_MasteplanBildVitta_277.readFeatures(json_MasteplanBildVitta_277, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasteplanBildVitta_277 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasteplanBildVitta_277.addFeatures(features_MasteplanBildVitta_277);
var lyr_MasteplanBildVitta_277 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasteplanBildVitta_277, 
                style: style_MasteplanBildVitta_277,
                popuplayertitle: 'Masteplan Bild/Vitta',
                interactive: true,
                title: '<img src="styles/legend/MasteplanBildVitta_277.png" /> Masteplan Bild/Vitta'
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
                title: '<img src="styles/legend/MasteplanBildVitta_278.png" /> Masteplan Bild/Vitta'
            });
var format_Loteamentolamo_279 = new ol.format.GeoJSON();
var features_Loteamentolamo_279 = format_Loteamentolamo_279.readFeatures(json_Loteamentolamo_279, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Loteamentolamo_279 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamentolamo_279.addFeatures(features_Loteamentolamo_279);
var lyr_Loteamentolamo_279 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamentolamo_279, 
                style: style_Loteamentolamo_279,
                popuplayertitle: 'Loteamento Álamo',
                interactive: true,
    title: 'Loteamento Álamo<br />\
    <img src="styles/legend/Loteamentolamo_279_0.png" /> APP<br />\
    <img src="styles/legend/Loteamentolamo_279_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Loteamentolamo_279_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Loteamentolamo_279_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/Loteamentolamo_279_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/Loteamentolamo_279_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/Loteamentolamo_279_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Loteamentolamo_279_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Loteamentolamo_279_8.png" /> PASSEIO<br />\
    <img src="styles/legend/Loteamentolamo_279_9.png" /> RUAS<br />\
    <img src="styles/legend/Loteamentolamo_279_10.png" /> VIELA<br />' });
var format_Loteamentolamo_280 = new ol.format.GeoJSON();
var features_Loteamentolamo_280 = format_Loteamentolamo_280.readFeatures(json_Loteamentolamo_280, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Loteamentolamo_280 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamentolamo_280.addFeatures(features_Loteamentolamo_280);
var lyr_Loteamentolamo_280 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamentolamo_280, 
                style: style_Loteamentolamo_280,
                popuplayertitle: 'Loteamento Álamo',
                interactive: true,
                title: '<img src="styles/legend/Loteamentolamo_280.png" /> Loteamento Álamo'
            });
var format_JardimStephani_281 = new ol.format.GeoJSON();
var features_JardimStephani_281 = format_JardimStephani_281.readFeatures(json_JardimStephani_281, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimStephani_281 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimStephani_281.addFeatures(features_JardimStephani_281);
var lyr_JardimStephani_281 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimStephani_281, 
                style: style_JardimStephani_281,
                popuplayertitle: 'Jardim Stephani',
                interactive: true,
    title: 'Jardim Stephani<br />\
    <img src="styles/legend/JardimStephani_281_0.png" /> LOTES<br />' });
var format_JardimStephani_282 = new ol.format.GeoJSON();
var features_JardimStephani_282 = format_JardimStephani_282.readFeatures(json_JardimStephani_282, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimStephani_282 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimStephani_282.addFeatures(features_JardimStephani_282);
var lyr_JardimStephani_282 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimStephani_282, 
                style: style_JardimStephani_282,
                popuplayertitle: 'Jardim Stephani',
                interactive: true,
                title: '<img src="styles/legend/JardimStephani_282.png" /> Jardim Stephani'
            });
var format_JardimPherola_283 = new ol.format.GeoJSON();
var features_JardimPherola_283 = format_JardimPherola_283.readFeatures(json_JardimPherola_283, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimPherola_283 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimPherola_283.addFeatures(features_JardimPherola_283);
var lyr_JardimPherola_283 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimPherola_283, 
                style: style_JardimPherola_283,
                popuplayertitle: 'Jardim Pherola',
                interactive: true,
                title: '<img src="styles/legend/JardimPherola_283.png" /> Jardim Pherola'
            });
var format_JardimPherola_284 = new ol.format.GeoJSON();
var features_JardimPherola_284 = format_JardimPherola_284.readFeatures(json_JardimPherola_284, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimPherola_284 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimPherola_284.addFeatures(features_JardimPherola_284);
var lyr_JardimPherola_284 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimPherola_284, 
                style: style_JardimPherola_284,
                popuplayertitle: 'Jardim Pherola',
                interactive: true,
                title: '<img src="styles/legend/JardimPherola_284.png" /> Jardim Pherola'
            });
var format_JardimNatal_285 = new ol.format.GeoJSON();
var features_JardimNatal_285 = format_JardimNatal_285.readFeatures(json_JardimNatal_285, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimNatal_285 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimNatal_285.addFeatures(features_JardimNatal_285);
var lyr_JardimNatal_285 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimNatal_285, 
                style: style_JardimNatal_285,
                popuplayertitle: 'Jardim Natal',
                interactive: true,
    title: 'Jardim Natal<br />\
    <img src="styles/legend/JardimNatal_285_0.png" /> APP<br />\
    <img src="styles/legend/JardimNatal_285_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimNatal_285_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimNatal_285_3.png" /> LOTES<br />\
    <img src="styles/legend/JardimNatal_285_4.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimNatal_285_5.png" /> RUAS<br />\
    <img src="styles/legend/JardimNatal_285_6.png" /> VIELA<br />' });
var format_JardimNatal_286 = new ol.format.GeoJSON();
var features_JardimNatal_286 = format_JardimNatal_286.readFeatures(json_JardimNatal_286, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimNatal_286 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimNatal_286.addFeatures(features_JardimNatal_286);
var lyr_JardimNatal_286 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimNatal_286, 
                style: style_JardimNatal_286,
                popuplayertitle: 'Jardim Natal',
                interactive: true,
                title: '<img src="styles/legend/JardimNatal_286.png" /> Jardim Natal'
            });
var format_JardimMariaLuiza_287 = new ol.format.GeoJSON();
var features_JardimMariaLuiza_287 = format_JardimMariaLuiza_287.readFeatures(json_JardimMariaLuiza_287, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimMariaLuiza_287 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaLuiza_287.addFeatures(features_JardimMariaLuiza_287);
var lyr_JardimMariaLuiza_287 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaLuiza_287, 
                style: style_JardimMariaLuiza_287,
                popuplayertitle: 'Jardim Maria Luiza',
                interactive: true,
    title: 'Jardim Maria Luiza<br />\
    <img src="styles/legend/JardimMariaLuiza_287_0.png" /> APP<br />\
    <img src="styles/legend/JardimMariaLuiza_287_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimMariaLuiza_287_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/JardimMariaLuiza_287_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimMariaLuiza_287_4.png" /> LOTES<br />\
    <img src="styles/legend/JardimMariaLuiza_287_5.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimMariaLuiza_287_6.png" /> RUAS<br />\
    <img src="styles/legend/JardimMariaLuiza_287_7.png" /> VIELA<br />' });
var format_JardimMariaLuiza_288 = new ol.format.GeoJSON();
var features_JardimMariaLuiza_288 = format_JardimMariaLuiza_288.readFeatures(json_JardimMariaLuiza_288, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimMariaLuiza_288 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaLuiza_288.addFeatures(features_JardimMariaLuiza_288);
var lyr_JardimMariaLuiza_288 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaLuiza_288, 
                style: style_JardimMariaLuiza_288,
                popuplayertitle: 'Jardim Maria Luiza',
                interactive: true,
                title: '<img src="styles/legend/JardimMariaLuiza_288.png" /> Jardim Maria Luiza'
            });
var format_JardimMariaAugusta_289 = new ol.format.GeoJSON();
var features_JardimMariaAugusta_289 = format_JardimMariaAugusta_289.readFeatures(json_JardimMariaAugusta_289, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimMariaAugusta_289 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaAugusta_289.addFeatures(features_JardimMariaAugusta_289);
var lyr_JardimMariaAugusta_289 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaAugusta_289, 
                style: style_JardimMariaAugusta_289,
                popuplayertitle: 'Jardim Maria Augusta',
                interactive: true,
    title: 'Jardim Maria Augusta<br />\
    <img src="styles/legend/JardimMariaAugusta_289_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimMariaAugusta_289_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/JardimMariaAugusta_289_2.png" /> LOTES<br />\
    <img src="styles/legend/JardimMariaAugusta_289_3.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimMariaAugusta_289_4.png" /> RUAS<br />\
    <img src="styles/legend/JardimMariaAugusta_289_5.png" /> VIELA<br />' });
var format_JardimMariaAugusta_290 = new ol.format.GeoJSON();
var features_JardimMariaAugusta_290 = format_JardimMariaAugusta_290.readFeatures(json_JardimMariaAugusta_290, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimMariaAugusta_290 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaAugusta_290.addFeatures(features_JardimMariaAugusta_290);
var lyr_JardimMariaAugusta_290 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaAugusta_290, 
                style: style_JardimMariaAugusta_290,
                popuplayertitle: 'Jardim Maria Augusta',
                interactive: true,
                title: '<img src="styles/legend/JardimMariaAugusta_290.png" /> Jardim Maria Augusta'
            });
var format_JardimHorizonte_291 = new ol.format.GeoJSON();
var features_JardimHorizonte_291 = format_JardimHorizonte_291.readFeatures(json_JardimHorizonte_291, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimHorizonte_291 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimHorizonte_291.addFeatures(features_JardimHorizonte_291);
var lyr_JardimHorizonte_291 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimHorizonte_291, 
                style: style_JardimHorizonte_291,
                popuplayertitle: 'Jardim Horizonte',
                interactive: true,
    title: 'Jardim Horizonte<br />\
    <img src="styles/legend/JardimHorizonte_291_0.png" /> APP<br />\
    <img src="styles/legend/JardimHorizonte_291_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimHorizonte_291_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimHorizonte_291_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/JardimHorizonte_291_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/JardimHorizonte_291_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/JardimHorizonte_291_6.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimHorizonte_291_7.png" /> RUAS<br />\
    <img src="styles/legend/JardimHorizonte_291_8.png" /> VIELA<br />' });
var format_JardimHorizonte_292 = new ol.format.GeoJSON();
var features_JardimHorizonte_292 = format_JardimHorizonte_292.readFeatures(json_JardimHorizonte_292, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimHorizonte_292 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimHorizonte_292.addFeatures(features_JardimHorizonte_292);
var lyr_JardimHorizonte_292 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimHorizonte_292, 
                style: style_JardimHorizonte_292,
                popuplayertitle: 'Jardim Horizonte',
                interactive: true,
                title: '<img src="styles/legend/JardimHorizonte_292.png" /> Jardim Horizonte'
            });
var format_JardimFlora_293 = new ol.format.GeoJSON();
var features_JardimFlora_293 = format_JardimFlora_293.readFeatures(json_JardimFlora_293, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimFlora_293 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimFlora_293.addFeatures(features_JardimFlora_293);
var lyr_JardimFlora_293 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimFlora_293, 
                style: style_JardimFlora_293,
                popuplayertitle: 'Jardim Flora',
                interactive: true,
    title: 'Jardim Flora<br />\
    <img src="styles/legend/JardimFlora_293_0.png" /> APP<br />\
    <img src="styles/legend/JardimFlora_293_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimFlora_293_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/JardimFlora_293_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/JardimFlora_293_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimFlora_293_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/JardimFlora_293_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/JardimFlora_293_7.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimFlora_293_8.png" /> RUAS<br />' });
var format_JardimFlora_294 = new ol.format.GeoJSON();
var features_JardimFlora_294 = format_JardimFlora_294.readFeatures(json_JardimFlora_294, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimFlora_294 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimFlora_294.addFeatures(features_JardimFlora_294);
var lyr_JardimFlora_294 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimFlora_294, 
                style: style_JardimFlora_294,
                popuplayertitle: 'Jardim Flora',
                interactive: true,
                title: '<img src="styles/legend/JardimFlora_294.png" /> Jardim Flora'
            });
var format_IrineuZanetiII_295 = new ol.format.GeoJSON();
var features_IrineuZanetiII_295 = format_IrineuZanetiII_295.readFeatures(json_IrineuZanetiII_295, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IrineuZanetiII_295 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrineuZanetiII_295.addFeatures(features_IrineuZanetiII_295);
var lyr_IrineuZanetiII_295 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrineuZanetiII_295, 
                style: style_IrineuZanetiII_295,
                popuplayertitle: 'Irineu Zaneti II',
                interactive: true,
    title: 'Irineu Zaneti II<br />\
    <img src="styles/legend/IrineuZanetiII_295_0.png" /> APP<br />\
    <img src="styles/legend/IrineuZanetiII_295_1.png" /> LOTES<br />\
    <img src="styles/legend/IrineuZanetiII_295_2.png" /> RUAS<br />\
    <img src="styles/legend/IrineuZanetiII_295_3.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/IrineuZanetiII_295_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/IrineuZanetiII_295_5.png" /> PASSEIO<br />' });
var format_IrineuZanetiII_296 = new ol.format.GeoJSON();
var features_IrineuZanetiII_296 = format_IrineuZanetiII_296.readFeatures(json_IrineuZanetiII_296, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IrineuZanetiII_296 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrineuZanetiII_296.addFeatures(features_IrineuZanetiII_296);
var lyr_IrineuZanetiII_296 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrineuZanetiII_296, 
                style: style_IrineuZanetiII_296,
                popuplayertitle: 'Irineu Zaneti II',
                interactive: true,
                title: '<img src="styles/legend/IrineuZanetiII_296.png" /> Irineu Zaneti II'
            });
var format_Infratcnica_297 = new ol.format.GeoJSON();
var features_Infratcnica_297 = format_Infratcnica_297.readFeatures(json_Infratcnica_297, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Infratcnica_297 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infratcnica_297.addFeatures(features_Infratcnica_297);
var lyr_Infratcnica_297 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infratcnica_297, 
                style: style_Infratcnica_297,
                popuplayertitle: 'Infratécnica',
                interactive: true,
    title: 'Infratécnica<br />\
    <img src="styles/legend/Infratcnica_297_0.png" /> APP<br />\
    <img src="styles/legend/Infratcnica_297_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Infratcnica_297_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Infratcnica_297_3.png" /> LOTES<br />\
    <img src="styles/legend/Infratcnica_297_4.png" /> PASSEIO<br />\
    <img src="styles/legend/Infratcnica_297_5.png" /> RUAS<br />' });
var format_Infratcnica_298 = new ol.format.GeoJSON();
var features_Infratcnica_298 = format_Infratcnica_298.readFeatures(json_Infratcnica_298, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Infratcnica_298 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infratcnica_298.addFeatures(features_Infratcnica_298);
var lyr_Infratcnica_298 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infratcnica_298, 
                style: style_Infratcnica_298,
                popuplayertitle: 'Infratécnica',
                interactive: true,
                title: '<img src="styles/legend/Infratcnica_298.png" /> Infratécnica'
            });
var format_HorizResidence_299 = new ol.format.GeoJSON();
var features_HorizResidence_299 = format_HorizResidence_299.readFeatures(json_HorizResidence_299, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HorizResidence_299 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HorizResidence_299.addFeatures(features_HorizResidence_299);
var lyr_HorizResidence_299 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HorizResidence_299, 
                style: style_HorizResidence_299,
                popuplayertitle: 'Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/HorizResidence_299.png" /> Horiz Residence'
            });
var format_HorizResidence_300 = new ol.format.GeoJSON();
var features_HorizResidence_300 = format_HorizResidence_300.readFeatures(json_HorizResidence_300, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HorizResidence_300 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HorizResidence_300.addFeatures(features_HorizResidence_300);
var lyr_HorizResidence_300 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HorizResidence_300, 
                style: style_HorizResidence_300,
                popuplayertitle: 'Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/HorizResidence_300.png" /> Horiz Residence'
            });
var format_GlebaNossaSenhoraAuxiliadora_301 = new ol.format.GeoJSON();
var features_GlebaNossaSenhoraAuxiliadora_301 = format_GlebaNossaSenhoraAuxiliadora_301.readFeatures(json_GlebaNossaSenhoraAuxiliadora_301, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GlebaNossaSenhoraAuxiliadora_301 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlebaNossaSenhoraAuxiliadora_301.addFeatures(features_GlebaNossaSenhoraAuxiliadora_301);
var lyr_GlebaNossaSenhoraAuxiliadora_301 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlebaNossaSenhoraAuxiliadora_301, 
                style: style_GlebaNossaSenhoraAuxiliadora_301,
                popuplayertitle: 'Gleba Nossa Senhora Auxiliadora',
                interactive: true,
                title: '<img src="styles/legend/GlebaNossaSenhoraAuxiliadora_301.png" /> Gleba Nossa Senhora Auxiliadora'
            });
var format_GlebaNossaSenhoraAuxiliadora_302 = new ol.format.GeoJSON();
var features_GlebaNossaSenhoraAuxiliadora_302 = format_GlebaNossaSenhoraAuxiliadora_302.readFeatures(json_GlebaNossaSenhoraAuxiliadora_302, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GlebaNossaSenhoraAuxiliadora_302 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlebaNossaSenhoraAuxiliadora_302.addFeatures(features_GlebaNossaSenhoraAuxiliadora_302);
var lyr_GlebaNossaSenhoraAuxiliadora_302 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlebaNossaSenhoraAuxiliadora_302, 
                style: style_GlebaNossaSenhoraAuxiliadora_302,
                popuplayertitle: 'Gleba Nossa Senhora Auxiliadora',
                interactive: true,
                title: '<img src="styles/legend/GlebaNossaSenhoraAuxiliadora_302.png" /> Gleba Nossa Senhora Auxiliadora'
            });
var format_Ferracini_303 = new ol.format.GeoJSON();
var features_Ferracini_303 = format_Ferracini_303.readFeatures(json_Ferracini_303, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Ferracini_303 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferracini_303.addFeatures(features_Ferracini_303);
var lyr_Ferracini_303 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferracini_303, 
                style: style_Ferracini_303,
                popuplayertitle: 'Ferracini',
                interactive: true,
    title: 'Ferracini<br />\
    <img src="styles/legend/Ferracini_303_0.png" /> APP<br />\
    <img src="styles/legend/Ferracini_303_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Ferracini_303_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Ferracini_303_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/Ferracini_303_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Ferracini_303_5.png" /> RUAS<br />\
    <img src="styles/legend/Ferracini_303_6.png" /> VIELA<br />\
    <img src="styles/legend/Ferracini_303_7.png" /> PASSEIO<br />' });
var format_Ferracini_304 = new ol.format.GeoJSON();
var features_Ferracini_304 = format_Ferracini_304.readFeatures(json_Ferracini_304, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Ferracini_304 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferracini_304.addFeatures(features_Ferracini_304);
var lyr_Ferracini_304 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferracini_304, 
                style: style_Ferracini_304,
                popuplayertitle: 'Ferracini',
                interactive: true,
                title: '<img src="styles/legend/Ferracini_304.png" /> Ferracini'
            });
var format_FrancaB6_305 = new ol.format.GeoJSON();
var features_FrancaB6_305 = format_FrancaB6_305.readFeatures(json_FrancaB6_305, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FrancaB6_305 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrancaB6_305.addFeatures(features_FrancaB6_305);
var lyr_FrancaB6_305 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrancaB6_305, 
                style: style_FrancaB6_305,
                popuplayertitle: 'Franca B6',
                interactive: true,
    title: 'Franca B6<br />\
    <img src="styles/legend/FrancaB6_305_0.png" /> APP<br />\
    <img src="styles/legend/FrancaB6_305_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/FrancaB6_305_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/FrancaB6_305_3.png" /> LOTES<br />\
    <img src="styles/legend/FrancaB6_305_4.png" /> RUAS<br />\
    <img src="styles/legend/FrancaB6_305_5.png" /> PASSEIO<br />' });
var format_FrancaB6_306 = new ol.format.GeoJSON();
var features_FrancaB6_306 = format_FrancaB6_306.readFeatures(json_FrancaB6_306, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FrancaB6_306 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrancaB6_306.addFeatures(features_FrancaB6_306);
var lyr_FrancaB6_306 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrancaB6_306, 
                style: style_FrancaB6_306,
                popuplayertitle: 'Franca B6',
                interactive: true,
                title: '<img src="styles/legend/FrancaB6_306.png" /> Franca B6'
            });
var format_FazendaProgresso_307 = new ol.format.GeoJSON();
var features_FazendaProgresso_307 = format_FazendaProgresso_307.readFeatures(json_FazendaProgresso_307, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaProgresso_307 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaProgresso_307.addFeatures(features_FazendaProgresso_307);
var lyr_FazendaProgresso_307 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaProgresso_307, 
                style: style_FazendaProgresso_307,
                popuplayertitle: 'Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/FazendaProgresso_307.png" /> Fazenda Progresso'
            });
var format_FazendaProgresso_308 = new ol.format.GeoJSON();
var features_FazendaProgresso_308 = format_FazendaProgresso_308.readFeatures(json_FazendaProgresso_308, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaProgresso_308 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaProgresso_308.addFeatures(features_FazendaProgresso_308);
var lyr_FazendaProgresso_308 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaProgresso_308, 
                style: style_FazendaProgresso_308,
                popuplayertitle: 'Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/FazendaProgresso_308.png" /> Fazenda Progresso'
            });
var format_FazendaeGranjaSantaRita2_309 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita2_309 = format_FazendaeGranjaSantaRita2_309.readFeatures(json_FazendaeGranjaSantaRita2_309, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaeGranjaSantaRita2_309 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita2_309.addFeatures(features_FazendaeGranjaSantaRita2_309);
var lyr_FazendaeGranjaSantaRita2_309 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita2_309, 
                style: style_FazendaeGranjaSantaRita2_309,
                popuplayertitle: 'Fazenda e Granja Santa Rita 2',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita2_309.png" /> Fazenda e Granja Santa Rita 2'
            });
var format_FazendaeGranjaSantaRita2_310 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita2_310 = format_FazendaeGranjaSantaRita2_310.readFeatures(json_FazendaeGranjaSantaRita2_310, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaeGranjaSantaRita2_310 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita2_310.addFeatures(features_FazendaeGranjaSantaRita2_310);
var lyr_FazendaeGranjaSantaRita2_310 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita2_310, 
                style: style_FazendaeGranjaSantaRita2_310,
                popuplayertitle: 'Fazenda e Granja Santa Rita 2',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita2_310.png" /> Fazenda e Granja Santa Rita 2'
            });
var format_FazendaeGranjaSantaRita_311 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita_311 = format_FazendaeGranjaSantaRita_311.readFeatures(json_FazendaeGranjaSantaRita_311, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaeGranjaSantaRita_311 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita_311.addFeatures(features_FazendaeGranjaSantaRita_311);
var lyr_FazendaeGranjaSantaRita_311 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita_311, 
                style: style_FazendaeGranjaSantaRita_311,
                popuplayertitle: 'Fazenda e Granja Santa Rita',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita_311.png" /> Fazenda e Granja Santa Rita'
            });
var format_FazendaeGranjaSantaRita_312 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita_312 = format_FazendaeGranjaSantaRita_312.readFeatures(json_FazendaeGranjaSantaRita_312, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaeGranjaSantaRita_312 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita_312.addFeatures(features_FazendaeGranjaSantaRita_312);
var lyr_FazendaeGranjaSantaRita_312 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita_312, 
                style: style_FazendaeGranjaSantaRita_312,
                popuplayertitle: 'Fazenda e Granja Santa Rita',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita_312.png" /> Fazenda e Granja Santa Rita'
            });
var format_Essence_313 = new ol.format.GeoJSON();
var features_Essence_313 = format_Essence_313.readFeatures(json_Essence_313, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Essence_313 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Essence_313.addFeatures(features_Essence_313);
var lyr_Essence_313 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Essence_313, 
                style: style_Essence_313,
                popuplayertitle: 'Essence',
                interactive: true,
                title: '<img src="styles/legend/Essence_313.png" /> Essence'
            });
var format_Essence_314 = new ol.format.GeoJSON();
var features_Essence_314 = format_Essence_314.readFeatures(json_Essence_314, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Essence_314 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Essence_314.addFeatures(features_Essence_314);
var lyr_Essence_314 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Essence_314, 
                style: style_Essence_314,
                popuplayertitle: 'Essence',
                interactive: true,
                title: '<img src="styles/legend/Essence_314.png" /> Essence'
            });
var format_Elias_315 = new ol.format.GeoJSON();
var features_Elias_315 = format_Elias_315.readFeatures(json_Elias_315, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Elias_315 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elias_315.addFeatures(features_Elias_315);
var lyr_Elias_315 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elias_315, 
                style: style_Elias_315,
                popuplayertitle: 'Elias',
                interactive: true,
    title: 'Elias<br />\
    <img src="styles/legend/Elias_315_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Elias_315_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/Elias_315_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Elias_315_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/Elias_315_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Elias_315_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Elias_315_6.png" /> PASSEIO<br />\
    <img src="styles/legend/Elias_315_7.png" /> RUAS<br />' });
var format_Elias_316 = new ol.format.GeoJSON();
var features_Elias_316 = format_Elias_316.readFeatures(json_Elias_316, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Elias_316 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elias_316.addFeatures(features_Elias_316);
var lyr_Elias_316 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elias_316, 
                style: style_Elias_316,
                popuplayertitle: 'Elias',
                interactive: true,
                title: '<img src="styles/legend/Elias_316.png" /> Elias'
            });
var format_EdifcioSolNascente_317 = new ol.format.GeoJSON();
var features_EdifcioSolNascente_317 = format_EdifcioSolNascente_317.readFeatures(json_EdifcioSolNascente_317, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioSolNascente_317 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioSolNascente_317.addFeatures(features_EdifcioSolNascente_317);
var lyr_EdifcioSolNascente_317 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioSolNascente_317, 
                style: style_EdifcioSolNascente_317,
                popuplayertitle: 'Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EdifcioSolNascente_317.png" /> Edifício Sol Nascente'
            });
var format_EdifcioSolNascente_318 = new ol.format.GeoJSON();
var features_EdifcioSolNascente_318 = format_EdifcioSolNascente_318.readFeatures(json_EdifcioSolNascente_318, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioSolNascente_318 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioSolNascente_318.addFeatures(features_EdifcioSolNascente_318);
var lyr_EdifcioSolNascente_318 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioSolNascente_318, 
                style: style_EdifcioSolNascente_318,
                popuplayertitle: 'Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EdifcioSolNascente_318.png" /> Edifício Sol Nascente'
            });
var format_EdifcioRuadoSol_319 = new ol.format.GeoJSON();
var features_EdifcioRuadoSol_319 = format_EdifcioRuadoSol_319.readFeatures(json_EdifcioRuadoSol_319, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioRuadoSol_319 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioRuadoSol_319.addFeatures(features_EdifcioRuadoSol_319);
var lyr_EdifcioRuadoSol_319 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioRuadoSol_319, 
                style: style_EdifcioRuadoSol_319,
                popuplayertitle: 'Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EdifcioRuadoSol_319.png" /> Edifício Rua do Sol'
            });
var format_EdifcioRuadoSol_320 = new ol.format.GeoJSON();
var features_EdifcioRuadoSol_320 = format_EdifcioRuadoSol_320.readFeatures(json_EdifcioRuadoSol_320, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioRuadoSol_320 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioRuadoSol_320.addFeatures(features_EdifcioRuadoSol_320);
var lyr_EdifcioRuadoSol_320 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioRuadoSol_320, 
                style: style_EdifcioRuadoSol_320,
                popuplayertitle: 'Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EdifcioRuadoSol_320.png" /> Edifício Rua do Sol'
            });
var format_EdifcioResidencialHope_321 = new ol.format.GeoJSON();
var features_EdifcioResidencialHope_321 = format_EdifcioResidencialHope_321.readFeatures(json_EdifcioResidencialHope_321, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioResidencialHope_321 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioResidencialHope_321.addFeatures(features_EdifcioResidencialHope_321);
var lyr_EdifcioResidencialHope_321 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioResidencialHope_321, 
                style: style_EdifcioResidencialHope_321,
                popuplayertitle: 'Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EdifcioResidencialHope_321.png" /> Edifício Residencial Hope'
            });
var format_EdifcioResidencialHope_322 = new ol.format.GeoJSON();
var features_EdifcioResidencialHope_322 = format_EdifcioResidencialHope_322.readFeatures(json_EdifcioResidencialHope_322, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioResidencialHope_322 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioResidencialHope_322.addFeatures(features_EdifcioResidencialHope_322);
var lyr_EdifcioResidencialHope_322 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioResidencialHope_322, 
                style: style_EdifcioResidencialHope_322,
                popuplayertitle: 'Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EdifcioResidencialHope_322.png" /> Edifício Residencial Hope'
            });
var format_DiocesedeFranca_323 = new ol.format.GeoJSON();
var features_DiocesedeFranca_323 = format_DiocesedeFranca_323.readFeatures(json_DiocesedeFranca_323, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DiocesedeFranca_323 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiocesedeFranca_323.addFeatures(features_DiocesedeFranca_323);
var lyr_DiocesedeFranca_323 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiocesedeFranca_323, 
                style: style_DiocesedeFranca_323,
                popuplayertitle: 'Diocese de Franca',
                interactive: true,
    title: 'Diocese de Franca<br />\
    <img src="styles/legend/DiocesedeFranca_323_0.png" /> APP<br />\
    <img src="styles/legend/DiocesedeFranca_323_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/DiocesedeFranca_323_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/DiocesedeFranca_323_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/DiocesedeFranca_323_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/DiocesedeFranca_323_5.png" /> PASSEIO<br />\
    <img src="styles/legend/DiocesedeFranca_323_6.png" /> RUAS<br />' });
var format_DiocesedeFranca_324 = new ol.format.GeoJSON();
var features_DiocesedeFranca_324 = format_DiocesedeFranca_324.readFeatures(json_DiocesedeFranca_324, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DiocesedeFranca_324 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiocesedeFranca_324.addFeatures(features_DiocesedeFranca_324);
var lyr_DiocesedeFranca_324 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiocesedeFranca_324, 
                style: style_DiocesedeFranca_324,
                popuplayertitle: 'Diocese de Franca',
                interactive: true,
                title: '<img src="styles/legend/DiocesedeFranca_324.png" /> Diocese de Franca'
            });
var format_DaVinci_325 = new ol.format.GeoJSON();
var features_DaVinci_325 = format_DaVinci_325.readFeatures(json_DaVinci_325, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DaVinci_325 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaVinci_325.addFeatures(features_DaVinci_325);
var lyr_DaVinci_325 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaVinci_325, 
                style: style_DaVinci_325,
                popuplayertitle: 'Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/DaVinci_325.png" /> Da Vinci'
            });
var format_DaVinci_326 = new ol.format.GeoJSON();
var features_DaVinci_326 = format_DaVinci_326.readFeatures(json_DaVinci_326, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DaVinci_326 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaVinci_326.addFeatures(features_DaVinci_326);
var lyr_DaVinci_326 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaVinci_326, 
                style: style_DaVinci_326,
                popuplayertitle: 'Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/DaVinci_326.png" /> Da Vinci'
            });
var format_CondomnioIICityPetrpolis_327 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_327 = format_CondomnioIICityPetrpolis_327.readFeatures(json_CondomnioIICityPetrpolis_327, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioIICityPetrpolis_327 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_327.addFeatures(features_CondomnioIICityPetrpolis_327);
var lyr_CondomnioIICityPetrpolis_327 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_327, 
                style: style_CondomnioIICityPetrpolis_327,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
    title: 'Condomínio II City Petrópolis<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_327_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_327_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_327_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_327_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_327_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_327_5.png" /> RUAS<br />' });
var format_CondomnioIICityPetrpolis_328 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_328 = format_CondomnioIICityPetrpolis_328.readFeatures(json_CondomnioIICityPetrpolis_328, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioIICityPetrpolis_328 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_328.addFeatures(features_CondomnioIICityPetrpolis_328);
var lyr_CondomnioIICityPetrpolis_328 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_328, 
                style: style_CondomnioIICityPetrpolis_328,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
                title: '<img src="styles/legend/CondomnioIICityPetrpolis_328.png" /> Condomínio II City Petrópolis'
            });
var format_CondomnioICityPetrpolis_329 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_329 = format_CondomnioICityPetrpolis_329.readFeatures(json_CondomnioICityPetrpolis_329, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioICityPetrpolis_329 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_329.addFeatures(features_CondomnioICityPetrpolis_329);
var lyr_CondomnioICityPetrpolis_329 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_329, 
                style: style_CondomnioICityPetrpolis_329,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
    title: 'Condomínio I City Petrópolis<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_329_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_329_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_329_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_329_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_329_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_329_5.png" /> RUAS<br />' });
var format_CondomnioICityPetrpolis_330 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_330 = format_CondomnioICityPetrpolis_330.readFeatures(json_CondomnioICityPetrpolis_330, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioICityPetrpolis_330 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_330.addFeatures(features_CondomnioICityPetrpolis_330);
var lyr_CondomnioICityPetrpolis_330 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_330, 
                style: style_CondomnioICityPetrpolis_330,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
                title: '<img src="styles/legend/CondomnioICityPetrpolis_330.png" /> Condomínio I City Petrópolis'
            });
var format_Colorado_331 = new ol.format.GeoJSON();
var features_Colorado_331 = format_Colorado_331.readFeatures(json_Colorado_331, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Colorado_331 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colorado_331.addFeatures(features_Colorado_331);
var lyr_Colorado_331 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colorado_331, 
                style: style_Colorado_331,
                popuplayertitle: 'Colorado',
                interactive: true,
    title: 'Colorado<br />\
    <img src="styles/legend/Colorado_331_0.png" /> APP<br />\
    <img src="styles/legend/Colorado_331_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Colorado_331_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Colorado_331_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/Colorado_331_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Colorado_331_5.png" /> RUAS<br />\
    <img src="styles/legend/Colorado_331_6.png" /> PASSEIO<br />' });
var format_Colorado_332 = new ol.format.GeoJSON();
var features_Colorado_332 = format_Colorado_332.readFeatures(json_Colorado_332, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Colorado_332 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colorado_332.addFeatures(features_Colorado_332);
var lyr_Colorado_332 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colorado_332, 
                style: style_Colorado_332,
                popuplayertitle: 'Colorado',
                interactive: true,
                title: '<img src="styles/legend/Colorado_332.png" /> Colorado'
            });
var format_CidadeJardim_333 = new ol.format.GeoJSON();
var features_CidadeJardim_333 = format_CidadeJardim_333.readFeatures(json_CidadeJardim_333, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CidadeJardim_333 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CidadeJardim_333.addFeatures(features_CidadeJardim_333);
var lyr_CidadeJardim_333 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CidadeJardim_333, 
                style: style_CidadeJardim_333,
                popuplayertitle: 'Cidade Jardim',
                interactive: true,
    title: 'Cidade Jardim<br />\
    <img src="styles/legend/CidadeJardim_333_0.png" /> APP<br />\
    <img src="styles/legend/CidadeJardim_333_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CidadeJardim_333_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/CidadeJardim_333_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/CidadeJardim_333_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CidadeJardim_333_5.png" /> PASSEIO<br />\
    <img src="styles/legend/CidadeJardim_333_6.png" /> RUAS<br />\
    <img src="styles/legend/CidadeJardim_333_7.png" /> SERVIDAO<br />' });
var format_CidadeJardim_334 = new ol.format.GeoJSON();
var features_CidadeJardim_334 = format_CidadeJardim_334.readFeatures(json_CidadeJardim_334, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CidadeJardim_334 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CidadeJardim_334.addFeatures(features_CidadeJardim_334);
var lyr_CidadeJardim_334 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CidadeJardim_334, 
                style: style_CidadeJardim_334,
                popuplayertitle: 'Cidade Jardim',
                interactive: true,
                title: '<img src="styles/legend/CidadeJardim_334.png" /> Cidade Jardim'
            });
var format_ChacaraOlaria_335 = new ol.format.GeoJSON();
var features_ChacaraOlaria_335 = format_ChacaraOlaria_335.readFeatures(json_ChacaraOlaria_335, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChacaraOlaria_335 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraOlaria_335.addFeatures(features_ChacaraOlaria_335);
var lyr_ChacaraOlaria_335 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraOlaria_335, 
                style: style_ChacaraOlaria_335,
                popuplayertitle: 'Chacara Olaria',
                interactive: true,
                title: '<img src="styles/legend/ChacaraOlaria_335.png" /> Chacara Olaria'
            });
var format_ChacaraOlaria_336 = new ol.format.GeoJSON();
var features_ChacaraOlaria_336 = format_ChacaraOlaria_336.readFeatures(json_ChacaraOlaria_336, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChacaraOlaria_336 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraOlaria_336.addFeatures(features_ChacaraOlaria_336);
var lyr_ChacaraOlaria_336 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraOlaria_336, 
                style: style_ChacaraOlaria_336,
                popuplayertitle: 'Chacara Olaria',
                interactive: true,
                title: '<img src="styles/legend/ChacaraOlaria_336.png" /> Chacara Olaria'
            });
var format_ChacaraBelaVista_337 = new ol.format.GeoJSON();
var features_ChacaraBelaVista_337 = format_ChacaraBelaVista_337.readFeatures(json_ChacaraBelaVista_337, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChacaraBelaVista_337 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraBelaVista_337.addFeatures(features_ChacaraBelaVista_337);
var lyr_ChacaraBelaVista_337 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraBelaVista_337, 
                style: style_ChacaraBelaVista_337,
                popuplayertitle: 'Chacara Bela Vista',
                interactive: true,
    title: 'Chacara Bela Vista<br />\
    <img src="styles/legend/ChacaraBelaVista_337_0.png" /> APP<br />\
    <img src="styles/legend/ChacaraBelaVista_337_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ChacaraBelaVista_337_2.png" /> LOTES<br />\
    <img src="styles/legend/ChacaraBelaVista_337_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ChacaraBelaVista_337_4.png" /> RUAS<br />' });
var format_ChacaraBelaVista_338 = new ol.format.GeoJSON();
var features_ChacaraBelaVista_338 = format_ChacaraBelaVista_338.readFeatures(json_ChacaraBelaVista_338, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChacaraBelaVista_338 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraBelaVista_338.addFeatures(features_ChacaraBelaVista_338);
var lyr_ChacaraBelaVista_338 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraBelaVista_338, 
                style: style_ChacaraBelaVista_338,
                popuplayertitle: 'Chacara Bela Vista',
                interactive: true,
                title: '<img src="styles/legend/ChacaraBelaVista_338.png" /> Chacara Bela Vista'
            });
var format_BordadaMata_339 = new ol.format.GeoJSON();
var features_BordadaMata_339 = format_BordadaMata_339.readFeatures(json_BordadaMata_339, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BordadaMata_339 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BordadaMata_339.addFeatures(features_BordadaMata_339);
var lyr_BordadaMata_339 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BordadaMata_339, 
                style: style_BordadaMata_339,
                popuplayertitle: 'Borda da Mata',
                interactive: true,
    title: 'Borda da Mata<br />\
    <img src="styles/legend/BordadaMata_339_0.png" /> APP<br />\
    <img src="styles/legend/BordadaMata_339_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/BordadaMata_339_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/BordadaMata_339_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/BordadaMata_339_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/BordadaMata_339_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/BordadaMata_339_6.png" /> PASSEIO<br />\
    <img src="styles/legend/BordadaMata_339_7.png" /> RUAS<br />\
    <img src="styles/legend/BordadaMata_339_8.png" /> SERVIDAO<br />' });
var format_BordadaMata_340 = new ol.format.GeoJSON();
var features_BordadaMata_340 = format_BordadaMata_340.readFeatures(json_BordadaMata_340, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BordadaMata_340 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BordadaMata_340.addFeatures(features_BordadaMata_340);
var lyr_BordadaMata_340 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BordadaMata_340, 
                style: style_BordadaMata_340,
                popuplayertitle: 'Borda da Mata',
                interactive: true,
                title: '<img src="styles/legend/BordadaMata_340.png" /> Borda da Mata'
            });
var format_Arteris_341 = new ol.format.GeoJSON();
var features_Arteris_341 = format_Arteris_341.readFeatures(json_Arteris_341, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arteris_341 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arteris_341.addFeatures(features_Arteris_341);
var lyr_Arteris_341 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arteris_341, 
                style: style_Arteris_341,
                popuplayertitle: 'Arteris',
                interactive: true,
    title: 'Arteris<br />\
    <img src="styles/legend/Arteris_341_0.png" /> OAE EXISTENTE<br />\
    <img src="styles/legend/Arteris_341_1.png" /> OAE PROJETADA<br />\
    <img src="styles/legend/Arteris_341_2.png" /> PASSARELA EXISTENTE<br />\
    <img src="styles/legend/Arteris_341_3.png" /> PASSEIO PROJETADO<br />\
    <img src="styles/legend/Arteris_341_4.png" /> PAVIMENTO DO DISPOSITIVO<br />\
    <img src="styles/legend/Arteris_341_5.png" /> PAVIMENTO EXISTENTE<br />\
    <img src="styles/legend/Arteris_341_6.png" /> PAVIMENTO PREFEITURA<br />\
    <img src="styles/legend/Arteris_341_7.png" /> AREA DESAPROPRIADA<br />' });
var format_Arteris_342 = new ol.format.GeoJSON();
var features_Arteris_342 = format_Arteris_342.readFeatures(json_Arteris_342, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arteris_342 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arteris_342.addFeatures(features_Arteris_342);
var lyr_Arteris_342 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arteris_342, 
                style: style_Arteris_342,
                popuplayertitle: 'Arteris',
                interactive: true,
                title: '<img src="styles/legend/Arteris_342.png" /> Arteris'
            });
var format_ArterisFaixadeDomnioFrancaSP_3342_343 = new ol.format.GeoJSON();
var features_ArterisFaixadeDomnioFrancaSP_3342_343 = format_ArterisFaixadeDomnioFrancaSP_3342_343.readFeatures(json_ArterisFaixadeDomnioFrancaSP_3342_343, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ArterisFaixadeDomnioFrancaSP_3342_343 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArterisFaixadeDomnioFrancaSP_3342_343.addFeatures(features_ArterisFaixadeDomnioFrancaSP_3342_343);
var lyr_ArterisFaixadeDomnioFrancaSP_3342_343 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArterisFaixadeDomnioFrancaSP_3342_343, 
                style: style_ArterisFaixadeDomnioFrancaSP_3342_343,
                popuplayertitle: 'Arteris Faixa de Domínio Franca — SP_334 (#2)',
                interactive: true,
                title: '<img src="styles/legend/ArterisFaixadeDomnioFrancaSP_3342_343.png" /> Arteris Faixa de Domínio Franca — SP_334 (#2)'
            });
var format_ArterisFaixadeDomnioFrancaSP_3452_344 = new ol.format.GeoJSON();
var features_ArterisFaixadeDomnioFrancaSP_3452_344 = format_ArterisFaixadeDomnioFrancaSP_3452_344.readFeatures(json_ArterisFaixadeDomnioFrancaSP_3452_344, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ArterisFaixadeDomnioFrancaSP_3452_344 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArterisFaixadeDomnioFrancaSP_3452_344.addFeatures(features_ArterisFaixadeDomnioFrancaSP_3452_344);
var lyr_ArterisFaixadeDomnioFrancaSP_3452_344 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArterisFaixadeDomnioFrancaSP_3452_344, 
                style: style_ArterisFaixadeDomnioFrancaSP_3452_344,
                popuplayertitle: 'Arteris Faixa de Domínio Franca — SP_345 (#2)',
                interactive: true,
                title: '<img src="styles/legend/ArterisFaixadeDomnioFrancaSP_3452_344.png" /> Arteris Faixa de Domínio Franca — SP_345 (#2)'
            });
var format_ArterisFaixadeDomnioFrancaSPA_397334_345 = new ol.format.GeoJSON();
var features_ArterisFaixadeDomnioFrancaSPA_397334_345 = format_ArterisFaixadeDomnioFrancaSPA_397334_345.readFeatures(json_ArterisFaixadeDomnioFrancaSPA_397334_345, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ArterisFaixadeDomnioFrancaSPA_397334_345 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArterisFaixadeDomnioFrancaSPA_397334_345.addFeatures(features_ArterisFaixadeDomnioFrancaSPA_397334_345);
var lyr_ArterisFaixadeDomnioFrancaSPA_397334_345 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArterisFaixadeDomnioFrancaSPA_397334_345, 
                style: style_ArterisFaixadeDomnioFrancaSPA_397334_345,
                popuplayertitle: 'Arteris Faixa de Domínio Franca — SPA_397/334',
                interactive: true,
                title: '<img src="styles/legend/ArterisFaixadeDomnioFrancaSPA_397334_345.png" /> Arteris Faixa de Domínio Franca — SPA_397/334'
            });
var format_Arizona_346 = new ol.format.GeoJSON();
var features_Arizona_346 = format_Arizona_346.readFeatures(json_Arizona_346, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arizona_346 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arizona_346.addFeatures(features_Arizona_346);
var lyr_Arizona_346 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arizona_346, 
                style: style_Arizona_346,
                popuplayertitle: 'Arizona',
                interactive: true,
    title: 'Arizona<br />\
    <img src="styles/legend/Arizona_346_0.png" /> APP<br />\
    <img src="styles/legend/Arizona_346_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Arizona_346_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Arizona_346_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Arizona_346_4.png" /> PASSEIO<br />\
    <img src="styles/legend/Arizona_346_5.png" /> RUAS<br />\
    <img src="styles/legend/Arizona_346_6.png" /> VIELA<br />' });
var format_Arizona_347 = new ol.format.GeoJSON();
var features_Arizona_347 = format_Arizona_347.readFeatures(json_Arizona_347, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arizona_347 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arizona_347.addFeatures(features_Arizona_347);
var lyr_Arizona_347 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arizona_347, 
                style: style_Arizona_347,
                popuplayertitle: 'Arizona',
                interactive: true,
                title: '<img src="styles/legend/Arizona_347.png" /> Arizona'
            });
var format_AbuDhabiParadiseResortResidence_348 = new ol.format.GeoJSON();
var features_AbuDhabiParadiseResortResidence_348 = format_AbuDhabiParadiseResortResidence_348.readFeatures(json_AbuDhabiParadiseResortResidence_348, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AbuDhabiParadiseResortResidence_348 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbuDhabiParadiseResortResidence_348.addFeatures(features_AbuDhabiParadiseResortResidence_348);
var lyr_AbuDhabiParadiseResortResidence_348 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbuDhabiParadiseResortResidence_348, 
                style: style_AbuDhabiParadiseResortResidence_348,
                popuplayertitle: 'Abu Dhabi Paradise Resort Residence',
                interactive: true,
    title: 'Abu Dhabi Paradise Resort Residence<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_348_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_348_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_348_2.png" /> CICLOVIA<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_348_3.png" /> LOTES<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_348_4.png" /> PASSEIO<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_348_5.png" /> RUAS<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_348_6.png" /> VIELA<br />' });
var format_AbuDhabiParadiseResortResidence_349 = new ol.format.GeoJSON();
var features_AbuDhabiParadiseResortResidence_349 = format_AbuDhabiParadiseResortResidence_349.readFeatures(json_AbuDhabiParadiseResortResidence_349, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AbuDhabiParadiseResortResidence_349 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbuDhabiParadiseResortResidence_349.addFeatures(features_AbuDhabiParadiseResortResidence_349);
var lyr_AbuDhabiParadiseResortResidence_349 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbuDhabiParadiseResortResidence_349, 
                style: style_AbuDhabiParadiseResortResidence_349,
                popuplayertitle: 'Abu Dhabi Paradise Resort Residence',
                interactive: true,
                title: '<img src="styles/legend/AbuDhabiParadiseResortResidence_349.png" /> Abu Dhabi Paradise Resort Residence'
            });
var format_EtapaAprovado43unid_350 = new ol.format.GeoJSON();
var features_EtapaAprovado43unid_350 = format_EtapaAprovado43unid_350.readFeatures(json_EtapaAprovado43unid_350, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaAprovado43unid_350 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaAprovado43unid_350.addFeatures(features_EtapaAprovado43unid_350);
var lyr_EtapaAprovado43unid_350 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaAprovado43unid_350, 
                style: style_EtapaAprovado43unid_350,
                popuplayertitle: 'Etapa: Aprovado (43 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaAprovado43unid_350.png" /> Etapa: Aprovado (43 unid.)'
            });
var format_EtapaDiretriz22unid_351 = new ol.format.GeoJSON();
var features_EtapaDiretriz22unid_351 = format_EtapaDiretriz22unid_351.readFeatures(json_EtapaDiretriz22unid_351, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaDiretriz22unid_351 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaDiretriz22unid_351.addFeatures(features_EtapaDiretriz22unid_351);
var lyr_EtapaDiretriz22unid_351 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaDiretriz22unid_351, 
                style: style_EtapaDiretriz22unid_351,
                popuplayertitle: 'Etapa: Diretriz (22 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaDiretriz22unid_351.png" /> Etapa: Diretriz (22 unid.)'
            });
var format_EtapaDefinitiva10unid_352 = new ol.format.GeoJSON();
var features_EtapaDefinitiva10unid_352 = format_EtapaDefinitiva10unid_352.readFeatures(json_EtapaDefinitiva10unid_352, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaDefinitiva10unid_352 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaDefinitiva10unid_352.addFeatures(features_EtapaDefinitiva10unid_352);
var lyr_EtapaDefinitiva10unid_352 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaDefinitiva10unid_352, 
                style: style_EtapaDefinitiva10unid_352,
                popuplayertitle: 'Etapa: Definitiva 10 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaDefinitiva10unid_352.png" /> Etapa: Definitiva 10 unid.)'
            });
var format_EtapaPrvia24unid_353 = new ol.format.GeoJSON();
var features_EtapaPrvia24unid_353 = format_EtapaPrvia24unid_353.readFeatures(json_EtapaPrvia24unid_353, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaPrvia24unid_353 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaPrvia24unid_353.addFeatures(features_EtapaPrvia24unid_353);
var lyr_EtapaPrvia24unid_353 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaPrvia24unid_353, 
                style: style_EtapaPrvia24unid_353,
                popuplayertitle: 'Etapa: Prévia (24 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaPrvia24unid_353.png" /> Etapa: Prévia (24 unid.)'
            });
var format_IRREGULAR_354 = new ol.format.GeoJSON();
var features_IRREGULAR_354 = format_IRREGULAR_354.readFeatures(json_IRREGULAR_354, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IRREGULAR_354 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IRREGULAR_354.addFeatures(features_IRREGULAR_354);
var lyr_IRREGULAR_354 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IRREGULAR_354, 
                style: style_IRREGULAR_354,
                popuplayertitle: 'IRREGULAR',
                interactive: true,
                title: '<img src="styles/legend/IRREGULAR_354.png" /> IRREGULAR'
            });
var format_IRREGULAR_355 = new ol.format.GeoJSON();
var features_IRREGULAR_355 = format_IRREGULAR_355.readFeatures(json_IRREGULAR_355, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IRREGULAR_355 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IRREGULAR_355.addFeatures(features_IRREGULAR_355);
var lyr_IRREGULAR_355 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IRREGULAR_355, 
                style: style_IRREGULAR_355,
                popuplayertitle: 'IRREGULAR',
                interactive: true,
                title: '<img src="styles/legend/IRREGULAR_355.png" /> IRREGULAR'
            });
var format_APP1745unid_356 = new ol.format.GeoJSON();
var features_APP1745unid_356 = format_APP1745unid_356.readFeatures(json_APP1745unid_356, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP1745unid_356 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP1745unid_356.addFeatures(features_APP1745unid_356);
var lyr_APP1745unid_356 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP1745unid_356, 
                style: style_APP1745unid_356,
                popuplayertitle: 'APP (1.745 unid.)',
                interactive: true,
                title: '<img src="styles/legend/APP1745unid_356.png" /> APP (1.745 unid.)'
            });
var format_RiosDuplos84unid_357 = new ol.format.GeoJSON();
var features_RiosDuplos84unid_357 = format_RiosDuplos84unid_357.readFeatures(json_RiosDuplos84unid_357, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RiosDuplos84unid_357 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosDuplos84unid_357.addFeatures(features_RiosDuplos84unid_357);
var lyr_RiosDuplos84unid_357 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosDuplos84unid_357, 
                style: style_RiosDuplos84unid_357,
                popuplayertitle: 'Rios Duplos (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosDuplos84unid_357.png" /> Rios Duplos (84 unid.)'
            });
var format_MassasDgua270unid_358 = new ol.format.GeoJSON();
var features_MassasDgua270unid_358 = format_MassasDgua270unid_358.readFeatures(json_MassasDgua270unid_358, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MassasDgua270unid_358 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MassasDgua270unid_358.addFeatures(features_MassasDgua270unid_358);
var lyr_MassasDgua270unid_358 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MassasDgua270unid_358, 
                style: style_MassasDgua270unid_358,
                popuplayertitle: 'Massas D\'água (270 unid.)',
                interactive: true,
                title: '<img src="styles/legend/MassasDgua270unid_358.png" /> Massas D\'água (270 unid.)'
            });
var format_RiosSimples1842unid_359 = new ol.format.GeoJSON();
var features_RiosSimples1842unid_359 = format_RiosSimples1842unid_359.readFeatures(json_RiosSimples1842unid_359, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RiosSimples1842unid_359 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosSimples1842unid_359.addFeatures(features_RiosSimples1842unid_359);
var lyr_RiosSimples1842unid_359 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosSimples1842unid_359, 
                style: style_RiosSimples1842unid_359,
                popuplayertitle: 'Rios Simples (1.842 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosSimples1842unid_359.png" /> Rios Simples (1.842 unid.)'
            });
var format_CORPO_HIDRICO_CANAL_FECHADO_360 = new ol.format.GeoJSON();
var features_CORPO_HIDRICO_CANAL_FECHADO_360 = format_CORPO_HIDRICO_CANAL_FECHADO_360.readFeatures(json_CORPO_HIDRICO_CANAL_FECHADO_360, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CORPO_HIDRICO_CANAL_FECHADO_360 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORPO_HIDRICO_CANAL_FECHADO_360.addFeatures(features_CORPO_HIDRICO_CANAL_FECHADO_360);
var lyr_CORPO_HIDRICO_CANAL_FECHADO_360 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORPO_HIDRICO_CANAL_FECHADO_360, 
                style: style_CORPO_HIDRICO_CANAL_FECHADO_360,
                popuplayertitle: 'CORPO_HIDRICO_CANAL_FECHADO',
                interactive: true,
                title: '<img src="styles/legend/CORPO_HIDRICO_CANAL_FECHADO_360.png" /> CORPO_HIDRICO_CANAL_FECHADO'
            });
var format_CORPO_HIDRICO_CANAL_ABERTO_361 = new ol.format.GeoJSON();
var features_CORPO_HIDRICO_CANAL_ABERTO_361 = format_CORPO_HIDRICO_CANAL_ABERTO_361.readFeatures(json_CORPO_HIDRICO_CANAL_ABERTO_361, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CORPO_HIDRICO_CANAL_ABERTO_361 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORPO_HIDRICO_CANAL_ABERTO_361.addFeatures(features_CORPO_HIDRICO_CANAL_ABERTO_361);
var lyr_CORPO_HIDRICO_CANAL_ABERTO_361 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORPO_HIDRICO_CANAL_ABERTO_361, 
                style: style_CORPO_HIDRICO_CANAL_ABERTO_361,
                popuplayertitle: 'CORPO_HIDRICO_CANAL_ABERTO',
                interactive: true,
                title: '<img src="styles/legend/CORPO_HIDRICO_CANAL_ABERTO_361.png" /> CORPO_HIDRICO_CANAL_ABERTO'
            });
var format_Nascentes821unid_362 = new ol.format.GeoJSON();
var features_Nascentes821unid_362 = format_Nascentes821unid_362.readFeatures(json_Nascentes821unid_362, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Nascentes821unid_362 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes821unid_362.addFeatures(features_Nascentes821unid_362);
var lyr_Nascentes821unid_362 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nascentes821unid_362, 
                style: style_Nascentes821unid_362,
                popuplayertitle: 'Nascentes (821 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Nascentes821unid_362.png" /> Nascentes (821 unid.)'
            });
var format_AntigoAterrodaFazMunicipal_363 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazMunicipal_363 = format_AntigoAterrodaFazMunicipal_363.readFeatures(json_AntigoAterrodaFazMunicipal_363, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazMunicipal_363 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazMunicipal_363.addFeatures(features_AntigoAterrodaFazMunicipal_363);
var lyr_AntigoAterrodaFazMunicipal_363 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazMunicipal_363, 
                style: style_AntigoAterrodaFazMunicipal_363,
                popuplayertitle: 'Antigo Aterro da Faz. Municipal',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazMunicipal_363.png" /> Antigo Aterro da Faz. Municipal'
            });
var format_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_364 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_364 = format_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_364.readFeatures(json_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_364, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_364 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_364.addFeatures(features_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_364);
var lyr_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_364 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_364, 
                style: style_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_364,
                popuplayertitle: 'Antigo Aterro da Faz. Municipal - PMs-Gás/Avatz (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazMunicipalPMsGsAvatz15unid_364.png" /> Antigo Aterro da Faz. Municipal - PMs-Gás/Avatz (15 unid.)'
            });
var format_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_365 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_365 = format_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_365.readFeatures(json_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_365, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_365 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_365.addFeatures(features_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_365);
var lyr_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_365 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_365, 
                style: style_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_365,
                popuplayertitle: 'Antigo Aterro da Faz. Municipal - PMs-Água/Avatz (18 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazMunicipalPMsguaAvatz18unid_365.png" /> Antigo Aterro da Faz. Municipal - PMs-Água/Avatz (18 unid.)'
            });
var format_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_366 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_366 = format_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_366.readFeatures(json_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_366, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_366 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_366.addFeatures(features_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_366);
var lyr_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_366 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_366, 
                style: style_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_366,
                popuplayertitle: 'Antigo Aterro da Faz. Municipal - PMs-Água/Geo-Analítica (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_366.png" /> Antigo Aterro da Faz. Municipal - PMs-Água/Geo-Analítica (15 unid.)'
            });
var format_reaBdaFazMunicipal_367 = new ol.format.GeoJSON();
var features_reaBdaFazMunicipal_367 = format_reaBdaFazMunicipal_367.readFeatures(json_reaBdaFazMunicipal_367, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazMunicipal_367 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazMunicipal_367.addFeatures(features_reaBdaFazMunicipal_367);
var lyr_reaBdaFazMunicipal_367 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazMunicipal_367, 
                style: style_reaBdaFazMunicipal_367,
                popuplayertitle: 'Área "B" da Faz. Municipal',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazMunicipal_367.png" /> Área "B" da Faz. Municipal'
            });
var format_reaBdaFazMunicPoosMonitEngesolve7unid_368 = new ol.format.GeoJSON();
var features_reaBdaFazMunicPoosMonitEngesolve7unid_368 = format_reaBdaFazMunicPoosMonitEngesolve7unid_368.readFeatures(json_reaBdaFazMunicPoosMonitEngesolve7unid_368, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazMunicPoosMonitEngesolve7unid_368 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazMunicPoosMonitEngesolve7unid_368.addFeatures(features_reaBdaFazMunicPoosMonitEngesolve7unid_368);
var lyr_reaBdaFazMunicPoosMonitEngesolve7unid_368 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazMunicPoosMonitEngesolve7unid_368, 
                style: style_reaBdaFazMunicPoosMonitEngesolve7unid_368,
                popuplayertitle: 'Área "B" da Faz. Munic. - Poços Monit. Engesolve (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazMunicPoosMonitEngesolve7unid_368.png" /> Área "B" da Faz. Munic. - Poços Monit. Engesolve (7 unid.)'
            });
var format_AntigoAterrodasMaritacas_369 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacas_369 = format_AntigoAterrodasMaritacas_369.readFeatures(json_AntigoAterrodasMaritacas_369, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacas_369 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacas_369.addFeatures(features_AntigoAterrodasMaritacas_369);
var lyr_AntigoAterrodasMaritacas_369 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacas_369, 
                style: style_AntigoAterrodasMaritacas_369,
                popuplayertitle: 'Antigo Aterro das Maritacas',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacas_369.png" /> Antigo Aterro das Maritacas'
            });
var format_AntigoAterroMaritacas1Etapa28unid_370 = new ol.format.GeoJSON();
var features_AntigoAterroMaritacas1Etapa28unid_370 = format_AntigoAterroMaritacas1Etapa28unid_370.readFeatures(json_AntigoAterroMaritacas1Etapa28unid_370, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterroMaritacas1Etapa28unid_370 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterroMaritacas1Etapa28unid_370.addFeatures(features_AntigoAterroMaritacas1Etapa28unid_370);
var lyr_AntigoAterroMaritacas1Etapa28unid_370 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterroMaritacas1Etapa28unid_370, 
                style: style_AntigoAterroMaritacas1Etapa28unid_370,
                popuplayertitle: 'Antigo AterroMaritacas - 1ª Etapa (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterroMaritacas1Etapa28unid_370.png" /> Antigo AterroMaritacas - 1ª Etapa (28 unid.)'
            });
var format_ParqueZumbidosPalmares_371 = new ol.format.GeoJSON();
var features_ParqueZumbidosPalmares_371 = format_ParqueZumbidosPalmares_371.readFeatures(json_ParqueZumbidosPalmares_371, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueZumbidosPalmares_371 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueZumbidosPalmares_371.addFeatures(features_ParqueZumbidosPalmares_371);
var lyr_ParqueZumbidosPalmares_371 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueZumbidosPalmares_371, 
                style: style_ParqueZumbidosPalmares_371,
                popuplayertitle: 'Parque Zumbi dos Palmares',
                interactive: true,
                title: '<img src="styles/legend/ParqueZumbidosPalmares_371.png" /> Parque Zumbi dos Palmares'
            });
var format_AntigoAterroMaritacas3Etapa5unid_372 = new ol.format.GeoJSON();
var features_AntigoAterroMaritacas3Etapa5unid_372 = format_AntigoAterroMaritacas3Etapa5unid_372.readFeatures(json_AntigoAterroMaritacas3Etapa5unid_372, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterroMaritacas3Etapa5unid_372 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterroMaritacas3Etapa5unid_372.addFeatures(features_AntigoAterroMaritacas3Etapa5unid_372);
var lyr_AntigoAterroMaritacas3Etapa5unid_372 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterroMaritacas3Etapa5unid_372, 
                style: style_AntigoAterroMaritacas3Etapa5unid_372,
                popuplayertitle: 'Antigo Aterro Maritacas - 3ª Etapa (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterroMaritacas3Etapa5unid_372.png" /> Antigo Aterro Maritacas - 3ª Etapa (5 unid.)'
            });
var format_AntigoAterroMaritacas2Etapa41unid_373 = new ol.format.GeoJSON();
var features_AntigoAterroMaritacas2Etapa41unid_373 = format_AntigoAterroMaritacas2Etapa41unid_373.readFeatures(json_AntigoAterroMaritacas2Etapa41unid_373, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterroMaritacas2Etapa41unid_373 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterroMaritacas2Etapa41unid_373.addFeatures(features_AntigoAterroMaritacas2Etapa41unid_373);
var lyr_AntigoAterroMaritacas2Etapa41unid_373 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterroMaritacas2Etapa41unid_373, 
                style: style_AntigoAterroMaritacas2Etapa41unid_373,
                popuplayertitle: 'Antigo Aterro Maritacas - 2ª Etapa (41 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterroMaritacas2Etapa41unid_373.png" /> Antigo Aterro Maritacas - 2ª Etapa (41 unid.)'
            });
var format_PARTE_DA_AREA_G_AVERBADA_374 = new ol.format.GeoJSON();
var features_PARTE_DA_AREA_G_AVERBADA_374 = format_PARTE_DA_AREA_G_AVERBADA_374.readFeatures(json_PARTE_DA_AREA_G_AVERBADA_374, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARTE_DA_AREA_G_AVERBADA_374 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARTE_DA_AREA_G_AVERBADA_374.addFeatures(features_PARTE_DA_AREA_G_AVERBADA_374);
var lyr_PARTE_DA_AREA_G_AVERBADA_374 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARTE_DA_AREA_G_AVERBADA_374, 
                style: style_PARTE_DA_AREA_G_AVERBADA_374,
                popuplayertitle: 'PARTE_DA_AREA_G_AVERBADA',
                interactive: true,
                title: '<img src="styles/legend/PARTE_DA_AREA_G_AVERBADA_374.png" /> PARTE_DA_AREA_G_AVERBADA'
            });
var format_PARTE_DA_AREA_G_A_SER_AVERBADA_375 = new ol.format.GeoJSON();
var features_PARTE_DA_AREA_G_A_SER_AVERBADA_375 = format_PARTE_DA_AREA_G_A_SER_AVERBADA_375.readFeatures(json_PARTE_DA_AREA_G_A_SER_AVERBADA_375, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARTE_DA_AREA_G_A_SER_AVERBADA_375 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARTE_DA_AREA_G_A_SER_AVERBADA_375.addFeatures(features_PARTE_DA_AREA_G_A_SER_AVERBADA_375);
var lyr_PARTE_DA_AREA_G_A_SER_AVERBADA_375 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARTE_DA_AREA_G_A_SER_AVERBADA_375, 
                style: style_PARTE_DA_AREA_G_A_SER_AVERBADA_375,
                popuplayertitle: 'PARTE_DA_AREA_G_A_SER_AVERBADA',
                interactive: true,
                title: '<img src="styles/legend/PARTE_DA_AREA_G_A_SER_AVERBADA_375.png" /> PARTE_DA_AREA_G_A_SER_AVERBADA'
            });
var format_CONJUNTO_HABITACIONAL_376 = new ol.format.GeoJSON();
var features_CONJUNTO_HABITACIONAL_376 = format_CONJUNTO_HABITACIONAL_376.readFeatures(json_CONJUNTO_HABITACIONAL_376, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CONJUNTO_HABITACIONAL_376 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONJUNTO_HABITACIONAL_376.addFeatures(features_CONJUNTO_HABITACIONAL_376);
var lyr_CONJUNTO_HABITACIONAL_376 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONJUNTO_HABITACIONAL_376, 
                style: style_CONJUNTO_HABITACIONAL_376,
                popuplayertitle: 'CONJUNTO_HABITACIONAL',
                interactive: true,
                title: '<img src="styles/legend/CONJUNTO_HABITACIONAL_376.png" /> CONJUNTO_HABITACIONAL'
            });
var format_AV_ACESSO_COLEGIO_AGRICOLA_377 = new ol.format.GeoJSON();
var features_AV_ACESSO_COLEGIO_AGRICOLA_377 = format_AV_ACESSO_COLEGIO_AGRICOLA_377.readFeatures(json_AV_ACESSO_COLEGIO_AGRICOLA_377, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AV_ACESSO_COLEGIO_AGRICOLA_377 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AV_ACESSO_COLEGIO_AGRICOLA_377.addFeatures(features_AV_ACESSO_COLEGIO_AGRICOLA_377);
var lyr_AV_ACESSO_COLEGIO_AGRICOLA_377 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AV_ACESSO_COLEGIO_AGRICOLA_377, 
                style: style_AV_ACESSO_COLEGIO_AGRICOLA_377,
                popuplayertitle: 'AV_ACESSO_COLEGIO_AGRICOLA',
                interactive: true,
                title: '<img src="styles/legend/AV_ACESSO_COLEGIO_AGRICOLA_377.png" /> AV_ACESSO_COLEGIO_AGRICOLA'
            });
var format_AREA_N2_378 = new ol.format.GeoJSON();
var features_AREA_N2_378 = format_AREA_N2_378.readFeatures(json_AREA_N2_378, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_N2_378 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_N2_378.addFeatures(features_AREA_N2_378);
var lyr_AREA_N2_378 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_N2_378, 
                style: style_AREA_N2_378,
                popuplayertitle: 'AREA_N2',
                interactive: true,
                title: '<img src="styles/legend/AREA_N2_378.png" /> AREA_N2'
            });
var format_AREA_N1_379 = new ol.format.GeoJSON();
var features_AREA_N1_379 = format_AREA_N1_379.readFeatures(json_AREA_N1_379, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_N1_379 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_N1_379.addFeatures(features_AREA_N1_379);
var lyr_AREA_N1_379 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_N1_379, 
                style: style_AREA_N1_379,
                popuplayertitle: 'AREA_N1',
                interactive: true,
                title: '<img src="styles/legend/AREA_N1_379.png" /> AREA_N1'
            });
var format_AREA_N_380 = new ol.format.GeoJSON();
var features_AREA_N_380 = format_AREA_N_380.readFeatures(json_AREA_N_380, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_N_380 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_N_380.addFeatures(features_AREA_N_380);
var lyr_AREA_N_380 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_N_380, 
                style: style_AREA_N_380,
                popuplayertitle: 'AREA_N',
                interactive: true,
                title: '<img src="styles/legend/AREA_N_380.png" /> AREA_N'
            });
var format_AREA_K_381 = new ol.format.GeoJSON();
var features_AREA_K_381 = format_AREA_K_381.readFeatures(json_AREA_K_381, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_K_381 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_K_381.addFeatures(features_AREA_K_381);
var lyr_AREA_K_381 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_K_381, 
                style: style_AREA_K_381,
                popuplayertitle: 'AREA_K',
                interactive: true,
                title: '<img src="styles/legend/AREA_K_381.png" /> AREA_K'
            });
var format_AREA_J_382 = new ol.format.GeoJSON();
var features_AREA_J_382 = format_AREA_J_382.readFeatures(json_AREA_J_382, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_J_382 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_J_382.addFeatures(features_AREA_J_382);
var lyr_AREA_J_382 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_J_382, 
                style: style_AREA_J_382,
                popuplayertitle: 'AREA_J',
                interactive: true,
                title: '<img src="styles/legend/AREA_J_382.png" /> AREA_J'
            });
var format_AREA_I_383 = new ol.format.GeoJSON();
var features_AREA_I_383 = format_AREA_I_383.readFeatures(json_AREA_I_383, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_I_383 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_I_383.addFeatures(features_AREA_I_383);
var lyr_AREA_I_383 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_I_383, 
                style: style_AREA_I_383,
                popuplayertitle: 'AREA_I',
                interactive: true,
                title: '<img src="styles/legend/AREA_I_383.png" /> AREA_I'
            });
var format_AREA_H_384 = new ol.format.GeoJSON();
var features_AREA_H_384 = format_AREA_H_384.readFeatures(json_AREA_H_384, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_H_384 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_H_384.addFeatures(features_AREA_H_384);
var lyr_AREA_H_384 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_H_384, 
                style: style_AREA_H_384,
                popuplayertitle: 'AREA_H',
                interactive: true,
                title: '<img src="styles/legend/AREA_H_384.png" /> AREA_H'
            });
var format_AREA_G_385 = new ol.format.GeoJSON();
var features_AREA_G_385 = format_AREA_G_385.readFeatures(json_AREA_G_385, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_G_385 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_G_385.addFeatures(features_AREA_G_385);
var lyr_AREA_G_385 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_G_385, 
                style: style_AREA_G_385,
                popuplayertitle: 'AREA_G',
                interactive: true,
                title: '<img src="styles/legend/AREA_G_385.png" /> AREA_G'
            });
var format_AREA_F_386 = new ol.format.GeoJSON();
var features_AREA_F_386 = format_AREA_F_386.readFeatures(json_AREA_F_386, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_F_386 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_F_386.addFeatures(features_AREA_F_386);
var lyr_AREA_F_386 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_F_386, 
                style: style_AREA_F_386,
                popuplayertitle: 'AREA_F',
                interactive: true,
                title: '<img src="styles/legend/AREA_F_386.png" /> AREA_F'
            });
var format_AREA_E_387 = new ol.format.GeoJSON();
var features_AREA_E_387 = format_AREA_E_387.readFeatures(json_AREA_E_387, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_E_387 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_E_387.addFeatures(features_AREA_E_387);
var lyr_AREA_E_387 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_E_387, 
                style: style_AREA_E_387,
                popuplayertitle: 'AREA_E',
                interactive: true,
                title: '<img src="styles/legend/AREA_E_387.png" /> AREA_E'
            });
var format_AREA_D_388 = new ol.format.GeoJSON();
var features_AREA_D_388 = format_AREA_D_388.readFeatures(json_AREA_D_388, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_D_388 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_D_388.addFeatures(features_AREA_D_388);
var lyr_AREA_D_388 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_D_388, 
                style: style_AREA_D_388,
                popuplayertitle: 'AREA_D',
                interactive: true,
                title: '<img src="styles/legend/AREA_D_388.png" /> AREA_D'
            });
var format_AREA_C_389 = new ol.format.GeoJSON();
var features_AREA_C_389 = format_AREA_C_389.readFeatures(json_AREA_C_389, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_C_389 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_C_389.addFeatures(features_AREA_C_389);
var lyr_AREA_C_389 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_C_389, 
                style: style_AREA_C_389,
                popuplayertitle: 'AREA_C',
                interactive: true,
                title: '<img src="styles/legend/AREA_C_389.png" /> AREA_C'
            });
var format_AREA_B_390 = new ol.format.GeoJSON();
var features_AREA_B_390 = format_AREA_B_390.readFeatures(json_AREA_B_390, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_B_390 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_B_390.addFeatures(features_AREA_B_390);
var lyr_AREA_B_390 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_B_390, 
                style: style_AREA_B_390,
                popuplayertitle: 'AREA_B',
                interactive: true,
                title: '<img src="styles/legend/AREA_B_390.png" /> AREA_B'
            });
var format_AREA_A_391 = new ol.format.GeoJSON();
var features_AREA_A_391 = format_AREA_A_391.readFeatures(json_AREA_A_391, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_A_391 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_A_391.addFeatures(features_AREA_A_391);
var lyr_AREA_A_391 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_A_391, 
                style: style_AREA_A_391,
                popuplayertitle: 'AREA_A',
                interactive: true,
                title: '<img src="styles/legend/AREA_A_391.png" /> AREA_A'
            });
var format_PROPOSTO_392 = new ol.format.GeoJSON();
var features_PROPOSTO_392 = format_PROPOSTO_392.readFeatures(json_PROPOSTO_392, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PROPOSTO_392 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROPOSTO_392.addFeatures(features_PROPOSTO_392);
var lyr_PROPOSTO_392 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROPOSTO_392, 
                style: style_PROPOSTO_392,
                popuplayertitle: 'PROPOSTO',
                interactive: true,
                title: '<img src="styles/legend/PROPOSTO_392.png" /> PROPOSTO'
            });
var format_EM_FUNCIONAMENTO_393 = new ol.format.GeoJSON();
var features_EM_FUNCIONAMENTO_393 = format_EM_FUNCIONAMENTO_393.readFeatures(json_EM_FUNCIONAMENTO_393, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EM_FUNCIONAMENTO_393 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EM_FUNCIONAMENTO_393.addFeatures(features_EM_FUNCIONAMENTO_393);
var lyr_EM_FUNCIONAMENTO_393 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EM_FUNCIONAMENTO_393, 
                style: style_EM_FUNCIONAMENTO_393,
                popuplayertitle: 'EM_FUNCIONAMENTO',
                interactive: true,
                title: '<img src="styles/legend/EM_FUNCIONAMENTO_393.png" /> EM_FUNCIONAMENTO'
            });
var format_EM_CONSTRUCAO_394 = new ol.format.GeoJSON();
var features_EM_CONSTRUCAO_394 = format_EM_CONSTRUCAO_394.readFeatures(json_EM_CONSTRUCAO_394, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EM_CONSTRUCAO_394 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EM_CONSTRUCAO_394.addFeatures(features_EM_CONSTRUCAO_394);
var lyr_EM_CONSTRUCAO_394 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EM_CONSTRUCAO_394, 
                style: style_EM_CONSTRUCAO_394,
                popuplayertitle: 'EM_CONSTRUCAO',
                interactive: true,
                title: '<img src="styles/legend/EM_CONSTRUCAO_394.png" /> EM_CONSTRUCAO'
            });
var format_DrenagensExistentes_395 = new ol.format.GeoJSON();
var features_DrenagensExistentes_395 = format_DrenagensExistentes_395.readFeatures(json_DrenagensExistentes_395, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DrenagensExistentes_395 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrenagensExistentes_395.addFeatures(features_DrenagensExistentes_395);
var lyr_DrenagensExistentes_395 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrenagensExistentes_395, 
                style: style_DrenagensExistentes_395,
                popuplayertitle: 'Drenagens Existentes',
                interactive: true,
    title: 'Drenagens Existentes<br />\
    <img src="styles/legend/DrenagensExistentes_395_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DrenagensExistentes_395_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DrenagensExistentes_395_2.png" /> CAIXA<br />\
    <img src="styles/legend/DrenagensExistentes_395_3.png" /> CANALETA<br />\
    <img src="styles/legend/DrenagensExistentes_395_4.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DrenagensExistentes_395_5.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DrenagensExistentes_395_6.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DrenagensExistentes_395_7.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DrenagensExistentes_395_8.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DrenagensExistentes_395_9.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DrenagensExistentes_395_10.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DrenagensExistentes_395_11.png" /> PV<br />' });
var format_Drenagens_396 = new ol.format.GeoJSON();
var features_Drenagens_396 = format_Drenagens_396.readFeatures(json_Drenagens_396, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Drenagens_396 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drenagens_396.addFeatures(features_Drenagens_396);
var lyr_Drenagens_396 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drenagens_396, 
                style: style_Drenagens_396,
                popuplayertitle: 'Drenagens',
                interactive: true,
    title: 'Drenagens<br />\
    <img src="styles/legend/Drenagens_396_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/Drenagens_396_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/Drenagens_396_2.png" /> CAIXA<br />\
    <img src="styles/legend/Drenagens_396_3.png" /> CANALETA<br />\
    <img src="styles/legend/Drenagens_396_4.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/Drenagens_396_5.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/Drenagens_396_6.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/Drenagens_396_7.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/Drenagens_396_8.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/Drenagens_396_9.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/Drenagens_396_10.png" /> DISSIPADOR<br />\
    <img src="styles/legend/Drenagens_396_11.png" /> PV<br />' });
var format_DRENAGEM_VILLAGIO_DI_FIRENZE_397 = new ol.format.GeoJSON();
var features_DRENAGEM_VILLAGIO_DI_FIRENZE_397 = format_DRENAGEM_VILLAGIO_DI_FIRENZE_397.readFeatures(json_DRENAGEM_VILLAGIO_DI_FIRENZE_397, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_VILLAGIO_DI_FIRENZE_397 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_VILLAGIO_DI_FIRENZE_397.addFeatures(features_DRENAGEM_VILLAGIO_DI_FIRENZE_397);
var lyr_DRENAGEM_VILLAGIO_DI_FIRENZE_397 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_VILLAGIO_DI_FIRENZE_397, 
                style: style_DRENAGEM_VILLAGIO_DI_FIRENZE_397,
                popuplayertitle: 'DRENAGEM_VILLAGIO_DI_FIRENZE',
                interactive: true,
    title: 'DRENAGEM_VILLAGIO_DI_FIRENZE<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_397_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_397_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_397_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_397_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_397_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_397_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_397_6.png" /> PV<br />' });
var format_DRENAGEM_VILLA_SANTA_GIANNA_398 = new ol.format.GeoJSON();
var features_DRENAGEM_VILLA_SANTA_GIANNA_398 = format_DRENAGEM_VILLA_SANTA_GIANNA_398.readFeatures(json_DRENAGEM_VILLA_SANTA_GIANNA_398, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_VILLA_SANTA_GIANNA_398 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_VILLA_SANTA_GIANNA_398.addFeatures(features_DRENAGEM_VILLA_SANTA_GIANNA_398);
var lyr_DRENAGEM_VILLA_SANTA_GIANNA_398 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_VILLA_SANTA_GIANNA_398, 
                style: style_DRENAGEM_VILLA_SANTA_GIANNA_398,
                popuplayertitle: 'DRENAGEM_VILLA_SANTA_GIANNA',
                interactive: true,
    title: 'DRENAGEM_VILLA_SANTA_GIANNA<br />\
    <img src="styles/legend/DRENAGEM_VILLA_SANTA_GIANNA_398_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_VILLA_SANTA_GIANNA_398_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_VILLA_SANTA_GIANNA_398_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_VILLA_SANTA_GIANNA_398_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_VILLA_SANTA_GIANNA_398_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_VILLA_SANTA_GIANNA_398_5.png" /> PV<br />' });
var format_DRENAGEM_VILA_TOTOLI_399 = new ol.format.GeoJSON();
var features_DRENAGEM_VILA_TOTOLI_399 = format_DRENAGEM_VILA_TOTOLI_399.readFeatures(json_DRENAGEM_VILA_TOTOLI_399, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_VILA_TOTOLI_399 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_VILA_TOTOLI_399.addFeatures(features_DRENAGEM_VILA_TOTOLI_399);
var lyr_DRENAGEM_VILA_TOTOLI_399 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_VILA_TOTOLI_399, 
                style: style_DRENAGEM_VILA_TOTOLI_399,
                popuplayertitle: 'DRENAGEM_VILA_TOTOLI',
                interactive: true,
    title: 'DRENAGEM_VILA_TOTOLI<br />\
    <img src="styles/legend/DRENAGEM_VILA_TOTOLI_399_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_VILA_TOTOLI_399_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_VILA_TOTOLI_399_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_VILA_TOTOLI_399_3.png" /> PV<br />' });
var format_DRENAGEM_VILA_REAL_400 = new ol.format.GeoJSON();
var features_DRENAGEM_VILA_REAL_400 = format_DRENAGEM_VILA_REAL_400.readFeatures(json_DRENAGEM_VILA_REAL_400, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_VILA_REAL_400 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_VILA_REAL_400.addFeatures(features_DRENAGEM_VILA_REAL_400);
var lyr_DRENAGEM_VILA_REAL_400 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_VILA_REAL_400, 
                style: style_DRENAGEM_VILA_REAL_400,
                popuplayertitle: 'DRENAGEM_VILA_REAL',
                interactive: true,
    title: 'DRENAGEM_VILA_REAL<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_400_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_400_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_400_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_400_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_400_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_400_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_400_6.png" /> PV<br />' });
var format_DRENAGEM_VILA_DORATTA_401 = new ol.format.GeoJSON();
var features_DRENAGEM_VILA_DORATTA_401 = format_DRENAGEM_VILA_DORATTA_401.readFeatures(json_DRENAGEM_VILA_DORATTA_401, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_VILA_DORATTA_401 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_VILA_DORATTA_401.addFeatures(features_DRENAGEM_VILA_DORATTA_401);
var lyr_DRENAGEM_VILA_DORATTA_401 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_VILA_DORATTA_401, 
                style: style_DRENAGEM_VILA_DORATTA_401,
                popuplayertitle: 'DRENAGEM_VILA_DORATTA',
                interactive: true,
    title: 'DRENAGEM_VILA_DORATTA<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_401_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_401_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_401_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_401_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_401_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_401_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_401_6.png" /> PV<br />' });
var format_DRENAGEM_SAO_PEDRO_II_402 = new ol.format.GeoJSON();
var features_DRENAGEM_SAO_PEDRO_II_402 = format_DRENAGEM_SAO_PEDRO_II_402.readFeatures(json_DRENAGEM_SAO_PEDRO_II_402, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_SAO_PEDRO_II_402 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_SAO_PEDRO_II_402.addFeatures(features_DRENAGEM_SAO_PEDRO_II_402);
var lyr_DRENAGEM_SAO_PEDRO_II_402 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_SAO_PEDRO_II_402, 
                style: style_DRENAGEM_SAO_PEDRO_II_402,
                popuplayertitle: 'DRENAGEM_SAO_PEDRO_II',
                interactive: true,
    title: 'DRENAGEM_SAO_PEDRO_II<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_402_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_402_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_402_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_402_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_402_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_402_5.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_402_6.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_402_7.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_402_8.png" /> PV<br />' });
var format_DRENAGEM_SANTA_FE_403 = new ol.format.GeoJSON();
var features_DRENAGEM_SANTA_FE_403 = format_DRENAGEM_SANTA_FE_403.readFeatures(json_DRENAGEM_SANTA_FE_403, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_SANTA_FE_403 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_SANTA_FE_403.addFeatures(features_DRENAGEM_SANTA_FE_403);
var lyr_DRENAGEM_SANTA_FE_403 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_SANTA_FE_403, 
                style: style_DRENAGEM_SANTA_FE_403,
                popuplayertitle: 'DRENAGEM_SANTA_FE',
                interactive: true,
    title: 'DRENAGEM_SANTA_FE<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_403_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_403_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_403_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_403_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_403_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_403_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_403_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_403_7.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_TELLINI_404 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_TELLINI_404 = format_DRENAGEM_RESIDENCIAL_TELLINI_404.readFeatures(json_DRENAGEM_RESIDENCIAL_TELLINI_404, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_TELLINI_404 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_TELLINI_404.addFeatures(features_DRENAGEM_RESIDENCIAL_TELLINI_404);
var lyr_DRENAGEM_RESIDENCIAL_TELLINI_404 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_TELLINI_404, 
                style: style_DRENAGEM_RESIDENCIAL_TELLINI_404,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_TELLINI',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_TELLINI<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_404_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_404_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_404_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_404_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_404_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_404_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_404_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_404_7.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405 = format_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405.readFeatures(json_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405.addFeatures(features_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405);
var lyr_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405, 
                style: style_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_SAO_TOMAZ',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_SAO_TOMAZ<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405_5.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406 = format_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406.readFeatures(json_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406.addFeatures(features_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406);
var lyr_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406, 
                style: style_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406_8.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_SANTA_INES_407 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_SANTA_INES_407 = format_DRENAGEM_RESIDENCIAL_SANTA_INES_407.readFeatures(json_DRENAGEM_RESIDENCIAL_SANTA_INES_407, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_SANTA_INES_407 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_SANTA_INES_407.addFeatures(features_DRENAGEM_RESIDENCIAL_SANTA_INES_407);
var lyr_DRENAGEM_RESIDENCIAL_SANTA_INES_407 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_SANTA_INES_407, 
                style: style_DRENAGEM_RESIDENCIAL_SANTA_INES_407,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_SANTA_INES',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_SANTA_INES<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_407_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_407_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_407_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_407_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_407_4.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_407_5.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_407_6.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_407_7.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_407_8.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_407_9.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408 = format_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408.readFeatures(json_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408.addFeatures(features_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408);
var lyr_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408, 
                style: style_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408_3.png" /> DIAMETRO 1800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408_8.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409 = format_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409.readFeatures(json_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409.addFeatures(features_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409);
var lyr_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409, 
                style: style_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_POUSO_ALEGRE',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_POUSO_ALEGRE<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409_4.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409_5.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409_6.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409_7.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409_8.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409_9.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410 = format_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410.readFeatures(json_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410.addFeatures(features_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410);
var lyr_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410, 
                style: style_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_PARQUE_FLORA',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_PARQUE_FLORA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410_8.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_PALERMO_411 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_PALERMO_411 = format_DRENAGEM_RESIDENCIAL_PALERMO_411.readFeatures(json_DRENAGEM_RESIDENCIAL_PALERMO_411, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_PALERMO_411 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_PALERMO_411.addFeatures(features_DRENAGEM_RESIDENCIAL_PALERMO_411);
var lyr_DRENAGEM_RESIDENCIAL_PALERMO_411 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_PALERMO_411, 
                style: style_DRENAGEM_RESIDENCIAL_PALERMO_411,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_PALERMO',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_PALERMO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_411_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_411_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_411_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_411_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_411_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_411_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_411_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_411_7.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_ITAPUA_412 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_ITAPUA_412 = format_DRENAGEM_RESIDENCIAL_ITAPUA_412.readFeatures(json_DRENAGEM_RESIDENCIAL_ITAPUA_412, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_ITAPUA_412 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_ITAPUA_412.addFeatures(features_DRENAGEM_RESIDENCIAL_ITAPUA_412);
var lyr_DRENAGEM_RESIDENCIAL_ITAPUA_412 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_ITAPUA_412, 
                style: style_DRENAGEM_RESIDENCIAL_ITAPUA_412,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_ITAPUA',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_ITAPUA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ITAPUA_412_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ITAPUA_412_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ITAPUA_412_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ITAPUA_412_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ITAPUA_412_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ITAPUA_412_5.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_GAIA_413 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_GAIA_413 = format_DRENAGEM_RESIDENCIAL_GAIA_413.readFeatures(json_DRENAGEM_RESIDENCIAL_GAIA_413, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_GAIA_413 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_GAIA_413.addFeatures(features_DRENAGEM_RESIDENCIAL_GAIA_413);
var lyr_DRENAGEM_RESIDENCIAL_GAIA_413 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_GAIA_413, 
                style: style_DRENAGEM_RESIDENCIAL_GAIA_413,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_GAIA',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_GAIA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_413_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_413_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_413_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_413_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_413_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_413_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_413_6.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_FERRACINI_414 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_FERRACINI_414 = format_DRENAGEM_RESIDENCIAL_FERRACINI_414.readFeatures(json_DRENAGEM_RESIDENCIAL_FERRACINI_414, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_FERRACINI_414 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_FERRACINI_414.addFeatures(features_DRENAGEM_RESIDENCIAL_FERRACINI_414);
var lyr_DRENAGEM_RESIDENCIAL_FERRACINI_414 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_FERRACINI_414, 
                style: style_DRENAGEM_RESIDENCIAL_FERRACINI_414,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_FERRACINI',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_FERRACINI<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FERRACINI_414_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FERRACINI_414_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FERRACINI_414_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FERRACINI_414_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FERRACINI_414_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FERRACINI_414_5.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_FAGGIONI_415 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_FAGGIONI_415 = format_DRENAGEM_RESIDENCIAL_FAGGIONI_415.readFeatures(json_DRENAGEM_RESIDENCIAL_FAGGIONI_415, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_FAGGIONI_415 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_FAGGIONI_415.addFeatures(features_DRENAGEM_RESIDENCIAL_FAGGIONI_415);
var lyr_DRENAGEM_RESIDENCIAL_FAGGIONI_415 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_FAGGIONI_415, 
                style: style_DRENAGEM_RESIDENCIAL_FAGGIONI_415,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_FAGGIONI',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_FAGGIONI<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_415_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_415_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_415_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_415_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_415_4.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_415_5.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_415_6.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_415_7.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_415_8.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_415_9.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_ECOSTILO_416 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_ECOSTILO_416 = format_DRENAGEM_RESIDENCIAL_ECOSTILO_416.readFeatures(json_DRENAGEM_RESIDENCIAL_ECOSTILO_416, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_ECOSTILO_416 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_ECOSTILO_416.addFeatures(features_DRENAGEM_RESIDENCIAL_ECOSTILO_416);
var lyr_DRENAGEM_RESIDENCIAL_ECOSTILO_416 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_ECOSTILO_416, 
                style: style_DRENAGEM_RESIDENCIAL_ECOSTILO_416,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_ECOSTILO',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_ECOSTILO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_416_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_416_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_416_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_416_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_416_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_416_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_416_6.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_DOURADO_417 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_DOURADO_417 = format_DRENAGEM_RESIDENCIAL_DOURADO_417.readFeatures(json_DRENAGEM_RESIDENCIAL_DOURADO_417, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_DOURADO_417 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_DOURADO_417.addFeatures(features_DRENAGEM_RESIDENCIAL_DOURADO_417);
var lyr_DRENAGEM_RESIDENCIAL_DOURADO_417 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_DOURADO_417, 
                style: style_DRENAGEM_RESIDENCIAL_DOURADO_417,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_DOURADO',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_DOURADO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_417_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_417_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_417_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_417_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_417_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_417_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_417_6.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_BALDASSARI_418 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_BALDASSARI_418 = format_DRENAGEM_RESIDENCIAL_BALDASSARI_418.readFeatures(json_DRENAGEM_RESIDENCIAL_BALDASSARI_418, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_BALDASSARI_418 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_BALDASSARI_418.addFeatures(features_DRENAGEM_RESIDENCIAL_BALDASSARI_418);
var lyr_DRENAGEM_RESIDENCIAL_BALDASSARI_418 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_BALDASSARI_418, 
                style: style_DRENAGEM_RESIDENCIAL_BALDASSARI_418,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_BALDASSARI',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_BALDASSARI<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_BALDASSARI_418_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_BALDASSARI_418_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_BALDASSARI_418_2.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_BALDASSARI_418_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_BALDASSARI_418_4.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_ANA_HELENA_419 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_ANA_HELENA_419 = format_DRENAGEM_RESIDENCIAL_ANA_HELENA_419.readFeatures(json_DRENAGEM_RESIDENCIAL_ANA_HELENA_419, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_ANA_HELENA_419 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_ANA_HELENA_419.addFeatures(features_DRENAGEM_RESIDENCIAL_ANA_HELENA_419);
var lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_419 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_ANA_HELENA_419, 
                style: style_DRENAGEM_RESIDENCIAL_ANA_HELENA_419,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_ANA_HELENA',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_ANA_HELENA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_419_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_419_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_419_2.png" /> CAIXA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_419_3.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_419_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_419_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_419_6.png" /> DISSIPADOR<br />' });
var format_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420 = format_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420.readFeatures(json_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420.addFeatures(features_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420);
var lyr_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420, 
                style: style_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420_5.png" /> PV<br />' });
var format_DRENAGEM_RECREIO_CAMPO_BELO_421 = new ol.format.GeoJSON();
var features_DRENAGEM_RECREIO_CAMPO_BELO_421 = format_DRENAGEM_RECREIO_CAMPO_BELO_421.readFeatures(json_DRENAGEM_RECREIO_CAMPO_BELO_421, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RECREIO_CAMPO_BELO_421 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RECREIO_CAMPO_BELO_421.addFeatures(features_DRENAGEM_RECREIO_CAMPO_BELO_421);
var lyr_DRENAGEM_RECREIO_CAMPO_BELO_421 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RECREIO_CAMPO_BELO_421, 
                style: style_DRENAGEM_RECREIO_CAMPO_BELO_421,
                popuplayertitle: 'DRENAGEM_RECREIO_CAMPO_BELO',
                interactive: true,
    title: 'DRENAGEM_RECREIO_CAMPO_BELO<br />\
    <img src="styles/legend/DRENAGEM_RECREIO_CAMPO_BELO_421_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RECREIO_CAMPO_BELO_421_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RECREIO_CAMPO_BELO_421_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RECREIO_CAMPO_BELO_421_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RECREIO_CAMPO_BELO_421_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RECREIO_CAMPO_BELO_421_5.png" /> PV<br />' });
var format_DRENAGEM_RECANTO_MENEGHETTI_422 = new ol.format.GeoJSON();
var features_DRENAGEM_RECANTO_MENEGHETTI_422 = format_DRENAGEM_RECANTO_MENEGHETTI_422.readFeatures(json_DRENAGEM_RECANTO_MENEGHETTI_422, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RECANTO_MENEGHETTI_422 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RECANTO_MENEGHETTI_422.addFeatures(features_DRENAGEM_RECANTO_MENEGHETTI_422);
var lyr_DRENAGEM_RECANTO_MENEGHETTI_422 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RECANTO_MENEGHETTI_422, 
                style: style_DRENAGEM_RECANTO_MENEGHETTI_422,
                popuplayertitle: 'DRENAGEM_RECANTO_MENEGHETTI',
                interactive: true,
    title: 'DRENAGEM_RECANTO_MENEGHETTI<br />\
    <img src="styles/legend/DRENAGEM_RECANTO_MENEGHETTI_422_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RECANTO_MENEGHETTI_422_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RECANTO_MENEGHETTI_422_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RECANTO_MENEGHETTI_422_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RECANTO_MENEGHETTI_422_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RECANTO_MENEGHETTI_422_5.png" /> PV<br />' });
var format_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_423 = new ol.format.GeoJSON();
var features_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_423 = format_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_423.readFeatures(json_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_423, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_423 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_423.addFeatures(features_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_423);
var lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_423 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_423, 
                style: style_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_423,
                popuplayertitle: 'DRENAGEM_PROL_VILA_SANTA_TEREZINHA',
                interactive: true,
    title: 'DRENAGEM_PROL_VILA_SANTA_TEREZINHA<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_SANTA_TEREZINHA_423_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_SANTA_TEREZINHA_423_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_SANTA_TEREZINHA_423_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_SANTA_TEREZINHA_423_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_SANTA_TEREZINHA_423_4.png" /> PV<br />' });
var format_DRENAGEM_PROL_VILA_ISABEL_424 = new ol.format.GeoJSON();
var features_DRENAGEM_PROL_VILA_ISABEL_424 = format_DRENAGEM_PROL_VILA_ISABEL_424.readFeatures(json_DRENAGEM_PROL_VILA_ISABEL_424, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PROL_VILA_ISABEL_424 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PROL_VILA_ISABEL_424.addFeatures(features_DRENAGEM_PROL_VILA_ISABEL_424);
var lyr_DRENAGEM_PROL_VILA_ISABEL_424 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PROL_VILA_ISABEL_424, 
                style: style_DRENAGEM_PROL_VILA_ISABEL_424,
                popuplayertitle: 'DRENAGEM_PROL_VILA_ISABEL',
                interactive: true,
    title: 'DRENAGEM_PROL_VILA_ISABEL<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_ISABEL_424_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_ISABEL_424_1.png" /> DIAMETRO 300<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_ISABEL_424_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_ISABEL_424_3.png" /> DIAMETRO 600<br />' });
var format_DRENAGEM_PROL_JARDIM_MARTINS_425 = new ol.format.GeoJSON();
var features_DRENAGEM_PROL_JARDIM_MARTINS_425 = format_DRENAGEM_PROL_JARDIM_MARTINS_425.readFeatures(json_DRENAGEM_PROL_JARDIM_MARTINS_425, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PROL_JARDIM_MARTINS_425 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PROL_JARDIM_MARTINS_425.addFeatures(features_DRENAGEM_PROL_JARDIM_MARTINS_425);
var lyr_DRENAGEM_PROL_JARDIM_MARTINS_425 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PROL_JARDIM_MARTINS_425, 
                style: style_DRENAGEM_PROL_JARDIM_MARTINS_425,
                popuplayertitle: 'DRENAGEM_PROL_JARDIM_MARTINS',
                interactive: true,
    title: 'DRENAGEM_PROL_JARDIM_MARTINS<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_425_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_425_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_425_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_425_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_425_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_425_5.png" /> PV<br />' });
var format_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426 = new ol.format.GeoJSON();
var features_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426 = format_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426.readFeatures(json_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426.addFeatures(features_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426);
var lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426, 
                style: style_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426,
                popuplayertitle: 'DRENAGEM_POLO_IND_ABILIO_NOGUEIRA',
                interactive: true,
    title: 'DRENAGEM_POLO_IND_ABILIO_NOGUEIRA<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426_7.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_UNIVERSITARIO_427 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_UNIVERSITARIO_427 = format_DRENAGEM_PARQUE_UNIVERSITARIO_427.readFeatures(json_DRENAGEM_PARQUE_UNIVERSITARIO_427, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_UNIVERSITARIO_427 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_UNIVERSITARIO_427.addFeatures(features_DRENAGEM_PARQUE_UNIVERSITARIO_427);
var lyr_DRENAGEM_PARQUE_UNIVERSITARIO_427 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_UNIVERSITARIO_427, 
                style: style_DRENAGEM_PARQUE_UNIVERSITARIO_427,
                popuplayertitle: 'DRENAGEM_PARQUE_UNIVERSITARIO',
                interactive: true,
    title: 'DRENAGEM_PARQUE_UNIVERSITARIO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_427_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_427_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_427_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_427_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_427_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_427_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_427_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_427_7.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_SANTA_ADELIA_428 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_SANTA_ADELIA_428 = format_DRENAGEM_PARQUE_SANTA_ADELIA_428.readFeatures(json_DRENAGEM_PARQUE_SANTA_ADELIA_428, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_SANTA_ADELIA_428 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_SANTA_ADELIA_428.addFeatures(features_DRENAGEM_PARQUE_SANTA_ADELIA_428);
var lyr_DRENAGEM_PARQUE_SANTA_ADELIA_428 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_SANTA_ADELIA_428, 
                style: style_DRENAGEM_PARQUE_SANTA_ADELIA_428,
                popuplayertitle: 'DRENAGEM_PARQUE_SANTA_ADELIA',
                interactive: true,
    title: 'DRENAGEM_PARQUE_SANTA_ADELIA<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_428_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_428_1.png" /> CAIXA<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_428_2.png" /> DIAMETRO 300<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_428_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_428_4.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_428_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_428_6.png" /> DIAMETRO 700<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_428_7.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_MOEMA_429 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_MOEMA_429 = format_DRENAGEM_PARQUE_MOEMA_429.readFeatures(json_DRENAGEM_PARQUE_MOEMA_429, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_MOEMA_429 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_MOEMA_429.addFeatures(features_DRENAGEM_PARQUE_MOEMA_429);
var lyr_DRENAGEM_PARQUE_MOEMA_429 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_MOEMA_429, 
                style: style_DRENAGEM_PARQUE_MOEMA_429,
                popuplayertitle: 'DRENAGEM_PARQUE_MOEMA',
                interactive: true,
    title: 'DRENAGEM_PARQUE_MOEMA<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_429_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_429_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_429_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_429_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_429_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_429_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_429_6.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_JOAO_LEITE_430 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_JOAO_LEITE_430 = format_DRENAGEM_PARQUE_JOAO_LEITE_430.readFeatures(json_DRENAGEM_PARQUE_JOAO_LEITE_430, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_JOAO_LEITE_430 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_JOAO_LEITE_430.addFeatures(features_DRENAGEM_PARQUE_JOAO_LEITE_430);
var lyr_DRENAGEM_PARQUE_JOAO_LEITE_430 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_JOAO_LEITE_430, 
                style: style_DRENAGEM_PARQUE_JOAO_LEITE_430,
                popuplayertitle: 'DRENAGEM_PARQUE_JOAO_LEITE',
                interactive: true,
    title: 'DRENAGEM_PARQUE_JOAO_LEITE<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_430_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_430_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_430_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_430_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_430_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_430_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_430_6.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_DOS_SABIAS_431 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_DOS_SABIAS_431 = format_DRENAGEM_PARQUE_DOS_SABIAS_431.readFeatures(json_DRENAGEM_PARQUE_DOS_SABIAS_431, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_DOS_SABIAS_431 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_DOS_SABIAS_431.addFeatures(features_DRENAGEM_PARQUE_DOS_SABIAS_431);
var lyr_DRENAGEM_PARQUE_DOS_SABIAS_431 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_DOS_SABIAS_431, 
                style: style_DRENAGEM_PARQUE_DOS_SABIAS_431,
                popuplayertitle: 'DRENAGEM_PARQUE_DOS_SABIAS',
                interactive: true,
    title: 'DRENAGEM_PARQUE_DOS_SABIAS<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_431_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_431_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_431_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_431_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_431_4.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_431_5.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_431_6.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_431_7.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_431_8.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_431_9.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_DOS_COQUEIROS_432 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_DOS_COQUEIROS_432 = format_DRENAGEM_PARQUE_DOS_COQUEIROS_432.readFeatures(json_DRENAGEM_PARQUE_DOS_COQUEIROS_432, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_DOS_COQUEIROS_432 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_DOS_COQUEIROS_432.addFeatures(features_DRENAGEM_PARQUE_DOS_COQUEIROS_432);
var lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_432 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_DOS_COQUEIROS_432, 
                style: style_DRENAGEM_PARQUE_DOS_COQUEIROS_432,
                popuplayertitle: 'DRENAGEM_PARQUE_DOS_COQUEIROS',
                interactive: true,
    title: 'DRENAGEM_PARQUE_DOS_COQUEIROS<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_432_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_432_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_432_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_432_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_432_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_432_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_432_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_432_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_432_8.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_DAS_ARVORES_433 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_DAS_ARVORES_433 = format_DRENAGEM_PARQUE_DAS_ARVORES_433.readFeatures(json_DRENAGEM_PARQUE_DAS_ARVORES_433, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_DAS_ARVORES_433 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_DAS_ARVORES_433.addFeatures(features_DRENAGEM_PARQUE_DAS_ARVORES_433);
var lyr_DRENAGEM_PARQUE_DAS_ARVORES_433 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_DAS_ARVORES_433, 
                style: style_DRENAGEM_PARQUE_DAS_ARVORES_433,
                popuplayertitle: 'DRENAGEM_PARQUE_DAS_ARVORES',
                interactive: true,
    title: 'DRENAGEM_PARQUE_DAS_ARVORES<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DAS_ARVORES_433_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DAS_ARVORES_433_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DAS_ARVORES_433_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DAS_ARVORES_433_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DAS_ARVORES_433_4.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_CASTELO_434 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_CASTELO_434 = format_DRENAGEM_PARQUE_CASTELO_434.readFeatures(json_DRENAGEM_PARQUE_CASTELO_434, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_CASTELO_434 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_CASTELO_434.addFeatures(features_DRENAGEM_PARQUE_CASTELO_434);
var lyr_DRENAGEM_PARQUE_CASTELO_434 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_CASTELO_434, 
                style: style_DRENAGEM_PARQUE_CASTELO_434,
                popuplayertitle: 'DRENAGEM_PARQUE_CASTELO',
                interactive: true,
    title: 'DRENAGEM_PARQUE_CASTELO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_CASTELO_434_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_CASTELO_434_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_CASTELO_434_2.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_CASTELO_434_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_CASTELO_434_4.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_BOA_VISTA_435 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_BOA_VISTA_435 = format_DRENAGEM_PARQUE_BOA_VISTA_435.readFeatures(json_DRENAGEM_PARQUE_BOA_VISTA_435, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_BOA_VISTA_435 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_BOA_VISTA_435.addFeatures(features_DRENAGEM_PARQUE_BOA_VISTA_435);
var lyr_DRENAGEM_PARQUE_BOA_VISTA_435 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_BOA_VISTA_435, 
                style: style_DRENAGEM_PARQUE_BOA_VISTA_435,
                popuplayertitle: 'DRENAGEM_PARQUE_BOA_VISTA',
                interactive: true,
    title: 'DRENAGEM_PARQUE_BOA_VISTA<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_BOA_VISTA_435_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_BOA_VISTA_435_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_BOA_VISTA_435_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_BOA_VISTA_435_3.png" /> PV<br />' });
var format_DRENAGEM_PARQ_RESD_SANTA_MARIA_436 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQ_RESD_SANTA_MARIA_436 = format_DRENAGEM_PARQ_RESD_SANTA_MARIA_436.readFeatures(json_DRENAGEM_PARQ_RESD_SANTA_MARIA_436, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQ_RESD_SANTA_MARIA_436 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQ_RESD_SANTA_MARIA_436.addFeatures(features_DRENAGEM_PARQ_RESD_SANTA_MARIA_436);
var lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_436 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQ_RESD_SANTA_MARIA_436, 
                style: style_DRENAGEM_PARQ_RESD_SANTA_MARIA_436,
                popuplayertitle: 'DRENAGEM_PARQ_RESD_SANTA_MARIA',
                interactive: true,
    title: 'DRENAGEM_PARQ_RESD_SANTA_MARIA<br />\
    <img src="styles/legend/DRENAGEM_PARQ_RESD_SANTA_MARIA_436_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQ_RESD_SANTA_MARIA_436_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQ_RESD_SANTA_MARIA_436_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQ_RESD_SANTA_MARIA_436_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQ_RESD_SANTA_MARIA_436_4.png" /> PV<br />' });
var format_DRENAGEM_PARAGON_437 = new ol.format.GeoJSON();
var features_DRENAGEM_PARAGON_437 = format_DRENAGEM_PARAGON_437.readFeatures(json_DRENAGEM_PARAGON_437, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARAGON_437 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARAGON_437.addFeatures(features_DRENAGEM_PARAGON_437);
var lyr_DRENAGEM_PARAGON_437 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARAGON_437, 
                style: style_DRENAGEM_PARAGON_437,
                popuplayertitle: 'DRENAGEM_PARAGON',
                interactive: true,
    title: 'DRENAGEM_PARAGON<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_437_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_437_1.png" /> CAIXA<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_437_2.png" /> CANALETA<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_437_3.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_437_4.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_437_5.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_437_6.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_437_7.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_437_8.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_437_9.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_437_10.png" /> PV<br />' });
var format_DRENAGEM_NAIR_RETUSSI_I_438 = new ol.format.GeoJSON();
var features_DRENAGEM_NAIR_RETUSSI_I_438 = format_DRENAGEM_NAIR_RETUSSI_I_438.readFeatures(json_DRENAGEM_NAIR_RETUSSI_I_438, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_NAIR_RETUSSI_I_438 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_NAIR_RETUSSI_I_438.addFeatures(features_DRENAGEM_NAIR_RETUSSI_I_438);
var lyr_DRENAGEM_NAIR_RETUSSI_I_438 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_NAIR_RETUSSI_I_438, 
                style: style_DRENAGEM_NAIR_RETUSSI_I_438,
                popuplayertitle: 'DRENAGEM_NAIR_RETUSSI_I',
                interactive: true,
    title: 'DRENAGEM_NAIR_RETUSSI_I<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_438_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_438_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_438_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_438_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_438_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_438_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_438_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_438_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_438_8.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_SAO_GABRIEL_439 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_SAO_GABRIEL_439 = format_DRENAGEM_JARDIM_SAO_GABRIEL_439.readFeatures(json_DRENAGEM_JARDIM_SAO_GABRIEL_439, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_SAO_GABRIEL_439 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_SAO_GABRIEL_439.addFeatures(features_DRENAGEM_JARDIM_SAO_GABRIEL_439);
var lyr_DRENAGEM_JARDIM_SAO_GABRIEL_439 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_SAO_GABRIEL_439, 
                style: style_DRENAGEM_JARDIM_SAO_GABRIEL_439,
                popuplayertitle: 'DRENAGEM_JARDIM_SAO_GABRIEL',
                interactive: true,
    title: 'DRENAGEM_JARDIM_SAO_GABRIEL<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_439_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_439_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_439_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_439_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_439_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_439_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_439_6.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_SANTA_LUCIA_440 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_SANTA_LUCIA_440 = format_DRENAGEM_JARDIM_SANTA_LUCIA_440.readFeatures(json_DRENAGEM_JARDIM_SANTA_LUCIA_440, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_SANTA_LUCIA_440 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_SANTA_LUCIA_440.addFeatures(features_DRENAGEM_JARDIM_SANTA_LUCIA_440);
var lyr_DRENAGEM_JARDIM_SANTA_LUCIA_440 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_SANTA_LUCIA_440, 
                style: style_DRENAGEM_JARDIM_SANTA_LUCIA_440,
                popuplayertitle: 'DRENAGEM_JARDIM_SANTA_LUCIA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_SANTA_LUCIA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_440_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_440_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_440_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_440_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_440_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_440_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_440_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_440_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_440_8.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_PULICANO_441 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_PULICANO_441 = format_DRENAGEM_JARDIM_PULICANO_441.readFeatures(json_DRENAGEM_JARDIM_PULICANO_441, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_PULICANO_441 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_PULICANO_441.addFeatures(features_DRENAGEM_JARDIM_PULICANO_441);
var lyr_DRENAGEM_JARDIM_PULICANO_441 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_PULICANO_441, 
                style: style_DRENAGEM_JARDIM_PULICANO_441,
                popuplayertitle: 'DRENAGEM_JARDIM_PULICANO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_PULICANO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_441_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_441_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_441_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_441_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_441_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_441_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_441_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_441_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_441_8.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_PORTINARI_442 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_PORTINARI_442 = format_DRENAGEM_JARDIM_PORTINARI_442.readFeatures(json_DRENAGEM_JARDIM_PORTINARI_442, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_PORTINARI_442 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_PORTINARI_442.addFeatures(features_DRENAGEM_JARDIM_PORTINARI_442);
var lyr_DRENAGEM_JARDIM_PORTINARI_442 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_PORTINARI_442, 
                style: style_DRENAGEM_JARDIM_PORTINARI_442,
                popuplayertitle: 'DRENAGEM_JARDIM_PORTINARI',
                interactive: true,
    title: 'DRENAGEM_JARDIM_PORTINARI<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_442_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_442_1.png" /> DIAMETRO 300<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_442_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_442_3.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_442_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_442_5.png" /> DIAMETRO 700<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_442_6.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_PIRATININGA_443 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_PIRATININGA_443 = format_DRENAGEM_JARDIM_PIRATININGA_443.readFeatures(json_DRENAGEM_JARDIM_PIRATININGA_443, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_PIRATININGA_443 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_PIRATININGA_443.addFeatures(features_DRENAGEM_JARDIM_PIRATININGA_443);
var lyr_DRENAGEM_JARDIM_PIRATININGA_443 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_PIRATININGA_443, 
                style: style_DRENAGEM_JARDIM_PIRATININGA_443,
                popuplayertitle: 'DRENAGEM_JARDIM_PIRATININGA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_PIRATININGA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_443_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_443_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_443_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_443_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_443_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_443_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_443_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_443_7.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_PALMA_444 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_PALMA_444 = format_DRENAGEM_JARDIM_PALMA_444.readFeatures(json_DRENAGEM_JARDIM_PALMA_444, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_PALMA_444 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_PALMA_444.addFeatures(features_DRENAGEM_JARDIM_PALMA_444);
var lyr_DRENAGEM_JARDIM_PALMA_444 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_PALMA_444, 
                style: style_DRENAGEM_JARDIM_PALMA_444,
                popuplayertitle: 'DRENAGEM_JARDIM_PALMA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_PALMA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_444_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_444_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_444_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_444_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_444_4.png" /> DIAMETRO 900<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_444_5.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_445 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_445 = format_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_445.readFeatures(json_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_445, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_445 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_445.addFeatures(features_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_445);
var lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_445 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_445, 
                style: style_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_445,
                popuplayertitle: 'DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS',
                interactive: true,
    title: 'DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_445_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_445_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_445_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_445_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_445_4.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_NOEMIA_446 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_NOEMIA_446 = format_DRENAGEM_JARDIM_NOEMIA_446.readFeatures(json_DRENAGEM_JARDIM_NOEMIA_446, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_NOEMIA_446 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_NOEMIA_446.addFeatures(features_DRENAGEM_JARDIM_NOEMIA_446);
var lyr_DRENAGEM_JARDIM_NOEMIA_446 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_NOEMIA_446, 
                style: style_DRENAGEM_JARDIM_NOEMIA_446,
                popuplayertitle: 'DRENAGEM_JARDIM_NOEMIA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_NOEMIA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOEMIA_446_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOEMIA_446_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOEMIA_446_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOEMIA_446_3.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_NATAL_447 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_NATAL_447 = format_DRENAGEM_JARDIM_NATAL_447.readFeatures(json_DRENAGEM_JARDIM_NATAL_447, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_NATAL_447 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_NATAL_447.addFeatures(features_DRENAGEM_JARDIM_NATAL_447);
var lyr_DRENAGEM_JARDIM_NATAL_447 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_NATAL_447, 
                style: style_DRENAGEM_JARDIM_NATAL_447,
                popuplayertitle: 'DRENAGEM_JARDIM_NATAL',
                interactive: true,
    title: 'DRENAGEM_JARDIM_NATAL<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_447_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_447_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_447_2.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_447_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_447_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_447_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_447_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_447_7.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_MARTINS_448 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_MARTINS_448 = format_DRENAGEM_JARDIM_MARTINS_448.readFeatures(json_DRENAGEM_JARDIM_MARTINS_448, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_MARTINS_448 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_MARTINS_448.addFeatures(features_DRENAGEM_JARDIM_MARTINS_448);
var lyr_DRENAGEM_JARDIM_MARTINS_448 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_MARTINS_448, 
                style: style_DRENAGEM_JARDIM_MARTINS_448,
                popuplayertitle: 'DRENAGEM_JARDIM_MARTINS',
                interactive: true,
    title: 'DRENAGEM_JARDIM_MARTINS<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARTINS_448_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARTINS_448_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARTINS_448_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARTINS_448_3.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_MARIA_LUIZA_449 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_MARIA_LUIZA_449 = format_DRENAGEM_JARDIM_MARIA_LUIZA_449.readFeatures(json_DRENAGEM_JARDIM_MARIA_LUIZA_449, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_MARIA_LUIZA_449 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_MARIA_LUIZA_449.addFeatures(features_DRENAGEM_JARDIM_MARIA_LUIZA_449);
var lyr_DRENAGEM_JARDIM_MARIA_LUIZA_449 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_MARIA_LUIZA_449, 
                style: style_DRENAGEM_JARDIM_MARIA_LUIZA_449,
                popuplayertitle: 'DRENAGEM_JARDIM_MARIA_LUIZA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_MARIA_LUIZA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_449_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_449_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_449_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_449_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_449_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_449_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_449_6.png" /> FLUXO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_449_7.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_LIBANO_450 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_LIBANO_450 = format_DRENAGEM_JARDIM_LIBANO_450.readFeatures(json_DRENAGEM_JARDIM_LIBANO_450, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_LIBANO_450 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_LIBANO_450.addFeatures(features_DRENAGEM_JARDIM_LIBANO_450);
var lyr_DRENAGEM_JARDIM_LIBANO_450 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_LIBANO_450, 
                style: style_DRENAGEM_JARDIM_LIBANO_450,
                popuplayertitle: 'DRENAGEM_JARDIM_LIBANO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_LIBANO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_LIBANO_450_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_LIBANO_450_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_LIBANO_450_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_LIBANO_450_3.png" /> FLUXO<br />' });
var format_DRENAGEM_JARDIM_IPANEMA_451 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_IPANEMA_451 = format_DRENAGEM_JARDIM_IPANEMA_451.readFeatures(json_DRENAGEM_JARDIM_IPANEMA_451, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_IPANEMA_451 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_IPANEMA_451.addFeatures(features_DRENAGEM_JARDIM_IPANEMA_451);
var lyr_DRENAGEM_JARDIM_IPANEMA_451 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_IPANEMA_451, 
                style: style_DRENAGEM_JARDIM_IPANEMA_451,
                popuplayertitle: 'DRENAGEM_JARDIM_IPANEMA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_IPANEMA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_451_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_451_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_451_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_451_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_451_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_451_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_451_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_451_7.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_BUENO_452 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_BUENO_452 = format_DRENAGEM_JARDIM_BUENO_452.readFeatures(json_DRENAGEM_JARDIM_BUENO_452, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_BUENO_452 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_BUENO_452.addFeatures(features_DRENAGEM_JARDIM_BUENO_452);
var lyr_DRENAGEM_JARDIM_BUENO_452 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_BUENO_452, 
                style: style_DRENAGEM_JARDIM_BUENO_452,
                popuplayertitle: 'DRENAGEM_JARDIM_BUENO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_BUENO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BUENO_452_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BUENO_452_1.png" /> DIAMETRO 300<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BUENO_452_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BUENO_452_3.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_BOTANICO_453 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_BOTANICO_453 = format_DRENAGEM_JARDIM_BOTANICO_453.readFeatures(json_DRENAGEM_JARDIM_BOTANICO_453, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_BOTANICO_453 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_BOTANICO_453.addFeatures(features_DRENAGEM_JARDIM_BOTANICO_453);
var lyr_DRENAGEM_JARDIM_BOTANICO_453 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_BOTANICO_453, 
                style: style_DRENAGEM_JARDIM_BOTANICO_453,
                popuplayertitle: 'DRENAGEM_JARDIM_BOTANICO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_BOTANICO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_453_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_453_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_453_2.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_453_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_453_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_453_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_453_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_453_7.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_BARAO_454 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_BARAO_454 = format_DRENAGEM_JARDIM_BARAO_454.readFeatures(json_DRENAGEM_JARDIM_BARAO_454, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_BARAO_454 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_BARAO_454.addFeatures(features_DRENAGEM_JARDIM_BARAO_454);
var lyr_DRENAGEM_JARDIM_BARAO_454 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_BARAO_454, 
                style: style_DRENAGEM_JARDIM_BARAO_454,
                popuplayertitle: 'DRENAGEM_JARDIM_BARAO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_BARAO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BARAO_454_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BARAO_454_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BARAO_454_2.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BARAO_454_3.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_AVIACAO_455 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_AVIACAO_455 = format_DRENAGEM_JARDIM_AVIACAO_455.readFeatures(json_DRENAGEM_JARDIM_AVIACAO_455, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_AVIACAO_455 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_AVIACAO_455.addFeatures(features_DRENAGEM_JARDIM_AVIACAO_455);
var lyr_DRENAGEM_JARDIM_AVIACAO_455 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_AVIACAO_455, 
                style: style_DRENAGEM_JARDIM_AVIACAO_455,
                popuplayertitle: 'DRENAGEM_JARDIM_AVIACAO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_AVIACAO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_455_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_455_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_455_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_455_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_455_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_455_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_455_6.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_ARIZONA_II_456 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_ARIZONA_II_456 = format_DRENAGEM_JARDIM_ARIZONA_II_456.readFeatures(json_DRENAGEM_JARDIM_ARIZONA_II_456, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_ARIZONA_II_456 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_ARIZONA_II_456.addFeatures(features_DRENAGEM_JARDIM_ARIZONA_II_456);
var lyr_DRENAGEM_JARDIM_ARIZONA_II_456 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_ARIZONA_II_456, 
                style: style_DRENAGEM_JARDIM_ARIZONA_II_456,
                popuplayertitle: 'DRENAGEM_JARDIM_ARIZONA_II',
                interactive: true,
    title: 'DRENAGEM_JARDIM_ARIZONA_II<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_456_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_456_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_456_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_456_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_456_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_456_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_456_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_456_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_456_8.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_ARIZONA_I_457 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_ARIZONA_I_457 = format_DRENAGEM_JARDIM_ARIZONA_I_457.readFeatures(json_DRENAGEM_JARDIM_ARIZONA_I_457, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_ARIZONA_I_457 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_ARIZONA_I_457.addFeatures(features_DRENAGEM_JARDIM_ARIZONA_I_457);
var lyr_DRENAGEM_JARDIM_ARIZONA_I_457 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_ARIZONA_I_457, 
                style: style_DRENAGEM_JARDIM_ARIZONA_I_457,
                popuplayertitle: 'DRENAGEM_JARDIM_ARIZONA_I',
                interactive: true,
    title: 'DRENAGEM_JARDIM_ARIZONA_I<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_457_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_457_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_457_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_457_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_457_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_457_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_457_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_457_7.png" /> PV<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_457_8.png" /> DISSIPADOR<br />' });
var format_DRENAGEM_JARDIM_AEROPORTO_II_458 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_AEROPORTO_II_458 = format_DRENAGEM_JARDIM_AEROPORTO_II_458.readFeatures(json_DRENAGEM_JARDIM_AEROPORTO_II_458, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_AEROPORTO_II_458 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_AEROPORTO_II_458.addFeatures(features_DRENAGEM_JARDIM_AEROPORTO_II_458);
var lyr_DRENAGEM_JARDIM_AEROPORTO_II_458 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_AEROPORTO_II_458, 
                style: style_DRENAGEM_JARDIM_AEROPORTO_II_458,
                popuplayertitle: 'DRENAGEM_JARDIM_AEROPORTO_II',
                interactive: true,
    title: 'DRENAGEM_JARDIM_AEROPORTO_II<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AEROPORTO_II_458_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AEROPORTO_II_458_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AEROPORTO_II_458_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AEROPORTO_II_458_3.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AEROPORTO_II_458_4.png" /> PV<br />' });
var format_DRENAGEM_GRAMADOS_I_459 = new ol.format.GeoJSON();
var features_DRENAGEM_GRAMADOS_I_459 = format_DRENAGEM_GRAMADOS_I_459.readFeatures(json_DRENAGEM_GRAMADOS_I_459, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_GRAMADOS_I_459 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_GRAMADOS_I_459.addFeatures(features_DRENAGEM_GRAMADOS_I_459);
var lyr_DRENAGEM_GRAMADOS_I_459 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_GRAMADOS_I_459, 
                style: style_DRENAGEM_GRAMADOS_I_459,
                popuplayertitle: 'DRENAGEM_GRAMADOS_I',
                interactive: true,
    title: 'DRENAGEM_GRAMADOS_I<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_459_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_459_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_459_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_459_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_459_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_459_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_459_6.png" /> PV<br />' });
var format_DRENAGEM_FRANCA_POLO_CLUBE_460 = new ol.format.GeoJSON();
var features_DRENAGEM_FRANCA_POLO_CLUBE_460 = format_DRENAGEM_FRANCA_POLO_CLUBE_460.readFeatures(json_DRENAGEM_FRANCA_POLO_CLUBE_460, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_FRANCA_POLO_CLUBE_460 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_FRANCA_POLO_CLUBE_460.addFeatures(features_DRENAGEM_FRANCA_POLO_CLUBE_460);
var lyr_DRENAGEM_FRANCA_POLO_CLUBE_460 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_FRANCA_POLO_CLUBE_460, 
                style: style_DRENAGEM_FRANCA_POLO_CLUBE_460,
                popuplayertitle: 'DRENAGEM_FRANCA_POLO_CLUBE',
                interactive: true,
    title: 'DRENAGEM_FRANCA_POLO_CLUBE<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_460_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_460_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_460_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_460_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_460_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_460_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_460_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_460_7.png" /> PV<br />' });
var format_DRENAGEM_DOMINGOS_JARDINI_461 = new ol.format.GeoJSON();
var features_DRENAGEM_DOMINGOS_JARDINI_461 = format_DRENAGEM_DOMINGOS_JARDINI_461.readFeatures(json_DRENAGEM_DOMINGOS_JARDINI_461, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_DOMINGOS_JARDINI_461 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_DOMINGOS_JARDINI_461.addFeatures(features_DRENAGEM_DOMINGOS_JARDINI_461);
var lyr_DRENAGEM_DOMINGOS_JARDINI_461 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_DOMINGOS_JARDINI_461, 
                style: style_DRENAGEM_DOMINGOS_JARDINI_461,
                popuplayertitle: 'DRENAGEM_DOMINGOS_JARDINI',
                interactive: true,
    title: 'DRENAGEM_DOMINGOS_JARDINI<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_461_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_461_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_461_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_461_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_461_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_461_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_461_6.png" /> PV<br />' });
var format_DRENAGEM_DINFRA_II_462 = new ol.format.GeoJSON();
var features_DRENAGEM_DINFRA_II_462 = format_DRENAGEM_DINFRA_II_462.readFeatures(json_DRENAGEM_DINFRA_II_462, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_DINFRA_II_462 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_DINFRA_II_462.addFeatures(features_DRENAGEM_DINFRA_II_462);
var lyr_DRENAGEM_DINFRA_II_462 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_DINFRA_II_462, 
                style: style_DRENAGEM_DINFRA_II_462,
                popuplayertitle: 'DRENAGEM_DINFRA_II',
                interactive: true,
    title: 'DRENAGEM_DINFRA_II<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_462_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_462_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_462_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_462_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_462_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_462_5.png" /> PV<br />' });
var format_DRENAGEM_ATLANTA_PARK_463 = new ol.format.GeoJSON();
var features_DRENAGEM_ATLANTA_PARK_463 = format_DRENAGEM_ATLANTA_PARK_463.readFeatures(json_DRENAGEM_ATLANTA_PARK_463, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_ATLANTA_PARK_463 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_ATLANTA_PARK_463.addFeatures(features_DRENAGEM_ATLANTA_PARK_463);
var lyr_DRENAGEM_ATLANTA_PARK_463 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_ATLANTA_PARK_463, 
                style: style_DRENAGEM_ATLANTA_PARK_463,
                popuplayertitle: 'DRENAGEM_ATLANTA_PARK',
                interactive: true,
    title: 'DRENAGEM_ATLANTA_PARK<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_463_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_463_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_463_2.png" /> CAIXA<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_463_3.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_463_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_463_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_463_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_463_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_463_8.png" /> PV<br />' });
var format_DRENAGEM_ANA_DOROTHEA_464 = new ol.format.GeoJSON();
var features_DRENAGEM_ANA_DOROTHEA_464 = format_DRENAGEM_ANA_DOROTHEA_464.readFeatures(json_DRENAGEM_ANA_DOROTHEA_464, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_ANA_DOROTHEA_464 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_ANA_DOROTHEA_464.addFeatures(features_DRENAGEM_ANA_DOROTHEA_464);
var lyr_DRENAGEM_ANA_DOROTHEA_464 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_ANA_DOROTHEA_464, 
                style: style_DRENAGEM_ANA_DOROTHEA_464,
                popuplayertitle: 'DRENAGEM_ANA_DOROTHEA',
                interactive: true,
    title: 'DRENAGEM_ANA_DOROTHEA<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_464_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_464_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_464_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_464_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_464_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_464_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_464_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_464_7.png" /> PV<br />' });
var format_REGIAO_SUL_465 = new ol.format.GeoJSON();
var features_REGIAO_SUL_465 = format_REGIAO_SUL_465.readFeatures(json_REGIAO_SUL_465, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REGIAO_SUL_465 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIAO_SUL_465.addFeatures(features_REGIAO_SUL_465);
var lyr_REGIAO_SUL_465 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIAO_SUL_465, 
                style: style_REGIAO_SUL_465,
                popuplayertitle: 'REGIAO_SUL',
                interactive: true,
                title: '<img src="styles/legend/REGIAO_SUL_465.png" /> REGIAO_SUL'
            });
var format_REGIAO_OESTE_466 = new ol.format.GeoJSON();
var features_REGIAO_OESTE_466 = format_REGIAO_OESTE_466.readFeatures(json_REGIAO_OESTE_466, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REGIAO_OESTE_466 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIAO_OESTE_466.addFeatures(features_REGIAO_OESTE_466);
var lyr_REGIAO_OESTE_466 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIAO_OESTE_466, 
                style: style_REGIAO_OESTE_466,
                popuplayertitle: 'REGIAO_OESTE',
                interactive: true,
                title: '<img src="styles/legend/REGIAO_OESTE_466.png" /> REGIAO_OESTE'
            });
var format_REGIAO_NORTE_467 = new ol.format.GeoJSON();
var features_REGIAO_NORTE_467 = format_REGIAO_NORTE_467.readFeatures(json_REGIAO_NORTE_467, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REGIAO_NORTE_467 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIAO_NORTE_467.addFeatures(features_REGIAO_NORTE_467);
var lyr_REGIAO_NORTE_467 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIAO_NORTE_467, 
                style: style_REGIAO_NORTE_467,
                popuplayertitle: 'REGIAO_NORTE',
                interactive: true,
                title: '<img src="styles/legend/REGIAO_NORTE_467.png" /> REGIAO_NORTE'
            });
var format_REGIAO_LESTE_468 = new ol.format.GeoJSON();
var features_REGIAO_LESTE_468 = format_REGIAO_LESTE_468.readFeatures(json_REGIAO_LESTE_468, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REGIAO_LESTE_468 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIAO_LESTE_468.addFeatures(features_REGIAO_LESTE_468);
var lyr_REGIAO_LESTE_468 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIAO_LESTE_468, 
                style: style_REGIAO_LESTE_468,
                popuplayertitle: 'REGIAO_LESTE',
                interactive: true,
                title: '<img src="styles/legend/REGIAO_LESTE_468.png" /> REGIAO_LESTE'
            });
var format_BAIRROS_469 = new ol.format.GeoJSON();
var features_BAIRROS_469 = format_BAIRROS_469.readFeatures(json_BAIRROS_469, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BAIRROS_469 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAIRROS_469.addFeatures(features_BAIRROS_469);
var lyr_BAIRROS_469 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAIRROS_469, 
                style: style_BAIRROS_469,
                popuplayertitle: 'BAIRROS',
                interactive: true,
                title: '<img src="styles/legend/BAIRROS_469.png" /> BAIRROS'
            });
var format_Voorocas27unid_470 = new ol.format.GeoJSON();
var features_Voorocas27unid_470 = format_Voorocas27unid_470.readFeatures(json_Voorocas27unid_470, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Voorocas27unid_470 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voorocas27unid_470.addFeatures(features_Voorocas27unid_470);
var lyr_Voorocas27unid_470 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voorocas27unid_470, 
                style: style_Voorocas27unid_470,
                popuplayertitle: 'Voçorocas (27 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Voorocas27unid_470.png" /> Voçorocas (27 unid.)'
            });
var format_LocaisDifcilAcessoreasRurais12unid_471 = new ol.format.GeoJSON();
var features_LocaisDifcilAcessoreasRurais12unid_471 = format_LocaisDifcilAcessoreasRurais12unid_471.readFeatures(json_LocaisDifcilAcessoreasRurais12unid_471, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LocaisDifcilAcessoreasRurais12unid_471 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocaisDifcilAcessoreasRurais12unid_471.addFeatures(features_LocaisDifcilAcessoreasRurais12unid_471);
var lyr_LocaisDifcilAcessoreasRurais12unid_471 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocaisDifcilAcessoreasRurais12unid_471, 
                style: style_LocaisDifcilAcessoreasRurais12unid_471,
                popuplayertitle: 'Locais Difícil Acesso Áreas Rurais (12 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LocaisDifcilAcessoreasRurais12unid_471.png" /> Locais Difícil Acesso Áreas Rurais (12 unid.)'
            });
var format_Contineres286unid_472 = new ol.format.GeoJSON();
var features_Contineres286unid_472 = format_Contineres286unid_472.readFeatures(json_Contineres286unid_472, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Contineres286unid_472 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres286unid_472.addFeatures(features_Contineres286unid_472);
var lyr_Contineres286unid_472 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres286unid_472, 
                style: style_Contineres286unid_472,
                popuplayertitle: 'Contêineres (286 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Contineres286unid_472.png" /> Contêineres (286 unid.)'
            });
var format_rvoreImuneaoCorte9unid_473 = new ol.format.GeoJSON();
var features_rvoreImuneaoCorte9unid_473 = format_rvoreImuneaoCorte9unid_473.readFeatures(json_rvoreImuneaoCorte9unid_473, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_rvoreImuneaoCorte9unid_473 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoreImuneaoCorte9unid_473.addFeatures(features_rvoreImuneaoCorte9unid_473);
var lyr_rvoreImuneaoCorte9unid_473 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoreImuneaoCorte9unid_473, 
                style: style_rvoreImuneaoCorte9unid_473,
                popuplayertitle: 'Árvore Imune ao Corte (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoreImuneaoCorte9unid_473.png" /> Árvore Imune ao Corte (9 unid.)'
            });
var format_AcademiasaoArLivre84unid_474 = new ol.format.GeoJSON();
var features_AcademiasaoArLivre84unid_474 = format_AcademiasaoArLivre84unid_474.readFeatures(json_AcademiasaoArLivre84unid_474, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcademiasaoArLivre84unid_474 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcademiasaoArLivre84unid_474.addFeatures(features_AcademiasaoArLivre84unid_474);
var lyr_AcademiasaoArLivre84unid_474 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcademiasaoArLivre84unid_474, 
                style: style_AcademiasaoArLivre84unid_474,
                popuplayertitle: 'Academias ao Ar Livre (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AcademiasaoArLivre84unid_474.png" /> Academias ao Ar Livre (84 unid.)'
            });
var format_SERVICO_DE_SAUDE_475 = new ol.format.GeoJSON();
var features_SERVICO_DE_SAUDE_475 = format_SERVICO_DE_SAUDE_475.readFeatures(json_SERVICO_DE_SAUDE_475, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SERVICO_DE_SAUDE_475 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVICO_DE_SAUDE_475.addFeatures(features_SERVICO_DE_SAUDE_475);
var lyr_SERVICO_DE_SAUDE_475 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SERVICO_DE_SAUDE_475, 
                style: style_SERVICO_DE_SAUDE_475,
                popuplayertitle: 'SERVICO_DE_SAUDE',
                interactive: true,
                title: '<img src="styles/legend/SERVICO_DE_SAUDE_475.png" /> SERVICO_DE_SAUDE'
            });
var format_RECICLAVEIS_476 = new ol.format.GeoJSON();
var features_RECICLAVEIS_476 = format_RECICLAVEIS_476.readFeatures(json_RECICLAVEIS_476, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RECICLAVEIS_476 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RECICLAVEIS_476.addFeatures(features_RECICLAVEIS_476);
var lyr_RECICLAVEIS_476 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RECICLAVEIS_476, 
                style: style_RECICLAVEIS_476,
                popuplayertitle: 'RECICLAVEIS',
                interactive: true,
                title: '<img src="styles/legend/RECICLAVEIS_476.png" /> RECICLAVEIS'
            });
var format_PNEUS_477 = new ol.format.GeoJSON();
var features_PNEUS_477 = format_PNEUS_477.readFeatures(json_PNEUS_477, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PNEUS_477 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNEUS_477.addFeatures(features_PNEUS_477);
var lyr_PNEUS_477 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNEUS_477, 
                style: style_PNEUS_477,
                popuplayertitle: 'PNEUS',
                interactive: true,
                title: '<img src="styles/legend/PNEUS_477.png" /> PNEUS'
            });
var format_PILHAS_E_BATERIAS_478 = new ol.format.GeoJSON();
var features_PILHAS_E_BATERIAS_478 = format_PILHAS_E_BATERIAS_478.readFeatures(json_PILHAS_E_BATERIAS_478, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PILHAS_E_BATERIAS_478 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PILHAS_E_BATERIAS_478.addFeatures(features_PILHAS_E_BATERIAS_478);
var lyr_PILHAS_E_BATERIAS_478 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PILHAS_E_BATERIAS_478, 
                style: style_PILHAS_E_BATERIAS_478,
                popuplayertitle: 'PILHAS_E_BATERIAS',
                interactive: true,
                title: '<img src="styles/legend/PILHAS_E_BATERIAS_478.png" /> PILHAS_E_BATERIAS'
            });
var format_PERIGOSOS_479 = new ol.format.GeoJSON();
var features_PERIGOSOS_479 = format_PERIGOSOS_479.readFeatures(json_PERIGOSOS_479, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PERIGOSOS_479 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERIGOSOS_479.addFeatures(features_PERIGOSOS_479);
var lyr_PERIGOSOS_479 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERIGOSOS_479, 
                style: style_PERIGOSOS_479,
                popuplayertitle: 'PERIGOSOS',
                interactive: true,
                title: '<img src="styles/legend/PERIGOSOS_479.png" /> PERIGOSOS'
            });
var format_OLEO_LUBRIFICANTE_480 = new ol.format.GeoJSON();
var features_OLEO_LUBRIFICANTE_480 = format_OLEO_LUBRIFICANTE_480.readFeatures(json_OLEO_LUBRIFICANTE_480, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_OLEO_LUBRIFICANTE_480 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OLEO_LUBRIFICANTE_480.addFeatures(features_OLEO_LUBRIFICANTE_480);
var lyr_OLEO_LUBRIFICANTE_480 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OLEO_LUBRIFICANTE_480, 
                style: style_OLEO_LUBRIFICANTE_480,
                popuplayertitle: 'OLEO_LUBRIFICANTE',
                interactive: true,
                title: '<img src="styles/legend/OLEO_LUBRIFICANTE_480.png" /> OLEO_LUBRIFICANTE'
            });
var format_OLEO_DE_COZINHA_481 = new ol.format.GeoJSON();
var features_OLEO_DE_COZINHA_481 = format_OLEO_DE_COZINHA_481.readFeatures(json_OLEO_DE_COZINHA_481, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_OLEO_DE_COZINHA_481 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OLEO_DE_COZINHA_481.addFeatures(features_OLEO_DE_COZINHA_481);
var lyr_OLEO_DE_COZINHA_481 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OLEO_DE_COZINHA_481, 
                style: style_OLEO_DE_COZINHA_481,
                popuplayertitle: 'OLEO_DE_COZINHA',
                interactive: true,
                title: '<img src="styles/legend/OLEO_DE_COZINHA_481.png" /> OLEO_DE_COZINHA'
            });
var format_MASSA_VERDE_482 = new ol.format.GeoJSON();
var features_MASSA_VERDE_482 = format_MASSA_VERDE_482.readFeatures(json_MASSA_VERDE_482, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MASSA_VERDE_482 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MASSA_VERDE_482.addFeatures(features_MASSA_VERDE_482);
var lyr_MASSA_VERDE_482 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MASSA_VERDE_482, 
                style: style_MASSA_VERDE_482,
                popuplayertitle: 'MASSA_VERDE',
                interactive: true,
                title: '<img src="styles/legend/MASSA_VERDE_482.png" /> MASSA_VERDE'
            });
var format_MADEIRAS_483 = new ol.format.GeoJSON();
var features_MADEIRAS_483 = format_MADEIRAS_483.readFeatures(json_MADEIRAS_483, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MADEIRAS_483 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MADEIRAS_483.addFeatures(features_MADEIRAS_483);
var lyr_MADEIRAS_483 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MADEIRAS_483, 
                style: style_MADEIRAS_483,
                popuplayertitle: 'MADEIRAS',
                interactive: true,
                title: '<img src="styles/legend/MADEIRAS_483.png" /> MADEIRAS'
            });
var format_LATAS_DE_TINTA_484 = new ol.format.GeoJSON();
var features_LATAS_DE_TINTA_484 = format_LATAS_DE_TINTA_484.readFeatures(json_LATAS_DE_TINTA_484, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LATAS_DE_TINTA_484 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LATAS_DE_TINTA_484.addFeatures(features_LATAS_DE_TINTA_484);
var lyr_LATAS_DE_TINTA_484 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LATAS_DE_TINTA_484, 
                style: style_LATAS_DE_TINTA_484,
                popuplayertitle: 'LATAS_DE_TINTA',
                interactive: true,
                title: '<img src="styles/legend/LATAS_DE_TINTA_484.png" /> LATAS_DE_TINTA'
            });
var format_LAMPADAS_485 = new ol.format.GeoJSON();
var features_LAMPADAS_485 = format_LAMPADAS_485.readFeatures(json_LAMPADAS_485, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LAMPADAS_485 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAMPADAS_485.addFeatures(features_LAMPADAS_485);
var lyr_LAMPADAS_485 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAMPADAS_485, 
                style: style_LAMPADAS_485,
                popuplayertitle: 'LAMPADAS',
                interactive: true,
                title: '<img src="styles/legend/LAMPADAS_485.png" /> LAMPADAS'
            });
var format_INSERVIVEIS_486 = new ol.format.GeoJSON();
var features_INSERVIVEIS_486 = format_INSERVIVEIS_486.readFeatures(json_INSERVIVEIS_486, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_INSERVIVEIS_486 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INSERVIVEIS_486.addFeatures(features_INSERVIVEIS_486);
var lyr_INSERVIVEIS_486 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INSERVIVEIS_486, 
                style: style_INSERVIVEIS_486,
                popuplayertitle: 'INSERVIVEIS',
                interactive: true,
                title: '<img src="styles/legend/INSERVIVEIS_486.png" /> INSERVIVEIS'
            });
var format_GESSO_487 = new ol.format.GeoJSON();
var features_GESSO_487 = format_GESSO_487.readFeatures(json_GESSO_487, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GESSO_487 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GESSO_487.addFeatures(features_GESSO_487);
var lyr_GESSO_487 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GESSO_487, 
                style: style_GESSO_487,
                popuplayertitle: 'GESSO',
                interactive: true,
                title: '<img src="styles/legend/GESSO_487.png" /> GESSO'
            });
var format_EMBALAGENS_AGROTOXICO_488 = new ol.format.GeoJSON();
var features_EMBALAGENS_AGROTOXICO_488 = format_EMBALAGENS_AGROTOXICO_488.readFeatures(json_EMBALAGENS_AGROTOXICO_488, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EMBALAGENS_AGROTOXICO_488 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EMBALAGENS_AGROTOXICO_488.addFeatures(features_EMBALAGENS_AGROTOXICO_488);
var lyr_EMBALAGENS_AGROTOXICO_488 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EMBALAGENS_AGROTOXICO_488, 
                style: style_EMBALAGENS_AGROTOXICO_488,
                popuplayertitle: 'EMBALAGENS_AGROTOXICO',
                interactive: true,
                title: '<img src="styles/legend/EMBALAGENS_AGROTOXICO_488.png" /> EMBALAGENS_AGROTOXICO'
            });
var format_ELETRONICOS_489 = new ol.format.GeoJSON();
var features_ELETRONICOS_489 = format_ELETRONICOS_489.readFeatures(json_ELETRONICOS_489, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ELETRONICOS_489 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELETRONICOS_489.addFeatures(features_ELETRONICOS_489);
var lyr_ELETRONICOS_489 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ELETRONICOS_489, 
                style: style_ELETRONICOS_489,
                popuplayertitle: 'ELETRONICOS',
                interactive: true,
                title: '<img src="styles/legend/ELETRONICOS_489.png" /> ELETRONICOS'
            });
var format_COURO_490 = new ol.format.GeoJSON();
var features_COURO_490 = format_COURO_490.readFeatures(json_COURO_490, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_COURO_490 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COURO_490.addFeatures(features_COURO_490);
var lyr_COURO_490 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COURO_490, 
                style: style_COURO_490,
                popuplayertitle: 'COURO',
                interactive: true,
                title: '<img src="styles/legend/COURO_490.png" /> COURO'
            });
var format_CONSTRUCAO_CIVIL_491 = new ol.format.GeoJSON();
var features_CONSTRUCAO_CIVIL_491 = format_CONSTRUCAO_CIVIL_491.readFeatures(json_CONSTRUCAO_CIVIL_491, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CONSTRUCAO_CIVIL_491 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONSTRUCAO_CIVIL_491.addFeatures(features_CONSTRUCAO_CIVIL_491);
var lyr_CONSTRUCAO_CIVIL_491 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONSTRUCAO_CIVIL_491, 
                style: style_CONSTRUCAO_CIVIL_491,
                popuplayertitle: 'CONSTRUCAO_CIVIL',
                interactive: true,
                title: '<img src="styles/legend/CONSTRUCAO_CIVIL_491.png" /> CONSTRUCAO_CIVIL'
            });
var format_CHAPAS_DE_RAIO_X_492 = new ol.format.GeoJSON();
var features_CHAPAS_DE_RAIO_X_492 = format_CHAPAS_DE_RAIO_X_492.readFeatures(json_CHAPAS_DE_RAIO_X_492, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CHAPAS_DE_RAIO_X_492 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHAPAS_DE_RAIO_X_492.addFeatures(features_CHAPAS_DE_RAIO_X_492);
var lyr_CHAPAS_DE_RAIO_X_492 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHAPAS_DE_RAIO_X_492, 
                style: style_CHAPAS_DE_RAIO_X_492,
                popuplayertitle: 'CHAPAS_DE_RAIO_X',
                interactive: true,
                title: '<img src="styles/legend/CHAPAS_DE_RAIO_X_492.png" /> CHAPAS_DE_RAIO_X'
            });
var format_PROTECAO_AERODROMO_493 = new ol.format.GeoJSON();
var features_PROTECAO_AERODROMO_493 = format_PROTECAO_AERODROMO_493.readFeatures(json_PROTECAO_AERODROMO_493, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PROTECAO_AERODROMO_493 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROTECAO_AERODROMO_493.addFeatures(features_PROTECAO_AERODROMO_493);
var lyr_PROTECAO_AERODROMO_493 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROTECAO_AERODROMO_493, 
                style: style_PROTECAO_AERODROMO_493,
                popuplayertitle: 'PROTECAO_AERODROMO',
                interactive: true,
    title: 'PROTECAO_AERODROMO<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_493_0.png" /> Aproximação 1 Cab 1<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_493_1.png" /> Aproximação 1 Cab 2<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_493_2.png" /> Cônica<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_493_3.png" /> Decolagem Cab 1<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_493_4.png" /> Decolagem Cab 2<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_493_5.png" /> Faixa de Pista<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_493_6.png" /> Horizontal Interna<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_493_7.png" /> Linha entre cabeceiras<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_493_8.png" /> Pista<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_493_9.png" /> SPVV 1<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_493_10.png" /> SPVV 2<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_493_11.png" /> Transição<br />' });
var format_HELIPONTO_HOSPITAL_REGIONAL_494 = new ol.format.GeoJSON();
var features_HELIPONTO_HOSPITAL_REGIONAL_494 = format_HELIPONTO_HOSPITAL_REGIONAL_494.readFeatures(json_HELIPONTO_HOSPITAL_REGIONAL_494, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HELIPONTO_HOSPITAL_REGIONAL_494 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HELIPONTO_HOSPITAL_REGIONAL_494.addFeatures(features_HELIPONTO_HOSPITAL_REGIONAL_494);
var lyr_HELIPONTO_HOSPITAL_REGIONAL_494 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HELIPONTO_HOSPITAL_REGIONAL_494, 
                style: style_HELIPONTO_HOSPITAL_REGIONAL_494,
                popuplayertitle: 'HELIPONTO_HOSPITAL_REGIONAL',
                interactive: true,
    title: 'HELIPONTO_HOSPITAL_REGIONAL<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_494_0.png" /> Aproximação 1 seção 1<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_494_1.png" /> Aproximação 2 seção 1<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_494_2.png" /> Area de Segurança 1<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_494_3.png" /> Decolagem 1 seção 1<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_494_4.png" /> Decolagem 2 seção 1<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_494_5.png" /> FATO 1<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_494_6.png" /> TLOF 1<br />' });
var format_HELIPONTO_EDIFICIO_PRIME_495 = new ol.format.GeoJSON();
var features_HELIPONTO_EDIFICIO_PRIME_495 = format_HELIPONTO_EDIFICIO_PRIME_495.readFeatures(json_HELIPONTO_EDIFICIO_PRIME_495, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HELIPONTO_EDIFICIO_PRIME_495 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HELIPONTO_EDIFICIO_PRIME_495.addFeatures(features_HELIPONTO_EDIFICIO_PRIME_495);
var lyr_HELIPONTO_EDIFICIO_PRIME_495 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HELIPONTO_EDIFICIO_PRIME_495, 
                style: style_HELIPONTO_EDIFICIO_PRIME_495,
                popuplayertitle: 'HELIPONTO_EDIFICIO_PRIME',
                interactive: true,
                title: '<img src="styles/legend/HELIPONTO_EDIFICIO_PRIME_495.png" /> HELIPONTO_EDIFICIO_PRIME'
            });
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
    title: 'HELIPONTO_EDIFICIO_PRIME<br />\
    <img src="styles/legend/HELIPONTO_EDIFICIO_PRIME_496_0.png" /> HELIPONTO<br />\
    <img src="styles/legend/HELIPONTO_EDIFICIO_PRIME_496_1.png" /> RAMPA<br />' });
var format_CLASSE_VB_497 = new ol.format.GeoJSON();
var features_CLASSE_VB_497 = format_CLASSE_VB_497.readFeatures(json_CLASSE_VB_497, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_VB_497 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_VB_497.addFeatures(features_CLASSE_VB_497);
var lyr_CLASSE_VB_497 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_VB_497, 
                style: style_CLASSE_VB_497,
                popuplayertitle: 'CLASSE_VB',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_VB_497.png" /> CLASSE_VB'
            });
var format_CLASSE_VA_498 = new ol.format.GeoJSON();
var features_CLASSE_VA_498 = format_CLASSE_VA_498.readFeatures(json_CLASSE_VA_498, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_VA_498 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_VA_498.addFeatures(features_CLASSE_VA_498);
var lyr_CLASSE_VA_498 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_VA_498, 
                style: style_CLASSE_VA_498,
                popuplayertitle: 'CLASSE_VA',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_VA_498.png" /> CLASSE_VA'
            });
var format_CLASSE_IVC_499 = new ol.format.GeoJSON();
var features_CLASSE_IVC_499 = format_CLASSE_IVC_499.readFeatures(json_CLASSE_IVC_499, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IVC_499 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IVC_499.addFeatures(features_CLASSE_IVC_499);
var lyr_CLASSE_IVC_499 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IVC_499, 
                style: style_CLASSE_IVC_499,
                popuplayertitle: 'CLASSE_IVC',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IVC_499.png" /> CLASSE_IVC'
            });
var format_CLASSE_IVB_500 = new ol.format.GeoJSON();
var features_CLASSE_IVB_500 = format_CLASSE_IVB_500.readFeatures(json_CLASSE_IVB_500, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IVB_500 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IVB_500.addFeatures(features_CLASSE_IVB_500);
var lyr_CLASSE_IVB_500 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IVB_500, 
                style: style_CLASSE_IVB_500,
                popuplayertitle: 'CLASSE_IVB',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IVB_500.png" /> CLASSE_IVB'
            });
var format_CLASSE_IVA_501 = new ol.format.GeoJSON();
var features_CLASSE_IVA_501 = format_CLASSE_IVA_501.readFeatures(json_CLASSE_IVA_501, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IVA_501 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IVA_501.addFeatures(features_CLASSE_IVA_501);
var lyr_CLASSE_IVA_501 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IVA_501, 
                style: style_CLASSE_IVA_501,
                popuplayertitle: 'CLASSE_IVA',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IVA_501.png" /> CLASSE_IVA'
            });
var format_CLASSE_IIIC_502 = new ol.format.GeoJSON();
var features_CLASSE_IIIC_502 = format_CLASSE_IIIC_502.readFeatures(json_CLASSE_IIIC_502, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IIIC_502 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IIIC_502.addFeatures(features_CLASSE_IIIC_502);
var lyr_CLASSE_IIIC_502 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IIIC_502, 
                style: style_CLASSE_IIIC_502,
                popuplayertitle: 'CLASSE_IIIC',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IIIC_502.png" /> CLASSE_IIIC'
            });
var format_CLASSE_IIIB_503 = new ol.format.GeoJSON();
var features_CLASSE_IIIB_503 = format_CLASSE_IIIB_503.readFeatures(json_CLASSE_IIIB_503, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IIIB_503 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IIIB_503.addFeatures(features_CLASSE_IIIB_503);
var lyr_CLASSE_IIIB_503 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IIIB_503, 
                style: style_CLASSE_IIIB_503,
                popuplayertitle: 'CLASSE_IIIB',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IIIB_503.png" /> CLASSE_IIIB'
            });
var format_CLASSE_IIIA_504 = new ol.format.GeoJSON();
var features_CLASSE_IIIA_504 = format_CLASSE_IIIA_504.readFeatures(json_CLASSE_IIIA_504, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IIIA_504 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IIIA_504.addFeatures(features_CLASSE_IIIA_504);
var lyr_CLASSE_IIIA_504 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IIIA_504, 
                style: style_CLASSE_IIIA_504,
                popuplayertitle: 'CLASSE_IIIA',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IIIA_504.png" /> CLASSE_IIIA'
            });
var format_CLASSE_II_505 = new ol.format.GeoJSON();
var features_CLASSE_II_505 = format_CLASSE_II_505.readFeatures(json_CLASSE_II_505, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_II_505 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_II_505.addFeatures(features_CLASSE_II_505);
var lyr_CLASSE_II_505 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_II_505, 
                style: style_CLASSE_II_505,
                popuplayertitle: 'CLASSE_II',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_II_505.png" /> CLASSE_II'
            });
var format_CLASSE_I_506 = new ol.format.GeoJSON();
var features_CLASSE_I_506 = format_CLASSE_I_506.readFeatures(json_CLASSE_I_506, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_I_506 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_I_506.addFeatures(features_CLASSE_I_506);
var lyr_CLASSE_I_506 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_I_506, 
                style: style_CLASSE_I_506,
                popuplayertitle: 'CLASSE_I',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_I_506.png" /> CLASSE_I'
            });
var format_LoteamentoFechado146unid70632440m_507 = new ol.format.GeoJSON();
var features_LoteamentoFechado146unid70632440m_507 = format_LoteamentoFechado146unid70632440m_507.readFeatures(json_LoteamentoFechado146unid70632440m_507, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentoFechado146unid70632440m_507 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentoFechado146unid70632440m_507.addFeatures(features_LoteamentoFechado146unid70632440m_507);
var lyr_LoteamentoFechado146unid70632440m_507 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentoFechado146unid70632440m_507, 
                style: style_LoteamentoFechado146unid70632440m_507,
                popuplayertitle: 'Loteamento Fechado (146 unid. / 706.324,40 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentoFechado146unid70632440m_507.png" /> Loteamento Fechado (146 unid. / 706.324,40 m²)'
            });
var format_LoteEdificao20unid_508 = new ol.format.GeoJSON();
var features_LoteEdificao20unid_508 = format_LoteEdificao20unid_508.readFeatures(json_LoteEdificao20unid_508, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEdificao20unid_508 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEdificao20unid_508.addFeatures(features_LoteEdificao20unid_508);
var lyr_LoteEdificao20unid_508 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEdificao20unid_508, 
                style: style_LoteEdificao20unid_508,
                popuplayertitle: 'Lote/Edificação (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEdificao20unid_508.png" /> Lote/Edificação (20 unid.)'
            });
var format_LoteEdificao20unid508062m_509 = new ol.format.GeoJSON();
var features_LoteEdificao20unid508062m_509 = format_LoteEdificao20unid508062m_509.readFeatures(json_LoteEdificao20unid508062m_509, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEdificao20unid508062m_509 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEdificao20unid508062m_509.addFeatures(features_LoteEdificao20unid508062m_509);
var lyr_LoteEdificao20unid508062m_509 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEdificao20unid508062m_509, 
                style: style_LoteEdificao20unid508062m_509,
                popuplayertitle: 'Lote/Edificação (20 unid. / 5.080,62 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEdificao20unid508062m_509.png" /> Lote/Edificação (20 unid. / 5.080,62 m²)'
            });
var format_LoteEMDEF10unid_510 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid_510 = format_LoteEMDEF10unid_510.readFeatures(json_LoteEMDEF10unid_510, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEMDEF10unid_510 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid_510.addFeatures(features_LoteEMDEF10unid_510);
var lyr_LoteEMDEF10unid_510 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid_510, 
                style: style_LoteEMDEF10unid_510,
                popuplayertitle: 'Lote EMDEF (10 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid_510.png" /> Lote EMDEF (10 unid.)'
            });
var format_LoteEMDEF10unid218783m_511 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid218783m_511 = format_LoteEMDEF10unid218783m_511.readFeatures(json_LoteEMDEF10unid218783m_511, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEMDEF10unid218783m_511 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid218783m_511.addFeatures(features_LoteEMDEF10unid218783m_511);
var lyr_LoteEMDEF10unid218783m_511 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid218783m_511, 
                style: style_LoteEMDEF10unid218783m_511,
                popuplayertitle: 'Lote EMDEF (10 unid. / 2.187,83 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid218783m_511.png" /> Lote EMDEF (10 unid. / 2.187,83 m²)'
            });
var format_Lote252unid_512 = new ol.format.GeoJSON();
var features_Lote252unid_512 = format_Lote252unid_512.readFeatures(json_Lote252unid_512, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote252unid_512 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote252unid_512.addFeatures(features_Lote252unid_512);
var lyr_Lote252unid_512 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote252unid_512, 
                style: style_Lote252unid_512,
                popuplayertitle: 'Lote (252 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lote252unid_512.png" /> Lote (252 unid.)'
            });
var format_Lote252unid7530210m_513 = new ol.format.GeoJSON();
var features_Lote252unid7530210m_513 = format_Lote252unid7530210m_513.readFeatures(json_Lote252unid7530210m_513, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote252unid7530210m_513 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote252unid7530210m_513.addFeatures(features_Lote252unid7530210m_513);
var lyr_Lote252unid7530210m_513 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote252unid7530210m_513, 
                style: style_Lote252unid7530210m_513,
                popuplayertitle: 'Lote (252 unid. / 75.302,10 m²)',
                interactive: true,
                title: '<img src="styles/legend/Lote252unid7530210m_513.png" /> Lote (252 unid. / 75.302,10 m²)'
            });
var format_LeiloLEI97542025Proc7954202537196unid_514 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Proc7954202537196unid_514 = format_LeiloLEI97542025Proc7954202537196unid_514.readFeatures(json_LeiloLEI97542025Proc7954202537196unid_514, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Proc7954202537196unid_514 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Proc7954202537196unid_514.addFeatures(features_LeiloLEI97542025Proc7954202537196unid_514);
var lyr_LeiloLEI97542025Proc7954202537196unid_514 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Proc7954202537196unid_514, 
                style: style_LeiloLEI97542025Proc7954202537196unid_514,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Proc 7954/2025-37 (196 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Proc7954202537196unid_514.png" /> Leilão - LEI 9.754/2025 - Proc 7954/2025-37 (196 unid.)'
            });
var format_LeiloLEI97542025Proc7954202537196unid3240462m_515 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Proc7954202537196unid3240462m_515 = format_LeiloLEI97542025Proc7954202537196unid3240462m_515.readFeatures(json_LeiloLEI97542025Proc7954202537196unid3240462m_515, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Proc7954202537196unid3240462m_515 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Proc7954202537196unid3240462m_515.addFeatures(features_LeiloLEI97542025Proc7954202537196unid3240462m_515);
var lyr_LeiloLEI97542025Proc7954202537196unid3240462m_515 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Proc7954202537196unid3240462m_515, 
                style: style_LeiloLEI97542025Proc7954202537196unid3240462m_515,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Proc 7954/2025-37 (196 unid. / 32.404,62 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Proc7954202537196unid3240462m_515.png" /> Leilão - LEI 9.754/2025 - Proc 7954/2025-37 (196 unid. / 32.404,62 m²)'
            });
var format_LeiloLEI97542025Proc2652520256922unid_516 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Proc2652520256922unid_516 = format_LeiloLEI97542025Proc2652520256922unid_516.readFeatures(json_LeiloLEI97542025Proc2652520256922unid_516, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Proc2652520256922unid_516 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Proc2652520256922unid_516.addFeatures(features_LeiloLEI97542025Proc2652520256922unid_516);
var lyr_LeiloLEI97542025Proc2652520256922unid_516 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Proc2652520256922unid_516, 
                style: style_LeiloLEI97542025Proc2652520256922unid_516,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Proc 26525/2025-69 (22 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Proc2652520256922unid_516.png" /> Leilão - LEI 9.754/2025 - Proc 26525/2025-69 (22 unid.)'
            });
var format_LeiloLEI97542025Proc2652520256922unid352000m_517 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Proc2652520256922unid352000m_517 = format_LeiloLEI97542025Proc2652520256922unid352000m_517.readFeatures(json_LeiloLEI97542025Proc2652520256922unid352000m_517, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Proc2652520256922unid352000m_517 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Proc2652520256922unid352000m_517.addFeatures(features_LeiloLEI97542025Proc2652520256922unid352000m_517);
var lyr_LeiloLEI97542025Proc2652520256922unid352000m_517 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Proc2652520256922unid352000m_517, 
                style: style_LeiloLEI97542025Proc2652520256922unid352000m_517,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Proc 26525/2025-69 (22 unid. / 3.520,00 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Proc2652520256922unid352000m_517.png" /> Leilão - LEI 9.754/2025 - Proc 26525/2025-69 (22 unid. / 3.520,00 m²)'
            });
var format_LeiloLEI97542025Proc2198620254518unid_518 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Proc2198620254518unid_518 = format_LeiloLEI97542025Proc2198620254518unid_518.readFeatures(json_LeiloLEI97542025Proc2198620254518unid_518, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Proc2198620254518unid_518 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Proc2198620254518unid_518.addFeatures(features_LeiloLEI97542025Proc2198620254518unid_518);
var lyr_LeiloLEI97542025Proc2198620254518unid_518 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Proc2198620254518unid_518, 
                style: style_LeiloLEI97542025Proc2198620254518unid_518,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Proc 21986/2025-45 (18 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Proc2198620254518unid_518.png" /> Leilão - LEI 9.754/2025 - Proc 21986/2025-45 (18 unid.)'
            });
var format_LeiloLEI97542025Proc2198620254518unid2092083m_519 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Proc2198620254518unid2092083m_519 = format_LeiloLEI97542025Proc2198620254518unid2092083m_519.readFeatures(json_LeiloLEI97542025Proc2198620254518unid2092083m_519, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Proc2198620254518unid2092083m_519 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Proc2198620254518unid2092083m_519.addFeatures(features_LeiloLEI97542025Proc2198620254518unid2092083m_519);
var lyr_LeiloLEI97542025Proc2198620254518unid2092083m_519 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Proc2198620254518unid2092083m_519, 
                style: style_LeiloLEI97542025Proc2198620254518unid2092083m_519,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Proc 21986/2025-45 (18 unid. / 20.920,83 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Proc2198620254518unid2092083m_519.png" /> Leilão - LEI 9.754/2025 - Proc 21986/2025-45 (18 unid. / 20.920,83 m²)'
            });
var format_LeiloLEI97542025Homologado4unid_520 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Homologado4unid_520 = format_LeiloLEI97542025Homologado4unid_520.readFeatures(json_LeiloLEI97542025Homologado4unid_520, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Homologado4unid_520 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Homologado4unid_520.addFeatures(features_LeiloLEI97542025Homologado4unid_520);
var lyr_LeiloLEI97542025Homologado4unid_520 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Homologado4unid_520, 
                style: style_LeiloLEI97542025Homologado4unid_520,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Homologado (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Homologado4unid_520.png" /> Leilão - LEI 9.754/2025 - Homologado (4 unid.)'
            });
var format_LeiloLEI97542025Homologado4unid334770m_521 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Homologado4unid334770m_521 = format_LeiloLEI97542025Homologado4unid334770m_521.readFeatures(json_LeiloLEI97542025Homologado4unid334770m_521, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Homologado4unid334770m_521 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Homologado4unid334770m_521.addFeatures(features_LeiloLEI97542025Homologado4unid334770m_521);
var lyr_LeiloLEI97542025Homologado4unid334770m_521 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Homologado4unid334770m_521, 
                style: style_LeiloLEI97542025Homologado4unid334770m_521,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Homologado (4 unid. / 3.347,70 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Homologado4unid334770m_521.png" /> Leilão - LEI 9.754/2025 - Homologado (4 unid. / 3.347,70 m²)'
            });
var format_reaVerde2117unid881307234m_522 = new ol.format.GeoJSON();
var features_reaVerde2117unid881307234m_522 = format_reaVerde2117unid881307234m_522.readFeatures(json_reaVerde2117unid881307234m_522, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaVerde2117unid881307234m_522 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaVerde2117unid881307234m_522.addFeatures(features_reaVerde2117unid881307234m_522);
var lyr_reaVerde2117unid881307234m_522 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaVerde2117unid881307234m_522, 
                style: style_reaVerde2117unid881307234m_522,
                popuplayertitle: 'Área Verde (2117 unid. / 8.813.072,34 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaVerde2117unid881307234m_522.png" /> Área Verde (2117 unid. / 8.813.072,34 m²)'
            });
var format_reaPatrimonial69unid121924073m_523 = new ol.format.GeoJSON();
var features_reaPatrimonial69unid121924073m_523 = format_reaPatrimonial69unid121924073m_523.readFeatures(json_reaPatrimonial69unid121924073m_523, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaPatrimonial69unid121924073m_523 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaPatrimonial69unid121924073m_523.addFeatures(features_reaPatrimonial69unid121924073m_523);
var lyr_reaPatrimonial69unid121924073m_523 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaPatrimonial69unid121924073m_523, 
                style: style_reaPatrimonial69unid121924073m_523,
                popuplayertitle: 'Área Patrimonial (69 unid. / 1.219.240,73 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaPatrimonial69unid121924073m_523.png" /> Área Patrimonial (69 unid. / 1.219.240,73 m²)'
            });
var format_reaInstitucional371unid208395759m_524 = new ol.format.GeoJSON();
var features_reaInstitucional371unid208395759m_524 = format_reaInstitucional371unid208395759m_524.readFeatures(json_reaInstitucional371unid208395759m_524, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaInstitucional371unid208395759m_524 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaInstitucional371unid208395759m_524.addFeatures(features_reaInstitucional371unid208395759m_524);
var lyr_reaInstitucional371unid208395759m_524 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaInstitucional371unid208395759m_524, 
                style: style_reaInstitucional371unid208395759m_524,
                popuplayertitle: 'Área Institucional  (371 unid. / 2.083.957,59 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaInstitucional371unid208395759m_524.png" /> Área Institucional  (371 unid. / 2.083.957,59 m²)'
            });
var format_readeUsoEspecial280unid271349968m_525 = new ol.format.GeoJSON();
var features_readeUsoEspecial280unid271349968m_525 = format_readeUsoEspecial280unid271349968m_525.readFeatures(json_readeUsoEspecial280unid271349968m_525, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_readeUsoEspecial280unid271349968m_525 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeUsoEspecial280unid271349968m_525.addFeatures(features_readeUsoEspecial280unid271349968m_525);
var lyr_readeUsoEspecial280unid271349968m_525 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeUsoEspecial280unid271349968m_525, 
                style: style_readeUsoEspecial280unid271349968m_525,
                popuplayertitle: 'Área de Uso Especial (280 unid. / 2.713.499,68 m²)',
                interactive: true,
                title: '<img src="styles/legend/readeUsoEspecial280unid271349968m_525.png" /> Área de Uso Especial (280 unid. / 2.713.499,68 m²)'
            });
var format_APP169unid239527816m_526 = new ol.format.GeoJSON();
var features_APP169unid239527816m_526 = format_APP169unid239527816m_526.readFeatures(json_APP169unid239527816m_526, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP169unid239527816m_526 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP169unid239527816m_526.addFeatures(features_APP169unid239527816m_526);
var lyr_APP169unid239527816m_526 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP169unid239527816m_526, 
                style: style_APP169unid239527816m_526,
                popuplayertitle: 'APP (169 unid. / 2.395.278,16 m²)',
                interactive: true,
                title: '<img src="styles/legend/APP169unid239527816m_526.png" /> APP (169 unid. / 2.395.278,16 m²)'
            });
var format_TRPRL_CETESB_527 = new ol.format.GeoJSON();
var features_TRPRL_CETESB_527 = format_TRPRL_CETESB_527.readFeatures(json_TRPRL_CETESB_527, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRL_CETESB_527 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRL_CETESB_527.addFeatures(features_TRPRL_CETESB_527);
var lyr_TRPRL_CETESB_527 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRL_CETESB_527, 
                style: style_TRPRL_CETESB_527,
                popuplayertitle: 'TRPRL_CETESB',
                interactive: true,
                title: '<img src="styles/legend/TRPRL_CETESB_527.png" /> TRPRL_CETESB'
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
var format_TCRA_MUNICIPAL_529 = new ol.format.GeoJSON();
var features_TCRA_MUNICIPAL_529 = format_TCRA_MUNICIPAL_529.readFeatures(json_TCRA_MUNICIPAL_529, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRA_MUNICIPAL_529 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRA_MUNICIPAL_529.addFeatures(features_TCRA_MUNICIPAL_529);
var lyr_TCRA_MUNICIPAL_529 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRA_MUNICIPAL_529, 
                style: style_TCRA_MUNICIPAL_529,
                popuplayertitle: 'TCRA_MUNICIPAL',
                interactive: true,
                title: '<img src="styles/legend/TCRA_MUNICIPAL_529.png" /> TCRA_MUNICIPAL'
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
var format_TCRA_CETESB_PARCELAMENTO_531 = new ol.format.GeoJSON();
var features_TCRA_CETESB_PARCELAMENTO_531 = format_TCRA_CETESB_PARCELAMENTO_531.readFeatures(json_TCRA_CETESB_PARCELAMENTO_531, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRA_CETESB_PARCELAMENTO_531 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRA_CETESB_PARCELAMENTO_531.addFeatures(features_TCRA_CETESB_PARCELAMENTO_531);
var lyr_TCRA_CETESB_PARCELAMENTO_531 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRA_CETESB_PARCELAMENTO_531, 
                style: style_TCRA_CETESB_PARCELAMENTO_531,
                popuplayertitle: 'TCRA_CETESB_PARCELAMENTO',
                interactive: true,
                title: '<img src="styles/legend/TCRA_CETESB_PARCELAMENTO_531.png" /> TCRA_CETESB_PARCELAMENTO'
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
var format_TCRA_CETESB_533 = new ol.format.GeoJSON();
var features_TCRA_CETESB_533 = format_TCRA_CETESB_533.readFeatures(json_TCRA_CETESB_533, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRA_CETESB_533 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRA_CETESB_533.addFeatures(features_TCRA_CETESB_533);
var lyr_TCRA_CETESB_533 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRA_CETESB_533, 
                style: style_TCRA_CETESB_533,
                popuplayertitle: 'TCRA_CETESB',
                interactive: true,
                title: '<img src="styles/legend/TCRA_CETESB_533.png" /> TCRA_CETESB'
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
var format_TAC_MP_535 = new ol.format.GeoJSON();
var features_TAC_MP_535 = format_TAC_MP_535.readFeatures(json_TAC_MP_535, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TAC_MP_535 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAC_MP_535.addFeatures(features_TAC_MP_535);
var lyr_TAC_MP_535 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAC_MP_535, 
                style: style_TAC_MP_535,
                popuplayertitle: 'TAC_MP',
                interactive: true,
                title: '<img src="styles/legend/TAC_MP_535.png" /> TAC_MP'
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
var format_PLANTIO_VOLUNTARIO_537 = new ol.format.GeoJSON();
var features_PLANTIO_VOLUNTARIO_537 = format_PLANTIO_VOLUNTARIO_537.readFeatures(json_PLANTIO_VOLUNTARIO_537, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PLANTIO_VOLUNTARIO_537 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLANTIO_VOLUNTARIO_537.addFeatures(features_PLANTIO_VOLUNTARIO_537);
var lyr_PLANTIO_VOLUNTARIO_537 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLANTIO_VOLUNTARIO_537, 
                style: style_PLANTIO_VOLUNTARIO_537,
                popuplayertitle: 'PLANTIO_VOLUNTARIO',
                interactive: true,
                title: '<img src="styles/legend/PLANTIO_VOLUNTARIO_537.png" /> PLANTIO_VOLUNTARIO'
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
var format_ANUENCIA_539 = new ol.format.GeoJSON();
var features_ANUENCIA_539 = format_ANUENCIA_539.readFeatures(json_ANUENCIA_539, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ANUENCIA_539 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANUENCIA_539.addFeatures(features_ANUENCIA_539);
var lyr_ANUENCIA_539 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANUENCIA_539, 
                style: style_ANUENCIA_539,
                popuplayertitle: 'ANUENCIA',
                interactive: true,
                title: '<img src="styles/legend/ANUENCIA_539.png" /> ANUENCIA'
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
var format_AIIPA_CETESB_541 = new ol.format.GeoJSON();
var features_AIIPA_CETESB_541 = format_AIIPA_CETESB_541.readFeatures(json_AIIPA_CETESB_541, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AIIPA_CETESB_541 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIIPA_CETESB_541.addFeatures(features_AIIPA_CETESB_541);
var lyr_AIIPA_CETESB_541 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIIPA_CETESB_541, 
                style: style_AIIPA_CETESB_541,
                popuplayertitle: 'AIIPA_CETESB',
                interactive: true,
                title: '<img src="styles/legend/AIIPA_CETESB_541.png" /> AIIPA_CETESB'
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
var format_ACAO_CIVIL_PUBLICA_543 = new ol.format.GeoJSON();
var features_ACAO_CIVIL_PUBLICA_543 = format_ACAO_CIVIL_PUBLICA_543.readFeatures(json_ACAO_CIVIL_PUBLICA_543, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ACAO_CIVIL_PUBLICA_543 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACAO_CIVIL_PUBLICA_543.addFeatures(features_ACAO_CIVIL_PUBLICA_543);
var lyr_ACAO_CIVIL_PUBLICA_543 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACAO_CIVIL_PUBLICA_543, 
                style: style_ACAO_CIVIL_PUBLICA_543,
                popuplayertitle: 'ACAO_CIVIL_PUBLICA',
                interactive: true,
                title: '<img src="styles/legend/ACAO_CIVIL_PUBLICA_543.png" /> ACAO_CIVIL_PUBLICA'
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
var format_AdoteUmaPraa392unid38295094m_545 = new ol.format.GeoJSON();
var features_AdoteUmaPraa392unid38295094m_545 = format_AdoteUmaPraa392unid38295094m_545.readFeatures(json_AdoteUmaPraa392unid38295094m_545, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AdoteUmaPraa392unid38295094m_545 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdoteUmaPraa392unid38295094m_545.addFeatures(features_AdoteUmaPraa392unid38295094m_545);
var lyr_AdoteUmaPraa392unid38295094m_545 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdoteUmaPraa392unid38295094m_545, 
                style: style_AdoteUmaPraa392unid38295094m_545,
                popuplayertitle: 'Adote Uma Praça (392 unid. / 382.950,94 m²)',
                interactive: true,
                title: '<img src="styles/legend/AdoteUmaPraa392unid38295094m_545.png" /> Adote Uma Praça (392 unid. / 382.950,94 m²)'
            });
var format_SPlacaEgnaldo4unid86447m_546 = new ol.format.GeoJSON();
var features_SPlacaEgnaldo4unid86447m_546 = format_SPlacaEgnaldo4unid86447m_546.readFeatures(json_SPlacaEgnaldo4unid86447m_546, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SPlacaEgnaldo4unid86447m_546 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPlacaEgnaldo4unid86447m_546.addFeatures(features_SPlacaEgnaldo4unid86447m_546);
var lyr_SPlacaEgnaldo4unid86447m_546 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPlacaEgnaldo4unid86447m_546, 
                style: style_SPlacaEgnaldo4unid86447m_546,
                popuplayertitle: 'S/ Placa - Egnaldo (4 unid. / 864,47 m²)',
                interactive: true,
                title: '<img src="styles/legend/SPlacaEgnaldo4unid86447m_546.png" /> S/ Placa - Egnaldo (4 unid. / 864,47 m²)'
            });
var format_SPlacaDilu15unid751060m_547 = new ol.format.GeoJSON();
var features_SPlacaDilu15unid751060m_547 = format_SPlacaDilu15unid751060m_547.readFeatures(json_SPlacaDilu15unid751060m_547, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SPlacaDilu15unid751060m_547 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPlacaDilu15unid751060m_547.addFeatures(features_SPlacaDilu15unid751060m_547);
var lyr_SPlacaDilu15unid751060m_547 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPlacaDilu15unid751060m_547, 
                style: style_SPlacaDilu15unid751060m_547,
                popuplayertitle: 'S/ Placa - Dilu (15 unid. / 7.510,60 m²)',
                interactive: true,
                title: '<img src="styles/legend/SPlacaDilu15unid751060m_547.png" /> S/ Placa - Dilu (15 unid. / 7.510,60 m²)'
            });
var format_CPlacaEgnaldo221unid22321870m_548 = new ol.format.GeoJSON();
var features_CPlacaEgnaldo221unid22321870m_548 = format_CPlacaEgnaldo221unid22321870m_548.readFeatures(json_CPlacaEgnaldo221unid22321870m_548, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CPlacaEgnaldo221unid22321870m_548 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CPlacaEgnaldo221unid22321870m_548.addFeatures(features_CPlacaEgnaldo221unid22321870m_548);
var lyr_CPlacaEgnaldo221unid22321870m_548 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CPlacaEgnaldo221unid22321870m_548, 
                style: style_CPlacaEgnaldo221unid22321870m_548,
                popuplayertitle: 'C/ Placa - Egnaldo (221 unid. / 223.218,70 m²)',
                interactive: true,
                title: '<img src="styles/legend/CPlacaEgnaldo221unid22321870m_548.png" /> C/ Placa - Egnaldo (221 unid. / 223.218,70 m²)'
            });
var format_CPlacaDilu152unid15990431m_549 = new ol.format.GeoJSON();
var features_CPlacaDilu152unid15990431m_549 = format_CPlacaDilu152unid15990431m_549.readFeatures(json_CPlacaDilu152unid15990431m_549, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CPlacaDilu152unid15990431m_549 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CPlacaDilu152unid15990431m_549.addFeatures(features_CPlacaDilu152unid15990431m_549);
var lyr_CPlacaDilu152unid15990431m_549 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CPlacaDilu152unid15990431m_549, 
                style: style_CPlacaDilu152unid15990431m_549,
                popuplayertitle: 'C/ Placa - Dilu (152 unid. / 159.904,31 m²)',
                interactive: true,
                title: '<img src="styles/legend/CPlacaDilu152unid15990431m_549.png" /> C/ Placa - Dilu (152 unid. / 159.904,31 m²)'
            });
var group_ProgramaAdoteUmaPraa = new ol.layer.Group({
                                layers: [lyr_AdoteUmaPraa392unid38295094m_545,lyr_SPlacaEgnaldo4unid86447m_546,lyr_SPlacaDilu15unid751060m_547,lyr_CPlacaEgnaldo221unid22321870m_548,lyr_CPlacaDilu152unid15990431m_549,],
                                fold: 'close',
                                title: 'Programa Adote Uma Praça'});
var group_reasdeCompensaoAmbiental = new ol.layer.Group({
                                layers: [lyr_TRPRL_CETESB_527,lyr_TRPRL_CETESB_528,lyr_TCRA_MUNICIPAL_529,lyr_TCRA_MUNICIPAL_530,lyr_TCRA_CETESB_PARCELAMENTO_531,lyr_TCRA_CETESB_PARCELAMENTO_532,lyr_TCRA_CETESB_533,lyr_TCRA_CETESB_534,lyr_TAC_MP_535,lyr_TAC_MP_536,lyr_PLANTIO_VOLUNTARIO_537,lyr_PLANTIO_VOLUNTARIO_538,lyr_ANUENCIA_539,lyr_ANUENCIA_540,lyr_AIIPA_CETESB_541,lyr_AIIPA_CETESB_542,lyr_ACAO_CIVIL_PUBLICA_543,lyr_ACAO_CIVIL_PUBLICA_544,],
                                fold: 'close',
                                title: 'Áreas de Compensação Ambiental'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_LoteamentoFechado146unid70632440m_507,lyr_LoteEdificao20unid_508,lyr_LoteEdificao20unid508062m_509,lyr_LoteEMDEF10unid_510,lyr_LoteEMDEF10unid218783m_511,lyr_Lote252unid_512,lyr_Lote252unid7530210m_513,lyr_LeiloLEI97542025Proc7954202537196unid_514,lyr_LeiloLEI97542025Proc7954202537196unid3240462m_515,lyr_LeiloLEI97542025Proc2652520256922unid_516,lyr_LeiloLEI97542025Proc2652520256922unid352000m_517,lyr_LeiloLEI97542025Proc2198620254518unid_518,lyr_LeiloLEI97542025Proc2198620254518unid2092083m_519,lyr_LeiloLEI97542025Homologado4unid_520,lyr_LeiloLEI97542025Homologado4unid334770m_521,lyr_reaVerde2117unid881307234m_522,lyr_reaPatrimonial69unid121924073m_523,lyr_reaInstitucional371unid208395759m_524,lyr_readeUsoEspecial280unid271349968m_525,lyr_APP169unid239527816m_526,],
                                fold: 'close',
                                title: 'Áreas Públicas'});
var group_ClassesdeRiscoIPT = new ol.layer.Group({
                                layers: [lyr_CLASSE_VB_497,lyr_CLASSE_VA_498,lyr_CLASSE_IVC_499,lyr_CLASSE_IVB_500,lyr_CLASSE_IVA_501,lyr_CLASSE_IIIC_502,lyr_CLASSE_IIIB_503,lyr_CLASSE_IIIA_504,lyr_CLASSE_II_505,lyr_CLASSE_I_506,],
                                fold: 'close',
                                title: 'Classes de Risco IPT'});
var group_ControleAreo = new ol.layer.Group({
                                layers: [lyr_PROTECAO_AERODROMO_493,lyr_HELIPONTO_HOSPITAL_REGIONAL_494,lyr_HELIPONTO_EDIFICIO_PRIME_495,lyr_HELIPONTO_EDIFICIO_PRIME_496,],
                                fold: 'close',
                                title: 'Controle Aéreo'});
var group_DescarteCorretodeResduos = new ol.layer.Group({
                                layers: [lyr_SERVICO_DE_SAUDE_475,lyr_RECICLAVEIS_476,lyr_PNEUS_477,lyr_PILHAS_E_BATERIAS_478,lyr_PERIGOSOS_479,lyr_OLEO_LUBRIFICANTE_480,lyr_OLEO_DE_COZINHA_481,lyr_MASSA_VERDE_482,lyr_MADEIRAS_483,lyr_LATAS_DE_TINTA_484,lyr_LAMPADAS_485,lyr_INSERVIVEIS_486,lyr_GESSO_487,lyr_EMBALAGENS_AGROTOXICO_488,lyr_ELETRONICOS_489,lyr_COURO_490,lyr_CONSTRUCAO_CIVIL_491,lyr_CHAPAS_DE_RAIO_X_492,],
                                fold: 'close',
                                title: 'Descarte Correto de Resíduos'});
var group_Diversos = new ol.layer.Group({
                                layers: [lyr_Voorocas27unid_470,lyr_LocaisDifcilAcessoreasRurais12unid_471,lyr_Contineres286unid_472,lyr_rvoreImuneaoCorte9unid_473,lyr_AcademiasaoArLivre84unid_474,],
                                fold: 'close',
                                title: 'Diversos'});
var group_DivisoTerritorialMunicipal = new ol.layer.Group({
                                layers: [lyr_REGIAO_SUL_465,lyr_REGIAO_OESTE_466,lyr_REGIAO_NORTE_467,lyr_REGIAO_LESTE_468,lyr_BAIRROS_469,],
                                fold: 'close',
                                title: 'Divisão Territorial Municipal'});
var group_Drenagem = new ol.layer.Group({
                                layers: [lyr_DrenagensExistentes_395,lyr_Drenagens_396,lyr_DRENAGEM_VILLAGIO_DI_FIRENZE_397,lyr_DRENAGEM_VILLA_SANTA_GIANNA_398,lyr_DRENAGEM_VILA_TOTOLI_399,lyr_DRENAGEM_VILA_REAL_400,lyr_DRENAGEM_VILA_DORATTA_401,lyr_DRENAGEM_SAO_PEDRO_II_402,lyr_DRENAGEM_SANTA_FE_403,lyr_DRENAGEM_RESIDENCIAL_TELLINI_404,lyr_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405,lyr_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406,lyr_DRENAGEM_RESIDENCIAL_SANTA_INES_407,lyr_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408,lyr_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409,lyr_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410,lyr_DRENAGEM_RESIDENCIAL_PALERMO_411,lyr_DRENAGEM_RESIDENCIAL_ITAPUA_412,lyr_DRENAGEM_RESIDENCIAL_GAIA_413,lyr_DRENAGEM_RESIDENCIAL_FERRACINI_414,lyr_DRENAGEM_RESIDENCIAL_FAGGIONI_415,lyr_DRENAGEM_RESIDENCIAL_ECOSTILO_416,lyr_DRENAGEM_RESIDENCIAL_DOURADO_417,lyr_DRENAGEM_RESIDENCIAL_BALDASSARI_418,lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_419,lyr_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420,lyr_DRENAGEM_RECREIO_CAMPO_BELO_421,lyr_DRENAGEM_RECANTO_MENEGHETTI_422,lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_423,lyr_DRENAGEM_PROL_VILA_ISABEL_424,lyr_DRENAGEM_PROL_JARDIM_MARTINS_425,lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426,lyr_DRENAGEM_PARQUE_UNIVERSITARIO_427,lyr_DRENAGEM_PARQUE_SANTA_ADELIA_428,lyr_DRENAGEM_PARQUE_MOEMA_429,lyr_DRENAGEM_PARQUE_JOAO_LEITE_430,lyr_DRENAGEM_PARQUE_DOS_SABIAS_431,lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_432,lyr_DRENAGEM_PARQUE_DAS_ARVORES_433,lyr_DRENAGEM_PARQUE_CASTELO_434,lyr_DRENAGEM_PARQUE_BOA_VISTA_435,lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_436,lyr_DRENAGEM_PARAGON_437,lyr_DRENAGEM_NAIR_RETUSSI_I_438,lyr_DRENAGEM_JARDIM_SAO_GABRIEL_439,lyr_DRENAGEM_JARDIM_SANTA_LUCIA_440,lyr_DRENAGEM_JARDIM_PULICANO_441,lyr_DRENAGEM_JARDIM_PORTINARI_442,lyr_DRENAGEM_JARDIM_PIRATININGA_443,lyr_DRENAGEM_JARDIM_PALMA_444,lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_445,lyr_DRENAGEM_JARDIM_NOEMIA_446,lyr_DRENAGEM_JARDIM_NATAL_447,lyr_DRENAGEM_JARDIM_MARTINS_448,lyr_DRENAGEM_JARDIM_MARIA_LUIZA_449,lyr_DRENAGEM_JARDIM_LIBANO_450,lyr_DRENAGEM_JARDIM_IPANEMA_451,lyr_DRENAGEM_JARDIM_BUENO_452,lyr_DRENAGEM_JARDIM_BOTANICO_453,lyr_DRENAGEM_JARDIM_BARAO_454,lyr_DRENAGEM_JARDIM_AVIACAO_455,lyr_DRENAGEM_JARDIM_ARIZONA_II_456,lyr_DRENAGEM_JARDIM_ARIZONA_I_457,lyr_DRENAGEM_JARDIM_AEROPORTO_II_458,lyr_DRENAGEM_GRAMADOS_I_459,lyr_DRENAGEM_FRANCA_POLO_CLUBE_460,lyr_DRENAGEM_DOMINGOS_JARDINI_461,lyr_DRENAGEM_DINFRA_II_462,lyr_DRENAGEM_ATLANTA_PARK_463,lyr_DRENAGEM_ANA_DOROTHEA_464,],
                                fold: 'close',
                                title: 'Drenagem'});
var group_Ecopontos = new ol.layer.Group({
                                layers: [lyr_PROPOSTO_392,lyr_EM_FUNCIONAMENTO_393,lyr_EM_CONSTRUCAO_394,],
                                fold: 'close',
                                title: 'Ecopontos'});
var group_FazendaMunicipalPousoAlto = new ol.layer.Group({
                                layers: [lyr_PARTE_DA_AREA_G_AVERBADA_374,lyr_PARTE_DA_AREA_G_A_SER_AVERBADA_375,lyr_CONJUNTO_HABITACIONAL_376,lyr_AV_ACESSO_COLEGIO_AGRICOLA_377,lyr_AREA_N2_378,lyr_AREA_N1_379,lyr_AREA_N_380,lyr_AREA_K_381,lyr_AREA_J_382,lyr_AREA_I_383,lyr_AREA_H_384,lyr_AREA_G_385,lyr_AREA_F_386,lyr_AREA_E_387,lyr_AREA_D_388,lyr_AREA_C_389,lyr_AREA_B_390,lyr_AREA_A_391,],
                                fold: 'close',
                                title: 'Fazenda Municipal Pouso Alto'});
var group_GerenciamentodereasContaminadas = new ol.layer.Group({
                                layers: [lyr_AntigoAterrodaFazMunicipal_363,lyr_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_364,lyr_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_365,lyr_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_366,lyr_reaBdaFazMunicipal_367,lyr_reaBdaFazMunicPoosMonitEngesolve7unid_368,lyr_AntigoAterrodasMaritacas_369,lyr_AntigoAterroMaritacas1Etapa28unid_370,lyr_ParqueZumbidosPalmares_371,lyr_AntigoAterroMaritacas3Etapa5unid_372,lyr_AntigoAterroMaritacas2Etapa41unid_373,],
                                fold: 'close',
                                title: 'Gerenciamento de Áreas Contaminadas'});
var group_HidrografiaFBDS2025 = new ol.layer.Group({
                                layers: [lyr_APP1745unid_356,lyr_RiosDuplos84unid_357,lyr_MassasDgua270unid_358,lyr_RiosSimples1842unid_359,lyr_CORPO_HIDRICO_CANAL_FECHADO_360,lyr_CORPO_HIDRICO_CANAL_ABERTO_361,lyr_Nascentes821unid_362,],
                                fold: 'close',
                                title: 'Hidrografia FBDS 2025'});
var group_LoteamentosClandestinos = new ol.layer.Group({
                                layers: [lyr_IRREGULAR_354,lyr_IRREGULAR_355,],
                                fold: 'close',
                                title: 'Loteamentos Clandestinos'});
var group_LoteamentosCondomniosParcelamentodoSolo = new ol.layer.Group({
                                layers: [lyr_Vivenna_130,lyr_Vivenna_131,lyr_VittaSoVicente_132,lyr_VittaSoVicente_133,lyr_VittaJardimSimes_134,lyr_VittaJardimSimes_135,lyr_VittaAlvorada_136,lyr_VittaAlvorada_137,lyr_VilaDiEspanha_138,lyr_VilaDiEspanha_139,lyr_VillaPucci_140,lyr_VillaPucci_141,lyr_VilaPiemonteII_142,lyr_VilaPiemonteII_143,lyr_VilaOlimpica_144,lyr_VilaOlimpica_145,lyr_VillaDoratta_146,lyr_VillaDoratta_147,lyr_VillaBella_148,lyr_VillaBella_149,lyr_Versalhes_150,lyr_Versalhes_151,lyr_TorontoResidence_152,lyr_TorontoResidence_153,lyr_TerraNova_154,lyr_TerraNova_155,lyr_Sonetto_156,lyr_Sonetto_157,lyr_SMARTFRANCAEIXORESIDENCIAL2_158,lyr_SMARTFRANCAEIXORESIDENCIAL2_159,lyr_SMARTFRANCAEIXORESIDENCIAL1_160,lyr_SMARTFRANCAEIXORESIDENCIAL1_161,lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_162,lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_163,lyr_ServidoRamal138kVFranca4Guanabara_164,lyr_ServidoRamal138kVFranca4Guanabara_165,lyr_SantaLina_166,lyr_SantaLina_167,lyr_SantAnita_168,lyr_SantAnita_169,lyr_RuaAlfioBenedini_170,lyr_RuaAlfioBenedini_171,lyr_RuaAlfioBenedini_172,lyr_ResidencialValeVerde_173,lyr_ResidencialValeVerde_174,lyr_ResidencialYasminTorres_175,lyr_ResidencialYasminTorres_176,lyr_ResidencialTellini_177,lyr_ResidencialTellini_178,lyr_ResidencialSoCarlosII_179,lyr_ResidencialSoCarlosII_180,lyr_ResidencialSoCarlosI_181,lyr_ResidencialSoCarlosI_182,lyr_ResidencialSantaIns_183,lyr_ResidencialSantaIns_184,lyr_ResidencialSantaF_185,lyr_ResidencialSantaF_186,lyr_ResidencialQuintadosOitis_187,lyr_ResidencialQuintadosOitis_188,lyr_ResidencialQuintadoSol_189,lyr_ResidencialQuintadoSol_190,lyr_ResidencialPousoAlegreII_191,lyr_ResidencialPousoAlegreII_192,lyr_ResidencialPousoAlegre_193,lyr_ResidencialPousoAlegre_194,lyr_ResidencialPiamalim_195,lyr_ResidencialPiamalim_196,lyr_ResidencialParquedosPassaros_197,lyr_ResidencialParquedosPassaros_198,lyr_ResicencialNairRetuciII_199,lyr_ResicencialNairRetuciII_200,lyr_ResicencialNairRetuci_201,lyr_ResicencialNairRetuci_202,lyr_ResidencialMoradadoBosque_203,lyr_ResidencialMoradadoBosque_204,lyr_ResidencialMarthaHelena_205,lyr_ResidencialMarthaHelena_206,lyr_ResidencialMarioTasso_207,lyr_ResidencialMarioTasso_208,lyr_ResidencialMarianaAlarcon_209,lyr_ResidencialMarianaAlarcon_210,lyr_ResidencialJardimCanada_211,lyr_ResidencialJardimCanada_212,lyr_ResidencialJabuticabeiras_213,lyr_ResidencialJabuticabeiras_214,lyr_ResidencialGramadosII_215,lyr_ResidencialGramadosII_216,lyr_ResidencialGramados_217,lyr_ResidencialGramados_218,lyr_ResidencialGaia_219,lyr_ResidencialGaia_220,lyr_ResidencialFrutuoso_221,lyr_ResidencialFrutuoso_222,lyr_ResidencialFaggioni_223,lyr_ResidencialFaggioni_224,lyr_ResidencialEssenza_225,lyr_ResidencialEssenza_226,lyr_ResidencialDomingosJardini_227,lyr_ResidencialDomingosJardini_228,lyr_ResidencialCintraAlves_229,lyr_ResidencialCintraAlves_230,lyr_ResidencialBoaVista_231,lyr_ResidencialBoaVista_232,lyr_ResidencialAltodaFazenda_233,lyr_ResidencialAltodaFazenda_234,lyr_ResidencialAnaHelena_235,lyr_ResidencialAnaHelena_236,lyr_ReservaAbaete_237,lyr_ReservaAbaete_238,lyr_RecantoMeneghetti_239,lyr_RecantoMeneghetti_240,lyr_Quadra18VilaExposio_241,lyr_Quadra18VilaExposio_242,lyr_ProlongamentoSamelPark_243,lyr_ProlongamentoSamelPark_244,lyr_ParqueVillaLobos_245,lyr_ParqueVillaLobos_246,lyr_ParquePalmeiraImperial_247,lyr_ParquePalmeiraImperial_248,lyr_ParqueJacarand_249,lyr_ParqueJacarand_250,lyr_ParqueFlora_251,lyr_ParqueFlora_252,lyr_ParquedosSabias_253,lyr_ParquedosSabias_254,lyr_ParquedosCoqueiros_255,lyr_ParquedosCoqueiros_256,lyr_ParqueAlvorada_257,lyr_ParqueAlvorada_258,lyr_ParagonFaseII_259,lyr_ParagonFaseII_260,lyr_Paragon_261,lyr_Paragon_262,lyr_PalmeiraReal_263,lyr_PalmeiraReal_264,lyr_MoradadoVerdeII_265,lyr_MoradadoVerdeII_266,lyr_MoradadaMata_267,lyr_MoradadaMata_268,lyr_Monti_269,lyr_Monti_270,lyr_MontBlancResidence_271,lyr_MontBlancResidence_272,lyr_MasterplanDespaschoal_273,lyr_MasterplanDespaschoal_274,lyr_MasterplanDespaschoal_275,lyr_MasteplanBildVitta_276,lyr_MasteplanBildVitta_277,lyr_MasteplanBildVitta_278,lyr_Loteamentolamo_279,lyr_Loteamentolamo_280,lyr_JardimStephani_281,lyr_JardimStephani_282,lyr_JardimPherola_283,lyr_JardimPherola_284,lyr_JardimNatal_285,lyr_JardimNatal_286,lyr_JardimMariaLuiza_287,lyr_JardimMariaLuiza_288,lyr_JardimMariaAugusta_289,lyr_JardimMariaAugusta_290,lyr_JardimHorizonte_291,lyr_JardimHorizonte_292,lyr_JardimFlora_293,lyr_JardimFlora_294,lyr_IrineuZanetiII_295,lyr_IrineuZanetiII_296,lyr_Infratcnica_297,lyr_Infratcnica_298,lyr_HorizResidence_299,lyr_HorizResidence_300,lyr_GlebaNossaSenhoraAuxiliadora_301,lyr_GlebaNossaSenhoraAuxiliadora_302,lyr_Ferracini_303,lyr_Ferracini_304,lyr_FrancaB6_305,lyr_FrancaB6_306,lyr_FazendaProgresso_307,lyr_FazendaProgresso_308,lyr_FazendaeGranjaSantaRita2_309,lyr_FazendaeGranjaSantaRita2_310,lyr_FazendaeGranjaSantaRita_311,lyr_FazendaeGranjaSantaRita_312,lyr_Essence_313,lyr_Essence_314,lyr_Elias_315,lyr_Elias_316,lyr_EdifcioSolNascente_317,lyr_EdifcioSolNascente_318,lyr_EdifcioRuadoSol_319,lyr_EdifcioRuadoSol_320,lyr_EdifcioResidencialHope_321,lyr_EdifcioResidencialHope_322,lyr_DiocesedeFranca_323,lyr_DiocesedeFranca_324,lyr_DaVinci_325,lyr_DaVinci_326,lyr_CondomnioIICityPetrpolis_327,lyr_CondomnioIICityPetrpolis_328,lyr_CondomnioICityPetrpolis_329,lyr_CondomnioICityPetrpolis_330,lyr_Colorado_331,lyr_Colorado_332,lyr_CidadeJardim_333,lyr_CidadeJardim_334,lyr_ChacaraOlaria_335,lyr_ChacaraOlaria_336,lyr_ChacaraBelaVista_337,lyr_ChacaraBelaVista_338,lyr_BordadaMata_339,lyr_BordadaMata_340,lyr_Arteris_341,lyr_Arteris_342,lyr_ArterisFaixadeDomnioFrancaSP_3342_343,lyr_ArterisFaixadeDomnioFrancaSP_3452_344,lyr_ArterisFaixadeDomnioFrancaSPA_397334_345,lyr_Arizona_346,lyr_Arizona_347,lyr_AbuDhabiParadiseResortResidence_348,lyr_AbuDhabiParadiseResortResidence_349,lyr_EtapaAprovado43unid_350,lyr_EtapaDiretriz22unid_351,lyr_EtapaDefinitiva10unid_352,lyr_EtapaPrvia24unid_353,],
                                fold: 'close',
                                title: 'Loteamentos/Condomínios – Parcelamento do Solo'});
var group_LoteamentosRegularizadosREURB = new ol.layer.Group({
                                layers: [lyr_REGULARIZADO_128,lyr_REGULARIZADO_129,],
                                fold: 'close',
                                title: 'Loteamentos Regularizados - REURB'});
var group_ObrasPblicas = new ol.layer.Group({
                                layers: [lyr_UBS_SANTA_TEREZINHA_102,lyr_UBS_SANTA_BARBARA_103,lyr_UBS_PERES_ELIAS_104,lyr_UBS_PARQUE_HORTO_105,lyr_UBS_JARDIM_PALMA_106,lyr_REVITALIZACAO_ESTACAO_FERROVIARIA_107,lyr_REFORMA_CRAS_OESTE_108,lyr_REFORMA_CRAS_NORTE_109,lyr_REFORCO_ESTRUTURAL_CHAMPAGNAT_110,lyr_RECAPEAMENTO_JARDIM_MARTINS_111,lyr_PRONTO_SOCORRO_ALVARO_AZZUZ_112,lyr_POLICLINICA_113,lyr_NOVO_NGA_114,lyr_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_115,lyr_ESCOLA_JOAO_LIPORONI_116,lyr_DRENAGEM_CORREGO_CUBATAO_117,lyr_DRENAGEM_CORREGO_BRAGRES_118,lyr_DRENAGEM_CANAL_JD_PALMEIRAS_119,lyr_CRECHE_SAMEL_PARK_120,lyr_CORPO_BAMBEIROS_121,lyr_CONTENCAO_VIARIA_122,lyr_CONSTRUCAO_CAPS_INFANTIL_123,lyr_AREA_LAZER_PARQUE_ESMERALDA_124,lyr_AREA_LAZER_PARQUE_CONTINENTAL_125,lyr_AREA_LAZER_JARDIM_PORTINARI_126,lyr_OBRAS_PUBLICAS_127,],
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

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatelliteHybrid_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(true);lyr_LimiteMunicipaldeFranca_3.setVisible(true);lyr_reaUrbanadeFranca_4.setVisible(true);lyr_BACIA_RIO_CANOAS_LC_4322024_5.setVisible(false);lyr_BACIA_RIO_CANOAS_LC_1002006_6.setVisible(false);lyr_BACIA_RIBEIRAO_DA_ONCA_7.setVisible(false);lyr_ARO_REMANESCENTES_FLORESTAIS_8.setVisible(false);lyr_ARO_FAIXA_DE_CUESTAS_9.setVisible(false);lyr_ARO_AREA_DE_AMORTECIMENTO_10.setVisible(false);lyr_ARO_APP_11.setVisible(false);lyr_ARA_INCONGRUENCIAS_EM_APP_12.setVisible(false);lyr_ARA_ETE_LAGOAS_13.setVisible(false);lyr_ARA_ATERROS_14.setVisible(false);lyr_AOD_BAIXA_DENSIDADE_NIVEL_3_15.setVisible(false);lyr_AOD_BAIXA_DENSIDADE_NIVEL_2_16.setVisible(false);lyr_AOD_BAIXA_DENSIDADE_NIVEL_1_17.setVisible(false);lyr_AOD_AUS_FASE_2_18.setVisible(false);lyr_AOD_AUS_FASE_1_19.setVisible(false);lyr_AOD_AREA_URBANA_CONSOLIDADA_20.setVisible(false);lyr_SubMacrozonadeOcupaoRestrita_21.setVisible(false);lyr_SubMacrozonadeOcupaoPreferencial_22.setVisible(false);lyr_SubMacrozonadeExpansoUrbana_23.setVisible(false);lyr_MacrozonadoRioCanoas_24.setVisible(false);lyr_ExpUrbanaLeis4240199244201994eLC1002006_25.setVisible(false);lyr_ExpUrbanaLCN3242019_26.setVisible(false);lyr_ExpUrbanaLCN2352013_27.setVisible(false);lyr_ExpUrbanaLCN1402009_28.setVisible(false);lyr_ExpUrbanaLCN0502003_29.setVisible(false);lyr_reaEspecialLazerInteresseTursticoeCultural_30.setVisible(false);lyr_AERUreaEspecialResidenciasUnifamiliares_31.setVisible(false);lyr_AEPIreaEspecialPreferIndustrialeLogstica_32.setVisible(false);lyr_AEISreaEspecialdeInteresseSocial_33.setVisible(false);lyr_SistemaVirioSistemavirioprincipal_34.setVisible(false);lyr_SistemaVirioRodoviasViasarteriais_35.setVisible(false);lyr_SistemaVirioRodovias_36.setVisible(false);lyr_SistemaVirioExpansodosistemavirio_37.setVisible(false);lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_38.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_39.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_41.setVisible(false);lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_42.setVisible(false);lyr_VIGILANCIA_EM_SAUDE_43.setVisible(false);lyr_UNIDADE_DE_URGENCIA_E_EMERGENCIA_44.setVisible(false);lyr_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO_45.setVisible(false);lyr_GESTAO_ADMINISTRATIVO_46.setVisible(false);lyr_ATENCAO_PRIMARIA_47.setVisible(false);lyr_TEATRO_48.setVisible(false);lyr_SECRETARIA_49.setVisible(false);lyr_QUADRA_50.setVisible(false);lyr_PRACA_51.setVisible(false);lyr_PISTA_52.setVisible(false);lyr_PISCINA_53.setVisible(false);lyr_PINACOTECA_54.setVisible(false);lyr_PAVILHAO_55.setVisible(false);lyr_PARQUE_56.setVisible(false);lyr_MUSEU_57.setVisible(false);lyr_GINASIO_58.setVisible(false);lyr_ESTADIO_59.setVisible(false);lyr_CONJUNTO_60.setVisible(false);lyr_CEPEL_61.setVisible(false);lyr_CENTRO_62.setVisible(false);lyr_CASA_63.setVisible(false);lyr_CAMPO_64.setVisible(false);lyr_BIBLIOTECA_65.setVisible(false);lyr_ARENA_66.setVisible(false);lyr_UNIVERSIDADE_ABERTA_DO_BRASIL_67.setVisible(false);lyr_SETOR_DE_MERENDA_68.setVisible(false);lyr_SECRETARIA_DE_EDUCACAO_69.setVisible(false);lyr_ESPACO_DE_DIFUSAO_CIENTIFICA_70.setVisible(false);lyr_ENSINO_FUNDAMENTAL_71.setVisible(false);lyr_EJA_72.setVisible(false);lyr_ED_INFANTIL_ENS_FUNDAMENTAL_73.setVisible(false);lyr_EDUCACAO_INFANTIL_74.setVisible(false);lyr_CRECHE_PRE_ESCOLA_75.setVisible(false);lyr_CRECHE_76.setVisible(false);lyr_CENTRO_DE_EDUCACAO_INTEGRADA_77.setVisible(false);lyr_ALMOCHARIFADO_EDUCACAO_78.setVisible(false);lyr_ALFABETIZACAO_DE_JOVENS_E_ADULTOS_79.setVisible(false);lyr_RODOVIAS_MUNICIPAIS_80.setVisible(false);lyr_RODOVIAS_ESTADUAIS_81.setVisible(false);lyr_ESTRADAS_RURAIS_MUNICIPAIS_82.setVisible(false);lyr_IMOVEL_PUBLICO_83.setVisible(false);lyr_IMOVEL_PRIVADO_URBANO_84.setVisible(false);lyr_IMOVEL_PRIVADO_URBANO_85.setVisible(false);lyr_IMOVEL_PRIVADO_RURAL_86.setVisible(false);lyr_IMOVEL_PRIVADO_RURAL_87.setVisible(false);lyr_PARQUE_DOS_TRABALHADORES_88.setVisible(false);lyr_PARQUE_DOS_TRABALHADORES_89.setVisible(false);lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_90.setVisible(false);lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_91.setVisible(false);lyr_PARQUE_CAXAMBU_92.setVisible(false);lyr_PARQUE_CAXAMBU_93.setVisible(false);lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_94.setVisible(false);lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_95.setVisible(false);lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_96.setVisible(false);lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_97.setVisible(false);lyr_JARDIM_ZOOBOTANICO_98.setVisible(false);lyr_JARDIM_ZOOBOTANICO_99.setVisible(false);lyr_COMPLEXO_POLIESPORTIVO_100.setVisible(false);lyr_COMPLEXO_POLIESPORTIVO_101.setVisible(false);lyr_UBS_SANTA_TEREZINHA_102.setVisible(false);lyr_UBS_SANTA_BARBARA_103.setVisible(false);lyr_UBS_PERES_ELIAS_104.setVisible(false);lyr_UBS_PARQUE_HORTO_105.setVisible(false);lyr_UBS_JARDIM_PALMA_106.setVisible(false);lyr_REVITALIZACAO_ESTACAO_FERROVIARIA_107.setVisible(false);lyr_REFORMA_CRAS_OESTE_108.setVisible(false);lyr_REFORMA_CRAS_NORTE_109.setVisible(false);lyr_REFORCO_ESTRUTURAL_CHAMPAGNAT_110.setVisible(false);lyr_RECAPEAMENTO_JARDIM_MARTINS_111.setVisible(false);lyr_PRONTO_SOCORRO_ALVARO_AZZUZ_112.setVisible(false);lyr_POLICLINICA_113.setVisible(false);lyr_NOVO_NGA_114.setVisible(false);lyr_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_115.setVisible(false);lyr_ESCOLA_JOAO_LIPORONI_116.setVisible(false);lyr_DRENAGEM_CORREGO_CUBATAO_117.setVisible(false);lyr_DRENAGEM_CORREGO_BRAGRES_118.setVisible(false);lyr_DRENAGEM_CANAL_JD_PALMEIRAS_119.setVisible(false);lyr_CRECHE_SAMEL_PARK_120.setVisible(false);lyr_CORPO_BAMBEIROS_121.setVisible(false);lyr_CONTENCAO_VIARIA_122.setVisible(false);lyr_CONSTRUCAO_CAPS_INFANTIL_123.setVisible(false);lyr_AREA_LAZER_PARQUE_ESMERALDA_124.setVisible(false);lyr_AREA_LAZER_PARQUE_CONTINENTAL_125.setVisible(false);lyr_AREA_LAZER_JARDIM_PORTINARI_126.setVisible(false);lyr_OBRAS_PUBLICAS_127.setVisible(false);lyr_REGULARIZADO_128.setVisible(false);lyr_REGULARIZADO_129.setVisible(false);lyr_Vivenna_130.setVisible(false);lyr_Vivenna_131.setVisible(false);lyr_VittaSoVicente_132.setVisible(false);lyr_VittaSoVicente_133.setVisible(false);lyr_VittaJardimSimes_134.setVisible(false);lyr_VittaJardimSimes_135.setVisible(false);lyr_VittaAlvorada_136.setVisible(false);lyr_VittaAlvorada_137.setVisible(false);lyr_VilaDiEspanha_138.setVisible(false);lyr_VilaDiEspanha_139.setVisible(false);lyr_VillaPucci_140.setVisible(false);lyr_VillaPucci_141.setVisible(false);lyr_VilaPiemonteII_142.setVisible(false);lyr_VilaPiemonteII_143.setVisible(false);lyr_VilaOlimpica_144.setVisible(false);lyr_VilaOlimpica_145.setVisible(false);lyr_VillaDoratta_146.setVisible(false);lyr_VillaDoratta_147.setVisible(false);lyr_VillaBella_148.setVisible(false);lyr_VillaBella_149.setVisible(false);lyr_Versalhes_150.setVisible(false);lyr_Versalhes_151.setVisible(false);lyr_TorontoResidence_152.setVisible(false);lyr_TorontoResidence_153.setVisible(false);lyr_TerraNova_154.setVisible(false);lyr_TerraNova_155.setVisible(false);lyr_Sonetto_156.setVisible(false);lyr_Sonetto_157.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL2_158.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL2_159.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL1_160.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL1_161.setVisible(false);lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_162.setVisible(false);lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_163.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_164.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_165.setVisible(false);lyr_SantaLina_166.setVisible(false);lyr_SantaLina_167.setVisible(false);lyr_SantAnita_168.setVisible(false);lyr_SantAnita_169.setVisible(false);lyr_RuaAlfioBenedini_170.setVisible(false);lyr_RuaAlfioBenedini_171.setVisible(false);lyr_RuaAlfioBenedini_172.setVisible(false);lyr_ResidencialValeVerde_173.setVisible(false);lyr_ResidencialValeVerde_174.setVisible(false);lyr_ResidencialYasminTorres_175.setVisible(false);lyr_ResidencialYasminTorres_176.setVisible(false);lyr_ResidencialTellini_177.setVisible(false);lyr_ResidencialTellini_178.setVisible(false);lyr_ResidencialSoCarlosII_179.setVisible(false);lyr_ResidencialSoCarlosII_180.setVisible(false);lyr_ResidencialSoCarlosI_181.setVisible(false);lyr_ResidencialSoCarlosI_182.setVisible(false);lyr_ResidencialSantaIns_183.setVisible(false);lyr_ResidencialSantaIns_184.setVisible(false);lyr_ResidencialSantaF_185.setVisible(false);lyr_ResidencialSantaF_186.setVisible(false);lyr_ResidencialQuintadosOitis_187.setVisible(false);lyr_ResidencialQuintadosOitis_188.setVisible(false);lyr_ResidencialQuintadoSol_189.setVisible(false);lyr_ResidencialQuintadoSol_190.setVisible(false);lyr_ResidencialPousoAlegreII_191.setVisible(false);lyr_ResidencialPousoAlegreII_192.setVisible(false);lyr_ResidencialPousoAlegre_193.setVisible(false);lyr_ResidencialPousoAlegre_194.setVisible(false);lyr_ResidencialPiamalim_195.setVisible(false);lyr_ResidencialPiamalim_196.setVisible(false);lyr_ResidencialParquedosPassaros_197.setVisible(false);lyr_ResidencialParquedosPassaros_198.setVisible(false);lyr_ResicencialNairRetuciII_199.setVisible(false);lyr_ResicencialNairRetuciII_200.setVisible(false);lyr_ResicencialNairRetuci_201.setVisible(false);lyr_ResicencialNairRetuci_202.setVisible(false);lyr_ResidencialMoradadoBosque_203.setVisible(false);lyr_ResidencialMoradadoBosque_204.setVisible(false);lyr_ResidencialMarthaHelena_205.setVisible(false);lyr_ResidencialMarthaHelena_206.setVisible(false);lyr_ResidencialMarioTasso_207.setVisible(false);lyr_ResidencialMarioTasso_208.setVisible(false);lyr_ResidencialMarianaAlarcon_209.setVisible(false);lyr_ResidencialMarianaAlarcon_210.setVisible(false);lyr_ResidencialJardimCanada_211.setVisible(false);lyr_ResidencialJardimCanada_212.setVisible(false);lyr_ResidencialJabuticabeiras_213.setVisible(false);lyr_ResidencialJabuticabeiras_214.setVisible(false);lyr_ResidencialGramadosII_215.setVisible(false);lyr_ResidencialGramadosII_216.setVisible(false);lyr_ResidencialGramados_217.setVisible(false);lyr_ResidencialGramados_218.setVisible(false);lyr_ResidencialGaia_219.setVisible(false);lyr_ResidencialGaia_220.setVisible(false);lyr_ResidencialFrutuoso_221.setVisible(false);lyr_ResidencialFrutuoso_222.setVisible(false);lyr_ResidencialFaggioni_223.setVisible(false);lyr_ResidencialFaggioni_224.setVisible(false);lyr_ResidencialEssenza_225.setVisible(false);lyr_ResidencialEssenza_226.setVisible(false);lyr_ResidencialDomingosJardini_227.setVisible(false);lyr_ResidencialDomingosJardini_228.setVisible(false);lyr_ResidencialCintraAlves_229.setVisible(false);lyr_ResidencialCintraAlves_230.setVisible(false);lyr_ResidencialBoaVista_231.setVisible(false);lyr_ResidencialBoaVista_232.setVisible(false);lyr_ResidencialAltodaFazenda_233.setVisible(false);lyr_ResidencialAltodaFazenda_234.setVisible(false);lyr_ResidencialAnaHelena_235.setVisible(false);lyr_ResidencialAnaHelena_236.setVisible(false);lyr_ReservaAbaete_237.setVisible(false);lyr_ReservaAbaete_238.setVisible(false);lyr_RecantoMeneghetti_239.setVisible(false);lyr_RecantoMeneghetti_240.setVisible(false);lyr_Quadra18VilaExposio_241.setVisible(false);lyr_Quadra18VilaExposio_242.setVisible(false);lyr_ProlongamentoSamelPark_243.setVisible(false);lyr_ProlongamentoSamelPark_244.setVisible(false);lyr_ParqueVillaLobos_245.setVisible(false);lyr_ParqueVillaLobos_246.setVisible(false);lyr_ParquePalmeiraImperial_247.setVisible(false);lyr_ParquePalmeiraImperial_248.setVisible(false);lyr_ParqueJacarand_249.setVisible(false);lyr_ParqueJacarand_250.setVisible(false);lyr_ParqueFlora_251.setVisible(false);lyr_ParqueFlora_252.setVisible(false);lyr_ParquedosSabias_253.setVisible(false);lyr_ParquedosSabias_254.setVisible(false);lyr_ParquedosCoqueiros_255.setVisible(false);lyr_ParquedosCoqueiros_256.setVisible(false);lyr_ParqueAlvorada_257.setVisible(false);lyr_ParqueAlvorada_258.setVisible(false);lyr_ParagonFaseII_259.setVisible(false);lyr_ParagonFaseII_260.setVisible(false);lyr_Paragon_261.setVisible(false);lyr_Paragon_262.setVisible(false);lyr_PalmeiraReal_263.setVisible(false);lyr_PalmeiraReal_264.setVisible(false);lyr_MoradadoVerdeII_265.setVisible(false);lyr_MoradadoVerdeII_266.setVisible(false);lyr_MoradadaMata_267.setVisible(false);lyr_MoradadaMata_268.setVisible(false);lyr_Monti_269.setVisible(false);lyr_Monti_270.setVisible(false);lyr_MontBlancResidence_271.setVisible(false);lyr_MontBlancResidence_272.setVisible(false);lyr_MasterplanDespaschoal_273.setVisible(false);lyr_MasterplanDespaschoal_274.setVisible(false);lyr_MasterplanDespaschoal_275.setVisible(false);lyr_MasteplanBildVitta_276.setVisible(false);lyr_MasteplanBildVitta_277.setVisible(false);lyr_MasteplanBildVitta_278.setVisible(false);lyr_Loteamentolamo_279.setVisible(false);lyr_Loteamentolamo_280.setVisible(false);lyr_JardimStephani_281.setVisible(false);lyr_JardimStephani_282.setVisible(false);lyr_JardimPherola_283.setVisible(false);lyr_JardimPherola_284.setVisible(false);lyr_JardimNatal_285.setVisible(false);lyr_JardimNatal_286.setVisible(false);lyr_JardimMariaLuiza_287.setVisible(false);lyr_JardimMariaLuiza_288.setVisible(false);lyr_JardimMariaAugusta_289.setVisible(false);lyr_JardimMariaAugusta_290.setVisible(false);lyr_JardimHorizonte_291.setVisible(false);lyr_JardimHorizonte_292.setVisible(false);lyr_JardimFlora_293.setVisible(false);lyr_JardimFlora_294.setVisible(false);lyr_IrineuZanetiII_295.setVisible(false);lyr_IrineuZanetiII_296.setVisible(false);lyr_Infratcnica_297.setVisible(false);lyr_Infratcnica_298.setVisible(false);lyr_HorizResidence_299.setVisible(false);lyr_HorizResidence_300.setVisible(false);lyr_GlebaNossaSenhoraAuxiliadora_301.setVisible(false);lyr_GlebaNossaSenhoraAuxiliadora_302.setVisible(false);lyr_Ferracini_303.setVisible(false);lyr_Ferracini_304.setVisible(false);lyr_FrancaB6_305.setVisible(false);lyr_FrancaB6_306.setVisible(false);lyr_FazendaProgresso_307.setVisible(false);lyr_FazendaProgresso_308.setVisible(false);lyr_FazendaeGranjaSantaRita2_309.setVisible(false);lyr_FazendaeGranjaSantaRita2_310.setVisible(false);lyr_FazendaeGranjaSantaRita_311.setVisible(false);lyr_FazendaeGranjaSantaRita_312.setVisible(false);lyr_Essence_313.setVisible(false);lyr_Essence_314.setVisible(false);lyr_Elias_315.setVisible(false);lyr_Elias_316.setVisible(false);lyr_EdifcioSolNascente_317.setVisible(false);lyr_EdifcioSolNascente_318.setVisible(false);lyr_EdifcioRuadoSol_319.setVisible(false);lyr_EdifcioRuadoSol_320.setVisible(false);lyr_EdifcioResidencialHope_321.setVisible(false);lyr_EdifcioResidencialHope_322.setVisible(false);lyr_DiocesedeFranca_323.setVisible(false);lyr_DiocesedeFranca_324.setVisible(false);lyr_DaVinci_325.setVisible(false);lyr_DaVinci_326.setVisible(false);lyr_CondomnioIICityPetrpolis_327.setVisible(false);lyr_CondomnioIICityPetrpolis_328.setVisible(false);lyr_CondomnioICityPetrpolis_329.setVisible(false);lyr_CondomnioICityPetrpolis_330.setVisible(false);lyr_Colorado_331.setVisible(false);lyr_Colorado_332.setVisible(false);lyr_CidadeJardim_333.setVisible(false);lyr_CidadeJardim_334.setVisible(false);lyr_ChacaraOlaria_335.setVisible(false);lyr_ChacaraOlaria_336.setVisible(false);lyr_ChacaraBelaVista_337.setVisible(false);lyr_ChacaraBelaVista_338.setVisible(false);lyr_BordadaMata_339.setVisible(false);lyr_BordadaMata_340.setVisible(false);lyr_Arteris_341.setVisible(false);lyr_Arteris_342.setVisible(false);lyr_ArterisFaixadeDomnioFrancaSP_3342_343.setVisible(false);lyr_ArterisFaixadeDomnioFrancaSP_3452_344.setVisible(false);lyr_ArterisFaixadeDomnioFrancaSPA_397334_345.setVisible(false);lyr_Arizona_346.setVisible(false);lyr_Arizona_347.setVisible(false);lyr_AbuDhabiParadiseResortResidence_348.setVisible(false);lyr_AbuDhabiParadiseResortResidence_349.setVisible(false);lyr_EtapaAprovado43unid_350.setVisible(false);lyr_EtapaDiretriz22unid_351.setVisible(false);lyr_EtapaDefinitiva10unid_352.setVisible(false);lyr_EtapaPrvia24unid_353.setVisible(false);lyr_IRREGULAR_354.setVisible(false);lyr_IRREGULAR_355.setVisible(false);lyr_APP1745unid_356.setVisible(false);lyr_RiosDuplos84unid_357.setVisible(false);lyr_MassasDgua270unid_358.setVisible(false);lyr_RiosSimples1842unid_359.setVisible(false);lyr_CORPO_HIDRICO_CANAL_FECHADO_360.setVisible(false);lyr_CORPO_HIDRICO_CANAL_ABERTO_361.setVisible(false);lyr_Nascentes821unid_362.setVisible(false);lyr_AntigoAterrodaFazMunicipal_363.setVisible(false);lyr_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_364.setVisible(false);lyr_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_365.setVisible(false);lyr_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_366.setVisible(false);lyr_reaBdaFazMunicipal_367.setVisible(false);lyr_reaBdaFazMunicPoosMonitEngesolve7unid_368.setVisible(false);lyr_AntigoAterrodasMaritacas_369.setVisible(false);lyr_AntigoAterroMaritacas1Etapa28unid_370.setVisible(false);lyr_ParqueZumbidosPalmares_371.setVisible(false);lyr_AntigoAterroMaritacas3Etapa5unid_372.setVisible(false);lyr_AntigoAterroMaritacas2Etapa41unid_373.setVisible(false);lyr_PARTE_DA_AREA_G_AVERBADA_374.setVisible(false);lyr_PARTE_DA_AREA_G_A_SER_AVERBADA_375.setVisible(false);lyr_CONJUNTO_HABITACIONAL_376.setVisible(false);lyr_AV_ACESSO_COLEGIO_AGRICOLA_377.setVisible(false);lyr_AREA_N2_378.setVisible(false);lyr_AREA_N1_379.setVisible(false);lyr_AREA_N_380.setVisible(false);lyr_AREA_K_381.setVisible(false);lyr_AREA_J_382.setVisible(false);lyr_AREA_I_383.setVisible(false);lyr_AREA_H_384.setVisible(false);lyr_AREA_G_385.setVisible(false);lyr_AREA_F_386.setVisible(false);lyr_AREA_E_387.setVisible(false);lyr_AREA_D_388.setVisible(false);lyr_AREA_C_389.setVisible(false);lyr_AREA_B_390.setVisible(false);lyr_AREA_A_391.setVisible(false);lyr_PROPOSTO_392.setVisible(false);lyr_EM_FUNCIONAMENTO_393.setVisible(false);lyr_EM_CONSTRUCAO_394.setVisible(false);lyr_DrenagensExistentes_395.setVisible(false);lyr_Drenagens_396.setVisible(false);lyr_DRENAGEM_VILLAGIO_DI_FIRENZE_397.setVisible(false);lyr_DRENAGEM_VILLA_SANTA_GIANNA_398.setVisible(false);lyr_DRENAGEM_VILA_TOTOLI_399.setVisible(false);lyr_DRENAGEM_VILA_REAL_400.setVisible(false);lyr_DRENAGEM_VILA_DORATTA_401.setVisible(false);lyr_DRENAGEM_SAO_PEDRO_II_402.setVisible(false);lyr_DRENAGEM_SANTA_FE_403.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_TELLINI_404.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_SANTA_INES_407.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_PALERMO_411.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_ITAPUA_412.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_GAIA_413.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_FERRACINI_414.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_FAGGIONI_415.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_ECOSTILO_416.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_DOURADO_417.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_BALDASSARI_418.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_419.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420.setVisible(false);lyr_DRENAGEM_RECREIO_CAMPO_BELO_421.setVisible(false);lyr_DRENAGEM_RECANTO_MENEGHETTI_422.setVisible(false);lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_423.setVisible(false);lyr_DRENAGEM_PROL_VILA_ISABEL_424.setVisible(false);lyr_DRENAGEM_PROL_JARDIM_MARTINS_425.setVisible(false);lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426.setVisible(false);lyr_DRENAGEM_PARQUE_UNIVERSITARIO_427.setVisible(false);lyr_DRENAGEM_PARQUE_SANTA_ADELIA_428.setVisible(false);lyr_DRENAGEM_PARQUE_MOEMA_429.setVisible(false);lyr_DRENAGEM_PARQUE_JOAO_LEITE_430.setVisible(false);lyr_DRENAGEM_PARQUE_DOS_SABIAS_431.setVisible(false);lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_432.setVisible(false);lyr_DRENAGEM_PARQUE_DAS_ARVORES_433.setVisible(false);lyr_DRENAGEM_PARQUE_CASTELO_434.setVisible(false);lyr_DRENAGEM_PARQUE_BOA_VISTA_435.setVisible(false);lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_436.setVisible(false);lyr_DRENAGEM_PARAGON_437.setVisible(false);lyr_DRENAGEM_NAIR_RETUSSI_I_438.setVisible(false);lyr_DRENAGEM_JARDIM_SAO_GABRIEL_439.setVisible(false);lyr_DRENAGEM_JARDIM_SANTA_LUCIA_440.setVisible(false);lyr_DRENAGEM_JARDIM_PULICANO_441.setVisible(false);lyr_DRENAGEM_JARDIM_PORTINARI_442.setVisible(false);lyr_DRENAGEM_JARDIM_PIRATININGA_443.setVisible(false);lyr_DRENAGEM_JARDIM_PALMA_444.setVisible(false);lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_445.setVisible(false);lyr_DRENAGEM_JARDIM_NOEMIA_446.setVisible(false);lyr_DRENAGEM_JARDIM_NATAL_447.setVisible(false);lyr_DRENAGEM_JARDIM_MARTINS_448.setVisible(false);lyr_DRENAGEM_JARDIM_MARIA_LUIZA_449.setVisible(false);lyr_DRENAGEM_JARDIM_LIBANO_450.setVisible(false);lyr_DRENAGEM_JARDIM_IPANEMA_451.setVisible(false);lyr_DRENAGEM_JARDIM_BUENO_452.setVisible(false);lyr_DRENAGEM_JARDIM_BOTANICO_453.setVisible(false);lyr_DRENAGEM_JARDIM_BARAO_454.setVisible(false);lyr_DRENAGEM_JARDIM_AVIACAO_455.setVisible(false);lyr_DRENAGEM_JARDIM_ARIZONA_II_456.setVisible(false);lyr_DRENAGEM_JARDIM_ARIZONA_I_457.setVisible(false);lyr_DRENAGEM_JARDIM_AEROPORTO_II_458.setVisible(false);lyr_DRENAGEM_GRAMADOS_I_459.setVisible(false);lyr_DRENAGEM_FRANCA_POLO_CLUBE_460.setVisible(false);lyr_DRENAGEM_DOMINGOS_JARDINI_461.setVisible(false);lyr_DRENAGEM_DINFRA_II_462.setVisible(false);lyr_DRENAGEM_ATLANTA_PARK_463.setVisible(false);lyr_DRENAGEM_ANA_DOROTHEA_464.setVisible(false);lyr_REGIAO_SUL_465.setVisible(false);lyr_REGIAO_OESTE_466.setVisible(false);lyr_REGIAO_NORTE_467.setVisible(false);lyr_REGIAO_LESTE_468.setVisible(false);lyr_BAIRROS_469.setVisible(false);lyr_Voorocas27unid_470.setVisible(false);lyr_LocaisDifcilAcessoreasRurais12unid_471.setVisible(false);lyr_Contineres286unid_472.setVisible(false);lyr_rvoreImuneaoCorte9unid_473.setVisible(false);lyr_AcademiasaoArLivre84unid_474.setVisible(false);lyr_SERVICO_DE_SAUDE_475.setVisible(false);lyr_RECICLAVEIS_476.setVisible(false);lyr_PNEUS_477.setVisible(false);lyr_PILHAS_E_BATERIAS_478.setVisible(false);lyr_PERIGOSOS_479.setVisible(false);lyr_OLEO_LUBRIFICANTE_480.setVisible(false);lyr_OLEO_DE_COZINHA_481.setVisible(false);lyr_MASSA_VERDE_482.setVisible(false);lyr_MADEIRAS_483.setVisible(false);lyr_LATAS_DE_TINTA_484.setVisible(false);lyr_LAMPADAS_485.setVisible(false);lyr_INSERVIVEIS_486.setVisible(false);lyr_GESSO_487.setVisible(false);lyr_EMBALAGENS_AGROTOXICO_488.setVisible(false);lyr_ELETRONICOS_489.setVisible(false);lyr_COURO_490.setVisible(false);lyr_CONSTRUCAO_CIVIL_491.setVisible(false);lyr_CHAPAS_DE_RAIO_X_492.setVisible(false);lyr_PROTECAO_AERODROMO_493.setVisible(false);lyr_HELIPONTO_HOSPITAL_REGIONAL_494.setVisible(false);lyr_HELIPONTO_EDIFICIO_PRIME_495.setVisible(false);lyr_HELIPONTO_EDIFICIO_PRIME_496.setVisible(false);lyr_CLASSE_VB_497.setVisible(false);lyr_CLASSE_VA_498.setVisible(false);lyr_CLASSE_IVC_499.setVisible(false);lyr_CLASSE_IVB_500.setVisible(false);lyr_CLASSE_IVA_501.setVisible(false);lyr_CLASSE_IIIC_502.setVisible(false);lyr_CLASSE_IIIB_503.setVisible(false);lyr_CLASSE_IIIA_504.setVisible(false);lyr_CLASSE_II_505.setVisible(false);lyr_CLASSE_I_506.setVisible(false);lyr_LoteamentoFechado146unid70632440m_507.setVisible(false);lyr_LoteEdificao20unid_508.setVisible(false);lyr_LoteEdificao20unid508062m_509.setVisible(false);lyr_LoteEMDEF10unid_510.setVisible(false);lyr_LoteEMDEF10unid218783m_511.setVisible(false);lyr_Lote252unid_512.setVisible(false);lyr_Lote252unid7530210m_513.setVisible(false);lyr_LeiloLEI97542025Proc7954202537196unid_514.setVisible(false);lyr_LeiloLEI97542025Proc7954202537196unid3240462m_515.setVisible(false);lyr_LeiloLEI97542025Proc2652520256922unid_516.setVisible(false);lyr_LeiloLEI97542025Proc2652520256922unid352000m_517.setVisible(false);lyr_LeiloLEI97542025Proc2198620254518unid_518.setVisible(false);lyr_LeiloLEI97542025Proc2198620254518unid2092083m_519.setVisible(false);lyr_LeiloLEI97542025Homologado4unid_520.setVisible(false);lyr_LeiloLEI97542025Homologado4unid334770m_521.setVisible(false);lyr_reaVerde2117unid881307234m_522.setVisible(false);lyr_reaPatrimonial69unid121924073m_523.setVisible(false);lyr_reaInstitucional371unid208395759m_524.setVisible(false);lyr_readeUsoEspecial280unid271349968m_525.setVisible(false);lyr_APP169unid239527816m_526.setVisible(false);lyr_TRPRL_CETESB_527.setVisible(false);lyr_TRPRL_CETESB_528.setVisible(false);lyr_TCRA_MUNICIPAL_529.setVisible(false);lyr_TCRA_MUNICIPAL_530.setVisible(false);lyr_TCRA_CETESB_PARCELAMENTO_531.setVisible(false);lyr_TCRA_CETESB_PARCELAMENTO_532.setVisible(false);lyr_TCRA_CETESB_533.setVisible(false);lyr_TCRA_CETESB_534.setVisible(false);lyr_TAC_MP_535.setVisible(false);lyr_TAC_MP_536.setVisible(false);lyr_PLANTIO_VOLUNTARIO_537.setVisible(false);lyr_PLANTIO_VOLUNTARIO_538.setVisible(false);lyr_ANUENCIA_539.setVisible(false);lyr_ANUENCIA_540.setVisible(false);lyr_AIIPA_CETESB_541.setVisible(false);lyr_AIIPA_CETESB_542.setVisible(false);lyr_ACAO_CIVIL_PUBLICA_543.setVisible(false);lyr_ACAO_CIVIL_PUBLICA_544.setVisible(false);lyr_AdoteUmaPraa392unid38295094m_545.setVisible(false);lyr_SPlacaEgnaldo4unid86447m_546.setVisible(false);lyr_SPlacaDilu15unid751060m_547.setVisible(false);lyr_CPlacaEgnaldo221unid22321870m_548.setVisible(false);lyr_CPlacaDilu152unid15990431m_549.setVisible(false);
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
lyr_VIGILANCIA_EM_SAUDE_43.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAUDE': 'EQUIPAMENTO_DE_SAUDE', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', });
lyr_UNIDADE_DE_URGENCIA_E_EMERGENCIA_44.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAUDE': 'EQUIPAMENTO_DE_SAUDE', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', });
lyr_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO_45.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAUDE': 'EQUIPAMENTO_DE_SAUDE', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', });
lyr_GESTAO_ADMINISTRATIVO_46.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAUDE': 'EQUIPAMENTO_DE_SAUDE', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', });
lyr_ATENCAO_PRIMARIA_47.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAUDE': 'EQUIPAMENTO_DE_SAUDE', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', });
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
lyr_ARENA_66.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'Próprio Público Municipa', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
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
lyr_CONSTRUCAO_CAPS_INFANTIL_123.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_AREA_LAZER_PARQUE_ESMERALDA_124.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_AREA_LAZER_PARQUE_CONTINENTAL_125.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_AREA_LAZER_JARDIM_PORTINARI_126.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_OBRAS_PUBLICAS_127.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGEM_DE_EXECUCAO': 'PORCENTAGEM_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_REGULARIZADO_128.set('fieldAliases', {'fid': 'fid', 'PROCESSO': 'PROCESSO', 'MODALIDADE': 'MODALIDADE', 'NOME_LOTEAMENTO': 'Nome do Loteamento', 'OBSERVACAO': 'Observação', 'MATRICULA': 'Matrícula', 'QUANT_LOTES': 'Nº de Lotes', 'AREA_M2': 'AREA_M2', 'DECRETO_REURB': 'Decreto REURB', 'SITUACAO': 'Situação', });
lyr_REGULARIZADO_129.set('fieldAliases', {'fid': 'fid', 'PROCESSO': 'PROCESSO', 'MODALIDADE': 'MODALIDADE', 'NOME_LOTEAMENTO': 'Nome do Loteamento', 'OBSERVACAO': 'Observação', 'MATRICULA': 'Matrícula', 'QUANT_LOTES': 'Nº de Lotes', 'AREA_M2': 'AREA_M2', 'DECRETO_REURB': 'Decreto REURB', 'SITUACAO': 'Situação', });
lyr_Vivenna_130.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Vivenna_131.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaSoVicente_132.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaSoVicente_133.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaJardimSimes_134.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaJardimSimes_135.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaAlvorada_136.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaAlvorada_137.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaDiEspanha_138.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaDiEspanha_139.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaPucci_140.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaPucci_141.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaPiemonteII_142.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaPiemonteII_143.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaOlimpica_144.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaOlimpica_145.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaDoratta_146.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaDoratta_147.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaBella_148.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaBella_149.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Versalhes_150.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Versalhes_151.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TorontoResidence_152.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TorontoResidence_153.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TerraNova_154.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TerraNova_155.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Sonetto_156.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Sonetto_157.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_158.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_159.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_160.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_161.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_162.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_163.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ServidoRamal138kVFranca4Guanabara_164.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_ServidoRamal138kVFranca4Guanabara_165.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_SantaLina_166.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantaLina_167.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantAnita_168.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantAnita_169.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RuaAlfioBenedini_170.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RuaAlfioBenedini_171.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RuaAlfioBenedini_172.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', });
lyr_ResidencialValeVerde_173.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialValeVerde_174.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialYasminTorres_175.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialYasminTorres_176.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialTellini_177.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialTellini_178.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosII_179.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosII_180.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosI_181.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosI_182.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaIns_183.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaIns_184.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaF_185.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaF_186.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadosOitis_187.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadosOitis_188.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadoSol_189.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadoSol_190.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegreII_191.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegreII_192.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegre_193.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegre_194.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPiamalim_195.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPiamalim_196.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialParquedosPassaros_197.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialParquedosPassaros_198.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuciII_199.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuciII_200.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuci_201.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuci_202.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMoradadoBosque_203.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMoradadoBosque_204.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarthaHelena_205.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarthaHelena_206.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarioTasso_207.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarioTasso_208.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarianaAlarcon_209.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarianaAlarcon_210.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJardimCanada_211.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJardimCanada_212.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJabuticabeiras_213.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJabuticabeiras_214.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGramadosII_215.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGramadosII_216.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGramados_217.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGramados_218.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGaia_219.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGaia_220.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialFrutuoso_221.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialFrutuoso_222.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialFaggioni_223.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialFaggioni_224.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialEssenza_225.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialEssenza_226.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialDomingosJardini_227.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialDomingosJardini_228.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialCintraAlves_229.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialCintraAlves_230.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialBoaVista_231.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialBoaVista_232.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAltodaFazenda_233.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAltodaFazenda_234.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAnaHelena_235.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAnaHelena_236.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ReservaAbaete_237.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ReservaAbaete_238.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RecantoMeneghetti_239.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RecantoMeneghetti_240.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Quadra18VilaExposio_241.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Quadra18VilaExposio_242.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ProlongamentoSamelPark_243.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ProlongamentoSamelPark_244.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueVillaLobos_245.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueVillaLobos_246.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquePalmeiraImperial_247.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquePalmeiraImperial_248.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueJacarand_249.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueJacarand_250.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueFlora_251.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueFlora_252.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosSabias_253.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosSabias_254.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosCoqueiros_255.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosCoqueiros_256.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueAlvorada_257.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueAlvorada_258.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParagonFaseII_259.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParagonFaseII_260.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Paragon_261.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Paragon_262.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_PalmeiraReal_263.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_PalmeiraReal_264.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadoVerdeII_265.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadoVerdeII_266.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadaMata_267.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadaMata_268.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Monti_269.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Monti_270.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MontBlancResidence_271.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MontBlancResidence_272.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasterplanDespaschoal_273.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasterplanDespaschoal_274.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasterplanDespaschoal_275.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', });
lyr_MasteplanBildVitta_276.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasteplanBildVitta_277.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasteplanBildVitta_278.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', });
lyr_Loteamentolamo_279.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Loteamentolamo_280.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimStephani_281.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimStephani_282.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimPherola_283.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimPherola_284.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimNatal_285.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimNatal_286.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaLuiza_287.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaLuiza_288.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaAugusta_289.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaAugusta_290.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimHorizonte_291.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimHorizonte_292.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimFlora_293.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimFlora_294.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_IrineuZanetiII_295.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_IrineuZanetiII_296.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Infratcnica_297.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Infratcnica_298.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_HorizResidence_299.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_HorizResidence_300.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_GlebaNossaSenhoraAuxiliadora_301.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_GlebaNossaSenhoraAuxiliadora_302.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Ferracini_303.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Ferracini_304.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FrancaB6_305.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FrancaB6_306.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaProgresso_307.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaProgresso_308.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita2_309.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita2_310.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita_311.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita_312.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Essence_313.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Essence_314.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Elias_315.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Elias_316.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioSolNascente_317.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioSolNascente_318.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioRuadoSol_319.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioRuadoSol_320.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioResidencialHope_321.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioResidencialHope_322.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DiocesedeFranca_323.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DiocesedeFranca_324.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DaVinci_325.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DaVinci_326.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioIICityPetrpolis_327.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioIICityPetrpolis_328.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_329.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_330.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Colorado_331.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Colorado_332.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CidadeJardim_333.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CidadeJardim_334.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraOlaria_335.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraOlaria_336.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraBelaVista_337.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraBelaVista_338.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_BordadaMata_339.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_BordadaMata_340.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arteris_341.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arteris_342.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ArterisFaixadeDomnioFrancaSP_3342_343.set('fieldAliases', {'fid': 'fid', 'description': 'description', });
lyr_ArterisFaixadeDomnioFrancaSP_3452_344.set('fieldAliases', {'fid': 'fid', 'description': 'description', });
lyr_ArterisFaixadeDomnioFrancaSPA_397334_345.set('fieldAliases', {'fid': 'fid', 'description': 'description', });
lyr_Arizona_346.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arizona_347.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AbuDhabiParadiseResortResidence_348.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AbuDhabiParadiseResortResidence_349.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EtapaAprovado43unid_350.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaDiretriz22unid_351.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaDefinitiva10unid_352.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaPrvia24unid_353.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_IRREGULAR_354.set('fieldAliases', {'fid': 'fid', 'PROCESSO': 'PROCESSO', 'MODALIDADE': 'MODALIDADE', 'NOME_LOTEAMENTO': 'Nome do Loteamento', 'OBSERVACAO': 'OBSERVACAO', 'MATRICULA': 'Matrícula', 'QUANT_LOTES': 'QUANT_LOTES', 'AREA_M2': 'AREA_M2', 'DECRETO_REURB': 'DECRETO_REURB', 'SITUACAO': 'SITUACAO', });
lyr_IRREGULAR_355.set('fieldAliases', {'fid': 'fid', 'PROCESSO': 'PROCESSO', 'MODALIDADE': 'MODALIDADE', 'NOME_LOTEAMENTO': 'Nome do Loteamento', 'OBSERVACAO': 'OBSERVACAO', 'MATRICULA': 'Matrícula', 'QUANT_LOTES': 'QUANT_LOTES', 'AREA_M2': 'AREA_M2', 'DECRETO_REURB': 'DECRETO_REURB', 'SITUACAO': 'SITUACAO', });
lyr_APP1745unid_356.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosDuplos84unid_357.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_MassasDgua270unid_358.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosSimples1842unid_359.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_CORPO_HIDRICO_CANAL_FECHADO_360.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_CORPO_HIDRICO_CANAL_ABERTO_361.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_Nascentes821unid_362.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_AntigoAterrodaFazMunicipal_363.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_364.set('fieldAliases', {'fid': 'fid', 'poco': 'Poço', 'coordenada_y': 'Coordenada N (m)', 'coordenada_x': 'Coordenada E (m)', 'cota': 'Cota (m)', 'tipo': 'Tipo do poço', 'situacao': 'Situação', 'empresa': 'Empresa', 'ano': 'Ano', });
lyr_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_365.set('fieldAliases', {'fid': 'fid', 'poco': 'Poço', 'coordenada_y': 'Coordenada N (m)', 'coordenada_x': 'Coordenada E (m)', 'cota': 'Cota (m)', 'tipo': 'Tipo do poço', 'situacao': 'Situação', 'empresa': 'Empresa', 'ano': 'Ano', });
lyr_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_366.set('fieldAliases', {'fid': 'fid', 'poco': 'Poço', 'coordenada_y': 'Coordenada N (m)', 'coordenada_x': 'Coordenada E (m)', 'cota': 'Cota (m)', 'tipo': 'Tipo do poço', 'situacao': 'Situação', 'empresa': 'Empresa', 'ano': 'Ano', });
lyr_reaBdaFazMunicipal_367.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_reaBdaFazMunicPoosMonitEngesolve7unid_368.set('fieldAliases', {'fid': 'fid', 'Norte': 'Norte', 'Leste': 'Leste', 'Cota': 'Cota', 'Identifica': 'Identifica', 'Profundida': 'Profundida', 'Identifi_1': 'Poço', 'Profundi_1': 'Profundi_1', 'NA Dinâmi': 'NA Dinâmi', 'NA Estatic': 'NA Estatic', 'NÍVEL DE': 'NÍVEL DE', 'TEMPERATUR': 'TEMPERATUR', 'pH': 'pH', 'CONDUTIVID': 'CONDUTIVID', 'Eh/ORP': 'Eh/ORP', 'OXIGÊNIO': 'OXIGÊNIO', 'TURBIDEZ': 'TURBIDEZ', });
lyr_AntigoAterrodasMaritacas_369.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterroMaritacas1Etapa28unid_370.set('fieldAliases', {'fid': 'fid', 'Poço': 'Poço', 'Norte (m)': 'Norte (m)', 'Este (m)': 'Este (m)', 'Cota': 'Cota', });
lyr_ParqueZumbidosPalmares_371.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterroMaritacas3Etapa5unid_372.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterroMaritacas2Etapa41unid_373.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_PARTE_DA_AREA_G_AVERBADA_374.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_PARTE_DA_AREA_G_A_SER_AVERBADA_375.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_CONJUNTO_HABITACIONAL_376.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AV_ACESSO_COLEGIO_AGRICOLA_377.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_N2_378.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_N1_379.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_N_380.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_K_381.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_J_382.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_I_383.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_H_384.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_G_385.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_F_386.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_E_387.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_D_388.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_C_389.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_B_390.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_A_391.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_PROPOSTO_392.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'BAIRRO': 'BAIRRO', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', 'STATUS': 'STATUS', });
lyr_EM_FUNCIONAMENTO_393.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'BAIRRO': 'BAIRRO', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', 'STATUS': 'STATUS', });
lyr_EM_CONSTRUCAO_394.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'BAIRRO': 'BAIRRO', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', 'STATUS': 'STATUS', });
lyr_DrenagensExistentes_395.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Drenagens_396.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DRENAGEM_VILLAGIO_DI_FIRENZE_397.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_VILLA_SANTA_GIANNA_398.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_VILA_TOTOLI_399.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_VILA_REAL_400.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_VILA_DORATTA_401.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_SAO_PEDRO_II_402.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_SANTA_FE_403.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_TELLINI_404.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_SANTA_INES_407.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_PALERMO_411.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_ITAPUA_412.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_GAIA_413.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_FERRACINI_414.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_FAGGIONI_415.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_ECOSTILO_416.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_DOURADO_417.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_BALDASSARI_418.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_419.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RECREIO_CAMPO_BELO_421.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RECANTO_MENEGHETTI_422.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_423.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PROL_VILA_ISABEL_424.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PROL_JARDIM_MARTINS_425.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_UNIVERSITARIO_427.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_SANTA_ADELIA_428.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_MOEMA_429.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_JOAO_LEITE_430.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_DOS_SABIAS_431.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_432.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_DAS_ARVORES_433.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_CASTELO_434.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_BOA_VISTA_435.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_436.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARAGON_437.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_NAIR_RETUSSI_I_438.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_SAO_GABRIEL_439.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_SANTA_LUCIA_440.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_PULICANO_441.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_PORTINARI_442.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_PIRATININGA_443.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_PALMA_444.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_445.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_NOEMIA_446.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_NATAL_447.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_MARTINS_448.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_MARIA_LUIZA_449.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_LIBANO_450.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_IPANEMA_451.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_BUENO_452.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_BOTANICO_453.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_BARAO_454.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_AVIACAO_455.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_ARIZONA_II_456.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_ARIZONA_I_457.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_AEROPORTO_II_458.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_GRAMADOS_I_459.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_FRANCA_POLO_CLUBE_460.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_DOMINGOS_JARDINI_461.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_DINFRA_II_462.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_ATLANTA_PARK_463.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_ANA_DOROTHEA_464.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_REGIAO_SUL_465.set('fieldAliases', {'fid': 'fid', 'AREA_M2': 'AREA_M2', 'REGIAO': 'REGIAO', });
lyr_REGIAO_OESTE_466.set('fieldAliases', {'fid': 'fid', 'AREA_M2': 'AREA_M2', 'REGIAO': 'REGIAO', });
lyr_REGIAO_NORTE_467.set('fieldAliases', {'fid': 'fid', 'AREA_M2': 'AREA_M2', 'REGIAO': 'REGIAO', });
lyr_REGIAO_LESTE_468.set('fieldAliases', {'fid': 'fid', 'AREA_M2': 'AREA_M2', 'REGIAO': 'REGIAO', });
lyr_BAIRROS_469.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'AREA_M2': 'Área (m²)', 'REGIAO': 'Região', 'REGIAO_ARRASTAO_LIMPEZA': 'REGIAO_ARRASTAO_LIMPEZA', });
lyr_Voorocas27unid_470.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'ID_PONTO_I': 'ID_PONTO_I', 'IBGE': 'IBGE', 'MUNIC__PIO': 'MUNIC__PIO', 'BACIA': 'BACIA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'SITUA____O': 'Situação', 'REFER__NCI': 'Referência', 'PRIORIDADE': 'Prioridade', 'OBSERVA_____': 'Observação', });
lyr_LocaisDifcilAcessoreasRurais12unid_471.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'PER__ODO_TURNO_': 'Período', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'Horário', 'FREQU__NCIA': 'Frequência', 'PROGRAMA____O_SEMANAL': 'Programação Semanal', 'EQUIPAMENTOS': 'Equipamentos', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', });
lyr_Contineres286unid_472.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Nome', 'bairro': 'bairro', });
lyr_rvoreImuneaoCorte9unid_473.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_AcademiasaoArLivre84unid_474.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Local', 'bairro': 'bairro', });
lyr_SERVICO_DE_SAUDE_475.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_RECICLAVEIS_476.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_PNEUS_477.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_PILHAS_E_BATERIAS_478.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_PERIGOSOS_479.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_OLEO_LUBRIFICANTE_480.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_OLEO_DE_COZINHA_481.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_MASSA_VERDE_482.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_MADEIRAS_483.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_LATAS_DE_TINTA_484.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_LAMPADAS_485.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_INSERVIVEIS_486.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_GESSO_487.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_EMBALAGENS_AGROTOXICO_488.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_ELETRONICOS_489.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_COURO_490.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_CONSTRUCAO_CIVIL_491.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_CHAPAS_DE_RAIO_X_492.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_PROTECAO_AERODROMO_493.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', });
lyr_HELIPONTO_HOSPITAL_REGIONAL_494.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', });
lyr_HELIPONTO_EDIFICIO_PRIME_495.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', });
lyr_HELIPONTO_EDIFICIO_PRIME_496.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', });
lyr_CLASSE_VB_497.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_VA_498.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IVC_499.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IVB_500.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IVA_501.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IIIC_502.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IIIB_503.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IIIA_504.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_II_505.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_I_506.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_LoteamentoFechado146unid70632440m_507.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LoteEdificao20unid_508.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'regiao': 'regiao', 'processo': 'processo', });
lyr_LoteEdificao20unid508062m_509.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LoteEMDEF10unid_510.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', });
lyr_LoteEMDEF10unid218783m_511.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_Lote252unid_512.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_Lote252unid7530210m_513.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LeiloLEI97542025Proc7954202537196unid_514.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEI97542025Proc7954202537196unid3240462m_515.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Status', 'processo': 'Processo', });
lyr_LeiloLEI97542025Proc2652520256922unid_516.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEI97542025Proc2652520256922unid352000m_517.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Status', 'processo': 'Processo', });
lyr_LeiloLEI97542025Proc2198620254518unid_518.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'Status', 'processo': 'Processo', });
lyr_LeiloLEI97542025Proc2198620254518unid2092083m_519.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Status', 'processo': 'Processo', });
lyr_LeiloLEI97542025Homologado4unid_520.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEI97542025Homologado4unid334770m_521.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'Processo', });
lyr_reaVerde2117unid881307234m_522.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'Processo', });
lyr_reaPatrimonial69unid121924073m_523.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_reaInstitucional371unid208395759m_524.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_readeUsoEspecial280unid271349968m_525.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_APP169unid239527816m_526.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_TRPRL_CETESB_527.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TRPRL_CETESB_528.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TCRA_MUNICIPAL_529.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TCRA_MUNICIPAL_530.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TCRA_CETESB_PARCELAMENTO_531.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TCRA_CETESB_PARCELAMENTO_532.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TCRA_CETESB_533.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TCRA_CETESB_534.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TAC_MP_535.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TAC_MP_536.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_PLANTIO_VOLUNTARIO_537.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_PLANTIO_VOLUNTARIO_538.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_ANUENCIA_539.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_ANUENCIA_540.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_AIIPA_CETESB_541.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_AIIPA_CETESB_542.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_ACAO_CIVIL_PUBLICA_543.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_ACAO_CIVIL_PUBLICA_544.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_AdoteUmaPraa392unid38295094m_545.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'responsavel': 'Responsável', 'm2': 'Área (m²)', });
lyr_SPlacaEgnaldo4unid86447m_546.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_SPlacaDilu15unid751060m_547.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_CPlacaEgnaldo221unid22321870m_548.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_CPlacaDilu152unid15990431m_549.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
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
lyr_VIGILANCIA_EM_SAUDE_43.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAUDE': '', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_UNIDADE_DE_URGENCIA_E_EMERGENCIA_44.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAUDE': '', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO_45.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAUDE': '', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_GESTAO_ADMINISTRATIVO_46.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAUDE': '', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_ATENCAO_PRIMARIA_47.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAUDE': '', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
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
lyr_CONSTRUCAO_CAPS_INFANTIL_123.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_AREA_LAZER_PARQUE_ESMERALDA_124.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_AREA_LAZER_PARQUE_CONTINENTAL_125.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_AREA_LAZER_JARDIM_PORTINARI_126.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_OBRAS_PUBLICAS_127.set('fieldImages', {'fid': 'TextEdit', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGEM_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_REGULARIZADO_128.set('fieldImages', {'fid': 'TextEdit', 'PROCESSO': '', 'MODALIDADE': '', 'NOME_LOTEAMENTO': '', 'OBSERVACAO': '', 'MATRICULA': '', 'QUANT_LOTES': '', 'AREA_M2': '', 'DECRETO_REURB': '', 'SITUACAO': '', });
lyr_REGULARIZADO_129.set('fieldImages', {'fid': 'TextEdit', 'PROCESSO': '', 'MODALIDADE': '', 'NOME_LOTEAMENTO': '', 'OBSERVACAO': '', 'MATRICULA': '', 'QUANT_LOTES': '', 'AREA_M2': '', 'DECRETO_REURB': '', 'SITUACAO': '', });
lyr_Vivenna_130.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Vivenna_131.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaSoVicente_132.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaSoVicente_133.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaJardimSimes_134.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaJardimSimes_135.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaAlvorada_136.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaAlvorada_137.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaDiEspanha_138.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaDiEspanha_139.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaPucci_140.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaPucci_141.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaPiemonteII_142.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaPiemonteII_143.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaOlimpica_144.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaOlimpica_145.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaDoratta_146.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaDoratta_147.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaBella_148.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaBella_149.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Versalhes_150.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Versalhes_151.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TorontoResidence_152.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TorontoResidence_153.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TerraNova_154.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TerraNova_155.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Sonetto_156.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Sonetto_157.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_158.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_159.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_160.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_161.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_162.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_163.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ServidoRamal138kVFranca4Guanabara_164.set('fieldImages', {'fid': '', 'id': '', });
lyr_ServidoRamal138kVFranca4Guanabara_165.set('fieldImages', {'fid': '', 'id': '', });
lyr_SantaLina_166.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantaLina_167.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantAnita_168.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantAnita_169.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_RuaAlfioBenedini_170.set('fieldImages', {'fid': '', 'layer': '', });
lyr_RuaAlfioBenedini_171.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_RuaAlfioBenedini_172.set('fieldImages', {'fid': 'TextEdit', 'nome': '', });
lyr_ResidencialValeVerde_173.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialValeVerde_174.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialYasminTorres_175.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialYasminTorres_176.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialTellini_177.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialTellini_178.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosII_179.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosII_180.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosI_181.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosI_182.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaIns_183.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaIns_184.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaF_185.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaF_186.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadosOitis_187.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadosOitis_188.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadoSol_189.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadoSol_190.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegreII_191.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegreII_192.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegre_193.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegre_194.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPiamalim_195.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPiamalim_196.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialParquedosPassaros_197.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialParquedosPassaros_198.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuciII_199.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuciII_200.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuci_201.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuci_202.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMoradadoBosque_203.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMoradadoBosque_204.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarthaHelena_205.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarthaHelena_206.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarioTasso_207.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarioTasso_208.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarianaAlarcon_209.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarianaAlarcon_210.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJardimCanada_211.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJardimCanada_212.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJabuticabeiras_213.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJabuticabeiras_214.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGramadosII_215.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGramadosII_216.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGramados_217.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGramados_218.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGaia_219.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGaia_220.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialFrutuoso_221.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialFrutuoso_222.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialFaggioni_223.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialFaggioni_224.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialEssenza_225.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialEssenza_226.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialDomingosJardini_227.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialDomingosJardini_228.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialCintraAlves_229.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialCintraAlves_230.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialBoaVista_231.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialBoaVista_232.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAltodaFazenda_233.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAltodaFazenda_234.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAnaHelena_235.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAnaHelena_236.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ReservaAbaete_237.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ReservaAbaete_238.set('fieldImages', {'fid': '', 'layer': '', });
lyr_RecantoMeneghetti_239.set('fieldImages', {'fid': '', 'layer': '', });
lyr_RecantoMeneghetti_240.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Quadra18VilaExposio_241.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Quadra18VilaExposio_242.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ProlongamentoSamelPark_243.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ProlongamentoSamelPark_244.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueVillaLobos_245.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueVillaLobos_246.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquePalmeiraImperial_247.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquePalmeiraImperial_248.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueJacarand_249.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueJacarand_250.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueFlora_251.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueFlora_252.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosSabias_253.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosSabias_254.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosCoqueiros_255.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosCoqueiros_256.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueAlvorada_257.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueAlvorada_258.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParagonFaseII_259.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParagonFaseII_260.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Paragon_261.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Paragon_262.set('fieldImages', {'fid': '', 'layer': '', });
lyr_PalmeiraReal_263.set('fieldImages', {'fid': '', 'layer': '', });
lyr_PalmeiraReal_264.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadoVerdeII_265.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadoVerdeII_266.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadaMata_267.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadaMata_268.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Monti_269.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Monti_270.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MontBlancResidence_271.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MontBlancResidence_272.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MasterplanDespaschoal_273.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_MasterplanDespaschoal_274.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MasterplanDespaschoal_275.set('fieldImages', {'fid': '', 'Nome': '', });
lyr_MasteplanBildVitta_276.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_MasteplanBildVitta_277.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MasteplanBildVitta_278.set('fieldImages', {'fid': '', 'Nome': '', });
lyr_Loteamentolamo_279.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Loteamentolamo_280.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimStephani_281.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimStephani_282.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimPherola_283.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimPherola_284.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimNatal_285.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimNatal_286.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaLuiza_287.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaLuiza_288.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaAugusta_289.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaAugusta_290.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimHorizonte_291.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimHorizonte_292.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimFlora_293.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimFlora_294.set('fieldImages', {'fid': '', 'layer': '', });
lyr_IrineuZanetiII_295.set('fieldImages', {'fid': '', 'layer': '', });
lyr_IrineuZanetiII_296.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Infratcnica_297.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Infratcnica_298.set('fieldImages', {'fid': '', 'layer': '', });
lyr_HorizResidence_299.set('fieldImages', {'fid': '', 'layer': '', });
lyr_HorizResidence_300.set('fieldImages', {'fid': '', 'layer': '', });
lyr_GlebaNossaSenhoraAuxiliadora_301.set('fieldImages', {'fid': '', 'layer': '', });
lyr_GlebaNossaSenhoraAuxiliadora_302.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Ferracini_303.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Ferracini_304.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FrancaB6_305.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FrancaB6_306.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaProgresso_307.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaProgresso_308.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita2_309.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita2_310.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita_311.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita_312.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Essence_313.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Essence_314.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Elias_315.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Elias_316.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioSolNascente_317.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioSolNascente_318.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioRuadoSol_319.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioRuadoSol_320.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioResidencialHope_321.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioResidencialHope_322.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DiocesedeFranca_323.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DiocesedeFranca_324.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DaVinci_325.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DaVinci_326.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioIICityPetrpolis_327.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioIICityPetrpolis_328.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_329.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_330.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Colorado_331.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Colorado_332.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CidadeJardim_333.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CidadeJardim_334.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraOlaria_335.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraOlaria_336.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraBelaVista_337.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraBelaVista_338.set('fieldImages', {'fid': '', 'layer': '', });
lyr_BordadaMata_339.set('fieldImages', {'fid': '', 'layer': '', });
lyr_BordadaMata_340.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Arteris_341.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_Arteris_342.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ArterisFaixadeDomnioFrancaSP_3342_343.set('fieldImages', {'fid': '', 'description': '', });
lyr_ArterisFaixadeDomnioFrancaSP_3452_344.set('fieldImages', {'fid': '', 'description': '', });
lyr_ArterisFaixadeDomnioFrancaSPA_397334_345.set('fieldImages', {'fid': '', 'description': '', });
lyr_Arizona_346.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Arizona_347.set('fieldImages', {'fid': '', 'layer': '', });
lyr_AbuDhabiParadiseResortResidence_348.set('fieldImages', {'fid': '', 'layer': '', });
lyr_AbuDhabiParadiseResortResidence_349.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EtapaAprovado43unid_350.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaDiretriz22unid_351.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaDefinitiva10unid_352.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaPrvia24unid_353.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_IRREGULAR_354.set('fieldImages', {'fid': 'TextEdit', 'PROCESSO': '', 'MODALIDADE': '', 'NOME_LOTEAMENTO': '', 'OBSERVACAO': '', 'MATRICULA': '', 'QUANT_LOTES': '', 'AREA_M2': '', 'DECRETO_REURB': '', 'SITUACAO': '', });
lyr_IRREGULAR_355.set('fieldImages', {'fid': 'TextEdit', 'PROCESSO': 'TextEdit', 'MODALIDADE': 'TextEdit', 'NOME_LOTEAMENTO': 'TextEdit', 'OBSERVACAO': 'TextEdit', 'MATRICULA': 'TextEdit', 'QUANT_LOTES': 'Range', 'AREA_M2': 'TextEdit', 'DECRETO_REURB': 'TextEdit', 'SITUACAO': 'TextEdit', });
lyr_APP1745unid_356.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosDuplos84unid_357.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MassasDgua270unid_358.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosSimples1842unid_359.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_CORPO_HIDRICO_CANAL_FECHADO_360.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_CORPO_HIDRICO_CANAL_ABERTO_361.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_Nascentes821unid_362.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_AntigoAterrodaFazMunicipal_363.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_364.set('fieldImages', {'fid': 'TextEdit', 'poco': 'TextEdit', 'coordenada_y': 'TextEdit', 'coordenada_x': 'TextEdit', 'cota': 'TextEdit', 'tipo': 'TextEdit', 'situacao': 'TextEdit', 'empresa': 'TextEdit', 'ano': 'TextEdit', });
lyr_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_365.set('fieldImages', {'fid': 'TextEdit', 'poco': 'TextEdit', 'coordenada_y': 'TextEdit', 'coordenada_x': 'TextEdit', 'cota': 'TextEdit', 'tipo': 'TextEdit', 'situacao': 'TextEdit', 'empresa': 'TextEdit', 'ano': 'TextEdit', });
lyr_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_366.set('fieldImages', {'fid': 'TextEdit', 'poco': 'TextEdit', 'coordenada_y': 'TextEdit', 'coordenada_x': 'TextEdit', 'cota': 'TextEdit', 'tipo': 'TextEdit', 'situacao': 'TextEdit', 'empresa': 'TextEdit', 'ano': 'TextEdit', });
lyr_reaBdaFazMunicipal_367.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_reaBdaFazMunicPoosMonitEngesolve7unid_368.set('fieldImages', {'fid': 'TextEdit', 'Norte': 'TextEdit', 'Leste': 'TextEdit', 'Cota': 'TextEdit', 'Identifica': 'TextEdit', 'Profundida': 'TextEdit', 'Identifi_1': 'TextEdit', 'Profundi_1': 'TextEdit', 'NA Dinâmi': 'TextEdit', 'NA Estatic': 'TextEdit', 'NÍVEL DE': 'TextEdit', 'TEMPERATUR': 'TextEdit', 'pH': 'TextEdit', 'CONDUTIVID': 'TextEdit', 'Eh/ORP': 'TextEdit', 'OXIGÊNIO': 'TextEdit', 'TURBIDEZ': 'TextEdit', });
lyr_AntigoAterrodasMaritacas_369.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterroMaritacas1Etapa28unid_370.set('fieldImages', {'fid': 'TextEdit', 'Poço': 'TextEdit', 'Norte (m)': 'TextEdit', 'Este (m)': 'TextEdit', 'Cota': 'TextEdit', });
lyr_ParqueZumbidosPalmares_371.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterroMaritacas3Etapa5unid_372.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterroMaritacas2Etapa41unid_373.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PARTE_DA_AREA_G_AVERBADA_374.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_PARTE_DA_AREA_G_A_SER_AVERBADA_375.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_CONJUNTO_HABITACIONAL_376.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AV_ACESSO_COLEGIO_AGRICOLA_377.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_N2_378.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_N1_379.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_N_380.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_K_381.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_J_382.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_I_383.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_H_384.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_G_385.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_F_386.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_E_387.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_D_388.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_C_389.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_B_390.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_A_391.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_PROPOSTO_392.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'BAIRRO': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', 'STATUS': '', });
lyr_EM_FUNCIONAMENTO_393.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'BAIRRO': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', 'STATUS': '', });
lyr_EM_CONSTRUCAO_394.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'BAIRRO': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', 'STATUS': '', });
lyr_DrenagensExistentes_395.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Drenagens_396.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_DRENAGEM_VILLAGIO_DI_FIRENZE_397.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_VILLA_SANTA_GIANNA_398.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_VILA_TOTOLI_399.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_VILA_REAL_400.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_VILA_DORATTA_401.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_SAO_PEDRO_II_402.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_SANTA_FE_403.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_TELLINI_404.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_SANTA_INES_407.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_PALERMO_411.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_ITAPUA_412.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_GAIA_413.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_FERRACINI_414.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_FAGGIONI_415.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_ECOSTILO_416.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_DOURADO_417.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_BALDASSARI_418.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_419.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RECREIO_CAMPO_BELO_421.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RECANTO_MENEGHETTI_422.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_423.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PROL_VILA_ISABEL_424.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PROL_JARDIM_MARTINS_425.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_UNIVERSITARIO_427.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_SANTA_ADELIA_428.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_MOEMA_429.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_JOAO_LEITE_430.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_DOS_SABIAS_431.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_432.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_DAS_ARVORES_433.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_CASTELO_434.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_BOA_VISTA_435.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_436.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARAGON_437.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_NAIR_RETUSSI_I_438.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_SAO_GABRIEL_439.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_SANTA_LUCIA_440.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_PULICANO_441.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_PORTINARI_442.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_PIRATININGA_443.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_PALMA_444.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_445.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_NOEMIA_446.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_NATAL_447.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_MARTINS_448.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_MARIA_LUIZA_449.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_LIBANO_450.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_IPANEMA_451.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_BUENO_452.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_BOTANICO_453.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_BARAO_454.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_AVIACAO_455.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_ARIZONA_II_456.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_ARIZONA_I_457.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_AEROPORTO_II_458.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_GRAMADOS_I_459.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_FRANCA_POLO_CLUBE_460.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_DOMINGOS_JARDINI_461.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_DINFRA_II_462.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_ATLANTA_PARK_463.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_ANA_DOROTHEA_464.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_REGIAO_SUL_465.set('fieldImages', {'fid': '', 'AREA_M2': '', 'REGIAO': '', });
lyr_REGIAO_OESTE_466.set('fieldImages', {'fid': '', 'AREA_M2': '', 'REGIAO': '', });
lyr_REGIAO_NORTE_467.set('fieldImages', {'fid': '', 'AREA_M2': '', 'REGIAO': '', });
lyr_REGIAO_LESTE_468.set('fieldImages', {'fid': '', 'AREA_M2': '', 'REGIAO': '', });
lyr_BAIRROS_469.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', 'AREA_M2': 'TextEdit', 'REGIAO': 'TextEdit', 'REGIAO_ARRASTAO_LIMPEZA': 'TextEdit', });
lyr_Voorocas27unid_470.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'ID_PONTO_I': 'TextEdit', 'IBGE': 'TextEdit', 'MUNIC__PIO': 'TextEdit', 'BACIA': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'SITUA____O': 'TextEdit', 'REFER__NCI': 'TextEdit', 'PRIORIDADE': 'TextEdit', 'OBSERVA_____': 'TextEdit', });
lyr_LocaisDifcilAcessoreasRurais12unid_471.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'PER__ODO_TURNO_': 'TextEdit', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'TextEdit', 'FREQU__NCIA': 'TextEdit', 'PROGRAMA____O_SEMANAL': 'TextEdit', 'EQUIPAMENTOS': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', });
lyr_Contineres286unid_472.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'bairro': '', });
lyr_rvoreImuneaoCorte9unid_473.set('fieldImages', {'fid': 'TextEdit', 'nome_popular': 'TextEdit', 'nome_cientifico': 'TextEdit', 'legislacao': 'TextEdit', });
lyr_AcademiasaoArLivre84unid_474.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'bairro': '', });
lyr_SERVICO_DE_SAUDE_475.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_RECICLAVEIS_476.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_PNEUS_477.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_PILHAS_E_BATERIAS_478.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_PERIGOSOS_479.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_OLEO_LUBRIFICANTE_480.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_OLEO_DE_COZINHA_481.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_MASSA_VERDE_482.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_MADEIRAS_483.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_LATAS_DE_TINTA_484.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_LAMPADAS_485.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_INSERVIVEIS_486.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_GESSO_487.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_EMBALAGENS_AGROTOXICO_488.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_ELETRONICOS_489.set('fieldImages', {'fid': '', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_COURO_490.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_CONSTRUCAO_CIVIL_491.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_CHAPAS_DE_RAIO_X_492.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_PROTECAO_AERODROMO_493.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', });
lyr_HELIPONTO_HOSPITAL_REGIONAL_494.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', });
lyr_HELIPONTO_EDIFICIO_PRIME_495.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', });
lyr_HELIPONTO_EDIFICIO_PRIME_496.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', });
lyr_CLASSE_VB_497.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_VA_498.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IVC_499.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IVB_500.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IVA_501.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IIIC_502.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IIIB_503.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IIIA_504.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_II_505.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_I_506.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_LoteamentoFechado146unid70632440m_507.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LoteEdificao20unid_508.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': '', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_LoteEdificao20unid508062m_509.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LoteEMDEF10unid_510.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', });
lyr_LoteEMDEF10unid218783m_511.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_Lote252unid_512.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', });
lyr_Lote252unid7530210m_513.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Proc7954202537196unid_514.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Proc7954202537196unid3240462m_515.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Proc2652520256922unid_516.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Proc2652520256922unid352000m_517.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Proc2198620254518unid_518.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Proc2198620254518unid2092083m_519.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Homologado4unid_520.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Homologado4unid334770m_521.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_reaVerde2117unid881307234m_522.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_reaPatrimonial69unid121924073m_523.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_reaInstitucional371unid208395759m_524.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_readeUsoEspecial280unid271349968m_525.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_APP169unid239527816m_526.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_TRPRL_CETESB_527.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TRPRL_CETESB_528.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TCRA_MUNICIPAL_529.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TCRA_MUNICIPAL_530.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TCRA_CETESB_PARCELAMENTO_531.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TCRA_CETESB_PARCELAMENTO_532.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TCRA_CETESB_533.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TCRA_CETESB_534.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TAC_MP_535.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TAC_MP_536.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_PLANTIO_VOLUNTARIO_537.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_PLANTIO_VOLUNTARIO_538.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_ANUENCIA_539.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_ANUENCIA_540.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_AIIPA_CETESB_541.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_AIIPA_CETESB_542.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_ACAO_CIVIL_PUBLICA_543.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_ACAO_CIVIL_PUBLICA_544.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_AdoteUmaPraa392unid38295094m_545.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'responsavel': 'TextEdit', 'm2': 'TextEdit', });
lyr_SPlacaEgnaldo4unid86447m_546.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
lyr_SPlacaDilu15unid751060m_547.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': '', 'bairro': '', });
lyr_CPlacaEgnaldo221unid22321870m_548.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
lyr_CPlacaDilu152unid15990431m_549.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
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
lyr_CONSTRUCAO_CAPS_INFANTIL_123.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_AREA_LAZER_PARQUE_ESMERALDA_124.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_AREA_LAZER_PARQUE_CONTINENTAL_125.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_AREA_LAZER_JARDIM_PORTINARI_126.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_OBRAS_PUBLICAS_127.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGEM_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_REGULARIZADO_128.set('fieldLabels', {'fid': 'hidden field', 'PROCESSO': 'inline label - visible with data', 'MODALIDADE': 'inline label - visible with data', 'NOME_LOTEAMENTO': 'inline label - visible with data', 'OBSERVACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'QUANT_LOTES': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DECRETO_REURB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', });
lyr_REGULARIZADO_129.set('fieldLabels', {'fid': 'hidden field', 'PROCESSO': 'inline label - visible with data', 'MODALIDADE': 'inline label - visible with data', 'NOME_LOTEAMENTO': 'inline label - visible with data', 'OBSERVACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'QUANT_LOTES': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DECRETO_REURB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', });
lyr_Vivenna_130.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Vivenna_131.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaSoVicente_132.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaSoVicente_133.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaJardimSimes_134.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaJardimSimes_135.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaAlvorada_136.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaAlvorada_137.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaDiEspanha_138.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaDiEspanha_139.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaPucci_140.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaPucci_141.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaPiemonteII_142.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaPiemonteII_143.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaOlimpica_144.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaOlimpica_145.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaDoratta_146.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaDoratta_147.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaBella_148.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaBella_149.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Versalhes_150.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Versalhes_151.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TorontoResidence_152.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TorontoResidence_153.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TerraNova_154.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TerraNova_155.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Sonetto_156.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Sonetto_157.set('fieldLabels', {'fid': 'hidden field', 'layer': 'no label', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_158.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_159.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_160.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_161.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_162.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_163.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ServidoRamal138kVFranca4Guanabara_164.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_ServidoRamal138kVFranca4Guanabara_165.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_SantaLina_166.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantaLina_167.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantAnita_168.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantAnita_169.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RuaAlfioBenedini_170.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RuaAlfioBenedini_171.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RuaAlfioBenedini_172.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', });
lyr_ResidencialValeVerde_173.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialValeVerde_174.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialYasminTorres_175.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialYasminTorres_176.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialTellini_177.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialTellini_178.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosII_179.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosII_180.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosI_181.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosI_182.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaIns_183.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaIns_184.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaF_185.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaF_186.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadosOitis_187.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadosOitis_188.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadoSol_189.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadoSol_190.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegreII_191.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegreII_192.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegre_193.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegre_194.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPiamalim_195.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPiamalim_196.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialParquedosPassaros_197.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialParquedosPassaros_198.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuciII_199.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuciII_200.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuci_201.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuci_202.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMoradadoBosque_203.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMoradadoBosque_204.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarthaHelena_205.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarthaHelena_206.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarioTasso_207.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarioTasso_208.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarianaAlarcon_209.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarianaAlarcon_210.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJardimCanada_211.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJardimCanada_212.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJabuticabeiras_213.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJabuticabeiras_214.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGramadosII_215.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGramadosII_216.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGramados_217.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGramados_218.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGaia_219.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGaia_220.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialFrutuoso_221.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialFrutuoso_222.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialFaggioni_223.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialFaggioni_224.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialEssenza_225.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialEssenza_226.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialDomingosJardini_227.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialDomingosJardini_228.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialCintraAlves_229.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialCintraAlves_230.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialBoaVista_231.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialBoaVista_232.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAltodaFazenda_233.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAltodaFazenda_234.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAnaHelena_235.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAnaHelena_236.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ReservaAbaete_237.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ReservaAbaete_238.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RecantoMeneghetti_239.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RecantoMeneghetti_240.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Quadra18VilaExposio_241.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Quadra18VilaExposio_242.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ProlongamentoSamelPark_243.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ProlongamentoSamelPark_244.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueVillaLobos_245.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueVillaLobos_246.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquePalmeiraImperial_247.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquePalmeiraImperial_248.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueJacarand_249.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueJacarand_250.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueFlora_251.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueFlora_252.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosSabias_253.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosSabias_254.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosCoqueiros_255.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosCoqueiros_256.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueAlvorada_257.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueAlvorada_258.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParagonFaseII_259.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParagonFaseII_260.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Paragon_261.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Paragon_262.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_PalmeiraReal_263.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_PalmeiraReal_264.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadoVerdeII_265.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadoVerdeII_266.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadaMata_267.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadaMata_268.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Monti_269.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Monti_270.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MontBlancResidence_271.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MontBlancResidence_272.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasterplanDespaschoal_273.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasterplanDespaschoal_274.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasterplanDespaschoal_275.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_MasteplanBildVitta_276.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasteplanBildVitta_277.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasteplanBildVitta_278.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_Loteamentolamo_279.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Loteamentolamo_280.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimStephani_281.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimStephani_282.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimPherola_283.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimPherola_284.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimNatal_285.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimNatal_286.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaLuiza_287.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaLuiza_288.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaAugusta_289.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaAugusta_290.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimHorizonte_291.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimHorizonte_292.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimFlora_293.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimFlora_294.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_IrineuZanetiII_295.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_IrineuZanetiII_296.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Infratcnica_297.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Infratcnica_298.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_HorizResidence_299.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_HorizResidence_300.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GlebaNossaSenhoraAuxiliadora_301.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GlebaNossaSenhoraAuxiliadora_302.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Ferracini_303.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Ferracini_304.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FrancaB6_305.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FrancaB6_306.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaProgresso_307.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaProgresso_308.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita2_309.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita2_310.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita_311.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita_312.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Essence_313.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Essence_314.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Elias_315.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Elias_316.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioSolNascente_317.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioSolNascente_318.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioRuadoSol_319.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioRuadoSol_320.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioResidencialHope_321.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioResidencialHope_322.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DiocesedeFranca_323.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DiocesedeFranca_324.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DaVinci_325.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DaVinci_326.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_327.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_328.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_329.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_330.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Colorado_331.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Colorado_332.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CidadeJardim_333.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CidadeJardim_334.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraOlaria_335.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraOlaria_336.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraBelaVista_337.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraBelaVista_338.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_BordadaMata_339.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_BordadaMata_340.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arteris_341.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arteris_342.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ArterisFaixadeDomnioFrancaSP_3342_343.set('fieldLabels', {'fid': 'hidden field', 'description': 'inline label - visible with data', });
lyr_ArterisFaixadeDomnioFrancaSP_3452_344.set('fieldLabels', {'fid': 'hidden field', 'description': 'inline label - visible with data', });
lyr_ArterisFaixadeDomnioFrancaSPA_397334_345.set('fieldLabels', {'fid': 'hidden field', 'description': 'inline label - visible with data', });
lyr_Arizona_346.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arizona_347.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_AbuDhabiParadiseResortResidence_348.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_AbuDhabiParadiseResortResidence_349.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EtapaAprovado43unid_350.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaDiretriz22unid_351.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaDefinitiva10unid_352.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaPrvia24unid_353.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_IRREGULAR_354.set('fieldLabels', {'fid': 'hidden field', 'PROCESSO': 'inline label - visible with data', 'MODALIDADE': 'inline label - visible with data', 'NOME_LOTEAMENTO': 'inline label - visible with data', 'OBSERVACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'QUANT_LOTES': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DECRETO_REURB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', });
lyr_IRREGULAR_355.set('fieldLabels', {'fid': 'hidden field', 'PROCESSO': 'inline label - visible with data', 'MODALIDADE': 'inline label - visible with data', 'NOME_LOTEAMENTO': 'inline label - visible with data', 'OBSERVACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'QUANT_LOTES': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DECRETO_REURB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', });
lyr_APP1745unid_356.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - always visible', });
lyr_RiosDuplos84unid_357.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_MassasDgua270unid_358.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosSimples1842unid_359.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_CORPO_HIDRICO_CANAL_FECHADO_360.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_CORPO_HIDRICO_CANAL_ABERTO_361.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_Nascentes821unid_362.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_AntigoAterrodaFazMunicipal_363.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_364.set('fieldLabels', {'fid': 'hidden field', 'poco': 'inline label - visible with data', 'coordenada_y': 'inline label - visible with data', 'coordenada_x': 'inline label - visible with data', 'cota': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'situacao': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'ano': 'inline label - visible with data', });
lyr_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_365.set('fieldLabels', {'fid': 'hidden field', 'poco': 'inline label - visible with data', 'coordenada_y': 'inline label - visible with data', 'coordenada_x': 'inline label - visible with data', 'cota': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'situacao': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'ano': 'inline label - visible with data', });
lyr_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_366.set('fieldLabels', {'fid': 'hidden field', 'poco': 'inline label - visible with data', 'coordenada_y': 'inline label - visible with data', 'coordenada_x': 'inline label - visible with data', 'cota': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'situacao': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'ano': 'inline label - visible with data', });
lyr_reaBdaFazMunicipal_367.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_reaBdaFazMunicPoosMonitEngesolve7unid_368.set('fieldLabels', {'fid': 'hidden field', 'Norte': 'hidden field', 'Leste': 'hidden field', 'Cota': 'hidden field', 'Identifica': 'hidden field', 'Profundida': 'hidden field', 'Identifi_1': 'inline label - visible with data', 'Profundi_1': 'hidden field', 'NA Dinâmi': 'hidden field', 'NA Estatic': 'hidden field', 'NÍVEL DE': 'hidden field', 'TEMPERATUR': 'hidden field', 'pH': 'hidden field', 'CONDUTIVID': 'hidden field', 'Eh/ORP': 'hidden field', 'OXIGÊNIO': 'hidden field', 'TURBIDEZ': 'hidden field', });
lyr_AntigoAterrodasMaritacas_369.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterroMaritacas1Etapa28unid_370.set('fieldLabels', {'fid': 'hidden field', 'Poço': 'inline label - visible with data', 'Norte (m)': 'hidden field', 'Este (m)': 'hidden field', 'Cota': 'hidden field', });
lyr_ParqueZumbidosPalmares_371.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterroMaritacas3Etapa5unid_372.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterroMaritacas2Etapa41unid_373.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PARTE_DA_AREA_G_AVERBADA_374.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_PARTE_DA_AREA_G_A_SER_AVERBADA_375.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_CONJUNTO_HABITACIONAL_376.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AV_ACESSO_COLEGIO_AGRICOLA_377.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_N2_378.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_N1_379.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_N_380.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_K_381.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_J_382.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_I_383.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_H_384.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_G_385.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_F_386.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_E_387.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_D_388.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_C_389.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_B_390.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_A_391.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_PROPOSTO_392.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', });
lyr_EM_FUNCIONAMENTO_393.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', });
lyr_EM_CONSTRUCAO_394.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', });
lyr_DrenagensExistentes_395.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Drenagens_396.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DRENAGEM_VILLAGIO_DI_FIRENZE_397.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_VILLA_SANTA_GIANNA_398.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_VILA_TOTOLI_399.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_VILA_REAL_400.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_VILA_DORATTA_401.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_SAO_PEDRO_II_402.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_SANTA_FE_403.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_TELLINI_404.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_405.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_406.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_SANTA_INES_407.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_408.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_409.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_410.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_PALERMO_411.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_ITAPUA_412.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_GAIA_413.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_FERRACINI_414.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_FAGGIONI_415.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_ECOSTILO_416.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_DOURADO_417.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_BALDASSARI_418.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_419.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_420.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RECREIO_CAMPO_BELO_421.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RECANTO_MENEGHETTI_422.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_423.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PROL_VILA_ISABEL_424.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PROL_JARDIM_MARTINS_425.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_426.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_UNIVERSITARIO_427.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_SANTA_ADELIA_428.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_MOEMA_429.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_JOAO_LEITE_430.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_DOS_SABIAS_431.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_432.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_DAS_ARVORES_433.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_CASTELO_434.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_BOA_VISTA_435.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_436.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARAGON_437.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_NAIR_RETUSSI_I_438.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_SAO_GABRIEL_439.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_SANTA_LUCIA_440.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_PULICANO_441.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_PORTINARI_442.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_PIRATININGA_443.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_PALMA_444.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_445.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_NOEMIA_446.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_NATAL_447.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_MARTINS_448.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_MARIA_LUIZA_449.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_LIBANO_450.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_IPANEMA_451.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_BUENO_452.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_BOTANICO_453.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_BARAO_454.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_AVIACAO_455.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_ARIZONA_II_456.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_ARIZONA_I_457.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_AEROPORTO_II_458.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_GRAMADOS_I_459.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_FRANCA_POLO_CLUBE_460.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_DOMINGOS_JARDINI_461.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_DINFRA_II_462.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_ATLANTA_PARK_463.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_ANA_DOROTHEA_464.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_REGIAO_SUL_465.set('fieldLabels', {'fid': 'hidden field', 'AREA_M2': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', });
lyr_REGIAO_OESTE_466.set('fieldLabels', {'fid': 'hidden field', 'AREA_M2': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', });
lyr_REGIAO_NORTE_467.set('fieldLabels', {'fid': 'hidden field', 'AREA_M2': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', });
lyr_REGIAO_LESTE_468.set('fieldLabels', {'fid': 'hidden field', 'AREA_M2': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', });
lyr_BAIRROS_469.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'REGIAO_ARRASTAO_LIMPEZA': 'inline label - visible with data', });
lyr_Voorocas27unid_470.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'ID_PONTO_I': 'hidden field', 'IBGE': 'hidden field', 'MUNIC__PIO': 'hidden field', 'BACIA': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'SITUA____O': 'hidden field', 'REFER__NCI': 'inline label - visible with data', 'PRIORIDADE': 'hidden field', 'OBSERVA_____': 'inline label - visible with data', });
lyr_LocaisDifcilAcessoreasRurais12unid_471.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'PER__ODO_TURNO_': 'inline label - visible with data', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'inline label - visible with data', 'FREQU__NCIA': 'inline label - visible with data', 'PROGRAMA____O_SEMANAL': 'inline label - visible with data', 'EQUIPAMENTOS': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', });
lyr_Contineres286unid_472.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_rvoreImuneaoCorte9unid_473.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_AcademiasaoArLivre84unid_474.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_SERVICO_DE_SAUDE_475.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_RECICLAVEIS_476.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_PNEUS_477.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_PILHAS_E_BATERIAS_478.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_PERIGOSOS_479.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_OLEO_LUBRIFICANTE_480.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_OLEO_DE_COZINHA_481.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_MASSA_VERDE_482.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_MADEIRAS_483.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_LATAS_DE_TINTA_484.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_LAMPADAS_485.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_INSERVIVEIS_486.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_GESSO_487.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_EMBALAGENS_AGROTOXICO_488.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_ELETRONICOS_489.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_COURO_490.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_CONSTRUCAO_CIVIL_491.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_CHAPAS_DE_RAIO_X_492.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_PROTECAO_AERODROMO_493.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', });
lyr_HELIPONTO_HOSPITAL_REGIONAL_494.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', });
lyr_HELIPONTO_EDIFICIO_PRIME_495.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', });
lyr_HELIPONTO_EDIFICIO_PRIME_496.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', });
lyr_CLASSE_VB_497.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_VA_498.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IVC_499.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IVB_500.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IVA_501.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IIIC_502.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IIIB_503.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IIIA_504.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_II_505.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_I_506.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_LoteamentoFechado146unid70632440m_507.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'hidden field', });
lyr_LoteEdificao20unid_508.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LoteEdificao20unid508062m_509.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LoteEMDEF10unid_510.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', });
lyr_LoteEMDEF10unid218783m_511.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_Lote252unid_512.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', });
lyr_Lote252unid7530210m_513.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Proc7954202537196unid_514.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Proc7954202537196unid3240462m_515.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Proc2652520256922unid_516.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Proc2652520256922unid352000m_517.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Proc2198620254518unid_518.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Proc2198620254518unid2092083m_519.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Homologado4unid_520.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Homologado4unid334770m_521.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_reaVerde2117unid881307234m_522.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaPatrimonial69unid121924073m_523.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaInstitucional371unid208395759m_524.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_readeUsoEspecial280unid271349968m_525.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_APP169unid239527816m_526.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_TRPRL_CETESB_527.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TRPRL_CETESB_528.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TCRA_MUNICIPAL_529.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TCRA_MUNICIPAL_530.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TCRA_CETESB_PARCELAMENTO_531.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TCRA_CETESB_PARCELAMENTO_532.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TCRA_CETESB_533.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TCRA_CETESB_534.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TAC_MP_535.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TAC_MP_536.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PLANTIO_VOLUNTARIO_537.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PLANTIO_VOLUNTARIO_538.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_ANUENCIA_539.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_ANUENCIA_540.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_AIIPA_CETESB_541.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_AIIPA_CETESB_542.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_ACAO_CIVIL_PUBLICA_543.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_ACAO_CIVIL_PUBLICA_544.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_AdoteUmaPraa392unid38295094m_545.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'responsavel': 'inline label - visible with data', 'm2': 'inline label - visible with data', });
lyr_SPlacaEgnaldo4unid86447m_546.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_SPlacaDilu15unid751060m_547.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_CPlacaEgnaldo221unid22321870m_548.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_CPlacaDilu152unid15990431m_549.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_CPlacaDilu152unid15990431m_549.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});