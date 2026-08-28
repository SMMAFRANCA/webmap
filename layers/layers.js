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
var format_VIVENNA_135 = new ol.format.GeoJSON();
var features_VIVENNA_135 = format_VIVENNA_135.readFeatures(json_VIVENNA_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VIVENNA_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIVENNA_135.addFeatures(features_VIVENNA_135);
var lyr_VIVENNA_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIVENNA_135, 
                style: style_VIVENNA_135,
                popuplayertitle: 'VIVENNA',
                interactive: true,
    title: 'VIVENNA<br />\
    <img src="styles/legend/VIVENNA_135_0.png" /> APP<br />\
    <img src="styles/legend/VIVENNA_135_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VIVENNA_135_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VIVENNA_135_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VIVENNA_135_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/VIVENNA_135_5.png" /> PASSEIO<br />\
    <img src="styles/legend/VIVENNA_135_6.png" /> RUAS<br />\
    <img src="styles/legend/VIVENNA_135_7.png" /> VIELA<br />' });
var format_VITTA_SAO_VICENTE_136 = new ol.format.GeoJSON();
var features_VITTA_SAO_VICENTE_136 = format_VITTA_SAO_VICENTE_136.readFeatures(json_VITTA_SAO_VICENTE_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VITTA_SAO_VICENTE_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VITTA_SAO_VICENTE_136.addFeatures(features_VITTA_SAO_VICENTE_136);
var lyr_VITTA_SAO_VICENTE_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VITTA_SAO_VICENTE_136, 
                style: style_VITTA_SAO_VICENTE_136,
                popuplayertitle: 'VITTA_SAO_VICENTE',
                interactive: true,
    title: 'VITTA_SAO_VICENTE<br />\
    <img src="styles/legend/VITTA_SAO_VICENTE_136_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/VITTA_SAO_VICENTE_136_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/VITTA_SAO_VICENTE_136_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/VITTA_SAO_VICENTE_136_3.png" /> PASSEIO<br />\
    <img src="styles/legend/VITTA_SAO_VICENTE_136_4.png" /> RUAS<br />\
    <img src="styles/legend/VITTA_SAO_VICENTE_136_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_VITTA_JARDIM_SIMOES_137 = new ol.format.GeoJSON();
var features_VITTA_JARDIM_SIMOES_137 = format_VITTA_JARDIM_SIMOES_137.readFeatures(json_VITTA_JARDIM_SIMOES_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VITTA_JARDIM_SIMOES_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VITTA_JARDIM_SIMOES_137.addFeatures(features_VITTA_JARDIM_SIMOES_137);
var lyr_VITTA_JARDIM_SIMOES_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VITTA_JARDIM_SIMOES_137, 
                style: style_VITTA_JARDIM_SIMOES_137,
                popuplayertitle: 'VITTA_JARDIM_SIMOES',
                interactive: true,
    title: 'VITTA_JARDIM_SIMOES<br />\
    <img src="styles/legend/VITTA_JARDIM_SIMOES_137_0.png" /> APP<br />\
    <img src="styles/legend/VITTA_JARDIM_SIMOES_137_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VITTA_JARDIM_SIMOES_137_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/VITTA_JARDIM_SIMOES_137_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/VITTA_JARDIM_SIMOES_137_4.png" /> PASSEIO<br />\
    <img src="styles/legend/VITTA_JARDIM_SIMOES_137_5.png" /> RUAS<br />' });
var format_VITTA_ALVORADA_138 = new ol.format.GeoJSON();
var features_VITTA_ALVORADA_138 = format_VITTA_ALVORADA_138.readFeatures(json_VITTA_ALVORADA_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VITTA_ALVORADA_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VITTA_ALVORADA_138.addFeatures(features_VITTA_ALVORADA_138);
var lyr_VITTA_ALVORADA_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VITTA_ALVORADA_138, 
                style: style_VITTA_ALVORADA_138,
                popuplayertitle: 'VITTA_ALVORADA',
                interactive: true,
    title: 'VITTA_ALVORADA<br />\
    <img src="styles/legend/VITTA_ALVORADA_138_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VITTA_ALVORADA_138_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/VITTA_ALVORADA_138_2.png" /> LOTES<br />\
    <img src="styles/legend/VITTA_ALVORADA_138_3.png" /> PASSEIO<br />\
    <img src="styles/legend/VITTA_ALVORADA_138_4.png" /> RUAS<br />\
    <img src="styles/legend/VITTA_ALVORADA_138_5.png" /> VIELA<br />' });
var format_VILLA_PUCCI_139 = new ol.format.GeoJSON();
var features_VILLA_PUCCI_139 = format_VILLA_PUCCI_139.readFeatures(json_VILLA_PUCCI_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VILLA_PUCCI_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VILLA_PUCCI_139.addFeatures(features_VILLA_PUCCI_139);
var lyr_VILLA_PUCCI_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VILLA_PUCCI_139, 
                style: style_VILLA_PUCCI_139,
                popuplayertitle: 'VILLA_PUCCI',
                interactive: true,
    title: 'VILLA_PUCCI<br />\
    <img src="styles/legend/VILLA_PUCCI_139_0.png" /> APP<br />\
    <img src="styles/legend/VILLA_PUCCI_139_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VILLA_PUCCI_139_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VILLA_PUCCI_139_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/VILLA_PUCCI_139_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/VILLA_PUCCI_139_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VILLA_PUCCI_139_6.png" /> PASSEIO<br />\
    <img src="styles/legend/VILLA_PUCCI_139_7.png" /> RUAS<br />\
    <img src="styles/legend/VILLA_PUCCI_139_8.png" /> VIELA<br />\
    <img src="styles/legend/VILLA_PUCCI_139_9.png" /> LOTES RESIDENCIAIS<br />' });
var format_VILLA_DORATTA_140 = new ol.format.GeoJSON();
var features_VILLA_DORATTA_140 = format_VILLA_DORATTA_140.readFeatures(json_VILLA_DORATTA_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VILLA_DORATTA_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VILLA_DORATTA_140.addFeatures(features_VILLA_DORATTA_140);
var lyr_VILLA_DORATTA_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VILLA_DORATTA_140, 
                style: style_VILLA_DORATTA_140,
                popuplayertitle: 'VILLA_DORATTA',
                interactive: true,
    title: 'VILLA_DORATTA<br />\
    <img src="styles/legend/VILLA_DORATTA_140_0.png" /> APP<br />\
    <img src="styles/legend/VILLA_DORATTA_140_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VILLA_DORATTA_140_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VILLA_DORATTA_140_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/VILLA_DORATTA_140_4.png" /> LOTES<br />\
    <img src="styles/legend/VILLA_DORATTA_140_5.png" /> PASSEIO<br />\
    <img src="styles/legend/VILLA_DORATTA_140_6.png" /> RUAS<br />\
    <img src="styles/legend/VILLA_DORATTA_140_7.png" /> VAGAS DE ESTACIONAMENTO<br />\
    <img src="styles/legend/VILLA_DORATTA_140_8.png" /> VIELA<br />' });
var format_VILLA_BELLA_141 = new ol.format.GeoJSON();
var features_VILLA_BELLA_141 = format_VILLA_BELLA_141.readFeatures(json_VILLA_BELLA_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VILLA_BELLA_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VILLA_BELLA_141.addFeatures(features_VILLA_BELLA_141);
var lyr_VILLA_BELLA_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VILLA_BELLA_141, 
                style: style_VILLA_BELLA_141,
                popuplayertitle: 'VILLA_BELLA',
                interactive: true,
    title: 'VILLA_BELLA<br />\
    <img src="styles/legend/VILLA_BELLA_141_0.png" /> APP<br />\
    <img src="styles/legend/VILLA_BELLA_141_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VILLA_BELLA_141_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VILLA_BELLA_141_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/VILLA_BELLA_141_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VILLA_BELLA_141_5.png" /> PASSEIO<br />\
    <img src="styles/legend/VILLA_BELLA_141_6.png" /> RUAS<br />' });
var format_VILA_PIEMONTE_II_142 = new ol.format.GeoJSON();
var features_VILA_PIEMONTE_II_142 = format_VILA_PIEMONTE_II_142.readFeatures(json_VILA_PIEMONTE_II_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VILA_PIEMONTE_II_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VILA_PIEMONTE_II_142.addFeatures(features_VILA_PIEMONTE_II_142);
var lyr_VILA_PIEMONTE_II_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VILA_PIEMONTE_II_142, 
                style: style_VILA_PIEMONTE_II_142,
                popuplayertitle: 'VILA_PIEMONTE_II',
                interactive: true,
    title: 'VILA_PIEMONTE_II<br />\
    <img src="styles/legend/VILA_PIEMONTE_II_142_0.png" /> APP<br />\
    <img src="styles/legend/VILA_PIEMONTE_II_142_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VILA_PIEMONTE_II_142_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VILA_PIEMONTE_II_142_3.png" /> DESMEMBRAMENTO DOACAO DESAPROPRIACAO<br />\
    <img src="styles/legend/VILA_PIEMONTE_II_142_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/VILA_PIEMONTE_II_142_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VILA_PIEMONTE_II_142_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/VILA_PIEMONTE_II_142_7.png" /> PASSEIO<br />\
    <img src="styles/legend/VILA_PIEMONTE_II_142_8.png" /> RUAS<br />\
    <img src="styles/legend/VILA_PIEMONTE_II_142_9.png" /> VIELA<br />' });
var format_VILA_OLIMPICA_143 = new ol.format.GeoJSON();
var features_VILA_OLIMPICA_143 = format_VILA_OLIMPICA_143.readFeatures(json_VILA_OLIMPICA_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VILA_OLIMPICA_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VILA_OLIMPICA_143.addFeatures(features_VILA_OLIMPICA_143);
var lyr_VILA_OLIMPICA_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VILA_OLIMPICA_143, 
                style: style_VILA_OLIMPICA_143,
                popuplayertitle: 'VILA_OLIMPICA',
                interactive: true,
    title: 'VILA_OLIMPICA<br />\
    <img src="styles/legend/VILA_OLIMPICA_143_0.png" /> APP<br />\
    <img src="styles/legend/VILA_OLIMPICA_143_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VILA_OLIMPICA_143_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/VILA_OLIMPICA_143_3.png" /> LOTES<br />\
    <img src="styles/legend/VILA_OLIMPICA_143_4.png" /> PASSEIO<br />\
    <img src="styles/legend/VILA_OLIMPICA_143_5.png" /> RUAS<br />\
    <img src="styles/legend/VILA_OLIMPICA_143_6.png" /> VIELA<br />' });
var format_VILA_DI_ESPANHA_144 = new ol.format.GeoJSON();
var features_VILA_DI_ESPANHA_144 = format_VILA_DI_ESPANHA_144.readFeatures(json_VILA_DI_ESPANHA_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VILA_DI_ESPANHA_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VILA_DI_ESPANHA_144.addFeatures(features_VILA_DI_ESPANHA_144);
var lyr_VILA_DI_ESPANHA_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VILA_DI_ESPANHA_144, 
                style: style_VILA_DI_ESPANHA_144,
                popuplayertitle: 'VILA_DI_ESPANHA',
                interactive: true,
    title: 'VILA_DI_ESPANHA<br />\
    <img src="styles/legend/VILA_DI_ESPANHA_144_0.png" /> APP<br />\
    <img src="styles/legend/VILA_DI_ESPANHA_144_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VILA_DI_ESPANHA_144_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VILA_DI_ESPANHA_144_3.png" /> LOTES<br />\
    <img src="styles/legend/VILA_DI_ESPANHA_144_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VILA_DI_ESPANHA_144_5.png" /> PASSEIO<br />\
    <img src="styles/legend/VILA_DI_ESPANHA_144_6.png" /> RUAS<br />\
    <img src="styles/legend/VILA_DI_ESPANHA_144_7.png" /> VIELA<br />' });
var format_VERSALHES_145 = new ol.format.GeoJSON();
var features_VERSALHES_145 = format_VERSALHES_145.readFeatures(json_VERSALHES_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VERSALHES_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VERSALHES_145.addFeatures(features_VERSALHES_145);
var lyr_VERSALHES_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VERSALHES_145, 
                style: style_VERSALHES_145,
                popuplayertitle: 'VERSALHES',
                interactive: true,
    title: 'VERSALHES<br />\
    <img src="styles/legend/VERSALHES_145_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/VERSALHES_145_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/VERSALHES_145_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/VERSALHES_145_3.png" /> PASSEIO<br />\
    <img src="styles/legend/VERSALHES_145_4.png" /> RUAS<br />\
    <img src="styles/legend/VERSALHES_145_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_TORONTO_RESIDENCE_146 = new ol.format.GeoJSON();
var features_TORONTO_RESIDENCE_146 = format_TORONTO_RESIDENCE_146.readFeatures(json_TORONTO_RESIDENCE_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TORONTO_RESIDENCE_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TORONTO_RESIDENCE_146.addFeatures(features_TORONTO_RESIDENCE_146);
var lyr_TORONTO_RESIDENCE_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TORONTO_RESIDENCE_146, 
                style: style_TORONTO_RESIDENCE_146,
                popuplayertitle: 'TORONTO_RESIDENCE',
                interactive: true,
    title: 'TORONTO_RESIDENCE<br />\
    <img src="styles/legend/TORONTO_RESIDENCE_146_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/TORONTO_RESIDENCE_146_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/TORONTO_RESIDENCE_146_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/TORONTO_RESIDENCE_146_3.png" /> PASSEIO<br />\
    <img src="styles/legend/TORONTO_RESIDENCE_146_4.png" /> RUAS<br />\
    <img src="styles/legend/TORONTO_RESIDENCE_146_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_TERRA_NOVA_147 = new ol.format.GeoJSON();
var features_TERRA_NOVA_147 = format_TERRA_NOVA_147.readFeatures(json_TERRA_NOVA_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TERRA_NOVA_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TERRA_NOVA_147.addFeatures(features_TERRA_NOVA_147);
var lyr_TERRA_NOVA_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TERRA_NOVA_147, 
                style: style_TERRA_NOVA_147,
                popuplayertitle: 'TERRA_NOVA',
                interactive: true,
    title: 'TERRA_NOVA<br />\
    <img src="styles/legend/TERRA_NOVA_147_0.png" /> APP<br />\
    <img src="styles/legend/TERRA_NOVA_147_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/TERRA_NOVA_147_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/TERRA_NOVA_147_3.png" /> LOTES<br />\
    <img src="styles/legend/TERRA_NOVA_147_4.png" /> PASSEIO<br />\
    <img src="styles/legend/TERRA_NOVA_147_5.png" /> RUAS<br />' });
var format_SONETTO_148 = new ol.format.GeoJSON();
var features_SONETTO_148 = format_SONETTO_148.readFeatures(json_SONETTO_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SONETTO_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SONETTO_148.addFeatures(features_SONETTO_148);
var lyr_SONETTO_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SONETTO_148, 
                style: style_SONETTO_148,
                popuplayertitle: 'SONETTO',
                interactive: true,
    title: 'SONETTO<br />\
    <img src="styles/legend/SONETTO_148_0.png" /> EDIFICIO<br />\
    <img src="styles/legend/SONETTO_148_1.png" /> PATIO<br />' });
var format_SMART_CITY_EIXO_RESIDENCIAL_II_149 = new ol.format.GeoJSON();
var features_SMART_CITY_EIXO_RESIDENCIAL_II_149 = format_SMART_CITY_EIXO_RESIDENCIAL_II_149.readFeatures(json_SMART_CITY_EIXO_RESIDENCIAL_II_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMART_CITY_EIXO_RESIDENCIAL_II_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMART_CITY_EIXO_RESIDENCIAL_II_149.addFeatures(features_SMART_CITY_EIXO_RESIDENCIAL_II_149);
var lyr_SMART_CITY_EIXO_RESIDENCIAL_II_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMART_CITY_EIXO_RESIDENCIAL_II_149, 
                style: style_SMART_CITY_EIXO_RESIDENCIAL_II_149,
                popuplayertitle: 'SMART_CITY_EIXO_RESIDENCIAL_II',
                interactive: true,
    title: 'SMART_CITY_EIXO_RESIDENCIAL_II<br />\
    <img src="styles/legend/SMART_CITY_EIXO_RESIDENCIAL_II_149_0.png" /> APP<br />\
    <img src="styles/legend/SMART_CITY_EIXO_RESIDENCIAL_II_149_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMART_CITY_EIXO_RESIDENCIAL_II_149_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMART_CITY_EIXO_RESIDENCIAL_II_149_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMART_CITY_EIXO_RESIDENCIAL_II_149_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/SMART_CITY_EIXO_RESIDENCIAL_II_149_5.png" /> PASSEIO<br />\
    <img src="styles/legend/SMART_CITY_EIXO_RESIDENCIAL_II_149_6.png" /> RUAS<br />\
    <img src="styles/legend/SMART_CITY_EIXO_RESIDENCIAL_II_149_7.png" /> LOTES MISTOS<br />' });
var format_SMART_CITY_EIXO_RESIDENCIAL_I_150 = new ol.format.GeoJSON();
var features_SMART_CITY_EIXO_RESIDENCIAL_I_150 = format_SMART_CITY_EIXO_RESIDENCIAL_I_150.readFeatures(json_SMART_CITY_EIXO_RESIDENCIAL_I_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMART_CITY_EIXO_RESIDENCIAL_I_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMART_CITY_EIXO_RESIDENCIAL_I_150.addFeatures(features_SMART_CITY_EIXO_RESIDENCIAL_I_150);
var lyr_SMART_CITY_EIXO_RESIDENCIAL_I_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMART_CITY_EIXO_RESIDENCIAL_I_150, 
                style: style_SMART_CITY_EIXO_RESIDENCIAL_I_150,
                popuplayertitle: 'SMART_CITY_EIXO_RESIDENCIAL_I',
                interactive: true,
    title: 'SMART_CITY_EIXO_RESIDENCIAL_I<br />\
    <img src="styles/legend/SMART_CITY_EIXO_RESIDENCIAL_I_150_0.png" /> APP<br />\
    <img src="styles/legend/SMART_CITY_EIXO_RESIDENCIAL_I_150_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMART_CITY_EIXO_RESIDENCIAL_I_150_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMART_CITY_EIXO_RESIDENCIAL_I_150_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/SMART_CITY_EIXO_RESIDENCIAL_I_150_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMART_CITY_EIXO_RESIDENCIAL_I_150_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/SMART_CITY_EIXO_RESIDENCIAL_I_150_6.png" /> PASSEIO<br />\
    <img src="styles/legend/SMART_CITY_EIXO_RESIDENCIAL_I_150_7.png" /> RUAS<br />\
    <img src="styles/legend/SMART_CITY_EIXO_RESIDENCIAL_I_150_8.png" /> LOTES MISTOS<br />' });
var format_SMART_CITY_EIXO_EMPRESARIAL_151 = new ol.format.GeoJSON();
var features_SMART_CITY_EIXO_EMPRESARIAL_151 = format_SMART_CITY_EIXO_EMPRESARIAL_151.readFeatures(json_SMART_CITY_EIXO_EMPRESARIAL_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMART_CITY_EIXO_EMPRESARIAL_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMART_CITY_EIXO_EMPRESARIAL_151.addFeatures(features_SMART_CITY_EIXO_EMPRESARIAL_151);
var lyr_SMART_CITY_EIXO_EMPRESARIAL_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMART_CITY_EIXO_EMPRESARIAL_151, 
                style: style_SMART_CITY_EIXO_EMPRESARIAL_151,
                popuplayertitle: 'SMART_CITY_EIXO_EMPRESARIAL',
                interactive: true,
    title: 'SMART_CITY_EIXO_EMPRESARIAL<br />\
    <img src="styles/legend/SMART_CITY_EIXO_EMPRESARIAL_151_0.png" /> APP<br />\
    <img src="styles/legend/SMART_CITY_EIXO_EMPRESARIAL_151_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMART_CITY_EIXO_EMPRESARIAL_151_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMART_CITY_EIXO_EMPRESARIAL_151_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/SMART_CITY_EIXO_EMPRESARIAL_151_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMART_CITY_EIXO_EMPRESARIAL_151_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/SMART_CITY_EIXO_EMPRESARIAL_151_6.png" /> PASSEIO<br />\
    <img src="styles/legend/SMART_CITY_EIXO_EMPRESARIAL_151_7.png" /> RUAS<br />\
    <img src="styles/legend/SMART_CITY_EIXO_EMPRESARIAL_151_8.png" /> VIELA<br />' });
var format_SERVIDAO_GUANABARA_152 = new ol.format.GeoJSON();
var features_SERVIDAO_GUANABARA_152 = format_SERVIDAO_GUANABARA_152.readFeatures(json_SERVIDAO_GUANABARA_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SERVIDAO_GUANABARA_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVIDAO_GUANABARA_152.addFeatures(features_SERVIDAO_GUANABARA_152);
var lyr_SERVIDAO_GUANABARA_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SERVIDAO_GUANABARA_152, 
                style: style_SERVIDAO_GUANABARA_152,
                popuplayertitle: 'SERVIDAO_GUANABARA',
                interactive: true,
                title: '<img src="styles/legend/SERVIDAO_GUANABARA_152.png" /> SERVIDAO_GUANABARA'
            });
var format_SANTA_LINA_153 = new ol.format.GeoJSON();
var features_SANTA_LINA_153 = format_SANTA_LINA_153.readFeatures(json_SANTA_LINA_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SANTA_LINA_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SANTA_LINA_153.addFeatures(features_SANTA_LINA_153);
var lyr_SANTA_LINA_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SANTA_LINA_153, 
                style: style_SANTA_LINA_153,
                popuplayertitle: 'SANTA_LINA',
                interactive: true,
    title: 'SANTA_LINA<br />\
    <img src="styles/legend/SANTA_LINA_153_0.png" /> LOTES<br />\
    <img src="styles/legend/SANTA_LINA_153_1.png" /> PASSEIO<br />\
    <img src="styles/legend/SANTA_LINA_153_2.png" /> RUAS<br />' });
var format_SANT_ANITA_154 = new ol.format.GeoJSON();
var features_SANT_ANITA_154 = format_SANT_ANITA_154.readFeatures(json_SANT_ANITA_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SANT_ANITA_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SANT_ANITA_154.addFeatures(features_SANT_ANITA_154);
var lyr_SANT_ANITA_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SANT_ANITA_154, 
                style: style_SANT_ANITA_154,
                popuplayertitle: 'SANT_ANITA',
                interactive: true,
                title: '<img src="styles/legend/SANT_ANITA_154.png" /> SANT_ANITA'
            });
var format_RUA_ALFIO_BENEDINI_155 = new ol.format.GeoJSON();
var features_RUA_ALFIO_BENEDINI_155 = format_RUA_ALFIO_BENEDINI_155.readFeatures(json_RUA_ALFIO_BENEDINI_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RUA_ALFIO_BENEDINI_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUA_ALFIO_BENEDINI_155.addFeatures(features_RUA_ALFIO_BENEDINI_155);
var lyr_RUA_ALFIO_BENEDINI_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUA_ALFIO_BENEDINI_155, 
                style: style_RUA_ALFIO_BENEDINI_155,
                popuplayertitle: 'RUA_ALFIO_BENEDINI',
                interactive: true,
                title: '<img src="styles/legend/RUA_ALFIO_BENEDINI_155.png" /> RUA_ALFIO_BENEDINI'
            });
var format_RESIDENCIAL_YASMIN_TORRES_156 = new ol.format.GeoJSON();
var features_RESIDENCIAL_YASMIN_TORRES_156 = format_RESIDENCIAL_YASMIN_TORRES_156.readFeatures(json_RESIDENCIAL_YASMIN_TORRES_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_YASMIN_TORRES_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_YASMIN_TORRES_156.addFeatures(features_RESIDENCIAL_YASMIN_TORRES_156);
var lyr_RESIDENCIAL_YASMIN_TORRES_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_YASMIN_TORRES_156, 
                style: style_RESIDENCIAL_YASMIN_TORRES_156,
                popuplayertitle: 'RESIDENCIAL_YASMIN_TORRES',
                interactive: true,
    title: 'RESIDENCIAL_YASMIN_TORRES<br />\
    <img src="styles/legend/RESIDENCIAL_YASMIN_TORRES_156_0.png" /> EDIFICIO<br />\
    <img src="styles/legend/RESIDENCIAL_YASMIN_TORRES_156_1.png" /> PATIO<br />' });
var format_RESIDENCIAL_VALE_VERDE_157 = new ol.format.GeoJSON();
var features_RESIDENCIAL_VALE_VERDE_157 = format_RESIDENCIAL_VALE_VERDE_157.readFeatures(json_RESIDENCIAL_VALE_VERDE_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_VALE_VERDE_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_VALE_VERDE_157.addFeatures(features_RESIDENCIAL_VALE_VERDE_157);
var lyr_RESIDENCIAL_VALE_VERDE_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_VALE_VERDE_157, 
                style: style_RESIDENCIAL_VALE_VERDE_157,
                popuplayertitle: 'RESIDENCIAL_VALE_VERDE',
                interactive: true,
    title: 'RESIDENCIAL_VALE_VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_VALE_VERDE_157_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_VALE_VERDE_157_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_VALE_VERDE_157_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_VALE_VERDE_157_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/RESIDENCIAL_VALE_VERDE_157_4.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_VALE_VERDE_157_5.png" /> RUAS<br />' });
var format_RESIDENCIAL_TELLINI_158 = new ol.format.GeoJSON();
var features_RESIDENCIAL_TELLINI_158 = format_RESIDENCIAL_TELLINI_158.readFeatures(json_RESIDENCIAL_TELLINI_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_TELLINI_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_TELLINI_158.addFeatures(features_RESIDENCIAL_TELLINI_158);
var lyr_RESIDENCIAL_TELLINI_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_TELLINI_158, 
                style: style_RESIDENCIAL_TELLINI_158,
                popuplayertitle: 'RESIDENCIAL_TELLINI',
                interactive: true,
    title: 'RESIDENCIAL_TELLINI<br />\
    <img src="styles/legend/RESIDENCIAL_TELLINI_158_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_TELLINI_158_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_TELLINI_158_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_TELLINI_158_3.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_TELLINI_158_4.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_TELLINI_158_5.png" /> RUAS<br />\
    <img src="styles/legend/RESIDENCIAL_TELLINI_158_6.png" /> VIELA<br />' });
var format_RESIDENCIAL_SAO_CARLOS_II_159 = new ol.format.GeoJSON();
var features_RESIDENCIAL_SAO_CARLOS_II_159 = format_RESIDENCIAL_SAO_CARLOS_II_159.readFeatures(json_RESIDENCIAL_SAO_CARLOS_II_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_SAO_CARLOS_II_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_SAO_CARLOS_II_159.addFeatures(features_RESIDENCIAL_SAO_CARLOS_II_159);
var lyr_RESIDENCIAL_SAO_CARLOS_II_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_SAO_CARLOS_II_159, 
                style: style_RESIDENCIAL_SAO_CARLOS_II_159,
                popuplayertitle: 'RESIDENCIAL_SAO_CARLOS_II',
                interactive: true,
    title: 'RESIDENCIAL_SAO_CARLOS_II<br />\
    <img src="styles/legend/RESIDENCIAL_SAO_CARLOS_II_159_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_SAO_CARLOS_II_159_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_SAO_CARLOS_II_159_2.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/RESIDENCIAL_SAO_CARLOS_II_159_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/RESIDENCIAL_SAO_CARLOS_II_159_4.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_SAO_CARLOS_II_159_5.png" /> RUAS<br />' });
var format_RESIDENCIAL_SAO_CARLOS_I_160 = new ol.format.GeoJSON();
var features_RESIDENCIAL_SAO_CARLOS_I_160 = format_RESIDENCIAL_SAO_CARLOS_I_160.readFeatures(json_RESIDENCIAL_SAO_CARLOS_I_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_SAO_CARLOS_I_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_SAO_CARLOS_I_160.addFeatures(features_RESIDENCIAL_SAO_CARLOS_I_160);
var lyr_RESIDENCIAL_SAO_CARLOS_I_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_SAO_CARLOS_I_160, 
                style: style_RESIDENCIAL_SAO_CARLOS_I_160,
                popuplayertitle: 'RESIDENCIAL_SAO_CARLOS_I',
                interactive: true,
    title: 'RESIDENCIAL_SAO_CARLOS_I<br />\
    <img src="styles/legend/RESIDENCIAL_SAO_CARLOS_I_160_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_SAO_CARLOS_I_160_1.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/RESIDENCIAL_SAO_CARLOS_I_160_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_SAO_CARLOS_I_160_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/RESIDENCIAL_SAO_CARLOS_I_160_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/RESIDENCIAL_SAO_CARLOS_I_160_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/RESIDENCIAL_SAO_CARLOS_I_160_6.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_SAO_CARLOS_I_160_7.png" /> RUAS<br />\
    <img src="styles/legend/RESIDENCIAL_SAO_CARLOS_I_160_8.png" /> VIELA<br />' });
var format_RESIDENCIAL_SANTA_INES_161 = new ol.format.GeoJSON();
var features_RESIDENCIAL_SANTA_INES_161 = format_RESIDENCIAL_SANTA_INES_161.readFeatures(json_RESIDENCIAL_SANTA_INES_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_SANTA_INES_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_SANTA_INES_161.addFeatures(features_RESIDENCIAL_SANTA_INES_161);
var lyr_RESIDENCIAL_SANTA_INES_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_SANTA_INES_161, 
                style: style_RESIDENCIAL_SANTA_INES_161,
                popuplayertitle: 'RESIDENCIAL_SANTA_INES',
                interactive: true,
    title: 'RESIDENCIAL_SANTA_INES<br />\
    <img src="styles/legend/RESIDENCIAL_SANTA_INES_161_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_SANTA_INES_161_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/RESIDENCIAL_SANTA_INES_161_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_SANTA_INES_161_3.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_SANTA_INES_161_4.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_SANTA_INES_161_5.png" /> RUAS<br />' });
var format_RESIDENCIAL_SANTA_FE_162 = new ol.format.GeoJSON();
var features_RESIDENCIAL_SANTA_FE_162 = format_RESIDENCIAL_SANTA_FE_162.readFeatures(json_RESIDENCIAL_SANTA_FE_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_SANTA_FE_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_SANTA_FE_162.addFeatures(features_RESIDENCIAL_SANTA_FE_162);
var lyr_RESIDENCIAL_SANTA_FE_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_SANTA_FE_162, 
                style: style_RESIDENCIAL_SANTA_FE_162,
                popuplayertitle: 'RESIDENCIAL_SANTA_FE',
                interactive: true,
    title: 'RESIDENCIAL_SANTA_FE<br />\
    <img src="styles/legend/RESIDENCIAL_SANTA_FE_162_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_SANTA_FE_162_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_SANTA_FE_162_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_SANTA_FE_162_3.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_SANTA_FE_162_4.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_SANTA_FE_162_5.png" /> RUAS<br />' });
var format_RESIDENCIAL_QUINTA_DOS_OITIS_163 = new ol.format.GeoJSON();
var features_RESIDENCIAL_QUINTA_DOS_OITIS_163 = format_RESIDENCIAL_QUINTA_DOS_OITIS_163.readFeatures(json_RESIDENCIAL_QUINTA_DOS_OITIS_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_QUINTA_DOS_OITIS_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_QUINTA_DOS_OITIS_163.addFeatures(features_RESIDENCIAL_QUINTA_DOS_OITIS_163);
var lyr_RESIDENCIAL_QUINTA_DOS_OITIS_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_QUINTA_DOS_OITIS_163, 
                style: style_RESIDENCIAL_QUINTA_DOS_OITIS_163,
                popuplayertitle: 'RESIDENCIAL_QUINTA_DOS_OITIS',
                interactive: true,
    title: 'RESIDENCIAL_QUINTA_DOS_OITIS<br />\
    <img src="styles/legend/RESIDENCIAL_QUINTA_DOS_OITIS_163_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_QUINTA_DOS_OITIS_163_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_QUINTA_DOS_OITIS_163_2.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_QUINTA_DOS_OITIS_163_3.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_QUINTA_DOS_OITIS_163_4.png" /> RUAS<br />\
    <img src="styles/legend/RESIDENCIAL_QUINTA_DOS_OITIS_163_5.png" /> AREA LAZER<br />\
    <img src="styles/legend/RESIDENCIAL_QUINTA_DOS_OITIS_163_6.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_QUINTA_DOS_OITIS_163_7.png" /> AREA NON EDIFICANDI<br />' });
var format_RESIDENCIAL_QUINTA_DO_SOL_164 = new ol.format.GeoJSON();
var features_RESIDENCIAL_QUINTA_DO_SOL_164 = format_RESIDENCIAL_QUINTA_DO_SOL_164.readFeatures(json_RESIDENCIAL_QUINTA_DO_SOL_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_QUINTA_DO_SOL_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_QUINTA_DO_SOL_164.addFeatures(features_RESIDENCIAL_QUINTA_DO_SOL_164);
var lyr_RESIDENCIAL_QUINTA_DO_SOL_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_QUINTA_DO_SOL_164, 
                style: style_RESIDENCIAL_QUINTA_DO_SOL_164,
                popuplayertitle: 'RESIDENCIAL_QUINTA_DO_SOL',
                interactive: true,
    title: 'RESIDENCIAL_QUINTA_DO_SOL<br />\
    <img src="styles/legend/RESIDENCIAL_QUINTA_DO_SOL_164_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_QUINTA_DO_SOL_164_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_QUINTA_DO_SOL_164_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/RESIDENCIAL_QUINTA_DO_SOL_164_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_QUINTA_DO_SOL_164_4.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_QUINTA_DO_SOL_164_5.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_QUINTA_DO_SOL_164_6.png" /> RUAS<br />' });
var format_RESIDENCIAL_POUSO_ALEGRE_II_165 = new ol.format.GeoJSON();
var features_RESIDENCIAL_POUSO_ALEGRE_II_165 = format_RESIDENCIAL_POUSO_ALEGRE_II_165.readFeatures(json_RESIDENCIAL_POUSO_ALEGRE_II_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_POUSO_ALEGRE_II_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_POUSO_ALEGRE_II_165.addFeatures(features_RESIDENCIAL_POUSO_ALEGRE_II_165);
var lyr_RESIDENCIAL_POUSO_ALEGRE_II_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_POUSO_ALEGRE_II_165, 
                style: style_RESIDENCIAL_POUSO_ALEGRE_II_165,
                popuplayertitle: 'RESIDENCIAL_POUSO_ALEGRE_II',
                interactive: true,
    title: 'RESIDENCIAL_POUSO_ALEGRE_II<br />\
    <img src="styles/legend/RESIDENCIAL_POUSO_ALEGRE_II_165_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_POUSO_ALEGRE_II_165_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_POUSO_ALEGRE_II_165_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/RESIDENCIAL_POUSO_ALEGRE_II_165_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_POUSO_ALEGRE_II_165_4.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_POUSO_ALEGRE_II_165_5.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_POUSO_ALEGRE_II_165_6.png" /> RUAS<br />\
    <img src="styles/legend/RESIDENCIAL_POUSO_ALEGRE_II_165_7.png" /> SERVIDAO<br />' });
var format_RESIDENCIAL_POUSO_ALEGRE_166 = new ol.format.GeoJSON();
var features_RESIDENCIAL_POUSO_ALEGRE_166 = format_RESIDENCIAL_POUSO_ALEGRE_166.readFeatures(json_RESIDENCIAL_POUSO_ALEGRE_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_POUSO_ALEGRE_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_POUSO_ALEGRE_166.addFeatures(features_RESIDENCIAL_POUSO_ALEGRE_166);
var lyr_RESIDENCIAL_POUSO_ALEGRE_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_POUSO_ALEGRE_166, 
                style: style_RESIDENCIAL_POUSO_ALEGRE_166,
                popuplayertitle: 'RESIDENCIAL_POUSO_ALEGRE',
                interactive: true,
    title: 'RESIDENCIAL_POUSO_ALEGRE<br />\
    <img src="styles/legend/RESIDENCIAL_POUSO_ALEGRE_166_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_POUSO_ALEGRE_166_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_POUSO_ALEGRE_166_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_POUSO_ALEGRE_166_3.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_POUSO_ALEGRE_166_4.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_POUSO_ALEGRE_166_5.png" /> RUAS<br />\
    <img src="styles/legend/RESIDENCIAL_POUSO_ALEGRE_166_6.png" /> SERVIDAO<br />\
    <img src="styles/legend/RESIDENCIAL_POUSO_ALEGRE_166_7.png" /> VIELA<br />' });
var format_RESIDENCIAL_PIAMALIM_167 = new ol.format.GeoJSON();
var features_RESIDENCIAL_PIAMALIM_167 = format_RESIDENCIAL_PIAMALIM_167.readFeatures(json_RESIDENCIAL_PIAMALIM_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_PIAMALIM_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_PIAMALIM_167.addFeatures(features_RESIDENCIAL_PIAMALIM_167);
var lyr_RESIDENCIAL_PIAMALIM_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_PIAMALIM_167, 
                style: style_RESIDENCIAL_PIAMALIM_167,
                popuplayertitle: 'RESIDENCIAL_PIAMALIM',
                interactive: true,
    title: 'RESIDENCIAL_PIAMALIM<br />\
    <img src="styles/legend/RESIDENCIAL_PIAMALIM_167_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_PIAMALIM_167_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_PIAMALIM_167_2.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_PIAMALIM_167_3.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_PIAMALIM_167_4.png" /> RUAS<br />' });
var format_RESIDENCIAL_PARQUE_DOS_PASSAROS_168 = new ol.format.GeoJSON();
var features_RESIDENCIAL_PARQUE_DOS_PASSAROS_168 = format_RESIDENCIAL_PARQUE_DOS_PASSAROS_168.readFeatures(json_RESIDENCIAL_PARQUE_DOS_PASSAROS_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_PARQUE_DOS_PASSAROS_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_PARQUE_DOS_PASSAROS_168.addFeatures(features_RESIDENCIAL_PARQUE_DOS_PASSAROS_168);
var lyr_RESIDENCIAL_PARQUE_DOS_PASSAROS_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_PARQUE_DOS_PASSAROS_168, 
                style: style_RESIDENCIAL_PARQUE_DOS_PASSAROS_168,
                popuplayertitle: 'RESIDENCIAL_PARQUE_DOS_PASSAROS',
                interactive: true,
    title: 'RESIDENCIAL_PARQUE_DOS_PASSAROS<br />\
    <img src="styles/legend/RESIDENCIAL_PARQUE_DOS_PASSAROS_168_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_PARQUE_DOS_PASSAROS_168_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/RESIDENCIAL_PARQUE_DOS_PASSAROS_168_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/RESIDENCIAL_PARQUE_DOS_PASSAROS_168_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_PARQUE_DOS_PASSAROS_168_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/RESIDENCIAL_PARQUE_DOS_PASSAROS_168_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/RESIDENCIAL_PARQUE_DOS_PASSAROS_168_6.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_PARQUE_DOS_PASSAROS_168_7.png" /> RUAS<br />\
    <img src="styles/legend/RESIDENCIAL_PARQUE_DOS_PASSAROS_168_8.png" /> SERVIDAO<br />\
    <img src="styles/legend/RESIDENCIAL_PARQUE_DOS_PASSAROS_168_9.png" /> VIELA<br />' });
var format_RESIDENCIAL_NAIR_RETUCI_II_169 = new ol.format.GeoJSON();
var features_RESIDENCIAL_NAIR_RETUCI_II_169 = format_RESIDENCIAL_NAIR_RETUCI_II_169.readFeatures(json_RESIDENCIAL_NAIR_RETUCI_II_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_NAIR_RETUCI_II_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_NAIR_RETUCI_II_169.addFeatures(features_RESIDENCIAL_NAIR_RETUCI_II_169);
var lyr_RESIDENCIAL_NAIR_RETUCI_II_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_NAIR_RETUCI_II_169, 
                style: style_RESIDENCIAL_NAIR_RETUCI_II_169,
                popuplayertitle: 'RESIDENCIAL_NAIR_RETUCI_II',
                interactive: true,
    title: 'RESIDENCIAL_NAIR_RETUCI_II<br />\
    <img src="styles/legend/RESIDENCIAL_NAIR_RETUCI_II_169_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_NAIR_RETUCI_II_169_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_NAIR_RETUCI_II_169_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/RESIDENCIAL_NAIR_RETUCI_II_169_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_NAIR_RETUCI_II_169_4.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_NAIR_RETUCI_II_169_5.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_NAIR_RETUCI_II_169_6.png" /> RUAS<br />' });
var format_RESIDENCIAL_NAIR_RETUCI_170 = new ol.format.GeoJSON();
var features_RESIDENCIAL_NAIR_RETUCI_170 = format_RESIDENCIAL_NAIR_RETUCI_170.readFeatures(json_RESIDENCIAL_NAIR_RETUCI_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_NAIR_RETUCI_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_NAIR_RETUCI_170.addFeatures(features_RESIDENCIAL_NAIR_RETUCI_170);
var lyr_RESIDENCIAL_NAIR_RETUCI_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_NAIR_RETUCI_170, 
                style: style_RESIDENCIAL_NAIR_RETUCI_170,
                popuplayertitle: 'RESIDENCIAL_NAIR_RETUCI',
                interactive: true,
    title: 'RESIDENCIAL_NAIR_RETUCI<br />\
    <img src="styles/legend/RESIDENCIAL_NAIR_RETUCI_170_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_NAIR_RETUCI_170_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_NAIR_RETUCI_170_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_NAIR_RETUCI_170_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/RESIDENCIAL_NAIR_RETUCI_170_4.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_NAIR_RETUCI_170_5.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_NAIR_RETUCI_170_6.png" /> RUAS<br />\
    <img src="styles/legend/RESIDENCIAL_NAIR_RETUCI_170_7.png" /> VIELA<br />' });
var format_RESIDENCIAL_MORADA_DO_BOSQUE_171 = new ol.format.GeoJSON();
var features_RESIDENCIAL_MORADA_DO_BOSQUE_171 = format_RESIDENCIAL_MORADA_DO_BOSQUE_171.readFeatures(json_RESIDENCIAL_MORADA_DO_BOSQUE_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_MORADA_DO_BOSQUE_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_MORADA_DO_BOSQUE_171.addFeatures(features_RESIDENCIAL_MORADA_DO_BOSQUE_171);
var lyr_RESIDENCIAL_MORADA_DO_BOSQUE_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_MORADA_DO_BOSQUE_171, 
                style: style_RESIDENCIAL_MORADA_DO_BOSQUE_171,
                popuplayertitle: 'RESIDENCIAL_MORADA_DO_BOSQUE',
                interactive: true,
    title: 'RESIDENCIAL_MORADA_DO_BOSQUE<br />\
    <img src="styles/legend/RESIDENCIAL_MORADA_DO_BOSQUE_171_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_MORADA_DO_BOSQUE_171_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_MORADA_DO_BOSQUE_171_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/RESIDENCIAL_MORADA_DO_BOSQUE_171_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/RESIDENCIAL_MORADA_DO_BOSQUE_171_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/RESIDENCIAL_MORADA_DO_BOSQUE_171_5.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_MORADA_DO_BOSQUE_171_6.png" /> RUAS<br />' });
var format_RESIDENCIAL_MARTHA_HELENA_172 = new ol.format.GeoJSON();
var features_RESIDENCIAL_MARTHA_HELENA_172 = format_RESIDENCIAL_MARTHA_HELENA_172.readFeatures(json_RESIDENCIAL_MARTHA_HELENA_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_MARTHA_HELENA_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_MARTHA_HELENA_172.addFeatures(features_RESIDENCIAL_MARTHA_HELENA_172);
var lyr_RESIDENCIAL_MARTHA_HELENA_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_MARTHA_HELENA_172, 
                style: style_RESIDENCIAL_MARTHA_HELENA_172,
                popuplayertitle: 'RESIDENCIAL_MARTHA_HELENA',
                interactive: true,
    title: 'RESIDENCIAL_MARTHA_HELENA<br />\
    <img src="styles/legend/RESIDENCIAL_MARTHA_HELENA_172_0.png" /> EDIFICIO<br />\
    <img src="styles/legend/RESIDENCIAL_MARTHA_HELENA_172_1.png" /> PATIO<br />' });
var format_RESIDENCIAL_MARIO_TASSO_173 = new ol.format.GeoJSON();
var features_RESIDENCIAL_MARIO_TASSO_173 = format_RESIDENCIAL_MARIO_TASSO_173.readFeatures(json_RESIDENCIAL_MARIO_TASSO_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_MARIO_TASSO_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_MARIO_TASSO_173.addFeatures(features_RESIDENCIAL_MARIO_TASSO_173);
var lyr_RESIDENCIAL_MARIO_TASSO_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_MARIO_TASSO_173, 
                style: style_RESIDENCIAL_MARIO_TASSO_173,
                popuplayertitle: 'RESIDENCIAL_MARIO_TASSO',
                interactive: true,
    title: 'RESIDENCIAL_MARIO_TASSO<br />\
    <img src="styles/legend/RESIDENCIAL_MARIO_TASSO_173_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_MARIO_TASSO_173_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_MARIO_TASSO_173_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_MARIO_TASSO_173_3.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_MARIO_TASSO_173_4.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_MARIO_TASSO_173_5.png" /> RUAS<br />' });
var format_RESIDENCIAL_MARIANA_ALARCON_174 = new ol.format.GeoJSON();
var features_RESIDENCIAL_MARIANA_ALARCON_174 = format_RESIDENCIAL_MARIANA_ALARCON_174.readFeatures(json_RESIDENCIAL_MARIANA_ALARCON_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_MARIANA_ALARCON_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_MARIANA_ALARCON_174.addFeatures(features_RESIDENCIAL_MARIANA_ALARCON_174);
var lyr_RESIDENCIAL_MARIANA_ALARCON_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_MARIANA_ALARCON_174, 
                style: style_RESIDENCIAL_MARIANA_ALARCON_174,
                popuplayertitle: 'RESIDENCIAL_MARIANA_ALARCON',
                interactive: true,
    title: 'RESIDENCIAL_MARIANA_ALARCON<br />\
    <img src="styles/legend/RESIDENCIAL_MARIANA_ALARCON_174_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_MARIANA_ALARCON_174_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_MARIANA_ALARCON_174_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/RESIDENCIAL_MARIANA_ALARCON_174_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_MARIANA_ALARCON_174_4.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_MARIANA_ALARCON_174_5.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_MARIANA_ALARCON_174_6.png" /> RUAS<br />\
    <img src="styles/legend/RESIDENCIAL_MARIANA_ALARCON_174_7.png" /> SERVIDAO<br />\
    <img src="styles/legend/RESIDENCIAL_MARIANA_ALARCON_174_8.png" /> VIELA<br />' });
var format_RESIDENCIAL_JARDIM_CANADA_175 = new ol.format.GeoJSON();
var features_RESIDENCIAL_JARDIM_CANADA_175 = format_RESIDENCIAL_JARDIM_CANADA_175.readFeatures(json_RESIDENCIAL_JARDIM_CANADA_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_JARDIM_CANADA_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_JARDIM_CANADA_175.addFeatures(features_RESIDENCIAL_JARDIM_CANADA_175);
var lyr_RESIDENCIAL_JARDIM_CANADA_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_JARDIM_CANADA_175, 
                style: style_RESIDENCIAL_JARDIM_CANADA_175,
                popuplayertitle: 'RESIDENCIAL_JARDIM_CANADA',
                interactive: true,
                title: '<img src="styles/legend/RESIDENCIAL_JARDIM_CANADA_175.png" /> RESIDENCIAL_JARDIM_CANADA'
            });
var format_RESIDENCIAL_JABUTICABEIRAS_176 = new ol.format.GeoJSON();
var features_RESIDENCIAL_JABUTICABEIRAS_176 = format_RESIDENCIAL_JABUTICABEIRAS_176.readFeatures(json_RESIDENCIAL_JABUTICABEIRAS_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_JABUTICABEIRAS_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_JABUTICABEIRAS_176.addFeatures(features_RESIDENCIAL_JABUTICABEIRAS_176);
var lyr_RESIDENCIAL_JABUTICABEIRAS_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_JABUTICABEIRAS_176, 
                style: style_RESIDENCIAL_JABUTICABEIRAS_176,
                popuplayertitle: 'RESIDENCIAL_JABUTICABEIRAS',
                interactive: true,
    title: 'RESIDENCIAL_JABUTICABEIRAS<br />\
    <img src="styles/legend/RESIDENCIAL_JABUTICABEIRAS_176_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_JABUTICABEIRAS_176_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_JABUTICABEIRAS_176_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/RESIDENCIAL_JABUTICABEIRAS_176_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_JABUTICABEIRAS_176_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/RESIDENCIAL_JABUTICABEIRAS_176_5.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_JABUTICABEIRAS_176_6.png" /> RUAS<br />' });
var format_RESIDENCIAL_IRINEU_ZANETTI_II_177 = new ol.format.GeoJSON();
var features_RESIDENCIAL_IRINEU_ZANETTI_II_177 = format_RESIDENCIAL_IRINEU_ZANETTI_II_177.readFeatures(json_RESIDENCIAL_IRINEU_ZANETTI_II_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_IRINEU_ZANETTI_II_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_IRINEU_ZANETTI_II_177.addFeatures(features_RESIDENCIAL_IRINEU_ZANETTI_II_177);
var lyr_RESIDENCIAL_IRINEU_ZANETTI_II_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_IRINEU_ZANETTI_II_177, 
                style: style_RESIDENCIAL_IRINEU_ZANETTI_II_177,
                popuplayertitle: 'RESIDENCIAL_IRINEU_ZANETTI_II',
                interactive: true,
    title: 'RESIDENCIAL_IRINEU_ZANETTI_II<br />\
    <img src="styles/legend/RESIDENCIAL_IRINEU_ZANETTI_II_177_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_IRINEU_ZANETTI_II_177_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_IRINEU_ZANETTI_II_177_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_IRINEU_ZANETTI_II_177_3.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_IRINEU_ZANETTI_II_177_4.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_IRINEU_ZANETTI_II_177_5.png" /> RUAS<br />' });
var format_RESIDENCIAL_GRAMADOS_II_178 = new ol.format.GeoJSON();
var features_RESIDENCIAL_GRAMADOS_II_178 = format_RESIDENCIAL_GRAMADOS_II_178.readFeatures(json_RESIDENCIAL_GRAMADOS_II_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_GRAMADOS_II_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_GRAMADOS_II_178.addFeatures(features_RESIDENCIAL_GRAMADOS_II_178);
var lyr_RESIDENCIAL_GRAMADOS_II_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_GRAMADOS_II_178, 
                style: style_RESIDENCIAL_GRAMADOS_II_178,
                popuplayertitle: 'RESIDENCIAL_GRAMADOS_II',
                interactive: true,
    title: 'RESIDENCIAL_GRAMADOS_II<br />\
    <img src="styles/legend/RESIDENCIAL_GRAMADOS_II_178_0.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_GRAMADOS_II_178_1.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_GRAMADOS_II_178_2.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_GRAMADOS_II_178_3.png" /> RUAS<br />' });
var format_RESIDENCIAL_GRAMADOS_179 = new ol.format.GeoJSON();
var features_RESIDENCIAL_GRAMADOS_179 = format_RESIDENCIAL_GRAMADOS_179.readFeatures(json_RESIDENCIAL_GRAMADOS_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_GRAMADOS_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_GRAMADOS_179.addFeatures(features_RESIDENCIAL_GRAMADOS_179);
var lyr_RESIDENCIAL_GRAMADOS_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_GRAMADOS_179, 
                style: style_RESIDENCIAL_GRAMADOS_179,
                popuplayertitle: 'RESIDENCIAL_GRAMADOS',
                interactive: true,
    title: 'RESIDENCIAL_GRAMADOS<br />\
    <img src="styles/legend/RESIDENCIAL_GRAMADOS_179_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_GRAMADOS_179_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_GRAMADOS_179_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_GRAMADOS_179_3.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_GRAMADOS_179_4.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_GRAMADOS_179_5.png" /> RUAS<br />' });
var format_RESIDENCIAL_GAIA_180 = new ol.format.GeoJSON();
var features_RESIDENCIAL_GAIA_180 = format_RESIDENCIAL_GAIA_180.readFeatures(json_RESIDENCIAL_GAIA_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_GAIA_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_GAIA_180.addFeatures(features_RESIDENCIAL_GAIA_180);
var lyr_RESIDENCIAL_GAIA_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_GAIA_180, 
                style: style_RESIDENCIAL_GAIA_180,
                popuplayertitle: 'RESIDENCIAL_GAIA',
                interactive: true,
    title: 'RESIDENCIAL_GAIA<br />\
    <img src="styles/legend/RESIDENCIAL_GAIA_180_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_GAIA_180_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_GAIA_180_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_GAIA_180_3.png" /> DESMEMBRAMENTO DOACAO DESAPROPRIACAO<br />\
    <img src="styles/legend/RESIDENCIAL_GAIA_180_4.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_GAIA_180_5.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_GAIA_180_6.png" /> RUAS<br />\
    <img src="styles/legend/RESIDENCIAL_GAIA_180_7.png" /> VIELA<br />' });
var format_RESIDENCIAL_FRUTUOSO_181 = new ol.format.GeoJSON();
var features_RESIDENCIAL_FRUTUOSO_181 = format_RESIDENCIAL_FRUTUOSO_181.readFeatures(json_RESIDENCIAL_FRUTUOSO_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_FRUTUOSO_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_FRUTUOSO_181.addFeatures(features_RESIDENCIAL_FRUTUOSO_181);
var lyr_RESIDENCIAL_FRUTUOSO_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_FRUTUOSO_181, 
                style: style_RESIDENCIAL_FRUTUOSO_181,
                popuplayertitle: 'RESIDENCIAL_FRUTUOSO',
                interactive: true,
    title: 'RESIDENCIAL_FRUTUOSO<br />\
    <img src="styles/legend/RESIDENCIAL_FRUTUOSO_181_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_FRUTUOSO_181_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_FRUTUOSO_181_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/RESIDENCIAL_FRUTUOSO_181_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_FRUTUOSO_181_4.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_FRUTUOSO_181_5.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_FRUTUOSO_181_6.png" /> RUAS<br />' });
var format_RESIDENCIAL_FAGGIONI_182 = new ol.format.GeoJSON();
var features_RESIDENCIAL_FAGGIONI_182 = format_RESIDENCIAL_FAGGIONI_182.readFeatures(json_RESIDENCIAL_FAGGIONI_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_FAGGIONI_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_FAGGIONI_182.addFeatures(features_RESIDENCIAL_FAGGIONI_182);
var lyr_RESIDENCIAL_FAGGIONI_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_FAGGIONI_182, 
                style: style_RESIDENCIAL_FAGGIONI_182,
                popuplayertitle: 'RESIDENCIAL_FAGGIONI',
                interactive: true,
    title: 'RESIDENCIAL_FAGGIONI<br />\
    <img src="styles/legend/RESIDENCIAL_FAGGIONI_182_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_FAGGIONI_182_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_FAGGIONI_182_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_FAGGIONI_182_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/RESIDENCIAL_FAGGIONI_182_4.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_FAGGIONI_182_5.png" /> RUAS<br />' });
var format_RESIDENCIAL_ESSENZA_183 = new ol.format.GeoJSON();
var features_RESIDENCIAL_ESSENZA_183 = format_RESIDENCIAL_ESSENZA_183.readFeatures(json_RESIDENCIAL_ESSENZA_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_ESSENZA_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_ESSENZA_183.addFeatures(features_RESIDENCIAL_ESSENZA_183);
var lyr_RESIDENCIAL_ESSENZA_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_ESSENZA_183, 
                style: style_RESIDENCIAL_ESSENZA_183,
                popuplayertitle: 'RESIDENCIAL_ESSENZA',
                interactive: true,
    title: 'RESIDENCIAL_ESSENZA<br />\
    <img src="styles/legend/RESIDENCIAL_ESSENZA_183_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_ESSENZA_183_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_ESSENZA_183_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/RESIDENCIAL_ESSENZA_183_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_ESSENZA_183_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/RESIDENCIAL_ESSENZA_183_5.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_ESSENZA_183_6.png" /> RUAS<br />' });
var format_RESIDENCIAL_ESSENCE_184 = new ol.format.GeoJSON();
var features_RESIDENCIAL_ESSENCE_184 = format_RESIDENCIAL_ESSENCE_184.readFeatures(json_RESIDENCIAL_ESSENCE_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_ESSENCE_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_ESSENCE_184.addFeatures(features_RESIDENCIAL_ESSENCE_184);
var lyr_RESIDENCIAL_ESSENCE_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_ESSENCE_184, 
                style: style_RESIDENCIAL_ESSENCE_184,
                popuplayertitle: 'RESIDENCIAL_ESSENCE',
                interactive: true,
    title: 'RESIDENCIAL_ESSENCE<br />\
    <img src="styles/legend/RESIDENCIAL_ESSENCE_184_0.png" /> EDIFICIO<br />\
    <img src="styles/legend/RESIDENCIAL_ESSENCE_184_1.png" /> PATIO<br />' });
var format_RESIDENCIAL_DOMINGOS_JARDINI_185 = new ol.format.GeoJSON();
var features_RESIDENCIAL_DOMINGOS_JARDINI_185 = format_RESIDENCIAL_DOMINGOS_JARDINI_185.readFeatures(json_RESIDENCIAL_DOMINGOS_JARDINI_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_DOMINGOS_JARDINI_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_DOMINGOS_JARDINI_185.addFeatures(features_RESIDENCIAL_DOMINGOS_JARDINI_185);
var lyr_RESIDENCIAL_DOMINGOS_JARDINI_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_DOMINGOS_JARDINI_185, 
                style: style_RESIDENCIAL_DOMINGOS_JARDINI_185,
                popuplayertitle: 'RESIDENCIAL_DOMINGOS_JARDINI',
                interactive: true,
    title: 'RESIDENCIAL_DOMINGOS_JARDINI<br />\
    <img src="styles/legend/RESIDENCIAL_DOMINGOS_JARDINI_185_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_DOMINGOS_JARDINI_185_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/RESIDENCIAL_DOMINGOS_JARDINI_185_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_DOMINGOS_JARDINI_185_3.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_DOMINGOS_JARDINI_185_4.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_DOMINGOS_JARDINI_185_5.png" /> RUAS<br />' });
var format_RESIDENCIAL_CINTRA_ALVES_186 = new ol.format.GeoJSON();
var features_RESIDENCIAL_CINTRA_ALVES_186 = format_RESIDENCIAL_CINTRA_ALVES_186.readFeatures(json_RESIDENCIAL_CINTRA_ALVES_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_CINTRA_ALVES_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_CINTRA_ALVES_186.addFeatures(features_RESIDENCIAL_CINTRA_ALVES_186);
var lyr_RESIDENCIAL_CINTRA_ALVES_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_CINTRA_ALVES_186, 
                style: style_RESIDENCIAL_CINTRA_ALVES_186,
                popuplayertitle: 'RESIDENCIAL_CINTRA_ALVES',
                interactive: true,
    title: 'RESIDENCIAL_CINTRA_ALVES<br />\
    <img src="styles/legend/RESIDENCIAL_CINTRA_ALVES_186_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_CINTRA_ALVES_186_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_CINTRA_ALVES_186_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/RESIDENCIAL_CINTRA_ALVES_186_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_CINTRA_ALVES_186_4.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_CINTRA_ALVES_186_5.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_CINTRA_ALVES_186_6.png" /> RUAS<br />\
    <img src="styles/legend/RESIDENCIAL_CINTRA_ALVES_186_7.png" /> SERVIDAO<br />\
    <img src="styles/legend/RESIDENCIAL_CINTRA_ALVES_186_8.png" /> VIELA<br />' });
var format_RESIDENCIAL_CIDADE_JARDIM_187 = new ol.format.GeoJSON();
var features_RESIDENCIAL_CIDADE_JARDIM_187 = format_RESIDENCIAL_CIDADE_JARDIM_187.readFeatures(json_RESIDENCIAL_CIDADE_JARDIM_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_CIDADE_JARDIM_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_CIDADE_JARDIM_187.addFeatures(features_RESIDENCIAL_CIDADE_JARDIM_187);
var lyr_RESIDENCIAL_CIDADE_JARDIM_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_CIDADE_JARDIM_187, 
                style: style_RESIDENCIAL_CIDADE_JARDIM_187,
                popuplayertitle: 'RESIDENCIAL_CIDADE_JARDIM',
                interactive: true,
    title: 'RESIDENCIAL_CIDADE_JARDIM<br />\
    <img src="styles/legend/RESIDENCIAL_CIDADE_JARDIM_187_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_CIDADE_JARDIM_187_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_CIDADE_JARDIM_187_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/RESIDENCIAL_CIDADE_JARDIM_187_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_CIDADE_JARDIM_187_4.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_CIDADE_JARDIM_187_5.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_CIDADE_JARDIM_187_6.png" /> RUAS<br />\
    <img src="styles/legend/RESIDENCIAL_CIDADE_JARDIM_187_7.png" /> SERVIDAO<br />' });
var format_RESIDENCIAL_BOA_VISTA_188 = new ol.format.GeoJSON();
var features_RESIDENCIAL_BOA_VISTA_188 = format_RESIDENCIAL_BOA_VISTA_188.readFeatures(json_RESIDENCIAL_BOA_VISTA_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_BOA_VISTA_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_BOA_VISTA_188.addFeatures(features_RESIDENCIAL_BOA_VISTA_188);
var lyr_RESIDENCIAL_BOA_VISTA_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_BOA_VISTA_188, 
                style: style_RESIDENCIAL_BOA_VISTA_188,
                popuplayertitle: 'RESIDENCIAL_BOA_VISTA',
                interactive: true,
    title: 'RESIDENCIAL_BOA_VISTA<br />\
    <img src="styles/legend/RESIDENCIAL_BOA_VISTA_188_0.png" /> APP<br />\
    <img src="styles/legend/RESIDENCIAL_BOA_VISTA_188_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_BOA_VISTA_188_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/RESIDENCIAL_BOA_VISTA_188_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_BOA_VISTA_188_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/RESIDENCIAL_BOA_VISTA_188_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/RESIDENCIAL_BOA_VISTA_188_6.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_BOA_VISTA_188_7.png" /> RUAS<br />' });
var format_RESIDENCIAL_ANA_HELENA_189 = new ol.format.GeoJSON();
var features_RESIDENCIAL_ANA_HELENA_189 = format_RESIDENCIAL_ANA_HELENA_189.readFeatures(json_RESIDENCIAL_ANA_HELENA_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_ANA_HELENA_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_ANA_HELENA_189.addFeatures(features_RESIDENCIAL_ANA_HELENA_189);
var lyr_RESIDENCIAL_ANA_HELENA_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_ANA_HELENA_189, 
                style: style_RESIDENCIAL_ANA_HELENA_189,
                popuplayertitle: 'RESIDENCIAL_ANA_HELENA',
                interactive: true,
    title: 'RESIDENCIAL_ANA_HELENA<br />\
    <img src="styles/legend/RESIDENCIAL_ANA_HELENA_189_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_ANA_HELENA_189_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_ANA_HELENA_189_2.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_ANA_HELENA_189_3.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_ANA_HELENA_189_4.png" /> RUAS<br />\
    <img src="styles/legend/RESIDENCIAL_ANA_HELENA_189_5.png" /> VIELA<br />' });
var format_RESIDENCIAL_ALTO_DA_FAZENDA_190 = new ol.format.GeoJSON();
var features_RESIDENCIAL_ALTO_DA_FAZENDA_190 = format_RESIDENCIAL_ALTO_DA_FAZENDA_190.readFeatures(json_RESIDENCIAL_ALTO_DA_FAZENDA_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESIDENCIAL_ALTO_DA_FAZENDA_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESIDENCIAL_ALTO_DA_FAZENDA_190.addFeatures(features_RESIDENCIAL_ALTO_DA_FAZENDA_190);
var lyr_RESIDENCIAL_ALTO_DA_FAZENDA_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESIDENCIAL_ALTO_DA_FAZENDA_190, 
                style: style_RESIDENCIAL_ALTO_DA_FAZENDA_190,
                popuplayertitle: 'RESIDENCIAL_ALTO_DA_FAZENDA',
                interactive: true,
    title: 'RESIDENCIAL_ALTO_DA_FAZENDA<br />\
    <img src="styles/legend/RESIDENCIAL_ALTO_DA_FAZENDA_190_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESIDENCIAL_ALTO_DA_FAZENDA_190_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/RESIDENCIAL_ALTO_DA_FAZENDA_190_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESIDENCIAL_ALTO_DA_FAZENDA_190_3.png" /> LOTES<br />\
    <img src="styles/legend/RESIDENCIAL_ALTO_DA_FAZENDA_190_4.png" /> PASSEIO<br />\
    <img src="styles/legend/RESIDENCIAL_ALTO_DA_FAZENDA_190_5.png" /> RUAS<br />' });
var format_RESERVA_ABAETE_191 = new ol.format.GeoJSON();
var features_RESERVA_ABAETE_191 = format_RESERVA_ABAETE_191.readFeatures(json_RESERVA_ABAETE_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESERVA_ABAETE_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESERVA_ABAETE_191.addFeatures(features_RESERVA_ABAETE_191);
var lyr_RESERVA_ABAETE_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESERVA_ABAETE_191, 
                style: style_RESERVA_ABAETE_191,
                popuplayertitle: 'RESERVA_ABAETE',
                interactive: true,
    title: 'RESERVA_ABAETE<br />\
    <img src="styles/legend/RESERVA_ABAETE_191_0.png" /> APP<br />\
    <img src="styles/legend/RESERVA_ABAETE_191_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RESERVA_ABAETE_191_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/RESERVA_ABAETE_191_3.png" /> LOTES<br />\
    <img src="styles/legend/RESERVA_ABAETE_191_4.png" /> PASSEIO<br />\
    <img src="styles/legend/RESERVA_ABAETE_191_5.png" /> QUADRAS<br />\
    <img src="styles/legend/RESERVA_ABAETE_191_6.png" /> RUAS<br />' });
var format_RECANTO_MENEGHETTI_192 = new ol.format.GeoJSON();
var features_RECANTO_MENEGHETTI_192 = format_RECANTO_MENEGHETTI_192.readFeatures(json_RECANTO_MENEGHETTI_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RECANTO_MENEGHETTI_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RECANTO_MENEGHETTI_192.addFeatures(features_RECANTO_MENEGHETTI_192);
var lyr_RECANTO_MENEGHETTI_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RECANTO_MENEGHETTI_192, 
                style: style_RECANTO_MENEGHETTI_192,
                popuplayertitle: 'RECANTO_MENEGHETTI',
                interactive: true,
    title: 'RECANTO_MENEGHETTI<br />\
    <img src="styles/legend/RECANTO_MENEGHETTI_192_0.png" /> APP<br />\
    <img src="styles/legend/RECANTO_MENEGHETTI_192_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RECANTO_MENEGHETTI_192_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/RECANTO_MENEGHETTI_192_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/RECANTO_MENEGHETTI_192_4.png" /> CICLOVIA<br />\
    <img src="styles/legend/RECANTO_MENEGHETTI_192_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/RECANTO_MENEGHETTI_192_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/RECANTO_MENEGHETTI_192_7.png" /> PASSEIO<br />\
    <img src="styles/legend/RECANTO_MENEGHETTI_192_8.png" /> RUAS<br />\
    <img src="styles/legend/RECANTO_MENEGHETTI_192_9.png" /> VIELA<br />' });
var format_QUADRA_18_VILA_EXPOSICAO_193 = new ol.format.GeoJSON();
var features_QUADRA_18_VILA_EXPOSICAO_193 = format_QUADRA_18_VILA_EXPOSICAO_193.readFeatures(json_QUADRA_18_VILA_EXPOSICAO_193, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_QUADRA_18_VILA_EXPOSICAO_193 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QUADRA_18_VILA_EXPOSICAO_193.addFeatures(features_QUADRA_18_VILA_EXPOSICAO_193);
var lyr_QUADRA_18_VILA_EXPOSICAO_193 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QUADRA_18_VILA_EXPOSICAO_193, 
                style: style_QUADRA_18_VILA_EXPOSICAO_193,
                popuplayertitle: 'QUADRA_18_VILA_EXPOSICAO',
                interactive: true,
    title: 'QUADRA_18_VILA_EXPOSICAO<br />\
    <img src="styles/legend/QUADRA_18_VILA_EXPOSICAO_193_0.png" /> LOTES<br />\
    <img src="styles/legend/QUADRA_18_VILA_EXPOSICAO_193_1.png" /> PASSEIO<br />\
    <img src="styles/legend/QUADRA_18_VILA_EXPOSICAO_193_2.png" /> RUAS<br />' });
var format_PROLONGAMENTO_SAMEL_PARK_194 = new ol.format.GeoJSON();
var features_PROLONGAMENTO_SAMEL_PARK_194 = format_PROLONGAMENTO_SAMEL_PARK_194.readFeatures(json_PROLONGAMENTO_SAMEL_PARK_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PROLONGAMENTO_SAMEL_PARK_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROLONGAMENTO_SAMEL_PARK_194.addFeatures(features_PROLONGAMENTO_SAMEL_PARK_194);
var lyr_PROLONGAMENTO_SAMEL_PARK_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROLONGAMENTO_SAMEL_PARK_194, 
                style: style_PROLONGAMENTO_SAMEL_PARK_194,
                popuplayertitle: 'PROLONGAMENTO_SAMEL_PARK',
                interactive: true,
    title: 'PROLONGAMENTO_SAMEL_PARK<br />\
    <img src="styles/legend/PROLONGAMENTO_SAMEL_PARK_194_0.png" /> APP<br />\
    <img src="styles/legend/PROLONGAMENTO_SAMEL_PARK_194_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/PROLONGAMENTO_SAMEL_PARK_194_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/PROLONGAMENTO_SAMEL_PARK_194_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/PROLONGAMENTO_SAMEL_PARK_194_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/PROLONGAMENTO_SAMEL_PARK_194_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/PROLONGAMENTO_SAMEL_PARK_194_6.png" /> PASSEIO<br />\
    <img src="styles/legend/PROLONGAMENTO_SAMEL_PARK_194_7.png" /> RUAS<br />' });
var format_PARQUE_VILLA_LOBOS_195 = new ol.format.GeoJSON();
var features_PARQUE_VILLA_LOBOS_195 = format_PARQUE_VILLA_LOBOS_195.readFeatures(json_PARQUE_VILLA_LOBOS_195, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_VILLA_LOBOS_195 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_VILLA_LOBOS_195.addFeatures(features_PARQUE_VILLA_LOBOS_195);
var lyr_PARQUE_VILLA_LOBOS_195 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_VILLA_LOBOS_195, 
                style: style_PARQUE_VILLA_LOBOS_195,
                popuplayertitle: 'PARQUE_VILLA_LOBOS',
                interactive: true,
    title: 'PARQUE_VILLA_LOBOS<br />\
    <img src="styles/legend/PARQUE_VILLA_LOBOS_195_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/PARQUE_VILLA_LOBOS_195_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/PARQUE_VILLA_LOBOS_195_2.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/PARQUE_VILLA_LOBOS_195_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/PARQUE_VILLA_LOBOS_195_4.png" /> PASSEIO<br />\
    <img src="styles/legend/PARQUE_VILLA_LOBOS_195_5.png" /> RUAS<br />' });
var format_PARQUE_PALMEIRA_IMPERIAL_196 = new ol.format.GeoJSON();
var features_PARQUE_PALMEIRA_IMPERIAL_196 = format_PARQUE_PALMEIRA_IMPERIAL_196.readFeatures(json_PARQUE_PALMEIRA_IMPERIAL_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_PALMEIRA_IMPERIAL_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_PALMEIRA_IMPERIAL_196.addFeatures(features_PARQUE_PALMEIRA_IMPERIAL_196);
var lyr_PARQUE_PALMEIRA_IMPERIAL_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_PALMEIRA_IMPERIAL_196, 
                style: style_PARQUE_PALMEIRA_IMPERIAL_196,
                popuplayertitle: 'PARQUE_PALMEIRA_IMPERIAL',
                interactive: true,
    title: 'PARQUE_PALMEIRA_IMPERIAL<br />\
    <img src="styles/legend/PARQUE_PALMEIRA_IMPERIAL_196_0.png" /> APP<br />\
    <img src="styles/legend/PARQUE_PALMEIRA_IMPERIAL_196_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/PARQUE_PALMEIRA_IMPERIAL_196_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/PARQUE_PALMEIRA_IMPERIAL_196_3.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/PARQUE_PALMEIRA_IMPERIAL_196_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/PARQUE_PALMEIRA_IMPERIAL_196_5.png" /> LOTES<br />\
    <img src="styles/legend/PARQUE_PALMEIRA_IMPERIAL_196_6.png" /> PASSEIO<br />\
    <img src="styles/legend/PARQUE_PALMEIRA_IMPERIAL_196_7.png" /> RUAS<br />' });
var format_PARQUE_MORADA_DA_MATA_197 = new ol.format.GeoJSON();
var features_PARQUE_MORADA_DA_MATA_197 = format_PARQUE_MORADA_DA_MATA_197.readFeatures(json_PARQUE_MORADA_DA_MATA_197, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_MORADA_DA_MATA_197 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_MORADA_DA_MATA_197.addFeatures(features_PARQUE_MORADA_DA_MATA_197);
var lyr_PARQUE_MORADA_DA_MATA_197 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_MORADA_DA_MATA_197, 
                style: style_PARQUE_MORADA_DA_MATA_197,
                popuplayertitle: 'PARQUE_MORADA_DA_MATA',
                interactive: true,
    title: 'PARQUE_MORADA_DA_MATA<br />\
    <img src="styles/legend/PARQUE_MORADA_DA_MATA_197_0.png" /> APP<br />\
    <img src="styles/legend/PARQUE_MORADA_DA_MATA_197_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/PARQUE_MORADA_DA_MATA_197_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/PARQUE_MORADA_DA_MATA_197_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/PARQUE_MORADA_DA_MATA_197_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/PARQUE_MORADA_DA_MATA_197_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/PARQUE_MORADA_DA_MATA_197_6.png" /> PASSEIO<br />\
    <img src="styles/legend/PARQUE_MORADA_DA_MATA_197_7.png" /> RUAS<br />' });
var format_PARQUE_JACARANDA_198 = new ol.format.GeoJSON();
var features_PARQUE_JACARANDA_198 = format_PARQUE_JACARANDA_198.readFeatures(json_PARQUE_JACARANDA_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_JACARANDA_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_JACARANDA_198.addFeatures(features_PARQUE_JACARANDA_198);
var lyr_PARQUE_JACARANDA_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_JACARANDA_198, 
                style: style_PARQUE_JACARANDA_198,
                popuplayertitle: 'PARQUE_JACARANDA',
                interactive: true,
    title: 'PARQUE_JACARANDA<br />\
    <img src="styles/legend/PARQUE_JACARANDA_198_0.png" /> APP<br />\
    <img src="styles/legend/PARQUE_JACARANDA_198_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/PARQUE_JACARANDA_198_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/PARQUE_JACARANDA_198_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/PARQUE_JACARANDA_198_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/PARQUE_JACARANDA_198_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/PARQUE_JACARANDA_198_6.png" /> PASSEIO<br />\
    <img src="styles/legend/PARQUE_JACARANDA_198_7.png" /> RUAS<br />' });
var format_PARQUE_FLORA_199 = new ol.format.GeoJSON();
var features_PARQUE_FLORA_199 = format_PARQUE_FLORA_199.readFeatures(json_PARQUE_FLORA_199, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_FLORA_199 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_FLORA_199.addFeatures(features_PARQUE_FLORA_199);
var lyr_PARQUE_FLORA_199 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_FLORA_199, 
                style: style_PARQUE_FLORA_199,
                popuplayertitle: 'PARQUE_FLORA',
                interactive: true,
    title: 'PARQUE_FLORA<br />\
    <img src="styles/legend/PARQUE_FLORA_199_0.png" /> APP<br />\
    <img src="styles/legend/PARQUE_FLORA_199_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/PARQUE_FLORA_199_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/PARQUE_FLORA_199_3.png" /> LOTES<br />\
    <img src="styles/legend/PARQUE_FLORA_199_4.png" /> PASSEIO<br />\
    <img src="styles/legend/PARQUE_FLORA_199_5.png" /> RUAS<br />\
    <img src="styles/legend/PARQUE_FLORA_199_6.png" /> VIELA<br />' });
var format_PARQUE_DOS_SABIAS_200 = new ol.format.GeoJSON();
var features_PARQUE_DOS_SABIAS_200 = format_PARQUE_DOS_SABIAS_200.readFeatures(json_PARQUE_DOS_SABIAS_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_DOS_SABIAS_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_DOS_SABIAS_200.addFeatures(features_PARQUE_DOS_SABIAS_200);
var lyr_PARQUE_DOS_SABIAS_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_DOS_SABIAS_200, 
                style: style_PARQUE_DOS_SABIAS_200,
                popuplayertitle: 'PARQUE_DOS_SABIAS',
                interactive: true,
    title: 'PARQUE_DOS_SABIAS<br />\
    <img src="styles/legend/PARQUE_DOS_SABIAS_200_0.png" /> APP<br />\
    <img src="styles/legend/PARQUE_DOS_SABIAS_200_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/PARQUE_DOS_SABIAS_200_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/PARQUE_DOS_SABIAS_200_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/PARQUE_DOS_SABIAS_200_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/PARQUE_DOS_SABIAS_200_5.png" /> PASSEIO<br />\
    <img src="styles/legend/PARQUE_DOS_SABIAS_200_6.png" /> RUAS<br />\
    <img src="styles/legend/PARQUE_DOS_SABIAS_200_7.png" /> VIELA<br />' });
var format_PARQUE_DOS_COQUEIROS_201 = new ol.format.GeoJSON();
var features_PARQUE_DOS_COQUEIROS_201 = format_PARQUE_DOS_COQUEIROS_201.readFeatures(json_PARQUE_DOS_COQUEIROS_201, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_DOS_COQUEIROS_201 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_DOS_COQUEIROS_201.addFeatures(features_PARQUE_DOS_COQUEIROS_201);
var lyr_PARQUE_DOS_COQUEIROS_201 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_DOS_COQUEIROS_201, 
                style: style_PARQUE_DOS_COQUEIROS_201,
                popuplayertitle: 'PARQUE_DOS_COQUEIROS',
                interactive: true,
    title: 'PARQUE_DOS_COQUEIROS<br />\
    <img src="styles/legend/PARQUE_DOS_COQUEIROS_201_0.png" /> APP<br />\
    <img src="styles/legend/PARQUE_DOS_COQUEIROS_201_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/PARQUE_DOS_COQUEIROS_201_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/PARQUE_DOS_COQUEIROS_201_3.png" /> LOTES<br />\
    <img src="styles/legend/PARQUE_DOS_COQUEIROS_201_4.png" /> PASSEIO<br />\
    <img src="styles/legend/PARQUE_DOS_COQUEIROS_201_5.png" /> RUAS<br />\
    <img src="styles/legend/PARQUE_DOS_COQUEIROS_201_6.png" /> SERVIDAO<br />\
    <img src="styles/legend/PARQUE_DOS_COQUEIROS_201_7.png" /> VIELA<br />' });
var format_PARQUE_ALVORADA_202 = new ol.format.GeoJSON();
var features_PARQUE_ALVORADA_202 = format_PARQUE_ALVORADA_202.readFeatures(json_PARQUE_ALVORADA_202, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_ALVORADA_202 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_ALVORADA_202.addFeatures(features_PARQUE_ALVORADA_202);
var lyr_PARQUE_ALVORADA_202 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_ALVORADA_202, 
                style: style_PARQUE_ALVORADA_202,
                popuplayertitle: 'PARQUE_ALVORADA',
                interactive: true,
    title: 'PARQUE_ALVORADA<br />\
    <img src="styles/legend/PARQUE_ALVORADA_202_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/PARQUE_ALVORADA_202_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/PARQUE_ALVORADA_202_2.png" /> LOTES<br />\
    <img src="styles/legend/PARQUE_ALVORADA_202_3.png" /> PASSEIO<br />\
    <img src="styles/legend/PARQUE_ALVORADA_202_4.png" /> RUAS<br />' });
var format_PARAGON_FASE_II_203 = new ol.format.GeoJSON();
var features_PARAGON_FASE_II_203 = format_PARAGON_FASE_II_203.readFeatures(json_PARAGON_FASE_II_203, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARAGON_FASE_II_203 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARAGON_FASE_II_203.addFeatures(features_PARAGON_FASE_II_203);
var lyr_PARAGON_FASE_II_203 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARAGON_FASE_II_203, 
                style: style_PARAGON_FASE_II_203,
                popuplayertitle: 'PARAGON_FASE_II',
                interactive: true,
    title: 'PARAGON_FASE_II<br />\
    <img src="styles/legend/PARAGON_FASE_II_203_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/PARAGON_FASE_II_203_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/PARAGON_FASE_II_203_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/PARAGON_FASE_II_203_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/PARAGON_FASE_II_203_4.png" /> LOTES<br />\
    <img src="styles/legend/PARAGON_FASE_II_203_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/PARAGON_FASE_II_203_6.png" /> PASSEIO<br />\
    <img src="styles/legend/PARAGON_FASE_II_203_7.png" /> RUAS<br />\
    <img src="styles/legend/PARAGON_FASE_II_203_8.png" /> VIELA<br />' });
var format_PARAGON_204 = new ol.format.GeoJSON();
var features_PARAGON_204 = format_PARAGON_204.readFeatures(json_PARAGON_204, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARAGON_204 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARAGON_204.addFeatures(features_PARAGON_204);
var lyr_PARAGON_204 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARAGON_204, 
                style: style_PARAGON_204,
                popuplayertitle: 'PARAGON',
                interactive: true,
    title: 'PARAGON<br />\
    <img src="styles/legend/PARAGON_204_0.png" /> APP<br />\
    <img src="styles/legend/PARAGON_204_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/PARAGON_204_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/PARAGON_204_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/PARAGON_204_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/PARAGON_204_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/PARAGON_204_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/PARAGON_204_7.png" /> PASSEIO<br />\
    <img src="styles/legend/PARAGON_204_8.png" /> RUAS<br />\
    <img src="styles/legend/PARAGON_204_9.png" /> VIELA<br />' });
var format_PALMEIRA_REAL_205 = new ol.format.GeoJSON();
var features_PALMEIRA_REAL_205 = format_PALMEIRA_REAL_205.readFeatures(json_PALMEIRA_REAL_205, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PALMEIRA_REAL_205 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PALMEIRA_REAL_205.addFeatures(features_PALMEIRA_REAL_205);
var lyr_PALMEIRA_REAL_205 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PALMEIRA_REAL_205, 
                style: style_PALMEIRA_REAL_205,
                popuplayertitle: 'PALMEIRA_REAL',
                interactive: true,
    title: 'PALMEIRA_REAL<br />\
    <img src="styles/legend/PALMEIRA_REAL_205_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/PALMEIRA_REAL_205_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/PALMEIRA_REAL_205_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/PALMEIRA_REAL_205_3.png" /> PASSEIO<br />\
    <img src="styles/legend/PALMEIRA_REAL_205_4.png" /> RUAS<br />\
    <img src="styles/legend/PALMEIRA_REAL_205_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_MORADA_DO_VERDE_II_206 = new ol.format.GeoJSON();
var features_MORADA_DO_VERDE_II_206 = format_MORADA_DO_VERDE_II_206.readFeatures(json_MORADA_DO_VERDE_II_206, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MORADA_DO_VERDE_II_206 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MORADA_DO_VERDE_II_206.addFeatures(features_MORADA_DO_VERDE_II_206);
var lyr_MORADA_DO_VERDE_II_206 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MORADA_DO_VERDE_II_206, 
                style: style_MORADA_DO_VERDE_II_206,
                popuplayertitle: 'MORADA_DO_VERDE_II',
                interactive: true,
    title: 'MORADA_DO_VERDE_II<br />\
    <img src="styles/legend/MORADA_DO_VERDE_II_206_0.png" /> APP<br />\
    <img src="styles/legend/MORADA_DO_VERDE_II_206_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MORADA_DO_VERDE_II_206_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MORADA_DO_VERDE_II_206_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/MORADA_DO_VERDE_II_206_4.png" /> LOTES<br />\
    <img src="styles/legend/MORADA_DO_VERDE_II_206_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/MORADA_DO_VERDE_II_206_6.png" /> PASSEIO<br />\
    <img src="styles/legend/MORADA_DO_VERDE_II_206_7.png" /> RUAS<br />' });
var format_MONTIE_207 = new ol.format.GeoJSON();
var features_MONTIE_207 = format_MONTIE_207.readFeatures(json_MONTIE_207, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MONTIE_207 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MONTIE_207.addFeatures(features_MONTIE_207);
var lyr_MONTIE_207 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MONTIE_207, 
                style: style_MONTIE_207,
                popuplayertitle: 'MONTIE',
                interactive: true,
    title: 'MONTIE<br />\
    <img src="styles/legend/MONTIE_207_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/MONTIE_207_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/MONTIE_207_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/MONTIE_207_3.png" /> PASSEIO<br />\
    <img src="styles/legend/MONTIE_207_4.png" /> RUAS<br />\
    <img src="styles/legend/MONTIE_207_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_MONT_BLANC_RESIDENCE_208 = new ol.format.GeoJSON();
var features_MONT_BLANC_RESIDENCE_208 = format_MONT_BLANC_RESIDENCE_208.readFeatures(json_MONT_BLANC_RESIDENCE_208, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MONT_BLANC_RESIDENCE_208 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MONT_BLANC_RESIDENCE_208.addFeatures(features_MONT_BLANC_RESIDENCE_208);
var lyr_MONT_BLANC_RESIDENCE_208 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MONT_BLANC_RESIDENCE_208, 
                style: style_MONT_BLANC_RESIDENCE_208,
                popuplayertitle: 'MONT_BLANC_RESIDENCE',
                interactive: true,
    title: 'MONT_BLANC_RESIDENCE<br />\
    <img src="styles/legend/MONT_BLANC_RESIDENCE_208_0.png" /> EDIFICIO<br />\
    <img src="styles/legend/MONT_BLANC_RESIDENCE_208_1.png" /> PATIO<br />' });
var format_MASTERPLAN_BILD_VITTA_209 = new ol.format.GeoJSON();
var features_MASTERPLAN_BILD_VITTA_209 = format_MASTERPLAN_BILD_VITTA_209.readFeatures(json_MASTERPLAN_BILD_VITTA_209, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MASTERPLAN_BILD_VITTA_209 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MASTERPLAN_BILD_VITTA_209.addFeatures(features_MASTERPLAN_BILD_VITTA_209);
var lyr_MASTERPLAN_BILD_VITTA_209 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MASTERPLAN_BILD_VITTA_209, 
                style: style_MASTERPLAN_BILD_VITTA_209,
                popuplayertitle: 'MASTERPLAN_BILD_VITTA',
                interactive: true,
    title: 'MASTERPLAN_BILD_VITTA<br />\
    <img src="styles/legend/MASTERPLAN_BILD_VITTA_209_0.png" /> APP<br />\
    <img src="styles/legend/MASTERPLAN_BILD_VITTA_209_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MASTERPLAN_BILD_VITTA_209_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MASTERPLAN_BILD_VITTA_209_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/MASTERPLAN_BILD_VITTA_209_4.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/MASTERPLAN_BILD_VITTA_209_5.png" /> AREA VERDE<br />\
    <img src="styles/legend/MASTERPLAN_BILD_VITTA_209_6.png" /> DESMEMBRAMENTO DOACAO<br />\
    <img src="styles/legend/MASTERPLAN_BILD_VITTA_209_7.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MASTERPLAN_BILD_VITTA_209_8.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MASTERPLAN_BILD_VITTA_209_9.png" /> PASSEIO<br />\
    <img src="styles/legend/MASTERPLAN_BILD_VITTA_209_10.png" /> RUAS<br />\
    <img src="styles/legend/MASTERPLAN_BILD_VITTA_209_11.png" /> SERVIDAO<br />' });
var format_JARDIM_STEPHANI_210 = new ol.format.GeoJSON();
var features_JARDIM_STEPHANI_210 = format_JARDIM_STEPHANI_210.readFeatures(json_JARDIM_STEPHANI_210, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JARDIM_STEPHANI_210 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARDIM_STEPHANI_210.addFeatures(features_JARDIM_STEPHANI_210);
var lyr_JARDIM_STEPHANI_210 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARDIM_STEPHANI_210, 
                style: style_JARDIM_STEPHANI_210,
                popuplayertitle: 'JARDIM_STEPHANI',
                interactive: true,
                title: '<img src="styles/legend/JARDIM_STEPHANI_210.png" /> JARDIM_STEPHANI'
            });
var format_JARDIM_PHEROLA_211 = new ol.format.GeoJSON();
var features_JARDIM_PHEROLA_211 = format_JARDIM_PHEROLA_211.readFeatures(json_JARDIM_PHEROLA_211, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JARDIM_PHEROLA_211 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARDIM_PHEROLA_211.addFeatures(features_JARDIM_PHEROLA_211);
var lyr_JARDIM_PHEROLA_211 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARDIM_PHEROLA_211, 
                style: style_JARDIM_PHEROLA_211,
                popuplayertitle: 'JARDIM_PHEROLA',
                interactive: true,
                title: '<img src="styles/legend/JARDIM_PHEROLA_211.png" /> JARDIM_PHEROLA'
            });
var format_JARDIM_NATAL_212 = new ol.format.GeoJSON();
var features_JARDIM_NATAL_212 = format_JARDIM_NATAL_212.readFeatures(json_JARDIM_NATAL_212, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JARDIM_NATAL_212 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARDIM_NATAL_212.addFeatures(features_JARDIM_NATAL_212);
var lyr_JARDIM_NATAL_212 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARDIM_NATAL_212, 
                style: style_JARDIM_NATAL_212,
                popuplayertitle: 'JARDIM_NATAL',
                interactive: true,
    title: 'JARDIM_NATAL<br />\
    <img src="styles/legend/JARDIM_NATAL_212_0.png" /> APP<br />\
    <img src="styles/legend/JARDIM_NATAL_212_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JARDIM_NATAL_212_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/JARDIM_NATAL_212_3.png" /> LOTES<br />\
    <img src="styles/legend/JARDIM_NATAL_212_4.png" /> PASSEIO<br />\
    <img src="styles/legend/JARDIM_NATAL_212_5.png" /> RUAS<br />\
    <img src="styles/legend/JARDIM_NATAL_212_6.png" /> VIELA<br />' });
var format_JARDIM_MARIA_LUIZA_213 = new ol.format.GeoJSON();
var features_JARDIM_MARIA_LUIZA_213 = format_JARDIM_MARIA_LUIZA_213.readFeatures(json_JARDIM_MARIA_LUIZA_213, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JARDIM_MARIA_LUIZA_213 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARDIM_MARIA_LUIZA_213.addFeatures(features_JARDIM_MARIA_LUIZA_213);
var lyr_JARDIM_MARIA_LUIZA_213 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARDIM_MARIA_LUIZA_213, 
                style: style_JARDIM_MARIA_LUIZA_213,
                popuplayertitle: 'JARDIM_MARIA_LUIZA',
                interactive: true,
    title: 'JARDIM_MARIA_LUIZA<br />\
    <img src="styles/legend/JARDIM_MARIA_LUIZA_213_0.png" /> APP<br />\
    <img src="styles/legend/JARDIM_MARIA_LUIZA_213_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JARDIM_MARIA_LUIZA_213_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/JARDIM_MARIA_LUIZA_213_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/JARDIM_MARIA_LUIZA_213_4.png" /> LOTES<br />\
    <img src="styles/legend/JARDIM_MARIA_LUIZA_213_5.png" /> PASSEIO<br />\
    <img src="styles/legend/JARDIM_MARIA_LUIZA_213_6.png" /> RUAS<br />\
    <img src="styles/legend/JARDIM_MARIA_LUIZA_213_7.png" /> VIELA<br />' });
var format_JARDIM_MARIA_AUGUSTA_214 = new ol.format.GeoJSON();
var features_JARDIM_MARIA_AUGUSTA_214 = format_JARDIM_MARIA_AUGUSTA_214.readFeatures(json_JARDIM_MARIA_AUGUSTA_214, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JARDIM_MARIA_AUGUSTA_214 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARDIM_MARIA_AUGUSTA_214.addFeatures(features_JARDIM_MARIA_AUGUSTA_214);
var lyr_JARDIM_MARIA_AUGUSTA_214 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARDIM_MARIA_AUGUSTA_214, 
                style: style_JARDIM_MARIA_AUGUSTA_214,
                popuplayertitle: 'JARDIM_MARIA_AUGUSTA',
                interactive: true,
    title: 'JARDIM_MARIA_AUGUSTA<br />\
    <img src="styles/legend/JARDIM_MARIA_AUGUSTA_214_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JARDIM_MARIA_AUGUSTA_214_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/JARDIM_MARIA_AUGUSTA_214_2.png" /> LOTES<br />\
    <img src="styles/legend/JARDIM_MARIA_AUGUSTA_214_3.png" /> PASSEIO<br />\
    <img src="styles/legend/JARDIM_MARIA_AUGUSTA_214_4.png" /> RUAS<br />\
    <img src="styles/legend/JARDIM_MARIA_AUGUSTA_214_5.png" /> VIELA<br />' });
var format_JARDIM_HORIZONTE_215 = new ol.format.GeoJSON();
var features_JARDIM_HORIZONTE_215 = format_JARDIM_HORIZONTE_215.readFeatures(json_JARDIM_HORIZONTE_215, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JARDIM_HORIZONTE_215 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARDIM_HORIZONTE_215.addFeatures(features_JARDIM_HORIZONTE_215);
var lyr_JARDIM_HORIZONTE_215 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARDIM_HORIZONTE_215, 
                style: style_JARDIM_HORIZONTE_215,
                popuplayertitle: 'JARDIM_HORIZONTE',
                interactive: true,
    title: 'JARDIM_HORIZONTE<br />\
    <img src="styles/legend/JARDIM_HORIZONTE_215_0.png" /> APP<br />\
    <img src="styles/legend/JARDIM_HORIZONTE_215_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JARDIM_HORIZONTE_215_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/JARDIM_HORIZONTE_215_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/JARDIM_HORIZONTE_215_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/JARDIM_HORIZONTE_215_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/JARDIM_HORIZONTE_215_6.png" /> PASSEIO<br />\
    <img src="styles/legend/JARDIM_HORIZONTE_215_7.png" /> RUAS<br />\
    <img src="styles/legend/JARDIM_HORIZONTE_215_8.png" /> VIELA<br />' });
var format_JARDIM_FLORA_216 = new ol.format.GeoJSON();
var features_JARDIM_FLORA_216 = format_JARDIM_FLORA_216.readFeatures(json_JARDIM_FLORA_216, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JARDIM_FLORA_216 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARDIM_FLORA_216.addFeatures(features_JARDIM_FLORA_216);
var lyr_JARDIM_FLORA_216 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARDIM_FLORA_216, 
                style: style_JARDIM_FLORA_216,
                popuplayertitle: 'JARDIM_FLORA',
                interactive: true,
    title: 'JARDIM_FLORA<br />\
    <img src="styles/legend/JARDIM_FLORA_216_0.png" /> APP<br />\
    <img src="styles/legend/JARDIM_FLORA_216_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JARDIM_FLORA_216_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/JARDIM_FLORA_216_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/JARDIM_FLORA_216_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/JARDIM_FLORA_216_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/JARDIM_FLORA_216_6.png" /> PASSEIO<br />\
    <img src="styles/legend/JARDIM_FLORA_216_7.png" /> RUAS<br />\
    <img src="styles/legend/JARDIM_FLORA_216_8.png" /> LOTES MISTOS<br />' });
var format_JARDIM_COLORADO_217 = new ol.format.GeoJSON();
var features_JARDIM_COLORADO_217 = format_JARDIM_COLORADO_217.readFeatures(json_JARDIM_COLORADO_217, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JARDIM_COLORADO_217 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARDIM_COLORADO_217.addFeatures(features_JARDIM_COLORADO_217);
var lyr_JARDIM_COLORADO_217 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARDIM_COLORADO_217, 
                style: style_JARDIM_COLORADO_217,
                popuplayertitle: 'JARDIM_COLORADO',
                interactive: true,
    title: 'JARDIM_COLORADO<br />\
    <img src="styles/legend/JARDIM_COLORADO_217_0.png" /> APP<br />\
    <img src="styles/legend/JARDIM_COLORADO_217_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JARDIM_COLORADO_217_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/JARDIM_COLORADO_217_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/JARDIM_COLORADO_217_4.png" /> LOTES<br />\
    <img src="styles/legend/JARDIM_COLORADO_217_5.png" /> PASSEIO<br />\
    <img src="styles/legend/JARDIM_COLORADO_217_6.png" /> RUAS<br />' });
var format_JARDIM_ARIZONA_218 = new ol.format.GeoJSON();
var features_JARDIM_ARIZONA_218 = format_JARDIM_ARIZONA_218.readFeatures(json_JARDIM_ARIZONA_218, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JARDIM_ARIZONA_218 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARDIM_ARIZONA_218.addFeatures(features_JARDIM_ARIZONA_218);
var lyr_JARDIM_ARIZONA_218 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARDIM_ARIZONA_218, 
                style: style_JARDIM_ARIZONA_218,
                popuplayertitle: 'JARDIM_ARIZONA',
                interactive: true,
    title: 'JARDIM_ARIZONA<br />\
    <img src="styles/legend/JARDIM_ARIZONA_218_0.png" /> APP<br />\
    <img src="styles/legend/JARDIM_ARIZONA_218_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JARDIM_ARIZONA_218_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/JARDIM_ARIZONA_218_3.png" /> PASSEIO<br />\
    <img src="styles/legend/JARDIM_ARIZONA_218_4.png" /> QUADRAS<br />\
    <img src="styles/legend/JARDIM_ARIZONA_218_5.png" /> RUAS<br />\
    <img src="styles/legend/JARDIM_ARIZONA_218_6.png" /> VIELA<br />\
    <img src="styles/legend/JARDIM_ARIZONA_218_7.png" /> LOTES<br />' });
var format_INFRATECNICA_219 = new ol.format.GeoJSON();
var features_INFRATECNICA_219 = format_INFRATECNICA_219.readFeatures(json_INFRATECNICA_219, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_INFRATECNICA_219 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFRATECNICA_219.addFeatures(features_INFRATECNICA_219);
var lyr_INFRATECNICA_219 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INFRATECNICA_219, 
                style: style_INFRATECNICA_219,
                popuplayertitle: 'INFRATECNICA',
                interactive: true,
    title: 'INFRATECNICA<br />\
    <img src="styles/legend/INFRATECNICA_219_0.png" /> APP<br />\
    <img src="styles/legend/INFRATECNICA_219_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/INFRATECNICA_219_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/INFRATECNICA_219_3.png" /> LOTES<br />\
    <img src="styles/legend/INFRATECNICA_219_4.png" /> PASSEIO<br />\
    <img src="styles/legend/INFRATECNICA_219_5.png" /> RUAS<br />' });
var format_HORIZ_RESIDENCE_220 = new ol.format.GeoJSON();
var features_HORIZ_RESIDENCE_220 = format_HORIZ_RESIDENCE_220.readFeatures(json_HORIZ_RESIDENCE_220, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HORIZ_RESIDENCE_220 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HORIZ_RESIDENCE_220.addFeatures(features_HORIZ_RESIDENCE_220);
var lyr_HORIZ_RESIDENCE_220 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HORIZ_RESIDENCE_220, 
                style: style_HORIZ_RESIDENCE_220,
                popuplayertitle: 'HORIZ_RESIDENCE',
                interactive: true,
    title: 'HORIZ_RESIDENCE<br />\
    <img src="styles/legend/HORIZ_RESIDENCE_220_0.png" /> EDIFICIO<br />\
    <img src="styles/legend/HORIZ_RESIDENCE_220_1.png" /> PATIO<br />' });
var format_GLEBA_NOSSA_SENHORA_AUXILIADORA_221 = new ol.format.GeoJSON();
var features_GLEBA_NOSSA_SENHORA_AUXILIADORA_221 = format_GLEBA_NOSSA_SENHORA_AUXILIADORA_221.readFeatures(json_GLEBA_NOSSA_SENHORA_AUXILIADORA_221, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GLEBA_NOSSA_SENHORA_AUXILIADORA_221 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GLEBA_NOSSA_SENHORA_AUXILIADORA_221.addFeatures(features_GLEBA_NOSSA_SENHORA_AUXILIADORA_221);
var lyr_GLEBA_NOSSA_SENHORA_AUXILIADORA_221 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GLEBA_NOSSA_SENHORA_AUXILIADORA_221, 
                style: style_GLEBA_NOSSA_SENHORA_AUXILIADORA_221,
                popuplayertitle: 'GLEBA_NOSSA_SENHORA_AUXILIADORA',
                interactive: true,
                title: '<img src="styles/legend/GLEBA_NOSSA_SENHORA_AUXILIADORA_221.png" /> GLEBA_NOSSA_SENHORA_AUXILIADORA'
            });
var format_FRANCA_B6_222 = new ol.format.GeoJSON();
var features_FRANCA_B6_222 = format_FRANCA_B6_222.readFeatures(json_FRANCA_B6_222, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FRANCA_B6_222 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRANCA_B6_222.addFeatures(features_FRANCA_B6_222);
var lyr_FRANCA_B6_222 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FRANCA_B6_222, 
                style: style_FRANCA_B6_222,
                popuplayertitle: 'FRANCA_B6',
                interactive: true,
    title: 'FRANCA_B6<br />\
    <img src="styles/legend/FRANCA_B6_222_0.png" /> APP<br />\
    <img src="styles/legend/FRANCA_B6_222_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/FRANCA_B6_222_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/FRANCA_B6_222_3.png" /> LOTES<br />\
    <img src="styles/legend/FRANCA_B6_222_4.png" /> PASSEIO<br />\
    <img src="styles/legend/FRANCA_B6_222_5.png" /> RUAS<br />' });
var format_FERRACINI_223 = new ol.format.GeoJSON();
var features_FERRACINI_223 = format_FERRACINI_223.readFeatures(json_FERRACINI_223, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FERRACINI_223 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FERRACINI_223.addFeatures(features_FERRACINI_223);
var lyr_FERRACINI_223 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FERRACINI_223, 
                style: style_FERRACINI_223,
                popuplayertitle: 'FERRACINI',
                interactive: true,
    title: 'FERRACINI<br />\
    <img src="styles/legend/FERRACINI_223_0.png" /> APP<br />\
    <img src="styles/legend/FERRACINI_223_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/FERRACINI_223_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/FERRACINI_223_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/FERRACINI_223_4.png" /> LOTES<br />\
    <img src="styles/legend/FERRACINI_223_5.png" /> PASSEIO<br />\
    <img src="styles/legend/FERRACINI_223_6.png" /> RUAS<br />\
    <img src="styles/legend/FERRACINI_223_7.png" /> VIELA<br />' });
var format_FAZENDA_PROGRESSO_224 = new ol.format.GeoJSON();
var features_FAZENDA_PROGRESSO_224 = format_FAZENDA_PROGRESSO_224.readFeatures(json_FAZENDA_PROGRESSO_224, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FAZENDA_PROGRESSO_224 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAZENDA_PROGRESSO_224.addFeatures(features_FAZENDA_PROGRESSO_224);
var lyr_FAZENDA_PROGRESSO_224 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAZENDA_PROGRESSO_224, 
                style: style_FAZENDA_PROGRESSO_224,
                popuplayertitle: 'FAZENDA_PROGRESSO',
                interactive: true,
                title: '<img src="styles/legend/FAZENDA_PROGRESSO_224.png" /> FAZENDA_PROGRESSO'
            });
var format_FAZENDA_E_GRANJA_SANTA_RITA_II_225 = new ol.format.GeoJSON();
var features_FAZENDA_E_GRANJA_SANTA_RITA_II_225 = format_FAZENDA_E_GRANJA_SANTA_RITA_II_225.readFeatures(json_FAZENDA_E_GRANJA_SANTA_RITA_II_225, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FAZENDA_E_GRANJA_SANTA_RITA_II_225 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAZENDA_E_GRANJA_SANTA_RITA_II_225.addFeatures(features_FAZENDA_E_GRANJA_SANTA_RITA_II_225);
var lyr_FAZENDA_E_GRANJA_SANTA_RITA_II_225 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAZENDA_E_GRANJA_SANTA_RITA_II_225, 
                style: style_FAZENDA_E_GRANJA_SANTA_RITA_II_225,
                popuplayertitle: 'FAZENDA_E_GRANJA_SANTA_RITA_II',
                interactive: true,
                title: '<img src="styles/legend/FAZENDA_E_GRANJA_SANTA_RITA_II_225.png" /> FAZENDA_E_GRANJA_SANTA_RITA_II'
            });
var format_FAZENDA_E_GRANJA_SANTA_RITA_I_226 = new ol.format.GeoJSON();
var features_FAZENDA_E_GRANJA_SANTA_RITA_I_226 = format_FAZENDA_E_GRANJA_SANTA_RITA_I_226.readFeatures(json_FAZENDA_E_GRANJA_SANTA_RITA_I_226, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FAZENDA_E_GRANJA_SANTA_RITA_I_226 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAZENDA_E_GRANJA_SANTA_RITA_I_226.addFeatures(features_FAZENDA_E_GRANJA_SANTA_RITA_I_226);
var lyr_FAZENDA_E_GRANJA_SANTA_RITA_I_226 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAZENDA_E_GRANJA_SANTA_RITA_I_226, 
                style: style_FAZENDA_E_GRANJA_SANTA_RITA_I_226,
                popuplayertitle: 'FAZENDA_E_GRANJA_SANTA_RITA_I',
                interactive: true,
                title: '<img src="styles/legend/FAZENDA_E_GRANJA_SANTA_RITA_I_226.png" /> FAZENDA_E_GRANJA_SANTA_RITA_I'
            });
var format_ELIAS_227 = new ol.format.GeoJSON();
var features_ELIAS_227 = format_ELIAS_227.readFeatures(json_ELIAS_227, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ELIAS_227 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELIAS_227.addFeatures(features_ELIAS_227);
var lyr_ELIAS_227 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ELIAS_227, 
                style: style_ELIAS_227,
                popuplayertitle: 'ELIAS',
                interactive: true,
    title: 'ELIAS<br />\
    <img src="styles/legend/ELIAS_227_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ELIAS_227_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ELIAS_227_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ELIAS_227_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/ELIAS_227_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ELIAS_227_5.png" /> RUAS<br />\
    <img src="styles/legend/ELIAS_227_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ELIAS_227_7.png" /> LOTES MISTOS<br />' });
var format_EDIFICIO_SOL_NASCENTE_228 = new ol.format.GeoJSON();
var features_EDIFICIO_SOL_NASCENTE_228 = format_EDIFICIO_SOL_NASCENTE_228.readFeatures(json_EDIFICIO_SOL_NASCENTE_228, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EDIFICIO_SOL_NASCENTE_228 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDIFICIO_SOL_NASCENTE_228.addFeatures(features_EDIFICIO_SOL_NASCENTE_228);
var lyr_EDIFICIO_SOL_NASCENTE_228 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EDIFICIO_SOL_NASCENTE_228, 
                style: style_EDIFICIO_SOL_NASCENTE_228,
                popuplayertitle: 'EDIFICIO_SOL_NASCENTE',
                interactive: true,
    title: 'EDIFICIO_SOL_NASCENTE<br />\
    <img src="styles/legend/EDIFICIO_SOL_NASCENTE_228_0.png" /> EDIFICIO<br />\
    <img src="styles/legend/EDIFICIO_SOL_NASCENTE_228_1.png" /> PATIO<br />' });
var format_EDIFICIO_RUA_DO_SOL_229 = new ol.format.GeoJSON();
var features_EDIFICIO_RUA_DO_SOL_229 = format_EDIFICIO_RUA_DO_SOL_229.readFeatures(json_EDIFICIO_RUA_DO_SOL_229, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EDIFICIO_RUA_DO_SOL_229 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDIFICIO_RUA_DO_SOL_229.addFeatures(features_EDIFICIO_RUA_DO_SOL_229);
var lyr_EDIFICIO_RUA_DO_SOL_229 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EDIFICIO_RUA_DO_SOL_229, 
                style: style_EDIFICIO_RUA_DO_SOL_229,
                popuplayertitle: 'EDIFICIO_RUA_DO_SOL',
                interactive: true,
    title: 'EDIFICIO_RUA_DO_SOL<br />\
    <img src="styles/legend/EDIFICIO_RUA_DO_SOL_229_0.png" /> EDIFICIO<br />\
    <img src="styles/legend/EDIFICIO_RUA_DO_SOL_229_1.png" /> PATIO<br />' });
var format_EDIFICIO_RESIDENCIAL_HOPE_230 = new ol.format.GeoJSON();
var features_EDIFICIO_RESIDENCIAL_HOPE_230 = format_EDIFICIO_RESIDENCIAL_HOPE_230.readFeatures(json_EDIFICIO_RESIDENCIAL_HOPE_230, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EDIFICIO_RESIDENCIAL_HOPE_230 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDIFICIO_RESIDENCIAL_HOPE_230.addFeatures(features_EDIFICIO_RESIDENCIAL_HOPE_230);
var lyr_EDIFICIO_RESIDENCIAL_HOPE_230 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EDIFICIO_RESIDENCIAL_HOPE_230, 
                style: style_EDIFICIO_RESIDENCIAL_HOPE_230,
                popuplayertitle: 'EDIFICIO_RESIDENCIAL_HOPE',
                interactive: true,
    title: 'EDIFICIO_RESIDENCIAL_HOPE<br />\
    <img src="styles/legend/EDIFICIO_RESIDENCIAL_HOPE_230_0.png" /> EDIFICIO<br />\
    <img src="styles/legend/EDIFICIO_RESIDENCIAL_HOPE_230_1.png" /> PATIO<br />' });
var format_DIOCESE_DE_FRANCA_231 = new ol.format.GeoJSON();
var features_DIOCESE_DE_FRANCA_231 = format_DIOCESE_DE_FRANCA_231.readFeatures(json_DIOCESE_DE_FRANCA_231, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DIOCESE_DE_FRANCA_231 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIOCESE_DE_FRANCA_231.addFeatures(features_DIOCESE_DE_FRANCA_231);
var lyr_DIOCESE_DE_FRANCA_231 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DIOCESE_DE_FRANCA_231, 
                style: style_DIOCESE_DE_FRANCA_231,
                popuplayertitle: 'DIOCESE_DE_FRANCA',
                interactive: true,
    title: 'DIOCESE_DE_FRANCA<br />\
    <img src="styles/legend/DIOCESE_DE_FRANCA_231_0.png" /> APP<br />\
    <img src="styles/legend/DIOCESE_DE_FRANCA_231_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/DIOCESE_DE_FRANCA_231_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/DIOCESE_DE_FRANCA_231_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/DIOCESE_DE_FRANCA_231_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/DIOCESE_DE_FRANCA_231_5.png" /> PASSEIO<br />\
    <img src="styles/legend/DIOCESE_DE_FRANCA_231_6.png" /> RUAS<br />' });
var format_DA_VINCI_232 = new ol.format.GeoJSON();
var features_DA_VINCI_232 = format_DA_VINCI_232.readFeatures(json_DA_VINCI_232, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DA_VINCI_232 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DA_VINCI_232.addFeatures(features_DA_VINCI_232);
var lyr_DA_VINCI_232 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DA_VINCI_232, 
                style: style_DA_VINCI_232,
                popuplayertitle: 'DA_VINCI',
                interactive: true,
    title: 'DA_VINCI<br />\
    <img src="styles/legend/DA_VINCI_232_0.png" /> EDIFICIO<br />\
    <img src="styles/legend/DA_VINCI_232_1.png" /> PATIO<br />' });
var format_COMDOMINIO_II_CITY_PETROPOLIS_233 = new ol.format.GeoJSON();
var features_COMDOMINIO_II_CITY_PETROPOLIS_233 = format_COMDOMINIO_II_CITY_PETROPOLIS_233.readFeatures(json_COMDOMINIO_II_CITY_PETROPOLIS_233, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_COMDOMINIO_II_CITY_PETROPOLIS_233 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMDOMINIO_II_CITY_PETROPOLIS_233.addFeatures(features_COMDOMINIO_II_CITY_PETROPOLIS_233);
var lyr_COMDOMINIO_II_CITY_PETROPOLIS_233 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMDOMINIO_II_CITY_PETROPOLIS_233, 
                style: style_COMDOMINIO_II_CITY_PETROPOLIS_233,
                popuplayertitle: 'COMDOMINIO_II_CITY_PETROPOLIS',
                interactive: true,
    title: 'COMDOMINIO_II_CITY_PETROPOLIS<br />\
    <img src="styles/legend/COMDOMINIO_II_CITY_PETROPOLIS_233_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/COMDOMINIO_II_CITY_PETROPOLIS_233_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/COMDOMINIO_II_CITY_PETROPOLIS_233_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/COMDOMINIO_II_CITY_PETROPOLIS_233_3.png" /> BLOCOS DE APARTAMENTOS<br />\
    <img src="styles/legend/COMDOMINIO_II_CITY_PETROPOLIS_233_4.png" /> PASSEIO<br />\
    <img src="styles/legend/COMDOMINIO_II_CITY_PETROPOLIS_233_5.png" /> RUAS<br />\
    <img src="styles/legend/COMDOMINIO_II_CITY_PETROPOLIS_233_6.png" /> TALUDES<br />\
    <img src="styles/legend/COMDOMINIO_II_CITY_PETROPOLIS_233_7.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_COMDOMINIO_I_CITY_PETROPOLIS_234 = new ol.format.GeoJSON();
var features_COMDOMINIO_I_CITY_PETROPOLIS_234 = format_COMDOMINIO_I_CITY_PETROPOLIS_234.readFeatures(json_COMDOMINIO_I_CITY_PETROPOLIS_234, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_COMDOMINIO_I_CITY_PETROPOLIS_234 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMDOMINIO_I_CITY_PETROPOLIS_234.addFeatures(features_COMDOMINIO_I_CITY_PETROPOLIS_234);
var lyr_COMDOMINIO_I_CITY_PETROPOLIS_234 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMDOMINIO_I_CITY_PETROPOLIS_234, 
                style: style_COMDOMINIO_I_CITY_PETROPOLIS_234,
                popuplayertitle: 'COMDOMINIO_I_CITY_PETROPOLIS',
                interactive: true,
    title: 'COMDOMINIO_I_CITY_PETROPOLIS<br />\
    <img src="styles/legend/COMDOMINIO_I_CITY_PETROPOLIS_234_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/COMDOMINIO_I_CITY_PETROPOLIS_234_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/COMDOMINIO_I_CITY_PETROPOLIS_234_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/COMDOMINIO_I_CITY_PETROPOLIS_234_3.png" /> BLOCOS DE APARTAMENTOS<br />\
    <img src="styles/legend/COMDOMINIO_I_CITY_PETROPOLIS_234_4.png" /> PASSEIO<br />\
    <img src="styles/legend/COMDOMINIO_I_CITY_PETROPOLIS_234_5.png" /> RUAS<br />\
    <img src="styles/legend/COMDOMINIO_I_CITY_PETROPOLIS_234_6.png" /> TALUDES<br />\
    <img src="styles/legend/COMDOMINIO_I_CITY_PETROPOLIS_234_7.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_CHACARA_OLARIA_235 = new ol.format.GeoJSON();
var features_CHACARA_OLARIA_235 = format_CHACARA_OLARIA_235.readFeatures(json_CHACARA_OLARIA_235, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CHACARA_OLARIA_235 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHACARA_OLARIA_235.addFeatures(features_CHACARA_OLARIA_235);
var lyr_CHACARA_OLARIA_235 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHACARA_OLARIA_235, 
                style: style_CHACARA_OLARIA_235,
                popuplayertitle: 'CHACARA_OLARIA',
                interactive: true,
                title: '<img src="styles/legend/CHACARA_OLARIA_235.png" /> CHACARA_OLARIA'
            });
var format_CHACARA_BELA_VISTA_236 = new ol.format.GeoJSON();
var features_CHACARA_BELA_VISTA_236 = format_CHACARA_BELA_VISTA_236.readFeatures(json_CHACARA_BELA_VISTA_236, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CHACARA_BELA_VISTA_236 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHACARA_BELA_VISTA_236.addFeatures(features_CHACARA_BELA_VISTA_236);
var lyr_CHACARA_BELA_VISTA_236 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHACARA_BELA_VISTA_236, 
                style: style_CHACARA_BELA_VISTA_236,
                popuplayertitle: 'CHACARA_BELA_VISTA',
                interactive: true,
    title: 'CHACARA_BELA_VISTA<br />\
    <img src="styles/legend/CHACARA_BELA_VISTA_236_0.png" /> APP<br />\
    <img src="styles/legend/CHACARA_BELA_VISTA_236_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/CHACARA_BELA_VISTA_236_2.png" /> LOTES<br />\
    <img src="styles/legend/CHACARA_BELA_VISTA_236_3.png" /> PASSEIO<br />\
    <img src="styles/legend/CHACARA_BELA_VISTA_236_4.png" /> RUAS<br />' });
var format_BORDA_DA_MATA_237 = new ol.format.GeoJSON();
var features_BORDA_DA_MATA_237 = format_BORDA_DA_MATA_237.readFeatures(json_BORDA_DA_MATA_237, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BORDA_DA_MATA_237 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BORDA_DA_MATA_237.addFeatures(features_BORDA_DA_MATA_237);
var lyr_BORDA_DA_MATA_237 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BORDA_DA_MATA_237, 
                style: style_BORDA_DA_MATA_237,
                popuplayertitle: 'BORDA_DA_MATA',
                interactive: true,
    title: 'BORDA_DA_MATA<br />\
    <img src="styles/legend/BORDA_DA_MATA_237_0.png" /> APP<br />\
    <img src="styles/legend/BORDA_DA_MATA_237_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/BORDA_DA_MATA_237_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/BORDA_DA_MATA_237_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/BORDA_DA_MATA_237_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/BORDA_DA_MATA_237_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/BORDA_DA_MATA_237_6.png" /> PASSEIO<br />\
    <img src="styles/legend/BORDA_DA_MATA_237_7.png" /> RUAS<br />\
    <img src="styles/legend/BORDA_DA_MATA_237_8.png" /> SERVIDAO<br />' });
var format_ARTERIS_238 = new ol.format.GeoJSON();
var features_ARTERIS_238 = format_ARTERIS_238.readFeatures(json_ARTERIS_238, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARTERIS_238 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARTERIS_238.addFeatures(features_ARTERIS_238);
var lyr_ARTERIS_238 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARTERIS_238, 
                style: style_ARTERIS_238,
                popuplayertitle: 'ARTERIS',
                interactive: true,
    title: 'ARTERIS<br />\
    <img src="styles/legend/ARTERIS_238_0.png" /> AREA DESAPROPRIADA<br />\
    <img src="styles/legend/ARTERIS_238_1.png" /> OAE EXISTENTE<br />\
    <img src="styles/legend/ARTERIS_238_2.png" /> OAE PROJETADA<br />\
    <img src="styles/legend/ARTERIS_238_3.png" /> PASSARELA EXISTENTE<br />\
    <img src="styles/legend/ARTERIS_238_4.png" /> PASSEIO PROJETADO<br />\
    <img src="styles/legend/ARTERIS_238_5.png" /> PAVIMENTO DO DISPOSITIVO<br />\
    <img src="styles/legend/ARTERIS_238_6.png" /> PAVIMENTO EXISTENTE<br />\
    <img src="styles/legend/ARTERIS_238_7.png" /> PAVIMENTO PREFEITURA<br />' });
var format_ALAMO_239 = new ol.format.GeoJSON();
var features_ALAMO_239 = format_ALAMO_239.readFeatures(json_ALAMO_239, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ALAMO_239 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALAMO_239.addFeatures(features_ALAMO_239);
var lyr_ALAMO_239 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALAMO_239, 
                style: style_ALAMO_239,
                popuplayertitle: 'ALAMO',
                interactive: true,
    title: 'ALAMO<br />\
    <img src="styles/legend/ALAMO_239_0.png" /> APP<br />\
    <img src="styles/legend/ALAMO_239_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ALAMO_239_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ALAMO_239_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ALAMO_239_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/ALAMO_239_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/ALAMO_239_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ALAMO_239_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ALAMO_239_8.png" /> PASSEIO<br />\
    <img src="styles/legend/ALAMO_239_9.png" /> RUAS<br />\
    <img src="styles/legend/ALAMO_239_10.png" /> VIELA<br />' });
var format_ABU_DHABI_240 = new ol.format.GeoJSON();
var features_ABU_DHABI_240 = format_ABU_DHABI_240.readFeatures(json_ABU_DHABI_240, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ABU_DHABI_240 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABU_DHABI_240.addFeatures(features_ABU_DHABI_240);
var lyr_ABU_DHABI_240 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ABU_DHABI_240, 
                style: style_ABU_DHABI_240,
                popuplayertitle: 'ABU_DHABI',
                interactive: true,
    title: 'ABU_DHABI<br />\
    <img src="styles/legend/ABU_DHABI_240_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ABU_DHABI_240_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ABU_DHABI_240_2.png" /> CICLOVIA<br />\
    <img src="styles/legend/ABU_DHABI_240_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ABU_DHABI_240_4.png" /> RUAS<br />\
    <img src="styles/legend/ABU_DHABI_240_5.png" /> VIELA<br />\
    <img src="styles/legend/ABU_DHABI_240_6.png" /> QUADRAS<br />\
    <img src="styles/legend/ABU_DHABI_240_7.png" /> LOTES<br />' });
var format_SERVIDAO_GUANABARA_241 = new ol.format.GeoJSON();
var features_SERVIDAO_GUANABARA_241 = format_SERVIDAO_GUANABARA_241.readFeatures(json_SERVIDAO_GUANABARA_241, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SERVIDAO_GUANABARA_241 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVIDAO_GUANABARA_241.addFeatures(features_SERVIDAO_GUANABARA_241);
var lyr_SERVIDAO_GUANABARA_241 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SERVIDAO_GUANABARA_241, 
                style: style_SERVIDAO_GUANABARA_241,
                popuplayertitle: 'SERVIDAO_GUANABARA',
                interactive: true,
                title: '<img src="styles/legend/SERVIDAO_GUANABARA_241.png" /> SERVIDAO_GUANABARA'
            });
var format_RUA_ALFIO_BENEDINI_242 = new ol.format.GeoJSON();
var features_RUA_ALFIO_BENEDINI_242 = format_RUA_ALFIO_BENEDINI_242.readFeatures(json_RUA_ALFIO_BENEDINI_242, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RUA_ALFIO_BENEDINI_242 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUA_ALFIO_BENEDINI_242.addFeatures(features_RUA_ALFIO_BENEDINI_242);
var lyr_RUA_ALFIO_BENEDINI_242 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUA_ALFIO_BENEDINI_242, 
                style: style_RUA_ALFIO_BENEDINI_242,
                popuplayertitle: 'RUA _ALFIO_BENEDINI',
                interactive: true,
                title: '<img src="styles/legend/RUA_ALFIO_BENEDINI_242.png" /> RUA _ALFIO_BENEDINI'
            });
var format_QUADRA_18_VILA_EXPOSICAO_243 = new ol.format.GeoJSON();
var features_QUADRA_18_VILA_EXPOSICAO_243 = format_QUADRA_18_VILA_EXPOSICAO_243.readFeatures(json_QUADRA_18_VILA_EXPOSICAO_243, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_QUADRA_18_VILA_EXPOSICAO_243 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QUADRA_18_VILA_EXPOSICAO_243.addFeatures(features_QUADRA_18_VILA_EXPOSICAO_243);
var lyr_QUADRA_18_VILA_EXPOSICAO_243 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QUADRA_18_VILA_EXPOSICAO_243, 
                style: style_QUADRA_18_VILA_EXPOSICAO_243,
                popuplayertitle: 'QUADRA_18_VILA_EXPOSICAO',
                interactive: true,
                title: '<img src="styles/legend/QUADRA_18_VILA_EXPOSICAO_243.png" /> QUADRA_18_VILA_EXPOSICAO'
            });
var format_ETAPA_PREVIA_244 = new ol.format.GeoJSON();
var features_ETAPA_PREVIA_244 = format_ETAPA_PREVIA_244.readFeatures(json_ETAPA_PREVIA_244, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ETAPA_PREVIA_244 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ETAPA_PREVIA_244.addFeatures(features_ETAPA_PREVIA_244);
var lyr_ETAPA_PREVIA_244 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ETAPA_PREVIA_244, 
                style: style_ETAPA_PREVIA_244,
                popuplayertitle: 'ETAPA_PREVIA',
                interactive: true,
                title: '<img src="styles/legend/ETAPA_PREVIA_244.png" /> ETAPA_PREVIA'
            });
var format_ETAPA_DIRETRIZ_245 = new ol.format.GeoJSON();
var features_ETAPA_DIRETRIZ_245 = format_ETAPA_DIRETRIZ_245.readFeatures(json_ETAPA_DIRETRIZ_245, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ETAPA_DIRETRIZ_245 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ETAPA_DIRETRIZ_245.addFeatures(features_ETAPA_DIRETRIZ_245);
var lyr_ETAPA_DIRETRIZ_245 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ETAPA_DIRETRIZ_245, 
                style: style_ETAPA_DIRETRIZ_245,
                popuplayertitle: 'ETAPA_DIRETRIZ',
                interactive: true,
                title: '<img src="styles/legend/ETAPA_DIRETRIZ_245.png" /> ETAPA_DIRETRIZ'
            });
var format_ETAPA_DEFINITIVA_246 = new ol.format.GeoJSON();
var features_ETAPA_DEFINITIVA_246 = format_ETAPA_DEFINITIVA_246.readFeatures(json_ETAPA_DEFINITIVA_246, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ETAPA_DEFINITIVA_246 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ETAPA_DEFINITIVA_246.addFeatures(features_ETAPA_DEFINITIVA_246);
var lyr_ETAPA_DEFINITIVA_246 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ETAPA_DEFINITIVA_246, 
                style: style_ETAPA_DEFINITIVA_246,
                popuplayertitle: 'ETAPA_DEFINITIVA',
                interactive: true,
                title: '<img src="styles/legend/ETAPA_DEFINITIVA_246.png" /> ETAPA_DEFINITIVA'
            });
var format_ETAPA_APROVADO_247 = new ol.format.GeoJSON();
var features_ETAPA_APROVADO_247 = format_ETAPA_APROVADO_247.readFeatures(json_ETAPA_APROVADO_247, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ETAPA_APROVADO_247 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ETAPA_APROVADO_247.addFeatures(features_ETAPA_APROVADO_247);
var lyr_ETAPA_APROVADO_247 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ETAPA_APROVADO_247, 
                style: style_ETAPA_APROVADO_247,
                popuplayertitle: 'ETAPA_APROVADO',
                interactive: true,
                title: '<img src="styles/legend/ETAPA_APROVADO_247.png" /> ETAPA_APROVADO'
            });
var format_ARTERIS_248 = new ol.format.GeoJSON();
var features_ARTERIS_248 = format_ARTERIS_248.readFeatures(json_ARTERIS_248, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARTERIS_248 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARTERIS_248.addFeatures(features_ARTERIS_248);
var lyr_ARTERIS_248 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARTERIS_248, 
                style: style_ARTERIS_248,
                popuplayertitle: 'ARTERIS',
                interactive: true,
                title: '<img src="styles/legend/ARTERIS_248.png" /> ARTERIS'
            });
var format_IRREGULAR_249 = new ol.format.GeoJSON();
var features_IRREGULAR_249 = format_IRREGULAR_249.readFeatures(json_IRREGULAR_249, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IRREGULAR_249 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IRREGULAR_249.addFeatures(features_IRREGULAR_249);
var lyr_IRREGULAR_249 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IRREGULAR_249, 
                style: style_IRREGULAR_249,
                popuplayertitle: 'IRREGULAR',
                interactive: true,
                title: '<img src="styles/legend/IRREGULAR_249.png" /> IRREGULAR'
            });
var format_IRREGULAR174UNID_250 = new ol.format.GeoJSON();
var features_IRREGULAR174UNID_250 = format_IRREGULAR174UNID_250.readFeatures(json_IRREGULAR174UNID_250, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IRREGULAR174UNID_250 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IRREGULAR174UNID_250.addFeatures(features_IRREGULAR174UNID_250);
var lyr_IRREGULAR174UNID_250 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IRREGULAR174UNID_250, 
                style: style_IRREGULAR174UNID_250,
                popuplayertitle: 'IRREGULAR (174 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/IRREGULAR174UNID_250.png" /> IRREGULAR (174 UNID.)'
            });
var format_FBDS_RIOS_DUPLOS_251 = new ol.format.GeoJSON();
var features_FBDS_RIOS_DUPLOS_251 = format_FBDS_RIOS_DUPLOS_251.readFeatures(json_FBDS_RIOS_DUPLOS_251, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FBDS_RIOS_DUPLOS_251 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FBDS_RIOS_DUPLOS_251.addFeatures(features_FBDS_RIOS_DUPLOS_251);
var lyr_FBDS_RIOS_DUPLOS_251 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FBDS_RIOS_DUPLOS_251, 
                style: style_FBDS_RIOS_DUPLOS_251,
                popuplayertitle: 'FBDS_RIOS_DUPLOS',
                interactive: true,
                title: '<img src="styles/legend/FBDS_RIOS_DUPLOS_251.png" /> FBDS_RIOS_DUPLOS'
            });
var format_FBDS_MASSAS_DAGUA_252 = new ol.format.GeoJSON();
var features_FBDS_MASSAS_DAGUA_252 = format_FBDS_MASSAS_DAGUA_252.readFeatures(json_FBDS_MASSAS_DAGUA_252, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FBDS_MASSAS_DAGUA_252 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FBDS_MASSAS_DAGUA_252.addFeatures(features_FBDS_MASSAS_DAGUA_252);
var lyr_FBDS_MASSAS_DAGUA_252 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FBDS_MASSAS_DAGUA_252, 
                style: style_FBDS_MASSAS_DAGUA_252,
                popuplayertitle: 'FBDS_MASSAS_DAGUA',
                interactive: true,
                title: '<img src="styles/legend/FBDS_MASSAS_DAGUA_252.png" /> FBDS_MASSAS_DAGUA'
            });
var format_FBDS_APP_253 = new ol.format.GeoJSON();
var features_FBDS_APP_253 = format_FBDS_APP_253.readFeatures(json_FBDS_APP_253, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FBDS_APP_253 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FBDS_APP_253.addFeatures(features_FBDS_APP_253);
var lyr_FBDS_APP_253 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FBDS_APP_253, 
                style: style_FBDS_APP_253,
                popuplayertitle: 'FBDS_APP',
                interactive: true,
                title: '<img src="styles/legend/FBDS_APP_253.png" /> FBDS_APP'
            });
var format_FBDS_NASCENTES_254 = new ol.format.GeoJSON();
var features_FBDS_NASCENTES_254 = format_FBDS_NASCENTES_254.readFeatures(json_FBDS_NASCENTES_254, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FBDS_NASCENTES_254 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FBDS_NASCENTES_254.addFeatures(features_FBDS_NASCENTES_254);
var lyr_FBDS_NASCENTES_254 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FBDS_NASCENTES_254, 
                style: style_FBDS_NASCENTES_254,
                popuplayertitle: 'FBDS_NASCENTES',
                interactive: true,
                title: '<img src="styles/legend/FBDS_NASCENTES_254.png" /> FBDS_NASCENTES'
            });
var format_FBDS_RIOS_SIMPLES_255 = new ol.format.GeoJSON();
var features_FBDS_RIOS_SIMPLES_255 = format_FBDS_RIOS_SIMPLES_255.readFeatures(json_FBDS_RIOS_SIMPLES_255, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FBDS_RIOS_SIMPLES_255 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FBDS_RIOS_SIMPLES_255.addFeatures(features_FBDS_RIOS_SIMPLES_255);
var lyr_FBDS_RIOS_SIMPLES_255 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FBDS_RIOS_SIMPLES_255, 
                style: style_FBDS_RIOS_SIMPLES_255,
                popuplayertitle: 'FBDS_RIOS_SIMPLES',
                interactive: true,
                title: '<img src="styles/legend/FBDS_RIOS_SIMPLES_255.png" /> FBDS_RIOS_SIMPLES'
            });
var format_CORPO_HIDRICO_CANAL_FECHADO088KM_256 = new ol.format.GeoJSON();
var features_CORPO_HIDRICO_CANAL_FECHADO088KM_256 = format_CORPO_HIDRICO_CANAL_FECHADO088KM_256.readFeatures(json_CORPO_HIDRICO_CANAL_FECHADO088KM_256, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CORPO_HIDRICO_CANAL_FECHADO088KM_256 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORPO_HIDRICO_CANAL_FECHADO088KM_256.addFeatures(features_CORPO_HIDRICO_CANAL_FECHADO088KM_256);
var lyr_CORPO_HIDRICO_CANAL_FECHADO088KM_256 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORPO_HIDRICO_CANAL_FECHADO088KM_256, 
                style: style_CORPO_HIDRICO_CANAL_FECHADO088KM_256,
                popuplayertitle: 'CORPO_HIDRICO_CANAL_FECHADO (0,88 KM)',
                interactive: true,
                title: '<img src="styles/legend/CORPO_HIDRICO_CANAL_FECHADO088KM_256.png" /> CORPO_HIDRICO_CANAL_FECHADO (0,88 KM)'
            });
var format_CORPO_HIDRICO_CANAL_ABERTO1252KM_257 = new ol.format.GeoJSON();
var features_CORPO_HIDRICO_CANAL_ABERTO1252KM_257 = format_CORPO_HIDRICO_CANAL_ABERTO1252KM_257.readFeatures(json_CORPO_HIDRICO_CANAL_ABERTO1252KM_257, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CORPO_HIDRICO_CANAL_ABERTO1252KM_257 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORPO_HIDRICO_CANAL_ABERTO1252KM_257.addFeatures(features_CORPO_HIDRICO_CANAL_ABERTO1252KM_257);
var lyr_CORPO_HIDRICO_CANAL_ABERTO1252KM_257 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORPO_HIDRICO_CANAL_ABERTO1252KM_257, 
                style: style_CORPO_HIDRICO_CANAL_ABERTO1252KM_257,
                popuplayertitle: 'CORPO_HIDRICO_CANAL_ABERTO (12,52 KM)',
                interactive: true,
                title: '<img src="styles/legend/CORPO_HIDRICO_CANAL_ABERTO1252KM_257.png" /> CORPO_HIDRICO_CANAL_ABERTO (12,52 KM)'
            });
var format_PARQUE_ZUMBI_DOS_PALMARES_258 = new ol.format.GeoJSON();
var features_PARQUE_ZUMBI_DOS_PALMARES_258 = format_PARQUE_ZUMBI_DOS_PALMARES_258.readFeatures(json_PARQUE_ZUMBI_DOS_PALMARES_258, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_ZUMBI_DOS_PALMARES_258 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_ZUMBI_DOS_PALMARES_258.addFeatures(features_PARQUE_ZUMBI_DOS_PALMARES_258);
var lyr_PARQUE_ZUMBI_DOS_PALMARES_258 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_ZUMBI_DOS_PALMARES_258, 
                style: style_PARQUE_ZUMBI_DOS_PALMARES_258,
                popuplayertitle: 'PARQUE_ZUMBI_DOS_PALMARES',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_ZUMBI_DOS_PALMARES_258.png" /> PARQUE_ZUMBI_DOS_PALMARES'
            });
var format_ATERRO_DAS_MARITACAS_259 = new ol.format.GeoJSON();
var features_ATERRO_DAS_MARITACAS_259 = format_ATERRO_DAS_MARITACAS_259.readFeatures(json_ATERRO_DAS_MARITACAS_259, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ATERRO_DAS_MARITACAS_259 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATERRO_DAS_MARITACAS_259.addFeatures(features_ATERRO_DAS_MARITACAS_259);
var lyr_ATERRO_DAS_MARITACAS_259 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATERRO_DAS_MARITACAS_259, 
                style: style_ATERRO_DAS_MARITACAS_259,
                popuplayertitle: 'ATERRO_DAS_MARITACAS',
                interactive: true,
                title: '<img src="styles/legend/ATERRO_DAS_MARITACAS_259.png" /> ATERRO_DAS_MARITACAS'
            });
var format_ATERRO_DAS_MARITACAS_ETAPA_3_260 = new ol.format.GeoJSON();
var features_ATERRO_DAS_MARITACAS_ETAPA_3_260 = format_ATERRO_DAS_MARITACAS_ETAPA_3_260.readFeatures(json_ATERRO_DAS_MARITACAS_ETAPA_3_260, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ATERRO_DAS_MARITACAS_ETAPA_3_260 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATERRO_DAS_MARITACAS_ETAPA_3_260.addFeatures(features_ATERRO_DAS_MARITACAS_ETAPA_3_260);
var lyr_ATERRO_DAS_MARITACAS_ETAPA_3_260 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATERRO_DAS_MARITACAS_ETAPA_3_260, 
                style: style_ATERRO_DAS_MARITACAS_ETAPA_3_260,
                popuplayertitle: 'ATERRO_DAS_MARITACAS_ETAPA_3',
                interactive: true,
                title: '<img src="styles/legend/ATERRO_DAS_MARITACAS_ETAPA_3_260.png" /> ATERRO_DAS_MARITACAS_ETAPA_3'
            });
var format_ATERRO_DAS_MARITACAS_ETAPA_2_261 = new ol.format.GeoJSON();
var features_ATERRO_DAS_MARITACAS_ETAPA_2_261 = format_ATERRO_DAS_MARITACAS_ETAPA_2_261.readFeatures(json_ATERRO_DAS_MARITACAS_ETAPA_2_261, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ATERRO_DAS_MARITACAS_ETAPA_2_261 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATERRO_DAS_MARITACAS_ETAPA_2_261.addFeatures(features_ATERRO_DAS_MARITACAS_ETAPA_2_261);
var lyr_ATERRO_DAS_MARITACAS_ETAPA_2_261 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATERRO_DAS_MARITACAS_ETAPA_2_261, 
                style: style_ATERRO_DAS_MARITACAS_ETAPA_2_261,
                popuplayertitle: 'ATERRO_DAS_MARITACAS_ETAPA_2',
                interactive: true,
                title: '<img src="styles/legend/ATERRO_DAS_MARITACAS_ETAPA_2_261.png" /> ATERRO_DAS_MARITACAS_ETAPA_2'
            });
var format_ATERRO_DAS_MARITACAS_ETAPA_1_262 = new ol.format.GeoJSON();
var features_ATERRO_DAS_MARITACAS_ETAPA_1_262 = format_ATERRO_DAS_MARITACAS_ETAPA_1_262.readFeatures(json_ATERRO_DAS_MARITACAS_ETAPA_1_262, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ATERRO_DAS_MARITACAS_ETAPA_1_262 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATERRO_DAS_MARITACAS_ETAPA_1_262.addFeatures(features_ATERRO_DAS_MARITACAS_ETAPA_1_262);
var lyr_ATERRO_DAS_MARITACAS_ETAPA_1_262 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATERRO_DAS_MARITACAS_ETAPA_1_262, 
                style: style_ATERRO_DAS_MARITACAS_ETAPA_1_262,
                popuplayertitle: 'ATERRO_DAS_MARITACAS_ETAPA_1',
                interactive: true,
                title: '<img src="styles/legend/ATERRO_DAS_MARITACAS_ETAPA_1_262.png" /> ATERRO_DAS_MARITACAS_ETAPA_1'
            });
var format_ATERRO_DA_FAZENDA_MUNICIPAL_263 = new ol.format.GeoJSON();
var features_ATERRO_DA_FAZENDA_MUNICIPAL_263 = format_ATERRO_DA_FAZENDA_MUNICIPAL_263.readFeatures(json_ATERRO_DA_FAZENDA_MUNICIPAL_263, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_263 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_263.addFeatures(features_ATERRO_DA_FAZENDA_MUNICIPAL_263);
var lyr_ATERRO_DA_FAZENDA_MUNICIPAL_263 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_263, 
                style: style_ATERRO_DA_FAZENDA_MUNICIPAL_263,
                popuplayertitle: 'ATERRO_DA_FAZENDA_MUNICIPAL',
                interactive: true,
                title: '<img src="styles/legend/ATERRO_DA_FAZENDA_MUNICIPAL_263.png" /> ATERRO_DA_FAZENDA_MUNICIPAL'
            });
var format_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_264 = new ol.format.GeoJSON();
var features_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_264 = format_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_264.readFeatures(json_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_264, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_264 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_264.addFeatures(features_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_264);
var lyr_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_264 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_264, 
                style: style_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_264,
                popuplayertitle: 'ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA',
                interactive: true,
                title: '<img src="styles/legend/ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_264.png" /> ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA'
            });
var format_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_265 = new ol.format.GeoJSON();
var features_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_265 = format_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_265.readFeatures(json_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_265, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_265 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_265.addFeatures(features_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_265);
var lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_265 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_265, 
                style: style_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_265,
                popuplayertitle: 'ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS',
                interactive: true,
                title: '<img src="styles/legend/ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_265.png" /> ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS'
            });
var format_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_266 = new ol.format.GeoJSON();
var features_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_266 = format_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_266.readFeatures(json_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_266, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_266 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_266.addFeatures(features_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_266);
var lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_266 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_266, 
                style: style_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_266,
                popuplayertitle: 'ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA',
                interactive: true,
                title: '<img src="styles/legend/ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_266.png" /> ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA'
            });
var format_AREA_B_DA_FAZENDA_MUNICIPAL_267 = new ol.format.GeoJSON();
var features_AREA_B_DA_FAZENDA_MUNICIPAL_267 = format_AREA_B_DA_FAZENDA_MUNICIPAL_267.readFeatures(json_AREA_B_DA_FAZENDA_MUNICIPAL_267, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_B_DA_FAZENDA_MUNICIPAL_267 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_B_DA_FAZENDA_MUNICIPAL_267.addFeatures(features_AREA_B_DA_FAZENDA_MUNICIPAL_267);
var lyr_AREA_B_DA_FAZENDA_MUNICIPAL_267 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_B_DA_FAZENDA_MUNICIPAL_267, 
                style: style_AREA_B_DA_FAZENDA_MUNICIPAL_267,
                popuplayertitle: 'AREA_B_DA_FAZENDA_MUNICIPAL',
                interactive: true,
                title: '<img src="styles/legend/AREA_B_DA_FAZENDA_MUNICIPAL_267.png" /> AREA_B_DA_FAZENDA_MUNICIPAL'
            });
var format_AREA_B_DA_FAZENDA_MUNICIPAL_268 = new ol.format.GeoJSON();
var features_AREA_B_DA_FAZENDA_MUNICIPAL_268 = format_AREA_B_DA_FAZENDA_MUNICIPAL_268.readFeatures(json_AREA_B_DA_FAZENDA_MUNICIPAL_268, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_B_DA_FAZENDA_MUNICIPAL_268 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_B_DA_FAZENDA_MUNICIPAL_268.addFeatures(features_AREA_B_DA_FAZENDA_MUNICIPAL_268);
var lyr_AREA_B_DA_FAZENDA_MUNICIPAL_268 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_B_DA_FAZENDA_MUNICIPAL_268, 
                style: style_AREA_B_DA_FAZENDA_MUNICIPAL_268,
                popuplayertitle: 'AREA_B_DA_FAZENDA_MUNICIPAL',
                interactive: true,
                title: '<img src="styles/legend/AREA_B_DA_FAZENDA_MUNICIPAL_268.png" /> AREA_B_DA_FAZENDA_MUNICIPAL'
            });
var format_PARTE_DA_AREA_G_AVERBADA_269 = new ol.format.GeoJSON();
var features_PARTE_DA_AREA_G_AVERBADA_269 = format_PARTE_DA_AREA_G_AVERBADA_269.readFeatures(json_PARTE_DA_AREA_G_AVERBADA_269, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARTE_DA_AREA_G_AVERBADA_269 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARTE_DA_AREA_G_AVERBADA_269.addFeatures(features_PARTE_DA_AREA_G_AVERBADA_269);
var lyr_PARTE_DA_AREA_G_AVERBADA_269 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARTE_DA_AREA_G_AVERBADA_269, 
                style: style_PARTE_DA_AREA_G_AVERBADA_269,
                popuplayertitle: 'PARTE_DA_AREA_G_AVERBADA',
                interactive: true,
                title: '<img src="styles/legend/PARTE_DA_AREA_G_AVERBADA_269.png" /> PARTE_DA_AREA_G_AVERBADA'
            });
var format_PARTE_DA_AREA_G_A_SER_AVERBADA_270 = new ol.format.GeoJSON();
var features_PARTE_DA_AREA_G_A_SER_AVERBADA_270 = format_PARTE_DA_AREA_G_A_SER_AVERBADA_270.readFeatures(json_PARTE_DA_AREA_G_A_SER_AVERBADA_270, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARTE_DA_AREA_G_A_SER_AVERBADA_270 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARTE_DA_AREA_G_A_SER_AVERBADA_270.addFeatures(features_PARTE_DA_AREA_G_A_SER_AVERBADA_270);
var lyr_PARTE_DA_AREA_G_A_SER_AVERBADA_270 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARTE_DA_AREA_G_A_SER_AVERBADA_270, 
                style: style_PARTE_DA_AREA_G_A_SER_AVERBADA_270,
                popuplayertitle: 'PARTE_DA_AREA_G_A_SER_AVERBADA',
                interactive: true,
                title: '<img src="styles/legend/PARTE_DA_AREA_G_A_SER_AVERBADA_270.png" /> PARTE_DA_AREA_G_A_SER_AVERBADA'
            });
var format_CONJUNTO_HABITACIONAL_271 = new ol.format.GeoJSON();
var features_CONJUNTO_HABITACIONAL_271 = format_CONJUNTO_HABITACIONAL_271.readFeatures(json_CONJUNTO_HABITACIONAL_271, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CONJUNTO_HABITACIONAL_271 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONJUNTO_HABITACIONAL_271.addFeatures(features_CONJUNTO_HABITACIONAL_271);
var lyr_CONJUNTO_HABITACIONAL_271 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONJUNTO_HABITACIONAL_271, 
                style: style_CONJUNTO_HABITACIONAL_271,
                popuplayertitle: 'CONJUNTO_HABITACIONAL',
                interactive: true,
                title: '<img src="styles/legend/CONJUNTO_HABITACIONAL_271.png" /> CONJUNTO_HABITACIONAL'
            });
var format_AV_ACESSO_COLEGIO_AGRICOLA_272 = new ol.format.GeoJSON();
var features_AV_ACESSO_COLEGIO_AGRICOLA_272 = format_AV_ACESSO_COLEGIO_AGRICOLA_272.readFeatures(json_AV_ACESSO_COLEGIO_AGRICOLA_272, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AV_ACESSO_COLEGIO_AGRICOLA_272 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AV_ACESSO_COLEGIO_AGRICOLA_272.addFeatures(features_AV_ACESSO_COLEGIO_AGRICOLA_272);
var lyr_AV_ACESSO_COLEGIO_AGRICOLA_272 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AV_ACESSO_COLEGIO_AGRICOLA_272, 
                style: style_AV_ACESSO_COLEGIO_AGRICOLA_272,
                popuplayertitle: 'AV_ACESSO_COLEGIO_AGRICOLA',
                interactive: true,
                title: '<img src="styles/legend/AV_ACESSO_COLEGIO_AGRICOLA_272.png" /> AV_ACESSO_COLEGIO_AGRICOLA'
            });
var format_AREA_N2_273 = new ol.format.GeoJSON();
var features_AREA_N2_273 = format_AREA_N2_273.readFeatures(json_AREA_N2_273, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_N2_273 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_N2_273.addFeatures(features_AREA_N2_273);
var lyr_AREA_N2_273 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_N2_273, 
                style: style_AREA_N2_273,
                popuplayertitle: 'AREA_N2',
                interactive: true,
                title: '<img src="styles/legend/AREA_N2_273.png" /> AREA_N2'
            });
var format_AREA_N1_274 = new ol.format.GeoJSON();
var features_AREA_N1_274 = format_AREA_N1_274.readFeatures(json_AREA_N1_274, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_N1_274 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_N1_274.addFeatures(features_AREA_N1_274);
var lyr_AREA_N1_274 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_N1_274, 
                style: style_AREA_N1_274,
                popuplayertitle: 'AREA_N1',
                interactive: true,
                title: '<img src="styles/legend/AREA_N1_274.png" /> AREA_N1'
            });
var format_AREA_N_275 = new ol.format.GeoJSON();
var features_AREA_N_275 = format_AREA_N_275.readFeatures(json_AREA_N_275, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_N_275 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_N_275.addFeatures(features_AREA_N_275);
var lyr_AREA_N_275 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_N_275, 
                style: style_AREA_N_275,
                popuplayertitle: 'AREA_N',
                interactive: true,
                title: '<img src="styles/legend/AREA_N_275.png" /> AREA_N'
            });
var format_AREA_K_276 = new ol.format.GeoJSON();
var features_AREA_K_276 = format_AREA_K_276.readFeatures(json_AREA_K_276, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_K_276 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_K_276.addFeatures(features_AREA_K_276);
var lyr_AREA_K_276 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_K_276, 
                style: style_AREA_K_276,
                popuplayertitle: 'AREA_K',
                interactive: true,
                title: '<img src="styles/legend/AREA_K_276.png" /> AREA_K'
            });
var format_AREA_J_277 = new ol.format.GeoJSON();
var features_AREA_J_277 = format_AREA_J_277.readFeatures(json_AREA_J_277, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_J_277 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_J_277.addFeatures(features_AREA_J_277);
var lyr_AREA_J_277 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_J_277, 
                style: style_AREA_J_277,
                popuplayertitle: 'AREA_J',
                interactive: true,
                title: '<img src="styles/legend/AREA_J_277.png" /> AREA_J'
            });
var format_AREA_I_278 = new ol.format.GeoJSON();
var features_AREA_I_278 = format_AREA_I_278.readFeatures(json_AREA_I_278, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_I_278 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_I_278.addFeatures(features_AREA_I_278);
var lyr_AREA_I_278 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_I_278, 
                style: style_AREA_I_278,
                popuplayertitle: 'AREA_I',
                interactive: true,
                title: '<img src="styles/legend/AREA_I_278.png" /> AREA_I'
            });
var format_AREA_H_279 = new ol.format.GeoJSON();
var features_AREA_H_279 = format_AREA_H_279.readFeatures(json_AREA_H_279, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_H_279 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_H_279.addFeatures(features_AREA_H_279);
var lyr_AREA_H_279 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_H_279, 
                style: style_AREA_H_279,
                popuplayertitle: 'AREA_H',
                interactive: true,
                title: '<img src="styles/legend/AREA_H_279.png" /> AREA_H'
            });
var format_AREA_G_280 = new ol.format.GeoJSON();
var features_AREA_G_280 = format_AREA_G_280.readFeatures(json_AREA_G_280, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_G_280 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_G_280.addFeatures(features_AREA_G_280);
var lyr_AREA_G_280 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_G_280, 
                style: style_AREA_G_280,
                popuplayertitle: 'AREA_G',
                interactive: true,
                title: '<img src="styles/legend/AREA_G_280.png" /> AREA_G'
            });
var format_AREA_F_281 = new ol.format.GeoJSON();
var features_AREA_F_281 = format_AREA_F_281.readFeatures(json_AREA_F_281, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_F_281 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_F_281.addFeatures(features_AREA_F_281);
var lyr_AREA_F_281 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_F_281, 
                style: style_AREA_F_281,
                popuplayertitle: 'AREA_F',
                interactive: true,
                title: '<img src="styles/legend/AREA_F_281.png" /> AREA_F'
            });
var format_AREA_E_282 = new ol.format.GeoJSON();
var features_AREA_E_282 = format_AREA_E_282.readFeatures(json_AREA_E_282, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_E_282 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_E_282.addFeatures(features_AREA_E_282);
var lyr_AREA_E_282 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_E_282, 
                style: style_AREA_E_282,
                popuplayertitle: 'AREA_E',
                interactive: true,
                title: '<img src="styles/legend/AREA_E_282.png" /> AREA_E'
            });
var format_AREA_D_283 = new ol.format.GeoJSON();
var features_AREA_D_283 = format_AREA_D_283.readFeatures(json_AREA_D_283, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_D_283 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_D_283.addFeatures(features_AREA_D_283);
var lyr_AREA_D_283 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_D_283, 
                style: style_AREA_D_283,
                popuplayertitle: 'AREA_D',
                interactive: true,
                title: '<img src="styles/legend/AREA_D_283.png" /> AREA_D'
            });
var format_AREA_C_284 = new ol.format.GeoJSON();
var features_AREA_C_284 = format_AREA_C_284.readFeatures(json_AREA_C_284, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_C_284 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_C_284.addFeatures(features_AREA_C_284);
var lyr_AREA_C_284 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_C_284, 
                style: style_AREA_C_284,
                popuplayertitle: 'AREA_C',
                interactive: true,
                title: '<img src="styles/legend/AREA_C_284.png" /> AREA_C'
            });
var format_AREA_B_285 = new ol.format.GeoJSON();
var features_AREA_B_285 = format_AREA_B_285.readFeatures(json_AREA_B_285, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_B_285 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_B_285.addFeatures(features_AREA_B_285);
var lyr_AREA_B_285 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_B_285, 
                style: style_AREA_B_285,
                popuplayertitle: 'AREA_B',
                interactive: true,
                title: '<img src="styles/legend/AREA_B_285.png" /> AREA_B'
            });
var format_AREA_A_286 = new ol.format.GeoJSON();
var features_AREA_A_286 = format_AREA_A_286.readFeatures(json_AREA_A_286, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_A_286 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_A_286.addFeatures(features_AREA_A_286);
var lyr_AREA_A_286 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_A_286, 
                style: style_AREA_A_286,
                popuplayertitle: 'AREA_A',
                interactive: true,
                title: '<img src="styles/legend/AREA_A_286.png" /> AREA_A'
            });
var format_PROPOSTO_287 = new ol.format.GeoJSON();
var features_PROPOSTO_287 = format_PROPOSTO_287.readFeatures(json_PROPOSTO_287, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PROPOSTO_287 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROPOSTO_287.addFeatures(features_PROPOSTO_287);
var lyr_PROPOSTO_287 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROPOSTO_287, 
                style: style_PROPOSTO_287,
                popuplayertitle: 'PROPOSTO',
                interactive: true,
                title: '<img src="styles/legend/PROPOSTO_287.png" /> PROPOSTO'
            });
var format_EM_FUNCIONAMENTO_288 = new ol.format.GeoJSON();
var features_EM_FUNCIONAMENTO_288 = format_EM_FUNCIONAMENTO_288.readFeatures(json_EM_FUNCIONAMENTO_288, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EM_FUNCIONAMENTO_288 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EM_FUNCIONAMENTO_288.addFeatures(features_EM_FUNCIONAMENTO_288);
var lyr_EM_FUNCIONAMENTO_288 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EM_FUNCIONAMENTO_288, 
                style: style_EM_FUNCIONAMENTO_288,
                popuplayertitle: 'EM_FUNCIONAMENTO',
                interactive: true,
                title: '<img src="styles/legend/EM_FUNCIONAMENTO_288.png" /> EM_FUNCIONAMENTO'
            });
var format_EM_CONSTRUCAO_289 = new ol.format.GeoJSON();
var features_EM_CONSTRUCAO_289 = format_EM_CONSTRUCAO_289.readFeatures(json_EM_CONSTRUCAO_289, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EM_CONSTRUCAO_289 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EM_CONSTRUCAO_289.addFeatures(features_EM_CONSTRUCAO_289);
var lyr_EM_CONSTRUCAO_289 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EM_CONSTRUCAO_289, 
                style: style_EM_CONSTRUCAO_289,
                popuplayertitle: 'EM_CONSTRUCAO',
                interactive: true,
                title: '<img src="styles/legend/EM_CONSTRUCAO_289.png" /> EM_CONSTRUCAO'
            });
var format_DrenagensExistentes_290 = new ol.format.GeoJSON();
var features_DrenagensExistentes_290 = format_DrenagensExistentes_290.readFeatures(json_DrenagensExistentes_290, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DrenagensExistentes_290 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrenagensExistentes_290.addFeatures(features_DrenagensExistentes_290);
var lyr_DrenagensExistentes_290 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrenagensExistentes_290, 
                style: style_DrenagensExistentes_290,
                popuplayertitle: 'Drenagens Existentes',
                interactive: true,
    title: 'Drenagens Existentes<br />\
    <img src="styles/legend/DrenagensExistentes_290_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DrenagensExistentes_290_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DrenagensExistentes_290_2.png" /> CAIXA<br />\
    <img src="styles/legend/DrenagensExistentes_290_3.png" /> CANALETA<br />\
    <img src="styles/legend/DrenagensExistentes_290_4.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DrenagensExistentes_290_5.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DrenagensExistentes_290_6.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DrenagensExistentes_290_7.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DrenagensExistentes_290_8.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DrenagensExistentes_290_9.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DrenagensExistentes_290_10.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DrenagensExistentes_290_11.png" /> PV<br />' });
var format_DRENAGEM_VILLAGIO_DI_FIRENZE_291 = new ol.format.GeoJSON();
var features_DRENAGEM_VILLAGIO_DI_FIRENZE_291 = format_DRENAGEM_VILLAGIO_DI_FIRENZE_291.readFeatures(json_DRENAGEM_VILLAGIO_DI_FIRENZE_291, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_VILLAGIO_DI_FIRENZE_291 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_VILLAGIO_DI_FIRENZE_291.addFeatures(features_DRENAGEM_VILLAGIO_DI_FIRENZE_291);
var lyr_DRENAGEM_VILLAGIO_DI_FIRENZE_291 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_VILLAGIO_DI_FIRENZE_291, 
                style: style_DRENAGEM_VILLAGIO_DI_FIRENZE_291,
                popuplayertitle: 'DRENAGEM_VILLAGIO_DI_FIRENZE',
                interactive: true,
    title: 'DRENAGEM_VILLAGIO_DI_FIRENZE<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_291_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_291_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_291_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_291_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_291_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_291_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_VILLAGIO_DI_FIRENZE_291_6.png" /> PV<br />' });
var format_DRENAGEM_VILLA_SANTA_GIANNA_292 = new ol.format.GeoJSON();
var features_DRENAGEM_VILLA_SANTA_GIANNA_292 = format_DRENAGEM_VILLA_SANTA_GIANNA_292.readFeatures(json_DRENAGEM_VILLA_SANTA_GIANNA_292, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_VILLA_SANTA_GIANNA_292 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_VILLA_SANTA_GIANNA_292.addFeatures(features_DRENAGEM_VILLA_SANTA_GIANNA_292);
var lyr_DRENAGEM_VILLA_SANTA_GIANNA_292 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_VILLA_SANTA_GIANNA_292, 
                style: style_DRENAGEM_VILLA_SANTA_GIANNA_292,
                popuplayertitle: 'DRENAGEM_VILLA_SANTA_GIANNA',
                interactive: true,
    title: 'DRENAGEM_VILLA_SANTA_GIANNA<br />\
    <img src="styles/legend/DRENAGEM_VILLA_SANTA_GIANNA_292_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_VILLA_SANTA_GIANNA_292_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_VILLA_SANTA_GIANNA_292_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_VILLA_SANTA_GIANNA_292_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_VILLA_SANTA_GIANNA_292_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_VILLA_SANTA_GIANNA_292_5.png" /> PV<br />' });
var format_DRENAGEM_VILA_TOTOLI_293 = new ol.format.GeoJSON();
var features_DRENAGEM_VILA_TOTOLI_293 = format_DRENAGEM_VILA_TOTOLI_293.readFeatures(json_DRENAGEM_VILA_TOTOLI_293, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_VILA_TOTOLI_293 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_VILA_TOTOLI_293.addFeatures(features_DRENAGEM_VILA_TOTOLI_293);
var lyr_DRENAGEM_VILA_TOTOLI_293 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_VILA_TOTOLI_293, 
                style: style_DRENAGEM_VILA_TOTOLI_293,
                popuplayertitle: 'DRENAGEM_VILA_TOTOLI',
                interactive: true,
    title: 'DRENAGEM_VILA_TOTOLI<br />\
    <img src="styles/legend/DRENAGEM_VILA_TOTOLI_293_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_VILA_TOTOLI_293_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_VILA_TOTOLI_293_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_VILA_TOTOLI_293_3.png" /> PV<br />' });
var format_DRENAGEM_VILA_REAL_294 = new ol.format.GeoJSON();
var features_DRENAGEM_VILA_REAL_294 = format_DRENAGEM_VILA_REAL_294.readFeatures(json_DRENAGEM_VILA_REAL_294, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_VILA_REAL_294 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_VILA_REAL_294.addFeatures(features_DRENAGEM_VILA_REAL_294);
var lyr_DRENAGEM_VILA_REAL_294 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_VILA_REAL_294, 
                style: style_DRENAGEM_VILA_REAL_294,
                popuplayertitle: 'DRENAGEM_VILA_REAL',
                interactive: true,
    title: 'DRENAGEM_VILA_REAL<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_294_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_294_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_294_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_294_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_294_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_294_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_VILA_REAL_294_6.png" /> PV<br />' });
var format_DRENAGEM_VILA_DORATTA_295 = new ol.format.GeoJSON();
var features_DRENAGEM_VILA_DORATTA_295 = format_DRENAGEM_VILA_DORATTA_295.readFeatures(json_DRENAGEM_VILA_DORATTA_295, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_VILA_DORATTA_295 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_VILA_DORATTA_295.addFeatures(features_DRENAGEM_VILA_DORATTA_295);
var lyr_DRENAGEM_VILA_DORATTA_295 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_VILA_DORATTA_295, 
                style: style_DRENAGEM_VILA_DORATTA_295,
                popuplayertitle: 'DRENAGEM_VILA_DORATTA',
                interactive: true,
    title: 'DRENAGEM_VILA_DORATTA<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_295_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_295_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_295_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_295_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_295_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_295_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_VILA_DORATTA_295_6.png" /> PV<br />' });
var format_DRENAGEM_SAO_PEDRO_II_296 = new ol.format.GeoJSON();
var features_DRENAGEM_SAO_PEDRO_II_296 = format_DRENAGEM_SAO_PEDRO_II_296.readFeatures(json_DRENAGEM_SAO_PEDRO_II_296, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_SAO_PEDRO_II_296 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_SAO_PEDRO_II_296.addFeatures(features_DRENAGEM_SAO_PEDRO_II_296);
var lyr_DRENAGEM_SAO_PEDRO_II_296 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_SAO_PEDRO_II_296, 
                style: style_DRENAGEM_SAO_PEDRO_II_296,
                popuplayertitle: 'DRENAGEM_SAO_PEDRO_II',
                interactive: true,
    title: 'DRENAGEM_SAO_PEDRO_II<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_296_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_296_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_296_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_296_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_296_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_296_5.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_296_6.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_296_7.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_SAO_PEDRO_II_296_8.png" /> PV<br />' });
var format_DRENAGEM_SANTA_FE_297 = new ol.format.GeoJSON();
var features_DRENAGEM_SANTA_FE_297 = format_DRENAGEM_SANTA_FE_297.readFeatures(json_DRENAGEM_SANTA_FE_297, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_SANTA_FE_297 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_SANTA_FE_297.addFeatures(features_DRENAGEM_SANTA_FE_297);
var lyr_DRENAGEM_SANTA_FE_297 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_SANTA_FE_297, 
                style: style_DRENAGEM_SANTA_FE_297,
                popuplayertitle: 'DRENAGEM_SANTA_FE',
                interactive: true,
    title: 'DRENAGEM_SANTA_FE<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_297_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_297_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_297_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_297_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_297_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_297_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_297_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_SANTA_FE_297_7.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_TELLINI_298 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_TELLINI_298 = format_DRENAGEM_RESIDENCIAL_TELLINI_298.readFeatures(json_DRENAGEM_RESIDENCIAL_TELLINI_298, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_TELLINI_298 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_TELLINI_298.addFeatures(features_DRENAGEM_RESIDENCIAL_TELLINI_298);
var lyr_DRENAGEM_RESIDENCIAL_TELLINI_298 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_TELLINI_298, 
                style: style_DRENAGEM_RESIDENCIAL_TELLINI_298,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_TELLINI',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_TELLINI<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_298_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_298_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_298_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_298_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_298_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_298_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_298_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_TELLINI_298_7.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299 = format_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299.readFeatures(json_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299.addFeatures(features_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299);
var lyr_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299, 
                style: style_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_SAO_TOMAZ',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_SAO_TOMAZ<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299_5.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300 = format_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300.readFeatures(json_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300.addFeatures(features_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300);
var lyr_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300, 
                style: style_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300_8.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_SANTA_INES_301 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_SANTA_INES_301 = format_DRENAGEM_RESIDENCIAL_SANTA_INES_301.readFeatures(json_DRENAGEM_RESIDENCIAL_SANTA_INES_301, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_SANTA_INES_301 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_SANTA_INES_301.addFeatures(features_DRENAGEM_RESIDENCIAL_SANTA_INES_301);
var lyr_DRENAGEM_RESIDENCIAL_SANTA_INES_301 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_SANTA_INES_301, 
                style: style_DRENAGEM_RESIDENCIAL_SANTA_INES_301,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_SANTA_INES',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_SANTA_INES<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_301_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_301_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_301_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_301_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_301_4.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_301_5.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_301_6.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_301_7.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_301_8.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_SANTA_INES_301_9.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302 = format_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302.readFeatures(json_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302.addFeatures(features_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302);
var lyr_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302, 
                style: style_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302_3.png" /> DIAMETRO 1800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302_8.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303 = format_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303.readFeatures(json_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303.addFeatures(features_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303);
var lyr_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303, 
                style: style_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_POUSO_ALEGRE',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_POUSO_ALEGRE<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303_4.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303_5.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303_6.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303_7.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303_8.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303_9.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304 = format_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304.readFeatures(json_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304.addFeatures(features_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304);
var lyr_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304, 
                style: style_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_PARQUE_FLORA',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_PARQUE_FLORA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304_8.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_PALERMO_305 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_PALERMO_305 = format_DRENAGEM_RESIDENCIAL_PALERMO_305.readFeatures(json_DRENAGEM_RESIDENCIAL_PALERMO_305, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_PALERMO_305 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_PALERMO_305.addFeatures(features_DRENAGEM_RESIDENCIAL_PALERMO_305);
var lyr_DRENAGEM_RESIDENCIAL_PALERMO_305 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_PALERMO_305, 
                style: style_DRENAGEM_RESIDENCIAL_PALERMO_305,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_PALERMO',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_PALERMO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_305_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_305_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_305_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_305_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_305_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_305_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_305_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_PALERMO_305_7.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_ITAPUA_306 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_ITAPUA_306 = format_DRENAGEM_RESIDENCIAL_ITAPUA_306.readFeatures(json_DRENAGEM_RESIDENCIAL_ITAPUA_306, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_ITAPUA_306 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_ITAPUA_306.addFeatures(features_DRENAGEM_RESIDENCIAL_ITAPUA_306);
var lyr_DRENAGEM_RESIDENCIAL_ITAPUA_306 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_ITAPUA_306, 
                style: style_DRENAGEM_RESIDENCIAL_ITAPUA_306,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_ITAPUA',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_ITAPUA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ITAPUA_306_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ITAPUA_306_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ITAPUA_306_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ITAPUA_306_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ITAPUA_306_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ITAPUA_306_5.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_GAIA_307 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_GAIA_307 = format_DRENAGEM_RESIDENCIAL_GAIA_307.readFeatures(json_DRENAGEM_RESIDENCIAL_GAIA_307, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_GAIA_307 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_GAIA_307.addFeatures(features_DRENAGEM_RESIDENCIAL_GAIA_307);
var lyr_DRENAGEM_RESIDENCIAL_GAIA_307 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_GAIA_307, 
                style: style_DRENAGEM_RESIDENCIAL_GAIA_307,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_GAIA',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_GAIA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_307_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_307_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_307_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_307_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_307_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_307_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_307_6.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_FERRACINI_308 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_FERRACINI_308 = format_DRENAGEM_RESIDENCIAL_FERRACINI_308.readFeatures(json_DRENAGEM_RESIDENCIAL_FERRACINI_308, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_FERRACINI_308 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_FERRACINI_308.addFeatures(features_DRENAGEM_RESIDENCIAL_FERRACINI_308);
var lyr_DRENAGEM_RESIDENCIAL_FERRACINI_308 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_FERRACINI_308, 
                style: style_DRENAGEM_RESIDENCIAL_FERRACINI_308,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_FERRACINI',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_FERRACINI<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FERRACINI_308_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FERRACINI_308_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FERRACINI_308_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FERRACINI_308_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FERRACINI_308_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FERRACINI_308_5.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_FAGGIONI_309 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_FAGGIONI_309 = format_DRENAGEM_RESIDENCIAL_FAGGIONI_309.readFeatures(json_DRENAGEM_RESIDENCIAL_FAGGIONI_309, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_FAGGIONI_309 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_FAGGIONI_309.addFeatures(features_DRENAGEM_RESIDENCIAL_FAGGIONI_309);
var lyr_DRENAGEM_RESIDENCIAL_FAGGIONI_309 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_FAGGIONI_309, 
                style: style_DRENAGEM_RESIDENCIAL_FAGGIONI_309,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_FAGGIONI',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_FAGGIONI<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_309_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_309_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_309_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_309_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_309_4.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_309_5.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_309_6.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_309_7.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_309_8.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_FAGGIONI_309_9.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_ECOSTILO_310 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_ECOSTILO_310 = format_DRENAGEM_RESIDENCIAL_ECOSTILO_310.readFeatures(json_DRENAGEM_RESIDENCIAL_ECOSTILO_310, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_ECOSTILO_310 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_ECOSTILO_310.addFeatures(features_DRENAGEM_RESIDENCIAL_ECOSTILO_310);
var lyr_DRENAGEM_RESIDENCIAL_ECOSTILO_310 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_ECOSTILO_310, 
                style: style_DRENAGEM_RESIDENCIAL_ECOSTILO_310,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_ECOSTILO',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_ECOSTILO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_310_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_310_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_310_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_310_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_310_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_310_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ECOSTILO_310_6.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_DOURADO_311 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_DOURADO_311 = format_DRENAGEM_RESIDENCIAL_DOURADO_311.readFeatures(json_DRENAGEM_RESIDENCIAL_DOURADO_311, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_DOURADO_311 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_DOURADO_311.addFeatures(features_DRENAGEM_RESIDENCIAL_DOURADO_311);
var lyr_DRENAGEM_RESIDENCIAL_DOURADO_311 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_DOURADO_311, 
                style: style_DRENAGEM_RESIDENCIAL_DOURADO_311,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_DOURADO',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_DOURADO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_311_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_311_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_311_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_311_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_311_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_311_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_DOURADO_311_6.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_BALDASSARI_312 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_BALDASSARI_312 = format_DRENAGEM_RESIDENCIAL_BALDASSARI_312.readFeatures(json_DRENAGEM_RESIDENCIAL_BALDASSARI_312, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_BALDASSARI_312 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_BALDASSARI_312.addFeatures(features_DRENAGEM_RESIDENCIAL_BALDASSARI_312);
var lyr_DRENAGEM_RESIDENCIAL_BALDASSARI_312 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_BALDASSARI_312, 
                style: style_DRENAGEM_RESIDENCIAL_BALDASSARI_312,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_BALDASSARI',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_BALDASSARI<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_BALDASSARI_312_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_BALDASSARI_312_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_BALDASSARI_312_2.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_BALDASSARI_312_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_BALDASSARI_312_4.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_ANA_HELENA_313 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_ANA_HELENA_313 = format_DRENAGEM_RESIDENCIAL_ANA_HELENA_313.readFeatures(json_DRENAGEM_RESIDENCIAL_ANA_HELENA_313, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_ANA_HELENA_313 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_ANA_HELENA_313.addFeatures(features_DRENAGEM_RESIDENCIAL_ANA_HELENA_313);
var lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_313 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_ANA_HELENA_313, 
                style: style_DRENAGEM_RESIDENCIAL_ANA_HELENA_313,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_ANA_HELENA',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_ANA_HELENA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_313_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_313_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_313_2.png" /> CAIXA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_313_3.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_313_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_313_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_313_6.png" /> DISSIPADOR<br />' });
var format_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314 = format_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314.readFeatures(json_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314.addFeatures(features_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314);
var lyr_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314, 
                style: style_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314_5.png" /> PV<br />' });
var format_DRENAGEM_RECREIO_CAMPO_BELO_315 = new ol.format.GeoJSON();
var features_DRENAGEM_RECREIO_CAMPO_BELO_315 = format_DRENAGEM_RECREIO_CAMPO_BELO_315.readFeatures(json_DRENAGEM_RECREIO_CAMPO_BELO_315, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RECREIO_CAMPO_BELO_315 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RECREIO_CAMPO_BELO_315.addFeatures(features_DRENAGEM_RECREIO_CAMPO_BELO_315);
var lyr_DRENAGEM_RECREIO_CAMPO_BELO_315 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RECREIO_CAMPO_BELO_315, 
                style: style_DRENAGEM_RECREIO_CAMPO_BELO_315,
                popuplayertitle: 'DRENAGEM_RECREIO_CAMPO_BELO',
                interactive: true,
    title: 'DRENAGEM_RECREIO_CAMPO_BELO<br />\
    <img src="styles/legend/DRENAGEM_RECREIO_CAMPO_BELO_315_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RECREIO_CAMPO_BELO_315_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RECREIO_CAMPO_BELO_315_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RECREIO_CAMPO_BELO_315_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RECREIO_CAMPO_BELO_315_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RECREIO_CAMPO_BELO_315_5.png" /> PV<br />' });
var format_DRENAGEM_RECANTO_MENEGHETTI_316 = new ol.format.GeoJSON();
var features_DRENAGEM_RECANTO_MENEGHETTI_316 = format_DRENAGEM_RECANTO_MENEGHETTI_316.readFeatures(json_DRENAGEM_RECANTO_MENEGHETTI_316, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RECANTO_MENEGHETTI_316 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RECANTO_MENEGHETTI_316.addFeatures(features_DRENAGEM_RECANTO_MENEGHETTI_316);
var lyr_DRENAGEM_RECANTO_MENEGHETTI_316 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RECANTO_MENEGHETTI_316, 
                style: style_DRENAGEM_RECANTO_MENEGHETTI_316,
                popuplayertitle: 'DRENAGEM_RECANTO_MENEGHETTI',
                interactive: true,
    title: 'DRENAGEM_RECANTO_MENEGHETTI<br />\
    <img src="styles/legend/DRENAGEM_RECANTO_MENEGHETTI_316_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RECANTO_MENEGHETTI_316_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RECANTO_MENEGHETTI_316_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RECANTO_MENEGHETTI_316_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RECANTO_MENEGHETTI_316_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RECANTO_MENEGHETTI_316_5.png" /> PV<br />' });
var format_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_317 = new ol.format.GeoJSON();
var features_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_317 = format_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_317.readFeatures(json_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_317, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_317 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_317.addFeatures(features_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_317);
var lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_317 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_317, 
                style: style_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_317,
                popuplayertitle: 'DRENAGEM_PROL_VILA_SANTA_TEREZINHA',
                interactive: true,
    title: 'DRENAGEM_PROL_VILA_SANTA_TEREZINHA<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_SANTA_TEREZINHA_317_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_SANTA_TEREZINHA_317_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_SANTA_TEREZINHA_317_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_SANTA_TEREZINHA_317_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_SANTA_TEREZINHA_317_4.png" /> PV<br />' });
var format_DRENAGEM_PROL_VILA_ISABEL_318 = new ol.format.GeoJSON();
var features_DRENAGEM_PROL_VILA_ISABEL_318 = format_DRENAGEM_PROL_VILA_ISABEL_318.readFeatures(json_DRENAGEM_PROL_VILA_ISABEL_318, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PROL_VILA_ISABEL_318 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PROL_VILA_ISABEL_318.addFeatures(features_DRENAGEM_PROL_VILA_ISABEL_318);
var lyr_DRENAGEM_PROL_VILA_ISABEL_318 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PROL_VILA_ISABEL_318, 
                style: style_DRENAGEM_PROL_VILA_ISABEL_318,
                popuplayertitle: 'DRENAGEM_PROL_VILA_ISABEL',
                interactive: true,
    title: 'DRENAGEM_PROL_VILA_ISABEL<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_ISABEL_318_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_ISABEL_318_1.png" /> DIAMETRO 300<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_ISABEL_318_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_ISABEL_318_3.png" /> DIAMETRO 600<br />' });
var format_DRENAGEM_PROL_JARDIM_MARTINS_319 = new ol.format.GeoJSON();
var features_DRENAGEM_PROL_JARDIM_MARTINS_319 = format_DRENAGEM_PROL_JARDIM_MARTINS_319.readFeatures(json_DRENAGEM_PROL_JARDIM_MARTINS_319, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PROL_JARDIM_MARTINS_319 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PROL_JARDIM_MARTINS_319.addFeatures(features_DRENAGEM_PROL_JARDIM_MARTINS_319);
var lyr_DRENAGEM_PROL_JARDIM_MARTINS_319 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PROL_JARDIM_MARTINS_319, 
                style: style_DRENAGEM_PROL_JARDIM_MARTINS_319,
                popuplayertitle: 'DRENAGEM_PROL_JARDIM_MARTINS',
                interactive: true,
    title: 'DRENAGEM_PROL_JARDIM_MARTINS<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_319_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_319_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_319_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_319_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_319_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_319_5.png" /> PV<br />' });
var format_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320 = new ol.format.GeoJSON();
var features_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320 = format_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320.readFeatures(json_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320.addFeatures(features_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320);
var lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320, 
                style: style_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320,
                popuplayertitle: 'DRENAGEM_POLO_IND_ABILIO_NOGUEIRA',
                interactive: true,
    title: 'DRENAGEM_POLO_IND_ABILIO_NOGUEIRA<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320_7.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_UNIVERSITARIO_321 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_UNIVERSITARIO_321 = format_DRENAGEM_PARQUE_UNIVERSITARIO_321.readFeatures(json_DRENAGEM_PARQUE_UNIVERSITARIO_321, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_UNIVERSITARIO_321 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_UNIVERSITARIO_321.addFeatures(features_DRENAGEM_PARQUE_UNIVERSITARIO_321);
var lyr_DRENAGEM_PARQUE_UNIVERSITARIO_321 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_UNIVERSITARIO_321, 
                style: style_DRENAGEM_PARQUE_UNIVERSITARIO_321,
                popuplayertitle: 'DRENAGEM_PARQUE_UNIVERSITARIO',
                interactive: true,
    title: 'DRENAGEM_PARQUE_UNIVERSITARIO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_321_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_321_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_321_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_321_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_321_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_321_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_321_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_321_7.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_SANTA_ADELIA_322 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_SANTA_ADELIA_322 = format_DRENAGEM_PARQUE_SANTA_ADELIA_322.readFeatures(json_DRENAGEM_PARQUE_SANTA_ADELIA_322, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_SANTA_ADELIA_322 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_SANTA_ADELIA_322.addFeatures(features_DRENAGEM_PARQUE_SANTA_ADELIA_322);
var lyr_DRENAGEM_PARQUE_SANTA_ADELIA_322 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_SANTA_ADELIA_322, 
                style: style_DRENAGEM_PARQUE_SANTA_ADELIA_322,
                popuplayertitle: 'DRENAGEM_PARQUE_SANTA_ADELIA',
                interactive: true,
    title: 'DRENAGEM_PARQUE_SANTA_ADELIA<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_322_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_322_1.png" /> CAIXA<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_322_2.png" /> DIAMETRO 300<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_322_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_322_4.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_322_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_322_6.png" /> DIAMETRO 700<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_322_7.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_MOEMA_323 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_MOEMA_323 = format_DRENAGEM_PARQUE_MOEMA_323.readFeatures(json_DRENAGEM_PARQUE_MOEMA_323, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_MOEMA_323 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_MOEMA_323.addFeatures(features_DRENAGEM_PARQUE_MOEMA_323);
var lyr_DRENAGEM_PARQUE_MOEMA_323 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_MOEMA_323, 
                style: style_DRENAGEM_PARQUE_MOEMA_323,
                popuplayertitle: 'DRENAGEM_PARQUE_MOEMA',
                interactive: true,
    title: 'DRENAGEM_PARQUE_MOEMA<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_323_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_323_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_323_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_323_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_323_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_323_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_323_6.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_JOAO_LEITE_324 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_JOAO_LEITE_324 = format_DRENAGEM_PARQUE_JOAO_LEITE_324.readFeatures(json_DRENAGEM_PARQUE_JOAO_LEITE_324, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_JOAO_LEITE_324 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_JOAO_LEITE_324.addFeatures(features_DRENAGEM_PARQUE_JOAO_LEITE_324);
var lyr_DRENAGEM_PARQUE_JOAO_LEITE_324 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_JOAO_LEITE_324, 
                style: style_DRENAGEM_PARQUE_JOAO_LEITE_324,
                popuplayertitle: 'DRENAGEM_PARQUE_JOAO_LEITE',
                interactive: true,
    title: 'DRENAGEM_PARQUE_JOAO_LEITE<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_324_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_324_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_324_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_324_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_324_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_324_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_324_6.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_DOS_SABIAS_325 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_DOS_SABIAS_325 = format_DRENAGEM_PARQUE_DOS_SABIAS_325.readFeatures(json_DRENAGEM_PARQUE_DOS_SABIAS_325, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_DOS_SABIAS_325 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_DOS_SABIAS_325.addFeatures(features_DRENAGEM_PARQUE_DOS_SABIAS_325);
var lyr_DRENAGEM_PARQUE_DOS_SABIAS_325 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_DOS_SABIAS_325, 
                style: style_DRENAGEM_PARQUE_DOS_SABIAS_325,
                popuplayertitle: 'DRENAGEM_PARQUE_DOS_SABIAS',
                interactive: true,
    title: 'DRENAGEM_PARQUE_DOS_SABIAS<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_325_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_325_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_325_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_325_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_325_4.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_325_5.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_325_6.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_325_7.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_325_8.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_325_9.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_DOS_COQUEIROS_326 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_DOS_COQUEIROS_326 = format_DRENAGEM_PARQUE_DOS_COQUEIROS_326.readFeatures(json_DRENAGEM_PARQUE_DOS_COQUEIROS_326, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_DOS_COQUEIROS_326 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_DOS_COQUEIROS_326.addFeatures(features_DRENAGEM_PARQUE_DOS_COQUEIROS_326);
var lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_326 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_DOS_COQUEIROS_326, 
                style: style_DRENAGEM_PARQUE_DOS_COQUEIROS_326,
                popuplayertitle: 'DRENAGEM_PARQUE_DOS_COQUEIROS',
                interactive: true,
    title: 'DRENAGEM_PARQUE_DOS_COQUEIROS<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_326_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_326_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_326_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_326_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_326_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_326_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_326_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_326_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_326_8.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_DAS_ARVORES_327 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_DAS_ARVORES_327 = format_DRENAGEM_PARQUE_DAS_ARVORES_327.readFeatures(json_DRENAGEM_PARQUE_DAS_ARVORES_327, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_DAS_ARVORES_327 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_DAS_ARVORES_327.addFeatures(features_DRENAGEM_PARQUE_DAS_ARVORES_327);
var lyr_DRENAGEM_PARQUE_DAS_ARVORES_327 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_DAS_ARVORES_327, 
                style: style_DRENAGEM_PARQUE_DAS_ARVORES_327,
                popuplayertitle: 'DRENAGEM_PARQUE_DAS_ARVORES',
                interactive: true,
    title: 'DRENAGEM_PARQUE_DAS_ARVORES<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DAS_ARVORES_327_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DAS_ARVORES_327_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DAS_ARVORES_327_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DAS_ARVORES_327_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DAS_ARVORES_327_4.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_CASTELO_328 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_CASTELO_328 = format_DRENAGEM_PARQUE_CASTELO_328.readFeatures(json_DRENAGEM_PARQUE_CASTELO_328, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_CASTELO_328 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_CASTELO_328.addFeatures(features_DRENAGEM_PARQUE_CASTELO_328);
var lyr_DRENAGEM_PARQUE_CASTELO_328 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_CASTELO_328, 
                style: style_DRENAGEM_PARQUE_CASTELO_328,
                popuplayertitle: 'DRENAGEM_PARQUE_CASTELO',
                interactive: true,
    title: 'DRENAGEM_PARQUE_CASTELO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_CASTELO_328_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_CASTELO_328_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_CASTELO_328_2.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_CASTELO_328_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_CASTELO_328_4.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_BOA_VISTA_329 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_BOA_VISTA_329 = format_DRENAGEM_PARQUE_BOA_VISTA_329.readFeatures(json_DRENAGEM_PARQUE_BOA_VISTA_329, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_BOA_VISTA_329 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_BOA_VISTA_329.addFeatures(features_DRENAGEM_PARQUE_BOA_VISTA_329);
var lyr_DRENAGEM_PARQUE_BOA_VISTA_329 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_BOA_VISTA_329, 
                style: style_DRENAGEM_PARQUE_BOA_VISTA_329,
                popuplayertitle: 'DRENAGEM_PARQUE_BOA_VISTA',
                interactive: true,
    title: 'DRENAGEM_PARQUE_BOA_VISTA<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_BOA_VISTA_329_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_BOA_VISTA_329_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_BOA_VISTA_329_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_BOA_VISTA_329_3.png" /> PV<br />' });
var format_DRENAGEM_PARQ_RESD_SANTA_MARIA_330 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQ_RESD_SANTA_MARIA_330 = format_DRENAGEM_PARQ_RESD_SANTA_MARIA_330.readFeatures(json_DRENAGEM_PARQ_RESD_SANTA_MARIA_330, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQ_RESD_SANTA_MARIA_330 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQ_RESD_SANTA_MARIA_330.addFeatures(features_DRENAGEM_PARQ_RESD_SANTA_MARIA_330);
var lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_330 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQ_RESD_SANTA_MARIA_330, 
                style: style_DRENAGEM_PARQ_RESD_SANTA_MARIA_330,
                popuplayertitle: 'DRENAGEM_PARQ_RESD_SANTA_MARIA',
                interactive: true,
    title: 'DRENAGEM_PARQ_RESD_SANTA_MARIA<br />\
    <img src="styles/legend/DRENAGEM_PARQ_RESD_SANTA_MARIA_330_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQ_RESD_SANTA_MARIA_330_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQ_RESD_SANTA_MARIA_330_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQ_RESD_SANTA_MARIA_330_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQ_RESD_SANTA_MARIA_330_4.png" /> PV<br />' });
var format_DRENAGEM_PARAGON_331 = new ol.format.GeoJSON();
var features_DRENAGEM_PARAGON_331 = format_DRENAGEM_PARAGON_331.readFeatures(json_DRENAGEM_PARAGON_331, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARAGON_331 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARAGON_331.addFeatures(features_DRENAGEM_PARAGON_331);
var lyr_DRENAGEM_PARAGON_331 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARAGON_331, 
                style: style_DRENAGEM_PARAGON_331,
                popuplayertitle: 'DRENAGEM_PARAGON',
                interactive: true,
    title: 'DRENAGEM_PARAGON<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_331_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_331_1.png" /> CAIXA<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_331_2.png" /> CANALETA<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_331_3.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_331_4.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_331_5.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_331_6.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_331_7.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_331_8.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_331_9.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_331_10.png" /> PV<br />' });
var format_DRENAGEM_NAIR_RETUSSI_I_332 = new ol.format.GeoJSON();
var features_DRENAGEM_NAIR_RETUSSI_I_332 = format_DRENAGEM_NAIR_RETUSSI_I_332.readFeatures(json_DRENAGEM_NAIR_RETUSSI_I_332, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_NAIR_RETUSSI_I_332 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_NAIR_RETUSSI_I_332.addFeatures(features_DRENAGEM_NAIR_RETUSSI_I_332);
var lyr_DRENAGEM_NAIR_RETUSSI_I_332 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_NAIR_RETUSSI_I_332, 
                style: style_DRENAGEM_NAIR_RETUSSI_I_332,
                popuplayertitle: 'DRENAGEM_NAIR_RETUSSI_I',
                interactive: true,
    title: 'DRENAGEM_NAIR_RETUSSI_I<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_332_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_332_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_332_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_332_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_332_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_332_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_332_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_332_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_332_8.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_SAO_GABRIEL_333 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_SAO_GABRIEL_333 = format_DRENAGEM_JARDIM_SAO_GABRIEL_333.readFeatures(json_DRENAGEM_JARDIM_SAO_GABRIEL_333, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_SAO_GABRIEL_333 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_SAO_GABRIEL_333.addFeatures(features_DRENAGEM_JARDIM_SAO_GABRIEL_333);
var lyr_DRENAGEM_JARDIM_SAO_GABRIEL_333 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_SAO_GABRIEL_333, 
                style: style_DRENAGEM_JARDIM_SAO_GABRIEL_333,
                popuplayertitle: 'DRENAGEM_JARDIM_SAO_GABRIEL',
                interactive: true,
    title: 'DRENAGEM_JARDIM_SAO_GABRIEL<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_333_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_333_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_333_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_333_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_333_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_333_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_333_6.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_SANTA_LUCIA_334 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_SANTA_LUCIA_334 = format_DRENAGEM_JARDIM_SANTA_LUCIA_334.readFeatures(json_DRENAGEM_JARDIM_SANTA_LUCIA_334, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_SANTA_LUCIA_334 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_SANTA_LUCIA_334.addFeatures(features_DRENAGEM_JARDIM_SANTA_LUCIA_334);
var lyr_DRENAGEM_JARDIM_SANTA_LUCIA_334 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_SANTA_LUCIA_334, 
                style: style_DRENAGEM_JARDIM_SANTA_LUCIA_334,
                popuplayertitle: 'DRENAGEM_JARDIM_SANTA_LUCIA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_SANTA_LUCIA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_334_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_334_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_334_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_334_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_334_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_334_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_334_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_334_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_334_8.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_PULICANO_335 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_PULICANO_335 = format_DRENAGEM_JARDIM_PULICANO_335.readFeatures(json_DRENAGEM_JARDIM_PULICANO_335, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_PULICANO_335 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_PULICANO_335.addFeatures(features_DRENAGEM_JARDIM_PULICANO_335);
var lyr_DRENAGEM_JARDIM_PULICANO_335 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_PULICANO_335, 
                style: style_DRENAGEM_JARDIM_PULICANO_335,
                popuplayertitle: 'DRENAGEM_JARDIM_PULICANO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_PULICANO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_335_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_335_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_335_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_335_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_335_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_335_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_335_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_335_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_335_8.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_PORTINARI_336 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_PORTINARI_336 = format_DRENAGEM_JARDIM_PORTINARI_336.readFeatures(json_DRENAGEM_JARDIM_PORTINARI_336, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_PORTINARI_336 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_PORTINARI_336.addFeatures(features_DRENAGEM_JARDIM_PORTINARI_336);
var lyr_DRENAGEM_JARDIM_PORTINARI_336 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_PORTINARI_336, 
                style: style_DRENAGEM_JARDIM_PORTINARI_336,
                popuplayertitle: 'DRENAGEM_JARDIM_PORTINARI',
                interactive: true,
    title: 'DRENAGEM_JARDIM_PORTINARI<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_336_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_336_1.png" /> DIAMETRO 300<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_336_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_336_3.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_336_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_336_5.png" /> DIAMETRO 700<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PORTINARI_336_6.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_PIRATININGA_337 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_PIRATININGA_337 = format_DRENAGEM_JARDIM_PIRATININGA_337.readFeatures(json_DRENAGEM_JARDIM_PIRATININGA_337, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_PIRATININGA_337 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_PIRATININGA_337.addFeatures(features_DRENAGEM_JARDIM_PIRATININGA_337);
var lyr_DRENAGEM_JARDIM_PIRATININGA_337 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_PIRATININGA_337, 
                style: style_DRENAGEM_JARDIM_PIRATININGA_337,
                popuplayertitle: 'DRENAGEM_JARDIM_PIRATININGA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_PIRATININGA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_337_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_337_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_337_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_337_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_337_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_337_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_337_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_337_7.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_PALMA_338 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_PALMA_338 = format_DRENAGEM_JARDIM_PALMA_338.readFeatures(json_DRENAGEM_JARDIM_PALMA_338, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_PALMA_338 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_PALMA_338.addFeatures(features_DRENAGEM_JARDIM_PALMA_338);
var lyr_DRENAGEM_JARDIM_PALMA_338 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_PALMA_338, 
                style: style_DRENAGEM_JARDIM_PALMA_338,
                popuplayertitle: 'DRENAGEM_JARDIM_PALMA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_PALMA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_338_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_338_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_338_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_338_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_338_4.png" /> DIAMETRO 900<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_338_5.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_339 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_339 = format_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_339.readFeatures(json_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_339, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_339 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_339.addFeatures(features_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_339);
var lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_339 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_339, 
                style: style_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_339,
                popuplayertitle: 'DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS',
                interactive: true,
    title: 'DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_339_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_339_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_339_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_339_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_339_4.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_NOEMIA_340 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_NOEMIA_340 = format_DRENAGEM_JARDIM_NOEMIA_340.readFeatures(json_DRENAGEM_JARDIM_NOEMIA_340, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_NOEMIA_340 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_NOEMIA_340.addFeatures(features_DRENAGEM_JARDIM_NOEMIA_340);
var lyr_DRENAGEM_JARDIM_NOEMIA_340 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_NOEMIA_340, 
                style: style_DRENAGEM_JARDIM_NOEMIA_340,
                popuplayertitle: 'DRENAGEM_JARDIM_NOEMIA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_NOEMIA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOEMIA_340_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOEMIA_340_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOEMIA_340_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOEMIA_340_3.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_NATAL_341 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_NATAL_341 = format_DRENAGEM_JARDIM_NATAL_341.readFeatures(json_DRENAGEM_JARDIM_NATAL_341, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_NATAL_341 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_NATAL_341.addFeatures(features_DRENAGEM_JARDIM_NATAL_341);
var lyr_DRENAGEM_JARDIM_NATAL_341 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_NATAL_341, 
                style: style_DRENAGEM_JARDIM_NATAL_341,
                popuplayertitle: 'DRENAGEM_JARDIM_NATAL',
                interactive: true,
    title: 'DRENAGEM_JARDIM_NATAL<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_341_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_341_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_341_2.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_341_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_341_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_341_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_341_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_341_7.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_MARTINS_342 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_MARTINS_342 = format_DRENAGEM_JARDIM_MARTINS_342.readFeatures(json_DRENAGEM_JARDIM_MARTINS_342, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_MARTINS_342 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_MARTINS_342.addFeatures(features_DRENAGEM_JARDIM_MARTINS_342);
var lyr_DRENAGEM_JARDIM_MARTINS_342 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_MARTINS_342, 
                style: style_DRENAGEM_JARDIM_MARTINS_342,
                popuplayertitle: 'DRENAGEM_JARDIM_MARTINS',
                interactive: true,
    title: 'DRENAGEM_JARDIM_MARTINS<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARTINS_342_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARTINS_342_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARTINS_342_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARTINS_342_3.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_MARIA_LUIZA_343 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_MARIA_LUIZA_343 = format_DRENAGEM_JARDIM_MARIA_LUIZA_343.readFeatures(json_DRENAGEM_JARDIM_MARIA_LUIZA_343, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_MARIA_LUIZA_343 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_MARIA_LUIZA_343.addFeatures(features_DRENAGEM_JARDIM_MARIA_LUIZA_343);
var lyr_DRENAGEM_JARDIM_MARIA_LUIZA_343 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_MARIA_LUIZA_343, 
                style: style_DRENAGEM_JARDIM_MARIA_LUIZA_343,
                popuplayertitle: 'DRENAGEM_JARDIM_MARIA_LUIZA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_MARIA_LUIZA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_343_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_343_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_343_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_343_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_343_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_343_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_343_6.png" /> FLUXO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_343_7.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_LIBANO_344 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_LIBANO_344 = format_DRENAGEM_JARDIM_LIBANO_344.readFeatures(json_DRENAGEM_JARDIM_LIBANO_344, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_LIBANO_344 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_LIBANO_344.addFeatures(features_DRENAGEM_JARDIM_LIBANO_344);
var lyr_DRENAGEM_JARDIM_LIBANO_344 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_LIBANO_344, 
                style: style_DRENAGEM_JARDIM_LIBANO_344,
                popuplayertitle: 'DRENAGEM_JARDIM_LIBANO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_LIBANO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_LIBANO_344_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_LIBANO_344_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_LIBANO_344_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_LIBANO_344_3.png" /> FLUXO<br />' });
var format_DRENAGEM_JARDIM_IPANEMA_345 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_IPANEMA_345 = format_DRENAGEM_JARDIM_IPANEMA_345.readFeatures(json_DRENAGEM_JARDIM_IPANEMA_345, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_IPANEMA_345 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_IPANEMA_345.addFeatures(features_DRENAGEM_JARDIM_IPANEMA_345);
var lyr_DRENAGEM_JARDIM_IPANEMA_345 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_IPANEMA_345, 
                style: style_DRENAGEM_JARDIM_IPANEMA_345,
                popuplayertitle: 'DRENAGEM_JARDIM_IPANEMA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_IPANEMA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_345_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_345_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_345_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_345_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_345_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_345_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_345_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_345_7.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_BUENO_346 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_BUENO_346 = format_DRENAGEM_JARDIM_BUENO_346.readFeatures(json_DRENAGEM_JARDIM_BUENO_346, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_BUENO_346 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_BUENO_346.addFeatures(features_DRENAGEM_JARDIM_BUENO_346);
var lyr_DRENAGEM_JARDIM_BUENO_346 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_BUENO_346, 
                style: style_DRENAGEM_JARDIM_BUENO_346,
                popuplayertitle: 'DRENAGEM_JARDIM_BUENO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_BUENO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BUENO_346_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BUENO_346_1.png" /> DIAMETRO 300<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BUENO_346_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BUENO_346_3.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_BOTANICO_347 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_BOTANICO_347 = format_DRENAGEM_JARDIM_BOTANICO_347.readFeatures(json_DRENAGEM_JARDIM_BOTANICO_347, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_BOTANICO_347 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_BOTANICO_347.addFeatures(features_DRENAGEM_JARDIM_BOTANICO_347);
var lyr_DRENAGEM_JARDIM_BOTANICO_347 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_BOTANICO_347, 
                style: style_DRENAGEM_JARDIM_BOTANICO_347,
                popuplayertitle: 'DRENAGEM_JARDIM_BOTANICO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_BOTANICO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_347_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_347_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_347_2.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_347_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_347_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_347_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_347_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_347_7.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_BARAO_348 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_BARAO_348 = format_DRENAGEM_JARDIM_BARAO_348.readFeatures(json_DRENAGEM_JARDIM_BARAO_348, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_BARAO_348 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_BARAO_348.addFeatures(features_DRENAGEM_JARDIM_BARAO_348);
var lyr_DRENAGEM_JARDIM_BARAO_348 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_BARAO_348, 
                style: style_DRENAGEM_JARDIM_BARAO_348,
                popuplayertitle: 'DRENAGEM_JARDIM_BARAO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_BARAO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BARAO_348_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BARAO_348_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BARAO_348_2.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BARAO_348_3.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_AVIACAO_349 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_AVIACAO_349 = format_DRENAGEM_JARDIM_AVIACAO_349.readFeatures(json_DRENAGEM_JARDIM_AVIACAO_349, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_AVIACAO_349 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_AVIACAO_349.addFeatures(features_DRENAGEM_JARDIM_AVIACAO_349);
var lyr_DRENAGEM_JARDIM_AVIACAO_349 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_AVIACAO_349, 
                style: style_DRENAGEM_JARDIM_AVIACAO_349,
                popuplayertitle: 'DRENAGEM_JARDIM_AVIACAO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_AVIACAO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_349_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_349_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_349_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_349_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_349_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_349_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_349_6.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_ARIZONA_II_350 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_ARIZONA_II_350 = format_DRENAGEM_JARDIM_ARIZONA_II_350.readFeatures(json_DRENAGEM_JARDIM_ARIZONA_II_350, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_ARIZONA_II_350 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_ARIZONA_II_350.addFeatures(features_DRENAGEM_JARDIM_ARIZONA_II_350);
var lyr_DRENAGEM_JARDIM_ARIZONA_II_350 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_ARIZONA_II_350, 
                style: style_DRENAGEM_JARDIM_ARIZONA_II_350,
                popuplayertitle: 'DRENAGEM_JARDIM_ARIZONA_II',
                interactive: true,
    title: 'DRENAGEM_JARDIM_ARIZONA_II<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_350_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_350_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_350_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_350_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_350_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_350_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_350_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_350_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_II_350_8.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_ARIZONA_I_351 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_ARIZONA_I_351 = format_DRENAGEM_JARDIM_ARIZONA_I_351.readFeatures(json_DRENAGEM_JARDIM_ARIZONA_I_351, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_ARIZONA_I_351 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_ARIZONA_I_351.addFeatures(features_DRENAGEM_JARDIM_ARIZONA_I_351);
var lyr_DRENAGEM_JARDIM_ARIZONA_I_351 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_ARIZONA_I_351, 
                style: style_DRENAGEM_JARDIM_ARIZONA_I_351,
                popuplayertitle: 'DRENAGEM_JARDIM_ARIZONA_I',
                interactive: true,
    title: 'DRENAGEM_JARDIM_ARIZONA_I<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_351_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_351_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_351_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_351_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_351_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_351_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_351_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_351_7.png" /> PV<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_ARIZONA_I_351_8.png" /> DISSIPADOR<br />' });
var format_DRENAGEM_JARDIM_AEROPORTO_II_352 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_AEROPORTO_II_352 = format_DRENAGEM_JARDIM_AEROPORTO_II_352.readFeatures(json_DRENAGEM_JARDIM_AEROPORTO_II_352, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_AEROPORTO_II_352 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_AEROPORTO_II_352.addFeatures(features_DRENAGEM_JARDIM_AEROPORTO_II_352);
var lyr_DRENAGEM_JARDIM_AEROPORTO_II_352 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_AEROPORTO_II_352, 
                style: style_DRENAGEM_JARDIM_AEROPORTO_II_352,
                popuplayertitle: 'DRENAGEM_JARDIM_AEROPORTO_II',
                interactive: true,
    title: 'DRENAGEM_JARDIM_AEROPORTO_II<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AEROPORTO_II_352_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AEROPORTO_II_352_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AEROPORTO_II_352_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AEROPORTO_II_352_3.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AEROPORTO_II_352_4.png" /> PV<br />' });
var format_DRENAGEM_GRAMADOS_I_353 = new ol.format.GeoJSON();
var features_DRENAGEM_GRAMADOS_I_353 = format_DRENAGEM_GRAMADOS_I_353.readFeatures(json_DRENAGEM_GRAMADOS_I_353, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_GRAMADOS_I_353 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_GRAMADOS_I_353.addFeatures(features_DRENAGEM_GRAMADOS_I_353);
var lyr_DRENAGEM_GRAMADOS_I_353 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_GRAMADOS_I_353, 
                style: style_DRENAGEM_GRAMADOS_I_353,
                popuplayertitle: 'DRENAGEM_GRAMADOS_I',
                interactive: true,
    title: 'DRENAGEM_GRAMADOS_I<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_353_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_353_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_353_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_353_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_353_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_353_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_353_6.png" /> PV<br />' });
var format_DRENAGEM_FRANCA_POLO_CLUBE_354 = new ol.format.GeoJSON();
var features_DRENAGEM_FRANCA_POLO_CLUBE_354 = format_DRENAGEM_FRANCA_POLO_CLUBE_354.readFeatures(json_DRENAGEM_FRANCA_POLO_CLUBE_354, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_FRANCA_POLO_CLUBE_354 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_FRANCA_POLO_CLUBE_354.addFeatures(features_DRENAGEM_FRANCA_POLO_CLUBE_354);
var lyr_DRENAGEM_FRANCA_POLO_CLUBE_354 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_FRANCA_POLO_CLUBE_354, 
                style: style_DRENAGEM_FRANCA_POLO_CLUBE_354,
                popuplayertitle: 'DRENAGEM_FRANCA_POLO_CLUBE',
                interactive: true,
    title: 'DRENAGEM_FRANCA_POLO_CLUBE<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_354_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_354_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_354_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_354_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_354_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_354_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_354_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_354_7.png" /> PV<br />' });
var format_DRENAGEM_DOMINGOS_JARDINI_355 = new ol.format.GeoJSON();
var features_DRENAGEM_DOMINGOS_JARDINI_355 = format_DRENAGEM_DOMINGOS_JARDINI_355.readFeatures(json_DRENAGEM_DOMINGOS_JARDINI_355, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_DOMINGOS_JARDINI_355 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_DOMINGOS_JARDINI_355.addFeatures(features_DRENAGEM_DOMINGOS_JARDINI_355);
var lyr_DRENAGEM_DOMINGOS_JARDINI_355 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_DOMINGOS_JARDINI_355, 
                style: style_DRENAGEM_DOMINGOS_JARDINI_355,
                popuplayertitle: 'DRENAGEM_DOMINGOS_JARDINI',
                interactive: true,
    title: 'DRENAGEM_DOMINGOS_JARDINI<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_355_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_355_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_355_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_355_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_355_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_355_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_355_6.png" /> PV<br />' });
var format_DRENAGEM_DINFRA_II_356 = new ol.format.GeoJSON();
var features_DRENAGEM_DINFRA_II_356 = format_DRENAGEM_DINFRA_II_356.readFeatures(json_DRENAGEM_DINFRA_II_356, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_DINFRA_II_356 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_DINFRA_II_356.addFeatures(features_DRENAGEM_DINFRA_II_356);
var lyr_DRENAGEM_DINFRA_II_356 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_DINFRA_II_356, 
                style: style_DRENAGEM_DINFRA_II_356,
                popuplayertitle: 'DRENAGEM_DINFRA_II',
                interactive: true,
    title: 'DRENAGEM_DINFRA_II<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_356_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_356_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_356_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_356_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_356_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_356_5.png" /> PV<br />' });
var format_DRENAGEM_ATLANTA_PARK_357 = new ol.format.GeoJSON();
var features_DRENAGEM_ATLANTA_PARK_357 = format_DRENAGEM_ATLANTA_PARK_357.readFeatures(json_DRENAGEM_ATLANTA_PARK_357, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_ATLANTA_PARK_357 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_ATLANTA_PARK_357.addFeatures(features_DRENAGEM_ATLANTA_PARK_357);
var lyr_DRENAGEM_ATLANTA_PARK_357 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_ATLANTA_PARK_357, 
                style: style_DRENAGEM_ATLANTA_PARK_357,
                popuplayertitle: 'DRENAGEM_ATLANTA_PARK',
                interactive: true,
    title: 'DRENAGEM_ATLANTA_PARK<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_357_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_357_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_357_2.png" /> CAIXA<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_357_3.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_357_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_357_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_357_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_357_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_357_8.png" /> PV<br />' });
var format_DRENAGEM_ANA_DOROTHEA_358 = new ol.format.GeoJSON();
var features_DRENAGEM_ANA_DOROTHEA_358 = format_DRENAGEM_ANA_DOROTHEA_358.readFeatures(json_DRENAGEM_ANA_DOROTHEA_358, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_ANA_DOROTHEA_358 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_ANA_DOROTHEA_358.addFeatures(features_DRENAGEM_ANA_DOROTHEA_358);
var lyr_DRENAGEM_ANA_DOROTHEA_358 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_ANA_DOROTHEA_358, 
                style: style_DRENAGEM_ANA_DOROTHEA_358,
                popuplayertitle: 'DRENAGEM_ANA_DOROTHEA',
                interactive: true,
    title: 'DRENAGEM_ANA_DOROTHEA<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_358_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_358_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_358_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_358_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_358_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_358_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_358_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_ANA_DOROTHEA_358_7.png" /> PV<br />' });
var format_REGIAO_SUL_359 = new ol.format.GeoJSON();
var features_REGIAO_SUL_359 = format_REGIAO_SUL_359.readFeatures(json_REGIAO_SUL_359, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REGIAO_SUL_359 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIAO_SUL_359.addFeatures(features_REGIAO_SUL_359);
var lyr_REGIAO_SUL_359 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIAO_SUL_359, 
                style: style_REGIAO_SUL_359,
                popuplayertitle: 'REGIAO_SUL',
                interactive: true,
                title: '<img src="styles/legend/REGIAO_SUL_359.png" /> REGIAO_SUL'
            });
var format_REGIAO_OESTE_360 = new ol.format.GeoJSON();
var features_REGIAO_OESTE_360 = format_REGIAO_OESTE_360.readFeatures(json_REGIAO_OESTE_360, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REGIAO_OESTE_360 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIAO_OESTE_360.addFeatures(features_REGIAO_OESTE_360);
var lyr_REGIAO_OESTE_360 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIAO_OESTE_360, 
                style: style_REGIAO_OESTE_360,
                popuplayertitle: 'REGIAO_OESTE',
                interactive: true,
                title: '<img src="styles/legend/REGIAO_OESTE_360.png" /> REGIAO_OESTE'
            });
var format_REGIAO_NORTE_361 = new ol.format.GeoJSON();
var features_REGIAO_NORTE_361 = format_REGIAO_NORTE_361.readFeatures(json_REGIAO_NORTE_361, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REGIAO_NORTE_361 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIAO_NORTE_361.addFeatures(features_REGIAO_NORTE_361);
var lyr_REGIAO_NORTE_361 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIAO_NORTE_361, 
                style: style_REGIAO_NORTE_361,
                popuplayertitle: 'REGIAO_NORTE',
                interactive: true,
                title: '<img src="styles/legend/REGIAO_NORTE_361.png" /> REGIAO_NORTE'
            });
var format_REGIAO_LESTE_362 = new ol.format.GeoJSON();
var features_REGIAO_LESTE_362 = format_REGIAO_LESTE_362.readFeatures(json_REGIAO_LESTE_362, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REGIAO_LESTE_362 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIAO_LESTE_362.addFeatures(features_REGIAO_LESTE_362);
var lyr_REGIAO_LESTE_362 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIAO_LESTE_362, 
                style: style_REGIAO_LESTE_362,
                popuplayertitle: 'REGIAO_LESTE',
                interactive: true,
                title: '<img src="styles/legend/REGIAO_LESTE_362.png" /> REGIAO_LESTE'
            });
var format_BAIRROS_363 = new ol.format.GeoJSON();
var features_BAIRROS_363 = format_BAIRROS_363.readFeatures(json_BAIRROS_363, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BAIRROS_363 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAIRROS_363.addFeatures(features_BAIRROS_363);
var lyr_BAIRROS_363 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAIRROS_363, 
                style: style_BAIRROS_363,
                popuplayertitle: 'BAIRROS',
                interactive: true,
                title: '<img src="styles/legend/BAIRROS_363.png" /> BAIRROS'
            });
var format_VOCOROCAS27UNID_364 = new ol.format.GeoJSON();
var features_VOCOROCAS27UNID_364 = format_VOCOROCAS27UNID_364.readFeatures(json_VOCOROCAS27UNID_364, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VOCOROCAS27UNID_364 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VOCOROCAS27UNID_364.addFeatures(features_VOCOROCAS27UNID_364);
var lyr_VOCOROCAS27UNID_364 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VOCOROCAS27UNID_364, 
                style: style_VOCOROCAS27UNID_364,
                popuplayertitle: 'VOCOROCAS (27 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/VOCOROCAS27UNID_364.png" /> VOCOROCAS (27 UNID.)'
            });
var format_LOCAIS_DE_DIFICIL_ACESSO12UNID_365 = new ol.format.GeoJSON();
var features_LOCAIS_DE_DIFICIL_ACESSO12UNID_365 = format_LOCAIS_DE_DIFICIL_ACESSO12UNID_365.readFeatures(json_LOCAIS_DE_DIFICIL_ACESSO12UNID_365, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LOCAIS_DE_DIFICIL_ACESSO12UNID_365 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOCAIS_DE_DIFICIL_ACESSO12UNID_365.addFeatures(features_LOCAIS_DE_DIFICIL_ACESSO12UNID_365);
var lyr_LOCAIS_DE_DIFICIL_ACESSO12UNID_365 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOCAIS_DE_DIFICIL_ACESSO12UNID_365, 
                style: style_LOCAIS_DE_DIFICIL_ACESSO12UNID_365,
                popuplayertitle: 'LOCAIS_DE_DIFICIL_ACESSO (12 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/LOCAIS_DE_DIFICIL_ACESSO12UNID_365.png" /> LOCAIS_DE_DIFICIL_ACESSO (12 UNID.)'
            });
var format_CONTEINERES286UNID_366 = new ol.format.GeoJSON();
var features_CONTEINERES286UNID_366 = format_CONTEINERES286UNID_366.readFeatures(json_CONTEINERES286UNID_366, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CONTEINERES286UNID_366 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTEINERES286UNID_366.addFeatures(features_CONTEINERES286UNID_366);
var lyr_CONTEINERES286UNID_366 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTEINERES286UNID_366, 
                style: style_CONTEINERES286UNID_366,
                popuplayertitle: 'CONTEINERES (286 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/CONTEINERES286UNID_366.png" /> CONTEINERES (286 UNID.)'
            });
var format_ARVORES_IMUNE_AO_CORTE9UNID_367 = new ol.format.GeoJSON();
var features_ARVORES_IMUNE_AO_CORTE9UNID_367 = format_ARVORES_IMUNE_AO_CORTE9UNID_367.readFeatures(json_ARVORES_IMUNE_AO_CORTE9UNID_367, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARVORES_IMUNE_AO_CORTE9UNID_367 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARVORES_IMUNE_AO_CORTE9UNID_367.addFeatures(features_ARVORES_IMUNE_AO_CORTE9UNID_367);
var lyr_ARVORES_IMUNE_AO_CORTE9UNID_367 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARVORES_IMUNE_AO_CORTE9UNID_367, 
                style: style_ARVORES_IMUNE_AO_CORTE9UNID_367,
                popuplayertitle: 'ARVORES_IMUNE_AO_CORTE (9 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/ARVORES_IMUNE_AO_CORTE9UNID_367.png" /> ARVORES_IMUNE_AO_CORTE (9 UNID.)'
            });
var format_ACADEMIAS_AO_AR_LIVRE84UNID_368 = new ol.format.GeoJSON();
var features_ACADEMIAS_AO_AR_LIVRE84UNID_368 = format_ACADEMIAS_AO_AR_LIVRE84UNID_368.readFeatures(json_ACADEMIAS_AO_AR_LIVRE84UNID_368, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ACADEMIAS_AO_AR_LIVRE84UNID_368 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACADEMIAS_AO_AR_LIVRE84UNID_368.addFeatures(features_ACADEMIAS_AO_AR_LIVRE84UNID_368);
var lyr_ACADEMIAS_AO_AR_LIVRE84UNID_368 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACADEMIAS_AO_AR_LIVRE84UNID_368, 
                style: style_ACADEMIAS_AO_AR_LIVRE84UNID_368,
                popuplayertitle: 'ACADEMIAS_AO_AR_LIVRE (84 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/ACADEMIAS_AO_AR_LIVRE84UNID_368.png" /> ACADEMIAS_AO_AR_LIVRE (84 UNID.)'
            });
var format_SERVICO_DE_SAUDE21UNID_369 = new ol.format.GeoJSON();
var features_SERVICO_DE_SAUDE21UNID_369 = format_SERVICO_DE_SAUDE21UNID_369.readFeatures(json_SERVICO_DE_SAUDE21UNID_369, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SERVICO_DE_SAUDE21UNID_369 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVICO_DE_SAUDE21UNID_369.addFeatures(features_SERVICO_DE_SAUDE21UNID_369);
var lyr_SERVICO_DE_SAUDE21UNID_369 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SERVICO_DE_SAUDE21UNID_369, 
                style: style_SERVICO_DE_SAUDE21UNID_369,
                popuplayertitle: 'SERVICO_DE_SAUDE (21 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/SERVICO_DE_SAUDE21UNID_369.png" /> SERVICO_DE_SAUDE (21 UNID.)'
            });
var format_RECICLAVEIS15UNID_370 = new ol.format.GeoJSON();
var features_RECICLAVEIS15UNID_370 = format_RECICLAVEIS15UNID_370.readFeatures(json_RECICLAVEIS15UNID_370, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RECICLAVEIS15UNID_370 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RECICLAVEIS15UNID_370.addFeatures(features_RECICLAVEIS15UNID_370);
var lyr_RECICLAVEIS15UNID_370 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RECICLAVEIS15UNID_370, 
                style: style_RECICLAVEIS15UNID_370,
                popuplayertitle: 'RECICLAVEIS (15 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/RECICLAVEIS15UNID_370.png" /> RECICLAVEIS (15 UNID.)'
            });
var format_PNEUS1UNID_371 = new ol.format.GeoJSON();
var features_PNEUS1UNID_371 = format_PNEUS1UNID_371.readFeatures(json_PNEUS1UNID_371, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PNEUS1UNID_371 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNEUS1UNID_371.addFeatures(features_PNEUS1UNID_371);
var lyr_PNEUS1UNID_371 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNEUS1UNID_371, 
                style: style_PNEUS1UNID_371,
                popuplayertitle: 'PNEUS (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/PNEUS1UNID_371.png" /> PNEUS (1 UNID.)'
            });
var format_PILHAS_E_BATERIAS17UNID_372 = new ol.format.GeoJSON();
var features_PILHAS_E_BATERIAS17UNID_372 = format_PILHAS_E_BATERIAS17UNID_372.readFeatures(json_PILHAS_E_BATERIAS17UNID_372, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PILHAS_E_BATERIAS17UNID_372 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PILHAS_E_BATERIAS17UNID_372.addFeatures(features_PILHAS_E_BATERIAS17UNID_372);
var lyr_PILHAS_E_BATERIAS17UNID_372 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PILHAS_E_BATERIAS17UNID_372, 
                style: style_PILHAS_E_BATERIAS17UNID_372,
                popuplayertitle: 'PILHAS_E_BATERIAS (17 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/PILHAS_E_BATERIAS17UNID_372.png" /> PILHAS_E_BATERIAS (17 UNID.)'
            });
var format_PERIGOSOS1UNID_373 = new ol.format.GeoJSON();
var features_PERIGOSOS1UNID_373 = format_PERIGOSOS1UNID_373.readFeatures(json_PERIGOSOS1UNID_373, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PERIGOSOS1UNID_373 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERIGOSOS1UNID_373.addFeatures(features_PERIGOSOS1UNID_373);
var lyr_PERIGOSOS1UNID_373 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERIGOSOS1UNID_373, 
                style: style_PERIGOSOS1UNID_373,
                popuplayertitle: 'PERIGOSOS (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/PERIGOSOS1UNID_373.png" /> PERIGOSOS (1 UNID.)'
            });
var format_OLEO_LUBRIFICANTE1UNID_374 = new ol.format.GeoJSON();
var features_OLEO_LUBRIFICANTE1UNID_374 = format_OLEO_LUBRIFICANTE1UNID_374.readFeatures(json_OLEO_LUBRIFICANTE1UNID_374, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_OLEO_LUBRIFICANTE1UNID_374 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OLEO_LUBRIFICANTE1UNID_374.addFeatures(features_OLEO_LUBRIFICANTE1UNID_374);
var lyr_OLEO_LUBRIFICANTE1UNID_374 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OLEO_LUBRIFICANTE1UNID_374, 
                style: style_OLEO_LUBRIFICANTE1UNID_374,
                popuplayertitle: 'OLEO_LUBRIFICANTE (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/OLEO_LUBRIFICANTE1UNID_374.png" /> OLEO_LUBRIFICANTE (1 UNID.)'
            });
var format_OLEO_DE_COZINHA3UNID_375 = new ol.format.GeoJSON();
var features_OLEO_DE_COZINHA3UNID_375 = format_OLEO_DE_COZINHA3UNID_375.readFeatures(json_OLEO_DE_COZINHA3UNID_375, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_OLEO_DE_COZINHA3UNID_375 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OLEO_DE_COZINHA3UNID_375.addFeatures(features_OLEO_DE_COZINHA3UNID_375);
var lyr_OLEO_DE_COZINHA3UNID_375 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OLEO_DE_COZINHA3UNID_375, 
                style: style_OLEO_DE_COZINHA3UNID_375,
                popuplayertitle: 'OLEO_DE_COZINHA (3 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/OLEO_DE_COZINHA3UNID_375.png" /> OLEO_DE_COZINHA (3 UNID.)'
            });
var format_MASSA_VERDE1UNID_376 = new ol.format.GeoJSON();
var features_MASSA_VERDE1UNID_376 = format_MASSA_VERDE1UNID_376.readFeatures(json_MASSA_VERDE1UNID_376, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MASSA_VERDE1UNID_376 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MASSA_VERDE1UNID_376.addFeatures(features_MASSA_VERDE1UNID_376);
var lyr_MASSA_VERDE1UNID_376 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MASSA_VERDE1UNID_376, 
                style: style_MASSA_VERDE1UNID_376,
                popuplayertitle: 'MASSA_VERDE (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/MASSA_VERDE1UNID_376.png" /> MASSA_VERDE (1 UNID.)'
            });
var format_MADEIRAS1UNID_377 = new ol.format.GeoJSON();
var features_MADEIRAS1UNID_377 = format_MADEIRAS1UNID_377.readFeatures(json_MADEIRAS1UNID_377, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MADEIRAS1UNID_377 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MADEIRAS1UNID_377.addFeatures(features_MADEIRAS1UNID_377);
var lyr_MADEIRAS1UNID_377 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MADEIRAS1UNID_377, 
                style: style_MADEIRAS1UNID_377,
                popuplayertitle: 'MADEIRAS (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/MADEIRAS1UNID_377.png" /> MADEIRAS (1 UNID.)'
            });
var format_LATAS_DE_TINTA2UNID_378 = new ol.format.GeoJSON();
var features_LATAS_DE_TINTA2UNID_378 = format_LATAS_DE_TINTA2UNID_378.readFeatures(json_LATAS_DE_TINTA2UNID_378, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LATAS_DE_TINTA2UNID_378 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LATAS_DE_TINTA2UNID_378.addFeatures(features_LATAS_DE_TINTA2UNID_378);
var lyr_LATAS_DE_TINTA2UNID_378 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LATAS_DE_TINTA2UNID_378, 
                style: style_LATAS_DE_TINTA2UNID_378,
                popuplayertitle: 'LATAS_DE_TINTA (2 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/LATAS_DE_TINTA2UNID_378.png" /> LATAS_DE_TINTA (2 UNID.)'
            });
var format_LAMPADAS4UNID_379 = new ol.format.GeoJSON();
var features_LAMPADAS4UNID_379 = format_LAMPADAS4UNID_379.readFeatures(json_LAMPADAS4UNID_379, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LAMPADAS4UNID_379 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAMPADAS4UNID_379.addFeatures(features_LAMPADAS4UNID_379);
var lyr_LAMPADAS4UNID_379 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAMPADAS4UNID_379, 
                style: style_LAMPADAS4UNID_379,
                popuplayertitle: 'LAMPADAS (4 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/LAMPADAS4UNID_379.png" /> LAMPADAS (4 UNID.)'
            });
var format_INSERVIVEIS4UNID_380 = new ol.format.GeoJSON();
var features_INSERVIVEIS4UNID_380 = format_INSERVIVEIS4UNID_380.readFeatures(json_INSERVIVEIS4UNID_380, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_INSERVIVEIS4UNID_380 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INSERVIVEIS4UNID_380.addFeatures(features_INSERVIVEIS4UNID_380);
var lyr_INSERVIVEIS4UNID_380 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INSERVIVEIS4UNID_380, 
                style: style_INSERVIVEIS4UNID_380,
                popuplayertitle: 'INSERVIVEIS (4 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/INSERVIVEIS4UNID_380.png" /> INSERVIVEIS (4 UNID.)'
            });
var format_GESSO1UNID_381 = new ol.format.GeoJSON();
var features_GESSO1UNID_381 = format_GESSO1UNID_381.readFeatures(json_GESSO1UNID_381, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GESSO1UNID_381 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GESSO1UNID_381.addFeatures(features_GESSO1UNID_381);
var lyr_GESSO1UNID_381 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GESSO1UNID_381, 
                style: style_GESSO1UNID_381,
                popuplayertitle: 'GESSO (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/GESSO1UNID_381.png" /> GESSO (1 UNID.)'
            });
var format_EMBALAGENS_AGROTOXICO1UNID_382 = new ol.format.GeoJSON();
var features_EMBALAGENS_AGROTOXICO1UNID_382 = format_EMBALAGENS_AGROTOXICO1UNID_382.readFeatures(json_EMBALAGENS_AGROTOXICO1UNID_382, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EMBALAGENS_AGROTOXICO1UNID_382 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EMBALAGENS_AGROTOXICO1UNID_382.addFeatures(features_EMBALAGENS_AGROTOXICO1UNID_382);
var lyr_EMBALAGENS_AGROTOXICO1UNID_382 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EMBALAGENS_AGROTOXICO1UNID_382, 
                style: style_EMBALAGENS_AGROTOXICO1UNID_382,
                popuplayertitle: 'EMBALAGENS_AGROTOXICO (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/EMBALAGENS_AGROTOXICO1UNID_382.png" /> EMBALAGENS_AGROTOXICO (1 UNID.)'
            });
var format_ELETRONICOS3UNID_383 = new ol.format.GeoJSON();
var features_ELETRONICOS3UNID_383 = format_ELETRONICOS3UNID_383.readFeatures(json_ELETRONICOS3UNID_383, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ELETRONICOS3UNID_383 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELETRONICOS3UNID_383.addFeatures(features_ELETRONICOS3UNID_383);
var lyr_ELETRONICOS3UNID_383 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ELETRONICOS3UNID_383, 
                style: style_ELETRONICOS3UNID_383,
                popuplayertitle: 'ELETRONICOS (3 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/ELETRONICOS3UNID_383.png" /> ELETRONICOS (3 UNID.)'
            });
var format_COURO1UNID_384 = new ol.format.GeoJSON();
var features_COURO1UNID_384 = format_COURO1UNID_384.readFeatures(json_COURO1UNID_384, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_COURO1UNID_384 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COURO1UNID_384.addFeatures(features_COURO1UNID_384);
var lyr_COURO1UNID_384 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COURO1UNID_384, 
                style: style_COURO1UNID_384,
                popuplayertitle: 'COURO (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/COURO1UNID_384.png" /> COURO (1 UNID.)'
            });
var format_CONSTRUCAO_CIVIL7UNID_385 = new ol.format.GeoJSON();
var features_CONSTRUCAO_CIVIL7UNID_385 = format_CONSTRUCAO_CIVIL7UNID_385.readFeatures(json_CONSTRUCAO_CIVIL7UNID_385, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CONSTRUCAO_CIVIL7UNID_385 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONSTRUCAO_CIVIL7UNID_385.addFeatures(features_CONSTRUCAO_CIVIL7UNID_385);
var lyr_CONSTRUCAO_CIVIL7UNID_385 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONSTRUCAO_CIVIL7UNID_385, 
                style: style_CONSTRUCAO_CIVIL7UNID_385,
                popuplayertitle: 'CONSTRUCAO_CIVIL (7 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/CONSTRUCAO_CIVIL7UNID_385.png" /> CONSTRUCAO_CIVIL (7 UNID.)'
            });
var format_CHAPAS_DE_RAIO_X1UNID_386 = new ol.format.GeoJSON();
var features_CHAPAS_DE_RAIO_X1UNID_386 = format_CHAPAS_DE_RAIO_X1UNID_386.readFeatures(json_CHAPAS_DE_RAIO_X1UNID_386, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CHAPAS_DE_RAIO_X1UNID_386 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHAPAS_DE_RAIO_X1UNID_386.addFeatures(features_CHAPAS_DE_RAIO_X1UNID_386);
var lyr_CHAPAS_DE_RAIO_X1UNID_386 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHAPAS_DE_RAIO_X1UNID_386, 
                style: style_CHAPAS_DE_RAIO_X1UNID_386,
                popuplayertitle: 'CHAPAS_DE_RAIO_X (1 UNID.)',
                interactive: true,
                title: '<img src="styles/legend/CHAPAS_DE_RAIO_X1UNID_386.png" /> CHAPAS_DE_RAIO_X (1 UNID.)'
            });
var format_PROTECAO_AERODROMO_387 = new ol.format.GeoJSON();
var features_PROTECAO_AERODROMO_387 = format_PROTECAO_AERODROMO_387.readFeatures(json_PROTECAO_AERODROMO_387, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PROTECAO_AERODROMO_387 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROTECAO_AERODROMO_387.addFeatures(features_PROTECAO_AERODROMO_387);
var lyr_PROTECAO_AERODROMO_387 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROTECAO_AERODROMO_387, 
                style: style_PROTECAO_AERODROMO_387,
                popuplayertitle: 'PROTECAO_AERODROMO',
                interactive: true,
    title: 'PROTECAO_AERODROMO<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_387_0.png" /> Aproximação 1 Cab 1<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_387_1.png" /> Aproximação 1 Cab 2<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_387_2.png" /> Cônica<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_387_3.png" /> Decolagem Cab 1<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_387_4.png" /> Decolagem Cab 2<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_387_5.png" /> Faixa de Pista<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_387_6.png" /> Horizontal Interna<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_387_7.png" /> Linha entre cabeceiras<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_387_8.png" /> Pista<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_387_9.png" /> SPVV 1<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_387_10.png" /> SPVV 2<br />\
    <img src="styles/legend/PROTECAO_AERODROMO_387_11.png" /> Transição<br />' });
var format_HELIPONTO_HOSPITAL_REGIONAL_388 = new ol.format.GeoJSON();
var features_HELIPONTO_HOSPITAL_REGIONAL_388 = format_HELIPONTO_HOSPITAL_REGIONAL_388.readFeatures(json_HELIPONTO_HOSPITAL_REGIONAL_388, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HELIPONTO_HOSPITAL_REGIONAL_388 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HELIPONTO_HOSPITAL_REGIONAL_388.addFeatures(features_HELIPONTO_HOSPITAL_REGIONAL_388);
var lyr_HELIPONTO_HOSPITAL_REGIONAL_388 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HELIPONTO_HOSPITAL_REGIONAL_388, 
                style: style_HELIPONTO_HOSPITAL_REGIONAL_388,
                popuplayertitle: 'HELIPONTO_HOSPITAL_REGIONAL',
                interactive: true,
    title: 'HELIPONTO_HOSPITAL_REGIONAL<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_388_0.png" /> Aproximação 1 seção 1<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_388_1.png" /> Aproximação 2 seção 1<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_388_2.png" /> Area de Segurança 1<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_388_3.png" /> Decolagem 1 seção 1<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_388_4.png" /> Decolagem 2 seção 1<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_388_5.png" /> FATO 1<br />\
    <img src="styles/legend/HELIPONTO_HOSPITAL_REGIONAL_388_6.png" /> TLOF 1<br />' });
var format_HELIPONTO_EDIFICIO_PRIME_389 = new ol.format.GeoJSON();
var features_HELIPONTO_EDIFICIO_PRIME_389 = format_HELIPONTO_EDIFICIO_PRIME_389.readFeatures(json_HELIPONTO_EDIFICIO_PRIME_389, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HELIPONTO_EDIFICIO_PRIME_389 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HELIPONTO_EDIFICIO_PRIME_389.addFeatures(features_HELIPONTO_EDIFICIO_PRIME_389);
var lyr_HELIPONTO_EDIFICIO_PRIME_389 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HELIPONTO_EDIFICIO_PRIME_389, 
                style: style_HELIPONTO_EDIFICIO_PRIME_389,
                popuplayertitle: 'HELIPONTO_EDIFICIO_PRIME',
                interactive: true,
                title: '<img src="styles/legend/HELIPONTO_EDIFICIO_PRIME_389.png" /> HELIPONTO_EDIFICIO_PRIME'
            });
var format_HELIPONTO_EDIFICIO_PRIME_390 = new ol.format.GeoJSON();
var features_HELIPONTO_EDIFICIO_PRIME_390 = format_HELIPONTO_EDIFICIO_PRIME_390.readFeatures(json_HELIPONTO_EDIFICIO_PRIME_390, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HELIPONTO_EDIFICIO_PRIME_390 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HELIPONTO_EDIFICIO_PRIME_390.addFeatures(features_HELIPONTO_EDIFICIO_PRIME_390);
var lyr_HELIPONTO_EDIFICIO_PRIME_390 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HELIPONTO_EDIFICIO_PRIME_390, 
                style: style_HELIPONTO_EDIFICIO_PRIME_390,
                popuplayertitle: 'HELIPONTO_EDIFICIO_PRIME',
                interactive: true,
    title: 'HELIPONTO_EDIFICIO_PRIME<br />\
    <img src="styles/legend/HELIPONTO_EDIFICIO_PRIME_390_0.png" /> HELIPONTO<br />\
    <img src="styles/legend/HELIPONTO_EDIFICIO_PRIME_390_1.png" /> RAMPA<br />' });
var format_CLASSE_VB_391 = new ol.format.GeoJSON();
var features_CLASSE_VB_391 = format_CLASSE_VB_391.readFeatures(json_CLASSE_VB_391, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_VB_391 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_VB_391.addFeatures(features_CLASSE_VB_391);
var lyr_CLASSE_VB_391 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_VB_391, 
                style: style_CLASSE_VB_391,
                popuplayertitle: 'CLASSE_VB',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_VB_391.png" /> CLASSE_VB'
            });
var format_CLASSE_VA_392 = new ol.format.GeoJSON();
var features_CLASSE_VA_392 = format_CLASSE_VA_392.readFeatures(json_CLASSE_VA_392, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_VA_392 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_VA_392.addFeatures(features_CLASSE_VA_392);
var lyr_CLASSE_VA_392 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_VA_392, 
                style: style_CLASSE_VA_392,
                popuplayertitle: 'CLASSE_VA',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_VA_392.png" /> CLASSE_VA'
            });
var format_CLASSE_IVC_393 = new ol.format.GeoJSON();
var features_CLASSE_IVC_393 = format_CLASSE_IVC_393.readFeatures(json_CLASSE_IVC_393, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IVC_393 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IVC_393.addFeatures(features_CLASSE_IVC_393);
var lyr_CLASSE_IVC_393 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IVC_393, 
                style: style_CLASSE_IVC_393,
                popuplayertitle: 'CLASSE_IVC',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IVC_393.png" /> CLASSE_IVC'
            });
var format_CLASSE_IVB_394 = new ol.format.GeoJSON();
var features_CLASSE_IVB_394 = format_CLASSE_IVB_394.readFeatures(json_CLASSE_IVB_394, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IVB_394 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IVB_394.addFeatures(features_CLASSE_IVB_394);
var lyr_CLASSE_IVB_394 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IVB_394, 
                style: style_CLASSE_IVB_394,
                popuplayertitle: 'CLASSE_IVB',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IVB_394.png" /> CLASSE_IVB'
            });
var format_CLASSE_IVA_395 = new ol.format.GeoJSON();
var features_CLASSE_IVA_395 = format_CLASSE_IVA_395.readFeatures(json_CLASSE_IVA_395, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IVA_395 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IVA_395.addFeatures(features_CLASSE_IVA_395);
var lyr_CLASSE_IVA_395 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IVA_395, 
                style: style_CLASSE_IVA_395,
                popuplayertitle: 'CLASSE_IVA',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IVA_395.png" /> CLASSE_IVA'
            });
var format_CLASSE_IIIC_396 = new ol.format.GeoJSON();
var features_CLASSE_IIIC_396 = format_CLASSE_IIIC_396.readFeatures(json_CLASSE_IIIC_396, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IIIC_396 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IIIC_396.addFeatures(features_CLASSE_IIIC_396);
var lyr_CLASSE_IIIC_396 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IIIC_396, 
                style: style_CLASSE_IIIC_396,
                popuplayertitle: 'CLASSE_IIIC',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IIIC_396.png" /> CLASSE_IIIC'
            });
var format_CLASSE_IIIB_397 = new ol.format.GeoJSON();
var features_CLASSE_IIIB_397 = format_CLASSE_IIIB_397.readFeatures(json_CLASSE_IIIB_397, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IIIB_397 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IIIB_397.addFeatures(features_CLASSE_IIIB_397);
var lyr_CLASSE_IIIB_397 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IIIB_397, 
                style: style_CLASSE_IIIB_397,
                popuplayertitle: 'CLASSE_IIIB',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IIIB_397.png" /> CLASSE_IIIB'
            });
var format_CLASSE_IIIA_398 = new ol.format.GeoJSON();
var features_CLASSE_IIIA_398 = format_CLASSE_IIIA_398.readFeatures(json_CLASSE_IIIA_398, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IIIA_398 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IIIA_398.addFeatures(features_CLASSE_IIIA_398);
var lyr_CLASSE_IIIA_398 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IIIA_398, 
                style: style_CLASSE_IIIA_398,
                popuplayertitle: 'CLASSE_IIIA',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IIIA_398.png" /> CLASSE_IIIA'
            });
var format_CLASSE_II_399 = new ol.format.GeoJSON();
var features_CLASSE_II_399 = format_CLASSE_II_399.readFeatures(json_CLASSE_II_399, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_II_399 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_II_399.addFeatures(features_CLASSE_II_399);
var lyr_CLASSE_II_399 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_II_399, 
                style: style_CLASSE_II_399,
                popuplayertitle: 'CLASSE_II',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_II_399.png" /> CLASSE_II'
            });
var format_CLASSE_I_400 = new ol.format.GeoJSON();
var features_CLASSE_I_400 = format_CLASSE_I_400.readFeatures(json_CLASSE_I_400, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_I_400 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_I_400.addFeatures(features_CLASSE_I_400);
var lyr_CLASSE_I_400 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_I_400, 
                style: style_CLASSE_I_400,
                popuplayertitle: 'CLASSE_I',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_I_400.png" /> CLASSE_I'
            });
var format_LOTEAMENTO_FECHADO146UNID70632440M_401 = new ol.format.GeoJSON();
var features_LOTEAMENTO_FECHADO146UNID70632440M_401 = format_LOTEAMENTO_FECHADO146UNID70632440M_401.readFeatures(json_LOTEAMENTO_FECHADO146UNID70632440M_401, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LOTEAMENTO_FECHADO146UNID70632440M_401 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTEAMENTO_FECHADO146UNID70632440M_401.addFeatures(features_LOTEAMENTO_FECHADO146UNID70632440M_401);
var lyr_LOTEAMENTO_FECHADO146UNID70632440M_401 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTEAMENTO_FECHADO146UNID70632440M_401, 
                style: style_LOTEAMENTO_FECHADO146UNID70632440M_401,
                popuplayertitle: 'LOTEAMENTO_FECHADO (146 UNID. / 706.324,40 M²)',
                interactive: true,
                title: '<img src="styles/legend/LOTEAMENTO_FECHADO146UNID70632440M_401.png" /> LOTEAMENTO_FECHADO (146 UNID. / 706.324,40 M²)'
            });
var format_LOTE_EMDEF10UNID218783M_402 = new ol.format.GeoJSON();
var features_LOTE_EMDEF10UNID218783M_402 = format_LOTE_EMDEF10UNID218783M_402.readFeatures(json_LOTE_EMDEF10UNID218783M_402, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LOTE_EMDEF10UNID218783M_402 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTE_EMDEF10UNID218783M_402.addFeatures(features_LOTE_EMDEF10UNID218783M_402);
var lyr_LOTE_EMDEF10UNID218783M_402 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTE_EMDEF10UNID218783M_402, 
                style: style_LOTE_EMDEF10UNID218783M_402,
                popuplayertitle: 'LOTE_EMDEF (10 UNID. / 2.187,83 M²)',
                interactive: true,
                title: '<img src="styles/legend/LOTE_EMDEF10UNID218783M_402.png" /> LOTE_EMDEF (10 UNID. / 2.187,83 M²)'
            });
var format_LOTE_EMDEF_403 = new ol.format.GeoJSON();
var features_LOTE_EMDEF_403 = format_LOTE_EMDEF_403.readFeatures(json_LOTE_EMDEF_403, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LOTE_EMDEF_403 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTE_EMDEF_403.addFeatures(features_LOTE_EMDEF_403);
var lyr_LOTE_EMDEF_403 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTE_EMDEF_403, 
                style: style_LOTE_EMDEF_403,
                popuplayertitle: 'LOTE_EMDEF',
                interactive: true,
                title: '<img src="styles/legend/LOTE_EMDEF_403.png" /> LOTE_EMDEF'
            });
var format_LOTE_COM_EDIFICACAO20UNID508062M_404 = new ol.format.GeoJSON();
var features_LOTE_COM_EDIFICACAO20UNID508062M_404 = format_LOTE_COM_EDIFICACAO20UNID508062M_404.readFeatures(json_LOTE_COM_EDIFICACAO20UNID508062M_404, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LOTE_COM_EDIFICACAO20UNID508062M_404 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTE_COM_EDIFICACAO20UNID508062M_404.addFeatures(features_LOTE_COM_EDIFICACAO20UNID508062M_404);
var lyr_LOTE_COM_EDIFICACAO20UNID508062M_404 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTE_COM_EDIFICACAO20UNID508062M_404, 
                style: style_LOTE_COM_EDIFICACAO20UNID508062M_404,
                popuplayertitle: 'LOTE_COM_EDIFICACAO (20 UNID. / 5.080,62 M²)',
                interactive: true,
                title: '<img src="styles/legend/LOTE_COM_EDIFICACAO20UNID508062M_404.png" /> LOTE_COM_EDIFICACAO (20 UNID. / 5.080,62 M²)'
            });
var format_LOTE_COM_EDIFICACAO_405 = new ol.format.GeoJSON();
var features_LOTE_COM_EDIFICACAO_405 = format_LOTE_COM_EDIFICACAO_405.readFeatures(json_LOTE_COM_EDIFICACAO_405, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LOTE_COM_EDIFICACAO_405 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTE_COM_EDIFICACAO_405.addFeatures(features_LOTE_COM_EDIFICACAO_405);
var lyr_LOTE_COM_EDIFICACAO_405 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTE_COM_EDIFICACAO_405, 
                style: style_LOTE_COM_EDIFICACAO_405,
                popuplayertitle: 'LOTE_COM_EDIFICACAO',
                interactive: true,
                title: '<img src="styles/legend/LOTE_COM_EDIFICACAO_405.png" /> LOTE_COM_EDIFICACAO'
            });
var format_LOTE252UNID7530210M_406 = new ol.format.GeoJSON();
var features_LOTE252UNID7530210M_406 = format_LOTE252UNID7530210M_406.readFeatures(json_LOTE252UNID7530210M_406, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LOTE252UNID7530210M_406 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTE252UNID7530210M_406.addFeatures(features_LOTE252UNID7530210M_406);
var lyr_LOTE252UNID7530210M_406 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTE252UNID7530210M_406, 
                style: style_LOTE252UNID7530210M_406,
                popuplayertitle: 'LOTE (252 UNID. / 75.302,10 M²)',
                interactive: true,
                title: '<img src="styles/legend/LOTE252UNID7530210M_406.png" /> LOTE (252 UNID. / 75.302,10 M²)'
            });
var format_LOTE_407 = new ol.format.GeoJSON();
var features_LOTE_407 = format_LOTE_407.readFeatures(json_LOTE_407, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LOTE_407 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTE_407.addFeatures(features_LOTE_407);
var lyr_LOTE_407 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTE_407, 
                style: style_LOTE_407,
                popuplayertitle: 'LOTE',
                interactive: true,
                title: '<img src="styles/legend/LOTE_407.png" /> LOTE'
            });
var format_LEILAO_PROCESSO_7954202537196UNID3239123M_408 = new ol.format.GeoJSON();
var features_LEILAO_PROCESSO_7954202537196UNID3239123M_408 = format_LEILAO_PROCESSO_7954202537196UNID3239123M_408.readFeatures(json_LEILAO_PROCESSO_7954202537196UNID3239123M_408, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LEILAO_PROCESSO_7954202537196UNID3239123M_408 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEILAO_PROCESSO_7954202537196UNID3239123M_408.addFeatures(features_LEILAO_PROCESSO_7954202537196UNID3239123M_408);
var lyr_LEILAO_PROCESSO_7954202537196UNID3239123M_408 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEILAO_PROCESSO_7954202537196UNID3239123M_408, 
                style: style_LEILAO_PROCESSO_7954202537196UNID3239123M_408,
                popuplayertitle: 'LEILAO_PROCESSO_7954/2025-37 (196 UNID. / 32.391,23 M²)',
                interactive: true,
                title: '<img src="styles/legend/LEILAO_PROCESSO_7954202537196UNID3239123M_408.png" /> LEILAO_PROCESSO_7954/2025-37 (196 UNID. / 32.391,23 M²)'
            });
var format_LEILAO_PROCESSO_7954202537_409 = new ol.format.GeoJSON();
var features_LEILAO_PROCESSO_7954202537_409 = format_LEILAO_PROCESSO_7954202537_409.readFeatures(json_LEILAO_PROCESSO_7954202537_409, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LEILAO_PROCESSO_7954202537_409 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEILAO_PROCESSO_7954202537_409.addFeatures(features_LEILAO_PROCESSO_7954202537_409);
var lyr_LEILAO_PROCESSO_7954202537_409 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEILAO_PROCESSO_7954202537_409, 
                style: style_LEILAO_PROCESSO_7954202537_409,
                popuplayertitle: 'LEILAO_PROCESSO_7954/2025-37',
                interactive: true,
                title: '<img src="styles/legend/LEILAO_PROCESSO_7954202537_409.png" /> LEILAO_PROCESSO_7954/2025-37'
            });
var format_LEILAO_PROCESSO_2652520256922UNID352000M_410 = new ol.format.GeoJSON();
var features_LEILAO_PROCESSO_2652520256922UNID352000M_410 = format_LEILAO_PROCESSO_2652520256922UNID352000M_410.readFeatures(json_LEILAO_PROCESSO_2652520256922UNID352000M_410, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LEILAO_PROCESSO_2652520256922UNID352000M_410 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEILAO_PROCESSO_2652520256922UNID352000M_410.addFeatures(features_LEILAO_PROCESSO_2652520256922UNID352000M_410);
var lyr_LEILAO_PROCESSO_2652520256922UNID352000M_410 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEILAO_PROCESSO_2652520256922UNID352000M_410, 
                style: style_LEILAO_PROCESSO_2652520256922UNID352000M_410,
                popuplayertitle: 'LEILAO_PROCESSO_26525/2025-69 (22 UNID. / 3.520,00 M²)',
                interactive: true,
                title: '<img src="styles/legend/LEILAO_PROCESSO_2652520256922UNID352000M_410.png" /> LEILAO_PROCESSO_26525/2025-69 (22 UNID. / 3.520,00 M²)'
            });
var format_LEILAO_PROCESSO_26525202569_411 = new ol.format.GeoJSON();
var features_LEILAO_PROCESSO_26525202569_411 = format_LEILAO_PROCESSO_26525202569_411.readFeatures(json_LEILAO_PROCESSO_26525202569_411, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LEILAO_PROCESSO_26525202569_411 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEILAO_PROCESSO_26525202569_411.addFeatures(features_LEILAO_PROCESSO_26525202569_411);
var lyr_LEILAO_PROCESSO_26525202569_411 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEILAO_PROCESSO_26525202569_411, 
                style: style_LEILAO_PROCESSO_26525202569_411,
                popuplayertitle: 'LEILAO_PROCESSO_26525/2025-69',
                interactive: true,
                title: '<img src="styles/legend/LEILAO_PROCESSO_26525202569_411.png" /> LEILAO_PROCESSO_26525/2025-69'
            });
var format_LEILAO_PROCESSO_2198620254518UNID2092083M_412 = new ol.format.GeoJSON();
var features_LEILAO_PROCESSO_2198620254518UNID2092083M_412 = format_LEILAO_PROCESSO_2198620254518UNID2092083M_412.readFeatures(json_LEILAO_PROCESSO_2198620254518UNID2092083M_412, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LEILAO_PROCESSO_2198620254518UNID2092083M_412 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEILAO_PROCESSO_2198620254518UNID2092083M_412.addFeatures(features_LEILAO_PROCESSO_2198620254518UNID2092083M_412);
var lyr_LEILAO_PROCESSO_2198620254518UNID2092083M_412 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEILAO_PROCESSO_2198620254518UNID2092083M_412, 
                style: style_LEILAO_PROCESSO_2198620254518UNID2092083M_412,
                popuplayertitle: 'LEILAO_PROCESSO_21986/2025-45 (18 UNID. / 20.920,83 M²)',
                interactive: true,
                title: '<img src="styles/legend/LEILAO_PROCESSO_2198620254518UNID2092083M_412.png" /> LEILAO_PROCESSO_21986/2025-45 (18 UNID. / 20.920,83 M²)'
            });
var format_LEILAO_PROCESSO_21986202545_413 = new ol.format.GeoJSON();
var features_LEILAO_PROCESSO_21986202545_413 = format_LEILAO_PROCESSO_21986202545_413.readFeatures(json_LEILAO_PROCESSO_21986202545_413, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LEILAO_PROCESSO_21986202545_413 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEILAO_PROCESSO_21986202545_413.addFeatures(features_LEILAO_PROCESSO_21986202545_413);
var lyr_LEILAO_PROCESSO_21986202545_413 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEILAO_PROCESSO_21986202545_413, 
                style: style_LEILAO_PROCESSO_21986202545_413,
                popuplayertitle: 'LEILAO_PROCESSO_21986/2025-45',
                interactive: true,
                title: '<img src="styles/legend/LEILAO_PROCESSO_21986202545_413.png" /> LEILAO_PROCESSO_21986/2025-45'
            });
var format_LEILAO_HOMOLOGADO4UNID334770M_414 = new ol.format.GeoJSON();
var features_LEILAO_HOMOLOGADO4UNID334770M_414 = format_LEILAO_HOMOLOGADO4UNID334770M_414.readFeatures(json_LEILAO_HOMOLOGADO4UNID334770M_414, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LEILAO_HOMOLOGADO4UNID334770M_414 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEILAO_HOMOLOGADO4UNID334770M_414.addFeatures(features_LEILAO_HOMOLOGADO4UNID334770M_414);
var lyr_LEILAO_HOMOLOGADO4UNID334770M_414 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEILAO_HOMOLOGADO4UNID334770M_414, 
                style: style_LEILAO_HOMOLOGADO4UNID334770M_414,
                popuplayertitle: 'LEILAO_HOMOLOGADO (4 UNID. / 3.347,70 M²)',
                interactive: true,
                title: '<img src="styles/legend/LEILAO_HOMOLOGADO4UNID334770M_414.png" /> LEILAO_HOMOLOGADO (4 UNID. / 3.347,70 M²)'
            });
var format_LEILAO_HOMOLOGADO_415 = new ol.format.GeoJSON();
var features_LEILAO_HOMOLOGADO_415 = format_LEILAO_HOMOLOGADO_415.readFeatures(json_LEILAO_HOMOLOGADO_415, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LEILAO_HOMOLOGADO_415 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEILAO_HOMOLOGADO_415.addFeatures(features_LEILAO_HOMOLOGADO_415);
var lyr_LEILAO_HOMOLOGADO_415 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEILAO_HOMOLOGADO_415, 
                style: style_LEILAO_HOMOLOGADO_415,
                popuplayertitle: 'LEILAO_HOMOLOGADO',
                interactive: true,
                title: '<img src="styles/legend/LEILAO_HOMOLOGADO_415.png" /> LEILAO_HOMOLOGADO'
            });
var format_AREA_VERDE2013UNID836044252M_416 = new ol.format.GeoJSON();
var features_AREA_VERDE2013UNID836044252M_416 = format_AREA_VERDE2013UNID836044252M_416.readFeatures(json_AREA_VERDE2013UNID836044252M_416, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_VERDE2013UNID836044252M_416 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_VERDE2013UNID836044252M_416.addFeatures(features_AREA_VERDE2013UNID836044252M_416);
var lyr_AREA_VERDE2013UNID836044252M_416 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_VERDE2013UNID836044252M_416, 
                style: style_AREA_VERDE2013UNID836044252M_416,
                popuplayertitle: 'AREA_VERDE (2013 UNID. / 8.360.442,52 M²)',
                interactive: true,
                title: '<img src="styles/legend/AREA_VERDE2013UNID836044252M_416.png" /> AREA_VERDE (2013 UNID. / 8.360.442,52 M²)'
            });
var format_AREA_PATRIMONIAL69UNID121924073M_417 = new ol.format.GeoJSON();
var features_AREA_PATRIMONIAL69UNID121924073M_417 = format_AREA_PATRIMONIAL69UNID121924073M_417.readFeatures(json_AREA_PATRIMONIAL69UNID121924073M_417, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_PATRIMONIAL69UNID121924073M_417 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_PATRIMONIAL69UNID121924073M_417.addFeatures(features_AREA_PATRIMONIAL69UNID121924073M_417);
var lyr_AREA_PATRIMONIAL69UNID121924073M_417 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_PATRIMONIAL69UNID121924073M_417, 
                style: style_AREA_PATRIMONIAL69UNID121924073M_417,
                popuplayertitle: 'AREA_PATRIMONIAL (69 UNID. / 1.219.240,73 M²)',
                interactive: true,
                title: '<img src="styles/legend/AREA_PATRIMONIAL69UNID121924073M_417.png" /> AREA_PATRIMONIAL (69 UNID. / 1.219.240,73 M²)'
            });
var format_AREA_INSTITUCIONAL354UNID202812033M_418 = new ol.format.GeoJSON();
var features_AREA_INSTITUCIONAL354UNID202812033M_418 = format_AREA_INSTITUCIONAL354UNID202812033M_418.readFeatures(json_AREA_INSTITUCIONAL354UNID202812033M_418, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_INSTITUCIONAL354UNID202812033M_418 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_INSTITUCIONAL354UNID202812033M_418.addFeatures(features_AREA_INSTITUCIONAL354UNID202812033M_418);
var lyr_AREA_INSTITUCIONAL354UNID202812033M_418 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_INSTITUCIONAL354UNID202812033M_418, 
                style: style_AREA_INSTITUCIONAL354UNID202812033M_418,
                popuplayertitle: 'AREA_INSTITUCIONAL (354 UNID. / 2.028.120,33 M²)',
                interactive: true,
                title: '<img src="styles/legend/AREA_INSTITUCIONAL354UNID202812033M_418.png" /> AREA_INSTITUCIONAL (354 UNID. / 2.028.120,33 M²)'
            });
var format_AREA_DE_USO_ESPECIAL280UNID271349968M_419 = new ol.format.GeoJSON();
var features_AREA_DE_USO_ESPECIAL280UNID271349968M_419 = format_AREA_DE_USO_ESPECIAL280UNID271349968M_419.readFeatures(json_AREA_DE_USO_ESPECIAL280UNID271349968M_419, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AREA_DE_USO_ESPECIAL280UNID271349968M_419 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_DE_USO_ESPECIAL280UNID271349968M_419.addFeatures(features_AREA_DE_USO_ESPECIAL280UNID271349968M_419);
var lyr_AREA_DE_USO_ESPECIAL280UNID271349968M_419 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_DE_USO_ESPECIAL280UNID271349968M_419, 
                style: style_AREA_DE_USO_ESPECIAL280UNID271349968M_419,
                popuplayertitle: 'AREA_DE_USO_ESPECIAL (280 UNID. / 2.713.499,68 M²)',
                interactive: true,
                title: '<img src="styles/legend/AREA_DE_USO_ESPECIAL280UNID271349968M_419.png" /> AREA_DE_USO_ESPECIAL (280 UNID. / 2.713.499,68 M²)'
            });
var format_APP148UNID220260340M_420 = new ol.format.GeoJSON();
var features_APP148UNID220260340M_420 = format_APP148UNID220260340M_420.readFeatures(json_APP148UNID220260340M_420, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP148UNID220260340M_420 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP148UNID220260340M_420.addFeatures(features_APP148UNID220260340M_420);
var lyr_APP148UNID220260340M_420 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP148UNID220260340M_420, 
                style: style_APP148UNID220260340M_420,
                popuplayertitle: 'APP (148 UNID. / 2.202.603,40 M²)',
                interactive: true,
                title: '<img src="styles/legend/APP148UNID220260340M_420.png" /> APP (148 UNID. / 2.202.603,40 M²)'
            });
var format_TRPRL_CETESB_421 = new ol.format.GeoJSON();
var features_TRPRL_CETESB_421 = format_TRPRL_CETESB_421.readFeatures(json_TRPRL_CETESB_421, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRL_CETESB_421 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRL_CETESB_421.addFeatures(features_TRPRL_CETESB_421);
var lyr_TRPRL_CETESB_421 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRL_CETESB_421, 
                style: style_TRPRL_CETESB_421,
                popuplayertitle: 'TRPRL_CETESB',
                interactive: true,
                title: '<img src="styles/legend/TRPRL_CETESB_421.png" /> TRPRL_CETESB'
            });
var format_TRPRL_CETESB_422 = new ol.format.GeoJSON();
var features_TRPRL_CETESB_422 = format_TRPRL_CETESB_422.readFeatures(json_TRPRL_CETESB_422, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRL_CETESB_422 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRL_CETESB_422.addFeatures(features_TRPRL_CETESB_422);
var lyr_TRPRL_CETESB_422 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRL_CETESB_422, 
                style: style_TRPRL_CETESB_422,
                popuplayertitle: 'TRPRL_CETESB',
                interactive: true,
                title: '<img src="styles/legend/TRPRL_CETESB_422.png" /> TRPRL_CETESB'
            });
var format_TCRA_MUNICIPAL_423 = new ol.format.GeoJSON();
var features_TCRA_MUNICIPAL_423 = format_TCRA_MUNICIPAL_423.readFeatures(json_TCRA_MUNICIPAL_423, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRA_MUNICIPAL_423 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRA_MUNICIPAL_423.addFeatures(features_TCRA_MUNICIPAL_423);
var lyr_TCRA_MUNICIPAL_423 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRA_MUNICIPAL_423, 
                style: style_TCRA_MUNICIPAL_423,
                popuplayertitle: 'TCRA_MUNICIPAL',
                interactive: true,
                title: '<img src="styles/legend/TCRA_MUNICIPAL_423.png" /> TCRA_MUNICIPAL'
            });
var format_TCRA_MUNICIPAL_424 = new ol.format.GeoJSON();
var features_TCRA_MUNICIPAL_424 = format_TCRA_MUNICIPAL_424.readFeatures(json_TCRA_MUNICIPAL_424, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRA_MUNICIPAL_424 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRA_MUNICIPAL_424.addFeatures(features_TCRA_MUNICIPAL_424);
var lyr_TCRA_MUNICIPAL_424 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRA_MUNICIPAL_424, 
                style: style_TCRA_MUNICIPAL_424,
                popuplayertitle: 'TCRA_MUNICIPAL',
                interactive: true,
                title: '<img src="styles/legend/TCRA_MUNICIPAL_424.png" /> TCRA_MUNICIPAL'
            });
var format_TCRA_CETESB_PARCELAMENTO_425 = new ol.format.GeoJSON();
var features_TCRA_CETESB_PARCELAMENTO_425 = format_TCRA_CETESB_PARCELAMENTO_425.readFeatures(json_TCRA_CETESB_PARCELAMENTO_425, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRA_CETESB_PARCELAMENTO_425 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRA_CETESB_PARCELAMENTO_425.addFeatures(features_TCRA_CETESB_PARCELAMENTO_425);
var lyr_TCRA_CETESB_PARCELAMENTO_425 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRA_CETESB_PARCELAMENTO_425, 
                style: style_TCRA_CETESB_PARCELAMENTO_425,
                popuplayertitle: 'TCRA_CETESB_PARCELAMENTO',
                interactive: true,
                title: '<img src="styles/legend/TCRA_CETESB_PARCELAMENTO_425.png" /> TCRA_CETESB_PARCELAMENTO'
            });
var format_TCRA_CETESB_PARCELAMENTO_426 = new ol.format.GeoJSON();
var features_TCRA_CETESB_PARCELAMENTO_426 = format_TCRA_CETESB_PARCELAMENTO_426.readFeatures(json_TCRA_CETESB_PARCELAMENTO_426, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRA_CETESB_PARCELAMENTO_426 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRA_CETESB_PARCELAMENTO_426.addFeatures(features_TCRA_CETESB_PARCELAMENTO_426);
var lyr_TCRA_CETESB_PARCELAMENTO_426 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRA_CETESB_PARCELAMENTO_426, 
                style: style_TCRA_CETESB_PARCELAMENTO_426,
                popuplayertitle: 'TCRA_CETESB_PARCELAMENTO',
                interactive: true,
                title: '<img src="styles/legend/TCRA_CETESB_PARCELAMENTO_426.png" /> TCRA_CETESB_PARCELAMENTO'
            });
var format_TCRA_CETESB_427 = new ol.format.GeoJSON();
var features_TCRA_CETESB_427 = format_TCRA_CETESB_427.readFeatures(json_TCRA_CETESB_427, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRA_CETESB_427 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRA_CETESB_427.addFeatures(features_TCRA_CETESB_427);
var lyr_TCRA_CETESB_427 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRA_CETESB_427, 
                style: style_TCRA_CETESB_427,
                popuplayertitle: 'TCRA_CETESB',
                interactive: true,
                title: '<img src="styles/legend/TCRA_CETESB_427.png" /> TCRA_CETESB'
            });
var format_TCRA_CETESB_428 = new ol.format.GeoJSON();
var features_TCRA_CETESB_428 = format_TCRA_CETESB_428.readFeatures(json_TCRA_CETESB_428, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRA_CETESB_428 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRA_CETESB_428.addFeatures(features_TCRA_CETESB_428);
var lyr_TCRA_CETESB_428 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRA_CETESB_428, 
                style: style_TCRA_CETESB_428,
                popuplayertitle: 'TCRA_CETESB',
                interactive: true,
                title: '<img src="styles/legend/TCRA_CETESB_428.png" /> TCRA_CETESB'
            });
var format_TAC_MP_429 = new ol.format.GeoJSON();
var features_TAC_MP_429 = format_TAC_MP_429.readFeatures(json_TAC_MP_429, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TAC_MP_429 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAC_MP_429.addFeatures(features_TAC_MP_429);
var lyr_TAC_MP_429 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAC_MP_429, 
                style: style_TAC_MP_429,
                popuplayertitle: 'TAC_MP',
                interactive: true,
                title: '<img src="styles/legend/TAC_MP_429.png" /> TAC_MP'
            });
var format_TAC_MP_430 = new ol.format.GeoJSON();
var features_TAC_MP_430 = format_TAC_MP_430.readFeatures(json_TAC_MP_430, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TAC_MP_430 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAC_MP_430.addFeatures(features_TAC_MP_430);
var lyr_TAC_MP_430 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAC_MP_430, 
                style: style_TAC_MP_430,
                popuplayertitle: 'TAC_MP',
                interactive: true,
                title: '<img src="styles/legend/TAC_MP_430.png" /> TAC_MP'
            });
var format_PLANTIO_VOLUNTARIO_431 = new ol.format.GeoJSON();
var features_PLANTIO_VOLUNTARIO_431 = format_PLANTIO_VOLUNTARIO_431.readFeatures(json_PLANTIO_VOLUNTARIO_431, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PLANTIO_VOLUNTARIO_431 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLANTIO_VOLUNTARIO_431.addFeatures(features_PLANTIO_VOLUNTARIO_431);
var lyr_PLANTIO_VOLUNTARIO_431 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLANTIO_VOLUNTARIO_431, 
                style: style_PLANTIO_VOLUNTARIO_431,
                popuplayertitle: 'PLANTIO_VOLUNTARIO',
                interactive: true,
                title: '<img src="styles/legend/PLANTIO_VOLUNTARIO_431.png" /> PLANTIO_VOLUNTARIO'
            });
var format_PLANTIO_VOLUNTARIO_432 = new ol.format.GeoJSON();
var features_PLANTIO_VOLUNTARIO_432 = format_PLANTIO_VOLUNTARIO_432.readFeatures(json_PLANTIO_VOLUNTARIO_432, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PLANTIO_VOLUNTARIO_432 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLANTIO_VOLUNTARIO_432.addFeatures(features_PLANTIO_VOLUNTARIO_432);
var lyr_PLANTIO_VOLUNTARIO_432 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLANTIO_VOLUNTARIO_432, 
                style: style_PLANTIO_VOLUNTARIO_432,
                popuplayertitle: 'PLANTIO_VOLUNTARIO',
                interactive: true,
                title: '<img src="styles/legend/PLANTIO_VOLUNTARIO_432.png" /> PLANTIO_VOLUNTARIO'
            });
var format_ANUENCIA_433 = new ol.format.GeoJSON();
var features_ANUENCIA_433 = format_ANUENCIA_433.readFeatures(json_ANUENCIA_433, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ANUENCIA_433 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANUENCIA_433.addFeatures(features_ANUENCIA_433);
var lyr_ANUENCIA_433 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANUENCIA_433, 
                style: style_ANUENCIA_433,
                popuplayertitle: 'ANUENCIA',
                interactive: true,
                title: '<img src="styles/legend/ANUENCIA_433.png" /> ANUENCIA'
            });
var format_ANUENCIA_434 = new ol.format.GeoJSON();
var features_ANUENCIA_434 = format_ANUENCIA_434.readFeatures(json_ANUENCIA_434, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ANUENCIA_434 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANUENCIA_434.addFeatures(features_ANUENCIA_434);
var lyr_ANUENCIA_434 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANUENCIA_434, 
                style: style_ANUENCIA_434,
                popuplayertitle: 'ANUENCIA',
                interactive: true,
                title: '<img src="styles/legend/ANUENCIA_434.png" /> ANUENCIA'
            });
var format_AIIPA_CETESB_435 = new ol.format.GeoJSON();
var features_AIIPA_CETESB_435 = format_AIIPA_CETESB_435.readFeatures(json_AIIPA_CETESB_435, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AIIPA_CETESB_435 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIIPA_CETESB_435.addFeatures(features_AIIPA_CETESB_435);
var lyr_AIIPA_CETESB_435 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIIPA_CETESB_435, 
                style: style_AIIPA_CETESB_435,
                popuplayertitle: 'AIIPA_CETESB',
                interactive: true,
                title: '<img src="styles/legend/AIIPA_CETESB_435.png" /> AIIPA_CETESB'
            });
var format_AIIPA_CETESB_436 = new ol.format.GeoJSON();
var features_AIIPA_CETESB_436 = format_AIIPA_CETESB_436.readFeatures(json_AIIPA_CETESB_436, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AIIPA_CETESB_436 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIIPA_CETESB_436.addFeatures(features_AIIPA_CETESB_436);
var lyr_AIIPA_CETESB_436 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIIPA_CETESB_436, 
                style: style_AIIPA_CETESB_436,
                popuplayertitle: 'AIIPA_CETESB',
                interactive: true,
                title: '<img src="styles/legend/AIIPA_CETESB_436.png" /> AIIPA_CETESB'
            });
var format_ACAO_CIVIL_PUBLICA_437 = new ol.format.GeoJSON();
var features_ACAO_CIVIL_PUBLICA_437 = format_ACAO_CIVIL_PUBLICA_437.readFeatures(json_ACAO_CIVIL_PUBLICA_437, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ACAO_CIVIL_PUBLICA_437 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACAO_CIVIL_PUBLICA_437.addFeatures(features_ACAO_CIVIL_PUBLICA_437);
var lyr_ACAO_CIVIL_PUBLICA_437 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACAO_CIVIL_PUBLICA_437, 
                style: style_ACAO_CIVIL_PUBLICA_437,
                popuplayertitle: 'ACAO_CIVIL_PUBLICA',
                interactive: true,
                title: '<img src="styles/legend/ACAO_CIVIL_PUBLICA_437.png" /> ACAO_CIVIL_PUBLICA'
            });
var format_ACAO_CIVIL_PUBLICA_438 = new ol.format.GeoJSON();
var features_ACAO_CIVIL_PUBLICA_438 = format_ACAO_CIVIL_PUBLICA_438.readFeatures(json_ACAO_CIVIL_PUBLICA_438, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ACAO_CIVIL_PUBLICA_438 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACAO_CIVIL_PUBLICA_438.addFeatures(features_ACAO_CIVIL_PUBLICA_438);
var lyr_ACAO_CIVIL_PUBLICA_438 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACAO_CIVIL_PUBLICA_438, 
                style: style_ACAO_CIVIL_PUBLICA_438,
                popuplayertitle: 'ACAO_CIVIL_PUBLICA',
                interactive: true,
                title: '<img src="styles/legend/ACAO_CIVIL_PUBLICA_438.png" /> ACAO_CIVIL_PUBLICA'
            });
var format_PROG_ADOTE_UMA_PRACA_439 = new ol.format.GeoJSON();
var features_PROG_ADOTE_UMA_PRACA_439 = format_PROG_ADOTE_UMA_PRACA_439.readFeatures(json_PROG_ADOTE_UMA_PRACA_439, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PROG_ADOTE_UMA_PRACA_439 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROG_ADOTE_UMA_PRACA_439.addFeatures(features_PROG_ADOTE_UMA_PRACA_439);
var lyr_PROG_ADOTE_UMA_PRACA_439 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROG_ADOTE_UMA_PRACA_439, 
                style: style_PROG_ADOTE_UMA_PRACA_439,
                popuplayertitle: 'PROG_ADOTE_UMA_PRACA',
                interactive: true,
                title: '<img src="styles/legend/PROG_ADOTE_UMA_PRACA_439.png" /> PROG_ADOTE_UMA_PRACA'
            });
var format_RESPONSAVEL_EGNALDO211UNID20447664M_440 = new ol.format.GeoJSON();
var features_RESPONSAVEL_EGNALDO211UNID20447664M_440 = format_RESPONSAVEL_EGNALDO211UNID20447664M_440.readFeatures(json_RESPONSAVEL_EGNALDO211UNID20447664M_440, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESPONSAVEL_EGNALDO211UNID20447664M_440 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESPONSAVEL_EGNALDO211UNID20447664M_440.addFeatures(features_RESPONSAVEL_EGNALDO211UNID20447664M_440);
var lyr_RESPONSAVEL_EGNALDO211UNID20447664M_440 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESPONSAVEL_EGNALDO211UNID20447664M_440, 
                style: style_RESPONSAVEL_EGNALDO211UNID20447664M_440,
                popuplayertitle: 'RESPONSAVEL_EGNALDO (211 UNID. / 204.476,64 M²)',
                interactive: true,
                title: '<img src="styles/legend/RESPONSAVEL_EGNALDO211UNID20447664M_440.png" /> RESPONSAVEL_EGNALDO (211 UNID. / 204.476,64 M²)'
            });
var format_RESPONSAVEL_DILU164UNID16715010M_441 = new ol.format.GeoJSON();
var features_RESPONSAVEL_DILU164UNID16715010M_441 = format_RESPONSAVEL_DILU164UNID16715010M_441.readFeatures(json_RESPONSAVEL_DILU164UNID16715010M_441, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RESPONSAVEL_DILU164UNID16715010M_441 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESPONSAVEL_DILU164UNID16715010M_441.addFeatures(features_RESPONSAVEL_DILU164UNID16715010M_441);
var lyr_RESPONSAVEL_DILU164UNID16715010M_441 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESPONSAVEL_DILU164UNID16715010M_441, 
                style: style_RESPONSAVEL_DILU164UNID16715010M_441,
                popuplayertitle: 'RESPONSAVEL_DILU (164 UNID. / 167.150,10 M²)',
                interactive: true,
                title: '<img src="styles/legend/RESPONSAVEL_DILU164UNID16715010M_441.png" /> RESPONSAVEL_DILU (164 UNID. / 167.150,10 M²)'
            });
var group_ProgramaAdoteUmaPraa = new ol.layer.Group({
                                layers: [lyr_PROG_ADOTE_UMA_PRACA_439,lyr_RESPONSAVEL_EGNALDO211UNID20447664M_440,lyr_RESPONSAVEL_DILU164UNID16715010M_441,],
                                fold: 'close',
                                title: 'Programa Adote Uma Praça'});
var group_reasdeCompensaoAmbiental = new ol.layer.Group({
                                layers: [lyr_TRPRL_CETESB_421,lyr_TRPRL_CETESB_422,lyr_TCRA_MUNICIPAL_423,lyr_TCRA_MUNICIPAL_424,lyr_TCRA_CETESB_PARCELAMENTO_425,lyr_TCRA_CETESB_PARCELAMENTO_426,lyr_TCRA_CETESB_427,lyr_TCRA_CETESB_428,lyr_TAC_MP_429,lyr_TAC_MP_430,lyr_PLANTIO_VOLUNTARIO_431,lyr_PLANTIO_VOLUNTARIO_432,lyr_ANUENCIA_433,lyr_ANUENCIA_434,lyr_AIIPA_CETESB_435,lyr_AIIPA_CETESB_436,lyr_ACAO_CIVIL_PUBLICA_437,lyr_ACAO_CIVIL_PUBLICA_438,],
                                fold: 'close',
                                title: 'Áreas de Compensação Ambiental'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_LOTEAMENTO_FECHADO146UNID70632440M_401,lyr_LOTE_EMDEF10UNID218783M_402,lyr_LOTE_EMDEF_403,lyr_LOTE_COM_EDIFICACAO20UNID508062M_404,lyr_LOTE_COM_EDIFICACAO_405,lyr_LOTE252UNID7530210M_406,lyr_LOTE_407,lyr_LEILAO_PROCESSO_7954202537196UNID3239123M_408,lyr_LEILAO_PROCESSO_7954202537_409,lyr_LEILAO_PROCESSO_2652520256922UNID352000M_410,lyr_LEILAO_PROCESSO_26525202569_411,lyr_LEILAO_PROCESSO_2198620254518UNID2092083M_412,lyr_LEILAO_PROCESSO_21986202545_413,lyr_LEILAO_HOMOLOGADO4UNID334770M_414,lyr_LEILAO_HOMOLOGADO_415,lyr_AREA_VERDE2013UNID836044252M_416,lyr_AREA_PATRIMONIAL69UNID121924073M_417,lyr_AREA_INSTITUCIONAL354UNID202812033M_418,lyr_AREA_DE_USO_ESPECIAL280UNID271349968M_419,lyr_APP148UNID220260340M_420,],
                                fold: 'close',
                                title: 'Áreas Públicas'});
var group_ClassesdeRiscoIPT = new ol.layer.Group({
                                layers: [lyr_CLASSE_VB_391,lyr_CLASSE_VA_392,lyr_CLASSE_IVC_393,lyr_CLASSE_IVB_394,lyr_CLASSE_IVA_395,lyr_CLASSE_IIIC_396,lyr_CLASSE_IIIB_397,lyr_CLASSE_IIIA_398,lyr_CLASSE_II_399,lyr_CLASSE_I_400,],
                                fold: 'close',
                                title: 'Classes de Risco IPT'});
var group_ControleAreo = new ol.layer.Group({
                                layers: [lyr_PROTECAO_AERODROMO_387,lyr_HELIPONTO_HOSPITAL_REGIONAL_388,lyr_HELIPONTO_EDIFICIO_PRIME_389,lyr_HELIPONTO_EDIFICIO_PRIME_390,],
                                fold: 'close',
                                title: 'Controle Aéreo'});
var group_DescarteCorretodeResduos = new ol.layer.Group({
                                layers: [lyr_SERVICO_DE_SAUDE21UNID_369,lyr_RECICLAVEIS15UNID_370,lyr_PNEUS1UNID_371,lyr_PILHAS_E_BATERIAS17UNID_372,lyr_PERIGOSOS1UNID_373,lyr_OLEO_LUBRIFICANTE1UNID_374,lyr_OLEO_DE_COZINHA3UNID_375,lyr_MASSA_VERDE1UNID_376,lyr_MADEIRAS1UNID_377,lyr_LATAS_DE_TINTA2UNID_378,lyr_LAMPADAS4UNID_379,lyr_INSERVIVEIS4UNID_380,lyr_GESSO1UNID_381,lyr_EMBALAGENS_AGROTOXICO1UNID_382,lyr_ELETRONICOS3UNID_383,lyr_COURO1UNID_384,lyr_CONSTRUCAO_CIVIL7UNID_385,lyr_CHAPAS_DE_RAIO_X1UNID_386,],
                                fold: 'close',
                                title: 'Descarte Correto de Resíduos'});
var group_Diversos = new ol.layer.Group({
                                layers: [lyr_VOCOROCAS27UNID_364,lyr_LOCAIS_DE_DIFICIL_ACESSO12UNID_365,lyr_CONTEINERES286UNID_366,lyr_ARVORES_IMUNE_AO_CORTE9UNID_367,lyr_ACADEMIAS_AO_AR_LIVRE84UNID_368,],
                                fold: 'close',
                                title: 'Diversos'});
var group_DivisoTerritorialMunicipal = new ol.layer.Group({
                                layers: [lyr_REGIAO_SUL_359,lyr_REGIAO_OESTE_360,lyr_REGIAO_NORTE_361,lyr_REGIAO_LESTE_362,lyr_BAIRROS_363,],
                                fold: 'close',
                                title: 'Divisão Territorial Municipal'});
var group_Drenagem = new ol.layer.Group({
                                layers: [lyr_DrenagensExistentes_290,lyr_DRENAGEM_VILLAGIO_DI_FIRENZE_291,lyr_DRENAGEM_VILLA_SANTA_GIANNA_292,lyr_DRENAGEM_VILA_TOTOLI_293,lyr_DRENAGEM_VILA_REAL_294,lyr_DRENAGEM_VILA_DORATTA_295,lyr_DRENAGEM_SAO_PEDRO_II_296,lyr_DRENAGEM_SANTA_FE_297,lyr_DRENAGEM_RESIDENCIAL_TELLINI_298,lyr_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299,lyr_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300,lyr_DRENAGEM_RESIDENCIAL_SANTA_INES_301,lyr_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302,lyr_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303,lyr_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304,lyr_DRENAGEM_RESIDENCIAL_PALERMO_305,lyr_DRENAGEM_RESIDENCIAL_ITAPUA_306,lyr_DRENAGEM_RESIDENCIAL_GAIA_307,lyr_DRENAGEM_RESIDENCIAL_FERRACINI_308,lyr_DRENAGEM_RESIDENCIAL_FAGGIONI_309,lyr_DRENAGEM_RESIDENCIAL_ECOSTILO_310,lyr_DRENAGEM_RESIDENCIAL_DOURADO_311,lyr_DRENAGEM_RESIDENCIAL_BALDASSARI_312,lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_313,lyr_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314,lyr_DRENAGEM_RECREIO_CAMPO_BELO_315,lyr_DRENAGEM_RECANTO_MENEGHETTI_316,lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_317,lyr_DRENAGEM_PROL_VILA_ISABEL_318,lyr_DRENAGEM_PROL_JARDIM_MARTINS_319,lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320,lyr_DRENAGEM_PARQUE_UNIVERSITARIO_321,lyr_DRENAGEM_PARQUE_SANTA_ADELIA_322,lyr_DRENAGEM_PARQUE_MOEMA_323,lyr_DRENAGEM_PARQUE_JOAO_LEITE_324,lyr_DRENAGEM_PARQUE_DOS_SABIAS_325,lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_326,lyr_DRENAGEM_PARQUE_DAS_ARVORES_327,lyr_DRENAGEM_PARQUE_CASTELO_328,lyr_DRENAGEM_PARQUE_BOA_VISTA_329,lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_330,lyr_DRENAGEM_PARAGON_331,lyr_DRENAGEM_NAIR_RETUSSI_I_332,lyr_DRENAGEM_JARDIM_SAO_GABRIEL_333,lyr_DRENAGEM_JARDIM_SANTA_LUCIA_334,lyr_DRENAGEM_JARDIM_PULICANO_335,lyr_DRENAGEM_JARDIM_PORTINARI_336,lyr_DRENAGEM_JARDIM_PIRATININGA_337,lyr_DRENAGEM_JARDIM_PALMA_338,lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_339,lyr_DRENAGEM_JARDIM_NOEMIA_340,lyr_DRENAGEM_JARDIM_NATAL_341,lyr_DRENAGEM_JARDIM_MARTINS_342,lyr_DRENAGEM_JARDIM_MARIA_LUIZA_343,lyr_DRENAGEM_JARDIM_LIBANO_344,lyr_DRENAGEM_JARDIM_IPANEMA_345,lyr_DRENAGEM_JARDIM_BUENO_346,lyr_DRENAGEM_JARDIM_BOTANICO_347,lyr_DRENAGEM_JARDIM_BARAO_348,lyr_DRENAGEM_JARDIM_AVIACAO_349,lyr_DRENAGEM_JARDIM_ARIZONA_II_350,lyr_DRENAGEM_JARDIM_ARIZONA_I_351,lyr_DRENAGEM_JARDIM_AEROPORTO_II_352,lyr_DRENAGEM_GRAMADOS_I_353,lyr_DRENAGEM_FRANCA_POLO_CLUBE_354,lyr_DRENAGEM_DOMINGOS_JARDINI_355,lyr_DRENAGEM_DINFRA_II_356,lyr_DRENAGEM_ATLANTA_PARK_357,lyr_DRENAGEM_ANA_DOROTHEA_358,],
                                fold: 'close',
                                title: 'Drenagem'});
var group_Ecopontos = new ol.layer.Group({
                                layers: [lyr_PROPOSTO_287,lyr_EM_FUNCIONAMENTO_288,lyr_EM_CONSTRUCAO_289,],
                                fold: 'close',
                                title: 'Ecopontos'});
var group_FazendaMunicipalPousoAlto = new ol.layer.Group({
                                layers: [lyr_PARTE_DA_AREA_G_AVERBADA_269,lyr_PARTE_DA_AREA_G_A_SER_AVERBADA_270,lyr_CONJUNTO_HABITACIONAL_271,lyr_AV_ACESSO_COLEGIO_AGRICOLA_272,lyr_AREA_N2_273,lyr_AREA_N1_274,lyr_AREA_N_275,lyr_AREA_K_276,lyr_AREA_J_277,lyr_AREA_I_278,lyr_AREA_H_279,lyr_AREA_G_280,lyr_AREA_F_281,lyr_AREA_E_282,lyr_AREA_D_283,lyr_AREA_C_284,lyr_AREA_B_285,lyr_AREA_A_286,],
                                fold: 'close',
                                title: 'Fazenda Municipal Pouso Alto'});
var group_GerenciamentodereasContaminadas = new ol.layer.Group({
                                layers: [lyr_PARQUE_ZUMBI_DOS_PALMARES_258,lyr_ATERRO_DAS_MARITACAS_259,lyr_ATERRO_DAS_MARITACAS_ETAPA_3_260,lyr_ATERRO_DAS_MARITACAS_ETAPA_2_261,lyr_ATERRO_DAS_MARITACAS_ETAPA_1_262,lyr_ATERRO_DA_FAZENDA_MUNICIPAL_263,lyr_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_264,lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_265,lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_266,lyr_AREA_B_DA_FAZENDA_MUNICIPAL_267,lyr_AREA_B_DA_FAZENDA_MUNICIPAL_268,],
                                fold: 'close',
                                title: 'Gerenciamento de Áreas Contaminadas'});
var group_HidrografiaFBDS2025 = new ol.layer.Group({
                                layers: [lyr_FBDS_RIOS_DUPLOS_251,lyr_FBDS_MASSAS_DAGUA_252,lyr_FBDS_APP_253,lyr_FBDS_NASCENTES_254,lyr_FBDS_RIOS_SIMPLES_255,lyr_CORPO_HIDRICO_CANAL_FECHADO088KM_256,lyr_CORPO_HIDRICO_CANAL_ABERTO1252KM_257,],
                                fold: 'close',
                                title: 'Hidrografia FBDS 2025'});
var group_LoteamentosClandestinos = new ol.layer.Group({
                                layers: [lyr_IRREGULAR_249,lyr_IRREGULAR174UNID_250,],
                                fold: 'close',
                                title: 'Loteamentos Clandestinos'});
var group_LoteamentosCondomniosParcelamentodoSolo = new ol.layer.Group({
                                layers: [lyr_VIVENNA_135,lyr_VITTA_SAO_VICENTE_136,lyr_VITTA_JARDIM_SIMOES_137,lyr_VITTA_ALVORADA_138,lyr_VILLA_PUCCI_139,lyr_VILLA_DORATTA_140,lyr_VILLA_BELLA_141,lyr_VILA_PIEMONTE_II_142,lyr_VILA_OLIMPICA_143,lyr_VILA_DI_ESPANHA_144,lyr_VERSALHES_145,lyr_TORONTO_RESIDENCE_146,lyr_TERRA_NOVA_147,lyr_SONETTO_148,lyr_SMART_CITY_EIXO_RESIDENCIAL_II_149,lyr_SMART_CITY_EIXO_RESIDENCIAL_I_150,lyr_SMART_CITY_EIXO_EMPRESARIAL_151,lyr_SERVIDAO_GUANABARA_152,lyr_SANTA_LINA_153,lyr_SANT_ANITA_154,lyr_RUA_ALFIO_BENEDINI_155,lyr_RESIDENCIAL_YASMIN_TORRES_156,lyr_RESIDENCIAL_VALE_VERDE_157,lyr_RESIDENCIAL_TELLINI_158,lyr_RESIDENCIAL_SAO_CARLOS_II_159,lyr_RESIDENCIAL_SAO_CARLOS_I_160,lyr_RESIDENCIAL_SANTA_INES_161,lyr_RESIDENCIAL_SANTA_FE_162,lyr_RESIDENCIAL_QUINTA_DOS_OITIS_163,lyr_RESIDENCIAL_QUINTA_DO_SOL_164,lyr_RESIDENCIAL_POUSO_ALEGRE_II_165,lyr_RESIDENCIAL_POUSO_ALEGRE_166,lyr_RESIDENCIAL_PIAMALIM_167,lyr_RESIDENCIAL_PARQUE_DOS_PASSAROS_168,lyr_RESIDENCIAL_NAIR_RETUCI_II_169,lyr_RESIDENCIAL_NAIR_RETUCI_170,lyr_RESIDENCIAL_MORADA_DO_BOSQUE_171,lyr_RESIDENCIAL_MARTHA_HELENA_172,lyr_RESIDENCIAL_MARIO_TASSO_173,lyr_RESIDENCIAL_MARIANA_ALARCON_174,lyr_RESIDENCIAL_JARDIM_CANADA_175,lyr_RESIDENCIAL_JABUTICABEIRAS_176,lyr_RESIDENCIAL_IRINEU_ZANETTI_II_177,lyr_RESIDENCIAL_GRAMADOS_II_178,lyr_RESIDENCIAL_GRAMADOS_179,lyr_RESIDENCIAL_GAIA_180,lyr_RESIDENCIAL_FRUTUOSO_181,lyr_RESIDENCIAL_FAGGIONI_182,lyr_RESIDENCIAL_ESSENZA_183,lyr_RESIDENCIAL_ESSENCE_184,lyr_RESIDENCIAL_DOMINGOS_JARDINI_185,lyr_RESIDENCIAL_CINTRA_ALVES_186,lyr_RESIDENCIAL_CIDADE_JARDIM_187,lyr_RESIDENCIAL_BOA_VISTA_188,lyr_RESIDENCIAL_ANA_HELENA_189,lyr_RESIDENCIAL_ALTO_DA_FAZENDA_190,lyr_RESERVA_ABAETE_191,lyr_RECANTO_MENEGHETTI_192,lyr_QUADRA_18_VILA_EXPOSICAO_193,lyr_PROLONGAMENTO_SAMEL_PARK_194,lyr_PARQUE_VILLA_LOBOS_195,lyr_PARQUE_PALMEIRA_IMPERIAL_196,lyr_PARQUE_MORADA_DA_MATA_197,lyr_PARQUE_JACARANDA_198,lyr_PARQUE_FLORA_199,lyr_PARQUE_DOS_SABIAS_200,lyr_PARQUE_DOS_COQUEIROS_201,lyr_PARQUE_ALVORADA_202,lyr_PARAGON_FASE_II_203,lyr_PARAGON_204,lyr_PALMEIRA_REAL_205,lyr_MORADA_DO_VERDE_II_206,lyr_MONTIE_207,lyr_MONT_BLANC_RESIDENCE_208,lyr_MASTERPLAN_BILD_VITTA_209,lyr_JARDIM_STEPHANI_210,lyr_JARDIM_PHEROLA_211,lyr_JARDIM_NATAL_212,lyr_JARDIM_MARIA_LUIZA_213,lyr_JARDIM_MARIA_AUGUSTA_214,lyr_JARDIM_HORIZONTE_215,lyr_JARDIM_FLORA_216,lyr_JARDIM_COLORADO_217,lyr_JARDIM_ARIZONA_218,lyr_INFRATECNICA_219,lyr_HORIZ_RESIDENCE_220,lyr_GLEBA_NOSSA_SENHORA_AUXILIADORA_221,lyr_FRANCA_B6_222,lyr_FERRACINI_223,lyr_FAZENDA_PROGRESSO_224,lyr_FAZENDA_E_GRANJA_SANTA_RITA_II_225,lyr_FAZENDA_E_GRANJA_SANTA_RITA_I_226,lyr_ELIAS_227,lyr_EDIFICIO_SOL_NASCENTE_228,lyr_EDIFICIO_RUA_DO_SOL_229,lyr_EDIFICIO_RESIDENCIAL_HOPE_230,lyr_DIOCESE_DE_FRANCA_231,lyr_DA_VINCI_232,lyr_COMDOMINIO_II_CITY_PETROPOLIS_233,lyr_COMDOMINIO_I_CITY_PETROPOLIS_234,lyr_CHACARA_OLARIA_235,lyr_CHACARA_BELA_VISTA_236,lyr_BORDA_DA_MATA_237,lyr_ARTERIS_238,lyr_ALAMO_239,lyr_ABU_DHABI_240,lyr_SERVIDAO_GUANABARA_241,lyr_RUA_ALFIO_BENEDINI_242,lyr_QUADRA_18_VILA_EXPOSICAO_243,lyr_ETAPA_PREVIA_244,lyr_ETAPA_DIRETRIZ_245,lyr_ETAPA_DEFINITIVA_246,lyr_ETAPA_APROVADO_247,lyr_ARTERIS_248,],
                                fold: 'close',
                                title: 'Loteamentos/Condomínios - Parcelamento do Solo'});
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

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatelliteHybrid_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(true);lyr_LIMITE_MUNICIPAL_3.setVisible(true);lyr_AREA_URBANA_4.setVisible(true);lyr_BACIA_RIO_CANOAS_LC_4322024_5.setVisible(false);lyr_BACIA_RIO_CANOAS_LC_1002006_6.setVisible(false);lyr_BACIA_RIBEIRAO_DA_ONCA_7.setVisible(false);lyr_ARO_REMANESCENTES_FLORESTAIS_8.setVisible(false);lyr_ARO_FAIXA_DE_CUESTAS_9.setVisible(false);lyr_ARO_AREA_DE_AMORTECIMENTO_10.setVisible(false);lyr_ARO_APP_11.setVisible(false);lyr_ARA_INCONGRUENCIAS_EM_APP_12.setVisible(false);lyr_ARA_ETE_LAGOAS_13.setVisible(false);lyr_ARA_ATERROS_14.setVisible(false);lyr_AOD_BAIXA_DENSIDADE_NIVEL_3_15.setVisible(false);lyr_AOD_BAIXA_DENSIDADE_NIVEL_2_16.setVisible(false);lyr_AOD_BAIXA_DENSIDADE_NIVEL_1_17.setVisible(false);lyr_AOD_AUS_FASE_2_18.setVisible(false);lyr_AOD_AUS_FASE_1_19.setVisible(false);lyr_AOD_AREA_URBANA_CONSOLIDADA_20.setVisible(false);lyr_SUB_MACROZONA_DE_OCUPACAO_RESTRITA_21.setVisible(false);lyr_SUB_MACROZONA_DE_OCUPACAO_PREFERENCIAL_22.setVisible(false);lyr_SUB_MACROZONA_DE_EXPANSAO_URBANA_23.setVisible(false);lyr_MACROZONA_DO_RIO_CANOAS_24.setVisible(false);lyr_EXPANSAO_URBANA_LC_324_2019_25.setVisible(false);lyr_EXPANSAO_URBANA_LC_235_2013_26.setVisible(false);lyr_EXPANSAO_URBANA_LC_140_2009_27.setVisible(false);lyr_EXPANSAO_URBANA_LC_050_2003_28.setVisible(false);lyr_AREAS_DAS_BACIAS_DOS_RIOS_CANOAS_E_POUSO_ALEGRE_29.setVisible(false);lyr_AREA_ESPECIAL_RESIDENCIAIS_UNIFAMILIARES_30.setVisible(false);lyr_AREA_ESPECIAL_LAZER_INTERESSE_TURISTICO_E_CULTURA_31.setVisible(false);lyr_AREA_ESPECIAL_INDUSTRIAL_E_LOGISTICA_32.setVisible(false);lyr_AREA_ESPECIAL_DE_INTERESSE_SOCIAL_33.setVisible(false);lyr_ZONA_SUL_VIA_EXPRESSA_EXISTENTE_34.setVisible(false);lyr_ZONA_SUL_DIRETRIZ_VIA_PARQUE_35.setVisible(false);lyr_ZONA_SUL_DIRETRIZ_COLETORA_36.setVisible(false);lyr_ZONA_SUL_DIRETRIZ_AVENIDA_37.setVisible(false);lyr_ZONA_SUL_AVENIDA_EXISTENTE_38.setVisible(false);lyr_SISTEMA_VIARIO_PRINCIPAL_39.setVisible(false);lyr_RODOVIAS_VIAS_ARTERIAIS_40.setVisible(false);lyr_RODOVIAS_41.setVisible(false);lyr_FAIXA_DE_DOMINIO_DER_SPA_397334_42.setVisible(false);lyr_FAIXA_DE_DOMINIO_DER_SP_3452_43.setVisible(false);lyr_FAIXA_DE_DOMINIO_DER_SP_3342_44.setVisible(false);lyr_EXPANSAO_DO_SISTEMA_VIARIO_45.setVisible(false);lyr_VIGILANCIA_EM_SAUDE5UNID_46.setVisible(false);lyr_UNIDADE_DE_URGENCIA_E_EMERGENCIA8UNID_47.setVisible(false);lyr_SERVICO_DE_ESPECIALIDADES_DIAGNOSTICO14UNID_48.setVisible(false);lyr_GESTAO_ADMINISTRATIVO3UNID_49.setVisible(false);lyr_ATENCAO_PRIMARIA24UNID_50.setVisible(false);lyr_TEATRO2UNID_51.setVisible(false);lyr_SECRETARIA1UNID_52.setVisible(false);lyr_QUADRA3UNID_53.setVisible(false);lyr_PRACA2UNID_54.setVisible(false);lyr_PISTA1UNID_55.setVisible(false);lyr_PISCINA1UNID_56.setVisible(false);lyr_PINACOTECA1UNID_57.setVisible(false);lyr_PAVILHAO1UNID_58.setVisible(false);lyr_PARQUE2UNID_59.setVisible(false);lyr_MUSEU2UNID_60.setVisible(false);lyr_GINASIO5UNID_61.setVisible(false);lyr_ESTADIO1UNID_62.setVisible(false);lyr_CONJUNTO4UNID_63.setVisible(false);lyr_CEPEL12UNID_64.setVisible(false);lyr_CENTRO4UNID_65.setVisible(false);lyr_CASA1UNID_66.setVisible(false);lyr_CAMPO26UNID_67.setVisible(false);lyr_BIBLIOTECA1UNID_68.setVisible(false);lyr_ARENA3UNID_69.setVisible(false);lyr_UNIVERSIDADE_ABERTA_DO_BRASIL1UNID_70.setVisible(false);lyr_SETOR_DE_MERENDA1UNID_71.setVisible(false);lyr_SECRETARIA_DE_EDUCACAO1UNID_72.setVisible(false);lyr_ESPACO_DE_DIFUSAO_CIENTIFICA1UNID_73.setVisible(false);lyr_ENSINO_FUNDAMENTAL3UNID_74.setVisible(false);lyr_EJA3UNID_75.setVisible(false);lyr_ED_INFANTIL_ENS_FUNDAMENTAL39UNID_76.setVisible(false);lyr_EDUCACAO_INFANTIL9UNID_77.setVisible(false);lyr_CRECHE_PRE_ESCOLA45UNID_78.setVisible(false);lyr_CRECHE35UNID_79.setVisible(false);lyr_CENTRO_DE_EDUCACAO_INTEGRADA1UNID_80.setVisible(false);lyr_ALMOCHARIFADO_EDUCACAO1UNID_81.setVisible(false);lyr_ALFABETIZACAO_DE_JOVENS_E_ADULTOS15UNID_82.setVisible(false);lyr_RODOVIAS_MUNICIPAIS_83.setVisible(false);lyr_RODOVIAS_ESTADUAIS_84.setVisible(false);lyr_ESTRADAS_RURAIS_MUNICIPAIS_85.setVisible(false);lyr_IMOVEL_PUBLICO125UNID_86.setVisible(false);lyr_IMOVEL_PRIVADO_URBANO99UNID_87.setVisible(false);lyr_IMOVEL_PRIVADO_URBANO99UNID_88.setVisible(false);lyr_IMOVEL_PRIVADO_RURAL1UNID_89.setVisible(false);lyr_IMOVEL_PRIVADO_RURAL1UNID_90.setVisible(false);lyr_PARQUE_DOS_TRABALHADORES_91.setVisible(false);lyr_PARQUE_DOS_TRABALHADORES_92.setVisible(false);lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_93.setVisible(false);lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_94.setVisible(false);lyr_PARQUE_CAXAMBU_95.setVisible(false);lyr_PARQUE_CAXAMBU_96.setVisible(false);lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_97.setVisible(false);lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_98.setVisible(false);lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_99.setVisible(false);lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_100.setVisible(false);lyr_JARDIM_ZOOBOTANICO_101.setVisible(false);lyr_JARDIM_ZOOBOTANICO_102.setVisible(false);lyr_COMPLEXO_POLIESPORTIVO_103.setVisible(false);lyr_COMPLEXO_POLIESPORTIVO_104.setVisible(false);lyr_UBS_SANTA_TEREZINHA_105.setVisible(false);lyr_UBS_SANTA_BARBARA_106.setVisible(false);lyr_UBS_PERES_ELIAS_107.setVisible(false);lyr_UBS_PARQUE_HORTO_108.setVisible(false);lyr_UBS_JARDIM_PALMA_109.setVisible(false);lyr_REVITALIZACAO_ESTACAO_FERROVIARIA_110.setVisible(false);lyr_REFORMA_CRAS_OESTE_111.setVisible(false);lyr_REFORMA_CRAS_NORTE_112.setVisible(false);lyr_REFORCO_ESTRUTURAL_CHAMPAGNAT_113.setVisible(false);lyr_RECAPEAMENTO_JARDIM_MARTINS_114.setVisible(false);lyr_PRONTO_SOCORRO_ALVARO_AZZUZ_115.setVisible(false);lyr_POLICLINICA_116.setVisible(false);lyr_NOVO_NGA_117.setVisible(false);lyr_ESTABILIZACAO_TALUDE_JD_BRASILANDIA_118.setVisible(false);lyr_ESCOLA_JOAO_LIPORONI_119.setVisible(false);lyr_DRENAGEM_CORREGO_CUBATAO_120.setVisible(false);lyr_DRENAGEM_CORREGO_BRAGRES_121.setVisible(false);lyr_DRENAGEM_CANAL_JD_PALMEIRAS_122.setVisible(false);lyr_CRECHE_SAMEL_PARK_123.setVisible(false);lyr_CORPO_BAMBEIROS_124.setVisible(false);lyr_CONTENCAO_VIARIA_125.setVisible(false);lyr_CONSTRUCAO_CEPEL_SAO_JOSE_126.setVisible(false);lyr_CONSTRUCAO_CEPEL_JD_CAMBUI_127.setVisible(false);lyr_CONSTRUCAO_CAPS_INFANTIL_128.setVisible(false);lyr_AREA_LAZER_PARQUE_ESMERALDA_129.setVisible(false);lyr_AREA_LAZER_PARQUE_CONTINENTAL_130.setVisible(false);lyr_AREA_LAZER_JARDIM_PORTINARI_131.setVisible(false);lyr_OBRAS_PUBLICAS29UNID_132.setVisible(false);lyr_REGULARIZADO_133.setVisible(false);lyr_REGULARIZADO9UNID_134.setVisible(false);lyr_VIVENNA_135.setVisible(false);lyr_VITTA_SAO_VICENTE_136.setVisible(false);lyr_VITTA_JARDIM_SIMOES_137.setVisible(false);lyr_VITTA_ALVORADA_138.setVisible(false);lyr_VILLA_PUCCI_139.setVisible(false);lyr_VILLA_DORATTA_140.setVisible(false);lyr_VILLA_BELLA_141.setVisible(false);lyr_VILA_PIEMONTE_II_142.setVisible(false);lyr_VILA_OLIMPICA_143.setVisible(false);lyr_VILA_DI_ESPANHA_144.setVisible(false);lyr_VERSALHES_145.setVisible(false);lyr_TORONTO_RESIDENCE_146.setVisible(false);lyr_TERRA_NOVA_147.setVisible(false);lyr_SONETTO_148.setVisible(false);lyr_SMART_CITY_EIXO_RESIDENCIAL_II_149.setVisible(false);lyr_SMART_CITY_EIXO_RESIDENCIAL_I_150.setVisible(false);lyr_SMART_CITY_EIXO_EMPRESARIAL_151.setVisible(false);lyr_SERVIDAO_GUANABARA_152.setVisible(false);lyr_SANTA_LINA_153.setVisible(false);lyr_SANT_ANITA_154.setVisible(false);lyr_RUA_ALFIO_BENEDINI_155.setVisible(false);lyr_RESIDENCIAL_YASMIN_TORRES_156.setVisible(false);lyr_RESIDENCIAL_VALE_VERDE_157.setVisible(false);lyr_RESIDENCIAL_TELLINI_158.setVisible(false);lyr_RESIDENCIAL_SAO_CARLOS_II_159.setVisible(false);lyr_RESIDENCIAL_SAO_CARLOS_I_160.setVisible(false);lyr_RESIDENCIAL_SANTA_INES_161.setVisible(false);lyr_RESIDENCIAL_SANTA_FE_162.setVisible(false);lyr_RESIDENCIAL_QUINTA_DOS_OITIS_163.setVisible(false);lyr_RESIDENCIAL_QUINTA_DO_SOL_164.setVisible(false);lyr_RESIDENCIAL_POUSO_ALEGRE_II_165.setVisible(false);lyr_RESIDENCIAL_POUSO_ALEGRE_166.setVisible(false);lyr_RESIDENCIAL_PIAMALIM_167.setVisible(false);lyr_RESIDENCIAL_PARQUE_DOS_PASSAROS_168.setVisible(false);lyr_RESIDENCIAL_NAIR_RETUCI_II_169.setVisible(false);lyr_RESIDENCIAL_NAIR_RETUCI_170.setVisible(false);lyr_RESIDENCIAL_MORADA_DO_BOSQUE_171.setVisible(false);lyr_RESIDENCIAL_MARTHA_HELENA_172.setVisible(false);lyr_RESIDENCIAL_MARIO_TASSO_173.setVisible(false);lyr_RESIDENCIAL_MARIANA_ALARCON_174.setVisible(false);lyr_RESIDENCIAL_JARDIM_CANADA_175.setVisible(false);lyr_RESIDENCIAL_JABUTICABEIRAS_176.setVisible(false);lyr_RESIDENCIAL_IRINEU_ZANETTI_II_177.setVisible(false);lyr_RESIDENCIAL_GRAMADOS_II_178.setVisible(false);lyr_RESIDENCIAL_GRAMADOS_179.setVisible(false);lyr_RESIDENCIAL_GAIA_180.setVisible(false);lyr_RESIDENCIAL_FRUTUOSO_181.setVisible(false);lyr_RESIDENCIAL_FAGGIONI_182.setVisible(false);lyr_RESIDENCIAL_ESSENZA_183.setVisible(false);lyr_RESIDENCIAL_ESSENCE_184.setVisible(false);lyr_RESIDENCIAL_DOMINGOS_JARDINI_185.setVisible(false);lyr_RESIDENCIAL_CINTRA_ALVES_186.setVisible(false);lyr_RESIDENCIAL_CIDADE_JARDIM_187.setVisible(false);lyr_RESIDENCIAL_BOA_VISTA_188.setVisible(false);lyr_RESIDENCIAL_ANA_HELENA_189.setVisible(false);lyr_RESIDENCIAL_ALTO_DA_FAZENDA_190.setVisible(false);lyr_RESERVA_ABAETE_191.setVisible(false);lyr_RECANTO_MENEGHETTI_192.setVisible(false);lyr_QUADRA_18_VILA_EXPOSICAO_193.setVisible(false);lyr_PROLONGAMENTO_SAMEL_PARK_194.setVisible(false);lyr_PARQUE_VILLA_LOBOS_195.setVisible(false);lyr_PARQUE_PALMEIRA_IMPERIAL_196.setVisible(false);lyr_PARQUE_MORADA_DA_MATA_197.setVisible(false);lyr_PARQUE_JACARANDA_198.setVisible(false);lyr_PARQUE_FLORA_199.setVisible(false);lyr_PARQUE_DOS_SABIAS_200.setVisible(false);lyr_PARQUE_DOS_COQUEIROS_201.setVisible(false);lyr_PARQUE_ALVORADA_202.setVisible(false);lyr_PARAGON_FASE_II_203.setVisible(false);lyr_PARAGON_204.setVisible(false);lyr_PALMEIRA_REAL_205.setVisible(false);lyr_MORADA_DO_VERDE_II_206.setVisible(false);lyr_MONTIE_207.setVisible(false);lyr_MONT_BLANC_RESIDENCE_208.setVisible(false);lyr_MASTERPLAN_BILD_VITTA_209.setVisible(false);lyr_JARDIM_STEPHANI_210.setVisible(false);lyr_JARDIM_PHEROLA_211.setVisible(false);lyr_JARDIM_NATAL_212.setVisible(false);lyr_JARDIM_MARIA_LUIZA_213.setVisible(false);lyr_JARDIM_MARIA_AUGUSTA_214.setVisible(false);lyr_JARDIM_HORIZONTE_215.setVisible(false);lyr_JARDIM_FLORA_216.setVisible(false);lyr_JARDIM_COLORADO_217.setVisible(false);lyr_JARDIM_ARIZONA_218.setVisible(false);lyr_INFRATECNICA_219.setVisible(false);lyr_HORIZ_RESIDENCE_220.setVisible(false);lyr_GLEBA_NOSSA_SENHORA_AUXILIADORA_221.setVisible(false);lyr_FRANCA_B6_222.setVisible(false);lyr_FERRACINI_223.setVisible(false);lyr_FAZENDA_PROGRESSO_224.setVisible(false);lyr_FAZENDA_E_GRANJA_SANTA_RITA_II_225.setVisible(false);lyr_FAZENDA_E_GRANJA_SANTA_RITA_I_226.setVisible(false);lyr_ELIAS_227.setVisible(false);lyr_EDIFICIO_SOL_NASCENTE_228.setVisible(false);lyr_EDIFICIO_RUA_DO_SOL_229.setVisible(false);lyr_EDIFICIO_RESIDENCIAL_HOPE_230.setVisible(false);lyr_DIOCESE_DE_FRANCA_231.setVisible(false);lyr_DA_VINCI_232.setVisible(false);lyr_COMDOMINIO_II_CITY_PETROPOLIS_233.setVisible(false);lyr_COMDOMINIO_I_CITY_PETROPOLIS_234.setVisible(false);lyr_CHACARA_OLARIA_235.setVisible(false);lyr_CHACARA_BELA_VISTA_236.setVisible(false);lyr_BORDA_DA_MATA_237.setVisible(false);lyr_ARTERIS_238.setVisible(false);lyr_ALAMO_239.setVisible(false);lyr_ABU_DHABI_240.setVisible(false);lyr_SERVIDAO_GUANABARA_241.setVisible(false);lyr_RUA_ALFIO_BENEDINI_242.setVisible(false);lyr_QUADRA_18_VILA_EXPOSICAO_243.setVisible(false);lyr_ETAPA_PREVIA_244.setVisible(false);lyr_ETAPA_DIRETRIZ_245.setVisible(false);lyr_ETAPA_DEFINITIVA_246.setVisible(false);lyr_ETAPA_APROVADO_247.setVisible(false);lyr_ARTERIS_248.setVisible(false);lyr_IRREGULAR_249.setVisible(false);lyr_IRREGULAR174UNID_250.setVisible(false);lyr_FBDS_RIOS_DUPLOS_251.setVisible(false);lyr_FBDS_MASSAS_DAGUA_252.setVisible(false);lyr_FBDS_APP_253.setVisible(false);lyr_FBDS_NASCENTES_254.setVisible(false);lyr_FBDS_RIOS_SIMPLES_255.setVisible(false);lyr_CORPO_HIDRICO_CANAL_FECHADO088KM_256.setVisible(false);lyr_CORPO_HIDRICO_CANAL_ABERTO1252KM_257.setVisible(false);lyr_PARQUE_ZUMBI_DOS_PALMARES_258.setVisible(false);lyr_ATERRO_DAS_MARITACAS_259.setVisible(false);lyr_ATERRO_DAS_MARITACAS_ETAPA_3_260.setVisible(false);lyr_ATERRO_DAS_MARITACAS_ETAPA_2_261.setVisible(false);lyr_ATERRO_DAS_MARITACAS_ETAPA_1_262.setVisible(false);lyr_ATERRO_DA_FAZENDA_MUNICIPAL_263.setVisible(false);lyr_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_264.setVisible(false);lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_265.setVisible(false);lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_266.setVisible(false);lyr_AREA_B_DA_FAZENDA_MUNICIPAL_267.setVisible(false);lyr_AREA_B_DA_FAZENDA_MUNICIPAL_268.setVisible(false);lyr_PARTE_DA_AREA_G_AVERBADA_269.setVisible(false);lyr_PARTE_DA_AREA_G_A_SER_AVERBADA_270.setVisible(false);lyr_CONJUNTO_HABITACIONAL_271.setVisible(false);lyr_AV_ACESSO_COLEGIO_AGRICOLA_272.setVisible(false);lyr_AREA_N2_273.setVisible(false);lyr_AREA_N1_274.setVisible(false);lyr_AREA_N_275.setVisible(false);lyr_AREA_K_276.setVisible(false);lyr_AREA_J_277.setVisible(false);lyr_AREA_I_278.setVisible(false);lyr_AREA_H_279.setVisible(false);lyr_AREA_G_280.setVisible(false);lyr_AREA_F_281.setVisible(false);lyr_AREA_E_282.setVisible(false);lyr_AREA_D_283.setVisible(false);lyr_AREA_C_284.setVisible(false);lyr_AREA_B_285.setVisible(false);lyr_AREA_A_286.setVisible(false);lyr_PROPOSTO_287.setVisible(false);lyr_EM_FUNCIONAMENTO_288.setVisible(false);lyr_EM_CONSTRUCAO_289.setVisible(false);lyr_DrenagensExistentes_290.setVisible(false);lyr_DRENAGEM_VILLAGIO_DI_FIRENZE_291.setVisible(false);lyr_DRENAGEM_VILLA_SANTA_GIANNA_292.setVisible(false);lyr_DRENAGEM_VILA_TOTOLI_293.setVisible(false);lyr_DRENAGEM_VILA_REAL_294.setVisible(false);lyr_DRENAGEM_VILA_DORATTA_295.setVisible(false);lyr_DRENAGEM_SAO_PEDRO_II_296.setVisible(false);lyr_DRENAGEM_SANTA_FE_297.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_TELLINI_298.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_SANTA_INES_301.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_PALERMO_305.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_ITAPUA_306.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_GAIA_307.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_FERRACINI_308.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_FAGGIONI_309.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_ECOSTILO_310.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_DOURADO_311.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_BALDASSARI_312.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_313.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314.setVisible(false);lyr_DRENAGEM_RECREIO_CAMPO_BELO_315.setVisible(false);lyr_DRENAGEM_RECANTO_MENEGHETTI_316.setVisible(false);lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_317.setVisible(false);lyr_DRENAGEM_PROL_VILA_ISABEL_318.setVisible(false);lyr_DRENAGEM_PROL_JARDIM_MARTINS_319.setVisible(false);lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320.setVisible(false);lyr_DRENAGEM_PARQUE_UNIVERSITARIO_321.setVisible(false);lyr_DRENAGEM_PARQUE_SANTA_ADELIA_322.setVisible(false);lyr_DRENAGEM_PARQUE_MOEMA_323.setVisible(false);lyr_DRENAGEM_PARQUE_JOAO_LEITE_324.setVisible(false);lyr_DRENAGEM_PARQUE_DOS_SABIAS_325.setVisible(false);lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_326.setVisible(false);lyr_DRENAGEM_PARQUE_DAS_ARVORES_327.setVisible(false);lyr_DRENAGEM_PARQUE_CASTELO_328.setVisible(false);lyr_DRENAGEM_PARQUE_BOA_VISTA_329.setVisible(false);lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_330.setVisible(false);lyr_DRENAGEM_PARAGON_331.setVisible(false);lyr_DRENAGEM_NAIR_RETUSSI_I_332.setVisible(false);lyr_DRENAGEM_JARDIM_SAO_GABRIEL_333.setVisible(false);lyr_DRENAGEM_JARDIM_SANTA_LUCIA_334.setVisible(false);lyr_DRENAGEM_JARDIM_PULICANO_335.setVisible(false);lyr_DRENAGEM_JARDIM_PORTINARI_336.setVisible(false);lyr_DRENAGEM_JARDIM_PIRATININGA_337.setVisible(false);lyr_DRENAGEM_JARDIM_PALMA_338.setVisible(false);lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_339.setVisible(false);lyr_DRENAGEM_JARDIM_NOEMIA_340.setVisible(false);lyr_DRENAGEM_JARDIM_NATAL_341.setVisible(false);lyr_DRENAGEM_JARDIM_MARTINS_342.setVisible(false);lyr_DRENAGEM_JARDIM_MARIA_LUIZA_343.setVisible(false);lyr_DRENAGEM_JARDIM_LIBANO_344.setVisible(false);lyr_DRENAGEM_JARDIM_IPANEMA_345.setVisible(false);lyr_DRENAGEM_JARDIM_BUENO_346.setVisible(false);lyr_DRENAGEM_JARDIM_BOTANICO_347.setVisible(false);lyr_DRENAGEM_JARDIM_BARAO_348.setVisible(false);lyr_DRENAGEM_JARDIM_AVIACAO_349.setVisible(false);lyr_DRENAGEM_JARDIM_ARIZONA_II_350.setVisible(false);lyr_DRENAGEM_JARDIM_ARIZONA_I_351.setVisible(false);lyr_DRENAGEM_JARDIM_AEROPORTO_II_352.setVisible(false);lyr_DRENAGEM_GRAMADOS_I_353.setVisible(false);lyr_DRENAGEM_FRANCA_POLO_CLUBE_354.setVisible(false);lyr_DRENAGEM_DOMINGOS_JARDINI_355.setVisible(false);lyr_DRENAGEM_DINFRA_II_356.setVisible(false);lyr_DRENAGEM_ATLANTA_PARK_357.setVisible(false);lyr_DRENAGEM_ANA_DOROTHEA_358.setVisible(false);lyr_REGIAO_SUL_359.setVisible(false);lyr_REGIAO_OESTE_360.setVisible(false);lyr_REGIAO_NORTE_361.setVisible(false);lyr_REGIAO_LESTE_362.setVisible(false);lyr_BAIRROS_363.setVisible(false);lyr_VOCOROCAS27UNID_364.setVisible(false);lyr_LOCAIS_DE_DIFICIL_ACESSO12UNID_365.setVisible(false);lyr_CONTEINERES286UNID_366.setVisible(false);lyr_ARVORES_IMUNE_AO_CORTE9UNID_367.setVisible(false);lyr_ACADEMIAS_AO_AR_LIVRE84UNID_368.setVisible(false);lyr_SERVICO_DE_SAUDE21UNID_369.setVisible(false);lyr_RECICLAVEIS15UNID_370.setVisible(false);lyr_PNEUS1UNID_371.setVisible(false);lyr_PILHAS_E_BATERIAS17UNID_372.setVisible(false);lyr_PERIGOSOS1UNID_373.setVisible(false);lyr_OLEO_LUBRIFICANTE1UNID_374.setVisible(false);lyr_OLEO_DE_COZINHA3UNID_375.setVisible(false);lyr_MASSA_VERDE1UNID_376.setVisible(false);lyr_MADEIRAS1UNID_377.setVisible(false);lyr_LATAS_DE_TINTA2UNID_378.setVisible(false);lyr_LAMPADAS4UNID_379.setVisible(false);lyr_INSERVIVEIS4UNID_380.setVisible(false);lyr_GESSO1UNID_381.setVisible(false);lyr_EMBALAGENS_AGROTOXICO1UNID_382.setVisible(false);lyr_ELETRONICOS3UNID_383.setVisible(false);lyr_COURO1UNID_384.setVisible(false);lyr_CONSTRUCAO_CIVIL7UNID_385.setVisible(false);lyr_CHAPAS_DE_RAIO_X1UNID_386.setVisible(false);lyr_PROTECAO_AERODROMO_387.setVisible(false);lyr_HELIPONTO_HOSPITAL_REGIONAL_388.setVisible(false);lyr_HELIPONTO_EDIFICIO_PRIME_389.setVisible(false);lyr_HELIPONTO_EDIFICIO_PRIME_390.setVisible(false);lyr_CLASSE_VB_391.setVisible(false);lyr_CLASSE_VA_392.setVisible(false);lyr_CLASSE_IVC_393.setVisible(false);lyr_CLASSE_IVB_394.setVisible(false);lyr_CLASSE_IVA_395.setVisible(false);lyr_CLASSE_IIIC_396.setVisible(false);lyr_CLASSE_IIIB_397.setVisible(false);lyr_CLASSE_IIIA_398.setVisible(false);lyr_CLASSE_II_399.setVisible(false);lyr_CLASSE_I_400.setVisible(false);lyr_LOTEAMENTO_FECHADO146UNID70632440M_401.setVisible(false);lyr_LOTE_EMDEF10UNID218783M_402.setVisible(false);lyr_LOTE_EMDEF_403.setVisible(false);lyr_LOTE_COM_EDIFICACAO20UNID508062M_404.setVisible(false);lyr_LOTE_COM_EDIFICACAO_405.setVisible(false);lyr_LOTE252UNID7530210M_406.setVisible(false);lyr_LOTE_407.setVisible(false);lyr_LEILAO_PROCESSO_7954202537196UNID3239123M_408.setVisible(false);lyr_LEILAO_PROCESSO_7954202537_409.setVisible(false);lyr_LEILAO_PROCESSO_2652520256922UNID352000M_410.setVisible(false);lyr_LEILAO_PROCESSO_26525202569_411.setVisible(false);lyr_LEILAO_PROCESSO_2198620254518UNID2092083M_412.setVisible(false);lyr_LEILAO_PROCESSO_21986202545_413.setVisible(false);lyr_LEILAO_HOMOLOGADO4UNID334770M_414.setVisible(false);lyr_LEILAO_HOMOLOGADO_415.setVisible(false);lyr_AREA_VERDE2013UNID836044252M_416.setVisible(false);lyr_AREA_PATRIMONIAL69UNID121924073M_417.setVisible(false);lyr_AREA_INSTITUCIONAL354UNID202812033M_418.setVisible(false);lyr_AREA_DE_USO_ESPECIAL280UNID271349968M_419.setVisible(false);lyr_APP148UNID220260340M_420.setVisible(false);lyr_TRPRL_CETESB_421.setVisible(false);lyr_TRPRL_CETESB_422.setVisible(false);lyr_TCRA_MUNICIPAL_423.setVisible(false);lyr_TCRA_MUNICIPAL_424.setVisible(false);lyr_TCRA_CETESB_PARCELAMENTO_425.setVisible(false);lyr_TCRA_CETESB_PARCELAMENTO_426.setVisible(false);lyr_TCRA_CETESB_427.setVisible(false);lyr_TCRA_CETESB_428.setVisible(false);lyr_TAC_MP_429.setVisible(false);lyr_TAC_MP_430.setVisible(false);lyr_PLANTIO_VOLUNTARIO_431.setVisible(false);lyr_PLANTIO_VOLUNTARIO_432.setVisible(false);lyr_ANUENCIA_433.setVisible(false);lyr_ANUENCIA_434.setVisible(false);lyr_AIIPA_CETESB_435.setVisible(false);lyr_AIIPA_CETESB_436.setVisible(false);lyr_ACAO_CIVIL_PUBLICA_437.setVisible(false);lyr_ACAO_CIVIL_PUBLICA_438.setVisible(false);lyr_PROG_ADOTE_UMA_PRACA_439.setVisible(false);lyr_RESPONSAVEL_EGNALDO211UNID20447664M_440.setVisible(false);lyr_RESPONSAVEL_DILU164UNID16715010M_441.setVisible(false);
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
lyr_VIVENNA_135.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_VITTA_SAO_VICENTE_136.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_VITTA_JARDIM_SIMOES_137.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_VITTA_ALVORADA_138.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_VILLA_PUCCI_139.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_VILLA_DORATTA_140.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_VILLA_BELLA_141.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_VILA_PIEMONTE_II_142.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_VILA_OLIMPICA_143.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_VILA_DI_ESPANHA_144.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_VERSALHES_145.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_TORONTO_RESIDENCE_146.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_TERRA_NOVA_147.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_SONETTO_148.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_SMART_CITY_EIXO_RESIDENCIAL_II_149.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_SMART_CITY_EIXO_RESIDENCIAL_I_150.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_SMART_CITY_EIXO_EMPRESARIAL_151.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_SERVIDAO_GUANABARA_152.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'DESCRICAO': 'DESCRICAO', });
lyr_SANTA_LINA_153.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_SANT_ANITA_154.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RUA_ALFIO_BENEDINI_155.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'DESCRICAO': 'DESCRICAO', });
lyr_RESIDENCIAL_YASMIN_TORRES_156.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_VALE_VERDE_157.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_TELLINI_158.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_SAO_CARLOS_II_159.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_SAO_CARLOS_I_160.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_SANTA_INES_161.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_SANTA_FE_162.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_QUINTA_DOS_OITIS_163.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_QUINTA_DO_SOL_164.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_POUSO_ALEGRE_II_165.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_POUSO_ALEGRE_166.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_PIAMALIM_167.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_PARQUE_DOS_PASSAROS_168.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_NAIR_RETUCI_II_169.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_NAIR_RETUCI_170.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_MORADA_DO_BOSQUE_171.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_MARTHA_HELENA_172.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_MARIO_TASSO_173.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_MARIANA_ALARCON_174.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_JARDIM_CANADA_175.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_JABUTICABEIRAS_176.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_IRINEU_ZANETTI_II_177.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_GRAMADOS_II_178.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_GRAMADOS_179.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_GAIA_180.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_FRUTUOSO_181.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_FAGGIONI_182.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_ESSENZA_183.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_ESSENCE_184.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_DOMINGOS_JARDINI_185.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_CINTRA_ALVES_186.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_CIDADE_JARDIM_187.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_BOA_VISTA_188.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_ANA_HELENA_189.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESIDENCIAL_ALTO_DA_FAZENDA_190.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RESERVA_ABAETE_191.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_RECANTO_MENEGHETTI_192.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_QUADRA_18_VILA_EXPOSICAO_193.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_PROLONGAMENTO_SAMEL_PARK_194.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_PARQUE_VILLA_LOBOS_195.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_PARQUE_PALMEIRA_IMPERIAL_196.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_PARQUE_MORADA_DA_MATA_197.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_PARQUE_JACARANDA_198.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_PARQUE_FLORA_199.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_PARQUE_DOS_SABIAS_200.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_PARQUE_DOS_COQUEIROS_201.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_PARQUE_ALVORADA_202.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_PARAGON_FASE_II_203.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_PARAGON_204.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_PALMEIRA_REAL_205.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_MORADA_DO_VERDE_II_206.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_MONTIE_207.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_MONT_BLANC_RESIDENCE_208.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_MASTERPLAN_BILD_VITTA_209.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_JARDIM_STEPHANI_210.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_JARDIM_PHEROLA_211.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_JARDIM_NATAL_212.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_JARDIM_MARIA_LUIZA_213.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_JARDIM_MARIA_AUGUSTA_214.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_JARDIM_HORIZONTE_215.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_JARDIM_FLORA_216.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_JARDIM_COLORADO_217.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_JARDIM_ARIZONA_218.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_INFRATECNICA_219.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_HORIZ_RESIDENCE_220.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_GLEBA_NOSSA_SENHORA_AUXILIADORA_221.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_FRANCA_B6_222.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_FERRACINI_223.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_FAZENDA_PROGRESSO_224.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_FAZENDA_E_GRANJA_SANTA_RITA_II_225.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_FAZENDA_E_GRANJA_SANTA_RITA_I_226.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_ELIAS_227.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_EDIFICIO_SOL_NASCENTE_228.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_EDIFICIO_RUA_DO_SOL_229.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_EDIFICIO_RESIDENCIAL_HOPE_230.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_DIOCESE_DE_FRANCA_231.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_DA_VINCI_232.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_COMDOMINIO_II_CITY_PETROPOLIS_233.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_COMDOMINIO_I_CITY_PETROPOLIS_234.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_CHACARA_OLARIA_235.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_CHACARA_BELA_VISTA_236.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_BORDA_DA_MATA_237.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_ARTERIS_238.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_ALAMO_239.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_ABU_DHABI_240.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'AREA_M2': 'AREA_M2', 'AREA_%': 'AREA_%', });
lyr_SERVIDAO_GUANABARA_241.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ETAPA': 'ETAPA', 'DECRETO': 'DECRETO', 'TIPOLOGIA': 'TIPOLOGIA', 'MATRICULA': 'MATRICULA', 'PROCESSO': 'PROCESSO', 'PROPRIETARIOS': 'PROPRIETARIOS', 'NOME_DO_EMPREENDIMENTO': 'NOME_DO_EMPREENDIMENTO', 'ZONEAMENTO': 'ZONEAMENTO', 'AREA_VERDE_M2': 'AREA_VERDE_M2', 'AREA_INSTITUCIONAL_M2': 'AREA_INSTITUCIONAL_M2', 'AREA_LAZER_M2': 'AREA_LAZER_M2', 'LOTES_M2': 'LOTES_M2', 'UNIDADES_LOTES': 'UNIDADES_LOTES', 'UNIDADES_LOTES_MISTOS': 'UNIDADES_LOTES_MISTOS', 'UNIDADES_LOTES_RESIDENCIAIS': 'UNIDADES_LOTES_RESIDENCIAIS', 'UNIDADES_LOTES_COMERCIAIS': 'UNIDADES_LOTES_COMERCIAIS', });
lyr_RUA_ALFIO_BENEDINI_242.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ETAPA': 'ETAPA', 'DECRETO': 'DECRETO', 'TIPOLOGIA': 'TIPOLOGIA', 'MATRICULA': 'MATRICULA', 'PROCESSO': 'PROCESSO', 'PROPRIETARIOS': 'PROPRIETARIOS', 'NOME_DO_EMPREENDIMENTO': 'NOME_DO_EMPREENDIMENTO', 'ZONEAMENTO': 'ZONEAMENTO', 'AREA_VERDE_M2': 'AREA_VERDE_M2', 'AREA_INSTITUCIONAL_M2': 'AREA_INSTITUCIONAL_M2', 'AREA_LAZER_M2': 'AREA_LAZER_M2', 'LOTES_M2': 'LOTES_M2', 'UNIDADES_LOTES': 'UNIDADES_LOTES', 'UNIDADES_LOTES_MISTOS': 'UNIDADES_LOTES_MISTOS', 'UNIDADES_LOTES_RESIDENCIAIS': 'UNIDADES_LOTES_RESIDENCIAIS', 'UNIDADES_LOTES_COMERCIAIS': 'UNIDADES_LOTES_COMERCIAIS', });
lyr_QUADRA_18_VILA_EXPOSICAO_243.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ETAPA': 'ETAPA', 'DECRETO': 'DECRETO', 'TIPOLOGIA': 'TIPOLOGIA', 'MATRICULA': 'MATRICULA', 'PROCESSO': 'PROCESSO', 'PROPRIETARIOS': 'PROPRIETARIOS', 'NOME_DO_EMPREENDIMENTO': 'NOME_DO_EMPREENDIMENTO', 'ZONEAMENTO': 'ZONEAMENTO', 'AREA_VERDE_M2': 'AREA_VERDE_M2', 'AREA_INSTITUCIONAL_M2': 'AREA_INSTITUCIONAL_M2', 'AREA_LAZER_M2': 'AREA_LAZER_M2', 'LOTES_M2': 'LOTES_M2', 'UNIDADES_LOTES': 'UNIDADES_LOTES', 'UNIDADES_LOTES_MISTOS': 'UNIDADES_LOTES_MISTOS', 'UNIDADES_LOTES_RESIDENCIAIS': 'UNIDADES_LOTES_RESIDENCIAIS', 'UNIDADES_LOTES_COMERCIAIS': 'UNIDADES_LOTES_COMERCIAIS', });
lyr_ETAPA_PREVIA_244.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'ETAPA': 'Etapa', 'DECRETO': 'Decreto', 'TIPOLOGIA': 'Tipologia', 'MATRICULA': 'Matrícula', 'PROCESSO': 'Processo', 'PROPRIETARIOS': 'Proprietarios', 'NOME_DO_EMPREENDIMENTO': 'NOME_DO_EMPREENDIMENTO', 'ZONEAMENTO': 'Zoneamento', 'AREA_VERDE_M2': 'Área Verde (m²)', 'AREA_INSTITUCIONAL_M2': 'Área Institucional (m²)', 'AREA_LAZER_M2': 'Área Lazer (m²)', 'LOTES_M2': 'Lotes (m²)', 'UNIDADES_LOTES': 'Lotes (unid)', 'UNIDADES_LOTES_MISTOS': 'UNIDADES_LOTES_MISTOS', 'UNIDADES_LOTES_RESIDENCIAIS': 'Lotes Residenciais (unid)', 'UNIDADES_LOTES_COMERCIAIS': 'UNIDADES_LOTES_COMERCIAIS', });
lyr_ETAPA_DIRETRIZ_245.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'ETAPA': 'Etapa', 'DECRETO': 'Decreto', 'TIPOLOGIA': 'Tipologia', 'MATRICULA': 'Matrícula', 'PROCESSO': 'Processo', 'PROPRIETARIOS': 'Proprietarios', 'NOME_DO_EMPREENDIMENTO': 'NOME_DO_EMPREENDIMENTO', 'ZONEAMENTO': 'Zoneamento', 'AREA_VERDE_M2': 'Área Verde (m²)', 'AREA_INSTITUCIONAL_M2': 'Área Institucional (m²)', 'AREA_LAZER_M2': 'Área Lazer (m²)', 'LOTES_M2': 'Lotes (m²)', 'UNIDADES_LOTES': 'Lotes (unid)', 'UNIDADES_LOTES_MISTOS': 'UNIDADES_LOTES_MISTOS', 'UNIDADES_LOTES_RESIDENCIAIS': 'Lotes Residenciais (unid)', 'UNIDADES_LOTES_COMERCIAIS': 'UNIDADES_LOTES_COMERCIAIS', });
lyr_ETAPA_DEFINITIVA_246.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'ETAPA': 'Etapa', 'DECRETO': 'Decreto', 'TIPOLOGIA': 'Tipologia', 'MATRICULA': 'Matrícula', 'PROCESSO': 'Processo', 'PROPRIETARIOS': 'Proprietarios', 'NOME_DO_EMPREENDIMENTO': 'NOME_DO_EMPREENDIMENTO', 'ZONEAMENTO': 'Zoneamento', 'AREA_VERDE_M2': 'Área Verde (m²)', 'AREA_INSTITUCIONAL_M2': 'Área Institucional (m²)', 'AREA_LAZER_M2': 'Área Lazer (m²)', 'LOTES_M2': 'Lotes (m²)', 'UNIDADES_LOTES': 'Lotes (unid)', 'UNIDADES_LOTES_MISTOS': 'UNIDADES_LOTES_MISTOS', 'UNIDADES_LOTES_RESIDENCIAIS': 'Lotes Residenciais (unid)', 'UNIDADES_LOTES_COMERCIAIS': 'UNIDADES_LOTES_COMERCIAIS', });
lyr_ETAPA_APROVADO_247.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'ETAPA': 'Etapa', 'DECRETO': 'Decreto', 'TIPOLOGIA': 'Tipologia', 'MATRICULA': 'Matrícula', 'PROCESSO': 'Processo', 'PROPRIETARIOS': 'Proprietarios', 'NOME_DO_EMPREENDIMENTO': 'NOME_DO_EMPREENDIMENTO', 'ZONEAMENTO': 'Zoneamento', 'AREA_VERDE_M2': 'Área Verde (m²)', 'AREA_INSTITUCIONAL_M2': 'Área Institucional (m²)', 'AREA_LAZER_M2': 'Área Lazer (m²)', 'LOTES_M2': 'Lotes (m²)', 'UNIDADES_LOTES': 'Lotes (unid)', 'UNIDADES_LOTES_MISTOS': 'UNIDADES_LOTES_MISTOS', 'UNIDADES_LOTES_RESIDENCIAIS': 'Lotes Residenciais (unid)', 'UNIDADES_LOTES_COMERCIAIS': 'UNIDADES_LOTES_COMERCIAIS', });
lyr_ARTERIS_248.set('fieldAliases', {'fid': 'fid', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'ETAPA': 'ETAPA', 'DECRETO': 'DECRETO', 'TIPOLOGIA': 'TIPOLOGIA', 'MATRICULA': 'MATRICULA', 'PROCESSO': 'PROCESSO', 'PROPRIETARIOS': 'PROPRIETARIOS', 'NOME_DO_EMPREENDIMENTO': 'NOME_DO_EMPREENDIMENTO', 'ZONEAMENTO': 'ZONEAMENTO', 'AREA_VERDE_M2': 'AREA_VERDE_M2', 'AREA_INSTITUCIONAL_M2': 'AREA_INSTITUCIONAL_M2', 'AREA_LAZER_M2': 'AREA_LAZER_M2', 'LOTES_M2': 'LOTES_M2', 'UNIDADES_LOTES': 'UNIDADES_LOTES', 'UNIDADES_LOTES_MISTOS': 'UNIDADES_LOTES_MISTOS', 'UNIDADES_LOTES_RESIDENCIAIS': 'UNIDADES_LOTES_RESIDENCIAIS', 'UNIDADES_LOTES_COMERCIAIS': 'UNIDADES_LOTES_COMERCIAIS', });
lyr_IRREGULAR_249.set('fieldAliases', {'fid': 'fid', 'PROCESSO': 'PROCESSO', 'MODALIDADE': 'MODALIDADE', 'NOME_LOTEAMENTO': 'NOME_LOTEAMENTO', 'OBSERVACAO': 'OBSERVACAO', 'MATRICULA': 'MATRICULA', 'QUANT_LOTES': 'QUANT_LOTES', 'AREA_M2': 'AREA_M2', 'DECRETO_REURB': 'DECRETO_REURB', 'SITUACAO': 'SITUACAO', });
lyr_IRREGULAR174UNID_250.set('fieldAliases', {'fid': 'fid', 'PROCESSO': 'PROCESSO', 'MODALIDADE': 'MODALIDADE', 'NOME_LOTEAMENTO': 'NOME_LOTEAMENTO', 'OBSERVACAO': 'OBSERVACAO', 'MATRICULA': 'MATRICULA', 'QUANT_LOTES': 'QUANT_LOTES', 'AREA_M2': 'AREA_M2', 'DECRETO_REURB': 'DECRETO_REURB', 'SITUACAO': 'SITUACAO', });
lyr_FBDS_RIOS_DUPLOS_251.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_FBDS_MASSAS_DAGUA_252.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_FBDS_APP_253.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_FBDS_NASCENTES_254.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_FBDS_RIOS_SIMPLES_255.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_CORPO_HIDRICO_CANAL_FECHADO088KM_256.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'HIDRO', 'COMP_KM': 'COMP_KM', });
lyr_CORPO_HIDRICO_CANAL_ABERTO1252KM_257.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'HIDRO', 'COMP_KM': 'COMP_KM', });
lyr_PARQUE_ZUMBI_DOS_PALMARES_258.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'AREA_M2': 'AREA_M2', });
lyr_ATERRO_DAS_MARITACAS_259.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'AREA_M2': 'AREA_M2', });
lyr_ATERRO_DAS_MARITACAS_ETAPA_3_260.set('fieldAliases', {'fid': 'fid', 'ID_POCO': 'ID_POCO', 'TIPO_POCO': 'TIPO_POCO', 'SITUACAO': 'SITUACAO', 'EMPRESA': 'EMPRESA', 'ANO': 'ANO', 'LOCAL': 'LOCAL', });
lyr_ATERRO_DAS_MARITACAS_ETAPA_2_261.set('fieldAliases', {'fid': 'fid', 'ID_POCO': 'ID_POCO', 'TIPO_POCO': 'TIPO_POCO', 'SITUACAO': 'SITUACAO', 'EMPRESA': 'EMPRESA', 'ANO': 'ANO', 'LOCAL': 'LOCAL', });
lyr_ATERRO_DAS_MARITACAS_ETAPA_1_262.set('fieldAliases', {'fid': 'fid', 'ID_POCO': 'ID_POCO', 'TIPO_POCO': 'TIPO_POCO', 'SITUACAO': 'SITUACAO', 'EMPRESA': 'EMPRESA', 'ANO': 'ANO', 'LOCAL': 'LOCAL', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_263.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'AREA_M2': 'AREA_M2', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_264.set('fieldAliases', {'fid': 'fid', 'ID_POCO': 'ID_POCO', 'TIPO_POCO': 'Tipo do poço', 'SITUACAO': 'SITUACAO', 'EMPRESA': 'EMPRESA', 'ANO': 'ANO', 'LOCAL': 'LOCAL', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_265.set('fieldAliases', {'fid': 'fid', 'ID_POCO': 'ID_POCO', 'TIPO_POCO': 'Tipo do poço', 'SITUACAO': 'SITUACAO', 'EMPRESA': 'EMPRESA', 'ANO': 'ANO', 'LOCAL': 'LOCAL', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_266.set('fieldAliases', {'fid': 'fid', 'ID_POCO': 'ID_POCO', 'TIPO_POCO': 'Tipo do poço', 'SITUACAO': 'SITUACAO', 'EMPRESA': 'EMPRESA', 'ANO': 'ANO', 'LOCAL': 'LOCAL', });
lyr_AREA_B_DA_FAZENDA_MUNICIPAL_267.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'AREA_M2': 'AREA_M2', });
lyr_AREA_B_DA_FAZENDA_MUNICIPAL_268.set('fieldAliases', {'fid': 'fid', 'ID_POCO': 'ID_POCO', 'TIPO_POCO': 'TIPO_POCO', 'SITUACAO': 'SITUACAO', 'EMPRESA': 'EMPRESA', 'ANO': 'ANO', 'LOCAL': 'LOCAL', });
lyr_PARTE_DA_AREA_G_AVERBADA_269.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_PARTE_DA_AREA_G_A_SER_AVERBADA_270.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_CONJUNTO_HABITACIONAL_271.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AV_ACESSO_COLEGIO_AGRICOLA_272.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_N2_273.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_N1_274.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_N_275.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_K_276.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_J_277.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_I_278.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_H_279.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_G_280.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_F_281.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_E_282.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_D_283.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_C_284.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_B_285.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_AREA_A_286.set('fieldAliases', {'fid': 'fid', 'GLEBA': 'GLEBA', 'MATRICULA': 'MATRICULA', 'AREA_M2': 'AREA_M2', });
lyr_PROPOSTO_287.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'BAIRRO': 'BAIRRO', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', 'STATUS': 'STATUS', });
lyr_EM_FUNCIONAMENTO_288.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'BAIRRO': 'BAIRRO', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', 'STATUS': 'STATUS', });
lyr_EM_CONSTRUCAO_289.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'BAIRRO': 'BAIRRO', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', 'STATUS': 'STATUS', });
lyr_DrenagensExistentes_290.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DRENAGEM_VILLAGIO_DI_FIRENZE_291.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_VILLA_SANTA_GIANNA_292.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_VILA_TOTOLI_293.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_VILA_REAL_294.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_VILA_DORATTA_295.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_SAO_PEDRO_II_296.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_SANTA_FE_297.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_TELLINI_298.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_SANTA_INES_301.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_PALERMO_305.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_ITAPUA_306.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_GAIA_307.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_FERRACINI_308.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_FAGGIONI_309.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_ECOSTILO_310.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_DOURADO_311.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_BALDASSARI_312.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_313.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RECREIO_CAMPO_BELO_315.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RECANTO_MENEGHETTI_316.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_317.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PROL_VILA_ISABEL_318.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PROL_JARDIM_MARTINS_319.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_UNIVERSITARIO_321.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_SANTA_ADELIA_322.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_MOEMA_323.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_JOAO_LEITE_324.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_DOS_SABIAS_325.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_326.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_DAS_ARVORES_327.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_CASTELO_328.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_BOA_VISTA_329.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_330.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARAGON_331.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_NAIR_RETUSSI_I_332.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_SAO_GABRIEL_333.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_SANTA_LUCIA_334.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_PULICANO_335.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_PORTINARI_336.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_PIRATININGA_337.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_PALMA_338.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_339.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_NOEMIA_340.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_NATAL_341.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_MARTINS_342.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_MARIA_LUIZA_343.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_LIBANO_344.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_IPANEMA_345.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_BUENO_346.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_BOTANICO_347.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_BARAO_348.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_AVIACAO_349.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_ARIZONA_II_350.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_ARIZONA_I_351.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_AEROPORTO_II_352.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_GRAMADOS_I_353.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_FRANCA_POLO_CLUBE_354.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_DOMINGOS_JARDINI_355.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_DINFRA_II_356.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_ATLANTA_PARK_357.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_ANA_DOROTHEA_358.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_REGIAO_SUL_359.set('fieldAliases', {'fid': 'fid', 'AREA_M2': 'AREA_M2', 'REGIAO': 'REGIAO', });
lyr_REGIAO_OESTE_360.set('fieldAliases', {'fid': 'fid', 'AREA_M2': 'AREA_M2', 'REGIAO': 'REGIAO', });
lyr_REGIAO_NORTE_361.set('fieldAliases', {'fid': 'fid', 'AREA_M2': 'AREA_M2', 'REGIAO': 'REGIAO', });
lyr_REGIAO_LESTE_362.set('fieldAliases', {'fid': 'fid', 'AREA_M2': 'AREA_M2', 'REGIAO': 'REGIAO', });
lyr_BAIRROS_363.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'AREA_M2': 'Área (m²)', 'REGIAO': 'Região', 'REGIAO_ARRASTAO_LIMPEZA': 'REGIAO_ARRASTAO_LIMPEZA', });
lyr_VOCOROCAS27UNID_364.set('fieldAliases', {'fid': 'fid', 'SITUACAO': 'Situação', 'REFERENCIA': 'Referência', 'PRIORIDADE': 'Prioridade', 'OBSERVACAO': 'Observação', });
lyr_LOCAIS_DE_DIFICIL_ACESSO12UNID_365.set('fieldAliases', {'fid': 'fid', 'LOCAL': 'LOCAL', });
lyr_CONTEINERES286UNID_366.set('fieldAliases', {'fid': 'fid', 'DESCRICAO': 'Nome', 'BAIRRO': 'BAIRRO', });
lyr_ARVORES_IMUNE_AO_CORTE9UNID_367.set('fieldAliases', {'fid': 'fid', 'NOME_POPULAR': 'Nome Popular', 'NOME_CIENTIFICO': 'Nome Científico', 'LEGISLACAO': 'Legislação', });
lyr_ACADEMIAS_AO_AR_LIVRE84UNID_368.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'LOCAL': 'LOCAL', 'BAIRRO': 'BAIRRO', });
lyr_SERVICO_DE_SAUDE21UNID_369.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_RECICLAVEIS15UNID_370.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_PNEUS1UNID_371.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_PILHAS_E_BATERIAS17UNID_372.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_PERIGOSOS1UNID_373.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_OLEO_LUBRIFICANTE1UNID_374.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_OLEO_DE_COZINHA3UNID_375.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_MASSA_VERDE1UNID_376.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_MADEIRAS1UNID_377.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_LATAS_DE_TINTA2UNID_378.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_LAMPADAS4UNID_379.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_INSERVIVEIS4UNID_380.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_GESSO1UNID_381.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_EMBALAGENS_AGROTOXICO1UNID_382.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_ELETRONICOS3UNID_383.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_COURO1UNID_384.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_CONSTRUCAO_CIVIL7UNID_385.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_CHAPAS_DE_RAIO_X1UNID_386.set('fieldAliases', {'fid': 'fid', 'CATEGORIA': 'CATEGORIA', 'LOCAL': 'LOCAL', 'DESCRICAO': 'DESCRICAO', 'ENDERECO': 'ENDERECO', 'CONTATO': 'CONTATO', });
lyr_PROTECAO_AERODROMO_387.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', });
lyr_HELIPONTO_HOSPITAL_REGIONAL_388.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', });
lyr_HELIPONTO_EDIFICIO_PRIME_389.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', });
lyr_HELIPONTO_EDIFICIO_PRIME_390.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', });
lyr_CLASSE_VB_391.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_VA_392.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IVC_393.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IVB_394.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IVA_395.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IIIC_396.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IIIB_397.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IIIA_398.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_II_399.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_I_400.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_LOTEAMENTO_FECHADO146UNID70632440M_401.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_LOTE_EMDEF10UNID218783M_402.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_LOTE_EMDEF_403.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'DESCRICAO': 'DESCRICAO', 'DATA_INCLUSAO': 'DATA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', 'SUBCLASSE': 'SUBCLASSE', });
lyr_LOTE_COM_EDIFICACAO20UNID508062M_404.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_LOTE_COM_EDIFICACAO_405.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'DESCRICAO': 'DESCRICAO', 'DATA_INCLUSAO': 'DATA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', 'SUBCLASSE': 'SUBCLASSE', });
lyr_LOTE252UNID7530210M_406.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_LOTE_407.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'DESCRICAO': 'DESCRICAO', 'DATA_INCLUSAO': 'DATA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', 'SUBCLASSE': 'SUBCLASSE', });
lyr_LEILAO_PROCESSO_7954202537196UNID3239123M_408.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_LEILAO_PROCESSO_7954202537_409.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'DESCRICAO': 'DESCRICAO', 'DATA_INCLUSAO': 'DATA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', 'SUBCLASSE': 'SUBCLASSE', });
lyr_LEILAO_PROCESSO_2652520256922UNID352000M_410.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_LEILAO_PROCESSO_26525202569_411.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'DESCRICAO': 'DESCRICAO', 'DATA_INCLUSAO': 'DATA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', 'SUBCLASSE': 'SUBCLASSE', });
lyr_LEILAO_PROCESSO_2198620254518UNID2092083M_412.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_LEILAO_PROCESSO_21986202545_413.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'DESCRICAO': 'DESCRICAO', 'DATA_INCLUSAO': 'DATA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', 'SUBCLASSE': 'SUBCLASSE', });
lyr_LEILAO_HOMOLOGADO4UNID334770M_414.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_LEILAO_HOMOLOGADO_415.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'DESCRICAO': 'DESCRICAO', 'DATA_INCLUSAO': 'DATA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', 'SUBCLASSE': 'SUBCLASSE', });
lyr_AREA_VERDE2013UNID836044252M_416.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_AREA_PATRIMONIAL69UNID121924073M_417.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_AREA_INSTITUCIONAL354UNID202812033M_418.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_AREA_DE_USO_ESPECIAL280UNID271349968M_419.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DATA_INCLUSAO': 'DATA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_APP148UNID220260340M_420.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', 'BAIRRO': 'BAIRRO', 'CADASTRO_IMOBILIARIO': 'CADASTRO_IMOBILIARIO', 'SUBCLASSE': 'SUBCLASSE', 'DESCRICAO': 'DESCRICAO', 'AREA_M2': 'AREA_M2', 'DADA_INCLUSAO': 'DADA_INCLUSAO', 'STATUS': 'STATUS', 'PROCESSO': 'PROCESSO', });
lyr_TRPRL_CETESB_421.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TRPRL_CETESB_422.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TCRA_MUNICIPAL_423.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TCRA_MUNICIPAL_424.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TCRA_CETESB_PARCELAMENTO_425.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TCRA_CETESB_PARCELAMENTO_426.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TCRA_CETESB_427.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TCRA_CETESB_428.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TAC_MP_429.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_TAC_MP_430.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_PLANTIO_VOLUNTARIO_431.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_PLANTIO_VOLUNTARIO_432.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_ANUENCIA_433.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_ANUENCIA_434.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_AIIPA_CETESB_435.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_AIIPA_CETESB_436.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_ACAO_CIVIL_PUBLICA_437.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_ACAO_CIVIL_PUBLICA_438.set('fieldAliases', {'fid': 'fid', 'COMPROMISSO': 'COMPROMISSO', 'AREA_M2': 'AREA_M2', 'QUANTIDADE': 'QUANTIDADE', 'PROCESSO_MUNICIPAL': 'PROCESSO_MUNICIPAL', 'DOCUMENTO': 'DOCUMENTO', 'IC': 'IC', 'PROCESSO_CETESB': 'PROCESSO_CETESB', 'SITUACAO': 'SITUACAO', 'AUTORIZACAO': 'AUTORIZACAO', 'MATRICULA': 'MATRICULA', 'DESCRICAO': 'DESCRICAO', });
lyr_PROG_ADOTE_UMA_PRACA_439.set('fieldAliases', {'fid': 'fid', 'ADOTANTE': 'ADOTANTE', 'LOCAL': 'LOCAL', 'POSSUI_PLACA': 'POSSUI_PLACA', 'DATA_CONTRATO': 'DATA_CONTRATO', 'BAIRRO': 'BAIRRO', 'AREA_M2': 'AREA_M2', 'RESPONSAVEL': 'RESPONSAVEL', });
lyr_RESPONSAVEL_EGNALDO211UNID20447664M_440.set('fieldAliases', {'fid': 'fid', 'ADOTANTE': 'ADOTANTE', 'LOCAL': 'LOCAL', 'POSSUI_PLACA': 'POSSUI_PLACA', 'AREA_M2': 'AREA_M2', 'RESPONSAVEL': 'RESPONSAVEL', 'DATA_CONTRATO': 'DATA_CONTRATO', 'BAIRRO': 'BAIRRO', });
lyr_RESPONSAVEL_DILU164UNID16715010M_441.set('fieldAliases', {'fid': 'fid', 'ADOTANTE': 'ADOTANTE', 'LOCAL': 'LOCAL', 'POSSUI_PLACA': 'POSSUI_PLACA', 'AREA_M2': 'AREA_M2', 'RESPONSAVEL': 'RESPONSAVEL', 'DATA_CONTRATO': 'DATA_CONTRATO', 'BAIRRO': 'BAIRRO', });
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
lyr_VIVENNA_135.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_VITTA_SAO_VICENTE_136.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_VITTA_JARDIM_SIMOES_137.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_VITTA_ALVORADA_138.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_VILLA_PUCCI_139.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_VILLA_DORATTA_140.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_VILLA_BELLA_141.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_VILA_PIEMONTE_II_142.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_VILA_OLIMPICA_143.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_VILA_DI_ESPANHA_144.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_VERSALHES_145.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_TORONTO_RESIDENCE_146.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_TERRA_NOVA_147.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_SONETTO_148.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_SMART_CITY_EIXO_RESIDENCIAL_II_149.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_SMART_CITY_EIXO_RESIDENCIAL_I_150.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_SMART_CITY_EIXO_EMPRESARIAL_151.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_SERVIDAO_GUANABARA_152.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO': 'TextEdit', });
lyr_SANTA_LINA_153.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_SANT_ANITA_154.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RUA_ALFIO_BENEDINI_155.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO': 'TextEdit', });
lyr_RESIDENCIAL_YASMIN_TORRES_156.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_VALE_VERDE_157.set('fieldImages', {'fid': '', 'CLASSE': '', 'AREA_M2': '', 'AREA_%': '', });
lyr_RESIDENCIAL_TELLINI_158.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_SAO_CARLOS_II_159.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_SAO_CARLOS_I_160.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_SANTA_INES_161.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_SANTA_FE_162.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_QUINTA_DOS_OITIS_163.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_QUINTA_DO_SOL_164.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_POUSO_ALEGRE_II_165.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_POUSO_ALEGRE_166.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_PIAMALIM_167.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_PARQUE_DOS_PASSAROS_168.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_NAIR_RETUCI_II_169.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_NAIR_RETUCI_170.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_MORADA_DO_BOSQUE_171.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_MARTHA_HELENA_172.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_MARIO_TASSO_173.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_MARIANA_ALARCON_174.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_JARDIM_CANADA_175.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_JABUTICABEIRAS_176.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_IRINEU_ZANETTI_II_177.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_GRAMADOS_II_178.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_GRAMADOS_179.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_GAIA_180.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_FRUTUOSO_181.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_FAGGIONI_182.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_ESSENZA_183.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_ESSENCE_184.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_DOMINGOS_JARDINI_185.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_CINTRA_ALVES_186.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_CIDADE_JARDIM_187.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_BOA_VISTA_188.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_ANA_HELENA_189.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESIDENCIAL_ALTO_DA_FAZENDA_190.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_RESERVA_ABAETE_191.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'Range', 'AREA_%': 'Range', });
lyr_RECANTO_MENEGHETTI_192.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_QUADRA_18_VILA_EXPOSICAO_193.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_PROLONGAMENTO_SAMEL_PARK_194.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_PARQUE_VILLA_LOBOS_195.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_PARQUE_PALMEIRA_IMPERIAL_196.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_PARQUE_MORADA_DA_MATA_197.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': '', 'AREA_%': '', });
lyr_PARQUE_JACARANDA_198.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_PARQUE_FLORA_199.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_PARQUE_DOS_SABIAS_200.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': '', 'AREA_%': '', });
lyr_PARQUE_DOS_COQUEIROS_201.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_PARQUE_ALVORADA_202.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_PARAGON_FASE_II_203.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_PARAGON_204.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_PALMEIRA_REAL_205.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': '', 'AREA_%': '', });
lyr_MORADA_DO_VERDE_II_206.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': '', 'AREA_%': '', });
lyr_MONTIE_207.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_MONT_BLANC_RESIDENCE_208.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_MASTERPLAN_BILD_VITTA_209.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_JARDIM_STEPHANI_210.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_JARDIM_PHEROLA_211.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_JARDIM_NATAL_212.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_JARDIM_MARIA_LUIZA_213.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_JARDIM_MARIA_AUGUSTA_214.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_JARDIM_HORIZONTE_215.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_JARDIM_FLORA_216.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_JARDIM_COLORADO_217.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_JARDIM_ARIZONA_218.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': '', 'AREA_%': '', });
lyr_INFRATECNICA_219.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_HORIZ_RESIDENCE_220.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_GLEBA_NOSSA_SENHORA_AUXILIADORA_221.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_FRANCA_B6_222.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_FERRACINI_223.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_FAZENDA_PROGRESSO_224.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_FAZENDA_E_GRANJA_SANTA_RITA_II_225.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': '', 'AREA_%': '', });
lyr_FAZENDA_E_GRANJA_SANTA_RITA_I_226.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': '', 'AREA_%': '', });
lyr_ELIAS_227.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_EDIFICIO_SOL_NASCENTE_228.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_EDIFICIO_RUA_DO_SOL_229.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_EDIFICIO_RESIDENCIAL_HOPE_230.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_DIOCESE_DE_FRANCA_231.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_DA_VINCI_232.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_COMDOMINIO_II_CITY_PETROPOLIS_233.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_COMDOMINIO_I_CITY_PETROPOLIS_234.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_CHACARA_OLARIA_235.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_CHACARA_BELA_VISTA_236.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': '', 'AREA_%': '', });
lyr_BORDA_DA_MATA_237.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_ARTERIS_238.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_ALAMO_239.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_ABU_DHABI_240.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_%': 'TextEdit', });
lyr_SERVIDAO_GUANABARA_241.set('fieldImages', {'fid': '', 'CADASTRO_IMOBILIARIO': '', 'ETAPA': '', 'DECRETO': '', 'TIPOLOGIA': '', 'MATRICULA': '', 'PROCESSO': '', 'PROPRIETARIOS': '', 'NOME_DO_EMPREENDIMENTO': '', 'ZONEAMENTO': '', 'AREA_VERDE_M2': '', 'AREA_INSTITUCIONAL_M2': '', 'AREA_LAZER_M2': '', 'LOTES_M2': '', 'UNIDADES_LOTES': '', 'UNIDADES_LOTES_MISTOS': '', 'UNIDADES_LOTES_RESIDENCIAIS': '', 'UNIDADES_LOTES_COMERCIAIS': '', });
lyr_RUA_ALFIO_BENEDINI_242.set('fieldImages', {'fid': '', 'CADASTRO_IMOBILIARIO': '', 'ETAPA': '', 'DECRETO': '', 'TIPOLOGIA': '', 'MATRICULA': '', 'PROCESSO': '', 'PROPRIETARIOS': '', 'NOME_DO_EMPREENDIMENTO': '', 'ZONEAMENTO': '', 'AREA_VERDE_M2': '', 'AREA_INSTITUCIONAL_M2': '', 'AREA_LAZER_M2': '', 'LOTES_M2': '', 'UNIDADES_LOTES': '', 'UNIDADES_LOTES_MISTOS': '', 'UNIDADES_LOTES_RESIDENCIAIS': '', 'UNIDADES_LOTES_COMERCIAIS': '', });
lyr_QUADRA_18_VILA_EXPOSICAO_243.set('fieldImages', {'fid': '', 'CADASTRO_IMOBILIARIO': '', 'ETAPA': '', 'DECRETO': '', 'TIPOLOGIA': '', 'MATRICULA': '', 'PROCESSO': '', 'PROPRIETARIOS': '', 'NOME_DO_EMPREENDIMENTO': '', 'ZONEAMENTO': '', 'AREA_VERDE_M2': '', 'AREA_INSTITUCIONAL_M2': '', 'AREA_LAZER_M2': '', 'LOTES_M2': '', 'UNIDADES_LOTES': '', 'UNIDADES_LOTES_MISTOS': '', 'UNIDADES_LOTES_RESIDENCIAIS': '', 'UNIDADES_LOTES_COMERCIAIS': '', });
lyr_ETAPA_PREVIA_244.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': '', 'ETAPA': '', 'DECRETO': '', 'TIPOLOGIA': '', 'MATRICULA': '', 'PROCESSO': '', 'PROPRIETARIOS': '', 'NOME_DO_EMPREENDIMENTO': '', 'ZONEAMENTO': '', 'AREA_VERDE_M2': '', 'AREA_INSTITUCIONAL_M2': '', 'AREA_LAZER_M2': '', 'LOTES_M2': '', 'UNIDADES_LOTES': '', 'UNIDADES_LOTES_MISTOS': '', 'UNIDADES_LOTES_RESIDENCIAIS': '', 'UNIDADES_LOTES_COMERCIAIS': '', });
lyr_ETAPA_DIRETRIZ_245.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': '', 'ETAPA': '', 'DECRETO': '', 'TIPOLOGIA': '', 'MATRICULA': '', 'PROCESSO': '', 'PROPRIETARIOS': '', 'NOME_DO_EMPREENDIMENTO': '', 'ZONEAMENTO': '', 'AREA_VERDE_M2': '', 'AREA_INSTITUCIONAL_M2': '', 'AREA_LAZER_M2': '', 'LOTES_M2': '', 'UNIDADES_LOTES': '', 'UNIDADES_LOTES_MISTOS': '', 'UNIDADES_LOTES_RESIDENCIAIS': '', 'UNIDADES_LOTES_COMERCIAIS': '', });
lyr_ETAPA_DEFINITIVA_246.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': '', 'ETAPA': '', 'DECRETO': '', 'TIPOLOGIA': '', 'MATRICULA': '', 'PROCESSO': '', 'PROPRIETARIOS': '', 'NOME_DO_EMPREENDIMENTO': '', 'ZONEAMENTO': '', 'AREA_VERDE_M2': '', 'AREA_INSTITUCIONAL_M2': '', 'AREA_LAZER_M2': '', 'LOTES_M2': '', 'UNIDADES_LOTES': '', 'UNIDADES_LOTES_MISTOS': '', 'UNIDADES_LOTES_RESIDENCIAIS': '', 'UNIDADES_LOTES_COMERCIAIS': '', });
lyr_ETAPA_APROVADO_247.set('fieldImages', {'fid': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'ETAPA': 'TextEdit', 'DECRETO': 'TextEdit', 'TIPOLOGIA': 'TextEdit', 'MATRICULA': 'TextEdit', 'PROCESSO': 'TextEdit', 'PROPRIETARIOS': 'TextEdit', 'NOME_DO_EMPREENDIMENTO': 'TextEdit', 'ZONEAMENTO': 'TextEdit', 'AREA_VERDE_M2': 'TextEdit', 'AREA_INSTITUCIONAL_M2': 'TextEdit', 'AREA_LAZER_M2': 'TextEdit', 'LOTES_M2': 'TextEdit', 'UNIDADES_LOTES': 'TextEdit', 'UNIDADES_LOTES_MISTOS': 'TextEdit', 'UNIDADES_LOTES_RESIDENCIAIS': 'TextEdit', 'UNIDADES_LOTES_COMERCIAIS': 'TextEdit', });
lyr_ARTERIS_248.set('fieldImages', {'fid': '', 'CADASTRO_IMOBILIARIO': '', 'ETAPA': '', 'DECRETO': '', 'TIPOLOGIA': '', 'MATRICULA': '', 'PROCESSO': '', 'PROPRIETARIOS': '', 'NOME_DO_EMPREENDIMENTO': '', 'ZONEAMENTO': '', 'AREA_VERDE_M2': '', 'AREA_INSTITUCIONAL_M2': '', 'AREA_LAZER_M2': '', 'LOTES_M2': '', 'UNIDADES_LOTES': '', 'UNIDADES_LOTES_MISTOS': '', 'UNIDADES_LOTES_RESIDENCIAIS': '', 'UNIDADES_LOTES_COMERCIAIS': '', });
lyr_IRREGULAR_249.set('fieldImages', {'fid': 'TextEdit', 'PROCESSO': 'TextEdit', 'MODALIDADE': 'TextEdit', 'NOME_LOTEAMENTO': 'TextEdit', 'OBSERVACAO': 'TextEdit', 'MATRICULA': 'TextEdit', 'QUANT_LOTES': 'Range', 'AREA_M2': 'TextEdit', 'DECRETO_REURB': 'TextEdit', 'SITUACAO': 'TextEdit', });
lyr_IRREGULAR174UNID_250.set('fieldImages', {'fid': 'TextEdit', 'PROCESSO': 'TextEdit', 'MODALIDADE': 'TextEdit', 'NOME_LOTEAMENTO': 'TextEdit', 'OBSERVACAO': 'TextEdit', 'MATRICULA': 'TextEdit', 'QUANT_LOTES': 'Range', 'AREA_M2': 'TextEdit', 'DECRETO_REURB': 'TextEdit', 'SITUACAO': 'TextEdit', });
lyr_FBDS_RIOS_DUPLOS_251.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_FBDS_MASSAS_DAGUA_252.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_FBDS_APP_253.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_FBDS_NASCENTES_254.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_FBDS_RIOS_SIMPLES_255.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_CORPO_HIDRICO_CANAL_FECHADO088KM_256.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_CORPO_HIDRICO_CANAL_ABERTO1252KM_257.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_PARQUE_ZUMBI_DOS_PALMARES_258.set('fieldImages', {'fid': '', 'NOME': '', 'AREA_M2': '', });
lyr_ATERRO_DAS_MARITACAS_259.set('fieldImages', {'fid': '', 'NOME': '', 'AREA_M2': '', });
lyr_ATERRO_DAS_MARITACAS_ETAPA_3_260.set('fieldImages', {'fid': 'TextEdit', 'ID_POCO': 'TextEdit', 'TIPO_POCO': '', 'SITUACAO': '', 'EMPRESA': '', 'ANO': '', 'LOCAL': '', });
lyr_ATERRO_DAS_MARITACAS_ETAPA_2_261.set('fieldImages', {'fid': 'TextEdit', 'ID_POCO': '', 'TIPO_POCO': '', 'SITUACAO': '', 'EMPRESA': '', 'ANO': '', 'LOCAL': '', });
lyr_ATERRO_DAS_MARITACAS_ETAPA_1_262.set('fieldImages', {'fid': 'TextEdit', 'ID_POCO': '', 'TIPO_POCO': '', 'SITUACAO': '', 'EMPRESA': '', 'ANO': '', 'LOCAL': '', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_263.set('fieldImages', {'fid': '', 'NOME': '', 'AREA_M2': '', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_264.set('fieldImages', {'fid': 'TextEdit', 'ID_POCO': 'TextEdit', 'TIPO_POCO': 'TextEdit', 'SITUACAO': '', 'EMPRESA': '', 'ANO': '', 'LOCAL': '', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_265.set('fieldImages', {'fid': 'TextEdit', 'ID_POCO': 'TextEdit', 'TIPO_POCO': 'TextEdit', 'SITUACAO': '', 'EMPRESA': '', 'ANO': '', 'LOCAL': '', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_266.set('fieldImages', {'fid': 'TextEdit', 'ID_POCO': 'TextEdit', 'TIPO_POCO': 'TextEdit', 'SITUACAO': '', 'EMPRESA': '', 'ANO': '', 'LOCAL': '', });
lyr_AREA_B_DA_FAZENDA_MUNICIPAL_267.set('fieldImages', {'fid': '', 'NOME': '', 'AREA_M2': '', });
lyr_AREA_B_DA_FAZENDA_MUNICIPAL_268.set('fieldImages', {'fid': 'TextEdit', 'ID_POCO': '', 'TIPO_POCO': '', 'SITUACAO': '', 'EMPRESA': '', 'ANO': '', 'LOCAL': '', });
lyr_PARTE_DA_AREA_G_AVERBADA_269.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_PARTE_DA_AREA_G_A_SER_AVERBADA_270.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_CONJUNTO_HABITACIONAL_271.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AV_ACESSO_COLEGIO_AGRICOLA_272.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_N2_273.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_N1_274.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_N_275.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_K_276.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_J_277.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_I_278.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_H_279.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_G_280.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_F_281.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_E_282.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_D_283.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_C_284.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_B_285.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_AREA_A_286.set('fieldImages', {'fid': '', 'GLEBA': '', 'MATRICULA': '', 'AREA_M2': '', });
lyr_PROPOSTO_287.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'BAIRRO': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', 'STATUS': '', });
lyr_EM_FUNCIONAMENTO_288.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'BAIRRO': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', 'STATUS': '', });
lyr_EM_CONSTRUCAO_289.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'BAIRRO': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', 'STATUS': '', });
lyr_DrenagensExistentes_290.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DRENAGEM_VILLAGIO_DI_FIRENZE_291.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_VILLA_SANTA_GIANNA_292.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_VILA_TOTOLI_293.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_VILA_REAL_294.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_VILA_DORATTA_295.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_SAO_PEDRO_II_296.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_SANTA_FE_297.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_TELLINI_298.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_SANTA_INES_301.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_PALERMO_305.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_ITAPUA_306.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_GAIA_307.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_FERRACINI_308.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_FAGGIONI_309.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_ECOSTILO_310.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_DOURADO_311.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_BALDASSARI_312.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_313.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RECREIO_CAMPO_BELO_315.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RECANTO_MENEGHETTI_316.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_317.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PROL_VILA_ISABEL_318.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PROL_JARDIM_MARTINS_319.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_UNIVERSITARIO_321.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_SANTA_ADELIA_322.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_MOEMA_323.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_JOAO_LEITE_324.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_DOS_SABIAS_325.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_326.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_DAS_ARVORES_327.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_CASTELO_328.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_BOA_VISTA_329.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_330.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARAGON_331.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_NAIR_RETUSSI_I_332.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_SAO_GABRIEL_333.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_SANTA_LUCIA_334.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_PULICANO_335.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_PORTINARI_336.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_PIRATININGA_337.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_PALMA_338.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_339.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_NOEMIA_340.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_NATAL_341.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_MARTINS_342.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_MARIA_LUIZA_343.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_LIBANO_344.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_IPANEMA_345.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_BUENO_346.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_BOTANICO_347.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_BARAO_348.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_AVIACAO_349.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_ARIZONA_II_350.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_ARIZONA_I_351.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_AEROPORTO_II_352.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_GRAMADOS_I_353.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_FRANCA_POLO_CLUBE_354.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_DOMINGOS_JARDINI_355.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_DINFRA_II_356.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_ATLANTA_PARK_357.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_ANA_DOROTHEA_358.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_REGIAO_SUL_359.set('fieldImages', {'fid': '', 'AREA_M2': '', 'REGIAO': '', });
lyr_REGIAO_OESTE_360.set('fieldImages', {'fid': '', 'AREA_M2': '', 'REGIAO': '', });
lyr_REGIAO_NORTE_361.set('fieldImages', {'fid': '', 'AREA_M2': '', 'REGIAO': '', });
lyr_REGIAO_LESTE_362.set('fieldImages', {'fid': '', 'AREA_M2': '', 'REGIAO': '', });
lyr_BAIRROS_363.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', 'AREA_M2': 'TextEdit', 'REGIAO': 'TextEdit', 'REGIAO_ARRASTAO_LIMPEZA': 'TextEdit', });
lyr_VOCOROCAS27UNID_364.set('fieldImages', {'fid': 'TextEdit', 'SITUACAO': 'TextEdit', 'REFERENCIA': 'TextEdit', 'PRIORIDADE': 'TextEdit', 'OBSERVACAO': 'TextEdit', });
lyr_LOCAIS_DE_DIFICIL_ACESSO12UNID_365.set('fieldImages', {'fid': 'TextEdit', 'LOCAL': 'TextEdit', });
lyr_CONTEINERES286UNID_366.set('fieldImages', {'fid': 'TextEdit', 'DESCRICAO': 'TextEdit', 'BAIRRO': 'TextEdit', });
lyr_ARVORES_IMUNE_AO_CORTE9UNID_367.set('fieldImages', {'fid': 'TextEdit', 'NOME_POPULAR': 'TextEdit', 'NOME_CIENTIFICO': 'TextEdit', 'LEGISLACAO': 'TextEdit', });
lyr_ACADEMIAS_AO_AR_LIVRE84UNID_368.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', 'LOCAL': 'TextEdit', 'BAIRRO': 'TextEdit', });
lyr_SERVICO_DE_SAUDE21UNID_369.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_RECICLAVEIS15UNID_370.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_PNEUS1UNID_371.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_PILHAS_E_BATERIAS17UNID_372.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_PERIGOSOS1UNID_373.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_OLEO_LUBRIFICANTE1UNID_374.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_OLEO_DE_COZINHA3UNID_375.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_MASSA_VERDE1UNID_376.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_MADEIRAS1UNID_377.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_LATAS_DE_TINTA2UNID_378.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_LAMPADAS4UNID_379.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_INSERVIVEIS4UNID_380.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_GESSO1UNID_381.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_EMBALAGENS_AGROTOXICO1UNID_382.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_ELETRONICOS3UNID_383.set('fieldImages', {'fid': '', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_COURO1UNID_384.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_CONSTRUCAO_CIVIL7UNID_385.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_CHAPAS_DE_RAIO_X1UNID_386.set('fieldImages', {'fid': 'TextEdit', 'CATEGORIA': '', 'LOCAL': '', 'DESCRICAO': '', 'ENDERECO': '', 'CONTATO': '', });
lyr_PROTECAO_AERODROMO_387.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', });
lyr_HELIPONTO_HOSPITAL_REGIONAL_388.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', });
lyr_HELIPONTO_EDIFICIO_PRIME_389.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', });
lyr_HELIPONTO_EDIFICIO_PRIME_390.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', });
lyr_CLASSE_VB_391.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_VA_392.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IVC_393.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IVB_394.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IVA_395.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IIIC_396.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IIIB_397.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IIIA_398.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_II_399.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_I_400.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_LOTEAMENTO_FECHADO146UNID70632440M_401.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_LOTE_EMDEF10UNID218783M_402.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_LOTE_EMDEF_403.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'DESCRICAO': '', 'DATA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', 'SUBCLASSE': '', });
lyr_LOTE_COM_EDIFICACAO20UNID508062M_404.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_LOTE_COM_EDIFICACAO_405.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'DESCRICAO': '', 'DATA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', 'SUBCLASSE': '', });
lyr_LOTE252UNID7530210M_406.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_LOTE_407.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'DESCRICAO': '', 'DATA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', 'SUBCLASSE': '', });
lyr_LEILAO_PROCESSO_7954202537196UNID3239123M_408.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_LEILAO_PROCESSO_7954202537_409.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'DESCRICAO': '', 'DATA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', 'SUBCLASSE': '', });
lyr_LEILAO_PROCESSO_2652520256922UNID352000M_410.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_LEILAO_PROCESSO_26525202569_411.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'DESCRICAO': '', 'DATA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', 'SUBCLASSE': '', });
lyr_LEILAO_PROCESSO_2198620254518UNID2092083M_412.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_LEILAO_PROCESSO_21986202545_413.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'DESCRICAO': '', 'DATA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', 'SUBCLASSE': '', });
lyr_LEILAO_HOMOLOGADO4UNID334770M_414.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_LEILAO_HOMOLOGADO_415.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'DESCRICAO': '', 'DATA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', 'SUBCLASSE': '', });
lyr_AREA_VERDE2013UNID836044252M_416.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_AREA_PATRIMONIAL69UNID121924073M_417.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_AREA_INSTITUCIONAL354UNID202812033M_418.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_AREA_DE_USO_ESPECIAL280UNID271349968M_419.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'BAIRRO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'DESCRICAO': 'TextEdit', 'AREA_M2': 'TextEdit', 'DATA_INCLUSAO': 'DateTime', 'STATUS': 'TextEdit', 'PROCESSO': 'TextEdit', });
lyr_APP148UNID220260340M_420.set('fieldImages', {'fid': '', 'CLASSE': '', 'BAIRRO': '', 'CADASTRO_IMOBILIARIO': '', 'SUBCLASSE': '', 'DESCRICAO': '', 'AREA_M2': '', 'DADA_INCLUSAO': '', 'STATUS': '', 'PROCESSO': '', });
lyr_TRPRL_CETESB_421.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TRPRL_CETESB_422.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TCRA_MUNICIPAL_423.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TCRA_MUNICIPAL_424.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TCRA_CETESB_PARCELAMENTO_425.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TCRA_CETESB_PARCELAMENTO_426.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TCRA_CETESB_427.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TCRA_CETESB_428.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TAC_MP_429.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_TAC_MP_430.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_PLANTIO_VOLUNTARIO_431.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_PLANTIO_VOLUNTARIO_432.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_ANUENCIA_433.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_ANUENCIA_434.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_AIIPA_CETESB_435.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_AIIPA_CETESB_436.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_ACAO_CIVIL_PUBLICA_437.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_ACAO_CIVIL_PUBLICA_438.set('fieldImages', {'fid': '', 'COMPROMISSO': '', 'AREA_M2': '', 'QUANTIDADE': '', 'PROCESSO_MUNICIPAL': '', 'DOCUMENTO': '', 'IC': '', 'PROCESSO_CETESB': '', 'SITUACAO': '', 'AUTORIZACAO': '', 'MATRICULA': '', 'DESCRICAO': '', });
lyr_PROG_ADOTE_UMA_PRACA_439.set('fieldImages', {'fid': 'TextEdit', 'ADOTANTE': 'TextEdit', 'LOCAL': 'TextEdit', 'POSSUI_PLACA': 'TextEdit', 'DATA_CONTRATO': 'DateTime', 'BAIRRO': 'TextEdit', 'AREA_M2': 'TextEdit', 'RESPONSAVEL': 'TextEdit', });
lyr_RESPONSAVEL_EGNALDO211UNID20447664M_440.set('fieldImages', {'fid': 'TextEdit', 'ADOTANTE': 'TextEdit', 'LOCAL': 'TextEdit', 'POSSUI_PLACA': 'TextEdit', 'AREA_M2': 'TextEdit', 'RESPONSAVEL': 'TextEdit', 'DATA_CONTRATO': 'DateTime', 'BAIRRO': 'TextEdit', });
lyr_RESPONSAVEL_DILU164UNID16715010M_441.set('fieldImages', {'fid': 'TextEdit', 'ADOTANTE': 'TextEdit', 'LOCAL': 'TextEdit', 'POSSUI_PLACA': 'TextEdit', 'AREA_M2': 'TextEdit', 'RESPONSAVEL': 'TextEdit', 'DATA_CONTRATO': 'DateTime', 'BAIRRO': 'TextEdit', });
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
lyr_VIVENNA_135.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_VITTA_SAO_VICENTE_136.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_VITTA_JARDIM_SIMOES_137.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_VITTA_ALVORADA_138.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_VILLA_PUCCI_139.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_VILLA_DORATTA_140.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_VILLA_BELLA_141.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_VILA_PIEMONTE_II_142.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_VILA_OLIMPICA_143.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_VILA_DI_ESPANHA_144.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_VERSALHES_145.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_TORONTO_RESIDENCE_146.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_TERRA_NOVA_147.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_SONETTO_148.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_SMART_CITY_EIXO_RESIDENCIAL_II_149.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_SMART_CITY_EIXO_RESIDENCIAL_I_150.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_SMART_CITY_EIXO_EMPRESARIAL_151.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_SERVIDAO_GUANABARA_152.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_SANTA_LINA_153.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_SANT_ANITA_154.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RUA_ALFIO_BENEDINI_155.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_RESIDENCIAL_YASMIN_TORRES_156.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_VALE_VERDE_157.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_TELLINI_158.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_SAO_CARLOS_II_159.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_SAO_CARLOS_I_160.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_SANTA_INES_161.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_SANTA_FE_162.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_QUINTA_DOS_OITIS_163.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_QUINTA_DO_SOL_164.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_POUSO_ALEGRE_II_165.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_POUSO_ALEGRE_166.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_PIAMALIM_167.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_PARQUE_DOS_PASSAROS_168.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_NAIR_RETUCI_II_169.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_NAIR_RETUCI_170.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_MORADA_DO_BOSQUE_171.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_MARTHA_HELENA_172.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_MARIO_TASSO_173.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_MARIANA_ALARCON_174.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_JARDIM_CANADA_175.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_JABUTICABEIRAS_176.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_IRINEU_ZANETTI_II_177.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_GRAMADOS_II_178.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_GRAMADOS_179.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_GAIA_180.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_FRUTUOSO_181.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_FAGGIONI_182.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_ESSENZA_183.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_ESSENCE_184.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_DOMINGOS_JARDINI_185.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_CINTRA_ALVES_186.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_CIDADE_JARDIM_187.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_BOA_VISTA_188.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_ANA_HELENA_189.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RESIDENCIAL_ALTO_DA_FAZENDA_190.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - always visible', });
lyr_RESERVA_ABAETE_191.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_RECANTO_MENEGHETTI_192.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_QUADRA_18_VILA_EXPOSICAO_193.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_PROLONGAMENTO_SAMEL_PARK_194.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_PARQUE_VILLA_LOBOS_195.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_PARQUE_PALMEIRA_IMPERIAL_196.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_PARQUE_MORADA_DA_MATA_197.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_PARQUE_JACARANDA_198.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_PARQUE_FLORA_199.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_PARQUE_DOS_SABIAS_200.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_PARQUE_DOS_COQUEIROS_201.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_PARQUE_ALVORADA_202.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_PARAGON_FASE_II_203.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_PARAGON_204.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_PALMEIRA_REAL_205.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_MORADA_DO_VERDE_II_206.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_MONTIE_207.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_MONT_BLANC_RESIDENCE_208.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_MASTERPLAN_BILD_VITTA_209.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_JARDIM_STEPHANI_210.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_JARDIM_PHEROLA_211.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_JARDIM_NATAL_212.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_JARDIM_MARIA_LUIZA_213.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_JARDIM_MARIA_AUGUSTA_214.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_JARDIM_HORIZONTE_215.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_JARDIM_FLORA_216.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_JARDIM_COLORADO_217.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_JARDIM_ARIZONA_218.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_INFRATECNICA_219.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_HORIZ_RESIDENCE_220.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_GLEBA_NOSSA_SENHORA_AUXILIADORA_221.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_FRANCA_B6_222.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_FERRACINI_223.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_FAZENDA_PROGRESSO_224.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_FAZENDA_E_GRANJA_SANTA_RITA_II_225.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_FAZENDA_E_GRANJA_SANTA_RITA_I_226.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_ELIAS_227.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_EDIFICIO_SOL_NASCENTE_228.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_EDIFICIO_RUA_DO_SOL_229.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_EDIFICIO_RESIDENCIAL_HOPE_230.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_DIOCESE_DE_FRANCA_231.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_DA_VINCI_232.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_COMDOMINIO_II_CITY_PETROPOLIS_233.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_COMDOMINIO_I_CITY_PETROPOLIS_234.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_CHACARA_OLARIA_235.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_CHACARA_BELA_VISTA_236.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_BORDA_DA_MATA_237.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_ARTERIS_238.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_ALAMO_239.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_ABU_DHABI_240.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'AREA_%': 'inline label - visible with data', });
lyr_SERVIDAO_GUANABARA_241.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'DECRETO': 'inline label - visible with data', 'TIPOLOGIA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'PROPRIETARIOS': 'inline label - visible with data', 'NOME_DO_EMPREENDIMENTO': 'inline label - visible with data', 'ZONEAMENTO': 'inline label - visible with data', 'AREA_VERDE_M2': 'inline label - visible with data', 'AREA_INSTITUCIONAL_M2': 'inline label - visible with data', 'AREA_LAZER_M2': 'inline label - visible with data', 'LOTES_M2': 'inline label - visible with data', 'UNIDADES_LOTES': 'inline label - visible with data', 'UNIDADES_LOTES_MISTOS': 'inline label - visible with data', 'UNIDADES_LOTES_RESIDENCIAIS': 'inline label - visible with data', 'UNIDADES_LOTES_COMERCIAIS': 'inline label - visible with data', });
lyr_RUA_ALFIO_BENEDINI_242.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'DECRETO': 'inline label - visible with data', 'TIPOLOGIA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'PROPRIETARIOS': 'inline label - visible with data', 'NOME_DO_EMPREENDIMENTO': 'inline label - visible with data', 'ZONEAMENTO': 'inline label - visible with data', 'AREA_VERDE_M2': 'inline label - visible with data', 'AREA_INSTITUCIONAL_M2': 'inline label - visible with data', 'AREA_LAZER_M2': 'inline label - visible with data', 'LOTES_M2': 'inline label - visible with data', 'UNIDADES_LOTES': 'inline label - visible with data', 'UNIDADES_LOTES_MISTOS': 'inline label - visible with data', 'UNIDADES_LOTES_RESIDENCIAIS': 'inline label - visible with data', 'UNIDADES_LOTES_COMERCIAIS': 'inline label - visible with data', });
lyr_QUADRA_18_VILA_EXPOSICAO_243.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'DECRETO': 'inline label - visible with data', 'TIPOLOGIA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'PROPRIETARIOS': 'inline label - visible with data', 'NOME_DO_EMPREENDIMENTO': 'inline label - visible with data', 'ZONEAMENTO': 'inline label - visible with data', 'AREA_VERDE_M2': 'inline label - visible with data', 'AREA_INSTITUCIONAL_M2': 'inline label - visible with data', 'AREA_LAZER_M2': 'inline label - visible with data', 'LOTES_M2': 'inline label - visible with data', 'UNIDADES_LOTES': 'inline label - visible with data', 'UNIDADES_LOTES_MISTOS': 'inline label - visible with data', 'UNIDADES_LOTES_RESIDENCIAIS': 'inline label - visible with data', 'UNIDADES_LOTES_COMERCIAIS': 'inline label - visible with data', });
lyr_ETAPA_PREVIA_244.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'DECRETO': 'inline label - visible with data', 'TIPOLOGIA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'PROPRIETARIOS': 'inline label - visible with data', 'NOME_DO_EMPREENDIMENTO': 'inline label - visible with data', 'ZONEAMENTO': 'inline label - visible with data', 'AREA_VERDE_M2': 'inline label - visible with data', 'AREA_INSTITUCIONAL_M2': 'inline label - visible with data', 'AREA_LAZER_M2': 'inline label - visible with data', 'LOTES_M2': 'inline label - visible with data', 'UNIDADES_LOTES': 'inline label - visible with data', 'UNIDADES_LOTES_MISTOS': 'inline label - visible with data', 'UNIDADES_LOTES_RESIDENCIAIS': 'inline label - visible with data', 'UNIDADES_LOTES_COMERCIAIS': 'inline label - visible with data', });
lyr_ETAPA_DIRETRIZ_245.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'DECRETO': 'inline label - visible with data', 'TIPOLOGIA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'PROPRIETARIOS': 'inline label - visible with data', 'NOME_DO_EMPREENDIMENTO': 'inline label - visible with data', 'ZONEAMENTO': 'inline label - visible with data', 'AREA_VERDE_M2': 'inline label - visible with data', 'AREA_INSTITUCIONAL_M2': 'inline label - visible with data', 'AREA_LAZER_M2': 'inline label - visible with data', 'LOTES_M2': 'inline label - visible with data', 'UNIDADES_LOTES': 'inline label - visible with data', 'UNIDADES_LOTES_MISTOS': 'inline label - visible with data', 'UNIDADES_LOTES_RESIDENCIAIS': 'inline label - visible with data', 'UNIDADES_LOTES_COMERCIAIS': 'inline label - visible with data', });
lyr_ETAPA_DEFINITIVA_246.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'DECRETO': 'inline label - visible with data', 'TIPOLOGIA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'PROPRIETARIOS': 'inline label - visible with data', 'NOME_DO_EMPREENDIMENTO': 'inline label - visible with data', 'ZONEAMENTO': 'inline label - visible with data', 'AREA_VERDE_M2': 'inline label - visible with data', 'AREA_INSTITUCIONAL_M2': 'inline label - visible with data', 'AREA_LAZER_M2': 'inline label - visible with data', 'LOTES_M2': 'inline label - visible with data', 'UNIDADES_LOTES': 'inline label - visible with data', 'UNIDADES_LOTES_MISTOS': 'inline label - visible with data', 'UNIDADES_LOTES_RESIDENCIAIS': 'inline label - visible with data', 'UNIDADES_LOTES_COMERCIAIS': 'inline label - visible with data', });
lyr_ETAPA_APROVADO_247.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'DECRETO': 'inline label - visible with data', 'TIPOLOGIA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'PROPRIETARIOS': 'inline label - visible with data', 'NOME_DO_EMPREENDIMENTO': 'inline label - visible with data', 'ZONEAMENTO': 'inline label - visible with data', 'AREA_VERDE_M2': 'inline label - visible with data', 'AREA_INSTITUCIONAL_M2': 'inline label - visible with data', 'AREA_LAZER_M2': 'inline label - visible with data', 'LOTES_M2': 'inline label - visible with data', 'UNIDADES_LOTES': 'inline label - visible with data', 'UNIDADES_LOTES_MISTOS': 'inline label - visible with data', 'UNIDADES_LOTES_RESIDENCIAIS': 'inline label - visible with data', 'UNIDADES_LOTES_COMERCIAIS': 'inline label - visible with data', });
lyr_ARTERIS_248.set('fieldLabels', {'fid': 'hidden field', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'DECRETO': 'inline label - visible with data', 'TIPOLOGIA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'PROPRIETARIOS': 'inline label - visible with data', 'NOME_DO_EMPREENDIMENTO': 'inline label - visible with data', 'ZONEAMENTO': 'inline label - visible with data', 'AREA_VERDE_M2': 'inline label - visible with data', 'AREA_INSTITUCIONAL_M2': 'inline label - visible with data', 'AREA_LAZER_M2': 'inline label - visible with data', 'LOTES_M2': 'inline label - visible with data', 'UNIDADES_LOTES': 'inline label - visible with data', 'UNIDADES_LOTES_MISTOS': 'inline label - visible with data', 'UNIDADES_LOTES_RESIDENCIAIS': 'inline label - visible with data', 'UNIDADES_LOTES_COMERCIAIS': 'inline label - visible with data', });
lyr_IRREGULAR_249.set('fieldLabels', {'fid': 'hidden field', 'PROCESSO': 'inline label - visible with data', 'MODALIDADE': 'inline label - visible with data', 'NOME_LOTEAMENTO': 'inline label - visible with data', 'OBSERVACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'QUANT_LOTES': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DECRETO_REURB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', });
lyr_IRREGULAR174UNID_250.set('fieldLabels', {'fid': 'hidden field', 'PROCESSO': 'inline label - visible with data', 'MODALIDADE': 'inline label - visible with data', 'NOME_LOTEAMENTO': 'inline label - visible with data', 'OBSERVACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'QUANT_LOTES': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DECRETO_REURB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', });
lyr_FBDS_RIOS_DUPLOS_251.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_FBDS_MASSAS_DAGUA_252.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_FBDS_APP_253.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - always visible', });
lyr_FBDS_NASCENTES_254.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_FBDS_RIOS_SIMPLES_255.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_CORPO_HIDRICO_CANAL_FECHADO088KM_256.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_CORPO_HIDRICO_CANAL_ABERTO1252KM_257.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_PARQUE_ZUMBI_DOS_PALMARES_258.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_ATERRO_DAS_MARITACAS_259.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_ATERRO_DAS_MARITACAS_ETAPA_3_260.set('fieldLabels', {'fid': 'hidden field', 'ID_POCO': 'inline label - visible with data', 'TIPO_POCO': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'EMPRESA': 'inline label - visible with data', 'ANO': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', });
lyr_ATERRO_DAS_MARITACAS_ETAPA_2_261.set('fieldLabels', {'fid': 'hidden field', 'ID_POCO': 'inline label - visible with data', 'TIPO_POCO': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'EMPRESA': 'inline label - visible with data', 'ANO': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', });
lyr_ATERRO_DAS_MARITACAS_ETAPA_1_262.set('fieldLabels', {'fid': 'hidden field', 'ID_POCO': 'inline label - visible with data', 'TIPO_POCO': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'EMPRESA': 'inline label - visible with data', 'ANO': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_263.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_GEO_ANALITICA_264.set('fieldLabels', {'fid': 'hidden field', 'ID_POCO': 'inline label - visible with data', 'TIPO_POCO': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'EMPRESA': 'inline label - visible with data', 'ANO': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_GAS_265.set('fieldLabels', {'fid': 'hidden field', 'ID_POCO': 'inline label - visible with data', 'TIPO_POCO': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'EMPRESA': 'inline label - visible with data', 'ANO': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', });
lyr_ATERRO_DA_FAZENDA_MUNICIPAL_AVATZ_AGUA_266.set('fieldLabels', {'fid': 'hidden field', 'ID_POCO': 'inline label - visible with data', 'TIPO_POCO': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'EMPRESA': 'inline label - visible with data', 'ANO': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', });
lyr_AREA_B_DA_FAZENDA_MUNICIPAL_267.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_B_DA_FAZENDA_MUNICIPAL_268.set('fieldLabels', {'fid': 'hidden field', 'ID_POCO': 'inline label - visible with data', 'TIPO_POCO': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'EMPRESA': 'inline label - visible with data', 'ANO': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', });
lyr_PARTE_DA_AREA_G_AVERBADA_269.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_PARTE_DA_AREA_G_A_SER_AVERBADA_270.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_CONJUNTO_HABITACIONAL_271.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AV_ACESSO_COLEGIO_AGRICOLA_272.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_N2_273.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_N1_274.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_N_275.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_K_276.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_J_277.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_I_278.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_H_279.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_G_280.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_F_281.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_E_282.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_D_283.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_C_284.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_B_285.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_AREA_A_286.set('fieldLabels', {'fid': 'hidden field', 'GLEBA': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', });
lyr_PROPOSTO_287.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', });
lyr_EM_FUNCIONAMENTO_288.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', });
lyr_EM_CONSTRUCAO_289.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', });
lyr_DrenagensExistentes_290.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DRENAGEM_VILLAGIO_DI_FIRENZE_291.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_VILLA_SANTA_GIANNA_292.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_VILA_TOTOLI_293.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_VILA_REAL_294.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_VILA_DORATTA_295.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_SAO_PEDRO_II_296.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_SANTA_FE_297.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_TELLINI_298.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_SAO_TOMAZ_299.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_SAO_JOAO_BATISTA_300.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_SANTA_INES_301.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_QUINTA_DOS_OITIS_302.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_POUSO_ALEGRE_303.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_PARQUE_FLORA_304.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_PALERMO_305.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_ITAPUA_306.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_GAIA_307.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_FERRACINI_308.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_FAGGIONI_309.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_ECOSTILO_310.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_DOURADO_311.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_BALDASSARI_312.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_313.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_ALTO_VILA_APARECIDA_314.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RECREIO_CAMPO_BELO_315.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RECANTO_MENEGHETTI_316.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_317.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PROL_VILA_ISABEL_318.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PROL_JARDIM_MARTINS_319.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_320.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_UNIVERSITARIO_321.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_SANTA_ADELIA_322.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_MOEMA_323.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_JOAO_LEITE_324.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_DOS_SABIAS_325.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_326.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_DAS_ARVORES_327.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_CASTELO_328.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_BOA_VISTA_329.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_330.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARAGON_331.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_NAIR_RETUSSI_I_332.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_SAO_GABRIEL_333.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_SANTA_LUCIA_334.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_PULICANO_335.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_PORTINARI_336.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_PIRATININGA_337.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_PALMA_338.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_339.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_NOEMIA_340.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_NATAL_341.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_MARTINS_342.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_MARIA_LUIZA_343.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_LIBANO_344.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_IPANEMA_345.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_BUENO_346.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_BOTANICO_347.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_BARAO_348.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_AVIACAO_349.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_ARIZONA_II_350.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_ARIZONA_I_351.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_AEROPORTO_II_352.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_GRAMADOS_I_353.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_FRANCA_POLO_CLUBE_354.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_DOMINGOS_JARDINI_355.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_DINFRA_II_356.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_ATLANTA_PARK_357.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_ANA_DOROTHEA_358.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_REGIAO_SUL_359.set('fieldLabels', {'fid': 'hidden field', 'AREA_M2': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', });
lyr_REGIAO_OESTE_360.set('fieldLabels', {'fid': 'hidden field', 'AREA_M2': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', });
lyr_REGIAO_NORTE_361.set('fieldLabels', {'fid': 'hidden field', 'AREA_M2': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', });
lyr_REGIAO_LESTE_362.set('fieldLabels', {'fid': 'hidden field', 'AREA_M2': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', });
lyr_BAIRROS_363.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'REGIAO': 'inline label - visible with data', 'REGIAO_ARRASTAO_LIMPEZA': 'inline label - visible with data', });
lyr_VOCOROCAS27UNID_364.set('fieldLabels', {'fid': 'hidden field', 'SITUACAO': 'inline label - visible with data', 'REFERENCIA': 'inline label - visible with data', 'PRIORIDADE': 'inline label - visible with data', 'OBSERVACAO': 'inline label - visible with data', });
lyr_LOCAIS_DE_DIFICIL_ACESSO12UNID_365.set('fieldLabels', {'fid': 'hidden field', 'LOCAL': 'inline label - visible with data', });
lyr_CONTEINERES286UNID_366.set('fieldLabels', {'fid': 'hidden field', 'DESCRICAO': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', });
lyr_ARVORES_IMUNE_AO_CORTE9UNID_367.set('fieldLabels', {'fid': 'hidden field', 'NOME_POPULAR': 'inline label - visible with data', 'NOME_CIENTIFICO': 'inline label - visible with data', 'LEGISLACAO': 'inline label - visible with data', });
lyr_ACADEMIAS_AO_AR_LIVRE84UNID_368.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', });
lyr_SERVICO_DE_SAUDE21UNID_369.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_RECICLAVEIS15UNID_370.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_PNEUS1UNID_371.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_PILHAS_E_BATERIAS17UNID_372.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_PERIGOSOS1UNID_373.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_OLEO_LUBRIFICANTE1UNID_374.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_OLEO_DE_COZINHA3UNID_375.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_MASSA_VERDE1UNID_376.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_MADEIRAS1UNID_377.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_LATAS_DE_TINTA2UNID_378.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_LAMPADAS4UNID_379.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_INSERVIVEIS4UNID_380.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_GESSO1UNID_381.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_EMBALAGENS_AGROTOXICO1UNID_382.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_ELETRONICOS3UNID_383.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_COURO1UNID_384.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_CONSTRUCAO_CIVIL7UNID_385.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_CHAPAS_DE_RAIO_X1UNID_386.set('fieldLabels', {'fid': 'hidden field', 'CATEGORIA': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CONTATO': 'inline label - visible with data', });
lyr_PROTECAO_AERODROMO_387.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', });
lyr_HELIPONTO_HOSPITAL_REGIONAL_388.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', });
lyr_HELIPONTO_EDIFICIO_PRIME_389.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', });
lyr_HELIPONTO_EDIFICIO_PRIME_390.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', });
lyr_CLASSE_VB_391.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_VA_392.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IVC_393.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IVB_394.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IVA_395.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IIIC_396.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IIIB_397.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IIIA_398.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_II_399.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_I_400.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_LOTEAMENTO_FECHADO146UNID70632440M_401.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_LOTE_EMDEF10UNID218783M_402.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_LOTE_EMDEF_403.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', });
lyr_LOTE_COM_EDIFICACAO20UNID508062M_404.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_LOTE_COM_EDIFICACAO_405.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', });
lyr_LOTE252UNID7530210M_406.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_LOTE_407.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', });
lyr_LEILAO_PROCESSO_7954202537196UNID3239123M_408.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_LEILAO_PROCESSO_7954202537_409.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', });
lyr_LEILAO_PROCESSO_2652520256922UNID352000M_410.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_LEILAO_PROCESSO_26525202569_411.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', });
lyr_LEILAO_PROCESSO_2198620254518UNID2092083M_412.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_LEILAO_PROCESSO_21986202545_413.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', });
lyr_LEILAO_HOMOLOGADO4UNID334770M_414.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_LEILAO_HOMOLOGADO_415.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', });
lyr_AREA_VERDE2013UNID836044252M_416.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_AREA_PATRIMONIAL69UNID121924073M_417.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_AREA_INSTITUCIONAL354UNID202812033M_418.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_AREA_DE_USO_ESPECIAL280UNID271349968M_419.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DATA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_APP148UNID220260340M_420.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'SUBCLASSE': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'DADA_INCLUSAO': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'PROCESSO': 'inline label - visible with data', });
lyr_TRPRL_CETESB_421.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TRPRL_CETESB_422.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TCRA_MUNICIPAL_423.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TCRA_MUNICIPAL_424.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TCRA_CETESB_PARCELAMENTO_425.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TCRA_CETESB_PARCELAMENTO_426.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TCRA_CETESB_427.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TCRA_CETESB_428.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TAC_MP_429.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_TAC_MP_430.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PLANTIO_VOLUNTARIO_431.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PLANTIO_VOLUNTARIO_432.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_ANUENCIA_433.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_ANUENCIA_434.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_AIIPA_CETESB_435.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_AIIPA_CETESB_436.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_ACAO_CIVIL_PUBLICA_437.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_ACAO_CIVIL_PUBLICA_438.set('fieldLabels', {'fid': 'hidden field', 'COMPROMISSO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'QUANTIDADE': 'inline label - visible with data', 'PROCESSO_MUNICIPAL': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'IC': 'inline label - visible with data', 'PROCESSO_CETESB': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'AUTORIZACAO': 'inline label - visible with data', 'MATRICULA': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_PROG_ADOTE_UMA_PRACA_439.set('fieldLabels', {'fid': 'hidden field', 'ADOTANTE': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'POSSUI_PLACA': 'inline label - visible with data', 'DATA_CONTRATO': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'RESPONSAVEL': 'inline label - visible with data', });
lyr_RESPONSAVEL_EGNALDO211UNID20447664M_440.set('fieldLabels', {'fid': 'hidden field', 'ADOTANTE': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'POSSUI_PLACA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'RESPONSAVEL': 'inline label - visible with data', 'DATA_CONTRATO': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', });
lyr_RESPONSAVEL_DILU164UNID16715010M_441.set('fieldLabels', {'fid': 'hidden field', 'ADOTANTE': 'inline label - visible with data', 'LOCAL': 'inline label - visible with data', 'POSSUI_PLACA': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'RESPONSAVEL': 'inline label - visible with data', 'DATA_CONTRATO': 'inline label - visible with data', 'BAIRRO': 'inline label - visible with data', });
lyr_RESPONSAVEL_DILU164UNID16715010M_441.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});