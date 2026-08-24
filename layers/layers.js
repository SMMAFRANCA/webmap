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
var format_LIMITE_MUNICIPAL_3 = new ol.format.GeoJSON();
var features_LIMITE_MUNICIPAL_3 = format_LIMITE_MUNICIPAL_3.readFeatures(json_LIMITE_MUNICIPAL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LIMITE_MUNICIPAL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITE_MUNICIPAL_3.addFeatures(features_LIMITE_MUNICIPAL_3);
var lyr_LIMITE_MUNICIPAL_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITE_MUNICIPAL_3, 
                style: style_LIMITE_MUNICIPAL_3,
                popuplayertitle: 'LIMITE_MUNICIPAL',
                interactive: false,
                title: '<img src="styles/legend/LIMITE_MUNICIPAL_3.png" /> LIMITE_MUNICIPAL'
            });
var format_AREA_URBANA_4 = new ol.format.GeoJSON();
var features_AREA_URBANA_4 = format_AREA_URBANA_4.readFeatures(json_AREA_URBANA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_URBANA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_URBANA_4.addFeatures(features_AREA_URBANA_4);
var lyr_AREA_URBANA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_URBANA_4, 
                style: style_AREA_URBANA_4,
                popuplayertitle: 'AREA_URBANA',
                interactive: false,
                title: '<img src="styles/legend/AREA_URBANA_4.png" /> AREA_URBANA'
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
var format_SUB_MACROZONA_DE_OCUPACAO_RESTRITA_21 = new ol.format.GeoJSON();
var features_SUB_MACROZONA_DE_OCUPACAO_RESTRITA_21 = format_SUB_MACROZONA_DE_OCUPACAO_RESTRITA_21.readFeatures(json_SUB_MACROZONA_DE_OCUPACAO_RESTRITA_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SUB_MACROZONA_DE_OCUPACAO_RESTRITA_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUB_MACROZONA_DE_OCUPACAO_RESTRITA_21.addFeatures(features_SUB_MACROZONA_DE_OCUPACAO_RESTRITA_21);
var lyr_SUB_MACROZONA_DE_OCUPACAO_RESTRITA_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUB_MACROZONA_DE_OCUPACAO_RESTRITA_21, 
                style: style_SUB_MACROZONA_DE_OCUPACAO_RESTRITA_21,
                popuplayertitle: 'SUB_MACROZONA_DE_OCUPACAO_RESTRITA',
                interactive: true,
                title: '<img src="styles/legend/SUB_MACROZONA_DE_OCUPACAO_RESTRITA_21.png" /> SUB_MACROZONA_DE_OCUPACAO_RESTRITA'
            });
var format_SUB_MACROZONA_DE_OCUPACAO_PREFERENCIAL_22 = new ol.format.GeoJSON();
var features_SUB_MACROZONA_DE_OCUPACAO_PREFERENCIAL_22 = format_SUB_MACROZONA_DE_OCUPACAO_PREFERENCIAL_22.readFeatures(json_SUB_MACROZONA_DE_OCUPACAO_PREFERENCIAL_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SUB_MACROZONA_DE_OCUPACAO_PREFERENCIAL_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUB_MACROZONA_DE_OCUPACAO_PREFERENCIAL_22.addFeatures(features_SUB_MACROZONA_DE_OCUPACAO_PREFERENCIAL_22);
var lyr_SUB_MACROZONA_DE_OCUPACAO_PREFERENCIAL_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUB_MACROZONA_DE_OCUPACAO_PREFERENCIAL_22, 
                style: style_SUB_MACROZONA_DE_OCUPACAO_PREFERENCIAL_22,
                popuplayertitle: 'SUB_MACROZONA_DE_OCUPACAO_PREFERENCIAL',
                interactive: true,
                title: '<img src="styles/legend/SUB_MACROZONA_DE_OCUPACAO_PREFERENCIAL_22.png" /> SUB_MACROZONA_DE_OCUPACAO_PREFERENCIAL'
            });
var format_SUB_MACROZONA_DE_EXPANSAO_URBANA_23 = new ol.format.GeoJSON();
var features_SUB_MACROZONA_DE_EXPANSAO_URBANA_23 = format_SUB_MACROZONA_DE_EXPANSAO_URBANA_23.readFeatures(json_SUB_MACROZONA_DE_EXPANSAO_URBANA_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SUB_MACROZONA_DE_EXPANSAO_URBANA_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUB_MACROZONA_DE_EXPANSAO_URBANA_23.addFeatures(features_SUB_MACROZONA_DE_EXPANSAO_URBANA_23);
var lyr_SUB_MACROZONA_DE_EXPANSAO_URBANA_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUB_MACROZONA_DE_EXPANSAO_URBANA_23, 
                style: style_SUB_MACROZONA_DE_EXPANSAO_URBANA_23,
                popuplayertitle: 'SUB_MACROZONA_DE_EXPANSAO_URBANA',
                interactive: true,
                title: '<img src="styles/legend/SUB_MACROZONA_DE_EXPANSAO_URBANA_23.png" /> SUB_MACROZONA_DE_EXPANSAO_URBANA'
            });
var format_MACROZONA_DO_RIO_CANOAS_24 = new ol.format.GeoJSON();
var features_MACROZONA_DO_RIO_CANOAS_24 = format_MACROZONA_DO_RIO_CANOAS_24.readFeatures(json_MACROZONA_DO_RIO_CANOAS_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MACROZONA_DO_RIO_CANOAS_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MACROZONA_DO_RIO_CANOAS_24.addFeatures(features_MACROZONA_DO_RIO_CANOAS_24);
var lyr_MACROZONA_DO_RIO_CANOAS_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MACROZONA_DO_RIO_CANOAS_24, 
                style: style_MACROZONA_DO_RIO_CANOAS_24,
                popuplayertitle: 'MACROZONA_DO_RIO_CANOAS',
                interactive: true,
                title: '<img src="styles/legend/MACROZONA_DO_RIO_CANOAS_24.png" /> MACROZONA_DO_RIO_CANOAS'
            });
var format_EXPANSAO_URBANA_LC_324_2019_25 = new ol.format.GeoJSON();
var features_EXPANSAO_URBANA_LC_324_2019_25 = format_EXPANSAO_URBANA_LC_324_2019_25.readFeatures(json_EXPANSAO_URBANA_LC_324_2019_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EXPANSAO_URBANA_LC_324_2019_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPANSAO_URBANA_LC_324_2019_25.addFeatures(features_EXPANSAO_URBANA_LC_324_2019_25);
var lyr_EXPANSAO_URBANA_LC_324_2019_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXPANSAO_URBANA_LC_324_2019_25, 
                style: style_EXPANSAO_URBANA_LC_324_2019_25,
                popuplayertitle: 'EXPANSAO_URBANA _L.C._324_ 2019',
                interactive: true,
                title: '<img src="styles/legend/EXPANSAO_URBANA_LC_324_2019_25.png" /> EXPANSAO_URBANA _L.C._324_ 2019'
            });
var format_EXPANSAO_URBANA_LC_235_2013_26 = new ol.format.GeoJSON();
var features_EXPANSAO_URBANA_LC_235_2013_26 = format_EXPANSAO_URBANA_LC_235_2013_26.readFeatures(json_EXPANSAO_URBANA_LC_235_2013_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EXPANSAO_URBANA_LC_235_2013_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPANSAO_URBANA_LC_235_2013_26.addFeatures(features_EXPANSAO_URBANA_LC_235_2013_26);
var lyr_EXPANSAO_URBANA_LC_235_2013_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXPANSAO_URBANA_LC_235_2013_26, 
                style: style_EXPANSAO_URBANA_LC_235_2013_26,
                popuplayertitle: 'EXPANSAO_URBANA _L.C._235_ 2013',
                interactive: true,
                title: '<img src="styles/legend/EXPANSAO_URBANA_LC_235_2013_26.png" /> EXPANSAO_URBANA _L.C._235_ 2013'
            });
var format_EXPANSAO_URBANA_LC_140_2009_27 = new ol.format.GeoJSON();
var features_EXPANSAO_URBANA_LC_140_2009_27 = format_EXPANSAO_URBANA_LC_140_2009_27.readFeatures(json_EXPANSAO_URBANA_LC_140_2009_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EXPANSAO_URBANA_LC_140_2009_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPANSAO_URBANA_LC_140_2009_27.addFeatures(features_EXPANSAO_URBANA_LC_140_2009_27);
var lyr_EXPANSAO_URBANA_LC_140_2009_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXPANSAO_URBANA_LC_140_2009_27, 
                style: style_EXPANSAO_URBANA_LC_140_2009_27,
                popuplayertitle: 'EXPANSAO_URBANA _L.C._140_ 2009',
                interactive: true,
                title: '<img src="styles/legend/EXPANSAO_URBANA_LC_140_2009_27.png" /> EXPANSAO_URBANA _L.C._140_ 2009'
            });
var format_EXPANSAO_URBANA_LC_050_2003_28 = new ol.format.GeoJSON();
var features_EXPANSAO_URBANA_LC_050_2003_28 = format_EXPANSAO_URBANA_LC_050_2003_28.readFeatures(json_EXPANSAO_URBANA_LC_050_2003_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EXPANSAO_URBANA_LC_050_2003_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPANSAO_URBANA_LC_050_2003_28.addFeatures(features_EXPANSAO_URBANA_LC_050_2003_28);
var lyr_EXPANSAO_URBANA_LC_050_2003_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXPANSAO_URBANA_LC_050_2003_28, 
                style: style_EXPANSAO_URBANA_LC_050_2003_28,
                popuplayertitle: 'EXPANSAO_URBANA _L.C._050_ 2003',
                interactive: true,
                title: '<img src="styles/legend/EXPANSAO_URBANA_LC_050_2003_28.png" /> EXPANSAO_URBANA _L.C._050_ 2003'
            });
var format_AREAS_DAS_BACIAS_DOS_RIOS_CANOAS_E_POUSO_ALEGRE_29 = new ol.format.GeoJSON();
var features_AREAS_DAS_BACIAS_DOS_RIOS_CANOAS_E_POUSO_ALEGRE_29 = format_AREAS_DAS_BACIAS_DOS_RIOS_CANOAS_E_POUSO_ALEGRE_29.readFeatures(json_AREAS_DAS_BACIAS_DOS_RIOS_CANOAS_E_POUSO_ALEGRE_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREAS_DAS_BACIAS_DOS_RIOS_CANOAS_E_POUSO_ALEGRE_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAS_DAS_BACIAS_DOS_RIOS_CANOAS_E_POUSO_ALEGRE_29.addFeatures(features_AREAS_DAS_BACIAS_DOS_RIOS_CANOAS_E_POUSO_ALEGRE_29);
var lyr_AREAS_DAS_BACIAS_DOS_RIOS_CANOAS_E_POUSO_ALEGRE_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAS_DAS_BACIAS_DOS_RIOS_CANOAS_E_POUSO_ALEGRE_29, 
                style: style_AREAS_DAS_BACIAS_DOS_RIOS_CANOAS_E_POUSO_ALEGRE_29,
                popuplayertitle: 'AREAS_DAS_BACIAS_DOS_RIOS_CANOAS_E_POUSO_ALEGRE',
                interactive: true,
                title: '<img src="styles/legend/AREAS_DAS_BACIAS_DOS_RIOS_CANOAS_E_POUSO_ALEGRE_29.png" /> AREAS_DAS_BACIAS_DOS_RIOS_CANOAS_E_POUSO_ALEGRE'
            });
var format_AREA_ESPECIAL_RESIDENCIAIS_UNIFAMILIARES_30 = new ol.format.GeoJSON();
var features_AREA_ESPECIAL_RESIDENCIAIS_UNIFAMILIARES_30 = format_AREA_ESPECIAL_RESIDENCIAIS_UNIFAMILIARES_30.readFeatures(json_AREA_ESPECIAL_RESIDENCIAIS_UNIFAMILIARES_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_ESPECIAL_RESIDENCIAIS_UNIFAMILIARES_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_ESPECIAL_RESIDENCIAIS_UNIFAMILIARES_30.addFeatures(features_AREA_ESPECIAL_RESIDENCIAIS_UNIFAMILIARES_30);
var lyr_AREA_ESPECIAL_RESIDENCIAIS_UNIFAMILIARES_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_ESPECIAL_RESIDENCIAIS_UNIFAMILIARES_30, 
                style: style_AREA_ESPECIAL_RESIDENCIAIS_UNIFAMILIARES_30,
                popuplayertitle: 'AREA_ESPECIAL_RESIDENCIAIS_UNIFAMILIARES',
                interactive: true,
                title: '<img src="styles/legend/AREA_ESPECIAL_RESIDENCIAIS_UNIFAMILIARES_30.png" /> AREA_ESPECIAL_RESIDENCIAIS_UNIFAMILIARES'
            });
var format_AREA_ESPECIAL_LAZER_INTERESSE_TURISTICO_E_CULTURA_31 = new ol.format.GeoJSON();
var features_AREA_ESPECIAL_LAZER_INTERESSE_TURISTICO_E_CULTURA_31 = format_AREA_ESPECIAL_LAZER_INTERESSE_TURISTICO_E_CULTURA_31.readFeatures(json_AREA_ESPECIAL_LAZER_INTERESSE_TURISTICO_E_CULTURA_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_ESPECIAL_LAZER_INTERESSE_TURISTICO_E_CULTURA_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_ESPECIAL_LAZER_INTERESSE_TURISTICO_E_CULTURA_31.addFeatures(features_AREA_ESPECIAL_LAZER_INTERESSE_TURISTICO_E_CULTURA_31);
var lyr_AREA_ESPECIAL_LAZER_INTERESSE_TURISTICO_E_CULTURA_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_ESPECIAL_LAZER_INTERESSE_TURISTICO_E_CULTURA_31, 
                style: style_AREA_ESPECIAL_LAZER_INTERESSE_TURISTICO_E_CULTURA_31,
                popuplayertitle: 'AREA_ESPECIAL_LAZER_INTERESSE_TURISTICO_E_CULTURA',
                interactive: true,
                title: '<img src="styles/legend/AREA_ESPECIAL_LAZER_INTERESSE_TURISTICO_E_CULTURA_31.png" /> AREA_ESPECIAL_LAZER_INTERESSE_TURISTICO_E_CULTURA'
            });
var format_AREA_ESPECIAL_INDUSTRIAL_E_LOGISTICA_32 = new ol.format.GeoJSON();
var features_AREA_ESPECIAL_INDUSTRIAL_E_LOGISTICA_32 = format_AREA_ESPECIAL_INDUSTRIAL_E_LOGISTICA_32.readFeatures(json_AREA_ESPECIAL_INDUSTRIAL_E_LOGISTICA_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_ESPECIAL_INDUSTRIAL_E_LOGISTICA_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_ESPECIAL_INDUSTRIAL_E_LOGISTICA_32.addFeatures(features_AREA_ESPECIAL_INDUSTRIAL_E_LOGISTICA_32);
var lyr_AREA_ESPECIAL_INDUSTRIAL_E_LOGISTICA_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_ESPECIAL_INDUSTRIAL_E_LOGISTICA_32, 
                style: style_AREA_ESPECIAL_INDUSTRIAL_E_LOGISTICA_32,
                popuplayertitle: 'AREA_ESPECIAL_INDUSTRIAL_E_LOGISTICA',
                interactive: true,
                title: '<img src="styles/legend/AREA_ESPECIAL_INDUSTRIAL_E_LOGISTICA_32.png" /> AREA_ESPECIAL_INDUSTRIAL_E_LOGISTICA'
            });
var format_AREA_ESPECIAL_DE_INTERESSE_SOCIAL_33 = new ol.format.GeoJSON();
var features_AREA_ESPECIAL_DE_INTERESSE_SOCIAL_33 = format_AREA_ESPECIAL_DE_INTERESSE_SOCIAL_33.readFeatures(json_AREA_ESPECIAL_DE_INTERESSE_SOCIAL_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_ESPECIAL_DE_INTERESSE_SOCIAL_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_ESPECIAL_DE_INTERESSE_SOCIAL_33.addFeatures(features_AREA_ESPECIAL_DE_INTERESSE_SOCIAL_33);
var lyr_AREA_ESPECIAL_DE_INTERESSE_SOCIAL_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_ESPECIAL_DE_INTERESSE_SOCIAL_33, 
                style: style_AREA_ESPECIAL_DE_INTERESSE_SOCIAL_33,
                popuplayertitle: 'AREA_ESPECIAL_DE_INTERESSE_SOCIAL',
                interactive: true,
                title: '<img src="styles/legend/AREA_ESPECIAL_DE_INTERESSE_SOCIAL_33.png" /> AREA_ESPECIAL_DE_INTERESSE_SOCIAL'
            });
var format_ZONA_SUL_VIA_EXPRESSA_EXISTENTE_34 = new ol.format.GeoJSON();
var features_ZONA_SUL_VIA_EXPRESSA_EXISTENTE_34 = format_ZONA_SUL_VIA_EXPRESSA_EXISTENTE_34.readFeatures(json_ZONA_SUL_VIA_EXPRESSA_EXISTENTE_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ZONA_SUL_VIA_EXPRESSA_EXISTENTE_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA_SUL_VIA_EXPRESSA_EXISTENTE_34.addFeatures(features_ZONA_SUL_VIA_EXPRESSA_EXISTENTE_34);
var lyr_ZONA_SUL_VIA_EXPRESSA_EXISTENTE_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONA_SUL_VIA_EXPRESSA_EXISTENTE_34, 
                style: style_ZONA_SUL_VIA_EXPRESSA_EXISTENTE_34,
                popuplayertitle: 'ZONA_SUL_VIA_EXPRESSA_EXISTENTE',
                interactive: true,
                title: '<img src="styles/legend/ZONA_SUL_VIA_EXPRESSA_EXISTENTE_34.png" /> ZONA_SUL_VIA_EXPRESSA_EXISTENTE'
            });
var format_ZONA_SUL_DIRETRIZ_VIA_PARQUE_35 = new ol.format.GeoJSON();
var features_ZONA_SUL_DIRETRIZ_VIA_PARQUE_35 = format_ZONA_SUL_DIRETRIZ_VIA_PARQUE_35.readFeatures(json_ZONA_SUL_DIRETRIZ_VIA_PARQUE_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ZONA_SUL_DIRETRIZ_VIA_PARQUE_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA_SUL_DIRETRIZ_VIA_PARQUE_35.addFeatures(features_ZONA_SUL_DIRETRIZ_VIA_PARQUE_35);
var lyr_ZONA_SUL_DIRETRIZ_VIA_PARQUE_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONA_SUL_DIRETRIZ_VIA_PARQUE_35, 
                style: style_ZONA_SUL_DIRETRIZ_VIA_PARQUE_35,
                popuplayertitle: 'ZONA_SUL_DIRETRIZ_VIA_PARQUE',
                interactive: true,
                title: '<img src="styles/legend/ZONA_SUL_DIRETRIZ_VIA_PARQUE_35.png" /> ZONA_SUL_DIRETRIZ_VIA_PARQUE'
            });
var format_ZONA_SUL_DIRETRIZ_COLETORA_36 = new ol.format.GeoJSON();
var features_ZONA_SUL_DIRETRIZ_COLETORA_36 = format_ZONA_SUL_DIRETRIZ_COLETORA_36.readFeatures(json_ZONA_SUL_DIRETRIZ_COLETORA_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ZONA_SUL_DIRETRIZ_COLETORA_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA_SUL_DIRETRIZ_COLETORA_36.addFeatures(features_ZONA_SUL_DIRETRIZ_COLETORA_36);
var lyr_ZONA_SUL_DIRETRIZ_COLETORA_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONA_SUL_DIRETRIZ_COLETORA_36, 
                style: style_ZONA_SUL_DIRETRIZ_COLETORA_36,
                popuplayertitle: 'ZONA_SUL_DIRETRIZ_COLETORA',
                interactive: true,
                title: '<img src="styles/legend/ZONA_SUL_DIRETRIZ_COLETORA_36.png" /> ZONA_SUL_DIRETRIZ_COLETORA'
            });
var format_ZONA_SUL_DIRETRIZ_AVENIDA_37 = new ol.format.GeoJSON();
var features_ZONA_SUL_DIRETRIZ_AVENIDA_37 = format_ZONA_SUL_DIRETRIZ_AVENIDA_37.readFeatures(json_ZONA_SUL_DIRETRIZ_AVENIDA_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ZONA_SUL_DIRETRIZ_AVENIDA_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA_SUL_DIRETRIZ_AVENIDA_37.addFeatures(features_ZONA_SUL_DIRETRIZ_AVENIDA_37);
var lyr_ZONA_SUL_DIRETRIZ_AVENIDA_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONA_SUL_DIRETRIZ_AVENIDA_37, 
                style: style_ZONA_SUL_DIRETRIZ_AVENIDA_37,
                popuplayertitle: 'ZONA_SUL_DIRETRIZ_AVENIDA',
                interactive: true,
                title: '<img src="styles/legend/ZONA_SUL_DIRETRIZ_AVENIDA_37.png" /> ZONA_SUL_DIRETRIZ_AVENIDA'
            });
var format_ZONA_SUL_AVENIDA_EXISTENTE_38 = new ol.format.GeoJSON();
var features_ZONA_SUL_AVENIDA_EXISTENTE_38 = format_ZONA_SUL_AVENIDA_EXISTENTE_38.readFeatures(json_ZONA_SUL_AVENIDA_EXISTENTE_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ZONA_SUL_AVENIDA_EXISTENTE_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA_SUL_AVENIDA_EXISTENTE_38.addFeatures(features_ZONA_SUL_AVENIDA_EXISTENTE_38);
var lyr_ZONA_SUL_AVENIDA_EXISTENTE_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONA_SUL_AVENIDA_EXISTENTE_38, 
                style: style_ZONA_SUL_AVENIDA_EXISTENTE_38,
                popuplayertitle: 'ZONA_SUL_AVENIDA_EXISTENTE',
                interactive: true,
                title: '<img src="styles/legend/ZONA_SUL_AVENIDA_EXISTENTE_38.png" /> ZONA_SUL_AVENIDA_EXISTENTE'
            });
var format_SISTEMA_VIARIO_PRINCIPAL_39 = new ol.format.GeoJSON();
var features_SISTEMA_VIARIO_PRINCIPAL_39 = format_SISTEMA_VIARIO_PRINCIPAL_39.readFeatures(json_SISTEMA_VIARIO_PRINCIPAL_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SISTEMA_VIARIO_PRINCIPAL_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SISTEMA_VIARIO_PRINCIPAL_39.addFeatures(features_SISTEMA_VIARIO_PRINCIPAL_39);
var lyr_SISTEMA_VIARIO_PRINCIPAL_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SISTEMA_VIARIO_PRINCIPAL_39, 
                style: style_SISTEMA_VIARIO_PRINCIPAL_39,
                popuplayertitle: 'SISTEMA_VIARIO_PRINCIPAL',
                interactive: true,
                title: '<img src="styles/legend/SISTEMA_VIARIO_PRINCIPAL_39.png" /> SISTEMA_VIARIO_PRINCIPAL'
            });
var format_RODOVIAS_VIAS_ARTERIAIS_40 = new ol.format.GeoJSON();
var features_RODOVIAS_VIAS_ARTERIAIS_40 = format_RODOVIAS_VIAS_ARTERIAIS_40.readFeatures(json_RODOVIAS_VIAS_ARTERIAIS_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RODOVIAS_VIAS_ARTERIAIS_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RODOVIAS_VIAS_ARTERIAIS_40.addFeatures(features_RODOVIAS_VIAS_ARTERIAIS_40);
var lyr_RODOVIAS_VIAS_ARTERIAIS_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RODOVIAS_VIAS_ARTERIAIS_40, 
                style: style_RODOVIAS_VIAS_ARTERIAIS_40,
                popuplayertitle: 'RODOVIAS_VIAS_ARTERIAIS',
                interactive: true,
                title: '<img src="styles/legend/RODOVIAS_VIAS_ARTERIAIS_40.png" /> RODOVIAS_VIAS_ARTERIAIS'
            });
var format_RODOVIAS_41 = new ol.format.GeoJSON();
var features_RODOVIAS_41 = format_RODOVIAS_41.readFeatures(json_RODOVIAS_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RODOVIAS_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RODOVIAS_41.addFeatures(features_RODOVIAS_41);
var lyr_RODOVIAS_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RODOVIAS_41, 
                style: style_RODOVIAS_41,
                popuplayertitle: 'RODOVIAS',
                interactive: true,
                title: '<img src="styles/legend/RODOVIAS_41.png" /> RODOVIAS'
            });
var format_FAIXA_DE_DOMINIO_DER_SPA_397334_42 = new ol.format.GeoJSON();
var features_FAIXA_DE_DOMINIO_DER_SPA_397334_42 = format_FAIXA_DE_DOMINIO_DER_SPA_397334_42.readFeatures(json_FAIXA_DE_DOMINIO_DER_SPA_397334_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FAIXA_DE_DOMINIO_DER_SPA_397334_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAIXA_DE_DOMINIO_DER_SPA_397334_42.addFeatures(features_FAIXA_DE_DOMINIO_DER_SPA_397334_42);
var lyr_FAIXA_DE_DOMINIO_DER_SPA_397334_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAIXA_DE_DOMINIO_DER_SPA_397334_42, 
                style: style_FAIXA_DE_DOMINIO_DER_SPA_397334_42,
                popuplayertitle: 'FAIXA_DE_DOMINIO_DER_SPA_397/334',
                interactive: true,
                title: '<img src="styles/legend/FAIXA_DE_DOMINIO_DER_SPA_397334_42.png" /> FAIXA_DE_DOMINIO_DER_SPA_397/334'
            });
var format_FAIXA_DE_DOMINIO_DER_SP_3452_43 = new ol.format.GeoJSON();
var features_FAIXA_DE_DOMINIO_DER_SP_3452_43 = format_FAIXA_DE_DOMINIO_DER_SP_3452_43.readFeatures(json_FAIXA_DE_DOMINIO_DER_SP_3452_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FAIXA_DE_DOMINIO_DER_SP_3452_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAIXA_DE_DOMINIO_DER_SP_3452_43.addFeatures(features_FAIXA_DE_DOMINIO_DER_SP_3452_43);
var lyr_FAIXA_DE_DOMINIO_DER_SP_3452_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAIXA_DE_DOMINIO_DER_SP_3452_43, 
                style: style_FAIXA_DE_DOMINIO_DER_SP_3452_43,
                popuplayertitle: 'FAIXA_DE_DOMINIO_DER_SP_345(#2)',
                interactive: true,
                title: '<img src="styles/legend/FAIXA_DE_DOMINIO_DER_SP_3452_43.png" /> FAIXA_DE_DOMINIO_DER_SP_345(#2)'
            });
var format_FAIXA_DE_DOMINIO_DER_SP_3342_44 = new ol.format.GeoJSON();
var features_FAIXA_DE_DOMINIO_DER_SP_3342_44 = format_FAIXA_DE_DOMINIO_DER_SP_3342_44.readFeatures(json_FAIXA_DE_DOMINIO_DER_SP_3342_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FAIXA_DE_DOMINIO_DER_SP_3342_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAIXA_DE_DOMINIO_DER_SP_3342_44.addFeatures(features_FAIXA_DE_DOMINIO_DER_SP_3342_44);
var lyr_FAIXA_DE_DOMINIO_DER_SP_3342_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAIXA_DE_DOMINIO_DER_SP_3342_44, 
                style: style_FAIXA_DE_DOMINIO_DER_SP_3342_44,
                popuplayertitle: 'FAIXA_DE_DOMINIO_DER_SP_334(#2)',
                interactive: true,
                title: '<img src="styles/legend/FAIXA_DE_DOMINIO_DER_SP_3342_44.png" /> FAIXA_DE_DOMINIO_DER_SP_334(#2)'
            });
var format_EXPANSAO_DO_SISTEMA_VIARIO_45 = new ol.format.GeoJSON();
var features_EXPANSAO_DO_SISTEMA_VIARIO_45 = format_EXPANSAO_DO_SISTEMA_VIARIO_45.readFeatures(json_EXPANSAO_DO_SISTEMA_VIARIO_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EXPANSAO_DO_SISTEMA_VIARIO_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPANSAO_DO_SISTEMA_VIARIO_45.addFeatures(features_EXPANSAO_DO_SISTEMA_VIARIO_45);
var lyr_EXPANSAO_DO_SISTEMA_VIARIO_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXPANSAO_DO_SISTEMA_VIARIO_45, 
                style: style_EXPANSAO_DO_SISTEMA_VIARIO_45,
                popuplayertitle: 'EXPANSAO_DO_SISTEMA_VIARIO',
                interactive: true,
                title: '<img src="styles/legend/EXPANSAO_DO_SISTEMA_VIARIO_45.png" /> EXPANSAO_DO_SISTEMA_VIARIO'
            });
var format_VIGILANCIA_EM_SAUDE5UNID_46 = new ol.format.GeoJSON();
var features_VIGILANCIA_EM_SAUDE5UNID_46 = format_VIGILANCIA_EM_SAUDE5UNID_46.readFeatures(json_VIGILANCIA_EM_SAUDE5UNID_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VIGILANCIA_EM_SAUDE5UNID_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIGILANCIA_EM_SAUDE5UNID_46.addFeatures(features_VIGILANCIA_EM_SAUDE5UNID_46);
var lyr_VIGILANCIA_EM_SAUDE5UNID_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIGILANCIA_EM_SAUDE5UNID_46, 
                style: style_VIGILANCIA_EM_SAUDE5UNID_46,
                popuplayertitle: 'VIGILANCIA_EM_SAUDE (5 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/VIGILANCIA_EM_SAUDE5UNID_46.png" /> VIGILANCIA_EM_SAUDE (5 UNID.)'
            });
var format_UNIDADE_DE_URGENCIA_E_EMERGENCIA8UNID_47 = new ol.format.GeoJSON();
var features_UNIDADE_DE_URGENCIA_E_EMERGENCIA8UNID_47 = format_UNIDADE_DE_URGENCIA_E_EMERGENCIA8UNID_47.readFeatures(json_UNIDADE_DE_URGENCIA_E_EMERGENCIA8UNID_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UNIDADE_DE_URGENCIA_E_EMERGENCIA8UNID_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UNIDADE_DE_URGENCIA_E_EMERGENCIA8UNID_47.addFeatures(features_UNIDADE_DE_URGENCIA_E_EMERGENCIA8UNID_47);
var lyr_UNIDADE_DE_URGENCIA_E_EMERGENCIA8UNID_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UNIDADE_DE_URGENCIA_E_EMERGENCIA8UNID_47, 
                style: style_UNIDADE_DE_URGENCIA_E_EMERGENCIA8UNID_47,
                popuplayertitle: 'UNIDADE_DE_URGENCIA_E_EMERGENCIA (8 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/UNIDADE_DE_URGENCIA_E_EMERGENCIA8UNID_47.png" /> UNIDADE_DE_URGENCIA_E_EMERGENCIA (8 UNID.)'
            });
var format_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO14UNID_48 = new ol.format.GeoJSON();
var features_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO14UNID_48 = format_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO14UNID_48.readFeatures(json_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO14UNID_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO14UNID_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO14UNID_48.addFeatures(features_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO14UNID_48);
var lyr_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO14UNID_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO14UNID_48, 
                style: style_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO14UNID_48,
                popuplayertitle: 'SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO (14 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO14UNID_48.png" /> SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO (14 UNID.)'
            });
var format_GESTAO_ADMINISTRATIVO3UNID_49 = new ol.format.GeoJSON();
var features_GESTAO_ADMINISTRATIVO3UNID_49 = format_GESTAO_ADMINISTRATIVO3UNID_49.readFeatures(json_GESTAO_ADMINISTRATIVO3UNID_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GESTAO_ADMINISTRATIVO3UNID_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GESTAO_ADMINISTRATIVO3UNID_49.addFeatures(features_GESTAO_ADMINISTRATIVO3UNID_49);
var lyr_GESTAO_ADMINISTRATIVO3UNID_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GESTAO_ADMINISTRATIVO3UNID_49, 
                style: style_GESTAO_ADMINISTRATIVO3UNID_49,
                popuplayertitle: 'GESTAO_ADMINISTRATIVO (3 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/GESTAO_ADMINISTRATIVO3UNID_49.png" /> GESTAO_ADMINISTRATIVO (3 UNID.)'
            });
var format_ATENCAO_PRIMARIA24UNID_50 = new ol.format.GeoJSON();
var features_ATENCAO_PRIMARIA24UNID_50 = format_ATENCAO_PRIMARIA24UNID_50.readFeatures(json_ATENCAO_PRIMARIA24UNID_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ATENCAO_PRIMARIA24UNID_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATENCAO_PRIMARIA24UNID_50.addFeatures(features_ATENCAO_PRIMARIA24UNID_50);
var lyr_ATENCAO_PRIMARIA24UNID_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATENCAO_PRIMARIA24UNID_50, 
                style: style_ATENCAO_PRIMARIA24UNID_50,
                popuplayertitle: 'ATENCAO_PRIMARIA (24 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/ATENCAO_PRIMARIA24UNID_50.png" /> ATENCAO_PRIMARIA (24 UNID.)'
            });
var format_TEATRO2UNID_51 = new ol.format.GeoJSON();
var features_TEATRO2UNID_51 = format_TEATRO2UNID_51.readFeatures(json_TEATRO2UNID_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TEATRO2UNID_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEATRO2UNID_51.addFeatures(features_TEATRO2UNID_51);
var lyr_TEATRO2UNID_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEATRO2UNID_51, 
                style: style_TEATRO2UNID_51,
                popuplayertitle: 'TEATRO (2 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/TEATRO2UNID_51.png" /> TEATRO (2 UNID.)'
            });
var format_SECRETARIA1UNID_52 = new ol.format.GeoJSON();
var features_SECRETARIA1UNID_52 = format_SECRETARIA1UNID_52.readFeatures(json_SECRETARIA1UNID_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SECRETARIA1UNID_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SECRETARIA1UNID_52.addFeatures(features_SECRETARIA1UNID_52);
var lyr_SECRETARIA1UNID_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SECRETARIA1UNID_52, 
                style: style_SECRETARIA1UNID_52,
                popuplayertitle: 'SECRETARIA (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/SECRETARIA1UNID_52.png" /> SECRETARIA (1 UNID.)'
            });
var format_QUADRA3UNID_53 = new ol.format.GeoJSON();
var features_QUADRA3UNID_53 = format_QUADRA3UNID_53.readFeatures(json_QUADRA3UNID_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_QUADRA3UNID_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QUADRA3UNID_53.addFeatures(features_QUADRA3UNID_53);
var lyr_QUADRA3UNID_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QUADRA3UNID_53, 
                style: style_QUADRA3UNID_53,
                popuplayertitle: 'QUADRA (3 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/QUADRA3UNID_53.png" /> QUADRA (3 UNID.)'
            });
var format_PRACA2UNID_54 = new ol.format.GeoJSON();
var features_PRACA2UNID_54 = format_PRACA2UNID_54.readFeatures(json_PRACA2UNID_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PRACA2UNID_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRACA2UNID_54.addFeatures(features_PRACA2UNID_54);
var lyr_PRACA2UNID_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRACA2UNID_54, 
                style: style_PRACA2UNID_54,
                popuplayertitle: 'PRACA (2 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/PRACA2UNID_54.png" /> PRACA (2 UNID.)'
            });
var format_PISTA1UNID_55 = new ol.format.GeoJSON();
var features_PISTA1UNID_55 = format_PISTA1UNID_55.readFeatures(json_PISTA1UNID_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PISTA1UNID_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PISTA1UNID_55.addFeatures(features_PISTA1UNID_55);
var lyr_PISTA1UNID_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PISTA1UNID_55, 
                style: style_PISTA1UNID_55,
                popuplayertitle: 'PISTA (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/PISTA1UNID_55.png" /> PISTA (1 UNID.)'
            });
var format_PISCINA1UNID_56 = new ol.format.GeoJSON();
var features_PISCINA1UNID_56 = format_PISCINA1UNID_56.readFeatures(json_PISCINA1UNID_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PISCINA1UNID_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PISCINA1UNID_56.addFeatures(features_PISCINA1UNID_56);
var lyr_PISCINA1UNID_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PISCINA1UNID_56, 
                style: style_PISCINA1UNID_56,
                popuplayertitle: 'PISCINA (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/PISCINA1UNID_56.png" /> PISCINA (1 UNID.)'
            });
var format_PINACOTECA1UNID_57 = new ol.format.GeoJSON();
var features_PINACOTECA1UNID_57 = format_PINACOTECA1UNID_57.readFeatures(json_PINACOTECA1UNID_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PINACOTECA1UNID_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PINACOTECA1UNID_57.addFeatures(features_PINACOTECA1UNID_57);
var lyr_PINACOTECA1UNID_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PINACOTECA1UNID_57, 
                style: style_PINACOTECA1UNID_57,
                popuplayertitle: 'PINACOTECA (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/PINACOTECA1UNID_57.png" /> PINACOTECA (1 UNID.)'
            });
var format_PAVILHAO1UNID_58 = new ol.format.GeoJSON();
var features_PAVILHAO1UNID_58 = format_PAVILHAO1UNID_58.readFeatures(json_PAVILHAO1UNID_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PAVILHAO1UNID_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAVILHAO1UNID_58.addFeatures(features_PAVILHAO1UNID_58);
var lyr_PAVILHAO1UNID_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAVILHAO1UNID_58, 
                style: style_PAVILHAO1UNID_58,
                popuplayertitle: 'PAVILHAO (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/PAVILHAO1UNID_58.png" /> PAVILHAO (1 UNID.)'
            });
var format_PARQUE2UNID_59 = new ol.format.GeoJSON();
var features_PARQUE2UNID_59 = format_PARQUE2UNID_59.readFeatures(json_PARQUE2UNID_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE2UNID_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE2UNID_59.addFeatures(features_PARQUE2UNID_59);
var lyr_PARQUE2UNID_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE2UNID_59, 
                style: style_PARQUE2UNID_59,
                popuplayertitle: 'PARQUE (2 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/PARQUE2UNID_59.png" /> PARQUE (2 UNID.)'
            });
var format_MUSEU2UNID_60 = new ol.format.GeoJSON();
var features_MUSEU2UNID_60 = format_MUSEU2UNID_60.readFeatures(json_MUSEU2UNID_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MUSEU2UNID_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUSEU2UNID_60.addFeatures(features_MUSEU2UNID_60);
var lyr_MUSEU2UNID_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUSEU2UNID_60, 
                style: style_MUSEU2UNID_60,
                popuplayertitle: 'MUSEU (2 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/MUSEU2UNID_60.png" /> MUSEU (2 UNID.)'
            });
var format_GINASIO5UNID_61 = new ol.format.GeoJSON();
var features_GINASIO5UNID_61 = format_GINASIO5UNID_61.readFeatures(json_GINASIO5UNID_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GINASIO5UNID_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GINASIO5UNID_61.addFeatures(features_GINASIO5UNID_61);
var lyr_GINASIO5UNID_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GINASIO5UNID_61, 
                style: style_GINASIO5UNID_61,
                popuplayertitle: 'GINASIO (5 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/GINASIO5UNID_61.png" /> GINASIO (5 UNID.)'
            });
var format_ESTADIO1UNID_62 = new ol.format.GeoJSON();
var features_ESTADIO1UNID_62 = format_ESTADIO1UNID_62.readFeatures(json_ESTADIO1UNID_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ESTADIO1UNID_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTADIO1UNID_62.addFeatures(features_ESTADIO1UNID_62);
var lyr_ESTADIO1UNID_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTADIO1UNID_62, 
                style: style_ESTADIO1UNID_62,
                popuplayertitle: 'ESTADIO (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/ESTADIO1UNID_62.png" /> ESTADIO (1 UNID.)'
            });
var format_CONJUNTO4UNID_63 = new ol.format.GeoJSON();
var features_CONJUNTO4UNID_63 = format_CONJUNTO4UNID_63.readFeatures(json_CONJUNTO4UNID_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CONJUNTO4UNID_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONJUNTO4UNID_63.addFeatures(features_CONJUNTO4UNID_63);
var lyr_CONJUNTO4UNID_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONJUNTO4UNID_63, 
                style: style_CONJUNTO4UNID_63,
                popuplayertitle: 'CONJUNTO (4 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/CONJUNTO4UNID_63.png" /> CONJUNTO (4 UNID.)'
            });
var format_CEPEL12UNID_64 = new ol.format.GeoJSON();
var features_CEPEL12UNID_64 = format_CEPEL12UNID_64.readFeatures(json_CEPEL12UNID_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CEPEL12UNID_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CEPEL12UNID_64.addFeatures(features_CEPEL12UNID_64);
var lyr_CEPEL12UNID_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CEPEL12UNID_64, 
                style: style_CEPEL12UNID_64,
                popuplayertitle: 'CEPEL (12 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/CEPEL12UNID_64.png" /> CEPEL (12 UNID.)'
            });
var format_CENTRO4UNID_65 = new ol.format.GeoJSON();
var features_CENTRO4UNID_65 = format_CENTRO4UNID_65.readFeatures(json_CENTRO4UNID_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CENTRO4UNID_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTRO4UNID_65.addFeatures(features_CENTRO4UNID_65);
var lyr_CENTRO4UNID_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTRO4UNID_65, 
                style: style_CENTRO4UNID_65,
                popuplayertitle: 'CENTRO (4 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/CENTRO4UNID_65.png" /> CENTRO (4 UNID.)'
            });
var format_CASA1UNID_66 = new ol.format.GeoJSON();
var features_CASA1UNID_66 = format_CASA1UNID_66.readFeatures(json_CASA1UNID_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CASA1UNID_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASA1UNID_66.addFeatures(features_CASA1UNID_66);
var lyr_CASA1UNID_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASA1UNID_66, 
                style: style_CASA1UNID_66,
                popuplayertitle: 'CASA (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/CASA1UNID_66.png" /> CASA (1 UNID.)'
            });
var format_CAMPO26UNID_67 = new ol.format.GeoJSON();
var features_CAMPO26UNID_67 = format_CAMPO26UNID_67.readFeatures(json_CAMPO26UNID_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CAMPO26UNID_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAMPO26UNID_67.addFeatures(features_CAMPO26UNID_67);
var lyr_CAMPO26UNID_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAMPO26UNID_67, 
                style: style_CAMPO26UNID_67,
                popuplayertitle: 'CAMPO (26 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/CAMPO26UNID_67.png" /> CAMPO (26 UNID.)'
            });
var format_BIBLIOTECA1UNID_68 = new ol.format.GeoJSON();
var features_BIBLIOTECA1UNID_68 = format_BIBLIOTECA1UNID_68.readFeatures(json_BIBLIOTECA1UNID_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BIBLIOTECA1UNID_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BIBLIOTECA1UNID_68.addFeatures(features_BIBLIOTECA1UNID_68);
var lyr_BIBLIOTECA1UNID_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BIBLIOTECA1UNID_68, 
                style: style_BIBLIOTECA1UNID_68,
                popuplayertitle: 'BIBLIOTECA (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/BIBLIOTECA1UNID_68.png" /> BIBLIOTECA (1 UNID.)'
            });
var format_ARENA3UNID_69 = new ol.format.GeoJSON();
var features_ARENA3UNID_69 = format_ARENA3UNID_69.readFeatures(json_ARENA3UNID_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARENA3UNID_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARENA3UNID_69.addFeatures(features_ARENA3UNID_69);
var lyr_ARENA3UNID_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARENA3UNID_69, 
                style: style_ARENA3UNID_69,
                popuplayertitle: 'ARENA (3 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/ARENA3UNID_69.png" /> ARENA (3 UNID.)'
            });
var format_UNIVERSIDADE_ABERTA_DO_BRASIL1UNID_70 = new ol.format.GeoJSON();
var features_UNIVERSIDADE_ABERTA_DO_BRASIL1UNID_70 = format_UNIVERSIDADE_ABERTA_DO_BRASIL1UNID_70.readFeatures(json_UNIVERSIDADE_ABERTA_DO_BRASIL1UNID_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UNIVERSIDADE_ABERTA_DO_BRASIL1UNID_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UNIVERSIDADE_ABERTA_DO_BRASIL1UNID_70.addFeatures(features_UNIVERSIDADE_ABERTA_DO_BRASIL1UNID_70);
var lyr_UNIVERSIDADE_ABERTA_DO_BRASIL1UNID_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UNIVERSIDADE_ABERTA_DO_BRASIL1UNID_70, 
                style: style_UNIVERSIDADE_ABERTA_DO_BRASIL1UNID_70,
                popuplayertitle: 'UNIVERSIDADE_ABERTA_DO_BRASIL (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/UNIVERSIDADE_ABERTA_DO_BRASIL1UNID_70.png" /> UNIVERSIDADE_ABERTA_DO_BRASIL (1 UNID.)'
            });
var format_SETOR_DE_MERENDA1UNID_71 = new ol.format.GeoJSON();
var features_SETOR_DE_MERENDA1UNID_71 = format_SETOR_DE_MERENDA1UNID_71.readFeatures(json_SETOR_DE_MERENDA1UNID_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SETOR_DE_MERENDA1UNID_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SETOR_DE_MERENDA1UNID_71.addFeatures(features_SETOR_DE_MERENDA1UNID_71);
var lyr_SETOR_DE_MERENDA1UNID_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SETOR_DE_MERENDA1UNID_71, 
                style: style_SETOR_DE_MERENDA1UNID_71,
                popuplayertitle: 'SETOR_DE_MERENDA (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/SETOR_DE_MERENDA1UNID_71.png" /> SETOR_DE_MERENDA (1 UNID.)'
            });
var format_SECRETARIA_DE_EDUCACAO1UNID_72 = new ol.format.GeoJSON();
var features_SECRETARIA_DE_EDUCACAO1UNID_72 = format_SECRETARIA_DE_EDUCACAO1UNID_72.readFeatures(json_SECRETARIA_DE_EDUCACAO1UNID_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SECRETARIA_DE_EDUCACAO1UNID_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SECRETARIA_DE_EDUCACAO1UNID_72.addFeatures(features_SECRETARIA_DE_EDUCACAO1UNID_72);
var lyr_SECRETARIA_DE_EDUCACAO1UNID_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SECRETARIA_DE_EDUCACAO1UNID_72, 
                style: style_SECRETARIA_DE_EDUCACAO1UNID_72,
                popuplayertitle: 'SECRETARIA_DE_EDUCACAO (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/SECRETARIA_DE_EDUCACAO1UNID_72.png" /> SECRETARIA_DE_EDUCACAO (1 UNID.)'
            });
var format_ESPACO_DE_DIFUSAO_CIENTIFICA1UNID_73 = new ol.format.GeoJSON();
var features_ESPACO_DE_DIFUSAO_CIENTIFICA1UNID_73 = format_ESPACO_DE_DIFUSAO_CIENTIFICA1UNID_73.readFeatures(json_ESPACO_DE_DIFUSAO_CIENTIFICA1UNID_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ESPACO_DE_DIFUSAO_CIENTIFICA1UNID_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESPACO_DE_DIFUSAO_CIENTIFICA1UNID_73.addFeatures(features_ESPACO_DE_DIFUSAO_CIENTIFICA1UNID_73);
var lyr_ESPACO_DE_DIFUSAO_CIENTIFICA1UNID_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESPACO_DE_DIFUSAO_CIENTIFICA1UNID_73, 
                style: style_ESPACO_DE_DIFUSAO_CIENTIFICA1UNID_73,
                popuplayertitle: 'ESPACO_DE_DIFUSAO_CIENTIFICA (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/ESPACO_DE_DIFUSAO_CIENTIFICA1UNID_73.png" /> ESPACO_DE_DIFUSAO_CIENTIFICA (1 UNID.)'
            });
var format_ENSINO_FUNDAMENTAL3UNID_74 = new ol.format.GeoJSON();
var features_ENSINO_FUNDAMENTAL3UNID_74 = format_ENSINO_FUNDAMENTAL3UNID_74.readFeatures(json_ENSINO_FUNDAMENTAL3UNID_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ENSINO_FUNDAMENTAL3UNID_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENSINO_FUNDAMENTAL3UNID_74.addFeatures(features_ENSINO_FUNDAMENTAL3UNID_74);
var lyr_ENSINO_FUNDAMENTAL3UNID_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ENSINO_FUNDAMENTAL3UNID_74, 
                style: style_ENSINO_FUNDAMENTAL3UNID_74,
                popuplayertitle: 'ENSINO_FUNDAMENTAL (3 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/ENSINO_FUNDAMENTAL3UNID_74.png" /> ENSINO_FUNDAMENTAL (3 UNID.)'
            });
var format_EJA3UNID_75 = new ol.format.GeoJSON();
var features_EJA3UNID_75 = format_EJA3UNID_75.readFeatures(json_EJA3UNID_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EJA3UNID_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EJA3UNID_75.addFeatures(features_EJA3UNID_75);
var lyr_EJA3UNID_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EJA3UNID_75, 
                style: style_EJA3UNID_75,
                popuplayertitle: 'EJA (3 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/EJA3UNID_75.png" /> EJA (3 UNID.)'
            });
var format_ED_INFANTIL_ENS_FUNDAMENTAL39UNID_76 = new ol.format.GeoJSON();
var features_ED_INFANTIL_ENS_FUNDAMENTAL39UNID_76 = format_ED_INFANTIL_ENS_FUNDAMENTAL39UNID_76.readFeatures(json_ED_INFANTIL_ENS_FUNDAMENTAL39UNID_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ED_INFANTIL_ENS_FUNDAMENTAL39UNID_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ED_INFANTIL_ENS_FUNDAMENTAL39UNID_76.addFeatures(features_ED_INFANTIL_ENS_FUNDAMENTAL39UNID_76);
var lyr_ED_INFANTIL_ENS_FUNDAMENTAL39UNID_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ED_INFANTIL_ENS_FUNDAMENTAL39UNID_76, 
                style: style_ED_INFANTIL_ENS_FUNDAMENTAL39UNID_76,
                popuplayertitle: 'ED_INFANTIL_ENS_FUNDAMENTAL (39 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/ED_INFANTIL_ENS_FUNDAMENTAL39UNID_76.png" /> ED_INFANTIL_ENS_FUNDAMENTAL (39 UNID.)'
            });
var format_EDUCACAO_INFANTIL9UNID_77 = new ol.format.GeoJSON();
var features_EDUCACAO_INFANTIL9UNID_77 = format_EDUCACAO_INFANTIL9UNID_77.readFeatures(json_EDUCACAO_INFANTIL9UNID_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EDUCACAO_INFANTIL9UNID_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDUCACAO_INFANTIL9UNID_77.addFeatures(features_EDUCACAO_INFANTIL9UNID_77);
var lyr_EDUCACAO_INFANTIL9UNID_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EDUCACAO_INFANTIL9UNID_77, 
                style: style_EDUCACAO_INFANTIL9UNID_77,
                popuplayertitle: 'EDUCACAO_INFANTIL (9 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/EDUCACAO_INFANTIL9UNID_77.png" /> EDUCACAO_INFANTIL (9 UNID.)'
            });
var format_CRECHE_PRE_ESCOLA45UNID_78 = new ol.format.GeoJSON();
var features_CRECHE_PRE_ESCOLA45UNID_78 = format_CRECHE_PRE_ESCOLA45UNID_78.readFeatures(json_CRECHE_PRE_ESCOLA45UNID_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CRECHE_PRE_ESCOLA45UNID_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRECHE_PRE_ESCOLA45UNID_78.addFeatures(features_CRECHE_PRE_ESCOLA45UNID_78);
var lyr_CRECHE_PRE_ESCOLA45UNID_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRECHE_PRE_ESCOLA45UNID_78, 
                style: style_CRECHE_PRE_ESCOLA45UNID_78,
                popuplayertitle: 'CRECHE_PRE_ESCOLA (45 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/CRECHE_PRE_ESCOLA45UNID_78.png" /> CRECHE_PRE_ESCOLA (45 UNID.)'
            });
var format_CRECHE35UNID_79 = new ol.format.GeoJSON();
var features_CRECHE35UNID_79 = format_CRECHE35UNID_79.readFeatures(json_CRECHE35UNID_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CRECHE35UNID_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRECHE35UNID_79.addFeatures(features_CRECHE35UNID_79);
var lyr_CRECHE35UNID_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRECHE35UNID_79, 
                style: style_CRECHE35UNID_79,
                popuplayertitle: 'CRECHE (35 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/CRECHE35UNID_79.png" /> CRECHE (35 UNID.)'
            });
var format_CENTRO_DE_EDUCACAO_INTEGRADA1UNID_80 = new ol.format.GeoJSON();
var features_CENTRO_DE_EDUCACAO_INTEGRADA1UNID_80 = format_CENTRO_DE_EDUCACAO_INTEGRADA1UNID_80.readFeatures(json_CENTRO_DE_EDUCACAO_INTEGRADA1UNID_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CENTRO_DE_EDUCACAO_INTEGRADA1UNID_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTRO_DE_EDUCACAO_INTEGRADA1UNID_80.addFeatures(features_CENTRO_DE_EDUCACAO_INTEGRADA1UNID_80);
var lyr_CENTRO_DE_EDUCACAO_INTEGRADA1UNID_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTRO_DE_EDUCACAO_INTEGRADA1UNID_80, 
                style: style_CENTRO_DE_EDUCACAO_INTEGRADA1UNID_80,
                popuplayertitle: 'CENTRO_DE_EDUCACAO_INTEGRADA (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/CENTRO_DE_EDUCACAO_INTEGRADA1UNID_80.png" /> CENTRO_DE_EDUCACAO_INTEGRADA (1 UNID.)'
            });
var format_ALMOCHARIFADO_EDUCACAO1UNID_81 = new ol.format.GeoJSON();
var features_ALMOCHARIFADO_EDUCACAO1UNID_81 = format_ALMOCHARIFADO_EDUCACAO1UNID_81.readFeatures(json_ALMOCHARIFADO_EDUCACAO1UNID_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ALMOCHARIFADO_EDUCACAO1UNID_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALMOCHARIFADO_EDUCACAO1UNID_81.addFeatures(features_ALMOCHARIFADO_EDUCACAO1UNID_81);
var lyr_ALMOCHARIFADO_EDUCACAO1UNID_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALMOCHARIFADO_EDUCACAO1UNID_81, 
                style: style_ALMOCHARIFADO_EDUCACAO1UNID_81,
                popuplayertitle: 'ALMOCHARIFADO_EDUCACAO (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/ALMOCHARIFADO_EDUCACAO1UNID_81.png" /> ALMOCHARIFADO_EDUCACAO (1 UNID.)'
            });
var format_ALFABETIZACAO_DE_JOVENS_E_ADULTOS15UNID_82 = new ol.format.GeoJSON();
var features_ALFABETIZACAO_DE_JOVENS_E_ADULTOS15UNID_82 = format_ALFABETIZACAO_DE_JOVENS_E_ADULTOS15UNID_82.readFeatures(json_ALFABETIZACAO_DE_JOVENS_E_ADULTOS15UNID_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ALFABETIZACAO_DE_JOVENS_E_ADULTOS15UNID_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALFABETIZACAO_DE_JOVENS_E_ADULTOS15UNID_82.addFeatures(features_ALFABETIZACAO_DE_JOVENS_E_ADULTOS15UNID_82);
var lyr_ALFABETIZACAO_DE_JOVENS_E_ADULTOS15UNID_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALFABETIZACAO_DE_JOVENS_E_ADULTOS15UNID_82, 
                style: style_ALFABETIZACAO_DE_JOVENS_E_ADULTOS15UNID_82,
                popuplayertitle: 'ALFABETIZACAO_DE_JOVENS_E_ADULTOS (15 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/ALFABETIZACAO_DE_JOVENS_E_ADULTOS15UNID_82.png" /> ALFABETIZACAO_DE_JOVENS_E_ADULTOS (15 UNID.)'
            });
var format_RODOVIAS_MUNICIPAIS_83 = new ol.format.GeoJSON();
var features_RODOVIAS_MUNICIPAIS_83 = format_RODOVIAS_MUNICIPAIS_83.readFeatures(json_RODOVIAS_MUNICIPAIS_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RODOVIAS_MUNICIPAIS_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RODOVIAS_MUNICIPAIS_83.addFeatures(features_RODOVIAS_MUNICIPAIS_83);
var lyr_RODOVIAS_MUNICIPAIS_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RODOVIAS_MUNICIPAIS_83, 
                style: style_RODOVIAS_MUNICIPAIS_83,
                popuplayertitle: 'RODOVIAS_MUNICIPAIS',
                interactive: true,
                title: '<img src="styles/legend/RODOVIAS_MUNICIPAIS_83.png" /> RODOVIAS_MUNICIPAIS'
            });
var format_RODOVIAS_ESTADUAIS_84 = new ol.format.GeoJSON();
var features_RODOVIAS_ESTADUAIS_84 = format_RODOVIAS_ESTADUAIS_84.readFeatures(json_RODOVIAS_ESTADUAIS_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RODOVIAS_ESTADUAIS_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RODOVIAS_ESTADUAIS_84.addFeatures(features_RODOVIAS_ESTADUAIS_84);
var lyr_RODOVIAS_ESTADUAIS_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RODOVIAS_ESTADUAIS_84, 
                style: style_RODOVIAS_ESTADUAIS_84,
                popuplayertitle: 'RODOVIAS_ESTADUAIS',
                interactive: true,
                title: '<img src="styles/legend/RODOVIAS_ESTADUAIS_84.png" /> RODOVIAS_ESTADUAIS'
            });
var format_ESTRADAS_RURAIS_MUNICIPAIS_85 = new ol.format.GeoJSON();
var features_ESTRADAS_RURAIS_MUNICIPAIS_85 = format_ESTRADAS_RURAIS_MUNICIPAIS_85.readFeatures(json_ESTRADAS_RURAIS_MUNICIPAIS_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ESTRADAS_RURAIS_MUNICIPAIS_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTRADAS_RURAIS_MUNICIPAIS_85.addFeatures(features_ESTRADAS_RURAIS_MUNICIPAIS_85);
var lyr_ESTRADAS_RURAIS_MUNICIPAIS_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTRADAS_RURAIS_MUNICIPAIS_85, 
                style: style_ESTRADAS_RURAIS_MUNICIPAIS_85,
                popuplayertitle: 'ESTRADAS_RURAIS_MUNICIPAIS',
                interactive: true,
                title: '<img src="styles/legend/ESTRADAS_RURAIS_MUNICIPAIS_85.png" /> ESTRADAS_RURAIS_MUNICIPAIS'
            });
var format_IMOVEL_PUBLICO125UNID_86 = new ol.format.GeoJSON();
var features_IMOVEL_PUBLICO125UNID_86 = format_IMOVEL_PUBLICO125UNID_86.readFeatures(json_IMOVEL_PUBLICO125UNID_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IMOVEL_PUBLICO125UNID_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMOVEL_PUBLICO125UNID_86.addFeatures(features_IMOVEL_PUBLICO125UNID_86);
var lyr_IMOVEL_PUBLICO125UNID_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IMOVEL_PUBLICO125UNID_86, 
                style: style_IMOVEL_PUBLICO125UNID_86,
                popuplayertitle: 'IMOVEL_PUBLICO (125 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/IMOVEL_PUBLICO125UNID_86.png" /> IMOVEL_PUBLICO (125 UNID.)'
            });
var format_IMOVEL_PRIVADO_URBANO99UNID_87 = new ol.format.GeoJSON();
var features_IMOVEL_PRIVADO_URBANO99UNID_87 = format_IMOVEL_PRIVADO_URBANO99UNID_87.readFeatures(json_IMOVEL_PRIVADO_URBANO99UNID_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IMOVEL_PRIVADO_URBANO99UNID_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMOVEL_PRIVADO_URBANO99UNID_87.addFeatures(features_IMOVEL_PRIVADO_URBANO99UNID_87);
var lyr_IMOVEL_PRIVADO_URBANO99UNID_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IMOVEL_PRIVADO_URBANO99UNID_87, 
                style: style_IMOVEL_PRIVADO_URBANO99UNID_87,
                popuplayertitle: 'IMOVEL_PRIVADO_URBANO (99 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/IMOVEL_PRIVADO_URBANO99UNID_87.png" /> IMOVEL_PRIVADO_URBANO (99 UNID.)'
            });
var format_IMOVEL_PRIVADO_URBANO99UNID_88 = new ol.format.GeoJSON();
var features_IMOVEL_PRIVADO_URBANO99UNID_88 = format_IMOVEL_PRIVADO_URBANO99UNID_88.readFeatures(json_IMOVEL_PRIVADO_URBANO99UNID_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IMOVEL_PRIVADO_URBANO99UNID_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMOVEL_PRIVADO_URBANO99UNID_88.addFeatures(features_IMOVEL_PRIVADO_URBANO99UNID_88);
var lyr_IMOVEL_PRIVADO_URBANO99UNID_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IMOVEL_PRIVADO_URBANO99UNID_88, 
                style: style_IMOVEL_PRIVADO_URBANO99UNID_88,
                popuplayertitle: 'IMOVEL_PRIVADO_URBANO (99 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/IMOVEL_PRIVADO_URBANO99UNID_88.png" /> IMOVEL_PRIVADO_URBANO (99 UNID.)'
            });
var format_IMOVEL_PRIVADO_RURAL1UNID_89 = new ol.format.GeoJSON();
var features_IMOVEL_PRIVADO_RURAL1UNID_89 = format_IMOVEL_PRIVADO_RURAL1UNID_89.readFeatures(json_IMOVEL_PRIVADO_RURAL1UNID_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IMOVEL_PRIVADO_RURAL1UNID_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMOVEL_PRIVADO_RURAL1UNID_89.addFeatures(features_IMOVEL_PRIVADO_RURAL1UNID_89);
var lyr_IMOVEL_PRIVADO_RURAL1UNID_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IMOVEL_PRIVADO_RURAL1UNID_89, 
                style: style_IMOVEL_PRIVADO_RURAL1UNID_89,
                popuplayertitle: 'IMOVEL_PRIVADO_RURAL (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/IMOVEL_PRIVADO_RURAL1UNID_89.png" /> IMOVEL_PRIVADO_RURAL (1 UNID.)'
            });
var format_IMOVEL_PRIVADO_RURAL1UNID_90 = new ol.format.GeoJSON();
var features_IMOVEL_PRIVADO_RURAL1UNID_90 = format_IMOVEL_PRIVADO_RURAL1UNID_90.readFeatures(json_IMOVEL_PRIVADO_RURAL1UNID_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IMOVEL_PRIVADO_RURAL1UNID_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMOVEL_PRIVADO_RURAL1UNID_90.addFeatures(features_IMOVEL_PRIVADO_RURAL1UNID_90);
var lyr_IMOVEL_PRIVADO_RURAL1UNID_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IMOVEL_PRIVADO_RURAL1UNID_90, 
                style: style_IMOVEL_PRIVADO_RURAL1UNID_90,
                popuplayertitle: 'IMOVEL_PRIVADO_RURAL (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/IMOVEL_PRIVADO_RURAL1UNID_90.png" /> IMOVEL_PRIVADO_RURAL (1 UNID.)'
            });
var format_PARQUE_DOS_TRABALHADORES_91 = new ol.format.GeoJSON();
var features_PARQUE_DOS_TRABALHADORES_91 = format_PARQUE_DOS_TRABALHADORES_91.readFeatures(json_PARQUE_DOS_TRABALHADORES_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_DOS_TRABALHADORES_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_DOS_TRABALHADORES_91.addFeatures(features_PARQUE_DOS_TRABALHADORES_91);
var lyr_PARQUE_DOS_TRABALHADORES_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_DOS_TRABALHADORES_91, 
                style: style_PARQUE_DOS_TRABALHADORES_91,
                popuplayertitle: 'PARQUE_DOS_TRABALHADORES',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_DOS_TRABALHADORES_91.png" /> PARQUE_DOS_TRABALHADORES'
            });
var format_PARQUE_DOS_TRABALHADORES_92 = new ol.format.GeoJSON();
var features_PARQUE_DOS_TRABALHADORES_92 = format_PARQUE_DOS_TRABALHADORES_92.readFeatures(json_PARQUE_DOS_TRABALHADORES_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_DOS_TRABALHADORES_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_DOS_TRABALHADORES_92.addFeatures(features_PARQUE_DOS_TRABALHADORES_92);
var lyr_PARQUE_DOS_TRABALHADORES_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_DOS_TRABALHADORES_92, 
                style: style_PARQUE_DOS_TRABALHADORES_92,
                popuplayertitle: 'PARQUE_DOS_TRABALHADORES',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_DOS_TRABALHADORES_92.png" /> PARQUE_DOS_TRABALHADORES'
            });
var format_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_93 = new ol.format.GeoJSON();
var features_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_93 = format_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_93.readFeatures(json_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_93.addFeatures(features_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_93);
var lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_93, 
                style: style_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_93,
                popuplayertitle: 'PARQUE_DE_EXPOSICOES_FERNANDO_COSTA',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_93.png" /> PARQUE_DE_EXPOSICOES_FERNANDO_COSTA'
            });
var format_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_94 = new ol.format.GeoJSON();
var features_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_94 = format_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_94.readFeatures(json_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_94.addFeatures(features_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_94);
var lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_94, 
                style: style_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_94,
                popuplayertitle: 'PARQUE_DE_EXPOSICOES_FERNANDO_COSTA',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_94.png" /> PARQUE_DE_EXPOSICOES_FERNANDO_COSTA'
            });
var format_PARQUE_CAXAMBU_95 = new ol.format.GeoJSON();
var features_PARQUE_CAXAMBU_95 = format_PARQUE_CAXAMBU_95.readFeatures(json_PARQUE_CAXAMBU_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_CAXAMBU_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_CAXAMBU_95.addFeatures(features_PARQUE_CAXAMBU_95);
var lyr_PARQUE_CAXAMBU_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_CAXAMBU_95, 
                style: style_PARQUE_CAXAMBU_95,
                popuplayertitle: 'PARQUE_CAXAMBU',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_CAXAMBU_95.png" /> PARQUE_CAXAMBU'
            });
var format_PARQUE_CAXAMBU_96 = new ol.format.GeoJSON();
var features_PARQUE_CAXAMBU_96 = format_PARQUE_CAXAMBU_96.readFeatures(json_PARQUE_CAXAMBU_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_CAXAMBU_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_CAXAMBU_96.addFeatures(features_PARQUE_CAXAMBU_96);
var lyr_PARQUE_CAXAMBU_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_CAXAMBU_96, 
                style: style_PARQUE_CAXAMBU_96,
                popuplayertitle: 'PARQUE_CAXAMBU',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_CAXAMBU_96.png" /> PARQUE_CAXAMBU'
            });
var format_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_97 = new ol.format.GeoJSON();
var features_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_97 = format_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_97.readFeatures(json_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_97.addFeatures(features_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_97);
var lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_97, 
                style: style_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_97,
                popuplayertitle: 'PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_97.png" /> PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO'
            });
var format_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_98 = new ol.format.GeoJSON();
var features_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_98 = format_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_98.readFeatures(json_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_98.addFeatures(features_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_98);
var lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_98, 
                style: style_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_98,
                popuplayertitle: 'PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_98.png" /> PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO'
            });
var format_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_99 = new ol.format.GeoJSON();
var features_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_99 = format_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_99.readFeatures(json_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_99.addFeatures(features_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_99);
var lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_99, 
                style: style_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_99,
                popuplayertitle: 'PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_99.png" /> PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA'
            });
var format_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_100 = new ol.format.GeoJSON();
var features_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_100 = format_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_100.readFeatures(json_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_100.addFeatures(features_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_100);
var lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_100, 
                style: style_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_100,
                popuplayertitle: 'PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_100.png" /> PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA'
            });
var format_JARDIM_ZOOBOTANICO_101 = new ol.format.GeoJSON();
var features_JARDIM_ZOOBOTANICO_101 = format_JARDIM_ZOOBOTANICO_101.readFeatures(json_JARDIM_ZOOBOTANICO_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JARDIM_ZOOBOTANICO_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARDIM_ZOOBOTANICO_101.addFeatures(features_JARDIM_ZOOBOTANICO_101);
var lyr_JARDIM_ZOOBOTANICO_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARDIM_ZOOBOTANICO_101, 
                style: style_JARDIM_ZOOBOTANICO_101,
                popuplayertitle: 'JARDIM_ZOOBOTANICO',
                interactive: true,
                title: '<img src="styles/legend/JARDIM_ZOOBOTANICO_101.png" /> JARDIM_ZOOBOTANICO'
            });
var format_JARDIM_ZOOBOTANICO_102 = new ol.format.GeoJSON();
var features_JARDIM_ZOOBOTANICO_102 = format_JARDIM_ZOOBOTANICO_102.readFeatures(json_JARDIM_ZOOBOTANICO_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JARDIM_ZOOBOTANICO_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARDIM_ZOOBOTANICO_102.addFeatures(features_JARDIM_ZOOBOTANICO_102);
var lyr_JARDIM_ZOOBOTANICO_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARDIM_ZOOBOTANICO_102, 
                style: style_JARDIM_ZOOBOTANICO_102,
                popuplayertitle: 'JARDIM_ZOOBOTANICO',
                interactive: true,
                title: '<img src="styles/legend/JARDIM_ZOOBOTANICO_102.png" /> JARDIM_ZOOBOTANICO'
            });
var format_COMPLEXO_POLIESPORTIVO_103 = new ol.format.GeoJSON();
var features_COMPLEXO_POLIESPORTIVO_103 = format_COMPLEXO_POLIESPORTIVO_103.readFeatures(json_COMPLEXO_POLIESPORTIVO_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_COMPLEXO_POLIESPORTIVO_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMPLEXO_POLIESPORTIVO_103.addFeatures(features_COMPLEXO_POLIESPORTIVO_103);
var lyr_COMPLEXO_POLIESPORTIVO_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMPLEXO_POLIESPORTIVO_103, 
                style: style_COMPLEXO_POLIESPORTIVO_103,
                popuplayertitle: 'COMPLEXO_POLIESPORTIVO',
                interactive: true,
                title: '<img src="styles/legend/COMPLEXO_POLIESPORTIVO_103.png" /> COMPLEXO_POLIESPORTIVO'
            });
var format_COMPLEXO_POLIESPORTIVO_104 = new ol.format.GeoJSON();
var features_COMPLEXO_POLIESPORTIVO_104 = format_COMPLEXO_POLIESPORTIVO_104.readFeatures(json_COMPLEXO_POLIESPORTIVO_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_COMPLEXO_POLIESPORTIVO_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMPLEXO_POLIESPORTIVO_104.addFeatures(features_COMPLEXO_POLIESPORTIVO_104);
var lyr_COMPLEXO_POLIESPORTIVO_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMPLEXO_POLIESPORTIVO_104, 
                style: style_COMPLEXO_POLIESPORTIVO_104,
                popuplayertitle: 'COMPLEXO_POLIESPORTIVO',
                interactive: true,
                title: '<img src="styles/legend/COMPLEXO_POLIESPORTIVO_104.png" /> COMPLEXO_POLIESPORTIVO'
            });
var format_UBS_SANTA_TEREZINHA_105 = new ol.format.GeoJSON();
var features_UBS_SANTA_TEREZINHA_105 = format_UBS_SANTA_TEREZINHA_105.readFeatures(json_UBS_SANTA_TEREZINHA_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UBS_SANTA_TEREZINHA_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBS_SANTA_TEREZINHA_105.addFeatures(features_UBS_SANTA_TEREZINHA_105);
var lyr_UBS_SANTA_TEREZINHA_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBS_SANTA_TEREZINHA_105, 
                style: style_UBS_SANTA_TEREZINHA_105,
                popuplayertitle: 'UBS_SANTA_TEREZINHA',
                interactive: true,
                title: '<img src="styles/legend/UBS_SANTA_TEREZINHA_105.png" /> UBS_SANTA_TEREZINHA'
            });
var format_UBS_SANTA_BARBARA_106 = new ol.format.GeoJSON();
var features_UBS_SANTA_BARBARA_106 = format_UBS_SANTA_BARBARA_106.readFeatures(json_UBS_SANTA_BARBARA_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UBS_SANTA_BARBARA_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBS_SANTA_BARBARA_106.addFeatures(features_UBS_SANTA_BARBARA_106);
var lyr_UBS_SANTA_BARBARA_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBS_SANTA_BARBARA_106, 
                style: style_UBS_SANTA_BARBARA_106,
                popuplayertitle: 'UBS_SANTA_BARBARA',
                interactive: true,
                title: '<img src="styles/legend/UBS_SANTA_BARBARA_106.png" /> UBS_SANTA_BARBARA'
            });
var format_UBS_PERES_ELIAS_107 = new ol.format.GeoJSON();
var features_UBS_PERES_ELIAS_107 = format_UBS_PERES_ELIAS_107.readFeatures(json_UBS_PERES_ELIAS_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UBS_PERES_ELIAS_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBS_PERES_ELIAS_107.addFeatures(features_UBS_PERES_ELIAS_107);
var lyr_UBS_PERES_ELIAS_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBS_PERES_ELIAS_107, 
                style: style_UBS_PERES_ELIAS_107,
                popuplayertitle: 'UBS_PERES_ELIAS',
                interactive: true,
                title: '<img src="styles/legend/UBS_PERES_ELIAS_107.png" /> UBS_PERES_ELIAS'
            });
var format_UBS_PARQUE_HORTO_108 = new ol.format.GeoJSON();
var features_UBS_PARQUE_HORTO_108 = format_UBS_PARQUE_HORTO_108.readFeatures(json_UBS_PARQUE_HORTO_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UBS_PARQUE_HORTO_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBS_PARQUE_HORTO_108.addFeatures(features_UBS_PARQUE_HORTO_108);
var lyr_UBS_PARQUE_HORTO_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBS_PARQUE_HORTO_108, 
                style: style_UBS_PARQUE_HORTO_108,
                popuplayertitle: 'UBS_PARQUE_HORTO',
                interactive: true,
                title: '<img src="styles/legend/UBS_PARQUE_HORTO_108.png" /> UBS_PARQUE_HORTO'
            });
var format_UBS_JARDIM_PALMA_109 = new ol.format.GeoJSON();
var features_UBS_JARDIM_PALMA_109 = format_UBS_JARDIM_PALMA_109.readFeatures(json_UBS_JARDIM_PALMA_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UBS_JARDIM_PALMA_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBS_JARDIM_PALMA_109.addFeatures(features_UBS_JARDIM_PALMA_109);
var lyr_UBS_JARDIM_PALMA_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBS_JARDIM_PALMA_109, 
                style: style_UBS_JARDIM_PALMA_109,
                popuplayertitle: 'UBS_JARDIM_PALMA',
                interactive: true,
                title: '<img src="styles/legend/UBS_JARDIM_PALMA_109.png" /> UBS_JARDIM_PALMA'
            });
var format_REVITALIZACAO_ESTACAO_FERROVIARIA_110 = new ol.format.GeoJSON();
var features_REVITALIZACAO_ESTACAO_FERROVIARIA_110 = format_REVITALIZACAO_ESTACAO_FERROVIARIA_110.readFeatures(json_REVITALIZACAO_ESTACAO_FERROVIARIA_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REVITALIZACAO_ESTACAO_FERROVIARIA_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REVITALIZACAO_ESTACAO_FERROVIARIA_110.addFeatures(features_REVITALIZACAO_ESTACAO_FERROVIARIA_110);
var lyr_REVITALIZACAO_ESTACAO_FERROVIARIA_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REVITALIZACAO_ESTACAO_FERROVIARIA_110, 
                style: style_REVITALIZACAO_ESTACAO_FERROVIARIA_110,
                popuplayertitle: 'REVITALIZACAO_ESTACAO_FERROVIARIA',
                interactive: true,
                title: '<img src="styles/legend/REVITALIZACAO_ESTACAO_FERROVIARIA_110.png" /> REVITALIZACAO_ESTACAO_FERROVIARIA'
            });
var format_REFORMA_CRAS_OESTE_111 = new ol.format.GeoJSON();
var features_REFORMA_CRAS_OESTE_111 = format_REFORMA_CRAS_OESTE_111.readFeatures(json_REFORMA_CRAS_OESTE_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REFORMA_CRAS_OESTE_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REFORMA_CRAS_OESTE_111.addFeatures(features_REFORMA_CRAS_OESTE_111);
var lyr_REFORMA_CRAS_OESTE_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REFORMA_CRAS_OESTE_111, 
                style: style_REFORMA_CRAS_OESTE_111,
                popuplayertitle: 'REFORMA_CRAS_OESTE',
                interactive: true,
                title: '<img src="styles/legend/REFORMA_CRAS_OESTE_111.png" /> REFORMA_CRAS_OESTE'
            });
var format_REFORMA_CRAS_NORTE_112 = new ol.format.GeoJSON();
var features_REFORMA_CRAS_NORTE_112 = format_REFORMA_CRAS_NORTE_112.readFeatures(json_REFORMA_CRAS_NORTE_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REFORMA_CRAS_NORTE_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REFORMA_CRAS_NORTE_112.addFeatures(features_REFORMA_CRAS_NORTE_112);
var lyr_REFORMA_CRAS_NORTE_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REFORMA_CRAS_NORTE_112, 
                style: style_REFORMA_CRAS_NORTE_112,
                popuplayertitle: 'REFORMA_CRAS_NORTE',
                interactive: true,
                title: '<img src="styles/legend/REFORMA_CRAS_NORTE_112.png" /> REFORMA_CRAS_NORTE'
            });
var format_REFORCO_ESTRUTURAL_CHAMPAGNAT_113 = new ol.format.GeoJSON();
var features_REFORCO_ESTRUTURAL_CHAMPAGNAT_113 = format_REFORCO_ESTRUTURAL_CHAMPAGNAT_113.readFeatures(json_REFORCO_ESTRUTURAL_CHAMPAGNAT_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REFORCO_ESTRUTURAL_CHAMPAGNAT_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REFORCO_ESTRUTURAL_CHAMPAGNAT_113.addFeatures(features_REFORCO_ESTRUTURAL_CHAMPAGNAT_113);
var lyr_REFORCO_ESTRUTURAL_CHAMPAGNAT_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REFORCO_ESTRUTURAL_CHAMPAGNAT_113, 
                style: style_REFORCO_ESTRUTURAL_CHAMPAGNAT_113,
                popuplayertitle: 'REFORCO_ESTRUTURAL_CHAMPAGNAT',
                interactive: true,
                title: '<img src="styles/legend/REFORCO_ESTRUTURAL_CHAMPAGNAT_113.png" /> REFORCO_ESTRUTURAL_CHAMPAGNAT'
            });
var format_RECAPEAMENTO_JARDIM_MARTINS_114 = new ol.format.GeoJSON();
var features_RECAPEAMENTO_JARDIM_MARTINS_114 = format_RECAPEAMENTO_JARDIM_MARTINS_114.readFeatures(json_RECAPEAMENTO_JARDIM_MARTINS_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RECAPEAMENTO_JARDIM_MARTINS_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RECAPEAMENTO_JARDIM_MARTINS_114.addFeatures(features_RECAPEAMENTO_JARDIM_MARTINS_114);
var lyr_RECAPEAMENTO_JARDIM_MARTINS_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RECAPEAMENTO_JARDIM_MARTINS_114, 
                style: style_RECAPEAMENTO_JARDIM_MARTINS_114,
                popuplayertitle: 'RECAPEAMENTO_JARDIM_MARTINS',
                interactive: true,
                title: '<img src="styles/legend/RECAPEAMENTO_JARDIM_MARTINS_114.png" /> RECAPEAMENTO_JARDIM_MARTINS'
            });
var format_PRONTO_SOCORRO_ALVARO_AZZUZ_115 = new ol.format.GeoJSON();
var features_PRONTO_SOCORRO_ALVARO_AZZUZ_115 = format_PRONTO_SOCORRO_ALVARO_AZZUZ_115.readFeatures(json_PRONTO_SOCORRO_ALVARO_AZZUZ_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PRONTO_SOCORRO_ALVARO_AZZUZ_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRONTO_SOCORRO_ALVARO_AZZUZ_115.addFeatures(features_PRONTO_SOCORRO_ALVARO_AZZUZ_115);
var lyr_PRONTO_SOCORRO_ALVARO_AZZUZ_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRONTO_SOCORRO_ALVARO_AZZUZ_115, 
                style: style_PRONTO_SOCORRO_ALVARO_AZZUZ_115,
                popuplayertitle: 'PRONTO_SOCORRO_ALVARO_AZZUZ',
                interactive: true,
                title: '<img src="styles/legend/PRONTO_SOCORRO_ALVARO_AZZUZ_115.png" /> PRONTO_SOCORRO_ALVARO_AZZUZ'
            });
var format_POLICLINICA_116 = new ol.format.GeoJSON();
var features_POLICLINICA_116 = format_POLICLINICA_116.readFeatures(json_POLICLINICA_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_POLICLINICA_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLICLINICA_116.addFeatures(features_POLICLINICA_116);
var lyr_POLICLINICA_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLICLINICA_116, 
                style: style_POLICLINICA_116,
                popuplayertitle: 'POLICLINICA',
                interactive: true,
                title: '<img src="styles/legend/POLICLINICA_116.png" /> POLICLINICA'
            });
var format_NOVO_NGA_117 = new ol.format.GeoJSON();
var features_NOVO_NGA_117 = format_NOVO_NGA_117.readFeatures(json_NOVO_NGA_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_NOVO_NGA_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NOVO_NGA_117.addFeatures(features_NOVO_NGA_117);
var lyr_NOVO_NGA_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NOVO_NGA_117, 
                style: style_NOVO_NGA_117,
                popuplayertitle: 'NOVO_NGA',
                interactive: true,
                title: '<img src="styles/legend/NOVO_NGA_117.png" /> NOVO_NGA'
            });
var format_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_118 = new ol.format.GeoJSON();
var features_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_118 = format_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_118.readFeatures(json_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_118.addFeatures(features_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_118);
var lyr_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_118, 
                style: style_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_118,
                popuplayertitle: 'ESTABILIZACAO_TALUDE_JD_BRASILANDIA',
                interactive: true,
                title: '<img src="styles/legend/ESTABILIZACAO_TALUDE_JD_BRASILANDIA_118.png" /> ESTABILIZACAO_TALUDE_JD_BRASILANDIA'
            });
var format_ESCOLA_JOAO_LIPORONI_119 = new ol.format.GeoJSON();
var features_ESCOLA_JOAO_LIPORONI_119 = format_ESCOLA_JOAO_LIPORONI_119.readFeatures(json_ESCOLA_JOAO_LIPORONI_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ESCOLA_JOAO_LIPORONI_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESCOLA_JOAO_LIPORONI_119.addFeatures(features_ESCOLA_JOAO_LIPORONI_119);
var lyr_ESCOLA_JOAO_LIPORONI_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESCOLA_JOAO_LIPORONI_119, 
                style: style_ESCOLA_JOAO_LIPORONI_119,
                popuplayertitle: 'ESCOLA_JOAO_LIPORONI',
                interactive: true,
                title: '<img src="styles/legend/ESCOLA_JOAO_LIPORONI_119.png" /> ESCOLA_JOAO_LIPORONI'
            });
var format_DRENAGEM_CORREGO_CUBATAO_120 = new ol.format.GeoJSON();
var features_DRENAGEM_CORREGO_CUBATAO_120 = format_DRENAGEM_CORREGO_CUBATAO_120.readFeatures(json_DRENAGEM_CORREGO_CUBATAO_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_CORREGO_CUBATAO_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_CORREGO_CUBATAO_120.addFeatures(features_DRENAGEM_CORREGO_CUBATAO_120);
var lyr_DRENAGEM_CORREGO_CUBATAO_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_CORREGO_CUBATAO_120, 
                style: style_DRENAGEM_CORREGO_CUBATAO_120,
                popuplayertitle: 'DRENAGEM_CORREGO_CUBATAO',
                interactive: true,
                title: '<img src="styles/legend/DRENAGEM_CORREGO_CUBATAO_120.png" /> DRENAGEM_CORREGO_CUBATAO'
            });
var format_DRENAGEM_CORREGO_BRAGRES_121 = new ol.format.GeoJSON();
var features_DRENAGEM_CORREGO_BRAGRES_121 = format_DRENAGEM_CORREGO_BRAGRES_121.readFeatures(json_DRENAGEM_CORREGO_BRAGRES_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_CORREGO_BRAGRES_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_CORREGO_BRAGRES_121.addFeatures(features_DRENAGEM_CORREGO_BRAGRES_121);
var lyr_DRENAGEM_CORREGO_BRAGRES_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_CORREGO_BRAGRES_121, 
                style: style_DRENAGEM_CORREGO_BRAGRES_121,
                popuplayertitle: 'DRENAGEM_CORREGO_BRAGRES',
                interactive: true,
                title: '<img src="styles/legend/DRENAGEM_CORREGO_BRAGRES_121.png" /> DRENAGEM_CORREGO_BRAGRES'
            });
var format_DRENAGEM_CANAL_JD_PALMEIRAS_122 = new ol.format.GeoJSON();
var features_DRENAGEM_CANAL_JD_PALMEIRAS_122 = format_DRENAGEM_CANAL_JD_PALMEIRAS_122.readFeatures(json_DRENAGEM_CANAL_JD_PALMEIRAS_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_CANAL_JD_PALMEIRAS_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_CANAL_JD_PALMEIRAS_122.addFeatures(features_DRENAGEM_CANAL_JD_PALMEIRAS_122);
var lyr_DRENAGEM_CANAL_JD_PALMEIRAS_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_CANAL_JD_PALMEIRAS_122, 
                style: style_DRENAGEM_CANAL_JD_PALMEIRAS_122,
                popuplayertitle: 'DRENAGEM_CANAL_JD_PALMEIRAS',
                interactive: true,
                title: '<img src="styles/legend/DRENAGEM_CANAL_JD_PALMEIRAS_122.png" /> DRENAGEM_CANAL_JD_PALMEIRAS'
            });
var format_CRECHE_SAMEL_PARK_123 = new ol.format.GeoJSON();
var features_CRECHE_SAMEL_PARK_123 = format_CRECHE_SAMEL_PARK_123.readFeatures(json_CRECHE_SAMEL_PARK_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CRECHE_SAMEL_PARK_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRECHE_SAMEL_PARK_123.addFeatures(features_CRECHE_SAMEL_PARK_123);
var lyr_CRECHE_SAMEL_PARK_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRECHE_SAMEL_PARK_123, 
                style: style_CRECHE_SAMEL_PARK_123,
                popuplayertitle: 'CRECHE_SAMEL_PARK',
                interactive: true,
                title: '<img src="styles/legend/CRECHE_SAMEL_PARK_123.png" /> CRECHE_SAMEL_PARK'
            });
var format_CORPO_BAMBEIROS_124 = new ol.format.GeoJSON();
var features_CORPO_BAMBEIROS_124 = format_CORPO_BAMBEIROS_124.readFeatures(json_CORPO_BAMBEIROS_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CORPO_BAMBEIROS_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORPO_BAMBEIROS_124.addFeatures(features_CORPO_BAMBEIROS_124);
var lyr_CORPO_BAMBEIROS_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORPO_BAMBEIROS_124, 
                style: style_CORPO_BAMBEIROS_124,
                popuplayertitle: 'CORPO_BAMBEIROS',
                interactive: true,
                title: '<img src="styles/legend/CORPO_BAMBEIROS_124.png" /> CORPO_BAMBEIROS'
            });
var format_CONTENCAO_VIARIA_125 = new ol.format.GeoJSON();
var features_CONTENCAO_VIARIA_125 = format_CONTENCAO_VIARIA_125.readFeatures(json_CONTENCAO_VIARIA_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CONTENCAO_VIARIA_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTENCAO_VIARIA_125.addFeatures(features_CONTENCAO_VIARIA_125);
var lyr_CONTENCAO_VIARIA_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTENCAO_VIARIA_125, 
                style: style_CONTENCAO_VIARIA_125,
                popuplayertitle: 'CONTENCAO_VIARIA',
                interactive: true,
                title: '<img src="styles/legend/CONTENCAO_VIARIA_125.png" /> CONTENCAO_VIARIA'
            });
var format_CONSTRUCAO_CEPEL_SAO_JOSE_126 = new ol.format.GeoJSON();
var features_CONSTRUCAO_CEPEL_SAO_JOSE_126 = format_CONSTRUCAO_CEPEL_SAO_JOSE_126.readFeatures(json_CONSTRUCAO_CEPEL_SAO_JOSE_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CONSTRUCAO_CEPEL_SAO_JOSE_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONSTRUCAO_CEPEL_SAO_JOSE_126.addFeatures(features_CONSTRUCAO_CEPEL_SAO_JOSE_126);
var lyr_CONSTRUCAO_CEPEL_SAO_JOSE_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONSTRUCAO_CEPEL_SAO_JOSE_126, 
                style: style_CONSTRUCAO_CEPEL_SAO_JOSE_126,
                popuplayertitle: 'CONSTRUCAO_CEPEL_SAO_JOSE',
                interactive: true,
                title: '<img src="styles/legend/CONSTRUCAO_CEPEL_SAO_JOSE_126.png" /> CONSTRUCAO_CEPEL_SAO_JOSE'
            });
var format_CONSTRUCAO_CEPEL_JD_CAMBUI_127 = new ol.format.GeoJSON();
var features_CONSTRUCAO_CEPEL_JD_CAMBUI_127 = format_CONSTRUCAO_CEPEL_JD_CAMBUI_127.readFeatures(json_CONSTRUCAO_CEPEL_JD_CAMBUI_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CONSTRUCAO_CEPEL_JD_CAMBUI_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONSTRUCAO_CEPEL_JD_CAMBUI_127.addFeatures(features_CONSTRUCAO_CEPEL_JD_CAMBUI_127);
var lyr_CONSTRUCAO_CEPEL_JD_CAMBUI_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONSTRUCAO_CEPEL_JD_CAMBUI_127, 
                style: style_CONSTRUCAO_CEPEL_JD_CAMBUI_127,
                popuplayertitle: 'CONSTRUCAO_CEPEL_JD_CAMBUI',
                interactive: true,
                title: '<img src="styles/legend/CONSTRUCAO_CEPEL_JD_CAMBUI_127.png" /> CONSTRUCAO_CEPEL_JD_CAMBUI'
            });
var format_CONSTRUCAO_CAPS_INFANTIL_128 = new ol.format.GeoJSON();
var features_CONSTRUCAO_CAPS_INFANTIL_128 = format_CONSTRUCAO_CAPS_INFANTIL_128.readFeatures(json_CONSTRUCAO_CAPS_INFANTIL_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CONSTRUCAO_CAPS_INFANTIL_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONSTRUCAO_CAPS_INFANTIL_128.addFeatures(features_CONSTRUCAO_CAPS_INFANTIL_128);
var lyr_CONSTRUCAO_CAPS_INFANTIL_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONSTRUCAO_CAPS_INFANTIL_128, 
                style: style_CONSTRUCAO_CAPS_INFANTIL_128,
                popuplayertitle: 'CONSTRUCAO_CAPS_INFANTIL',
                interactive: true,
                title: '<img src="styles/legend/CONSTRUCAO_CAPS_INFANTIL_128.png" /> CONSTRUCAO_CAPS_INFANTIL'
            });
var format_AREA_LAZER_PARQUE_ESMERALDA_129 = new ol.format.GeoJSON();
var features_AREA_LAZER_PARQUE_ESMERALDA_129 = format_AREA_LAZER_PARQUE_ESMERALDA_129.readFeatures(json_AREA_LAZER_PARQUE_ESMERALDA_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_LAZER_PARQUE_ESMERALDA_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_LAZER_PARQUE_ESMERALDA_129.addFeatures(features_AREA_LAZER_PARQUE_ESMERALDA_129);
var lyr_AREA_LAZER_PARQUE_ESMERALDA_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_LAZER_PARQUE_ESMERALDA_129, 
                style: style_AREA_LAZER_PARQUE_ESMERALDA_129,
                popuplayertitle: 'AREA_LAZER_PARQUE_ESMERALDA',
                interactive: true,
                title: '<img src="styles/legend/AREA_LAZER_PARQUE_ESMERALDA_129.png" /> AREA_LAZER_PARQUE_ESMERALDA'
            });
var format_AREA_LAZER_PARQUE_CONTINENTAL_130 = new ol.format.GeoJSON();
var features_AREA_LAZER_PARQUE_CONTINENTAL_130 = format_AREA_LAZER_PARQUE_CONTINENTAL_130.readFeatures(json_AREA_LAZER_PARQUE_CONTINENTAL_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_LAZER_PARQUE_CONTINENTAL_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_LAZER_PARQUE_CONTINENTAL_130.addFeatures(features_AREA_LAZER_PARQUE_CONTINENTAL_130);
var lyr_AREA_LAZER_PARQUE_CONTINENTAL_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_LAZER_PARQUE_CONTINENTAL_130, 
                style: style_AREA_LAZER_PARQUE_CONTINENTAL_130,
                popuplayertitle: 'AREA_LAZER_PARQUE_CONTINENTAL',
                interactive: true,
                title: '<img src="styles/legend/AREA_LAZER_PARQUE_CONTINENTAL_130.png" /> AREA_LAZER_PARQUE_CONTINENTAL'
            });
var format_AREA_LAZER_JARDIM_PORTINARI_131 = new ol.format.GeoJSON();
var features_AREA_LAZER_JARDIM_PORTINARI_131 = format_AREA_LAZER_JARDIM_PORTINARI_131.readFeatures(json_AREA_LAZER_JARDIM_PORTINARI_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_LAZER_JARDIM_PORTINARI_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_LAZER_JARDIM_PORTINARI_131.addFeatures(features_AREA_LAZER_JARDIM_PORTINARI_131);
var lyr_AREA_LAZER_JARDIM_PORTINARI_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_LAZER_JARDIM_PORTINARI_131, 
                style: style_AREA_LAZER_JARDIM_PORTINARI_131,
                popuplayertitle: 'AREA_LAZER_JARDIM_PORTINARI',
                interactive: true,
                title: '<img src="styles/legend/AREA_LAZER_JARDIM_PORTINARI_131.png" /> AREA_LAZER_JARDIM_PORTINARI'
            });
var format_OBRAS_PUBLICAS29UNID_132 = new ol.format.GeoJSON();
var features_OBRAS_PUBLICAS29UNID_132 = format_OBRAS_PUBLICAS29UNID_132.readFeatures(json_OBRAS_PUBLICAS29UNID_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_OBRAS_PUBLICAS29UNID_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OBRAS_PUBLICAS29UNID_132.addFeatures(features_OBRAS_PUBLICAS29UNID_132);
var lyr_OBRAS_PUBLICAS29UNID_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OBRAS_PUBLICAS29UNID_132, 
                style: style_OBRAS_PUBLICAS29UNID_132,
                popuplayertitle: 'OBRAS_PUBLICAS (29 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/OBRAS_PUBLICAS29UNID_132.png" /> OBRAS_PUBLICAS (29 UNID.)'
            });
var format_REGULARIZADO_133 = new ol.format.GeoJSON();
var features_REGULARIZADO_133 = format_REGULARIZADO_133.readFeatures(json_REGULARIZADO_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REGULARIZADO_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGULARIZADO_133.addFeatures(features_REGULARIZADO_133);
var lyr_REGULARIZADO_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGULARIZADO_133, 
                style: style_REGULARIZADO_133,
                popuplayertitle: 'REGULARIZADO',
                interactive: true,
                title: '<img src="styles/legend/REGULARIZADO_133.png" /> REGULARIZADO'
            });
var format_REGULARIZADO9UNID_134 = new ol.format.GeoJSON();
var features_REGULARIZADO9UNID_134 = format_REGULARIZADO9UNID_134.readFeatures(json_REGULARIZADO9UNID_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REGULARIZADO9UNID_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGULARIZADO9UNID_134.addFeatures(features_REGULARIZADO9UNID_134);
var lyr_REGULARIZADO9UNID_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGULARIZADO9UNID_134, 
                style: style_REGULARIZADO9UNID_134,
                popuplayertitle: 'REGULARIZADO (9 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/REGULARIZADO9UNID_134.png" /> REGULARIZADO (9 UNID.)'
            });
var format_Vivenna_135 = new ol.format.GeoJSON();
var features_Vivenna_135 = format_Vivenna_135.readFeatures(json_Vivenna_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Vivenna_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vivenna_135.addFeatures(features_Vivenna_135);
var lyr_Vivenna_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vivenna_135, 
                style: style_Vivenna_135,
                popuplayertitle: 'Vivenna',
                interactive: true,
    title: 'Vivenna<br />\
    <img src="styles/legend/Vivenna_135_0.png" /> APP<br />\
    <img src="styles/legend/Vivenna_135_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Vivenna_135_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Vivenna_135_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Vivenna_135_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Vivenna_135_5.png" /> PASSEIO<br />\
    <img src="styles/legend/Vivenna_135_6.png" /> RUAS<br />\
    <img src="styles/legend/Vivenna_135_7.png" /> VIELA<br />' });
var format_Vivenna_136 = new ol.format.GeoJSON();
var features_Vivenna_136 = format_Vivenna_136.readFeatures(json_Vivenna_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Vivenna_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vivenna_136.addFeatures(features_Vivenna_136);
var lyr_Vivenna_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vivenna_136, 
                style: style_Vivenna_136,
                popuplayertitle: 'Vivenna',
                interactive: true,
                title: '<img src="styles/legend/Vivenna_136.png" /> Vivenna'
            });
var format_VittaSoVicente_137 = new ol.format.GeoJSON();
var features_VittaSoVicente_137 = format_VittaSoVicente_137.readFeatures(json_VittaSoVicente_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaSoVicente_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaSoVicente_137.addFeatures(features_VittaSoVicente_137);
var lyr_VittaSoVicente_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaSoVicente_137, 
                style: style_VittaSoVicente_137,
                popuplayertitle: 'Vitta São Vicente',
                interactive: true,
    title: 'Vitta São Vicente<br />\
    <img src="styles/legend/VittaSoVicente_137_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/VittaSoVicente_137_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/VittaSoVicente_137_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/VittaSoVicente_137_3.png" /> PASSEIO<br />\
    <img src="styles/legend/VittaSoVicente_137_4.png" /> RUAS<br />\
    <img src="styles/legend/VittaSoVicente_137_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_VittaSoVicente_138 = new ol.format.GeoJSON();
var features_VittaSoVicente_138 = format_VittaSoVicente_138.readFeatures(json_VittaSoVicente_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaSoVicente_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaSoVicente_138.addFeatures(features_VittaSoVicente_138);
var lyr_VittaSoVicente_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaSoVicente_138, 
                style: style_VittaSoVicente_138,
                popuplayertitle: 'Vitta São Vicente',
                interactive: true,
                title: '<img src="styles/legend/VittaSoVicente_138.png" /> Vitta São Vicente'
            });
var format_VittaJardimSimes_139 = new ol.format.GeoJSON();
var features_VittaJardimSimes_139 = format_VittaJardimSimes_139.readFeatures(json_VittaJardimSimes_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaJardimSimes_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaJardimSimes_139.addFeatures(features_VittaJardimSimes_139);
var lyr_VittaJardimSimes_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaJardimSimes_139, 
                style: style_VittaJardimSimes_139,
                popuplayertitle: 'Vitta Jardim Simões',
                interactive: true,
    title: 'Vitta Jardim Simões<br />\
    <img src="styles/legend/VittaJardimSimes_139_0.png" /> APP<br />\
    <img src="styles/legend/VittaJardimSimes_139_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VittaJardimSimes_139_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/VittaJardimSimes_139_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/VittaJardimSimes_139_4.png" /> PASSEIO<br />\
    <img src="styles/legend/VittaJardimSimes_139_5.png" /> RUAS<br />' });
var format_VittaJardimSimes_140 = new ol.format.GeoJSON();
var features_VittaJardimSimes_140 = format_VittaJardimSimes_140.readFeatures(json_VittaJardimSimes_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaJardimSimes_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaJardimSimes_140.addFeatures(features_VittaJardimSimes_140);
var lyr_VittaJardimSimes_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaJardimSimes_140, 
                style: style_VittaJardimSimes_140,
                popuplayertitle: 'Vitta Jardim Simões',
                interactive: true,
                title: '<img src="styles/legend/VittaJardimSimes_140.png" /> Vitta Jardim Simões'
            });
var format_VittaAlvorada_141 = new ol.format.GeoJSON();
var features_VittaAlvorada_141 = format_VittaAlvorada_141.readFeatures(json_VittaAlvorada_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaAlvorada_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaAlvorada_141.addFeatures(features_VittaAlvorada_141);
var lyr_VittaAlvorada_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaAlvorada_141, 
                style: style_VittaAlvorada_141,
                popuplayertitle: 'Vitta Alvorada',
                interactive: true,
    title: 'Vitta Alvorada<br />\
    <img src="styles/legend/VittaAlvorada_141_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VittaAlvorada_141_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/VittaAlvorada_141_2.png" /> LOTES<br />\
    <img src="styles/legend/VittaAlvorada_141_3.png" /> PASSEIO<br />\
    <img src="styles/legend/VittaAlvorada_141_4.png" /> RUAS<br />\
    <img src="styles/legend/VittaAlvorada_141_5.png" /> VIELA<br />' });
var format_VittaAlvorada_142 = new ol.format.GeoJSON();
var features_VittaAlvorada_142 = format_VittaAlvorada_142.readFeatures(json_VittaAlvorada_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaAlvorada_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaAlvorada_142.addFeatures(features_VittaAlvorada_142);
var lyr_VittaAlvorada_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaAlvorada_142, 
                style: style_VittaAlvorada_142,
                popuplayertitle: 'Vitta Alvorada',
                interactive: true,
                title: '<img src="styles/legend/VittaAlvorada_142.png" /> Vitta Alvorada'
            });
var format_VilaDiEspanha_143 = new ol.format.GeoJSON();
var features_VilaDiEspanha_143 = format_VilaDiEspanha_143.readFeatures(json_VilaDiEspanha_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaDiEspanha_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaDiEspanha_143.addFeatures(features_VilaDiEspanha_143);
var lyr_VilaDiEspanha_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaDiEspanha_143, 
                style: style_VilaDiEspanha_143,
                popuplayertitle: 'Vila Di Espanha',
                interactive: true,
    title: 'Vila Di Espanha<br />\
    <img src="styles/legend/VilaDiEspanha_143_0.png" /> APP<br />\
    <img src="styles/legend/VilaDiEspanha_143_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VilaDiEspanha_143_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VilaDiEspanha_143_3.png" /> LOTES<br />\
    <img src="styles/legend/VilaDiEspanha_143_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VilaDiEspanha_143_5.png" /> PASSEIO<br />\
    <img src="styles/legend/VilaDiEspanha_143_6.png" /> RUAS<br />\
    <img src="styles/legend/VilaDiEspanha_143_7.png" /> VIELA<br />' });
var format_VilaDiEspanha_144 = new ol.format.GeoJSON();
var features_VilaDiEspanha_144 = format_VilaDiEspanha_144.readFeatures(json_VilaDiEspanha_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaDiEspanha_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaDiEspanha_144.addFeatures(features_VilaDiEspanha_144);
var lyr_VilaDiEspanha_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaDiEspanha_144, 
                style: style_VilaDiEspanha_144,
                popuplayertitle: 'Vila Di Espanha',
                interactive: true,
                title: '<img src="styles/legend/VilaDiEspanha_144.png" /> Vila Di Espanha'
            });
var format_VillaPucci_145 = new ol.format.GeoJSON();
var features_VillaPucci_145 = format_VillaPucci_145.readFeatures(json_VillaPucci_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaPucci_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaPucci_145.addFeatures(features_VillaPucci_145);
var lyr_VillaPucci_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaPucci_145, 
                style: style_VillaPucci_145,
                popuplayertitle: 'Villa Pucci',
                interactive: true,
    title: 'Villa Pucci<br />\
    <img src="styles/legend/VillaPucci_145_0.png" /> APP<br />\
    <img src="styles/legend/VillaPucci_145_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaPucci_145_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaPucci_145_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/VillaPucci_145_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaPucci_145_5.png" /> LOTES<br />\
    <img src="styles/legend/VillaPucci_145_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VillaPucci_145_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/VillaPucci_145_8.png" /> PASSEIO<br />\
    <img src="styles/legend/VillaPucci_145_9.png" /> RUAS<br />\
    <img src="styles/legend/VillaPucci_145_10.png" /> VIELA<br />' });
var format_VillaPucci_146 = new ol.format.GeoJSON();
var features_VillaPucci_146 = format_VillaPucci_146.readFeatures(json_VillaPucci_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaPucci_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaPucci_146.addFeatures(features_VillaPucci_146);
var lyr_VillaPucci_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaPucci_146, 
                style: style_VillaPucci_146,
                popuplayertitle: 'Villa Pucci',
                interactive: true,
                title: '<img src="styles/legend/VillaPucci_146.png" /> Villa Pucci'
            });
var format_VilaPiemonteII_147 = new ol.format.GeoJSON();
var features_VilaPiemonteII_147 = format_VilaPiemonteII_147.readFeatures(json_VilaPiemonteII_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaPiemonteII_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaPiemonteII_147.addFeatures(features_VilaPiemonteII_147);
var lyr_VilaPiemonteII_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaPiemonteII_147, 
                style: style_VilaPiemonteII_147,
                popuplayertitle: 'Vila Piemonte II',
                interactive: true,
    title: 'Vila Piemonte II<br />\
    <img src="styles/legend/VilaPiemonteII_147_0.png" /> APP<br />\
    <img src="styles/legend/VilaPiemonteII_147_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VilaPiemonteII_147_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VilaPiemonteII_147_3.png" /> DESMEMBRAMENTO DOACAO DESAPROPRIACAO<br />\
    <img src="styles/legend/VilaPiemonteII_147_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/VilaPiemonteII_147_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VilaPiemonteII_147_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/VilaPiemonteII_147_7.png" /> PASSEIO<br />\
    <img src="styles/legend/VilaPiemonteII_147_8.png" /> RUAS<br />\
    <img src="styles/legend/VilaPiemonteII_147_9.png" /> VIELA<br />' });
var format_VilaPiemonteII_148 = new ol.format.GeoJSON();
var features_VilaPiemonteII_148 = format_VilaPiemonteII_148.readFeatures(json_VilaPiemonteII_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaPiemonteII_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaPiemonteII_148.addFeatures(features_VilaPiemonteII_148);
var lyr_VilaPiemonteII_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaPiemonteII_148, 
                style: style_VilaPiemonteII_148,
                popuplayertitle: 'Vila Piemonte II',
                interactive: true,
                title: '<img src="styles/legend/VilaPiemonteII_148.png" /> Vila Piemonte II'
            });
var format_VilaOlimpica_149 = new ol.format.GeoJSON();
var features_VilaOlimpica_149 = format_VilaOlimpica_149.readFeatures(json_VilaOlimpica_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaOlimpica_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaOlimpica_149.addFeatures(features_VilaOlimpica_149);
var lyr_VilaOlimpica_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaOlimpica_149, 
                style: style_VilaOlimpica_149,
                popuplayertitle: 'Vila Olimpica',
                interactive: true,
    title: 'Vila Olimpica<br />\
    <img src="styles/legend/VilaOlimpica_149_0.png" /> APP<br />\
    <img src="styles/legend/VilaOlimpica_149_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VilaOlimpica_149_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/VilaOlimpica_149_3.png" /> LOTES<br />\
    <img src="styles/legend/VilaOlimpica_149_4.png" /> PASSEIO<br />\
    <img src="styles/legend/VilaOlimpica_149_5.png" /> RUAS<br />\
    <img src="styles/legend/VilaOlimpica_149_6.png" /> VIELA<br />' });
var format_VilaOlimpica_150 = new ol.format.GeoJSON();
var features_VilaOlimpica_150 = format_VilaOlimpica_150.readFeatures(json_VilaOlimpica_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaOlimpica_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaOlimpica_150.addFeatures(features_VilaOlimpica_150);
var lyr_VilaOlimpica_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaOlimpica_150, 
                style: style_VilaOlimpica_150,
                popuplayertitle: 'Vila Olimpica',
                interactive: true,
                title: '<img src="styles/legend/VilaOlimpica_150.png" /> Vila Olimpica'
            });
var format_VillaDoratta_151 = new ol.format.GeoJSON();
var features_VillaDoratta_151 = format_VillaDoratta_151.readFeatures(json_VillaDoratta_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaDoratta_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaDoratta_151.addFeatures(features_VillaDoratta_151);
var lyr_VillaDoratta_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaDoratta_151, 
                style: style_VillaDoratta_151,
                popuplayertitle: 'Villa Doratta',
                interactive: true,
    title: 'Villa Doratta<br />\
    <img src="styles/legend/VillaDoratta_151_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaDoratta_151_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaDoratta_151_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaDoratta_151_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/VillaDoratta_151_4.png" /> PASSEIO<br />\
    <img src="styles/legend/VillaDoratta_151_5.png" /> RUAS<br />\
    <img src="styles/legend/VillaDoratta_151_6.png" /> VAGAS DE ESTACIONAMENTO<br />\
    <img src="styles/legend/VillaDoratta_151_7.png" /> VIELA<br />\
    <img src="styles/legend/VillaDoratta_151_8.png" /> APP<br />' });
var format_VillaDoratta_152 = new ol.format.GeoJSON();
var features_VillaDoratta_152 = format_VillaDoratta_152.readFeatures(json_VillaDoratta_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaDoratta_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaDoratta_152.addFeatures(features_VillaDoratta_152);
var lyr_VillaDoratta_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaDoratta_152, 
                style: style_VillaDoratta_152,
                popuplayertitle: 'Villa Doratta',
                interactive: true,
                title: '<img src="styles/legend/VillaDoratta_152.png" /> Villa Doratta'
            });
var format_VillaBella_153 = new ol.format.GeoJSON();
var features_VillaBella_153 = format_VillaBella_153.readFeatures(json_VillaBella_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaBella_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaBella_153.addFeatures(features_VillaBella_153);
var lyr_VillaBella_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaBella_153, 
                style: style_VillaBella_153,
                popuplayertitle: 'Villa Bella',
                interactive: true,
    title: 'Villa Bella<br />\
    <img src="styles/legend/VillaBella_153_0.png" /> APP<br />\
    <img src="styles/legend/VillaBella_153_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaBella_153_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaBella_153_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaBella_153_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VillaBella_153_5.png" /> RUAS<br />\
    <img src="styles/legend/VillaBella_153_6.png" /> PASSEIO<br />' });
var format_VillaBella_154 = new ol.format.GeoJSON();
var features_VillaBella_154 = format_VillaBella_154.readFeatures(json_VillaBella_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaBella_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaBella_154.addFeatures(features_VillaBella_154);
var lyr_VillaBella_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaBella_154, 
                style: style_VillaBella_154,
                popuplayertitle: 'Villa Bella',
                interactive: true,
                title: '<img src="styles/legend/VillaBella_154.png" /> Villa Bella'
            });
var format_Versalhes_155 = new ol.format.GeoJSON();
var features_Versalhes_155 = format_Versalhes_155.readFeatures(json_Versalhes_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Versalhes_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Versalhes_155.addFeatures(features_Versalhes_155);
var lyr_Versalhes_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Versalhes_155, 
                style: style_Versalhes_155,
                popuplayertitle: 'Versalhes',
                interactive: true,
    title: 'Versalhes<br />\
    <img src="styles/legend/Versalhes_155_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/Versalhes_155_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/Versalhes_155_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Versalhes_155_3.png" /> PASSEIO<br />\
    <img src="styles/legend/Versalhes_155_4.png" /> RUAS<br />\
    <img src="styles/legend/Versalhes_155_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_Versalhes_156 = new ol.format.GeoJSON();
var features_Versalhes_156 = format_Versalhes_156.readFeatures(json_Versalhes_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Versalhes_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Versalhes_156.addFeatures(features_Versalhes_156);
var lyr_Versalhes_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Versalhes_156, 
                style: style_Versalhes_156,
                popuplayertitle: 'Versalhes',
                interactive: true,
                title: '<img src="styles/legend/Versalhes_156.png" /> Versalhes'
            });
var format_TorontoResidence_157 = new ol.format.GeoJSON();
var features_TorontoResidence_157 = format_TorontoResidence_157.readFeatures(json_TorontoResidence_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TorontoResidence_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TorontoResidence_157.addFeatures(features_TorontoResidence_157);
var lyr_TorontoResidence_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TorontoResidence_157, 
                style: style_TorontoResidence_157,
                popuplayertitle: 'Toronto Residence',
                interactive: true,
    title: 'Toronto Residence<br />\
    <img src="styles/legend/TorontoResidence_157_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/TorontoResidence_157_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/TorontoResidence_157_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/TorontoResidence_157_3.png" /> PASSEIO<br />\
    <img src="styles/legend/TorontoResidence_157_4.png" /> RUAS<br />\
    <img src="styles/legend/TorontoResidence_157_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_TorontoResidence_158 = new ol.format.GeoJSON();
var features_TorontoResidence_158 = format_TorontoResidence_158.readFeatures(json_TorontoResidence_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TorontoResidence_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TorontoResidence_158.addFeatures(features_TorontoResidence_158);
var lyr_TorontoResidence_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TorontoResidence_158, 
                style: style_TorontoResidence_158,
                popuplayertitle: 'Toronto Residence',
                interactive: true,
                title: '<img src="styles/legend/TorontoResidence_158.png" /> Toronto Residence'
            });
var format_TerraNova_159 = new ol.format.GeoJSON();
var features_TerraNova_159 = format_TerraNova_159.readFeatures(json_TerraNova_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TerraNova_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerraNova_159.addFeatures(features_TerraNova_159);
var lyr_TerraNova_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerraNova_159, 
                style: style_TerraNova_159,
                popuplayertitle: 'Terra Nova',
                interactive: true,
    title: 'Terra Nova<br />\
    <img src="styles/legend/TerraNova_159_0.png" /> APP<br />\
    <img src="styles/legend/TerraNova_159_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/TerraNova_159_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/TerraNova_159_3.png" /> LOTES<br />\
    <img src="styles/legend/TerraNova_159_4.png" /> PASSEIO<br />\
    <img src="styles/legend/TerraNova_159_5.png" /> RUAS<br />' });
var format_TerraNova_160 = new ol.format.GeoJSON();
var features_TerraNova_160 = format_TerraNova_160.readFeatures(json_TerraNova_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TerraNova_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerraNova_160.addFeatures(features_TerraNova_160);
var lyr_TerraNova_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerraNova_160, 
                style: style_TerraNova_160,
                popuplayertitle: 'Terra Nova',
                interactive: true,
                title: '<img src="styles/legend/TerraNova_160.png" /> Terra Nova'
            });
var format_Sonetto_161 = new ol.format.GeoJSON();
var features_Sonetto_161 = format_Sonetto_161.readFeatures(json_Sonetto_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Sonetto_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sonetto_161.addFeatures(features_Sonetto_161);
var lyr_Sonetto_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sonetto_161, 
                style: style_Sonetto_161,
                popuplayertitle: 'Sonetto',
                interactive: true,
                title: '<img src="styles/legend/Sonetto_161.png" /> Sonetto'
            });
var format_Sonetto_162 = new ol.format.GeoJSON();
var features_Sonetto_162 = format_Sonetto_162.readFeatures(json_Sonetto_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Sonetto_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sonetto_162.addFeatures(features_Sonetto_162);
var lyr_Sonetto_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sonetto_162, 
                style: style_Sonetto_162,
                popuplayertitle: 'Sonetto',
                interactive: true,
                title: '<img src="styles/legend/Sonetto_162.png" /> Sonetto'
            });
var format_SMARTFRANCAEIXORESIDENCIAL2_163 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL2_163 = format_SMARTFRANCAEIXORESIDENCIAL2_163.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL2_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL2_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL2_163.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL2_163);
var lyr_SMARTFRANCAEIXORESIDENCIAL2_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL2_163, 
                style: style_SMARTFRANCAEIXORESIDENCIAL2_163,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 2',
                interactive: true,
    title: 'SMART FRANCA - EIXO RESIDENCIAL 2<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_163_0.png" /> APP<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_163_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_163_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_163_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_163_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_163_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_163_6.png" /> PASSEIO<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_163_7.png" /> RUAS<br />' });
var format_SMARTFRANCAEIXORESIDENCIAL2_164 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL2_164 = format_SMARTFRANCAEIXORESIDENCIAL2_164.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL2_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL2_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL2_164.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL2_164);
var lyr_SMARTFRANCAEIXORESIDENCIAL2_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL2_164, 
                style: style_SMARTFRANCAEIXORESIDENCIAL2_164,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 2',
                interactive: true,
                title: '<img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_164.png" /> SMART FRANCA - EIXO RESIDENCIAL 2'
            });
var format_SMARTFRANCAEIXORESIDENCIAL1_165 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL1_165 = format_SMARTFRANCAEIXORESIDENCIAL1_165.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL1_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL1_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL1_165.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL1_165);
var lyr_SMARTFRANCAEIXORESIDENCIAL1_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL1_165, 
                style: style_SMARTFRANCAEIXORESIDENCIAL1_165,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 1',
                interactive: true,
    title: 'SMART FRANCA - EIXO RESIDENCIAL 1<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_165_0.png" /> APP<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_165_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_165_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_165_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_165_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_165_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_165_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_165_7.png" /> PASSEIO<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_165_8.png" /> RUAS<br />' });
var format_SMARTFRANCAEIXORESIDENCIAL1_166 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL1_166 = format_SMARTFRANCAEIXORESIDENCIAL1_166.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL1_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL1_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL1_166.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL1_166);
var lyr_SMARTFRANCAEIXORESIDENCIAL1_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL1_166, 
                style: style_SMARTFRANCAEIXORESIDENCIAL1_166,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 1',
                interactive: true,
                title: '<img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_166.png" /> SMART FRANCA - EIXO RESIDENCIAL 1'
            });
var format_SMARTCITYFRANCAEIXOEMPRESARIAL_167 = new ol.format.GeoJSON();
var features_SMARTCITYFRANCAEIXOEMPRESARIAL_167 = format_SMARTCITYFRANCAEIXOEMPRESARIAL_167.readFeatures(json_SMARTCITYFRANCAEIXOEMPRESARIAL_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_167.addFeatures(features_SMARTCITYFRANCAEIXOEMPRESARIAL_167);
var lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_167, 
                style: style_SMARTCITYFRANCAEIXOEMPRESARIAL_167,
                popuplayertitle: 'SMART CITY FRANCA - EIXO EMPRESARIAL',
                interactive: true,
    title: 'SMART CITY FRANCA - EIXO EMPRESARIAL<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_167_0.png" /> APP<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_167_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_167_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_167_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_167_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_167_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_167_6.png" /> PASSEIO<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_167_7.png" /> RUAS<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_167_8.png" /> VIELA<br />' });
var format_SMARTCITYFRANCAEIXOEMPRESARIAL_168 = new ol.format.GeoJSON();
var features_SMARTCITYFRANCAEIXOEMPRESARIAL_168 = format_SMARTCITYFRANCAEIXOEMPRESARIAL_168.readFeatures(json_SMARTCITYFRANCAEIXOEMPRESARIAL_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_168.addFeatures(features_SMARTCITYFRANCAEIXOEMPRESARIAL_168);
var lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_168, 
                style: style_SMARTCITYFRANCAEIXOEMPRESARIAL_168,
                popuplayertitle: 'SMART CITY FRANCA - EIXO EMPRESARIAL',
                interactive: true,
                title: '<img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_168.png" /> SMART CITY FRANCA - EIXO EMPRESARIAL'
            });
var format_ServidoRamal138kVFranca4Guanabara_169 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_169 = format_ServidoRamal138kVFranca4Guanabara_169.readFeatures(json_ServidoRamal138kVFranca4Guanabara_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_169.addFeatures(features_ServidoRamal138kVFranca4Guanabara_169);
var lyr_ServidoRamal138kVFranca4Guanabara_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_169, 
                style: style_ServidoRamal138kVFranca4Guanabara_169,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_169.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_ServidoRamal138kVFranca4Guanabara_170 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_170 = format_ServidoRamal138kVFranca4Guanabara_170.readFeatures(json_ServidoRamal138kVFranca4Guanabara_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_170.addFeatures(features_ServidoRamal138kVFranca4Guanabara_170);
var lyr_ServidoRamal138kVFranca4Guanabara_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_170, 
                style: style_ServidoRamal138kVFranca4Guanabara_170,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_170.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_SantaLina_171 = new ol.format.GeoJSON();
var features_SantaLina_171 = format_SantaLina_171.readFeatures(json_SantaLina_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantaLina_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaLina_171.addFeatures(features_SantaLina_171);
var lyr_SantaLina_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantaLina_171, 
                style: style_SantaLina_171,
                popuplayertitle: 'Santa Lina',
                interactive: true,
    title: 'Santa Lina<br />\
    <img src="styles/legend/SantaLina_171_0.png" /> LOTES<br />\
    <img src="styles/legend/SantaLina_171_1.png" /> PASSEIO<br />\
    <img src="styles/legend/SantaLina_171_2.png" /> RUAS<br />' });
var format_SantaLina_172 = new ol.format.GeoJSON();
var features_SantaLina_172 = format_SantaLina_172.readFeatures(json_SantaLina_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantaLina_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaLina_172.addFeatures(features_SantaLina_172);
var lyr_SantaLina_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantaLina_172, 
                style: style_SantaLina_172,
                popuplayertitle: 'Santa Lina',
                interactive: true,
                title: '<img src="styles/legend/SantaLina_172.png" /> Santa Lina'
            });
var format_SantAnita_173 = new ol.format.GeoJSON();
var features_SantAnita_173 = format_SantAnita_173.readFeatures(json_SantAnita_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantAnita_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantAnita_173.addFeatures(features_SantAnita_173);
var lyr_SantAnita_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantAnita_173, 
                style: style_SantAnita_173,
                popuplayertitle: 'Sant\'Anita',
                interactive: true,
                title: '<img src="styles/legend/SantAnita_173.png" /> Sant\'Anita'
            });
var format_SantAnita_174 = new ol.format.GeoJSON();
var features_SantAnita_174 = format_SantAnita_174.readFeatures(json_SantAnita_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantAnita_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantAnita_174.addFeatures(features_SantAnita_174);
var lyr_SantAnita_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantAnita_174, 
                style: style_SantAnita_174,
                popuplayertitle: 'Sant\'Anita',
                interactive: true,
                title: '<img src="styles/legend/SantAnita_174.png" /> Sant\'Anita'
            });
var format_RuaAlfioBenedini_175 = new ol.format.GeoJSON();
var features_RuaAlfioBenedini_175 = format_RuaAlfioBenedini_175.readFeatures(json_RuaAlfioBenedini_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RuaAlfioBenedini_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuaAlfioBenedini_175.addFeatures(features_RuaAlfioBenedini_175);
var lyr_RuaAlfioBenedini_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuaAlfioBenedini_175, 
                style: style_RuaAlfioBenedini_175,
                popuplayertitle: 'Rua Alfio Benedini',
                interactive: true,
                title: '<img src="styles/legend/RuaAlfioBenedini_175.png" /> Rua Alfio Benedini'
            });
var format_RuaAlfioBenedini_176 = new ol.format.GeoJSON();
var features_RuaAlfioBenedini_176 = format_RuaAlfioBenedini_176.readFeatures(json_RuaAlfioBenedini_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RuaAlfioBenedini_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuaAlfioBenedini_176.addFeatures(features_RuaAlfioBenedini_176);
var lyr_RuaAlfioBenedini_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuaAlfioBenedini_176, 
                style: style_RuaAlfioBenedini_176,
                popuplayertitle: 'Rua Alfio Benedini',
                interactive: true,
                title: '<img src="styles/legend/RuaAlfioBenedini_176.png" /> Rua Alfio Benedini'
            });
var format_RuaAlfioBenedini_177 = new ol.format.GeoJSON();
var features_RuaAlfioBenedini_177 = format_RuaAlfioBenedini_177.readFeatures(json_RuaAlfioBenedini_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RuaAlfioBenedini_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuaAlfioBenedini_177.addFeatures(features_RuaAlfioBenedini_177);
var lyr_RuaAlfioBenedini_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuaAlfioBenedini_177, 
                style: style_RuaAlfioBenedini_177,
                popuplayertitle: 'Rua Alfio Benedini',
                interactive: true,
                title: '<img src="styles/legend/RuaAlfioBenedini_177.png" /> Rua Alfio Benedini'
            });
var format_ResidencialValeVerde_178 = new ol.format.GeoJSON();
var features_ResidencialValeVerde_178 = format_ResidencialValeVerde_178.readFeatures(json_ResidencialValeVerde_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialValeVerde_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialValeVerde_178.addFeatures(features_ResidencialValeVerde_178);
var lyr_ResidencialValeVerde_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialValeVerde_178, 
                style: style_ResidencialValeVerde_178,
                popuplayertitle: 'Residencial Vale Verde',
                interactive: true,
    title: 'Residencial Vale Verde<br />\
    <img src="styles/legend/ResidencialValeVerde_178_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialValeVerde_178_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialValeVerde_178_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialValeVerde_178_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialValeVerde_178_4.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialValeVerde_178_5.png" /> PASSEIO<br />' });
var format_ResidencialValeVerde_179 = new ol.format.GeoJSON();
var features_ResidencialValeVerde_179 = format_ResidencialValeVerde_179.readFeatures(json_ResidencialValeVerde_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialValeVerde_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialValeVerde_179.addFeatures(features_ResidencialValeVerde_179);
var lyr_ResidencialValeVerde_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialValeVerde_179, 
                style: style_ResidencialValeVerde_179,
                popuplayertitle: 'Residencial Vale Verde',
                interactive: true,
                title: '<img src="styles/legend/ResidencialValeVerde_179.png" /> Residencial Vale Verde'
            });
var format_ResidencialYasminTorres_180 = new ol.format.GeoJSON();
var features_ResidencialYasminTorres_180 = format_ResidencialYasminTorres_180.readFeatures(json_ResidencialYasminTorres_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialYasminTorres_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialYasminTorres_180.addFeatures(features_ResidencialYasminTorres_180);
var lyr_ResidencialYasminTorres_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialYasminTorres_180, 
                style: style_ResidencialYasminTorres_180,
                popuplayertitle: 'Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/ResidencialYasminTorres_180.png" /> Residencial Yasmin Torres'
            });
var format_ResidencialYasminTorres_181 = new ol.format.GeoJSON();
var features_ResidencialYasminTorres_181 = format_ResidencialYasminTorres_181.readFeatures(json_ResidencialYasminTorres_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialYasminTorres_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialYasminTorres_181.addFeatures(features_ResidencialYasminTorres_181);
var lyr_ResidencialYasminTorres_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialYasminTorres_181, 
                style: style_ResidencialYasminTorres_181,
                popuplayertitle: 'Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/ResidencialYasminTorres_181.png" /> Residencial Yasmin Torres'
            });
var format_ResidencialTellini_182 = new ol.format.GeoJSON();
var features_ResidencialTellini_182 = format_ResidencialTellini_182.readFeatures(json_ResidencialTellini_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialTellini_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialTellini_182.addFeatures(features_ResidencialTellini_182);
var lyr_ResidencialTellini_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialTellini_182, 
                style: style_ResidencialTellini_182,
                popuplayertitle: 'Residencial Tellini',
                interactive: true,
    title: 'Residencial Tellini<br />\
    <img src="styles/legend/ResidencialTellini_182_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialTellini_182_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialTellini_182_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialTellini_182_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialTellini_182_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialTellini_182_5.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialTellini_182_6.png" /> VIELA<br />' });
var format_ResidencialTellini_183 = new ol.format.GeoJSON();
var features_ResidencialTellini_183 = format_ResidencialTellini_183.readFeatures(json_ResidencialTellini_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialTellini_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialTellini_183.addFeatures(features_ResidencialTellini_183);
var lyr_ResidencialTellini_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialTellini_183, 
                style: style_ResidencialTellini_183,
                popuplayertitle: 'Residencial Tellini',
                interactive: true,
                title: '<img src="styles/legend/ResidencialTellini_183.png" /> Residencial Tellini'
            });
var format_ResidencialSoCarlosII_184 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosII_184 = format_ResidencialSoCarlosII_184.readFeatures(json_ResidencialSoCarlosII_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosII_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosII_184.addFeatures(features_ResidencialSoCarlosII_184);
var lyr_ResidencialSoCarlosII_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosII_184, 
                style: style_ResidencialSoCarlosII_184,
                popuplayertitle: 'Residencial São Carlos II',
                interactive: true,
    title: 'Residencial São Carlos II<br />\
    <img src="styles/legend/ResidencialSoCarlosII_184_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSoCarlosII_184_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSoCarlosII_184_2.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialSoCarlosII_184_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialSoCarlosII_184_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSoCarlosII_184_5.png" /> RUAS<br />' });
var format_ResidencialSoCarlosII_185 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosII_185 = format_ResidencialSoCarlosII_185.readFeatures(json_ResidencialSoCarlosII_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosII_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosII_185.addFeatures(features_ResidencialSoCarlosII_185);
var lyr_ResidencialSoCarlosII_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosII_185, 
                style: style_ResidencialSoCarlosII_185,
                popuplayertitle: 'Residencial São Carlos II',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSoCarlosII_185.png" /> Residencial São Carlos II'
            });
var format_ResidencialSoCarlosI_186 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosI_186 = format_ResidencialSoCarlosI_186.readFeatures(json_ResidencialSoCarlosI_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosI_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosI_186.addFeatures(features_ResidencialSoCarlosI_186);
var lyr_ResidencialSoCarlosI_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosI_186, 
                style: style_ResidencialSoCarlosI_186,
                popuplayertitle: 'Residencial São Carlos I',
                interactive: true,
    title: 'Residencial São Carlos I<br />\
    <img src="styles/legend/ResidencialSoCarlosI_186_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSoCarlosI_186_1.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialSoCarlosI_186_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSoCarlosI_186_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/ResidencialSoCarlosI_186_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialSoCarlosI_186_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialSoCarlosI_186_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSoCarlosI_186_7.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialSoCarlosI_186_8.png" /> VIELA<br />' });
var format_ResidencialSoCarlosI_187 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosI_187 = format_ResidencialSoCarlosI_187.readFeatures(json_ResidencialSoCarlosI_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosI_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosI_187.addFeatures(features_ResidencialSoCarlosI_187);
var lyr_ResidencialSoCarlosI_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosI_187, 
                style: style_ResidencialSoCarlosI_187,
                popuplayertitle: 'Residencial São Carlos I',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSoCarlosI_187.png" /> Residencial São Carlos I'
            });
var format_ResidencialSantaIns_188 = new ol.format.GeoJSON();
var features_ResidencialSantaIns_188 = format_ResidencialSantaIns_188.readFeatures(json_ResidencialSantaIns_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaIns_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaIns_188.addFeatures(features_ResidencialSantaIns_188);
var lyr_ResidencialSantaIns_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaIns_188, 
                style: style_ResidencialSantaIns_188,
                popuplayertitle: 'Residencial Santa Inês',
                interactive: true,
    title: 'Residencial Santa Inês<br />\
    <img src="styles/legend/ResidencialSantaIns_188_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSantaIns_188_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialSantaIns_188_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSantaIns_188_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialSantaIns_188_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSantaIns_188_5.png" /> RUAS<br />' });
var format_ResidencialSantaIns_189 = new ol.format.GeoJSON();
var features_ResidencialSantaIns_189 = format_ResidencialSantaIns_189.readFeatures(json_ResidencialSantaIns_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaIns_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaIns_189.addFeatures(features_ResidencialSantaIns_189);
var lyr_ResidencialSantaIns_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaIns_189, 
                style: style_ResidencialSantaIns_189,
                popuplayertitle: 'Residencial Santa Inês',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSantaIns_189.png" /> Residencial Santa Inês'
            });
var format_ResidencialSantaF_190 = new ol.format.GeoJSON();
var features_ResidencialSantaF_190 = format_ResidencialSantaF_190.readFeatures(json_ResidencialSantaF_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaF_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaF_190.addFeatures(features_ResidencialSantaF_190);
var lyr_ResidencialSantaF_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaF_190, 
                style: style_ResidencialSantaF_190,
                popuplayertitle: 'Residencial Santa Fé',
                interactive: true,
    title: 'Residencial Santa Fé<br />\
    <img src="styles/legend/ResidencialSantaF_190_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialSantaF_190_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSantaF_190_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSantaF_190_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialSantaF_190_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSantaF_190_5.png" /> RUAS<br />' });
var format_ResidencialSantaF_191 = new ol.format.GeoJSON();
var features_ResidencialSantaF_191 = format_ResidencialSantaF_191.readFeatures(json_ResidencialSantaF_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaF_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaF_191.addFeatures(features_ResidencialSantaF_191);
var lyr_ResidencialSantaF_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaF_191, 
                style: style_ResidencialSantaF_191,
                popuplayertitle: 'Residencial Santa Fé',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSantaF_191.png" /> Residencial Santa Fé'
            });
var format_ResidencialQuintadosOitis_192 = new ol.format.GeoJSON();
var features_ResidencialQuintadosOitis_192 = format_ResidencialQuintadosOitis_192.readFeatures(json_ResidencialQuintadosOitis_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadosOitis_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadosOitis_192.addFeatures(features_ResidencialQuintadosOitis_192);
var lyr_ResidencialQuintadosOitis_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadosOitis_192, 
                style: style_ResidencialQuintadosOitis_192,
                popuplayertitle: 'Residencial Quinta dos Oitis',
                interactive: true,
    title: 'Residencial Quinta dos Oitis<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_192_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_192_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_192_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_192_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_192_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_192_5.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_192_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_192_7.png" /> RUAS<br />' });
var format_ResidencialQuintadosOitis_193 = new ol.format.GeoJSON();
var features_ResidencialQuintadosOitis_193 = format_ResidencialQuintadosOitis_193.readFeatures(json_ResidencialQuintadosOitis_193, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadosOitis_193 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadosOitis_193.addFeatures(features_ResidencialQuintadosOitis_193);
var lyr_ResidencialQuintadosOitis_193 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadosOitis_193, 
                style: style_ResidencialQuintadosOitis_193,
                popuplayertitle: 'Residencial Quinta dos Oitis',
                interactive: true,
                title: '<img src="styles/legend/ResidencialQuintadosOitis_193.png" /> Residencial Quinta dos Oitis'
            });
var format_ResidencialQuintadoSol_194 = new ol.format.GeoJSON();
var features_ResidencialQuintadoSol_194 = format_ResidencialQuintadoSol_194.readFeatures(json_ResidencialQuintadoSol_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadoSol_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadoSol_194.addFeatures(features_ResidencialQuintadoSol_194);
var lyr_ResidencialQuintadoSol_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadoSol_194, 
                style: style_ResidencialQuintadoSol_194,
                popuplayertitle: 'Residencial Quinta do Sol',
                interactive: true,
    title: 'Residencial Quinta do Sol<br />\
    <img src="styles/legend/ResidencialQuintadoSol_194_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialQuintadoSol_194_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialQuintadoSol_194_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialQuintadoSol_194_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialQuintadoSol_194_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialQuintadoSol_194_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialQuintadoSol_194_6.png" /> RUAS<br />' });
var format_ResidencialQuintadoSol_195 = new ol.format.GeoJSON();
var features_ResidencialQuintadoSol_195 = format_ResidencialQuintadoSol_195.readFeatures(json_ResidencialQuintadoSol_195, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadoSol_195 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadoSol_195.addFeatures(features_ResidencialQuintadoSol_195);
var lyr_ResidencialQuintadoSol_195 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadoSol_195, 
                style: style_ResidencialQuintadoSol_195,
                popuplayertitle: 'Residencial Quinta do Sol',
                interactive: true,
                title: '<img src="styles/legend/ResidencialQuintadoSol_195.png" /> Residencial Quinta do Sol'
            });
var format_ResidencialPousoAlegreII_196 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegreII_196 = format_ResidencialPousoAlegreII_196.readFeatures(json_ResidencialPousoAlegreII_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegreII_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegreII_196.addFeatures(features_ResidencialPousoAlegreII_196);
var lyr_ResidencialPousoAlegreII_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegreII_196, 
                style: style_ResidencialPousoAlegreII_196,
                popuplayertitle: 'Residencial Pouso Alegre II',
                interactive: true,
    title: 'Residencial Pouso Alegre II<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_196_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_196_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_196_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_196_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_196_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_196_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_196_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_196_7.png" /> SERVIDAO<br />' });
var format_ResidencialPousoAlegreII_197 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegreII_197 = format_ResidencialPousoAlegreII_197.readFeatures(json_ResidencialPousoAlegreII_197, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegreII_197 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegreII_197.addFeatures(features_ResidencialPousoAlegreII_197);
var lyr_ResidencialPousoAlegreII_197 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegreII_197, 
                style: style_ResidencialPousoAlegreII_197,
                popuplayertitle: 'Residencial Pouso Alegre II',
                interactive: true,
                title: '<img src="styles/legend/ResidencialPousoAlegreII_197.png" /> Residencial Pouso Alegre II'
            });
var format_ResidencialPousoAlegre_198 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegre_198 = format_ResidencialPousoAlegre_198.readFeatures(json_ResidencialPousoAlegre_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegre_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegre_198.addFeatures(features_ResidencialPousoAlegre_198);
var lyr_ResidencialPousoAlegre_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegre_198, 
                style: style_ResidencialPousoAlegre_198,
                popuplayertitle: 'Residencial Pouso Alegre',
                interactive: true,
    title: 'Residencial Pouso Alegre<br />\
    <img src="styles/legend/ResidencialPousoAlegre_198_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialPousoAlegre_198_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialPousoAlegre_198_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialPousoAlegre_198_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialPousoAlegre_198_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialPousoAlegre_198_5.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialPousoAlegre_198_6.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialPousoAlegre_198_7.png" /> VIELA<br />' });
var format_ResidencialPousoAlegre_199 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegre_199 = format_ResidencialPousoAlegre_199.readFeatures(json_ResidencialPousoAlegre_199, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegre_199 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegre_199.addFeatures(features_ResidencialPousoAlegre_199);
var lyr_ResidencialPousoAlegre_199 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegre_199, 
                style: style_ResidencialPousoAlegre_199,
                popuplayertitle: 'Residencial Pouso Alegre',
                interactive: true,
                title: '<img src="styles/legend/ResidencialPousoAlegre_199.png" /> Residencial Pouso Alegre'
            });
var format_ResidencialPiamalim_200 = new ol.format.GeoJSON();
var features_ResidencialPiamalim_200 = format_ResidencialPiamalim_200.readFeatures(json_ResidencialPiamalim_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPiamalim_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPiamalim_200.addFeatures(features_ResidencialPiamalim_200);
var lyr_ResidencialPiamalim_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPiamalim_200, 
                style: style_ResidencialPiamalim_200,
                popuplayertitle: 'Residencial Piamalim',
                interactive: true,
    title: 'Residencial Piamalim<br />\
    <img src="styles/legend/ResidencialPiamalim_200_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialPiamalim_200_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialPiamalim_200_2.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialPiamalim_200_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialPiamalim_200_4.png" /> RUAS<br />' });
var format_ResidencialPiamalim_201 = new ol.format.GeoJSON();
var features_ResidencialPiamalim_201 = format_ResidencialPiamalim_201.readFeatures(json_ResidencialPiamalim_201, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPiamalim_201 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPiamalim_201.addFeatures(features_ResidencialPiamalim_201);
var lyr_ResidencialPiamalim_201 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPiamalim_201, 
                style: style_ResidencialPiamalim_201,
                popuplayertitle: 'Residencial Piamalim',
                interactive: true,
                title: '<img src="styles/legend/ResidencialPiamalim_201.png" /> Residencial Piamalim'
            });
var format_ResidencialParquedosPassaros_202 = new ol.format.GeoJSON();
var features_ResidencialParquedosPassaros_202 = format_ResidencialParquedosPassaros_202.readFeatures(json_ResidencialParquedosPassaros_202, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialParquedosPassaros_202 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialParquedosPassaros_202.addFeatures(features_ResidencialParquedosPassaros_202);
var lyr_ResidencialParquedosPassaros_202 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialParquedosPassaros_202, 
                style: style_ResidencialParquedosPassaros_202,
                popuplayertitle: 'Residencial Parque dos Passaros',
                interactive: true,
    title: 'Residencial Parque dos Passaros<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_202_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_202_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_202_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_202_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_202_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_202_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_202_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_202_7.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_202_8.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_202_9.png" /> VIELA<br />' });
var format_ResidencialParquedosPassaros_203 = new ol.format.GeoJSON();
var features_ResidencialParquedosPassaros_203 = format_ResidencialParquedosPassaros_203.readFeatures(json_ResidencialParquedosPassaros_203, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialParquedosPassaros_203 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialParquedosPassaros_203.addFeatures(features_ResidencialParquedosPassaros_203);
var lyr_ResidencialParquedosPassaros_203 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialParquedosPassaros_203, 
                style: style_ResidencialParquedosPassaros_203,
                popuplayertitle: 'Residencial Parque dos Passaros',
                interactive: true,
                title: '<img src="styles/legend/ResidencialParquedosPassaros_203.png" /> Residencial Parque dos Passaros'
            });
var format_ResicencialNairRetuciII_204 = new ol.format.GeoJSON();
var features_ResicencialNairRetuciII_204 = format_ResicencialNairRetuciII_204.readFeatures(json_ResicencialNairRetuciII_204, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuciII_204 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuciII_204.addFeatures(features_ResicencialNairRetuciII_204);
var lyr_ResicencialNairRetuciII_204 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuciII_204, 
                style: style_ResicencialNairRetuciII_204,
                popuplayertitle: 'Resicencial Nair Retuci II',
                interactive: true,
    title: 'Resicencial Nair Retuci II<br />\
    <img src="styles/legend/ResicencialNairRetuciII_204_0.png" /> APP<br />\
    <img src="styles/legend/ResicencialNairRetuciII_204_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResicencialNairRetuciII_204_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResicencialNairRetuciII_204_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResicencialNairRetuciII_204_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResicencialNairRetuciII_204_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResicencialNairRetuciII_204_6.png" /> RUAS<br />' });
var format_ResicencialNairRetuciII_205 = new ol.format.GeoJSON();
var features_ResicencialNairRetuciII_205 = format_ResicencialNairRetuciII_205.readFeatures(json_ResicencialNairRetuciII_205, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuciII_205 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuciII_205.addFeatures(features_ResicencialNairRetuciII_205);
var lyr_ResicencialNairRetuciII_205 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuciII_205, 
                style: style_ResicencialNairRetuciII_205,
                popuplayertitle: 'Resicencial Nair Retuci II',
                interactive: true,
                title: '<img src="styles/legend/ResicencialNairRetuciII_205.png" /> Resicencial Nair Retuci II'
            });
var format_ResicencialNairRetuci_206 = new ol.format.GeoJSON();
var features_ResicencialNairRetuci_206 = format_ResicencialNairRetuci_206.readFeatures(json_ResicencialNairRetuci_206, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuci_206 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuci_206.addFeatures(features_ResicencialNairRetuci_206);
var lyr_ResicencialNairRetuci_206 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuci_206, 
                style: style_ResicencialNairRetuci_206,
                popuplayertitle: 'Resicencial Nair Retuci',
                interactive: true,
    title: 'Resicencial Nair Retuci<br />\
    <img src="styles/legend/ResicencialNairRetuci_206_0.png" /> APP<br />\
    <img src="styles/legend/ResicencialNairRetuci_206_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResicencialNairRetuci_206_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResicencialNairRetuci_206_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/ResicencialNairRetuci_206_4.png" /> LOTES<br />\
    <img src="styles/legend/ResicencialNairRetuci_206_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResicencialNairRetuci_206_6.png" /> RUAS<br />\
    <img src="styles/legend/ResicencialNairRetuci_206_7.png" /> VIELA<br />' });
var format_ResicencialNairRetuci_207 = new ol.format.GeoJSON();
var features_ResicencialNairRetuci_207 = format_ResicencialNairRetuci_207.readFeatures(json_ResicencialNairRetuci_207, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuci_207 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuci_207.addFeatures(features_ResicencialNairRetuci_207);
var lyr_ResicencialNairRetuci_207 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuci_207, 
                style: style_ResicencialNairRetuci_207,
                popuplayertitle: 'Resicencial Nair Retuci',
                interactive: true,
                title: '<img src="styles/legend/ResicencialNairRetuci_207.png" /> Resicencial Nair Retuci'
            });
var format_ResidencialMoradadoBosque_208 = new ol.format.GeoJSON();
var features_ResidencialMoradadoBosque_208 = format_ResidencialMoradadoBosque_208.readFeatures(json_ResidencialMoradadoBosque_208, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMoradadoBosque_208 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMoradadoBosque_208.addFeatures(features_ResidencialMoradadoBosque_208);
var lyr_ResidencialMoradadoBosque_208 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMoradadoBosque_208, 
                style: style_ResidencialMoradadoBosque_208,
                popuplayertitle: 'Residencial Morada do Bosque',
                interactive: true,
    title: 'Residencial Morada do Bosque<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_208_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_208_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_208_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_208_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_208_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_208_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_208_6.png" /> RUAS<br />' });
var format_ResidencialMoradadoBosque_209 = new ol.format.GeoJSON();
var features_ResidencialMoradadoBosque_209 = format_ResidencialMoradadoBosque_209.readFeatures(json_ResidencialMoradadoBosque_209, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMoradadoBosque_209 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMoradadoBosque_209.addFeatures(features_ResidencialMoradadoBosque_209);
var lyr_ResidencialMoradadoBosque_209 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMoradadoBosque_209, 
                style: style_ResidencialMoradadoBosque_209,
                popuplayertitle: 'Residencial Morada do Bosque',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMoradadoBosque_209.png" /> Residencial Morada do Bosque'
            });
var format_ResidencialMarthaHelena_210 = new ol.format.GeoJSON();
var features_ResidencialMarthaHelena_210 = format_ResidencialMarthaHelena_210.readFeatures(json_ResidencialMarthaHelena_210, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarthaHelena_210 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarthaHelena_210.addFeatures(features_ResidencialMarthaHelena_210);
var lyr_ResidencialMarthaHelena_210 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarthaHelena_210, 
                style: style_ResidencialMarthaHelena_210,
                popuplayertitle: 'Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarthaHelena_210.png" /> Residencial Martha Helena'
            });
var format_ResidencialMarthaHelena_211 = new ol.format.GeoJSON();
var features_ResidencialMarthaHelena_211 = format_ResidencialMarthaHelena_211.readFeatures(json_ResidencialMarthaHelena_211, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarthaHelena_211 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarthaHelena_211.addFeatures(features_ResidencialMarthaHelena_211);
var lyr_ResidencialMarthaHelena_211 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarthaHelena_211, 
                style: style_ResidencialMarthaHelena_211,
                popuplayertitle: 'Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarthaHelena_211.png" /> Residencial Martha Helena'
            });
var format_ResidencialMarioTasso_212 = new ol.format.GeoJSON();
var features_ResidencialMarioTasso_212 = format_ResidencialMarioTasso_212.readFeatures(json_ResidencialMarioTasso_212, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarioTasso_212 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarioTasso_212.addFeatures(features_ResidencialMarioTasso_212);
var lyr_ResidencialMarioTasso_212 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarioTasso_212, 
                style: style_ResidencialMarioTasso_212,
                popuplayertitle: 'Residencial Mario Tasso',
                interactive: true,
    title: 'Residencial Mario Tasso<br />\
    <img src="styles/legend/ResidencialMarioTasso_212_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialMarioTasso_212_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialMarioTasso_212_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialMarioTasso_212_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialMarioTasso_212_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialMarioTasso_212_5.png" /> RUAS<br />' });
var format_ResidencialMarioTasso_213 = new ol.format.GeoJSON();
var features_ResidencialMarioTasso_213 = format_ResidencialMarioTasso_213.readFeatures(json_ResidencialMarioTasso_213, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarioTasso_213 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarioTasso_213.addFeatures(features_ResidencialMarioTasso_213);
var lyr_ResidencialMarioTasso_213 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarioTasso_213, 
                style: style_ResidencialMarioTasso_213,
                popuplayertitle: 'Residencial Mario Tasso',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarioTasso_213.png" /> Residencial Mario Tasso'
            });
var format_ResidencialMarianaAlarcon_214 = new ol.format.GeoJSON();
var features_ResidencialMarianaAlarcon_214 = format_ResidencialMarianaAlarcon_214.readFeatures(json_ResidencialMarianaAlarcon_214, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarianaAlarcon_214 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarianaAlarcon_214.addFeatures(features_ResidencialMarianaAlarcon_214);
var lyr_ResidencialMarianaAlarcon_214 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarianaAlarcon_214, 
                style: style_ResidencialMarianaAlarcon_214,
                popuplayertitle: 'Residencial Mariana Alarcon ',
                interactive: true,
    title: 'Residencial Mariana Alarcon <br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_214_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_214_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_214_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_214_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_214_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_214_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_214_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_214_7.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_214_8.png" /> VIELA<br />' });
var format_ResidencialMarianaAlarcon_215 = new ol.format.GeoJSON();
var features_ResidencialMarianaAlarcon_215 = format_ResidencialMarianaAlarcon_215.readFeatures(json_ResidencialMarianaAlarcon_215, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarianaAlarcon_215 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarianaAlarcon_215.addFeatures(features_ResidencialMarianaAlarcon_215);
var lyr_ResidencialMarianaAlarcon_215 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarianaAlarcon_215, 
                style: style_ResidencialMarianaAlarcon_215,
                popuplayertitle: 'Residencial Mariana Alarcon ',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarianaAlarcon_215.png" /> Residencial Mariana Alarcon '
            });
var format_ResidencialJardimCanada_216 = new ol.format.GeoJSON();
var features_ResidencialJardimCanada_216 = format_ResidencialJardimCanada_216.readFeatures(json_ResidencialJardimCanada_216, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJardimCanada_216 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJardimCanada_216.addFeatures(features_ResidencialJardimCanada_216);
var lyr_ResidencialJardimCanada_216 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJardimCanada_216, 
                style: style_ResidencialJardimCanada_216,
                popuplayertitle: 'Residencial Jardim Canada',
                interactive: true,
                title: '<img src="styles/legend/ResidencialJardimCanada_216.png" /> Residencial Jardim Canada'
            });
var format_ResidencialJardimCanada_217 = new ol.format.GeoJSON();
var features_ResidencialJardimCanada_217 = format_ResidencialJardimCanada_217.readFeatures(json_ResidencialJardimCanada_217, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJardimCanada_217 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJardimCanada_217.addFeatures(features_ResidencialJardimCanada_217);
var lyr_ResidencialJardimCanada_217 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJardimCanada_217, 
                style: style_ResidencialJardimCanada_217,
                popuplayertitle: 'Residencial Jardim Canada',
                interactive: true,
                title: '<img src="styles/legend/ResidencialJardimCanada_217.png" /> Residencial Jardim Canada'
            });
var format_ResidencialJabuticabeiras_218 = new ol.format.GeoJSON();
var features_ResidencialJabuticabeiras_218 = format_ResidencialJabuticabeiras_218.readFeatures(json_ResidencialJabuticabeiras_218, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJabuticabeiras_218 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJabuticabeiras_218.addFeatures(features_ResidencialJabuticabeiras_218);
var lyr_ResidencialJabuticabeiras_218 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJabuticabeiras_218, 
                style: style_ResidencialJabuticabeiras_218,
                popuplayertitle: 'Residencial Jabuticabeiras',
                interactive: true,
    title: 'Residencial Jabuticabeiras<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_218_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_218_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_218_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_218_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_218_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_218_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_218_6.png" /> RUAS<br />' });
var format_ResidencialJabuticabeiras_219 = new ol.format.GeoJSON();
var features_ResidencialJabuticabeiras_219 = format_ResidencialJabuticabeiras_219.readFeatures(json_ResidencialJabuticabeiras_219, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJabuticabeiras_219 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJabuticabeiras_219.addFeatures(features_ResidencialJabuticabeiras_219);
var lyr_ResidencialJabuticabeiras_219 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJabuticabeiras_219, 
                style: style_ResidencialJabuticabeiras_219,
                popuplayertitle: 'Residencial Jabuticabeiras',
                interactive: true,
                title: '<img src="styles/legend/ResidencialJabuticabeiras_219.png" /> Residencial Jabuticabeiras'
            });
var format_ResidencialGramadosII_220 = new ol.format.GeoJSON();
var features_ResidencialGramadosII_220 = format_ResidencialGramadosII_220.readFeatures(json_ResidencialGramadosII_220, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGramadosII_220 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGramadosII_220.addFeatures(features_ResidencialGramadosII_220);
var lyr_ResidencialGramadosII_220 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGramadosII_220, 
                style: style_ResidencialGramadosII_220,
                popuplayertitle: 'Residencial Gramados II',
                interactive: true,
    title: 'Residencial Gramados II<br />\
    <img src="styles/legend/ResidencialGramadosII_220_0.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialGramadosII_220_1.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialGramadosII_220_2.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialGramadosII_220_3.png" /> RUAS<br />' });
var format_ResidencialGramadosII_221 = new ol.format.GeoJSON();
var features_ResidencialGramadosII_221 = format_ResidencialGramadosII_221.readFeatures(json_ResidencialGramadosII_221, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGramadosII_221 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGramadosII_221.addFeatures(features_ResidencialGramadosII_221);
var lyr_ResidencialGramadosII_221 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGramadosII_221, 
                style: style_ResidencialGramadosII_221,
                popuplayertitle: 'Residencial Gramados II',
                interactive: true,
                title: '<img src="styles/legend/ResidencialGramadosII_221.png" /> Residencial Gramados II'
            });
var format_ResidencialGramados_222 = new ol.format.GeoJSON();
var features_ResidencialGramados_222 = format_ResidencialGramados_222.readFeatures(json_ResidencialGramados_222, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGramados_222 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGramados_222.addFeatures(features_ResidencialGramados_222);
var lyr_ResidencialGramados_222 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGramados_222, 
                style: style_ResidencialGramados_222,
                popuplayertitle: 'Residencial Gramados',
                interactive: true,
    title: 'Residencial Gramados<br />\
    <img src="styles/legend/ResidencialGramados_222_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialGramados_222_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialGramados_222_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialGramados_222_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialGramados_222_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialGramados_222_5.png" /> RUAS<br />' });
var format_ResidencialGramados_223 = new ol.format.GeoJSON();
var features_ResidencialGramados_223 = format_ResidencialGramados_223.readFeatures(json_ResidencialGramados_223, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGramados_223 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGramados_223.addFeatures(features_ResidencialGramados_223);
var lyr_ResidencialGramados_223 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGramados_223, 
                style: style_ResidencialGramados_223,
                popuplayertitle: 'Residencial Gramados',
                interactive: true,
                title: '<img src="styles/legend/ResidencialGramados_223.png" /> Residencial Gramados'
            });
var format_ResidencialGaia_224 = new ol.format.GeoJSON();
var features_ResidencialGaia_224 = format_ResidencialGaia_224.readFeatures(json_ResidencialGaia_224, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGaia_224 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGaia_224.addFeatures(features_ResidencialGaia_224);
var lyr_ResidencialGaia_224 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGaia_224, 
                style: style_ResidencialGaia_224,
                popuplayertitle: 'Residencial Gaia',
                interactive: true,
    title: 'Residencial Gaia<br />\
    <img src="styles/legend/ResidencialGaia_224_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialGaia_224_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialGaia_224_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialGaia_224_3.png" /> DESMEMBRAMENTO DOACAO DESAPROPRIACAO<br />\
    <img src="styles/legend/ResidencialGaia_224_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialGaia_224_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialGaia_224_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialGaia_224_7.png" /> VIELA<br />' });
var format_ResidencialGaia_225 = new ol.format.GeoJSON();
var features_ResidencialGaia_225 = format_ResidencialGaia_225.readFeatures(json_ResidencialGaia_225, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGaia_225 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGaia_225.addFeatures(features_ResidencialGaia_225);
var lyr_ResidencialGaia_225 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGaia_225, 
                style: style_ResidencialGaia_225,
                popuplayertitle: 'Residencial Gaia',
                interactive: true,
                title: '<img src="styles/legend/ResidencialGaia_225.png" /> Residencial Gaia'
            });
var format_ResidencialFrutuoso_226 = new ol.format.GeoJSON();
var features_ResidencialFrutuoso_226 = format_ResidencialFrutuoso_226.readFeatures(json_ResidencialFrutuoso_226, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialFrutuoso_226 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialFrutuoso_226.addFeatures(features_ResidencialFrutuoso_226);
var lyr_ResidencialFrutuoso_226 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialFrutuoso_226, 
                style: style_ResidencialFrutuoso_226,
                popuplayertitle: 'Residencial Frutuoso',
                interactive: true,
    title: 'Residencial Frutuoso<br />\
    <img src="styles/legend/ResidencialFrutuoso_226_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialFrutuoso_226_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialFrutuoso_226_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialFrutuoso_226_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialFrutuoso_226_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialFrutuoso_226_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialFrutuoso_226_6.png" /> RUAS<br />' });
var format_ResidencialFrutuoso_227 = new ol.format.GeoJSON();
var features_ResidencialFrutuoso_227 = format_ResidencialFrutuoso_227.readFeatures(json_ResidencialFrutuoso_227, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialFrutuoso_227 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialFrutuoso_227.addFeatures(features_ResidencialFrutuoso_227);
var lyr_ResidencialFrutuoso_227 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialFrutuoso_227, 
                style: style_ResidencialFrutuoso_227,
                popuplayertitle: 'Residencial Frutuoso',
                interactive: true,
                title: '<img src="styles/legend/ResidencialFrutuoso_227.png" /> Residencial Frutuoso'
            });
var format_ResidencialFaggioni_228 = new ol.format.GeoJSON();
var features_ResidencialFaggioni_228 = format_ResidencialFaggioni_228.readFeatures(json_ResidencialFaggioni_228, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialFaggioni_228 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialFaggioni_228.addFeatures(features_ResidencialFaggioni_228);
var lyr_ResidencialFaggioni_228 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialFaggioni_228, 
                style: style_ResidencialFaggioni_228,
                popuplayertitle: 'Residencial Faggioni',
                interactive: true,
    title: 'Residencial Faggioni<br />\
    <img src="styles/legend/ResidencialFaggioni_228_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialFaggioni_228_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialFaggioni_228_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialFaggioni_228_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialFaggioni_228_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialFaggioni_228_5.png" /> RUAS<br />' });
var format_ResidencialFaggioni_229 = new ol.format.GeoJSON();
var features_ResidencialFaggioni_229 = format_ResidencialFaggioni_229.readFeatures(json_ResidencialFaggioni_229, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialFaggioni_229 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialFaggioni_229.addFeatures(features_ResidencialFaggioni_229);
var lyr_ResidencialFaggioni_229 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialFaggioni_229, 
                style: style_ResidencialFaggioni_229,
                popuplayertitle: 'Residencial Faggioni',
                interactive: true,
                title: '<img src="styles/legend/ResidencialFaggioni_229.png" /> Residencial Faggioni'
            });
var format_ResidencialEssenza_230 = new ol.format.GeoJSON();
var features_ResidencialEssenza_230 = format_ResidencialEssenza_230.readFeatures(json_ResidencialEssenza_230, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialEssenza_230 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialEssenza_230.addFeatures(features_ResidencialEssenza_230);
var lyr_ResidencialEssenza_230 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialEssenza_230, 
                style: style_ResidencialEssenza_230,
                popuplayertitle: 'Residencial Essenza',
                interactive: true,
    title: 'Residencial Essenza<br />\
    <img src="styles/legend/ResidencialEssenza_230_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialEssenza_230_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialEssenza_230_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialEssenza_230_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialEssenza_230_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialEssenza_230_5.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialEssenza_230_6.png" /> PASSEIO<br />' });
var format_ResidencialEssenza_231 = new ol.format.GeoJSON();
var features_ResidencialEssenza_231 = format_ResidencialEssenza_231.readFeatures(json_ResidencialEssenza_231, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialEssenza_231 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialEssenza_231.addFeatures(features_ResidencialEssenza_231);
var lyr_ResidencialEssenza_231 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialEssenza_231, 
                style: style_ResidencialEssenza_231,
                popuplayertitle: 'Residencial Essenza',
                interactive: true,
                title: '<img src="styles/legend/ResidencialEssenza_231.png" /> Residencial Essenza'
            });
var format_ResidencialDomingosJardini_232 = new ol.format.GeoJSON();
var features_ResidencialDomingosJardini_232 = format_ResidencialDomingosJardini_232.readFeatures(json_ResidencialDomingosJardini_232, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialDomingosJardini_232 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialDomingosJardini_232.addFeatures(features_ResidencialDomingosJardini_232);
var lyr_ResidencialDomingosJardini_232 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialDomingosJardini_232, 
                style: style_ResidencialDomingosJardini_232,
                popuplayertitle: 'Residencial Domingos Jardini',
                interactive: true,
    title: 'Residencial Domingos Jardini<br />\
    <img src="styles/legend/ResidencialDomingosJardini_232_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialDomingosJardini_232_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialDomingosJardini_232_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialDomingosJardini_232_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialDomingosJardini_232_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialDomingosJardini_232_5.png" /> RUAS<br />' });
var format_ResidencialDomingosJardini_233 = new ol.format.GeoJSON();
var features_ResidencialDomingosJardini_233 = format_ResidencialDomingosJardini_233.readFeatures(json_ResidencialDomingosJardini_233, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialDomingosJardini_233 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialDomingosJardini_233.addFeatures(features_ResidencialDomingosJardini_233);
var lyr_ResidencialDomingosJardini_233 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialDomingosJardini_233, 
                style: style_ResidencialDomingosJardini_233,
                popuplayertitle: 'Residencial Domingos Jardini',
                interactive: true,
                title: '<img src="styles/legend/ResidencialDomingosJardini_233.png" /> Residencial Domingos Jardini'
            });
var format_ResidencialCintraAlves_234 = new ol.format.GeoJSON();
var features_ResidencialCintraAlves_234 = format_ResidencialCintraAlves_234.readFeatures(json_ResidencialCintraAlves_234, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialCintraAlves_234 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialCintraAlves_234.addFeatures(features_ResidencialCintraAlves_234);
var lyr_ResidencialCintraAlves_234 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialCintraAlves_234, 
                style: style_ResidencialCintraAlves_234,
                popuplayertitle: 'Residencial Cintra Alves',
                interactive: true,
    title: 'Residencial Cintra Alves<br />\
    <img src="styles/legend/ResidencialCintraAlves_234_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialCintraAlves_234_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialCintraAlves_234_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialCintraAlves_234_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialCintraAlves_234_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialCintraAlves_234_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialCintraAlves_234_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialCintraAlves_234_7.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialCintraAlves_234_8.png" /> VIELA<br />' });
var format_ResidencialCintraAlves_235 = new ol.format.GeoJSON();
var features_ResidencialCintraAlves_235 = format_ResidencialCintraAlves_235.readFeatures(json_ResidencialCintraAlves_235, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialCintraAlves_235 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialCintraAlves_235.addFeatures(features_ResidencialCintraAlves_235);
var lyr_ResidencialCintraAlves_235 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialCintraAlves_235, 
                style: style_ResidencialCintraAlves_235,
                popuplayertitle: 'Residencial Cintra Alves',
                interactive: true,
                title: '<img src="styles/legend/ResidencialCintraAlves_235.png" /> Residencial Cintra Alves'
            });
var format_ResidencialBoaVista_236 = new ol.format.GeoJSON();
var features_ResidencialBoaVista_236 = format_ResidencialBoaVista_236.readFeatures(json_ResidencialBoaVista_236, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialBoaVista_236 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialBoaVista_236.addFeatures(features_ResidencialBoaVista_236);
var lyr_ResidencialBoaVista_236 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialBoaVista_236, 
                style: style_ResidencialBoaVista_236,
                popuplayertitle: 'Residencial Boa Vista',
                interactive: true,
    title: 'Residencial Boa Vista<br />\
    <img src="styles/legend/ResidencialBoaVista_236_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialBoaVista_236_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialBoaVista_236_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialBoaVista_236_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialBoaVista_236_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialBoaVista_236_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialBoaVista_236_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialBoaVista_236_7.png" /> RUAS<br />' });
var format_ResidencialBoaVista_237 = new ol.format.GeoJSON();
var features_ResidencialBoaVista_237 = format_ResidencialBoaVista_237.readFeatures(json_ResidencialBoaVista_237, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialBoaVista_237 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialBoaVista_237.addFeatures(features_ResidencialBoaVista_237);
var lyr_ResidencialBoaVista_237 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialBoaVista_237, 
                style: style_ResidencialBoaVista_237,
                popuplayertitle: 'Residencial Boa Vista',
                interactive: true,
                title: '<img src="styles/legend/ResidencialBoaVista_237.png" /> Residencial Boa Vista'
            });
var format_ResidencialAltodaFazenda_238 = new ol.format.GeoJSON();
var features_ResidencialAltodaFazenda_238 = format_ResidencialAltodaFazenda_238.readFeatures(json_ResidencialAltodaFazenda_238, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialAltodaFazenda_238 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAltodaFazenda_238.addFeatures(features_ResidencialAltodaFazenda_238);
var lyr_ResidencialAltodaFazenda_238 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAltodaFazenda_238, 
                style: style_ResidencialAltodaFazenda_238,
                popuplayertitle: 'Residencial Alto da Fazenda',
                interactive: true,
    title: 'Residencial Alto da Fazenda<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_238_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_238_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_238_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_238_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_238_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_238_5.png" /> RUAS<br />' });
var format_ResidencialAltodaFazenda_239 = new ol.format.GeoJSON();
var features_ResidencialAltodaFazenda_239 = format_ResidencialAltodaFazenda_239.readFeatures(json_ResidencialAltodaFazenda_239, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialAltodaFazenda_239 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAltodaFazenda_239.addFeatures(features_ResidencialAltodaFazenda_239);
var lyr_ResidencialAltodaFazenda_239 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAltodaFazenda_239, 
                style: style_ResidencialAltodaFazenda_239,
                popuplayertitle: 'Residencial Alto da Fazenda',
                interactive: true,
                title: '<img src="styles/legend/ResidencialAltodaFazenda_239.png" /> Residencial Alto da Fazenda'
            });
var format_ResidencialAnaHelena_240 = new ol.format.GeoJSON();
var features_ResidencialAnaHelena_240 = format_ResidencialAnaHelena_240.readFeatures(json_ResidencialAnaHelena_240, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialAnaHelena_240 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAnaHelena_240.addFeatures(features_ResidencialAnaHelena_240);
var lyr_ResidencialAnaHelena_240 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAnaHelena_240, 
                style: style_ResidencialAnaHelena_240,
                popuplayertitle: 'Residencial Ana Helena',
                interactive: true,
    title: 'Residencial Ana Helena<br />\
    <img src="styles/legend/ResidencialAnaHelena_240_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialAnaHelena_240_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialAnaHelena_240_2.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialAnaHelena_240_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialAnaHelena_240_4.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialAnaHelena_240_5.png" /> VIELA<br />' });
var format_ResidencialAnaHelena_241 = new ol.format.GeoJSON();
var features_ResidencialAnaHelena_241 = format_ResidencialAnaHelena_241.readFeatures(json_ResidencialAnaHelena_241, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialAnaHelena_241 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAnaHelena_241.addFeatures(features_ResidencialAnaHelena_241);
var lyr_ResidencialAnaHelena_241 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAnaHelena_241, 
                style: style_ResidencialAnaHelena_241,
                popuplayertitle: 'Residencial Ana Helena',
                interactive: true,
                title: '<img src="styles/legend/ResidencialAnaHelena_241.png" /> Residencial Ana Helena'
            });
var format_ReservaAbaete_242 = new ol.format.GeoJSON();
var features_ReservaAbaete_242 = format_ReservaAbaete_242.readFeatures(json_ReservaAbaete_242, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ReservaAbaete_242 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservaAbaete_242.addFeatures(features_ReservaAbaete_242);
var lyr_ReservaAbaete_242 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservaAbaete_242, 
                style: style_ReservaAbaete_242,
                popuplayertitle: 'Reserva Abaete',
                interactive: true,
    title: 'Reserva Abaete<br />\
    <img src="styles/legend/ReservaAbaete_242_0.png" /> APP<br />\
    <img src="styles/legend/ReservaAbaete_242_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ReservaAbaete_242_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ReservaAbaete_242_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ReservaAbaete_242_4.png" /> LOTES<br />\
    <img src="styles/legend/ReservaAbaete_242_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ReservaAbaete_242_6.png" /> RUAS<br />' });
var format_ReservaAbaete_243 = new ol.format.GeoJSON();
var features_ReservaAbaete_243 = format_ReservaAbaete_243.readFeatures(json_ReservaAbaete_243, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ReservaAbaete_243 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservaAbaete_243.addFeatures(features_ReservaAbaete_243);
var lyr_ReservaAbaete_243 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservaAbaete_243, 
                style: style_ReservaAbaete_243,
                popuplayertitle: 'Reserva Abaete',
                interactive: true,
                title: '<img src="styles/legend/ReservaAbaete_243.png" /> Reserva Abaete'
            });
var format_RecantoMeneghetti_244 = new ol.format.GeoJSON();
var features_RecantoMeneghetti_244 = format_RecantoMeneghetti_244.readFeatures(json_RecantoMeneghetti_244, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoMeneghetti_244 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoMeneghetti_244.addFeatures(features_RecantoMeneghetti_244);
var lyr_RecantoMeneghetti_244 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoMeneghetti_244, 
                style: style_RecantoMeneghetti_244,
                popuplayertitle: 'Recanto Meneghetti',
                interactive: true,
    title: 'Recanto Meneghetti<br />\
    <img src="styles/legend/RecantoMeneghetti_244_0.png" /> APP<br />\
    <img src="styles/legend/RecantoMeneghetti_244_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RecantoMeneghetti_244_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/RecantoMeneghetti_244_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/RecantoMeneghetti_244_4.png" /> CICLOVIA<br />\
    <img src="styles/legend/RecantoMeneghetti_244_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/RecantoMeneghetti_244_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/RecantoMeneghetti_244_7.png" /> PASSEIO<br />\
    <img src="styles/legend/RecantoMeneghetti_244_8.png" /> RUAS<br />\
    <img src="styles/legend/RecantoMeneghetti_244_9.png" /> VIELA<br />' });
var format_RecantoMeneghetti_245 = new ol.format.GeoJSON();
var features_RecantoMeneghetti_245 = format_RecantoMeneghetti_245.readFeatures(json_RecantoMeneghetti_245, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoMeneghetti_245 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoMeneghetti_245.addFeatures(features_RecantoMeneghetti_245);
var lyr_RecantoMeneghetti_245 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoMeneghetti_245, 
                style: style_RecantoMeneghetti_245,
                popuplayertitle: 'Recanto Meneghetti',
                interactive: true,
                title: '<img src="styles/legend/RecantoMeneghetti_245.png" /> Recanto Meneghetti'
            });
var format_Quadra18VilaExposio_246 = new ol.format.GeoJSON();
var features_Quadra18VilaExposio_246 = format_Quadra18VilaExposio_246.readFeatures(json_Quadra18VilaExposio_246, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Quadra18VilaExposio_246 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quadra18VilaExposio_246.addFeatures(features_Quadra18VilaExposio_246);
var lyr_Quadra18VilaExposio_246 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quadra18VilaExposio_246, 
                style: style_Quadra18VilaExposio_246,
                popuplayertitle: 'Quadra 18 Vila Exposição',
                interactive: true,
    title: 'Quadra 18 Vila Exposição<br />\
    <img src="styles/legend/Quadra18VilaExposio_246_0.png" /> LOTES<br />\
    <img src="styles/legend/Quadra18VilaExposio_246_1.png" /> RUAS<br />\
    <img src="styles/legend/Quadra18VilaExposio_246_2.png" /> PASSEIO<br />' });
var format_Quadra18VilaExposio_247 = new ol.format.GeoJSON();
var features_Quadra18VilaExposio_247 = format_Quadra18VilaExposio_247.readFeatures(json_Quadra18VilaExposio_247, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Quadra18VilaExposio_247 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quadra18VilaExposio_247.addFeatures(features_Quadra18VilaExposio_247);
var lyr_Quadra18VilaExposio_247 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quadra18VilaExposio_247, 
                style: style_Quadra18VilaExposio_247,
                popuplayertitle: 'Quadra 18 Vila Exposição',
                interactive: true,
                title: '<img src="styles/legend/Quadra18VilaExposio_247.png" /> Quadra 18 Vila Exposição'
            });
var format_ProlongamentoSamelPark_248 = new ol.format.GeoJSON();
var features_ProlongamentoSamelPark_248 = format_ProlongamentoSamelPark_248.readFeatures(json_ProlongamentoSamelPark_248, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ProlongamentoSamelPark_248 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProlongamentoSamelPark_248.addFeatures(features_ProlongamentoSamelPark_248);
var lyr_ProlongamentoSamelPark_248 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProlongamentoSamelPark_248, 
                style: style_ProlongamentoSamelPark_248,
                popuplayertitle: 'Prolongamento Samel Park',
                interactive: true,
    title: 'Prolongamento Samel Park<br />\
    <img src="styles/legend/ProlongamentoSamelPark_248_0.png" /> APP<br />\
    <img src="styles/legend/ProlongamentoSamelPark_248_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ProlongamentoSamelPark_248_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ProlongamentoSamelPark_248_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ProlongamentoSamelPark_248_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ProlongamentoSamelPark_248_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ProlongamentoSamelPark_248_6.png" /> RUAS<br />\
    <img src="styles/legend/ProlongamentoSamelPark_248_7.png" /> PASSEIO<br />' });
var format_ProlongamentoSamelPark_249 = new ol.format.GeoJSON();
var features_ProlongamentoSamelPark_249 = format_ProlongamentoSamelPark_249.readFeatures(json_ProlongamentoSamelPark_249, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ProlongamentoSamelPark_249 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProlongamentoSamelPark_249.addFeatures(features_ProlongamentoSamelPark_249);
var lyr_ProlongamentoSamelPark_249 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProlongamentoSamelPark_249, 
                style: style_ProlongamentoSamelPark_249,
                popuplayertitle: 'Prolongamento Samel Park',
                interactive: true,
                title: '<img src="styles/legend/ProlongamentoSamelPark_249.png" /> Prolongamento Samel Park'
            });
var format_ParqueVillaLobos_250 = new ol.format.GeoJSON();
var features_ParqueVillaLobos_250 = format_ParqueVillaLobos_250.readFeatures(json_ParqueVillaLobos_250, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueVillaLobos_250 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueVillaLobos_250.addFeatures(features_ParqueVillaLobos_250);
var lyr_ParqueVillaLobos_250 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueVillaLobos_250, 
                style: style_ParqueVillaLobos_250,
                popuplayertitle: 'Parque Villa-Lobos',
                interactive: true,
    title: 'Parque Villa-Lobos<br />\
    <img src="styles/legend/ParqueVillaLobos_250_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueVillaLobos_250_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueVillaLobos_250_2.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/ParqueVillaLobos_250_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParqueVillaLobos_250_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueVillaLobos_250_5.png" /> RUAS<br />' });
var format_ParqueVillaLobos_251 = new ol.format.GeoJSON();
var features_ParqueVillaLobos_251 = format_ParqueVillaLobos_251.readFeatures(json_ParqueVillaLobos_251, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueVillaLobos_251 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueVillaLobos_251.addFeatures(features_ParqueVillaLobos_251);
var lyr_ParqueVillaLobos_251 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueVillaLobos_251, 
                style: style_ParqueVillaLobos_251,
                popuplayertitle: 'Parque Villa-Lobos',
                interactive: true,
                title: '<img src="styles/legend/ParqueVillaLobos_251.png" /> Parque Villa-Lobos'
            });
var format_ParquePalmeiraImperial_252 = new ol.format.GeoJSON();
var features_ParquePalmeiraImperial_252 = format_ParquePalmeiraImperial_252.readFeatures(json_ParquePalmeiraImperial_252, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquePalmeiraImperial_252 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquePalmeiraImperial_252.addFeatures(features_ParquePalmeiraImperial_252);
var lyr_ParquePalmeiraImperial_252 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquePalmeiraImperial_252, 
                style: style_ParquePalmeiraImperial_252,
                popuplayertitle: 'Parque Palmeira Imperial',
                interactive: true,
    title: 'Parque Palmeira Imperial<br />\
    <img src="styles/legend/ParquePalmeiraImperial_252_0.png" /> APP<br />\
    <img src="styles/legend/ParquePalmeiraImperial_252_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParquePalmeiraImperial_252_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParquePalmeiraImperial_252_3.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/ParquePalmeiraImperial_252_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParquePalmeiraImperial_252_5.png" /> LOTES<br />\
    <img src="styles/legend/ParquePalmeiraImperial_252_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ParquePalmeiraImperial_252_7.png" /> RUAS<br />' });
var format_ParquePalmeiraImperial_253 = new ol.format.GeoJSON();
var features_ParquePalmeiraImperial_253 = format_ParquePalmeiraImperial_253.readFeatures(json_ParquePalmeiraImperial_253, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquePalmeiraImperial_253 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquePalmeiraImperial_253.addFeatures(features_ParquePalmeiraImperial_253);
var lyr_ParquePalmeiraImperial_253 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquePalmeiraImperial_253, 
                style: style_ParquePalmeiraImperial_253,
                popuplayertitle: 'Parque Palmeira Imperial',
                interactive: true,
                title: '<img src="styles/legend/ParquePalmeiraImperial_253.png" /> Parque Palmeira Imperial'
            });
var format_ParqueJacarand_254 = new ol.format.GeoJSON();
var features_ParqueJacarand_254 = format_ParqueJacarand_254.readFeatures(json_ParqueJacarand_254, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueJacarand_254 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueJacarand_254.addFeatures(features_ParqueJacarand_254);
var lyr_ParqueJacarand_254 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueJacarand_254, 
                style: style_ParqueJacarand_254,
                popuplayertitle: 'Parque Jacarandá',
                interactive: true,
    title: 'Parque Jacarandá<br />\
    <img src="styles/legend/ParqueJacarand_254_0.png" /> APP<br />\
    <img src="styles/legend/ParqueJacarand_254_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueJacarand_254_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParqueJacarand_254_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueJacarand_254_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ParqueJacarand_254_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParqueJacarand_254_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueJacarand_254_7.png" /> RUAS<br />' });
var format_ParqueJacarand_255 = new ol.format.GeoJSON();
var features_ParqueJacarand_255 = format_ParqueJacarand_255.readFeatures(json_ParqueJacarand_255, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueJacarand_255 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueJacarand_255.addFeatures(features_ParqueJacarand_255);
var lyr_ParqueJacarand_255 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueJacarand_255, 
                style: style_ParqueJacarand_255,
                popuplayertitle: 'Parque Jacarandá',
                interactive: true,
                title: '<img src="styles/legend/ParqueJacarand_255.png" /> Parque Jacarandá'
            });
var format_ParqueFlora_256 = new ol.format.GeoJSON();
var features_ParqueFlora_256 = format_ParqueFlora_256.readFeatures(json_ParqueFlora_256, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueFlora_256 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueFlora_256.addFeatures(features_ParqueFlora_256);
var lyr_ParqueFlora_256 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueFlora_256, 
                style: style_ParqueFlora_256,
                popuplayertitle: 'Parque Flora',
                interactive: true,
    title: 'Parque Flora<br />\
    <img src="styles/legend/ParqueFlora_256_0.png" /> APP<br />\
    <img src="styles/legend/ParqueFlora_256_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueFlora_256_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueFlora_256_3.png" /> LOTES<br />\
    <img src="styles/legend/ParqueFlora_256_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueFlora_256_5.png" /> RUAS<br />\
    <img src="styles/legend/ParqueFlora_256_6.png" /> VIELA<br />' });
var format_ParqueFlora_257 = new ol.format.GeoJSON();
var features_ParqueFlora_257 = format_ParqueFlora_257.readFeatures(json_ParqueFlora_257, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueFlora_257 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueFlora_257.addFeatures(features_ParqueFlora_257);
var lyr_ParqueFlora_257 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueFlora_257, 
                style: style_ParqueFlora_257,
                popuplayertitle: 'Parque Flora',
                interactive: true,
                title: '<img src="styles/legend/ParqueFlora_257.png" /> Parque Flora'
            });
var format_ParquedosSabias_258 = new ol.format.GeoJSON();
var features_ParquedosSabias_258 = format_ParquedosSabias_258.readFeatures(json_ParquedosSabias_258, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosSabias_258 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosSabias_258.addFeatures(features_ParquedosSabias_258);
var lyr_ParquedosSabias_258 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosSabias_258, 
                style: style_ParquedosSabias_258,
                popuplayertitle: 'Parque dos Sabias',
                interactive: true,
    title: 'Parque dos Sabias<br />\
    <img src="styles/legend/ParquedosSabias_258_0.png" /> APP<br />\
    <img src="styles/legend/ParquedosSabias_258_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParquedosSabias_258_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParquedosSabias_258_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/ParquedosSabias_258_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParquedosSabias_258_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ParquedosSabias_258_6.png" /> RUAS<br />\
    <img src="styles/legend/ParquedosSabias_258_7.png" /> VIELA<br />' });
var format_ParquedosSabias_259 = new ol.format.GeoJSON();
var features_ParquedosSabias_259 = format_ParquedosSabias_259.readFeatures(json_ParquedosSabias_259, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosSabias_259 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosSabias_259.addFeatures(features_ParquedosSabias_259);
var lyr_ParquedosSabias_259 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosSabias_259, 
                style: style_ParquedosSabias_259,
                popuplayertitle: 'Parque dos Sabias',
                interactive: true,
                title: '<img src="styles/legend/ParquedosSabias_259.png" /> Parque dos Sabias'
            });
var format_ParquedosCoqueiros_260 = new ol.format.GeoJSON();
var features_ParquedosCoqueiros_260 = format_ParquedosCoqueiros_260.readFeatures(json_ParquedosCoqueiros_260, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosCoqueiros_260 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosCoqueiros_260.addFeatures(features_ParquedosCoqueiros_260);
var lyr_ParquedosCoqueiros_260 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosCoqueiros_260, 
                style: style_ParquedosCoqueiros_260,
                popuplayertitle: 'Parque dos Coqueiros',
                interactive: true,
    title: 'Parque dos Coqueiros<br />\
    <img src="styles/legend/ParquedosCoqueiros_260_0.png" /> APP<br />\
    <img src="styles/legend/ParquedosCoqueiros_260_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParquedosCoqueiros_260_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParquedosCoqueiros_260_3.png" /> LOTES<br />\
    <img src="styles/legend/ParquedosCoqueiros_260_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ParquedosCoqueiros_260_5.png" /> RUAS<br />\
    <img src="styles/legend/ParquedosCoqueiros_260_6.png" /> SERVIDAO<br />\
    <img src="styles/legend/ParquedosCoqueiros_260_7.png" /> VIELA<br />' });
var format_ParquedosCoqueiros_261 = new ol.format.GeoJSON();
var features_ParquedosCoqueiros_261 = format_ParquedosCoqueiros_261.readFeatures(json_ParquedosCoqueiros_261, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosCoqueiros_261 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosCoqueiros_261.addFeatures(features_ParquedosCoqueiros_261);
var lyr_ParquedosCoqueiros_261 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosCoqueiros_261, 
                style: style_ParquedosCoqueiros_261,
                popuplayertitle: 'Parque dos Coqueiros',
                interactive: true,
                title: '<img src="styles/legend/ParquedosCoqueiros_261.png" /> Parque dos Coqueiros'
            });
var format_ParqueAlvorada_262 = new ol.format.GeoJSON();
var features_ParqueAlvorada_262 = format_ParqueAlvorada_262.readFeatures(json_ParqueAlvorada_262, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueAlvorada_262 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAlvorada_262.addFeatures(features_ParqueAlvorada_262);
var lyr_ParqueAlvorada_262 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAlvorada_262, 
                style: style_ParqueAlvorada_262,
                popuplayertitle: 'Parque Alvorada',
                interactive: true,
    title: 'Parque Alvorada<br />\
    <img src="styles/legend/ParqueAlvorada_262_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueAlvorada_262_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueAlvorada_262_2.png" /> LOTES<br />\
    <img src="styles/legend/ParqueAlvorada_262_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueAlvorada_262_4.png" /> RUAS<br />' });
var format_ParqueAlvorada_263 = new ol.format.GeoJSON();
var features_ParqueAlvorada_263 = format_ParqueAlvorada_263.readFeatures(json_ParqueAlvorada_263, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueAlvorada_263 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAlvorada_263.addFeatures(features_ParqueAlvorada_263);
var lyr_ParqueAlvorada_263 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAlvorada_263, 
                style: style_ParqueAlvorada_263,
                popuplayertitle: 'Parque Alvorada',
                interactive: true,
                title: '<img src="styles/legend/ParqueAlvorada_263.png" /> Parque Alvorada'
            });
var format_ParagonFaseII_264 = new ol.format.GeoJSON();
var features_ParagonFaseII_264 = format_ParagonFaseII_264.readFeatures(json_ParagonFaseII_264, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParagonFaseII_264 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParagonFaseII_264.addFeatures(features_ParagonFaseII_264);
var lyr_ParagonFaseII_264 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParagonFaseII_264, 
                style: style_ParagonFaseII_264,
                popuplayertitle: 'Paragon Fase II',
                interactive: true,
    title: 'Paragon Fase II<br />\
    <img src="styles/legend/ParagonFaseII_264_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParagonFaseII_264_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParagonFaseII_264_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ParagonFaseII_264_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParagonFaseII_264_4.png" /> LOTES<br />\
    <img src="styles/legend/ParagonFaseII_264_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParagonFaseII_264_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ParagonFaseII_264_7.png" /> RUAS<br />\
    <img src="styles/legend/ParagonFaseII_264_8.png" /> VIELA<br />' });
var format_ParagonFaseII_265 = new ol.format.GeoJSON();
var features_ParagonFaseII_265 = format_ParagonFaseII_265.readFeatures(json_ParagonFaseII_265, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParagonFaseII_265 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParagonFaseII_265.addFeatures(features_ParagonFaseII_265);
var lyr_ParagonFaseII_265 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParagonFaseII_265, 
                style: style_ParagonFaseII_265,
                popuplayertitle: 'Paragon Fase II',
                interactive: true,
                title: '<img src="styles/legend/ParagonFaseII_265.png" /> Paragon Fase II'
            });
var format_Paragon_266 = new ol.format.GeoJSON();
var features_Paragon_266 = format_Paragon_266.readFeatures(json_Paragon_266, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Paragon_266 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paragon_266.addFeatures(features_Paragon_266);
var lyr_Paragon_266 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paragon_266, 
                style: style_Paragon_266,
                popuplayertitle: 'Paragon',
                interactive: true,
    title: 'Paragon<br />\
    <img src="styles/legend/Paragon_266_0.png" /> APP<br />\
    <img src="styles/legend/Paragon_266_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Paragon_266_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Paragon_266_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/Paragon_266_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/Paragon_266_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Paragon_266_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Paragon_266_7.png" /> PASSEIO<br />\
    <img src="styles/legend/Paragon_266_8.png" /> RUAS<br />\
    <img src="styles/legend/Paragon_266_9.png" /> VIELA<br />' });
var format_Paragon_267 = new ol.format.GeoJSON();
var features_Paragon_267 = format_Paragon_267.readFeatures(json_Paragon_267, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Paragon_267 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paragon_267.addFeatures(features_Paragon_267);
var lyr_Paragon_267 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paragon_267, 
                style: style_Paragon_267,
                popuplayertitle: 'Paragon',
                interactive: true,
                title: '<img src="styles/legend/Paragon_267.png" /> Paragon'
            });
var format_PalmeiraReal_268 = new ol.format.GeoJSON();
var features_PalmeiraReal_268 = format_PalmeiraReal_268.readFeatures(json_PalmeiraReal_268, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PalmeiraReal_268 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PalmeiraReal_268.addFeatures(features_PalmeiraReal_268);
var lyr_PalmeiraReal_268 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PalmeiraReal_268, 
                style: style_PalmeiraReal_268,
                popuplayertitle: 'Palmeira Real',
                interactive: true,
    title: 'Palmeira Real<br />\
    <img src="styles/legend/PalmeiraReal_268_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/PalmeiraReal_268_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/PalmeiraReal_268_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/PalmeiraReal_268_3.png" /> PASSEIO<br />\
    <img src="styles/legend/PalmeiraReal_268_4.png" /> RUAS<br />\
    <img src="styles/legend/PalmeiraReal_268_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_PalmeiraReal_269 = new ol.format.GeoJSON();
var features_PalmeiraReal_269 = format_PalmeiraReal_269.readFeatures(json_PalmeiraReal_269, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PalmeiraReal_269 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PalmeiraReal_269.addFeatures(features_PalmeiraReal_269);
var lyr_PalmeiraReal_269 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PalmeiraReal_269, 
                style: style_PalmeiraReal_269,
                popuplayertitle: 'Palmeira Real',
                interactive: true,
                title: '<img src="styles/legend/PalmeiraReal_269.png" /> Palmeira Real'
            });
var format_MoradadoVerdeII_270 = new ol.format.GeoJSON();
var features_MoradadoVerdeII_270 = format_MoradadoVerdeII_270.readFeatures(json_MoradadoVerdeII_270, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadoVerdeII_270 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadoVerdeII_270.addFeatures(features_MoradadoVerdeII_270);
var lyr_MoradadoVerdeII_270 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadoVerdeII_270, 
                style: style_MoradadoVerdeII_270,
                popuplayertitle: 'Morada do Verde II',
                interactive: true,
    title: 'Morada do Verde II<br />\
    <img src="styles/legend/MoradadoVerdeII_270_0.png" /> APP<br />\
    <img src="styles/legend/MoradadoVerdeII_270_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MoradadoVerdeII_270_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MoradadoVerdeII_270_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/MoradadoVerdeII_270_4.png" /> LOTES<br />\
    <img src="styles/legend/MoradadoVerdeII_270_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/MoradadoVerdeII_270_6.png" /> PASSEIO<br />\
    <img src="styles/legend/MoradadoVerdeII_270_7.png" /> RUAS<br />' });
var format_MoradadoVerdeII_271 = new ol.format.GeoJSON();
var features_MoradadoVerdeII_271 = format_MoradadoVerdeII_271.readFeatures(json_MoradadoVerdeII_271, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadoVerdeII_271 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadoVerdeII_271.addFeatures(features_MoradadoVerdeII_271);
var lyr_MoradadoVerdeII_271 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadoVerdeII_271, 
                style: style_MoradadoVerdeII_271,
                popuplayertitle: 'Morada do Verde II',
                interactive: true,
                title: '<img src="styles/legend/MoradadoVerdeII_271.png" /> Morada do Verde II'
            });
var format_MoradadaMata_272 = new ol.format.GeoJSON();
var features_MoradadaMata_272 = format_MoradadaMata_272.readFeatures(json_MoradadaMata_272, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadaMata_272 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadaMata_272.addFeatures(features_MoradadaMata_272);
var lyr_MoradadaMata_272 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadaMata_272, 
                style: style_MoradadaMata_272,
                popuplayertitle: 'Morada da Mata',
                interactive: true,
    title: 'Morada da Mata<br />\
    <img src="styles/legend/MoradadaMata_272_0.png" /> APP<br />\
    <img src="styles/legend/MoradadaMata_272_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MoradadaMata_272_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MoradadaMata_272_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/MoradadaMata_272_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MoradadaMata_272_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MoradadaMata_272_6.png" /> PASSEIO<br />\
    <img src="styles/legend/MoradadaMata_272_7.png" /> RUAS<br />' });
var format_MoradadaMata_273 = new ol.format.GeoJSON();
var features_MoradadaMata_273 = format_MoradadaMata_273.readFeatures(json_MoradadaMata_273, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadaMata_273 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadaMata_273.addFeatures(features_MoradadaMata_273);
var lyr_MoradadaMata_273 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadaMata_273, 
                style: style_MoradadaMata_273,
                popuplayertitle: 'Morada da Mata',
                interactive: true,
                title: '<img src="styles/legend/MoradadaMata_273.png" /> Morada da Mata'
            });
var format_Monti_274 = new ol.format.GeoJSON();
var features_Monti_274 = format_Monti_274.readFeatures(json_Monti_274, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Monti_274 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monti_274.addFeatures(features_Monti_274);
var lyr_Monti_274 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monti_274, 
                style: style_Monti_274,
                popuplayertitle: 'Montié',
                interactive: true,
    title: 'Montié<br />\
    <img src="styles/legend/Monti_274_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/Monti_274_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/Monti_274_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Monti_274_3.png" /> PASSEIO<br />\
    <img src="styles/legend/Monti_274_4.png" /> RUAS<br />\
    <img src="styles/legend/Monti_274_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_Monti_275 = new ol.format.GeoJSON();
var features_Monti_275 = format_Monti_275.readFeatures(json_Monti_275, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Monti_275 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monti_275.addFeatures(features_Monti_275);
var lyr_Monti_275 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monti_275, 
                style: style_Monti_275,
                popuplayertitle: 'Montié',
                interactive: true,
                title: '<img src="styles/legend/Monti_275.png" /> Montié'
            });
var format_MontBlancResidence_276 = new ol.format.GeoJSON();
var features_MontBlancResidence_276 = format_MontBlancResidence_276.readFeatures(json_MontBlancResidence_276, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MontBlancResidence_276 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontBlancResidence_276.addFeatures(features_MontBlancResidence_276);
var lyr_MontBlancResidence_276 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MontBlancResidence_276, 
                style: style_MontBlancResidence_276,
                popuplayertitle: 'Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/MontBlancResidence_276.png" /> Mont Blanc Residence'
            });
var format_MontBlancResidence_277 = new ol.format.GeoJSON();
var features_MontBlancResidence_277 = format_MontBlancResidence_277.readFeatures(json_MontBlancResidence_277, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MontBlancResidence_277 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontBlancResidence_277.addFeatures(features_MontBlancResidence_277);
var lyr_MontBlancResidence_277 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MontBlancResidence_277, 
                style: style_MontBlancResidence_277,
                popuplayertitle: 'Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/MontBlancResidence_277.png" /> Mont Blanc Residence'
            });
var format_MasterplanDespaschoal_278 = new ol.format.GeoJSON();
var features_MasterplanDespaschoal_278 = format_MasterplanDespaschoal_278.readFeatures(json_MasterplanDespaschoal_278, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasterplanDespaschoal_278 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasterplanDespaschoal_278.addFeatures(features_MasterplanDespaschoal_278);
var lyr_MasterplanDespaschoal_278 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasterplanDespaschoal_278, 
                style: style_MasterplanDespaschoal_278,
                popuplayertitle: 'Masterplan Despaschoal ',
                interactive: true,
    title: 'Masterplan Despaschoal <br />\
    <img src="styles/legend/MasterplanDespaschoal_278_0.png" /> APP<br />\
    <img src="styles/legend/MasterplanDespaschoal_278_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MasterplanDespaschoal_278_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/MasterplanDespaschoal_278_3.png" /> FUNCACAO<br />\
    <img src="styles/legend/MasterplanDespaschoal_278_4.png" /> INDUSTRIAL<br />\
    <img src="styles/legend/MasterplanDespaschoal_278_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MasterplanDespaschoal_278_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/MasterplanDespaschoal_278_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MasterplanDespaschoal_278_8.png" /> PASSEIO<br />\
    <img src="styles/legend/MasterplanDespaschoal_278_9.png" /> RUAS<br />' });
var format_MasterplanDespaschoal_279 = new ol.format.GeoJSON();
var features_MasterplanDespaschoal_279 = format_MasterplanDespaschoal_279.readFeatures(json_MasterplanDespaschoal_279, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasterplanDespaschoal_279 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasterplanDespaschoal_279.addFeatures(features_MasterplanDespaschoal_279);
var lyr_MasterplanDespaschoal_279 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasterplanDespaschoal_279, 
                style: style_MasterplanDespaschoal_279,
                popuplayertitle: 'Masterplan Despaschoal ',
                interactive: true,
                title: '<img src="styles/legend/MasterplanDespaschoal_279.png" /> Masterplan Despaschoal '
            });
var format_MasterplanDespaschoal_280 = new ol.format.GeoJSON();
var features_MasterplanDespaschoal_280 = format_MasterplanDespaschoal_280.readFeatures(json_MasterplanDespaschoal_280, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasterplanDespaschoal_280 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasterplanDespaschoal_280.addFeatures(features_MasterplanDespaschoal_280);
var lyr_MasterplanDespaschoal_280 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasterplanDespaschoal_280, 
                style: style_MasterplanDespaschoal_280,
                popuplayertitle: 'Masterplan Despaschoal ',
                interactive: true,
                title: '<img src="styles/legend/MasterplanDespaschoal_280.png" /> Masterplan Despaschoal '
            });
var format_MasteplanBildVitta_281 = new ol.format.GeoJSON();
var features_MasteplanBildVitta_281 = format_MasteplanBildVitta_281.readFeatures(json_MasteplanBildVitta_281, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasteplanBildVitta_281 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasteplanBildVitta_281.addFeatures(features_MasteplanBildVitta_281);
var lyr_MasteplanBildVitta_281 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasteplanBildVitta_281, 
                style: style_MasteplanBildVitta_281,
                popuplayertitle: 'Masteplan Bild/Vitta',
                interactive: true,
    title: 'Masteplan Bild/Vitta<br />\
    <img src="styles/legend/MasteplanBildVitta_281_0.png" /> APP<br />\
    <img src="styles/legend/MasteplanBildVitta_281_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MasteplanBildVitta_281_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MasteplanBildVitta_281_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/MasteplanBildVitta_281_4.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/MasteplanBildVitta_281_5.png" /> AREA VERDE<br />\
    <img src="styles/legend/MasteplanBildVitta_281_6.png" /> DESMEMBRAMENTO DOACAO<br />\
    <img src="styles/legend/MasteplanBildVitta_281_7.png" /> EIXOS<br />\
    <img src="styles/legend/MasteplanBildVitta_281_8.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MasteplanBildVitta_281_9.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MasteplanBildVitta_281_10.png" /> PASSEIO<br />\
    <img src="styles/legend/MasteplanBildVitta_281_11.png" /> RUAS<br />\
    <img src="styles/legend/MasteplanBildVitta_281_12.png" /> SERVIDAO<br />' });
var format_MasteplanBildVitta_282 = new ol.format.GeoJSON();
var features_MasteplanBildVitta_282 = format_MasteplanBildVitta_282.readFeatures(json_MasteplanBildVitta_282, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasteplanBildVitta_282 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasteplanBildVitta_282.addFeatures(features_MasteplanBildVitta_282);
var lyr_MasteplanBildVitta_282 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasteplanBildVitta_282, 
                style: style_MasteplanBildVitta_282,
                popuplayertitle: 'Masteplan Bild/Vitta',
                interactive: true,
                title: '<img src="styles/legend/MasteplanBildVitta_282.png" /> Masteplan Bild/Vitta'
            });
var format_MasteplanBildVitta_283 = new ol.format.GeoJSON();
var features_MasteplanBildVitta_283 = format_MasteplanBildVitta_283.readFeatures(json_MasteplanBildVitta_283, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasteplanBildVitta_283 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasteplanBildVitta_283.addFeatures(features_MasteplanBildVitta_283);
var lyr_MasteplanBildVitta_283 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasteplanBildVitta_283, 
                style: style_MasteplanBildVitta_283,
                popuplayertitle: 'Masteplan Bild/Vitta',
                interactive: true,
                title: '<img src="styles/legend/MasteplanBildVitta_283.png" /> Masteplan Bild/Vitta'
            });
var format_Loteamentolamo_284 = new ol.format.GeoJSON();
var features_Loteamentolamo_284 = format_Loteamentolamo_284.readFeatures(json_Loteamentolamo_284, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Loteamentolamo_284 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamentolamo_284.addFeatures(features_Loteamentolamo_284);
var lyr_Loteamentolamo_284 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamentolamo_284, 
                style: style_Loteamentolamo_284,
                popuplayertitle: 'Loteamento Álamo',
                interactive: true,
    title: 'Loteamento Álamo<br />\
    <img src="styles/legend/Loteamentolamo_284_0.png" /> APP<br />\
    <img src="styles/legend/Loteamentolamo_284_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Loteamentolamo_284_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Loteamentolamo_284_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/Loteamentolamo_284_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/Loteamentolamo_284_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/Loteamentolamo_284_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Loteamentolamo_284_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Loteamentolamo_284_8.png" /> PASSEIO<br />\
    <img src="styles/legend/Loteamentolamo_284_9.png" /> RUAS<br />\
    <img src="styles/legend/Loteamentolamo_284_10.png" /> VIELA<br />' });
var format_Loteamentolamo_285 = new ol.format.GeoJSON();
var features_Loteamentolamo_285 = format_Loteamentolamo_285.readFeatures(json_Loteamentolamo_285, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Loteamentolamo_285 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamentolamo_285.addFeatures(features_Loteamentolamo_285);
var lyr_Loteamentolamo_285 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamentolamo_285, 
                style: style_Loteamentolamo_285,
                popuplayertitle: 'Loteamento Álamo',
                interactive: true,
                title: '<img src="styles/legend/Loteamentolamo_285.png" /> Loteamento Álamo'
            });
var format_JardimStephani_286 = new ol.format.GeoJSON();
var features_JardimStephani_286 = format_JardimStephani_286.readFeatures(json_JardimStephani_286, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimStephani_286 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimStephani_286.addFeatures(features_JardimStephani_286);
var lyr_JardimStephani_286 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimStephani_286, 
                style: style_JardimStephani_286,
                popuplayertitle: 'Jardim Stephani',
                interactive: true,
    title: 'Jardim Stephani<br />\
    <img src="styles/legend/JardimStephani_286_0.png" /> LOTES<br />' });
var format_JardimStephani_287 = new ol.format.GeoJSON();
var features_JardimStephani_287 = format_JardimStephani_287.readFeatures(json_JardimStephani_287, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimStephani_287 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimStephani_287.addFeatures(features_JardimStephani_287);
var lyr_JardimStephani_287 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimStephani_287, 
                style: style_JardimStephani_287,
                popuplayertitle: 'Jardim Stephani',
                interactive: true,
                title: '<img src="styles/legend/JardimStephani_287.png" /> Jardim Stephani'
            });
var format_JardimPherola_288 = new ol.format.GeoJSON();
var features_JardimPherola_288 = format_JardimPherola_288.readFeatures(json_JardimPherola_288, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimPherola_288 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimPherola_288.addFeatures(features_JardimPherola_288);
var lyr_JardimPherola_288 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimPherola_288, 
                style: style_JardimPherola_288,
                popuplayertitle: 'Jardim Pherola',
                interactive: true,
                title: '<img src="styles/legend/JardimPherola_288.png" /> Jardim Pherola'
            });
var format_JardimPherola_289 = new ol.format.GeoJSON();
var features_JardimPherola_289 = format_JardimPherola_289.readFeatures(json_JardimPherola_289, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimPherola_289 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimPherola_289.addFeatures(features_JardimPherola_289);
var lyr_JardimPherola_289 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimPherola_289, 
                style: style_JardimPherola_289,
                popuplayertitle: 'Jardim Pherola',
                interactive: true,
                title: '<img src="styles/legend/JardimPherola_289.png" /> Jardim Pherola'
            });
var format_JardimNatal_290 = new ol.format.GeoJSON();
var features_JardimNatal_290 = format_JardimNatal_290.readFeatures(json_JardimNatal_290, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimNatal_290 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimNatal_290.addFeatures(features_JardimNatal_290);
var lyr_JardimNatal_290 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimNatal_290, 
                style: style_JardimNatal_290,
                popuplayertitle: 'Jardim Natal',
                interactive: true,
    title: 'Jardim Natal<br />\
    <img src="styles/legend/JardimNatal_290_0.png" /> APP<br />\
    <img src="styles/legend/JardimNatal_290_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimNatal_290_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimNatal_290_3.png" /> LOTES<br />\
    <img src="styles/legend/JardimNatal_290_4.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimNatal_290_5.png" /> RUAS<br />\
    <img src="styles/legend/JardimNatal_290_6.png" /> VIELA<br />' });
var format_JardimNatal_291 = new ol.format.GeoJSON();
var features_JardimNatal_291 = format_JardimNatal_291.readFeatures(json_JardimNatal_291, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimNatal_291 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimNatal_291.addFeatures(features_JardimNatal_291);
var lyr_JardimNatal_291 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimNatal_291, 
                style: style_JardimNatal_291,
                popuplayertitle: 'Jardim Natal',
                interactive: true,
                title: '<img src="styles/legend/JardimNatal_291.png" /> Jardim Natal'
            });
var format_JardimMariaLuiza_292 = new ol.format.GeoJSON();
var features_JardimMariaLuiza_292 = format_JardimMariaLuiza_292.readFeatures(json_JardimMariaLuiza_292, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimMariaLuiza_292 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaLuiza_292.addFeatures(features_JardimMariaLuiza_292);
var lyr_JardimMariaLuiza_292 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaLuiza_292, 
                style: style_JardimMariaLuiza_292,
                popuplayertitle: 'Jardim Maria Luiza',
                interactive: true,
    title: 'Jardim Maria Luiza<br />\
    <img src="styles/legend/JardimMariaLuiza_292_0.png" /> APP<br />\
    <img src="styles/legend/JardimMariaLuiza_292_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimMariaLuiza_292_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/JardimMariaLuiza_292_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimMariaLuiza_292_4.png" /> LOTES<br />\
    <img src="styles/legend/JardimMariaLuiza_292_5.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimMariaLuiza_292_6.png" /> RUAS<br />\
    <img src="styles/legend/JardimMariaLuiza_292_7.png" /> VIELA<br />' });
var format_JardimMariaLuiza_293 = new ol.format.GeoJSON();
var features_JardimMariaLuiza_293 = format_JardimMariaLuiza_293.readFeatures(json_JardimMariaLuiza_293, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimMariaLuiza_293 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaLuiza_293.addFeatures(features_JardimMariaLuiza_293);
var lyr_JardimMariaLuiza_293 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaLuiza_293, 
                style: style_JardimMariaLuiza_293,
                popuplayertitle: 'Jardim Maria Luiza',
                interactive: true,
                title: '<img src="styles/legend/JardimMariaLuiza_293.png" /> Jardim Maria Luiza'
            });
var format_JardimMariaAugusta_294 = new ol.format.GeoJSON();
var features_JardimMariaAugusta_294 = format_JardimMariaAugusta_294.readFeatures(json_JardimMariaAugusta_294, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimMariaAugusta_294 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaAugusta_294.addFeatures(features_JardimMariaAugusta_294);
var lyr_JardimMariaAugusta_294 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaAugusta_294, 
                style: style_JardimMariaAugusta_294,
                popuplayertitle: 'Jardim Maria Augusta',
                interactive: true,
    title: 'Jardim Maria Augusta<br />\
    <img src="styles/legend/JardimMariaAugusta_294_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimMariaAugusta_294_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/JardimMariaAugusta_294_2.png" /> LOTES<br />\
    <img src="styles/legend/JardimMariaAugusta_294_3.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimMariaAugusta_294_4.png" /> RUAS<br />\
    <img src="styles/legend/JardimMariaAugusta_294_5.png" /> VIELA<br />' });
var format_JardimMariaAugusta_295 = new ol.format.GeoJSON();
var features_JardimMariaAugusta_295 = format_JardimMariaAugusta_295.readFeatures(json_JardimMariaAugusta_295, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimMariaAugusta_295 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaAugusta_295.addFeatures(features_JardimMariaAugusta_295);
var lyr_JardimMariaAugusta_295 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaAugusta_295, 
                style: style_JardimMariaAugusta_295,
                popuplayertitle: 'Jardim Maria Augusta',
                interactive: true,
                title: '<img src="styles/legend/JardimMariaAugusta_295.png" /> Jardim Maria Augusta'
            });
var format_JardimHorizonte_296 = new ol.format.GeoJSON();
var features_JardimHorizonte_296 = format_JardimHorizonte_296.readFeatures(json_JardimHorizonte_296, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimHorizonte_296 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimHorizonte_296.addFeatures(features_JardimHorizonte_296);
var lyr_JardimHorizonte_296 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimHorizonte_296, 
                style: style_JardimHorizonte_296,
                popuplayertitle: 'Jardim Horizonte',
                interactive: true,
    title: 'Jardim Horizonte<br />\
    <img src="styles/legend/JardimHorizonte_296_0.png" /> APP<br />\
    <img src="styles/legend/JardimHorizonte_296_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimHorizonte_296_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimHorizonte_296_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/JardimHorizonte_296_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/JardimHorizonte_296_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/JardimHorizonte_296_6.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimHorizonte_296_7.png" /> RUAS<br />\
    <img src="styles/legend/JardimHorizonte_296_8.png" /> VIELA<br />' });
var format_JardimHorizonte_297 = new ol.format.GeoJSON();
var features_JardimHorizonte_297 = format_JardimHorizonte_297.readFeatures(json_JardimHorizonte_297, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimHorizonte_297 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimHorizonte_297.addFeatures(features_JardimHorizonte_297);
var lyr_JardimHorizonte_297 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimHorizonte_297, 
                style: style_JardimHorizonte_297,
                popuplayertitle: 'Jardim Horizonte',
                interactive: true,
                title: '<img src="styles/legend/JardimHorizonte_297.png" /> Jardim Horizonte'
            });
var format_JardimFlora_298 = new ol.format.GeoJSON();
var features_JardimFlora_298 = format_JardimFlora_298.readFeatures(json_JardimFlora_298, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimFlora_298 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimFlora_298.addFeatures(features_JardimFlora_298);
var lyr_JardimFlora_298 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimFlora_298, 
                style: style_JardimFlora_298,
                popuplayertitle: 'Jardim Flora',
                interactive: true,
    title: 'Jardim Flora<br />\
    <img src="styles/legend/JardimFlora_298_0.png" /> APP<br />\
    <img src="styles/legend/JardimFlora_298_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimFlora_298_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/JardimFlora_298_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/JardimFlora_298_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimFlora_298_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/JardimFlora_298_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/JardimFlora_298_7.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimFlora_298_8.png" /> RUAS<br />' });
var format_JardimFlora_299 = new ol.format.GeoJSON();
var features_JardimFlora_299 = format_JardimFlora_299.readFeatures(json_JardimFlora_299, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimFlora_299 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimFlora_299.addFeatures(features_JardimFlora_299);
var lyr_JardimFlora_299 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimFlora_299, 
                style: style_JardimFlora_299,
                popuplayertitle: 'Jardim Flora',
                interactive: true,
                title: '<img src="styles/legend/JardimFlora_299.png" /> Jardim Flora'
            });
var format_IrineuZanetiII_300 = new ol.format.GeoJSON();
var features_IrineuZanetiII_300 = format_IrineuZanetiII_300.readFeatures(json_IrineuZanetiII_300, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IrineuZanetiII_300 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrineuZanetiII_300.addFeatures(features_IrineuZanetiII_300);
var lyr_IrineuZanetiII_300 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrineuZanetiII_300, 
                style: style_IrineuZanetiII_300,
                popuplayertitle: 'Irineu Zaneti II',
                interactive: true,
    title: 'Irineu Zaneti II<br />\
    <img src="styles/legend/IrineuZanetiII_300_0.png" /> APP<br />\
    <img src="styles/legend/IrineuZanetiII_300_1.png" /> LOTES<br />\
    <img src="styles/legend/IrineuZanetiII_300_2.png" /> RUAS<br />\
    <img src="styles/legend/IrineuZanetiII_300_3.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/IrineuZanetiII_300_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/IrineuZanetiII_300_5.png" /> PASSEIO<br />' });
var format_IrineuZanetiII_301 = new ol.format.GeoJSON();
var features_IrineuZanetiII_301 = format_IrineuZanetiII_301.readFeatures(json_IrineuZanetiII_301, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IrineuZanetiII_301 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrineuZanetiII_301.addFeatures(features_IrineuZanetiII_301);
var lyr_IrineuZanetiII_301 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrineuZanetiII_301, 
                style: style_IrineuZanetiII_301,
                popuplayertitle: 'Irineu Zaneti II',
                interactive: true,
                title: '<img src="styles/legend/IrineuZanetiII_301.png" /> Irineu Zaneti II'
            });
var format_Infratcnica_302 = new ol.format.GeoJSON();
var features_Infratcnica_302 = format_Infratcnica_302.readFeatures(json_Infratcnica_302, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Infratcnica_302 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infratcnica_302.addFeatures(features_Infratcnica_302);
var lyr_Infratcnica_302 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infratcnica_302, 
                style: style_Infratcnica_302,
                popuplayertitle: 'Infratécnica',
                interactive: true,
    title: 'Infratécnica<br />\
    <img src="styles/legend/Infratcnica_302_0.png" /> APP<br />\
    <img src="styles/legend/Infratcnica_302_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Infratcnica_302_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Infratcnica_302_3.png" /> LOTES<br />\
    <img src="styles/legend/Infratcnica_302_4.png" /> PASSEIO<br />\
    <img src="styles/legend/Infratcnica_302_5.png" /> RUAS<br />' });
var format_Infratcnica_303 = new ol.format.GeoJSON();
var features_Infratcnica_303 = format_Infratcnica_303.readFeatures(json_Infratcnica_303, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Infratcnica_303 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infratcnica_303.addFeatures(features_Infratcnica_303);
var lyr_Infratcnica_303 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infratcnica_303, 
                style: style_Infratcnica_303,
                popuplayertitle: 'Infratécnica',
                interactive: true,
                title: '<img src="styles/legend/Infratcnica_303.png" /> Infratécnica'
            });
var format_HorizResidence_304 = new ol.format.GeoJSON();
var features_HorizResidence_304 = format_HorizResidence_304.readFeatures(json_HorizResidence_304, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HorizResidence_304 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HorizResidence_304.addFeatures(features_HorizResidence_304);
var lyr_HorizResidence_304 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HorizResidence_304, 
                style: style_HorizResidence_304,
                popuplayertitle: 'Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/HorizResidence_304.png" /> Horiz Residence'
            });
var format_HorizResidence_305 = new ol.format.GeoJSON();
var features_HorizResidence_305 = format_HorizResidence_305.readFeatures(json_HorizResidence_305, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HorizResidence_305 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HorizResidence_305.addFeatures(features_HorizResidence_305);
var lyr_HorizResidence_305 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HorizResidence_305, 
                style: style_HorizResidence_305,
                popuplayertitle: 'Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/HorizResidence_305.png" /> Horiz Residence'
            });
var format_GlebaNossaSenhoraAuxiliadora_306 = new ol.format.GeoJSON();
var features_GlebaNossaSenhoraAuxiliadora_306 = format_GlebaNossaSenhoraAuxiliadora_306.readFeatures(json_GlebaNossaSenhoraAuxiliadora_306, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GlebaNossaSenhoraAuxiliadora_306 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlebaNossaSenhoraAuxiliadora_306.addFeatures(features_GlebaNossaSenhoraAuxiliadora_306);
var lyr_GlebaNossaSenhoraAuxiliadora_306 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlebaNossaSenhoraAuxiliadora_306, 
                style: style_GlebaNossaSenhoraAuxiliadora_306,
                popuplayertitle: 'Gleba Nossa Senhora Auxiliadora',
                interactive: true,
                title: '<img src="styles/legend/GlebaNossaSenhoraAuxiliadora_306.png" /> Gleba Nossa Senhora Auxiliadora'
            });
var format_GlebaNossaSenhoraAuxiliadora_307 = new ol.format.GeoJSON();
var features_GlebaNossaSenhoraAuxiliadora_307 = format_GlebaNossaSenhoraAuxiliadora_307.readFeatures(json_GlebaNossaSenhoraAuxiliadora_307, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GlebaNossaSenhoraAuxiliadora_307 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlebaNossaSenhoraAuxiliadora_307.addFeatures(features_GlebaNossaSenhoraAuxiliadora_307);
var lyr_GlebaNossaSenhoraAuxiliadora_307 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlebaNossaSenhoraAuxiliadora_307, 
                style: style_GlebaNossaSenhoraAuxiliadora_307,
                popuplayertitle: 'Gleba Nossa Senhora Auxiliadora',
                interactive: true,
                title: '<img src="styles/legend/GlebaNossaSenhoraAuxiliadora_307.png" /> Gleba Nossa Senhora Auxiliadora'
            });
var format_Ferracini_308 = new ol.format.GeoJSON();
var features_Ferracini_308 = format_Ferracini_308.readFeatures(json_Ferracini_308, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Ferracini_308 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferracini_308.addFeatures(features_Ferracini_308);
var lyr_Ferracini_308 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferracini_308, 
                style: style_Ferracini_308,
                popuplayertitle: 'Ferracini',
                interactive: true,
    title: 'Ferracini<br />\
    <img src="styles/legend/Ferracini_308_0.png" /> APP<br />\
    <img src="styles/legend/Ferracini_308_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Ferracini_308_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Ferracini_308_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/Ferracini_308_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Ferracini_308_5.png" /> RUAS<br />\
    <img src="styles/legend/Ferracini_308_6.png" /> VIELA<br />\
    <img src="styles/legend/Ferracini_308_7.png" /> PASSEIO<br />' });
var format_Ferracini_309 = new ol.format.GeoJSON();
var features_Ferracini_309 = format_Ferracini_309.readFeatures(json_Ferracini_309, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Ferracini_309 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferracini_309.addFeatures(features_Ferracini_309);
var lyr_Ferracini_309 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferracini_309, 
                style: style_Ferracini_309,
                popuplayertitle: 'Ferracini',
                interactive: true,
                title: '<img src="styles/legend/Ferracini_309.png" /> Ferracini'
            });
var format_FrancaB6_310 = new ol.format.GeoJSON();
var features_FrancaB6_310 = format_FrancaB6_310.readFeatures(json_FrancaB6_310, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FrancaB6_310 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrancaB6_310.addFeatures(features_FrancaB6_310);
var lyr_FrancaB6_310 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrancaB6_310, 
                style: style_FrancaB6_310,
                popuplayertitle: 'Franca B6',
                interactive: true,
    title: 'Franca B6<br />\
    <img src="styles/legend/FrancaB6_310_0.png" /> APP<br />\
    <img src="styles/legend/FrancaB6_310_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/FrancaB6_310_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/FrancaB6_310_3.png" /> LOTES<br />\
    <img src="styles/legend/FrancaB6_310_4.png" /> RUAS<br />\
    <img src="styles/legend/FrancaB6_310_5.png" /> PASSEIO<br />' });
var format_FrancaB6_311 = new ol.format.GeoJSON();
var features_FrancaB6_311 = format_FrancaB6_311.readFeatures(json_FrancaB6_311, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FrancaB6_311 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrancaB6_311.addFeatures(features_FrancaB6_311);
var lyr_FrancaB6_311 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrancaB6_311, 
                style: style_FrancaB6_311,
                popuplayertitle: 'Franca B6',
                interactive: true,
                title: '<img src="styles/legend/FrancaB6_311.png" /> Franca B6'
            });
var format_FazendaProgresso_312 = new ol.format.GeoJSON();
var features_FazendaProgresso_312 = format_FazendaProgresso_312.readFeatures(json_FazendaProgresso_312, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaProgresso_312 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaProgresso_312.addFeatures(features_FazendaProgresso_312);
var lyr_FazendaProgresso_312 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaProgresso_312, 
                style: style_FazendaProgresso_312,
                popuplayertitle: 'Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/FazendaProgresso_312.png" /> Fazenda Progresso'
            });
var format_FazendaProgresso_313 = new ol.format.GeoJSON();
var features_FazendaProgresso_313 = format_FazendaProgresso_313.readFeatures(json_FazendaProgresso_313, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaProgresso_313 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaProgresso_313.addFeatures(features_FazendaProgresso_313);
var lyr_FazendaProgresso_313 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaProgresso_313, 
                style: style_FazendaProgresso_313,
                popuplayertitle: 'Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/FazendaProgresso_313.png" /> Fazenda Progresso'
            });
var format_FazendaeGranjaSantaRita2_314 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita2_314 = format_FazendaeGranjaSantaRita2_314.readFeatures(json_FazendaeGranjaSantaRita2_314, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaeGranjaSantaRita2_314 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita2_314.addFeatures(features_FazendaeGranjaSantaRita2_314);
var lyr_FazendaeGranjaSantaRita2_314 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita2_314, 
                style: style_FazendaeGranjaSantaRita2_314,
                popuplayertitle: 'Fazenda e Granja Santa Rita 2',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita2_314.png" /> Fazenda e Granja Santa Rita 2'
            });
var format_FazendaeGranjaSantaRita2_315 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita2_315 = format_FazendaeGranjaSantaRita2_315.readFeatures(json_FazendaeGranjaSantaRita2_315, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaeGranjaSantaRita2_315 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita2_315.addFeatures(features_FazendaeGranjaSantaRita2_315);
var lyr_FazendaeGranjaSantaRita2_315 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita2_315, 
                style: style_FazendaeGranjaSantaRita2_315,
                popuplayertitle: 'Fazenda e Granja Santa Rita 2',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita2_315.png" /> Fazenda e Granja Santa Rita 2'
            });
var format_FazendaeGranjaSantaRita_316 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita_316 = format_FazendaeGranjaSantaRita_316.readFeatures(json_FazendaeGranjaSantaRita_316, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaeGranjaSantaRita_316 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita_316.addFeatures(features_FazendaeGranjaSantaRita_316);
var lyr_FazendaeGranjaSantaRita_316 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita_316, 
                style: style_FazendaeGranjaSantaRita_316,
                popuplayertitle: 'Fazenda e Granja Santa Rita',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita_316.png" /> Fazenda e Granja Santa Rita'
            });
var format_FazendaeGranjaSantaRita_317 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita_317 = format_FazendaeGranjaSantaRita_317.readFeatures(json_FazendaeGranjaSantaRita_317, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaeGranjaSantaRita_317 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita_317.addFeatures(features_FazendaeGranjaSantaRita_317);
var lyr_FazendaeGranjaSantaRita_317 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita_317, 
                style: style_FazendaeGranjaSantaRita_317,
                popuplayertitle: 'Fazenda e Granja Santa Rita',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita_317.png" /> Fazenda e Granja Santa Rita'
            });
var format_Essence_318 = new ol.format.GeoJSON();
var features_Essence_318 = format_Essence_318.readFeatures(json_Essence_318, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Essence_318 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Essence_318.addFeatures(features_Essence_318);
var lyr_Essence_318 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Essence_318, 
                style: style_Essence_318,
                popuplayertitle: 'Essence',
                interactive: true,
                title: '<img src="styles/legend/Essence_318.png" /> Essence'
            });
var format_Essence_319 = new ol.format.GeoJSON();
var features_Essence_319 = format_Essence_319.readFeatures(json_Essence_319, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Essence_319 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Essence_319.addFeatures(features_Essence_319);
var lyr_Essence_319 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Essence_319, 
                style: style_Essence_319,
                popuplayertitle: 'Essence',
                interactive: true,
                title: '<img src="styles/legend/Essence_319.png" /> Essence'
            });
var format_Elias_320 = new ol.format.GeoJSON();
var features_Elias_320 = format_Elias_320.readFeatures(json_Elias_320, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Elias_320 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elias_320.addFeatures(features_Elias_320);
var lyr_Elias_320 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elias_320, 
                style: style_Elias_320,
                popuplayertitle: 'Elias',
                interactive: true,
    title: 'Elias<br />\
    <img src="styles/legend/Elias_320_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Elias_320_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/Elias_320_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Elias_320_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/Elias_320_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Elias_320_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Elias_320_6.png" /> PASSEIO<br />\
    <img src="styles/legend/Elias_320_7.png" /> RUAS<br />' });
var format_Elias_321 = new ol.format.GeoJSON();
var features_Elias_321 = format_Elias_321.readFeatures(json_Elias_321, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Elias_321 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elias_321.addFeatures(features_Elias_321);
var lyr_Elias_321 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elias_321, 
                style: style_Elias_321,
                popuplayertitle: 'Elias',
                interactive: true,
                title: '<img src="styles/legend/Elias_321.png" /> Elias'
            });
var format_EdifcioSolNascente_322 = new ol.format.GeoJSON();
var features_EdifcioSolNascente_322 = format_EdifcioSolNascente_322.readFeatures(json_EdifcioSolNascente_322, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioSolNascente_322 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioSolNascente_322.addFeatures(features_EdifcioSolNascente_322);
var lyr_EdifcioSolNascente_322 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioSolNascente_322, 
                style: style_EdifcioSolNascente_322,
                popuplayertitle: 'Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EdifcioSolNascente_322.png" /> Edifício Sol Nascente'
            });
var format_EdifcioSolNascente_323 = new ol.format.GeoJSON();
var features_EdifcioSolNascente_323 = format_EdifcioSolNascente_323.readFeatures(json_EdifcioSolNascente_323, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioSolNascente_323 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioSolNascente_323.addFeatures(features_EdifcioSolNascente_323);
var lyr_EdifcioSolNascente_323 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioSolNascente_323, 
                style: style_EdifcioSolNascente_323,
                popuplayertitle: 'Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EdifcioSolNascente_323.png" /> Edifício Sol Nascente'
            });
var format_EdifcioRuadoSol_324 = new ol.format.GeoJSON();
var features_EdifcioRuadoSol_324 = format_EdifcioRuadoSol_324.readFeatures(json_EdifcioRuadoSol_324, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioRuadoSol_324 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioRuadoSol_324.addFeatures(features_EdifcioRuadoSol_324);
var lyr_EdifcioRuadoSol_324 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioRuadoSol_324, 
                style: style_EdifcioRuadoSol_324,
                popuplayertitle: 'Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EdifcioRuadoSol_324.png" /> Edifício Rua do Sol'
            });
var format_EdifcioRuadoSol_325 = new ol.format.GeoJSON();
var features_EdifcioRuadoSol_325 = format_EdifcioRuadoSol_325.readFeatures(json_EdifcioRuadoSol_325, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioRuadoSol_325 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioRuadoSol_325.addFeatures(features_EdifcioRuadoSol_325);
var lyr_EdifcioRuadoSol_325 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioRuadoSol_325, 
                style: style_EdifcioRuadoSol_325,
                popuplayertitle: 'Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EdifcioRuadoSol_325.png" /> Edifício Rua do Sol'
            });
var format_EdifcioResidencialHope_326 = new ol.format.GeoJSON();
var features_EdifcioResidencialHope_326 = format_EdifcioResidencialHope_326.readFeatures(json_EdifcioResidencialHope_326, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioResidencialHope_326 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioResidencialHope_326.addFeatures(features_EdifcioResidencialHope_326);
var lyr_EdifcioResidencialHope_326 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioResidencialHope_326, 
                style: style_EdifcioResidencialHope_326,
                popuplayertitle: 'Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EdifcioResidencialHope_326.png" /> Edifício Residencial Hope'
            });
var format_EdifcioResidencialHope_327 = new ol.format.GeoJSON();
var features_EdifcioResidencialHope_327 = format_EdifcioResidencialHope_327.readFeatures(json_EdifcioResidencialHope_327, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioResidencialHope_327 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioResidencialHope_327.addFeatures(features_EdifcioResidencialHope_327);
var lyr_EdifcioResidencialHope_327 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioResidencialHope_327, 
                style: style_EdifcioResidencialHope_327,
                popuplayertitle: 'Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EdifcioResidencialHope_327.png" /> Edifício Residencial Hope'
            });
var format_DiocesedeFranca_328 = new ol.format.GeoJSON();
var features_DiocesedeFranca_328 = format_DiocesedeFranca_328.readFeatures(json_DiocesedeFranca_328, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DiocesedeFranca_328 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiocesedeFranca_328.addFeatures(features_DiocesedeFranca_328);
var lyr_DiocesedeFranca_328 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiocesedeFranca_328, 
                style: style_DiocesedeFranca_328,
                popuplayertitle: 'Diocese de Franca',
                interactive: true,
    title: 'Diocese de Franca<br />\
    <img src="styles/legend/DiocesedeFranca_328_0.png" /> APP<br />\
    <img src="styles/legend/DiocesedeFranca_328_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/DiocesedeFranca_328_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/DiocesedeFranca_328_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/DiocesedeFranca_328_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/DiocesedeFranca_328_5.png" /> PASSEIO<br />\
    <img src="styles/legend/DiocesedeFranca_328_6.png" /> RUAS<br />' });
var format_DiocesedeFranca_329 = new ol.format.GeoJSON();
var features_DiocesedeFranca_329 = format_DiocesedeFranca_329.readFeatures(json_DiocesedeFranca_329, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DiocesedeFranca_329 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiocesedeFranca_329.addFeatures(features_DiocesedeFranca_329);
var lyr_DiocesedeFranca_329 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiocesedeFranca_329, 
                style: style_DiocesedeFranca_329,
                popuplayertitle: 'Diocese de Franca',
                interactive: true,
                title: '<img src="styles/legend/DiocesedeFranca_329.png" /> Diocese de Franca'
            });
var format_DaVinci_330 = new ol.format.GeoJSON();
var features_DaVinci_330 = format_DaVinci_330.readFeatures(json_DaVinci_330, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DaVinci_330 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaVinci_330.addFeatures(features_DaVinci_330);
var lyr_DaVinci_330 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaVinci_330, 
                style: style_DaVinci_330,
                popuplayertitle: 'Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/DaVinci_330.png" /> Da Vinci'
            });
var format_DaVinci_331 = new ol.format.GeoJSON();
var features_DaVinci_331 = format_DaVinci_331.readFeatures(json_DaVinci_331, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DaVinci_331 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaVinci_331.addFeatures(features_DaVinci_331);
var lyr_DaVinci_331 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaVinci_331, 
                style: style_DaVinci_331,
                popuplayertitle: 'Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/DaVinci_331.png" /> Da Vinci'
            });
var format_CondomnioIICityPetrpolis_332 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_332 = format_CondomnioIICityPetrpolis_332.readFeatures(json_CondomnioIICityPetrpolis_332, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioIICityPetrpolis_332 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_332.addFeatures(features_CondomnioIICityPetrpolis_332);
var lyr_CondomnioIICityPetrpolis_332 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_332, 
                style: style_CondomnioIICityPetrpolis_332,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
    title: 'Condomínio II City Petrópolis<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_332_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_332_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_332_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_332_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_332_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_332_5.png" /> RUAS<br />' });
var format_CondomnioIICityPetrpolis_333 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_333 = format_CondomnioIICityPetrpolis_333.readFeatures(json_CondomnioIICityPetrpolis_333, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioIICityPetrpolis_333 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_333.addFeatures(features_CondomnioIICityPetrpolis_333);
var lyr_CondomnioIICityPetrpolis_333 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_333, 
                style: style_CondomnioIICityPetrpolis_333,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
                title: '<img src="styles/legend/CondomnioIICityPetrpolis_333.png" /> Condomínio II City Petrópolis'
            });
var format_CondomnioICityPetrpolis_334 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_334 = format_CondomnioICityPetrpolis_334.readFeatures(json_CondomnioICityPetrpolis_334, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioICityPetrpolis_334 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_334.addFeatures(features_CondomnioICityPetrpolis_334);
var lyr_CondomnioICityPetrpolis_334 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_334, 
                style: style_CondomnioICityPetrpolis_334,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
    title: 'Condomínio I City Petrópolis<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_334_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_334_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_334_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_334_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_334_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_334_5.png" /> RUAS<br />' });
var format_CondomnioICityPetrpolis_335 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_335 = format_CondomnioICityPetrpolis_335.readFeatures(json_CondomnioICityPetrpolis_335, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioICityPetrpolis_335 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_335.addFeatures(features_CondomnioICityPetrpolis_335);
var lyr_CondomnioICityPetrpolis_335 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_335, 
                style: style_CondomnioICityPetrpolis_335,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
                title: '<img src="styles/legend/CondomnioICityPetrpolis_335.png" /> Condomínio I City Petrópolis'
            });
var format_Colorado_336 = new ol.format.GeoJSON();
var features_Colorado_336 = format_Colorado_336.readFeatures(json_Colorado_336, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Colorado_336 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colorado_336.addFeatures(features_Colorado_336);
var lyr_Colorado_336 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colorado_336, 
                style: style_Colorado_336,
                popuplayertitle: 'Colorado',
                interactive: true,
    title: 'Colorado<br />\
    <img src="styles/legend/Colorado_336_0.png" /> APP<br />\
    <img src="styles/legend/Colorado_336_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Colorado_336_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Colorado_336_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/Colorado_336_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Colorado_336_5.png" /> RUAS<br />\
    <img src="styles/legend/Colorado_336_6.png" /> PASSEIO<br />' });
var format_Colorado_337 = new ol.format.GeoJSON();
var features_Colorado_337 = format_Colorado_337.readFeatures(json_Colorado_337, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Colorado_337 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colorado_337.addFeatures(features_Colorado_337);
var lyr_Colorado_337 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colorado_337, 
                style: style_Colorado_337,
                popuplayertitle: 'Colorado',
                interactive: true,
                title: '<img src="styles/legend/Colorado_337.png" /> Colorado'
            });
var format_CidadeJardim_338 = new ol.format.GeoJSON();
var features_CidadeJardim_338 = format_CidadeJardim_338.readFeatures(json_CidadeJardim_338, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CidadeJardim_338 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CidadeJardim_338.addFeatures(features_CidadeJardim_338);
var lyr_CidadeJardim_338 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CidadeJardim_338, 
                style: style_CidadeJardim_338,
                popuplayertitle: 'Cidade Jardim',
                interactive: true,
    title: 'Cidade Jardim<br />\
    <img src="styles/legend/CidadeJardim_338_0.png" /> APP<br />\
    <img src="styles/legend/CidadeJardim_338_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CidadeJardim_338_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/CidadeJardim_338_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/CidadeJardim_338_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CidadeJardim_338_5.png" /> PASSEIO<br />\
    <img src="styles/legend/CidadeJardim_338_6.png" /> RUAS<br />\
    <img src="styles/legend/CidadeJardim_338_7.png" /> SERVIDAO<br />' });
var format_CidadeJardim_339 = new ol.format.GeoJSON();
var features_CidadeJardim_339 = format_CidadeJardim_339.readFeatures(json_CidadeJardim_339, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CidadeJardim_339 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CidadeJardim_339.addFeatures(features_CidadeJardim_339);
var lyr_CidadeJardim_339 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CidadeJardim_339, 
                style: style_CidadeJardim_339,
                popuplayertitle: 'Cidade Jardim',
                interactive: true,
                title: '<img src="styles/legend/CidadeJardim_339.png" /> Cidade Jardim'
            });
var format_ChacaraOlaria_340 = new ol.format.GeoJSON();
var features_ChacaraOlaria_340 = format_ChacaraOlaria_340.readFeatures(json_ChacaraOlaria_340, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChacaraOlaria_340 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraOlaria_340.addFeatures(features_ChacaraOlaria_340);
var lyr_ChacaraOlaria_340 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraOlaria_340, 
                style: style_ChacaraOlaria_340,
                popuplayertitle: 'Chacara Olaria',
                interactive: true,
                title: '<img src="styles/legend/ChacaraOlaria_340.png" /> Chacara Olaria'
            });
var format_ChacaraOlaria_341 = new ol.format.GeoJSON();
var features_ChacaraOlaria_341 = format_ChacaraOlaria_341.readFeatures(json_ChacaraOlaria_341, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChacaraOlaria_341 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraOlaria_341.addFeatures(features_ChacaraOlaria_341);
var lyr_ChacaraOlaria_341 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraOlaria_341, 
                style: style_ChacaraOlaria_341,
                popuplayertitle: 'Chacara Olaria',
                interactive: true,
                title: '<img src="styles/legend/ChacaraOlaria_341.png" /> Chacara Olaria'
            });
var format_ChacaraBelaVista_342 = new ol.format.GeoJSON();
var features_ChacaraBelaVista_342 = format_ChacaraBelaVista_342.readFeatures(json_ChacaraBelaVista_342, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChacaraBelaVista_342 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraBelaVista_342.addFeatures(features_ChacaraBelaVista_342);
var lyr_ChacaraBelaVista_342 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraBelaVista_342, 
                style: style_ChacaraBelaVista_342,
                popuplayertitle: 'Chacara Bela Vista',
                interactive: true,
    title: 'Chacara Bela Vista<br />\
    <img src="styles/legend/ChacaraBelaVista_342_0.png" /> APP<br />\
    <img src="styles/legend/ChacaraBelaVista_342_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ChacaraBelaVista_342_2.png" /> LOTES<br />\
    <img src="styles/legend/ChacaraBelaVista_342_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ChacaraBelaVista_342_4.png" /> RUAS<br />' });
var format_ChacaraBelaVista_343 = new ol.format.GeoJSON();
var features_ChacaraBelaVista_343 = format_ChacaraBelaVista_343.readFeatures(json_ChacaraBelaVista_343, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChacaraBelaVista_343 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraBelaVista_343.addFeatures(features_ChacaraBelaVista_343);
var lyr_ChacaraBelaVista_343 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraBelaVista_343, 
                style: style_ChacaraBelaVista_343,
                popuplayertitle: 'Chacara Bela Vista',
                interactive: true,
                title: '<img src="styles/legend/ChacaraBelaVista_343.png" /> Chacara Bela Vista'
            });
var format_BordadaMata_344 = new ol.format.GeoJSON();
var features_BordadaMata_344 = format_BordadaMata_344.readFeatures(json_BordadaMata_344, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BordadaMata_344 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BordadaMata_344.addFeatures(features_BordadaMata_344);
var lyr_BordadaMata_344 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BordadaMata_344, 
                style: style_BordadaMata_344,
                popuplayertitle: 'Borda da Mata',
                interactive: true,
    title: 'Borda da Mata<br />\
    <img src="styles/legend/BordadaMata_344_0.png" /> APP<br />\
    <img src="styles/legend/BordadaMata_344_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/BordadaMata_344_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/BordadaMata_344_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/BordadaMata_344_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/BordadaMata_344_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/BordadaMata_344_6.png" /> PASSEIO<br />\
    <img src="styles/legend/BordadaMata_344_7.png" /> RUAS<br />\
    <img src="styles/legend/BordadaMata_344_8.png" /> SERVIDAO<br />' });
var format_BordadaMata_345 = new ol.format.GeoJSON();
var features_BordadaMata_345 = format_BordadaMata_345.readFeatures(json_BordadaMata_345, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BordadaMata_345 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BordadaMata_345.addFeatures(features_BordadaMata_345);
var lyr_BordadaMata_345 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BordadaMata_345, 
                style: style_BordadaMata_345,
                popuplayertitle: 'Borda da Mata',
                interactive: true,
                title: '<img src="styles/legend/BordadaMata_345.png" /> Borda da Mata'
            });
var format_Arteris_346 = new ol.format.GeoJSON();
var features_Arteris_346 = format_Arteris_346.readFeatures(json_Arteris_346, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arteris_346 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arteris_346.addFeatures(features_Arteris_346);
var lyr_Arteris_346 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arteris_346, 
                style: style_Arteris_346,
                popuplayertitle: 'Arteris',
                interactive: true,
    title: 'Arteris<br />\
    <img src="styles/legend/Arteris_346_0.png" /> OAE EXISTENTE<br />\
    <img src="styles/legend/Arteris_346_1.png" /> OAE PROJETADA<br />\
    <img src="styles/legend/Arteris_346_2.png" /> PASSARELA EXISTENTE<br />\
    <img src="styles/legend/Arteris_346_3.png" /> PASSEIO PROJETADO<br />\
    <img src="styles/legend/Arteris_346_4.png" /> PAVIMENTO DO DISPOSITIVO<br />\
    <img src="styles/legend/Arteris_346_5.png" /> PAVIMENTO EXISTENTE<br />\
    <img src="styles/legend/Arteris_346_6.png" /> PAVIMENTO PREFEITURA<br />\
    <img src="styles/legend/Arteris_346_7.png" /> AREA DESAPROPRIADA<br />' });
var format_Arteris_347 = new ol.format.GeoJSON();
var features_Arteris_347 = format_Arteris_347.readFeatures(json_Arteris_347, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arteris_347 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arteris_347.addFeatures(features_Arteris_347);
var lyr_Arteris_347 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arteris_347, 
                style: style_Arteris_347,
                popuplayertitle: 'Arteris',
                interactive: true,
                title: '<img src="styles/legend/Arteris_347.png" /> Arteris'
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
var format_IRREGULAR174UNID_357 = new ol.format.GeoJSON();
var features_IRREGULAR174UNID_357 = format_IRREGULAR174UNID_357.readFeatures(json_IRREGULAR174UNID_357, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IRREGULAR174UNID_357 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IRREGULAR174UNID_357.addFeatures(features_IRREGULAR174UNID_357);
var lyr_IRREGULAR174UNID_357 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IRREGULAR174UNID_357, 
                style: style_IRREGULAR174UNID_357,
                popuplayertitle: 'IRREGULAR (174 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/IRREGULAR174UNID_357.png" /> IRREGULAR (174 UNID.)'
            });
var format_FBDS_RIOS_DUPLOS_358 = new ol.format.GeoJSON();
var features_FBDS_RIOS_DUPLOS_358 = format_FBDS_RIOS_DUPLOS_358.readFeatures(json_FBDS_RIOS_DUPLOS_358, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FBDS_RIOS_DUPLOS_358 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FBDS_RIOS_DUPLOS_358.addFeatures(features_FBDS_RIOS_DUPLOS_358);
var lyr_FBDS_RIOS_DUPLOS_358 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FBDS_RIOS_DUPLOS_358, 
                style: style_FBDS_RIOS_DUPLOS_358,
                popuplayertitle: 'FBDS_RIOS_DUPLOS',
                interactive: true,
                title: '<img src="styles/legend/FBDS_RIOS_DUPLOS_358.png" /> FBDS_RIOS_DUPLOS'
            });
var format_FBDS_MASSAS_DAGUA_359 = new ol.format.GeoJSON();
var features_FBDS_MASSAS_DAGUA_359 = format_FBDS_MASSAS_DAGUA_359.readFeatures(json_FBDS_MASSAS_DAGUA_359, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FBDS_MASSAS_DAGUA_359 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FBDS_MASSAS_DAGUA_359.addFeatures(features_FBDS_MASSAS_DAGUA_359);
var lyr_FBDS_MASSAS_DAGUA_359 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FBDS_MASSAS_DAGUA_359, 
                style: style_FBDS_MASSAS_DAGUA_359,
                popuplayertitle: 'FBDS_MASSAS_DAGUA',
                interactive: true,
                title: '<img src="styles/legend/FBDS_MASSAS_DAGUA_359.png" /> FBDS_MASSAS_DAGUA'
            });
var format_FBDS_APP_360 = new ol.format.GeoJSON();
var features_FBDS_APP_360 = format_FBDS_APP_360.readFeatures(json_FBDS_APP_360, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FBDS_APP_360 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FBDS_APP_360.addFeatures(features_FBDS_APP_360);
var lyr_FBDS_APP_360 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FBDS_APP_360, 
                style: style_FBDS_APP_360,
                popuplayertitle: 'FBDS_APP',
                interactive: true,
                title: '<img src="styles/legend/FBDS_APP_360.png" /> FBDS_APP'
            });
var format_FBDS_NASCENTES_361 = new ol.format.GeoJSON();
var features_FBDS_NASCENTES_361 = format_FBDS_NASCENTES_361.readFeatures(json_FBDS_NASCENTES_361, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FBDS_NASCENTES_361 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FBDS_NASCENTES_361.addFeatures(features_FBDS_NASCENTES_361);
var lyr_FBDS_NASCENTES_361 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FBDS_NASCENTES_361, 
                style: style_FBDS_NASCENTES_361,
                popuplayertitle: 'FBDS_NASCENTES',
                interactive: true,
                title: '<img src="styles/legend/FBDS_NASCENTES_361.png" /> FBDS_NASCENTES'
            });
var format_FBDS_RIOS_SIMPLES_362 = new ol.format.GeoJSON();
var features_FBDS_RIOS_SIMPLES_362 = format_FBDS_RIOS_SIMPLES_362.readFeatures(json_FBDS_RIOS_SIMPLES_362, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FBDS_RIOS_SIMPLES_362 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FBDS_RIOS_SIMPLES_362.addFeatures(features_FBDS_RIOS_SIMPLES_362);
var lyr_FBDS_RIOS_SIMPLES_362 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FBDS_RIOS_SIMPLES_362, 
                style: style_FBDS_RIOS_SIMPLES_362,
                popuplayertitle: 'FBDS_RIOS_SIMPLES',
                interactive: true,
                title: '<img src="styles/legend/FBDS_RIOS_SIMPLES_362.png" /> FBDS_RIOS_SIMPLES'
            });
var format_CORPO_HIDRICO_CANAL_FECHADO088KM_363 = new ol.format.GeoJSON();
var features_CORPO_HIDRICO_CANAL_FECHADO088KM_363 = format_CORPO_HIDRICO_CANAL_FECHADO088KM_363.readFeatures(json_CORPO_HIDRICO_CANAL_FECHADO088KM_363, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CORPO_HIDRICO_CANAL_FECHADO088KM_363 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORPO_HIDRICO_CANAL_FECHADO088KM_363.addFeatures(features_CORPO_HIDRICO_CANAL_FECHADO088KM_363);
var lyr_CORPO_HIDRICO_CANAL_FECHADO088KM_363 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORPO_HIDRICO_CANAL_FECHADO088KM_363, 
                style: style_CORPO_HIDRICO_CANAL_FECHADO088KM_363,
                popuplayertitle: 'CORPO_HIDRICO_CANAL_FECHADO (0,88 KM)',
                interactive: true,
                title: '<img src="styles/legend/CORPO_HIDRICO_CANAL_FECHADO088KM_363.png" /> CORPO_HIDRICO_CANAL_FECHADO (0,88 KM)'
            });
var format_CORPO_HIDRICO_CANAL_ABERTO1252KM_364 = new ol.format.GeoJSON();
var features_CORPO_HIDRICO_CANAL_ABERTO1252KM_364 = format_CORPO_HIDRICO_CANAL_ABERTO1252KM_364.readFeatures(json_CORPO_HIDRICO_CANAL_ABERTO1252KM_364, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CORPO_HIDRICO_CANAL_ABERTO1252KM_364 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORPO_HIDRICO_CANAL_ABERTO1252KM_364.addFeatures(features_CORPO_HIDRICO_CANAL_ABERTO1252KM_364);
var lyr_CORPO_HIDRICO_CANAL_ABERTO1252KM_364 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORPO_HIDRICO_CANAL_ABERTO1252KM_364, 
                style: style_CORPO_HIDRICO_CANAL_ABERTO1252KM_364,
                popuplayertitle: 'CORPO_HIDRICO_CANAL_ABERTO (12,52 KM)',
                interactive: true,
                title: '<img src="styles/legend/CORPO_HIDRICO_CANAL_ABERTO1252KM_364.png" /> CORPO_HIDRICO_CANAL_ABERTO (12,52 KM)'
            });
var format_PARQUE_ZUMBI_DOS_PALMARES_365 = new ol.format.GeoJSON();
var features_PARQUE_ZUMBI_DOS_PALMARES_365 = format_PARQUE_ZUMBI_DOS_PALMARES_365.readFeatures(json_PARQUE_ZUMBI_DOS_PALMARES_365, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_ZUMBI_DOS_PALMARES_365 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_ZUMBI_DOS_PALMARES_365.addFeatures(features_PARQUE_ZUMBI_DOS_PALMARES_365);
var lyr_PARQUE_ZUMBI_DOS_PALMARES_365 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_ZUMBI_DOS_PALMARES_365, 
                style: style_PARQUE_ZUMBI_DOS_PALMARES_365,
                popuplayertitle: 'PARQUE_ZUMBI_DOS_PALMARES',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_ZUMBI_DOS_PALMARES_365.png" /> PARQUE_ZUMBI_DOS_PALMARES'
            });
var format_ATERRO_DAS_MARITACAS_366 = new ol.format.GeoJSON();
var features_ATERRO_DAS_MARITACAS_366 = format_ATERRO_DAS_MARITACAS_366.readFeatures(json_ATERRO_DAS_MARITACAS_366, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ATERRO_DAS_MARITACAS_366 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATERRO_DAS_MARITACAS_366.addFeatures(features_ATERRO_DAS_MARITACAS_366);
var lyr_ATERRO_DAS_MARITACAS_366 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATERRO_DAS_MARITACAS_366, 
                style: style_ATERRO_DAS_MARITACAS_366,
                popuplayertitle: 'ATERRO_DAS_MARITACAS',
                interactive: true,
                title: '<img src="styles/legend/ATERRO_DAS_MARITACAS_366.png" /> ATERRO_DAS_MARITACAS'
            });
var format_ATERRO_DAS_MARITACAS_ETAPA_3_367 = new ol.format.GeoJSON();
var features_ATERRO_DAS_MARITACAS_ETAPA_3_367 = format_ATERRO_DAS_MARITACAS_ETAPA_3_367.readFeatures(json_ATERRO_DAS_MARITACAS_ETAPA_3_367, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ATERRO_DAS_MARITACAS_ETAPA_3_367 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATERRO_DAS_MARITACAS_ETAPA_3_367.addFeatures(features_ATERRO_DAS_MARITACAS_ETAPA_3_367);
var lyr_ATERRO_DAS_MARITACAS_ETAPA_3_367 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATERRO_DAS_MARITACAS_ETAPA_3_367, 
                style: style_ATERRO_DAS_MARITACAS_ETAPA_3_367,
                popuplayertitle: 'ATERRO_DAS_MARITACAS_ETAPA_3',
                interactive: true,
                title: '<img src="styles/legend/ATERRO_DAS_MARITACAS_ETAPA_3_367.png" /> ATERRO_DAS_MARITACAS_ETAPA_3'
            });
var format_ATERRO_DAS_MARITACAS_ETAPA_2_368 = new ol.format.GeoJSON();
var features_ATERRO_DAS_MARITACAS_ETAPA_2_368 = format_ATERRO_DAS_MARITACAS_ETAPA_2_368.readFeatures(json_ATERRO_DAS_MARITACAS_ETAPA_2_368, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ATERRO_DAS_MARITACAS_ETAPA_2_368 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATERRO_DAS_MARITACAS_ETAPA_2_368.addFeatures(features_ATERRO_DAS_MARITACAS_ETAPA_2_368);
var lyr_ATERRO_DAS_MARITACAS_ETAPA_2_368 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATERRO_DAS_MARITACAS_ETAPA_2_368, 
                style: style_ATERRO_DAS_MARITACAS_ETAPA_2_368,
                popuplayertitle: 'ATERRO_DAS_MARITACAS_ETAPA_2',
                interactive: true,
                title: '<img src="styles/legend/ATERRO_DAS_MARITACAS_ETAPA_2_368.png" /> ATERRO_DAS_MARITACAS_ETAPA_2'
            });
var format_ATERRO_DAS_MARITACAS_ETAPA_1_369 = new ol.format.GeoJSON();
var features_ATERRO_DAS_MARITACAS_ETAPA_1_369 = format_ATERRO_DAS_MARITACAS_ETAPA_1_369.readFeatures(json_ATERRO_DAS_MARITACAS_ETAPA_1_369, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ATERRO_DAS_MARITACAS_ETAPA_1_369 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATERRO_DAS_MARITACAS_ETAPA_1_369.addFeatures(features_ATERRO_DAS_MARITACAS_ETAPA_1_369);
var lyr_ATERRO_DAS_MARITACAS_ETAPA_1_369 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATERRO_DAS_MARITACAS_ETAPA_1_369, 
                style: style_ATERRO_DAS_MARITACAS_ETAPA_1_369,
                popuplayertitle: 'ATERRO_DAS_MARITACAS_ETAPA_1',
                interactive: true,
                title: '<img src="styles/legend/ATERRO_DAS_MARITACAS_ETAPA_1_369.png" /> ATERRO_DAS_MARITACAS_ETAPA_1'
            });
var format_ATERRO_DA_FAZENDA_MUNICIPAL_370 = new ol.format.GeoJSON();
var features_ATERRO_DA_FAZENDA_MUNICIPAL_370 = format_ATERRO_DA_FAZENDA_MUNICIPAL_370.readFeatures(json_ATERRO_DA_FAZENDA_MUNICIPAL_370, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_370 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_370.addFeatures(features_ATERRO_DA_FAZENDA_MUNICIPAL_370);
var lyr_ATERRO_DA_FAZENDA_MUNICIPAL_370 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_370, 
                style: style_ATERRO_DA_FAZENDA_MUNICIPAL_370,
                popuplayertitle: 'ATERRO_DA_FAZENDA_MUNICIPAL',
                interactive: true,
                title: '<img src="styles/legend/ATERRO_DA_FAZENDA_MUNICIPAL_370.png" /> ATERRO_DA_FAZENDA_MUNICIPAL'
            });
var format_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_371 = new ol.format.GeoJSON();
var features_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_371 = format_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_371.readFeatures(json_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_371, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_371 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_371.addFeatures(features_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_371);
var lyr_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_371 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_371, 
                style: style_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_371,
                popuplayertitle: 'ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA',
                interactive: true,
                title: '<img src="styles/legend/ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_371.png" /> ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA'
            });
var format_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_372 = new ol.format.GeoJSON();
var features_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_372 = format_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_372.readFeatures(json_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_372, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_372 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_372.addFeatures(features_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_372);
var lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_372 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_372, 
                style: style_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_372,
                popuplayertitle: 'ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS',
                interactive: true,
                title: '<img src="styles/legend/ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_372.png" /> ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS'
            });
var format_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_373 = new ol.format.GeoJSON();
var features_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_373 = format_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_373.readFeatures(json_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_373, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_373 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_373.addFeatures(features_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_373);
var lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_373 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_373, 
                style: style_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_373,
                popuplayertitle: 'ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA',
                interactive: true,
                title: '<img src="styles/legend/ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_373.png" /> ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA'
            });
var format_AREA_B_DA_FAZENDA_MUNICIPAL_374 = new ol.format.GeoJSON();
var features_AREA_B_DA_FAZENDA_MUNICIPAL_374 = format_AREA_B_DA_FAZENDA_MUNICIPAL_374.readFeatures(json_AREA_B_DA_FAZENDA_MUNICIPAL_374, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_B_DA_FAZENDA_MUNICIPAL_374 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_B_DA_FAZENDA_MUNICIPAL_374.addFeatures(features_AREA_B_DA_FAZENDA_MUNICIPAL_374);
var lyr_AREA_B_DA_FAZENDA_MUNICIPAL_374 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_B_DA_FAZENDA_MUNICIPAL_374, 
                style: style_AREA_B_DA_FAZENDA_MUNICIPAL_374,
                popuplayertitle: 'AREA_B_DA_FAZENDA_MUNICIPAL',
                interactive: true,
                title: '<img src="styles/legend/AREA_B_DA_FAZENDA_MUNICIPAL_374.png" /> AREA_B_DA_FAZENDA_MUNICIPAL'
            });
var format_AREA_B_DA_FAZENDA_MUNICIPAL_375 = new ol.format.GeoJSON();
var features_AREA_B_DA_FAZENDA_MUNICIPAL_375 = format_AREA_B_DA_FAZENDA_MUNICIPAL_375.readFeatures(json_AREA_B_DA_FAZENDA_MUNICIPAL_375, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_B_DA_FAZENDA_MUNICIPAL_375 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_B_DA_FAZENDA_MUNICIPAL_375.addFeatures(features_AREA_B_DA_FAZENDA_MUNICIPAL_375);
var lyr_AREA_B_DA_FAZENDA_MUNICIPAL_375 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_B_DA_FAZENDA_MUNICIPAL_375, 
                style: style_AREA_B_DA_FAZENDA_MUNICIPAL_375,
                popuplayertitle: 'AREA_B_DA_FAZENDA_MUNICIPAL',
                interactive: true,
                title: '<img src="styles/legend/AREA_B_DA_FAZENDA_MUNICIPAL_375.png" /> AREA_B_DA_FAZENDA_MUNICIPAL'
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
var format_VOCOROCAS27UNID_471 = new ol.format.GeoJSON();
var features_VOCOROCAS27UNID_471 = format_VOCOROCAS27UNID_471.readFeatures(json_VOCOROCAS27UNID_471, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VOCOROCAS27UNID_471 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VOCOROCAS27UNID_471.addFeatures(features_VOCOROCAS27UNID_471);
var lyr_VOCOROCAS27UNID_471 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VOCOROCAS27UNID_471, 
                style: style_VOCOROCAS27UNID_471,
                popuplayertitle: 'VOCOROCAS (27 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/VOCOROCAS27UNID_471.png" /> VOCOROCAS (27 UNID.)'
            });
var format_LOCAIS_DE_DIFICIL_ACESSO12UNID_472 = new ol.format.GeoJSON();
var features_LOCAIS_DE_DIFICIL_ACESSO12UNID_472 = format_LOCAIS_DE_DIFICIL_ACESSO12UNID_472.readFeatures(json_LOCAIS_DE_DIFICIL_ACESSO12UNID_472, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LOCAIS_DE_DIFICIL_ACESSO12UNID_472 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOCAIS_DE_DIFICIL_ACESSO12UNID_472.addFeatures(features_LOCAIS_DE_DIFICIL_ACESSO12UNID_472);
var lyr_LOCAIS_DE_DIFICIL_ACESSO12UNID_472 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOCAIS_DE_DIFICIL_ACESSO12UNID_472, 
                style: style_LOCAIS_DE_DIFICIL_ACESSO12UNID_472,
                popuplayertitle: 'LOCAIS_DE_DIFICIL_ACESSO (12 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/LOCAIS_DE_DIFICIL_ACESSO12UNID_472.png" /> LOCAIS_DE_DIFICIL_ACESSO (12 UNID.)'
            });
var format_CONTEINERES286UNID_473 = new ol.format.GeoJSON();
var features_CONTEINERES286UNID_473 = format_CONTEINERES286UNID_473.readFeatures(json_CONTEINERES286UNID_473, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CONTEINERES286UNID_473 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTEINERES286UNID_473.addFeatures(features_CONTEINERES286UNID_473);
var lyr_CONTEINERES286UNID_473 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTEINERES286UNID_473, 
                style: style_CONTEINERES286UNID_473,
                popuplayertitle: 'CONTEINERES (286 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/CONTEINERES286UNID_473.png" /> CONTEINERES (286 UNID.)'
            });
var format_ARVORES_IMUNE_AO_CORTE9UNID_474 = new ol.format.GeoJSON();
var features_ARVORES_IMUNE_AO_CORTE9UNID_474 = format_ARVORES_IMUNE_AO_CORTE9UNID_474.readFeatures(json_ARVORES_IMUNE_AO_CORTE9UNID_474, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARVORES_IMUNE_AO_CORTE9UNID_474 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARVORES_IMUNE_AO_CORTE9UNID_474.addFeatures(features_ARVORES_IMUNE_AO_CORTE9UNID_474);
var lyr_ARVORES_IMUNE_AO_CORTE9UNID_474 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARVORES_IMUNE_AO_CORTE9UNID_474, 
                style: style_ARVORES_IMUNE_AO_CORTE9UNID_474,
                popuplayertitle: 'ARVORES_IMUNE_AO_CORTE (9 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/ARVORES_IMUNE_AO_CORTE9UNID_474.png" /> ARVORES_IMUNE_AO_CORTE (9 UNID.)'
            });
var format_ACADEMIAS_AO_AR_LIVRE84UNID_475 = new ol.format.GeoJSON();
var features_ACADEMIAS_AO_AR_LIVRE84UNID_475 = format_ACADEMIAS_AO_AR_LIVRE84UNID_475.readFeatures(json_ACADEMIAS_AO_AR_LIVRE84UNID_475, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ACADEMIAS_AO_AR_LIVRE84UNID_475 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACADEMIAS_AO_AR_LIVRE84UNID_475.addFeatures(features_ACADEMIAS_AO_AR_LIVRE84UNID_475);
var lyr_ACADEMIAS_AO_AR_LIVRE84UNID_475 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACADEMIAS_AO_AR_LIVRE84UNID_475, 
                style: style_ACADEMIAS_AO_AR_LIVRE84UNID_475,
                popuplayertitle: 'ACADEMIAS_AO_AR_LIVRE (84 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/ACADEMIAS_AO_AR_LIVRE84UNID_475.png" /> ACADEMIAS_AO_AR_LIVRE (84 UNID.)'
            });
var format_SERVICO_DE_SAUDE21UNID_476 = new ol.format.GeoJSON();
var features_SERVICO_DE_SAUDE21UNID_476 = format_SERVICO_DE_SAUDE21UNID_476.readFeatures(json_SERVICO_DE_SAUDE21UNID_476, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SERVICO_DE_SAUDE21UNID_476 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVICO_DE_SAUDE21UNID_476.addFeatures(features_SERVICO_DE_SAUDE21UNID_476);
var lyr_SERVICO_DE_SAUDE21UNID_476 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SERVICO_DE_SAUDE21UNID_476, 
                style: style_SERVICO_DE_SAUDE21UNID_476,
                popuplayertitle: 'SERVICO_DE_SAUDE (21 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/SERVICO_DE_SAUDE21UNID_476.png" /> SERVICO_DE_SAUDE (21 UNID.)'
            });
var format_RECICLAVEIS15UNID_477 = new ol.format.GeoJSON();
var features_RECICLAVEIS15UNID_477 = format_RECICLAVEIS15UNID_477.readFeatures(json_RECICLAVEIS15UNID_477, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RECICLAVEIS15UNID_477 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RECICLAVEIS15UNID_477.addFeatures(features_RECICLAVEIS15UNID_477);
var lyr_RECICLAVEIS15UNID_477 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RECICLAVEIS15UNID_477, 
                style: style_RECICLAVEIS15UNID_477,
                popuplayertitle: 'RECICLAVEIS (15 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/RECICLAVEIS15UNID_477.png" /> RECICLAVEIS (15 UNID.)'
            });
var format_PNEUS1UNID_478 = new ol.format.GeoJSON();
var features_PNEUS1UNID_478 = format_PNEUS1UNID_478.readFeatures(json_PNEUS1UNID_478, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PNEUS1UNID_478 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNEUS1UNID_478.addFeatures(features_PNEUS1UNID_478);
var lyr_PNEUS1UNID_478 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNEUS1UNID_478, 
                style: style_PNEUS1UNID_478,
                popuplayertitle: 'PNEUS (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/PNEUS1UNID_478.png" /> PNEUS (1 UNID.)'
            });
var format_PILHAS_E_BATERIAS17UNID_479 = new ol.format.GeoJSON();
var features_PILHAS_E_BATERIAS17UNID_479 = format_PILHAS_E_BATERIAS17UNID_479.readFeatures(json_PILHAS_E_BATERIAS17UNID_479, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PILHAS_E_BATERIAS17UNID_479 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PILHAS_E_BATERIAS17UNID_479.addFeatures(features_PILHAS_E_BATERIAS17UNID_479);
var lyr_PILHAS_E_BATERIAS17UNID_479 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PILHAS_E_BATERIAS17UNID_479, 
                style: style_PILHAS_E_BATERIAS17UNID_479,
                popuplayertitle: 'PILHAS_E_BATERIAS (17 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/PILHAS_E_BATERIAS17UNID_479.png" /> PILHAS_E_BATERIAS (17 UNID.)'
            });
var format_PERIGOSOS1UNID_480 = new ol.format.GeoJSON();
var features_PERIGOSOS1UNID_480 = format_PERIGOSOS1UNID_480.readFeatures(json_PERIGOSOS1UNID_480, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PERIGOSOS1UNID_480 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERIGOSOS1UNID_480.addFeatures(features_PERIGOSOS1UNID_480);
var lyr_PERIGOSOS1UNID_480 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERIGOSOS1UNID_480, 
                style: style_PERIGOSOS1UNID_480,
                popuplayertitle: 'PERIGOSOS (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/PERIGOSOS1UNID_480.png" /> PERIGOSOS (1 UNID.)'
            });
var format_OLEO_LUBRIFICANTE1UNID_481 = new ol.format.GeoJSON();
var features_OLEO_LUBRIFICANTE1UNID_481 = format_OLEO_LUBRIFICANTE1UNID_481.readFeatures(json_OLEO_LUBRIFICANTE1UNID_481, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_OLEO_LUBRIFICANTE1UNID_481 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OLEO_LUBRIFICANTE1UNID_481.addFeatures(features_OLEO_LUBRIFICANTE1UNID_481);
var lyr_OLEO_LUBRIFICANTE1UNID_481 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OLEO_LUBRIFICANTE1UNID_481, 
                style: style_OLEO_LUBRIFICANTE1UNID_481,
                popuplayertitle: 'OLEO_LUBRIFICANTE (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/OLEO_LUBRIFICANTE1UNID_481.png" /> OLEO_LUBRIFICANTE (1 UNID.)'
            });
var format_OLEO_DE_COZINHA3UNID_482 = new ol.format.GeoJSON();
var features_OLEO_DE_COZINHA3UNID_482 = format_OLEO_DE_COZINHA3UNID_482.readFeatures(json_OLEO_DE_COZINHA3UNID_482, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_OLEO_DE_COZINHA3UNID_482 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OLEO_DE_COZINHA3UNID_482.addFeatures(features_OLEO_DE_COZINHA3UNID_482);
var lyr_OLEO_DE_COZINHA3UNID_482 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OLEO_DE_COZINHA3UNID_482, 
                style: style_OLEO_DE_COZINHA3UNID_482,
                popuplayertitle: 'OLEO_DE_COZINHA (3 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/OLEO_DE_COZINHA3UNID_482.png" /> OLEO_DE_COZINHA (3 UNID.)'
            });
var format_MASSA_VERDE1UNID_483 = new ol.format.GeoJSON();
var features_MASSA_VERDE1UNID_483 = format_MASSA_VERDE1UNID_483.readFeatures(json_MASSA_VERDE1UNID_483, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MASSA_VERDE1UNID_483 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MASSA_VERDE1UNID_483.addFeatures(features_MASSA_VERDE1UNID_483);
var lyr_MASSA_VERDE1UNID_483 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MASSA_VERDE1UNID_483, 
                style: style_MASSA_VERDE1UNID_483,
                popuplayertitle: 'MASSA_VERDE (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/MASSA_VERDE1UNID_483.png" /> MASSA_VERDE (1 UNID.)'
            });
var format_MADEIRAS1UNID_484 = new ol.format.GeoJSON();
var features_MADEIRAS1UNID_484 = format_MADEIRAS1UNID_484.readFeatures(json_MADEIRAS1UNID_484, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MADEIRAS1UNID_484 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MADEIRAS1UNID_484.addFeatures(features_MADEIRAS1UNID_484);
var lyr_MADEIRAS1UNID_484 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MADEIRAS1UNID_484, 
                style: style_MADEIRAS1UNID_484,
                popuplayertitle: 'MADEIRAS (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/MADEIRAS1UNID_484.png" /> MADEIRAS (1 UNID.)'
            });
var format_LATAS_DE_TINTA2UNID_485 = new ol.format.GeoJSON();
var features_LATAS_DE_TINTA2UNID_485 = format_LATAS_DE_TINTA2UNID_485.readFeatures(json_LATAS_DE_TINTA2UNID_485, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LATAS_DE_TINTA2UNID_485 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LATAS_DE_TINTA2UNID_485.addFeatures(features_LATAS_DE_TINTA2UNID_485);
var lyr_LATAS_DE_TINTA2UNID_485 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LATAS_DE_TINTA2UNID_485, 
                style: style_LATAS_DE_TINTA2UNID_485,
                popuplayertitle: 'LATAS_DE_TINTA (2 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/LATAS_DE_TINTA2UNID_485.png" /> LATAS_DE_TINTA (2 UNID.)'
            });
var format_LAMPADAS4UNID_486 = new ol.format.GeoJSON();
var features_LAMPADAS4UNID_486 = format_LAMPADAS4UNID_486.readFeatures(json_LAMPADAS4UNID_486, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LAMPADAS4UNID_486 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAMPADAS4UNID_486.addFeatures(features_LAMPADAS4UNID_486);
var lyr_LAMPADAS4UNID_486 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAMPADAS4UNID_486, 
                style: style_LAMPADAS4UNID_486,
                popuplayertitle: 'LAMPADAS (4 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/LAMPADAS4UNID_486.png" /> LAMPADAS (4 UNID.)'
            });
var format_INSERVIVEIS4UNID_487 = new ol.format.GeoJSON();
var features_INSERVIVEIS4UNID_487 = format_INSERVIVEIS4UNID_487.readFeatures(json_INSERVIVEIS4UNID_487, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_INSERVIVEIS4UNID_487 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INSERVIVEIS4UNID_487.addFeatures(features_INSERVIVEIS4UNID_487);
var lyr_INSERVIVEIS4UNID_487 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INSERVIVEIS4UNID_487, 
                style: style_INSERVIVEIS4UNID_487,
                popuplayertitle: 'INSERVIVEIS (4 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/INSERVIVEIS4UNID_487.png" /> INSERVIVEIS (4 UNID.)'
            });
var format_GESSO1UNID_488 = new ol.format.GeoJSON();
var features_GESSO1UNID_488 = format_GESSO1UNID_488.readFeatures(json_GESSO1UNID_488, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GESSO1UNID_488 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GESSO1UNID_488.addFeatures(features_GESSO1UNID_488);
var lyr_GESSO1UNID_488 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GESSO1UNID_488, 
                style: style_GESSO1UNID_488,
                popuplayertitle: 'GESSO (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/GESSO1UNID_488.png" /> GESSO (1 UNID.)'
            });
var format_EMBALAGENS_AGROTOXICO1UNID_489 = new ol.format.GeoJSON();
var features_EMBALAGENS_AGROTOXICO1UNID_489 = format_EMBALAGENS_AGROTOXICO1UNID_489.readFeatures(json_EMBALAGENS_AGROTOXICO1UNID_489, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EMBALAGENS_AGROTOXICO1UNID_489 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EMBALAGENS_AGROTOXICO1UNID_489.addFeatures(features_EMBALAGENS_AGROTOXICO1UNID_489);
var lyr_EMBALAGENS_AGROTOXICO1UNID_489 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EMBALAGENS_AGROTOXICO1UNID_489, 
                style: style_EMBALAGENS_AGROTOXICO1UNID_489,
                popuplayertitle: 'EMBALAGENS_AGROTOXICO (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/EMBALAGENS_AGROTOXICO1UNID_489.png" /> EMBALAGENS_AGROTOXICO (1 UNID.)'
            });
var format_ELETRONICOS3UNID_490 = new ol.format.GeoJSON();
var features_ELETRONICOS3UNID_490 = format_ELETRONICOS3UNID_490.readFeatures(json_ELETRONICOS3UNID_490, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ELETRONICOS3UNID_490 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELETRONICOS3UNID_490.addFeatures(features_ELETRONICOS3UNID_490);
var lyr_ELETRONICOS3UNID_490 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ELETRONICOS3UNID_490, 
                style: style_ELETRONICOS3UNID_490,
                popuplayertitle: 'ELETRONICOS (3 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/ELETRONICOS3UNID_490.png" /> ELETRONICOS (3 UNID.)'
            });
var format_COURO1UNID_491 = new ol.format.GeoJSON();
var features_COURO1UNID_491 = format_COURO1UNID_491.readFeatures(json_COURO1UNID_491, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_COURO1UNID_491 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COURO1UNID_491.addFeatures(features_COURO1UNID_491);
var lyr_COURO1UNID_491 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COURO1UNID_491, 
                style: style_COURO1UNID_491,
                popuplayertitle: 'COURO (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/COURO1UNID_491.png" /> COURO (1 UNID.)'
            });
var format_CONSTRUCAO_CIVIL7UNID_492 = new ol.format.GeoJSON();
var features_CONSTRUCAO_CIVIL7UNID_492 = format_CONSTRUCAO_CIVIL7UNID_492.readFeatures(json_CONSTRUCAO_CIVIL7UNID_492, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CONSTRUCAO_CIVIL7UNID_492 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONSTRUCAO_CIVIL7UNID_492.addFeatures(features_CONSTRUCAO_CIVIL7UNID_492);
var lyr_CONSTRUCAO_CIVIL7UNID_492 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONSTRUCAO_CIVIL7UNID_492, 
                style: style_CONSTRUCAO_CIVIL7UNID_492,
                popuplayertitle: 'CONSTRUCAO_CIVIL (7 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/CONSTRUCAO_CIVIL7UNID_492.png" /> CONSTRUCAO_CIVIL (7 UNID.)'
            });
var format_CHAPAS_DE_RAIO_X1UNID_493 = new ol.format.GeoJSON();
var features_CHAPAS_DE_RAIO_X1UNID_493 = format_CHAPAS_DE_RAIO_X1UNID_493.readFeatures(json_CHAPAS_DE_RAIO_X1UNID_493, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CHAPAS_DE_RAIO_X1UNID_493 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHAPAS_DE_RAIO_X1UNID_493.addFeatures(features_CHAPAS_DE_RAIO_X1UNID_493);
var lyr_CHAPAS_DE_RAIO_X1UNID_493 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHAPAS_DE_RAIO_X1UNID_493, 
                style: style_CHAPAS_DE_RAIO_X1UNID_493,
                popuplayertitle: 'CHAPAS_DE_RAIO_X (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/CHAPAS_DE_RAIO_X1UNID_493.png" /> CHAPAS_DE_RAIO_X (1 UNID.)'
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
var format_LOTEAMENTO_FECHADO146UNID70632440M_508 = new ol.format.GeoJSON();
var features_LOTEAMENTO_FECHADO146UNID70632440M_508 = format_LOTEAMENTO_FECHADO146UNID70632440M_508.readFeatures(json_LOTEAMENTO_FECHADO146UNID70632440M_508, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LOTEAMENTO_FECHADO146UNID70632440M_508 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTEAMENTO_FECHADO146UNID70632440M_508.addFeatures(features_LOTEAMENTO_FECHADO146UNID70632440M_508);
var lyr_LOTEAMENTO_FECHADO146UNID70632440M_508 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTEAMENTO_FECHADO146UNID70632440M_508, 
                style: style_LOTEAMENTO_FECHADO146UNID70632440M_508,
                popuplayertitle: 'LOTEAMENTO_FECHADO (146 UNID. / 706.324,40 M²)',
                interactive: true,
                title: '<img src="styles/legend/LOTEAMENTO_FECHADO146UNID70632440M_508.png" /> LOTEAMENTO_FECHADO (146 UNID. / 706.324,40 M²)'
            });
var format_LOTE_EMDEF10UNID218783M_509 = new ol.format.GeoJSON();
var features_LOTE_EMDEF10UNID218783M_509 = format_LOTE_EMDEF10UNID218783M_509.readFeatures(json_LOTE_EMDEF10UNID218783M_509, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LOTE_EMDEF10UNID218783M_509 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTE_EMDEF10UNID218783M_509.addFeatures(features_LOTE_EMDEF10UNID218783M_509);
var lyr_LOTE_EMDEF10UNID218783M_509 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTE_EMDEF10UNID218783M_509, 
                style: style_LOTE_EMDEF10UNID218783M_509,
                popuplayertitle: 'LOTE_EMDEF (10 UNID. / 2.187,83 M²)',
                interactive: true,
                title: '<img src="styles/legend/LOTE_EMDEF10UNID218783M_509.png" /> LOTE_EMDEF (10 UNID. / 2.187,83 M²)'
            });
var format_LOTE_EMDEF_510 = new ol.format.GeoJSON();
var features_LOTE_EMDEF_510 = format_LOTE_EMDEF_510.readFeatures(json_LOTE_EMDEF_510, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LOTE_EMDEF_510 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTE_EMDEF_510.addFeatures(features_LOTE_EMDEF_510);
var lyr_LOTE_EMDEF_510 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTE_EMDEF_510, 
                style: style_LOTE_EMDEF_510,
                popuplayertitle: 'LOTE_EMDEF',
                interactive: true,
                title: '<img src="styles/legend/LOTE_EMDEF_510.png" /> LOTE_EMDEF'
            });
var format_LOTE_COM_EDIFICACAO20UNID508062M_511 = new ol.format.GeoJSON();
var features_LOTE_COM_EDIFICACAO20UNID508062M_511 = format_LOTE_COM_EDIFICACAO20UNID508062M_511.readFeatures(json_LOTE_COM_EDIFICACAO20UNID508062M_511, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LOTE_COM_EDIFICACAO20UNID508062M_511 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTE_COM_EDIFICACAO20UNID508062M_511.addFeatures(features_LOTE_COM_EDIFICACAO20UNID508062M_511);
var lyr_LOTE_COM_EDIFICACAO20UNID508062M_511 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTE_COM_EDIFICACAO20UNID508062M_511, 
                style: style_LOTE_COM_EDIFICACAO20UNID508062M_511,
                popuplayertitle: 'LOTE_COM_EDIFICACAO (20 UNID. / 5.080,62 M²)',
                interactive: true,
                title: '<img src="styles/legend/LOTE_COM_EDIFICACAO20UNID508062M_511.png" /> LOTE_COM_EDIFICACAO (20 UNID. / 5.080,62 M²)'
            });
var format_LOTE_COM_EDIFICACAO_512 = new ol.format.GeoJSON();
var features_LOTE_COM_EDIFICACAO_512 = format_LOTE_COM_EDIFICACAO_512.readFeatures(json_LOTE_COM_EDIFICACAO_512, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LOTE_COM_EDIFICACAO_512 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTE_COM_EDIFICACAO_512.addFeatures(features_LOTE_COM_EDIFICACAO_512);
var lyr_LOTE_COM_EDIFICACAO_512 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTE_COM_EDIFICACAO_512, 
                style: style_LOTE_COM_EDIFICACAO_512,
                popuplayertitle: 'LOTE_COM_EDIFICACAO',
                interactive: true,
                title: '<img src="styles/legend/LOTE_COM_EDIFICACAO_512.png" /> LOTE_COM_EDIFICACAO'
            });
var format_LOTE252UNID7530210M_513 = new ol.format.GeoJSON();
var features_LOTE252UNID7530210M_513 = format_LOTE252UNID7530210M_513.readFeatures(json_LOTE252UNID7530210M_513, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LOTE252UNID7530210M_513 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTE252UNID7530210M_513.addFeatures(features_LOTE252UNID7530210M_513);
var lyr_LOTE252UNID7530210M_513 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTE252UNID7530210M_513, 
                style: style_LOTE252UNID7530210M_513,
                popuplayertitle: 'LOTE (252 UNID. / 75.302,10 M²)',
                interactive: true,
                title: '<img src="styles/legend/LOTE252UNID7530210M_513.png" /> LOTE (252 UNID. / 75.302,10 M²)'
            });
var format_LOTE_514 = new ol.format.GeoJSON();
var features_LOTE_514 = format_LOTE_514.readFeatures(json_LOTE_514, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LOTE_514 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTE_514.addFeatures(features_LOTE_514);
var lyr_LOTE_514 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTE_514, 
                style: style_LOTE_514,
                popuplayertitle: 'LOTE',
                interactive: true,
                title: '<img src="styles/legend/LOTE_514.png" /> LOTE'
            });
var format_LEILAO_PROCESSO_7954202537196UNID3239123M_515 = new ol.format.GeoJSON();
var features_LEILAO_PROCESSO_7954202537196UNID3239123M_515 = format_LEILAO_PROCESSO_7954202537196UNID3239123M_515.readFeatures(json_LEILAO_PROCESSO_7954202537196UNID3239123M_515, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LEILAO_PROCESSO_7954202537196UNID3239123M_515 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEILAO_PROCESSO_7954202537196UNID3239123M_515.addFeatures(features_LEILAO_PROCESSO_7954202537196UNID3239123M_515);
var lyr_LEILAO_PROCESSO_7954202537196UNID3239123M_515 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEILAO_PROCESSO_7954202537196UNID3239123M_515, 
                style: style_LEILAO_PROCESSO_7954202537196UNID3239123M_515,
                popuplayertitle: 'LEILAO_PROCESSO_7954/2025-37 (196 UNID. / 32.391,23 M²)',
                interactive: true,
                title: '<img src="styles/legend/LEILAO_PROCESSO_7954202537196UNID3239123M_515.png" /> LEILAO_PROCESSO_7954/2025-37 (196 UNID. / 32.391,23 M²)'
            });
var format_LEILAO_PROCESSO_7954202537_516 = new ol.format.GeoJSON();
var features_LEILAO_PROCESSO_7954202537_516 = format_LEILAO_PROCESSO_7954202537_516.readFeatures(json_LEILAO_PROCESSO_7954202537_516, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LEILAO_PROCESSO_7954202537_516 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEILAO_PROCESSO_7954202537_516.addFeatures(features_LEILAO_PROCESSO_7954202537_516);
var lyr_LEILAO_PROCESSO_7954202537_516 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEILAO_PROCESSO_7954202537_516, 
                style: style_LEILAO_PROCESSO_7954202537_516,
                popuplayertitle: 'LEILAO_PROCESSO_7954/2025-37',
                interactive: true,
                title: '<img src="styles/legend/LEILAO_PROCESSO_7954202537_516.png" /> LEILAO_PROCESSO_7954/2025-37'
            });
var format_LEILAO_PROCESSO_2652520256922UNID352000M_517 = new ol.format.GeoJSON();
var features_LEILAO_PROCESSO_2652520256922UNID352000M_517 = format_LEILAO_PROCESSO_2652520256922UNID352000M_517.readFeatures(json_LEILAO_PROCESSO_2652520256922UNID352000M_517, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LEILAO_PROCESSO_2652520256922UNID352000M_517 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEILAO_PROCESSO_2652520256922UNID352000M_517.addFeatures(features_LEILAO_PROCESSO_2652520256922UNID352000M_517);
var lyr_LEILAO_PROCESSO_2652520256922UNID352000M_517 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEILAO_PROCESSO_2652520256922UNID352000M_517, 
                style: style_LEILAO_PROCESSO_2652520256922UNID352000M_517,
                popuplayertitle: 'LEILAO_PROCESSO_26525/2025-69 (22 UNID. / 3.520,00 M²)',
                interactive: true,
                title: '<img src="styles/legend/LEILAO_PROCESSO_2652520256922UNID352000M_517.png" /> LEILAO_PROCESSO_26525/2025-69 (22 UNID. / 3.520,00 M²)'
            });
var format_LEILAO_PROCESSO_26525202569_518 = new ol.format.GeoJSON();
var features_LEILAO_PROCESSO_26525202569_518 = format_LEILAO_PROCESSO_26525202569_518.readFeatures(json_LEILAO_PROCESSO_26525202569_518, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LEILAO_PROCESSO_26525202569_518 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEILAO_PROCESSO_26525202569_518.addFeatures(features_LEILAO_PROCESSO_26525202569_518);
var lyr_LEILAO_PROCESSO_26525202569_518 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEILAO_PROCESSO_26525202569_518, 
                style: style_LEILAO_PROCESSO_26525202569_518,
                popuplayertitle: 'LEILAO_PROCESSO_26525/2025-69',
                interactive: true,
                title: '<img src="styles/legend/LEILAO_PROCESSO_26525202569_518.png" /> LEILAO_PROCESSO_26525/2025-69'
            });
var format_LEILAO_PROCESSO_2198620254518UNID2092083M_519 = new ol.format.GeoJSON();
var features_LEILAO_PROCESSO_2198620254518UNID2092083M_519 = format_LEILAO_PROCESSO_2198620254518UNID2092083M_519.readFeatures(json_LEILAO_PROCESSO_2198620254518UNID2092083M_519, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LEILAO_PROCESSO_2198620254518UNID2092083M_519 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEILAO_PROCESSO_2198620254518UNID2092083M_519.addFeatures(features_LEILAO_PROCESSO_2198620254518UNID2092083M_519);
var lyr_LEILAO_PROCESSO_2198620254518UNID2092083M_519 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEILAO_PROCESSO_2198620254518UNID2092083M_519, 
                style: style_LEILAO_PROCESSO_2198620254518UNID2092083M_519,
                popuplayertitle: 'LEILAO_PROCESSO_21986/2025-45 (18 UNID. / 20.920,83 M²)',
                interactive: true,
                title: '<img src="styles/legend/LEILAO_PROCESSO_2198620254518UNID2092083M_519.png" /> LEILAO_PROCESSO_21986/2025-45 (18 UNID. / 20.920,83 M²)'
            });
var format_LEILAO_PROCESSO_21986202545_520 = new ol.format.GeoJSON();
var features_LEILAO_PROCESSO_21986202545_520 = format_LEILAO_PROCESSO_21986202545_520.readFeatures(json_LEILAO_PROCESSO_21986202545_520, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LEILAO_PROCESSO_21986202545_520 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEILAO_PROCESSO_21986202545_520.addFeatures(features_LEILAO_PROCESSO_21986202545_520);
var lyr_LEILAO_PROCESSO_21986202545_520 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEILAO_PROCESSO_21986202545_520, 
                style: style_LEILAO_PROCESSO_21986202545_520,
                popuplayertitle: 'LEILAO_PROCESSO_21986/2025-45',
                interactive: true,
                title: '<img src="styles/legend/LEILAO_PROCESSO_21986202545_520.png" /> LEILAO_PROCESSO_21986/2025-45'
            });
var format_LEILAO_HOMOLOGADO4UNID334770M_521 = new ol.format.GeoJSON();
var features_LEILAO_HOMOLOGADO4UNID334770M_521 = format_LEILAO_HOMOLOGADO4UNID334770M_521.readFeatures(json_LEILAO_HOMOLOGADO4UNID334770M_521, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LEILAO_HOMOLOGADO4UNID334770M_521 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEILAO_HOMOLOGADO4UNID334770M_521.addFeatures(features_LEILAO_HOMOLOGADO4UNID334770M_521);
var lyr_LEILAO_HOMOLOGADO4UNID334770M_521 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEILAO_HOMOLOGADO4UNID334770M_521, 
                style: style_LEILAO_HOMOLOGADO4UNID334770M_521,
                popuplayertitle: 'LEILAO_HOMOLOGADO (4 UNID. / 3.347,70 M²)',
                interactive: true,
                title: '<img src="styles/legend/LEILAO_HOMOLOGADO4UNID334770M_521.png" /> LEILAO_HOMOLOGADO (4 UNID. / 3.347,70 M²)'
            });
var format_LEILAO_HOMOLOGADO_522 = new ol.format.GeoJSON();
var features_LEILAO_HOMOLOGADO_522 = format_LEILAO_HOMOLOGADO_522.readFeatures(json_LEILAO_HOMOLOGADO_522, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LEILAO_HOMOLOGADO_522 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEILAO_HOMOLOGADO_522.addFeatures(features_LEILAO_HOMOLOGADO_522);
var lyr_LEILAO_HOMOLOGADO_522 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEILAO_HOMOLOGADO_522, 
                style: style_LEILAO_HOMOLOGADO_522,
                popuplayertitle: 'LEILAO_HOMOLOGADO',
                interactive: true,
                title: '<img src="styles/legend/LEILAO_HOMOLOGADO_522.png" /> LEILAO_HOMOLOGADO'
            });
var format_AREA_VERDE2013UNID835945972M_523 = new ol.format.GeoJSON();
var features_AREA_VERDE2013UNID835945972M_523 = format_AREA_VERDE2013UNID835945972M_523.readFeatures(json_AREA_VERDE2013UNID835945972M_523, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_VERDE2013UNID835945972M_523 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_VERDE2013UNID835945972M_523.addFeatures(features_AREA_VERDE2013UNID835945972M_523);
var lyr_AREA_VERDE2013UNID835945972M_523 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_VERDE2013UNID835945972M_523, 
                style: style_AREA_VERDE2013UNID835945972M_523,
                popuplayertitle: 'AREA_VERDE (2013 UNID. / 8.359.459,72 M²)',
                interactive: true,
                title: '<img src="styles/legend/AREA_VERDE2013UNID835945972M_523.png" /> AREA_VERDE (2013 UNID. / 8.359.459,72 M²)'
            });
var format_AREA_PATRIMONIAL69UNID121924073M_524 = new ol.format.GeoJSON();
var features_AREA_PATRIMONIAL69UNID121924073M_524 = format_AREA_PATRIMONIAL69UNID121924073M_524.readFeatures(json_AREA_PATRIMONIAL69UNID121924073M_524, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_PATRIMONIAL69UNID121924073M_524 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_PATRIMONIAL69UNID121924073M_524.addFeatures(features_AREA_PATRIMONIAL69UNID121924073M_524);
var lyr_AREA_PATRIMONIAL69UNID121924073M_524 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_PATRIMONIAL69UNID121924073M_524, 
                style: style_AREA_PATRIMONIAL69UNID121924073M_524,
                popuplayertitle: 'AREA_PATRIMONIAL (69 UNID. / 1.219.240,73 M²)',
                interactive: true,
                title: '<img src="styles/legend/AREA_PATRIMONIAL69UNID121924073M_524.png" /> AREA_PATRIMONIAL (69 UNID. / 1.219.240,73 M²)'
            });
var format_AREA_INSTITUCIONAL353UNID202425793M_525 = new ol.format.GeoJSON();
var features_AREA_INSTITUCIONAL353UNID202425793M_525 = format_AREA_INSTITUCIONAL353UNID202425793M_525.readFeatures(json_AREA_INSTITUCIONAL353UNID202425793M_525, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_INSTITUCIONAL353UNID202425793M_525 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_INSTITUCIONAL353UNID202425793M_525.addFeatures(features_AREA_INSTITUCIONAL353UNID202425793M_525);
var lyr_AREA_INSTITUCIONAL353UNID202425793M_525 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_INSTITUCIONAL353UNID202425793M_525, 
                style: style_AREA_INSTITUCIONAL353UNID202425793M_525,
                popuplayertitle: 'AREA_INSTITUCIONAL (353 UNID. / 2.024.257,93 M²)',
                interactive: true,
                title: '<img src="styles/legend/AREA_INSTITUCIONAL353UNID202425793M_525.png" /> AREA_INSTITUCIONAL (353 UNID. / 2.024.257,93 M²)'
            });
var format_AREA_DE_USO_ESPECIAL280UNID271349968M_526 = new ol.format.GeoJSON();
var features_AREA_DE_USO_ESPECIAL280UNID271349968M_526 = format_AREA_DE_USO_ESPECIAL280UNID271349968M_526.readFeatures(json_AREA_DE_USO_ESPECIAL280UNID271349968M_526, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_DE_USO_ESPECIAL280UNID271349968M_526 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_DE_USO_ESPECIAL280UNID271349968M_526.addFeatures(features_AREA_DE_USO_ESPECIAL280UNID271349968M_526);
var lyr_AREA_DE_USO_ESPECIAL280UNID271349968M_526 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_DE_USO_ESPECIAL280UNID271349968M_526, 
                style: style_AREA_DE_USO_ESPECIAL280UNID271349968M_526,
                popuplayertitle: 'AREA_DE_USO_ESPECIAL (280 UNID. / 2.713.499,68 M²)',
                interactive: true,
                title: '<img src="styles/legend/AREA_DE_USO_ESPECIAL280UNID271349968M_526.png" /> AREA_DE_USO_ESPECIAL (280 UNID. / 2.713.499,68 M²)'
            });
var format_APP145UNID220226604M_527 = new ol.format.GeoJSON();
var features_APP145UNID220226604M_527 = format_APP145UNID220226604M_527.readFeatures(json_APP145UNID220226604M_527, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP145UNID220226604M_527 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP145UNID220226604M_527.addFeatures(features_APP145UNID220226604M_527);
var lyr_APP145UNID220226604M_527 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP145UNID220226604M_527, 
                style: style_APP145UNID220226604M_527,
                popuplayertitle: 'APP (145 UNID. / 2.202.266,04 M²)',
                interactive: true,
                title: '<img src="styles/legend/APP145UNID220226604M_527.png" /> APP (145 UNID. / 2.202.266,04 M²)'
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
var format_PROG_ADOTE_UMA_PRACA_546 = new ol.format.GeoJSON();
var features_PROG_ADOTE_UMA_PRACA_546 = format_PROG_ADOTE_UMA_PRACA_546.readFeatures(json_PROG_ADOTE_UMA_PRACA_546, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PROG_ADOTE_UMA_PRACA_546 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROG_ADOTE_UMA_PRACA_546.addFeatures(features_PROG_ADOTE_UMA_PRACA_546);
var lyr_PROG_ADOTE_UMA_PRACA_546 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROG_ADOTE_UMA_PRACA_546, 
                style: style_PROG_ADOTE_UMA_PRACA_546,
                popuplayertitle: 'PROG_ADOTE_UMA_PRACA',
                interactive: true,
                title: '<img src="styles/legend/PROG_ADOTE_UMA_PRACA_546.png" /> PROG_ADOTE_UMA_PRACA'
            });
var format_RESPONSAVEL_EGNALDO220UNID21780618M_547 = new ol.format.GeoJSON();
var features_RESPONSAVEL_EGNALDO220UNID21780618M_547 = format_RESPONSAVEL_EGNALDO220UNID21780618M_547.readFeatures(json_RESPONSAVEL_EGNALDO220UNID21780618M_547, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESPONSAVEL_EGNALDO220UNID21780618M_547 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESPONSAVEL_EGNALDO220UNID21780618M_547.addFeatures(features_RESPONSAVEL_EGNALDO220UNID21780618M_547);
var lyr_RESPONSAVEL_EGNALDO220UNID21780618M_547 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESPONSAVEL_EGNALDO220UNID21780618M_547, 
                style: style_RESPONSAVEL_EGNALDO220UNID21780618M_547,
                popuplayertitle: 'RESPONSAVEL_EGNALDO (220 UNID. / 217.806,18 M²)',
                interactive: true,
                title: '<img src="styles/legend/RESPONSAVEL_EGNALDO220UNID21780618M_547.png" /> RESPONSAVEL_EGNALDO (220 UNID. / 217.806,18 M²)'
            });
var format_RESPONSAVEL_DILU171UNID17255710M_548 = new ol.format.GeoJSON();
var features_RESPONSAVEL_DILU171UNID17255710M_548 = format_RESPONSAVEL_DILU171UNID17255710M_548.readFeatures(json_RESPONSAVEL_DILU171UNID17255710M_548, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESPONSAVEL_DILU171UNID17255710M_548 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESPONSAVEL_DILU171UNID17255710M_548.addFeatures(features_RESPONSAVEL_DILU171UNID17255710M_548);
var lyr_RESPONSAVEL_DILU171UNID17255710M_548 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESPONSAVEL_DILU171UNID17255710M_548, 
                style: style_RESPONSAVEL_DILU171UNID17255710M_548,
                popuplayertitle: 'RESPONSAVEL_DILU (171 UNID. / 172.557,10 M²)',
                interactive: true,
                title: '<img src="styles/legend/RESPONSAVEL_DILU171UNID17255710M_548.png" /> RESPONSAVEL_DILU (171 UNID. / 172.557,10 M²)'
            });
var group_ProgramaAdoteUmaPraa = new ol.layer.Group({
                                layers: [lyr_PROG_ADOTE_UMA_PRACA_546,lyr_RESPONSAVEL_EGNALDO220UNID21780618M_547,lyr_RESPONSAVEL_DILU171UNID17255710M_548,],
                                fold: 'close',
                                title: 'Programa Adote Uma Praça'});
var group_reasdeCompensaoAmbiental = new ol.layer.Group({
                                layers: [lyr_TRPRL_CETESB_528,lyr_TRPRL_CETESB_529,lyr_TCRA_MUNICIPAL_530,lyr_TCRA_MUNICIPAL_531,lyr_TCRA_CETESB_PARCELAMENTO_532,lyr_TCRA_CETESB_PARCELAMENTO_533,lyr_TCRA_CETESB_534,lyr_TCRA_CETESB_535,lyr_TAC_MP_536,lyr_TAC_MP_537,lyr_PLANTIO_VOLUNTARIO_538,lyr_PLANTIO_VOLUNTARIO_539,lyr_ANUENCIA_540,lyr_ANUENCIA_541,lyr_AIIPA_CETESB_542,lyr_AIIPA_CETESB_543,lyr_ACAO_CIVIL_PUBLICA_544,lyr_ACAO_CIVIL_PUBLICA_545,],
                                fold: 'close',
                                title: 'Áreas de Compensação Ambiental'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_LOTEAMENTO_FECHADO146UNID70632440M_508,lyr_LOTE_EMDEF10UNID218783M_509,lyr_LOTE_EMDEF_510,lyr_LOTE_COM_EDIFICACAO20UNID508062M_511,lyr_LOTE_COM_EDIFICACAO_512,lyr_LOTE252UNID7530210M_513,lyr_LOTE_514,lyr_LEILAO_PROCESSO_7954202537196UNID3239123M_515,lyr_LEILAO_PROCESSO_7954202537_516,lyr_LEILAO_PROCESSO_2652520256922UNID352000M_517,lyr_LEILAO_PROCESSO_26525202569_518,lyr_LEILAO_PROCESSO_2198620254518UNID2092083M_519,lyr_LEILAO_PROCESSO_21986202545_520,lyr_LEILAO_HOMOLOGADO4UNID334770M_521,lyr_LEILAO_HOMOLOGADO_522,lyr_AREA_VERDE2013UNID835945972M_523,lyr_AREA_PATRIMONIAL69UNID121924073M_524,lyr_AREA_INSTITUCIONAL353UNID202425793M_525,lyr_AREA_DE_USO_ESPECIAL280UNID271349968M_526,lyr_APP145UNID220226604M_527,],
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
                                layers: [lyr_SERVICO_DE_SAUDE21UNID_476,lyr_RECICLAVEIS15UNID_477,lyr_PNEUS1UNID_478,lyr_PILHAS_E_BATERIAS17UNID_479,lyr_PERIGOSOS1UNID_480,lyr_OLEO_LUBRIFICANTE1UNID_481,lyr_OLEO_DE_COZINHA3UNID_482,lyr_MASSA_VERDE1UNID_483,lyr_MADEIRAS1UNID_484,lyr_LATAS_DE_TINTA2UNID_485,lyr_LAMPADAS4UNID_486,lyr_INSERVIVEIS4UNID_487,lyr_GESSO1UNID_488,lyr_EMBALAGENS_AGROTOXICO1UNID_489,lyr_ELETRONICOS3UNID_490,lyr_COURO1UNID_491,lyr_CONSTRUCAO_CIVIL7UNID_492,lyr_CHAPAS_DE_RAIO_X1UNID_493,],
                                fold: 'close',
                                title: 'Descarte Correto de Resíduos'});
var group_Diversos = new ol.layer.Group({
                                layers: [lyr_VOCOROCAS27UNID_471,lyr_LOCAIS_DE_DIFICIL_ACESSO12UNID_472,lyr_CONTEINERES286UNID_473,lyr_ARVORES_IMUNE_AO_CORTE9UNID_474,lyr_ACADEMIAS_AO_AR_LIVRE84UNID_475,],
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
                                layers: [lyr_PARQUE_ZUMBI_DOS_PALMARES_365,lyr_ATERRO_DAS_MARITACAS_366,lyr_ATERRO_DAS_MARITACAS_ETAPA_3_367,lyr_ATERRO_DAS_MARITACAS_ETAPA_2_368,lyr_ATERRO_DAS_MARITACAS_ETAPA_1_369,lyr_ATERRO_DA_FAZENDA_MUNICIPAL_370,lyr_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_371,lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_372,lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_373,lyr_AREA_B_DA_FAZENDA_MUNICIPAL_374,lyr_AREA_B_DA_FAZENDA_MUNICIPAL_375,],
                                fold: 'close',
                                title: 'Gerenciamento de Áreas Contaminadas'});
var group_HidrografiaFBDS2025 = new ol.layer.Group({
                                layers: [lyr_FBDS_RIOS_DUPLOS_358,lyr_FBDS_MASSAS_DAGUA_359,lyr_FBDS_APP_360,lyr_FBDS_NASCENTES_361,lyr_FBDS_RIOS_SIMPLES_362,lyr_CORPO_HIDRICO_CANAL_FECHADO088KM_363,lyr_CORPO_HIDRICO_CANAL_ABERTO1252KM_364,],
                                fold: 'close',
                                title: 'Hidrografia FBDS 2025'});
var group_LoteamentosClandestinos = new ol.layer.Group({
                                layers: [lyr_IRREGULAR_356,lyr_IRREGULAR174UNID_357,],
                                fold: 'close',
                                title: 'Loteamentos Clandestinos'});
var group_LoteamentosCondomniosParcelamentodoSolo = new ol.layer.Group({
                                layers: [lyr_Vivenna_135,lyr_Vivenna_136,lyr_VittaSoVicente_137,lyr_VittaSoVicente_138,lyr_VittaJardimSimes_139,lyr_VittaJardimSimes_140,lyr_VittaAlvorada_141,lyr_VittaAlvorada_142,lyr_VilaDiEspanha_143,lyr_VilaDiEspanha_144,lyr_VillaPucci_145,lyr_VillaPucci_146,lyr_VilaPiemonteII_147,lyr_VilaPiemonteII_148,lyr_VilaOlimpica_149,lyr_VilaOlimpica_150,lyr_VillaDoratta_151,lyr_VillaDoratta_152,lyr_VillaBella_153,lyr_VillaBella_154,lyr_Versalhes_155,lyr_Versalhes_156,lyr_TorontoResidence_157,lyr_TorontoResidence_158,lyr_TerraNova_159,lyr_TerraNova_160,lyr_Sonetto_161,lyr_Sonetto_162,lyr_SMARTFRANCAEIXORESIDENCIAL2_163,lyr_SMARTFRANCAEIXORESIDENCIAL2_164,lyr_SMARTFRANCAEIXORESIDENCIAL1_165,lyr_SMARTFRANCAEIXORESIDENCIAL1_166,lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_167,lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_168,lyr_ServidoRamal138kVFranca4Guanabara_169,lyr_ServidoRamal138kVFranca4Guanabara_170,lyr_SantaLina_171,lyr_SantaLina_172,lyr_SantAnita_173,lyr_SantAnita_174,lyr_RuaAlfioBenedini_175,lyr_RuaAlfioBenedini_176,lyr_RuaAlfioBenedini_177,lyr_ResidencialValeVerde_178,lyr_ResidencialValeVerde_179,lyr_ResidencialYasminTorres_180,lyr_ResidencialYasminTorres_181,lyr_ResidencialTellini_182,lyr_ResidencialTellini_183,lyr_ResidencialSoCarlosII_184,lyr_ResidencialSoCarlosII_185,lyr_ResidencialSoCarlosI_186,lyr_ResidencialSoCarlosI_187,lyr_ResidencialSantaIns_188,lyr_ResidencialSantaIns_189,lyr_ResidencialSantaF_190,lyr_ResidencialSantaF_191,lyr_ResidencialQuintadosOitis_192,lyr_ResidencialQuintadosOitis_193,lyr_ResidencialQuintadoSol_194,lyr_ResidencialQuintadoSol_195,lyr_ResidencialPousoAlegreII_196,lyr_ResidencialPousoAlegreII_197,lyr_ResidencialPousoAlegre_198,lyr_ResidencialPousoAlegre_199,lyr_ResidencialPiamalim_200,lyr_ResidencialPiamalim_201,lyr_ResidencialParquedosPassaros_202,lyr_ResidencialParquedosPassaros_203,lyr_ResicencialNairRetuciII_204,lyr_ResicencialNairRetuciII_205,lyr_ResicencialNairRetuci_206,lyr_ResicencialNairRetuci_207,lyr_ResidencialMoradadoBosque_208,lyr_ResidencialMoradadoBosque_209,lyr_ResidencialMarthaHelena_210,lyr_ResidencialMarthaHelena_211,lyr_ResidencialMarioTasso_212,lyr_ResidencialMarioTasso_213,lyr_ResidencialMarianaAlarcon_214,lyr_ResidencialMarianaAlarcon_215,lyr_ResidencialJardimCanada_216,lyr_ResidencialJardimCanada_217,lyr_ResidencialJabuticabeiras_218,lyr_ResidencialJabuticabeiras_219,lyr_ResidencialGramadosII_220,lyr_ResidencialGramadosII_221,lyr_ResidencialGramados_222,lyr_ResidencialGramados_223,lyr_ResidencialGaia_224,lyr_ResidencialGaia_225,lyr_ResidencialFrutuoso_226,lyr_ResidencialFrutuoso_227,lyr_ResidencialFaggioni_228,lyr_ResidencialFaggioni_229,lyr_ResidencialEssenza_230,lyr_ResidencialEssenza_231,lyr_ResidencialDomingosJardini_232,lyr_ResidencialDomingosJardini_233,lyr_ResidencialCintraAlves_234,lyr_ResidencialCintraAlves_235,lyr_ResidencialBoaVista_236,lyr_ResidencialBoaVista_237,lyr_ResidencialAltodaFazenda_238,lyr_ResidencialAltodaFazenda_239,lyr_ResidencialAnaHelena_240,lyr_ResidencialAnaHelena_241,lyr_ReservaAbaete_242,lyr_ReservaAbaete_243,lyr_RecantoMeneghetti_244,lyr_RecantoMeneghetti_245,lyr_Quadra18VilaExposio_246,lyr_Quadra18VilaExposio_247,lyr_ProlongamentoSamelPark_248,lyr_ProlongamentoSamelPark_249,lyr_ParqueVillaLobos_250,lyr_ParqueVillaLobos_251,lyr_ParquePalmeiraImperial_252,lyr_ParquePalmeiraImperial_253,lyr_ParqueJacarand_254,lyr_ParqueJacarand_255,lyr_ParqueFlora_256,lyr_ParqueFlora_257,lyr_ParquedosSabias_258,lyr_ParquedosSabias_259,lyr_ParquedosCoqueiros_260,lyr_ParquedosCoqueiros_261,lyr_ParqueAlvorada_262,lyr_ParqueAlvorada_263,lyr_ParagonFaseII_264,lyr_ParagonFaseII_265,lyr_Paragon_266,lyr_Paragon_267,lyr_PalmeiraReal_268,lyr_PalmeiraReal_269,lyr_MoradadoVerdeII_270,lyr_MoradadoVerdeII_271,lyr_MoradadaMata_272,lyr_MoradadaMata_273,lyr_Monti_274,lyr_Monti_275,lyr_MontBlancResidence_276,lyr_MontBlancResidence_277,lyr_MasterplanDespaschoal_278,lyr_MasterplanDespaschoal_279,lyr_MasterplanDespaschoal_280,lyr_MasteplanBildVitta_281,lyr_MasteplanBildVitta_282,lyr_MasteplanBildVitta_283,lyr_Loteamentolamo_284,lyr_Loteamentolamo_285,lyr_JardimStephani_286,lyr_JardimStephani_287,lyr_JardimPherola_288,lyr_JardimPherola_289,lyr_JardimNatal_290,lyr_JardimNatal_291,lyr_JardimMariaLuiza_292,lyr_JardimMariaLuiza_293,lyr_JardimMariaAugusta_294,lyr_JardimMariaAugusta_295,lyr_JardimHorizonte_296,lyr_JardimHorizonte_297,lyr_JardimFlora_298,lyr_JardimFlora_299,lyr_IrineuZanetiII_300,lyr_IrineuZanetiII_301,lyr_Infratcnica_302,lyr_Infratcnica_303,lyr_HorizResidence_304,lyr_HorizResidence_305,lyr_GlebaNossaSenhoraAuxiliadora_306,lyr_GlebaNossaSenhoraAuxiliadora_307,lyr_Ferracini_308,lyr_Ferracini_309,lyr_FrancaB6_310,lyr_FrancaB6_311,lyr_FazendaProgresso_312,lyr_FazendaProgresso_313,lyr_FazendaeGranjaSantaRita2_314,lyr_FazendaeGranjaSantaRita2_315,lyr_FazendaeGranjaSantaRita_316,lyr_FazendaeGranjaSantaRita_317,lyr_Essence_318,lyr_Essence_319,lyr_Elias_320,lyr_Elias_321,lyr_EdifcioSolNascente_322,lyr_EdifcioSolNascente_323,lyr_EdifcioRuadoSol_324,lyr_EdifcioRuadoSol_325,lyr_EdifcioResidencialHope_326,lyr_EdifcioResidencialHope_327,lyr_DiocesedeFranca_328,lyr_DiocesedeFranca_329,lyr_DaVinci_330,lyr_DaVinci_331,lyr_CondomnioIICityPetrpolis_332,lyr_CondomnioIICityPetrpolis_333,lyr_CondomnioICityPetrpolis_334,lyr_CondomnioICityPetrpolis_335,lyr_Colorado_336,lyr_Colorado_337,lyr_CidadeJardim_338,lyr_CidadeJardim_339,lyr_ChacaraOlaria_340,lyr_ChacaraOlaria_341,lyr_ChacaraBelaVista_342,lyr_ChacaraBelaVista_343,lyr_BordadaMata_344,lyr_BordadaMata_345,lyr_Arteris_346,lyr_Arteris_347,lyr_Arizona_348,lyr_Arizona_349,lyr_AbuDhabiParadiseResortResidence_350,lyr_AbuDhabiParadiseResortResidence_351,lyr_EtapaAprovado43unid_352,lyr_EtapaDiretriz22unid_353,lyr_EtapaDefinitiva10unid_354,lyr_EtapaPrvia24unid_355,],
                                fold: 'close',
                                title: 'Loteamentos/Condomínios – Parcelamento do Solo'});
var group_LoteamentosRegularizadosREURB = new ol.layer.Group({
                                layers: [lyr_REGULARIZADO_133,lyr_REGULARIZADO9UNID_134,],
                                fold: 'close',
                                title: 'Loteamentos Regularizados - REURB'});
var group_ObrasPblicas = new ol.layer.Group({
                                layers: [lyr_UBS_SANTA_TEREZINHA_105,lyr_UBS_SANTA_BARBARA_106,lyr_UBS_PERES_ELIAS_107,lyr_UBS_PARQUE_HORTO_108,lyr_UBS_JARDIM_PALMA_109,lyr_REVITALIZACAO_ESTACAO_FERROVIARIA_110,lyr_REFORMA_CRAS_OESTE_111,lyr_REFORMA_CRAS_NORTE_112,lyr_REFORCO_ESTRUTURAL_CHAMPAGNAT_113,lyr_RECAPEAMENTO_JARDIM_MARTINS_114,lyr_PRONTO_SOCORRO_ALVARO_AZZUZ_115,lyr_POLICLINICA_116,lyr_NOVO_NGA_117,lyr_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_118,lyr_ESCOLA_JOAO_LIPORONI_119,lyr_DRENAGEM_CORREGO_CUBATAO_120,lyr_DRENAGEM_CORREGO_BRAGRES_121,lyr_DRENAGEM_CANAL_JD_PALMEIRAS_122,lyr_CRECHE_SAMEL_PARK_123,lyr_CORPO_BAMBEIROS_124,lyr_CONTENCAO_VIARIA_125,lyr_CONSTRUCAO_CEPEL_SAO_JOSE_126,lyr_CONSTRUCAO_CEPEL_JD_CAMBUI_127,lyr_CONSTRUCAO_CAPS_INFANTIL_128,lyr_AREA_LAZER_PARQUE_ESMERALDA_129,lyr_AREA_LAZER_PARQUE_CONTINENTAL_130,lyr_AREA_LAZER_JARDIM_PORTINARI_131,lyr_OBRAS_PUBLICAS29UNID_132,],
                                fold: 'close',
                                title: 'Obras Públicas'});
var group_ParquesdeFranca = new ol.layer.Group({
                                layers: [lyr_PARQUE_DOS_TRABALHADORES_91,lyr_PARQUE_DOS_TRABALHADORES_92,lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_93,lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_94,lyr_PARQUE_CAXAMBU_95,lyr_PARQUE_CAXAMBU_96,lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_97,lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_98,lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_99,lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_100,lyr_JARDIM_ZOOBOTANICO_101,lyr_JARDIM_ZOOBOTANICO_102,lyr_COMPLEXO_POLIESPORTIVO_103,lyr_COMPLEXO_POLIESPORTIVO_104,],
                                fold: 'close',
                                title: 'Parques de Franca'});
var group_PontosViciados = new ol.layer.Group({
                                layers: [lyr_IMOVEL_PUBLICO125UNID_86,lyr_IMOVEL_PRIVADO_URBANO99UNID_87,lyr_IMOVEL_PRIVADO_URBANO99UNID_88,lyr_IMOVEL_PRIVADO_RURAL1UNID_89,lyr_IMOVEL_PRIVADO_RURAL1UNID_90,],
                                fold: 'close',
                                title: 'Pontos Viciados'});
var group_RodoviaseEstradas = new ol.layer.Group({
                                layers: [lyr_RODOVIAS_MUNICIPAIS_83,lyr_RODOVIAS_ESTADUAIS_84,lyr_ESTRADAS_RURAIS_MUNICIPAIS_85,],
                                fold: 'close',
                                title: 'Rodovias e Estradas'});
var group_SecretariadeEducaoUnidadesEscolares = new ol.layer.Group({
                                layers: [lyr_UNIVERSIDADE_ABERTA_DO_BRASIL1UNID_70,lyr_SETOR_DE_MERENDA1UNID_71,lyr_SECRETARIA_DE_EDUCACAO1UNID_72,lyr_ESPACO_DE_DIFUSAO_CIENTIFICA1UNID_73,lyr_ENSINO_FUNDAMENTAL3UNID_74,lyr_EJA3UNID_75,lyr_ED_INFANTIL_ENS_FUNDAMENTAL39UNID_76,lyr_EDUCACAO_INFANTIL9UNID_77,lyr_CRECHE_PRE_ESCOLA45UNID_78,lyr_CRECHE35UNID_79,lyr_CENTRO_DE_EDUCACAO_INTEGRADA1UNID_80,lyr_ALMOCHARIFADO_EDUCACAO1UNID_81,lyr_ALFABETIZACAO_DE_JOVENS_E_ADULTOS15UNID_82,],
                                fold: 'close',
                                title: 'Secretaria de Educação - Unidades Escolares'});
var group_SecretariadeEsporteeCultura = new ol.layer.Group({
                                layers: [lyr_TEATRO2UNID_51,lyr_SECRETARIA1UNID_52,lyr_QUADRA3UNID_53,lyr_PRACA2UNID_54,lyr_PISTA1UNID_55,lyr_PISCINA1UNID_56,lyr_PINACOTECA1UNID_57,lyr_PAVILHAO1UNID_58,lyr_PARQUE2UNID_59,lyr_MUSEU2UNID_60,lyr_GINASIO5UNID_61,lyr_ESTADIO1UNID_62,lyr_CONJUNTO4UNID_63,lyr_CEPEL12UNID_64,lyr_CENTRO4UNID_65,lyr_CASA1UNID_66,lyr_CAMPO26UNID_67,lyr_BIBLIOTECA1UNID_68,lyr_ARENA3UNID_69,],
                                fold: 'close',
                                title: 'Secretaria de Esporte e Cultura'});
var group_SecretariadeSade = new ol.layer.Group({
                                layers: [lyr_VIGILANCIA_EM_SAUDE5UNID_46,lyr_UNIDADE_DE_URGENCIA_E_EMERGENCIA8UNID_47,lyr_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO14UNID_48,lyr_GESTAO_ADMINISTRATIVO3UNID_49,lyr_ATENCAO_PRIMARIA24UNID_50,],
                                fold: 'close',
                                title: 'Secretaria de Saúde'});
var group_SistemaVirio = new ol.layer.Group({
                                layers: [lyr_ZONA_SUL_VIA_EXPRESSA_EXISTENTE_34,lyr_ZONA_SUL_DIRETRIZ_VIA_PARQUE_35,lyr_ZONA_SUL_DIRETRIZ_COLETORA_36,lyr_ZONA_SUL_DIRETRIZ_AVENIDA_37,lyr_ZONA_SUL_AVENIDA_EXISTENTE_38,lyr_SISTEMA_VIARIO_PRINCIPAL_39,lyr_RODOVIAS_VIAS_ARTERIAIS_40,lyr_RODOVIAS_41,lyr_FAIXA_DE_DOMINIO_DER_SPA_397334_42,lyr_FAIXA_DE_DOMINIO_DER_SP_3452_43,lyr_FAIXA_DE_DOMINIO_DER_SP_3342_44,lyr_EXPANSAO_DO_SISTEMA_VIARIO_45,],
                                fold: 'close',
                                title: 'Sistema Viário'});
var group_Zoneamento = new ol.layer.Group({
                                layers: [lyr_SUB_MACROZONA_DE_OCUPACAO_RESTRITA_21,lyr_SUB_MACROZONA_DE_OCUPACAO_PREFERENCIAL_22,lyr_SUB_MACROZONA_DE_EXPANSAO_URBANA_23,lyr_MACROZONA_DO_RIO_CANOAS_24,lyr_EXPANSAO_URBANA_LC_324_2019_25,lyr_EXPANSAO_URBANA_LC_235_2013_26,lyr_EXPANSAO_URBANA_LC_140_2009_27,lyr_EXPANSAO_URBANA_LC_050_2003_28,lyr_AREAS_DAS_BACIAS_DOS_RIOS_CANOAS_E_POUSO_ALEGRE_29,lyr_AREA_ESPECIAL_RESIDENCIAIS_UNIFAMILIARES_30,lyr_AREA_ESPECIAL_LAZER_INTERESSE_TURISTICO_E_CULTURA_31,lyr_AREA_ESPECIAL_INDUSTRIAL_E_LOGISTICA_32,lyr_AREA_ESPECIAL_DE_INTERESSE_SOCIAL_33,],
                                fold: 'close',
                                title: 'Zoneamento'});
var group_ZoneamentoAmbientaldaBaciadoRioCanoas = new ol.layer.Group({
                                layers: [lyr_BACIA_RIO_CANOAS_LC_4322024_5,lyr_BACIA_RIO_CANOAS_LC_1002006_6,lyr_BACIA_RIBEIRAO_DA_ONCA_7,lyr_ARO_REMANESCENTES_FLORESTAIS_8,lyr_ARO_FAIXA_DE_CUESTAS_9,lyr_ARO_AREA_DE_AMORTECIMENTO_10,lyr_ARO_APP_11,lyr_ARA_INCONGRUENCIAS_EM_APP_12,lyr_ARA_ETE_LAGOAS_13,lyr_ARA_ATERROS_14,lyr_AOD_BAIXA_DENSIDADE_NIVEL_3_15,lyr_AOD_BAIXA_DENSIDADE_NIVEL_2_16,lyr_AOD_BAIXA_DENSIDADE_NIVEL_1_17,lyr_AOD_AUS_FASE_2_18,lyr_AOD_AUS_FASE_1_19,lyr_AOD_AREA_URBANA_CONSOLIDADA_20,],
                                fold: 'close',
                                title: 'Zoneamento Ambiental da Bacia do Rio Canoas'});
var group_ZonaCartogrficaMapaBase = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,lyr_GoogleSatellite_2,lyr_LIMITE_MUNICIPAL_3,lyr_AREA_URBANA_4,],
                                fold: 'close',
                                title: 'Zona Cartográfica / Mapa Base'});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatelliteHybrid_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(true);lyr_LIMITE_MUNICIPAL_3.setVisible(true);lyr_AREA_URBANA_4.setVisible(true);lyr_BACIA_RIO_CANOAS_LC_4322024_5.setVisible(false);lyr_BACIA_RIO_CANOAS_LC_1002006_6.setVisible(false);lyr_BACIA_RIBEIRAO_DA_ONCA_7.setVisible(false);lyr_ARO_REMANESCENTES_FLORESTAIS_8.setVisible(false);lyr_ARO_FAIXA_DE_CUESTAS_9.setVisible(false);lyr_ARO_AREA_DE_AMORTECIMENTO_10.setVisible(false);lyr_ARO_APP_11.setVisible(false);lyr_ARA_INCONGRUENCIAS_EM_APP_12.setVisible(false);lyr_ARA_ETE_LAGOAS_13.setVisible(false);lyr_ARA_ATERROS_14.setVisible(false);lyr_AOD_BAIXA_DENSIDADE_NIVEL_3_15.setVisible(false);lyr_AOD_BAIXA_DENSIDADE_NIVEL_2_16.setVisible(false);lyr_AOD_BAIXA_DENSIDADE_NIVEL_1_17.setVisible(false);lyr_AOD_AUS_FASE_2_18.setVisible(false);lyr_AOD_AUS_FASE_1_19.setVisible(false);lyr_AOD_AREA_URBANA_CONSOLIDADA_20.setVisible(false);lyr_SUB_MACROZONA_DE_OCUPACAO_RESTRITA_21.setVisible(false);lyr_SUB_MACROZONA_DE_OCUPACAO_PREFERENCIAL_22.setVisible(false);lyr_SUB_MACROZONA_DE_EXPANSAO_URBANA_23.setVisible(false);lyr_MACROZONA_DO_RIO_CANOAS_24.setVisible(false);lyr_EXPANSAO_URBANA_LC_324_2019_25.setVisible(false);lyr_EXPANSAO_URBANA_LC_235_2013_26.setVisible(false);lyr_EXPANSAO_URBANA_LC_140_2009_27.setVisible(false);lyr_EXPANSAO_URBANA_LC_050_2003_28.setVisible(false);lyr_AREAS_DAS_BACIAS_DOS_RIOS_CANOAS_E_POUSO_ALEGRE_29.setVisible(false);lyr_AREA_ESPECIAL_RESIDENCIAIS_UNIFAMILIARES_30.setVisible(false);lyr_AREA_ESPECIAL_LAZER_INTERESSE_TURISTICO_E_CULTURA_31.setVisible(false);lyr_AREA_ESPECIAL_INDUSTRIAL_E_LOGISTICA_32.setVisible(false);lyr_AREA_ESPECIAL_DE_INTERESSE_SOCIAL_33.setVisible(false);lyr_ZONA_SUL_VIA_EXPRESSA_EXISTENTE_34.setVisible(false);lyr_ZONA_SUL_DIRETRIZ_VIA_PARQUE_35.setVisible(false);lyr_ZONA_SUL_DIRETRIZ_COLETORA_36.setVisible(false);lyr_ZONA_SUL_DIRETRIZ_AVENIDA_37.setVisible(false);lyr_ZONA_SUL_AVENIDA_EXISTENTE_38.setVisible(false);lyr_SISTEMA_VIARIO_PRINCIPAL_39.setVisible(false);lyr_RODOVIAS_VIAS_ARTERIAIS_40.setVisible(false);lyr_RODOVIAS_41.setVisible(false);lyr_FAIXA_DE_DOMINIO_DER_SPA_397334_42.setVisible(false);lyr_FAIXA_DE_DOMINIO_DER_SP_3452_43.setVisible(false);lyr_FAIXA_DE_DOMINIO_DER_SP_3342_44.setVisible(false);lyr_EXPANSAO_DO_SISTEMA_VIARIO_45.setVisible(false);lyr_VIGILANCIA_EM_SAUDE5UNID_46.setVisible(false);lyr_UNIDADE_DE_URGENCIA_E_EMERGENCIA8UNID_47.setVisible(false);lyr_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO14UNID_48.setVisible(false);lyr_GESTAO_ADMINISTRATIVO3UNID_49.setVisible(false);lyr_ATENCAO_PRIMARIA24UNID_50.setVisible(false);lyr_TEATRO2UNID_51.setVisible(false);lyr_SECRETARIA1UNID_52.setVisible(false);lyr_QUADRA3UNID_53.setVisible(false);lyr_PRACA2UNID_54.setVisible(false);lyr_PISTA1UNID_55.setVisible(false);lyr_PISCINA1UNID_56.setVisible(false);lyr_PINACOTECA1UNID_57.setVisible(false);lyr_PAVILHAO1UNID_58.setVisible(false);lyr_PARQUE2UNID_59.setVisible(false);lyr_MUSEU2UNID_60.setVisible(false);lyr_GINASIO5UNID_61.setVisible(false);lyr_ESTADIO1UNID_62.setVisible(false);lyr_CONJUNTO4UNID_63.setVisible(false);lyr_CEPEL12UNID_64.setVisible(false);lyr_CENTRO4UNID_65.setVisible(false);lyr_CASA1UNID_66.setVisible(false);lyr_CAMPO26UNID_67.setVisible(false);lyr_BIBLIOTECA1UNID_68.setVisible(false);lyr_ARENA3UNID_69.setVisible(false);lyr_UNIVERSIDADE_ABERTA_DO_BRASIL1UNID_70.setVisible(false);lyr_SETOR_DE_MERENDA1UNID_71.setVisible(false);lyr_SECRETARIA_DE_EDUCACAO1UNID_72.setVisible(false);lyr_ESPACO_DE_DIFUSAO_CIENTIFICA1UNID_73.setVisible(false);lyr_ENSINO_FUNDAMENTAL3UNID_74.setVisible(false);lyr_EJA3UNID_75.setVisible(false);lyr_ED_INFANTIL_ENS_FUNDAMENTAL39UNID_76.setVisible(false);lyr_EDUCACAO_INFANTIL9UNID_77.setVisible(false);lyr_CRECHE_PRE_ESCOLA45UNID_78.setVisible(false);lyr_CRECHE35UNID_79.setVisible(false);lyr_CENTRO_DE_EDUCACAO_INTEGRADA1UNID_80.setVisible(false);lyr_ALMOCHARIFADO_EDUCACAO1UNID_81.setVisible(false);lyr_ALFABETIZACAO_DE_JOVENS_E_ADULTOS15UNID_82.setVisible(false);lyr_RODOVIAS_MUNICIPAIS_83.setVisible(false);lyr_RODOVIAS_ESTADUAIS_84.setVisible(false);lyr_ESTRADAS_RURAIS_MUNICIPAIS_85.setVisible(false);lyr_IMOVEL_PUBLICO125UNID_86.setVisible(false);lyr_IMOVEL_PRIVADO_URBANO99UNID_87.setVisible(false);lyr_IMOVEL_PRIVADO_URBANO99UNID_88.setVisible(false);lyr_IMOVEL_PRIVADO_RURAL1UNID_89.setVisible(false);lyr_IMOVEL_PRIVADO_RURAL1UNID_90.setVisible(false);lyr_PARQUE_DOS_TRABALHADORES_91.setVisible(false);lyr_PARQUE_DOS_TRABALHADORES_92.setVisible(false);lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_93.setVisible(false);lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_94.setVisible(false);lyr_PARQUE_CAXAMBU_95.setVisible(false);lyr_PARQUE_CAXAMBU_96.setVisible(false);lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_97.setVisible(false);lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_98.setVisible(false);lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_99.setVisible(false);lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_100.setVisible(false);lyr_JARDIM_ZOOBOTANICO_101.setVisible(false);lyr_JARDIM_ZOOBOTANICO_102.setVisible(false);lyr_COMPLEXO_POLIESPORTIVO_103.setVisible(false);lyr_COMPLEXO_POLIESPORTIVO_104.setVisible(false);lyr_UBS_SANTA_TEREZINHA_105.setVisible(false);lyr_UBS_SANTA_BARBARA_106.setVisible(false);lyr_UBS_PERES_ELIAS_107.setVisible(false);lyr_UBS_PARQUE_HORTO_108.setVisible(false);lyr_UBS_JARDIM_PALMA_109.setVisible(false);lyr_REVITALIZACAO_ESTACAO_FERROVIARIA_110.setVisible(false);lyr_REFORMA_CRAS_OESTE_111.setVisible(false);lyr_REFORMA_CRAS_NORTE_112.setVisible(false);lyr_REFORCO_ESTRUTURAL_CHAMPAGNAT_113.setVisible(false);lyr_RECAPEAMENTO_JARDIM_MARTINS_114.setVisible(false);lyr_PRONTO_SOCORRO_ALVARO_AZZUZ_115.setVisible(false);lyr_POLICLINICA_116.setVisible(false);lyr_NOVO_NGA_117.setVisible(false);lyr_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_118.setVisible(false);lyr_ESCOLA_JOAO_LIPORONI_119.setVisible(false);lyr_DRENAGEM_CORREGO_CUBATAO_120.setVisible(false);lyr_DRENAGEM_CORREGO_BRAGRES_121.setVisible(false);lyr_DRENAGEM_CANAL_JD_PALMEIRAS_122.setVisible(false);lyr_CRECHE_SAMEL_PARK_123.setVisible(false);lyr_CORPO_BAMBEIROS_124.setVisible(false);lyr_CONTENCAO_VIARIA_125.setVisible(false);lyr_CONSTRUCAO_CEPEL_SAO_JOSE_126.setVisible(false);lyr_CONSTRUCAO_CEPEL_JD_CAMBUI_127.setVisible(false);lyr_CONSTRUCAO_CAPS_INFANTIL_128.setVisible(false);lyr_AREA_LAZER_PARQUE_ESMERALDA_129.setVisible(false);lyr_AREA_LAZER_PARQUE_CONTINENTAL_130.setVisible(false);lyr_AREA_LAZER_JARDIM_PORTINARI_131.setVisible(false);lyr_OBRAS_PUBLICAS29UNID_132.setVisible(false);lyr_REGULARIZADO_133.setVisible(false);lyr_REGULARIZADO9UNID_134.setVisible(false);lyr_Vivenna_135.setVisible(false);lyr_Vivenna_136.setVisible(false);lyr_VittaSoVicente_137.setVisible(false);lyr_VittaSoVicente_138.setVisible(false);lyr_VittaJardimSimes_139.setVisible(false);lyr_VittaJardimSimes_140.setVisible(false);lyr_VittaAlvorada_141.setVisible(false);lyr_VittaAlvorada_142.setVisible(false);lyr_VilaDiEspanha_143.setVisible(false);lyr_VilaDiEspanha_144.setVisible(false);lyr_VillaPucci_145.setVisible(false);lyr_VillaPucci_146.setVisible(false);lyr_VilaPiemonteII_147.setVisible(false);lyr_VilaPiemonteII_148.setVisible(false);lyr_VilaOlimpica_149.setVisible(false);lyr_VilaOlimpica_150.setVisible(false);lyr_VillaDoratta_151.setVisible(false);lyr_VillaDoratta_152.setVisible(false);lyr_VillaBella_153.setVisible(false);lyr_VillaBella_154.setVisible(false);lyr_Versalhes_155.setVisible(false);lyr_Versalhes_156.setVisible(false);lyr_TorontoResidence_157.setVisible(false);lyr_TorontoResidence_158.setVisible(false);lyr_TerraNova_159.setVisible(false);lyr_TerraNova_160.setVisible(false);lyr_Sonetto_161.setVisible(false);lyr_Sonetto_162.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL2_163.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL2_164.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL1_165.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL1_166.setVisible(false);lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_167.setVisible(false);lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_168.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_169.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_170.setVisible(false);lyr_SantaLina_171.setVisible(false);lyr_SantaLina_172.setVisible(false);lyr_SantAnita_173.setVisible(false);lyr_SantAnita_174.setVisible(false);lyr_RuaAlfioBenedini_175.setVisible(false);lyr_RuaAlfioBenedini_176.setVisible(false);lyr_RuaAlfioBenedini_177.setVisible(false);lyr_ResidencialValeVerde_178.setVisible(false);lyr_ResidencialValeVerde_179.setVisible(false);lyr_ResidencialYasminTorres_180.setVisible(false);lyr_ResidencialYasminTorres_181.setVisible(false);lyr_ResidencialTellini_182.setVisible(false);lyr_ResidencialTellini_183.setVisible(false);lyr_ResidencialSoCarlosII_184.setVisible(false);lyr_ResidencialSoCarlosII_185.setVisible(false);lyr_ResidencialSoCarlosI_186.setVisible(false);lyr_ResidencialSoCarlosI_187.setVisible(false);lyr_ResidencialSantaIns_188.setVisible(false);lyr_ResidencialSantaIns_189.setVisible(false);lyr_ResidencialSantaF_190.setVisible(false);lyr_ResidencialSantaF_191.setVisible(false);lyr_ResidencialQuintadosOitis_192.setVisible(false);lyr_ResidencialQuintadosOitis_193.setVisible(false);lyr_ResidencialQuintadoSol_194.setVisible(false);lyr_ResidencialQuintadoSol_195.setVisible(false);lyr_ResidencialPousoAlegreII_196.setVisible(false);lyr_ResidencialPousoAlegreII_197.setVisible(false);lyr_ResidencialPousoAlegre_198.setVisible(false);lyr_ResidencialPousoAlegre_199.setVisible(false);lyr_ResidencialPiamalim_200.setVisible(false);lyr_ResidencialPiamalim_201.setVisible(false);lyr_ResidencialParquedosPassaros_202.setVisible(false);lyr_ResidencialParquedosPassaros_203.setVisible(false);lyr_ResicencialNairRetuciII_204.setVisible(false);lyr_ResicencialNairRetuciII_205.setVisible(false);lyr_ResicencialNairRetuci_206.setVisible(false);lyr_ResicencialNairRetuci_207.setVisible(false);lyr_ResidencialMoradadoBosque_208.setVisible(false);lyr_ResidencialMoradadoBosque_209.setVisible(false);lyr_ResidencialMarthaHelena_210.setVisible(false);lyr_ResidencialMarthaHelena_211.setVisible(false);lyr_ResidencialMarioTasso_212.setVisible(false);lyr_ResidencialMarioTasso_213.setVisible(false);lyr_ResidencialMarianaAlarcon_214.setVisible(false);lyr_ResidencialMarianaAlarcon_215.setVisible(false);lyr_ResidencialJardimCanada_216.setVisible(false);lyr_ResidencialJardimCanada_217.setVisible(false);lyr_ResidencialJabuticabeiras_218.setVisible(false);lyr_ResidencialJabuticabeiras_219.setVisible(false);lyr_ResidencialGramadosII_220.setVisible(false);lyr_ResidencialGramadosII_221.setVisible(false);lyr_ResidencialGramados_222.setVisible(false);lyr_ResidencialGramados_223.setVisible(false);lyr_ResidencialGaia_224.setVisible(false);lyr_ResidencialGaia_225.setVisible(false);lyr_ResidencialFrutuoso_226.setVisible(false);lyr_ResidencialFrutuoso_227.setVisible(false);lyr_ResidencialFaggioni_228.setVisible(false);lyr_ResidencialFaggioni_229.setVisible(false);lyr_ResidencialEssenza_230.setVisible(false);lyr_ResidencialEssenza_231.setVisible(false);lyr_ResidencialDomingosJardini_232.setVisible(false);lyr_ResidencialDomingosJardini_233.setVisible(false);lyr_ResidencialCintraAlves_234.setVisible(false);lyr_ResidencialCintraAlves_235.setVisible(false);lyr_ResidencialBoaVista_236.setVisible(false);lyr_ResidencialBoaVista_237.setVisible(false);lyr_ResidencialAltodaFazenda_238.setVisible(false);lyr_ResidencialAltodaFazenda_239.setVisible(false);lyr_ResidencialAnaHelena_240.setVisible(false);lyr_ResidencialAnaHelena_241.setVisible(false);lyr_ReservaAbaete_242.setVisible(false);lyr_ReservaAbaete_243.setVisible(false);lyr_RecantoMeneghetti_244.setVisible(false);lyr_RecantoMeneghetti_245.setVisible(false);lyr_Quadra18VilaExposio_246.setVisible(false);lyr_Quadra18VilaExposio_247.setVisible(false);lyr_ProlongamentoSamelPark_248.setVisible(false);lyr_ProlongamentoSamelPark_249.setVisible(false);lyr_ParqueVillaLobos_250.setVisible(false);lyr_ParqueVillaLobos_251.setVisible(false);lyr_ParquePalmeiraImperial_252.setVisible(false);lyr_ParquePalmeiraImperial_253.setVisible(false);lyr_ParqueJacarand_254.setVisible(false);lyr_ParqueJacarand_255.setVisible(false);lyr_ParqueFlora_256.setVisible(false);lyr_ParqueFlora_257.setVisible(false);lyr_ParquedosSabias_258.setVisible(false);lyr_ParquedosSabias_259.setVisible(false);lyr_ParquedosCoqueiros_260.setVisible(false);lyr_ParquedosCoqueiros_261.setVisible(false);lyr_ParqueAlvorada_262.setVisible(false);lyr_ParqueAlvorada_263.setVisible(false);lyr_ParagonFaseII_264.setVisible(false);lyr_ParagonFaseII_265.setVisible(false);lyr_Paragon_266.setVisible(false);lyr_Paragon_267.setVisible(false);lyr_PalmeiraReal_268.setVisible(false);lyr_PalmeiraReal_269.setVisible(false);lyr_MoradadoVerdeII_270.setVisible(false);lyr_MoradadoVerdeII_271.setVisible(false);lyr_MoradadaMata_272.setVisible(false);lyr_MoradadaMata_273.setVisible(false);lyr_Monti_274.setVisible(false);lyr_Monti_275.setVisible(false);lyr_MontBlancResidence_276.setVisible(false);lyr_MontBlancResidence_277.setVisible(false);lyr_MasterplanDespaschoal_278.setVisible(false);lyr_MasterplanDespaschoal_279.setVisible(false);lyr_MasterplanDespaschoal_280.setVisible(false);lyr_MasteplanBildVitta_281.setVisible(false);lyr_MasteplanBildVitta_282.setVisible(false);lyr_MasteplanBildVitta_283.setVisible(false);lyr_Loteamentolamo_284.setVisible(false);lyr_Loteamentolamo_285.setVisible(false);lyr_JardimStephani_286.setVisible(false);lyr_JardimStephani_287.setVisible(false);lyr_JardimPherola_288.setVisible(false);lyr_JardimPherola_289.setVisible(false);lyr_JardimNatal_290.setVisible(false);lyr_JardimNatal_291.setVisible(false);lyr_JardimMariaLuiza_292.setVisible(false);lyr_JardimMariaLuiza_293.setVisible(false);lyr_JardimMariaAugusta_294.setVisible(false);lyr_JardimMariaAugusta_295.setVisible(false);lyr_JardimHorizonte_296.setVisible(false);lyr_JardimHorizonte_297.setVisible(false);lyr_JardimFlora_298.setVisible(false);lyr_JardimFlora_299.setVisible(false);lyr_IrineuZanetiII_300.setVisible(false);lyr_IrineuZanetiII_301.setVisible(false);lyr_Infratcnica_302.setVisible(false);lyr_Infratcnica_303.setVisible(false);lyr_HorizResidence_304.setVisible(false);lyr_HorizResidence_305.setVisible(false);lyr_GlebaNossaSenhoraAuxiliadora_306.setVisible(false);lyr_GlebaNossaSenhoraAuxiliadora_307.setVisible(false);lyr_Ferracini_308.setVisible(false);lyr_Ferracini_309.setVisible(false);lyr_FrancaB6_310.setVisible(false);lyr_FrancaB6_311.setVisible(false);lyr_FazendaProgresso_312.setVisible(false);lyr_FazendaProgresso_313.setVisible(false);lyr_FazendaeGranjaSantaRita2_314.setVisible(false);lyr_FazendaeGranjaSantaRita2_315.setVisible(false);lyr_FazendaeGranjaSantaRita_316.setVisible(false);lyr_FazendaeGranjaSantaRita_317.setVisible(false);lyr_Essence_318.setVisible(false);lyr_Essence_319.setVisible(false);lyr_Elias_320.setVisible(false);lyr_Elias_321.setVisible(false);lyr_EdifcioSolNascente_322.setVisible(false);lyr_EdifcioSolNascente_323.setVisible(false);lyr_EdifcioRuadoSol_324.setVisible(false);lyr_EdifcioRuadoSol_325.setVisible(false);lyr_EdifcioResidencialHope_326.setVisible(false);lyr_EdifcioResidencialHope_327.setVisible(false);lyr_DiocesedeFranca_328.setVisible(false);lyr_DiocesedeFranca_329.setVisible(false);lyr_DaVinci_330.setVisible(false);lyr_DaVinci_331.setVisible(false);lyr_CondomnioIICityPetrpolis_332.setVisible(false);lyr_CondomnioIICityPetrpolis_333.setVisible(false);lyr_CondomnioICityPetrpolis_334.setVisible(false);lyr_CondomnioICityPetrpolis_335.setVisible(false);lyr_Colorado_336.setVisible(false);lyr_Colorado_337.setVisible(false);lyr_CidadeJardim_338.setVisible(false);lyr_CidadeJardim_339.setVisible(false);lyr_ChacaraOlaria_340.setVisible(false);lyr_ChacaraOlaria_341.setVisible(false);lyr_ChacaraBelaVista_342.setVisible(false);lyr_ChacaraBelaVista_343.setVisible(false);lyr_BordadaMata_344.setVisible(false);lyr_BordadaMata_345.setVisible(false);lyr_Arteris_346.setVisible(false);lyr_Arteris_347.setVisible(false);lyr_Arizona_348.setVisible(false);lyr_Arizona_349.setVisible(false);lyr_AbuDhabiParadiseResortResidence_350.setVisible(false);lyr_AbuDhabiParadiseResortResidence_351.setVisible(false);lyr_EtapaAprovado43unid_352.setVisible(false);lyr_EtapaDiretriz22unid_353.setVisible(false);lyr_EtapaDefinitiva10unid_354.setVisible(false);lyr_EtapaPrvia24unid_355.setVisible(false);lyr_IRREGULAR_356.setVisible(false);lyr_IRREGULAR174UNID_357.setVisible(false);lyr_FBDS_RIOS_DUPLOS_358.setVisible(false);lyr_FBDS_MASSAS_DAGUA_359.setVisible(false);lyr_FBDS_APP_360.setVisible(false);lyr_FBDS_NASCENTES_361.setVisible(false);lyr_FBDS_RIOS_SIMPLES_362.setVisible(false);lyr_CORPO_HIDRICO_CANAL_FECHADO088KM_363.setVisible(false);lyr_CORPO_HIDRICO_CANAL_ABERTO1252KM_364.setVisible(false);lyr_PARQUE_ZUMBI_DOS_PALMARES_365.setVisible(false);lyr_ATERRO_DAS_MARITACAS_366.setVisible(false);lyr_ATERRO_DAS_MARITACAS_ETAPA_3_367.setVisible(false);lyr_ATERRO_DAS_MARITACAS_ETAPA_2_368.setVisible(false);lyr_ATERRO_DAS_MARITACAS_ETAPA_1_369.setVisible(false);lyr_ATERRO_DA_FAZENDA_MUNICIPAL_370.setVisible(false);lyr_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_371.setVisible(false);lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_372.setVisible(false);lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_373.setVisible(false);lyr_AREA_B_DA_FAZENDA_MUNICIPAL_374.setVisible(false);lyr_AREA_B_DA_FAZENDA_MUNICIPAL_375.setVisible(false);lyr_PARTE_DA_AREA_G_AVERBADA_376.setVisible(false);lyr_PARTE_DA_AREA_G_A_SER_AVERBADA_377.setVisible(false);lyr_CONJUNTO_HABITACIONAL_378.setVisible(false);lyr_AV_ACESSO_COLEGIO_AGRICOLA_379.setVisible(false);lyr_AREA_N2_380.setVisible(false);lyr_AREA_N1_381.setVisible(false);lyr_AREA_N_382.setVisible(false);lyr_AREA_K_383.setVisible(false);lyr_AREA_J_384.setVisible(false);lyr_AREA_I_385.setVisible(false);lyr_AREA_H_386.setVisible(false);lyr_AREA_G_387.setVisible(false);lyr_AREA_F_388.setVisible(false);lyr_AREA_E_389.setVisible(false);lyr_AREA_D_390.setVisible(false);lyr_AREA_C_391.setVisible(false);lyr_AREA_B_392.setVisible(false);lyr_AREA_A_393.setVisible(false);lyr_PROPOSTO_394.setVisible(false);lyr_EM_FUNCIONAMENTO_395.setVisible(false);lyr_EM_CONSTRUCAO_396.setVisible(false);lyr_DrenagensExistentes_397.setVisible(false);lyr_DRENAGEM_VILLAGIO_DI_FIRENZE_398.setVisible(false);lyr_DRENAGEM_VILLA_SANTA_GIANNA_399.setVisible(false);lyr_DRENAGEM_VILA_TOTOLI_400.setVisible(false);lyr_DRENAGEM_VILA_REAL_401.setVisible(false);lyr_DRENAGEM_VILA_DORATTA_402.setVisible(false);lyr_DRENAGEM_SAO_PEDRO_II_403.setVisible(false);lyr_DRENAGEM_SANTA_FE_404.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_TELLINI_405.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_406.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_407.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_SANTA_INES_408.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_409.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_410.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_411.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_PALERMO_412.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_ITAPUA_413.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_GAIA_414.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_FERRACINI_415.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_FAGGIONI_416.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_ECOSTILO_417.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_DOURADO_418.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_BALDASSARI_419.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_420.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_421.setVisible(false);lyr_DRENAGEM_RECREIO_CAMPO_BELO_422.setVisible(false);lyr_DRENAGEM_RECANTO_MENEGHETTI_423.setVisible(false);lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_424.setVisible(false);lyr_DRENAGEM_PROL_VILA_ISABEL_425.setVisible(false);lyr_DRENAGEM_PROL_JARDIM_MARTINS_426.setVisible(false);lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_427.setVisible(false);lyr_DRENAGEM_PARQUE_UNIVERSITARIO_428.setVisible(false);lyr_DRENAGEM_PARQUE_SANTA_ADELIA_429.setVisible(false);lyr_DRENAGEM_PARQUE_MOEMA_430.setVisible(false);lyr_DRENAGEM_PARQUE_JOAO_LEITE_431.setVisible(false);lyr_DRENAGEM_PARQUE_DOS_SABIAS_432.setVisible(false);lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_433.setVisible(false);lyr_DRENAGEM_PARQUE_DAS_ARVORES_434.setVisible(false);lyr_DRENAGEM_PARQUE_CASTELO_435.setVisible(false);lyr_DRENAGEM_PARQUE_BOA_VISTA_436.setVisible(false);lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_437.setVisible(false);lyr_DRENAGEM_PARAGON_438.setVisible(false);lyr_DRENAGEM_NAIR_RETUSSI_I_439.setVisible(false);lyr_DRENAGEM_JARDIM_SAO_GABRIEL_440.setVisible(false);lyr_DRENAGEM_JARDIM_SANTA_LUCIA_441.setVisible(false);lyr_DRENAGEM_JARDIM_PULICANO_442.setVisible(false);lyr_DRENAGEM_JARDIM_PORTINARI_443.setVisible(false);lyr_DRENAGEM_JARDIM_PIRATININGA_444.setVisible(false);lyr_DRENAGEM_JARDIM_PALMA_445.setVisible(false);lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_446.setVisible(false);lyr_DRENAGEM_JARDIM_NOEMIA_447.setVisible(false);lyr_DRENAGEM_JARDIM_NATAL_448.setVisible(false);lyr_DRENAGEM_JARDIM_MARTINS_449.setVisible(false);lyr_DRENAGEM_JARDIM_MARIA_LUIZA_450.setVisible(false);lyr_DRENAGEM_JARDIM_LIBANO_451.setVisible(false);lyr_DRENAGEM_JARDIM_IPANEMA_452.setVisible(false);lyr_DRENAGEM_JARDIM_BUENO_453.setVisible(false);lyr_DRENAGEM_JARDIM_BOTANICO_454.setVisible(false);lyr_DRENAGEM_JARDIM_BARAO_455.setVisible(false);lyr_DRENAGEM_JARDIM_AVIACAO_456.setVisible(false);lyr_DRENAGEM_JARDIM_ARIZONA_II_457.setVisible(false);lyr_DRENAGEM_JARDIM_ARIZONA_I_458.setVisible(false);lyr_DRENAGEM_JARDIM_AEROPORTO_II_459.setVisible(false);lyr_DRENAGEM_GRAMADOS_I_460.setVisible(false);lyr_DRENAGEM_FRANCA_POLO_CLUBE_461.setVisible(false);lyr_DRENAGEM_DOMINGOS_JARDINI_462.setVisible(false);lyr_DRENAGEM_DINFRA_II_463.setVisible(false);lyr_DRENAGEM_ATLANTA_PARK_464.setVisible(false);lyr_DRENAGEM_ANA_DOROTHEA_465.setVisible(false);lyr_REGIAO_SUL_466.setVisible(false);lyr_REGIAO_OESTE_467.setVisible(false);lyr_REGIAO_NORTE_468.setVisible(false);lyr_REGIAO_LESTE_469.setVisible(false);lyr_BAIRROS_470.setVisible(false);lyr_VOCOROCAS27UNID_471.setVisible(false);lyr_LOCAIS_DE_DIFICIL_ACESSO12UNID_472.setVisible(false);lyr_CONTEINERES286UNID_473.setVisible(false);lyr_ARVORES_IMUNE_AO_CORTE9UNID_474.setVisible(false);lyr_ACADEMIAS_AO_AR_LIVRE84UNID_475.setVisible(false);lyr_SERVICO_DE_SAUDE21UNID_476.setVisible(false);lyr_RECICLAVEIS15UNID_477.setVisible(false);lyr_PNEUS1UNID_478.setVisible(false);lyr_PILHAS_E_BATERIAS17UNID_479.setVisible(false);lyr_PERIGOSOS1UNID_480.setVisible(false);lyr_OLEO_LUBRIFICANTE1UNID_481.setVisible(false);lyr_OLEO_DE_COZINHA3UNID_482.setVisible(false);lyr_MASSA_VERDE1UNID_483.setVisible(false);lyr_MADEIRAS1UNID_484.setVisible(false);lyr_LATAS_DE_TINTA2UNID_485.setVisible(false);lyr_LAMPADAS4UNID_486.setVisible(false);lyr_INSERVIVEIS4UNID_487.setVisible(false);lyr_GESSO1UNID_488.setVisible(false);lyr_EMBALAGENS_AGROTOXICO1UNID_489.setVisible(false);lyr_ELETRONICOS3UNID_490.setVisible(false);lyr_COURO1UNID_491.setVisible(false);lyr_CONSTRUCAO_CIVIL7UNID_492.setVisible(false);lyr_CHAPAS_DE_RAIO_X1UNID_493.setVisible(false);lyr_PROTECAO_AERODROMO_494.setVisible(false);lyr_HELIPONTO_HOSPITAL_REGIONAL_495.setVisible(false);lyr_HELIPONTO_EDIFICIO_PRIME_496.setVisible(false);lyr_HELIPONTO_EDIFICIO_PRIME_497.setVisible(false);lyr_CLASSE_VB_498.setVisible(false);lyr_CLASSE_VA_499.setVisible(false);lyr_CLASSE_IVC_500.setVisible(false);lyr_CLASSE_IVB_501.setVisible(false);lyr_CLASSE_IVA_502.setVisible(false);lyr_CLASSE_IIIC_503.setVisible(false);lyr_CLASSE_IIIB_504.setVisible(false);lyr_CLASSE_IIIA_505.setVisible(false);lyr_CLASSE_II_506.setVisible(false);lyr_CLASSE_I_507.setVisible(false);lyr_LOTEAMENTO_FECHADO146UNID70632440M_508.setVisible(false);lyr_LOTE_EMDEF10UNID218783M_509.setVisible(false);lyr_LOTE_EMDEF_510.setVisible(false);lyr_LOTE_COM_EDIFICACAO20UNID508062M_511.setVisible(false);lyr_LOTE_COM_EDIFICACAO_512.setVisible(false);lyr_LOTE252UNID7530210M_513.setVisible(false);lyr_LOTE_514.setVisible(false);lyr_LEILAO_PROCESSO_7954202537196UNID3239123M_515.setVisible(false);lyr_LEILAO_PROCESSO_7954202537_516.setVisible(false);lyr_LEILAO_PROCESSO_2652520256922UNID352000M_517.setVisible(false);lyr_LEILAO_PROCESSO_26525202569_518.setVisible(false);lyr_LEILAO_PROCESSO_2198620254518UNID2092083M_519.setVisible(false);lyr_LEILAO_PROCESSO_21986202545_520.setVisible(false);lyr_LEILAO_HOMOLOGADO4UNID334770M_521.setVisible(false);lyr_LEILAO_HOMOLOGADO_522.setVisible(false);lyr_AREA_VERDE2013UNID835945972M_523.setVisible(false);lyr_AREA_PATRIMONIAL69UNID121924073M_524.setVisible(false);lyr_AREA_INSTITUCIONAL353UNID202425793M_525.setVisible(false);lyr_AREA_DE_USO_ESPECIAL280UNID271349968M_526.setVisible(false);lyr_APP145UNID220226604M_527.setVisible(false);lyr_TRPRL_CETESB_528.setVisible(false);lyr_TRPRL_CETESB_529.setVisible(false);lyr_TCRA_MUNICIPAL_530.setVisible(false);lyr_TCRA_MUNICIPAL_531.setVisible(false);lyr_TCRA_CETESB_PARCELAMENTO_532.setVisible(false);lyr_TCRA_CETESB_PARCELAMENTO_533.setVisible(false);lyr_TCRA_CETESB_534.setVisible(false);lyr_TCRA_CETESB_535.setVisible(false);lyr_TAC_MP_536.setVisible(false);lyr_TAC_MP_537.setVisible(false);lyr_PLANTIO_VOLUNTARIO_538.setVisible(false);lyr_PLANTIO_VOLUNTARIO_539.setVisible(false);lyr_ANUENCIA_540.setVisible(false);lyr_ANUENCIA_541.setVisible(false);lyr_AIIPA_CETESB_542.setVisible(false);lyr_AIIPA_CETESB_543.setVisible(false);lyr_ACAO_CIVIL_PUBLICA_544.setVisible(false);lyr_ACAO_CIVIL_PUBLICA_545.setVisible(false);lyr_PROG_ADOTE_UMA_PRACA_546.setVisible(false);lyr_RESPONSAVEL_EGNALDO220UNID21780618M_547.setVisible(false);lyr_RESPONSAVEL_DILU171UNID17255710M_548.setVisible(false);
var layersList = [group_ZonaCartogrficaMapaBase,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_Zoneamento,group_SistemaVirio,group_SecretariadeSade,group_SecretariadeEsporteeCultura,group_SecretariadeEducaoUnidadesEscolares,group_RodoviaseEstradas,group_PontosViciados,group_ParquesdeFranca,group_ObrasPblicas,group_LoteamentosRegularizadosREURB,group_LoteamentosCondomniosParcelamentodoSolo,group_LoteamentosClandestinos,group_HidrografiaFBDS2025,group_GerenciamentodereasContaminadas,group_FazendaMunicipalPousoAlto,group_Ecopontos,group_Drenagem,group_DivisoTerritorialMunicipal,group_Diversos,group_DescarteCorretodeResduos,group_ControleAreo,group_ClassesdeRiscoIPT,group_reasPblicas,group_reasdeCompensaoAmbiental,group_ProgramaAdoteUmaPraa];
lyr_LIMITE_MUNICIPAL_3.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_AREA_URBANA_4.set('fieldAliases', {'fid': 'fid', 'MUNICIPIO': 'MUNICIPIO', 'AREA_KM2': 'AREA_KM2', });
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
lyr_SUB_MACROZONA_DE_OCUPACAO_RESTRITA_21.set('fieldAliases', {'fid': 'fid', 'TIPO_ZONA': 'TIPO_ZONA', 'CATEGORIA': 'CATEGORIA', });
lyr_SUB_MACROZONA_DE_OCUPACAO_PREFERENCIAL_22.set('fieldAliases', {'fid': 'fid', 'TIPO_ZONA': 'TIPO_ZONA', 'CATEGORIA': 'CATEGORIA', });
lyr_SUB_MACROZONA_DE_EXPANSAO_URBANA_23.set('fieldAliases', {'fid': 'fid', 'TIPO_ZONA': 'TIPO_ZONA', 'CATEGORIA': 'CATEGORIA', });
lyr_MACROZONA_DO_RIO_CANOAS_24.set('fieldAliases', {'fid': 'fid', 'TIPO_ZONA': 'TIPO_ZONA', 'CATEGORIA': 'CATEGORIA', });
lyr_EXPANSAO_URBANA_LC_324_2019_25.set('fieldAliases', {'fid': 'fid', 'TIPO_ZONA': 'TIPO_ZONA', 'CATEGORIA': 'CATEGORIA', });
lyr_EXPANSAO_URBANA_LC_235_2013_26.set('fieldAliases', {'fid': 'fid', 'TIPO_ZONA': 'TIPO_ZONA', 'CATEGORIA': 'CATEGORIA', });
lyr_EXPANSAO_URBANA_LC_140_2009_27.set('fieldAliases', {'fid': 'fid', 'TIPO_ZONA': 'TIPO_ZONA', 'CATEGORIA': 'CATEGORIA', });
lyr_EXPANSAO_URBANA_LC_050_2003_28.set('fieldAliases', {'fid': 'fid', 'TIPO_ZONA': 'TIPO_ZONA', 'CATEGORIA': 'CATEGORIA', });
lyr_AREAS_DAS_BACIAS_DOS_RIOS_CANOAS_E_POUSO_ALEGRE_29.set('fieldAliases', {'fid': 'fid', 'TIPO_ZONA': 'TIPO_ZONA', 'CATEGORIA': 'CATEGORIA', });
lyr_AREA_ESPECIAL_RESIDENCIAIS_UNIFAMILIARES_30.set('fieldAliases', {'fid': 'fid', 'TIPO_ZONA': 'TIPO_ZONA', 'CATEGORIA': 'CATEGORIA', });
lyr_AREA_ESPECIAL_LAZER_INTERESSE_TURISTICO_E_CULTURA_31.set('fieldAliases', {'fid': 'fid', 'TIPO_ZONA': 'TIPO_ZONA', 'CATEGORIA': 'CATEGORIA', });
lyr_AREA_ESPECIAL_INDUSTRIAL_E_LOGISTICA_32.set('fieldAliases', {'fid': 'fid', 'TIPO_ZONA': 'TIPO_ZONA', 'CATEGORIA': 'CATEGORIA', });
lyr_AREA_ESPECIAL_DE_INTERESSE_SOCIAL_33.set('fieldAliases', {'fid': 'fid', 'TIPO_ZONA': 'TIPO_ZONA', 'CATEGORIA': 'CATEGORIA', });
lyr_ZONA_SUL_VIA_EXPRESSA_EXISTENTE_34.set('fieldAliases', {'fid': 'fid', 'TIPO_SISTEMA': 'TIPO_SISTEMA', 'CLASSE_VIARIA': 'CLASSE_VIARIA', });
lyr_ZONA_SUL_DIRETRIZ_VIA_PARQUE_35.set('fieldAliases', {'fid': 'fid', 'TIPO_SISTEMA': 'TIPO_SISTEMA', 'CLASSE_VIARIA': 'CLASSE_VIARIA', });
lyr_ZONA_SUL_DIRETRIZ_COLETORA_36.set('fieldAliases', {'fid': 'fid', 'TIPO_SISTEMA': 'TIPO_SISTEMA', 'CLASSE_VIARIA': 'CLASSE_VIARIA', });
lyr_ZONA_SUL_DIRETRIZ_AVENIDA_37.set('fieldAliases', {'fid': 'fid', 'TIPO_SISTEMA': 'TIPO_SISTEMA', 'CLASSE_VIARIA': 'CLASSE_VIARIA', });
lyr_ZONA_SUL_AVENIDA_EXISTENTE_38.set('fieldAliases', {'fid': 'fid', 'TIPO_SISTEMA': 'TIPO_SISTEMA', 'CLASSE_VIARIA': 'CLASSE_VIARIA', });
lyr_SISTEMA_VIARIO_PRINCIPAL_39.set('fieldAliases', {'fid': 'fid', 'TIPO_SISTEMA': 'TIPO_SISTEMA', 'CLASSE_VIARIA': 'CLASSE_VIARIA', });
lyr_RODOVIAS_VIAS_ARTERIAIS_40.set('fieldAliases', {'fid': 'fid', 'TIPO_SISTEMA': 'TIPO_SISTEMA', 'CLASSE_VIARIA': 'CLASSE_VIARIA', });
lyr_RODOVIAS_41.set('fieldAliases', {'fid': 'fid', 'TIPO_SISTEMA': 'TIPO_SISTEMA', 'CLASSE_VIARIA': 'CLASSE_VIARIA', });
lyr_FAIXA_DE_DOMINIO_DER_SPA_397334_42.set('fieldAliases', {'fid': 'fid', 'DESCRICAO': 'DESCRICAO', 'RODOVIA': 'RODOVIA', });
lyr_FAIXA_DE_DOMINIO_DER_SP_3452_43.set('fieldAliases', {'fid': 'fid', 'DESCRICAO': 'DESCRICAO', 'RODOVIA': 'RODOVIA', });
lyr_FAIXA_DE_DOMINIO_DER_SP_3342_44.set('fieldAliases', {'fid': 'fid', 'DESCRICAO': 'DESCRICAO', 'RODOVIA': 'RODOVIA', });
lyr_EXPANSAO_DO_SISTEMA_VIARIO_45.set('fieldAliases', {'fid': 'fid', 'TIPO_SISTEMA': 'TIPO_SISTEMA', 'CLASSE_VIARIA': 'CLASSE_VIARIA', });
lyr_VIGILANCIA_EM_SAUDE5UNID_46.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAUDE': 'EQUIPAMENTO_DE_SAUDE', 'ENDERECO': 'ENDERECO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'CATEGORIA': 'CATEGORIA', });
lyr_UNIDADE_DE_URGENCIA_E_EMERGENCIA8UNID_47.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAUDE': 'EQUIPAMENTO_DE_SAUDE', 'ENDERECO': 'ENDERECO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'CATEGORIA': 'CATEGORIA', });
lyr_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO14UNID_48.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAUDE': 'EQUIPAMENTO_DE_SAUDE', 'ENDERECO': 'ENDERECO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'CATEGORIA': 'CATEGORIA', });
lyr_GESTAO_ADMINISTRATIVO3UNID_49.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAUDE': 'EQUIPAMENTO_DE_SAUDE', 'ENDERECO': 'ENDERECO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'CATEGORIA': 'CATEGORIA', });
lyr_ATENCAO_PRIMARIA24UNID_50.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAUDE': 'EQUIPAMENTO_DE_SAUDE', 'ENDERECO': 'ENDERECO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'CATEGORIA': 'CATEGORIA', });
lyr_TEATRO2UNID_51.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_SECRETARIA1UNID_52.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_QUADRA3UNID_53.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_PRACA2UNID_54.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_PISTA1UNID_55.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_PISCINA1UNID_56.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_PINACOTECA1UNID_57.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_PAVILHAO1UNID_58.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_PARQUE2UNID_59.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_MUSEU2UNID_60.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_GINASIO5UNID_61.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_ESTADIO1UNID_62.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_CONJUNTO4UNID_63.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_CEPEL12UNID_64.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_CENTRO4UNID_65.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_CASA1UNID_66.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_CAMPO26UNID_67.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_BIBLIOTECA1UNID_68.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_ARENA3UNID_69.set('fieldAliases', {'fid': 'fid', 'UNIDADE_MUNICIPAL': 'UNIDADE_MUNICIPAL', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'PROPRIO_MUNICIPAL': 'PROPRIO_MUNICIPAL', 'ENDERECO': 'ENDERECO', 'CATEGORIA': 'CATEGORIA', });
lyr_UNIVERSIDADE_ABERTA_DO_BRASIL1UNID_70.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_SETOR_DE_MERENDA1UNID_71.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_SECRETARIA_DE_EDUCACAO1UNID_72.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_ESPACO_DE_DIFUSAO_CIENTIFICA1UNID_73.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_ENSINO_FUNDAMENTAL3UNID_74.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_EJA3UNID_75.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_ED_INFANTIL_ENS_FUNDAMENTAL39UNID_76.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_EDUCACAO_INFANTIL9UNID_77.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_CRECHE_PRE_ESCOLA45UNID_78.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_CRECHE35UNID_79.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_CENTRO_DE_EDUCACAO_INTEGRADA1UNID_80.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_ALMOCHARIFADO_EDUCACAO1UNID_81.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDEREÇ', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_ALFABETIZACAO_DE_JOVENS_E_ADULTOS15UNID_82.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ENDERECO': 'ENDERECO', 'REDE': 'REDE', 'REGIAO': 'REGIAO', 'UNIDADE_ESCOLAR': 'UNIDADE_ESCOLAR', 'ETAPA': 'ETAPA', 'ATENDIMENTO': 'ATENDIMENTO', 'TELEFONE': 'TELEFONE', });
lyr_RODOVIAS_MUNICIPAIS_83.set('fieldAliases', {'fid': 'fid', 'TIPO_VIA': 'TIPO_VIA', 'JUDISDICAO': 'JUDISDICAO', 'REVESTIMENTO': 'REVESTIMENTO', 'NUM_PISTAS': 'NUM_PISTAS', 'NUM_FAIXAS': 'NUM_FAIXAS', 'EXTENSAO': 'Extensao (km)', 'NOME': 'NOME', 'CATEGORIA': 'CATEGORIA', });
lyr_RODOVIAS_ESTADUAIS_84.set('fieldAliases', {'fid': 'fid', 'TIPO_VIA': 'TIPO_VIA', 'JUDISDICAO': 'JUDISDICAO', 'REVESTIMENTO': 'REVESTIMENTO', 'NUM_PISTAS': 'NUM_PISTAS', 'NUM_FAIXAS': 'NUM_FAIXAS', 'EXTENSAO': 'Extensao (km)', 'NOME': 'NOME', 'CATEGORIA': 'CATEGORIA', });
lyr_ESTRADAS_RURAIS_MUNICIPAIS_85.set('fieldAliases', {'fid': 'fid', 'TIPO_VIA': 'TIPO_VIA', 'JUDISDICAO': 'JUDISDICAO', 'REVESTIMENTO': 'REVESTIMENTO', 'NUM_PISTAS': 'NUM_PISTAS', 'NUM_FAIXAS': 'NUM_FAIXAS', 'EXTENSAO': 'EXTENSAO', 'NOME': 'NOME', 'CATEGORIA': 'CATEGORIA', });
lyr_IMOVEL_PUBLICO125UNID_86.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'LOGRADOURO': 'LOGRADOURO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'CLASSIFICACAO': 'CLASSIFICACAO', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'PROCESSO_SEINFRA': 'Processo SEINFRA', 'PROCESSO_SMS': 'Processo SMS', 'PROCESSO_MP': 'Pocesso MP', 'PROCESSO_SMSEG': 'Processo SMSEG', 'COORDENADA_X': 'Coordenada Leste (x)', 'COORDENADA_Y': 'Coordenada Norte (y)', 'OUTROS_PROCESSOS': 'Outos Processos', 'DATA_INCLUSAO': 'Data de Inclusão', 'REGIAO': 'REGIAO', });
lyr_IMOVEL_PRIVADO_URBANO99UNID_87.set('fieldAliases', {'fid': 'fid', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'CADASTRO_IMOBILIARIO': 'CADASTRO IMOBILIÁRIO', 'BAIRRO': 'BAIRRO', 'LOGRADOURO': 'LOGRADOURO', 'PROCESSO-SEINFRA': 'PROCESSO-SEINFRA', 'PROCESSO_SMS': 'PROCESSO_SMS', 'PROCESSO_MP': 'PROCESSO_MP', 'PROCESSO_SMSEG': 'PROCESSO_SMSEG', 'OUTROS_PROCESSOS': 'OUTROS_PROCESSOS', 'DATA_INCLUSAO': 'DATA_INCLUSAO', 'CLASSIFICACAO': 'CLASSIFICACAO', });
lyr_IMOVEL_PRIVADO_URBANO99UNID_88.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'LOGRADOURO': 'LOGRADOURO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'CLASSIFICACAO': 'CLASSIFICACAO', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'PROCESSO_SEINFRA': 'Processo SEINFRA', 'PROCESSO_SMS': 'Processo SMS', 'PROCESSO_MP': 'Pocesso MP', 'PROCESSO_SMSEG': 'Processo SMSEG', 'COORDENADA_X': 'Coordenada Leste (x)', 'COORDENADA_Y': 'Coordenada Norte (y)', 'OUTROS_PROCESSOS': 'Outos Processos', 'DATA_INCLUSAO': 'Data de Inclusão', 'REGIAO': 'REGIAO', });
lyr_IMOVEL_PRIVADO_RURAL1UNID_89.set('fieldAliases', {'fid': 'fid', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'BAIRRO': 'BAIRRO', 'LOGRADOURO': 'LOGRADOURO', 'PROCESSO-SEINFRA': 'PROCESSO-SEINFRA', 'PROCESSO_SMS': 'PROCESSO_SMS', 'PROCESSO_MP': 'PROCESSO_MP', 'PROCESSO_SMSEG': 'PROCESSO_SMSEG', 'OUTROS_PROCESSOS': 'OUTROS_PROCESSOS', 'DATA_INCLUSAO': 'DATA_INCLUSAO', 'CLASSIFICACAO': 'CLASSIFICACAO', });
lyr_IMOVEL_PRIVADO_RURAL1UNID_90.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'LOGRADOURO': 'LOGRADOURO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'CLASSIFICACAO': 'CLASSIFICACAO', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'PROCESSO_SEINFRA': 'Processo SEINFRA', 'PROCESSO_SMS': 'Processo SMS', 'PROCESSO_MP': 'Pocesso MP', 'PROCESSO_SMSEG': 'Processo SMSEG', 'COORDENADA_X': 'Coordenada Leste (x)', 'COORDENADA_Y': 'Coordenada Norte (y)', 'OUTROS_PROCESSOS': 'Outos Processos', 'DATA_INCLUSAO': 'Data de Inclusão', 'REGIAO': 'REGIAO', });
lyr_PARQUE_DOS_TRABALHADORES_91.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_DOS_TRABALHADORES_92.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_93.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_94.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_CAXAMBU_95.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_CAXAMBU_96.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_97.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_98.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_99.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_100.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_JARDIM_ZOOBOTANICO_101.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'DESCRICAO', });
lyr_JARDIM_ZOOBOTANICO_102.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'DESCRICAO', });
lyr_COMPLEXO_POLIESPORTIVO_103.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_COMPLEXO_POLIESPORTIVO_104.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_UBS_SANTA_TEREZINHA_105.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_UBS_SANTA_BARBARA_106.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_UBS_PERES_ELIAS_107.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_UBS_PARQUE_HORTO_108.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_UBS_JARDIM_PALMA_109.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_REVITALIZACAO_ESTACAO_FERROVIARIA_110.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_REFORMA_CRAS_OESTE_111.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_REFORMA_CRAS_NORTE_112.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_REFORCO_ESTRUTURAL_CHAMPAGNAT_113.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_RECAPEAMENTO_JARDIM_MARTINS_114.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_PRONTO_SOCORRO_ALVARO_AZZUZ_115.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_POLICLINICA_116.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_NOVO_NGA_117.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_118.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_ESCOLA_JOAO_LIPORONI_119.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_DRENAGEM_CORREGO_CUBATAO_120.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_DRENAGEM_CORREGO_BRAGRES_121.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_DRENAGEM_CANAL_JD_PALMEIRAS_122.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_CRECHE_SAMEL_PARK_123.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_CORPO_BAMBEIROS_124.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_CONTENCAO_VIARIA_125.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_CONSTRUCAO_CEPEL_SAO_JOSE_126.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_CONSTRUCAO_CEPEL_JD_CAMBUI_127.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_CONSTRUCAO_CAPS_INFANTIL_128.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_AREA_LAZER_PARQUE_ESMERALDA_129.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_AREA_LAZER_PARQUE_CONTINENTAL_130.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_AREA_LAZER_JARDIM_PORTINARI_131.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGE_DE_EXECUCAO': 'PORCENTAGE_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_OBRAS_PUBLICAS29UNID_132.set('fieldAliases', {'fid': 'fid', 'OBRA': 'OBRA', 'CONTRATO': 'CONTRATO', 'EMPRESA_CONTRATADA': 'EMPRESA_CONTRATADA', 'PORCENTAGEM_DE_EXECUCAO': 'PORCENTAGEM_DE_EXECUCAO', 'INICIO_DA_OBRA': 'INICIO_DA_OBRA', 'PRAZO_INICIAL': 'PRAZO_INICIAL', 'VALOR_DA_OBRA': 'VALOR_DA_OBRA', });
lyr_REGULARIZADO_133.set('fieldAliases', {'fid': 'fid', 'PROCESSO': 'PROCESSO', 'MODALIDADE': 'MODALIDADE', 'NOME_LOTEAMENTO': 'NOME_LOTEAMENTO', 'OBSERVACAO': 'OBSERVACAO', 'MATRICULA': 'MATRICULA', 'QUANT_LOTES': 'QUANT_LOTES', 'AREA_M2': 'AREA_M2', 'DECRETO_REURB': 'DECRETO_REURB', 'SITUACAO': 'SITUACAO', });
lyr_REGULARIZADO9UNID_134.set('fieldAliases', {'fid': 'fid', 'PROCESSO': 'PROCESSO', 'MODALIDADE': 'MODALIDADE', 'NOME_LOTEAMENTO': 'NOME_LOTEAMENTO', 'OBSERVACAO': 'OBSERVACAO', 'MATRICULA': 'MATRICULA', 'QUANT_LOTES': 'QUANT_LOTES', 'AREA_M2': 'AREA_M2', 'DECRETO_REURB': 'DECRETO_REURB', 'SITUACAO': 'SITUACAO', });
lyr_Vivenna_135.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Vivenna_136.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaSoVicente_137.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaSoVicente_138.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaJardimSimes_139.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaJardimSimes_140.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaAlvorada_141.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaAlvorada_142.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaDiEspanha_143.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaDiEspanha_144.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaPucci_145.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaPucci_146.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaPiemonteII_147.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaPiemonteII_148.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaOlimpica_149.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaOlimpica_150.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaDoratta_151.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaDoratta_152.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaBella_153.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaBella_154.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Versalhes_155.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Versalhes_156.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TorontoResidence_157.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TorontoResidence_158.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TerraNova_159.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TerraNova_160.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Sonetto_161.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Sonetto_162.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_163.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_164.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_165.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_166.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_167.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_168.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ServidoRamal138kVFranca4Guanabara_169.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_ServidoRamal138kVFranca4Guanabara_170.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_SantaLina_171.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantaLina_172.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantAnita_173.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantAnita_174.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RuaAlfioBenedini_175.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RuaAlfioBenedini_176.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RuaAlfioBenedini_177.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', });
lyr_ResidencialValeVerde_178.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialValeVerde_179.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialYasminTorres_180.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialYasminTorres_181.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialTellini_182.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialTellini_183.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosII_184.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosII_185.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosI_186.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosI_187.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaIns_188.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaIns_189.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaF_190.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaF_191.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadosOitis_192.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadosOitis_193.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadoSol_194.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadoSol_195.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegreII_196.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegreII_197.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegre_198.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegre_199.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPiamalim_200.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPiamalim_201.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialParquedosPassaros_202.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialParquedosPassaros_203.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuciII_204.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuciII_205.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuci_206.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuci_207.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMoradadoBosque_208.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMoradadoBosque_209.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarthaHelena_210.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarthaHelena_211.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarioTasso_212.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarioTasso_213.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarianaAlarcon_214.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarianaAlarcon_215.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJardimCanada_216.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJardimCanada_217.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJabuticabeiras_218.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJabuticabeiras_219.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGramadosII_220.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGramadosII_221.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGramados_222.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGramados_223.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGaia_224.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGaia_225.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialFrutuoso_226.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialFrutuoso_227.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialFaggioni_228.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialFaggioni_229.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialEssenza_230.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialEssenza_231.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialDomingosJardini_232.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialDomingosJardini_233.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialCintraAlves_234.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialCintraAlves_235.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialBoaVista_236.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialBoaVista_237.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAltodaFazenda_238.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAltodaFazenda_239.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAnaHelena_240.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAnaHelena_241.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ReservaAbaete_242.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ReservaAbaete_243.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RecantoMeneghetti_244.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RecantoMeneghetti_245.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Quadra18VilaExposio_246.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Quadra18VilaExposio_247.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ProlongamentoSamelPark_248.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ProlongamentoSamelPark_249.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueVillaLobos_250.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueVillaLobos_251.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquePalmeiraImperial_252.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquePalmeiraImperial_253.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueJacarand_254.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueJacarand_255.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueFlora_256.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueFlora_257.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosSabias_258.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosSabias_259.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosCoqueiros_260.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosCoqueiros_261.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueAlvorada_262.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueAlvorada_263.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParagonFaseII_264.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParagonFaseII_265.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Paragon_266.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Paragon_267.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_PalmeiraReal_268.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_PalmeiraReal_269.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadoVerdeII_270.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadoVerdeII_271.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadaMata_272.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadaMata_273.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Monti_274.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Monti_275.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MontBlancResidence_276.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MontBlancResidence_277.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasterplanDespaschoal_278.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasterplanDespaschoal_279.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasterplanDespaschoal_280.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', });
lyr_MasteplanBildVitta_281.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasteplanBildVitta_282.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasteplanBildVitta_283.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', });
lyr_Loteamentolamo_284.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Loteamentolamo_285.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimStephani_286.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimStephani_287.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimPherola_288.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimPherola_289.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimNatal_290.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimNatal_291.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaLuiza_292.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaLuiza_293.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaAugusta_294.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaAugusta_295.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimHorizonte_296.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimHorizonte_297.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimFlora_298.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimFlora_299.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_IrineuZanetiII_300.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_IrineuZanetiII_301.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Infratcnica_302.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Infratcnica_303.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_HorizResidence_304.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_HorizResidence_305.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_GlebaNossaSenhoraAuxiliadora_306.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_GlebaNossaSenhoraAuxiliadora_307.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Ferracini_308.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Ferracini_309.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FrancaB6_310.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FrancaB6_311.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaProgresso_312.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaProgresso_313.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita2_314.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita2_315.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita_316.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita_317.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Essence_318.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Essence_319.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Elias_320.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Elias_321.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioSolNascente_322.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioSolNascente_323.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioRuadoSol_324.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioRuadoSol_325.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioResidencialHope_326.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioResidencialHope_327.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DiocesedeFranca_328.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DiocesedeFranca_329.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DaVinci_330.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DaVinci_331.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioIICityPetrpolis_332.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioIICityPetrpolis_333.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_334.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_335.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Colorado_336.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Colorado_337.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CidadeJardim_338.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CidadeJardim_339.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraOlaria_340.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraOlaria_341.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraBelaVista_342.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraBelaVista_343.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_BordadaMata_344.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_BordadaMata_345.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arteris_346.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arteris_347.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arizona_348.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arizona_349.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AbuDhabiParadiseResortResidence_350.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AbuDhabiParadiseResortResidence_351.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EtapaAprovado43unid_352.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaDiretriz22unid_353.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaDefinitiva10unid_354.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaPrvia24unid_355.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_IRREGULAR_356.set('fieldAliases', {'fid': 'fid', 'PROCESSO': 'PROCESSO', 'MODALIDADE': 'MODALIDADE', 'NOME_LOTEAMENTO': 'NOME_LOTEAMENTO', 'OBSERVACAO': 'OBSERVACAO', 'MATRICULA': 'MATRICULA', 'QUANT_LOTES': 'QUANT_LOTES', 'AREA_M2': 'AREA_M2', 'DECRETO_REURB': 'DECRETO_REURB', 'SITUACAO': 'SITUACAO', });
lyr_IRREGULAR174UNID_357.set('fieldAliases', {'fid': 'fid', 'PROCESSO': 'PROCESSO', 'MODALIDADE': 'MODALIDADE', 'NOME_LOTEAMENTO': 'NOME_LOTEAMENTO', 'OBSERVACAO': 'OBSERVACAO', 'MATRICULA': 'MATRICULA', 'QUANT_LOTES': 'QUANT_LOTES', 'AREA_M2': 'AREA_M2', 'DECRETO_REURB': 'DECRETO_REURB', 'SITUACAO': 'SITUACAO', });
lyr_FBDS_RIOS_DUPLOS_358.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_FBDS_MASSAS_DAGUA_359.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_FBDS_APP_360.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_FBDS_NASCENTES_361.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_FBDS_RIOS_SIMPLES_362.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_CORPO_HIDRICO_CANAL_FECHADO088KM_363.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'HIDRO', 'COMP_KM': 'COMP_KM', });
lyr_CORPO_HIDRICO_CANAL_ABERTO1252KM_364.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'HIDRO', 'COMP_KM': 'COMP_KM', });
lyr_PARQUE_ZUMBI_DOS_PALMARES_365.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'AREA_M2': 'AREA_M2', });
lyr_ATERRO_DAS_MARITACAS_366.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'AREA_M2': 'AREA_M2', });
lyr_ATERRO_DAS_MARITACAS_ETAPA_3_367.set('fieldAliases', {'fid': 'fid', 'ID_POCO': 'ID_POCO', 'TIPO_POCO': 'TIPO_POCO', 'SITUACAO': 'SITUACAO', 'EMPRESA': 'EMPRESA', 'ANO': 'ANO', 'LOCAL': 'LOCAL', });
lyr_ATERRO_DAS_MARITACAS_ETAPA_2_368.set('fieldAliases', {'fid': 'fid', 'ID_POCO': 'ID_POCO', 'TIPO_POCO': 'TIPO_POCO', 'SITUACAO': 'SITUACAO', 'EMPRESA': 'EMPRESA', 'ANO': 'ANO', 'LOCAL': 'LOCAL', });
lyr_ATERRO_DAS_MARITACAS_ETAPA_1_369.set('fieldAliases', {'fid': 'fid', 'ID_POCO': 'ID_POCO', 'TIPO_POCO': 'TIPO_POCO', 'SITUACAO': 'SITUACAO', 'EMPRESA': 'EMPRESA', 'ANO': 'ANO', 'LOCAL': 'LOCAL', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_370.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'AREA_M2': 'AREA_M2', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_371.set('fieldAliases', {'fid': 'fid', 'ID_POCO': 'ID_POCO', 'TIPO_POCO': 'Tipo do poço', 'SITUACAO': 'SITUACAO', 'EMPRESA': 'EMPRESA', 'ANO': 'ANO', 'LOCAL': 'LOCAL', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_372.set('fieldAliases', {'fid': 'fid', 'ID_POCO': 'ID_POCO', 'TIPO_POCO': 'Tipo do poço', 'SITUACAO': 'SITUACAO', 'EMPRESA': 'EMPRESA', 'ANO': 'ANO', 'LOCAL': 'LOCAL', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_373.set('fieldAliases', {'fid': 'fid', 'ID_POCO': 'ID_POCO', 'TIPO_POCO': 'Tipo do poço', 'SITUACAO': 'SITUACAO', 'EMPRESA': 'EMPRESA', 'ANO': 'ANO', 'LOCAL': 'LOCAL', });
lyr_AREA_B_DA_FAZENDA_MUNICIPAL_374.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'AREA_M2': 'AREA_M2', });
lyr_AREA_B_DA_FAZENDA_MUNICIPAL_375.set('fieldAliases', {'fid': 'fid', 'ID_POCO': 'ID_POCO', 'TIPO_POCO': 'TIPO_POCO', 'SITUACAO': 'SITUACAO', 'EMPRESA': 'EMPRESA', 'ANO': 'ANO', 'LOCAL': 'LOCAL', });
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
lyr_VOCOROCAS27UNID_471.set('fieldAliases', {'fid': 'fid', 'SITUACAO': 'Situação', 'REFERENCIA': 'Referência', 'PRIORIDADE': 'Prioridade', 'OBSERVACAO': 'Observação', });
lyr_LOCAIS_DE_DIFICIL_ACESSO12UNID_472.set('fieldAliases', {'fid': 'fid', 'LOCAL': 'LOCAL', });
lyr_CONTEINERES286UNID_473.set('fieldAliases', {'fid': 'fid', 'DESCRICAO': 'Nome', 'BAIRRO': 'BAIRRO', });
lyr_ARVORES_IMUNE_AO_CORTE9UNID_474.set('fieldAliases', {'fid': 'fid', 'NOME_POPULAR': 'Nome Popular', 'NOME_CIENTIFICO': 'Nome Científico', 'LEGISLACAO': 'Legislação', });
lyr_ACADEMIAS_AO_AR_LIVRE84UNID_475.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'LOCAL': 'LOCAL', 'BAIRRO': 'BAIRRO', });
lyr_SERVICO_DE_SAUDE21UNID_476.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_RECICLAVEIS15UNID_477.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_PNEUS1UNID_478.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_PILHAS_E_BATERIAS17UNID_479.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_PERIGOSOS1UNID_480.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_OLEO_LUBRIFICANTE1UNID_481.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_OLEO_DE_COZINHA3UNID_482.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_MASSA_VERDE1UNID_483.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_MADEIRAS1UNID_484.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_LATAS_DE_TINTA2UNID_485.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_LAMPADAS4UNID_486.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_INSERVIVEIS4UNID_487.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_GESSO1UNID_488.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_EMBALAGENS_AGROTOXICO1UNID_489.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_ELETRONICOS3UNID_490.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_COURO1UNID_491.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_CONSTRUCAO_CIVIL7UNID_492.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_CHAPAS_DE_RAIO_X1UNID_493.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
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
lyr_LOTEAMENTO_FECHADO146UNID70632440M_508.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_LOTE_EMDEF10UNID218783M_509.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_LOTE_EMDEF_510.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'DESCRICAO': 'DESCRICAO', 'DATA_INCLUSAO': 'DATA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', 'SUBCLASSE': 'SUBCLASSE', });
lyr_LOTE_COM_EDIFICACAO20UNID508062M_511.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_LOTE_COM_EDIFICACAO_512.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'DESCRICAO': 'DESCRICAO', 'DATA_INCLUSAO': 'DATA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', 'SUBCLASSE': 'SUBCLASSE', });
lyr_LOTE252UNID7530210M_513.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_LOTE_514.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'DESCRICAO': 'DESCRICAO', 'DATA_INCLUSAO': 'DATA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', 'SUBCLASSE': 'SUBCLASSE', });
lyr_LEILAO_PROCESSO_7954202537196UNID3239123M_515.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_LEILAO_PROCESSO_7954202537_516.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'DESCRICAO': 'DESCRICAO', 'DATA_INCLUSAO': 'DATA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', 'SUBCLASSE': 'SUBCLASSE', });
lyr_LEILAO_PROCESSO_2652520256922UNID352000M_517.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_LEILAO_PROCESSO_26525202569_518.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'DESCRICAO': 'DESCRICAO', 'DATA_INCLUSAO': 'DATA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', 'SUBCLASSE': 'SUBCLASSE', });
lyr_LEILAO_PROCESSO_2198620254518UNID2092083M_519.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_LEILAO_PROCESSO_21986202545_520.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'DESCRICAO': 'DESCRICAO', 'DATA_INCLUSAO': 'DATA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', 'SUBCLASSE': 'SUBCLASSE', });
lyr_LEILAO_HOMOLOGADO4UNID334770M_521.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_LEILAO_HOMOLOGADO_522.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'DESCRICAO': 'DESCRICAO', 'DATA_INCLUSAO': 'DATA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', 'SUBCLASSE': 'SUBCLASSE', });
lyr_AREA_VERDE2013UNID835945972M_523.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_AREA_PATRIMONIAL69UNID121924073M_524.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_AREA_INSTITUCIONAL353UNID202425793M_525.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_AREA_DE_USO_ESPECIAL280UNID271349968M_526.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DATA_INCLUSAO': 'DATA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_APP145UNID220226604M_527.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
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
lyr_PROG_ADOTE_UMA_PRACA_546.set('fieldAliases', {'fid': 'fid', 'ADOTANTE': 'ADOTANTE', 'LOCAL': 'LOCAL', 'POSSUI_PLACA': 'POSSUI_PLACA', 'DATA_CONTRATO': 'DATA_CONTRATO', 'BAIRRO': 'BAIRRO', 'AREA_M2': 'AREA_M2', 'RESPONSAVEL': 'RESPONSAVEL', });
lyr_RESPONSAVEL_EGNALDO220UNID21780618M_547.set('fieldAliases', {'fid': 'fid', 'ADOTANTE': 'ADOTANTE', 'LOCAL': 'LOCAL', 'POSSUI_PLACA': 'POSSUI_PLACA', 'AREA_M2': 'AREA_M2', 'RESPONSAVEL': 'RESPONSAVEL', 'DATA_CONTRATO': 'DATA_CONTRATO', 'BAIRRO': 'BAIRRO', });
lyr_RESPONSAVEL_DILU171UNID17255710M_548.set('fieldAliases', {'fid': 'fid', 'ADOTANTE': 'ADOTANTE', 'LOCAL': 'LOCAL', 'POSSUI_PLACA': 'POSSUI_PLACA', 'AREA_M2': 'AREA_M2', 'RESPONSAVEL': 'RESPONSAVEL', 'DATA_CONTRATO': 'DATA_CONTRATO', 'BAIRRO': 'BAIRRO', });
lyr_LIMITE_MUNICIPAL_3.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_AREA_URBANA_4.set('fieldImages', {'fid': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'AREA_KM2': 'TextEdit', });
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
lyr_SUB_MACROZONA_DE_OCUPACAO_RESTRITA_21.set('fieldImages', {'fid': '', 'TIPO_ZONA': '', 'CATEGORIA': '', });
lyr_SUB_MACROZONA_DE_OCUPACAO_PREFERENCIAL_22.set('fieldImages', {'fid': 'TextEdit', 'TIPO_ZONA': '', 'CATEGORIA': '', });
lyr_SUB_MACROZONA_DE_EXPANSAO_URBANA_23.set('fieldImages', {'fid': '', 'TIPO_ZONA': '', 'CATEGORIA': '', });
lyr_MACROZONA_DO_RIO_CANOAS_24.set('fieldImages', {'fid': '', 'TIPO_ZONA': '', 'CATEGORIA': '', });
lyr_EXPANSAO_URBANA_LC_324_2019_25.set('fieldImages', {'fid': '', 'TIPO_ZONA': '', 'CATEGORIA': '', });
lyr_EXPANSAO_URBANA_LC_235_2013_26.set('fieldImages', {'fid': '', 'TIPO_ZONA': '', 'CATEGORIA': '', });
lyr_EXPANSAO_URBANA_LC_140_2009_27.set('fieldImages', {'fid': '', 'TIPO_ZONA': '', 'CATEGORIA': '', });
lyr_EXPANSAO_URBANA_LC_050_2003_28.set('fieldImages', {'fid': '', 'TIPO_ZONA': '', 'CATEGORIA': '', });
lyr_AREAS_DAS_BACIAS_DOS_RIOS_CANOAS_E_POUSO_ALEGRE_29.set('fieldImages', {'fid': '', 'TIPO_ZONA': '', 'CATEGORIA': '', });
lyr_AREA_ESPECIAL_RESIDENCIAIS_UNIFAMILIARES_30.set('fieldImages', {'fid': '', 'TIPO_ZONA': '', 'CATEGORIA': '', });
lyr_AREA_ESPECIAL_LAZER_INTERESSE_TURISTICO_E_CULTURA_31.set('fieldImages', {'fid': '', 'TIPO_ZONA': '', 'CATEGORIA': '', });
lyr_AREA_ESPECIAL_INDUSTRIAL_E_LOGISTICA_32.set('fieldImages', {'fid': '', 'TIPO_ZONA': '', 'CATEGORIA': '', });
lyr_AREA_ESPECIAL_DE_INTERESSE_SOCIAL_33.set('fieldImages', {'fid': '', 'TIPO_ZONA': '', 'CATEGORIA': '', });
lyr_ZONA_SUL_VIA_EXPRESSA_EXISTENTE_34.set('fieldImages', {'fid': '', 'TIPO_SISTEMA': '', 'CLASSE_VIARIA': '', });
lyr_ZONA_SUL_DIRETRIZ_VIA_PARQUE_35.set('fieldImages', {'fid': '', 'TIPO_SISTEMA': '', 'CLASSE_VIARIA': '', });
lyr_ZONA_SUL_DIRETRIZ_COLETORA_36.set('fieldImages', {'fid': '', 'TIPO_SISTEMA': '', 'CLASSE_VIARIA': '', });
lyr_ZONA_SUL_DIRETRIZ_AVENIDA_37.set('fieldImages', {'fid': '', 'TIPO_SISTEMA': '', 'CLASSE_VIARIA': '', });
lyr_ZONA_SUL_AVENIDA_EXISTENTE_38.set('fieldImages', {'fid': '', 'TIPO_SISTEMA': '', 'CLASSE_VIARIA': '', });
lyr_SISTEMA_VIARIO_PRINCIPAL_39.set('fieldImages', {'fid': '', 'TIPO_SISTEMA': '', 'CLASSE_VIARIA': '', });
lyr_RODOVIAS_VIAS_ARTERIAIS_40.set('fieldImages', {'fid': '', 'TIPO_SISTEMA': '', 'CLASSE_VIARIA': '', });
lyr_RODOVIAS_41.set('fieldImages', {'fid': '', 'TIPO_SISTEMA': '', 'CLASSE_VIARIA': '', });
lyr_FAIXA_DE_DOMINIO_DER_SPA_397334_42.set('fieldImages', {'fid': '', 'DESCRICAO': '', 'RODOVIA': '', });
lyr_FAIXA_DE_DOMINIO_DER_SP_3452_43.set('fieldImages', {'fid': '', 'DESCRICAO': '', 'RODOVIA': '', });
lyr_FAIXA_DE_DOMINIO_DER_SP_3342_44.set('fieldImages', {'fid': '', 'DESCRICAO': '', 'RODOVIA': '', });
lyr_EXPANSAO_DO_SISTEMA_VIARIO_45.set('fieldImages', {'fid': '', 'TIPO_SISTEMA': '', 'CLASSE_VIARIA': '', });
lyr_VIGILANCIA_EM_SAUDE5UNID_46.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAUDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_UNIDADE_DE_URGENCIA_E_EMERGENCIA8UNID_47.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAUDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO14UNID_48.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAUDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_GESTAO_ADMINISTRATIVO3UNID_49.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAUDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_ATENCAO_PRIMARIA24UNID_50.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAUDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_TEATRO2UNID_51.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_SECRETARIA1UNID_52.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_QUADRA3UNID_53.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_PRACA2UNID_54.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_PISTA1UNID_55.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_PISCINA1UNID_56.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_PINACOTECA1UNID_57.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_PAVILHAO1UNID_58.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_PARQUE2UNID_59.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_MUSEU2UNID_60.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_GINASIO5UNID_61.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_ESTADIO1UNID_62.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_CONJUNTO4UNID_63.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_CEPEL12UNID_64.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_CENTRO4UNID_65.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_CASA1UNID_66.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_CAMPO26UNID_67.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_BIBLIOTECA1UNID_68.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_ARENA3UNID_69.set('fieldImages', {'fid': 'TextEdit', 'UNIDADE_MUNICIPAL': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'PROPRIO_MUNICIPAL': 'TextEdit', 'ENDERECO': 'TextEdit', 'CATEGORIA': 'TextEdit', });
lyr_UNIVERSIDADE_ABERTA_DO_BRASIL1UNID_70.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_SETOR_DE_MERENDA1UNID_71.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_SECRETARIA_DE_EDUCACAO1UNID_72.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_ESPACO_DE_DIFUSAO_CIENTIFICA1UNID_73.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_ENSINO_FUNDAMENTAL3UNID_74.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_EJA3UNID_75.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_ED_INFANTIL_ENS_FUNDAMENTAL39UNID_76.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_EDUCACAO_INFANTIL9UNID_77.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_CRECHE_PRE_ESCOLA45UNID_78.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_CRECHE35UNID_79.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_CENTRO_DE_EDUCACAO_INTEGRADA1UNID_80.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_ALMOCHARIFADO_EDUCACAO1UNID_81.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_ALFABETIZACAO_DE_JOVENS_E_ADULTOS15UNID_82.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ENDERECO': 'TextEdit', 'REDE': 'TextEdit', 'REGIAO': 'TextEdit', 'UNIDADE_ESCOLAR': 'TextEdit', 'ETAPA': 'TextEdit', 'ATENDIMENTO': 'TextEdit', 'TELEFONE': 'TextEdit', });
lyr_RODOVIAS_MUNICIPAIS_83.set('fieldImages', {'fid': 'TextEdit', 'TIPO_VIA': '', 'JUDISDICAO': '', 'REVESTIMENTO': '', 'NUM_PISTAS': '', 'NUM_FAIXAS': '', 'EXTENSAO': '', 'NOME': '', 'CATEGORIA': '', });
lyr_RODOVIAS_ESTADUAIS_84.set('fieldImages', {'fid': 'TextEdit', 'TIPO_VIA': '', 'JUDISDICAO': '', 'REVESTIMENTO': '', 'NUM_PISTAS': '', 'NUM_FAIXAS': '', 'EXTENSAO': '', 'NOME': '', 'CATEGORIA': '', });
lyr_ESTRADAS_RURAIS_MUNICIPAIS_85.set('fieldImages', {'fid': 'TextEdit', 'TIPO_VIA': '', 'JUDISDICAO': '', 'REVESTIMENTO': '', 'NUM_PISTAS': '', 'NUM_FAIXAS': '', 'EXTENSAO': '', 'NOME': '', 'CATEGORIA': '', });
lyr_IMOVEL_PUBLICO125UNID_86.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'LOGRADOURO': '', 'CADASTRO_IMOBILIARIO': '', 'CLASSIFICACAO': '', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'PROCESSO_SEINFRA': '', 'PROCESSO_SMS': '', 'PROCESSO_MP': '', 'PROCESSO_SMSEG': '', 'COORDENADA_X': '', 'COORDENADA_Y': '', 'OUTROS_PROCESSOS': '', 'DATA_INCLUSAO': '', 'REGIAO': '', });
lyr_IMOVEL_PRIVADO_URBANO99UNID_87.set('fieldImages', {'fid': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'BAIRRO': 'TextEdit', 'LOGRADOURO': 'TextEdit', 'PROCESSO-SEINFRA': 'TextEdit', 'PROCESSO_SMS': 'TextEdit', 'PROCESSO_MP': 'TextEdit', 'PROCESSO_SMSEG': 'TextEdit', 'OUTROS_PROCESSOS': 'TextEdit', 'DATA_INCLUSAO': 'DateTime', 'CLASSIFICACAO': '', });
lyr_IMOVEL_PRIVADO_URBANO99UNID_88.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'LOGRADOURO': '', 'CADASTRO_IMOBILIARIO': '', 'CLASSIFICACAO': '', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'PROCESSO_SEINFRA': '', 'PROCESSO_SMS': '', 'PROCESSO_MP': '', 'PROCESSO_SMSEG': '', 'COORDENADA_X': '', 'COORDENADA_Y': '', 'OUTROS_PROCESSOS': '', 'DATA_INCLUSAO': '', 'REGIAO': '', });
lyr_IMOVEL_PRIVADO_RURAL1UNID_89.set('fieldImages', {'fid': 'TextEdit', 'QUADRA': '', 'LOTE': '', 'CADASTRO_IMOBILIARIO': '', 'BAIRRO': '', 'LOGRADOURO': '', 'PROCESSO-SEINFRA': '', 'PROCESSO_SMS': '', 'PROCESSO_MP': '', 'PROCESSO_SMSEG': '', 'OUTROS_PROCESSOS': '', 'DATA_INCLUSAO': '', 'CLASSIFICACAO': '', });
lyr_IMOVEL_PRIVADO_RURAL1UNID_90.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'LOGRADOURO': '', 'CADASTRO_IMOBILIARIO': '', 'CLASSIFICACAO': '', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'PROCESSO_SEINFRA': '', 'PROCESSO_SMS': '', 'PROCESSO_MP': '', 'PROCESSO_SMSEG': '', 'COORDENADA_X': '', 'COORDENADA_Y': '', 'OUTROS_PROCESSOS': '', 'DATA_INCLUSAO': '', 'REGIAO': '', });
lyr_PARQUE_DOS_TRABALHADORES_91.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_DOS_TRABALHADORES_92.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_93.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_94.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_CAXAMBU_95.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_CAXAMBU_96.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_97.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_98.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_99.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_100.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_JARDIM_ZOOBOTANICO_101.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_JARDIM_ZOOBOTANICO_102.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_COMPLEXO_POLIESPORTIVO_103.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_COMPLEXO_POLIESPORTIVO_104.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_UBS_SANTA_TEREZINHA_105.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_UBS_SANTA_BARBARA_106.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_UBS_PERES_ELIAS_107.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_UBS_PARQUE_HORTO_108.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_UBS_JARDIM_PALMA_109.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_REVITALIZACAO_ESTACAO_FERROVIARIA_110.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_REFORMA_CRAS_OESTE_111.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_REFORMA_CRAS_NORTE_112.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_REFORCO_ESTRUTURAL_CHAMPAGNAT_113.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_RECAPEAMENTO_JARDIM_MARTINS_114.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_PRONTO_SOCORRO_ALVARO_AZZUZ_115.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_POLICLINICA_116.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_NOVO_NGA_117.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_118.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_ESCOLA_JOAO_LIPORONI_119.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_DRENAGEM_CORREGO_CUBATAO_120.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_DRENAGEM_CORREGO_BRAGRES_121.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_DRENAGEM_CANAL_JD_PALMEIRAS_122.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_CRECHE_SAMEL_PARK_123.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_CORPO_BAMBEIROS_124.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_CONTENCAO_VIARIA_125.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_CONSTRUCAO_CEPEL_SAO_JOSE_126.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_CONSTRUCAO_CEPEL_JD_CAMBUI_127.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_CONSTRUCAO_CAPS_INFANTIL_128.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_AREA_LAZER_PARQUE_ESMERALDA_129.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_AREA_LAZER_PARQUE_CONTINENTAL_130.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_AREA_LAZER_JARDIM_PORTINARI_131.set('fieldImages', {'fid': '', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGE_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_OBRAS_PUBLICAS29UNID_132.set('fieldImages', {'fid': 'TextEdit', 'OBRA': '', 'CONTRATO': '', 'EMPRESA_CONTRATADA': '', 'PORCENTAGEM_DE_EXECUCAO': '', 'INICIO_DA_OBRA': '', 'PRAZO_INICIAL': '', 'VALOR_DA_OBRA': '', });
lyr_REGULARIZADO_133.set('fieldImages', {'fid': 'TextEdit', 'PROCESSO': 'TextEdit', 'MODALIDADE': 'TextEdit', 'NOME_LOTEAMENTO': 'TextEdit', 'OBSERVACAO': 'TextEdit', 'MATRICULA': 'TextEdit', 'QUANT_LOTES': 'Range', 'AREA_M2': 'TextEdit', 'DECRETO_REURB': 'TextEdit', 'SITUACAO': 'TextEdit', });
lyr_REGULARIZADO9UNID_134.set('fieldImages', {'fid': 'TextEdit', 'PROCESSO': 'TextEdit', 'MODALIDADE': 'TextEdit', 'NOME_LOTEAMENTO': 'TextEdit', 'OBSERVACAO': 'TextEdit', 'MATRICULA': 'TextEdit', 'QUANT_LOTES': 'Range', 'AREA_M2': 'TextEdit', 'DECRETO_REURB': 'TextEdit', 'SITUACAO': 'TextEdit', });
lyr_Vivenna_135.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Vivenna_136.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaSoVicente_137.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaSoVicente_138.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaJardimSimes_139.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaJardimSimes_140.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaAlvorada_141.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaAlvorada_142.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaDiEspanha_143.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaDiEspanha_144.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaPucci_145.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaPucci_146.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaPiemonteII_147.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaPiemonteII_148.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaOlimpica_149.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaOlimpica_150.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaDoratta_151.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaDoratta_152.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaBella_153.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaBella_154.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Versalhes_155.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Versalhes_156.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TorontoResidence_157.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TorontoResidence_158.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TerraNova_159.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TerraNova_160.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Sonetto_161.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Sonetto_162.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_163.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_164.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_165.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_166.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_167.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_168.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ServidoRamal138kVFranca4Guanabara_169.set('fieldImages', {'fid': '', 'id': '', });
lyr_ServidoRamal138kVFranca4Guanabara_170.set('fieldImages', {'fid': '', 'id': '', });
lyr_SantaLina_171.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantaLina_172.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantAnita_173.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantAnita_174.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_RuaAlfioBenedini_175.set('fieldImages', {'fid': '', 'layer': '', });
lyr_RuaAlfioBenedini_176.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_RuaAlfioBenedini_177.set('fieldImages', {'fid': 'TextEdit', 'nome': '', });
lyr_ResidencialValeVerde_178.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialValeVerde_179.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialYasminTorres_180.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialYasminTorres_181.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialTellini_182.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialTellini_183.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosII_184.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosII_185.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosI_186.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosI_187.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaIns_188.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaIns_189.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaF_190.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaF_191.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadosOitis_192.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadosOitis_193.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadoSol_194.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadoSol_195.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegreII_196.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegreII_197.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegre_198.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegre_199.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPiamalim_200.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPiamalim_201.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialParquedosPassaros_202.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialParquedosPassaros_203.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuciII_204.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuciII_205.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuci_206.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuci_207.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMoradadoBosque_208.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMoradadoBosque_209.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarthaHelena_210.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarthaHelena_211.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarioTasso_212.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarioTasso_213.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarianaAlarcon_214.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarianaAlarcon_215.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJardimCanada_216.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJardimCanada_217.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJabuticabeiras_218.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJabuticabeiras_219.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGramadosII_220.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGramadosII_221.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGramados_222.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGramados_223.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGaia_224.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGaia_225.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialFrutuoso_226.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialFrutuoso_227.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialFaggioni_228.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialFaggioni_229.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialEssenza_230.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialEssenza_231.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialDomingosJardini_232.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialDomingosJardini_233.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialCintraAlves_234.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialCintraAlves_235.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialBoaVista_236.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialBoaVista_237.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAltodaFazenda_238.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAltodaFazenda_239.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAnaHelena_240.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAnaHelena_241.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ReservaAbaete_242.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ReservaAbaete_243.set('fieldImages', {'fid': '', 'layer': '', });
lyr_RecantoMeneghetti_244.set('fieldImages', {'fid': '', 'layer': '', });
lyr_RecantoMeneghetti_245.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Quadra18VilaExposio_246.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Quadra18VilaExposio_247.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ProlongamentoSamelPark_248.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ProlongamentoSamelPark_249.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueVillaLobos_250.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueVillaLobos_251.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquePalmeiraImperial_252.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquePalmeiraImperial_253.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueJacarand_254.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueJacarand_255.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueFlora_256.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueFlora_257.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosSabias_258.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosSabias_259.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosCoqueiros_260.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosCoqueiros_261.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueAlvorada_262.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueAlvorada_263.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParagonFaseII_264.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParagonFaseII_265.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Paragon_266.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Paragon_267.set('fieldImages', {'fid': '', 'layer': '', });
lyr_PalmeiraReal_268.set('fieldImages', {'fid': '', 'layer': '', });
lyr_PalmeiraReal_269.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadoVerdeII_270.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadoVerdeII_271.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadaMata_272.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadaMata_273.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Monti_274.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Monti_275.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MontBlancResidence_276.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MontBlancResidence_277.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MasterplanDespaschoal_278.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_MasterplanDespaschoal_279.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MasterplanDespaschoal_280.set('fieldImages', {'fid': '', 'Nome': '', });
lyr_MasteplanBildVitta_281.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_MasteplanBildVitta_282.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MasteplanBildVitta_283.set('fieldImages', {'fid': '', 'Nome': '', });
lyr_Loteamentolamo_284.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Loteamentolamo_285.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimStephani_286.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimStephani_287.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimPherola_288.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimPherola_289.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimNatal_290.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimNatal_291.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaLuiza_292.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaLuiza_293.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaAugusta_294.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaAugusta_295.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimHorizonte_296.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimHorizonte_297.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimFlora_298.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimFlora_299.set('fieldImages', {'fid': '', 'layer': '', });
lyr_IrineuZanetiII_300.set('fieldImages', {'fid': '', 'layer': '', });
lyr_IrineuZanetiII_301.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Infratcnica_302.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Infratcnica_303.set('fieldImages', {'fid': '', 'layer': '', });
lyr_HorizResidence_304.set('fieldImages', {'fid': '', 'layer': '', });
lyr_HorizResidence_305.set('fieldImages', {'fid': '', 'layer': '', });
lyr_GlebaNossaSenhoraAuxiliadora_306.set('fieldImages', {'fid': '', 'layer': '', });
lyr_GlebaNossaSenhoraAuxiliadora_307.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Ferracini_308.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Ferracini_309.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FrancaB6_310.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FrancaB6_311.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaProgresso_312.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaProgresso_313.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita2_314.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita2_315.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita_316.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita_317.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Essence_318.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Essence_319.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Elias_320.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Elias_321.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioSolNascente_322.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioSolNascente_323.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioRuadoSol_324.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioRuadoSol_325.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioResidencialHope_326.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioResidencialHope_327.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DiocesedeFranca_328.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DiocesedeFranca_329.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DaVinci_330.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DaVinci_331.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioIICityPetrpolis_332.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioIICityPetrpolis_333.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_334.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_335.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Colorado_336.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Colorado_337.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CidadeJardim_338.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CidadeJardim_339.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraOlaria_340.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraOlaria_341.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraBelaVista_342.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraBelaVista_343.set('fieldImages', {'fid': '', 'layer': '', });
lyr_BordadaMata_344.set('fieldImages', {'fid': '', 'layer': '', });
lyr_BordadaMata_345.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Arteris_346.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_Arteris_347.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Arizona_348.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Arizona_349.set('fieldImages', {'fid': '', 'layer': '', });
lyr_AbuDhabiParadiseResortResidence_350.set('fieldImages', {'fid': '', 'layer': '', });
lyr_AbuDhabiParadiseResortResidence_351.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EtapaAprovado43unid_352.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaDiretriz22unid_353.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaDefinitiva10unid_354.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaPrvia24unid_355.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_IRREGULAR_356.set('fieldImages', {'fid': 'TextEdit', 'PROCESSO': 'TextEdit', 'MODALIDADE': 'TextEdit', 'NOME_LOTEAMENTO': 'TextEdit', 'OBSERVACAO': 'TextEdit', 'MATRICULA': 'TextEdit', 'QUANT_LOTES': 'Range', 'AREA_M2': 'TextEdit', 'DECRETO_REURB': 'TextEdit', 'SITUACAO': 'TextEdit', });
lyr_IRREGULAR174UNID_357.set('fieldImages', {'fid': 'TextEdit', 'PROCESSO': 'TextEdit', 'MODALIDADE': 'TextEdit', 'NOME_LOTEAMENTO': 'TextEdit', 'OBSERVACAO': 'TextEdit', 'MATRICULA': 'TextEdit', 'QUANT_LOTES': 'Range', 'AREA_M2': 'TextEdit', 'DECRETO_REURB': 'TextEdit', 'SITUACAO': 'TextEdit', });
lyr_FBDS_RIOS_DUPLOS_358.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_FBDS_MASSAS_DAGUA_359.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_FBDS_APP_360.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_FBDS_NASCENTES_361.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_FBDS_RIOS_SIMPLES_362.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_CORPO_HIDRICO_CANAL_FECHADO088KM_363.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_CORPO_HIDRICO_CANAL_ABERTO1252KM_364.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_PARQUE_ZUMBI_DOS_PALMARES_365.set('fieldImages', {'fid': '', 'NOME': '', 'AREA_M2': '', });
lyr_ATERRO_DAS_MARITACAS_366.set('fieldImages', {'fid': '', 'NOME': '', 'AREA_M2': '', });
lyr_ATERRO_DAS_MARITACAS_ETAPA_3_367.set('fieldImages', {'fid': 'TextEdit', 'ID_POCO': 'TextEdit', 'TIPO_POCO': '', 'SITUACAO': '', 'EMPRESA': '', 'ANO': '', 'LOCAL': '', });
lyr_ATERRO_DAS_MARITACAS_ETAPA_2_368.set('fieldImages', {'fid': 'TextEdit', 'ID_POCO': '', 'TIPO_POCO': '', 'SITUACAO': '', 'EMPRESA': '', 'ANO': '', 'LOCAL': '', });
lyr_ATERRO_DAS_MARITACAS_ETAPA_1_369.set('fieldImages', {'fid': 'TextEdit', 'ID_POCO': '', 'TIPO_POCO': '', 'SITUACAO': '', 'EMPRESA': '', 'ANO': '', 'LOCAL': '', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_370.set('fieldImages', {'fid': '', 'NOME': '', 'AREA_M2': '', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_371.set('fieldImages', {'fid': 'TextEdit', 'ID_POCO': 'TextEdit', 'TIPO_POCO': 'TextEdit', 'SITUACAO': '', 'EMPRESA': '', 'ANO': '', 'LOCAL': '', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_372.set('fieldImages', {'fid': 'TextEdit', 'ID_POCO': 'TextEdit', 'TIPO_POCO': 'TextEdit', 'SITUACAO': '', 'EMPRESA': '', 'ANO': '', 'LOCAL': '', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_373.set('fieldImages', {'fid': 'TextEdit', 'ID_POCO': 'TextEdit', 'TIPO_POCO': 'TextEdit', 'SITUACAO': '', 'EMPRESA': '', 'ANO': '', 'LOCAL': '', });
lyr_AREA_B_DA_FAZENDA_MUNICIPAL_374.set('fieldImages', {'fid': '', 'NOME': '', 'AREA_M2': '', });
lyr_AREA_B_DA_FAZENDA_MUNICIPAL_375.set('fieldImages', {'fid': 'TextEdit', 'ID_POCO': '', 'TIPO_POCO': '', 'SITUACAO': '', 'EMPRESA': '', 'ANO': '', 'LOCAL': '', });
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
lyr_VOCOROCAS27UNID_471.set('fieldImages', {'fid': 'TextEdit', 'SITUACAO': 'TextEdit', 'REFERENCIA': 'TextEdit', 'PRIORIDADE': 'TextEdit', 'OBSERVACAO': 'TextEdit', });
lyr_LOCAIS_DE_DIFICIL_ACESSO12UNID_472.set('fieldImages', {'fid': 'TextEdit', 'LOCAL': 'TextEdit', });
lyr_CONTEINERES286UNID_473.set('fieldImages', {'fid': 'TextEdit', 'DESCRICAO': 'TextEdit', 'BAIRRO': 'TextEdit', });
lyr_ARVORES_IMUNE_AO_CORTE9UNID_474.set('fieldImages', {'fid': 'TextEdit', 'NOME_POPULAR': 'TextEdit', 'NOME_CIENTIFICO': 'TextEdit', 'LEGISLACAO': 'TextEdit', });
lyr_ACADEMIAS_AO_AR_LIVRE84UNID_475.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', 'LOCAL': 'TextEdit', 'BAIRRO': 'TextEdit', });
lyr_SERVICO_DE_SAUDE21UNID_476.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_RECICLAVEIS15UNID_477.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_PNEUS1UNID_478.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_PILHAS_E_BATERIAS17UNID_479.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_PERIGOSOS1UNID_480.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_OLEO_LUBRIFICANTE1UNID_481.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_OLEO_DE_COZINHA3UNID_482.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_MASSA_VERDE1UNID_483.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_MADEIRAS1UNID_484.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_LATAS_DE_TINTA2UNID_485.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_LAMPADAS4UNID_486.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_INSERVIVEIS4UNID_487.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_GESSO1UNID_488.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_EMBALAGENS_AGROTOXICO1UNID_489.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_ELETRONICOS3UNID_490.set('fieldImages', {'fid': '', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_COURO1UNID_491.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_CONSTRUCAO_CIVIL7UNID_492.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_CHAPAS_DE_RAIO_X1UNID_493.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
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
lyr_LOTEAMENTO_FECHADO146UNID70632440M_508.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_LOTE_EMDEF10UNID218783M_509.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_LOTE_EMDEF_510.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'DESCRICAO': '', 'DATA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', 'SUBCLASSE': '', });
lyr_LOTE_COM_EDIFICACAO20UNID508062M_511.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_LOTE_COM_EDIFICACAO_512.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'DESCRICAO': '', 'DATA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', 'SUBCLASSE': '', });
lyr_LOTE252UNID7530210M_513.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_LOTE_514.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'DESCRICAO': '', 'DATA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', 'SUBCLASSE': '', });
lyr_LEILAO_PROCESSO_7954202537196UNID3239123M_515.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_LEILAO_PROCESSO_7954202537_516.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'DESCRICAO': '', 'DATA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', 'SUBCLASSE': '', });
lyr_LEILAO_PROCESSO_2652520256922UNID352000M_517.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_LEILAO_PROCESSO_26525202569_518.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'DESCRICAO': '', 'DATA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', 'SUBCLASSE': '', });
lyr_LEILAO_PROCESSO_2198620254518UNID2092083M_519.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_LEILAO_PROCESSO_21986202545_520.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'DESCRICAO': '', 'DATA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', 'SUBCLASSE': '', });
lyr_LEILAO_HOMOLOGADO4UNID334770M_521.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_LEILAO_HOMOLOGADO_522.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'DESCRICAO': '', 'DATA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', 'SUBCLASSE': '', });
lyr_AREA_VERDE2013UNID835945972M_523.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_AREA_PATRIMONIAL69UNID121924073M_524.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_AREA_INSTITUCIONAL353UNID202425793M_525.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_AREA_DE_USO_ESPECIAL280UNID271349968M_526.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'BAIRRO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'DESCRICAO': 'TextEdit', 'AREA_M2': 'TextEdit', 'DATA_INCLUSAO': 'DateTime', 'STATUS': 'TextEdit', 'PROCESSO': 'TextEdit', });
lyr_APP145UNID220226604M_527.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
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
lyr_PROG_ADOTE_UMA_PRACA_546.set('fieldImages', {'fid': 'TextEdit', 'ADOTANTE': 'TextEdit', 'LOCAL': 'TextEdit', 'POSSUI_PLACA': 'TextEdit', 'DATA_CONTRATO': 'DateTime', 'BAIRRO': 'TextEdit', 'AREA_M2': 'TextEdit', 'RESPONSAVEL': 'TextEdit', });
lyr_RESPONSAVEL_EGNALDO220UNID21780618M_547.set('fieldImages', {'fid': 'TextEdit', 'ADOTANTE': 'TextEdit', 'LOCAL': 'TextEdit', 'POSSUI_PLACA': 'TextEdit', 'AREA_M2': 'TextEdit', 'RESPONSAVEL': 'TextEdit', 'DATA_CONTRATO': 'DateTime', 'BAIRRO': 'TextEdit', });
lyr_RESPONSAVEL_DILU171UNID17255710M_548.set('fieldImages', {'fid': 'TextEdit', 'ADOTANTE': 'TextEdit', 'LOCAL': 'TextEdit', 'POSSUI_PLACA': 'TextEdit', 'AREA_M2': 'TextEdit', 'RESPONSAVEL': 'TextEdit', 'DATA_CONTRATO': 'DateTime', 'BAIRRO': 'TextEdit', });
lyr_LIMITE_MUNICIPAL_3.set('fieldLabels', {'fid': 'hidden field', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_AREA_URBANA_4.set('fieldLabels', {'fid': 'hidden field', 'MUNICIPIO': 'no label', 'AREA_KM2': 'no label', });
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
lyr_SUB_MACROZONA_DE_OCUPACAO_RESTRITA_21.set('fieldLabels', {'fid': 'hidden field', 'TIPO_ZONA': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_SUB_MACROZONA_DE_OCUPACAO_PREFERENCIAL_22.set('fieldLabels', {'fid': 'hidden field', 'TIPO_ZONA': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_SUB_MACROZONA_DE_EXPANSAO_URBANA_23.set('fieldLabels', {'fid': 'hidden field', 'TIPO_ZONA': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_MACROZONA_DO_RIO_CANOAS_24.set('fieldLabels', {'fid': 'hidden field', 'TIPO_ZONA': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_EXPANSAO_URBANA_LC_324_2019_25.set('fieldLabels', {'fid': 'hidden field', 'TIPO_ZONA': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_EXPANSAO_URBANA_LC_235_2013_26.set('fieldLabels', {'fid': 'hidden field', 'TIPO_ZONA': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_EXPANSAO_URBANA_LC_140_2009_27.set('fieldLabels', {'fid': 'hidden field', 'TIPO_ZONA': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_EXPANSAO_URBANA_LC_050_2003_28.set('fieldLabels', {'fid': 'hidden field', 'TIPO_ZONA': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_AREAS_DAS_BACIAS_DOS_RIOS_CANOAS_E_POUSO_ALEGRE_29.set('fieldLabels', {'fid': 'hidden field', 'TIPO_ZONA': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_AREA_ESPECIAL_RESIDENCIAIS_UNIFAMILIARES_30.set('fieldLabels', {'fid': 'hidden field', 'TIPO_ZONA': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_AREA_ESPECIAL_LAZER_INTERESSE_TURISTICO_E_CULTURA_31.set('fieldLabels', {'fid': 'hidden field', 'TIPO_ZONA': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_AREA_ESPECIAL_INDUSTRIAL_E_LOGISTICA_32.set('fieldLabels', {'fid': 'hidden field', 'TIPO_ZONA': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_AREA_ESPECIAL_DE_INTERESSE_SOCIAL_33.set('fieldLabels', {'fid': 'hidden field', 'TIPO_ZONA': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_ZONA_SUL_VIA_EXPRESSA_EXISTENTE_34.set('fieldLabels', {'fid': 'hidden field', 'TIPO_SISTEMA': 'inline label - visible with data', 'CLASSE_VIARIA': 'inline label - visible with data', });
lyr_ZONA_SUL_DIRETRIZ_VIA_PARQUE_35.set('fieldLabels', {'fid': 'hidden field', 'TIPO_SISTEMA': 'inline label - visible with data', 'CLASSE_VIARIA': 'inline label - visible with data', });
lyr_ZONA_SUL_DIRETRIZ_COLETORA_36.set('fieldLabels', {'fid': 'hidden field', 'TIPO_SISTEMA': 'inline label - visible with data', 'CLASSE_VIARIA': 'inline label - visible with data', });
lyr_ZONA_SUL_DIRETRIZ_AVENIDA_37.set('fieldLabels', {'fid': 'hidden field', 'TIPO_SISTEMA': 'inline label - visible with data', 'CLASSE_VIARIA': 'inline label - visible with data', });
lyr_ZONA_SUL_AVENIDA_EXISTENTE_38.set('fieldLabels', {'fid': 'hidden field', 'TIPO_SISTEMA': 'inline label - visible with data', 'CLASSE_VIARIA': 'inline label - visible with data', });
lyr_SISTEMA_VIARIO_PRINCIPAL_39.set('fieldLabels', {'fid': 'hidden field', 'TIPO_SISTEMA': 'inline label - visible with data', 'CLASSE_VIARIA': 'inline label - visible with data', });
lyr_RODOVIAS_VIAS_ARTERIAIS_40.set('fieldLabels', {'fid': 'hidden field', 'TIPO_SISTEMA': 'inline label - visible with data', 'CLASSE_VIARIA': 'inline label - visible with data', });
lyr_RODOVIAS_41.set('fieldLabels', {'fid': 'hidden field', 'TIPO_SISTEMA': 'inline label - visible with data', 'CLASSE_VIARIA': 'inline label - visible with data', });
lyr_FAIXA_DE_DOMINIO_DER_SPA_397334_42.set('fieldLabels', {'fid': 'hidden field', 'DESCRICAO': 'inline label - visible with data', 'RODOVIA': 'inline label - visible with data', });
lyr_FAIXA_DE_DOMINIO_DER_SP_3452_43.set('fieldLabels', {'fid': 'hidden field', 'DESCRICAO': 'inline label - visible with data', 'RODOVIA': 'inline label - visible with data', });
lyr_FAIXA_DE_DOMINIO_DER_SP_3342_44.set('fieldLabels', {'fid': 'hidden field', 'DESCRICAO': 'inline label - visible with data', 'RODOVIA': 'inline label - visible with data', });
lyr_EXPANSAO_DO_SISTEMA_VIARIO_45.set('fieldLabels', {'fid': 'hidden field', 'TIPO_SISTEMA': 'inline label - visible with data', 'CLASSE_VIARIA': 'inline label - visible with data', });
lyr_VIGILANCIA_EM_SAUDE5UNID_46.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAUDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_UNIDADE_DE_URGENCIA_E_EMERGENCIA8UNID_47.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAUDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO14UNID_48.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAUDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_GESTAO_ADMINISTRATIVO3UNID_49.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAUDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_ATENCAO_PRIMARIA24UNID_50.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAUDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_TEATRO2UNID_51.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_SECRETARIA1UNID_52.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_QUADRA3UNID_53.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_PRACA2UNID_54.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_PISTA1UNID_55.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_PISCINA1UNID_56.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_PINACOTECA1UNID_57.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_PAVILHAO1UNID_58.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_PARQUE2UNID_59.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_MUSEU2UNID_60.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_GINASIO5UNID_61.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_ESTADIO1UNID_62.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_CONJUNTO4UNID_63.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_CEPEL12UNID_64.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_CENTRO4UNID_65.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_CASA1UNID_66.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_CAMPO26UNID_67.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_BIBLIOTECA1UNID_68.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_ARENA3UNID_69.set('fieldLabels', {'fid': 'hidden field', 'UNIDADE_MUNICIPAL': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'PROPRIO_MUNICIPAL': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_UNIVERSIDADE_ABERTA_DO_BRASIL1UNID_70.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_SETOR_DE_MERENDA1UNID_71.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_SECRETARIA_DE_EDUCACAO1UNID_72.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_ESPACO_DE_DIFUSAO_CIENTIFICA1UNID_73.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_ENSINO_FUNDAMENTAL3UNID_74.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_EJA3UNID_75.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_ED_INFANTIL_ENS_FUNDAMENTAL39UNID_76.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_EDUCACAO_INFANTIL9UNID_77.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_CRECHE_PRE_ESCOLA45UNID_78.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_CRECHE35UNID_79.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_CENTRO_DE_EDUCACAO_INTEGRADA1UNID_80.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_ALMOCHARIFADO_EDUCACAO1UNID_81.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_ALFABETIZACAO_DE_JOVENS_E_ADULTOS15UNID_82.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'REDE': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'UNIDADE_ESCOLAR': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'ATENDIMENTO': 'inline label - visible with data', 'TELEFONE': 'inline label - visible with data', });
lyr_RODOVIAS_MUNICIPAIS_83.set('fieldLabels', {'fid': 'hidden field', 'TIPO_VIA': 'inline label - visible with data', 'JUDISDICAO': 'inline label - visible with data', 'REVESTIMENTO': 'inline label - visible with data', 'NUM_PISTAS': 'inline label - visible with data', 'NUM_FAIXAS': 'inline label - visible with data', 'EXTENSAO': 'inline label - visible with data', 'NOME': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_RODOVIAS_ESTADUAIS_84.set('fieldLabels', {'fid': 'hidden field', 'TIPO_VIA': 'inline label - visible with data', 'JUDISDICAO': 'inline label - visible with data', 'REVESTIMENTO': 'inline label - visible with data', 'NUM_PISTAS': 'inline label - visible with data', 'NUM_FAIXAS': 'inline label - visible with data', 'EXTENSAO': 'inline label - visible with data', 'NOME': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_ESTRADAS_RURAIS_MUNICIPAIS_85.set('fieldLabels', {'fid': 'hidden field', 'TIPO_VIA': 'inline label - visible with data', 'JUDISDICAO': 'inline label - visible with data', 'REVESTIMENTO': 'inline label - visible with data', 'NUM_PISTAS': 'inline label - visible with data', 'NUM_FAIXAS': 'inline label - visible with data', 'EXTENSAO': 'inline label - visible with data', 'NOME': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', });
lyr_IMOVEL_PUBLICO125UNID_86.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'LOGRADOURO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CLASSIFICACAO': 'inline label - visible with data', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'PROCESSO_SEINFRA': 'inline label - visible with data', 'PROCESSO_SMS': 'inline label - visible with data', 'PROCESSO_MP': 'inline label - visible with data', 'PROCESSO_SMSEG': 'inline label - visible with data', 'COORDENADA_X': 'inline label - visible with data', 'COORDENADA_Y': 'inline label - visible with data', 'OUTROS_PROCESSOS': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', });
lyr_IMOVEL_PRIVADO_URBANO99UNID_87.set('fieldLabels', {'fid': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'LOGRADOURO': 'inline label - visible with data', 'PROCESSO-SEINFRA': 'inline label - visible with data', 'PROCESSO_SMS': 'inline label - visible with data', 'PROCESSO_MP': 'inline label - visible with data', 'PROCESSO_SMSEG': 'inline label - visible with data', 'OUTROS_PROCESSOS': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'CLASSIFICACAO': 'inline label - visible with data', });
lyr_IMOVEL_PRIVADO_URBANO99UNID_88.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'LOGRADOURO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CLASSIFICACAO': 'inline label - visible with data', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'PROCESSO_SEINFRA': 'inline label - visible with data', 'PROCESSO_SMS': 'inline label - visible with data', 'PROCESSO_MP': 'inline label - visible with data', 'PROCESSO_SMSEG': 'inline label - visible with data', 'COORDENADA_X': 'inline label - visible with data', 'COORDENADA_Y': 'inline label - visible with data', 'OUTROS_PROCESSOS': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', });
lyr_IMOVEL_PRIVADO_RURAL1UNID_89.set('fieldLabels', {'fid': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'LOGRADOURO': 'inline label - visible with data', 'PROCESSO-SEINFRA': 'inline label - visible with data', 'PROCESSO_SMS': 'inline label - visible with data', 'PROCESSO_MP': 'inline label - visible with data', 'PROCESSO_SMSEG': 'inline label - visible with data', 'OUTROS_PROCESSOS': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'CLASSIFICACAO': 'inline label - visible with data', });
lyr_IMOVEL_PRIVADO_RURAL1UNID_90.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'LOGRADOURO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CLASSIFICACAO': 'inline label - visible with data', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'PROCESSO_SEINFRA': 'inline label - visible with data', 'PROCESSO_SMS': 'inline label - visible with data', 'PROCESSO_MP': 'inline label - visible with data', 'PROCESSO_SMSEG': 'inline label - visible with data', 'COORDENADA_X': 'inline label - visible with data', 'COORDENADA_Y': 'inline label - visible with data', 'OUTROS_PROCESSOS': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', });
lyr_PARQUE_DOS_TRABALHADORES_91.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PARQUE_DOS_TRABALHADORES_92.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_93.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_94.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PARQUE_CAXAMBU_95.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PARQUE_CAXAMBU_96.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_97.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_98.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_99.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_100.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_JARDIM_ZOOBOTANICO_101.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_JARDIM_ZOOBOTANICO_102.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_COMPLEXO_POLIESPORTIVO_103.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_COMPLEXO_POLIESPORTIVO_104.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_UBS_SANTA_TEREZINHA_105.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_UBS_SANTA_BARBARA_106.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_UBS_PERES_ELIAS_107.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_UBS_PARQUE_HORTO_108.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_UBS_JARDIM_PALMA_109.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_REVITALIZACAO_ESTACAO_FERROVIARIA_110.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_REFORMA_CRAS_OESTE_111.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_REFORMA_CRAS_NORTE_112.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_REFORCO_ESTRUTURAL_CHAMPAGNAT_113.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_RECAPEAMENTO_JARDIM_MARTINS_114.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_PRONTO_SOCORRO_ALVARO_AZZUZ_115.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_POLICLINICA_116.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_NOVO_NGA_117.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_118.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_ESCOLA_JOAO_LIPORONI_119.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_DRENAGEM_CORREGO_CUBATAO_120.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_DRENAGEM_CORREGO_BRAGRES_121.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_DRENAGEM_CANAL_JD_PALMEIRAS_122.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_CRECHE_SAMEL_PARK_123.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_CORPO_BAMBEIROS_124.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_CONTENCAO_VIARIA_125.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_CONSTRUCAO_CEPEL_SAO_JOSE_126.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_CONSTRUCAO_CEPEL_JD_CAMBUI_127.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_CONSTRUCAO_CAPS_INFANTIL_128.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_AREA_LAZER_PARQUE_ESMERALDA_129.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_AREA_LAZER_PARQUE_CONTINENTAL_130.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_AREA_LAZER_JARDIM_PORTINARI_131.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGE_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_OBRAS_PUBLICAS29UNID_132.set('fieldLabels', {'fid': 'hidden field', 'OBRA': 'inline label - visible with data', 'CONTRATO': 'inline label - visible with data', 'EMPRESA_CONTRATADA': 'inline label - visible with data', 'PORCENTAGEM_DE_EXECUCAO': 'inline label - visible with data', 'INICIO_DA_OBRA': 'inline label - visible with data', 'PRAZO_INICIAL': 'inline label - visible with data', 'VALOR_DA_OBRA': 'inline label - visible with data', });
lyr_REGULARIZADO_133.set('fieldLabels', {'fid': 'hidden field', 'PROCESSO': 'inline label - visible with data', 'MODALIDADE': 'inline label - visible with data', 'NOME_LOTEAMENTO': 'inline label - visible with data', 'OBSERVACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'QUANT_LOTES': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DECRETO_REURB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', });
lyr_REGULARIZADO9UNID_134.set('fieldLabels', {'fid': 'hidden field', 'PROCESSO': 'inline label - visible with data', 'MODALIDADE': 'inline label - visible with data', 'NOME_LOTEAMENTO': 'inline label - visible with data', 'OBSERVACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'QUANT_LOTES': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DECRETO_REURB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', });
lyr_Vivenna_135.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Vivenna_136.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaSoVicente_137.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaSoVicente_138.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaJardimSimes_139.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaJardimSimes_140.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaAlvorada_141.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaAlvorada_142.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaDiEspanha_143.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaDiEspanha_144.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaPucci_145.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaPucci_146.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaPiemonteII_147.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaPiemonteII_148.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaOlimpica_149.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaOlimpica_150.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaDoratta_151.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaDoratta_152.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaBella_153.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaBella_154.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Versalhes_155.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Versalhes_156.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TorontoResidence_157.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TorontoResidence_158.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TerraNova_159.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TerraNova_160.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Sonetto_161.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Sonetto_162.set('fieldLabels', {'fid': 'hidden field', 'layer': 'no label', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_163.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_164.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_165.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_166.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_167.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_168.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ServidoRamal138kVFranca4Guanabara_169.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_ServidoRamal138kVFranca4Guanabara_170.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_SantaLina_171.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantaLina_172.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantAnita_173.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantAnita_174.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RuaAlfioBenedini_175.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RuaAlfioBenedini_176.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RuaAlfioBenedini_177.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', });
lyr_ResidencialValeVerde_178.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialValeVerde_179.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialYasminTorres_180.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialYasminTorres_181.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialTellini_182.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialTellini_183.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosII_184.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosII_185.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosI_186.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosI_187.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaIns_188.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaIns_189.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaF_190.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaF_191.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadosOitis_192.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadosOitis_193.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadoSol_194.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadoSol_195.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegreII_196.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegreII_197.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegre_198.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegre_199.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPiamalim_200.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPiamalim_201.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialParquedosPassaros_202.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialParquedosPassaros_203.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuciII_204.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuciII_205.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuci_206.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuci_207.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMoradadoBosque_208.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMoradadoBosque_209.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarthaHelena_210.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarthaHelena_211.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarioTasso_212.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarioTasso_213.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarianaAlarcon_214.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarianaAlarcon_215.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJardimCanada_216.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJardimCanada_217.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJabuticabeiras_218.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJabuticabeiras_219.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGramadosII_220.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGramadosII_221.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGramados_222.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGramados_223.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGaia_224.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGaia_225.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialFrutuoso_226.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialFrutuoso_227.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialFaggioni_228.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialFaggioni_229.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialEssenza_230.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialEssenza_231.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialDomingosJardini_232.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialDomingosJardini_233.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialCintraAlves_234.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialCintraAlves_235.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialBoaVista_236.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialBoaVista_237.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAltodaFazenda_238.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAltodaFazenda_239.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAnaHelena_240.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAnaHelena_241.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ReservaAbaete_242.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ReservaAbaete_243.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RecantoMeneghetti_244.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RecantoMeneghetti_245.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Quadra18VilaExposio_246.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Quadra18VilaExposio_247.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ProlongamentoSamelPark_248.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ProlongamentoSamelPark_249.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueVillaLobos_250.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueVillaLobos_251.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquePalmeiraImperial_252.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquePalmeiraImperial_253.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueJacarand_254.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueJacarand_255.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueFlora_256.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueFlora_257.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosSabias_258.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosSabias_259.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosCoqueiros_260.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosCoqueiros_261.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueAlvorada_262.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueAlvorada_263.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParagonFaseII_264.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParagonFaseII_265.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Paragon_266.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Paragon_267.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_PalmeiraReal_268.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_PalmeiraReal_269.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadoVerdeII_270.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadoVerdeII_271.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadaMata_272.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadaMata_273.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Monti_274.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Monti_275.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MontBlancResidence_276.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MontBlancResidence_277.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasterplanDespaschoal_278.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasterplanDespaschoal_279.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasterplanDespaschoal_280.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_MasteplanBildVitta_281.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasteplanBildVitta_282.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasteplanBildVitta_283.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_Loteamentolamo_284.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Loteamentolamo_285.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimStephani_286.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimStephani_287.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimPherola_288.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimPherola_289.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimNatal_290.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimNatal_291.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaLuiza_292.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaLuiza_293.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaAugusta_294.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaAugusta_295.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimHorizonte_296.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimHorizonte_297.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimFlora_298.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimFlora_299.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_IrineuZanetiII_300.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_IrineuZanetiII_301.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Infratcnica_302.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Infratcnica_303.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_HorizResidence_304.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_HorizResidence_305.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GlebaNossaSenhoraAuxiliadora_306.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GlebaNossaSenhoraAuxiliadora_307.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Ferracini_308.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Ferracini_309.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FrancaB6_310.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FrancaB6_311.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaProgresso_312.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaProgresso_313.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita2_314.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita2_315.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita_316.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita_317.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Essence_318.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Essence_319.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Elias_320.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Elias_321.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioSolNascente_322.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioSolNascente_323.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioRuadoSol_324.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioRuadoSol_325.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioResidencialHope_326.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioResidencialHope_327.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DiocesedeFranca_328.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DiocesedeFranca_329.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DaVinci_330.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DaVinci_331.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_332.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_333.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_334.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_335.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Colorado_336.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Colorado_337.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CidadeJardim_338.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CidadeJardim_339.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraOlaria_340.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraOlaria_341.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraBelaVista_342.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraBelaVista_343.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_BordadaMata_344.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_BordadaMata_345.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arteris_346.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arteris_347.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arizona_348.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arizona_349.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_AbuDhabiParadiseResortResidence_350.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_AbuDhabiParadiseResortResidence_351.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EtapaAprovado43unid_352.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaDiretriz22unid_353.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaDefinitiva10unid_354.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaPrvia24unid_355.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_IRREGULAR_356.set('fieldLabels', {'fid': 'hidden field', 'PROCESSO': 'inline label - visible with data', 'MODALIDADE': 'inline label - visible with data', 'NOME_LOTEAMENTO': 'inline label - visible with data', 'OBSERVACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'QUANT_LOTES': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DECRETO_REURB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', });
lyr_IRREGULAR174UNID_357.set('fieldLabels', {'fid': 'hidden field', 'PROCESSO': 'inline label - visible with data', 'MODALIDADE': 'inline label - visible with data', 'NOME_LOTEAMENTO': 'inline label - visible with data', 'OBSERVACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'QUANT_LOTES': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DECRETO_REURB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', });
lyr_FBDS_RIOS_DUPLOS_358.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_FBDS_MASSAS_DAGUA_359.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_FBDS_APP_360.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - always visible', });
lyr_FBDS_NASCENTES_361.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_FBDS_RIOS_SIMPLES_362.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_CORPO_HIDRICO_CANAL_FECHADO088KM_363.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_CORPO_HIDRICO_CANAL_ABERTO1252KM_364.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_PARQUE_ZUMBI_DOS_PALMARES_365.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_ATERRO_DAS_MARITACAS_366.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_ATERRO_DAS_MARITACAS_ETAPA_3_367.set('fieldLabels', {'fid': 'hidden field', 'ID_POCO': 'inline label - visible with data', 'TIPO_POCO': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'EMPRESA': 'inline label - visible with data', 'ANO': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', });
lyr_ATERRO_DAS_MARITACAS_ETAPA_2_368.set('fieldLabels', {'fid': 'hidden field', 'ID_POCO': 'inline label - visible with data', 'TIPO_POCO': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'EMPRESA': 'inline label - visible with data', 'ANO': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', });
lyr_ATERRO_DAS_MARITACAS_ETAPA_1_369.set('fieldLabels', {'fid': 'hidden field', 'ID_POCO': 'inline label - visible with data', 'TIPO_POCO': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'EMPRESA': 'inline label - visible with data', 'ANO': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_370.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_371.set('fieldLabels', {'fid': 'hidden field', 'ID_POCO': 'inline label - visible with data', 'TIPO_POCO': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'EMPRESA': 'inline label - visible with data', 'ANO': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_372.set('fieldLabels', {'fid': 'hidden field', 'ID_POCO': 'inline label - visible with data', 'TIPO_POCO': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'EMPRESA': 'inline label - visible with data', 'ANO': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_373.set('fieldLabels', {'fid': 'hidden field', 'ID_POCO': 'inline label - visible with data', 'TIPO_POCO': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'EMPRESA': 'inline label - visible with data', 'ANO': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', });
lyr_AREA_B_DA_FAZENDA_MUNICIPAL_374.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_B_DA_FAZENDA_MUNICIPAL_375.set('fieldLabels', {'fid': 'hidden field', 'ID_POCO': 'inline label - visible with data', 'TIPO_POCO': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'EMPRESA': 'inline label - visible with data', 'ANO': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', });
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
lyr_VOCOROCAS27UNID_471.set('fieldLabels', {'fid': 'hidden field', 'SITUACAO': 'inline label - visible with data', 'REFERENCIA': 'inline label - visible with data', 'PRIORIDADE': 'inline label - visible with data', 'OBSERVACAO': 'inline label - visible with data', });
lyr_LOCAIS_DE_DIFICIL_ACESSO12UNID_472.set('fieldLabels', {'fid': 'hidden field', 'LOCAL': 'inline label - visible with data', });
lyr_CONTEINERES286UNID_473.set('fieldLabels', {'fid': 'hidden field', 'DESCRICAO': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', });
lyr_ARVORES_IMUNE_AO_CORTE9UNID_474.set('fieldLabels', {'fid': 'hidden field', 'NOME_POPULAR': 'inline label - visible with data', 'NOME_CIENTIFICO': 'inline label - visible with data', 'LEGISLACAO': 'inline label - visible with data', });
lyr_ACADEMIAS_AO_AR_LIVRE84UNID_475.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', });
lyr_SERVICO_DE_SAUDE21UNID_476.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_RECICLAVEIS15UNID_477.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_PNEUS1UNID_478.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_PILHAS_E_BATERIAS17UNID_479.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_PERIGOSOS1UNID_480.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_OLEO_LUBRIFICANTE1UNID_481.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_OLEO_DE_COZINHA3UNID_482.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_MASSA_VERDE1UNID_483.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_MADEIRAS1UNID_484.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_LATAS_DE_TINTA2UNID_485.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_LAMPADAS4UNID_486.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_INSERVIVEIS4UNID_487.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_GESSO1UNID_488.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_EMBALAGENS_AGROTOXICO1UNID_489.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_ELETRONICOS3UNID_490.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_COURO1UNID_491.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_CONSTRUCAO_CIVIL7UNID_492.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_CHAPAS_DE_RAIO_X1UNID_493.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
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
lyr_LOTEAMENTO_FECHADO146UNID70632440M_508.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_LOTE_EMDEF10UNID218783M_509.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_LOTE_EMDEF_510.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', });
lyr_LOTE_COM_EDIFICACAO20UNID508062M_511.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_LOTE_COM_EDIFICACAO_512.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', });
lyr_LOTE252UNID7530210M_513.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_LOTE_514.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', });
lyr_LEILAO_PROCESSO_7954202537196UNID3239123M_515.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_LEILAO_PROCESSO_7954202537_516.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', });
lyr_LEILAO_PROCESSO_2652520256922UNID352000M_517.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_LEILAO_PROCESSO_26525202569_518.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', });
lyr_LEILAO_PROCESSO_2198620254518UNID2092083M_519.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_LEILAO_PROCESSO_21986202545_520.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', });
lyr_LEILAO_HOMOLOGADO4UNID334770M_521.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_LEILAO_HOMOLOGADO_522.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', });
lyr_AREA_VERDE2013UNID835945972M_523.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_AREA_PATRIMONIAL69UNID121924073M_524.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_AREA_INSTITUCIONAL353UNID202425793M_525.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_AREA_DE_USO_ESPECIAL280UNID271349968M_526.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_APP145UNID220226604M_527.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
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
lyr_PROG_ADOTE_UMA_PRACA_546.set('fieldLabels', {'fid': 'hidden field', 'ADOTANTE': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'POSSUI_PLACA': 'inline label - visible with data', 'DATA_CONTRATO': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'RESPONSAVEL': 'inline label - visible with data', });
lyr_RESPONSAVEL_EGNALDO220UNID21780618M_547.set('fieldLabels', {'fid': 'hidden field', 'ADOTANTE': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'POSSUI_PLACA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'RESPONSAVEL': 'inline label - visible with data', 'DATA_CONTRATO': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', });
lyr_RESPONSAVEL_DILU171UNID17255710M_548.set('fieldLabels', {'fid': 'hidden field', 'ADOTANTE': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'POSSUI_PLACA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'RESPONSAVEL': 'inline label - visible with data', 'DATA_CONTRATO': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', });
lyr_RESPONSAVEL_DILU171UNID17255710M_548.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});